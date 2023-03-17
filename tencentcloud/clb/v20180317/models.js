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
 * DeleteRewrite request structure.
 * @class
 */
class DeleteRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Source listener ID
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * Target listener ID
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * Redirection relationship between forwarding rules
         * @type {Array.<RewriteLocationMap> || null}
         */
        this.RewriteInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerId = 'SourceListenerId' in params ? params.SourceListenerId : null;
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;

        if (params.RewriteInfos) {
            this.RewriteInfos = new Array();
            for (let z in params.RewriteInfos) {
                let obj = new RewriteLocationMap();
                obj.deserialize(params.RewriteInfos[z]);
                this.RewriteInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeTargetGroupList response structure.
 * @class
 */
class DescribeTargetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of displayed results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information set of displayed target groups
         * @type {Array.<TargetGroupInfo> || null}
         */
        this.TargetGroupSet = null;

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

        if (params.TargetGroupSet) {
            this.TargetGroupSet = new Array();
            for (let z in params.TargetGroupSet) {
                let obj = new TargetGroupInfo();
                obj.deserialize(params.TargetGroupSet[z]);
                this.TargetGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuota request structure.
 * @class
 */
class DescribeQuotaRequest extends  AbstractModel {
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
 * DescribeTargetGroupList request structure.
 * @class
 */
class DescribeTargetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID array
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * Filter array, which is exclusive of `TargetGroupIds`. Valid values: `TargetGroupVpcId` and `TargetGroupName`. Target group ID will be used first.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Starting display offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit of the number of displayed results. Default value: 20.
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
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

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
 * BatchDeregisterTargets response structure.
 * @class
 */
class BatchDeregisterTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the listeners failed to unbind
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
 * Object bound to the layer-7 listener rule
 * @class
 */
class RulesItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Uri
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Object bound to the real server.
         * @type {Array.<LbRsTargets> || null}
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new LbRsTargets();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * Reserved field which can be ignored generally.
 * @class
 */
class ExtraInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable VIP direct connection
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ZhiTong = null;

        /**
         * TgwGroup name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TgwGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZhiTong = 'ZhiTong' in params ? params.ZhiTong : null;
        this.TgwGroupName = 'TgwGroupName' in params ? params.TgwGroupName : null;

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
 * SetSecurityGroupForLoadbalancers request structure.
 * @class
 */
class SetSecurityGroupForLoadbalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group ID, such as sg-12345678
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * ADD: bind a security group;
DEL: unbind a security group
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * Array of CLB instance IDs
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
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

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
         * CLB instance network type:
OPEN: public network; INTERNAL: private network.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB instance type. Valid value: 1 (generic CLB instance).
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * CLB instance name, which takes effect only when only one instance is to be created in the request. It can consist 1 to 60 letters, digits, hyphens (-), or underscores (_).
Note: if the name of the new CLB instance already exists, a default name will be generated automatically.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network ID of the target device on the CLB backend, such as `vpc-12345678`, which can be obtained through the `DescribeVpcEx` API. If this parameter is not entered, `DefaultVPC` is used by default. This parameter is required when creating a private network instance.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * A subnet ID must be specified when you purchase a private network CLB instance in a VPC, and the VIP of this instance will be generated in this subnet. This parameter is required for creating a CLB instance.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ID of the project to which a CLB instance belongs, which can be obtained through the `DescribeProject` API. If this parameter is not entered, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP version. Valid values: `IPV4` (default), `IPV6` (IPV6 NAT64 version) or `IPv6FullChain` (IPv6 version). This parameter is only for public network CLB instances.
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * Number of CLBs to be created. Default value: 1.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Sets the primary AZ ID for cross-AZ disaster recovery, such as `100001` or `ap-guangzhou-1`, which is applicable only to public network CLB.
Note: By default, the traffic goes to the primary AZ. The secondary AZs only carry traffic when the primary AZ is unavailable. The optimal secondary AZ is chosen automatically. You can query the primary and secondary AZ of a region by calling [DescribeResources](https://intl.cloud.tencent.com/document/api/214/70213?from_cn_redirect=1).
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * Specifies an AZ ID for creating a CLB instance, such as `ap-guangzhou-1`, which is applicable only to public network CLB instances.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB network billing mode. This parameter is applicable only to public network CLB instances.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * This parameter is applicable only to public network CLB instances. Valid values: CMCC (China Mobile), CTCC (China Telecom), CUCC (China Unicom). If this parameter is not specified, BGP will be used by default. ISPs supported in a region can be queried with the `DescribeSingleIsp` API. If an ISP is specified, only bill-by-bandwidth-package (BANDWIDTH_PACKAGE) can be used as the network billing mode.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Tags the CLB instance when purchasing it. Up to 20 tag key value pairs are supported.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Specifies the VIP for the application of a CLB instance. This parameter is optional. If you do not specify this parameter, the system automatically assigns a value for the parameter. IPv4 and IPv6 CLB instances support this parameter, but IPv6 NAT64 CLB instances do not.
Note: If the specified VIP is occupied or is not within the IP range of the specified VPC subnet, you cannot use the VIP to create a CLB instance in a private network or an IPv6 BGP CLB instance in a public network.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Bandwidth package ID. If this parameter is specified, the network billing mode (`InternetAccessible.InternetChargeType`) will only support bill-by-bandwidth package (`BANDWIDTH_PACKAGE`).
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * Information about the dedicated CLB instance. You must specify this parameter when you create a dedicated CLB instance in a private network.
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * Creates an LCU-supported instance.
<ul><li>To create an LCU-supported instance, set this parameter to `SLA`, which indicates that an LCU-supported instance is created with the default specification in pay-as-you-go mode.
<ul><li>If you enable general LCU-supported instances, `SLA` corresponds to the Super Large 1 specification. General LCU-supported instances are in beta testing, [submit a ticket](https://intl.cloud.tencent.com/apply/p/hf45esx99lf?from_cn_redirect=1) for application.</li>
<li>If you enable ultra-large LCU-supported instances, `SLA` corresponds to the Super Large 4 specification. Ultra-large LCU-supported instances are in beta testing, [submit a ticket](https://console.cloud.tencent.com/workorder/category) for application.</li></ul></li><li>This parameter is not required when you create a shared instance.</li></ul>
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether Binding IPs of other VPCs feature switch
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * Creates `SnatIp` when the binding IPs of other VPCs feature is enabled
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Tag for the STGW exclusive cluster.
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * Specifies the secondary AZ ID for cross-AZ disaster recovery, such as `100001` or `ap-guangzhou-1`. It is applicable only to public network CLB.
Note: The traffic only goes to the secondary AZ when the primary AZ is unavailable. You can query the list of primary and secondary AZ of a region by calling [DescribeResources](https://intl.cloud.tencent.com/document/api/214/70213?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * Unique ID of an EIP, which can only be used when binding the EIP of a private network CLB instance. E.g., `eip-11112222`.
         * @type {string || null}
         */
        this.EipAddressId = null;

        /**
         * Whether to allow CLB traffic to the target group. `true`: allows CLB traffic to the target group and verifies security groups only on CLB; `false`: denies CLB traffic to the target group and verifies security groups on both CLB and backend instances.
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
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.MasterZoneId = 'MasterZoneId' in params ? params.MasterZoneId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.SlaveZoneId = 'SlaveZoneId' in params ? params.SlaveZoneId : null;
        this.EipAddressId = 'EipAddressId' in params ? params.EipAddressId : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * DescribeLoadBalancerOverview response structure.
 * @class
 */
class DescribeLoadBalancerOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of CLB instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Number of CLB instances that are running
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * Number of CLB instances that are isolated
         * @type {number || null}
         */
        this.IsolationCount = null;

        /**
         * Number of CLB instances that are about to expire
         * @type {number || null}
         */
        this.WillExpireCount = null;

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
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.IsolationCount = 'IsolationCount' in params ? params.IsolationCount : null;
        this.WillExpireCount = 'WillExpireCount' in params ? params.WillExpireCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRule request structure.
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
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
         * Array of IDs of the forwarding rules to be deleted
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

        /**
         * The domain name associated with the forwarding rule to delete. If the rule is associated with multiple domain names, specify any one of them.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The forwarding path of the forwarding rule to delete.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Specifies a new default domain name for the listener. This field is used when the original default domain name is disabled. If there are multiple domain names, specify one of them.
         * @type {string || null}
         */
        this.NewDefaultServerDomain = null;

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
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.NewDefaultServerDomain = 'NewDefaultServerDomain' in params ? params.NewDefaultServerDomain : null;

    }
}

/**
 * CloneLoadBalancer request structure.
 * @class
 */
class CloneLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Clones the name of the CLB instance. The name must be 1-60 characters containing letters, numbers, "-" or "_".
Note: if the name of a new CLB instance already exists, a default name will be generated automatically.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * ID of the project to which a CLB instance belongs, which can be obtained through the `DescribeProject` API. If this parameter is not passed in, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Sets the primary AZ ID for cross-AZ disaster recovery, such as `100001` or `ap-guangzhou-1`, which is applicable only to public network CLB.
Note: A primary AZ loads traffic, while a secondary AZ does not load traffic by default and will be used only if the primary AZ becomes unavailable. The platform will automatically select the optimal secondary AZ. You can use the `DescribeResource` API to query the primary AZ list of a region.
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * Specifies the secondary AZ ID for cross-AZ disaster recovery, such as `100001` or `ap-guangzhou-1`. It is applicable only to public network CLB.
Note: A secondary AZ will load traffic if the primary AZ is faulty. You can use the `DescribeMasterZones` API to query the primary and secondary AZ list of a region.
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * Specifies an AZ ID for creating a CLB instance, such as `ap-guangzhou-1`, which is applicable only to public network CLB instances.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB network billing mode. This parameter is applicable only to public network CLB instances.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * This parameter is applicable only to public network CLB instances. Valid values: CMCC (China Mobile), CTCC (China Telecom), CUCC (China Unicom). If this parameter is not specified, BGP will be used by default. ISPs supported in a region can be queried with the `DescribeSingleIsp` API. If an ISP is specified, only bill-by-bandwidth-package (BANDWIDTH_PACKAGE) can be used as the network billing mode.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Applies for CLB instances for a specified VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Tags a CLB instance when purchasing it
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Dedicated cluster information
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * Bandwidth package ID. If this parameter is specified, the network billing mode (`InternetAccessible.InternetChargeType`) will only support bill-by-bandwidth package (`BANDWIDTH_PACKAGE`).
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * Whether to support binding cross-VPC IPs or cross-region IPs
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * Creates `SnatIp` when the binding IPs of other VPCs feature is enabled
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * ID of the public network CLB dedicated cluster
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Specification of the LCU-supported instance.
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * Tag of the STGW dedicated cluster
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * Availability zones for nearby access of private network CLB instances to distribute traffic
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Unique ID of an EIP, which can only be used when binding the EIP of a private network CLB instance (e.g., `eip-11112222`)
         * @type {string || null}
         */
        this.EipAddressId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MasterZoneId = 'MasterZoneId' in params ? params.MasterZoneId : null;
        this.SlaveZoneId = 'SlaveZoneId' in params ? params.SlaveZoneId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.EipAddressId = 'EipAddressId' in params ? params.EipAddressId : null;

    }
}

/**
 * DisassociateTargetGroups response structure.
 * @class
 */
class DisassociateTargetGroupsResponse extends  AbstractModel {
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
 * SetLoadBalancerClsLog response structure.
 * @class
 */
class SetLoadBalancerClsLogResponse extends  AbstractModel {
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
 * DescribeLoadBalancerTraffic response structure.
 * @class
 */
class DescribeLoadBalancerTrafficResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of CLB instances sorted by outbound bandwidth from highest to lowest
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<LoadBalancerTraffic> || null}
         */
        this.LoadBalancerTraffic = null;

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

        if (params.LoadBalancerTraffic) {
            this.LoadBalancerTraffic = new Array();
            for (let z in params.LoadBalancerTraffic) {
                let obj = new LoadBalancerTraffic();
                obj.deserialize(params.LoadBalancerTraffic[z]);
                this.LoadBalancerTraffic.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of multiple certificates bound with the load balancer listener or rule.
 * @class
 */
class MultiCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authentication type. Values: `UNIDIRECTIONAL` (one-way authentication), `MUTUAL` (two-way authentication)
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * List of listener or rule certificates. One-way and two-way authentication are supported. Only one certificate can be specified for one algorithm. If `SSLMode` is `MUTUAL` (two-way authentication), at least one CA certificate is required. 
         * @type {Array.<CertInfo> || null}
         */
        this.CertList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;

        if (params.CertList) {
            this.CertList = new Array();
            for (let z in params.CertList) {
                let obj = new CertInfo();
                obj.deserialize(params.CertList[z]);
                this.CertList.push(obj);
            }
        }

    }
}

/**
 * ModifyRule request structure.
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
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
         * ID of the forwarding rule to be modified.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * New forwarding path of the forwarding rule. This parameter is not required if the URL does not need to be modified.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Health check information
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Request forwarding method of the rule. Value range: WRR, LEAST_CONN, IP_HASH
They represent weighted round robin, least connections, and IP hash, respectively. Default value: WRR.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Session persistence time
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Forwarding protocol between CLB instance and real server. Default value: HTTP. Valid values: HTTP, HTTPS, and TRPC.
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * TRPC callee server route, which is required when `ForwardType` is "TRPC".
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC calling service API, which is required when `ForwardType` is "TRPC".
         * @type {string || null}
         */
        this.TrpcFunc = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;

    }
}

/**
 * DescribeCustomizedConfigList response structure.
 * @class
 */
class DescribeCustomizedConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration list.
         * @type {Array.<ConfigListItem> || null}
         */
        this.ConfigList = null;

        /**
         * Number of configurations.
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ConfigListItem();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBlockIPList response structure.
 * @class
 */
class DescribeBlockIPListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned IPs
         * @type {number || null}
         */
        this.BlockedIPCount = null;

        /**
         * Field for getting real client IP
         * @type {string || null}
         */
        this.ClientIPField = null;

        /**
         * List of IPs added to blocklist 12360
         * @type {Array.<BlockedIP> || null}
         */
        this.BlockedIPList = null;

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
        this.BlockedIPCount = 'BlockedIPCount' in params ? params.BlockedIPCount : null;
        this.ClientIPField = 'ClientIPField' in params ? params.ClientIPField : null;

        if (params.BlockedIPList) {
            this.BlockedIPList = new Array();
            for (let z in params.BlockedIPList) {
                let obj = new BlockedIP();
                obj.deserialize(params.BlockedIPList[z]);
                this.BlockedIPList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRewrite request structure.
 * @class
 */
class DescribeRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of CLB listener IDs
         * @type {Array.<string> || null}
         */
        this.SourceListenerIds = null;

        /**
         * Array of CLB forwarding rule IDs
         * @type {Array.<string> || null}
         */
        this.SourceLocationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerIds = 'SourceListenerIds' in params ? params.SourceListenerIds : null;
        this.SourceLocationIds = 'SourceLocationIds' in params ? params.SourceLocationIds : null;

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
         * This parameter can be used to query whether CLB billing mode switch is successful.
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeTargetGroupInstances request structure.
 * @class
 */
class DescribeTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter. Currently, only filtering by `TargetGroupId`, `BindIP`, or `InstanceId` is supported.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of displayed results. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Display offset. Default value: 0
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

    }
}

/**
 * DescribeIdleLoadBalancers response structure.
 * @class
 */
class DescribeIdleLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of idle CLBs
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<IdleLoadBalancer> || null}
         */
        this.IdleLoadBalancers = null;

        /**
         * Total number of idle CLB instances
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

        if (params.IdleLoadBalancers) {
            this.IdleLoadBalancers = new Array();
            for (let z in params.IdleLoadBalancers) {
                let obj = new IdleLoadBalancer();
                obj.deserialize(params.IdleLoadBalancers[z]);
                this.IdleLoadBalancers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateTargetGroups request structure.
 * @class
 */
class AssociateTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Association array
         * @type {Array.<TargetGroupAssociation> || null}
         */
        this.Associations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Associations) {
            this.Associations = new Array();
            for (let z in params.Associations) {
                let obj = new TargetGroupAssociation();
                obj.deserialize(params.Associations[z]);
                this.Associations.push(obj);
            }
        }

    }
}

