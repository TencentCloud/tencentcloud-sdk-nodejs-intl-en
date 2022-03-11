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
 * Security group quota limit
 * @class
 */
class SecurityGroupLimitSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of security groups that can be created
         * @type {number || null}
         */
        this.SecurityGroupLimit = null;

        /**
         * Maximum number of rules under the security group
         * @type {number || null}
         */
        this.SecurityGroupPolicyLimit = null;

        /**
         * Number of nested security group rules under the security group
         * @type {number || null}
         */
        this.ReferedSecurityGroupLimit = null;

        /**
         * Number of instances associated with the security group
         * @type {number || null}
         */
        this.SecurityGroupInstanceLimit = null;

        /**
         * Number of security groups associated with the instance
         * @type {number || null}
         */
        this.InstanceSecurityGroupLimit = null;

        /**
         * Number of modules associated with the security group
         * @type {number || null}
         */
        this.SecurityGroupModuleLimit = null;

        /**
         * Number of security groups associated with the module
         * @type {number || null}
         */
        this.ModuleSecurityGroupLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupLimit = 'SecurityGroupLimit' in params ? params.SecurityGroupLimit : null;
        this.SecurityGroupPolicyLimit = 'SecurityGroupPolicyLimit' in params ? params.SecurityGroupPolicyLimit : null;
        this.ReferedSecurityGroupLimit = 'ReferedSecurityGroupLimit' in params ? params.ReferedSecurityGroupLimit : null;
        this.SecurityGroupInstanceLimit = 'SecurityGroupInstanceLimit' in params ? params.SecurityGroupInstanceLimit : null;
        this.InstanceSecurityGroupLimit = 'InstanceSecurityGroupLimit' in params ? params.InstanceSecurityGroupLimit : null;
        this.SecurityGroupModuleLimit = 'SecurityGroupModuleLimit' in params ? params.SecurityGroupModuleLimit : null;
        this.ModuleSecurityGroupLimit = 'ModuleSecurityGroupLimit' in params ? params.ModuleSecurityGroupLimit : null;

    }
}

/**
 * CreateRoutes request structure.
 * @class
 */
class CreateRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object to be created.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DescribeHaVips response structure.
 * @class
 */
class DescribeHaVipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible objects.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of HAVIP objects.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<HaVip> || null}
         */
        this.HaVipSet = null;

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

        if (params.HaVipSet) {
            this.HaVipSet = new Array();
            for (let z in params.HaVipSet) {
                let obj = new HaVip();
                obj.deserialize(params.HaVipSet[z]);
                this.HaVipSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleSecurityGroups request structure.
 * @class
 */
class ModifyModuleSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of up to 5 security groups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdSet = null;

        /**
         * Module ID.
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIdSet = 'SecurityGroupIdSet' in params ? params.SecurityGroupIdSet : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * TerminateInstances response structure.
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
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
 * DescribeMonthPeakNetwork response structure.
 * @class
 */
class DescribeMonthPeakNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MonthNetwork> || null}
         */
        this.MonthNetWorkData = null;

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

        if (params.MonthNetWorkData) {
            this.MonthNetWorkData = new Array();
            for (let z in params.MonthNetWorkData) {
                let obj = new MonthNetwork();
                obj.deserialize(params.MonthNetWorkData[z]);
                this.MonthNetWorkData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNetworkInterfaces request structure.
 * @class
 */
class DescribeNetworkInterfacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the ID of the ENI instance, such as `eni-pxir56ns`. Each request supports a maximum of 100 instances. `NetworkInterfaceIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * Filter. `NetworkInterfaceIds` and `Filters` cannot be specified at the same time.
vpc-id - String - (Filter) VPC instance ID, such as `vpc-f49l6u0z`.
subnet-id - String - (Filter) Subnet instance ID, such as `subnet-f49l6u0z`.
network-interface-id - String - (Filter) ENI instance ID, such as `eni-5k56k7k7`.
attachment.instance-id - String - (Filter) ID of the bound CVM instance, such as `ein-3nqpdn3i`.
groups.security-group-id - String - (Filter) ID of the bound security group instance, such as `sg-f9ekbxeq`.
network-interface-name - String - (Filter) ENI instance name.
network-interface-description - String - (Filter) ENI instance description.
address-ip - String - (Filter) Private IPv4 address.
tag-key - String - Required: no - (Filter) Filter by tag key. For directions, see Sample 2.
tag:tag-key - String - Required: no - (Filter) Filter by tag key-value pair. Replace `tag-key` with the specific tag key. For directions, see Sample 3.
is-primary - Boolean - Required: no - (Filter) Filter by whether it is a primary ENI. true: filter only by primary ENI; false: filter only by secondary ENI. If this parameter is not specified, filtering by both primary and secondary ENIs will be used.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * CreateSecurityGroupPolicies response structure.
 * @class
 */
class CreateSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * Instance price information
 * @class
 */
class InstancePricesPartDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU price information
         * @type {PriceDetail || null}
         */
        this.CpuPrice = null;

        /**
         * Memory price information
         * @type {PriceDetail || null}
         */
        this.MemPrice = null;

        /**
         * Disk price information
         * @type {PriceDetail || null}
         */
        this.DisksPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CpuPrice) {
            let obj = new PriceDetail();
            obj.deserialize(params.CpuPrice)
            this.CpuPrice = obj;
        }

        if (params.MemPrice) {
            let obj = new PriceDetail();
            obj.deserialize(params.MemPrice)
            this.MemPrice = obj;
        }

        if (params.DisksPrice) {
            let obj = new PriceDetail();
            obj.deserialize(params.DisksPrice)
            this.DisksPrice = obj;
        }

    }
}

/**
 * DescribeMonthPeakNetwork request structure.
 * @class
 */
class DescribeMonthPeakNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Month (xxxx-xx), such as `2021-03`. Default value: the last month
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Filter
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * System disk description.
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk type. Valid values:
- LOCAL_BASIC: local disk;
- CLOUD_PREMIUM: Premium Cloud Storage;
Default value: CLOUD_BASIC.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Disk ID. This parameter is temporarily unavailable.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Disk size in GB.
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * DescribeNode response structure.
 * @class
 */
class DescribeNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of node details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Node> || null}
         */
        this.NodeSet = null;

        /**
         * Total number of nodes.
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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new Node();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModule request structure.
 * @class
 */
class DescribeModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
module-name - string - Required: no - (Filter) Filter by module name.
module-id - string - Required: no - (Filter) Filter by module ID.
image-id      String      Required: no      (Filter) Filter by image ID.
instance-family      String      Required: no      (Filter) Filter by model family.
security-group-id - string Required: no - (Filter) Filter by ID of the security group bound to the module.
Each request can contain up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section of the API overview.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section of the API overview.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specified sort by field. Currently, valid values are as follows:
instance-num: sort by the number of instances.
node-num: sort by the number of nodes.
timestamp: sort by instance creation time.
If this parameter is not specified, instances will be sorted by creation time by default.
         * @type {string || null}
         */
        this.OrderByField = null;

        /**
         * Sorting order. 0: descending; 1: ascending. If this parameter is not specified, it will be descending by default.
         * @type {number || null}
         */
        this.OrderDirection = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * RebootInstances request structure.
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be restarted. You can request up to 100 instances in a region at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Whether to force restart the instance after it failed to be restarted normally. Valid values:
TRUE: yes;
FALSE: no;
Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceReboot = null;

        /**
         * Shutdown type. Valid values:
SOFT: soft shutdown
HARD: hard shutdown
SOFT_FIRST: perform a soft shutdown first; if it fails, perform a hard shutdown

Default value: SOFT.
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * DescribeSnapshots request structure.
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the snapshots to be queried. `SnapshotIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Filter. `SnapshotIds` and `Filters` cannot be specified at the same time.<br><li>snapshot-id - Array of String - Required: no - (Filter) Filter by snapshot ID, such as `snap-11112222`.<br><li>snapshot-name - Array of String - Required: no - (Filter) Filter by snapshot name.<br><li>snapshot-state - Array of String - Required: no - (Filter) Filter by snapshot status. NORMAL: normal; CREATING: creating; ROLLBACKING: rolling back.<br><li>disk-usage - Array of String - Required: no - (Filter) Filter by the type of the cloud disk from which a snapshot is created. SYSTEM_DISK: system disk; DATA_DISK: data disk.<br><li>project-id  - Array of String - Required: no - (Filter) Filter by the project ID of the cloud disk.<br><li>disk-id  - Array of String - Required: no - (Filter) Filter by the ID of the cloud disk from which a snapshot is created.<br><li>zone - Array of String - Required: no - (Filter) Filter by [AZ](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo).<br><li>encrypt - Array of String - Required: no - (Filter) Filter by whether a snapshot is created from an encrypted cloud disk. TRUE: yes; FALSE: no.
<li>snapshot-type- Array of String - Required: no - (Filter) Filter by the snapshot type specified in `snapshot-type`.
(SHARED_SNAPSHOT: shared snapshot | PRIVATE_SNAPSHOT: private snapshot.)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section of the API [Overview](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Field by which snapshots are sorted. Valid values:<br><li>CREATE_TIME: sort by snapshot creation time<br>Snapshots are sorted by creation time by default.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section of the API [Overview](https://intl.cloud.tencent.com/document/product/362/15633?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting order of cloud disks. Valid values:<br><li>ASC: ascending<br><li>DESC: descending.
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * RemovePrivateIpAddresses request structure.
 * @class
 */
class RemovePrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI instance ID, such as `eni-11112222`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Information of the specified private IPs. You can specify up to 10 IPs at a time.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * Tag information.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeImage request structure.
 * @class
 */
class DescribeImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter. Each request can contain up to 10 `Filters`. The detailed filters are as follows:
image-id - String - Required: no - (Filter) Filter by image ID.
image-type - String - Required: no - (Filter) Filter by image type. Valid values:
PRIVATE_IMAGE: private image created by the current account 
PUBLIC_IMAGE: public image created by Tencent Cloud
instance-type -String - Required: no - (Filter) Filter supported images by model.
image-name - String - Required: no - (Filter) Fuzzy match by image name. You can provide only one value.
image-os - String - Required: no - (Filter) Fuzzy match by image system name. You can provide only one value.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section of the API overview.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section of the API overview.
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Supported OS types.
 * @class
 */
class OsVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * OS type
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Supported OS versions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OsVersions = null;

        /**
         * Supported OS architecture
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsVersions = 'OsVersions' in params ? params.OsVersions : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * DescribeListeners response structure.
 * @class
 */
class DescribeListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of listeners
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Listener> || null}
         */
        this.Listeners = null;

        /**
         * Total number of listeners
Note: this field may return null, indicating that no valid values can be obtained.
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

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new Listener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartInstances response structure.
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
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
 * CreateVpc response structure.
 * @class
 */
class CreateVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC object.
         * @type {VpcInfo || null}
         */
        this.Vpc = null;

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

        if (params.Vpc) {
            let obj = new VpcInfo();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Secondary CIDR information of the VPC.
 * @class
 */
class AssistantCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID, such as `vpc-6v2ht8q5`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Secondary CIDR, such as `172.16.0.0/16`
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Secondary CIDR block type. 0: general secondary CIDR block; 1: container secondary CIDR block. Default value: 0.
         * @type {number || null}
         */
        this.AssistantType = null;

        /**
         * Subnets divided by the secondary CIDR block.
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.AssistantType = 'AssistantType' in params ? params.AssistantType : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * ModifyModuleIpDirect request structure.
 * @class
 */
class ModifyModuleIpDirectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID.
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Whether to disable IP direct access. Valid values:
true: yes
false: no
         * @type {boolean || null}
         */
        this.CloseIpDirect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

    }
}

/**
 * Instance ENI IP information array
 * @class
 */
class InstanceNetworkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private and public IP information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AddressInfo> || null}
         */
        this.AddressInfoSet = null;

        /**
         * ENI ID.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ENI name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * Primary ENI attribute. Valid values: true: primary ENI; false: secondary ENI.
         * @type {boolean || null}
         */
        this.Primary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddressInfoSet) {
            this.AddressInfoSet = new Array();
            for (let z in params.AddressInfoSet) {
                let obj = new AddressInfo();
                obj.deserialize(params.AddressInfoSet[z]);
                this.AddressInfoSet.push(obj);
            }
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.Primary = 'Primary' in params ? params.Primary : null;

    }
}

/**
 * ResetInstancesMaxBandwidth response structure.
 * @class
 */
class ResetInstancesMaxBandwidthResponse extends  AbstractModel {
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
 * Instance number of the node
 * @class
 */
class NodeInstanceNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DeleteListener request structure.
 * @class
 */
class DeleteListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * ID of the listener to be deleted
         * @type {string || null}
         */
        this.ListenerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * StopInstances response structure.
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
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
 * CLB information such as bandwidth limit.
 * @class
 */
class LoadBalancerInternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum outbound bandwidth in Mbps. Default value: 10.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * ResetRoutes request structure.
 * @class
 */
class ResetRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Route table name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Routing policy.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * Association relationships of the route table
 * @class
 */
class RouteTableAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Route table instance ID
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * ModifyDefaultSubnet response structure.
 * @class
 */
class ModifyDefaultSubnetResponse extends  AbstractModel {
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
 * DescribeRouteTables response structure.
 * @class
 */
class DescribeRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of route tables
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstances request structure.
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be shut down. You can request up to 100 instances in a region at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Whether to force shut down the instance after it failed to be shut down normally. Default value: false: no.
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * Instance shutdown mode. Valid values:
SOFT_FIRST: perform a forced shutdown in case of a failure of the normal shutdown;
HARD: forced shutdown;
SOFT: Soft shutdown;
Default value: SOFT.
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * DetachNetworkInterface response structure.
 * @class
 */
class DetachNetworkInterfaceResponse extends  AbstractModel {
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
 * Image task
 * @class
 */
class ImageTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image import status. Valid values: PENDING, PROCESSING, SUCCESS, FAILED
         * @type {string || null}
         */
        this.State = null;

        /**
         * Cause of import failure (FAILED)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyListener request structure.
 * @class
 */
class ModifyListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * New listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Session persistence time in seconds. Value range: 30–3600. The default value is 0, indicating that session persistence is not enabled. This parameter is applicable only to TCP/UDP listeners.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Health check parameters
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Forwarding method of the listener. Valid values: WRR, LEAST_CONN.
They represent weighted round robin and least connections, respectively. Default value: WRR.
         * @type {string || null}
         */
        this.Scheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * CreateImage request structure.
 * @class
 */
class CreateImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image name.
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * ID of the instance for which to make an image.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Image description.
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Whether to perform a forced shutdown to make an image. Valid values:
TRUE: yes
FALSE: no
Default value: FALSE.
         * @type {string || null}
         */
        this.ForcePoweroff = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ForcePoweroff = 'ForcePoweroff' in params ? params.ForcePoweroff : null;

    }
}

/**
 * Instance information.
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name, such as `ens-34241f3s`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance status. Valid values:
PENDING: creating
LAUNCH_FAILED: failed to create
RUNNING: running
STOPPED: shut down
STARTING: starting
STOPPING: shutting down
REBOOTING: restarting
SHUTDOWN: to be terminated
TERMINATING: terminating.
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * Information of the image currently used by the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Image || null}
         */
        this.Image = null;

        /**
         * Basic information of the current module of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SimpleModule || null}
         */
        this.SimpleModule = null;

        /**
         * Location information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Position || null}
         */
        this.Position = null;

        /**
         * Network information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Internet || null}
         */
        this.Internet = null;

        /**
         * Configuration information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * Instance creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance tag information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Last operation on the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * Result of the last operation on the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * Instance business status. Valid values:
NORMAL: normal
EXPIRED: expired
PROTECTIVELY_ISOLATED: isolated.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * System disk size in GB.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * Data disk size in GB.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * Instance UUID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UUID = null;

        /**
         * Billing mode.
    0: postpaid.
    1: prepaid.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Expiration time in the format of `yyyy-mm-dd HH:mm:ss`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Isolation time in the format of `yyyy-mm-dd HH:mm:ss`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * Auto-Renewal flag.
      0: no.
      1: yes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * Expiration status.
    NORMAL: normal.
    WILL_EXPIRE: about to expire.
    EXPIRED: expired.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireState = null;

        /**
         * System disk information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DiskInfo || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDisks = null;

        /**
         * New instance flag
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NewFlag = null;

        /**
         * Security group of the instance, which can be obtained from the `sgId` field in the returned value of the `DescribeSecurityGroups` API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * VPC attribute
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * ISP field of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ISP = null;

        /**
         * Physical location information. Note that this field is currently a reserved field and null.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PhysicalPosition || null}
         */
        this.PhysicalPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Image) {
            let obj = new Image();
            obj.deserialize(params.Image)
            this.Image = obj;
        }

        if (params.SimpleModule) {
            let obj = new SimpleModule();
            obj.deserialize(params.SimpleModule)
            this.SimpleModule = obj;
        }

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

        if (params.Internet) {
            let obj = new Internet();
            obj.deserialize(params.Internet)
            this.Internet = obj;
        }

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireState = 'ExpireState' in params ? params.ExpireState : null;

        if (params.SystemDisk) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.NewFlag = 'NewFlag' in params ? params.NewFlag : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ISP = 'ISP' in params ? params.ISP : null;

        if (params.PhysicalPosition) {
            let obj = new PhysicalPosition();
            obj.deserialize(params.PhysicalPosition)
            this.PhysicalPosition = obj;
        }

    }
}

/**
 * Node information
 * @class
 */
class Node extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone information.
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * Country/Region information.
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * Region information.
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * Province/State information.
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * City information.
         * @type {City || null}
         */
        this.City = null;

        /**
         * Region information.
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

        /**
         * List of ISPs.
         * @type {Array.<ISP> || null}
         */
        this.ISPSet = null;

        /**
         * Number of ISPs.
         * @type {number || null}
         */
        this.ISPNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

        if (params.ISPSet) {
            this.ISPSet = new Array();
            for (let z in params.ISPSet) {
                let obj = new ISP();
                obj.deserialize(params.ISPSet[z]);
                this.ISPSet.push(obj);
            }
        }
        this.ISPNum = 'ISPNum' in params ? params.ISPNum : null;

    }
}

