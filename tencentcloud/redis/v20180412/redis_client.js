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
const ModifyInstanceParamsResponse = models.ModifyInstanceParamsResponse;
const EnableReplicaReadonlyRequest = models.EnableReplicaReadonlyRequest;
const RedisBackupSet = models.RedisBackupSet;
const DescribeInstanceMonitorTopNCmdResponse = models.DescribeInstanceMonitorTopNCmdResponse;
const ModifyAutoBackupConfigResponse = models.ModifyAutoBackupConfigResponse;
const RestoreInstanceRequest = models.RestoreInstanceRequest;
const TaskInfoDetail = models.TaskInfoDetail;
const ApplyParamsTemplateRequest = models.ApplyParamsTemplateRequest;
const UpgradeInstanceVersionResponse = models.UpgradeInstanceVersionResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const DescribeInstanceZoneInfoRequest = models.DescribeInstanceZoneInfoRequest;
const ModifyNetworkConfigResponse = models.ModifyNetworkConfigResponse;
const CommandTake = models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models.DescribeInstanceMonitorBigKeyResponse;
const Inbound = models.Inbound;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const DescribeTaskListResponse = models.DescribeTaskListResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const KillMasterGroupResponse = models.KillMasterGroupResponse;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const DescribeCommonDBInstancesRequest = models.DescribeCommonDBInstancesRequest;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const RestoreInstanceResponse = models.RestoreInstanceResponse;
const RedisNodeInfo = models.RedisNodeInfo;
const DescribeBackupUrlRequest = models.DescribeBackupUrlRequest;
const DeleteParamTemplateResponse = models.DeleteParamTemplateResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstanceZoneInfoResponse = models.DescribeInstanceZoneInfoResponse;
const Account = models.Account;
const InstanceProxySlowlogDetail = models.InstanceProxySlowlogDetail;
const SecurityGroupsInboundAndOutbound = models.SecurityGroupsInboundAndOutbound;
const ResetPasswordResponse = models.ResetPasswordResponse;
const ClearInstanceRequest = models.ClearInstanceRequest;
const RegionConf = models.RegionConf;
const BigKeyInfo = models.BigKeyInfo;
const DescribeParamTemplatesRequest = models.DescribeParamTemplatesRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const UpgradeVersionToMultiAvailabilityZonesResponse = models.UpgradeVersionToMultiAvailabilityZonesResponse;
const DescribeInstanceParamRecordsResponse = models.DescribeInstanceParamRecordsResponse;
const ModifyAutoBackupConfigRequest = models.ModifyAutoBackupConfigRequest;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeInstanceDealDetailRequest = models.DescribeInstanceDealDetailRequest;
const RedisNode = models.RedisNode;
const DescribeProjectSecurityGroupRequest = models.DescribeProjectSecurityGroupRequest;
const ParameterDetail = models.ParameterDetail;
const DescribeInstanceShardsResponse = models.DescribeInstanceShardsResponse;
const DestroyPrepaidInstanceRequest = models.DestroyPrepaidInstanceRequest;
const ManualBackupInstanceResponse = models.ManualBackupInstanceResponse;
const DisableReplicaReadonlyResponse = models.DisableReplicaReadonlyResponse;
const CreateParamTemplateResponse = models.CreateParamTemplateResponse;
const InstanceTagInfo = models.InstanceTagInfo;
const DescribeInstanceDTSInfoResponse = models.DescribeInstanceDTSInfoResponse;
const DestroyPostpaidInstanceResponse = models.DestroyPostpaidInstanceResponse;
const SwitchInstanceVipRequest = models.SwitchInstanceVipRequest;
const ChangeReplicaToMasterRequest = models.ChangeReplicaToMasterRequest;
const ProxyNodes = models.ProxyNodes;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const RedisCommonInstanceList = models.RedisCommonInstanceList;
const SourceInfo = models.SourceInfo;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeInstanceMonitorHotKeyRequest = models.DescribeInstanceMonitorHotKeyRequest;
const DescribeInstanceDTSInfoRequest = models.DescribeInstanceDTSInfoRequest;
const CreateParamTemplateRequest = models.CreateParamTemplateRequest;
const DescribeTendisSlowLogResponse = models.DescribeTendisSlowLogResponse;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const ModifyInstanceAccountRequest = models.ModifyInstanceAccountRequest;
const ModifyMaintenanceWindowRequest = models.ModifyMaintenanceWindowRequest;
const DescribeParamTemplateInfoRequest = models.DescribeParamTemplateInfoRequest;
const DescribeBackupUrlResponse = models.DescribeBackupUrlResponse;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const InstanceSecurityGroupDetail = models.InstanceSecurityGroupDetail;
const ResetPasswordRequest = models.ResetPasswordRequest;
const ModifyInstanceAccountResponse = models.ModifyInstanceAccountResponse;
const DelayDistribution = models.DelayDistribution;
const DescribeProjectSecurityGroupsResponse = models.DescribeProjectSecurityGroupsResponse;
const DescribeInstanceMonitorTookDistResponse = models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceBackupsResponse = models.DescribeInstanceBackupsResponse;
const InstanceIntegerParam = models.InstanceIntegerParam;
const UpgradeVersionToMultiAvailabilityZonesRequest = models.UpgradeVersionToMultiAvailabilityZonesRequest;
const DescribeInstanceMonitorTookDistRequest = models.DescribeInstanceMonitorTookDistRequest;
const KillMasterGroupRequest = models.KillMasterGroupRequest;
const InstanceTextParam = models.InstanceTextParam;
const ParamTemplateInfo = models.ParamTemplateInfo;
const DescribeInstanceMonitorTopNCmdTookResponse = models.DescribeInstanceMonitorTopNCmdTookResponse;
const DescribeInstanceMonitorBigKeySizeDistRequest = models.DescribeInstanceMonitorBigKeySizeDistRequest;
const DescribeInstanceAccountRequest = models.DescribeInstanceAccountRequest;
const DescribeInstanceParamRecordsRequest = models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models.DescribeTaskListRequest;
const ChangeReplicaToMasterResponse = models.ChangeReplicaToMasterResponse;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DescribeTaskInfoRequest = models.DescribeTaskInfoRequest;
const ApplyParamsTemplateResponse = models.ApplyParamsTemplateResponse;
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
const SecurityGroup = models.SecurityGroup;
const CreateInstanceAccountRequest = models.CreateInstanceAccountRequest;
const EnableReplicaReadonlyResponse = models.EnableReplicaReadonlyResponse;
const DescribeMaintenanceWindowResponse = models.DescribeMaintenanceWindowResponse;
const DescribeInstanceSecurityGroupResponse = models.DescribeInstanceSecurityGroupResponse;
const ProductConf = models.ProductConf;
const InstanceNode = models.InstanceNode;
const TendisNodes = models.TendisNodes;
const StartupInstanceResponse = models.StartupInstanceResponse;
const DescribeInstanceDTSInstanceInfo = models.DescribeInstanceDTSInstanceInfo;
const TradeDealDetail = models.TradeDealDetail;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ReplicaGroup = models.ReplicaGroup;
const DescribeTaskInfoResponse = models.DescribeTaskInfoResponse;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const CleanUpInstanceRequest = models.CleanUpInstanceRequest;
const DescribeInstanceDealDetailResponse = models.DescribeInstanceDealDetailResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const SourceCommand = models.SourceCommand;
const ModfiyInstancePasswordRequest = models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DeleteParamTemplateRequest = models.DeleteParamTemplateRequest;
const DescribeAutoBackupConfigRequest = models.DescribeAutoBackupConfigRequest;
const DescribeInstanceMonitorSIPResponse = models.DescribeInstanceMonitorSIPResponse;
const DestroyPostpaidInstanceRequest = models.DestroyPostpaidInstanceRequest;
const DeleteInstanceAccountRequest = models.DeleteInstanceAccountRequest;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const ManualBackupInstanceRequest = models.ManualBackupInstanceRequest;
const ModifyParamTemplateRequest = models.ModifyParamTemplateRequest;
const ModfiyInstancePasswordResponse = models.ModfiyInstancePasswordResponse;
const InstanceSet = models.InstanceSet;
const ResourceTag = models.ResourceTag;
const ModifyMaintenanceWindowResponse = models.ModifyMaintenanceWindowResponse;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const DescribeInstanceMonitorTopNCmdTookRequest = models.DescribeInstanceMonitorTopNCmdTookRequest;
const DestroyPrepaidInstanceResponse = models.DestroyPrepaidInstanceResponse;
const DescribeCommonDBInstancesResponse = models.DescribeCommonDBInstancesResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const ModifyInstanceParamsRequest = models.ModifyInstanceParamsRequest;
const BackupDownloadInfo = models.BackupDownloadInfo;
const BigKeyTypeInfo = models.BigKeyTypeInfo;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeMaintenanceWindowRequest = models.DescribeMaintenanceWindowRequest;
const InstanceClusterNode = models.InstanceClusterNode;
const DescribeTendisSlowLogRequest = models.DescribeTendisSlowLogRequest;
const DescribeProxySlowLogRequest = models.DescribeProxySlowLogRequest;
const DescribeProxySlowLogResponse = models.DescribeProxySlowLogResponse;
const UpgradeInstanceVersionRequest = models.UpgradeInstanceVersionRequest;
const DescribeInstanceAccountResponse = models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models.DescribeInstanceMonitorBigKeyRequest;
const DisableReplicaReadonlyRequest = models.DisableReplicaReadonlyRequest;
const DescribeParamTemplateInfoResponse = models.DescribeParamTemplateInfoResponse;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const SwitchInstanceVipResponse = models.SwitchInstanceVipResponse;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const StartupInstanceRequest = models.StartupInstanceRequest;
const HotKeyInfo = models.HotKeyInfo;
const InstanceEnumParam = models.InstanceEnumParam;
const CreateInstanceAccountResponse = models.CreateInstanceAccountResponse;
const DescribeInstanceBackupsRequest = models.DescribeInstanceBackupsRequest;
const SecurityGroupDetail = models.SecurityGroupDetail;
const InquiryPriceUpgradeInstanceResponse = models.InquiryPriceUpgradeInstanceResponse;
const DeleteInstanceAccountResponse = models.DeleteInstanceAccountResponse;
const DescribeInstanceMonitorSIPRequest = models.DescribeInstanceMonitorSIPRequest;
const InstanceClusterShard = models.InstanceClusterShard;
const TendisSlowLogDetail = models.TendisSlowLogDetail;
const ZoneCapacityConf = models.ZoneCapacityConf;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const DescribeProjectSecurityGroupResponse = models.DescribeProjectSecurityGroupResponse;
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
        super("redis.tencentcloudapi.com", "2018-04-12", credential, region, profile);
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
     * This API is used to query instance node information.
     * @param {DescribeInstanceNodeInfoRequest} req
     * @param {function(string, DescribeInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeInstanceNodeInfo(req, cb) {
        let resp = new DescribeInstanceNodeInfoResponse();
        this.request("DescribeInstanceNodeInfo", req, resp, cb);
    }

    /**
     * This API is used to query the big key size distribution of an instance.
     * @param {DescribeInstanceMonitorBigKeySizeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeySizeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeySizeDistResponse();
        this.request("DescribeInstanceMonitorBigKeySizeDist", req, resp, cb);
    }

    /**
     * This API is used to create an instance sub-account.
     * @param {CreateInstanceAccountRequest} req
     * @param {function(string, CreateInstanceAccountResponse):void} cb
     * @public
     */
    CreateInstanceAccount(req, cb) {
        let resp = new CreateInstanceAccountResponse();
        this.request("CreateInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to modify instance maintenance window. The maintenance window specifies a time period during which compatible version upgrade, architecture upgrade, backend maintenance, and other operations can be performed to avoid affecting business. Note: if the compatible version upgrade or architecture upgrade task has been initiated for an instance, its maintenance window cannot be modified.
     * @param {ModifyMaintenanceWindowRequest} req
     * @param {function(string, ModifyMaintenanceWindowResponse):void} cb
     * @public
     */
    ModifyMaintenanceWindow(req, cb) {
        let resp = new ModifyMaintenanceWindowResponse();
        this.request("ModifyMaintenanceWindow", req, resp, cb);
    }

    /**
     * This API is used to query the list of parameter templates.
     * @param {DescribeParamTemplatesRequest} req
     * @param {function(string, DescribeParamTemplatesResponse):void} cb
     * @public
     */
    DescribeParamTemplates(req, cb) {
        let resp = new DescribeParamTemplatesResponse();
        this.request("DescribeParamTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the slow log.
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        let resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
    }

    /**
     * This API is used to query the list of tasks.
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        let resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }

    /**
     * This API is used to upgrade an instance.
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to deactivate an instance in the recycle bin immediately.
     * @param {CleanUpInstanceRequest} req
     * @param {function(string, CleanUpInstanceResponse):void} cb
     * @public
     */
    CleanUpInstance(req, cb) {
        let resp = new CleanUpInstanceResponse();
        this.request("CleanUpInstance", req, resp, cb);
    }

    /**
     * This API is used to query parameter template details.
     * @param {DescribeParamTemplateInfoRequest} req
     * @param {function(string, DescribeParamTemplateInfoResponse):void} cb
     * @public
     */
    DescribeParamTemplateInfo(req, cb) {
        let resp = new DescribeParamTemplateInfoResponse();
        this.request("DescribeParamTemplateInfo", req, resp, cb);
    }

    /**
     * This API is used to view instance sub-account information.
     * @param {DescribeInstanceAccountRequest} req
     * @param {function(string, DescribeInstanceAccountResponse):void} cb
     * @public
     */
    DescribeInstanceAccount(req, cb) {
        let resp = new DescribeInstanceAccountResponse();
        this.request("DescribeInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to get the backup configuration.
     * @param {DescribeAutoBackupConfigRequest} req
     * @param {function(string, DescribeAutoBackupConfigResponse):void} cb
     * @public
     */
    DescribeAutoBackupConfig(req, cb) {
        let resp = new DescribeAutoBackupConfigResponse();
        this.request("DescribeAutoBackupConfig", req, resp, cb);
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
     * This API is used to promote a replica node group of a multi-AZ deployed instance to master node group or a replica node of a single-AZ deployed instance to master node.
     * @param {ChangeReplicaToMasterRequest} req
     * @param {function(string, ChangeReplicaToMasterResponse):void} cb
     * @public
     */
    ChangeReplicaToMaster(req, cb) {
        let resp = new ChangeReplicaToMasterResponse();
        this.request("ChangeReplicaToMaster", req, resp, cb);
    }

    /**
     * This API is used to set an auto-backup schedule.
     * @param {ModifyAutoBackupConfigRequest} req
     * @param {function(string, ModifyAutoBackupConfigResponse):void} cb
     * @public
     */
    ModifyAutoBackupConfig(req, cb) {
        let resp = new ModifyAutoBackupConfigResponse();
        this.request("ModifyAutoBackupConfig", req, resp, cb);
    }

    /**
     * This API is used to get the information of cluster edition instance shards.
     * @param {DescribeInstanceShardsRequest} req
     * @param {function(string, DescribeInstanceShardsResponse):void} cb
     * @public
     */
    DescribeInstanceShards(req, cb) {
        let resp = new DescribeInstanceShardsResponse();
        this.request("DescribeInstanceShards", req, resp, cb);
    }

    /**
     * This API is used to restore a Redis instance.
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
     * This API is used to query instance maintenance window. The maintenance window specifies a time period during which compatible version upgrade, architecture upgrade, backend maintenance, and other operations can be performed to avoid affecting business.
     * @param {DescribeMaintenanceWindowRequest} req
     * @param {function(string, DescribeMaintenanceWindowResponse):void} cb
     * @public
     */
    DescribeMaintenanceWindow(req, cb) {
        let resp = new DescribeMaintenanceWindowResponse();
        this.request("DescribeMaintenanceWindow", req, resp, cb);
    }

    /**
     * This API is used to query an instance access command.
     * @param {DescribeInstanceMonitorTopNCmdRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmd(req, cb) {
        let resp = new DescribeInstanceMonitorTopNCmdResponse();
        this.request("DescribeInstanceMonitorTopNCmd", req, resp, cb);
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
     * This API is used to query the DTS task details of an instance.
     * @param {DescribeInstanceDTSInfoRequest} req
     * @param {function(string, DescribeInstanceDTSInfoResponse):void} cb
     * @public
     */
    DescribeInstanceDTSInfo(req, cb) {
        let resp = new DescribeInstanceDTSInfoResponse();
        this.request("DescribeInstanceDTSInfo", req, resp, cb);
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
     * This API is used to query the access source information of an instance.
     * @param {DescribeInstanceMonitorSIPRequest} req
     * @param {function(string, DescribeInstanceMonitorSIPResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorSIP(req, cb) {
        let resp = new DescribeInstanceMonitorSIPResponse();
        this.request("DescribeInstanceMonitorSIP", req, resp, cb);
    }

    /**
     * This API is used to create Redis instances.
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * This API is used to modify an instance sub-account.
     * @param {ModifyInstanceAccountRequest} req
     * @param {function(string, ModifyInstanceAccountResponse):void} cb
     * @public
     */
    ModifyInstanceAccount(req, cb) {
        let resp = new ModifyInstanceAccountResponse();
        this.request("ModifyInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to upgrade compatible instance version (for example, from Redis 2.8 to 4.0), or upgrade instance architecture (for example, from standard architecture to cluster architecture).
     * @param {UpgradeInstanceVersionRequest} req
     * @param {function(string, UpgradeInstanceVersionResponse):void} cb
     * @public
     */
    UpgradeInstanceVersion(req, cb) {
        let resp = new UpgradeInstanceVersionResponse();
        this.request("UpgradeInstanceVersion", req, resp, cb);
    }

    /**
     * This API is used to query the price for scaling an instance.
     * @param {InquiryPriceUpgradeInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeInstance(req, cb) {
        let resp = new InquiryPriceUpgradeInstanceResponse();
        this.request("InquiryPriceUpgradeInstance", req, resp, cb);
    }

    /**
     * This API is used to query the security group information of a project.
     * @param {DescribeProjectSecurityGroupRequest} req
     * @param {function(string, DescribeProjectSecurityGroupResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroup(req, cb) {
        let resp = new DescribeProjectSecurityGroupResponse();
        this.request("DescribeProjectSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to query the hot key of an instance.
     * @param {DescribeInstanceMonitorHotKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorHotKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorHotKey(req, cb) {
        let resp = new DescribeInstanceMonitorHotKeyResponse();
        this.request("DescribeInstanceMonitorHotKey", req, resp, cb);
    }

    /**
     * This API is used to query a task result.
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        let resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }

    /**
     * This API is used to query the download address of a backup RDB (it is during beta test and can be used only after you apply for the eligibility).
     * @param {DescribeBackupUrlRequest} req
     * @param {function(string, DescribeBackupUrlResponse):void} cb
     * @public
     */
    DescribeBackupUrl(req, cb) {
        let resp = new DescribeBackupUrlResponse();
        this.request("DescribeBackupUrl", req, resp, cb);
    }

    /**
     * This API is used to query proxy slow logs.
     * @param {DescribeProxySlowLogRequest} req
     * @param {function(string, DescribeProxySlowLogResponse):void} cb
     * @public
     */
    DescribeProxySlowLog(req, cb) {
        let resp = new DescribeProxySlowLogResponse();
        this.request("DescribeProxySlowLog", req, resp, cb);
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
     * This API is used to query slow queries of a TencentDB for Tendis instance.
     * @param {DescribeTendisSlowLogRequest} req
     * @param {function(string, DescribeTendisSlowLogResponse):void} cb
     * @public
     */
    DescribeTendisSlowLog(req, cb) {
        let resp = new DescribeTendisSlowLogResponse();
        this.request("DescribeTendisSlowLog", req, resp, cb);
    }

    /**
     * This API is used to associate a security group with instances in batches.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        let resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to modify a parameter template.
     * @param {ModifyParamTemplateRequest} req
     * @param {function(string, ModifyParamTemplateResponse):void} cb
     * @public
     */
    ModifyParamTemplate(req, cb) {
        let resp = new ModifyParamTemplateResponse();
        this.request("ModifyParamTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the price for purchasing an instance.
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * This API is used to modify the security groups associated with an instance.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to terminate a pay-as-you-go instance.
     * @param {DestroyPostpaidInstanceRequest} req
     * @param {function(string, DestroyPostpaidInstanceResponse):void} cb
     * @public
     */
    DestroyPostpaidInstance(req, cb) {
        let resp = new DestroyPostpaidInstanceResponse();
        this.request("DestroyPostpaidInstance", req, resp, cb);
    }

    /**
     * This API is used to query the big key of an instance.
     * @param {DescribeInstanceMonitorBigKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKey(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyResponse();
        this.request("DescribeInstanceMonitorBigKey", req, resp, cb);
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
     * This API is used to query the big key type distribution of an instance
     * @param {DescribeInstanceMonitorBigKeyTypeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyTypeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        let resp = new DescribeInstanceMonitorBigKeyTypeDistResponse();
        this.request("DescribeInstanceMonitorBigKeyTypeDist", req, resp, cb);
    }

    /**
     * This API is used to reset a password.
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        let resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }

    /**
     * This API is used to perform a failure simulation.
     * @param {KillMasterGroupRequest} req
     * @param {function(string, KillMasterGroupResponse):void} cb
     * @public
     */
    KillMasterGroup(req, cb) {
        let resp = new KillMasterGroupResponse();
        this.request("KillMasterGroup", req, resp, cb);
    }

    /**
     * This API is used to upgrade an instance to support multi-AZ deployment.
     * @param {UpgradeVersionToMultiAvailabilityZonesRequest} req
     * @param {function(string, UpgradeVersionToMultiAvailabilityZonesResponse):void} cb
     * @public
     */
    UpgradeVersionToMultiAvailabilityZones(req, cb) {
        let resp = new UpgradeVersionToMultiAvailabilityZonesResponse();
        this.request("UpgradeVersionToMultiAvailabilityZones", req, resp, cb);
    }

    /**
     * (Disused) Queries the list of instances
     * @param {DescribeCommonDBInstancesRequest} req
     * @param {function(string, DescribeCommonDBInstancesResponse):void} cb
     * @public
     */
    DescribeCommonDBInstances(req, cb) {
        let resp = new DescribeCommonDBInstancesResponse();
        this.request("DescribeCommonDBInstances", req, resp, cb);
    }

    /**
     * This API is used to query the purchasable capacity specifications of Redis instances in the specified AZ and instance type. If you are not in the allowlist for the AZ or instance type, you cannot view the details of the capacity specifications. To apply for the eligibility, please submit a ticket.
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        let resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
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
     * This API is used to change the Redis password.
     * @param {ModfiyInstancePasswordRequest} req
     * @param {function(string, ModfiyInstancePasswordResponse):void} cb
     * @public
     */
    ModfiyInstancePassword(req, cb) {
        let resp = new ModfiyInstancePasswordResponse();
        this.request("ModfiyInstancePassword", req, resp, cb);
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
     * This API is used to query the list of instance parameters.
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * This API is used to apply a parameter template to instances.
     * @param {ApplyParamsTemplateRequest} req
     * @param {function(string, ApplyParamsTemplateResponse):void} cb
     * @public
     */
    ApplyParamsTemplate(req, cb) {
        let resp = new ApplyParamsTemplateResponse();
        this.request("ApplyParamsTemplate", req, resp, cb);
    }

    /**
     * This API is used to return a monthly subscribed instance.
     * @param {DestroyPrepaidInstanceRequest} req
     * @param {function(string, DestroyPrepaidInstanceResponse):void} cb
     * @public
     */
    DestroyPrepaidInstance(req, cb) {
        let resp = new DestroyPrepaidInstanceResponse();
        this.request("DestroyPrepaidInstance", req, resp, cb);
    }

    /**
     * This API is used to query the list of parameter modifications.
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        let resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }

    /**
     * This API is used to clear the data of a Redis instance.
     * @param {ClearInstanceRequest} req
     * @param {function(string, ClearInstanceResponse):void} cb
     * @public
     */
    ClearInstance(req, cb) {
        let resp = new ClearInstanceResponse();
        this.request("ClearInstance", req, resp, cb);
    }

    /**
     * This API is used to query Redis node information.
     * @param {DescribeInstanceZoneInfoRequest} req
     * @param {function(string, DescribeInstanceZoneInfoResponse):void} cb
     * @public
     */
    DescribeInstanceZoneInfo(req, cb) {
        let resp = new DescribeInstanceZoneInfoResponse();
        this.request("DescribeInstanceZoneInfo", req, resp, cb);
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
     * This API is used to delete an instance sub-account.
     * @param {DeleteInstanceAccountRequest} req
     * @param {function(string, DeleteInstanceAccountResponse):void} cb
     * @public
     */
    DeleteInstanceAccount(req, cb) {
        let resp = new DeleteInstanceAccountResponse();
        this.request("DeleteInstanceAccount", req, resp, cb);
    }

    /**
     * This API is used to query the list of Redis instance backups.
     * @param {DescribeInstanceBackupsRequest} req
     * @param {function(string, DescribeInstanceBackupsResponse):void} cb
     * @public
     */
    DescribeInstanceBackups(req, cb) {
        let resp = new DescribeInstanceBackupsResponse();
        this.request("DescribeInstanceBackups", req, resp, cb);
    }

    /**
     * This API is used to unassociate security groups from instances in batches.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to deisolate an instance.
     * @param {StartupInstanceRequest} req
     * @param {function(string, StartupInstanceResponse):void} cb
     * @public
     */
    StartupInstance(req, cb) {
        let resp = new StartupInstanceResponse();
        this.request("StartupInstance", req, resp, cb);
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
     * This API is used to query the distribution of instance access duration.
     * @param {DescribeInstanceMonitorTookDistRequest} req
     * @param {function(string, DescribeInstanceMonitorTookDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTookDist(req, cb) {
        let resp = new DescribeInstanceMonitorTookDistResponse();
        this.request("DescribeInstanceMonitorTookDist", req, resp, cb);
    }

    /**
     * This API is used to swap the VIPs of instances for instance disaster recovery switch in scenarios where cross-AZ disaster recovery is supported through DTS. After the VIPs of the source and target instances are swapped, the target instance can be written into and the DTS sync task between them will be disconnected.
     * @param {SwitchInstanceVipRequest} req
     * @param {function(string, SwitchInstanceVipResponse):void} cb
     * @public
     */
    SwitchInstanceVip(req, cb) {
        let resp = new SwitchInstanceVipResponse();
        this.request("SwitchInstanceVip", req, resp, cb);
    }


}
module.exports = RedisClient;
