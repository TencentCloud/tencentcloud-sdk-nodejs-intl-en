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
const UpgradeProxyVersionRequest = models.UpgradeProxyVersionRequest;
const RemoveReplicationGroupRequest = models.RemoveReplicationGroupRequest;
const UpgradeSmallVersionRequest = models.UpgradeSmallVersionRequest;
const ModifyInstanceParamsResponse = models.ModifyInstanceParamsResponse;
const EnableReplicaReadonlyRequest = models.EnableReplicaReadonlyRequest;
const ModifyInstanceAvailabilityZonesRequest = models.ModifyInstanceAvailabilityZonesRequest;
const RedisBackupSet = models.RedisBackupSet;
const DescribeInstanceMonitorTopNCmdResponse = models.DescribeInstanceMonitorTopNCmdResponse;
const ModifyInstanceAvailabilityZonesResponse = models.ModifyInstanceAvailabilityZonesResponse;
const ModifyAutoBackupConfigResponse = models.ModifyAutoBackupConfigResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const AllocateWanAddressRequest = models.AllocateWanAddressRequest;
const ApplyParamsTemplateRequest = models.ApplyParamsTemplateRequest;
const DescribeReplicationGroupInstanceRequest = models.DescribeReplicationGroupInstanceRequest;
const UpgradeInstanceVersionResponse = models.UpgradeInstanceVersionResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const CreateReplicationGroupRequest = models.CreateReplicationGroupRequest;
const DescribeInstanceSpecBandwidthResponse = models.DescribeInstanceSpecBandwidthResponse;
const DescribeInstanceZoneInfoRequest = models.DescribeInstanceZoneInfoRequest;
const ModifyConnectionConfigResponse = models.ModifyConnectionConfigResponse;
const ModifyNetworkConfigResponse = models.ModifyNetworkConfigResponse;
const CommandTake = models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models.DescribeInstanceMonitorBigKeyResponse;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ModifyInstancePasswordResponse = models.ModifyInstancePasswordResponse;
const DescribeSecondLevelBackupInfoResponse = models.DescribeSecondLevelBackupInfoResponse;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const DescribeCommonDBInstancesRequest = models.DescribeCommonDBInstancesRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const RedisNodeInfo = models.RedisNodeInfo;
const ModifyBackupDownloadRestrictionResponse = models.ModifyBackupDownloadRestrictionResponse;
const DescribeBackupUrlRequest = models.DescribeBackupUrlRequest;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const TaskInfoDetail = models.TaskInfoDetail;
const DescribeInstanceZoneInfoResponse = models.DescribeInstanceZoneInfoResponse;
const Account = models.Account;
const InstanceProxySlowlogDetail = models.InstanceProxySlowlogDetail;
const SecurityGroupsInboundAndOutbound = models.SecurityGroupsInboundAndOutbound;
const ResetPasswordResponse = models.ResetPasswordResponse;
const ClearInstanceRequest = models.ClearInstanceRequest;
const UpgradeInstanceVersionRequest = models.UpgradeInstanceVersionRequest;
const RegionConf = models.RegionConf;
const BigKeyInfo = models.BigKeyInfo;
const DescribeBandwidthRangeResponse = models.DescribeBandwidthRangeResponse;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const RedisInstanceEvent = models.RedisInstanceEvent;
const UpgradeVersionToMultiAvailabilityZonesResponse = models.UpgradeVersionToMultiAvailabilityZonesResponse;
const SecurityGroup = models.SecurityGroup;
const DescribeBandwidthRangeRequest = models.DescribeBandwidthRangeRequest;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const ModifyAutoBackupConfigRequest = models.ModifyAutoBackupConfigRequest;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeInstanceDealDetailRequest = models.DescribeInstanceDealDetailRequest;
const KillMasterGroupResponse = models.KillMasterGroupResponse;
const RedisNode = models.RedisNode;
const DescribeProjectSecurityGroupRequest = models.DescribeProjectSecurityGroupRequest;
const ParameterDetail = models.ParameterDetail;
const DescribeInstanceShardsResponse = models.DescribeInstanceShardsResponse;
const DescribeRedisClusterOverviewResponse = models.DescribeRedisClusterOverviewResponse;
const DisableReplicaReadonlyRequest = models.DisableReplicaReadonlyRequest;
const CDCResource = models.CDCResource;
const ModifyInstanceLogDeliveryResponse = models.ModifyInstanceLogDeliveryResponse;
const ModifyBackupDownloadRestrictionRequest = models.ModifyBackupDownloadRestrictionRequest;
const DisableReplicaReadonlyResponse = models.DisableReplicaReadonlyResponse;
const DestroyPrepaidInstanceRequest = models.DestroyPrepaidInstanceRequest;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const InstanceTagInfo = models.InstanceTagInfo;
const DescribeInstanceDTSInfoResponse = models.DescribeInstanceDTSInfoResponse;
const DescribeInstanceEventsRequest = models.DescribeInstanceEventsRequest;
const DescribeGlobalReplicationAreaRequest = models.DescribeGlobalReplicationAreaRequest;
const AddReplicationInstanceResponse = models.AddReplicationInstanceResponse;
const DestroyPostpaidInstanceResponse = models.DestroyPostpaidInstanceResponse;
const SwitchInstanceVipRequest = models.SwitchInstanceVipRequest;
const ChangeReplicaToMasterRequest = models.ChangeReplicaToMasterRequest;
const ProxyNodes = models.ProxyNodes;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const RedisCommonInstanceList = models.RedisCommonInstanceList;
const SourceInfo = models.SourceInfo;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const ChangeMasterInstanceRequest = models.ChangeMasterInstanceRequest;
const DescribeInstanceDTSInfoRequest = models.DescribeInstanceDTSInfoRequest;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const DescribeTendisSlowLogResponse = models.DescribeTendisSlowLogResponse;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const ModifyInstanceAccountRequest = models.ModifyInstanceAccountRequest;
const ModifyMaintenanceWindowRequest = models.ModifyMaintenanceWindowRequest;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const DescribeBackupUrlResponse = models.DescribeBackupUrlResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const ModifyInstanceLogDeliveryRequest = models.ModifyInstanceLogDeliveryRequest;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const InstanceSecurityGroupDetail = models.InstanceSecurityGroupDetail;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DescribeReplicationGroupInstanceResponse = models.DescribeReplicationGroupInstanceResponse;
const UpgradeProxyVersionResponse = models.UpgradeProxyVersionResponse;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ModifyInstanceAccountResponse = models.ModifyInstanceAccountResponse;
const DelayDistribution = models.DelayDistribution;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const ModifyInstanceReadOnlyResponse = models.ModifyInstanceReadOnlyResponse;
const DescribeBackupDetailRequest = models.DescribeBackupDetailRequest;
const DescribeInstanceMonitorTookDistResponse = models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceBackupsResponse = models.DescribeInstanceBackupsResponse;
const InstanceIntegerParam = models.InstanceIntegerParam;
const UpgradeVersionToMultiAvailabilityZonesRequest = models.UpgradeVersionToMultiAvailabilityZonesRequest;
const ModfiyInstancePasswordResponse = models.ModfiyInstancePasswordResponse;
const AllocateWanAddressResponse = models.AllocateWanAddressResponse;
const DescribeInstanceMonitorTookDistRequest = models.DescribeInstanceMonitorTookDistRequest;
const DeleteReplicationInstanceRequest = models.DeleteReplicationInstanceRequest;
const SwitchAccessNewInstanceRequest = models.SwitchAccessNewInstanceRequest;
const RemoveReplicationGroupResponse = models.RemoveReplicationGroupResponse;
const KillMasterGroupRequest = models.KillMasterGroupRequest;
const SwitchAccessNewInstanceResponse = models.SwitchAccessNewInstanceResponse;
const CloneInstancesResponse = models.CloneInstancesResponse;
const ParamTemplateInfo = models.ParamTemplateInfo;
const DescribeInstanceMonitorTopNCmdTookResponse = models.DescribeInstanceMonitorTopNCmdTookResponse;
const CloseSSLRequest = models.CloseSSLRequest;
const DescribeInstanceMonitorBigKeySizeDistRequest = models.DescribeInstanceMonitorBigKeySizeDistRequest;
const DescribeInstanceAccountRequest = models.DescribeInstanceAccountRequest;
const InstanceTextParam = models.InstanceTextParam;
const DescribeInstanceLogDeliveryResponse = models.DescribeInstanceLogDeliveryResponse;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const ChangeMasterInstanceResponse = models.ChangeMasterInstanceResponse;
const ModifyInstanceEventRequest = models.ModifyInstanceEventRequest;
const SecondLevelBackupMissingTimestamps = models.SecondLevelBackupMissingTimestamps;
const DescribeBackupDetailResponse = models.DescribeBackupDetailResponse;
const ChangeReplicaToMasterResponse = models.ChangeReplicaToMasterResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const CloneInstancesRequest = models.CloneInstancesRequest;
const ApplyParamsTemplateResponse = models.ApplyParamsTemplateResponse;
const DescribeReplicationGroupRequest = models.DescribeReplicationGroupRequest;
const RedisNodes = models.RedisNodes;
const DescribeInstanceMonitorTopNCmdRequest = models.DescribeInstanceMonitorTopNCmdRequest;
const ModifyNetworkConfigRequest = models.ModifyNetworkConfigRequest;
const DescribeInstanceSecurityGroupRequest = models.DescribeInstanceSecurityGroupRequest;
const InstanceParamHistory = models.InstanceParamHistory;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const CleanUpInstanceResponse = models.CleanUpInstanceResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeParamTemplatesResponse = models.DescribeParamTemplatesResponse;
const DescribeInstanceShardsRequest = models.DescribeInstanceShardsRequest;
const Outbound = models.Outbound;
const DescribeAutoBackupConfigResponse = models.DescribeAutoBackupConfigResponse;
const InquiryPriceUpgradeInstanceRequest = models.InquiryPriceUpgradeInstanceRequest;
const ModifyParamTemplateResponse = models.ModifyParamTemplateResponse;
const DescribeProjectSecurityGroupsRequest = models.DescribeProjectSecurityGroupsRequest;
const DescribeInstanceMonitorBigKeySizeDistResponse = models.DescribeInstanceMonitorBigKeySizeDistResponse;
const DescribeInstanceEventsResponse = models.DescribeInstanceEventsResponse;
const CreateInstanceAccountRequest = models.CreateInstanceAccountRequest;
const RemoveReplicationInstanceRequest = models.RemoveReplicationInstanceRequest;
const EnableReplicaReadonlyResponse = models.EnableReplicaReadonlyResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeMaintenanceWindowResponse = models.DescribeMaintenanceWindowResponse;
const DescribeInstanceSecurityGroupResponse = models.DescribeInstanceSecurityGroupResponse;
const ReleaseWanAddressResponse = models.ReleaseWanAddressResponse;
const ProductConf = models.ProductConf;
const ModifyConnectionConfigRequest = models.ModifyConnectionConfigRequest;
const ManualBackupInstanceResponse = models.ManualBackupInstanceResponse;
const InstanceNode = models.InstanceNode;
const ModifyInstanceBackupModeResponse = models.ModifyInstanceBackupModeResponse;
const SwitchProxyResponse = models.SwitchProxyResponse;
const StartupInstanceResponse = models.StartupInstanceResponse;
const DescribeInstanceDTSInstanceInfo = models.DescribeInstanceDTSInstanceInfo;
const TradeDealDetail = models.TradeDealDetail;
const ResourceTag = models.ResourceTag;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const LogDeliveryInfo = models.LogDeliveryInfo;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const DeleteReplicationInstanceResponse = models.DeleteReplicationInstanceResponse;
const CleanUpInstanceRequest = models.CleanUpInstanceRequest;
const DescribeInstanceDealDetailResponse = models.DescribeInstanceDealDetailResponse;
const ModifyReplicationGroupRequest = models.ModifyReplicationGroupRequest;
const Groups = models.Groups;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const SourceCommand = models.SourceCommand;
const ModfiyInstancePasswordRequest = models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const ModifyInstancePasswordRequest = models.ModifyInstancePasswordRequest;
const ModifyReplicationGroupResponse = models.ModifyReplicationGroupResponse;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DescribeAutoBackupConfigRequest = models.DescribeAutoBackupConfigRequest;
const DescribeInstanceMonitorSIPResponse = models.DescribeInstanceMonitorSIPResponse;
const DestroyPostpaidInstanceRequest = models.DestroyPostpaidInstanceRequest;
const ChangeInstanceRoleRequest = models.ChangeInstanceRoleRequest;
const DescribeInstanceSupportFeatureRequest = models.DescribeInstanceSupportFeatureRequest;
const DeleteInstanceAccountRequest = models.DeleteInstanceAccountRequest;
const DescribeInstanceMonitorHotKeyRequest = models.DescribeInstanceMonitorHotKeyRequest;
const DescribeBackupDownloadRestrictionResponse = models.DescribeBackupDownloadRestrictionResponse;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ResourceBundle = models.ResourceBundle;
const ManualBackupInstanceRequest = models.ManualBackupInstanceRequest;
const DescribeReplicationGroupResponse = models.DescribeReplicationGroupResponse;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const AvailableRegion = models.AvailableRegion;
const InstanceSet = models.InstanceSet;
const ReleaseWanAddressRequest = models.ReleaseWanAddressRequest;
const CloseSSLResponse = models.CloseSSLResponse;
const ModifyMaintenanceWindowResponse = models.ModifyMaintenanceWindowResponse;
const CreateReplicationGroupResponse = models.CreateReplicationGroupResponse;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const DescribeInstanceMonitorTopNCmdTookRequest = models.DescribeInstanceMonitorTopNCmdTookRequest;
const DestroyPrepaidInstanceResponse = models.DestroyPrepaidInstanceResponse;
const ReplicaGroup = models.ReplicaGroup;
const DescribeRedisClusterOverviewRequest = models.DescribeRedisClusterOverviewRequest;
const DescribeCommonDBInstancesResponse = models.DescribeCommonDBInstancesResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeRedisClustersRequest = models.DescribeRedisClustersRequest;
const UpgradeSmallVersionResponse = models.UpgradeSmallVersionResponse;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const DescribeSSLStatusRequest = models.DescribeSSLStatusRequest;
const OpenSSLRequest = models.OpenSSLRequest;
const BackupDownloadInfo = models.BackupDownloadInfo;
const BigKeyTypeInfo = models.BigKeyTypeInfo;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeMaintenanceWindowRequest = models.DescribeMaintenanceWindowRequest;
const DescribeInstanceSupportFeatureResponse = models.DescribeInstanceSupportFeatureResponse;
const DescribeInstanceLogDeliveryRequest = models.DescribeInstanceLogDeliveryRequest;
const AddReplicationInstanceRequest = models.AddReplicationInstanceRequest;
const InstanceClusterNode = models.InstanceClusterNode;
const DescribeSSLStatusResponse = models.DescribeSSLStatusResponse;
const DescribeTendisSlowLogRequest = models.DescribeTendisSlowLogRequest;
const DescribeProxySlowLogRequest = models.DescribeProxySlowLogRequest;
const DescribeRedisClustersResponse = models.DescribeRedisClustersResponse;
const ModifyInstanceBackupModeRequest = models.ModifyInstanceBackupModeRequest;
const DescribeProxySlowLogResponse = models.DescribeProxySlowLogResponse;
const ModifyInstanceReadOnlyRequest = models.ModifyInstanceReadOnlyRequest;
const DescribeInstanceAccountResponse = models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models.DescribeInstanceMonitorBigKeyRequest;
const DescribeBackupDownloadRestrictionRequest = models.DescribeBackupDownloadRestrictionRequest;
const TendisNodes = models.TendisNodes;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const SwitchProxyRequest = models.SwitchProxyRequest;
const DescribeInstanceSpecBandwidthRequest = models.DescribeInstanceSpecBandwidthRequest;
const SwitchInstanceVipResponse = models.SwitchInstanceVipResponse;
const BackupLimitVpcItem = models.BackupLimitVpcItem;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const StartupInstanceRequest = models.StartupInstanceRequest;
const HotKeyInfo = models.HotKeyInfo;
const InstanceEnumParam = models.InstanceEnumParam;
const CreateInstanceAccountResponse = models.CreateInstanceAccountResponse;
const DescribeInstanceBackupsRequest = models.DescribeInstanceBackupsRequest;
const RemoveReplicationInstanceResponse = models.RemoveReplicationInstanceResponse;
const DescribeSecondLevelBackupInfoRequest = models.DescribeSecondLevelBackupInfoRequest;
const SecurityGroupDetail = models.SecurityGroupDetail;
const InquiryPriceUpgradeInstanceResponse = models.InquiryPriceUpgradeInstanceResponse;
const DeleteInstanceAccountResponse = models.DeleteInstanceAccountResponse;
const DescribeInstanceMonitorSIPRequest = models.DescribeInstanceMonitorSIPRequest;
const InstanceClusterShard = models.InstanceClusterShard;
const OpenSSLResponse = models.OpenSSLResponse;
const TendisSlowLogDetail = models.TendisSlowLogDetail;
const ChangeInstanceRoleResponse = models.ChangeInstanceRoleResponse;
const DescribeGlobalReplicationAreaResponse = models.DescribeGlobalReplicationAreaResponse;
const ZoneCapacityConf = models.ZoneCapacityConf;
const ModifyInstanceEventResponse = models.ModifyInstanceEventResponse;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const DescribeProjectSecurityGroupResponse = models.DescribeProjectSecurityGroupResponse;
const Instances = models.Instances;
const DescribeInstanceMonitorHotKeyResponse = models.DescribeInstanceMonitorHotKeyResponse;
const InstanceParam = models.InstanceParam;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const ClearInstanceResponse = models.ClearInstanceResponse;
const InstanceSlowlogDetail = models.InstanceSlowlogDetail;