/**
 * Real server information of a classic CLB
 * @class
 */
class ClassicalTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server type. Value range: CVM, ENI (coming soon)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Unique ID of a real server, which can be obtained from the unInstanceId field in the return of the DescribeInstances API
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Forwarding weight of a real server. Value range: [0, 100]. Default value: 10.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Public IP of a real server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Private IP of a real server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Real server instance names
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Real server status
1: failed; 2: running; 3: creating; 4: shut down; 5: returned; 6: returning; 7: restarting; 8: starting; 9: shutting down; 10: resetting password; 11: formatting; 12: making image; 13: setting bandwidth; 14: reinstalling system; 19: upgrading; 21: hot migrating
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RunFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RunFlag = 'RunFlag' in params ? params.RunFlag : null;

    }
}

/**
 * Querying the listener type
 * @class
 */
class ListenerItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Bound rule.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RulesItems> || null}
         */
        this.Rules = null;

        /**
         * Object bound to the layer-4 listener.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<LbRsTargets> || null}
         */
        this.Targets = null;

        /**
         * End port of the listener.
Note: this field may return `null`, indicating that no valid values can be obtained.
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RulesItems();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new LbRsTargets();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * Modifies the data type of a node weight
 * @class
 */
class RsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers whose weights to modify.
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID, which is required only for layer-7 rules.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target rule domain name. This parameter does not take effect if LocationId is specified
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target rule URL. This parameter does not take effect if LocationId is specified
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The new forwarding weight of the real server. Value range: [0, 100]. This parameter takes lower precedence than `Weight` in [`Targets`](https://intl.cloud.tencent.com/document/api/214/30694?from_cn_redirect=1#Target), which means that this parameter only takes effect when the `Weight` in `RsWeightRule` is left empty.
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * RegisterFunctionTargets request structure.
 * @class
 */
class RegisterFunctionTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * SCF functions to be bound.
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * ID of the target forwarding rule. To bind an SCF function to a L7 forwarding rule, this parameter or `Domain+Url` is required.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the target forwarding rule. It is ignored if `LocationId` is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * URL of the target forwarding rule. It is ignored if `LocationId` is specified.
         * @type {string || null}
         */
        this.Url = null;

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

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DeregisterTargetsFromClassicalLB request structure.
 * @class
 */
class DeregisterTargetsFromClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of real server IDs
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
 * Basic information of a target group bound to a forwarding rule or a listener
 * @class
 */
class BasicTargetGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Target group name
         * @type {string || null}
         */
        this.TargetGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;

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
 * List of AZs
 * @class
 */
class ZoneResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary AZ, such as "ap-guangzhou-1".
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * List of resources
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Resource> || null}
         */
        this.ResourceSet = null;

        /**
         * Secondary AZ, such as "ap-guangzhou-2". 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * IP version. Values: `IPv4`, `IPv6`, and `IPv6_Nat`.
         * @type {string || null}
         */
        this.IPVersion = null;

        /**
         * Region of the AZ, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.ZoneRegion = null;

        /**
         * Whether the AZ is a `LocalZone`. Values: `true`, `false`.
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * Type of resources in the zone. Values: `SHARED`, `EXCLUSIVE`
         * @type {string || null}
         */
        this.ZoneResourceType = null;

        /**
         * Whether the AZ is an edge zone. Values: `true`, `false`.
         * @type {boolean || null}
         */
        this.EdgeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new Resource();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.IPVersion = 'IPVersion' in params ? params.IPVersion : null;
        this.ZoneRegion = 'ZoneRegion' in params ? params.ZoneRegion : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.ZoneResourceType = 'ZoneResourceType' in params ? params.ZoneResourceType : null;
        this.EdgeZone = 'EdgeZone' in params ? params.EdgeZone : null;

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
         * Request ID, i.e., the RequestId parameter returned by the API.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Order ID.
Note: Either `TaskId` or `DealName` is required.
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * Target group instance
 * @class
 */
class TargetGroupInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of target group instance
         * @type {string || null}
         */
        this.BindIP = null;

        /**
         * Port of target group instance
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Weight of target group instance
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * New port of target group instance
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
        this.BindIP = 'BindIP' in params ? params.BindIP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;

    }
}

/**
 * DescribeClassicalLBByInstanceId response structure.
 * @class
 */
class DescribeClassicalLBByInstanceIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB information list
         * @type {Array.<ClassicalLoadBalancerInfo> || null}
         */
        this.LoadBalancerInfoList = null;

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

        if (params.LoadBalancerInfoList) {
            this.LoadBalancerInfoList = new Array();
            for (let z in params.LoadBalancerInfoList) {
                let obj = new ClassicalLoadBalancerInfo();
                obj.deserialize(params.LoadBalancerInfoList[z]);
                this.LoadBalancerInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRule response structure.
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of unique IDs of created forwarding rules
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

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
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of CVMs and ENIs that use cross-region binding 2.0
 * @class
 */
class CrossTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID of the CLB instance
         * @type {string || null}
         */
        this.LocalVpcId = null;

        /**
         * VPC ID of the CVM or ENI instance
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IP address of the CVM or ENI instance
         * @type {string || null}
         */
        this.IP = null;

        /**
         * VPC name of the CVM or ENI instance
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * ENI ID of the CVM instance
         * @type {string || null}
         */
        this.EniId = null;

        /**
         * ID of the CVM instance
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the CVM instance
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region of the CVM or ENI instance
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
        this.LocalVpcId = 'LocalVpcId' in params ? params.LocalVpcId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Health check status of a forwarding rule
 * @class
 */
class RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the forwarding rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule Url
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Health status of the real server bound to this rule
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

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
 * ModifyDomain request structure.
 * @class
 */
class ModifyDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Legacy domain name under a listener.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * New domain name. 	Length limit: 1-120. There are three usage formats: non-regular expression, wildcard, and regular expression. A non-regular expression can only contain letters, digits, "-", and ".". In a wildcard, "*" can only be at the beginning or the end. A regular expressions must begin with a "~".
         * @type {string || null}
         */
        this.NewDomain = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;

    }
}

/**
 * ID of the idle CLB instance
 * @class
 */
class IdleLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * CLB instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * CLB instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * The reason why the load balancer is considered idle. `NO_RULES`: No rules configured. `NO_RS`: The rules are not associated with servers.
         * @type {string || null}
         */
        this.IdleReason = null;

        /**
         * CLB instance status, including:
`0`: Creating; `1`: Running.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CLB type. Value range: `1` (CLB); `0` (classic CLB).
         * @type {number || null}
         */
        this.Forward = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.IdleReason = 'IdleReason' in params ? params.IdleReason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Forward = 'Forward' in params ? params.Forward : null;

    }
}

/**
 * RegisterTargetGroupInstances response structure.
 * @class
 */
class RegisterTargetGroupInstancesResponse extends  AbstractModel {
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
 * Backend information of a classic CLB
 * @class
 */
class ClassicalTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Weight. Value range: [0, 100]
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of listener IDs (20 IDs at most).
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Listener protocol type
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Query the list of backend services associated with a load balancer
<li> `location-id` - String - Optional - Rule ID, such as "loc-12345678".</li>
<li> `private-ip-address` - String - Optional - Backend service private IP, such as `172.16.1.1`</li>
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

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
 * AZ information
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique AZ ID in a numeric form, such as 100001
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Unique AZ ID in a string form, such as ap-guangzhou-1
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name, such as Guangzhou Zone 1
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * AZ region, e.g., ap-guangzhou.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneRegion = null;

        /**
         * Whether the AZ is the `LocalZone`, e.g., false.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * Whether the AZ is an edge zone. Values: `true`, `false`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EdgeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneRegion = 'ZoneRegion' in params ? params.ZoneRegion : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.EdgeZone = 'EdgeZone' in params ? params.EdgeZone : null;

    }
}

/**
 * RegisterTargetsWithClassicalLB response structure.
 * @class
 */
class RegisterTargetsWithClassicalLBResponse extends  AbstractModel {
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
 * DescribeTargetGroups response structure.
 * @class
 */
class DescribeTargetGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of displayed results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information set of displayed target groups
         * @type {Array.<TargetGroupInfo> || null}
         */
        this.TargetGroupSet = null;

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