/**
 * DeleteLoadBalancer request structure.
 * @class
 */
class DeleteLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of IDs of the CLB instances to be deleted. Array length limit: 20
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * DescribeVpcs request structure.
 * @class
 */
class DescribeVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID, such as `vpc-f49l6u0z`. Each request supports a maximum of 100 instances. `VpcIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * Filter. `VpcIds` and `Filters` cannot be specified at the same time.
vpc-name - String - VPC instance name. Only fuzzy query by a single value is supported.
vpc-id - String - VPC instance ID, such as `vpc-f49l6u0z`.
cidr-block - String - VPC CIDR. Only fuzzy query by a single value is supported.
region - String - VPC region.
tag-key - String - Required: no - Filter by tag key.
tag:tag-key - String - Required: no - Filter by tag key-value pair.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Sorting method. time: sort in reverse chronological order; default: sort by network planning.
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * DescribeRouteConflicts response structure.
 * @class
 */
class DescribeRouteConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of routing policy conflicts.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteConflict> || null}
         */
        this.RouteConflictSet = null;

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

        if (params.RouteConflictSet) {
            this.RouteConflictSet = new Array();
            for (let z in params.RouteConflictSet) {
                let obj = new RouteConflict();
                obj.deserialize(params.RouteConflictSet[z]);
                this.RouteConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateSecurityGroups response structure.
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * BatchDeregisterTargets request structure.
 * @class
 */
class BatchDeregisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Unbound targets
         * @type {Array.<BatchTarget> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new BatchTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * ModifyListener response structure.
 * @class
 */
class ModifyListenerResponse extends  AbstractModel {
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
 * DescribeTargetHealth response structure.
 * @class
 */
class DescribeTargetHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CLB instances.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LoadBalancerHealth> || null}
         */
        this.LoadBalancers = null;

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

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LoadBalancerHealth();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDefaultSubnet request structure.
 * @class
 */
class ModifyDefaultSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ECM AZ
         * @type {string || null}
         */
        this.Zone = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeTaskResult request structure.
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Async task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Snapshot details
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot location.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Whether the snapshot is replicated across regions. Valid values:<br><li>true: yes;<br><li>false: no.
         * @type {boolean || null}
         */
        this.CopyFromRemote = null;

        /**
         * Whether the snapshot is a permanent snapshot. Valid values:<br><li>true: yes<br><li>false: no.
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * Snapshot name, i.e., the user-defined snapshot alias. You can call [ModifySnapshotAttribute](https://intl.cloud.tencent.com/document/product/362/15650?from_cn_redirect=1) to modify this field.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot creation progress in percentage. This field will always be `100` once the snapshot is created successfully.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * List of images associated with the snapshot.
         * @type {Array.<Image> || null}
         */
        this.Images = null;

        /**
         * Number of snapshots currently shared.
         * @type {number || null}
         */
        this.ShareReference = null;

        /**
         * Snapshot type. Valid values: PRIVATE_SNAPSHOT, SHARED_SNAPSHOT
         * @type {string || null}
         */
        this.SnapshotType = null;

        /**
         * Size in GB of the cloud disk for which the snapshot is created.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ID of the cloud disk for which the snapshot is created.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Destination region to which the snapshot is being replicated. Default value: [].
         * @type {Array.<string> || null}
         */
        this.CopyingToRegions = null;

        /**
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Type of the cloud disk for which the snapshot is created. Valid values:<br><li>SYSTEM_DISK: system disk<br><li>DATA_DISK: data disk.
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Whether the snapshot is created from an encrypted disk. Valid values:<br><li>true: yes<br><li>false: no.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Snapshot creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Number of images associated with the snapshot.
         * @type {number || null}
         */
        this.ImageCount = null;

        /**
         * Snapshot status. Valid values:<br><li>NORMAL: normal<br><li>CREATING: creating<br><li>ROLLBACKING: rolling back<br><li>COPYING_FROM_REMOTE: cross-region replicating<br><li>CHECKING_COPIED: verifying the cross-region replicated data<br><li>TORECYCLE: to be repossessed.
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * Snapshot expiration time.
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Time when snapshot sharing starts.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeStartShare = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CopyFromRemote = 'CopyFromRemote' in params ? params.CopyFromRemote : null;
        this.IsPermanent = 'IsPermanent' in params ? params.IsPermanent : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

        if (params.Images) {
            this.Images = new Array();
            for (let z in params.Images) {
                let obj = new Image();
                obj.deserialize(params.Images[z]);
                this.Images.push(obj);
            }
        }
        this.ShareReference = 'ShareReference' in params ? params.ShareReference : null;
        this.SnapshotType = 'SnapshotType' in params ? params.SnapshotType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.CopyingToRegions = 'CopyingToRegions' in params ? params.CopyingToRegions : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ImageCount = 'ImageCount' in params ? params.ImageCount : null;
        this.SnapshotState = 'SnapshotState' in params ? params.SnapshotState : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.TimeStartShare = 'TimeStartShare' in params ? params.TimeStartShare : null;

    }
}

/**
 * DescribeLoadBalancers request structure.
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region. If this parameter is not specified, the information of all regions will be queried by default.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * CLB instance ID.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * VIP address of the CLB instance. There can be multiple addresses.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * Private IP of the real server bound to the CLB.
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * Data offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned CLB instances. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether the CLB instance is bound to a real server. 0: no; 1: yes; -1: query all. 
If this parameter is not specified, all will be queried by default.
         * @type {number || null}
         */
        this.WithBackend = null;

        /**
         * Unique VPC ID of the CLB instance, such as `vpc-bhqkbhdx`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Each request can contain up to 10 `Filters` and 100 `Filter.Values`. The detailed filters are as follows:
tag-key - String - Required: no - (Filter) Filter by tag key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Security group.
         * @type {string || null}
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.BackendPrivateIps = 'BackendPrivateIps' in params ? params.BackendPrivateIps : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.WithBackend = 'WithBackend' in params ? params.WithBackend : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * DeleteRoutes response structure.
 * @class
 */
class DeleteRoutesResponse extends  AbstractModel {
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
 * DescribeCustomImageTask request structure.
 * @class
 */
class DescribeCustomImageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supports querying by key and value.
task-id: async task ID
image-id: image ID
image-name: image name
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics response structure.
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics on the instances associated with the security group.
         * @type {Array.<SecurityGroupAssociationStatistics> || null}
         */
        this.SecurityGroupAssociationStatisticsSet = null;

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

        if (params.SecurityGroupAssociationStatisticsSet) {
            this.SecurityGroupAssociationStatisticsSet = new Array();
            for (let z in params.SecurityGroupAssociationStatisticsSet) {
                let obj = new SecurityGroupAssociationStatistics();
                obj.deserialize(params.SecurityGroupAssociationStatisticsSet[z]);
                this.SecurityGroupAssociationStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignPrivateIpAddresses response structure.
 * @class
 */
class AssignPrivateIpAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

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

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Prices of CPU, memory, and other resources
 * @class
 */
class PriceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Discount, such as `20`, which represents 80% off
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discounted price in cents
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Original price in cents
         * @type {number || null}
         */
        this.OriginalPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;

    }
}

/**
 * ImportImage response structure.
 * @class
 */
class ImportImageResponse extends  AbstractModel {
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
 * DescribeSecurityGroups request structure.
 * @class
 */
class DescribeSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/product/1108/47697?from_cn_redirect=1). Each request supports a maximum of 100 instances. `SecurityGroupIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Filter. `SecurityGroupIds` and `Filters` cannot be specified at the same time.
security-group-id - String - (Filter) Security group ID.
security-group-name - String - (Filter) Security group name.
tag-key - String - Required: no - (Filter) Filter by tag key.
tag:tag-key - String - Required: no - (Filter) Filter by tag key-value pair. Replace `tag-key` with the specific tag key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribePriceRunInstance response structure.
 * @class
 */
class DescribePriceRunInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price information
         * @type {InstancesPrice || null}
         */
        this.InstancePrice = null;

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

        if (params.InstancePrice) {
            let obj = new InstancesPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImage response structure.
 * @class
 */
class DeleteImageResponse extends  AbstractModel {
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
 * ModifySubnetAttribute response structure.
 * @class
 */
class ModifySubnetAttributeResponse extends  AbstractModel {
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
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the security group to be unbound, such as `esg-efil73jd`. You can unbind only one security group at a time.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * ID of the instance to be unbound, such as `ein-lesecurk`. You can specify multiple instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ENI
 * @class
 */
class NetworkInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-f1xjkw1b`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ENI name.
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * ENI description.
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * Subnet instance ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Bound security groups.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.GroupSet = null;

        /**
         * Whether it is the primary ENI.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * MAC address.
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * ENI status:
PENDING: creating
AVAILABLE: available
ATTACHING: binding
DETACHING: unbinding
DELETING: deleting
         * @type {string || null}
         */
        this.State = null;

        /**
         * Private IP information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

        /**
         * Bound CVM object.
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {NetworkInterfaceAttachment || null}
         */
        this.Attachment = null;

        /**
         * AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * List of IPv6 addresses.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * Tag key-value pairs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * ENI type. Valid values: 0: ENI; 1: EVM ENI.
         * @type {number || null}
         */
        this.EniType = null;

        /**
         * ECM region (EcmRegion)
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.State = 'State' in params ? params.State : null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            let obj = new NetworkInterfaceAttachment();
            obj.deserialize(params.Attachment)
            this.Attachment = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.EniType = 'EniType' in params ? params.EniType : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * Key pair information
 * @class
 */
class KeyPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID, which is the unique identifier of a key pair.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Key pair name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * Project ID of the key pair.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Key pair description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Public key (in plain text) of key pair.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Private key (in plaintext) of a key pair. Tencent Cloud do not store private keys. Therefore, keep them secure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * List of IDs of the instances associated with the key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIds = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.AssociatedInstanceIds = 'AssociatedInstanceIds' in params ? params.AssociatedInstanceIds : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeVpcs response structure.
 * @class
 */
class DescribeVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible objects.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPC object.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

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

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupAttribute request structure.
 * @class
 */
class ModifySecurityGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name, which can be customized with up to 60 characters.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Security group remarks, which can contain up to 100 characters.
         * @type {string || null}
         */
        this.GroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

    }
}

/**
 * DescribePackingQuotaGroup response structure.
 * @class
 */
class DescribePackingQuotaGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set of packing quotas.
         * @type {Array.<PackingQuotaGroup> || null}
         */
        this.PackingQuotaSet = null;

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

        if (params.PackingQuotaSet) {
            this.PackingQuotaSet = new Array();
            for (let z in params.PackingQuotaSet) {
                let obj = new PackingQuotaGroup();
                obj.deserialize(params.PackingQuotaSet[z]);
                this.PackingQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB instance information
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Location information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Position || null}
         */
        this.Position = null;

        /**
         * CLB instance ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network type of the CLB instance. Valid values: OPEN: public network
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * List of VIPs of the CLB instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * CLB instance status. Valid values:
 0: creating; 1: running.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CLB instance creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last status change time of the CLB instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusTime = null;

        /**
         * VPC ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CLB instance tag information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * ISP of the CLB IP address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Network attribute of the CLB instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * Security group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecureGroups = null;

        /**
         * Whether the real server opens the traffic from ELB to the internet.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.NetworkAttributes) {
            let obj = new LoadBalancerInternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }
        this.SecureGroups = 'SecureGroups' in params ? params.SecureGroups : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * ModifyModuleName response structure.
 * @class
 */
class ModifyModuleNameResponse extends  AbstractModel {
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
 * DescribePeakBaseOverview request structure.
 * @class
 */
class DescribePeakBaseOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (xxxx-xx-xx), such as `2019-08-14`. It is 7 days ago by default and should not be more than 90 days ago.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (xxxx-xx-xx), such as `2019-08-14`. It is yesterday by default and should not be more than 90 days ago. When the time period between the start time and end time is within 30 days, data at the 1-hour granularity will be returned; otherwise, data at the 3-hour granularity will be returned.
         * @type {string || null}
         */
        this.EndTime = null;

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

    }
}

/**
 * BatchModifyTargetWeight response structure.
 * @class
 */
class BatchModifyTargetWeightResponse extends  AbstractModel {
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
 * Instance statistics
 * @class
 */
class InstanceStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * DeleteSecurityGroupPolicies request structure.
 * @class
 */
class DeleteSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set. You can only delete one or more policies in one direction in one request. Both PolicyIndex-matching deletion and security group policy-matching deletion methods are supported. You can use only one matching method in one request.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * AssociateSecurityGroups request structure.
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the security group to be bound, such as `esg-efil73jd`. You can bind only one security group.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * ID of the bound instance, such as `ein-lesecurk`. You can specify multiple instances and request up to 100 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Route conflict object
 * @class
 */
class RouteConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * The conflicting destination ports to be checked
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * List of conflicting routing policies
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Route> || null}
         */
        this.ConflictSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

        if (params.ConflictSet) {
            this.ConflictSet = new Array();
            for (let z in params.ConflictSet) {
                let obj = new Route();
                obj.deserialize(params.ConflictSet[z]);
                this.ConflictSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSubnet response structure.
 * @class
 */
class DeleteSubnetResponse extends  AbstractModel {
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
 * ISP information
 * @class
 */
class ISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * ISP ID
         * @type {string || null}
         */
        this.ISPId = null;

        /**
         * ISP name
         * @type {string || null}
         */
        this.ISPName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ISPId = 'ISPId' in params ? params.ISPId : null;
        this.ISPName = 'ISPName' in params ? params.ISPName : null;

    }
}

/**
 * EIP information
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique EIP ID.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * EIP name.
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * EIP status, including 'CREATING' (creating), 'BINDING' (binding), 'BIND' (bound), 'UNBINDING' (unbinding), 'UNBIND' (unbound), 'OFFLINING' (releasing), and 'BIND_ENI' (binding dangling ENI)
         * @type {string || null}
         */
        this.AddressStatus = null;

        /**
         * Public IP address
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * ID of the bound resource instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Creation time in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * ID of the bound ENI
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Private IP of the bound resource
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateAddressIp = null;

        /**
         * Isolation status of the resource. true: isolated; false: not isolated.
         * @type {boolean || null}
         */
        this.IsArrears = null;

        /**
         * Blockage status of the EIP resource. true: blocked; false: not blocked
         * @type {boolean || null}
         */
        this.IsBlocked = null;

        /**
         * Whether the EIP supports direct access mode. true: yes; false: no.
         * @type {boolean || null}
         */
        this.IsEipDirectConnection = null;

        /**
         * Resource type of the EIP, including `CalcIP` (device IP), `WanIP` (general public IP), `EIP` (elastic IP), and `AnycastEip` (accelerated EIP).
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Whether the EIP is automatically released after being unbound. true: yes; false: no
         * @type {boolean || null}
         */
        this.CascadeRelease = null;

        /**
         * ISP. CTCC: China Telecom; CUCC: China Unicom; CMCC: China Mobile
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * Bandwidth cap
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Billing mode
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.AddressStatus = 'AddressStatus' in params ? params.AddressStatus : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateAddressIp = 'PrivateAddressIp' in params ? params.PrivateAddressIp : null;
        this.IsArrears = 'IsArrears' in params ? params.IsArrears : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;
        this.IsEipDirectConnection = 'IsEipDirectConnection' in params ? params.IsEipDirectConnection : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CascadeRelease = 'CascadeRelease' in params ? params.CascadeRelease : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * Peak information
 * @class
 */
class PeakBase extends  AbstractModel {
    constructor(){
        super();

        /**
         * Peak CPU
         * @type {number || null}
         */
        this.PeakCpuNum = null;

        /**
         * Peak memory
         * @type {number || null}
         */
        this.PeakMemoryNum = null;

        /**
         * Peak disk
         * @type {number || null}
         */
        this.PeakStorageNum = null;

        /**
         * Recording time
         * @type {string || null}
         */
        this.RecordTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeakCpuNum = 'PeakCpuNum' in params ? params.PeakCpuNum : null;
        this.PeakMemoryNum = 'PeakMemoryNum' in params ? params.PeakMemoryNum : null;
        this.PeakStorageNum = 'PeakStorageNum' in params ? params.PeakStorageNum : null;
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;

    }
}

/**
 * ReplaceRouteTableAssociation request structure.
 * @class
 */
class ReplaceRouteTableAssociationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, such as `subnet-3x5lf5q0`, which can be queried through the `DescribeSubnets` API.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ModifyTargetWeight response structure.
 * @class
 */
class ModifyTargetWeightResponse extends  AbstractModel {
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
 * DescribeCustomImageTask response structure.
 * @class
 */
class DescribeCustomImageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import task details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageTask> || null}
         */
        this.ImageTaskSet = null;

        /**
         * Total number
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

        if (params.ImageTaskSet) {
            this.ImageTaskSet = new Array();
            for (let z in params.ImageTaskSet) {
                let obj = new ImageTask();
                obj.deserialize(params.ImageTaskSet[z]);
                this.ImageTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ISP statistics
 * @class
 */
class ISPCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * ISP name
         * @type {string || null}
         */
        this.ProviderName = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.ProviderNodeNum = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.ProvederInstanceNum = null;

        /**
         * Zone instance information structure array
         * @type {Array.<ZoneInstanceInfo> || null}
         */
        this.ZoneInstanceInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderName = 'ProviderName' in params ? params.ProviderName : null;
        this.ProviderNodeNum = 'ProviderNodeNum' in params ? params.ProviderNodeNum : null;
        this.ProvederInstanceNum = 'ProvederInstanceNum' in params ? params.ProvederInstanceNum : null;

        if (params.ZoneInstanceInfoSet) {
            this.ZoneInstanceInfoSet = new Array();
            for (let z in params.ZoneInstanceInfoSet) {
                let obj = new ZoneInstanceInfo();
                obj.deserialize(params.ZoneInstanceInfoSet[z]);
                this.ZoneInstanceInfoSet.push(obj);
            }
        }

    }
}

/**
 * CreateModule response structure.
 * @class
 */
class CreateModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID. It is the ID assigned to a module after it is created successfully.
         * @type {string || null}
         */
        this.ModuleId = null;

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
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePackingQuotaGroup request structure.
 * @class
 */
class DescribePackingQuotaGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter. Zone: AZ; InstanceType: instance type; DataDiskSize: data disk size.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

    }
}

/**
 * Security group policy object
 * @class
 */
class SecurityGroupPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group policy index number
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Protocol. Valid values: TCP, UDP, ICMP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port. Valid values: all, discrete port, range.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Protocol port ID or protocol port group ID. `ServiceTemplate` and `Protocol+Port` are mutually exclusive.
         * @type {ServiceTemplateSpecification || null}
         */
        this.ServiceTemplate = null;

        /**
         * IP range or IP address (mutually exclusive).
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Security group instance ID, such as `esg-ohuuioma`.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * IP address ID or IP address group ID.
         * @type {AddressTemplateSpecification || null}
         */
        this.AddressTemplate = null;

        /**
         * `ACCEPT` or `DROP`.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Security group policy description.
         * @type {string || null}
         */
        this.PolicyDescription = null;

        /**
         * Modification time, such as `2020-07-22 19:27:23`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * IP range or IPv6 address (mutually exclusive).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplateSpecification();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.AddressTemplate) {
            let obj = new AddressTemplateSpecification();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * CLB health status
 * @class
 */
class LoadBalancerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * List of listeners
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ListenerHealth> || null}
         */
        this.Listeners = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerHealth();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }

    }
}

/**
 * CreateListener response structure.
 * @class
 */
class CreateListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of unique IDs of the created listeners
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpc request structure.
 * @class
 */
class DeleteVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID, which can be obtained from the `VpcId` field in the returned value of the `DescribeVpcs` API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * CreateSubnet response structure.
 * @class
 */
class CreateSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet object.
         * @type {Subnet || null}
         */
        this.Subnet = null;

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

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroupPolicies response structure.
 * @class
 */
class DescribeSecurityGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group policy set.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

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

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupPolicies request structure.
 * @class
 */
class ModifySecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set. You must specify both new egress and ingress policies for the `SecurityGroupPolicySet` object. You cannot customize the index (PolicyIndex) of the `SecurityGroupPolicy` object.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

        /**
         * Whether security group sorting is supported. `True` indicates yes. If `SortPolicys` doesn't exist or is set to `False`, the security group policy can be modified.
         * @type {boolean || null}
         */
        this.SortPolicys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.SortPolicys = 'SortPolicys' in params ? params.SortPolicys : null;

    }
}

/**
 * Upper and lower limits of the disk
 * @class
 */
class NetworkStorageRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network bandwidth cap
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Upper limit of the data disk size
         * @type {number || null}
         */
        this.MaxSystemDiskSize = null;

        /**
         * Lower limit of the network bandwidth
         * @type {number || null}
         */
        this.MinBandwidth = null;

        /**
         * Lower limit of the data disk size
         * @type {number || null}
         */
        this.MinSystemDiskSize = null;

        /**
         * Maximum data disk size
         * @type {number || null}
         */
        this.MaxDataDiskSize = null;

        /**
         * Minimum data disk size
         * @type {number || null}
         */
        this.MinDataDiskSize = null;

        /**
         * Suggested bandwidth
         * @type {number || null}
         */
        this.SuggestBandwidth = null;

        /**
         * Suggested disk size
         * @type {number || null}
         */
        this.SuggestDataDiskSize = null;

        /**
         * Suggested system disk size
         * @type {number || null}
         */
        this.SuggestSystemDiskSize = null;

        /**
         * Peak number of CPU cores
         * @type {number || null}
         */
        this.MaxVcpu = null;

        /**
         * Minimum number of CPU cores
         * @type {number || null}
         */
        this.MinVcpu = null;

        /**
         * Maximum number of CPU cores per request
         * @type {number || null}
         */
        this.MaxVcpuPerReq = null;

        /**
         * Bandwidth increment
         * @type {number || null}
         */
        this.PerBandwidth = null;

        /**
         * Data disk increment
         * @type {number || null}
         */
        this.PerDataDisk = null;

        /**
         * Total number of modules
         * @type {number || null}
         */
        this.MaxModuleNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.MaxSystemDiskSize = 'MaxSystemDiskSize' in params ? params.MaxSystemDiskSize : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;
        this.MinSystemDiskSize = 'MinSystemDiskSize' in params ? params.MinSystemDiskSize : null;
        this.MaxDataDiskSize = 'MaxDataDiskSize' in params ? params.MaxDataDiskSize : null;
        this.MinDataDiskSize = 'MinDataDiskSize' in params ? params.MinDataDiskSize : null;
        this.SuggestBandwidth = 'SuggestBandwidth' in params ? params.SuggestBandwidth : null;
        this.SuggestDataDiskSize = 'SuggestDataDiskSize' in params ? params.SuggestDataDiskSize : null;
        this.SuggestSystemDiskSize = 'SuggestSystemDiskSize' in params ? params.SuggestSystemDiskSize : null;
        this.MaxVcpu = 'MaxVcpu' in params ? params.MaxVcpu : null;
        this.MinVcpu = 'MinVcpu' in params ? params.MinVcpu : null;
        this.MaxVcpuPerReq = 'MaxVcpuPerReq' in params ? params.MaxVcpuPerReq : null;
        this.PerBandwidth = 'PerBandwidth' in params ? params.PerBandwidth : null;
        this.PerDataDisk = 'PerDataDisk' in params ? params.PerDataDisk : null;
        this.MaxModuleNum = 'MaxModuleNum' in params ? params.MaxModuleNum : null;

    }
}

/**
 * ReplaceRoutes request structure.
 * @class
 */
class ReplaceRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DescribeTargetHealth request structure.
 * @class
 */
class DescribeTargetHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of CLB instances to be queried.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * ModifyInstancesAttribute response structure.
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
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
 * ModifySubnetAttribute request structure.
 * @class
 */
class ModifySubnetAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, such as `subnet-pxir56ns`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Subnet name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Whether to enable broadcast for the subnet.
         * @type {string || null}
         */
        this.EnableBroadcast = null;

        /**
         * Tag key value of the subnet
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DisassociateAddress request structure.
 * @class
 */
class DisassociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Unique EIP ID, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Indicates whether to assign a general public IP after unbinding an EIP. Valid values:
TRUE: yes
FALSE: no.
Default value: FALSE.

You can specify this parameter only under the following conditions:
You can specify this parameter only when you unbind an EIP from the primary private IP of the primary ENI.
An account can reassign a general public IP after unbinding an EIP 10 times a day. More information can be obtained through the `DescribeAddressQuota` API.
         * @type {boolean || null}
         */
        this.ReallocateNormalPublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.ReallocateNormalPublicIp = 'ReallocateNormalPublicIp' in params ? params.ReallocateNormalPublicIp : null;

    }
}

/**
 * Node statistics
 * @class
 */
class ModuleCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * ISP statistics list
         * @type {Array.<ISPCounter> || null}
         */
        this.ISPCounterSet = null;

        /**
         * Number of provinces/states
         * @type {number || null}
         */
        this.ProvinceNum = null;

        /**
         * Number of cities
         * @type {number || null}
         */
        this.CityNum = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ISPCounterSet) {
            this.ISPCounterSet = new Array();
            for (let z in params.ISPCounterSet) {
                let obj = new ISPCounter();
                obj.deserialize(params.ISPCounterSet[z]);
                this.ISPCounterSet.push(obj);
            }
        }
        this.ProvinceNum = 'ProvinceNum' in params ? params.ProvinceNum : null;
        this.CityNum = 'CityNum' in params ? params.CityNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * Task query
 * @class
 */
class TaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation name, i.e., API name, such as `CreateImage`
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyLoadBalancerAttributes response structure.
 * @class
 */
class ModifyLoadBalancerAttributesResponse extends  AbstractModel {
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
 * Instance family type configuration
 * @class
 */
class InstanceFamilyTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance model family type ID
         * @type {string || null}
         */
        this.InstanceFamilyType = null;

        /**
         * Instance model family type name
         * @type {string || null}
         */
        this.InstanceFamilyTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyType = 'InstanceFamilyType' in params ? params.InstanceFamilyType : null;
        this.InstanceFamilyTypeName = 'InstanceFamilyTypeName' in params ? params.InstanceFamilyTypeName : null;

    }
}

/**
 * DescribeDefaultSubnet request structure.
 * @class
 */
class DescribeDefaultSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ECM AZ
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * RunInstances response structure.
 * @class
 */
class RunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances being created
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Health check status of the backend
 * @class
 */
class TargetHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of the target
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Port bound to the target
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Current health status. Valid values: true: healthy; false: unhealthy (e.g., check not started, checking, or exceptional status). CLB instance will route traffic to only healthy real servers whose weights are greater than 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Instance ID of the target
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Detailed information of the current health status. Valid values: Alive: healthy; Dead: exceptional; Unknown: check not started/checking/unknown status; Close: health check not configured.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HealthStatusDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.HealthStatusDetail = 'HealthStatusDetail' in params ? params.HealthStatusDetail : null;

    }
}

/**
 * DescribeSecurityGroupLimits response structure.
 * @class
 */
class DescribeSecurityGroupLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group quota limit.
         * @type {SecurityGroupLimitSet || null}
         */
        this.SecurityGroupLimitSet = null;

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

        if (params.SecurityGroupLimitSet) {
            let obj = new SecurityGroupLimitSet();
            obj.deserialize(params.SecurityGroupLimitSet)
            this.SecurityGroupLimitSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateInstancesKeyPairs request structure.
 * @class
 */
class DisassociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * You can get available instance IDs in the following ways:
Log in to the console to query instance IDs.
Get the instance IDs from the `InstanceId` field in the information returned by the `DescribeInstances` API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of key pair IDs. Each request can contain up to 100 key pairs. The key pair ID takes the form of `skey-11112222`.

You can get available key IDs in the following ways:
Log in to the console to query key IDs.
Get the key pair IDs from the `KeyId` field in the information returned by the `DescribeKeyPairs` API.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to force shut down the running instance. We recommend you manually shut down the running instance before unbinding the key. Valid values:
TRUE: yes.
FALSE: no.

Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * Statistics on the resources associated with the security group
 * @class
 */
class SecurityGroupAssociationStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Number of ECM instances.
         * @type {number || null}
         */
        this.ECM = null;

        /**
         * Number of ECM modules.
         * @type {number || null}
         */
        this.Module = null;

        /**
         * Number of ENI instances.
         * @type {number || null}
         */
        this.ENI = null;

        /**
         * Number of times the security group is referenced by other security groups.
         * @type {number || null}
         */
        this.SG = null;

        /**
         * Number of CLB instances.
         * @type {number || null}
         */
        this.CLB = null;

        /**
         * Binding statistics of all instances.
         * @type {Array.<InstanceStatistic> || null}
         */
        this.InstanceStatistics = null;

        /**
         * Total number of all resources (excluding resources referenced by security groups).
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.ECM = 'ECM' in params ? params.ECM : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ENI = 'ENI' in params ? params.ENI : null;
        this.SG = 'SG' in params ? params.SG : null;
        this.CLB = 'CLB' in params ? params.CLB : null;

        if (params.InstanceStatistics) {
            this.InstanceStatistics = new Array();
            for (let z in params.InstanceStatistics) {
                let obj = new InstanceStatistic();
                obj.deserialize(params.InstanceStatistics[z]);
                this.InstanceStatistics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * ModifyTargetPort response structure.
 * @class
 */
class ModifyTargetPortResponse extends  AbstractModel {
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
 * Bandwidth information of the corresponding month
 * @class
 */
class MonthNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone information of the node
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * Bandwidth month, such as `202103`
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Bandwidth package ID format, such as `bwp-xxxxxxxx`
         * @type {string || null}
         */
        this.BandwidthPkgId = null;

        /**
         * ISP abbreviation. Valid values: CUCC, CTCC, CMCC
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Inbound bandwidth package peak. Value range: 0.0–xxx.xxx
         * @type {number || null}
         */
        this.TrafficMaxIn = null;

        /**
         * Outbound bandwidth package peak. Value range: 0.0–xxx.xxx
         * @type {number || null}
         */
        this.TrafficMaxOut = null;

        /**
         * Billable bandwidth. Value range: 0.0–xxx.xxx
         * @type {number || null}
         */
        this.FeeTraffic = null;

        /**
         * Start time of the monthly billable bandwidth in the format of `yyyy-mm-dd HH:mm:ss`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the monthly billable bandwidth in the format of `yyyy-mm-dd HH:mm:ss`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of actual valid days for the monthly billable bandwidth, which must be an integer greater than or equal to 0
         * @type {number || null}
         */
        this.EffectiveDays = null;

        /**
         * Actual number of days in the specified month, such as 30
         * @type {number || null}
         */
        this.MonthDays = null;

        /**
         * Proportion of the number of valid days, accurate to four decimal places, such as `0.2134`
         * @type {number || null}
         */
        this.EffectiveDaysRate = null;

        /**
         * Billable bandwidth package type. Valid values: Address, LoadBalance, AddressIpv6
         * @type {string || null}
         */
        this.BandwidthPkgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.BandwidthPkgId = 'BandwidthPkgId' in params ? params.BandwidthPkgId : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.TrafficMaxIn = 'TrafficMaxIn' in params ? params.TrafficMaxIn : null;
        this.TrafficMaxOut = 'TrafficMaxOut' in params ? params.TrafficMaxOut : null;
        this.FeeTraffic = 'FeeTraffic' in params ? params.FeeTraffic : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EffectiveDays = 'EffectiveDays' in params ? params.EffectiveDays : null;
        this.MonthDays = 'MonthDays' in params ? params.MonthDays : null;
        this.EffectiveDaysRate = 'EffectiveDaysRate' in params ? params.EffectiveDaysRate : null;
        this.BandwidthPkgType = 'BandwidthPkgType' in params ? params.BandwidthPkgType : null;

    }
}

/**
 * ResetRoutes response structure.
 * @class
 */
class ResetRoutesResponse extends  AbstractModel {
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
 * AllocateAddresses response structure.
 * @class
 */
class AllocateAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of unique IDs of the EIPs applied for.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * Async task ID (TaskId). You can use the `DescribeTaskResult` API to query the task status.
         * @type {string || null}
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
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImage response structure.
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
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
 * ModifyModuleNetwork request structure.
 * @class
 */
class ModifyModuleNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Default outbound bandwidth cap
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

        /**
         * Default inbound bandwidth cap
         * @type {number || null}
         */
        this.DefaultBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;
        this.DefaultBandwidthIn = 'DefaultBandwidthIn' in params ? params.DefaultBandwidthIn : null;

    }
}

/**
 * IP address template
 * @class
 */
class AddressTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address ID, such as `eipm-2uw6ujo6`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * IP address group ID, such as `eipmg-2uw6ujo6`.
         * @type {string || null}
         */
        this.AddressGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressGroupId = 'AddressGroupId' in params ? params.AddressGroupId : null;

    }
}

/**
 * AssignIpv6Addresses request structure.
 * @class
 */
class AssignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI instance ID, such as `eni-1snva0vd`. Currently, only the primary ENI will be assigned the ID.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * List of specified IPv6 addresses. You can specify up to 10 IPv6 addresses at a time. The quota is calculated together with that of `Ipv6AddressCount`, a required input parameter alternative to this one.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * Number of automatically assigned IPv6 addresses. The total number of private IP addresses cannot exceed the quota. The quota is calculated together with that of `Ipv6Addresses`, a required input parameter alternative to this one.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * DescribeModuleDetail response structure.
 * @class
 */
class DescribeModuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module details. For more information, see `ModuleInfo` in the data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Module || null}
         */
        this.Module = null;

        /**
         * Module statistics. For more information, see `ModuleCounterInfo` in the data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ModuleCounter || null}
         */
        this.ModuleCounter = null;

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

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

        if (params.ModuleCounter) {
            let obj = new ModuleCounter();
            obj.deserialize(params.ModuleCounter)
            this.ModuleCounter = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB backend information
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique real server ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Listening port of the real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Forwarding weight of the real server. Value range: [0, 100]. Default value: 10.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Private IP of the real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Real server binding time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegisteredTime = null;

        /**
         * Unique ENI ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EniId = null;

        /**
         * Public IP of the real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Real server instance name
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * ModifyIpv6AddressesAttribute response structure.
 * @class
 */
class ModifyIpv6AddressesAttributeResponse extends  AbstractModel {
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
 * ModifyModuleSecurityGroups response structure.
 * @class
 */
class ModifyModuleSecurityGroupsResponse extends  AbstractModel {
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
 * ReplaceSecurityGroupPolicy request structure.
 * @class
 */
class ReplaceSecurityGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set object.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * CreateKeyPair response structure.
 * @class
 */
class CreateKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair information.
         * @type {KeyPair || null}
         */
        this.KeyPair = null;

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

        if (params.KeyPair) {
            let obj = new KeyPair();
            obj.deserialize(params.KeyPair)
            this.KeyPair = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteModule response structure.
 * @class
 */
class DeleteModuleResponse extends  AbstractModel {
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
 * DescribeModuleDetail request structure.
 * @class
 */
class DescribeModuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID, such as `em-qn46snq8`.
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * ModifyRouteTableAttribute request structure.
 * @class
 */
class ModifyRouteTableAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Route table name
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * ModifyModuleNetwork response structure.
 * @class
 */
class ModifyModuleNetworkResponse extends  AbstractModel {
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
 * DescribeImportImageOs request structure.
 * @class
 */
class DescribeImportImageOsRequest extends  AbstractModel {
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
 * CreateKeyPair request structure.
 * @class
 */
class CreateKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair name, which can contain up to 25 digits, letters, and underscores.
         * @type {string || null}
         */
        this.KeyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;

    }
}

/**
 * ModifyModuleIpDirect response structure.
 * @class
 */
class ModifyModuleIpDirectResponse extends  AbstractModel {
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
 * ResetInstancesPassword request structure.
 * @class
 */
class ResetInstancesPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances for which to set the password. You can request up to 100 instances in a region at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * New password. The password of a Linux instance must contain 8–16 characters in at least two of the following character types: letters, digits, and special symbols [( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /] and cannot start with `/`.
The password of a Windows instance must contain 12–16 characters in at least three of the following character types: letters, digits, and special symbols [( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /] and cannot start with `/`.
If the instances include both Linux instances and Windows instances, the password complexity limit for Windows instances will apply.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to force shut down. Default value: false.
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * Username of the instance for which to reset the password, which can contain up to 64 characters. If this parameter is not specified, the password of the root user will be reset by default for Linux, and the password of the admin will be reset by default for Windows.
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * AssociateAddress response structure.
 * @class
 */
class AssociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID (TaskId). You can use the `DescribeTaskResult` API to query the task status.
         * @type {string || null}
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
 * DescribeAddresses request structure.
 * @class
 */
class DescribeAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * List of unique IDs of EIPs, such as `eip-11112222`. `AddressIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * Each request can contain up to 10 `Filters` and 5 `Filter.Values`. `AddressIds` and `Filters` cannot be specified at the same time. The detailed filters are as follows:
address-id - String - Required: no - (Filter) Filter by unique EIP ID, such as `eip-11112222`.
address-name - String - Required: no - (Filter) Filter by EIP name. Fuzzy filtering is not supported.
address-ip - String - Required: no - (Filter) Filter by EIP IP address.
address-status - String - Required: no - (Filter) Filter by EIP status. Value range: see the list of EIP status.
instance-id - String - Required: no - (Filter) Filter by the ID of the instance bound to the EIP, such as `ins-11112222`.
private-ip-address - String - Required: no - (Filter) Filter by the private IP bound to the EIP.
network-interface-id - String - Required: no - (Filter) Filter by ID of the ENI bound to the EIP, such as `eni-11112222`.
is-arrears - String - Required: no - (Filter) Filter by whether the EIP is overdue (TRUE: the EIP is overdue | FALSE: the billing status of the EIP is normal)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSecurityGroupPolicies request structure.
 * @class
 */
class DescribeSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/product/1108/47697?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * CreateSecurityGroup response structure.
 * @class
 */
class CreateSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group object.
         * @type {SecurityGroup || null}
         */
        this.SecurityGroup = null;

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

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListener response structure.
 * @class
 */
class DeleteListenerResponse extends  AbstractModel {
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
 * ResetInstances request structure.
 * @class
 */
class ResetInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be reinstalled.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * ID of the image from which to install the instance. If this parameter is not specified, the current image of the instance will be used.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Password. If this parameter is not specified, the password will be subsequently displayed in the Message Center.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to enable CM and CWP. If this parameter is not specified, they will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Whether to retain the data on the data disk. Valid values: true, false. Default value: true
         * @type {string || null}
         */
        this.KeepData = null;

        /**
         * Whether to keep the original settings for the image. You cannot specify this parameter if `Password` or `KeyIds.N` is specified. You can specify this parameter as `TRUE` only when you create an instance by using a custom image, shared image, or image imported from an external resource. Valid values:
TRUE: yes
FALSE: no

Default value: FALSE.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.KeepData = 'KeepData' in params ? params.KeepData : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * DeleteImage request structure.
 * @class
 */
class DeleteImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of image IDs.
         * @type {Array.<string> || null}
         */
        this.ImageIDSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIDSet = 'ImageIDSet' in params ? params.ImageIDSet : null;

    }
}

/**
 * Peak network information by region
 * @class
 */
class PeakNetworkRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Peak network set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PeakNetwork> || null}
         */
        this.PeakNetworkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.PeakNetworkSet) {
            this.PeakNetworkSet = new Array();
            for (let z in params.PeakNetworkSet) {
                let obj = new PeakNetwork();
                obj.deserialize(params.PeakNetworkSet[z]);
                this.PeakNetworkSet.push(obj);
            }
        }

    }
}

