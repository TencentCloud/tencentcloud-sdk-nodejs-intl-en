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
const AddNodeResourceConfigRequest = models.AddNodeResourceConfigRequest;
const DescribeSparkApplicationsResponse = models.DescribeSparkApplicationsResponse;
const ModifyResourceResponse = models.ModifyResourceResponse;
const ZoneSetting = models.ZoneSetting;
const PodSpecInfo = models.PodSpecInfo;
const DescribeHBaseTableOverviewRequest = models.DescribeHBaseTableOverviewRequest;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const UserManagerUserBriefInfo = models.UserManagerUserBriefInfo;
const DescribeClusterFlowStatusDetailResponse = models.DescribeClusterFlowStatusDetailResponse;
const SchedulerTaskInfo = models.SchedulerTaskInfo;
const DynamicPodSpec = models.DynamicPodSpec;
const DescribeHDFSStorageInfoResponse = models.DescribeHDFSStorageInfoResponse;
const ModifyUserManagerPwdResponse = models.ModifyUserManagerPwdResponse;
const DescribeHiveQueriesRequest = models.DescribeHiveQueriesRequest;
const CreateInstanceResponse = models.CreateInstanceResponse;
const PersistentVolumeContext = models.PersistentVolumeContext;
const CreateGroupsSTDResponse = models.CreateGroupsSTDResponse;
const DescribeNodeSpec = models.DescribeNodeSpec;
const Arg = models.Arg;
const HostVolumeContext = models.HostVolumeContext;
const DescribeServiceNodeInfosRequest = models.DescribeServiceNodeInfosRequest;
const DiskSpecInfo = models.DiskSpecInfo;
const HiveQuery = models.HiveQuery;
const FairGlobalConfig = models.FairGlobalConfig;
const NodeSpecFamily = models.NodeSpecFamily;
const KeyValue = models.KeyValue;
const DescribeServiceNodeInfosResponse = models.DescribeServiceNodeInfosResponse;
const EmrProductConfigDetail = models.EmrProductConfigDetail;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeTrinoQueryInfoResponse = models.DescribeTrinoQueryInfoResponse;
const PriceResult = models.PriceResult;
const TrinoQueryInfo = models.TrinoQueryInfo;
const WeekRepeatStrategy = models.WeekRepeatStrategy;
const SparkQuery = models.SparkQuery;
const Dps = models.Dps;
const TerminateTasksResponse = models.TerminateTasksResponse;
const DeleteAutoScaleStrategyResponse = models.DeleteAutoScaleStrategyResponse;
const DescribeNodeSpecRequest = models.DescribeNodeSpecRequest;
const ModifySLInstanceBasicRequest = models.ModifySLInstanceBasicRequest;
const SLInstanceInfo = models.SLInstanceInfo;
const DefaultSetting = models.DefaultSetting;
const COSSettings = models.COSSettings;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const ModifyResourcesTagsResponse = models.ModifyResourcesTagsResponse;
const CreateSLInstanceRequest = models.CreateSLInstanceRequest;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const ResetYarnConfigRequest = models.ResetYarnConfigRequest;
const KyuubiQueryInfo = models.KyuubiQueryInfo;
const ComputeResourceAdvanceParams = models.ComputeResourceAdvanceParams;
const DescribeHBaseTableOverviewResponse = models.DescribeHBaseTableOverviewResponse;
const DescribeAutoScaleGroupGlobalConfRequest = models.DescribeAutoScaleGroupGlobalConfRequest;
const ModifyAutoScaleStrategyRequest = models.ModifyAutoScaleStrategyRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const DescribeSparkQueriesRequest = models.DescribeSparkQueriesRequest;
const NodeSpecInstanceType = models.NodeSpecInstanceType;
const DescribeGroupsSTDRequest = models.DescribeGroupsSTDRequest;
const ModifyResourceScheduleConfigResponse = models.ModifyResourceScheduleConfigResponse;
const InsightResult = models.InsightResult;
const NodeDetailPriceResult = models.NodeDetailPriceResult;
const PriceResource = models.PriceResource;
const Tag = models.Tag;
const DescribeKyuubiQueryInfoResponse = models.DescribeKyuubiQueryInfoResponse;
const TerminateSLInstanceRequest = models.TerminateSLInstanceRequest;
const ConvertPreToPostClusterResponse = models.ConvertPreToPostClusterResponse;
const ClusterIDToFlowID = models.ClusterIDToFlowID;
const EmrListInstance = models.EmrListInstance;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const ZoneDetailPriceResult = models.ZoneDetailPriceResult;
const AddUsersForUserManagerResponse = models.AddUsersForUserManagerResponse;
const SearchItem = models.SearchItem;
const DescribeResourceScheduleDiffDetailResponse = models.DescribeResourceScheduleDiffDetailResponse;
const DescribeYarnQueueResponse = models.DescribeYarnQueueResponse;
const TopologyInfo = models.TopologyInfo;
const SchedulerTaskDetail = models.SchedulerTaskDetail;
const ModifyUserGroupRequest = models.ModifyUserGroupRequest;
const NodeResourceSpec = models.NodeResourceSpec;
const AddMetricScaleStrategyRequest = models.AddMetricScaleStrategyRequest;
const DeleteNodeResourceConfigRequest = models.DeleteNodeResourceConfigRequest;
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const VPCSettings = models.VPCSettings;
const DiffHeader = models.DiffHeader;
const CreateGroupsSTDRequest = models.CreateGroupsSTDRequest;
const ConvertPreToPostClusterRequest = models.ConvertPreToPostClusterRequest;
const DescribeSparkQueriesResponse = models.DescribeSparkQueriesResponse;
const Placement = models.Placement;
const FlowParam = models.FlowParam;
const DescribeAutoScaleStrategiesResponse = models.DescribeAutoScaleStrategiesResponse;
const DescribeNodeDataDisksRequest = models.DescribeNodeDataDisksRequest;
const StopParams = models.StopParams;
const DependService = models.DependService;
const DescribeInspectionTaskResultRequest = models.DescribeInspectionTaskResultRequest;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const SubnetInfo = models.SubnetInfo;
const StartStopServiceOrMonitorRequest = models.StartStopServiceOrMonitorRequest;
const StarRocksQueryInfo = models.StarRocksQueryInfo;
const DescribeHDFSStorageInfoRequest = models.DescribeHDFSStorageInfoRequest;
const OverviewMetricData = models.OverviewMetricData;
const ModifyYarnDeployResponse = models.ModifyYarnDeployResponse;
const AutoScaleRecord = models.AutoScaleRecord;
const LoadAutoScaleStrategy = models.LoadAutoScaleStrategy;
const HealthStatus = models.HealthStatus;
const DescribeSparkApplicationsRequest = models.DescribeSparkApplicationsRequest;
const FlowParamsDesc = models.FlowParamsDesc;
const DescribeResourceScheduleRequest = models.DescribeResourceScheduleRequest;
const PodParameter = models.PodParameter;
const InspectionTaskSettings = models.InspectionTaskSettings;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const AllNodeResourceSpec = models.AllNodeResourceSpec;
const GroupInfo = models.GroupInfo;
const DescribeGlobalConfigResponse = models.DescribeGlobalConfigResponse;
const ModifyYarnDeployRequest = models.ModifyYarnDeployRequest;
const DeleteNodeResourceConfigResponse = models.DeleteNodeResourceConfigResponse;
const DescribeClusterFlowStatusDetailRequest = models.DescribeClusterFlowStatusDetailRequest;
const DescribeUsersForUserManagerRequest = models.DescribeUsersForUserManagerRequest;
const TerminateClusterNodesResponse = models.TerminateClusterNodesResponse;
const DescribeDAGInfoResponse = models.DescribeDAGInfoResponse;
const Taint = models.Taint;
const DiffDetail = models.DiffDetail;
const DescribeInsightListRequest = models.DescribeInsightListRequest;
const DescribeSLInstanceListRequest = models.DescribeSLInstanceListRequest;
const StartStopServiceOrMonitorResponse = models.StartStopServiceOrMonitorResponse;
const DescribeHiveQueriesResponse = models.DescribeHiveQueriesResponse;
const ResizeDataDisksResponse = models.ResizeDataDisksResponse;
const DescribeYarnQueueRequest = models.DescribeYarnQueueRequest;
const ConfigSetInfo = models.ConfigSetInfo;
const ModifyResourceRequest = models.ModifyResourceRequest;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const TerminateTasksRequest = models.TerminateTasksRequest;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const ServiceNodeDetailInfo = models.ServiceNodeDetailInfo;
const ScaleOutServiceConfGroupsInfo = models.ScaleOutServiceConfGroupsInfo;
const CreateSLInstanceResponse = models.CreateSLInstanceResponse;
const NodeSpecType = models.NodeSpecType;
const DescribeYarnScheduleHistoryResponse = models.DescribeYarnScheduleHistoryResponse;
const DescribeDAGInfoRequest = models.DescribeDAGInfoRequest;
const DescribeAutoScaleGroupGlobalConfResponse = models.DescribeAutoScaleGroupGlobalConfResponse;
const Resource = models.Resource;
const DescribeEmrApplicationStaticsRequest = models.DescribeEmrApplicationStaticsRequest;
const SLInstance = models.SLInstance;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const DescribeYarnScheduleHistoryRequest = models.DescribeYarnScheduleHistoryRequest;
const NewResourceSpec = models.NewResourceSpec;
const ModifyYarnQueueV2Response = models.ModifyYarnQueueV2Response;
const ScaleOutNodeConfig = models.ScaleOutNodeConfig;
const ModifyResourceTags = models.ModifyResourceTags;
const SetNodeResourceConfigDefaultResponse = models.SetNodeResourceConfigDefaultResponse;
const PodVolume = models.PodVolume;
const NodeMark = models.NodeMark;
const DescribeResourceScheduleResponse = models.DescribeResourceScheduleResponse;
const UserManagerFilter = models.UserManagerFilter;
const MultiDisk = models.MultiDisk;
const NodeRenewPriceDetail = models.NodeRenewPriceDetail;
const PriceDetail = models.PriceDetail;
const TriggerCondition = models.TriggerCondition;
const TaskSettings = models.TaskSettings;
const MetricTags = models.MetricTags;
const NodeSpecDisk = models.NodeSpecDisk;
const OverviewRow = models.OverviewRow;
const RenewPriceDetail = models.RenewPriceDetail;
const ModifyResourceSchedulerRequest = models.ModifyResourceSchedulerRequest;
const TableSchemaItem = models.TableSchemaItem;
const LoginSettings = models.LoginSettings;
const ModifyInspectionSettingsResponse = models.ModifyInspectionSettingsResponse;
const DescribeKyuubiQueryInfoRequest = models.DescribeKyuubiQueryInfoRequest;
const MonthRepeatStrategy = models.MonthRepeatStrategy;
const ModifyGlobalConfigResponse = models.ModifyGlobalConfigResponse;
const DescribeNodeResourceConfigFastResponse = models.DescribeNodeResourceConfigFastResponse;
const TimeAutoScaleStrategy = models.TimeAutoScaleStrategy;
const ModifySLInstanceRequest = models.ModifySLInstanceRequest;
const DescribeInsightListResponse = models.DescribeInsightListResponse;
const CustomServiceDefine = models.CustomServiceDefine;
const ResultItem = models.ResultItem;
const StageInfoDetail = models.StageInfoDetail;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeAutoScaleRecordsResponse = models.DescribeAutoScaleRecordsResponse;
const ModifyYarnQueueV2Request = models.ModifyYarnQueueV2Request;
const ModifyUserGroupResponse = models.ModifyUserGroupResponse;
const DAGInfo = models.DAGInfo;
const CreateClusterRequest = models.CreateClusterRequest;
const AddMetricScaleStrategyResponse = models.AddMetricScaleStrategyResponse;
const DeleteGroupsSTDResponse = models.DeleteGroupsSTDResponse;
const DescribeNodeResourceConfigFastRequest = models.DescribeNodeResourceConfigFastRequest;
const NodeResource = models.NodeResource;
const GroupGlobalConfs = models.GroupGlobalConfs;
const Order = models.Order;
const DescribeInspectionTaskResultResponse = models.DescribeInspectionTaskResultResponse;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const ComponentBasicRestartInfo = models.ComponentBasicRestartInfo;
const CreateInstanceRequest = models.CreateInstanceRequest;
const ScaleOutClusterRequest = models.ScaleOutClusterRequest;
const DiffDetailItem = models.DiffDetailItem;
const AutoScaleGroupAdvanceAttrs = models.AutoScaleGroupAdvanceAttrs;
const DescribeSLInstanceListResponse = models.DescribeSLInstanceListResponse;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const DescribeEmrOverviewMetricsResponse = models.DescribeEmrOverviewMetricsResponse;
const DescribeServiceConfGroupInfosRequest = models.DescribeServiceConfGroupInfosRequest;
const ClusterRelationMeta = models.ClusterRelationMeta;
const CapacityGlobalConfig = models.CapacityGlobalConfig;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const NotRepeatStrategy = models.NotRepeatStrategy;
const TerminateSLInstanceResponse = models.TerminateSLInstanceResponse;
const PodNewSpec = models.PodNewSpec;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const DescribeAutoScaleStrategiesRequest = models.DescribeAutoScaleStrategiesRequest;
const DeployYarnConfRequest = models.DeployYarnConfRequest;
const DescribeGroupsSTDResponse = models.DescribeGroupsSTDResponse;
const DescribeNodeDataDisksResponse = models.DescribeNodeDataDisksResponse;
const DescribeInstancesListRequest = models.DescribeInstancesListRequest;
const ItemSeq = models.ItemSeq;
const RepeatStrategy = models.RepeatStrategy;
const AttachDisksResponse = models.AttachDisksResponse;
const OutterResource = models.OutterResource;
const OpScope = models.OpScope;
const ResizeDataDisksRequest = models.ResizeDataDisksRequest;
const DeleteAutoScaleStrategyRequest = models.DeleteAutoScaleStrategyRequest;
const NodeSpecDiskV2 = models.NodeSpecDiskV2;
const DeployYarnConfResponse = models.DeployYarnConfResponse;
const DescribeInstancesListResponse = models.DescribeInstancesListResponse;
const SetNodeResourceConfigDefaultRequest = models.SetNodeResourceConfigDefaultRequest;
const Period = models.Period;
const DayRepeatStrategy = models.DayRepeatStrategy;
const ModifyInstanceBasicRequest = models.ModifyInstanceBasicRequest;
const DescribeUsersForUserManagerResponse = models.DescribeUsersForUserManagerResponse;
const DescribeResourceScheduleDiffDetailRequest = models.DescribeResourceScheduleDiffDetailRequest;
const ResetYarnConfigResponse = models.ResetYarnConfigResponse;
const FlowExtraDetail = models.FlowExtraDetail;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const CdbInfo = models.CdbInfo;
const ModifyResourcesTagsRequest = models.ModifyResourcesTagsRequest;
const MultiDiskMC = models.MultiDiskMC;
const AddUsersForUserManagerRequest = models.AddUsersForUserManagerRequest;
const ZoneResourceConfiguration = models.ZoneResourceConfiguration;
const StorageSummaryDistribution = models.StorageSummaryDistribution;
const DescribeSLInstanceRequest = models.DescribeSLInstanceRequest;
const CustomMetaInfo = models.CustomMetaInfo;
const ApplicationStatics = models.ApplicationStatics;
const ConfigurationItem = models.ConfigurationItem;
const DeleteGroupsSTDRequest = models.DeleteGroupsSTDRequest;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeSLInstanceResponse = models.DescribeSLInstanceResponse;
const MultiZoneSetting = models.MultiZoneSetting;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const AddNodeResourceConfigResponse = models.AddNodeResourceConfigResponse;
const CBSInstance = models.CBSInstance;
const ModifyResourceScheduleConfigRequest = models.ModifyResourceScheduleConfigRequest;
const UserInfoForUserManager = models.UserInfoForUserManager;
const ScriptBootstrapActionConfig = models.ScriptBootstrapActionConfig;
const TkeLabel = models.TkeLabel;
const PrePaySetting = models.PrePaySetting;
const PodNewParameter = models.PodNewParameter;
const DescribeEmrOverviewMetricsRequest = models.DescribeEmrOverviewMetricsRequest;
const ScaleOutClusterResponse = models.ScaleOutClusterResponse;
const ServiceProcessFunctionInfo = models.ServiceProcessFunctionInfo;
const PartDetailPriceItem = models.PartDetailPriceItem;
const ExternalService = models.ExternalService;
const RestartPolicy = models.RestartPolicy;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const DescribeServiceConfGroupInfosResponse = models.DescribeServiceConfGroupInfosResponse;
const ClusterExternalServiceInfo = models.ClusterExternalServiceInfo;
const ModifyUsersOfGroupSTDResponse = models.ModifyUsersOfGroupSTDResponse;
const SoftDependInfo = models.SoftDependInfo;
const ModifyAutoScaleStrategyResponse = models.ModifyAutoScaleStrategyResponse;
const DescribeNodeSpecResponse = models.DescribeNodeSpecResponse;
const DescribeStarRocksQueryInfoRequest = models.DescribeStarRocksQueryInfoRequest;
const ModifySLInstanceResponse = models.ModifySLInstanceResponse;
const LoadMetricsConditions = models.LoadMetricsConditions;
const ModifyGlobalConfigRequest = models.ModifyGlobalConfigRequest;
const DescribeEmrApplicationStaticsResponse = models.DescribeEmrApplicationStaticsResponse;
const ResourceDetail = models.ResourceDetail;
const LoadMetricsCondition = models.LoadMetricsCondition;
const CustomMetaDBInfo = models.CustomMetaDBInfo;
const Item = models.Item;
const PodSpec = models.PodSpec;
const ModifySLInstanceBasicResponse = models.ModifySLInstanceBasicResponse;
const DescribeStarRocksQueryInfoResponse = models.DescribeStarRocksQueryInfoResponse;
const SparkApplicationsList = models.SparkApplicationsList;
const ConfigModifyInfoV2 = models.ConfigModifyInfoV2;
const ModifyUserManagerPwdRequest = models.ModifyUserManagerPwdRequest;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const ModifyInstanceBasicResponse = models.ModifyInstanceBasicResponse;
const GroupInfos = models.GroupInfos;
const ModifyResourceSchedulerResponse = models.ModifyResourceSchedulerResponse;
const Filter = models.Filter;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const StrategyConfig = models.StrategyConfig;
const SceneSoftwareConfig = models.SceneSoftwareConfig;
const ShortNodeInfo = models.ShortNodeInfo;
const DescribeTrinoQueryInfoRequest = models.DescribeTrinoQueryInfoRequest;
const EmrPrice = models.EmrPrice;
const ModifyInspectionSettingsRequest = models.ModifyInspectionSettingsRequest;
const NodeHardwareInfo = models.NodeHardwareInfo;
const ServiceBasicRestartInfo = models.ServiceBasicRestartInfo;
const DescribeAutoScaleRecordsRequest = models.DescribeAutoScaleRecordsRequest;
const TerminateClusterNodesRequest = models.TerminateClusterNodesRequest;
const Filters = models.Filters;
const ModifyUsersOfGroupSTDRequest = models.ModifyUsersOfGroupSTDRequest;
const AutoScaleResourceConf = models.AutoScaleResourceConf;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DescribeGlobalConfigRequest = models.DescribeGlobalConfigRequest;
const DescribeResourceConfig = models.DescribeResourceConfig;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.intl.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * This API is used to modify user groups under User Management.
     * @param {ModifyUserGroupRequest} req
     * @param {function(string, ModifyUserGroupResponse):void} cb
     * @public
     */
    ModifyUserGroup(req, cb) {
        let resp = new ModifyUserGroupResponse();
        this.request("ModifyUserGroup", req, resp, cb);
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
     * This API is used to obtain queue information in resource scheduling.
     * @param {DescribeYarnQueueRequest} req
     * @param {function(string, DescribeYarnQueueResponse):void} cb
     * @public
     */
    DescribeYarnQueue(req, cb) {
        let resp = new DescribeYarnQueueResponse();
        this.request("DescribeYarnQueue", req, resp, cb);
    }

    /**
     * This API is used to modify queue information in resource scheduling.
     * @param {ModifyYarnQueueV2Request} req
     * @param {function(string, ModifyYarnQueueV2Response):void} cb
     * @public
     */
    ModifyYarnQueueV2(req, cb) {
        let resp = new ModifyYarnQueueV2Response();
        this.request("ModifyYarnQueueV2", req, resp, cb);
    }

    /**
     * This API is used to modify the Serverless HBase instance name.
     * @param {ModifySLInstanceBasicRequest} req
     * @param {function(string, ModifySLInstanceBasicResponse):void} cb
     * @public
     */
    ModifySLInstanceBasic(req, cb) {
        let resp = new ModifySLInstanceBasicResponse();
        this.request("ModifySLInstanceBasic", req, resp, cb);
    }

    /**
     * This API is used to bring the configuration into effect in YARN resource scheduling after deployment.
     * @param {DeployYarnConfRequest} req
     * @param {function(string, DeployYarnConfResponse):void} cb
     * @public
     */
    DeployYarnConf(req, cb) {
        let resp = new DeployYarnConfResponse();
        this.request("DeployYarnConf", req, resp, cb);
    }

    /**
     * This API is used to query the EMR task running details status.
     * @param {DescribeClusterFlowStatusDetailRequest} req
     * @param {function(string, DescribeClusterFlowStatusDetailResponse):void} cb
     * @public
     */
    DescribeClusterFlowStatusDetail(req, cb) {
        let resp = new DescribeClusterFlowStatusDetailResponse();
        this.request("DescribeClusterFlowStatusDetail", req, resp, cb);
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
     * This API is used to modify the global configuration of YARN Resource Scheduling.
     * @param {ModifyGlobalConfigRequest} req
     * @param {function(string, ModifyGlobalConfigResponse):void} cb
     * @public
     */
    ModifyGlobalConfig(req, cb) {
        let resp = new ModifyGlobalConfigResponse();
        this.request("ModifyGlobalConfig", req, resp, cb);
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
     * This API is used to mount cloud disks.
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * This API is used to set specifications for a node in the current cluster to default or not.
     * @param {SetNodeResourceConfigDefaultRequest} req
     * @param {function(string, SetNodeResourceConfigDefaultResponse):void} cb
     * @public
     */
    SetNodeResourceConfigDefault(req, cb) {
        let resp = new SetNodeResourceConfigDefaultResponse();
        this.request("SetNodeResourceConfigDefault", req, resp, cb);
    }

    /**
     * This API is used to query YARN resource scheduling information. It has been deprecated. You can use the DescribeYarnQueue API to query queue information.
     * @param {DescribeResourceScheduleRequest} req
     * @param {function(string, DescribeResourceScheduleResponse):void} cb
     * @public
     */
    DescribeResourceSchedule(req, cb) {
        let resp = new DescribeResourceScheduleResponse();
        this.request("DescribeResourceSchedule", req, resp, cb);
    }

    /**
     * This API is used to query StarRocks information.
     * @param {DescribeStarRocksQueryInfoRequest} req
     * @param {function(string, DescribeStarRocksQueryInfoResponse):void} cb
     * @public
     */
    DescribeStarRocksQueryInfo(req, cb) {
        let resp = new DescribeStarRocksQueryInfoResponse();
        this.request("DescribeStarRocksQueryInfo", req, resp, cb);
    }

    /**
     * This API is used to access the overview of HBase table-level monitoring data.
     * @param {DescribeHBaseTableOverviewRequest} req
     * @param {function(string, DescribeHBaseTableOverviewResponse):void} cb
     * @public
     */
    DescribeHBaseTableOverview(req, cb) {
        let resp = new DescribeHBaseTableOverviewResponse();
        this.request("DescribeHBaseTableOverview", req, resp, cb);
    }

    /**
     * This API is used to query service process information.
     * @param {DescribeServiceNodeInfosRequest} req
     * @param {function(string, DescribeServiceNodeInfosResponse):void} cb
     * @public
     */
    DescribeServiceNodeInfos(req, cb) {
        let resp = new DescribeServiceNodeInfosResponse();
        this.request("DescribeServiceNodeInfos", req, resp, cb);
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
     * This API is deprecated. Use DeployYarnConf to bring configurations into effect after deployment.

This API is used to bring configurations into effect after deployment. It has been deprecated. Use the DeployYarnConf API to bring configurations into effect after deployment.
     * @param {ModifyYarnDeployRequest} req
     * @param {function(string, ModifyYarnDeployResponse):void} cb
     * @public
     */
    ModifyYarnDeploy(req, cb) {
        let resp = new ModifyYarnDeployResponse();
        this.request("ModifyYarnDeploy", req, resp, cb);
    }

    /**
     * This API is used to query DAG information.
     * @param {DescribeDAGInfoRequest} req
     * @param {function(string, DescribeDAGInfoResponse):void} cb
     * @public
     */
    DescribeDAGInfo(req, cb) {
        let resp = new DescribeDAGInfoResponse();
        this.request("DescribeDAGInfo", req, resp, cb);
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
     * This API is used to modify the resource configuration of YARN resource scheduling.
     * @param {ResetYarnConfigRequest} req
     * @param {function(string, ResetYarnConfigResponse):void} cb
     * @public
     */
    ResetYarnConfig(req, cb) {
        let resp = new ResetYarnConfigResponse();
        this.request("ResetYarnConfig", req, resp, cb);
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
     * This API is used to convert a monthly subscription cluster to a pay-as-you-go cluster (excluding cdb).
     * @param {ConvertPreToPostClusterRequest} req
     * @param {function(string, ConvertPreToPostClusterResponse):void} cb
     * @public
     */
    ConvertPreToPostCluster(req, cb) {
        let resp = new ConvertPreToPostClusterResponse();
        this.request("ConvertPreToPostCluster", req, resp, cb);
    }

    /**
     * This API is used to create user groups in batches under User Management.
     * @param {CreateGroupsSTDRequest} req
     * @param {function(string, CreateGroupsSTDResponse):void} cb
     * @public
     */
    CreateGroupsSTD(req, cb) {
        let resp = new CreateGroupsSTDResponse();
        this.request("CreateGroupsSTD", req, resp, cb);
    }

    /**
     * This API is used to terminate a Serverless HBase instance.
     * @param {TerminateSLInstanceRequest} req
     * @param {function(string, TerminateSLInstanceResponse):void} cb
     * @public
     */
    TerminateSLInstance(req, cb) {
        let resp = new TerminateSLInstanceResponse();
        this.request("TerminateSLInstance", req, resp, cb);
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
     * This API is used to obtain a Spark application list.
     * @param {DescribeSparkApplicationsRequest} req
     * @param {function(string, DescribeSparkApplicationsResponse):void} cb
     * @public
     */
    DescribeSparkApplications(req, cb) {
        let resp = new DescribeSparkApplicationsResponse();
        this.request("DescribeSparkApplications", req, resp, cb);
    }

    /**
     * This API is used to introduce the prerequisite prepaid clusters.
This API is used to enable or disable automatic renewal at the resource level.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to create a Serverless HBase instance.- If the API call is successful, a Serverless HBase instance will be created. If the instance creation request is successful, the InstanceId of the created instance and the RequestID of the request will be returned.- This is an asynchronous API. The operation is not completed immediately when the API call returns. The instance operation result can be viewed by calling DescribeInstancesList to view the StatusDesc status of the current instance.
     * @param {CreateSLInstanceRequest} req
     * @param {function(string, CreateSLInstanceResponse):void} cb
     * @public
     */
    CreateSLInstance(req, cb) {
        let resp = new CreateSLInstanceResponse();
        this.request("CreateSLInstance", req, resp, cb);
    }

    /**
     * This API is used to query the detailed information of the Serverless HBase instance list.
     * @param {DescribeSLInstanceListRequest} req
     * @param {function(string, DescribeSLInstanceListResponse):void} cb
     * @public
     */
    DescribeSLInstanceList(req, cb) {
        let resp = new DescribeSLInstanceListResponse();
        this.request("DescribeSLInstanceList", req, resp, cb);
    }

    /**
     * This API is used to scale out the cloud data disk.
     * @param {ResizeDataDisksRequest} req
     * @param {function(string, ResizeDataDisksResponse):void} cb
     * @public
     */
    ResizeDataDisks(req, cb) {
        let resp = new ResizeDataDisksResponse();
        this.request("ResizeDataDisks", req, resp, cb);
    }

    /**
     * This API is used to query Trino(PrestoSQL) query information.
     * @param {DescribeTrinoQueryInfoRequest} req
     * @param {function(string, DescribeTrinoQueryInfoResponse):void} cb
     * @public
     */
    DescribeTrinoQueryInfo(req, cb) {
        let resp = new DescribeTrinoQueryInfoResponse();
        this.request("DescribeTrinoQueryInfo", req, resp, cb);
    }

    /**
     * This API is used to query Kyuubi query information.
     * @param {DescribeKyuubiQueryInfoRequest} req
     * @param {function(string, DescribeKyuubiQueryInfoResponse):void} cb
     * @public
     */
    DescribeKyuubiQueryInfo(req, cb) {
        let resp = new DescribeKyuubiQueryInfoResponse();
        this.request("DescribeKyuubiQueryInfo", req, resp, cb);
    }

    /**
     * This API is used to delete automatic scaling rules. Nodes scaled based on these rules are destroyed in the background.
     * @param {DeleteAutoScaleStrategyRequest} req
     * @param {function(string, DeleteAutoScaleStrategyResponse):void} cb
     * @public
     */
    DeleteAutoScaleStrategy(req, cb) {
        let resp = new DeleteAutoScaleStrategyResponse();
        this.request("DeleteAutoScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to query the YARN application statistics API.
     * @param {DescribeEmrApplicationStaticsRequest} req
     * @param {function(string, DescribeEmrApplicationStaticsResponse):void} cb
     * @public
     */
    DescribeEmrApplicationStatics(req, cb) {
        let resp = new DescribeEmrApplicationStaticsResponse();
        this.request("DescribeEmrApplicationStatics", req, resp, cb);
    }

    /**
     * This API is used to query information of file(s) stored in HDFS.
     * @param {DescribeHDFSStorageInfoRequest} req
     * @param {function(string, DescribeHDFSStorageInfoResponse):void} cb
     * @public
     */
    DescribeHDFSStorageInfo(req, cb) {
        let resp = new DescribeHDFSStorageInfoResponse();
        this.request("DescribeHDFSStorageInfo", req, resp, cb);
    }

    /**
     * This API is used to modify a YARN resource scheduler. After the modification, you can click Deploy to bring it into effect.
     * @param {ModifyResourceSchedulerRequest} req
     * @param {function(string, ModifyResourceSchedulerResponse):void} cb
     * @public
     */
    ModifyResourceScheduler(req, cb) {
        let resp = new ModifyResourceSchedulerResponse();
        this.request("ModifyResourceScheduler", req, resp, cb);
    }

    /**
     * This API is used to quickly obtain node specifications of the current cluster.
     * @param {DescribeNodeResourceConfigFastRequest} req
     * @param {function(string, DescribeNodeResourceConfigFastResponse):void} cb
     * @public
     */
    DescribeNodeResourceConfigFast(req, cb) {
        let resp = new DescribeNodeResourceConfigFastResponse();
        this.request("DescribeNodeResourceConfigFast", req, resp, cb);
    }

    /**
     * This API is used to query change details in YARN resource scheduling.
     * @param {DescribeResourceScheduleDiffDetailRequest} req
     * @param {function(string, DescribeResourceScheduleDiffDetailResponse):void} cb
     * @public
     */
    DescribeResourceScheduleDiffDetail(req, cb) {
        let resp = new DescribeResourceScheduleDiffDetailResponse();
        this.request("DescribeResourceScheduleDiffDetail", req, resp, cb);
    }

    /**
     * This API is used to query the basic information of Serverless HBase instances.
     * @param {DescribeSLInstanceRequest} req
     * @param {function(string, DescribeSLInstanceResponse):void} cb
     * @public
     */
    DescribeSLInstance(req, cb) {
        let resp = new DescribeSLInstanceResponse();
        this.request("DescribeSLInstance", req, resp, cb);
    }

    /**
     * This API is used to query the Spark query information list.
     * @param {DescribeSparkQueriesRequest} req
     * @param {function(string, DescribeSparkQueriesResponse):void} cb
     * @public
     */
    DescribeSparkQueries(req, cb) {
        let resp = new DescribeSparkQueriesResponse();
        this.request("DescribeSparkQueries", req, resp, cb);
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
     * This API is used to query the global configurations of YARN Resource Scheduling.
     * @param {DescribeGlobalConfigRequest} req
     * @param {function(string, DescribeGlobalConfigResponse):void} cb
     * @public
     */
    DescribeGlobalConfig(req, cb) {
        let resp = new DescribeGlobalConfigResponse();
        this.request("DescribeGlobalConfig", req, resp, cb);
    }

    /**
     * This API is used to view the YARN resource scheduling history. It has been deprecated. You can use the Process Center to view the history records.
     * @param {DescribeYarnScheduleHistoryRequest} req
     * @param {function(string, DescribeYarnScheduleHistoryResponse):void} cb
     * @public
     */
    DescribeYarnScheduleHistory(req, cb) {
        let resp = new DescribeYarnScheduleHistoryResponse();
        this.request("DescribeYarnScheduleHistory", req, resp, cb);
    }

    /**
     * This API is deprecated. Use ModifyYarnQueueV2 to modify queue configuration. No related logs exist in the past one year.

This API is used to modify the resource configuration of YARN Resource Scheduling. It has been deprecated. Use the ModifyYarnQueueV2 API to modify the queue configuration.
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
     * This API is used to query the metric data on the monitoring overview page.
     * @param {DescribeEmrOverviewMetricsRequest} req
     * @param {function(string, DescribeEmrOverviewMetricsResponse):void} cb
     * @public
     */
    DescribeEmrOverviewMetrics(req, cb) {
        let resp = new DescribeEmrOverviewMetricsResponse();
        this.request("DescribeEmrOverviewMetrics", req, resp, cb);
    }

    /**
     * This API is used to add node specifications of the current cluster.
     * @param {AddNodeResourceConfigRequest} req
     * @param {function(string, AddNodeResourceConfigResponse):void} cb
     * @public
     */
    AddNodeResourceConfig(req, cb) {
        let resp = new AddNodeResourceConfigResponse();
        this.request("AddNodeResourceConfig", req, resp, cb);
    }

    /**
     * This API is used to query a user group.
     * @param {DescribeGroupsSTDRequest} req
     * @param {function(string, DescribeGroupsSTDResponse):void} cb
     * @public
     */
    DescribeGroupsSTD(req, cb) {
        let resp = new DescribeGroupsSTDResponse();
        this.request("DescribeGroupsSTD", req, resp, cb);
    }

    /**
     * This API is used to resize an instance.
     * @param {ModifyResourceRequest} req
     * @param {function(string, ModifyResourceResponse):void} cb
     * @public
     */
    ModifyResource(req, cb) {
        let resp = new ModifyResourceResponse();
        this.request("ModifyResource", req, resp, cb);
    }

    /**
     * This API is used to resize a Serverless HBase instance.- If the API call is successful, a Serverless HBase instance will be created. If the instance creation request is successful, the RequestID of the request will be returned.- This is an asynchronous API. The operation is not completed immediately when the API call returns. The instance operation result can be viewed by calling DescribeInstancesList to view the StatusDesc status of the current instance.
     * @param {ModifySLInstanceRequest} req
     * @param {function(string, ModifySLInstanceResponse):void} cb
     * @public
     */
    ModifySLInstance(req, cb) {
        let resp = new ModifySLInstanceResponse();
        this.request("ModifySLInstance", req, resp, cb);
    }

    /**
     * This API is used to query data disk information of nodes.
     * @param {DescribeNodeDataDisksRequest} req
     * @param {function(string, DescribeNodeDataDisksResponse):void} cb
     * @public
     */
    DescribeNodeDataDisks(req, cb) {
        let resp = new DescribeNodeDataDisksResponse();
        this.request("DescribeNodeDataDisks", req, resp, cb);
    }

    /**
     * This API is used to access automatic scaling rules.
     * @param {DescribeAutoScaleStrategiesRequest} req
     * @param {function(string, DescribeAutoScaleStrategiesResponse):void} cb
     * @public
     */
    DescribeAutoScaleStrategies(req, cb) {
        let resp = new DescribeAutoScaleStrategiesResponse();
        this.request("DescribeAutoScaleStrategies", req, resp, cb);
    }

    /**
     * This API is used to add scaling rules by load and time.
     * @param {AddMetricScaleStrategyRequest} req
     * @param {function(string, AddMetricScaleStrategyResponse):void} cb
     * @public
     */
    AddMetricScaleStrategy(req, cb) {
        let resp = new AddMetricScaleStrategyResponse();
        this.request("AddMetricScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to access the global configuration of automatic scaling.
     * @param {DescribeAutoScaleGroupGlobalConfRequest} req
     * @param {function(string, DescribeAutoScaleGroupGlobalConfResponse):void} cb
     * @public
     */
    DescribeAutoScaleGroupGlobalConf(req, cb) {
        let resp = new DescribeAutoScaleGroupGlobalConfResponse();
        this.request("DescribeAutoScaleGroupGlobalConf", req, resp, cb);
    }

    /**
     * This API is used to modify automatic scaling rules.
     * @param {ModifyAutoScaleStrategyRequest} req
     * @param {function(string, ModifyAutoScaleStrategyResponse):void} cb
     * @public
     */
    ModifyAutoScaleStrategy(req, cb) {
        let resp = new ModifyAutoScaleStrategyResponse();
        this.request("ModifyAutoScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to query node specifications.
     * @param {DescribeNodeSpecRequest} req
     * @param {function(string, DescribeNodeSpecResponse):void} cb
     * @public
     */
    DescribeNodeSpec(req, cb) {
        let resp = new DescribeNodeSpecResponse();
        this.request("DescribeNodeSpec", req, resp, cb);
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
     * This API is used to delete user groups in batches.
     * @param {DeleteGroupsSTDRequest} req
     * @param {function(string, DeleteGroupsSTDResponse):void} cb
     * @public
     */
    DeleteGroupsSTD(req, cb) {
        let resp = new DeleteGroupsSTDResponse();
        this.request("DeleteGroupsSTD", req, resp, cb);
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
     * This API is used to describe service configuration group information.
     * @param {DescribeServiceConfGroupInfosRequest} req
     * @param {function(string, DescribeServiceConfGroupInfosResponse):void} cb
     * @public
     */
    DescribeServiceConfGroupInfos(req, cb) {
        let resp = new DescribeServiceConfGroupInfosResponse();
        this.request("DescribeServiceConfGroupInfos", req, resp, cb);
    }

    /**
     * This API is used to obtain insight result information.
     * @param {DescribeInsightListRequest} req
     * @param {function(string, DescribeInsightListResponse):void} cb
     * @public
     */
    DescribeInsightList(req, cb) {
        let resp = new DescribeInsightListResponse();
        this.request("DescribeInsightList", req, resp, cb);
    }

    /**
     * This API is used to delete the node specifications of the current cluster.
     * @param {DeleteNodeResourceConfigRequest} req
     * @param {function(string, DeleteNodeResourceConfigResponse):void} cb
     * @public
     */
    DeleteNodeResourceConfig(req, cb) {
        let resp = new DeleteNodeResourceConfigResponse();
        this.request("DeleteNodeResourceConfig", req, resp, cb);
    }

    /**
     * This API is used to modify a cluster name.
     * @param {ModifyInstanceBasicRequest} req
     * @param {function(string, ModifyInstanceBasicResponse):void} cb
     * @public
     */
    ModifyInstanceBasic(req, cb) {
        let resp = new ModifyInstanceBasicResponse();
        this.request("ModifyInstanceBasic", req, resp, cb);
    }

    /**
     * This API is used to change the user information of user groups.
     * @param {ModifyUsersOfGroupSTDRequest} req
     * @param {function(string, ModifyUsersOfGroupSTDResponse):void} cb
     * @public
     */
    ModifyUsersOfGroupSTD(req, cb) {
        let resp = new ModifyUsersOfGroupSTDResponse();
        this.request("ModifyUsersOfGroupSTD", req, resp, cb);
    }

    /**
     * This API is used to set inspection task configurations.
     * @param {ModifyInspectionSettingsRequest} req
     * @param {function(string, ModifyInspectionSettingsResponse):void} cb
     * @public
     */
    ModifyInspectionSettings(req, cb) {
        let resp = new ModifyInspectionSettingsResponse();
        this.request("ModifyInspectionSettings", req, resp, cb);
    }

    /**
     * This API is used to obtain the inspection task result list.
     * @param {DescribeInspectionTaskResultRequest} req
     * @param {function(string, DescribeInspectionTaskResultResponse):void} cb
     * @public
     */
    DescribeInspectionTaskResult(req, cb) {
        let resp = new DescribeInspectionTaskResultResponse();
        this.request("DescribeInspectionTaskResult", req, resp, cb);
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


}
module.exports = EmrClient;
