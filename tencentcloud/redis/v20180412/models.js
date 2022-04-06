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
 * Region information
 * @class
 */
class RegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.RegionShortName = null;

        /**
         * Name of the area where a region is located
         * @type {string || null}
         */
        this.Area = null;

        /**
         * AZ information
         * @type {Array.<ZoneCapacityConf> || null}
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneCapacityConf();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * Product information in the availability zone
 * @class
 */
class ZoneCapacityConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, such as ap-guangzhou-3
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Whether a product is sold out in an AZ
         * @type {boolean || null}
         */
        this.IsSaleout = null;

        /**
         * Whether it is a default AZ
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Network type. basenet: basic network; vpcnet: VPC
         * @type {Array.<string> || null}
         */
        this.NetWorkType = null;

        /**
         * Information of an AZ, such as product specifications in it
         * @type {Array.<ProductConf> || null}
         */
        this.ProductSet = null;

        /**
         * AZ ID, such as 100003
         * @type {number || null}
         */
        this.OldZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsSaleout = 'IsSaleout' in params ? params.IsSaleout : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NetWorkType = 'NetWorkType' in params ? params.NetWorkType : null;

        if (params.ProductSet) {
            this.ProductSet = new Array();
            for (let z in params.ProductSet) {
                let obj = new ProductConf();
                obj.deserialize(params.ProductSet[z]);
                this.ProductSet.push(obj);
            }
        }
        this.OldZoneId = 'OldZoneId' in params ? params.OldZoneId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * Instances in replication group
 * @class
 */