        if (params.TargetGroupSet) {
            this.TargetGroupSet = new Array();
            for (let z in params.TargetGroupSet) {
                let obj = new TargetGroupInfo();
                obj.deserialize(params.TargetGroupSet[z]);
                this.TargetGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB instance health check status
 * @class
 */
class LoadBalancerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * List of listeners
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyLoadBalancerSla response structure.
 * @class
 */
class ModifyLoadBalancerSlaResponse extends  AbstractModel {
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
         * Array of listener IDs to delete (20 IDs at most). If this parameter is left empty, all listeners of the CLB instance will be deleted.
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
 * IP added to blocklist 12306
 * @class
 */
class BlockedIP extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blacklisted IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Blacklisted time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ModifyRule response structure.
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
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
 * DescribeClassicalLBTargets request structure.
 * @class
 */
class DescribeClassicalLBTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * DeregisterFunctionTargets response structure.
 * @class
 */
class DeregisterFunctionTargetsResponse extends  AbstractModel {
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
 * DescribeCustomizedConfigList request structure.
 * @class
 */
class DescribeCustomizedConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration type. Valid values: `CLB` (CLB-specific configs), `SERVER` (domain name-specific configs), and `LOCATION` (forwarding rule-specific configs).
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Pagination offset. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page. Default: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies the name of configs to query. Fuzzy match is supported.
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * Configuration ID.
         * @type {Array.<string> || null}
         */
        this.UconfigIds = null;

        /**
         * The filters are:
<li> loadbalancer-id - String - Required: no - (filter) CLB instance ID, such as "lb-12345678". </li>
<li> vip - String - Required: no - (filter) CLB instance VIP, such as "1.1.1.1" and "2204::22:3". </li>
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
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.UconfigIds = 'UconfigIds' in params ? params.UconfigIds : null;

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
 * AutoRewrite request structure.
 * @class
 */
class AutoRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * `HTTPS:443` listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The domain name to be redirected under the listener `HTTPS:443`. If it is left empty, all domain names under the listener `HTTPS:443` will be configured with redirects.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Redirection status code. Valid values: 301, 302, and 307.
         * @type {Array.<number> || null}
         */
        this.RewriteCodes = null;

        /**
         * Whether the matched URL is carried in redirection.
         * @type {Array.<boolean> || null}
         */
        this.TakeUrls = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.RewriteCodes = 'RewriteCodes' in params ? params.RewriteCodes : null;
        this.TakeUrls = 'TakeUrls' in params ? params.TakeUrls : null;

    }
}

/**
 * DescribeCrossTargets response structure.
 * @class
 */
class DescribeCrossTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of real server lists
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Real server list
         * @type {Array.<CrossTargets> || null}
         */
        this.CrossTargetSet = null;

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

        if (params.CrossTargetSet) {
            this.CrossTargetSet = new Array();
            for (let z in params.CrossTargetSet) {
                let obj = new CrossTargets();
                obj.deserialize(params.CrossTargetSet[z]);
                this.CrossTargetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SCF related information
 * @class
 */
class FunctionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function namespace
         * @type {string || null}
         */
        this.FunctionNamespace = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function version name or alias
         * @type {string || null}
         */
        this.FunctionQualifier = null;

        /**
         * Function qualifier type. Values: `VERSION`, `ALIAS`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FunctionQualifierType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionNamespace = 'FunctionNamespace' in params ? params.FunctionNamespace : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionQualifier = 'FunctionQualifier' in params ? params.FunctionQualifier : null;
        this.FunctionQualifierType = 'FunctionQualifierType' in params ? params.FunctionQualifierType : null;

    }
}

/**
 * ModifyFunctionTargets response structure.
 * @class
 */
class ModifyFunctionTargetsResponse extends  AbstractModel {
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
 * DescribeLoadBalancerListByCertId response structure.
 * @class
 */
class DescribeLoadBalancerListByCertIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID and list of CLB instances associated with it
         * @type {Array.<CertIdRelatedWithLoadBalancers> || null}
         */
        this.CertSet = null;

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

        if (params.CertSet) {
            this.CertSet = new Array();
            for (let z in params.CertSet) {
                let obj = new CertIdRelatedWithLoadBalancers();
                obj.deserialize(params.CertSet[z]);
                this.CertSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupInstancesWeight response structure.
 * @class
 */
class ModifyTargetGroupInstancesWeightResponse extends  AbstractModel {
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
 * DescribeTargetGroups request structure.
 * @class
 */
class DescribeTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID, which is exclusive of `Filters`.
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * Limit of the number of displayed results. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting display offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter array, which is exclusive of `TargetGroupIds`. Valid values: `TargetGroupVpcId` and `TargetGroupName`.
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
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeTaskStatus response structure.
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current status of a task. Value range: 0 (succeeded), 1 (failed), 2 (in progress).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Array of unique CLB instance IDs.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Status = 'Status' in params ? params.Status : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * IDs of the listeners failed to bind. If this is blank, all listeners are bound successfully.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * The backend service information of cross-region binding 1.0
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * Network billing parameter
         * @type {InternetAccessible || null}
         */
        this.InternetChargeInfo = null;

        /**
         * Whether the target opens traffic from CLB to the internet. If yes (true), only security groups on CLB will be verified; if no (false), security groups on both CLB and backend instance need to be verified.
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * Whether to enable cross-region binding 2.0
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * Specifies whether to enable deletion protection.
         * @type {boolean || null}
         */
        this.DeleteProtect = null;

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

        if (params.TargetRegionInfo) {
            let obj = new TargetRegionInfo();
            obj.deserialize(params.TargetRegionInfo)
            this.TargetRegionInfo = obj;
        }

        if (params.InternetChargeInfo) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetChargeInfo)
            this.InternetChargeInfo = obj;
        }
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;
        this.DeleteProtect = 'DeleteProtect' in params ? params.DeleteProtect : null;

    }
}

/**
 * DescribeLBListeners request structure.
 * @class
 */
class DescribeLBListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of private network IPs to be queried.
         * @type {Array.<LbRsItem> || null}
         */
        this.Backends = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Backends) {
            this.Backends = new Array();
            for (let z in params.Backends) {
                let obj = new LbRsItem();
                obj.deserialize(params.Backends[z]);
                this.Backends.push(obj);
            }
        }

    }
}

/**
 * Parameters for upgrading to an LCU-supported instance
 * @class
 */
class SlaUpdateParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CLB instance
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * This parameter is set to a fixed value of `SLA`, which specifies to upgrade to an LCU-supported instance of default specification.
<ul><li>If you enable general LCU-supported instances, `SLA` corresponds to the Super Large 1 specification. General LCU-supported instances are in beta testing, [submit a ticket](https://intl.cloud.tencent.com/apply/p/hf45esx99lf?from_cn_redirect=1) for application.</li>
<li>If you enable ultra-large LCU-supported instances, SLA corresponds to the Super Large 4 specification. Ultra-large LCU-supported instances are in beta testing, [submit a ticket](https://console.cloud.tencent.com/workorder/category) for application.</li></ul>
         * @type {string || null}
         */
        this.SlaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SlaType = 'SlaType' in params ? params.SlaType : null;

    }
}

/**
 * Redirect target, i.e., the real server bound to a CLB
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listening port of a real server
Note: this parameter is required when binding a CVM or ENI.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Real server type. Value range: CVM (Cloud Virtual Machine), ENI (Elastic Network Interface). This parameter does not take effect currently as an input parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Unique ID of a CVM instance, which is required when binding a CVM instance. It can be obtained from the `InstanceId` field in the response of the `DescribeInstances` API. It indicates binding the primary IP of the primary ENI.
Note: Either `InstanceId` or `EniIp` can be passed in.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The new forwarding weight of the real server. Value range: [0, 100]. Default: 10. This parameter takes priority over `Weight` in [`RsWeightRule`](https://intl.cloud.tencent.com/document/api/214/30694?from_cn_redirect=1#RsWeightRule). If it’s left empty, the value of `Weight` in `RsWeightRule` will be used.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * It is required when binding an IP. ENI IPs and other private IPs are supported. To bind an ENI IP, the ENI should be bound to a CVM instance before being bound to a CLB instance.
Note: Either `InstanceId` or `EniIp` can be passed in. `EniIp` is required in a cross-region binding or when the dual-stack IPV6 CVM is bound.
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;

    }
}

/**
 * DescribeLoadBalancerTraffic request structure.
 * @class
 */
class DescribeLoadBalancerTrafficRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance region. If this parameter is not passed in, CLB instances in all regions will be returned.
         * @type {string || null}
         */
        this.LoadBalancerRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerRegion = 'LoadBalancerRegion' in params ? params.LoadBalancerRegion : null;

    }
}

/**
 * DescribeBlockIPList request structure.
 * @class
 */
class DescribeBlockIPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Data offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of IPs to be returned. Default value: 100,000.
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Certificate ID and list of CLB instances associated with it
 * @class
 */
class CertIdRelatedWithLoadBalancers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * List of CLB instances associated with certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }

    }
}

/**
 * DescribeClassicalLBHealthStatus response structure.
 * @class
 */
class DescribeClassicalLBHealthStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of real server health statuses
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ClassicalHealth> || null}
         */
        this.HealthList = null;

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

        if (params.HealthList) {
            this.HealthList = new Array();
            for (let z in params.HealthList) {
                let obj = new ClassicalHealth();
                obj.deserialize(params.HealthList[z]);
                this.HealthList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClsLogSet request structure.
 * @class
 */
class DescribeClsLogSetRequest extends  AbstractModel {
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
 * Listener information
 * @class
 */
class Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Information of certificates bound to the listener
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CertificateOutput || null}
         */
        this.Certificate = null;

        /**
         * Health check information of the listener
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Request scheduling method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Session persistence time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Whether to enable the SNI feature (this parameter is only meaningful for HTTPS listeners)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * All forwarding rules under a listener (this parameter is meaningful only for HTTP/HTTPS listeners)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RuleOutput> || null}
         */
        this.Rules = null;

        /**
         * Listener name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End port of a port range
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndPort = null;

        /**
         * Real server type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Basic information of a bound target group. This field will be returned when a target group is bound to a listener.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BasicTargetGroupInfo || null}
         */
        this.TargetGroup = null;

        /**
         * Session persistence type. Valid values: Normal: the default session persistence type; QUIC_CID: session persistence by QUIC connection ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * Whether a persistent connection is enabled (1: enabled; 0: disabled). This parameter can only be configured in HTTP/HTTPS listeners.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * Only the NAT64 CLB TCP listeners are supported.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Toa = null;

        /**
         * Whether to send the TCP RST packet to the client when unbinding a real server. This parameter is applicable to TCP listeners only.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * Attribute of listener
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AttrFlags = null;

        /**
         * List of bound target groups
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BasicTargetGroupInfo> || null}
         */
        this.TargetGroupList = null;

        /**
         * Maximum number of concurrent listener connections. If it’s set to `-1`, the listener speed is not limited. 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * Maximum number of new listener connections. If it’s set to `-1`, the listener speed is not limited. 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxCps = null;

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

        if (params.Certificate) {
            let obj = new CertificateOutput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleOutput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

        if (params.TargetGroup) {
            let obj = new BasicTargetGroupInfo();
            obj.deserialize(params.TargetGroup)
            this.TargetGroup = obj;
        }
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.Toa = 'Toa' in params ? params.Toa : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;
        this.AttrFlags = 'AttrFlags' in params ? params.AttrFlags : null;

        if (params.TargetGroupList) {
            this.TargetGroupList = new Array();
            for (let z in params.TargetGroupList) {
                let obj = new BasicTargetGroupInfo();
                obj.deserialize(params.TargetGroupList[z]);
                this.TargetGroupList.push(obj);
            }
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * CLB instance traffic data
 * @class
 */
class LoadBalancerTraffic extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * CLB instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * CLB instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Maximum outbound bandwidth in Mbps
         * @type {number || null}
         */
        this.OutBandwidth = null;

        /**
         * CLB domain name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.OutBandwidth = 'OutBandwidth' in params ? params.OutBandwidth : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * Configuration content
 * @class
 */
class ConfigListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID.
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * Configuration type.
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Configuration name.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * Configuration content.
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * Creates configuration time.
         * @type {string || null}
         */
        this.CreateTimestamp = null;

        /**
         * Modifies configuration time.
         * @type {string || null}
         */
        this.UpdateTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.CreateTimestamp = 'CreateTimestamp' in params ? params.CreateTimestamp : null;
        this.UpdateTimestamp = 'UpdateTimestamp' in params ? params.UpdateTimestamp : null;

    }
}

/**
 * RegisterTargetsWithClassicalLB request structure.
 * @class
 */
class RegisterTargetsWithClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Real server information
         * @type {Array.<ClassicalTargetInfo> || null}
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
                let obj = new ClassicalTargetInfo();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * ModifyDomainAttributes response structure.
 * @class
 */
class ModifyDomainAttributesResponse extends  AbstractModel {
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
 * ReplaceCertForLoadBalancers response structure.
 * @class
 */
class ReplaceCertForLoadBalancersResponse extends  AbstractModel {
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
 * DescribeTargets response structure.
 * @class
 */
class DescribeTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of real servers bound to the listener
Note: This field may return `null`, indicating that no valid values can be obtained.
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
         * Session persistence time in seconds. Value range: 30-3,600. The default value is 0, indicating that session persistence is not enabled. This parameter is applicable only to TCP/UDP listeners.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Health check parameter, which is applicable only to TCP, UDP, and TCP_SSL listeners.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information. This parameter is only applicable to HTTPS/TCP_SSL listeners. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * Forwarding method of a listener. Value range: WRR, LEAST_CONN.
They represent weighted round robin and least connections, respectively. Default value: WRR.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether to enable the SNI feature. This parameter is applicable only to HTTPS listeners. Note: The SNI feature can be enabled but cannot be disabled once enabled.
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * Target backend type. `NODE`: A single node; `TARGETGROUP`: A target group.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Whether to enable a persistent connection. This parameter is applicable only to HTTP and HTTPS listeners.
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * Whether to send the TCP RST packet to the client when unbinding a real server. This parameter is applicable to TCP listeners only.
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * Session persistence type. `NORMAL`: default session persistence type (L4/L7 session persistence); `QUIC_CID`: session persistence by QUIC connection ID. The `QUIC_CID` value can only be configured in UDP listeners.
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * Certificate information. You can specify multiple server-side certificates with different algorithm types. This parameter is only applicable to HTTPS listeners with the SNI feature not enabled. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

        /**
         * The maximum number of concurrent connections at the listener level. This parameter takes effect only on LCU-supported instances and TCP/UDP/TCP_SSL/QUIC listeners. Value range: 1 to the maximum concurrency of the instance. -1 indicates that no limit is set on concurrent connections.
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * The maximum number of new connections at the listener level. This parameter takes effect only on LCU-supported instances and TCP/UDP/TCP_SSL/QUIC listeners. Value range: 1 to the maximum number of new connections of the instance. -1 indicates that no limit is set on concurrent connections.
         * @type {number || null}
         */
        this.MaxCps = null;

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

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * DeregisterTargetGroupInstances response structure.
 * @class
 */
class DeregisterTargetGroupInstancesResponse extends  AbstractModel {
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
 * RegisterTargets request structure.
 * @class
 */
class RegisterTargetsRequest extends  AbstractModel {
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
         * List of real servers to be bound. Array length limit: 20.
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target forwarding rule domain name. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target forwarding rule URL. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Url = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Health check information.
Note: Custom check parameters are currently supported only in certain beta test regions.
 * @class
 */
class HealthCheck extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable health check. 1: enable; 0: disable.
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * Health check response timeout period in seconds (applicable only to layer-4 listeners). Value range: 2-60. Default value: 2. This parameter should be less than the check interval.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * Health check interval in seconds. Value range: 5-300. Default value: 5.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * Health threshold. Default value: 3, indicating that if a forward is found healthy three consecutive times, it is considered to be normal. Value range: 2-10
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * Unhealthy threshold. Default value: 3, indicating that if a forward is found unhealthy three consecutive times, it is considered to be exceptional. Value range: 2-10
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnHealthNum = null;

