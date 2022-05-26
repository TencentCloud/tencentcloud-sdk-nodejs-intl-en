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
const ChangeReplicaToMasterRequest = models.ChangeReplicaToMasterRequest;
const ReleaseWanAddressRequest = models.ReleaseWanAddressRequest;
const ProxyNodes = models.ProxyNodes;
const DescribeInstanceMonitorTopNCmdTookRequest = models.DescribeInstanceMonitorTopNCmdTookRequest;
const Instances = models.Instances;
const DescribeInstanceMonitorBigKeySizeDistResponse = models.DescribeInstanceMonitorBigKeySizeDistResponse;
const DescribeInstanceMonitorTookDistRequest = models.DescribeInstanceMonitorTookDistRequest;
const DescribeInstanceMonitorHotKeyRequest = models.DescribeInstanceMonitorHotKeyRequest;
const AllocateWanAddressRequest = models.AllocateWanAddressRequest;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const DescribeProductInfoResponse = models.DescribeProductInfoResponse;
const DescribeMaintenanceWindowResponse = models.DescribeMaintenanceWindowResponse;
const ModifyInstanceReadOnlyResponse = models.ModifyInstanceReadOnlyResponse;
const ReleaseWanAddressResponse = models.ReleaseWanAddressResponse;
const ProductConf = models.ProductConf;
const BigKeyTypeInfo = models.BigKeyTypeInfo;
const DescribeInstanceNodeInfoRequest = models.DescribeInstanceNodeInfoRequest;
const DescribeMaintenanceWindowRequest = models.DescribeMaintenanceWindowRequest;
const CommandTake = models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models.DescribeInstanceMonitorBigKeyResponse;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const RedisNodes = models.RedisNodes;
const InquiryPriceUpgradeInstanceRequest = models.InquiryPriceUpgradeInstanceRequest;
const DelayDistribution = models.DelayDistribution;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const Groups = models.Groups;
const DescribeInstanceMonitorTookDistResponse = models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceAccountResponse = models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models.DescribeInstanceMonitorBigKeyRequest;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const TendisNodes = models.TendisNodes;
const AllocateWanAddressResponse = models.AllocateWanAddressResponse;
const RegionConf = models.RegionConf;
const Account = models.Account;
const DescribeProductInfoRequest = models.DescribeProductInfoRequest;
const DescribeInstanceMonitorTopNCmdResponse = models.DescribeInstanceMonitorTopNCmdResponse;
const SourceCommand = models.SourceCommand;
const HotKeyInfo = models.HotKeyInfo;
const BigKeyInfo = models.BigKeyInfo;
const ModfiyInstancePasswordRequest = models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DescribeInstanceMonitorTopNCmdTookResponse = models.DescribeInstanceMonitorTopNCmdTookResponse;
const DescribeInstanceMonitorBigKeySizeDistRequest = models.DescribeInstanceMonitorBigKeySizeDistRequest;
const DescribeInstanceAccountRequest = models.DescribeInstanceAccountRequest;
const InquiryPriceUpgradeInstanceResponse = models.InquiryPriceUpgradeInstanceResponse;
const DescribeInstanceMonitorSIPResponse = models.DescribeInstanceMonitorSIPResponse;
const SourceInfo = models.SourceInfo;
const DescribeInstanceMonitorSIPRequest = models.DescribeInstanceMonitorSIPRequest;
const ChangeReplicaToMasterResponse = models.ChangeReplicaToMasterResponse;
const ZoneCapacityConf = models.ZoneCapacityConf;
const DescribeInstanceNodeInfoResponse = models.DescribeInstanceNodeInfoResponse;
const DescribeReplicationGroupRequest = models.DescribeReplicationGroupRequest;
const DescribeReplicationGroupResponse = models.DescribeReplicationGroupResponse;
const DescribeInstanceMonitorHotKeyResponse = models.DescribeInstanceMonitorHotKeyResponse;
const DescribeInstanceMonitorTopNCmdRequest = models.DescribeInstanceMonitorTopNCmdRequest;
const ModfiyInstancePasswordResponse = models.ModfiyInstancePasswordResponse;
const ModifyInstanceReadOnlyRequest = models.ModifyInstanceReadOnlyRequest;
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
     * This API is used to query the global replication group.
     * @param {DescribeReplicationGroupRequest} req
     * @param {function(string, DescribeReplicationGroupResponse):void} cb
     * @public
     */
    DescribeReplicationGroup(req, cb) {
        let resp = new DescribeReplicationGroupResponse();
        this.request("DescribeReplicationGroup", req, resp, cb);
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
     * This API is used to set instance input mode.
     * @param {ModifyInstanceReadOnlyRequest} req
     * @param {function(string, ModifyInstanceReadOnlyResponse):void} cb
     * @public
     */
    ModifyInstanceReadOnly(req, cb) {
        let resp = new ModifyInstanceReadOnlyResponse();
        this.request("ModifyInstanceReadOnly", req, resp, cb);
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
     * This API is used to enable public network access.
     * @param {AllocateWanAddressRequest} req
     * @param {function(string, AllocateWanAddressResponse):void} cb
     * @public
     */
    AllocateWanAddress(req, cb) {
        let resp = new AllocateWanAddressResponse();
        this.request("AllocateWanAddress", req, resp, cb);
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
     * This API is used to query the purchasable capacity specifications of Redis instances in the specified AZ and instance type. If you are not in the allowlist for the AZ or instance type, you cannot view the details of the capacity specifications. To apply for the eligibility, please submit a ticket.
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        let resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
    }


}
module.exports = RedisClient;