/**
 * ModifyHaVipAttribute request structure.
 * @class
 */
class ModifyHaVipAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique HAVIP ID, such as `havip-9o233uri`.
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * HAVIP name, which can be customized with up to 60 characters.
         * @type {string || null}
         */
        this.HaVipName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;

    }
}

/**
 * ModifyAddressesBandwidth request structure.
 * @class
 */
class ModifyAddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Unique EIP ID, such as `eip-xxxxxxx`
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * Target bandwidth value
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * Instance price information
 * @class
 */
class InstancesPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price details
         * @type {InstancePricesPartDetail || null}
         */
        this.InstancePricesPartDetail = null;

        /**
         * Discount on the total instance price
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Discounted price
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Original cost
         * @type {number || null}
         */
        this.OriginalPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePricesPartDetail) {
            let obj = new InstancePricesPartDetail();
            obj.deserialize(params.InstancePricesPartDetail)
            this.InstancePricesPartDetail = obj;
        }
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;

    }
}

/**
 * ModifyImageAttribute response structure.
 * @class
 */
class ModifyImageAttributeResponse extends  AbstractModel {
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
 * Basic information of the module
 * @class
 */
class SimpleModule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Module name
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * Tag information.
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
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
 * ModifyImageAttribute request structure.
 * @class
 */
class ModifyImageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID, such as `img-gvbnzy6f`
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Image name, which must meet the following requirements:
It can contain up to 20 characters.
- The image name cannot be the same as existing image names.
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Image description, which must meet the following requirements:
- It cannot exceed 60 characters.
         * @type {string || null}
         */
        this.ImageDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * Network resource limit of the instance
 * @class
 */
class InstanceNetworkLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * ENI quantity limit
         * @type {number || null}
         */
        this.NetworkInterfaceLimit = null;

        /**
         * Private IP quantity limit per ENI
         * @type {number || null}
         */
        this.InnerIpPerNetworkInterface = null;

        /**
         * Public IP limit per instance
         * @type {number || null}
         */
        this.PublicIpPerInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.NetworkInterfaceLimit = 'NetworkInterfaceLimit' in params ? params.NetworkInterfaceLimit : null;
        this.InnerIpPerNetworkInterface = 'InnerIpPerNetworkInterface' in params ? params.InnerIpPerNetworkInterface : null;
        this.PublicIpPerInstance = 'PublicIpPerInstance' in params ? params.PublicIpPerInstance : null;

    }
}

/**
 * CreateModule request structure.
 * @class
 */
class CreateModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, such as video live streaming module name. It cannot start with a space or exceed 60 characters.
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * Default bandwidth in Mbps. It cannot exceed the bandwidth range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultBandWidth = null;

        /**
         * Default image ID, such as `img-qsdf3ff2`.
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * Model ID.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Default system disk size in GB. It is 50 GB by default and cannot exceed the system disk size range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * Default data disk size in GB. It cannot exceed the system disk size range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * Whether to disable IP direct access. Valid values:
true: yes
false: no
         * @type {boolean || null}
         */
        this.CloseIpDirect = null;

        /**
         * List of tags.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * List of default module security groups
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * Default inbound bandwidth in Mbps. It cannot exceed the bandwidth range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultBandWidthIn = null;

        /**
         * Whether to prohibit public IP assignment
         * @type {boolean || null}
         */
        this.DisableWanIp = null;

        /**
         * System disk information.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk information.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.DefaultBandWidth = 'DefaultBandWidth' in params ? params.DefaultBandWidth : null;
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.DefaultBandWidthIn = 'DefaultBandWidthIn' in params ? params.DefaultBandWidthIn : null;
        this.DisableWanIp = 'DisableWanIp' in params ? params.DisableWanIp : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

    }
}

/**
 * CreateLoadBalancer response structure.
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of CLB instance IDs
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups request structure.
 * @class
 */
class SetLoadBalancerSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of security group IDs. You can bind up to 5 security groups to a CLB instance. If you want to unbind all security groups, leave this parameter empty or pass in an empty array
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * DescribeImportImageOs response structure.
 * @class
 */
class DescribeImportImageOsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported OS types of imported images.
         * @type {ImageOsList || null}
         */
        this.ImportImageOsListSupported = null;

        /**
         * Supported OS versions of imported images.
         * @type {Array.<OsVersion> || null}
         */
        this.ImportImageOsVersionSet = null;

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

        if (params.ImportImageOsListSupported) {
            let obj = new ImageOsList();
            obj.deserialize(params.ImportImageOsListSupported)
            this.ImportImageOsListSupported = obj;
        }

        if (params.ImportImageOsVersionSet) {
            this.ImportImageOsVersionSet = new Array();
            for (let z in params.ImportImageOsVersionSet) {
                let obj = new OsVersion();
                obj.deserialize(params.ImportImageOsVersionSet[z]);
                this.ImportImageOsVersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigrateNetworkInterface response structure.
 * @class
 */
class MigrateNetworkInterfaceResponse extends  AbstractModel {
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
 * Module information
 * @class
 */
class Module extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID.
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Module name.
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * Module status. Valid values:
NORMAL: normal.
DELETING: deleting 
DELETEFAILED: failed to delete.
         * @type {string || null}
         */
        this.ModuleState = null;

        /**
         * Default system disk size.
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * Default data disk size.
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * Default model.
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * Default image.
         * @type {Image || null}
         */
        this.DefaultImage = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Default outbound bandwidth.
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

        /**
         * Tag set.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Whether to disable IP direct access.
         * @type {number || null}
         */
        this.CloseIpDirect = null;

        /**
         * List of default security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Default inbound bandwidth.
         * @type {number || null}
         */
        this.DefaultBandwidthIn = null;

        /**
         * Custom script data
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * System disk information.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk information.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.ModuleState = 'ModuleState' in params ? params.ModuleState : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }

        if (params.DefaultImage) {
            let obj = new Image();
            obj.deserialize(params.DefaultImage)
            this.DefaultImage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DefaultBandwidthIn = 'DefaultBandwidthIn' in params ? params.DefaultBandwidthIn : null;
        this.UserData = 'UserData' in params ? params.UserData : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

    }
}

/**
 * Listener health status
 * @class
 */
class ListenerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * List of forwarding rules of the listener
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RuleHealth> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleHealth();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * DisassociateSecurityGroups response structure.
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * IP direct access information
 * @class
 */
class RunEIPDirectServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable IP direct access. Valid values:
TRUE: yes
FALSE: no
Default value: TRUE.
Currently, Windows images do not support IP direct access.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * ModifyTargetPort request structure.
 * @class
 */
class ModifyTargetPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers for which to modify the ports
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * New port of the real server bound to the listener or forwarding rule
         * @type {number || null}
         */
        this.NewPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.NewPort = 'NewPort' in params ? params.NewPort : null;

    }
}

/**
 * IPv6 address information.
 * @class
 */
class Ipv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPv6 address, such as `3402:4e00:20:100:0:8cd9:2a67:71f3`
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Whether it is the primary IP.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * EIP instance ID, such as `eip-hxlqja90`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether the public IP is blocked.
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IPv6 address status:
PENDING: generating
MIGRATING: migrating
DELETING: deleting
AVAILABLE: available
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * CreateNetworkInterface request structure.
 * @class
 */
class CreateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID, which can be obtained from the `VpcId` field in the returned value of the `DescribeVpcs` API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ENI name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * Subnet instance ID of the ENI, such as 'subnet-0ap8nwca'.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI description. You can enter any information within 60 characters.
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * Number of private IP addresses applied for. The total number of private IP addresses cannot exceed the quota.
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * The security group to be bound with, such as ['sg-1dd51d'].
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Information of the specified private IPs. You can specify up to 10 IPs at a time.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * List of bound tags, such as [{"Key": "city", "Value": "shanghai"}].
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * SetSecurityGroupForLoadbalancers request structure.
 * @class
 */
class SetSecurityGroupForLoadbalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of CLB instance IDs
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Security group ID, such as `esg-12345678`
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * ADD: bind security group;
DEL: unbind security group
         * @type {string || null}
         */
        this.OperationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;

    }
}

/**
 * DescribeInstancesDeniedActions request structure.
 * @class
 */
class DescribeInstancesDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * ModifyLoadBalancerAttributes request structure.
 * @class
 */
class ModifyLoadBalancerAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CLB ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network billing and bandwidth parameters
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.InternetChargeInfo = null;

        /**
         * Whether to allow ELB traffic to the target group. `true`: allows ELB traffic to the target group and verifies security groups only on ELB; `false`: denies ELB traffic to the target group and verifies security groups on both ELB and backend instances.
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.InternetChargeInfo) {
            let obj = new LoadBalancerInternetAccessible();
            obj.deserialize(params.InternetChargeInfo)
            this.InternetChargeInfo = obj;
        }
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * DeleteHaVip response structure.
 * @class
 */