        /**
         * Health check status code (applicable only to HTTP/HTTPS forwarding rules and HTTP health checks of TCP listeners). Value range: 1-31. Default value: 31.
`1`: Returns code 1xx for healthy status. `2`: Returns code 2xx for healthy status. `4`: Returns code 3xx for healthy status. `8`: Returns code 4xx for healthy status. `16`: Returns code 5xx for healthy status. If you want multiple return codes to represent healthy, sum up the corresponding values. 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * Health check path (applicable only to HTTP/HTTPS forwarding rules and HTTP health checks of TCP listeners).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * The target domain name for health check. It’s applicable only to HTTP/HTTPS forwarding rules and HTTP health checks of TCP listeners. It’s required for TCP listeners.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * Health check method (applicable only to HTTP/HTTPS forwarding rules and HTTP health checks of TCP listeners). Value range: HEAD, GET. Default value: HEAD.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpCheckMethod = null;

        /**
         * Health check port (a custom check parameter), which is the port of the real server by default. Unless you want to specify a port, it is recommended to leave it empty. (Applicable only to TCP/UDP listeners.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CheckPort = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of CheckType is CUSTOM. This parameter represents the input format of the health check. Value range: HEX, TEXT. If the value is HEX, the characters of SendContext and RecvContext can only be selected from 0123456789ABCDEF and the length must be an even number. (Applicable only to TCP/UDP listeners.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContextType = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of CheckType is CUSTOM. This parameter represents the content of the request sent by the health check. Only ASCII visible characters are allowed, and the maximum length is 500. (Applicable only to TCP/UDP listeners.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SendContext = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of CheckType is CUSTOM. This parameter represents the result returned by the health check. Only ASCII visible characters are allowed, and the maximum length is 500. (Applicable only to TCP/UDP listeners.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecvContext = null;

        /**
         * Health check protocol (a custom check parameter). Value range: TCP, HTTP, CUSTOM (applicable only to TCP/UDP listeners, where UDP listeners only support CUSTOM. If custom health check is used, this parameter is required).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CheckType = null;

        /**
         * Health check protocol (a custom check parameter), which is required if the value of CheckType is HTTP. This parameter represents the HTTP version of the real server. Value range: HTTP/1.0, HTTP/1.1. (Applicable only to TCP listeners.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HttpVersion = null;

        /**
         * Specifies the type of IP for health check. `0` (default): CLB VIP. `1`: Use the IP range starting with 100.64 as the source IP.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SourceIpType = null;

        /**
         * GRPC health check status code, which is only applicable to rules with GRPC as the backend forwarding protocol. It can be a single number (such as `20`), multiple numbers (such as `20,25`) or a range (such as `0-99`). The default value is `12`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExtendedCode = null;

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
        this.UnHealthNum = 'UnHealthNum' in params ? params.UnHealthNum : null;
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckMethod = 'HttpCheckMethod' in params ? params.HttpCheckMethod : null;
        this.CheckPort = 'CheckPort' in params ? params.CheckPort : null;
        this.ContextType = 'ContextType' in params ? params.ContextType : null;
        this.SendContext = 'SendContext' in params ? params.SendContext : null;
        this.RecvContext = 'RecvContext' in params ? params.RecvContext : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.HttpVersion = 'HttpVersion' in params ? params.HttpVersion : null;
        this.SourceIpType = 'SourceIpType' in params ? params.SourceIpType : null;
        this.ExtendedCode = 'ExtendedCode' in params ? params.ExtendedCode : null;

    }
}

/**
 * AssociateTargetGroups response structure.
 * @class
 */
class AssociateTargetGroupsResponse extends  AbstractModel {
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
 * CreateTopic request structure.
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The number of topic partitions, which changes as partitions are split or merged. Each log topic can have up to 50 partitions. If this parameter is not passed in, 1 partition will be created by default and up to 10 partitions are allowed to be created.
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * Log type. Valid values: ACCESS (access logs; default value) and HEALTH (health check logs).
         * @type {string || null}
         */
        this.TopicType = null;

        /**
         * Logset retention period (in days). Default: 30 days.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Log topic storage type. Valid values: `hot` (STANDARD storage); `cold` (IA storage). Default value: `hot`.
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

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
 * Real server health status of a classic CLB
 * @class
 */
class ClassicalHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of a real server
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Real server port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * CLB listener port
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * Forwarding protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Health check result. Value range: 1 (healthy), 0 (unhealthy)
         * @type {number || null}
         */
        this.HealthStatus = null;

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
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;

    }
}

/**
 * DescribeCustomizedConfigAssociateList request structure.
 * @class
 */
class DescribeCustomizedConfigAssociateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID.
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * Start position of the binding list. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of binding lists to pull. Default: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Searches for the domain name.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

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
 * MigrateClassicalLoadBalancers request structure.
 * @class
 */
class MigrateClassicalLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of classic CLB instance IDs
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Exclusive cluster information
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }

    }
}

/**
 * DescribeLoadBalancersDetail request structure.
 * @class
 */
class DescribeLoadBalancersDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of CLB instance lists returned. Default value: 20; maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting offset of the CLB instance list returned. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * List of fields. Only fields specified will be returned. If it’s left blank, `null` is returned. The fields `LoadBalancerId` and `LoadBalancerName` are added by default. For details about fields, see <a href="https://intl.cloud.tencent.com/document/api/214/30694?from_cn_redirect=1#LoadBalancerDetail">LoadBalancerDetail</a>.
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * Target type. Valid values: NODE and GROUP. If the list of fields contains `TargetId`, `TargetAddress`, `TargetPort`, `TargetWeight` and other fields, `Target` of the target group or non-target group must be exported.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Filter condition of querying lists describing CLB instance details:
<li> loadbalancer-id - String - Required: no - (Filter condition) CLB instance ID, such as "lb-12345678". </li>
<li> project-id - String - Required: no - (Filter condition) Project ID, such as "0" and "123".</li>
<li> network - String - Required: no - (Filter condition) Network type of the CLB instance, such as "Public" and "Private".</li>
<li> vip - String - Required: no - (Filter condition) CLB instance VIP, such as "1.1.1.1" and "2204::22:3". </li>
<li> target-ip - String - Required: no - (Filter condition) Private IP of the target real servers, such as"1.1.1.1" and "2203::214:4".</li>
<li> vpcid - String - Required: no - (Filter condition) Identifier of the VPC instance to which the CLB instance belongs, such as "vpc-12345678".</li>
<li> zone - String - Required: no - (Filter condition) Availability zone where the CLB instance resides, such as "ap-guangzhou-1".</li>
<li> tag-key - String - Required: no - (Filter condition) Tag key of the CLB instance, such as "name".</li>
<li> tag:* - String - Required: no - (Filter condition) CLB instance tag, followed by tag key after the colon ':'. For example, use {"Name": "tag:name","Values": ["zhangsan", "lisi"]} to filter the tag key “name” with the tag value “zhangsan” and “lisi”.</li>
<li> fuzzy-search - String - Required: no - (Filter condition) Fuzzy search for CLB instance VIP and CLB instance name, such as "1.1".</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Fields = 'Fields' in params ? params.Fields : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

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
 * Real server bound to a target group
 * @class
 */
class TargetGroupBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Real server type. Valid values: CVM, ENI (coming soon)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Unique real server ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Listening port of real server
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Forwarding weight of real server. Value range: [0, 100]. Default value: 10.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Public IP of real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Private IP of real server
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Real server instance name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

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
         * AZ ID of the real server
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DeregisterFunctionTargets request structure.
 * @class
 */
class DeregisterFunctionTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of functions to be unbound
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * The ID of target forwarding rule. To unbind a function from an L7 forwarding rule, either `LocationId` or `Domain+Url` is required. 
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the target forwarding rule. It is ignored if `LocationId` is specified. 
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * URL of the target forwarding rule. It is ignored if `LocationId` is specified. 
         * @type {string || null}
         */
        this.Url = null;

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

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeClassicalLBByInstanceId request structure.
 * @class
 */
class DescribeClassicalLBByInstanceIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of real server IDs
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Whether to use SCF (Serverless Cloud Function) as the backend service
 * @class
 */
class FunctionTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * SCF related information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {FunctionInfo || null}
         */
        this.Function = null;

        /**
         * Weight
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

        if (params.Function) {
            let obj = new FunctionInfo();
            obj.deserialize(params.Function)
            this.Function = obj;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeResources response structure.
 * @class
 */
class DescribeResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of resources supported by the AZ
         * @type {Array.<ZoneResource> || null}
         */
        this.ZoneResourceSet = null;

        /**
         * Number of entries in the AZ resource list.
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

        if (params.ZoneResourceSet) {
            this.ZoneResourceSet = new Array();
            for (let z in params.ZoneResourceSet) {
                let obj = new ZoneResource();
                obj.deserialize(params.ZoneResourceSet[z]);
                this.ZoneResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupInstancesWeight request structure.
 * @class
 */
class ModifyTargetGroupInstancesWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Array of servers for which to modify weights
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * ManualRewrite response structure.
 * @class
 */
class ManualRewriteResponse extends  AbstractModel {
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
 * ModifyBlockIPList request structure.
 * @class
 */
class ModifyBlockIPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Operation type. Valid values:
<li> add_customized_field (sets header initially to enable the blocklist feature)</li>
<li> set_customized_field (modifies header)</li>
<li> del_customized_field (deletes header)</li>
<li> add_blocked (adds IPs to blocklist)</li>
<li> del_blocked (deletes IPs from blocklist)</li>
<li> flush_blocked (clears blocklist)</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Header field that stores real client IPs
         * @type {string || null}
         */
        this.ClientIPField = null;

        /**
         * List of blocked IPs. The array can contain up to 200,000 entries in one operation.
         * @type {Array.<string> || null}
         */
        this.BlockIPList = null;

        /**
         * Expiration time in seconds. Default value: 3600
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * IP adding policy. Valid value: fifo (if a blocklist is full, new IPs added to the blocklist will adopt the first-in first-out policy)
         * @type {string || null}
         */
        this.AddStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientIPField = 'ClientIPField' in params ? params.ClientIPField : null;
        this.BlockIPList = 'BlockIPList' in params ? params.BlockIPList : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AddStrategy = 'AddStrategy' in params ? params.AddStrategy : null;

    }
}

/**
 * ModifyBlockIPList response structure.
 * @class
 */
class ModifyBlockIPListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {string || null}
         */
        this.JodId = null;

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
        this.JodId = 'JodId' in params ? params.JodId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dedicated cluster
 * @class
 */
class ExclusiveCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 dedicated cluster list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClusterItem> || null}
         */
        this.L4Clusters = null;

        /**
         * Layer-7 dedicated cluster list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClusterItem> || null}
         */
        this.L7Clusters = null;

        /**
         * vpcgw cluster
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClusterItem || null}
         */
        this.ClassicalCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L4Clusters) {
            this.L4Clusters = new Array();
            for (let z in params.L4Clusters) {
                let obj = new ClusterItem();
                obj.deserialize(params.L4Clusters[z]);
                this.L4Clusters.push(obj);
            }
        }

        if (params.L7Clusters) {
            this.L7Clusters = new Array();
            for (let z in params.L7Clusters) {
                let obj = new ClusterItem();
                obj.deserialize(params.L7Clusters[z]);
                this.L7Clusters.push(obj);
            }
        }

        if (params.ClassicalCluster) {
            let obj = new ClusterItem();
            obj.deserialize(params.ClassicalCluster)
            this.ClassicalCluster = obj;
        }

    }
}

/**
 * DescribeClassicalLBHealthStatus request structure.
 * @class
 */
class DescribeClassicalLBHealthStatusRequest extends  AbstractModel {
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
 * DescribeListeners request structure.
 * @class
 */
class DescribeListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of CLB listener IDs to query (100 IDs at most).
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Type of the listener protocols to be queried. Valid values: TCP, UDP, HTTP, HTTPS, and TCP_SSL.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port of the listeners to be queried
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
 * CreateClsLogSet response structure.
 * @class
 */
class CreateClsLogSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID.
         * @type {string || null}
         */
        this.LogsetId = null;

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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCrossTargets request structure.
 * @class
 */
class DescribeCrossTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of real server lists returned. Default value: 20; maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting offset of the real server list returned. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter conditions to query CVMs and ENIs
<li> `vpc-id` - String - Required: No - (Filter condition) Filter by VPC ID, such as "vpc-12345678".</li>
<li> `ip` - String - Required: No - (Filter condition) Filter by real server IP, such as "192.168.0.1".</li>
<li> `listener-id` - String - Required: No - (Filter condition) Filter by listener ID, such as "lbl-12345678".</li>
<li> `location-id` - String - Required: No - (Filter condition) Filter by forwarding rule ID of the layer-7 listener, such as "loc-12345678".</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * Monthly subscription configuration of a CLB instance
 * @class
 */
class LBChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Renewal type. AUTO_RENEW: automatic renewal; MANUAL_RENEW: manual renewal
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Cycle, indicating the number of months (reserved field)
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * Classic CLB listener information
 * @class
 */
class ClassicalListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB listener port
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * Backend forwarding port of a listener
         * @type {number || null}
         */
        this.InstancePort = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol type
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Session persistence time
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * Whether health check is enabled. 1: enabled; 0: disabled.
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * Response timeout period
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * Check interval
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * Health threshold
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * Unhealthy threshold
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * A request balancing method for HTTP and HTTPS listeners of a public network classic CLB. wrr means weighted round robin, while ip_hash means consistent hashing based on source IPs of access requests.
         * @type {string || null}
         */
        this.HttpHash = null;

        /**
         * Health check return code for HTTP and HTTPS listeners of a public network classic CLB. For more information, see the explanation of the field in the listener creating API.
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * Health check path for HTTP and HTTPS listeners of a public network classic CLB
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * Authentication method for an HTTPS listener of a public network classic CLB
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * Server certificate ID for an HTTPS listener of a public network classic CLB
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Client certificate ID for an HTTPS listener of a public network classic CLB
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * Listener status. Value range: 0 (creating), 1 (running)
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.InstancePort = 'InstancePort' in params ? params.InstancePort : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpHash = 'HttpHash' in params ? params.HttpHash : null;
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * Array of IDs of the CLB instances to be deleted. Array length limit: 20.
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
 * Certificate information
 * @class
 */
class CertificateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authentication type. Value range: UNIDIRECTIONAL (unidirectional authentication), MUTUAL (mutual authentication)
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * ID of a server certificate. If you leave this parameter empty, you must upload the certificate, including CertContent, CertKey, and CertName.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * ID of a client certificate. When the listener adopts mutual authentication (i.e., SSLMode = mutual), if you leave this parameter empty, you must upload the client certificate, including CertCaContent and CertCaName.
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * Name of the uploaded server certificate. If there is no CertId, this parameter is required.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Key of the uploaded server certificate. If there is no CertId, this parameter is required.
         * @type {string || null}
         */
        this.CertKey = null;

        /**
         * Content of the uploaded server certificate. If there is no CertId, this parameter is required.
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * Name of the uploaded client CA certificate. When SSLMode = mutual, if there is no CertCaId, this parameter is required.
         * @type {string || null}
         */
        this.CertCaName = null;

        /**
         * Content of the uploaded client certificate. When SSLMode = mutual, if there is no CertCaId, this parameter is required.
         * @type {string || null}
         */
        this.CertCaContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;

    }
}

