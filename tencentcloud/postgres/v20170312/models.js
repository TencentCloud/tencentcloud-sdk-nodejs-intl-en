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
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateDBInstances request structure.
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL kernel version. Currently, only two versions are supported: 9.3.5 and 9.5.4.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance capacity size in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances purchased at a time. Value range: 1-100.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Length of purchase in months. Currently, only 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36 are supported.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * AZ ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance billing type.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: no.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently).
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Renewal flag. 0: normal renewal (default), 1: auto-renewal.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Activity ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Instance name (which will be supported in the future)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to support IPv6 address access. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * The information of tags to be associated with instances. This parameter is left empty by default.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Security group ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * SetAutoRenewFlag request structure.
 * @class
 */
class SetAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Renewal flag. 0: normal renewal, 1: auto-renewal, 2: no renewal upon expiration
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeDatabases request structure.
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeDBXlogs request structure.
 * @class
 */
class DescribeDBXlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries returned per page in paged query. Value range: 1-100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Number of entries returned per page. Default value: 20. Value range: 1-100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to sort by creation time or username. Valid values: `createTime` (sort by creation time), `name` (sort by username)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Whether returns are sorted in ascending or descending order. Valid values: `desc` (descending), `asc` (ascending)
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DeleteReadOnlyGroup response structure.
 * @class
 */
class DeleteReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Specification description
 * @class
 */
class SpecItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification ID
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL kernel version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Full version name corresponding to kernel number
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Maximum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Estimated QPS for this specification
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Billing ID for this specification
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup response structure.
 * @class
 */
class ModifyDBInstanceReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess request structure.
 * @class
 */
class OpenServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an instance
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * RenewInstance response structure.
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessDBInstance response structure.
 * @class
 */
class DeleteServerlessDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyReadOnlyGroupConfig request structure.
 * @class
 */
class ModifyReadOnlyGroupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * RO group name
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delayed log size threshold in MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * Delay threshold in ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Whether to enable automatic load balancing. Valid values: `0` (disable), `1` (enable).
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup request structure.
 * @class
 */
class AddDBInstanceToReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeProductConfig request structure.
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * InitDBInstances response structure.
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewInstance request structure.
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `postgres-6fego161`
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Renewal duration in months
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * RebalanceReadOnlyGroup request structure.
 * @class
 */
class RebalanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information set.
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance network connection information
 * @class
 */
class DBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS domain name
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Connection port address
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Network type. 1: inner (private network address), 2: public (public network address)
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Network connection status
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AZ information such as number and status
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ abbreviation
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * AZ number
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Availability status. UNAVAILABLE: unavailable, AVAILABLE: available
         * @type {string || null}
         */
        this.ZoneState = null;

        /**
         * Whether the AZ supports IPv6 address access
         * @type {number || null}
         */
        this.ZoneSupportIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.ZoneSupportIpv6 = 'ZoneSupportIpv6' in params ? params.ZoneSupportIpv6 : null;

    }
}

/**
 * InquiryPriceCreateDBInstances request structure.
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Storage capacity size in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances. Maximum value: 100. If you need to create more instances at a time, please contact customer service.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Length of purchase in months. Currently, only 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36 are supported.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing ID, which can be obtained through the `Pid` field in the returned value of the `DescribeProductConfig` API.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Instance billing type. Valid value: POSTPAID_BY_HOUR (pay-as-you-go)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * Information of one SlowQuery
 * @class
 */
class NormalQueryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Number of calls
         * @type {number || null}
         */
        this.Calls = null;

        /**
         * Granularity
         * @type {Array.<number> || null}
         */
        this.CallsGrids = null;

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * Number of affected rows
         * @type {number || null}
         */
        this.Rows = null;

        /**
         * Minimum time consumed
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * Maximum time consumed
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * Time of the earliest slow SQL statement
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Time of the latest slow SQL statement
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * Shared memory blocks for reads
         * @type {number || null}
         */
        this.SharedReadBlks = null;

        /**
         * Shared memory blocks for writes
         * @type {number || null}
         */
        this.SharedWriteBlks = null;

        /**
         * Total IO read time
         * @type {number || null}
         */
        this.ReadCostTime = null;

        /**
         * Total IO write time
         * @type {number || null}
         */
        this.WriteCostTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Slow SQL statement after desensitization
         * @type {string || null}
         */
        this.NormalQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Calls = 'Calls' in params ? params.Calls : null;
        this.CallsGrids = 'CallsGrids' in params ? params.CallsGrids : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.SharedReadBlks = 'SharedReadBlks' in params ? params.SharedReadBlks : null;
        this.SharedWriteBlks = 'SharedWriteBlks' in params ? params.SharedWriteBlks : null;
        this.ReadCostTime = 'ReadCostTime' in params ? params.ReadCostTime : null;
        this.WriteCostTime = 'WriteCostTime' in params ? params.WriteCostTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;

    }
}