class DeleteHaVipResponse extends  AbstractModel {
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
 * Province/State information
 * @class
 */
class Province extends  AbstractModel {
    constructor(){
        super();

        /**
         * Province/State ID
         * @type {string || null}
         */
        this.ProvinceId = null;

        /**
         * Province/State name
         * @type {string || null}
         */
        this.ProvinceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;

    }
}

/**
 * DescribeSubnets request structure.
 * @class
 */
class DescribeSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, such as `subnet-pxir56ns`. Each request supports a maximum of 100 instances. `SubnetIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Filter. `SubnetIds` and `Filters` cannot be specified at the same time.
subnet-id - String - Subnet instance name.
subnet-name - String - Subnet name. Only fuzzy query by a single value is supported.
cidr-block - String - Subnet IP address range, such as `192.168.1.0`. Only fuzzy query by a single value is supported.
vpc-id - String - VPC instance ID, such as `vpc-f49l6u0z`.
vpc-cidr-block  - String - VPC IP address range, such as `192.168.1.0`. Only fuzzy query by a single value is supported.
region - String - ECM region.
zone - String - AZ.
tag-key - String - Required: no - Filter by tag key.
tag:tag-key - String - Required: no - Filter by tag key-value pair.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of returned results.
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Sorting method. time: sort in reverse chronological order; default: sort by network planning.
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * CreateSubnet request structure.
 * @class
 */
class CreateSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the VPC instance to be manipulated, which can be obtained from the `VpcId` field in the returned value of the `DescribeVpcs` API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Subnet IP address range. It must be within the VPC IP address range. Subnet IP address ranges cannot overlap with each other within the same VPC.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * AZ ID of the subnet. You can select different AZs for different subnets for cross-AZ disaster recovery.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * List of bound tags, such as [{"Key": "city", "Value": "shanghai"}].
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * HAVIP object.
 * @class
 */
class HaVip extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique HAVIP ID.
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * HAVIP name.
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * Virtual IP address.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * VPC ID of the HAVIP.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the HAVIP.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ID of the ENI associated with the HAVIP.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ID of the bound instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Bound EIP.
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * Status:
AVAILABLE: running.
UNBIND: unbound.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * ID of businesses that use HAVIP.
         * @type {string || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * ModifyAddressesBandwidth response structure.
 * @class
 */
class ModifyAddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
         * @type {string || null}
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
 * RunInstances request structure.
 * @class
 */
class RunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of AZs in which to create instances, the number of instances to be created, and the ISPs. You can create up to 100 instances in a region at a time.
         * @type {Array.<ZoneInstanceCountISP> || null}
         */
        this.ZoneInstanceCountISPSet = null;

        /**
         * Instance login password. Different OS types have different limits on password complexity as detailed below:
The password of a Linux instance must contain 8–30 characters in at least two of the following character types: letters, digits, and special symbols [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]. The password of a Windows instance must contain 12–30 characters in at least three of the following character types: letters, digits, and special symbols [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /].
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public network outbound bandwidth cap in Mbps.
1. If you don't specify this parameter or specify it as `0`, the default value under the corresponding module will be used.
2. If you don't specify this parameter or specify it as `0` without specifying the module, the value of `InternetMaxBandwidthIn` will be used
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Module ID. If you don't specify this parameter, you must specify the `ImageId`, `InstanceType`, `DataDiskSize`, and `InternetMaxBandwidthOut` parameters
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Image ID. If you don't specify this parameter or specify it as null, the default value under the corresponding module will be used.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Instance display name.
If this parameter is not specified, `Not named` will be displayed by default.
If you purchase multiple instances and specify the pattern string `{R:x}`, display names will be generated based on `[x, x+n-1]`, where `n` is the number of the purchased instances. For example, if you specify `server\_{R:3}` and purchase 1 instance, the display name will be `server\_3`, and if you purchase 2 instances, the display names will be `server\_3` and `server\_4` respectively.
You can specify multiple pattern strings `{R:x}`.
If you purchase multiple instances and don't specify the pattern string, the instance display names will be suffixed with 1, 2...n, where `n` indicates the number of the purchased instances. For example, if you specify `server_` and purchase 2 instances, the instance display names will be `server\_1` and `server\_2` respectively.
If the purchased instances belong to different regions or ISPs, the above rules will apply to each region and ISP independently.
It can contain up to 60 characters (including pattern string).
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Server name
`HostName` cannot start or end with a dot or hyphen and cannot contain consecutive dots or hyphens.
Windows instance: the name can contain 2–15 letters, digits, and hyphens but not dots or only digits.
Other types (such as Linux) of instances: the name should be a combination of 2 to 60 characters, supporting multiple dots. A string between two dots can contain letters, digits, and hyphens.
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * The string used to ensure the idempotency of the request. Currently, it is a reserved parameter; therefore, do not use it.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Security and Cloud Monitor. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled for public images by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Tag list
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * The user data provided to the instance, which needs to be Base64-encoded with a maximum size of 16 KB
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Model. If you don't specify this parameter or specify it as null, the default value under the corresponding module will be used.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Data disk size in GB. If you don't specify this parameter or specify it as `0`, the default value under the corresponding module will be used
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * Security group of the instance, which can be obtained from the `sgId` field in the returned value of the `DescribeSecurityGroups` API. If this parameter is not specified, the default security group will be bound by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * System disk size in GB. If you don't specify this parameter or specify it as `0`, the default value under the corresponding module will be used
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * Public network inbound bandwidth cap in Mbps.
1. If you don't specify this parameter or specify it as `0`, the default value under the corresponding module will be used.
2. If you don't specify this parameter or specify it as `0` without specifying the module, the value of `InternetMaxBandwidthOut` will be used
         * @type {number || null}
         */
        this.InternetMaxBandwidthIn = null;

        /**
         * Instance billing type. Valid values:
0: postpaid by resource usage, where the daily peak usage of the CPU, memory, and disk will be calculated. This billing mode applies only to non-GNR models;
1: hourly postpaid at the unit price of xx USD/instance/hour. This billing mode applies only to GNR models. To enable it, submit a ticket for application;
2: monthly postpaid at the unit price of xx USD/instance/month. This billing mode applies only to GNR models;
If this field is left empty, `0` will be selected by default for non-GNR models, and `2` will be selected by default for GNR models.
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * Key pair.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings for the image. You cannot specify this parameter if `Password` or `KeyIds.N` is specified. You can specify this parameter as `TRUE` only when you create an instance by using a custom image, shared image, or image imported from an external resource. Valid values:
TRUE: yes
FALSE: no

Default value: FALSE.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeepImageLogin = null;

        /**
         * System disk information.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk information.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInstanceCountISPSet) {
            this.ZoneInstanceCountISPSet = new Array();
            for (let z in params.ZoneInstanceCountISPSet) {
                let obj = new ZoneInstanceCountISP();
                obj.deserialize(params.ZoneInstanceCountISPSet[z]);
                this.ZoneInstanceCountISPSet.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.InternetMaxBandwidthIn = 'InternetMaxBandwidthIn' in params ? params.InternetMaxBandwidthIn : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

    }
}

/**
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Length of the list of the returned instance information.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the returned instance information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Model configuration
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model family configuration information
         * @type {InstanceFamilyConfig || null}
         */
        this.InstanceFamilyConfig = null;

        /**
         * Model
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Vcpu = null;

        /**
         * Memory size
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Clock rate
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * CPU model
         * @type {string || null}
         */
        this.CpuModelName = null;

        /**
         * Instance family type configuration information
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamilyTypeConfig = null;

        /**
         * Extra model information, which is a JSON string in the format of `{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"default system disk size:60 GB","dataDiskSizeShow":"local NVMe SSD: 3200 GB"}`. It indicates a special model if it exists
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * Number of GPU cards
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vgpu = null;

        /**
         * GPU model
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GpuModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamilyConfig) {
            let obj = new InstanceFamilyConfig();
            obj.deserialize(params.InstanceFamilyConfig)
            this.InstanceFamilyConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Vcpu = 'Vcpu' in params ? params.Vcpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CpuModelName = 'CpuModelName' in params ? params.CpuModelName : null;

        if (params.InstanceFamilyTypeConfig) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamilyTypeConfig)
            this.InstanceFamilyTypeConfig = obj;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.Vgpu = 'Vgpu' in params ? params.Vgpu : null;
        this.GpuModelName = 'GpuModelName' in params ? params.GpuModelName : null;

    }
}

/**
 * AllocateAddresses request structure.
 * @class
 */
class AllocateAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Number of EIPs. Default value: 1.
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * CMCC: China Mobile
CTCC: China Telecom
CUCC: China Unicom
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * 1–5000 Mbps. Default value: 1 Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * List of tags to be bound.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * ID of the instance to be bound.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the ENI to be bound, such as `eni-11112222`. `NetworkInterfaceId` and `InstanceId` cannot be specified at the same time. The ENI ID can be obtained from the `networkInterfaceId` field in the returned value of the `DescribeNetworkInterfaces` API.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Private IP to be bound. If you specify `NetworkInterfaceId`, you must also specify `PrivateIpAddress`, which means to bind the EIP to the specified private IP of the specified ENI. You must also make sure that the specified `PrivateIpAddress` is a private IP of the specified `NetworkInterfaceId`. The private IP of the specified ENI can be obtained from the `privateIpAddress` field in the returned value of the `DescribeNetworkInterfaces` API.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * Zone information
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZoneId
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ZoneName
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Zone
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ModifyInstancesAttribute request structure.
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be modified. You can request up to 100 instances at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Instance name displayed after successful modification, which can contain up to 60 characters. If this parameter is not specified, an empty value will be displayed.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * List of IDs of the security groups of the instance. The instance will be associated with the specified security groups and will be disassociated from the original security groups. The maximum quantity is 5.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * ResetInstances response structure.
 * @class
 */
class ResetInstancesResponse extends  AbstractModel {
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
 * DescribeNode request structure.
 * @class
 */
class DescribeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter. InstanceFamily: instance family.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

    }
}

/**
 * ModifySecurityGroupAttribute response structure.
 * @class
 */
class ModifySecurityGroupAttributeResponse extends  AbstractModel {
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
 * ModifyModuleConfig request structure.
 * @class
 */
class ModifyModuleConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID.
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Model ID.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Default data disk size in GB. It cannot exceed the system disk size range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * Default system disk size in GB. It cannot exceed the system disk size range. For more information, see `DescribeConfig`.
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * System disk
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Data disk
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

    }
}

/**
 * Region information
 * @class
 */
class Area extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.AreaId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.AreaName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;

    }
}

/**
 * ModifyAddressAttribute response structure.
 * @class
 */
class ModifyAddressAttributeResponse extends  AbstractModel {
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
 * DescribeInstanceVncUrl request structure.
 * @class
 */
class DescribeInstanceVncUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which can be obtained from the `InstanceId` field in the returned value of the `DescribeInstances` API.
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
 * DescribeTaskStatus response structure.
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task description.
         * @type {Array.<TaskOutput> || null}
         */
        this.TaskSet = null;

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

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskOutput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplaceRouteTableAssociation response structure.
 * @class
 */
class ReplaceRouteTableAssociationResponse extends  AbstractModel {
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
 * DescribeInstancesDeniedActions response structure.
 * @class
 */
class DescribeInstancesDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prohibited operations for the instance
         * @type {Array.<InstanceOperator> || null}
         */
        this.InstanceOperatorSet = null;

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

        if (params.InstanceOperatorSet) {
            this.InstanceOperatorSet = new Array();
            for (let z in params.InstanceOperatorSet) {
                let obj = new InstanceOperator();
                obj.deserialize(params.InstanceOperatorSet[z]);
                this.InstanceOperatorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseIpv6Addresses request structure.
 * @class
 */
class ReleaseIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * List of the specified IPv6 addresses. You can specify up to 10 IPv6 addresses at a time.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * Output parameter of the task query
 * @class
 */
class TaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Status value. Valid values: SUCCESS, FAILED, OPERATING
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task submission time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Operation name
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * Physical location information
 * @class
 */
class PhysicalPosition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rack unit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * Rack
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RackId = null;

        /**
         * Switch
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SwitchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.RackId = 'RackId' in params ? params.RackId : null;
        this.SwitchId = 'SwitchId' in params ? params.SwitchId : null;

    }
}

/**
 * CLB listener
 * @class
 */
class Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Health check information of the listener
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Request scheduling method
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Session persistence time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Listener name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Session type of the listener
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * End port of the port range
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * StartInstances request structure.
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be started. You can request up to 100 instances in a region at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * DeleteSnapshots request structure.
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the snapshots to be deleted, which can be queried through [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Whether to force delete the images associated with the snapshot.
         * @type {boolean || null}
         */
        this.DeleteBindImages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;
        this.DeleteBindImages = 'DeleteBindImages' in params ? params.DeleteBindImages : null;

    }
}

/**
 * Abstract location of the instance, including its AZ, project, and dedicated cluster ID and name.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * [AZ ID](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#ZoneInfo) of the cloud disk, which can be obtained from the `Zone` field in the returned value of the [DescribeZones](https://intl.cloud.tencent.com/document/product/213/15707?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Cage ID. When it is used as an input parameter, it indicates to manipulate the resources in the cage with the specified `CageId` and can be left empty. When it is used as an output parameter, it represents the cage ID of the resource and can be left empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * Project ID of the instance, which can be obtained from the `projectId` field in the returned value of the [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) API. If this parameter is not specified, the default project ID will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Name of the dedicated cluster. When it is used as an input parameter, it is ignored. When it is used as an output parameter, it represents the name of the dedicated cluster to which the cloud disk belongs, and it can be left empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CdcName = null;

        /**
         * Dedicated cluster ID of the instance. When it is used as an input parameter, it indicates to manipulate the resources in the dedicated cluster with the specified `CdcId` and can be left empty. When it is used as an output parameter, it represents the dedicated cluster ID of the resource and can be left empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CdcName = 'CdcName' in params ? params.CdcName : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * CLB backend target
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listening port of the real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * CVM instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Forwarding weight of the real server. Value range: [0, 100]. Default value: 10.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * You need to pass in this parameter when binding an ENI. It represents the IP address of the ENI. You must bind an ENI to a CVM instance first before you can bind it to a CLB instance. Note: you must pass in either `InstanceId` or `EniIp`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EniIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;

    }
}

/**
 * DeleteSnapshots response structure.
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
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
 * DescribeAddresses response structure.
 * @class
 */
class DescribeAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible EIPs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of EIP details.
         * @type {Array.<Address> || null}
         */
        this.AddressSet = null;

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

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIpv6AddressesAttribute request structure.
 * @class
 */
class ModifyIpv6AddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Information of the specified IPv6 addresses.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * DeleteModule request structure.
 * @class
 */
class DeleteModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID, such as `em-qn46snq8`.
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * DisableRoutes response structure.
 * @class
 */
class DisableRoutesResponse extends  AbstractModel {
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
 * DescribeConfig response structure.
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Range of the network bandwidth disk size.
         * @type {NetworkStorageRange || null}
         */
        this.NetworkStorageRange = null;

        /**
         * Image OS allowlist.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ImageWhiteSet = null;

        /**
         * Network quota information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceNetworkLimitConfig> || null}
         */
        this.InstanceNetworkLimitConfigs = null;

        /**
         * Image quota information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ImageLimitConfig || null}
         */
        this.ImageLimits = null;

        /**
         * Default IP direct access, used in scenarios with direct access parameters such as module creation and virtual machine purchase.
         * @type {boolean || null}
         */
        this.DefaultIPDirect = null;

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

        if (params.NetworkStorageRange) {
            let obj = new NetworkStorageRange();
            obj.deserialize(params.NetworkStorageRange)
            this.NetworkStorageRange = obj;
        }
        this.ImageWhiteSet = 'ImageWhiteSet' in params ? params.ImageWhiteSet : null;

        if (params.InstanceNetworkLimitConfigs) {
            this.InstanceNetworkLimitConfigs = new Array();
            for (let z in params.InstanceNetworkLimitConfigs) {
                let obj = new InstanceNetworkLimitConfig();
                obj.deserialize(params.InstanceNetworkLimitConfigs[z]);
                this.InstanceNetworkLimitConfigs.push(obj);
            }
        }

        if (params.ImageLimits) {
            let obj = new ImageLimitConfig();
            obj.deserialize(params.ImageLimits)
            this.ImageLimits = obj;
        }
        this.DefaultIPDirect = 'DefaultIPDirect' in params ? params.DefaultIPDirect : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data disk information
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk size in GB.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Data disk type. Valid values:
- LOCAL_BASIC: local disk
- CLOUD_PREMIUM: Premium Cloud Storage

Default value: LOCAL_BASIC.
         * @type {string || null}
         */
        this.DiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

    }
}

/**
 * ModifyVpcAttribute response structure.
 * @class
 */
class ModifyVpcAttributeResponse extends  AbstractModel {
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
 * Private IP information
 * @class
 */
class PrivateIpAddressSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP address.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Whether it is the primary IP.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * Public IP address.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * EIP instance ID, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Private IP description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether the public IP is blocked.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IP status:
PENDING: generating
MIGRATING: migrating
DELETING: deleting
AVAILABLE: available
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * MigratePrivateIpAddress response structure.
 * @class
 */
class MigratePrivateIpAddressResponse extends  AbstractModel {
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
 * DeleteRouteTable response structure.
 * @class
 */
class DeleteRouteTableResponse extends  AbstractModel {
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
 * ModifyModuleDisableWanIp response structure.
 * @class
 */
class ModifyModuleDisableWanIpResponse extends  AbstractModel {
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
 * Enhanced service
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable CWP.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Whether to enable CM.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * Whether to enable IP direct access. If this parameter is not specified, IP direct access will be enabled by default for Linux images and is currently not supported for Windows images.
         * @type {RunEIPDirectServiceEnabled || null}
         */
        this.EIPDirectService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

        if (params.EIPDirectService) {
            let obj = new RunEIPDirectServiceEnabled();
            obj.deserialize(params.EIPDirectService)
            this.EIPDirectService = obj;
        }

    }
}

/**
 * DescribeLoadBalanceTaskStatus request structure.
 * @class
 */
class DescribeLoadBalanceTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request ID, i.e., the `RequestId` parameter returned by the API
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyHaVipAttribute response structure.
 * @class
 */
class ModifyHaVipAttributeResponse extends  AbstractModel {
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
 * ModifyVpcAttribute request structure.
 * @class
 */
class ModifyVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * VPC name, which can be customized with up to 60 characters.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * VPC description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Resource type tag
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type. Valid values: instance, module
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * AttachNetworkInterface response structure.
 * @class
 */
class AttachNetworkInterfaceResponse extends  AbstractModel {
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
 * DescribeRouteTables request structure.
 * @class
 */
class DescribeRouteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`.
         * @type {Array.<string> || null}
         */
        this.RouteTableIds = null;

        /**
         * Filter. `RouteTableIds` and `Filters` cannot be specified at the same time.
route-table-id - String - (Filter) Route table instance ID.
route-table-name - String - (Filter) Route table name.
vpc-id - String - (Filter) VPC instance ID, such as `vpc-f49l6u0z`.
association.main - String - (Filter) Whether it is the main route table.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ECM region. If this parameter is left empty or not specified, it will indicate all regions.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableIds = 'RouteTableIds' in params ? params.RouteTableIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeBaseOverview request structure.
 * @class
 */
class DescribeBaseOverviewRequest extends  AbstractModel {
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
 * CreateHaVip response structure.
 * @class
 */
class CreateHaVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP object.
         * @type {HaVip || null}
         */
        this.HaVip = null;

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

        if (params.HaVip) {
            let obj = new HaVip();
            obj.deserialize(params.HaVip)
            this.HaVip = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportImage request structure.
 * @class
 */
class ImportImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Image description.
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Source region
         * @type {string || null}
         */
        this.SourceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.SourceRegion = 'SourceRegion' in params ? params.SourceRegion : null;

    }
}

/**
 * DisableRoutes request structure.
 * @class
 */
class DisableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique route table ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy ID.
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * ResetInstancesMaxBandwidth request structure.
 * @class
 */
class ResetInstancesMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances for which to reset the bandwidth cap. You can request up to 100 instances in a region at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Modified outbound bandwidth cap.
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

        /**
         * Modified inbound bandwidth cap.
         * @type {number || null}
         */
        this.MaxBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;
        this.MaxBandwidthIn = 'MaxBandwidthIn' in params ? params.MaxBandwidthIn : null;

    }
}

/**
 * ModifyModuleName request structure.
 * @class
 */
class ModifyModuleNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID.
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Module name.
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter.
zone      String      Required: no     (Filter) Filter by AZ abbreviation.
zone-name      String      Required: no     (Filter) Filter by AZ name. Fuzzy match is supported.
module-id      String      Required: no     (Filter) Filter by module ID.
instance-id      String      Required: no      (Filter) Filter by instance ID.
instance-name      String      Required: no      (Filter) Filter by instance name. Fuzzy match is supported.
ip-address      String      Required: no      (Filter) Filter by the instance's private/public IP.
instance-uuid   string Required: no (Filter) Filter instances by `uuid`.
instance-state  string  Required: no (Filter) Update instances by instance status.
internet-service-provider      String      Required: no      (Filter) Filter by the ISP of the instance's public IP.
tag-key      String      Required: no      (Filter) Filter by tag key.
tag:tag-key      String      Required: no      (Filter) Filter by tag key-value pair. Replace `tag-key` with the specific tag key.
instance-family      String      Required: no      (Filter) Filter by model family.
module-name      String      Required: no      (Filter) Filter by module name. Fuzzy match is supported.
image-id      String      Required: no      (Filter) Filter by instance image ID.
vpc-id String      Required: no      (Filter) Filter by instance VPC ID.
subnet-id String      Required: no      (Filter) Filter by instance subnet ID.

If the `Filters` parameter is not specified, the information of all relevant instances will be queried.
Each request can contain up to 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20 (if the number of query results is greater than or equal to 20). Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specified sort by field. Currently, valid values are as follows:
timestamp: sort by instance creation time.
Note: you can sort only by creation time currently. More sort criteria may be supported in the future.
If this parameter is not specified, instances will be sorted by creation time by default.
         * @type {string || null}
         */
        this.OrderByField = null;

        /**
         * Sorting order. 0: descending; 1: ascending. If this parameter is not specified, it will be descending by default.
         * @type {number || null}
         */
        this.OrderDirection = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * CreateListener request structure.
 * @class
 */
class CreateListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Specifies for which ports to create listeners. Each port corresponds to a new listener
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Listener protocol. Valid values: TCP, UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * List of names of the listeners to be created. The array of names and array of ports are in one-to-one correspondence. If you do not want to name them now, you do not need to provide this parameter.
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * Health check parameters
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Session persistence time in seconds. Value range: 30–3600. The default value is 0, indicating that session persistence is not enabled. This parameter is applicable only to TCP/UDP listeners.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Forwarding method of the listener. Valid values: WRR, LEAST_CONN.
They represent weighted round robin and least connections, respectively. Default value: WRR.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Session persistence type. Valid values: NORMAL: the default session persistence type; QUIC_CID: session persistence by QUIC connection ID. The `QUIC_CID` value can only be configured in UDP listeners. If this field is not specified, the default session persistence type will be used.
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * End ports of port ranges, which must be the same as `Ports` in length.
         * @type {Array.<number> || null}
         */
        this.EndPorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerNames = 'ListenerNames' in params ? params.ListenerNames : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.EndPorts = 'EndPorts' in params ? params.EndPorts : null;

    }
}

/**
 * ReleaseAddresses request structure.
 * @class
 */
class ReleaseAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * List of unique IDs of EIPs.
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

    }
}

/**
 * CreateRouteTable request structure.
 * @class
 */
class CreateRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the VPC instance to be manipulated, which can be obtained from the `VpcId` field in the returned value of the `DescribeVpcs` API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Route table name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ModifyModuleConfig response structure.
 * @class
 */