class Instances extends  AbstractModel {
    constructor(){
        super();

        /**
         * User App ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region ID. 1: Guangzhou; 4: Shanghai; 5: Hong Kong (China); 6: Toronto; 7: Shanghai Finance; 8: Beijing; 9: Singapore; 11: Shenzhen Finance; 15: West US (Silicon Valley)
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Shard size
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * Instance disk size
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Engine: Redis community edition, Tencent Cloud CKV
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Instance role. Valid values: `rw` (read-write), `r`( read-only)
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Internal parameter, which can be ignored.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * VPC ID, such as 75101
         * @type {number || null}
         */
        this.VpcID = null;

        /**
         * Instance Port
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Instance status. 0: to be initialized; 1: in process; 2: running; -2: isolated; -3: to be deleted
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Repository ID
         * @type {number || null}
         */
        this.GrocerySysId = null;

        /**
         * Instance type. Valid values: `1` (Redis 2.8 memory edition in cluster architecture), `2` (Redis 2.8 memory edition in standard architecture), `3` (CKV 3.2 memory edition in standard architecture), `4` (CKV 3.2 memory edition in cluster architecture), `5` (Redis 2.8 memory edition in standalone architecture), `6` (Redis 4.0 memory edition in standard architecture), `7` (Redis 4.0 memory edition in cluster architecture), `8` (Redis 5.0 memory edition in standard architecture), `9` (Redis 5.0 memory edition in cluster architecture)
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.VpcID = 'VpcID' in params ? params.VpcID : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GrocerySysId = 'GrocerySysId' in params ? params.GrocerySysId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access command information
         * @type {Array.<SourceCommand> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceCommand();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist request structure.
 * @class
 */
class DescribeInstanceMonitorTookDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey request structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: past 30 minutes; 3: past 6 hours; 4: past 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * InquiryPriceCreateInstance request structure.
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type. Valid values: `2` (Redis 2.8 memory edition in standard architecture), `3` (CKV 3.2 memory edition in standard architecture), `4` (CKV 3.2 memory edition in cluster architecture), `6` (Redis 4.0 memory edition in standard architecture), `7` (Redis 4.0 memory edition in cluster architecture), `8` (Redis 5.0 memory edition in standard architecture), `9` (Redis 5.0 memory edition in cluster architecture).
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * Memory capacity in MB, which must be a multiple of 1,024. It is subject to the purchasable specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
If `TypeId` indicates the standard architecture, `MemSize` indicates the total memory capacity of an instance; if `TypeId` indicates the cluster architecture, `MemSize` indicates the memory capacity per shard.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of instances. The actual quantity purchasable at a time is subject to the specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Length of purchase in months, which is required when creating a monthly-subscribed instance. Value range: [1,2,3,4,5,6,7,8,9,10,11,12,24,36]. For pay-as-you-go instances, set the parameter to `1`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing mode. Valid values: `0` (pay-as-you-go), `1` (monthly subscription).
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * ID of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance shard quantity. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, Redis 2.8 standalone edition, and Redis 4.0 standard architecture.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Instance replica quantity. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, and Redis 2.8 standalone edition.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Whether to support read-only replicas. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, and Redis 2.8 standalone edition.
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * Name of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * DescribeProductInfo response structure.
 * @class
 */
class DescribeProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sale information of a region
         * @type {Array.<RegionConf> || null}
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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionConf();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintenanceWindow response structure.
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the maintenance window, such as 17:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the maintenance window, such as 19:00.
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Product information
 * @class
 */
class ProductConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product type. Valid values: `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture), `10` (Redis 4.0 Hybrid Storage Edition (Tendis)).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Product name: Redis Master-Replica Edition, CKV Master-Replica Edition, CKV Cluster Edition, Redis Standalone Edition, Redis Cluster Edition, Tendis Hybrid Storage Edition
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Minimum purchasable quantity
         * @type {number || null}
         */
        this.MinBuyNum = null;

        /**
         * Maximum purchasable quantity
         * @type {number || null}
         */
        this.MaxBuyNum = null;

        /**
         * Whether a product is sold out
         * @type {boolean || null}
         */
        this.Saleout = null;

        /**
         * Product engine: Tencent Cloud CKV or Redis community edition
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Compatible version: Redis 2.8, Redis 3.2, or Redis 4.0
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Total capacity in GB
         * @type {Array.<string> || null}
         */
        this.TotalSize = null;

        /**
         * Shard size in GB
         * @type {Array.<string> || null}
         */
        this.ShardSize = null;

        /**
         * Number of replicas
         * @type {Array.<string> || null}
         */
        this.ReplicaNum = null;

        /**
         * Number of shards
         * @type {Array.<string> || null}
         */
        this.ShardNum = null;

        /**
         * Supported billing method. 1: monthly subscription; 0: pay-as-you-go
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Whether to support read-only replicas
         * @type {boolean || null}
         */
        this.EnableRepicaReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.ShardSize = 'ShardSize' in params ? params.ShardSize : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EnableRepicaReadOnly = 'EnableRepicaReadOnly' in params ? params.EnableRepicaReadOnly : null;

    }
}

/**
 * Big key type distribution details
 * @class
 */
class BigKeyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeMaintenanceWindow request structure.
 * @class
 */
class DescribeMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Command duration
 * @class
 */
class CommandTake extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Duration
         * @type {number || null}
         */
        this.Took = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Took = 'Took' in params ? params.Took : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key details
         * @type {Array.<BigKeyInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance response structure.
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price. Unit: USD (accurate down to the cent)
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstance request structure.
 * @class
 */
class InquiryPriceUpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard size in MB.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of shards. This parameter can be left blank for Redis 2.8 in standard architecture, CKV in standard architecture, and Redis 2.8 in standalone architecture.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas. This parameter can be left blank for Redis 2.8 in standard architecture, CKV in standard architecture, and Redis 2.8 in standalone architecture.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * Delay distribution details
 * @class
 */
class DelayDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delay distribution. The mapping between delay range and `Ladder` value is as follows:
[0ms,1ms]: 1;
[1ms,5ms]: 5;
[5ms,10ms]: 10;
[10ms,50ms]: 50;
[50ms,200ms]: 200;
[200ms,∞]: -1.
         * @type {number || null}
         */
        this.Ladder = null;

        /**
         * The number of commands whose delay falls within the current delay range
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Modification time
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ladder = 'Ladder' in params ? params.Ladder : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeSlowLog response structure.
 * @class
 */
class DescribeSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow logs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow log details
         * @type {Array.<InstanceSlowlogDetail> || null}
         */
        this.InstanceSlowlogDetail = null;

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

        if (params.InstanceSlowlogDetail) {
            this.InstanceSlowlogDetail = new Array();
            for (let z in params.InstanceSlowlogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowlogDetail[z]);
                this.InstanceSlowlogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Replication group info
 * @class
 */
class Groups extends  AbstractModel {
    constructor(){
        super();

        /**
         * User App ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Region ID. 1: Guangzhou; 4: Shanghai; 5: Hong Kong (China); 6: Toronto; 7: Shanghai Finance; 8: Beijing; 9: Singapore; 11: Shenzhen Finance; 15: West US (Silicon Valley); 16: Chengdu; 17: Germany; 18: South Korea; 19: Chongqing; 21: India; 22: East US (Virginia); 23: Thailand; 24: Russia; 25: Japan
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Replication group info
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Replication group name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Replication group status. Valid values: 37 (Associating replication group), 38 (Reconnecting to replication group), 51 (Disassociating the replication group), 52 (Switching primary instance in the replication group), 53 (Modifying roles)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of replication groups
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Instances in replication group
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Instances> || null}
         */
        this.Instances = null;

        /**
         * Remarks
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instances();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist response structure.
 * @class
 */
class DescribeInstanceMonitorTookDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latency distribution information
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceAccount response structure.
 * @class
 */
class DescribeInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Number of accounts
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Request type. 1: string type; 2: all types
         * @type {number || null}
         */
        this.ReqType = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key type distribution details
         * @type {Array.<BigKeyTypeInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyTypeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sub-account information
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account name (`root` for a root account)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Account description information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Read/write policy. r: read-only; w: write-only; rw: read/write
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Routing policy. master: master node; replication: secondary node
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Sub-account status. 1: account is being changed; 2: account is valid; -4: account has been deleted
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeProductInfo request structure.
 * @class
 */
class DescribeProductInfoRequest extends  AbstractModel {
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
 * DescribeInstanceMonitorBigKeySizeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key size distribution details
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Access command
 * @class
 */
class SourceCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Number of executions
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Hot key details
 * @class
 */
class HotKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hot key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Big key details
 * @class
 */
class BigKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database
         * @type {number || null}
         */
        this.DB = null;

        /**
         * Big key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Data timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * ModfiyInstancePassword request structure.
 * @class
 */
class ModfiyInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old password of an instance
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * New password of an instance
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSlowLog request structure.
 * @class
 */
class DescribeSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Slow log threshold in microseconds
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit`
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Duration details
         * @type {Array.<CommandTake> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CommandTake();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceAccount request structure.
 * @class
 */
class DescribeInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * InquiryPriceUpgradeInstance response structure.
 * @class
 */
class InquiryPriceUpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price. Unit: USD
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorSIP response structure.
 * @class
 */
class DescribeInstanceMonitorSIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source information
         * @type {Array.<SourceInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Access source information
 * @class
 */
class SourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Number of connections
         * @type {number || null}
         */
        this.Conn = null;

        /**
         * Command
         * @type {number || null}
         */
        this.Cmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;

    }
}

/**
 * DescribeInstanceMonitorSIP request structure.
 * @class
 */
class DescribeInstanceMonitorSIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeReplicationGroup request structure.
 * @class
 */
class DescribeReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance list size. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Replication group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Instance ID/name. Fuzzy query is supported.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeReplicationGroup response structure.
 * @class
 */
class DescribeReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of replication group
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Replication group info
         * @type {Array.<Groups> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new Groups();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey response structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hot key details
         * @type {Array.<HotKeyInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new HotKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModfiyInstancePassword response structure.
 * @class
 */
class ModfiyInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slow log details
 * @class
 */
class InstanceSlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log duration
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client address
         * @type {string || null}
         */
        this.Client = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Execution duration
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

module.exports = {
    RegionConf: RegionConf,
    ZoneCapacityConf: ZoneCapacityConf,
    DescribeInstanceMonitorTopNCmdTookRequest: DescribeInstanceMonitorTopNCmdTookRequest,
    Instances: Instances,
    DescribeInstanceMonitorTopNCmdResponse: DescribeInstanceMonitorTopNCmdResponse,
    DescribeInstanceMonitorTookDistRequest: DescribeInstanceMonitorTookDistRequest,
    DescribeInstanceMonitorHotKeyRequest: DescribeInstanceMonitorHotKeyRequest,
    DescribeInstanceMonitorBigKeyTypeDistRequest: DescribeInstanceMonitorBigKeyTypeDistRequest,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    ProductConf: ProductConf,
    BigKeyTypeInfo: BigKeyTypeInfo,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    CommandTake: CommandTake,
    DescribeInstanceMonitorBigKeyResponse: DescribeInstanceMonitorBigKeyResponse,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    InquiryPriceUpgradeInstanceRequest: InquiryPriceUpgradeInstanceRequest,
    DelayDistribution: DelayDistribution,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    Groups: Groups,
    DescribeInstanceMonitorTookDistResponse: DescribeInstanceMonitorTookDistResponse,
    DescribeInstanceAccountResponse: DescribeInstanceAccountResponse,
    DescribeInstanceMonitorBigKeyRequest: DescribeInstanceMonitorBigKeyRequest,
    DescribeInstanceMonitorBigKeyTypeDistResponse: DescribeInstanceMonitorBigKeyTypeDistResponse,
    Account: Account,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    DescribeInstanceMonitorBigKeySizeDistResponse: DescribeInstanceMonitorBigKeySizeDistResponse,
    SourceCommand: SourceCommand,
    HotKeyInfo: HotKeyInfo,
    BigKeyInfo: BigKeyInfo,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    DescribeInstanceMonitorTopNCmdTookResponse: DescribeInstanceMonitorTopNCmdTookResponse,
    DescribeInstanceMonitorBigKeySizeDistRequest: DescribeInstanceMonitorBigKeySizeDistRequest,
    DescribeInstanceAccountRequest: DescribeInstanceAccountRequest,
    InquiryPriceUpgradeInstanceResponse: InquiryPriceUpgradeInstanceResponse,
    DescribeInstanceMonitorSIPResponse: DescribeInstanceMonitorSIPResponse,
    SourceInfo: SourceInfo,
    DescribeInstanceMonitorSIPRequest: DescribeInstanceMonitorSIPRequest,
    DescribeReplicationGroupRequest: DescribeReplicationGroupRequest,
    DescribeReplicationGroupResponse: DescribeReplicationGroupResponse,
    DescribeInstanceMonitorHotKeyResponse: DescribeInstanceMonitorHotKeyResponse,
    DescribeInstanceMonitorTopNCmdRequest: DescribeInstanceMonitorTopNCmdRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSlowlogDetail: InstanceSlowlogDetail,

}