/**
 * The information of tags associated with instances, including `TagKey` and `TagValue`
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeDBInstanceAttribute request structure.
 * @class
 */
class DescribeDBInstanceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyDBInstancesProject response structure.
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully transferred instances
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PostgreSQL for Serverless instance account description
 * @class
 */
class ServerlessDBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBUser = null;

        /**
         * Password
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBPassword = null;

        /**
         * The maximum number of connections
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DBConnLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBUser = 'DBUser' in params ? params.DBUser : null;
        this.DBPassword = 'DBPassword' in params ? params.DBPassword : null;
        this.DBConnLimit = 'DBConnLimit' in params ? params.DBConnLimit : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup request structure.
 * @class
 */
class ModifyDBInstanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * ID of the RO group to which the read-only replica belongs
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * ID of the new RO group into which the read-only replica will move
         * @type {string || null}
         */
        this.NewReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.NewReadOnlyGroupId = 'NewReadOnlyGroupId' in params ? params.NewReadOnlyGroupId : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup response structure.
 * @class
 */
class AddDBInstanceToReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstance response structure.
 * @class
 */
class CreateReadOnlyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number list. Each instance corresponds to an order number.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * ID set of instances which have been created successfully. The parameter value will be returned only when the pay-as-you-go billing mode is used.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrders response structure.
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of orders
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Order array
         * @type {Array.<PgDeal> || null}
         */
        this.Deals = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new PgDeal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateDBInstances response structure.
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original price in 0.01 CNY.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted price in 0.01 CNY.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisIsolateDBInstances request structure.
 * @class
 */
class DisIsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID list
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Specify the valid period (in months) of the monthly-subscribed instance when removing it from isolation
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to use vouchers
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * PostgreSQL for Serverless instance network description
 * @class
 */
class ServerlessDBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * IP address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Port number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Network type
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * DescribeDBInstances request structure.
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition. Valid values: db-instance-id, db-instance-name, db-project-id, db-pay-mode, db-tag-key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of entries returned per page. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset which starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting metric, such as instance name or creation time. Valid values: DBInstanceId, CreateTime, Name, EndTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * In ascending or descending order
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * ModifyAccountRemark response structure.
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance request structure.
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance memory size in GB after upgrade
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB after upgrade
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: no
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Activity ID
         * @type {number || null}
         */
        this.ActivityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeReadOnlyGroups response structure.
 * @class
 */
class DescribeReadOnlyGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group list
         * @type {Array.<ReadOnlyGroup> || null}
         */
        this.ReadOnlyGroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ReadOnlyGroupList) {
            this.ReadOnlyGroupList = new Array();
            for (let z in params.ReadOnlyGroupList) {
                let obj = new ReadOnlyGroup();
                obj.deserialize(params.ReadOnlyGroupList[z]);
                this.ReadOnlyGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetAutoRenewFlag response structure.
 * @class
 */
class SetAutoRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully set instances
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Purchasable specification details in an AZ in a region.
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ abbreviate, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specification details list
         * @type {Array.<SpecItemInfo> || null}
         */
        this.SpecItemInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }

    }
}

/**
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseServerlessDBExtranetAccess request structure.
 * @class
 */
class CloseServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an instance
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * RO group information
 * @class
 */
class ReadOnlyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group identifier
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * RO group name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * Project ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Primary instance ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * Delayed log size threshold
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delay threshold
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Region ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance details
         * @type {Array.<DBInstance> || null}
         */
        this.ReadOnlyDBInstanceList = null;

        /**
         * Whether to enable automatic load balancing
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * Network information
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ReadOnlyDBInstanceList) {
            this.ReadOnlyDBInstanceList = new Array();
            for (let z in params.ReadOnlyDBInstanceList) {
                let obj = new DBInstance();
                obj.deserialize(params.ReadOnlyDBInstanceList[z]);
                this.ReadOnlyDBInstanceList.push(obj);
            }
        }
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

    }
}

/**
 * Order details
 * @class
 */
class PgDeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * User
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Number of instances involved in order
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * DescribeDBErrlogs request structure.
 * @class
 */
class DescribeDBErrlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-5bq3wfjd
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-01-01 00:00:00, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-01-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Search keyword
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Number of entries returned per page. Value range: 1-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DestroyDBInstance request structure.
 * @class
 */
class DestroyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the instance to be eliminated
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess response structure.
 * @class
 */
class OpenServerlessDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database Xlog information
 * @class
 */
class Xlog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * Backup file size
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeServerlessDBInstances request structure.
 * @class
 */
class DescribeServerlessDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query conditions
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

        /**
         * The number of queries
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The offset value
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting metric. Currently, only "CreateTime" (instance creation time) is supported.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Ascending and descending are supported.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeDBBackups response structure.
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of backup files in the returned backup list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Backup list
         * @type {Array.<DBBackup> || null}
         */
        this.BackupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new DBBackup();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * PostgreSQL for Serverless instance description
 * @class
 */
class ServerlessDBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is the unique identifier
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Character set
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * Database version
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance network information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Instance account information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBAccount> || null}
         */
        this.DBAccountSet = null;

        /**
         * Information of the databases in an instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DBDatabaseList = null;

        /**
         * The array of tags bound to an instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new ServerlessDBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

        if (params.DBAccountSet) {
            this.DBAccountSet = new Array();
            for (let z in params.DBAccountSet) {
                let obj = new ServerlessDBAccount();
                obj.deserialize(params.DBAccountSet[z]);
                this.DBAccountSet.push(obj);
            }
        }
        this.DBDatabaseList = 'DBDatabaseList' in params ? params.DBDatabaseList : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * CreateReadOnlyGroup request structure.
 * @class
 */
class CreateReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * RO group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delay threshold in ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Delayed log size threshold in MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * Security group ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * CloseServerlessDBExtranetAccess response structure.
 * @class
 */
class CloseServerlessDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartDBInstance request structure.
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * IsolateDBInstances response structure.
 * @class
 */
class IsolateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess response structure.
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance request structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance disk size in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance billing type. Valid value: `POSTPAID_BY_HOUR` (pay-as-you-go hourly)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * IsolateDBInstances request structure.
 * @class
 */
class IsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * ModifyDBInstanceName request structure.
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * New name of database instance
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * InquiryPriceRenewDBInstance response structure.
 * @class
 */
class InquiryPriceRenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total cost before discount; for example, 24650 indicates 246.5 CNY
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Actual amount payable; for example, 24650 indicates 246.5 CNY
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Error log details
 * @class
 */
class ErrLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Error occurrence time
         * @type {string || null}
         */
        this.ErrTime = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.ErrTime = 'ErrTime' in params ? params.ErrTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * DescribeServerlessDBInstances response structure.
 * @class
 */
class DescribeServerlessDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of query results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Query results
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBInstance> || null}
         */
        this.DBInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new ServerlessDBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RebalanceReadOnlyGroup response structure.
 * @class
 */
class RebalanceReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitDBInstances request structure.
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Instance admin account username.
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * Password corresponding to instance root account username.
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Instance character set. Valid values: UTF8, LATIN1.
         * @type {string || null}
         */
        this.Charset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

    }
}

/**
 * Instance details
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region such as ap-guangzhou, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ such as ap-guangzhou-3, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance status
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * Assigned instance memory size in GB
         * @type {number || null}
         */
        this.DBInstanceMemory = null;

        /**
         * Assigned instance storage capacity in GB
         * @type {number || null}
         */
        this.DBInstanceStorage = null;

        /**
         * Number of assigned CPUs
         * @type {number || null}
         */
        this.DBInstanceCpu = null;

        /**
         * Purchasable specification ID
         * @type {string || null}
         */
        this.DBInstanceClass = null;

        /**
         * Instance type. 1: primary (master instance), 2: readonly (read-only instance), 3: guard (disaster recovery instance), 4: temp (temp instance)
         * @type {string || null}
         */
        this.DBInstanceType = null;

        /**
         * Instance edition. Currently, only `standard` edition (dual-server high-availability one-master-one-slave edition) is supported
         * @type {string || null}
         */
        this.DBInstanceVersion = null;

        /**
         * Instance database character set
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * PostgreSQL kernel version
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance last modified time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Instance isolation time
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * Billing mode. postpaid: pay-as-you-go
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Whether to renew automatically. 1: yes, 0: no
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Instance network connection information
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * User `AppId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Instance `Uid`
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Whether the instance supports IPv6 address access. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.SupportIpv6 = null;

        /**
         * The information of tags associated with instances.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Primary instance information, which is returned only when the instance is read-only
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * Number of read-only instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReadOnlyInstanceNum = null;

        /**
         * The status of a instance in a read-only group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusInReadonlyGroup = null;

        /**
         * Elimination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OfflineTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.SupportIpv6 = 'SupportIpv6' in params ? params.SupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.ReadOnlyInstanceNum = 'ReadOnlyInstanceNum' in params ? params.ReadOnlyInstanceNum : null;
        this.StatusInReadonlyGroup = 'StatusInReadonlyGroup' in params ? params.StatusInReadonlyGroup : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;

    }
}

/**
 * DescribeProductConfig response structure.
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification list.
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReadOnlyGroup request structure.
 * @class
 */
class DeleteReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the RO group to be deleted
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeDBBackups request structure.
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Backup mode (1: full). Currently, only full backup is supported. The value is 1.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries to be returned per page for backup list. Default value: 20. Minimum value: 1. Maximum value: 100. (If this parameter is left empty or 0, the default value will be used)
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Key-value pair filter for conditional filtering queries, such as filter ID and name
* If more than one filter exists, the logical relationship between these filters is `AND`.
* If multiple values exist in one filter, the logical relationship between these values is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * One or more filter values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DisIsolateDBInstances response structure.
 * @class
 */
class DisIsolateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess request structure.
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to enable public network access over IPv6 address. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * Slow query details
 * @class
 */
class SlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Total number of calls
         * @type {number || null}
         */
        this.TotalCalls = null;

        /**
         * List of slow SQL statements after desensitization
         * @type {Array.<NormalQueryItem> || null}
         */
        this.NormalQueries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCalls = 'TotalCalls' in params ? params.TotalCalls : null;

        if (params.NormalQueries) {
            this.NormalQueries = new Array();
            for (let z in params.NormalQueries) {
                let obj = new NormalQueryItem();
                obj.deserialize(params.NormalQueries[z]);
                this.NormalQueries.push(obj);
            }
        }

    }
}

/**
 * RemoveDBInstanceFromReadOnlyGroup request structure.
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * ModifyDBInstanceName response structure.
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess response structure.
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstance request structure.
 * @class
 */
class CreateReadOnlyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL kernel version, which must be the same as that of the primary instance
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances purchased at a time. Value range: 1–100.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Valid period in months of purchased instances. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. This parameter is set to `1` when the pay-as-you-go billing mode is used.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * ID of the primary instance to which the read-only replica belongs
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * Availability zone ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance billing mode. Valid values: `PREPAID` (monthly subscription), `POSTPAID_BY_HOUR` (pay-as-you-go).
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Whether to automatically use vouchers. Valid values: `1` (yes), `0` (no). Default value: `0`.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Currently, you can specify only one voucher.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Renewal flag. Valid values: `0` (manual renewal), `1` (auto-renewal). Default value: `0`.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Special offer ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Instance name (which will be supported in the future)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to support IPv6 address access. Valid values: `1` (yes), `0` (no).
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * The information of tags to be associated with instances. This parameter is left empty by default.
         * @type {Tag || null}
         */
        this.TagList = null;

        /**
         * Security group ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

        if (params.TagList) {
            let obj = new Tag();
            obj.deserialize(params.TagList)
            this.TagList = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * AZ information set.
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServerlessDBInstance response structure.
 * @class
 */
class CreateServerlessDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as "postgres-xxxxx". The value must be globally unique.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases response structure.
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database information
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrders request structure.
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name set
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * ModifyAccountRemark request structure.
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New remarks corresponding to user `UserName`
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CloseDBExtranetAccess request structure.
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to disable public network access over IPv6 address. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * CreateServerlessDBInstance request structure.
 * @class
 */
class CreateServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone ID. Only ap-shanghai-2, ap-beijing-1, and ap-guangzhou-2 are supported during the beta test.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance name. The value must be unique for the same account.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Kernel version of a PostgreSQL instance. Currently, only 10.4 is supported.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Database character set of a PostgreSQL instance. Currently, only UTF-8 is supported.
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Array of tags to be bound with the instance
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceRenewDBInstance request structure.
 * @class
 */
class InquiryPriceRenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Renewal duration in months. Maximum value: 48
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * CreateReadOnlyGroup response structure.
 * @class
 */
class CreateReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * Task ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessDBInstance request structure.
 * @class
 */
class DeleteServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name. Either instance name or instance ID (or both) must be passed in. If both are passed in, the instance ID will prevail.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance ID. Either instance name or instance ID (or both) must be passed in. If both are passed in, the instance ID will prevail.
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyReadOnlyGroupConfig response structure.
 * @class
 */
class ModifyReadOnlyGroupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Account information
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Account remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Account status. 1: creating, 2: normal, 3: modifying, 4: resetting password, -1: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Account creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Account last modified time
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Database backup information
 * @class
 */
class DBBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * File size in KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Policy (0: instance backup, 1: multi-database backup)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Type (0: scheduled)
         * @type {number || null}
         */
        this.Way = null;

        /**
         * Backup mode (1: full)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Status (1: creating, 2: success, 3: failure)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DB list
         * @type {Array.<string> || null}
         */
        this.DbList = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DbList = 'DbList' in params ? params.DbList : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;

    }
}

/**
 * DescribeDBErrlogs response structure.
 * @class
 */
class DescribeDBErrlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned for this call
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Error log list
         * @type {Array.<ErrLogDetail> || null}
         */
        this.Details = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ErrLogDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance response structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total cost before discount.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Actual amount payable
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Region information such as number and status
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region number
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Availability status. UNAVAILABLE: unavailable, AVAILABLE: available
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * Whether the resource can be purchased in this region. Valid values: `0` (no), `1` (yes).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SupportInternational = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.SupportInternational = 'SupportInternational' in params ? params.SupportInternational : null;

    }
}

/**
 * RestartDBInstance response structure.
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances response structure.
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances found.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance details set.
         * @type {Array.<DBInstance> || null}
         */
        this.DBInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveDBInstanceFromReadOnlyGroup response structure.
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetAccountPassword request structure.
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New password corresponding to `UserName` account
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeReadOnlyGroups request structure.
 * @class
 */
class DescribeReadOnlyGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition. The primary ID must be specified in the format of `db-master-instance-id` to filter results, or else `null` will be returned.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The number of results per page. Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Specify which page is displayed. Default value: 1 (the first page).
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Sorting criterion. Valid values: `ROGroupId`, `CreateTime`, `Name`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `desc`, `asc`.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned for this API call.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account list details.
         * @type {Array.<AccountInfo> || null}
         */
        this.Details = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new AccountInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance response structure.
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction name.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstancesProject request structure.
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB for PostgreSQL instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * New project ID of TencentDB for PostgreSQL instance
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDBSlowlogs request structure.
 * @class
 */
class DescribeDBSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Metric for sorting. Valid values: `sum_calls` (total number of calls), `sum_cost_time` (total time consumed)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. desc: descending, asc: ascending
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Number of entries returned per page. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DestroyDBInstance response structure.
 * @class
 */
class DestroyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceAttribute response structure.
 * @class
 */
class DescribeDBInstanceAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance details.
         * @type {DBInstance || null}
         */
        this.DBInstance = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance)
            this.DBInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBXlogs response structure.
 * @class
 */
class DescribeDBXlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Xlog list
         * @type {Array.<Xlog> || null}
         */
        this.XlogList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.XlogList) {
            this.XlogList = new Array();
            for (let z in params.XlogList) {
                let obj = new Xlog();
                obj.deserialize(params.XlogList[z]);
                this.XlogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowlogs response structure.
 * @class
 */
class DescribeDBSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query log details
         * @type {SlowlogDetail || null}
         */
        this.Detail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstances response structure.
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number list. Each instance corresponds to an order number.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * ID set of instances which have been created successfully. The parameter value will be returned only when the billing mode is postpaid.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    SetAutoRenewFlagRequest: SetAutoRenewFlagRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeDBXlogsRequest: DescribeDBXlogsRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DeleteReadOnlyGroupResponse: DeleteReadOnlyGroupResponse,
    SpecItemInfo: SpecItemInfo,
    ModifyDBInstanceReadOnlyGroupResponse: ModifyDBInstanceReadOnlyGroupResponse,
    OpenServerlessDBExtranetAccessRequest: OpenServerlessDBExtranetAccessRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DeleteServerlessDBInstanceResponse: DeleteServerlessDBInstanceResponse,
    ModifyReadOnlyGroupConfigRequest: ModifyReadOnlyGroupConfigRequest,
    AddDBInstanceToReadOnlyGroupRequest: AddDBInstanceToReadOnlyGroupRequest,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    RenewInstanceRequest: RenewInstanceRequest,
    RebalanceReadOnlyGroupRequest: RebalanceReadOnlyGroupRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DBInstanceNetInfo: DBInstanceNetInfo,
    ZoneInfo: ZoneInfo,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    NormalQueryItem: NormalQueryItem,
    Tag: Tag,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    ServerlessDBAccount: ServerlessDBAccount,
    ModifyDBInstanceReadOnlyGroupRequest: ModifyDBInstanceReadOnlyGroupRequest,
    AddDBInstanceToReadOnlyGroupResponse: AddDBInstanceToReadOnlyGroupResponse,
    CreateReadOnlyDBInstanceResponse: CreateReadOnlyDBInstanceResponse,
    DescribeOrdersResponse: DescribeOrdersResponse,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    DisIsolateDBInstancesRequest: DisIsolateDBInstancesRequest,
    ServerlessDBInstanceNetInfo: ServerlessDBInstanceNetInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    DescribeReadOnlyGroupsResponse: DescribeReadOnlyGroupsResponse,
    SetAutoRenewFlagResponse: SetAutoRenewFlagResponse,
    SpecInfo: SpecInfo,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    CloseServerlessDBExtranetAccessRequest: CloseServerlessDBExtranetAccessRequest,
    ReadOnlyGroup: ReadOnlyGroup,
    PgDeal: PgDeal,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    DestroyDBInstanceRequest: DestroyDBInstanceRequest,
    OpenServerlessDBExtranetAccessResponse: OpenServerlessDBExtranetAccessResponse,
    Xlog: Xlog,
    DescribeServerlessDBInstancesRequest: DescribeServerlessDBInstancesRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    ServerlessDBInstance: ServerlessDBInstance,
    CreateReadOnlyGroupRequest: CreateReadOnlyGroupRequest,
    CloseServerlessDBExtranetAccessResponse: CloseServerlessDBExtranetAccessResponse,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    IsolateDBInstancesResponse: IsolateDBInstancesResponse,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    IsolateDBInstancesRequest: IsolateDBInstancesRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    InquiryPriceRenewDBInstanceResponse: InquiryPriceRenewDBInstanceResponse,
    ErrLogDetail: ErrLogDetail,
    DescribeServerlessDBInstancesResponse: DescribeServerlessDBInstancesResponse,
    RebalanceReadOnlyGroupResponse: RebalanceReadOnlyGroupResponse,
    InitDBInstancesRequest: InitDBInstancesRequest,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    DeleteReadOnlyGroupRequest: DeleteReadOnlyGroupRequest,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    Filter: Filter,
    DisIsolateDBInstancesResponse: DisIsolateDBInstancesResponse,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    SlowlogDetail: SlowlogDetail,
    RemoveDBInstanceFromReadOnlyGroupRequest: RemoveDBInstanceFromReadOnlyGroupRequest,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    CreateReadOnlyDBInstanceRequest: CreateReadOnlyDBInstanceRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateServerlessDBInstanceResponse: CreateServerlessDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    CreateServerlessDBInstanceRequest: CreateServerlessDBInstanceRequest,
    InquiryPriceRenewDBInstanceRequest: InquiryPriceRenewDBInstanceRequest,
    CreateReadOnlyGroupResponse: CreateReadOnlyGroupResponse,
    DeleteServerlessDBInstanceRequest: DeleteServerlessDBInstanceRequest,
    ModifyReadOnlyGroupConfigResponse: ModifyReadOnlyGroupConfigResponse,
    AccountInfo: AccountInfo,
    DBBackup: DBBackup,
    DescribeDBErrlogsResponse: DescribeDBErrlogsResponse,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    RegionInfo: RegionInfo,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    RemoveDBInstanceFromReadOnlyGroupResponse: RemoveDBInstanceFromReadOnlyGroupResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeReadOnlyGroupsRequest: DescribeReadOnlyGroupsRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    DescribeDBSlowlogsRequest: DescribeDBSlowlogsRequest,
    DestroyDBInstanceResponse: DestroyDBInstanceResponse,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,

}