/**
 * Resource availability
 * @class
 */
class ResourceAvailability extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific ISP resource information. Values: `CMCC`, `CUCC`, `CTCC`, `BGP`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether the resource is available. Values: `Available`, `Unavailable`
         * @type {string || null}
         */
        this.Availability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Availability = 'Availability' in params ? params.Availability : null;

    }
}

/**
 * DescribeCustomizedConfigAssociateList response structure.
 * @class
 */
class DescribeCustomizedConfigAssociateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of bound resources
         * @type {Array.<BindDetailItem> || null}
         */
        this.BindList = null;

        /**
         * Total number of bound resources
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

        if (params.BindList) {
            this.BindList = new Array();
            for (let z in params.BindList) {
                let obj = new BindDetailItem();
                obj.deserialize(params.BindList[z]);
                this.BindList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCustomizedConfigForLoadBalancer request structure.
 * @class
 */
class SetCustomizedConfigForLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type: `ADD`, `DELETE`, `UPDATE`, `BIND`, `UNBIND`
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * This field is required except for creating custom configurations, such as "pz-1234abcd".
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * This field is required when creating or modifying custom configurations.
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * This field is required when creating or renaming custom configurations.
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * This field is required when binding/unbinding resources.
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
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

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
 * CreateTargetGroup response structure.
 * @class
 */
class CreateTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID generated after target group creation
         * @type {string || null}
         */
        this.TargetGroupId = null;

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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigrateClassicalLoadBalancers response structure.
 * @class
 */
class MigrateClassicalLoadBalancersResponse extends  AbstractModel {
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
 * CreateLoadBalancerSnatIps response structure.
 * @class
 */
class CreateLoadBalancerSnatIpsResponse extends  AbstractModel {
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
 * CLB information
 * @class
 */
class ClassicalLoadBalancerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of CLB instance IDs
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

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
         * Listener list
         * @type {Array.<Listener> || null}
         */
        this.Listeners = null;

        /**
         * Total number of listeners (with filters of port, protocol, and listener ID applied).
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * HTTP/HTTPS listener forwarding rule (output)
 * @class
 */
class RuleOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the forwarding rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Session persistence time
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Health check information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CertificateOutput || null}
         */
        this.Certificate = null;

        /**
         * Request forwarding method of the rule
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * ID of the listener to which the forwarding rule belongs
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Redirect target information of a forwarding rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RewriteTarget || null}
         */
        this.RewriteTarget = null;

        /**
         * Whether to enable gzip
         * @type {boolean || null}
         */
        this.HttpGzip = null;

        /**
         * Whether the forwarding rule is automatically created
         * @type {boolean || null}
         */
        this.BeAutoCreated = null;

        /**
         * Whether to use as the default domain name
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * Whether to enable Http2
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * Forwarding protocol between CLB and real server
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * Forwarding rule creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Real server type
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Basic information of a bound target group. This field will be returned if a target group is bound to a rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BasicTargetGroupInfo || null}
         */
        this.TargetGroup = null;

        /**
         * WAF instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WafDomainId = null;

        /**
         * TRPC callee server route, which is valid when `ForwardType` is `TRPC`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC calling service API, which is valid when `ForwardType` is `TRPC`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TrpcFunc = null;

        /**
         * QUIC status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QuicStatus = null;

        /**
         * List of domain names associated with the forwarding rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * List of bound target groups
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BasicTargetGroupInfo> || null}
         */
        this.TargetGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateOutput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RewriteTarget) {
            let obj = new RewriteTarget();
            obj.deserialize(params.RewriteTarget)
            this.RewriteTarget = obj;
        }
        this.HttpGzip = 'HttpGzip' in params ? params.HttpGzip : null;
        this.BeAutoCreated = 'BeAutoCreated' in params ? params.BeAutoCreated : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

        if (params.TargetGroup) {
            let obj = new BasicTargetGroupInfo();
            obj.deserialize(params.TargetGroup)
            this.TargetGroup = obj;
        }
        this.WafDomainId = 'WafDomainId' in params ? params.WafDomainId : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;
        this.QuicStatus = 'QuicStatus' in params ? params.QuicStatus : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.TargetGroupList) {
            this.TargetGroupList = new Array();
            for (let z in params.TargetGroupList) {
                let obj = new BasicTargetGroupInfo();
                obj.deserialize(params.TargetGroupList[z]);
                this.TargetGroupList.push(obj);
            }
        }

    }
}

/**
 * RegisterFunctionTargets response structure.
 * @class
 */
class RegisterFunctionTargetsResponse extends  AbstractModel {
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
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRule request structure.
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Information of the new forwarding rule
         * @type {Array.<RuleInput> || null}
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyTargetGroupInstancesPort response structure.
 * @class
 */
class ModifyTargetGroupInstancesPortResponse extends  AbstractModel {
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
 * Querying the input data types
 * @class
 */
class LbRsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Private network IP to be queried, which can be of the CVM or ENI.
         * @type {string || null}
         */
        this.PrivateIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;

    }
}

/**
 * Information of the real server bound to a forwarding rule under an HTTP/HTTPS listener
 * @class
 */
class RuleTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the forwarding rule
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule path.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Real server information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Backend> || null}
         */
        this.Targets = null;

        /**
         * Information about backend SCF functions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Backend();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }

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
         * Unbinding targets
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
 * DeregisterTargetGroupInstances request structure.
 * @class
 */
class DeregisterTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Information of server to be unbound
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * ManualRewrite request structure.
 * @class
 */
class ManualRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Source listener ID
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * Target listener ID
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * Redirection relationship between forwarding rules
         * @type {Array.<RewriteLocationMap> || null}
         */
        this.RewriteInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerId = 'SourceListenerId' in params ? params.SourceListenerId : null;
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;

        if (params.RewriteInfos) {
            this.RewriteInfos = new Array();
            for (let z in params.RewriteInfos) {
                let obj = new RewriteLocationMap();
                obj.deserialize(params.RewriteInfos[z]);
                this.RewriteInfos.push(obj);
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
         * CLB instance list
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * Certificate information
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the certificate. If it's not specified, `CertContent` and `CertKey` are required. For a server certificate, you also need to specify `CertName`. 
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Name of the uploaded certificate. It's required if `CertId` is not specified.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Public key of the uploaded certificate. This is required if `CertId` is not specified.
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * Private key of the uploaded server certificate. This is required if `CertId` is not specified.
         * @type {string || null}
         */
        this.CertKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;

    }
}

/**
 * CreateTargetGroup request structure.
 * @class
 */
class CreateTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group name (up to 50 characters)
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * `vpcid` attribute of a target group. If this parameter is left empty, the default VPC will be used.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Default port of a target group, which can be used for subsequently added servers.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Real server bound to a target group
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * Dedicated cluster information
 * @class
 */
class ClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster AZ, such as ap-guangzhou-1
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * Binding details including listener name, protocol, url and vport
 * @class
 */
class BindDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of CLB to be bound
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Specifies the ID of listener to be bound
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Specifies the domain name to be bound
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Sets the bound rule.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Listener name.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * URL of the location.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Configuration ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UconfigId = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;

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
         * Specifies for which ports to create listeners. Each port corresponds to a new listener.
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Listener protocol. Values: TCP | UDP | HTTP | HTTPS | TCP_SSL | QUIC
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * List of names of the listeners to be created. The array of names and array of ports are in one-to-one correspondence. If you do not want to name them now, you do not need to provide this parameter.
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * Health check parameter, which is applicable only to TCP, UDP, and TCP_SSL listeners.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information. This parameter is only applicable to TCP_SSL listeners and HTTPS listeners with the SNI feature not enabled. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * Session persistence time in seconds. Value range: 30-3,600. The default value is 0, indicating that session persistence is not enabled. This parameter is applicable only to TCP/UDP listeners.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Forwarding method of a listener. Value range: WRR, LEAST_CONN.
They represent weighted round robin and least connections, respectively. Default value: WRR. This parameter is applicable only to TCP/UDP/TCP_SSL listeners.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether to enable the SNI feature. This parameter is applicable only to HTTPS listeners
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * Target real server type. `NODE`: binding a general node; `TARGETGROUP`: binding a target group.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Session persistence type. Valid values: Normal: the default session persistence type; QUIC_CID: session persistence by QUIC connection ID. The `QUIC_CID` value can only be configured in UDP listeners. If this field is not specified, the default session persistence type will be used.
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * Whether to enable a persistent connection. This parameter is applicable only to HTTP and HTTPS listeners. Valid values: 0 (disable; default value) and 1 (enable).
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * This parameter is used to specify the end port and is required when creating a port range listener. Only one member can be passed in when inputting the `Ports` parameter, which is used to specify the start port. If you want to try the port range feature, please [submit a ticket](https://console.cloud.tencent.com/workorder/category).
         * @type {number || null}
         */
        this.EndPort = null;

        /**
         * Whether to send the TCP RST packet to the client when unbinding a real server. This parameter is applicable to TCP listeners only.
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * Certificate information. You can specify multiple server-side certificates with different algorithm types. This parameter is only applicable to HTTPS listeners with the SNI feature not enabled. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

        /**
         * Maximum number of concurrent listener connections. It’s available for TCP/UDP/TCP_SSL/QUIC listeners. If it’s set to `-1` or not specified, the listener speed is not limited. 
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * Maximum number of new listener connections. It’s available for TCP/UDP/TCP_SSL/QUIC listeners. If it’s set to `-1` or not specified, the listener speed is not limited. 
         * @type {number || null}
         */
        this.MaxCps = null;

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

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * CreateClsLogSet request structure.
 * @class
 */
class CreateClsLogSetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset name, which must be unique among all CLS logsets; default value: clb_logset
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Logset retention period (in days)
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Logset type. Valid values: ACCESS (access logs; default value) and HEALTH (health check logs).
         * @type {string || null}
         */
        this.LogsetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.LogsetType = 'LogsetType' in params ? params.LogsetType : null;

    }
}

/**
 * DisassociateTargetGroups request structure.
 * @class
 */
class DisassociateTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rules to be unbound
         * @type {Array.<TargetGroupAssociation> || null}
         */
        this.Associations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Associations) {
            this.Associations = new Array();
            for (let z in params.Associations) {
                let obj = new TargetGroupAssociation();
                obj.deserialize(params.Associations[z]);
                this.Associations.push(obj);
            }
        }

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value array
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
 * ModifyDomain response structure.
 * @class
 */
class ModifyDomainResponse extends  AbstractModel {
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
 * RegisterTargets response structure.
 * @class
 */
class RegisterTargetsResponse extends  AbstractModel {
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
 * DeregisterTargetsFromClassicalLB response structure.
 * @class
 */
class DeregisterTargetsFromClassicalLBResponse extends  AbstractModel {
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
 * DescribeLoadBalancers request structure.
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance IDs. There can be up to 20 IDs.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * CLB instance network type:
OPEN: public network; INTERNAL: private network.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB instance type. 1: generic CLB instance; 0: classic CLB instance
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Domain name assigned to a CLB instance by Tencent Cloud. This parameter is meaningful only for the public network classic CLB.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * VIP address of a CLB instance (there can be multiple addresses)
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * Public IPs of the backend services bound with the load balancer. Only the public IPs of CVMs are supported now.
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * Private IPs of the backend services bound with the load balancer. Only the private IPs of CVMs are supported now.
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
         * Sort by parameter. Value range: LoadBalancerName, CreateTime, Domain, LoadBalancerType.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 1: reverse; 0: sequential. Default value: reverse by creation time |
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Search field which fuzzy matches name, domain name, or VIP.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * ID of the project to which a CLB instance belongs, which can be obtained through the DescribeProject API.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Whether a CLB instance is bound to a real server. 0: no; 1: yes; -1: query all.
         * @type {number || null}
         */
        this.WithRs = null;

        /**
         * VPC where a CLB instance resides, such as vpc-bhqkbhdx.
Basic network does not support queries by VpcId.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Security group ID, e.g., `sg-m1cc****`.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Primary AZ ID, e.g., `100001` (Guangzhou Zone 1).
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * Each request can have up to 10 `Filters` and 100 `Filter.Values`. Detailed filter conditions:
<li> internet-charge-type - Type: String - Required: No - Filter by CLB network billing mode, including `TRAFFIC_POSTPAID_BY_HOUR`</li>
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.BackendPublicIps = 'BackendPublicIps' in params ? params.BackendPublicIps : null;
        this.BackendPrivateIps = 'BackendPrivateIps' in params ? params.BackendPrivateIps : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WithRs = 'WithRs' in params ? params.WithRs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;

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
 * SetCustomizedConfigForLoadBalancer response structure.
 * @class
 */
class SetCustomizedConfigForLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID, such as "pz-1234abcd"
         * @type {string || null}
         */
        this.ConfigId = null;

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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * AutoRewrite response structure.
 * @class
 */
class AutoRewriteResponse extends  AbstractModel {
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
 * DeregisterTargets response structure.
 * @class
 */
class DeregisterTargetsResponse extends  AbstractModel {
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
 * DescribeLoadBalancerOverview request structure.
 * @class
 */
class DescribeLoadBalancerOverviewRequest extends  AbstractModel {
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
 * Redirect target information
 * @class
 */
class RewriteTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID of a redirect target
Note: This field may return null, indicating that there is no redirection.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * Forwarding rule ID of a redirect target
Note: This field may return null, indicating that there is no redirection.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetLocationId = null;

        /**
         * Redirection status code
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RewriteCode = null;

        /**
         * Whether the matched URL is carried in redirection.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.TakeUrl = null;

        /**
         * Redirection type. Manual: manual redirection; Auto: automatic redirection.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RewriteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;
        this.TargetLocationId = 'TargetLocationId' in params ? params.TargetLocationId : null;
        this.RewriteCode = 'RewriteCode' in params ? params.RewriteCode : null;
        this.TakeUrl = 'TakeUrl' in params ? params.TakeUrl : null;
        this.RewriteType = 'RewriteType' in params ? params.RewriteType : null;

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
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target rule domain name. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target rule URL. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * List of real servers for which to modify the weights
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * New forwarding weight of a real server. Value range: 0-100. Default value: 10. If the Targets.Weight parameter is set, this parameter will not take effect.
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

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
 * DescribeLoadBalancersDetail response structure.
 * @class
 */
class DescribeLoadBalancersDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists describing CLB instance details.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of CLB instance details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LoadBalancerDetail> || null}
         */
        this.LoadBalancerDetailSet = null;

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