/**
 * redis client
 * @class
 */
class RedisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("redis.intl.tencentcloudapi.com", "2018-04-12", credential, region, profile);
    }
    
    /**
     * This API is used to set the instance input mode.
     * @param {ModifyInstanceReadOnlyRequest} req
     * @param {function(string, ModifyInstanceReadOnlyResponse):void} cb
     * @public
     */
    ModifyInstanceReadOnly(req, cb) {
        let resp = new ModifyInstanceReadOnlyResponse();
        this.request("ModifyInstanceReadOnly", req, resp, cb);
    }

    /**
     * The API for querying big keys of a TencentDB for Redis instance was disused on October 31, 2022. For more information, see [API for Querying Instance Big Key Will Be Disused](https://intl.cloud.tencent.com/document/product/239/81005?from_cn_redirect=1).
     * @param {DescribeInstanceMonitorBigKeySizeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeySizeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeySizeDistResponse();
        this.request("DescribeInstanceMonitorBigKeySizeDist", req, resp, cb);
    }

    /**
     * This API is used to query the task list data for the last 30 days.
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * This API is used to remove a replication group member. Note: This API is being deprecated. Use [RemoveReplicationInstance](https://intl.cloud.tencent.com/document/product/239/90099?from_cn_redirect=1) instead.
     * @param {DeleteReplicationInstanceRequest} req
     * @param {function(string, DeleteReplicationInstanceResponse):void} cb
     * @public
     */
    DeleteReplicationInstance(req, cb) {
        let resp = new DeleteReplicationInstanceResponse();
        this.request("DeleteReplicationInstance", req, resp, cb);
    }

    /**
     * This API is used to immediately terminate instances in the recycle bin.
     * @param {CleanUpInstanceRequest} req
     * @param {function(string, CleanUpInstanceResponse):void} cb
     * @public
     */
    CleanUpInstance(req, cb) {
        let resp = new CleanUpInstanceResponse();
        this.request("CleanUpInstance", req, resp, cb);
    }

    /**
     * This API is used to query the information of an instance sub-account.
     * @param {DescribeInstanceAccountRequest} req
     * @param {function(string, DescribeInstanceAccountResponse):void} cb
     * @public
     */
    DescribeInstanceAccount(req, cb) {
        let resp = new DescribeInstanceAccountResponse();
        this.request("DescribeInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to immediately switch instances that are in the time window pending switch operation. Users can manually initiate this operation.
     * @param {SwitchAccessNewInstanceRequest} req
     * @param {function(string, SwitchAccessNewInstanceResponse):void} cb
     * @public
     */
    SwitchAccessNewInstance(req, cb) {
        let resp = new SwitchAccessNewInstanceResponse();
        this.request("SwitchAccessNewInstance", req, resp, cb);
    }

    /**
     * This API is used to promote a replica node group to a master node group or a replica node to a master node for an instance.
     * @param {ChangeReplicaToMasterRequest} req
     * @param {function(string, ChangeReplicaToMasterResponse):void} cb
     * @public
     */
    ChangeReplicaToMaster(req, cb) {
        let resp = new ChangeReplicaToMasterResponse();
        this.request("ChangeReplicaToMaster", req, resp, cb);
    }

    /**
     * This API is used to query instance access commands.
     * @param {DescribeInstanceMonitorTopNCmdRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmd(req, cb) {
        let resp = new DescribeInstanceMonitorTopNCmdResponse();
        this.request("DescribeInstanceMonitorTopNCmd", req, resp, cb);
    }

    /**
     * This API is used to upgrade the current instance to a later version or upgrade the current standard architecture to a cluster architecture.
     * @param {UpgradeInstanceVersionRequest} req
     * @param {function(string, UpgradeInstanceVersionResponse):void} cb
     * @public
     */
    UpgradeInstanceVersion(req, cb) {
        let resp = new UpgradeInstanceVersionResponse();
        this.request("UpgradeInstanceVersion", req, resp, cb);
    }

    /**
     * This API is used to query purchasable TencentDB for Redis specifications in all regions.
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        let resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
    }

    /**
     * This API is used to get the execution of a specified task.
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * This API is used to modify the instance backup mode.
     * @param {ModifyInstanceBackupModeRequest} req
     * @param {function(string, ModifyInstanceBackupModeResponse):void} cb
     * @public
     */
    ModifyInstanceBackupMode(req, cb) {
        let resp = new ModifyInstanceBackupModeResponse();
        this.request("ModifyInstanceBackupMode", req, resp, cb);
    }

    /**
     * This API is used to modify the network information and address for downloading a backup file.
     * @param {ModifyBackupDownloadRestrictionRequest} req
     * @param {function(string, ModifyBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    ModifyBackupDownloadRestriction(req, cb) {
        let resp = new ModifyBackupDownloadRestrictionResponse();
        this.request("ModifyBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to modify the instance sub-account.
     * @param {ModifyInstanceAccountRequest} req
     * @param {function(string, ModifyInstanceAccountResponse):void} cb
     * @public
     */
    ModifyInstanceAccount(req, cb) {
        let resp = new ModifyInstanceAccountResponse();
        this.request("ModifyInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to query the security group information of an instance.
     * @param {DescribeInstanceSecurityGroupRequest} req
     * @param {function(string, DescribeInstanceSecurityGroupResponse):void} cb
     * @public
     */
    DescribeInstanceSecurityGroup(req, cb) {
        let resp = new DescribeInstanceSecurityGroupResponse();
        this.request("DescribeInstanceSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to query the backup details of an instance.
     * @param {DescribeBackupDetailRequest} req
     * @param {function(string, DescribeBackupDetailResponse):void} cb
     * @public
     */
    DescribeBackupDetail(req, cb) {
        let resp = new DescribeBackupDetailResponse();
        this.request("DescribeBackupDetail", req, resp, cb);
    }

    /**
     * This API is used to upgrade an instance to support multiple AZs.
     * @param {UpgradeVersionToMultiAvailabilityZonesRequest} req
     * @param {function(string, UpgradeVersionToMultiAvailabilityZonesResponse):void} cb
     * @public
     */
    UpgradeVersionToMultiAvailabilityZones(req, cb) {
        let resp = new UpgradeVersionToMultiAvailabilityZonesResponse();
        this.request("UpgradeVersionToMultiAvailabilityZones", req, resp, cb);
    }

    /**
     * This API is used to query the information on regions supported for global replication.
     * @param {DescribeGlobalReplicationAreaRequest} req
     * @param {function(string, DescribeGlobalReplicationAreaResponse):void} cb
     * @public
     */
    DescribeGlobalReplicationArea(req, cb) {
        let resp = new DescribeGlobalReplicationAreaResponse();
        this.request("DescribeGlobalReplicationArea", req, resp, cb);
    }

    /**
     * This API is used to modify the parameter configuration of a Redis instance.
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to clear instance data.
     * @param {ClearInstanceRequest} req
     * @param {function(string, ClearInstanceResponse):void} cb
     * @public
     */
    ClearInstance(req, cb) {
        let resp = new ClearInstanceResponse();
        this.request("ClearInstance", req, resp, cb);
    }

    /**
     * This API is used to query the download address of a backup RDB file.
     * @param {DescribeBackupUrlRequest} req
     * @param {function(string, DescribeBackupUrlResponse):void} cb
     * @public
     */
    DescribeBackupUrl(req, cb) {
        let resp = new DescribeBackupUrlResponse();
        this.request("DescribeBackupUrl", req, resp, cb);
    }

    /**
     * This API is used to query the second-level backup information on an instance.
     * @param {DescribeSecondLevelBackupInfoRequest} req
     * @param {function(string, DescribeSecondLevelBackupInfoResponse):void} cb
     * @public
     */
    DescribeSecondLevelBackupInfo(req, cb) {
        let resp = new DescribeSecondLevelBackupInfoResponse();
        this.request("DescribeSecondLevelBackupInfo", req, resp, cb);
    }

    /**
     * This API is used to modify the connection configuration of an instance, including the bandwidth and maximum number of connections.
     * @param {ModifyConnectionConfigRequest} req
     * @param {function(string, ModifyConnectionConfigResponse):void} cb
     * @public
     */
    ModifyConnectionConfig(req, cb) {
        let resp = new ModifyConnectionConfigResponse();
        this.request("ModifyConnectionConfig", req, resp, cb);
    }

    /**
     * This API is used to query the instance log shipping configuration.
     * @param {DescribeInstanceLogDeliveryRequest} req
     * @param {function(string, DescribeInstanceLogDeliveryResponse):void} cb
     * @public
     */
    DescribeInstanceLogDelivery(req, cb) {
        let resp = new DescribeInstanceLogDeliveryResponse();
        this.request("DescribeInstanceLogDelivery", req, resp, cb);
    }

    /**
     * This API is used to modify instance information.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * This API is used to change the role of an instance in a replication group.
     * @param {ChangeInstanceRoleRequest} req
     * @param {function(string, ChangeInstanceRoleResponse):void} cb
     * @public
     */
    ChangeInstanceRole(req, cb) {
        let resp = new ChangeInstanceRoleResponse();
        this.request("ChangeInstanceRole", req, resp, cb);
    }

    /**
     * This API is used to query the information of an instance node.
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * This API is used to customize the account for accessing instances.
     * @param {CreateInstanceAccountRequest} req
     * @param {function(string, CreateInstanceAccountResponse):void} cb
     * @public
     */
    CreateInstanceAccount(req, cb) {
        let resp = new CreateInstanceAccountResponse();
        this.request("CreateInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to modify the operations event execution schedule of an instance.
     * @param {ModifyInstanceEventRequest} req
     * @param {function(string, ModifyInstanceEventResponse):void} cb
     * @public
     */
    ModifyInstanceEvent(req, cb) {
        let resp = new ModifyInstanceEventResponse();
        this.request("ModifyInstanceEvent", req, resp, cb);
    }

    /**
     * This API is used to upgrade the instance Proxy version.
     * @param {UpgradeProxyVersionRequest} req
     * @param {function(string, UpgradeProxyVersionResponse):void} cb
     * @public
     */
    UpgradeProxyVersion(req, cb) {
        let resp = new UpgradeProxyVersionResponse();
        this.request("UpgradeProxyVersion", req, resp, cb);
    }

    /**
     * This API is used to query the instance CPU time.
     * @param {DescribeInstanceMonitorTopNCmdTookRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdTookResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmdTook(req, cb) {
        let resp = new DescribeInstanceMonitorTopNCmdTookResponse();
        this.request("DescribeInstanceMonitorTopNCmdTook", req, resp, cb);
    }

    /**
     * This API is used to set the configuration for an automatic backup.
     * @param {ModifyAutoBackupConfigRequest} req
     * @param {function(string, ModifyAutoBackupConfigResponse):void} cb
     * @public
     */
    ModifyAutoBackupConfig(req, cb) {
        let resp = new ModifyAutoBackupConfigResponse();
        this.request("ModifyAutoBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a parameter template.
     * @param {DeleteParamTemplateRequest} req
     * @param {function(string, DeleteParamTemplateResponse):void} cb
     * @public
     */
    DeleteParamTemplate(req, cb) {
        let resp = new DeleteParamTemplateResponse();
        this.request("DeleteParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to add an instance member to the global replication group.
     * @param {AddReplicationInstanceRequest} req
     * @param {function(string, AddReplicationInstanceResponse):void} cb
     * @public
     */
    AddReplicationInstance(req, cb) {
        let resp = new AddReplicationInstanceResponse();
        this.request("AddReplicationInstance", req, resp, cb);
    }

    /**
     * This API is used to clone a complete new instance based on the current instance backup file.
     * @param {CloneInstancesRequest} req
     * @param {function(string, CloneInstancesResponse):void} cb
     * @public
     */
    CloneInstances(req, cb) {
        let resp = new CloneInstancesResponse();
        this.request("CloneInstances", req, resp, cb);
    }

    /**
     * This API is used to create a parameter template.
     * @param {CreateParamTemplateRequest} req
     * @param {function(string, CreateParamTemplateResponse):void} cb
     * @public
     */
    CreateParamTemplate(req, cb) {
        let resp = new CreateParamTemplateResponse();
        this.request("CreateParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to disable read/write separation.
     * @param {DisableReplicaReadonlyRequest} req
     * @param {function(string, DisableReplicaReadonlyResponse):void} cb
     * @public
     */
    DisableReplicaReadonly(req, cb) {
        let resp = new DisableReplicaReadonlyResponse();
        this.request("DisableReplicaReadonly", req, resp, cb);
    }

    /**
     * This API is used to query instance DTS information.
     * @param {DescribeInstanceDTSInfoRequest} req
     * @param {function(string, DescribeInstanceDTSInfoResponse):void} cb
     * @public
     */
    DescribeInstanceDTSInfo(req, cb) {
        let resp = new DescribeInstanceDTSInfoResponse();
        this.request("DescribeInstanceDTSInfo", req, resp, cb);
    }

    /**
     * This API is used to query the price for instance scale-out.
     * @param {InquiryPriceUpgradeInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeInstance(req, cb) {
        let resp = new InquiryPriceUpgradeInstanceResponse();
        this.request("InquiryPriceUpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to renew an instance.
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the shipping of instance logs to CLS.
     * @param {ModifyInstanceLogDeliveryRequest} req
     * @param {function(string, ModifyInstanceLogDeliveryResponse):void} cb
     * @public
     */
    ModifyInstanceLogDelivery(req, cb) {
        let resp = new ModifyInstanceLogDeliveryResponse();
        this.request("ModifyInstanceLogDelivery", req, resp, cb);
    }

    /**
     * This API is used to enable public network access for instances.
     * @param {AllocateWanAddressRequest} req
     * @param {function(string, AllocateWanAddressResponse):void} cb
     * @public
     */
    AllocateWanAddress(req, cb) {
        let resp = new AllocateWanAddressResponse();
        this.request("AllocateWanAddress", req, resp, cb);
    }

    /**
     * This API is used to query the security group details of a project.
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        let resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the slow query logs of a Tendis instance.
     * @param {DescribeTendisSlowLogRequest} req
     * @param {function(string, DescribeTendisSlowLogResponse):void} cb
     * @public
     */
    DescribeTendisSlowLog(req, cb) {
        let resp = new DescribeTendisSlowLogResponse();
        this.request("DescribeTendisSlowLog", req, resp, cb);
    }

    /**
     * This API is used to modify the parameter template.
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the price of new instances.
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * This API is used to modify replication group information.
     * @param {ModifyReplicationGroupRequest} req
     * @param {function(string, ModifyReplicationGroupResponse):void} cb
     * @public
     */
    ModifyReplicationGroup(req, cb) {
        let resp = new ModifyReplicationGroupResponse();
        this.request("ModifyReplicationGroup", req, resp, cb);
    }

    /**
     * This API (DescribeInstanceSupportFeature) is used to query the supported features of the instance.
     * @param {DescribeInstanceSupportFeatureRequest} req
     * @param {function(string, DescribeInstanceSupportFeatureResponse):void} cb
     * @public
     */
    DescribeInstanceSupportFeature(req, cb) {
        let resp = new DescribeInstanceSupportFeatureResponse();
        this.request("DescribeInstanceSupportFeature", req, resp, cb);
    }

    /**
     * This API is used to query the parameter list of an instance.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * The API for querying big keys of a TencentDB for Redis instance was disused on October 31, 2022. For more information, see [API for Querying Instance Big Key Will Be Disused](https://intl.cloud.tencent.com/document/product/239/81005?from_cn_redirect=1).
     * @param {DescribeInstanceMonitorBigKeyTypeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyTypeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyTypeDistResponse();
        this.request("DescribeInstanceMonitorBigKeyTypeDist", req, resp, cb);
    }

    /**
     * This API is used to disable public network access.
     * @param {ReleaseWanAddressRequest} req
     * @param {function(string, ReleaseWanAddressResponse):void} cb
     * @public
     */
    ReleaseWanAddress(req, cb) {
        let resp = new ReleaseWanAddressResponse();
        this.request("ReleaseWanAddress", req, resp, cb);
    }

    /**
     * This API is used to unbind security groups from instances in batches.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to manually back up a Redis instance.
     * @param {ManualBackupInstanceRequest} req
     * @param {function(string, ManualBackupInstanceResponse):void} cb
     * @public
     */
    ManualBackupInstance(req, cb) {
        let resp = new ManualBackupInstanceResponse();
        this.request("ManualBackupInstance", req, resp, cb);
    }

    /**
     * This API is used to query or calculate bandwidth specifications.
     * @param {DescribeInstanceSpecBandwidthRequest} req
     * @param {function(string, DescribeInstanceSpecBandwidthResponse):void} cb
     * @public
     */
    DescribeInstanceSpecBandwidth(req, cb) {
        let resp = new DescribeInstanceSpecBandwidthResponse();
        this.request("DescribeInstanceSpecBandwidth", req, resp, cb);
    }

    /**
     * This API is used to delete instance sub-accounts.
     * @param {DeleteInstanceAccountRequest} req
     * @param {function(string, DeleteInstanceAccountResponse):void} cb
     * @public
     */
    DeleteInstanceAccount(req, cb) {
        let resp = new DeleteInstanceAccountResponse();
        this.request("DeleteInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to simulate the fault of a Proxy node.
     * @param {SwitchProxyRequest} req
     * @param {function(string, SwitchProxyResponse):void} cb
     * @public
     */
    SwitchProxy(req, cb) {
        let resp = new SwitchProxyResponse();
        this.request("SwitchProxy", req, resp, cb);
    }

    /**
     * This API is used to return Redis instances with monthly subscription.
     * @param {DestroyPrepaidInstanceRequest} req
     * @param {function(string, DestroyPrepaidInstanceResponse):void} cb
     * @public
     */
    DestroyPrepaidInstance(req, cb) {
        let resp = new DestroyPrepaidInstanceResponse();
        this.request("DestroyPrepaidInstance", req, resp, cb);
    }

    /**
     * This API is used to query the parameter modification record list.
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * This API is used to query the details of a parameter template.
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
    }

    /**
     * This API is used to terminate pay-as-you-go instances.
     * @param {DestroyPostpaidInstanceRequest} req
     * @param {function(string, DestroyPostpaidInstanceResponse):void} cb
     * @public
     */
    DestroyPostpaidInstance(req, cb) {
        let resp = new DestroyPostpaidInstanceResponse();
        this.request("DestroyPostpaidInstance", req, resp, cb);
    }

    /**
     * This API is used to deisolate instances.
     * @param {StartupInstanceRequest} req
     * @param {function(string, StartupInstanceResponse):void} cb
     * @public
     */
    StartupInstance(req, cb) {
        let resp = new StartupInstanceResponse();
        this.request("StartupInstance", req, resp, cb);
    }

    /**
     * This API is used to query the time distribution of instance access.
     * @param {DescribeInstanceMonitorTookDistRequest} req
     * @param {function(string, DescribeInstanceMonitorTookDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTookDist(req, cb) {
        let resp = new DescribeInstanceMonitorTookDistResponse();
        this.request("DescribeInstanceMonitorTookDist", req, resp, cb);
    }

    /**
     * This API is used to query the parameter template list.
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the backup list of an instance.
     * @param {DescribeInstanceBackupsRequest} req
     * @param {function(string, DescribeInstanceBackupsResponse):void} cb
     * @public
     */
    DescribeInstanceBackups(req, cb) {
        let resp = new DescribeInstanceBackupsResponse();
        this.request("DescribeInstanceBackups", req, resp, cb);
    }

    /**
     * This API is used to reset the instance access password.
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }

    /**
     * This API is used to remove instances from a replication group.
     * @param {RemoveReplicationInstanceRequest} req
     * @param {function(string, RemoveReplicationInstanceResponse):void} cb
     * @public
     */
    RemoveReplicationInstance(req, cb) {
        let resp = new RemoveReplicationInstanceResponse();
        this.request("RemoveReplicationInstance", req, resp, cb);
    }

    /**
     * This API is used to upgrade the minor version of an instance.
     * @param {UpgradeSmallVersionRequest} req
     * @param {function(string, UpgradeSmallVersionResponse):void} cb
     * @public
     */
    UpgradeSmallVersion(req, cb) {
        let resp = new UpgradeSmallVersionResponse();
        this.request("UpgradeSmallVersion", req, resp, cb);
    }

    /**
     * This API is used to change the instance access password.
     * @param {ModifyInstancePasswordRequest} req
     * @param {function(string, ModifyInstancePasswordResponse):void} cb
     * @public
     */
    ModifyInstancePassword(req, cb) {
        let resp = new ModifyInstancePasswordResponse();
        this.request("ModifyInstancePassword", req, resp, cb);
    }

    /**
     * This API is used to create a replication group.
     * @param {CreateReplicationGroupRequest} req
     * @param {function(string, CreateReplicationGroupResponse):void} cb
     * @public
     */
    CreateReplicationGroup(req, cb) {
        let resp = new CreateReplicationGroupResponse();
        this.request("CreateReplicationGroup", req, resp, cb);
    }

    /**
     * This API is no longer used. Please use the TencentDB for DBbrain API [DescribeProxyProcessStatistics](https://intl.cloud.tencent.com/document/product/1130/84544?from_cn_redirect=1) to obtain the instance access source.
     * @param {DescribeInstanceMonitorSIPRequest} req
     * @param {function(string, DescribeInstanceMonitorSIPResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorSIP(req, cb) {
        let resp = new DescribeInstanceMonitorSIPResponse();
        this.request("DescribeInstanceMonitorSIP", req, resp, cb);
    }

    /**
     * This API is used to query project security group information.
     * @param {DescribeProjectSecurityGroupRequest} req
     * @param {function(string, DescribeProjectSecurityGroupResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroup(req, cb) {
        let resp = new DescribeProjectSecurityGroupResponse();
        this.request("DescribeProjectSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to query instance hot keys.
     * @param {DescribeInstanceMonitorHotKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorHotKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorHotKey(req, cb) {
        let resp = new DescribeInstanceMonitorHotKeyResponse();
        this.request("DescribeInstanceMonitorHotKey", req, resp, cb);
    }

    /**
     * This API is used to change the instance access password. Due to a spelling error in the original API name, it has been corrected to [ModifyInstancePassword](https://intl.cloud.tencent.com/document/product/239/111555?from_cn_redirect=1). It is recommended to use the corrected API.
     * @param {ModfiyInstancePasswordRequest} req
     * @param {function(string, ModfiyInstancePasswordResponse):void} cb
     * @public
     */
    ModfiyInstancePassword(req, cb) {
        let resp = new ModfiyInstancePasswordResponse();
        this.request("ModfiyInstancePassword", req, resp, cb);
    }

    /**
     * This API is used to enable read/write separation.
     * @param {EnableReplicaReadonlyRequest} req
     * @param {function(string, EnableReplicaReadonlyResponse):void} cb
     * @public
     */
    EnableReplicaReadonly(req, cb) {
        let resp = new EnableReplicaReadonlyResponse();
        this.request("EnableReplicaReadonly", req, resp, cb);
    }

    /**
     * This API is used to bind a security group to one or more database instances. When you create an instance without configuring a security group, it is recommended to bind a security group through this API.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the SSL authentication information of an instance, such as enablement status, configuration status, and certificate address.
     * @param {DescribeSSLStatusRequest} req
     * @param {function(string, DescribeSSLStatusResponse):void} cb
     * @public
     */
    DescribeSSLStatus(req, cb) {
        let resp = new DescribeSSLStatusResponse();
        this.request("DescribeSSLStatus", req, resp, cb);
    }

    /**
     * The API for querying big keys of a TencentDB for Redis instance was disused on October 31, 2022. For more information, see [API for Querying Instance Big Key Will Be Disused](https://intl.cloud.tencent.com/document/product/239/81005?from_cn_redirect=1).
     * @param {DescribeInstanceMonitorBigKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKey(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyResponse();
        this.request("DescribeInstanceMonitorBigKey", req, resp, cb);
    }

    /**
     * This API is used to query the list of dedicated Redis clusters.
     * @param {DescribeRedisClustersRequest} req
     * @param {function(string, DescribeRedisClustersResponse):void} cb
     * @public
     */
    DescribeRedisClusters(req, cb) {
        let resp = new DescribeRedisClustersResponse();
        this.request("DescribeRedisClusters", req, resp, cb);
    }

    /**
     * This API is used to simulate a fault.
     * @param {KillMasterGroupRequest} req
     * @param {function(string, KillMasterGroupResponse):void} cb
     * @public
     */
    KillMasterGroup(req, cb) {
        let resp = new KillMasterGroupResponse();
        this.request("KillMasterGroup", req, resp, cb);
    }

    /**
     * This API is used to query the list of Redis instances. It is now deprecated.
     * @param {DescribeCommonDBInstancesRequest} req
     * @param {function(string, DescribeCommonDBInstancesResponse):void} cb
     * @public
     */
    DescribeCommonDBInstances(req, cb) {
        let resp = new DescribeCommonDBInstancesResponse();
        this.request("DescribeCommonDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the records of slow query.
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        let resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
    }

    /**
     * This API is used to query the download address for a database backup file in the current region.
     * @param {DescribeBackupDownloadRestrictionRequest} req
     * @param {function(string, DescribeBackupDownloadRestrictionResponse):void} cb
     * @public
     */
    DescribeBackupDownloadRestriction(req, cb) {
        let resp = new DescribeBackupDownloadRestrictionResponse();
        this.request("DescribeBackupDownloadRestriction", req, resp, cb);
    }

    /**
     * This API is used to query the details of a Redis node.
     * @param {DescribeInstanceZoneInfoRequest} req
     * @param {function(string, DescribeInstanceZoneInfoResponse):void} cb
     * @public
     */
    DescribeInstanceZoneInfo(req, cb) {
        let resp = new DescribeInstanceZoneInfoResponse();
        this.request("DescribeInstanceZoneInfo", req, resp, cb);
    }

    /**
     * This API is used to query the event information on a TecentDB for Redis instance.
     * @param {DescribeInstanceEventsRequest} req
     * @param {function(string, DescribeInstanceEventsResponse):void} cb
     * @public
     */
    DescribeInstanceEvents(req, cb) {
        let resp = new DescribeInstanceEventsResponse();
        this.request("DescribeInstanceEvents", req, resp, cb);
    }

    /**
     * This API is used to swap the VIPs of instances for disaster recovery in DTS-based cross-AZ disaster recovery scenarios. After the swapping, the target instance becomes writable, the VIPs of the source and target instances are swapped, and the DTS synchronization task between the source and target instances is disconnected.
     * @param {SwitchInstanceVipRequest} req
     * @param {function(string, SwitchInstanceVipResponse):void} cb
     * @public
     */
    SwitchInstanceVip(req, cb) {
        let resp = new SwitchInstanceVipResponse();
        this.request("SwitchInstanceVip", req, resp, cb);
    }

    /**
     * This API is used to query the security group details of an instance.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query a replication group.
     * @param {DescribeReplicationGroupRequest} req
     * @param {function(string, DescribeReplicationGroupResponse):void} cb
     * @public
     */
    DescribeReplicationGroup(req, cb) {
        let resp = new DescribeReplicationGroupResponse();
        this.request("DescribeReplicationGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the time of instance maintenance window. Instances that require the version or architecture upgrade will undergo time switching during the maintenance window. Note: If the version or architecture upgrade has been initiated for an instance, its maintenance window cannot be modified.
     * @param {ModifyMaintenanceWindowRequest} req
     * @param {function(string, ModifyMaintenanceWindowResponse):void} cb
     * @public
     */
    ModifyMaintenanceWindow(req, cb) {
        let resp = new ModifyMaintenanceWindowResponse();
        this.request("ModifyMaintenanceWindow", req, resp, cb);
    }

    /**
     * This API is used to modify the network configuration of an instance.
     * @param {ModifyNetworkConfigRequest} req
     * @param {function(string, ModifyNetworkConfigResponse):void} cb
     * @public
     */
    ModifyNetworkConfig(req, cb) {
        let resp = new ModifyNetworkConfigResponse();
        this.request("ModifyNetworkConfig", req, resp, cb);
    }

    /**
     * This API is used to get the shard information of the instance on cluster architecture.
     * @param {DescribeInstanceShardsRequest} req
     * @param {function(string, DescribeInstanceShardsResponse):void} cb
     * @public
     */
    DescribeInstanceShards(req, cb) {
        let resp = new DescribeInstanceShardsResponse();
        this.request("DescribeInstanceShards", req, resp, cb);
    }

    /**
     * This API is used to restore an instance.
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        let resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of Redis instances.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to delete a replication group.
     * @param {RemoveReplicationGroupRequest} req
     * @param {function(string, RemoveReplicationGroupResponse):void} cb
     * @public
     */
    RemoveReplicationGroup(req, cb) {
        let resp = new RemoveReplicationGroupResponse();
        this.request("RemoveReplicationGroup", req, resp, cb);
    }

    /**
     * This API is used to enable SSL encryption and authentication.
     * @param {OpenSSLRequest} req
     * @param {function(string, OpenSSLResponse):void} cb
     * @public
     */
    OpenSSL(req, cb) {
        let resp = new OpenSSLResponse();
        this.request("OpenSSL", req, resp, cb);
    }

    /**
     * This API is used to get the configuration rules for an automatic backup.
     * @param {DescribeAutoBackupConfigRequest} req
     * @param {function(string, DescribeAutoBackupConfigResponse):void} cb
     * @public
     */
    DescribeAutoBackupConfig(req, cb) {
        let resp = new DescribeAutoBackupConfigResponse();
        this.request("DescribeAutoBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to query the information of instance bandwidth.
     * @param {DescribeBandwidthRangeRequest} req
     * @param {function(string, DescribeBandwidthRangeResponse):void} cb
     * @public
     */
    DescribeBandwidthRange(req, cb) {
        let resp = new DescribeBandwidthRangeResponse();
        this.request("DescribeBandwidthRange", req, resp, cb);
    }

    /**
     * This API is used to query replication group information.
     * @param {DescribeReplicationGroupInstanceRequest} req
     * @param {function(string, DescribeReplicationGroupInstanceResponse):void} cb
     * @public
     */
    DescribeReplicationGroupInstance(req, cb) {
        let resp = new DescribeReplicationGroupInstanceResponse();
        this.request("DescribeReplicationGroupInstance", req, resp, cb);
    }

    /**
     * This API is used to query the slow queries of the proxy.
     * @param {DescribeProxySlowLogRequest} req
     * @param {function(string, DescribeProxySlowLogResponse):void} cb
     * @public
     */
    DescribeProxySlowLog(req, cb) {
        let resp = new DescribeProxySlowLogResponse();
        this.request("DescribeProxySlowLog", req, resp, cb);
    }

    /**
     * This API is used to change the availability zone of the instance.
     * @param {ModifyInstanceAvailabilityZonesRequest} req
     * @param {function(string, ModifyInstanceAvailabilityZonesResponse):void} cb
     * @public
     */
    ModifyInstanceAvailabilityZones(req, cb) {
        let resp = new ModifyInstanceAvailabilityZonesResponse();
        this.request("ModifyInstanceAvailabilityZones", req, resp, cb);
    }

    /**
     * This API is used to modify the original security group list of an instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to set a read-only instance in a replication group as a master instance.
     * @param {ChangeMasterInstanceRequest} req
     * @param {function(string, ChangeMasterInstanceResponse):void} cb
     * @public
     */
    ChangeMasterInstance(req, cb) {
        let resp = new ChangeMasterInstanceResponse();
        this.request("ChangeMasterInstance", req, resp, cb);
    }

    /**
     * This API is used to change the configuration specifications of an instance.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to query the overview information of a dedicated Redis cluster.
     * @param {DescribeRedisClusterOverviewRequest} req
     * @param {function(string, DescribeRedisClusterOverviewResponse):void} cb
     * @public
     */
    DescribeRedisClusterOverview(req, cb) {
        let resp = new DescribeRedisClusterOverviewResponse();
        this.request("DescribeRedisClusterOverview", req, resp, cb);
    }

    /**
     * This API is used to apply parameter templates to instances.
     * @param {ApplyParamsTemplateRequest} req
     * @param {function(string, ApplyParamsTemplateResponse):void} cb
     * @public
     */
    ApplyParamsTemplate(req, cb) {
        let resp = new ApplyParamsTemplateResponse();
        this.request("ApplyParamsTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the instance maintenance window. Instances that require the version or architecture upgrade will undergo time switching during the maintenance window.
     * @param {DescribeMaintenanceWindowRequest} req
     * @param {function(string, DescribeMaintenanceWindowResponse):void} cb
     * @public
     */
    DescribeMaintenanceWindow(req, cb) {
        let resp = new DescribeMaintenanceWindowResponse();
        this.request("DescribeMaintenanceWindow", req, resp, cb);
    }

    /**
     * This API is used to create an TencentDB or Redis instance.
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * This API is used to query the order information.
     * @param {DescribeInstanceDealDetailRequest} req
     * @param {function(string, DescribeInstanceDealDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDealDetail(req, cb) {
        let resp = new DescribeInstanceDealDetailResponse();
        this.request("DescribeInstanceDealDetail", req, resp, cb);
    }

    /**
     * This API is used to disable SSL encryption and authentication.
     * @param {CloseSSLRequest} req
     * @param {function(string, CloseSSLResponse):void} cb
     * @public
     */
    CloseSSL(req, cb) {
        let resp = new CloseSSLResponse();
        this.request("CloseSSL", req, resp, cb);
    }


}
module.exports = RedisClient;