class ModifyModuleConfigResponse extends  AbstractModel {
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
 * MigrateNetworkInterface request structure.
 * @class
 */
class MigrateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ID of the ECM instance bound to the ENI, such as `ein-r8hr2upy`.
         * @type {string || null}
         */
        this.SourceInstanceId = null;

        /**
         * ID of the destination ECM instance to be migrated.
         * @type {string || null}
         */
        this.DestinationInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DestinationInstanceId = 'DestinationInstanceId' in params ? params.DestinationInstanceId : null;

    }
}

/**
 * Image source information
 * @class
 */
class SrcImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * System name
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * Image description
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionID = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Source instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Source instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Source image type
         * @type {string || null}
         */
        this.ImageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;

    }
}

/**
 * DescribeTaskStatus request structure.
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task description.
         * @type {Array.<TaskInput> || null}
         */
        this.TaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskInput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressAttribute request structure.
 * @class
 */
class ModifyAddressAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Unique EIP ID, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * New EIP name, which can contain up to 20 characters.
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * Whether "direct access" is enabled for the EIP. TRUE: yes. FALSE: no. Note that this parameter is available only to users who have activated the EIP direct access feature.
         * @type {string || null}
         */
        this.EipDirectConnection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

    }
}

/**
 * DescribePriceRunInstance request structure.
 * @class
 */
class DescribePriceRunInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance model information
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * System disk information
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Data disk information
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.DataDisk) {
            this.DataDisk = new Array();
            for (let z in params.DataDisk) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisk[z]);
                this.DataDisk.push(obj);
            }
        }

    }
}

/**
 * DescribeTargets response structure.
 * @class
 */
class DescribeTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of real servers bound to the listener.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ListenerBackend> || null}
         */
        this.Listeners = null;

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

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerBackend();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Supported OS type. Valid values: Windows, Linux.
 * @class
 */
class ImageOsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported Windows OS
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Windows = null;

        /**
         * Supported Linux OS
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Linux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.Linux = 'Linux' in params ? params.Linux : null;

    }
}

/**
 * BatchModifyTargetWeight request structure.
 * @class
 */
class BatchModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of weights to be modified in batches
         * @type {Array.<TargetsWeightRule> || null}
         */
        this.ModifyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.ModifyList) {
            this.ModifyList = new Array();
            for (let z in params.ModifyList) {
                let obj = new TargetsWeightRule();
                obj.deserialize(params.ModifyList[z]);
                this.ModifyList.push(obj);
            }
        }

    }
}

/**
 * CLB batch targets
 * @class
 */
class BatchTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Bound port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * CVM instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ENI IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * Weight of the CVM instance. Value range: [0, 100]. If it is not specified for binding the instance, 10 will be used by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * City information
 * @class
 */
class City extends  AbstractModel {
    constructor(){
        super();

        /**
         * City ID
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * City name
         * @type {string || null}
         */
        this.CityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.CityName = 'CityName' in params ? params.CityName : null;

    }
}

/**
 * Peak network data
 * @class
 */
class PeakNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording time.
         * @type {string || null}
         */
        this.RecordTime = null;

        /**
         * Inbound bandwidth data.
         * @type {string || null}
         */
        this.PeakInNetwork = null;

        /**
         * Outbound bandwidth data.
         * @type {string || null}
         */
        this.PeakOutNetwork = null;

        /**
         * Billable bandwidth in bps
         * @type {string || null}
         */
        this.ChargeNetwork = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;
        this.PeakInNetwork = 'PeakInNetwork' in params ? params.PeakInNetwork : null;
        this.PeakOutNetwork = 'PeakOutNetwork' in params ? params.PeakOutNetwork : null;
        this.ChargeNetwork = 'ChargeNetwork' in params ? params.ChargeNetwork : null;

    }
}

/**
 * RebootInstances response structure.
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
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
 * DeleteSecurityGroupPolicies response structure.
 * @class
 */
class DeleteSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * DescribeHaVips request structure.
 * @class
 */
class DescribeHaVipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of unique HAVIP IDs, such as `havip-9o233uri`.
         * @type {Array.<string> || null}
         */
        this.HaVipIds = null;

        /**
         * Filter. `HaVipIds` and `Filters` cannot be specified at the same time.
havip-id - String - Unique HAVIP ID, such as `havip-9o233uri`.
havip-name - String - HAVIP name.
vpc-id - String - VPC ID of the HAVIP.
subnet-id - String - Subnet ID of the HAVIP.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ECM region. If this parameter is left empty, it will indicate all regions.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipIds = 'HaVipIds' in params ? params.HaVipIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * BatchRegisterTargets request structure.
 * @class
 */
class BatchRegisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Bound targets
         * @type {Array.<BatchTarget> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new BatchTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * RemovePrivateIpAddresses response structure.
 * @class
 */
class RemovePrivateIpAddressesResponse extends  AbstractModel {
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
 * Public IP information of the instance.
 * @class
 */
class PublicIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode.
         * @type {string || null}
         */
        this.ChargeMode = null;

        /**
         * Public IP of the instance.
         * @type {string || null}
         */
        this.PublicIPAddress = null;

        /**
         * Public IP ISP of the instance.
         * @type {ISP || null}
         */
        this.ISP = null;

        /**
         * Outbound bandwidth cap of the instance in Mbps.
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

        /**
         * Inbound bandwidth cap of the instance in Mbps.
         * @type {number || null}
         */
        this.MaxBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeMode = 'ChargeMode' in params ? params.ChargeMode : null;
        this.PublicIPAddress = 'PublicIPAddress' in params ? params.PublicIPAddress : null;

        if (params.ISP) {
            let obj = new ISP();
            obj.deserialize(params.ISP)
            this.ISP = obj;
        }
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;
        this.MaxBandwidthIn = 'MaxBandwidthIn' in params ? params.MaxBandwidthIn : null;

    }
}

/**
 * CWP;
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * CWP edition. Valid values: 0: Basic Edition; 1: Pro Edition. Currently, only Basic Edition is supported
         * @type {number || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * ModifyModuleImage response structure.
 * @class
 */
class ModifyModuleImageResponse extends  AbstractModel {
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
 * DeleteLoadBalancerListeners response structure.
 * @class
 */
class DeleteLoadBalancerListenersResponse extends  AbstractModel {
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
 * VPC object.
 * @class
 */
class VpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC name.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC instance ID, such as `vpc-azd4dt1c`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IPv4 CIDR block of the VPC.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Whether it is the default VPC.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Whether to enable multicast.
         * @type {boolean || null}
         */
        this.EnableMulticast = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * List of DNS servers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DnsServerSet = null;

        /**
         * DHCP domain option value.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * DHCP option set ID.
         * @type {string || null}
         */
        this.DhcpOptionsId = null;

        /**
         * Whether to enable DHCP.
         * @type {boolean || null}
         */
        this.EnableDhcp = null;

        /**
         * IPv6 CIDR block of the VPC.
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * Tag key-value pair
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Secondary CIDR block
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Number of included subnets
         * @type {number || null}
         */
        this.SubnetCount = null;

        /**
         * Number of included instances
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DnsServerSet = 'DnsServerSet' in params ? params.DnsServerSet : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DhcpOptionsId = 'DhcpOptionsId' in params ? params.DhcpOptionsId : null;
        this.EnableDhcp = 'EnableDhcp' in params ? params.EnableDhcp : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.SubnetCount = 'SubnetCount' in params ? params.SubnetCount : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * Item information of the module list
 * @class
 */
class ModuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance statistics of the node
         * @type {NodeInstanceNum || null}
         */
        this.NodeInstanceNum = null;

        /**
         * Module information
         * @type {Module || null}
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInstanceNum) {
            let obj = new NodeInstanceNum();
            obj.deserialize(params.NodeInstanceNum)
            this.NodeInstanceNum = obj;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

    }
}

/**
 * CreateSecurityGroupPolicies request structure.
 * @class
 */
class CreateSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * CM
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * ModifyRouteTableAttribute response structure.
 * @class
 */
class ModifyRouteTableAttributeResponse extends  AbstractModel {
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
 * VPC information configuration.
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID, such as `vpc-xxx`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the VPC, such as `subnet-xxx`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether it is used as a public gateway. The public gateway can be used only when the instance has a public IP and resides in a VPC. Valid values:
TRUE: yes
FALSE: no

Default value: FALSE.
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * Array of VPC subnet IPs. This parameter can be used to create instances or modify the VPC attributes of instances.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Number of the IPv6 addresses to be randomly generated for the ENI.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * ReleaseIpv6Addresses response structure.
 * @class
 */
class ReleaseIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID. You can use the `DescribeTaskResult` API to query the task status
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
 * DescribeTaskResult response structure.
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Execution result. Valid values: SUCCESS; FAILED; RUNNING.
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchDeregisterTargets response structure.
 * @class
 */
class BatchDeregisterTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the listeners failed to be unbound
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailListenerIdSet = null;

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
        this.FailListenerIdSet = 'FailListenerIdSet' in params ? params.FailListenerIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups response structure.
 * @class
 */
class SetLoadBalancerSecurityGroupsResponse extends  AbstractModel {
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
 * CreateLoadBalancer request structure.
 * @class
 */
class CreateLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Network type of the CLB instance. Currently, you can pass in only `OPEN`, which indicates public network.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CMCC: China Mobile; CTCC: China Telecom; CUCC: China Unicom.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * CLB instance name, which will take effect only when one instance is created. It can contain 1–50 letters, digits, hyphens, and underscores.
Note: if the name of the new CLB instance already exists, a default name will be generated automatically.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network ID of the target device on the CLB backend, such as `vpc-12345678`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Number of CLB instances to be created. Default value: 1.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * CLB information such as bandwidth limit.
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Tags.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Security groups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Number = 'Number' in params ? params.Number : null;

        if (params.InternetAccessible) {
            let obj = new LoadBalancerInternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * Network information of the instance.
 * @class
 */
class Internet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private network information list of the instance, with the primary ENI followed by secondary ENIs in the order of binding.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrivateIPAddressInfo> || null}
         */
        this.PrivateIPAddressSet = null;

        /**
         * Public network information list of the instance, with the primary ENI followed by secondary ENIs in the order of binding.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PublicIPAddressInfo> || null}
         */
        this.PublicIPAddressSet = null;

        /**
         * Network information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceNetworkInfo> || null}
         */
        this.InstanceNetworkInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PrivateIPAddressSet) {
            this.PrivateIPAddressSet = new Array();
            for (let z in params.PrivateIPAddressSet) {
                let obj = new PrivateIPAddressInfo();
                obj.deserialize(params.PrivateIPAddressSet[z]);
                this.PrivateIPAddressSet.push(obj);
            }
        }

        if (params.PublicIPAddressSet) {
            this.PublicIPAddressSet = new Array();
            for (let z in params.PublicIPAddressSet) {
                let obj = new PublicIPAddressInfo();
                obj.deserialize(params.PublicIPAddressSet[z]);
                this.PublicIPAddressSet.push(obj);
            }
        }

        if (params.InstanceNetworkInfoSet) {
            this.InstanceNetworkInfoSet = new Array();
            for (let z in params.InstanceNetworkInfoSet) {
                let obj = new InstanceNetworkInfo();
                obj.deserialize(params.InstanceNetworkInfoSet[z]);
                this.InstanceNetworkInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeModule response structure.
 * @class
 */
class DescribeModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible modules.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of module details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ModuleItem> || null}
         */
        this.ModuleItemSet = null;

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

        if (params.ModuleItemSet) {
            this.ModuleItemSet = new Array();
            for (let z in params.ModuleItemSet) {
                let obj = new ModuleItem();
                obj.deserialize(params.ModuleItemSet[z]);
                this.ModuleItemSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Image size configuration
 * @class
 */
class ImageLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported maximum image size in GB, including custom image size for import and central cloud image size.
         * @type {number || null}
         */
        this.MaxImageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxImageSize = 'MaxImageSize' in params ? params.MaxImageSize : null;

    }
}

/**
 * EIP quota information
 * @class
 */
class EipQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota name. Valid values:
TOTAL_EIP_QUOTA: quota of EIPs in the current region;
DAILY_EIP_APPLY: today's number of applications in the current region;
DAILY_PUBLIC_IP_ASSIGN: number of public IP reassignments in the current region.
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * Current quantity
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * Quota
         * @type {number || null}
         */
        this.QuotaLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;

    }
}

/**
 * DescribeSubnets response structure.
 * @class
 */
class DescribeSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subnet object.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetSecurityGroupForLoadbalancers response structure.
 * @class
 */
class SetSecurityGroupForLoadbalancersResponse extends  AbstractModel {
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
 * DescribeDefaultSubnet response structure.
 * @class
 */
class DescribeDefaultSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default subnet information. If there is no subnet, this parameter will be empty.
         * @type {Subnet || null}
         */
        this.Subnet = null;

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

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubnet request structure.
 * @class
 */
class DeleteSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, which can be obtained from the `SubnetId` field in the returned value of the `DescribeSubnets` API.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * Location information of the instance.
 * @class
 */
class Position extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone information of the instance.
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * Country/Region information of the instance.
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * Area information of the instance.
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * Province/State information of the instance.
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * City information of the instance.
         * @type {City || null}
         */
        this.City = null;

        /**
         * Region information of the instance.
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

    }
}

/**
 * Route table
 * @class
 */
class RouteTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Route table instance ID
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Route table name
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Association relationships of the route table
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteTableAssociation> || null}
         */
        this.AssociationSet = null;

        /**
         * IPv4 routing policy set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Route> || null}
         */
        this.RouteSet = null;

        /**
         * Whether it is the default route table
         * @type {boolean || null}
         */
        this.Main = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.AssociationSet) {
            this.AssociationSet = new Array();
            for (let z in params.AssociationSet) {
                let obj = new RouteTableAssociation();
                obj.deserialize(params.AssociationSet[z]);
                this.AssociationSet.push(obj);
            }
        }

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new Route();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.Main = 'Main' in params ? params.Main : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DeleteNetworkInterface request structure.
 * @class
 */
class DeleteNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeTargets request structure.
 * @class
 */
class DescribeTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of listener IDs.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Listener protocol type.
         * @type {number || null}
         */
        this.Protocol = null;

        /**
         * Listener port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * ReplaceRoutes response structure.
 * @class
 */
class ReplaceRoutesResponse extends  AbstractModel {
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
 * DeleteHaVip request structure.
 * @class
 */
class DeleteHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique HAVIP ID, such as `havip-9o233uri`.
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * DeleteLoadBalancerListeners request structure.
 * @class
 */
class DeleteLoadBalancerListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of IDs of the listeners to be deleted. If this parameter is left empty, all listeners of the CLB instance will be deleted
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * MigratePrivateIpAddress request structure.
 * @class
 */
class MigratePrivateIpAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ID of the ENI instance bound to the private IP, such as `eni-11112222`.
         * @type {string || null}
         */
        this.SourceNetworkInterfaceId = null;

        /**
         * ID of the destination ENI instance to be migrated.
         * @type {string || null}
         */
        this.DestinationNetworkInterfaceId = null;

        /**
         * Private IP address to be migrated, such as `10.0.0.6`.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SourceNetworkInterfaceId = 'SourceNetworkInterfaceId' in params ? params.SourceNetworkInterfaceId : null;
        this.DestinationNetworkInterfaceId = 'DestinationNetworkInterfaceId' in params ? params.DestinationNetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * DeleteRouteTable request structure.
 * @class
 */
class DeleteRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DescribeConfig request structure.
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
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
 * Binding relationship of the ENI
 * @class
 */
class NetworkInterfaceAttachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Serial number of the ENI in the CVM instance.
         * @type {number || null}
         */
        this.DeviceIndex = null;

        /**
         * Account information of the CVM instance owner.
         * @type {string || null}
         */
        this.InstanceAccountId = null;

        /**
         * Binding time.
         * @type {string || null}
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceIndex = 'DeviceIndex' in params ? params.DeviceIndex : null;
        this.InstanceAccountId = 'InstanceAccountId' in params ? params.InstanceAccountId : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * BatchRegisterTargets response structure.
 * @class
 */
class BatchRegisterTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the listeners failed to be bound. If this parameter is empty, all listeners have been bound successfully.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailListenerIdSet = null;

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
        this.FailListenerIdSet = 'FailListenerIdSet' in params ? params.FailListenerIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseAddresses response structure.
 * @class
 */
class ReleaseAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID (TaskId). You can use the `DescribeTaskResult` API to query the task status.
         * @type {string || null}
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
 * ReplaceSecurityGroupPolicy response structure.
 * @class
 */
class ReplaceSecurityGroupPolicyResponse extends  AbstractModel {
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
 * ModifyPrivateIpAddressesAttribute response structure.
 * @class
 */
class ModifyPrivateIpAddressesAttributeResponse extends  AbstractModel {
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
 * List of forwarding rules and health status
 * @class
 */
class RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check status of the real server bound to the rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TargetHealth> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetHealth();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DeleteSecurityGroup response structure.
 * @class
 */
class DeleteSecurityGroupResponse extends  AbstractModel {
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
 * CreateNetworkInterface response structure.
 * @class
 */
class CreateNetworkInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance.
         * @type {NetworkInterface || null}
         */
        this.NetworkInterface = null;

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

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of targets and their weights
 * @class
 */
class TargetsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers for which to modify the weights
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * New forwarding weight of the real server. Value range: 0–100.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * Combination of the instance AZ, number of instances to be created, and ISP;
 * @class
 */
class ZoneInstanceCountISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * The AZ in which to create an instance.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of instances to be created in the current AZ.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * ISP name. Valid values:
CTCC: China Telecom
CUCC: China Unicom
CMCC: China Mobile
If there are multiple ISP names, you need to separate them by semicolons, such as `CMCC;CUCC;CTCC`. To use multiple ISPs, contact Tencent Cloud customer service for assistance.
         * @type {string || null}
         */
        this.ISP = null;