        if (params.LoadBalancerDetailSet) {
            this.LoadBalancerDetailSet = new Array();
            for (let z in params.LoadBalancerDetailSet) {
                let obj = new LoadBalancerDetail();
                obj.deserialize(params.LoadBalancerDetailSet[z]);
                this.LoadBalancerDetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB instance details
 * @class
 */
class LoadBalancerDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * CLB instance network type:
Public: public network; Private: private network.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB instance status, including:
0: creating; 1: running.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CLB instance VIP.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * IPv6 VIP address of the CLB instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * IP version of the CLB instance. Valid values: IPv4, IPv6.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * IPv6 address type of the CLB instance. Valid values: IPv6Nat64, IPv6FullChain.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * Availability zone where the CLB instance resides.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ISP to which the CLB IP address belongs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIsp = null;

        /**
         * ID of the VPC instance to which the CLB instance belongs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the project to which the CLB instance belongs. 0: default project.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * CLB instance creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * CLB instance billing mode.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * CLB instance network attribute.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {InternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * Pay-as-you-go attribute of the CLB instance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * Reserved field, which can be ignored generally.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * Custom configuration IDs of CLB instances. Multiple IDs must be separated by commas (,).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * CLB instance tag information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * CLB listener ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol.
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
         * Forwarding rule ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the forwarding rule.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * ID of target real servers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Address of target real servers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * Listening port of target real servers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * Forwarding weight of target real servers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetWeight = null;

        /**
         * 0: not isolated; 1: isolated.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * List of the security groups bound to the CLB instance.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Whether the CLB instance is billed by IP.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * Health status of the target real server.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetHealth = null;

        /**
         * List o domain names associated with the forwarding rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domains = null;

        /**
         * The secondary zone of multi-AZ CLB instance
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

        /**
         * The AZ of private CLB instance. This is only available for beta users.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Whether SNI is enabled. This parameter is only meaningful for HTTPS listeners.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * Domain name of the CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerDomain = null;

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
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AddressIPv6 = 'AddressIPv6' in params ? params.AddressIPv6 : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.IPv6Mode = 'IPv6Mode' in params ? params.IPv6Mode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AddressIsp = 'AddressIsp' in params ? params.AddressIsp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.NetworkAttributes) {
            let obj = new InternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }

        if (params.PrepaidAttributes) {
            let obj = new LBChargePrepaid();
            obj.deserialize(params.PrepaidAttributes)
            this.PrepaidAttributes = obj;
        }

        if (params.ExtraInfo) {
            let obj = new ExtraInfo();
            obj.deserialize(params.ExtraInfo)
            this.ExtraInfo = obj;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.TargetWeight = 'TargetWeight' in params ? params.TargetWeight : null;
        this.Isolation = 'Isolation' in params ? params.Isolation : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;
        this.TargetHealth = 'TargetHealth' in params ? params.TargetHealth : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.LoadBalancerDomain = 'LoadBalancerDomain' in params ? params.LoadBalancerDomain : null;

    }
}

/**
 * Querying the output data types
 * @class
 */
class LbRsTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private network IP type, which can be `cvm` or `eni`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Private network IP of the real server.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Port bound to the real server.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * VPC ID of the real server.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Weight of the real server.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * @type {Array.<RsWeightRule> || null}
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
                let obj = new RsWeightRule();
                obj.deserialize(params.ModifyList[z]);
                this.ModifyList.push(obj);
            }
        }

    }
}

/**
 * DeleteRewrite response structure.
 * @class
 */
class DeleteRewriteResponse extends  AbstractModel {
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
 * Batch binding type
 * @class
 */
class BatchTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The port to Bind
         * @type {number || null}
         */
        this.Port = null;

        /**
         * CVM instance ID. The primary IP of the primary ENI will be bound.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * It is required for binding an IP. It supports an ENI IP or any other private IP. To bind an ENI IP, the ENI should be bound to a CVM instance before being bound to a CLB instance.
Note: either `InstanceId` or `EniIp` must be passed in, which is required for binding a dual-stack IPv6 CVM instance.
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * Weight of the CVM instance. Value range: [0, 100]. If it is not specified for binding the instance, 10 will be used by default.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Layer-7 rule ID.
         * @type {string || null}
         */
        this.LocationId = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * DescribeLoadBalancerListByCertId request structure.
 * @class
 */
class DescribeLoadBalancerListByCertIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server or client certificate ID
         * @type {Array.<string> || null}
         */
        this.CertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertIds = 'CertIds' in params ? params.CertIds : null;

    }
}

/**
 * Information of the real server bound to a CLB instance, including region and network to which it belongs.
 * @class
 */
class TargetRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the target, such as ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Network of the target, which is in the format of vpc-abcd1234 for VPC or 0 for basic network
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

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
         * List of IDs of CLB instances to be queried
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
 * ReplaceCertForLoadBalancers request structure.
 * @class
 */
class ReplaceCertForLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the certificate to be replaced, which can be a server certificate or a client certificate.
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * Information such as the content of the new certificate
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

    }
}

/**
 * DeleteRule response structure.
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * CloneLoadBalancer response structure.
 * @class
 */
class CloneLoadBalancerResponse extends  AbstractModel {
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
 * DescribeClsLogSet response structure.
 * @class
 */
class DescribeClsLogSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Health check logset ID
         * @type {string || null}
         */
        this.HealthLogsetId = null;

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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.HealthLogsetId = 'HealthLogsetId' in params ? params.HealthLogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupAttribute request structure.
 * @class
 */
class ModifyTargetGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * New name of target group
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * New default port of target group
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * ModifyDomainAttributes request structure.
 * @class
 */
class ModifyDomainAttributesRequest extends  AbstractModel {
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
         * The domain name, which must be associated with an existing forwarding rule. If there are multiple domain names, you only need to specify one.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The one domain name to modify. `NewDomain` and `NewDomains` can not be both specified.
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * Certificate information of the domain name. It is only applicable to listeners with SNI enabled. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * Whether to enable HTTP/2. Note: HTTP/2 can be enabled only for HTTPS domain names.
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * Whether to set this domain name as the default domain name. Note: Only one default domain name can be set under one listener.
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * Specifies a new default domain name for the listener. This field is used when the original default domain name is disabled. If there are multiple domain names, specify one of them.
         * @type {string || null}
         */
        this.NewDefaultServerDomain = null;

        /**
         * The new domain names to modify. `NewDomain` and `NewDomains` can not be both specified.
         * @type {Array.<string> || null}
         */
        this.NewDomains = null;

        /**
         * Certificate information of the domain name. It is only applicable to listeners with SNI enabled. You can specify multiple server-side certificates with different algorithm types. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.NewDefaultServerDomain = 'NewDefaultServerDomain' in params ? params.NewDefaultServerDomain : null;
        this.NewDomains = 'NewDomains' in params ? params.NewDomains : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }

    }
}

/**
 * DeregisterTargets request structure.
 * @class
 */
class DeregisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID in the format of "lb-12345678"
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Listener ID in the format of "lbl-12345678"
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers to be unbound. Array length limit: 20.
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID in the format of "loc-12345678". When unbinding a server from a layer-7 forwarding rule, you must provide either this parameter or Domain+Url.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target rule domain name. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target rule URL. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Url = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Network billing mode based on maximum outbound bandwidth
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRAFFIC_POSTPAID_BY_HOUR: hourly pay-as-you-go by traffic; BANDWIDTH_POSTPAID_BY_HOUR: hourly pay-as-you-go by bandwidth;
BANDWIDTH_PACKAGE: billed by bandwidth package (currently, this method is supported only if the ISP is specified)
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Maximum outbound bandwidth in Mbps, which applies only to public network CLB. Value range: 0-65,535. Default value: 10.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Bandwidth package type, such as SINGLEISP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BandwidthpkgSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.BandwidthpkgSubType = 'BandwidthpkgSubType' in params ? params.BandwidthpkgSubType : null;

    }
}

/**
 * CreateLoadBalancerSnatIps request structure.
 * @class
 */
class CreateLoadBalancerSnatIpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a CLB instance, e.g., lb-12345678.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Information of the SNAT IP to be added. You can specify a SNAT IP or use the one automatically assigned by a subnet.
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Number of SNAT IPs to be added. This parameter is used in conjunction with `SnatIps`. Note that if `Ip` is specified in `SnapIps`, this parameter is not available. It defaults to `1` and the upper limit is `10`.
         * @type {number || null}
         */
        this.Number = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.Number = 'Number' in params ? params.Number : null;

    }
}

/**
 * DescribeTargetGroupInstances response structure.
 * @class
 */
class DescribeTargetGroupInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results returned for the current query
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of the bound server
         * @type {Array.<TargetGroupBackend> || null}
         */
        this.TargetGroupInstanceSet = null;

        /**
         * The actual total number of bound instances, which is not affected by the setting of `Limit`, `Offset` and the CAM permissions.
         * @type {number || null}
         */
        this.RealCount = null;

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

        if (params.TargetGroupInstanceSet) {
            this.TargetGroupInstanceSet = new Array();
            for (let z in params.TargetGroupInstanceSet) {
                let obj = new TargetGroupBackend();
                obj.deserialize(params.TargetGroupInstanceSet[z]);
                this.TargetGroupInstanceSet.push(obj);
            }
        }
        this.RealCount = 'RealCount' in params ? params.RealCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuota response structure.
 * @class
 */
class DescribeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota list
         * @type {Array.<Quota> || null}
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
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTargetGroups response structure.
 * @class
 */
class DeleteTargetGroupsResponse extends  AbstractModel {
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
 * ModifyTargetGroupInstancesPort request structure.
 * @class
 */
class ModifyTargetGroupInstancesPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Array of servers for which to modify ports
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

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
         * Binding target
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
 * Details of real servers bound to a listener
 * @class
 */
class ListenerBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Information of rules under a listener (applicable only to HTTP/HTTPS listeners)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RuleTargets> || null}
         */
        this.Rules = null;

        /**
         * List of real servers bound to a listener (applicable only to TCP/UDP/TCP_SSL listeners)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Backend> || null}
         */
        this.Targets = null;

        /**
         * Ending port in port range if port range is supported; 0 if port range is not supported
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleTargets();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Backend();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * HTTP/HTTPS forwarding rule (input)
 * @class
 */
class RuleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule path. Length: 1-200.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The domain name associated with the forwarding rule. It can contain 1-80 characters. Only one domain name can be entered. If you need to enter multiple domain names, use `Domains`.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Session persistence time in seconds. Value range: 30-3,600. Setting it to 0 indicates that session persistence is disabled.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Health check information. For more information, please see [Health Check](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1)
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * Request forwarding method of the rule. Value range: WRR, LEAST_CONN, IP_HASH
They represent weighted round robin, least connections, and IP hash, respectively. Default value: WRR.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Forwarding protocol between the CLB instance and real server. Currently, HTTP/HTTPS/TRPC are supported.
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * Whether to set this domain name as the default domain name. Note: Only one default domain name can be set under one listener.
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * Whether to enable HTTP/2. Note: HTTP/2 can be enabled only for HTTPS domain names.
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * Target real server type. NODE: binding a general node; TARGETGROUP: binding a target group.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * TRPC callee server route, which is required when `ForwardType` is `TRPC`.
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC calling service API, which is required when `ForwardType` is `TRPC`.
         * @type {string || null}
         */
        this.TrpcFunc = null;

        /**
         * Whether to enable QUIC. Note: QUIC can be enabled only for HTTPS domain names
         * @type {boolean || null}
         */
        this.Quic = null;

        /**
         * The domain name associated with the forwarding rule. Each contain 1-80 characters. If you only need to enter one domain name, use `Domain` instead.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Certificate information. You can specify multiple server-side certificates with different algorithm types. `Certificate` and `MultiCertInfo` cannot be specified at the same time. 
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;
        this.Quic = 'Quic' in params ? params.Quic : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }

    }
}

/**
 * CLB tag information
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * `SnatIp` information structure
 * @class
 */
class SnatIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique VPC subnet ID, such as `subnet-12345678`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * IP address, such as 192.168.0.1
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeBlockIPTask response structure.
 * @class
 */
class DescribeBlockIPTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1: running; 2: failed; 6: succeeded
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
 * DescribeResources request structure.
 * @class
 */
class DescribeResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned AZ resources. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting offset of the returned AZ resource list. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter to query the list of AZ resources as detailed below:
<li> `zone` - String - Optional - Filter by AZ, such as "ap-guangzhou-1".</li>
<li> `isp` -- String - Optional - Filter by the ISP. Values: `BGP`, `CMCC`, `CUCC` and `CTCC`.</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeClassicalLBListeners response structure.
 * @class
 */
class DescribeClassicalLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener list
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ClassicalListener> || null}
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
                let obj = new ClassicalListener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupAttribute response structure.
 * @class
 */
class ModifyTargetGroupAttributeResponse extends  AbstractModel {
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
 * ModifyLoadBalancerSla request structure.
 * @class
 */
class ModifyLoadBalancerSlaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance information.
         * @type {Array.<SlaUpdateParam> || null}
         */
        this.LoadBalancerSla = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancerSla) {
            this.LoadBalancerSla = new Array();
            for (let z in params.LoadBalancerSla) {
                let obj = new SlaUpdateParam();
                obj.deserialize(params.LoadBalancerSla[z]);
                this.LoadBalancerSla.push(obj);
            }
        }

    }
}

/**
 * DescribeBlockIPTask request structure.
 * @class
 */
class DescribeBlockIPTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID returned by the `ModifyBlockIPList` API
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
 * Resource details
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific ISP resource information, Vaules: `CMCC`, `CUCC`, `CTCC`, `BGP`, and `INTERNAL`.
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * ISP information, such as `CMCC`, `CUCC`, `CTCC`, `BGP`, and `INTERNAL`.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Available resources
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ResourceAvailability> || null}
         */
        this.AvailabilitySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Isp = 'Isp' in params ? params.Isp : null;

        if (params.AvailabilitySet) {
            this.AvailabilitySet = new Array();
            for (let z in params.AvailabilitySet) {
                let obj = new ResourceAvailability();
                obj.deserialize(params.AvailabilitySet[z]);
                this.AvailabilitySet.push(obj);
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
         * Array of unique CLB instance IDs.
This field may return `null` in some cases, such as there is delay during instance creation. You can query the IDs of the created instances by invoking `DescribeTaskStatus` with the `RequestId` or `DealName` returned by this API.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Order ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFunctionTargets request structure.
 * @class
 */
class ModifyFunctionTargetsRequest extends  AbstractModel {
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
         * The backend cloud functions to modify
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or `Domain`+`Url`.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target rule domain name. This parameter does not take effect if `LocationId` is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target rule URL. This parameter does not take effect if `LocationId` is specified.
         * @type {string || null}
         */
        this.Url = null;

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

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeRewrite response structure.
 * @class
 */
class DescribeRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of redirection forwarding rules. If there are no redirection rules, an empty array will be returned.
         * @type {Array.<RuleOutput> || null}
         */
        this.RewriteSet = null;

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

        if (params.RewriteSet) {
            this.RewriteSet = new Array();
            for (let z in params.RewriteSet) {
                let obj = new RuleOutput();
                obj.deserialize(params.RewriteSet[z]);
                this.RewriteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Quota description. All quotas are in the current region.
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota name. Valid values:
<li> `TOTAL_OPEN_CLB_QUOTA`: Quota of public network CLB instances in the current region</li>
<li> `TOTAL_INTERNAL_CLB_QUOTA`: Quota of private network CLB instances in the current region</li>
<li> `TOTAL_LISTENER_QUOTA`: Quota of listeners under one CLB instance</li>
<li> `TOTAL_LISTENER_RULE_QUOTA`: Quota of forwarding rules under one listener</li>
<li> `TOTAL_TARGET_BIND_QUOTA`: Quota of CVM instances can be bound under one forwarding rule</li>
<li> `TOTAL_SNAP_IP_QUOTA`: Quota of SNAT IPs for cross-region binding 2.0 under one CLB instance </li>
<li> `TOTAL_ISP_CLB_QUOTA`: Quota of triple-ISP (CMCC/CUCC/CTCC) CLB instances in the current region</li>
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * Currently used quantity. If it is `null`, it is meaningless.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * Quota limit.
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
 * SetLoadBalancerClsLog request structure.
 * @class
 */
class SetLoadBalancerClsLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLS logset ID
<li>Enter the ID of logset you need to add or update. You can acquire the ID by invoking [DescribeLogsets](https://intl.cloud.tencent.com/document/product/614/56454?from_cn_redirect=1).</li>
<li>To delete the log set, set this parameter to `null`.</li>
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * CLS log topic ID
<li>Enter the ID of log topic you need to add or update. You can acquire the ID by invoking [DescribeTopics](https://intl.cloud.tencent.com/document/product/614/56454?from_cn_redirect=1).</li>
<li>To delete the log set, set this parameter to `null`.</li>
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * Log type:
<li>`ACCESS`: access logs</li>
<li>`HEALTH`: health check logs</li>
Default: `ACCESS`
         * @type {string || null}
         */
        this.LogType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

    }
}

/**
 * Querying the binding relation of the CLB instance
 * @class
 */
class LBItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * String ID of the CLB instance.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * VIP of the CLB instance.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Listener rule.
         * @type {Array.<ListenerItem> || null}
         */
        this.Listeners = null;

        /**
         * Region of the CLB instance
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerItem();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;

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
 * DescribeIdleLoadBalancers request structure.
 * @class
 */
class DescribeIdleLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

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
         * CLB instance region
         * @type {string || null}
         */
        this.LoadBalancerRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.LoadBalancerRegion = 'LoadBalancerRegion' in params ? params.LoadBalancerRegion : null;

    }
}

/**
 * DeleteLoadBalancerSnatIps request structure.
 * @class
 */
class DeleteLoadBalancerSnatIpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a CLB instance, e.g., lb-12345678.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Array of the SNAT IP addresses to be deleted
         * @type {Array.<string> || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

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
         * Array of security group IDs. One CLB instance can be bound to up to 50 security groups. If you want to unbind all security groups, you do not need to pass in this parameter, or you can pass in an empty array.
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
 * DescribeClassicalLBTargets response structure.
 * @class
 */
class DescribeClassicalLBTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server list
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ClassicalTarget> || null}
         */
        this.Targets = null;

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

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new ClassicalTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Redirection relationship between forwarding rules
 * @class
 */
class RewriteLocationMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source forwarding rule ID
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * Forwarding rule ID of a redirect target
         * @type {string || null}
         */
        this.TargetLocationId = null;

        /**
         * Redirection status code. Valid values: 301, 302, and 307.
         * @type {number || null}
         */
        this.RewriteCode = null;

        /**
         * Whether the matched URL is carried in redirection. It is required when configuring `RewriteCode`.
         * @type {boolean || null}
         */
        this.TakeUrl = null;

        /**
         * Original domain name of redirection, which must be the corresponding domain name of `SourceLocationId`. It is required when configuring `RewriteCode`.
         * @type {string || null}
         */
        this.SourceDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.TargetLocationId = 'TargetLocationId' in params ? params.TargetLocationId : null;
        this.RewriteCode = 'RewriteCode' in params ? params.RewriteCode : null;
        this.TakeUrl = 'TakeUrl' in params ? params.TakeUrl : null;
        this.SourceDomain = 'SourceDomain' in params ? params.SourceDomain : null;

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
         * New port of the real server bound to a listener or forwarding rule
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target rule domain name. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target rule URL. This parameter does not take effect if LocationId is specified.
         * @type {string || null}
         */
        this.Url = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * Total number of CLB instances that meet the filter criteria. This value is independent of the Limit in the input parameter.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of returned CLB instances.
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
 * DescribeLBListeners response structure.
 * @class
 */
class DescribeLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener rule associated with the real server.
         * @type {Array.<LBItem> || null}
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
                let obj = new LBItem();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Target group information
 * @class
 */
class TargetGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * `vpcid` of target group
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Target group name
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * Default port of target group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Target group creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Target group modification time
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Array of associated rules
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AssociationItem> || null}
         */
        this.AssociatedRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.AssociatedRule) {
            this.AssociatedRule = new Array();
            for (let z in params.AssociatedRule) {
                let obj = new AssociationItem();
                obj.deserialize(params.AssociatedRule[z]);
                this.AssociatedRule.push(obj);
            }
        }

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
 * DeleteLoadBalancerSnatIps response structure.
 * @class
 */
class DeleteLoadBalancerSnatIpsResponse extends  AbstractModel {
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
 * Certificate information
 * @class
 */
class CertificateOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authentication type. Value range: UNIDIRECTIONAL (unidirectional authentication), MUTUAL (mutual authentication)
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * Server certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Client certificate ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * IDs of extra server certificates
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ExtCertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.ExtCertIds = 'ExtCertIds' in params ? params.ExtCertIds : null;

    }
}

/**
 * DeleteTargetGroups request structure.
 * @class
 */
class DeleteTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID array
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

    }
}

/**
 * DescribeClassicalLBListeners request structure.
 * @class
 */
class DescribeClassicalLBListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of CLB listener IDs
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * CLB listening protocol. Valid values: TCP, UDP, HTTP, and HTTPS.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CLB listening port. Value range: 1 - 65535.
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * Listener status. Valid values: 0 (creating) and 1 (running).
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Describes the health information of a target
 * @class
 */
class TargetHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of the target
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Port bound to the target
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Current health status. true: healthy; false: unhealthy.
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Instance ID of the target, such as ins-12345678
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Detailed information about the current health status. Alive: healthy; Dead: exceptional; Unknown: check not started/checking/unknown status.
         * @type {string || null}
         */
        this.HealthStatusDetail = null;

        /**
         * Detailed information about the current health status. Alive: healthy; Dead: exceptional; Unknown: check not started/checking/unknown status. This parameter will be discarded soon. We recommend that you use the HealthStatusDetail parameter.
         * @type {string || null}
         */
        this.HealthStatusDetial = null;

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
        this.HealthStatusDetial = 'HealthStatusDetial' in params ? params.HealthStatusDetial : null;

    }
}

/**
 * Association between rule and target group
 * @class
 */
class TargetGroupAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.LocationId = null;

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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * Health check information of the listener
 * @class
 */
class ListenerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * List of forwarding rules of the listener
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Rule associated with target group
 * @class
 */
class AssociationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of associated CLB instance
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * ID of associated listener
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * ID of associated forwarding rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Protocol type of associated listener, such as HTTP or TCP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port of associated listener
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Domain name of associated forwarding rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * URL of associated forwarding rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * CLB instance name
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;

    }
}

/**
 * Details of a real server bound to a listener
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server type. Valid values: CVM, ENI.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Unique ID of a real server, which can be obtained from the unInstanceId field in the return of the DescribeInstances API
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Listening port of a real server
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Forwarding weight of a real server. Value range: [0, 100]. Default value: 10.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Public IP of a real server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Private IP of a real server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Real server instance names
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Bound time of a real server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegisteredTime = null;

        /**
         * Unique ENI ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EniId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;

    }
}

/**
 * RegisterTargetGroupInstances request structure.
 * @class
 */
class RegisterTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Server instance array
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

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
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * CLB instance network type:
OPEN: public network; INTERNAL: private network.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB type identifier. Value range: 1 (CLB); 0 (classic CLB).
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * Domain name of the CLB instance. It is only available for public classic CLBs. This parameter will be discontinued soon. Please use `LoadBalancerDomain` instead.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * List of VIPs of a CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * CLB instance status, including:
0: creating; 1: running.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CLB instance creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last status change time of a CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusTime = null;

        /**
         * ID of the project to which a CLB instance belongs. 0: default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Protective CLB identifier. Value range: 1 (protective), 0 (non-protective).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OpenBgp = null;

        /**
         * SNAT is enabled for all private network classic CLB created before December 2016.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Snat = null;

        /**
         * 0: not isolated; 1: isolated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * Log information. Only the public network CLB that have HTTP or HTTPS listeners can generate logs.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Log = null;

        /**
         * Subnet where a CLB instance resides (meaningful only for private network VPC CLB)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * CLB instance tag information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Security group of a CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecureGroups = null;

        /**
         * Basic information of a backend server bound to a CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * Anycast CLB publishing region. For non-anycast CLB, this field returns an empty string.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AnycastZone = null;

        /**
         * IP version. Valid values: ipv4, ipv6
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * VPC ID in a numeric form
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NumericalVpcId = null;

        /**
         * ISP to which a CLB IP address belongs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Primary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ZoneInfo || null}
         */
        this.MasterZone = null;

        /**
         * Secondary AZ
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ZoneInfo> || null}
         */
        this.BackupZoneSet = null;

        /**
         * CLB instance isolation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * CLB instance expiration time, which takes effect only for prepaid instances
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Billing mode of CLB instance. Valid values: PREPAID (monthly subscription), POSTPAID_BY_HOUR (pay as you go).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * CLB instance network attributes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * Prepaid billing attributes of a CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * Logset ID of CLB Log Service (CLS)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Log topic ID of CLB Log Service (CLS)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * IPv6 address of a CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * Reserved field which can be ignored generally.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * Whether an Anti-DDoS Pro instance can be bound
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDDos = null;

        /**
         * Custom configuration ID at the CLB instance level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Whether a real server opens the traffic from a CLB instance to the internet
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * Private network dedicated cluster
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * This field is meaningful only when the IP address version is `ipv6`. Valid values: IPv6Nat64, IPv6FullChain
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * Whether to enable SnatPro.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * `SnatIp` list after SnatPro load balancing is enabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Specification of the LCU-supported instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * Whether VIP is blocked
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsBlock = null;

        /**
         * Time blocked or unblocked
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsBlockTime = null;

        /**
         * Whether the IP type is the local BGP
         * @type {boolean || null}
         */
        this.LocalBgp = null;

        /**
         * Dedicated layer-7 tag.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * If the layer-7 listener of an IPv6FullChain CLB instance is enabled, the CLB instance can be bound with an IPv4 and an IPv6 CVM instance simultaneously.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.MixIpTarget = null;

        /**
         * Availability zone of a VPC-based private network CLB instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Whether it is an NFV CLB instance. No returned information: no; l7nfv: yes.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NfvInfo = null;

        /**
         * Health check logset ID of CLB CLS
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HealthLogSetId = null;

        /**
         * Health check log topic ID of CLB CLS
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HealthLogTopicId = null;

        /**
         * Cluster ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * CLB attribute
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AttributeFlags = null;

        /**
         * Domain name of the CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerDomain = null;

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
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.OpenBgp = 'OpenBgp' in params ? params.OpenBgp : null;
        this.Snat = 'Snat' in params ? params.Snat : null;
        this.Isolation = 'Isolation' in params ? params.Isolation : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SecureGroups = 'SecureGroups' in params ? params.SecureGroups : null;

        if (params.TargetRegionInfo) {
            let obj = new TargetRegionInfo();
            obj.deserialize(params.TargetRegionInfo)
            this.TargetRegionInfo = obj;
        }
        this.AnycastZone = 'AnycastZone' in params ? params.AnycastZone : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.NumericalVpcId = 'NumericalVpcId' in params ? params.NumericalVpcId : null;
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.MasterZone) {
            let obj = new ZoneInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.BackupZoneSet) {
            this.BackupZoneSet = new Array();
            for (let z in params.BackupZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.BackupZoneSet[z]);
                this.BackupZoneSet.push(obj);
            }
        }
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.NetworkAttributes) {
            let obj = new InternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }

        if (params.PrepaidAttributes) {
            let obj = new LBChargePrepaid();
            obj.deserialize(params.PrepaidAttributes)
            this.PrepaidAttributes = obj;
        }
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.AddressIPv6 = 'AddressIPv6' in params ? params.AddressIPv6 : null;

        if (params.ExtraInfo) {
            let obj = new ExtraInfo();
            obj.deserialize(params.ExtraInfo)
            this.ExtraInfo = obj;
        }
        this.IsDDos = 'IsDDos' in params ? params.IsDDos : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.IPv6Mode = 'IPv6Mode' in params ? params.IPv6Mode : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.IsBlock = 'IsBlock' in params ? params.IsBlock : null;
        this.IsBlockTime = 'IsBlockTime' in params ? params.IsBlockTime : null;
        this.LocalBgp = 'LocalBgp' in params ? params.LocalBgp : null;
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.MixIpTarget = 'MixIpTarget' in params ? params.MixIpTarget : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NfvInfo = 'NfvInfo' in params ? params.NfvInfo : null;
        this.HealthLogSetId = 'HealthLogSetId' in params ? params.HealthLogSetId : null;
        this.HealthLogTopicId = 'HealthLogTopicId' in params ? params.HealthLogTopicId : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.AttributeFlags = 'AttributeFlags' in params ? params.AttributeFlags : null;
        this.LoadBalancerDomain = 'LoadBalancerDomain' in params ? params.LoadBalancerDomain : null;

    }
}

module.exports = {
    DeleteRewriteRequest: DeleteRewriteRequest,
    DescribeTargetGroupListResponse: DescribeTargetGroupListResponse,
    DescribeQuotaRequest: DescribeQuotaRequest,
    DescribeTargetGroupListRequest: DescribeTargetGroupListRequest,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    RulesItems: RulesItems,
    ExtraInfo: ExtraInfo,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DescribeLoadBalancerOverviewResponse: DescribeLoadBalancerOverviewResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    CloneLoadBalancerRequest: CloneLoadBalancerRequest,
    DisassociateTargetGroupsResponse: DisassociateTargetGroupsResponse,
    SetLoadBalancerClsLogResponse: SetLoadBalancerClsLogResponse,
    DescribeLoadBalancerTrafficResponse: DescribeLoadBalancerTrafficResponse,
    MultiCertInfo: MultiCertInfo,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeCustomizedConfigListResponse: DescribeCustomizedConfigListResponse,
    DescribeBlockIPListResponse: DescribeBlockIPListResponse,
    DescribeRewriteRequest: DescribeRewriteRequest,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    DescribeTargetGroupInstancesRequest: DescribeTargetGroupInstancesRequest,
    DescribeIdleLoadBalancersResponse: DescribeIdleLoadBalancersResponse,
    AssociateTargetGroupsRequest: AssociateTargetGroupsRequest,
    ClassicalTarget: ClassicalTarget,
    ListenerItem: ListenerItem,
    RsWeightRule: RsWeightRule,
    RegisterFunctionTargetsRequest: RegisterFunctionTargetsRequest,
    DeregisterTargetsFromClassicalLBRequest: DeregisterTargetsFromClassicalLBRequest,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    BasicTargetGroupInfo: BasicTargetGroupInfo,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    ZoneResource: ZoneResource,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    TargetGroupInstance: TargetGroupInstance,
    DescribeClassicalLBByInstanceIdResponse: DescribeClassicalLBByInstanceIdResponse,
    CreateRuleResponse: CreateRuleResponse,
    CrossTargets: CrossTargets,
    RuleHealth: RuleHealth,
    ModifyDomainRequest: ModifyDomainRequest,
    IdleLoadBalancer: IdleLoadBalancer,
    RegisterTargetGroupInstancesResponse: RegisterTargetGroupInstancesResponse,
    ClassicalTargetInfo: ClassicalTargetInfo,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ZoneInfo: ZoneInfo,
    RegisterTargetsWithClassicalLBResponse: RegisterTargetsWithClassicalLBResponse,
    DescribeTargetGroupsResponse: DescribeTargetGroupsResponse,
    LoadBalancerHealth: LoadBalancerHealth,
    ModifyLoadBalancerSlaResponse: ModifyLoadBalancerSlaResponse,
    DeleteLoadBalancerListenersRequest: DeleteLoadBalancerListenersRequest,
    BlockedIP: BlockedIP,
    ModifyRuleResponse: ModifyRuleResponse,
    DescribeClassicalLBTargetsRequest: DescribeClassicalLBTargetsRequest,
    DeregisterFunctionTargetsResponse: DeregisterFunctionTargetsResponse,
    DescribeCustomizedConfigListRequest: DescribeCustomizedConfigListRequest,
    AutoRewriteRequest: AutoRewriteRequest,
    DescribeCrossTargetsResponse: DescribeCrossTargetsResponse,
    FunctionInfo: FunctionInfo,
    ModifyFunctionTargetsResponse: ModifyFunctionTargetsResponse,
    DescribeLoadBalancerListByCertIdResponse: DescribeLoadBalancerListByCertIdResponse,
    ModifyTargetGroupInstancesWeightResponse: ModifyTargetGroupInstancesWeightResponse,
    DescribeTargetGroupsRequest: DescribeTargetGroupsRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    DescribeLBListenersRequest: DescribeLBListenersRequest,
    SlaUpdateParam: SlaUpdateParam,
    Target: Target,
    DescribeLoadBalancerTrafficRequest: DescribeLoadBalancerTrafficRequest,
    DescribeBlockIPListRequest: DescribeBlockIPListRequest,
    CertIdRelatedWithLoadBalancers: CertIdRelatedWithLoadBalancers,
    DescribeClassicalLBHealthStatusResponse: DescribeClassicalLBHealthStatusResponse,
    DescribeClsLogSetRequest: DescribeClsLogSetRequest,
    Listener: Listener,
    LoadBalancerTraffic: LoadBalancerTraffic,
    ConfigListItem: ConfigListItem,
    RegisterTargetsWithClassicalLBRequest: RegisterTargetsWithClassicalLBRequest,
    ModifyDomainAttributesResponse: ModifyDomainAttributesResponse,
    ReplaceCertForLoadBalancersResponse: ReplaceCertForLoadBalancersResponse,
    DescribeTargetsResponse: DescribeTargetsResponse,
    ModifyListenerRequest: ModifyListenerRequest,
    DeregisterTargetGroupInstancesResponse: DeregisterTargetGroupInstancesResponse,
    RegisterTargetsRequest: RegisterTargetsRequest,
    HealthCheck: HealthCheck,
    AssociateTargetGroupsResponse: AssociateTargetGroupsResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteListenerRequest: DeleteListenerRequest,
    ClassicalHealth: ClassicalHealth,
    DescribeCustomizedConfigAssociateListRequest: DescribeCustomizedConfigAssociateListRequest,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    MigrateClassicalLoadBalancersRequest: MigrateClassicalLoadBalancersRequest,
    DescribeLoadBalancersDetailRequest: DescribeLoadBalancersDetailRequest,
    TargetGroupBackend: TargetGroupBackend,
    DeregisterFunctionTargetsRequest: DeregisterFunctionTargetsRequest,
    DescribeClassicalLBByInstanceIdRequest: DescribeClassicalLBByInstanceIdRequest,
    FunctionTarget: FunctionTarget,
    DescribeResourcesResponse: DescribeResourcesResponse,
    ModifyTargetGroupInstancesWeightRequest: ModifyTargetGroupInstancesWeightRequest,
    ManualRewriteResponse: ManualRewriteResponse,
    ModifyBlockIPListRequest: ModifyBlockIPListRequest,
    ModifyBlockIPListResponse: ModifyBlockIPListResponse,
    ExclusiveCluster: ExclusiveCluster,
    DescribeClassicalLBHealthStatusRequest: DescribeClassicalLBHealthStatusRequest,
    DescribeListenersRequest: DescribeListenersRequest,
    CreateClsLogSetResponse: CreateClsLogSetResponse,
    DescribeCrossTargetsRequest: DescribeCrossTargetsRequest,
    LBChargePrepaid: LBChargePrepaid,
    ClassicalListener: ClassicalListener,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    CertificateInput: CertificateInput,
    ResourceAvailability: ResourceAvailability,
    DescribeCustomizedConfigAssociateListResponse: DescribeCustomizedConfigAssociateListResponse,
    SetCustomizedConfigForLoadBalancerRequest: SetCustomizedConfigForLoadBalancerRequest,
    CreateListenerResponse: CreateListenerResponse,
    CreateTargetGroupResponse: CreateTargetGroupResponse,
    MigrateClassicalLoadBalancersResponse: MigrateClassicalLoadBalancersResponse,
    CreateLoadBalancerSnatIpsResponse: CreateLoadBalancerSnatIpsResponse,
    ClassicalLoadBalancerInfo: ClassicalLoadBalancerInfo,
    DescribeListenersResponse: DescribeListenersResponse,
    RuleOutput: RuleOutput,
    RegisterFunctionTargetsResponse: RegisterFunctionTargetsResponse,
    CreateTopicResponse: CreateTopicResponse,
    CreateRuleRequest: CreateRuleRequest,
    ModifyTargetGroupInstancesPortResponse: ModifyTargetGroupInstancesPortResponse,
    LbRsItem: LbRsItem,
    RuleTargets: RuleTargets,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    DeregisterTargetGroupInstancesRequest: DeregisterTargetGroupInstancesRequest,
    ManualRewriteRequest: ManualRewriteRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    CertInfo: CertInfo,
    CreateTargetGroupRequest: CreateTargetGroupRequest,
    ClusterItem: ClusterItem,
    BindDetailItem: BindDetailItem,
    CreateListenerRequest: CreateListenerRequest,
    CreateClsLogSetRequest: CreateClsLogSetRequest,
    DisassociateTargetGroupsRequest: DisassociateTargetGroupsRequest,
    Filter: Filter,
    ModifyDomainResponse: ModifyDomainResponse,
    RegisterTargetsResponse: RegisterTargetsResponse,
    DeregisterTargetsFromClassicalLBResponse: DeregisterTargetsFromClassicalLBResponse,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    SetCustomizedConfigForLoadBalancerResponse: SetCustomizedConfigForLoadBalancerResponse,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    AutoRewriteResponse: AutoRewriteResponse,
    DeregisterTargetsResponse: DeregisterTargetsResponse,
    DescribeLoadBalancerOverviewRequest: DescribeLoadBalancerOverviewRequest,
    RewriteTarget: RewriteTarget,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    DescribeLoadBalancersDetailResponse: DescribeLoadBalancersDetailResponse,
    LoadBalancerDetail: LoadBalancerDetail,
    LbRsTargets: LbRsTargets,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    DeleteRewriteResponse: DeleteRewriteResponse,
    BatchTarget: BatchTarget,
    DescribeLoadBalancerListByCertIdRequest: DescribeLoadBalancerListByCertIdRequest,
    TargetRegionInfo: TargetRegionInfo,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    ReplaceCertForLoadBalancersRequest: ReplaceCertForLoadBalancersRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    CloneLoadBalancerResponse: CloneLoadBalancerResponse,
    DescribeClsLogSetResponse: DescribeClsLogSetResponse,
    ModifyTargetGroupAttributeRequest: ModifyTargetGroupAttributeRequest,
    ModifyDomainAttributesRequest: ModifyDomainAttributesRequest,
    DeregisterTargetsRequest: DeregisterTargetsRequest,
    InternetAccessible: InternetAccessible,
    CreateLoadBalancerSnatIpsRequest: CreateLoadBalancerSnatIpsRequest,
    DescribeTargetGroupInstancesResponse: DescribeTargetGroupInstancesResponse,
    DescribeQuotaResponse: DescribeQuotaResponse,
    DeleteTargetGroupsResponse: DeleteTargetGroupsResponse,
    ModifyTargetGroupInstancesPortRequest: ModifyTargetGroupInstancesPortRequest,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    ListenerBackend: ListenerBackend,
    RuleInput: RuleInput,
    TagInfo: TagInfo,
    SnatIp: SnatIp,
    DescribeBlockIPTaskResponse: DescribeBlockIPTaskResponse,
    DescribeResourcesRequest: DescribeResourcesRequest,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    ModifyTargetGroupAttributeResponse: ModifyTargetGroupAttributeResponse,
    ModifyLoadBalancerSlaRequest: ModifyLoadBalancerSlaRequest,
    DescribeBlockIPTaskRequest: DescribeBlockIPTaskRequest,
    Resource: Resource,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    ModifyFunctionTargetsRequest: ModifyFunctionTargetsRequest,
    DescribeRewriteResponse: DescribeRewriteResponse,
    Quota: Quota,
    SetLoadBalancerClsLogRequest: SetLoadBalancerClsLogRequest,
    LBItem: LBItem,
    DeleteLoadBalancerListenersResponse: DeleteLoadBalancerListenersResponse,
    DescribeIdleLoadBalancersRequest: DescribeIdleLoadBalancersRequest,
    DeleteLoadBalancerSnatIpsRequest: DeleteLoadBalancerSnatIpsRequest,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeClassicalLBTargetsResponse: DescribeClassicalLBTargetsResponse,
    RewriteLocationMap: RewriteLocationMap,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DescribeLBListenersResponse: DescribeLBListenersResponse,
    TargetGroupInfo: TargetGroupInfo,
    DeleteListenerResponse: DeleteListenerResponse,
    DeleteLoadBalancerSnatIpsResponse: DeleteLoadBalancerSnatIpsResponse,
    CertificateOutput: CertificateOutput,
    DeleteTargetGroupsRequest: DeleteTargetGroupsRequest,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    TargetHealth: TargetHealth,
    TargetGroupAssociation: TargetGroupAssociation,
    ListenerHealth: ListenerHealth,
    AssociationItem: AssociationItem,
    Backend: Backend,
    RegisterTargetGroupInstancesRequest: RegisterTargetGroupInstancesRequest,
    LoadBalancer: LoadBalancer,

}
