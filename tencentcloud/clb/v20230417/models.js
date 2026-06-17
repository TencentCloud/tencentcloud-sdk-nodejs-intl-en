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
const AbstractModel = require("../../common/abstract_model");

/**
 * Retention type
 * @class
 */
class LBChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reserved field.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Reserved field.
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
         * Listener backend forwarding port
         * @type {number || null}
         */
        this.InstancePort = null;

        /**
         * listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol type
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Session hold time
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * Whether health check is enabled. 1: Enabled; 0: Disabled
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * Response timeout duration
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * check interval
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * health threshold
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * unhealthy threshold
         * @type {number || null}
         */
        this.AbnormalNum = null;

        /**
         * Request balancing method for listeners of the classic public network CLB. An empty string or wrr indicates weighted round robin. ip_hash indicates consistent hashing based on the accessed source IP address. least_conn indicates least connections.
         * @type {string || null}
         */
        this.HttpHash = null;

        /**
         * Health check return code for HTTP and HTTPS listeners of a public network Classic CLB instance. For more information, refer to the explanation of this field in the listener creation API.
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * Health check path for HTTP and HTTPS listeners of a public network Classic CLB instance
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * Authentication method for an HTTPS listener of a public network Classic CLB instance
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * Server certificate ID for an HTTPS listener of a public network Classic CLB instance
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Client certificate ID for an HTTPS listener of a public network Classic CLB instance
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * Listener status. 0: Creating; 1: Running
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
        this.AbnormalNum = 'AbnormalNum' in params ? params.AbnormalNum : null;
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
         * Network of the target. For VPC, the format is vpc-abcd1234. For a basic network, the value is 0.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Target's network, in the format of 86323 for a private network, or 0 if it is a basic network
         * @type {number || null}
         */
        this.NumericalVpcId = null;

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
        this.NumericalVpcId = 'NumericalVpcId' in params ? params.NumericalVpcId : null;

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
         * Operation type.
-ADD
- DELETE: delete.
-UPDATE: Modify
-BIND: bind
-UNBIND: unbound
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * This field is required except for creating custom configurations. Example: pz-1234abcd
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Personalized configuration content. This field is required when creating custom configuration or modifying the content of custom configuration.
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * This field is required when you create or modify the name of a custom configuration.
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * Load balancing instance ID. This field is required for bind/unbind.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
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
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * Configuration type. CLB: CLB dimension; SERVER: Domain name dimension; LOCATION: Rule dimension.
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Pagination offset. Default: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results. Default: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specify the name of configurations to query. Fuzzy match is supported.
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * Configuration ID
         * @type {Array.<string> || null}
         */
        this.ConfigIds = null;

        /**
         * Filter criteria are as follows:
<li> loadbalancer-id - String - Required: No - (Filter condition) Filter by CLB ID, for example: "lb-12345678".</li>
<li> vip - String - Required: No - (Filter condition) Filter by CLB vip, for example: "1.1.1.1", "2204::22:3".</li>
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
        this.ConfigIds = 'ConfigIds' in params ? params.ConfigIds : null;

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
 * Reserved. Generally unnecessary for users to concern.
 * @class
 */
class ExtraInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable VIP Direct Connect
         * @type {boolean || null}
         */
        this.Dnat = null;

        /**
         * TgwGroup name
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
        this.Dnat = 'Dnat' in params ? params.Dnat : null;
        this.TgwGroupName = 'TgwGroupName' in params ? params.TgwGroupName : null;

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
         * Binding relationship list
         * @type {Array.<BindDetailItem> || null}
         */
        this.BindList = null;

        /**
         * Total number of binding relationships
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CloneLoadBalancer response structure.
 * @class
 */
class CloneLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * BatchModifyTargetWeight response structure.
 * @class
 */
class BatchModifyTargetWeightResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Certificate ID and the list of CLB instances associated with the certificate ID
         * @type {Array.<CertIdRelatedWithLoadBalancers> || null}
         */
        this.CertSet = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateLoadBalancer request structure.
 * @class
 */
class CreateLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Network type of the Cloud Load Balancer instance:<br>OPEN: public network attribute, INTERNAL: private network attribute.</p>
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * <p>Type of the Cloud Load Balancer instance. 1: Common Cloud Load Balancer instance. Currently only support input 1.</p>
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * <p>The name of a Cloud Load Balancer instance takes effect only when creating an instance. Rule: 1-80 characters in internationally compatible languages, including English letters, Chinese characters, digits, hyphens "-", underscores "_", and other common characters (Unicode supplementary characters such as emojis and rare Chinese characters are forbidden). Note: If the name is identical to that of an existing Cloud Load Balancer instance in the system, the system will automatically generate a name for the newly created CLB instance.</p>
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * <p>The network ID of the backend target device belonging to the Cloud Load Balancer, such as vpc-12345678, can be obtained through the <a href="https://www.tencentcloud.com/document/product/215/15778?from_cn_redirect=1">DescribeVpcs</a> API. It defaults to DefaultVPC if this parameter is not specified. This parameter is required when creating a private network CLB instance.</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>A subnet ID must be specified when you purchase a private network CLB instance under a VPC. The VIP of the private network CLB instance is generated in this subnet. This parameter is required when you create a private network CLB instance but not supported when you create a public network IPv4 CLB instance.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>The project ID associated with the Cloud Load Balancer instance can be obtained through the <a href="https://www.tencentcloud.com/document/api/651/78725?from_cn_redirect=1">DescribeProject</a> API. If this parameter is left blank, it will be used as the default project.</p>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>Applicable only to public network CLB. IP version, valid values: IPV4, IPV6, IPv6FullChain, case-insensitive, default value IPV4. Description: A value of IPV6 means IPV6 NAT64 version; a value of IPv6FullChain means IPv6 version.</p>
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * <p>Count of Cloud Load Balancers to create. Default value: 1.</p>
         * @type {number || null}
         */
        this.Number = null;

        /**
         * <p>Applicable only to public network IPv4 Cloud Load Balancer. Sets the primary AZ ID for cross-AZ disaster recovery, such as 100001 or ap-guangzhou-1.<br>Note: The primary AZ loads traffic. The secondary AZ does not load traffic by default and is used only if the primary AZ becomes unavailable. Currently, primary and secondary AZs are supported only for IPv4 CLB instances in Guangzhou, Shanghai, Nanjing, Beijing, Chengdu, Shenzhen Finance, Hong Kong (China), Seoul, Frankfurt, and Singapore regions. You can call the <a href="https://www.tencentcloud.com/document/api/214/70213?from_cn_redirect=1">DescribeResources</a> API to query the primary AZ list of a region. [If you need to experience this feature, submit a ticket](https://console.cloud.tencent.com/workorder/category).</p>
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * <p>Applicable only to public network load balancing with IPv4 version. Availability zone ID. Designated availability zone to create a CLB instance, for example: ap-guangzhou-1.</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Maximum outbound bandwidth under the network billing mode. It applies only to LCU-supported instances of the private network type and all instances of the public network type.</p>
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * <p>Applicable only to public network CLB. Currently, static single-line IP type is supported in Guangzhou, Shanghai, Nanjing, Jinan, Hangzhou, Fuzhou, Beijing, Shijiazhuang, Wuhan, Changsha, Chengdu, and Chongqing regions. If you need to experience it, contact business manager to submit a request. After approval, just select CMCC, CUCC, or CTCC as the operator type. Only can be used BANDWIDTH_PACKAGE for network billing mode. If this parameter is not specified, use BGP by default. You can check ISPs supported in a region via the <a href="https://www.tencentcloud.com/document/api/214/70213?from_cn_redirect=1">DescribeResources</a> api query.</p>
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * <p>When you purchase Cloud Load Balancer (CLB), you can tag it with up to 20 tag key-value pairs.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Apply for a Cloud Load Balancer with a designated VIP. This parameter is optional. If this parameter is not specified, the VIP is assigned by system. This parameter is supported for IPv4 and IPv6 types but unsupported for IPv6 NAT64 type.<br>Note: When specifying a VIP to create a private network instance or a public IPv6 BGP instance, creation fails if the VIP is not within the specified VPC subnet or if the VIP is already occupied.</p>
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * <p>Bandwidth package ID. If this parameter is specified, the network billing mode (InternetAccessible.InternetChargeType) will only support billing by bandwidth package (BANDWIDTH_PACKAGE). The attributes of the bandwidth package determine the settlement method. For IPv6 CLB instances purchased by non-promoted users, if the ISP type is not BGP, the bandwidth package ID cannot be specified.</p>
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * <p>Dedicated instance info. This parameter is required when creating a private network CLB instance of exclusive type.</p>
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * <p>Performance capacity specification.</p><ul><li>If you need to create an LCU-supported instance, this parameter is required. Valid values:<ul><li> clb.c2.medium: Standard </li><li> clb.c3.small: Advanced 1 </li><li> clb.c3.medium: Advanced 2 </li><li> clb.c4.small: Super Large 1 </li><li> clb.c4.medium: Super Large 2 </li><li> clb.c4.large: Super Large 3 </li><li> clb.c4.xlarge: Super Large 4 </li></ul></li><li>For domestic site users, this parameter is not required when creating a shared instance. For international site users, the default purchased instance is standard if this parameter is not passed.</li></ul> For specification details, see [Instance Specifications Comparison](https://www.tencentcloud.com/document/product/214/84689?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * <p>A string used to ensure request idempotency. This string is generated by the customer and must be unique among different requests, with a maximum value of no more than 64 ASCII characters. If not specified, request idempotency cannot be guaranteed.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Whether the cross-regional or cross-Vpc IP binding feature is supported.</p>
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * <p>After enabling the cross-regional/cross-Vpc IP binding feature, create a SnatIp.</p>
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * <p>Tag of the Stgw exclusive cluster.</p>
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * <p>Applicable only to public network load balancing with IPv4 version. Sets the secondary AZ ID for cross-AZ disaster recovery, such as 100001 or ap-guangzhou-1.<br>Note: The secondary AZ is the availability zone that needs to carry traffic after primary availability zone failure. You can query a region's list of primary/secondary AZs via the <a href="https://www.tencentcloud.com/document/api/214/70213?from_cn_redirect=1">DescribeResources</a> API. [If you need to trial the feature, submit a <a href="https://console.cloud.tencent.com/workorder/category">ticket application</a>]</p>
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * <p>Unique ID of EIP, such as eip-11112222, applicable only to private network CLB to bind EIP.</p>
         * @type {string || null}
         */
        this.EipAddressId = null;

        /**
         * <p>Allow CLB traffic to the Target. Enable (true): verify security groups on CLB; deny CLB traffic to the Target (false): verify security groups on both CLB and backend instances.</p>
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * <p>Network outbound</p>
         * @type {string || null}
         */
        this.Egress = null;

        /**
         * <p>Prepaid billing attributes of the Cloud Load Balancer instance</p>
         * @type {LBChargePrepaid || null}
         */
        this.LBChargePrepaid = null;

        /**
         * <p>Billing type of the CLB instance. Valid values: POSTPAID_BY_HOUR and PREPAID. Default value: POSTPAID_BY_HOUR.</p>
         * @type {string || null}
         */
        this.LBChargeType = null;

        /**
         * <p>L7 access log topic ID</p>
         * @type {string || null}
         */
        this.AccessLogTopicId = null;

        /**
         * <p>Whether layer-7 advanced routing is enabled</p>
         * @type {boolean || null}
         */
        this.AdvancedRoute = null;

        /**
         * <p>Availability zone affinity info</p>
         * @type {AvailableZoneAffinityInfo || null}
         */
        this.AvailableZoneAffinityInfo = null;

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
        this.Egress = 'Egress' in params ? params.Egress : null;

        if (params.LBChargePrepaid) {
            let obj = new LBChargePrepaid();
            obj.deserialize(params.LBChargePrepaid)
            this.LBChargePrepaid = obj;
        }
        this.LBChargeType = 'LBChargeType' in params ? params.LBChargeType : null;
        this.AccessLogTopicId = 'AccessLogTopicId' in params ? params.AccessLogTopicId : null;
        this.AdvancedRoute = 'AdvancedRoute' in params ? params.AdvancedRoute : null;

        if (params.AvailableZoneAffinityInfo) {
            let obj = new AvailableZoneAffinityInfo();
            obj.deserialize(params.AvailableZoneAffinityInfo)
            this.AvailableZoneAffinityInfo = obj;
        }

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
         * Load balancing instance name
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Listener list
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
 * DescribeTargetHealth request structure.
 * @class
 */
class DescribeTargetHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CLB instance IDs to query.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Listener ID list to query.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * List of forwarding rule IDs to query.
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;

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
         * CLB ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * The name of the cloned CLB instance. Rule: 1-60 English letters, Chinese characters, digits, hyphens "-", or underscores "_".
Note: If the name is the same as an existing Cloud Load Balancer instance in the system, the system will automatically generate the name of the created CLB instance.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * The project ID associated with the Cloud Load Balancer instance can be obtained through the [DescribeLoadBalancers](https://www.tencentcloud.com/document/product/214/30685?from_cn_redirect=1) API. If this parameter is not specified, it will be used as the default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Applicable only to public network CLB. Sets the primary AZ ID for cross-AZ disaster recovery, such as 100001 or ap-guangzhou-1.
Note: The primary AZ loads traffic, while the secondary AZ does not load traffic by default and is used only if the primary AZ becomes unavailable. The platform will automatically select the optimal secondary AZ. You can call the [DescribeResources](https://www.tencentcloud.com/document/api/214/70213?from_cn_redirect=1) API to query the primary AZ list of a region.
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * Applicable only to public network CLB. Sets the secondary AZ ID for cross-AZ disaster recovery, such as 100001 or ap-guangzhou-1.
Note: The secondary AZ sustains traffic when the primary AZ encounters faults. You can call the [DescribeResources](https://www.tencentcloud.com/document/api/214/70213?from_cn_redirect=1) API to query the list of primary/secondary AZs in a region.
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * Applicable only to public network CLB. Availability zone ID. Specify an availability zone to create a Cloud Load Balancer instance, for example, ap-guangzhou-1. If not specified, queries CVM instances in all AZs. If needed, call the DescribeZones API (https://www.tencentcloud.com/document/product/213/15707?from_cn_redirect=1) to query the availability zone list.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB network billing mode, applicable only to public network CLB instances.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * It only applies to public CLB. Currently, the static single-line IP type is supported only for the regions of Guangzhou, Shanghai, Nanjing, Jinan, Hangzhou, Fuzhou, Beijing, Shijiazhuang, Wuhan, Changsha, Chengdu, and Chongqing. If you need to experience it, contact your business manager. After approval, you can select the ISP type as China Mobile (CMCC), China Unicom (CUCC), or China Telecom (CTCC). The network billing mode should be selected as billing by bandwidth package (BANDWIDTH_PACKAGE). If this parameter is not specified, BGP is used by default. You can use the DescribeResources API to query ISPs supported for a region.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Designate a Vip to apply for Cloud Load Balancer.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * When you purchase Cloud Load Balancer (CLB), you can tag it.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Exclusive cluster information.
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * Bandwidth package ID. If this parameter is specified, the network billing mode (InternetAccessible.InternetChargeType) supports only billing by bandwidth package (BANDWIDTH_PACKAGE).
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * Whether to support the feature of binding IP addresses across regions/VPCs.
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * SNAT IP addresses to be created when the feature of cross-region/cross-VPC IP address binding is enabled.
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Public network exclusive cluster ID or CDCId.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Performance capacity specification.<li>clb.c2.medium (standard type)</li><li>clb.c3.small (advanced type 1)</li><li>clb.c3.medium (advanced type 2)</li><li>clb.c4.small (high-strength type 1)</li><li>clb.c4.medium (high-strength type 2)</li><li>clb.c4.large (high-strength type 3)</li><li>clb.c4.xlarge (high-strength type 4)</li>
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * Exclusive STGW cluster tag.
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * Applicable only to private network CLB. When connected to nearby via private network, select availability zone for deployment. You can call the [DescribeZones](https://www.tencentcloud.com/document/product/213/15707?from_cn_redirect=1) API to query the availability zone list.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Unique ID of an EIP, in the format of eip-11112222, which is applicable only for binding EIP to private network CLB.
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
 * Forwarding target, namely, a real server bound to the CLB instance
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listening port of the backend service.
Note: This parameter must be specified when binding to CVM (Cloud Virtual Machine) or ENI (Elastic Network Interface).
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Backend service type, optional: CVM (Cloud Virtual Machine), ENI (Elastic Network Interface). As an input parameter, this parameter does not take effect.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This parameter must be passed in when binding to CVM. It represents the unique ID of the CVM and can be obtained from the InstanceId field in the response of the DescribeInstances API. It indicates binding to the primary IPv4 address of the primary network interface. The following scenarios do not support specifying InstanceId: binding to non-CVM resources, binding to auxiliary network interface IPs on CVM, binding to CVM through cross-region 2.0, and binding to IPv6 addresses of CVM.
Note: You can only input one of the InstanceId or EniIp parameter.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The forwarding weight of the backend service after modification, with a value range of [0, 100], defaults to 10. This parameter has a higher priority than the Weight parameter in [RsWeightRule](https://www.tencentcloud.com/document/api/214/30694?from_cn_redirect=1#RsWeightRule). The final weight value is based on this Weight parameter. Only when this Weight parameter is empty, the Weight parameter in RsWeightRule will be used.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * This parameter must be passed in for IP binding. It supports ENI IPs and other private IP addresses. If it is an ENI, it must first bind to a CVM before binding to a CLB instance.
Note: You can only input one of the InstanceId or EniIp parameter. If it is binding a dual-stack IPV6 instance, you must pass this parameter. If it is cross-region binding, you must pass the parameter, and the InstanceId parameter is not supported.
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
 * Modify the data type of a node weight
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
         * List of real servers for which weights are to be modified.
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID, which is required only for Layer-7 rules but not for Layer-4 rules.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Domain name of the target rule. This parameter will not take effect when LocationId parameter is provided.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * URL of the target rule. This parameter will not take effect when the LocationId parameter is provided.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The forwarding weight of the backend service after modification, value ranges from 0 to 100. This parameter has a lower priority than the Weight parameter in the Target (https://www.tencentcloud.com/document/api/214/30694?from_cn_redirect=1#Target). The final weight value is determined by the Weight parameter in the Target, and only when the Weight parameter in the Target is empty, the Weight parameter in the RsWeightRule takes effect.
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
 * DescribeCustomizedConfigList response structure.
 * @class
 */
class DescribeCustomizedConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration list
         * @type {Array.<ConfigListItem> || null}
         */
        this.ConfigList = null;

        /**
         * Number of configurations
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Certificate ID and the list of CLB instances associated with the certificate ID
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
         * List of CLB instances associated with the certificate
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
 * Health check status of a forwarding rule
 * @class
 */
class RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID.
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
         * URL of the forwarding rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Advanced routing rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Health check status of the backend service bound to this rule
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
 * configuration content
 * @class
 */
class ConfigListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Configuration type
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * Configuration content
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * Configuration creation time
         * @type {string || null}
         */
        this.CreateTimestamp = null;

        /**
         * Configuration modification time
         * @type {string || null}
         */
        this.UpdateTimestamp = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.CreateTimestamp = 'CreateTimestamp' in params ? params.CreateTimestamp : null;
        this.UpdateTimestamp = 'UpdateTimestamp' in params ? params.UpdateTimestamp : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new TagInfo();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
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
         * Listener list.
         * @type {Array.<ClassicalListener> || null}
         */
        this.Listeners = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * SnatIp information structure
 * @class
 */
class SnatIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the VPC subnet, such as subnet-12345678
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
 * DescribeTargetHealth response structure.
 * @class
 */
class DescribeTargetHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoadBalancer list.
         * @type {Array.<LoadBalancerHealth> || null}
         */
        this.LoadBalancers = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateLoadBalancer response structure.
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>An array of unique IDs of Cloud Load Balancer instances.<br>In certain scenarios, such as a delay in creation, this field may return null. At this point, you can query the created resource ID through the DescribeTaskStatus API using the RequestId or DealName parameter returned by the API.</p>
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * <p>Order ID.</p>
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Exclusive cluster information
 * @class
 */
class ClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster unique ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * AZ of the cluster, such as ap-guangzhou-1
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Binding relationship, including listener name, protocol, URL, and vport.
 * @class
 */
class BindDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CLB instance bound to the configuration
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * ID of the listener bound to the configuration
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name bound to the configuration
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Rule bound to the configuration
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Listener name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener protocol
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Location URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

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
         * Custom configuration ID, such as pz-1234abcd
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Forward affinity info in availability zone
 * @class
 */
class AvailableZoneAffinityInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable availability zone forwarding affinity. true: enable availability zone forwarding affinity; false: enable availability zone forwarding affinity.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * The availability zone forwarding affinity failure threshold. When the healthy ratio of backend services in an availability zone is less than this threshold, the Cloud Load Balancer will exit availability zone forwarding affinity and convert to forwarding across all availability zones.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExitRatio = null;

        /**
         * The threshold for re-enabling availability zone forwarding affinity. When forwarding is in all availability zones and the proportion of healthy backend services in the Cloud Load Balancer availability zone is greater than or equal to this threshold, the CLB will enter availability zone forwarding affinity again.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReentryRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ExitRatio = 'ExitRatio' in params ? params.ExitRatio : null;
        this.ReentryRatio = 'ReentryRatio' in params ? params.ReentryRatio : null;

    }
}

/**
 * Filter criteria
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
 * DescribeCustomizedConfigAssociateList request structure.
 * @class
 */
class DescribeCustomizedConfigAssociateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

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
         * search domain
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

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
         * Return the number of Cloud Load Balancer (CLB) lists. Default is 20. Maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting offset for returning the list of CLB instances, with a default value of 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Select the Fields list to return. The system will only return the Fields filled in Fields. For fillable field details, see <a href="https://www.tencentcloud.com/document/api/214/30694?from_cn_redirect=1#LoadBalancerDetail">LoadBalancerDetail</a>. If a related field is not in Fields, this field returns null. The LoadBalancerId and LoadBalancerName Fields are added by default in Fields.
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * When the Fields include TargetId, TargetAddress, TargetPort, TargetWeight, ListenerId, Protocol, Port, LocationId, Domain, and Url, you must select exporting the Target of the target group or a non-target group. Valid values: NODE, GROUP.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Query the detailed information list of Cloud Load Balancer. Detailed filter criteria:
<li> loadbalancer-id - String - Required: No - (Filter condition) Filter by CLB ID, for example: "lb-12345678".</li>
<li> project-id - String - Required: No - (Filter condition) Filter by project ID, for example: "0", "123".</li>
<li>network - String - Required: No - (Filter condition) Filter by CLB network type, such as "Public" or "Private".</li>
<li> vip - String - Required: No - (Filter condition) Filter by CLB vip, for example: "1.1.1.1", "2204::22:3".</li>
<li> target-ip - String - Required: No - (Filtering Conditions) Filter by private ip of the target real server, such as "1.1.1.1", "2203::214:4".</li>
<li> vpcid - String - Required: No - (Filter condition) Filter by the associated vpc ID of the Cloud Load Balancer (CLB), such as "vpc-12345678".</li>
<li> zone - String - Required: No - (Filtering Conditions) Filter by the availability zone the load balancing belongs to, such as "ap-guangzhou-1".</li>
<li>tag-key - String - required: no - (filter condition) filter by tag key of Cloud Load Balancer, such as "name".</li>
<li> tag:* - String - Required: No - (Filter criteria) Filter by the tag of Cloud Load Balancer (CLB), where ':' is followed by the tag key. For example, to filter by tag key 'name' and tag values 'zhangsan' and 'lisi', use {"Name": "tag:name","Values": ["zhangsan", "lisi"]}.</li>
<li>fuzzy-search - String - required: no - (filter condition) fuzzy search by CLB Vip and CLB name, for example: "1.1".</li>
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
 * CLB detailed information
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
         * Network type of the CLB instance:
OPEN: public network attribute, INTERNAL: private network attribute. For a Cloud Load Balancer with private network attribute, you can bind EIP for outbound public network access. For details, see the EIP document.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB instance state, including
0: creating, 1: normal operation.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * VIP of the CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * IPv6 address of the VIP in the CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * IP version of the Cloud Load Balancer instance, IPv4 | IPv6.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * IPv6 address type of the Cloud Load Balancer instance: IPv6Nat64 | IPv6FullChain.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * Availability Zone of the Cloud Load Balancer instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The ISP to which the IP address of the CLB instance belongs. Value ranges from BGP (multi-line), CMCC (China Mobile), CUCC (China Unicom), CTCC (China Telecom) to INTERNAL (private network).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIsp = null;

        /**
         * ID of the VPC that the CLB instance belongs to.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The ID of the project to which the CLB instance belongs. 0: Default project.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * CLB instance creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Billing type of the CLB instance. Valid values: PREPAID and POSTPAID_BY_HOUR (pay-as-you-go).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Network properties of the CLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * Prepaid billing attributes of the Cloud Load Balancer instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * Reserved. Generally unnecessary for users to concern.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * Personalized configuration ID of the Cloud Load Balancer (CLB) dimension. Multiple configurations are separated by commas.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Tag information of the GWLB instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * CLB listener ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener protocol.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener port.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Forwarding rule ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Path of forwarding rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Backend target ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Backend target IP address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * Backend target listening port.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * Backend target forwarding weight.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetWeight = null;

        /**
         * 0: Not isolated; 1: Isolated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * List of security groups bound to Cloud Load Balancer (CLB).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Valid values: 1 (enabled), 0 (not enabled). Value ranges from 1 to 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * Backend target health status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetHealth = null;

        /**
         * Domain name list of the forwarding rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domains = null;

        /**
         * Multi-availability zone Cloud Load Balancer instance selected backup availability zone
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

        /**
         * The availability zone of the private network CLB instance is controlled by the allowlist CLB_Internal_Zone.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Whether to enable the SNI feature. 1: enable; 0: disable (this parameter is applicable only to HTTPS listeners).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * Domain name of the CLB instance.
         * @type {string || null}
         */
        this.LoadBalancerDomain = null;

        /**
         * Network outbound
         * @type {string || null}
         */
        this.Egress = null;

        /**
         * Attributes of Cloud Load Balancer
         * @type {Array.<string> || null}
         */
        this.AttributeFlags = null;

        /**
         * Specification type information of Cloud Load Balancer instance<ul><li> clb.c1.small: Minimalist specification </li><li>clb.c2.medium: Standard specification </li><li> clb.c3.small: Advanced type 1 specification </li><li> clb.c3.medium: Advanced type 2 specification </li><li> clb.c4.small: Super type 1 specification </li><li> clb.c4.medium: Super type 2 specification </li><li> clb.c4.large: Super type 3 specification </li><li> clb.c4.xlarge: Super type 4 specification </li><li>\"\": Non-LCU-supported instance</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * 0: Non-exclusive type instance; 1: Exclusive type instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * Availability zone forward affinity info
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AvailableZoneAffinityInfo || null}
         */
        this.AvailableZoneAffinityInfo = null;

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
        this.Egress = 'Egress' in params ? params.Egress : null;
        this.AttributeFlags = 'AttributeFlags' in params ? params.AttributeFlags : null;
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;

        if (params.AvailableZoneAffinityInfo) {
            let obj = new AvailableZoneAffinityInfo();
            obj.deserialize(params.AvailableZoneAffinityInfo)
            this.AvailableZoneAffinityInfo = obj;
        }

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
         * CLB instance ID. There can be up to 20 IDs.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Network type of the CLB instance:
OPEN: Public network attribute. INTERNAL: Private network attribute.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CLB instance type. 1: General CLB instance; 0: Classic CLB instance. If this parameter is not specified, all types of CLB instances will be queried.
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Domain name assigned for a CLB instance by the cloud platform.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * VIP address of a CLB instance (there can be multiple addresses).
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * The public network IP of the backend service bound to Cloud Load Balancer (CLB) only supports querying the public IP of Cloud Virtual Machine (CVM).
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * The private network IP of the backend service bound to Cloud Load Balancer (CLB) only supports querying the private IP address of Cloud Virtual Machine (CVM).
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * Data offset. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of CLB instances returned. Default: 20. Maximum: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * A sorting parameter. Valid values: LoadBalancerName, CreateTime, Domain, and LoadBalancerType.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 1: Reverse; 0: Sequential. Default: reverse by creation time
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Search field, supporting fuzzy match by name, domain, and VIP.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * The ID of the project to which the CLB instance belongs. This parameter can be obtained through the DescribeProject API.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Whether CLB is bound to a real server. 0: No; 1: Yes; -1: Query all.
         * @type {number || null}
         */
        this.WithRs = null;

        /**
         * Unique VPC ID of the CLB instance, such as vpc-bhqkbhdx
Basic network allows input '0'.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Security group ID, for example sg-m1cc****.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Primary availability zone ID, such as 100001 (corresponding to Guangzhou Zone 1). You can obtain the list of availability zones through [DescribeZones](https://www.tencentcloud.com/document/product/213/15707?from_cn_redirect=1).
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * Each request can have up to 10 `Filters` values and 100 `Filter.Values` values.<br/>`Filter.Name` and `Filter.Values` are required items. The detailed filter criteria are as follows:
<li> charge-type - String - Required: No - (Filter condition) Filter by the CLB instance billing mode, including "PREPAID", "POSTPAID_BY_HOUR".</li>
<li> internet-charge-type - String - Required: No - (Filter condition) Filter by CLB network billing mode, including "BANDWIDTH_PREPAID", "TRAFFIC_POSTPAID_BY_HOUR", "BANDWIDTH_POSTPAID_BY_HOUR", "BANDWIDTH_PACKAGE".</li>
<li> master-zone-id - String - Required: No - (Filter condition) Filter by primary AZ ID of CLB, such as "100001" (corresponding to Guangzhou Zone 1).</li>
<li>tag-key - String - required: no - (filter condition) filter by CLB tag key.</li>
<li>tag:tag-key - String - Required: no - (Filter condition) Filter by CLB Tag key-value pair. Replace tag-key with a specific tag key.</li>
<li> function-name - String - Required: No - (Filter condition) Filter by the function name of the Serverless Cloud Function (SCF) bound to the CLB backend.</li>
<li> vip-isp - String - Required: No - (Filter condition) Filter by operator type of CLB VIP, such as "BGP", "INTERNAL", "CMCC", "CTCC", "CUCC".</li>
<li>sla-type - String - required: no - (filter condition) filter by CLB performance capacity specification, including "clb.c2.medium", "clb.c3.small", "clb.c3.medium", "clb.c4.small", "clb.c4.medium", "clb.c4.large", "clb.c4.xlarge".</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Select the expansion fields to return. If not specified, expansion fields are not returned by default. The supported expansion fields are as follows:
<li> TargetCount: Number of real servers bound to it</li>
         * @type {Array.<string> || null}
         */
        this.AdditionalFields = null;

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
        this.AdditionalFields = 'AdditionalFields' in params ? params.AdditionalFields : null;

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
         * Total number of CLB instances that meet the filter criteria. This value is independent of the Limit in the input parameters.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned CLB instance array.
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancerSet = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * AZ information
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the AZ in numeric form, such as 100001
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Unique ID of the AZ in string format, such as ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name, such as Guangzhou 1
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Region of the availability zone, such as ap-guangzhou.
         * @type {string || null}
         */
        this.ZoneRegion = null;

        /**
         * Whether the availability zone is a local availability zone. For example, false.
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * Whether the availability zone is an edge availability zone. For example, false.
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
 * Exclusive cluster
 * @class
 */
class ExclusiveCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 exclusive cluster list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClusterItem> || null}
         */
        this.L4Clusters = null;

        /**
         * Layer-7 exclusive cluster list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClusterItem> || null}
         */
        this.L7Clusters = null;

        /**
         * VPCGW cluster
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Network billing mode, maximum outbound bandwidth
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRAFFIC_POSTPAID_BY_HOUR: postpaid by traffic on an hourly basis;
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Maximum outbound bandwidth in Mbps. It applies only to shared, LCU-supported, and exclusive CLB instances of the public network type and LCU-supported CLB instances of the private network type.
-For shared type and exclusive CLB instances with public network attributes, the maximum outbound bandwidth ranges from 1Mbps to 2048Mbps.
-For LCU-supported CLB instances with public network attributes and private network attributes, the maximum outbound bandwidth ranges from 1Mbps to 61440Mbps.
(If this parameter is not specified when CreateLoadBalancer is called to create a CLB instance, the default value of 10 Mbps is used. This value can be modified.)
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Bandwidth package type, such as SINGLEISP (single ISP) and BGP (multi ISP).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BandwidthPackageSubType = null;

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
        this.BandwidthPackageSubType = 'BandwidthPackageSubType' in params ? params.BandwidthPackageSubType : null;

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
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB listener ID list.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Protocols for Cloud Load Balancer listeners: 'TCP', 'UDP', 'HTTP', 'HTTPS'.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CLB listening port, range [1-65535].
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * Listener status. 0: Creating; 1: Running.
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
         * Private network IP of target
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Port bound to the target
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Detailed information of the current health status. For example: Alive, Dead, Unknown, Close. Alive status is healthy, Dead state is abnormal, Unknown status includes not started, checking, unknown status, Close means health check disabled or listener status stop.
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Target instance ID, such as ins-12345678
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Detailed information about the current health status. Alive: Healthy; Dead: Exceptional; Unknown: Check not started/Checking/Unknown status.
         * @type {string || null}
         */
        this.HealthStatusDetail = null;

        /**
         * Target group unique ID.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Weight of the Target
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
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.HealthStatusDetail = 'HealthStatusDetail' in params ? params.HealthStatusDetail : null;
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * listener name
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
 * DescribeLoadBalancersDetail response structure.
 * @class
 */
class DescribeLoadBalancersDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of items in CLB detail list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cloud Load Balancer detail list.
         * @type {Array.<LoadBalancerDetail> || null}
         */
        this.LoadBalancerDetailSet = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * BatchModifyTargetWeight request structure.
 * @class
 */
class BatchModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of weights to be modified in batches.
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
         * Network type of the CLB instance:
OPEN: Public network attribute. INTERNAL: Intranet attribute. For a CLB with intranet attribute, you can bind EIP for public network access. For details, see the EIP document.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * Load balancer type identifier. 1: CLB; 0: Classic CLB.
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * The domain name of the Cloud Load Balancer instance. This field is only provided by public network-based and domain name-based CLB instances. It is being gradually phased out. We recommend using LoadBalancerDomain instead.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * List of VIPs of a CLB instance.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * CLB instance state, including
0: creating, 1: normal operation.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CLB instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last status transition time of the CLB instance.
         * @type {string || null}
         */
        this.StatusTime = null;

        /**
         * The ID of the project to which the CLB instance belongs. 0: Default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Anti-DDoS Pro identifier for CLB. 1: CLB with Anti-DDoS Pro; 0: CLB without Anti-DDoS Pro.
         * @type {number || null}
         */
        this.OpenBgp = null;

        /**
         * Private network Classic CLB instances before December 2016 had SNAT enabled.
         * @type {boolean || null}
         */
        this.Snat = null;

        /**
         * 0: Not isolated; 1: Isolated.
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * User-enabled log information. Only public network CLB instances that have an HTTP or HTTPS listener can generate logs.
         * @type {string || null}
         */
        this.Log = null;

        /**
         * Subnet of the CLB instance (applicable only to VPC-type CLB instances on private networks)
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * CLB instance tag information
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Security group of the CLB instance
         * @type {Array.<string> || null}
         */
        this.SecureGroups = null;

        /**
         * Basic information of real servers bound to the CLB instance
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * Anycast CLB release domain. For non-anycast CLB, this field returns an empty string.
         * @type {string || null}
         */
        this.AnycastZone = null;

        /**
         * IP Version, ipv4 | ipv6
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * VPC ID in numerical format
         * @type {number || null}
         */
        this.NumericalVpcId = null;

        /**
         * ISP of the load balancer IP. Value ranges from BGP to CUCC.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * Primary AZ.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ZoneInfo || null}
         */
        this.MasterZone = null;

        /**
         * standby availability zone
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
         * Expiration Time of the CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Billing type of the Cloud Load Balancer instance, PREPAID: Monthly Subscription, POSTPAID_BY_HOUR: Pay-As-You-Go
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Reserved field.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * Log set ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Log topic ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * IPv6 address of the CLB instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * Reserved. Generally unnecessary for users to concern.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * Whether an Anti-DDoS Pro instance can be bound
         * @type {boolean || null}
         */
        this.IsDDos = null;

        /**
         * Custom configuration IDs of CLB instances
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Whether the real server allows traffic from CLB
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * Exclusive cluster on the private network
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * This field is meaningful when the IP address version is IPv6. IPv6Nat64 | IPv6FullChain
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * Is SnatPro enabled?
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * After enabling SnatPro load balancing, the SnatIp list.
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Performance capacity specification.<ul><li> clb.c1.small: Minimalist specification </li><li> clb.c2.medium: Standard specification </li><li> clb.c3.small: High-tier 1 specification </li><li> clb.c3.medium: High-tier 2 specification </li><li> clb.c4.small: Super-tier 1 specification </li><li> clb.c4.medium: Super-tier 2 specification </li><li> clb.c4.large: Super-tier 3 specification </li><li> clb.c4.xlarge: Super-tier 4 specification </li><li>"": Non-LCU-supported instance</li></ul>
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * Whether VIP is blocked
         * @type {boolean || null}
         */
        this.IsBlock = null;

        /**
         * Blocking or unblocking time
         * @type {string || null}
         */
        this.IsBlockTime = null;

        /**
         * Whether the IP type is Local BGP
         * @type {boolean || null}
         */
        this.LocalBgp = null;

        /**
         * Layer-7 exclusive tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * If the layer-7 listener of an IPv6FullChain CLB instance is enabled, the CLB instance can be bound with IPv4 and IPv6 CVM instances simultaneously.
         * @type {boolean || null}
         */
        this.MixIpTarget = null;

        /**
         * VPC-based private network CLB. AZ where the rule is in proximity access mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Whether CLB is NFV. Empty: No; l7nfv: NFV for layer 7.
         * @type {string || null}
         */
        this.NfvInfo = null;

        /**
         * Health check log set ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.HealthLogSetId = null;

        /**
         * Health check log topic ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.HealthLogTopicId = null;

        /**
         * Cluster ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Attributes of Cloud Load Balancer
         * @type {Array.<string> || null}
         */
        this.AttributeFlags = null;

        /**
         * Domain name of the CLB instance.
         * @type {string || null}
         */
        this.LoadBalancerDomain = null;

        /**
         * Network outbound
         * @type {string || null}
         */
        this.Egress = null;

        /**
         * Whether the instance type is exclusive type. 1: Dedicated instance. 0: Non-dedicated instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * Number of bound backend services.
         * @type {number || null}
         */
        this.TargetCount = null;

        /**
         * Endpoint Id associated with the CLB instance.
         * @type {string || null}
         */
        this.AssociateEndpoint = null;

        /**
         * Availability zone forward affinity info
         * @type {AvailableZoneAffinityInfo || null}
         */
        this.AvailableZoneAffinityInfo = null;

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
        this.Egress = 'Egress' in params ? params.Egress : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.TargetCount = 'TargetCount' in params ? params.TargetCount : null;
        this.AssociateEndpoint = 'AssociateEndpoint' in params ? params.AssociateEndpoint : null;

        if (params.AvailableZoneAffinityInfo) {
            let obj = new AvailableZoneAffinityInfo();
            obj.deserialize(params.AvailableZoneAffinityInfo)
            this.AvailableZoneAffinityInfo = obj;
        }

    }
}

module.exports = {
    LBChargePrepaid: LBChargePrepaid,
    DescribeLoadBalancerListByCertIdRequest: DescribeLoadBalancerListByCertIdRequest,
    ClassicalListener: ClassicalListener,
    TargetRegionInfo: TargetRegionInfo,
    SetCustomizedConfigForLoadBalancerRequest: SetCustomizedConfigForLoadBalancerRequest,
    DescribeCustomizedConfigListRequest: DescribeCustomizedConfigListRequest,
    ExtraInfo: ExtraInfo,
    DescribeCustomizedConfigAssociateListResponse: DescribeCustomizedConfigAssociateListResponse,
    CloneLoadBalancerResponse: CloneLoadBalancerResponse,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    DescribeLoadBalancerListByCertIdResponse: DescribeLoadBalancerListByCertIdResponse,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    LoadBalancerHealth: LoadBalancerHealth,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    CloneLoadBalancerRequest: CloneLoadBalancerRequest,
    Target: Target,
    RsWeightRule: RsWeightRule,
    DescribeCustomizedConfigListResponse: DescribeCustomizedConfigListResponse,
    CertIdRelatedWithLoadBalancers: CertIdRelatedWithLoadBalancers,
    RuleHealth: RuleHealth,
    TagInfo: TagInfo,
    ConfigListItem: ConfigListItem,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    SnatIp: SnatIp,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    ClusterItem: ClusterItem,
    BindDetailItem: BindDetailItem,
    SetCustomizedConfigForLoadBalancerResponse: SetCustomizedConfigForLoadBalancerResponse,
    AvailableZoneAffinityInfo: AvailableZoneAffinityInfo,
    Filter: Filter,
    DescribeCustomizedConfigAssociateListRequest: DescribeCustomizedConfigAssociateListRequest,
    DescribeLoadBalancersDetailRequest: DescribeLoadBalancersDetailRequest,
    LoadBalancerDetail: LoadBalancerDetail,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    ZoneInfo: ZoneInfo,
    ExclusiveCluster: ExclusiveCluster,
    InternetAccessible: InternetAccessible,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    TargetHealth: TargetHealth,
    ListenerHealth: ListenerHealth,
    DescribeLoadBalancersDetailResponse: DescribeLoadBalancersDetailResponse,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    LoadBalancer: LoadBalancer,

}