        /**
         * ID of the specified VPC. You must specify both `SubnetId` and `VpcId` or neither
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the specified subnet. You must specify both `SubnetId` and `VpcId` or neither
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Private IP of the specified primary ENI. You must specify both `SubnetId` and `VpcId` at the same time. The number of IP addresses must be the same as `InstanceCount`. You can get the private IP of the secondary ENI of a multi-IP server through DHCP in the same subnet.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Number of the IPv6 addresses to be randomly generated for the ENI, which cannot be greater than 1.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ISP = 'ISP' in params ? params.ISP : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * DescribeAddressQuota request structure.
 * @class
 */
class DescribeAddressQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeInstanceTypeConfig response structure.
 * @class
 */
class DescribeInstanceTypeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Model configuration information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB health check
 * @class
 */
class HealthCheck extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable health check. Valid values: 1: enable; 0: disable
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * Health check response timeout period in seconds. Value range: 2–60. Default value: 2. The value of this parameter should be smaller than the check interval.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * Health check interval in seconds. Value range: 5–300. Default value: 5.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * Health threshold. Value range: 2–10. Default value: 3, indicating that if a forward is found healthy three consecutive times, it will be considered normal.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * Unhealthy threshold. Value range: 2–10. Default value: 3, indicating that if a forward is found unhealthy three consecutive times, it will be considered exceptional.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnHealthyNum = null;

        /**
         * Health check port (a custom check parameter), which is the port of the real server by default. Unless you want to specify a port, we recommend you leave it empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CheckPort = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of `CheckType` is `CUSTOM`. This parameter represents the input format of the health check. Valid values: HEX, TEXT. If the value is `HEX`, the characters of `SendContext` and `RecvContext` can only be selected from `0123456789ABCDEF`, and the length must be an even number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContextType = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of `CheckType` is `CUSTOM`. This parameter represents the content of the request sent by the health check. It can contain up to 500 visible ASCII characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SendContext = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of `CheckType` is `CUSTOM`. This parameter represents the result returned by the health check. It can contain up to 500 visible ASCII characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecvContext = null;

        /**
         * Health check protocol (a custom check parameter). Valid values: TCP, CUSTOM (applicable only to UDP listeners. If custom health check is used, this parameter will be required).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CheckType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnHealthyNum = 'UnHealthyNum' in params ? params.UnHealthyNum : null;
        this.CheckPort = 'CheckPort' in params ? params.CheckPort : null;
        this.ContextType = 'ContextType' in params ? params.ContextType : null;
        this.SendContext = 'SendContext' in params ? params.SendContext : null;
        this.RecvContext = 'RecvContext' in params ? params.RecvContext : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;

    }
}

/**
 * Security group policy set
 * @class
 */
class SecurityGroupPolicySet extends  AbstractModel {
    constructor(){
        super();

        /**
         * The version number of the security group policy, which will automatically increase by one each time you update the security group policy, so as to prevent expiration of the updated routing policies. If it is left empty, any conflicts will be ignored.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Outbound rule. You must select either an outbound rule or inbound rule.
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Egress = null;

        /**
         * Inbound rule. You must select either outbound rule or inbound rule.
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Ingress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Egress) {
            this.Egress = new Array();
            for (let z in params.Egress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Egress[z]);
                this.Egress.push(obj);
            }
        }

        if (params.Ingress) {
            this.Ingress = new Array();
            for (let z in params.Ingress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Ingress[z]);
                this.Ingress.push(obj);
            }
        }

    }
}

/**
 * AssignIpv6Addresses response structure.
 * @class
 */
class AssignIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IPv6 addresses assigned to ENIs.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

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

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoutes response structure.
 * @class
 */
class CreateRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of added instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Route table object.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroups response structure.
 * @class
 */
class DescribeSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Security group object.
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Model family configuration
 * @class
 */
class InstanceFamilyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model name
         * @type {string || null}
         */
        this.InstanceFamilyName = null;

        /**
         * Model ID
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * ModifySecurityGroupPolicies response structure.
 * @class
 */
class ModifySecurityGroupPoliciesResponse extends  AbstractModel {
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
 * Protocol port template
 * @class
 */
class ServiceTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port ID, such as `eppm-f5n1f8da`.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Protocol port group ID, such as `eppmg-f5n1f8da`.
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * The information of a set of correlated packing quotas
 * @class
 */
class PackingQuotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Packing quota
         * @type {number || null}
         */
        this.PackingQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.PackingQuota = 'PackingQuota' in params ? params.PackingQuota : null;

    }
}

/**
 * Image information
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Image status
         * @type {string || null}
         */
        this.ImageState = null;

        /**
         * Image type
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * OS name
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * Image description
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Image import time
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * Number of bits of the OS
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * OS type
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * OS version
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * OS platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Image owner
         * @type {number || null}
         */
        this.ImageOwner = null;

        /**
         * Image size in GB
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * Image source information
         * @type {SrcImage || null}
         */
        this.SrcImage = null;

        /**
         * Image source type
         * @type {string || null}
         */
        this.ImageSource = null;

        /**
         * ID of the task in intermediate or failed status
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Whether cloud-init is supported
         * @type {boolean || null}
         */
        this.IsSupportCloudInit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageOwner = 'ImageOwner' in params ? params.ImageOwner : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;

        if (params.SrcImage) {
            let obj = new SrcImage();
            obj.deserialize(params.SrcImage)
            this.SrcImage = obj;
        }
        this.ImageSource = 'ImageSource' in params ? params.ImageSource : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.IsSupportCloudInit = 'IsSupportCloudInit' in params ? params.IsSupportCloudInit : null;

    }
}

/**
 * DetachNetworkInterface request structure.
 * @class
 */
class DetachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Instance ID, such as `ein-hcs7jkg4`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ModifyTargetWeight request structure.
 * @class
 */
class ModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers for which to modify the weights
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * New forwarding weight of the real server. Value range: 0-100. Default value: 10. This parameter will not take effect if the `Targets.Weight` parameter is set.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeRouteConflicts request structure.
 * @class
 */
class DescribeRouteConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * List of conflicting destination ports to be checked.
         * @type {Array.<string> || null}
         */
        this.DestinationCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlocks = 'DestinationCidrBlocks' in params ? params.DestinationCidrBlocks : null;

    }
}

/**
 * Subnet object
 * @class
 */
class Subnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet instance ID, such as `subnet-bthucmmy`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Subnet name.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * IPv4 CIDR block of the subnet.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Whether it is the default subnet.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Whether to enable broadcast.
         * @type {boolean || null}
         */
        this.EnableBroadcast = null;

        /**
         * Route table instance ID, such as `rtb-l2h8d7c2`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Number of available IPs.
         * @type {number || null}
         */
        this.AvailableIpAddressCount = null;

        /**
         * IPv6 CIDR block of the subnet.
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * Associated ACLID
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * Whether it is an SNAT address pool subnet.
         * @type {boolean || null}
         */
        this.IsRemoteVpcSnat = null;

