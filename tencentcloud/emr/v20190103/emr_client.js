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
const SchedulerTaskInfo = models.SchedulerTaskInfo;
const TerminateTasksRequest = models.TerminateTasksRequest;
const DescribeEMREventListResponse = models.DescribeEMREventListResponse;
const DiskSpecInfo = models.DiskSpecInfo;
const NodeSpecFamily = models.NodeSpecFamily;
const KeyValue = models.KeyValue;
const DescribeEMREventListRequest = models.DescribeEMREventListRequest;
const DescribeTrinoQueryInfoResponse = models.DescribeTrinoQueryInfoResponse;
const SparkQuery = models.SparkQuery;
const DynamicPodSpec = models.DynamicPodSpec;
const CustomImage = models.CustomImage;
const DescribeDynamicInstanceDetailResponse = models.DescribeDynamicInstanceDetailResponse;
const GpuImageDriverSpec = models.GpuImageDriverSpec;
const ResetYarnConfigRequest = models.ResetYarnConfigRequest;
const ComputeResourceAdvanceParams = models.ComputeResourceAdvanceParams;
const ServiceDeployInfo = models.ServiceDeployInfo;
const DescribeServiceNodeInfosResponse = models.DescribeServiceNodeInfosResponse;
const AttachDisksRequest = models.AttachDisksRequest;
const Tag = models.Tag;
const ClusterIDToFlowID = models.ClusterIDToFlowID;
const AddUsersForUserManagerResponse = models.AddUsersForUserManagerResponse;
const DeleteNodeResourceConfigRequest = models.DeleteNodeResourceConfigRequest;
const DiffHeader = models.DiffHeader;
const TerminateTasksResponse = models.TerminateTasksResponse;
const DescribeSparkQueriesResponse = models.DescribeSparkQueriesResponse;
const InstallSoftwareRequest = models.InstallSoftwareRequest;
const CFSVolume = models.CFSVolume;
const DescribeInspectionTaskResultRequest = models.DescribeInspectionTaskResultRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const DescribeHDFSStorageInfoRequest = models.DescribeHDFSStorageInfoRequest;
const LoadAutoScaleStrategy = models.LoadAutoScaleStrategy;
const DescribeMetaDBInfoResponse = models.DescribeMetaDBInfoResponse;
const WebUIInfo = models.WebUIInfo;
const PrePaySetting = models.PrePaySetting;
const DescribeGlobalConfigResponse = models.DescribeGlobalConfigResponse;
const PodParameter = models.PodParameter;
const AllNodeResourceSpec = models.AllNodeResourceSpec;
const Taint = models.Taint;
const StrategyConfig = models.StrategyConfig;
const ModifyResourceRequest = models.ModifyResourceRequest;
const ImagePullSecret = models.ImagePullSecret;
const DescribeBootScriptResponse = models.DescribeBootScriptResponse;
const PodVolume = models.PodVolume;
const MultiDisk = models.MultiDisk;
const DescribeHBaseTableRequestMetricRequest = models.DescribeHBaseTableRequestMetricRequest;
const NodeSpecDisk = models.NodeSpecDisk;
const ModifyInspectionSettingsResponse = models.ModifyInspectionSettingsResponse;
const ScaleOutClusterRequest = models.ScaleOutClusterRequest;
const ServiceDeploy = models.ServiceDeploy;
const DescribeHiveQueriesRequest = models.DescribeHiveQueriesRequest;
const ResultItem = models.ResultItem;
const CreateClusterResponse = models.CreateClusterResponse;
const DAGInfo = models.DAGInfo;
const AddMetricScaleStrategyResponse = models.AddMetricScaleStrategyResponse;
const DescribeNodeResourceConfigFastRequest = models.DescribeNodeResourceConfigFastRequest;
const NodeResource = models.NodeResource;
const InsightResult = models.InsightResult;
const DescribeSLInstanceListResponse = models.DescribeSLInstanceListResponse;
const ModifyDynamicInstanceResponse = models.ModifyDynamicInstanceResponse;
const DescribeServiceConfGroupInfosRequest = models.DescribeServiceConfGroupInfosRequest;
const InquiryPriceUpdateInstanceRequest = models.InquiryPriceUpdateInstanceRequest;
const DescribeDynamicInstanceDetailRequest = models.DescribeDynamicInstanceDetailRequest;
const AttachDisksResponse = models.AttachDisksResponse;
const WeekRepeatStrategy = models.WeekRepeatStrategy;
const CLBSetting = models.CLBSetting;
const DescribeSparkQueriesRequest = models.DescribeSparkQueriesRequest;
const Period = models.Period;
const DescribeEmrApplicationStaticsRequest = models.DescribeEmrApplicationStaticsRequest;
const DescribeUsersForUserManagerResponse = models.DescribeUsersForUserManagerResponse;
const DescribeResourceScheduleDiffDetailRequest = models.DescribeResourceScheduleDiffDetailRequest;
const CdbInfo = models.CdbInfo;
const PriceDetail = models.PriceDetail;
const DescribeSLInstanceRequest = models.DescribeSLInstanceRequest;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const AddNodeResourceConfigResponse = models.AddNodeResourceConfigResponse;
const ModifyResourceScheduleConfigRequest = models.ModifyResourceScheduleConfigRequest;
const UserInfoForUserManager = models.UserInfoForUserManager;
const LabelSelector = models.LabelSelector;
const DeleteAutoScaleStrategyResponse = models.DeleteAutoScaleStrategyResponse;
const RestartPolicy = models.RestartPolicy;
const ClusterExternalServiceInfo = models.ClusterExternalServiceInfo;
const SoftDependInfo = models.SoftDependInfo;
const NodeSelector = models.NodeSelector;
const CustomMetaDBInfo = models.CustomMetaDBInfo;
const DescribeStarRocksQueryInfoResponse = models.DescribeStarRocksQueryInfoResponse;
const StageInfoDetail = models.StageInfoDetail;
const ModifyResourceSchedulerResponse = models.ModifyResourceSchedulerResponse;
const SceneSoftwareConfig = models.SceneSoftwareConfig;
const ShortNodeInfo = models.ShortNodeInfo;
const NameValue = models.NameValue;
const DescribeAutoScaleRecordsRequest = models.DescribeAutoScaleRecordsRequest;
const DescribeHBaseTableRequestMetricResponse = models.DescribeHBaseTableRequestMetricResponse;
const Toleration = models.Toleration;
const DescribeEmrOverviewMetricsRequest = models.DescribeEmrOverviewMetricsRequest;
const ModifyResourceResponse = models.ModifyResourceResponse;
const PodSpecInfo = models.PodSpecInfo;
const ModifyUserGroupResponse = models.ModifyUserGroupResponse;
const DescribeHDFSStorageInfoResponse = models.DescribeHDFSStorageInfoResponse;
const ModifyGlobalConfigResponse = models.ModifyGlobalConfigResponse;
const CreateGroupsSTDResponse = models.CreateGroupsSTDResponse;
const HostVolumeContext = models.HostVolumeContext;
const HiveQuery = models.HiveQuery;
const FairGlobalConfig = models.FairGlobalConfig;
const PodNewSpec = models.PodNewSpec;
const EmrProductConfigDetail = models.EmrProductConfigDetail;
const ExternalAccess = models.ExternalAccess;
const VolumeMount = models.VolumeMount;
const ZoneSetting = models.ZoneSetting;
const TrinoQueryInfo = models.TrinoQueryInfo;
const Dps = models.Dps;
const OverviewRow = models.OverviewRow;
const ModifySLInstanceBasicRequest = models.ModifySLInstanceBasicRequest;
const DefaultSetting = models.DefaultSetting;
const COSSettings = models.COSSettings;
const CreateSLInstanceRequest = models.CreateSLInstanceRequest;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const KyuubiQueryInfo = models.KyuubiQueryInfo;
const ModifyAutoScaleStrategyRequest = models.ModifyAutoScaleStrategyRequest;
const ConfSubContext = models.ConfSubContext;
const DescribeGroupsSTDRequest = models.DescribeGroupsSTDRequest;
const DescribeKyuubiQueryInfoResponse = models.DescribeKyuubiQueryInfoResponse;
const DiffDetail = models.DiffDetail;
const Disk = models.Disk;
const TimeAutoScaleStrategy = models.TimeAutoScaleStrategy;
const DescribeBootScriptRequest = models.DescribeBootScriptRequest;
const EmrProductConfigOutter = models.EmrProductConfigOutter;
const HostPathVolumeSource = models.HostPathVolumeSource;
const OperationLog = models.OperationLog;
const DescribeServiceConfGroupInfosResponse = models.DescribeServiceConfGroupInfosResponse;
const PodSpec = models.PodSpec;
const DescribeInstanceOplogRequest = models.DescribeInstanceOplogRequest;
const InspectionTaskSettings = models.InspectionTaskSettings;
const GroupInfo = models.GroupInfo;
const ModifyYarnDeployRequest = models.ModifyYarnDeployRequest;
const DescribeClusterFlowStatusDetailRequest = models.DescribeClusterFlowStatusDetailRequest;
const SubnetInfo = models.SubnetInfo;
const DescribeDAGInfoResponse = models.DescribeDAGInfoResponse;
const DescribeHiveQueriesResponse = models.DescribeHiveQueriesResponse;
const CreateDynamicInstanceRequest = models.CreateDynamicInstanceRequest;
const SearchItem = models.SearchItem;
const DiskHealthIssue = models.DiskHealthIssue;
const StringMap = models.StringMap;
const CreateClusterRequest = models.CreateClusterRequest;
const CreateSLInstanceResponse = models.CreateSLInstanceResponse;
const ImageInfo = models.ImageInfo;
const SLInstance = models.SLInstance;
const DescribeClusterNodesResponse = models.DescribeClusterNodesResponse;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const ModifyBootScriptResponse = models.ModifyBootScriptResponse;
const ModifyResourceTags = models.ModifyResourceTags;
const DescribeResourceScheduleResponse = models.DescribeResourceScheduleResponse;
const ModifyServiceParamsByExportConfsRequest = models.ModifyServiceParamsByExportConfsRequest;
const EMREventListItem = models.EMREventListItem;
const LabelSelectorRequirement = models.LabelSelectorRequirement;
const DescribeKyuubiQueryInfoRequest = models.DescribeKyuubiQueryInfoRequest;
const GooseFSVolume = models.GooseFSVolume;
const DescribeNodeResourceConfigFastResponse = models.DescribeNodeResourceConfigFastResponse;
const DescribeInsightListResponse = models.DescribeInsightListResponse;
const DescribeAutoScaleRecordsResponse = models.DescribeAutoScaleRecordsResponse;
const TkeLabel = models.TkeLabel;
const GroupGlobalConfs = models.GroupGlobalConfs;
const DescribeInspectionTaskResultResponse = models.DescribeInspectionTaskResultResponse;
const ComponentBasicRestartInfo = models.ComponentBasicRestartInfo;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DiffDetailItem = models.DiffDetailItem;
const AutoScaleGroupAdvanceAttrs = models.AutoScaleGroupAdvanceAttrs;
const ScriptBootstrapActionConfig = models.ScriptBootstrapActionConfig;
const InstallSoftwareResponse = models.InstallSoftwareResponse;
const NodeSelectorTerm = models.NodeSelectorTerm;
const ModifyUsersOfGroupSTDRequest = models.ModifyUsersOfGroupSTDRequest;
const ItemSeq = models.ItemSeq;
const OutterResource = models.OutterResource;
const PreferredSchedulingTerm = models.PreferredSchedulingTerm;
const DeleteAutoScaleStrategyRequest = models.DeleteAutoScaleStrategyRequest;
const DescribeInstancesListResponse = models.DescribeInstancesListResponse;
const ExportConfMeta = models.ExportConfMeta;
const ZoneResourceConfiguration = models.ZoneResourceConfiguration;
const NotRepeatStrategy = models.NotRepeatStrategy;
const ConfigurationItem = models.ConfigurationItem;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeSLInstanceResponse = models.DescribeSLInstanceResponse;
const CBSVolume = models.CBSVolume;
const TagInfo = models.TagInfo;
const DescribeBootScriptRsp = models.DescribeBootScriptRsp;
const ModifySLInstanceResponse = models.ModifySLInstanceResponse;
const ModifyGlobalConfigRequest = models.ModifyGlobalConfigRequest;
const DescribeHBaseTableStoreSizeMetricResponse = models.DescribeHBaseTableStoreSizeMetricResponse;
const HBaseMetricData = models.HBaseMetricData;
const LoadMetricsCondition = models.LoadMetricsCondition;
const SetNodeResourceConfigDefaultResponse = models.SetNodeResourceConfigDefaultResponse;
const TableSchemaItem = models.TableSchemaItem;
const DescribeDynamicInstanceListRequest = models.DescribeDynamicInstanceListRequest;
const ModifyInstanceBasicResponse = models.ModifyInstanceBasicResponse;
const Filter = models.Filter;
const ArchitectureInfo = models.ArchitectureInfo;
const DescribeTrinoQueryInfoRequest = models.DescribeTrinoQueryInfoRequest;
const DescribeResourceConfig = models.DescribeResourceConfig;
const DescribeSparkApplicationsResponse = models.DescribeSparkApplicationsResponse;
const TopologySpreadConstraint = models.TopologySpreadConstraint;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const ModifyUserManagerPwdResponse = models.ModifyUserManagerPwdResponse;
const TerminateDynamicInstancesRequest = models.TerminateDynamicInstancesRequest;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DescribeServiceNodeInfosRequest = models.DescribeServiceNodeInfosRequest;
const DescribeHBaseTableStoreSizeMetricRequest = models.DescribeHBaseTableStoreSizeMetricRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const PriceResult = models.PriceResult;
const TerminateDynamicInstancesResponse = models.TerminateDynamicInstancesResponse;
const UserManagerFilter = models.UserManagerFilter;
const ExportConfContext = models.ExportConfContext;
const DescribeInstanceOplogResponse = models.DescribeInstanceOplogResponse;
const ZoneDetailPriceResult = models.ZoneDetailPriceResult;
const DescribeAutoScaleGroupGlobalConfRequest = models.DescribeAutoScaleGroupGlobalConfRequest;
const PreExecuteFileSetting = models.PreExecuteFileSetting;
const ModifyResourceScheduleConfigResponse = models.ModifyResourceScheduleConfigResponse;
const NodeDetailPriceResult = models.NodeDetailPriceResult;
const DescribeDynamicInstanceListResponse = models.DescribeDynamicInstanceListResponse;
const EmrListInstance = models.EmrListInstance;
const DescribeResourceScheduleDiffDetailResponse = models.DescribeResourceScheduleDiffDetailResponse;
const DescribeYarnQueueResponse = models.DescribeYarnQueueResponse;
const CreateGroupsSTDRequest = models.CreateGroupsSTDRequest;
const ConvertPreToPostClusterRequest = models.ConvertPreToPostClusterRequest;
const DescribeNodeDataDisksRequest = models.DescribeNodeDataDisksRequest;
const StopParams = models.StopParams;
const DependService = models.DependService;
const CloudResource = models.CloudResource;
const StarRocksQueryInfo = models.StarRocksQueryInfo;
const ModifyBootScriptRequest = models.ModifyBootScriptRequest;
const FlowParamsDesc = models.FlowParamsDesc;
const ModifyYarnDeployResponse = models.ModifyYarnDeployResponse;
const DescribeMetaDBInfoRequest = models.DescribeMetaDBInfoRequest;
const UserManagerUserBriefInfo = models.UserManagerUserBriefInfo;
const Placement = models.Placement;
const ComponentDeployInfo = models.ComponentDeployInfo;
const DescribeUsersForUserManagerRequest = models.DescribeUsersForUserManagerRequest;
const ConfigSetInfo = models.ConfigSetInfo;
const DescribeNodeSpecRequest = models.DescribeNodeSpecRequest;
const DescribeYarnScheduleHistoryRequest = models.DescribeYarnScheduleHistoryRequest;
const StartStopServiceOrMonitorResponse = models.StartStopServiceOrMonitorResponse;
const DescribeYarnQueueRequest = models.DescribeYarnQueueRequest;
const DynamicInstanceGroup = models.DynamicInstanceGroup;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DescribeYarnScheduleHistoryResponse = models.DescribeYarnScheduleHistoryResponse;
const DescribeInsightListRequest = models.DescribeInsightListRequest;
const MultiZoneSetting = models.MultiZoneSetting;
const PersistentVolumeContext = models.PersistentVolumeContext;
const ScaleOutNodeConfig = models.ScaleOutNodeConfig;
const ModifyResourcesTagsRequest = models.ModifyResourcesTagsRequest;
const TaskSettings = models.TaskSettings;
const MetricTags = models.MetricTags;
const TerminateClusterNodesResponse = models.TerminateClusterNodesResponse;
const CustomServiceDefine = models.CustomServiceDefine;
const DescribeSLInstanceListRequest = models.DescribeSLInstanceListRequest;
const DeleteGroupsSTDResponse = models.DeleteGroupsSTDResponse;
const ModifyDynamicInstanceForm = models.ModifyDynamicInstanceForm;
const ModifyUserGroupRequest = models.ModifyUserGroupRequest;
const CapacityGlobalConfig = models.CapacityGlobalConfig;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DayRepeatStrategy = models.DayRepeatStrategy;
const DeployYarnConfRequest = models.DeployYarnConfRequest;
const DescribeGroupsSTDResponse = models.DescribeGroupsSTDResponse;
const DescribeNodeDataDisksResponse = models.DescribeNodeDataDisksResponse;
const DescribeInstancesListRequest = models.DescribeInstancesListRequest;
const RepeatStrategy = models.RepeatStrategy;
const OpScope = models.OpScope;
const ImageInfoV2 = models.ImageInfoV2;
const VPCSettings = models.VPCSettings;
const ModifyInstanceBasicRequest = models.ModifyInstanceBasicRequest;
const AddUsersForUserManagerRequest = models.AddUsersForUserManagerRequest;
const StorageSummaryDistribution = models.StorageSummaryDistribution;
const ApplicationStatics = models.ApplicationStatics;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const PodAffinitySpec = models.PodAffinitySpec;
const ServiceProcessFunctionInfo = models.ServiceProcessFunctionInfo;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const StorageVolumeDetail = models.StorageVolumeDetail;
const TerminateSLInstanceRequest = models.TerminateSLInstanceRequest;
const DescribeNodeSpecResponse = models.DescribeNodeSpecResponse;
const DescribeStarRocksQueryInfoRequest = models.DescribeStarRocksQueryInfoRequest;
const Resource = models.Resource;
const ResizeDataDisksResponse = models.ResizeDataDisksResponse;
const RayCluster = models.RayCluster;
const Item = models.Item;
const ModifySLInstanceBasicResponse = models.ModifySLInstanceBasicResponse;
const ConfigModifyInfoV2 = models.ConfigModifyInfoV2;
const DynamicInstanceForm = models.DynamicInstanceForm;
const Order = models.Order;
const GroupInfos = models.GroupInfos;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const ResizeDataDisksRequest = models.ResizeDataDisksRequest;
const ScaleOutClusterResponse = models.ScaleOutClusterResponse;
const CFSTurboVolume = models.CFSTurboVolume;
const AutoScaleResourceConf = models.AutoScaleResourceConf;
const DescribeGlobalConfigRequest = models.DescribeGlobalConfigRequest;
const PersistentVolume = models.PersistentVolume;
const MonthRepeatStrategy = models.MonthRepeatStrategy;
const RedisInstance = models.RedisInstance;
const DescribeHBaseTableOverviewRequest = models.DescribeHBaseTableOverviewRequest;
const DescribeClusterFlowStatusDetailResponse = models.DescribeClusterFlowStatusDetailResponse;
const DescribeSparkApplicationsRequest = models.DescribeSparkApplicationsRequest;
const DescribeNodeSpec = models.DescribeNodeSpec;
const DescribeExportConfsRequest = models.DescribeExportConfsRequest;
const ModifyDynamicInstanceRequest = models.ModifyDynamicInstanceRequest;
const SLInstanceInfo = models.SLInstanceInfo;
const ModifyUserManagerPwdRequest = models.ModifyUserManagerPwdRequest;
const ClusterInstancesInfo = models.ClusterInstancesInfo;
const DescribeHBaseTableOverviewResponse = models.DescribeHBaseTableOverviewResponse;
const NodeSpecInstanceType = models.NodeSpecInstanceType;
const NodeResourceSpec = models.NodeResourceSpec;
const TopologyInfo = models.TopologyInfo;
const HealthStatus = models.HealthStatus;
const Arg = models.Arg;
const ServiceNodeDetailInfo = models.ServiceNodeDetailInfo;
const SchedulerTaskDetail = models.SchedulerTaskDetail;
const AddMetricScaleStrategyRequest = models.AddMetricScaleStrategyRequest;
const PodAffinityTerm = models.PodAffinityTerm;
const ModifyUsersOfGroupSTDResponse = models.ModifyUsersOfGroupSTDResponse;
const ResetYarnConfigResponse = models.ResetYarnConfigResponse;
const FlowParam = models.FlowParam;
const PartDetailPriceItem = models.PartDetailPriceItem;
const InquiryPriceRenewInstanceResponse = models.InquiryPriceRenewInstanceResponse;
const StartStopServiceOrMonitorRequest = models.StartStopServiceOrMonitorRequest;
const OverviewMetricData = models.OverviewMetricData;
const AutoScaleRecord = models.AutoScaleRecord;
const DescribeResourceScheduleRequest = models.DescribeResourceScheduleRequest;
const COSVolume = models.COSVolume;
const DeleteNodeResourceConfigResponse = models.DeleteNodeResourceConfigResponse;
const ConvertPreToPostClusterResponse = models.ConvertPreToPostClusterResponse;
const PodNewParameter = models.PodNewParameter;
const ModifyResourcesTagsResponse = models.ModifyResourcesTagsResponse;
const ScaleOutServiceConfGroupsInfo = models.ScaleOutServiceConfGroupsInfo;
const SetNodeResourceConfigDefaultRequest = models.SetNodeResourceConfigDefaultRequest;
const DescribeDAGInfoRequest = models.DescribeDAGInfoRequest;
const DescribeAutoScaleGroupGlobalConfResponse = models.DescribeAutoScaleGroupGlobalConfResponse;
const InquiryPriceUpdateInstanceResponse = models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models.NewResourceSpec;
const ModifyYarnQueueV2Response = models.ModifyYarnQueueV2Response;
const ModifyInspectionSettingsRequest = models.ModifyInspectionSettingsRequest;
const NodeRenewPriceDetail = models.NodeRenewPriceDetail;
const TriggerCondition = models.TriggerCondition;
const RenewPriceDetail = models.RenewPriceDetail;
const ModifyResourceSchedulerRequest = models.ModifyResourceSchedulerRequest;
const LoginSettings = models.LoginSettings;
const PriceResource = models.PriceResource;
const ModifySLInstanceRequest = models.ModifySLInstanceRequest;
const ContainerExtraConf = models.ContainerExtraConf;
const ResourceDetail = models.ResourceDetail;
const ModifyYarnQueueV2Request = models.ModifyYarnQueueV2Request;
const DescribeClusterNodesRequest = models.DescribeClusterNodesRequest;
const UpdateInstanceSettings = models.UpdateInstanceSettings;
const DescribeEmrOverviewMetricsResponse = models.DescribeEmrOverviewMetricsResponse;
const ClusterRelationMeta = models.ClusterRelationMeta;
const VolumeSetting = models.VolumeSetting;
const TerminateSLInstanceResponse = models.TerminateSLInstanceResponse;
const OtherAccountInfo = models.OtherAccountInfo;
const DescribeAutoScaleStrategiesRequest = models.DescribeAutoScaleStrategiesRequest;
const NodeSpecDiskV2 = models.NodeSpecDiskV2;
const DeployYarnConfResponse = models.DeployYarnConfResponse;
const FlowExtraDetail = models.FlowExtraDetail;
const InquiryPriceRenewInstanceRequest = models.InquiryPriceRenewInstanceRequest;
const DynamicInstanceGroupSpec = models.DynamicInstanceGroupSpec;
const NodeMark = models.NodeMark;
const MultiDiskMC = models.MultiDiskMC;
const CustomMetaInfo = models.CustomMetaInfo;
const DeleteGroupsSTDRequest = models.DeleteGroupsSTDRequest;
const CBSInstance = models.CBSInstance;
const DescribeAutoScaleStrategiesResponse = models.DescribeAutoScaleStrategiesResponse;
const ExternalService = models.ExternalService;
const CreateDynamicInstanceResponse = models.CreateDynamicInstanceResponse;
const ModifyAutoScaleStrategyResponse = models.ModifyAutoScaleStrategyResponse;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const LoadMetricsConditions = models.LoadMetricsConditions;
const DescribeEmrApplicationStaticsResponse = models.DescribeEmrApplicationStaticsResponse;
const NodeSpecType = models.NodeSpecType;
const SparkApplicationsList = models.SparkApplicationsList;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const NodeSelectorRequirement = models.NodeSelectorRequirement;
const DescribeExportConfsResponse = models.DescribeExportConfsResponse;
const EmrPrice = models.EmrPrice;
const NodeHardwareInfo = models.NodeHardwareInfo;
const ServiceBasicRestartInfo = models.ServiceBasicRestartInfo;
const TerminateClusterNodesRequest = models.TerminateClusterNodesRequest;
const Filters = models.Filters;
const ModifyServiceParamsByExportConfsResponse = models.ModifyServiceParamsByExportConfsResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const NodeAffinity = models.NodeAffinity;
const WeightedPodAffinityTerm = models.WeightedPodAffinityTerm;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.intl.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * This API is used to modify a user password (user management).
     * @param {ModifyUserManagerPwdRequest} req
     * @param {function(string, ModifyUserManagerPwdResponse):void} cb
     * @public
     */
    ModifyUserManagerPwd(req, cb) {
        let resp = new ModifyUserManagerPwdResponse();
        this.request("ModifyUserManagerPwd", req, resp, cb);
    }

    /**
     * This API is used to create an EMR cluster.
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
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
     * This API is used to bring the deployment into effect in YARN resource scheduling.
     * @param {DeployYarnConfRequest} req
     * @param {function(string, DeployYarnConfResponse):void} cb
     * @public
     */
    DeployYarnConf(req, cb) {
        let resp = new DeployYarnConfResponse();
        this.request("DeployYarnConf", req, resp, cb);
    }

    /**
     * This API is used to terminate an EMR instance. It is supported only for the officially billed version of EMR.
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        let resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain an overview of HBase table-level monitoring data.
     * @param {DescribeHBaseTableOverviewRequest} req
     * @param {function(string, DescribeHBaseTableOverviewResponse):void} cb
     * @public
     */
    DescribeHBaseTableOverview(req, cb) {
        let resp = new DescribeHBaseTableOverviewResponse();
        this.request("DescribeHBaseTableOverview", req, resp, cb);
    }

    /**
     * This API is used to create a DynamicInstance in a containerized EMR on TKE cluster.
     * @param {CreateDynamicInstanceRequest} req
     * @param {function(string, CreateDynamicInstanceResponse):void} cb
     * @public
     */
    CreateDynamicInstance(req, cb) {
        let resp = new CreateDynamicInstanceResponse();
        this.request("CreateDynamicInstance", req, resp, cb);
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
     * This API is used to obtain Kyuubi query information.
     * @param {DescribeKyuubiQueryInfoRequest} req
     * @param {function(string, DescribeKyuubiQueryInfoResponse):void} cb
     * @public
     */
    DescribeKyuubiQueryInfo(req, cb) {
        let resp = new DescribeKyuubiQueryInfoResponse();
        this.request("DescribeKyuubiQueryInfo", req, resp, cb);
    }

    /**
     * This API is used to delete an automatic scaling rule. Nodes scaled based on this rule are terminated in the backend.
     * @param {DeleteAutoScaleStrategyRequest} req
     * @param {function(string, DeleteAutoScaleStrategyResponse):void} cb
     * @public
     */
    DeleteAutoScaleStrategy(req, cb) {
        let resp = new DeleteAutoScaleStrategyResponse();
        this.request("DeleteAutoScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to scale out cluster nodes.
     * @param {ScaleOutClusterRequest} req
     * @param {function(string, ScaleOutClusterResponse):void} cb
     * @public
     */
    ScaleOutCluster(req, cb) {
        let resp = new ScaleOutClusterResponse();
        this.request("ScaleOutCluster", req, resp, cb);
    }

    /**
     * This API is used to query information of files stored in HDFS.
     * @param {DescribeHDFSStorageInfoRequest} req
     * @param {function(string, DescribeHDFSStorageInfoResponse):void} cb
     * @public
     */
    DescribeHDFSStorageInfo(req, cb) {
        let resp = new DescribeHDFSStorageInfoResponse();
        this.request("DescribeHDFSStorageInfo", req, resp, cb);
    }

    /**
     * This API is used to query the change details of YARN resource scheduling.
     * @param {DescribeResourceScheduleDiffDetailRequest} req
     * @param {function(string, DescribeResourceScheduleDiffDetailResponse):void} cb
     * @public
     */
    DescribeResourceScheduleDiffDetail(req, cb) {
        let resp = new DescribeResourceScheduleDiffDetailResponse();
        this.request("DescribeResourceScheduleDiffDetail", req, resp, cb);
    }

    /**
     * This API is used to create a Serverless instance, for example, HBase, StarRocks, and TCBase instances.- This API is successfully called, and a Serverless instance is created. If the instance creation request succeeds, InstanceId of the instance and RequestID of the request are returned.
- This is an asynchronous API. The operation is not completed immediately when the API call returns. The instance operation result can be viewed by calling the DescribeInstancesList API, and the StatusDesc field for the current instance can be returned.
     * @param {CreateSLInstanceRequest} req
     * @param {function(string, CreateSLInstanceResponse):void} cb
     * @public
     */
    CreateSLInstance(req, cb) {
        let resp = new CreateSLInstanceResponse();
        this.request("CreateSLInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain Hive query information.
     * @param {DescribeHiveQueriesRequest} req
     * @param {function(string, DescribeHiveQueriesResponse):void} cb
     * @public
     */
    DescribeHiveQueries(req, cb) {
        let resp = new DescribeHiveQueriesResponse();
        this.request("DescribeHiveQueries", req, resp, cb);
    }

    /**
     * This API is used to update a DynamicInstance in a containerized EMR on TKE cluster.
     * @param {ModifyDynamicInstanceRequest} req
     * @param {function(string, ModifyDynamicInstanceResponse):void} cb
     * @public
     */
    ModifyDynamicInstance(req, cb) {
        let resp = new ModifyDynamicInstanceResponse();
        this.request("ModifyDynamicInstance", req, resp, cb);
    }

    /**
     * This API is used to modify an automatic scaling rule.
     * @param {ModifyAutoScaleStrategyRequest} req
     * @param {function(string, ModifyAutoScaleStrategyResponse):void} cb
     * @public
     */
    ModifyAutoScaleStrategy(req, cb) {
        let resp = new ModifyAutoScaleStrategyResponse();
        this.request("ModifyAutoScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to obtain Trino (PrestoSQL) query information.
     * @param {DescribeTrinoQueryInfoRequest} req
     * @param {function(string, DescribeTrinoQueryInfoResponse):void} cb
     * @public
     */
    DescribeTrinoQueryInfo(req, cb) {
        let resp = new DescribeTrinoQueryInfoResponse();
        this.request("DescribeTrinoQueryInfo", req, resp, cb);
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
     * This API is used to change user information in a user group.
     * @param {ModifyUsersOfGroupSTDRequest} req
     * @param {function(string, ModifyUsersOfGroupSTDResponse):void} cb
     * @public
     */
    ModifyUsersOfGroupSTD(req, cb) {
        let resp = new ModifyUsersOfGroupSTDResponse();
        this.request("ModifyUsersOfGroupSTD", req, resp, cb);
    }

    /**
     * This API is used to forcibly modify a tag.
     * @param {ModifyResourcesTagsRequest} req
     * @param {function(string, ModifyResourcesTagsResponse):void} cb
     * @public
     */
    ModifyResourcesTags(req, cb) {
        let resp = new ModifyResourcesTagsResponse();
        this.request("ModifyResourcesTags", req, resp, cb);
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
     * This API is used to obtain the detailed automatic scaling records of a cluster.
     * @param {DescribeAutoScaleRecordsRequest} req
     * @param {function(string, DescribeAutoScaleRecordsResponse):void} cb
     * @public
     */
    DescribeAutoScaleRecords(req, cb) {
        let resp = new DescribeAutoScaleRecordsResponse();
        this.request("DescribeAutoScaleRecords", req, resp, cb);
    }

    /**
     * This API is used to scale out nodes.
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to mount a cloud disk.
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * This API is used to set specifications of a node in the current cluster as the default or cancel the default setting.
     * @param {SetNodeResourceConfigDefaultRequest} req
     * @param {function(string, SetNodeResourceConfigDefaultResponse):void} cb
     * @public
     */
    SetNodeResourceConfigDefault(req, cb) {
        let resp = new SetNodeResourceConfigDefaultResponse();
        this.request("SetNodeResourceConfigDefault", req, resp, cb);
    }

    /**
     * This API is used to obtain StarRocks query information.
     * @param {DescribeStarRocksQueryInfoRequest} req
     * @param {function(string, DescribeStarRocksQueryInfoResponse):void} cb
     * @public
     */
    DescribeStarRocksQueryInfo(req, cb) {
        let resp = new DescribeStarRocksQueryInfoResponse();
        this.request("DescribeStarRocksQueryInfo", req, resp, cb);
    }

    /**
     * This API is used to inquire the price for renewal.
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        let resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
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
     * This API is used to convert a monthly subscription cluster to a pay-as-you-go cluster (excluding CDB).
     * @param {ConvertPreToPostClusterRequest} req
     * @param {function(string, ConvertPreToPostClusterResponse):void} cb
     * @public
     */
    ConvertPreToPostCluster(req, cb) {
        let resp = new ConvertPreToPostClusterResponse();
        this.request("ConvertPreToPostCluster", req, resp, cb);
    }

    /**
     * This API is used to terminate a Serverless HBase instance.
     * @param {TerminateSLInstanceRequest} req
     * @param {function(string, TerminateSLInstanceResponse):void} cb
     * @public
     */
    TerminateSLInstance(req, cb) {
        let resp = new TerminateSLInstanceResponse();
        this.request("TerminateSLInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain a bootstrap script.
     * @param {DescribeBootScriptRequest} req
     * @param {function(string, DescribeBootScriptResponse):void} cb
     * @public
     */
    DescribeBootScript(req, cb) {
        let resp = new DescribeBootScriptResponse();
        this.request("DescribeBootScript", req, resp, cb);
    }

    /**
     * This API is used to query detailed information of the Serverless HBase instance list.
     * @param {DescribeSLInstanceListRequest} req
     * @param {function(string, DescribeSLInstanceListResponse):void} cb
     * @public
     */
    DescribeSLInstanceList(req, cb) {
        let resp = new DescribeSLInstanceListResponse();
        this.request("DescribeSLInstanceList", req, resp, cb);
    }

    /**
     * This API is used to modify a bootstrap script.
     * @param {ModifyBootScriptRequest} req
     * @param {function(string, ModifyBootScriptResponse):void} cb
     * @public
     */
    ModifyBootScript(req, cb) {
        let resp = new ModifyBootScriptResponse();
        this.request("ModifyBootScript", req, resp, cb);
    }

    /**
     * This API is used to change the configuration of a Serverless HBase instance.
- This API is successfully called, and a Serverless HBase instance is created. If the instance creation request succeeds, RequestID of the request is returned.
- This is an asynchronous API. The operation is not completed immediately when the API call returns. The instance operation result can be viewed by calling the DescribeInstancesList API, and the StatusDesc field for the current instance can be returned.
     * @param {ModifySLInstanceRequest} req
     * @param {function(string, ModifySLInstanceResponse):void} cb
     * @public
     */
    ModifySLInstance(req, cb) {
        let resp = new ModifySLInstanceResponse();
        this.request("ModifySLInstance", req, resp, cb);
    }

    /**
     * This API is used to create an EMR cluster.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * This API is used to inquire the price for instance creation.
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * This API is used to add an automatic scaling rule by load and time.
     * @param {AddMetricScaleStrategyRequest} req
     * @param {function(string, AddMetricScaleStrategyResponse):void} cb
     * @public
     */
    AddMetricScaleStrategy(req, cb) {
        let resp = new AddMetricScaleStrategyResponse();
        this.request("AddMetricScaleStrategy", req, resp, cb);
    }

    /**
     * This API is used to view the YARN resource scheduling history. It has been deprecated. Please use Task Center to view the history records.
     * @param {DescribeYarnScheduleHistoryRequest} req
     * @param {function(string, DescribeYarnScheduleHistoryResponse):void} cb
     * @public
     */
    DescribeYarnScheduleHistory(req, cb) {
        let resp = new DescribeYarnScheduleHistoryResponse();
        this.request("DescribeYarnScheduleHistory", req, resp, cb);
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
     * This API is used to query metric data on the monitoring overview page.
     * @param {DescribeEmrOverviewMetricsRequest} req
     * @param {function(string, DescribeEmrOverviewMetricsResponse):void} cb
     * @public
     */
    DescribeEmrOverviewMetrics(req, cb) {
        let resp = new DescribeEmrOverviewMetricsResponse();
        this.request("DescribeEmrOverviewMetrics", req, resp, cb);
    }

    /**
     * This API is used to add node specifications for the current cluster.
     * @param {AddNodeResourceConfigRequest} req
     * @param {function(string, AddNodeResourceConfigResponse):void} cb
     * @public
     */
    AddNodeResourceConfig(req, cb) {
        let resp = new AddNodeResourceConfigResponse();
        this.request("AddNodeResourceConfig", req, resp, cb);
    }

    /**
     * This API is used to scale in Task nodes.
     * @param {TerminateTasksRequest} req
     * @param {function(string, TerminateTasksResponse):void} cb
     * @public
     */
    TerminateTasks(req, cb) {
        let resp = new TerminateTasksResponse();
        this.request("TerminateTasks", req, resp, cb);
    }

    /**
     * This API is used to query data disk information of a node.
     * @param {DescribeNodeDataDisksRequest} req
     * @param {function(string, DescribeNodeDataDisksResponse):void} cb
     * @public
     */
    DescribeNodeDataDisks(req, cb) {
        let resp = new DescribeNodeDataDisksResponse();
        this.request("DescribeNodeDataDisks", req, resp, cb);
    }

    /**
     * This API is used to query the global configuration of YARN resource scheduling.
     * @param {DescribeGlobalConfigRequest} req
     * @param {function(string, DescribeGlobalConfigResponse):void} cb
     * @public
     */
    DescribeGlobalConfig(req, cb) {
        let resp = new DescribeGlobalConfigResponse();
        this.request("DescribeGlobalConfig", req, resp, cb);
    }

    /**
     * This API is used to query information of a cluster node.
     * @param {DescribeClusterNodesRequest} req
     * @param {function(string, DescribeClusterNodesResponse):void} cb
     * @public
     */
    DescribeClusterNodes(req, cb) {
        let resp = new DescribeClusterNodesResponse();
        this.request("DescribeClusterNodes", req, resp, cb);
    }

    /**
     * This API is used to scale out cloud data disks.
     * @param {ResizeDataDisksRequest} req
     * @param {function(string, ResizeDataDisksResponse):void} cb
     * @public
     */
    ResizeDataDisks(req, cb) {
        let resp = new ResizeDataDisksResponse();
        this.request("ResizeDataDisks", req, resp, cb);
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
     * This API is used to set the inspection task configuration.
     * @param {ModifyInspectionSettingsRequest} req
     * @param {function(string, ModifyInspectionSettingsResponse):void} cb
     * @public
     */
    ModifyInspectionSettings(req, cb) {
        let resp = new ModifyInspectionSettingsResponse();
        this.request("ModifyInspectionSettings", req, resp, cb);
    }

    /**
     * Configuration import and delivery
     * @param {ModifyServiceParamsByExportConfsRequest} req
     * @param {function(string, ModifyServiceParamsByExportConfsResponse):void} cb
     * @public
     */
    ModifyServiceParamsByExportConfs(req, cb) {
        let resp = new ModifyServiceParamsByExportConfsResponse();
        this.request("ModifyServiceParamsByExportConfs", req, resp, cb);
    }

    /**
     * This API is used to query the StoreSize monitoring metric data at the HBase table level.
     * @param {DescribeHBaseTableStoreSizeMetricRequest} req
     * @param {function(string, DescribeHBaseTableStoreSizeMetricResponse):void} cb
     * @public
     */
    DescribeHBaseTableStoreSizeMetric(req, cb) {
        let resp = new DescribeHBaseTableStoreSizeMetricResponse();
        this.request("DescribeHBaseTableStoreSizeMetric", req, resp, cb);
    }

    /**
     * This API is used to inquire the price for the configuration change.
     * @param {InquiryPriceUpdateInstanceRequest} req
     * @param {function(string, InquiryPriceUpdateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpdateInstance(req, cb) {
        let resp = new InquiryPriceUpdateInstanceResponse();
        this.request("InquiryPriceUpdateInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain the instance operation logs.
     * @param {DescribeInstanceOplogRequest} req
     * @param {function(string, DescribeInstanceOplogResponse):void} cb
     * @public
     */
    DescribeInstanceOplog(req, cb) {
        let resp = new DescribeInstanceOplogResponse();
        this.request("DescribeInstanceOplog", req, resp, cb);
    }

    /**
     * This API is used to query EMR event monitoring data.
     * @param {DescribeEMREventListRequest} req
     * @param {function(string, DescribeEMREventListResponse):void} cb
     * @public
     */
    DescribeEMREventList(req, cb) {
        let resp = new DescribeEMREventListResponse();
        this.request("DescribeEMREventList", req, resp, cb);
    }

    /**
     * This API is used to inquire the price for a scale-out.
     * @param {InquiryPriceScaleOutInstanceRequest} req
     * @param {function(string, InquiryPriceScaleOutInstanceResponse):void} cb
     * @public
     */
    InquiryPriceScaleOutInstance(req, cb) {
        let resp = new InquiryPriceScaleOutInstanceResponse();
        this.request("InquiryPriceScaleOutInstance", req, resp, cb);
    }

    /**
     * This API is used to execute operations such as starting, stopping, and restarting a service.
     * @param {StartStopServiceOrMonitorRequest} req
     * @param {function(string, StartStopServiceOrMonitorResponse):void} cb
     * @public
     */
    StartStopServiceOrMonitor(req, cb) {
        let resp = new StartStopServiceOrMonitorResponse();
        this.request("StartStopServiceOrMonitor", req, resp, cb);
    }

    /**
     * This API is used to modify the Serverless HBase instance name.
     * @param {ModifySLInstanceBasicRequest} req
     * @param {function(string, ModifySLInstanceBasicResponse):void} cb
     * @public
     */
    ModifySLInstanceBasic(req, cb) {
        let resp = new ModifySLInstanceBasicResponse();
        this.request("ModifySLInstanceBasic", req, resp, cb);
    }

    /**
     * This API is used to describe the DynamicInstance list of an EMR on TKE cluster.
     * @param {DescribeDynamicInstanceListRequest} req
     * @param {function(string, DescribeDynamicInstanceListResponse):void} cb
     * @public
     */
    DescribeDynamicInstanceList(req, cb) {
        let resp = new DescribeDynamicInstanceListResponse();
        this.request("DescribeDynamicInstanceList", req, resp, cb);
    }

    /**
     * This API is used to terminate a cluster node.
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
     * This API is used to modify a user group in user management.
     * @param {ModifyUserGroupRequest} req
     * @param {function(string, ModifyUserGroupResponse):void} cb
     * @public
     */
    ModifyUserGroup(req, cb) {
        let resp = new ModifyUserGroupResponse();
        this.request("ModifyUserGroup", req, resp, cb);
    }

    /**
     * This API is used to obtain the read/write rate at the HBase table level.
     * @param {DescribeHBaseTableRequestMetricRequest} req
     * @param {function(string, DescribeHBaseTableRequestMetricResponse):void} cb
     * @public
     */
    DescribeHBaseTableRequestMetric(req, cb) {
        let resp = new DescribeHBaseTableRequestMetricResponse();
        this.request("DescribeHBaseTableRequestMetric", req, resp, cb);
    }

    /**
     * This API is used to query the YARN task statistics information.
     * @param {DescribeEmrApplicationStaticsRequest} req
     * @param {function(string, DescribeEmrApplicationStaticsResponse):void} cb
     * @public
     */
    DescribeEmrApplicationStatics(req, cb) {
        let resp = new DescribeEmrApplicationStaticsResponse();
        this.request("DescribeEmrApplicationStatics", req, resp, cb);
    }

    /**
     * This API is used to install a component. For components dependent on the MetaDB, a CDB order may be required. The components that can be installed on the current cluster and the components that might require a CDB order can be viewed via InstallSoftWareInfo.
     * @param {InstallSoftwareRequest} req
     * @param {function(string, InstallSoftwareResponse):void} cb
     * @public
     */
    InstallSoftware(req, cb) {
        let resp = new InstallSoftwareResponse();
        this.request("InstallSoftware", req, resp, cb);
    }

    /**
     * This API is used to query basic information of a Serverless HBase instance.
     * @param {DescribeSLInstanceRequest} req
     * @param {function(string, DescribeSLInstanceResponse):void} cb
     * @public
     */
    DescribeSLInstance(req, cb) {
        let resp = new DescribeSLInstanceResponse();
        this.request("DescribeSLInstance", req, resp, cb);
    }

    /**
     * This API is used to obtain the Spark query information list.
     * @param {DescribeSparkQueriesRequest} req
     * @param {function(string, DescribeSparkQueriesResponse):void} cb
     * @public
     */
    DescribeSparkQueries(req, cb) {
        let resp = new DescribeSparkQueriesResponse();
        this.request("DescribeSparkQueries", req, resp, cb);
    }

    /**
     * This API is used to modify the global configuration of YARN resource scheduling.
     * @param {ModifyGlobalConfigRequest} req
     * @param {function(string, ModifyGlobalConfigResponse):void} cb
     * @public
     */
    ModifyGlobalConfig(req, cb) {
        let resp = new ModifyGlobalConfigResponse();
        this.request("ModifyGlobalConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain an automatic scaling rule.
     * @param {DescribeAutoScaleStrategiesRequest} req
     * @param {function(string, DescribeAutoScaleStrategiesResponse):void} cb
     * @public
     */
    DescribeAutoScaleStrategies(req, cb) {
        let resp = new DescribeAutoScaleStrategiesResponse();
        this.request("DescribeAutoScaleStrategies", req, resp, cb);
    }

    /**
     * This API is used to obtain the global configuration of auto scaling.
     * @param {DescribeAutoScaleGroupGlobalConfRequest} req
     * @param {function(string, DescribeAutoScaleGroupGlobalConfResponse):void} cb
     * @public
     */
    DescribeAutoScaleGroupGlobalConf(req, cb) {
        let resp = new DescribeAutoScaleGroupGlobalConfResponse();
        this.request("DescribeAutoScaleGroupGlobalConf", req, resp, cb);
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
     * This API is used to terminate a DynamicInstance in a containerized EMR on TKE cluster.
     * @param {TerminateDynamicInstancesRequest} req
     * @param {function(string, TerminateDynamicInstancesResponse):void} cb
     * @public
     */
    TerminateDynamicInstances(req, cb) {
        let resp = new TerminateDynamicInstancesResponse();
        this.request("TerminateDynamicInstances", req, resp, cb);
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
     * This API is used for clusters with the OpenLDAP component installed.
This API is used to export users in batches. For a Kerberos cluster, if the keytab file download link is required, set NeedKeytabInfo to true. Note: If SupportDownLoadKeyTab is set to true but DownLoadKeyTabUrl is an empty string, the keytab file is not ready (being generated).
     * @param {DescribeUsersForUserManagerRequest} req
     * @param {function(string, DescribeUsersForUserManagerResponse):void} cb
     * @public
     */
    DescribeUsersForUserManager(req, cb) {
        let resp = new DescribeUsersForUserManagerResponse();
        this.request("DescribeUsersForUserManager", req, resp, cb);
    }

    /**
     * This API is used to describe the details of a DynamicInstance in an EMR on TKE cluster.
     * @param {DescribeDynamicInstanceDetailRequest} req
     * @param {function(string, DescribeDynamicInstanceDetailResponse):void} cb
     * @public
     */
    DescribeDynamicInstanceDetail(req, cb) {
        let resp = new DescribeDynamicInstanceDetailResponse();
        this.request("DescribeDynamicInstanceDetail", req, resp, cb);
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
     * This API is used to query the running status details of an EMR cluster task.
     * @param {DescribeClusterFlowStatusDetailRequest} req
     * @param {function(string, DescribeClusterFlowStatusDetailResponse):void} cb
     * @public
     */
    DescribeClusterFlowStatusDetail(req, cb) {
        let resp = new DescribeClusterFlowStatusDetailResponse();
        this.request("DescribeClusterFlowStatusDetail", req, resp, cb);
    }

    /**
     * This API is used to obtain cluster MetaDB data.
     * @param {DescribeMetaDBInfoRequest} req
     * @param {function(string, DescribeMetaDBInfoResponse):void} cb
     * @public
     */
    DescribeMetaDBInfo(req, cb) {
        let resp = new DescribeMetaDBInfoResponse();
        this.request("DescribeMetaDBInfo", req, resp, cb);
    }

    /**
     * This API is used to query cluster information.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to create user groups in batches in user management.
     * @param {CreateGroupsSTDRequest} req
     * @param {function(string, CreateGroupsSTDResponse):void} cb
     * @public
     */
    CreateGroupsSTD(req, cb) {
        let resp = new CreateGroupsSTDResponse();
        this.request("CreateGroupsSTD", req, resp, cb);
    }

    /**
     * This API is used for clusters with the OpenLDAP component installed.
This API is used to add a user list (user management).
     * @param {AddUsersForUserManagerRequest} req
     * @param {function(string, AddUsersForUserManagerResponse):void} cb
     * @public
     */
    AddUsersForUserManager(req, cb) {
        let resp = new AddUsersForUserManagerResponse();
        this.request("AddUsersForUserManager", req, resp, cb);
    }

    /**
     * This API is used to obtain the Spark application list.
     * @param {DescribeSparkApplicationsRequest} req
     * @param {function(string, DescribeSparkApplicationsResponse):void} cb
     * @public
     */
    DescribeSparkApplications(req, cb) {
        let resp = new DescribeSparkApplicationsResponse();
        this.request("DescribeSparkApplications", req, resp, cb);
    }

    /**
     * This API is used to introduce the prerequisites for a prepaid cluster.
This API is used to enable or disable auto-renewal at the resource level.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to modify a YARN resource scheduler. After the modification, click Deploy to make the modification take effect.
     * @param {ModifyResourceSchedulerRequest} req
     * @param {function(string, ModifyResourceSchedulerResponse):void} cb
     * @public
     */
    ModifyResourceScheduler(req, cb) {
        let resp = new ModifyResourceSchedulerResponse();
        this.request("ModifyResourceScheduler", req, resp, cb);
    }

    /**
     * This API is used to query YARN resource scheduling information. It has been deprecated. Please use `DescribeYarnQueue` to query queue information.
     * @param {DescribeResourceScheduleRequest} req
     * @param {function(string, DescribeResourceScheduleResponse):void} cb
     * @public
     */
    DescribeResourceSchedule(req, cb) {
        let resp = new DescribeResourceScheduleResponse();
        this.request("DescribeResourceSchedule", req, resp, cb);
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
     * This API is used to change the instance configuration.
     * @param {ModifyResourceRequest} req
     * @param {function(string, ModifyResourceResponse):void} cb
     * @public
     */
    ModifyResource(req, cb) {
        let resp = new ModifyResourceResponse();
        this.request("ModifyResource", req, resp, cb);
    }

    /**
     * This API is used to query the export configuration.
     * @param {DescribeExportConfsRequest} req
     * @param {function(string, DescribeExportConfsResponse):void} cb
     * @public
     */
    DescribeExportConfs(req, cb) {
        let resp = new DescribeExportConfsResponse();
        this.request("DescribeExportConfs", req, resp, cb);
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
     * This API is used to delete node specifications of the current cluster.
     * @param {DeleteNodeResourceConfigRequest} req
     * @param {function(string, DeleteNodeResourceConfigResponse):void} cb
     * @public
     */
    DeleteNodeResourceConfig(req, cb) {
        let resp = new DeleteNodeResourceConfigResponse();
        this.request("DeleteNodeResourceConfig", req, resp, cb);
    }

    /**
     * This API is used to modify the cluster name.
     * @param {ModifyInstanceBasicRequest} req
     * @param {function(string, ModifyInstanceBasicResponse):void} cb
     * @public
     */
    ModifyInstanceBasic(req, cb) {
        let resp = new ModifyInstanceBasicResponse();
        this.request("ModifyInstanceBasic", req, resp, cb);
    }


}
module.exports = EmrClient;