        /**
         * Tag key-value pairs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Number of instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * IPv4 CIDR block of the VPC.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * IPv6 CIDR block of the VPC.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcIpv6CidrBlock = null;

        /**
         * Region
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.IsRemoteVpcSnat = 'IsRemoteVpcSnat' in params ? params.IsRemoteVpcSnat : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcIpv6CidrBlock = 'VpcIpv6CidrBlock' in params ? params.VpcIpv6CidrBlock : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * AttachNetworkInterface request structure.
 * @class
 */
class AttachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Instance ID, such as `ein-r8hr2upy`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ResetInstancesPassword response structure.
 * @class
 */
class ResetInstancesPasswordResponse extends  AbstractModel {
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
 * Security group object
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-ohuuioma`.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name, which can be customized with up to 60 characters.
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks, which can contain up to 100 characters.
         * @type {string || null}
         */
        this.SecurityGroupDesc = null;

        /**
         * Whether it is the default security group (which cannot be deleted).
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Security group creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Tag key-value pairs.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * ModifyModuleDisableWanIp request structure.
 * @class
 */
class ModifyModuleDisableWanIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Whether to prohibit public IP assignment. Valid values: true: no; false: yes.
         * @type {boolean || null}
         */
        this.DisableWanIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DisableWanIp = 'DisableWanIp' in params ? params.DisableWanIp : null;

    }
}

/**
 * DescribeInstanceVncUrl response structure.
 * @class
 */
class DescribeInstanceVncUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance VNC URL.
         * @type {string || null}
         */
        this.InstanceVncUrl = null;

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
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateAddress response structure.
 * @class
 */
class DisassociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID (TaskId). You can use the `DescribeTaskResult` API to query the task status.
         * @type {string || null}
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
 * DescribeInstanceTypeConfig request structure.
 * @class
 */
class DescribeInstanceTypeConfigRequest extends  AbstractModel {
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
 * DeleteRoutes request structure.
 * @class
 */
class DeleteRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique route table ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress request structure.
 * @class
 */
class AssociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Unique EIP ID, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * ID of the instance to be bound.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of the ENI to be bound, such as `eni-11112222`. `NetworkInterfaceId` and `InstanceId` cannot be specified at the same time. The ENI ID can be obtained from the `networkInterfaceId` field in the returned value of the `DescribeNetworkInterfaces` API.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Private IP to be bound. If you specify `NetworkInterfaceId`, you must also specify `PrivateIpAddress`, which means to bind the EIP to the specified private IP of the specified ENI. You must also make sure that the specified `PrivateIpAddress` is a private IP of the specified `NetworkInterfaceId`. The private IP of the specified ENI can be obtained from the `privateIpAddress` field in the returned value of the `DescribeNetworkInterfaces` API.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * DescribePeakNetworkOverview response structure.
 * @class
 */
class DescribePeakNetworkOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of network peaks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PeakNetworkRegionInfo> || null}
         */
        this.PeakNetworkRegionSet = null;

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

        if (params.PeakNetworkRegionSet) {
            this.PeakNetworkRegionSet = new Array();
            for (let z in params.PeakNetworkRegionSet) {
                let obj = new PeakNetworkRegionInfo();
                obj.deserialize(params.PeakNetworkRegionSet[z]);
                this.PeakNetworkRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalanceTaskStatus response structure.
 * @class
 */
class DescribeLoadBalanceTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current task status. 0: succeeded; 1: failed; 2: in progress.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Disk information
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk type: LOCAL_BASIC.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Disk ID
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * Key-Value pair filter for conditional filtering queries.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * One or more filter values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Filter name.
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeSnapshots response structure.
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of snapshots.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of snapshot details.
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

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

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHaVip request structure.
 * @class
 */
class CreateHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID of the HAVIP.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the HAVIP.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * HAVIP name.
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * The specified virtual IP address, which must be within the IP range of the VPC and not in use. It will be automatically assigned if not specified.
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DescribeAddressQuota response structure.
 * @class
 */
class DescribeAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota information of EIPs in the account.
         * @type {Array.<EipQuota> || null}
         */
        this.QuotaSet = null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new EipQuota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance information of the zone
 * @class
 */
class ZoneInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DeleteLoadBalancer response structure.
 * @class
 */
class DeleteLoadBalancerResponse extends  AbstractModel {
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
 * DeleteSecurityGroup request structure.
 * @class
 */
class DeleteSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID, such as `esg-33ocnj9n`, which can be obtained through the `DescribeSecurityGroups` API.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * CreateRouteTable response structure.
 * @class
 */
class CreateRouteTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table object
         * @type {RouteTable || null}
         */
        this.RouteTable = null;

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

        if (params.RouteTable) {
            let obj = new RouteTable();
            obj.deserialize(params.RouteTable)
            this.RouteTable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateIpAddressesAttribute request structure.
 * @class
 */
class ModifyPrivateIpAddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * Information of the specified private IP addresses.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Region information of the ECM node, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * CreateSecurityGroup request structure.
 * @class
 */
class CreateSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group name, which can be customized with up to 60 characters.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Security group remarks, which can contain up to 100 characters.
         * @type {string || null}
         */
        this.GroupDescription = null;

        /**
         * List of bound tags, such as [{"Key": "city", "Value": "shanghai"}].
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeSecurityGroupLimits request structure.
 * @class
 */
class DescribeSecurityGroupLimitsRequest extends  AbstractModel {
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
 * Private IP information of the instance.
 * @class
 */
class PrivateIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIPAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIPAddress = 'PrivateIPAddress' in params ? params.PrivateIPAddress : null;

    }
}

/**
 * DisassociateInstancesKeyPairs response structure.
 * @class
 */
class DisassociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * TerminateInstances request structure.
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the instances to be terminated.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * Whether to enable scheduled termination. Default value: no.
         * @type {boolean || null}
         */
        this.TerminateDelay = null;

        /**
         * Scheduled termination time, such as `2019-08-05 12:01:30`. If you don't enable scheduled termination, you can ignore this parameter.
         * @type {string || null}
         */
        this.TerminateTime = null;

        /**
         * Whether to delete the bound ENI and EIP. Default value: true.
true: the ENI and EIP will also be deleted;
false: only the server will be terminated, while the ENI and EIP will be retained.
         * @type {boolean || null}
         */
        this.AssociatedResourceDestroy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.TerminateDelay = 'TerminateDelay' in params ? params.TerminateDelay : null;
        this.TerminateTime = 'TerminateTime' in params ? params.TerminateTime : null;
        this.AssociatedResourceDestroy = 'AssociatedResourceDestroy' in params ? params.AssociatedResourceDestroy : null;

    }
}

/**
 * DeleteNetworkInterface response structure.
 * @class
 */
class DeleteNetworkInterfaceResponse extends  AbstractModel {
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
 * DescribePeakNetworkOverview request structure.
 * @class
 */
class DescribePeakNetworkOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (xxxx-xx-xx), such as `2019-08-14`. It is 7 days ago by default and should not be more than 30 days ago.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (xxxx-xx-xx), such as `2019-08-14`. It is yesterday by default and should not be more than 30 days ago. When the time period between the start time and end time is within 1 day, data at the 1-minute granularity will be returned; when the time period is within 7 days, data at the 5-minute granularity will be returned; otherwise, data at the 1-hour granularity will be returned.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter.

region    String      Required: no     (Filter) Filter by region. Fuzzy match is not supported. Note: you need to enter the ECM region to be queried before data can be returned.
area       String      Required: no     (Filter) Filter by region. Fuzzy match is not supported. Regions include `china-central`, `china-east`, etc. You can call `DescribeNode` to get the information of all regions. You can also use `ALL_REGION` to indicate all regions.
isp         String      Required: no     (Filter) Filter region traffic by ISP. ISPs include CTCC, CUCC, and CMCC. This parameter must be used together with `area`, and you can specify only one ISP at a time.

You can specify either `region` or `area`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Statistical period in seconds. Valid values: 60, 300.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * EnableRoutes request structure.
 * @class
 */
class EnableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique route table ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy ID.
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * Operation (action)
 * @class
 */
class OperatorAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Executable operation
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Code
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Specific information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * PeakFamilyInfo: peak information of data such as CPU by model type
 * @class
 */
class PeakFamilyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model type information.
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamily = null;

        /**
         * Peak information of basic data.
         * @type {Array.<PeakBase> || null}
         */
        this.PeakBaseSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamily) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamily)
            this.InstanceFamily = obj;
        }

        if (params.PeakBaseSet) {
            this.PeakBaseSet = new Array();
            for (let z in params.PeakBaseSet) {
                let obj = new PeakBase();
                obj.deserialize(params.PeakBaseSet[z]);
                this.PeakBaseSet.push(obj);
            }
        }

    }
}

/**
 * DescribePeakBaseOverview response structure.
 * @class
 */
class DescribePeakBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of basic peaks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PeakFamilyInfo> || null}
         */
        this.PeakFamilyInfoSet = null;

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

        if (params.PeakFamilyInfoSet) {
            this.PeakFamilyInfoSet = new Array();
            for (let z in params.PeakFamilyInfoSet) {
                let obj = new PeakFamilyInfo();
                obj.deserialize(params.PeakFamilyInfoSet[z]);
                this.PeakFamilyInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImage response structure.
 * @class
 */
class DescribeImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of images
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image array
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Image> || null}
         */
        this.ImageSet = null;

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

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Listener backend
 * @class
 */
class ListenerBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * List of real servers bound to the CLB instance
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Backend> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Backend();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * Region and region name (RegionName)
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * RegionID
         * @type {number || null}
         */
        this.RegionId = null;

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

    }
}

/**
 * A set of correlated packing quotas sorted by instance type priority
 * @class
 */
class PackingQuotaGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ISP id
         * @type {string || null}
         */
        this.ISPId = null;

        /**
         * A set of correlated packing quotas
         * @type {Array.<PackingQuotaInfo> || null}
         */
        this.PackingQuotaInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ISPId = 'ISPId' in params ? params.ISPId : null;

        if (params.PackingQuotaInfos) {
            this.PackingQuotaInfos = new Array();
            for (let z in params.PackingQuotaInfos) {
                let obj = new PackingQuotaInfo();
                obj.deserialize(params.PackingQuotaInfos[z]);
                this.PackingQuotaInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeNetworkInterfaces response structure.
 * @class
 */
class DescribeNetworkInterfacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NetworkInterface> || null}
         */
        this.NetworkInterfaceSet = null;

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

        if (params.NetworkInterfaceSet) {
            this.NetworkInterfaceSet = new Array();
            for (let z in params.NetworkInterfaceSet) {
                let obj = new NetworkInterface();
                obj.deserialize(params.NetworkInterfaceSet[z]);
                this.NetworkInterfaceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableRoutes response structure.
 * @class
 */
class EnableRoutesResponse extends  AbstractModel {
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
 * AssignPrivateIpAddresses request structure.
 * @class
 */
class AssignPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance ID, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM region, such as `ap-xian-ecm`.
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Information of the specified private IPs. You can specify up to 10 IPs at a time. You must provide either this parameter or `SecondaryPrivateIpAddressCount`, or both.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Number of private IP addresses applied for. You must provide either this parameter or `PrivateIpAddresses`, or both. The total number of private IP addresses cannot exceed the quota.
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;

    }
}

/**
 * CreateVpc request structure.
 * @class
 */
class CreateVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC name, which can contain up to 60 bytes.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC CIDR block, which must fall within the following private network IP ranges: 10.*.0.0/16, 172.[16-31].0.0/16, and 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * ECM region
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * Whether multicast is enabled. true: enabled; false: disabled. This parameter is not supported currently
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS address (not supported currently). Up to 4 addresses can be supported.
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * Domain name. This parameter is not supported currently
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * List of bound tags, such as [{"Key": "city", "Value": "shanghai"}].
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics request structure.
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security instance ID, such as `esg-33ocnj9n`, which can be obtained through [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/product/1108/47697?from_cn_redirect=1).
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * Country/Region information
 * @class
 */
class Country extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country/Region ID
         * @type {string || null}
         */
        this.CountryId = null;

        /**
         * Country/Region name
         * @type {string || null}
         */
        this.CountryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * Routing policy
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination IPv4 IP range
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * Next hop type
NORMAL_CVM: general CVM;
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * Next hop address
You simply need to specify the gateway ID of a different next hop type, and the system will automatically match the next hop address
When `GatewayType` is `EIP`, the value of `GatewayId` will be fixed at `0`
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * Unique routing policy ID
         * @type {string || null}
         */
        this.RouteItemId = null;

        /**
         * Routing policy description
         * @type {string || null}
         */
        this.RouteDescription = null;

        /**
         * Whether to enable
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Route type. Valid values:
USER: user route;
NETD: network probe route, which will be delivered by the system by default when you create a network probe instance and cannot be edited or deleted;
CCN: CCN route, which will be delivered by the system by default and cannot be edited or deleted.
You can only add and manipulate routes of `USER` type.
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * Routing policy ID. The IPv4 routing policy will have a meaningful value, while the IPv6 routing policy is always 0. We recommend you use the unique ID `RouteItemId` for the routing policy
         * @type {number || null}
         */
        this.RouteId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteItemId = 'RouteItemId' in params ? params.RouteItemId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;

    }
}

/**
 * DescribeListeners request structure.
 * @class
 */
class DescribeListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of IDs of the CLB listeners to be queried
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Protocol type of the listener to be queried. Valid values: TCP, UDP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port of the listener to be queried
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DeleteVpc response structure.
 * @class
 */
class DeleteVpcResponse extends  AbstractModel {
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
 * ModifyModuleImage request structure.
 * @class
 */
class ModifyModuleImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default image ID
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * Module ID
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * DescribeLoadBalancers response structure.
 * @class
 */
class DescribeLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of eligible CLB instances. This value is independent of the `Limit` in the input parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of returned CLB instances.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancerSet = null;

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

        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Executable operations for the instance
 * @class
 */
class InstanceOperator extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prohibited operations for the instance
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OperatorAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new OperatorAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * DescribeBaseOverview response structure.
 * @class
 */
class DescribeBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of modules
         * @type {number || null}
         */
        this.ModuleNum = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.VcpuNum = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.MemoryNum = null;

        /**
         * Disk size in GB
         * @type {number || null}
         */
        this.StorageNum = null;

        /**
         * Yesterday's network peak in Mbps
         * @type {number || null}
         */
        this.NetworkNum = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * Number of running instances
         * @type {number || null}
         */
        this.RunningNum = null;

        /**
         * Number of isolated instances
         * @type {number || null}
         */
        this.IsolationNum = null;

        /**
         * Number of expired instances
         * @type {number || null}
         */
        this.ExpiredNum = null;

        /**
         * Number of instances about to expire
         * @type {number || null}
         */
        this.WillExpireNum = null;

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
        this.ModuleNum = 'ModuleNum' in params ? params.ModuleNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.VcpuNum = 'VcpuNum' in params ? params.VcpuNum : null;
        this.MemoryNum = 'MemoryNum' in params ? params.MemoryNum : null;
        this.StorageNum = 'StorageNum' in params ? params.StorageNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.RunningNum = 'RunningNum' in params ? params.RunningNum : null;
        this.IsolationNum = 'IsolationNum' in params ? params.IsolationNum : null;
        this.ExpiredNum = 'ExpiredNum' in params ? params.ExpiredNum : null;
        this.WillExpireNum = 'WillExpireNum' in params ? params.WillExpireNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP address information structure.
 * @class
 */
class AddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public IP information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PublicIPAddressInfo || null}
         */
        this.PublicIPAddressInfo = null;

        /**
         * Private IP information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PrivateIPAddressInfo || null}
         */
        this.PrivateIPAddressInfo = null;

        /**
         * Public IPv6 information of the instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PublicIPAddressInfo || null}
         */
        this.PublicIPv6AddressInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PublicIPAddressInfo) {
            let obj = new PublicIPAddressInfo();
            obj.deserialize(params.PublicIPAddressInfo)
            this.PublicIPAddressInfo = obj;
        }

        if (params.PrivateIPAddressInfo) {
            let obj = new PrivateIPAddressInfo();
            obj.deserialize(params.PrivateIPAddressInfo)
            this.PrivateIPAddressInfo = obj;
        }

        if (params.PublicIPv6AddressInfo) {
            let obj = new PublicIPAddressInfo();
            obj.deserialize(params.PublicIPv6AddressInfo)
            this.PublicIPv6AddressInfo = obj;
        }

    }
}

module.exports = {
    SecurityGroupLimitSet: SecurityGroupLimitSet,
    CreateRoutesRequest: CreateRoutesRequest,
    DescribeHaVipsResponse: DescribeHaVipsResponse,
    ModifyModuleSecurityGroupsRequest: ModifyModuleSecurityGroupsRequest,
    TerminateInstancesResponse: TerminateInstancesResponse,
    DescribeMonthPeakNetworkResponse: DescribeMonthPeakNetworkResponse,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    InstancePricesPartDetail: InstancePricesPartDetail,
    DescribeMonthPeakNetworkRequest: DescribeMonthPeakNetworkRequest,
    SystemDisk: SystemDisk,
    DescribeNodeResponse: DescribeNodeResponse,
    DescribeModuleRequest: DescribeModuleRequest,
    RebootInstancesRequest: RebootInstancesRequest,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    RemovePrivateIpAddressesRequest: RemovePrivateIpAddressesRequest,
    Tag: Tag,
    DescribeImageRequest: DescribeImageRequest,
    OsVersion: OsVersion,
    DescribeListenersResponse: DescribeListenersResponse,
    StartInstancesResponse: StartInstancesResponse,
    CreateVpcResponse: CreateVpcResponse,
    AssistantCidr: AssistantCidr,
    ModifyModuleIpDirectRequest: ModifyModuleIpDirectRequest,
    InstanceNetworkInfo: InstanceNetworkInfo,
    ResetInstancesMaxBandwidthResponse: ResetInstancesMaxBandwidthResponse,
    NodeInstanceNum: NodeInstanceNum,
    DeleteListenerRequest: DeleteListenerRequest,
    StopInstancesResponse: StopInstancesResponse,
    LoadBalancerInternetAccessible: LoadBalancerInternetAccessible,
    ResetRoutesRequest: ResetRoutesRequest,
    RouteTableAssociation: RouteTableAssociation,
    ModifyDefaultSubnetResponse: ModifyDefaultSubnetResponse,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    StopInstancesRequest: StopInstancesRequest,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    ImageTask: ImageTask,
    ModifyListenerRequest: ModifyListenerRequest,
    CreateImageRequest: CreateImageRequest,
    Instance: Instance,
    Node: Node,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    DescribeVpcsRequest: DescribeVpcsRequest,
    DescribeRouteConflictsResponse: DescribeRouteConflictsResponse,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    ModifyDefaultSubnetRequest: ModifyDefaultSubnetRequest,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    Snapshot: Snapshot,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DeleteRoutesResponse: DeleteRoutesResponse,
    DescribeCustomImageTaskRequest: DescribeCustomImageTaskRequest,
    DescribeSecurityGroupAssociationStatisticsResponse: DescribeSecurityGroupAssociationStatisticsResponse,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    PriceDetail: PriceDetail,
    ImportImageResponse: ImportImageResponse,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    DescribePriceRunInstanceResponse: DescribePriceRunInstanceResponse,
    DeleteImageResponse: DeleteImageResponse,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    NetworkInterface: NetworkInterface,
    KeyPair: KeyPair,
    DescribeVpcsResponse: DescribeVpcsResponse,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    DescribePackingQuotaGroupResponse: DescribePackingQuotaGroupResponse,
    LoadBalancer: LoadBalancer,
    ModifyModuleNameResponse: ModifyModuleNameResponse,
    DescribePeakBaseOverviewRequest: DescribePeakBaseOverviewRequest,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    InstanceStatistic: InstanceStatistic,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    RouteConflict: RouteConflict,
    DeleteSubnetResponse: DeleteSubnetResponse,
    ISP: ISP,
    Address: Address,
    PeakBase: PeakBase,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    DescribeCustomImageTaskResponse: DescribeCustomImageTaskResponse,
    ISPCounter: ISPCounter,
    CreateModuleResponse: CreateModuleResponse,
    DescribePackingQuotaGroupRequest: DescribePackingQuotaGroupRequest,
    SecurityGroupPolicy: SecurityGroupPolicy,
    LoadBalancerHealth: LoadBalancerHealth,
    CreateListenerResponse: CreateListenerResponse,
    DeleteVpcRequest: DeleteVpcRequest,
    CreateSubnetResponse: CreateSubnetResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    NetworkStorageRange: NetworkStorageRange,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    DisassociateAddressRequest: DisassociateAddressRequest,
    ModuleCounter: ModuleCounter,
    TaskInput: TaskInput,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig,
    DescribeDefaultSubnetRequest: DescribeDefaultSubnetRequest,
    RunInstancesResponse: RunInstancesResponse,
    TargetHealth: TargetHealth,
    DescribeSecurityGroupLimitsResponse: DescribeSecurityGroupLimitsResponse,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    SecurityGroupAssociationStatistics: SecurityGroupAssociationStatistics,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    MonthNetwork: MonthNetwork,
    ResetRoutesResponse: ResetRoutesResponse,
    AllocateAddressesResponse: AllocateAddressesResponse,
    CreateImageResponse: CreateImageResponse,
    ModifyModuleNetworkRequest: ModifyModuleNetworkRequest,
    AddressTemplateSpecification: AddressTemplateSpecification,
    AssignIpv6AddressesRequest: AssignIpv6AddressesRequest,
    DescribeModuleDetailResponse: DescribeModuleDetailResponse,
    Backend: Backend,
    ModifyIpv6AddressesAttributeResponse: ModifyIpv6AddressesAttributeResponse,
    ModifyModuleSecurityGroupsResponse: ModifyModuleSecurityGroupsResponse,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    CreateKeyPairResponse: CreateKeyPairResponse,
    DeleteModuleResponse: DeleteModuleResponse,
    DescribeModuleDetailRequest: DescribeModuleDetailRequest,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    ModifyModuleNetworkResponse: ModifyModuleNetworkResponse,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    CreateKeyPairRequest: CreateKeyPairRequest,
    ModifyModuleIpDirectResponse: ModifyModuleIpDirectResponse,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    DescribeAddressesRequest: DescribeAddressesRequest,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    DeleteListenerResponse: DeleteListenerResponse,
    ResetInstancesRequest: ResetInstancesRequest,
    DeleteImageRequest: DeleteImageRequest,
    PeakNetworkRegionInfo: PeakNetworkRegionInfo,
    ModifyHaVipAttributeRequest: ModifyHaVipAttributeRequest,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    InstancesPrice: InstancesPrice,
    ModifyImageAttributeResponse: ModifyImageAttributeResponse,
    SimpleModule: SimpleModule,
    TagInfo: TagInfo,
    ModifyImageAttributeRequest: ModifyImageAttributeRequest,
    InstanceNetworkLimitConfig: InstanceNetworkLimitConfig,
    CreateModuleRequest: CreateModuleRequest,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    Module: Module,
    ListenerHealth: ListenerHealth,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    RunEIPDirectServiceEnabled: RunEIPDirectServiceEnabled,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    Ipv6Address: Ipv6Address,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    DeleteHaVipResponse: DeleteHaVipResponse,
    Province: Province,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    HaVip: HaVip,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    RunInstancesRequest: RunInstancesRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InstanceTypeConfig: InstanceTypeConfig,
    AllocateAddressesRequest: AllocateAddressesRequest,
    ZoneInfo: ZoneInfo,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    ResetInstancesResponse: ResetInstancesResponse,
    DescribeNodeRequest: DescribeNodeRequest,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    ModifyModuleConfigRequest: ModifyModuleConfigRequest,
    Area: Area,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    ReleaseIpv6AddressesRequest: ReleaseIpv6AddressesRequest,
    TaskOutput: TaskOutput,
    PhysicalPosition: PhysicalPosition,
    Listener: Listener,
    StartInstancesRequest: StartInstancesRequest,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    Placement: Placement,
    Target: Target,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    DescribeAddressesResponse: DescribeAddressesResponse,
    ModifyIpv6AddressesAttributeRequest: ModifyIpv6AddressesAttributeRequest,
    DeleteModuleRequest: DeleteModuleRequest,
    DisableRoutesResponse: DisableRoutesResponse,
    DescribeConfigResponse: DescribeConfigResponse,
    DataDisk: DataDisk,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    ModifyModuleDisableWanIpResponse: ModifyModuleDisableWanIpResponse,
    EnhancedService: EnhancedService,
    DescribeLoadBalanceTaskStatusRequest: DescribeLoadBalanceTaskStatusRequest,
    ModifyHaVipAttributeResponse: ModifyHaVipAttributeResponse,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    TagSpecification: TagSpecification,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    DescribeBaseOverviewRequest: DescribeBaseOverviewRequest,
    CreateHaVipResponse: CreateHaVipResponse,
    ImportImageRequest: ImportImageRequest,
    DisableRoutesRequest: DisableRoutesRequest,
    ResetInstancesMaxBandwidthRequest: ResetInstancesMaxBandwidthRequest,
    ModifyModuleNameRequest: ModifyModuleNameRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CreateListenerRequest: CreateListenerRequest,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    CreateRouteTableRequest: CreateRouteTableRequest,
    ModifyModuleConfigResponse: ModifyModuleConfigResponse,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    SrcImage: SrcImage,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    DescribePriceRunInstanceRequest: DescribePriceRunInstanceRequest,
    DescribeTargetsResponse: DescribeTargetsResponse,
    ImageOsList: ImageOsList,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    BatchTarget: BatchTarget,
    City: City,
    PeakNetwork: PeakNetwork,
    RebootInstancesResponse: RebootInstancesResponse,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    DescribeHaVipsRequest: DescribeHaVipsRequest,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    RemovePrivateIpAddressesResponse: RemovePrivateIpAddressesResponse,
    PublicIPAddressInfo: PublicIPAddressInfo,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ModifyModuleImageResponse: ModifyModuleImageResponse,
    DeleteLoadBalancerListenersResponse: DeleteLoadBalancerListenersResponse,
    VpcInfo: VpcInfo,
    ModuleItem: ModuleItem,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    ReleaseIpv6AddressesResponse: ReleaseIpv6AddressesResponse,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    Internet: Internet,
    DescribeModuleResponse: DescribeModuleResponse,
    ImageLimitConfig: ImageLimitConfig,
    EipQuota: EipQuota,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    DescribeDefaultSubnetResponse: DescribeDefaultSubnetResponse,
    DeleteSubnetRequest: DeleteSubnetRequest,
    Position: Position,
    RouteTable: RouteTable,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    DeleteHaVipRequest: DeleteHaVipRequest,
    DeleteLoadBalancerListenersRequest: DeleteLoadBalancerListenersRequest,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    DescribeConfigRequest: DescribeConfigRequest,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    RuleHealth: RuleHealth,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    TargetsWeightRule: TargetsWeightRule,
    ZoneInstanceCountISP: ZoneInstanceCountISP,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    DescribeInstanceTypeConfigResponse: DescribeInstanceTypeConfigResponse,
    HealthCheck: HealthCheck,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    AssignIpv6AddressesResponse: AssignIpv6AddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    InstanceFamilyConfig: InstanceFamilyConfig,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    ServiceTemplateSpecification: ServiceTemplateSpecification,
    PackingQuotaInfo: PackingQuotaInfo,
    Image: Image,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    DescribeRouteConflictsRequest: DescribeRouteConflictsRequest,
    Subnet: Subnet,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    SecurityGroup: SecurityGroup,
    ModifyModuleDisableWanIpRequest: ModifyModuleDisableWanIpRequest,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DescribeInstanceTypeConfigRequest: DescribeInstanceTypeConfigRequest,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    DescribePeakNetworkOverviewResponse: DescribePeakNetworkOverviewResponse,
    DescribeLoadBalanceTaskStatusResponse: DescribeLoadBalanceTaskStatusResponse,
    DiskInfo: DiskInfo,
    Filter: Filter,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    CreateHaVipRequest: CreateHaVipRequest,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    ZoneInstanceInfo: ZoneInstanceInfo,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    CreateRouteTableResponse: CreateRouteTableResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    DescribeSecurityGroupLimitsRequest: DescribeSecurityGroupLimitsRequest,
    PrivateIPAddressInfo: PrivateIPAddressInfo,
    DisassociateInstancesKeyPairsResponse: DisassociateInstancesKeyPairsResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    DescribePeakNetworkOverviewRequest: DescribePeakNetworkOverviewRequest,
    EnableRoutesRequest: EnableRoutesRequest,
    OperatorAction: OperatorAction,
    PeakFamilyInfo: PeakFamilyInfo,
    DescribePeakBaseOverviewResponse: DescribePeakBaseOverviewResponse,
    DescribeImageResponse: DescribeImageResponse,
    ListenerBackend: ListenerBackend,
    RegionInfo: RegionInfo,
    PackingQuotaGroup: PackingQuotaGroup,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    EnableRoutesResponse: EnableRoutesResponse,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    CreateVpcRequest: CreateVpcRequest,
    DescribeSecurityGroupAssociationStatisticsRequest: DescribeSecurityGroupAssociationStatisticsRequest,
    Country: Country,
    Route: Route,
    DescribeListenersRequest: DescribeListenersRequest,
    DeleteVpcResponse: DeleteVpcResponse,
    ModifyModuleImageRequest: ModifyModuleImageRequest,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    InstanceOperator: InstanceOperator,
    DescribeBaseOverviewResponse: DescribeBaseOverviewResponse,
    AddressInfo: AddressInfo,

}
