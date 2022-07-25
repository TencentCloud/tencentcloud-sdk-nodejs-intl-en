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
 * Region details
 * @class
 */
class RegionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name in Chinese or English
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region where the data center locates
         * @type {string || null}
         */
        this.RegionArea = null;

        /**
         * Name of the region where the data center locates
         * @type {string || null}
         */
        this.RegionAreaName = null;

        /**
         * Data center type. `dc`: data center; `ec`: edge server.
         * @type {string || null}
         */
        this.IDCType = null;

        /**
         * Feature bitmap. Valid values:
`0`: the feature is not supported;
`1`: the feature is supported.
Each bit in the bitmap represents a feature:
1st bit: layer-4 acceleration;
2nd bit: layer-7 acceleration;
3rd bit: HTTP3 access;
4th bit: IPv6;
5th bit: dedicated BGP access;
6th bit: non-BGP access;
7th bit: QoS acceleration.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FeatureBitmap = null;

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
        this.RegionArea = 'RegionArea' in params ? params.RegionArea : null;
        this.RegionAreaName = 'RegionAreaName' in params ? params.RegionAreaName : null;
        this.IDCType = 'IDCType' in params ? params.IDCType : null;
        this.FeatureBitmap = 'FeatureBitmap' in params ? params.FeatureBitmap : null;

    }
}

/**
 * DescribeUDPListeners request structure.
 * @class
 */
class DescribeUDPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition that filters by connection ID. You must specify at least one filter condition (ProxyId/GroupId/ListenerId), but ProxyId and GroupId cannot be set at the same time.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Filter condition. Exact query by listener IDs.
When ProxyId is specified, the listener will be checked whether it belongs to the connection.
When GroupId is specified, the listener will be checked whether it belongs to the connection group.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Filter condition. Exact query by listener names.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Filter condition. Exact query by listener ports.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition that filters by connection group ID. You must specify at least one filter condition (ProxyId/GroupId/ListenerId), but ProxyId and GroupId cannot be set at the same time.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Filter condition. It supports fuzzy query by ports or listener names. This parameter cannot be used with `ListenerName` or `Port`.
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * DeleteProxyGroup request structure.
 * @class
 */
class DeleteProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the connection group to be deleted.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether to enable forced deletion. Valid values:
0: no;
1: yes.
Default value: 0. If there is a connection or listener/rule bound to an origin server in the connection group and `Force` is 0, the operation will return a failure.
         * @type {number || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeResourcesByTag request structure.
 * @class
 */
class DescribeResourcesByTagRequest extends  AbstractModel {
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

        /**
         * Resource types:
Proxy (connection);
ProxyGroup (connection group);
RealServer (origin server).
If this field is not specified, all resources with the tag will be queried.
         * @type {string || null}
         */
        this.ResourceType = null;

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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * DescribeListenerStatistics request structure.
 * @class
 */
class DescribeListenerStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical metric name list. It supports:["InBandwidth", "OutBandwidth", "Concurrent", "InPackets", "OutPackets"]
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Monitoring granularity. It currently supports: 300, 3,600, and 86,400. Unit: seconds.
Time range: <= 1 day, supported minimum granularity: 300 seconds;
Time range: <= 7 days, supported minimum granularity:3,600 seconds;
Time range: > 7 days, supported minimum granularity:86,400 seconds;
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeProxyAndStatisticsListeners response structure.
 * @class
 */
class DescribeProxyAndStatisticsListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of connections that the statistics can be derived from
         * @type {Array.<ProxySimpleInfo> || null}
         */
        this.ProxySet = null;

        /**
         * Quantity of connections
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

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxySimpleInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Layer-7 listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Whether to make a forced deletion of forwarding rules that have been bound to origin servers. 0: no; 1: yes.
         * @type {number || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * BindRuleRealServers request structure.
 * @class
 */
class BindRuleRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * An information list of the origin servers to bind.
If there are origin servers bound already, they will be replaced by this new origin server list.
If this field is empty, it indicates unbinding all origin servers of this rule.
If the origin server scheduling policy type of this rule is weighted round robin, you need to enter `RealServerWeight`, i.e., the origin server weight. If this field is left empty or for other scheduling types, the default origin server weight is 1.
         * @type {Array.<RealServerBindSetReq> || null}
         */
        this.RealServerBindSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.RealServerBindSet) {
            this.RealServerBindSet = new Array();
            for (let z in params.RealServerBindSet) {
                let obj = new RealServerBindSetReq();
                obj.deserialize(params.RealServerBindSet[z]);
                this.RealServerBindSet.push(obj);
            }
        }

    }
}

/**
 * DescribeHTTPSListeners response structure.
 * @class
 */
class DescribeHTTPSListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of listeners
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * HTTPS listener list
         * @type {Array.<HTTPSListener> || null}
         */
        this.ListenerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new HTTPSListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxiesProject request structure.
 * @class
 */
class ModifyProxiesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The target project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * ID of one or multiple connections to be operated; It’s an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idem-potency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * ID of one or multiple connections to be operated; It’s a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * Custom error response configuration of a domain name
 * @class
 */
class DomainErrorPageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID of a custom error response
         * @type {string || null}
         */
        this.ErrorPageId = null;

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Original error code
         * @type {Array.<number> || null}
         */
        this.ErrorNos = null;

        /**
         * New error code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NewErrorNo = null;

        /**
         * Response header to be cleared
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClearHeaders = null;

        /**
         * Response header to be set
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.SetHeaders = null;

        /**
         * Configured response body (excluding HTTP header)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Body = null;

        /**
         * Rule status. 0: success
Note: this field may return null, indicating that no valid value is obtained.
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
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ErrorNos = 'ErrorNos' in params ? params.ErrorNos : null;
        this.NewErrorNo = 'NewErrorNo' in params ? params.NewErrorNo : null;
        this.ClearHeaders = 'ClearHeaders' in params ? params.ClearHeaders : null;

        if (params.SetHeaders) {
            this.SetHeaders = new Array();
            for (let z in params.SetHeaders) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.SetHeaders[z]);
                this.SetHeaders.push(obj);
            }
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * List of acceleration regions in a connection group, including acceleration regions and their bandwidth and concurrence configuration.
 * @class
 */
class AccessConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration region.
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * Connection bandwidth upper limit in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Concurrent connection upper limit in 10,000 connections, which indicates the allowed number of concurrently online connections.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * Network type. Valid values: `normal` (default), `cn2`
         * @type {string || null}
         */
        this.NetworkType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;

    }
}

/**
 * DescribeCertificateDetail request structure.
 * @class
 */
class DescribeCertificateDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Resource information of the tag
 * @class
 */
class TagResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource types:
`Proxy`: Connection
`ProxyGroup`: Connection group
`RealServer`: Origin server
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * SetAuthentication response structure.
 * @class
 */
class SetAuthenticationResponse extends  AbstractModel {
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
 * DescribeProxyGroupStatistics response structure.
 * @class
 */
class DescribeProxyGroupStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group statistics
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcesByTag response structure.
 * @class
 */
class DescribeResourcesByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total resources
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Resource list corresponding to the tag
         * @type {Array.<TagResourceInfo> || null}
         */
        this.ResourceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new TagResourceInfo();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupDomainConfig request structure.
 * @class
 */
class ModifyGroupDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Default access IP or domain name of domain name resolution
         * @type {string || null}
         */
        this.DefaultDnsIp = null;

        /**
         * Nearest access region configuration.
         * @type {Array.<AccessRegionDomainConf> || null}
         */
        this.AccessRegionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DefaultDnsIp = 'DefaultDnsIp' in params ? params.DefaultDnsIp : null;

        if (params.AccessRegionList) {
            this.AccessRegionList = new Array();
            for (let z in params.AccessRegionList) {
                let obj = new AccessRegionDomainConf();
                obj.deserialize(params.AccessRegionList[z]);
                this.AccessRegionList.push(obj);
            }
        }

    }
}

/**
 * Bandwidth price gradient
 * @class
 */
class BandwidthPriceGradient extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bandwidth range.
         * @type {Array.<number> || null}
         */
        this.BandwidthRange = null;

        /**
         * Bandwidth unit price within the bandwidth range. Unit: CNY/Mbps/day.
         * @type {number || null}
         */
        this.BandwidthUnitPrice = null;

        /**
         * Discounted bandwidth price in CNY/Mbps/day.
         * @type {number || null}
         */
        this.DiscountBandwidthUnitPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthRange = 'BandwidthRange' in params ? params.BandwidthRange : null;
        this.BandwidthUnitPrice = 'BandwidthUnitPrice' in params ? params.BandwidthUnitPrice : null;
        this.DiscountBandwidthUnitPrice = 'DiscountBandwidthUnitPrice' in params ? params.DiscountBandwidthUnitPrice : null;

    }
}

/**
 * DescribeHTTPListeners request structure.
 * @class
 */
class DescribeHTTPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Filter condition. Exact query by listener IDs.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Filter condition. Exact query by listener names.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Filter condition. Exact query by listener ports.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition. It supports fuzzy query by ports or listener names. This parameter cannot be used with `ListenerName` or `Port`.
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeCustomHeader response structure.
 * @class
 */
class DescribeCustomHeaderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * List of custom headers
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.Headers = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRealServerName response structure.
 * @class
 */
class ModifyRealServerNameResponse extends  AbstractModel {
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
 * DescribeGroupDomainConfig response structure.
 * @class
 */
class DescribeGroupDomainConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nearest access configuration list of domain name resolution.
         * @type {Array.<DomainAccessRegionDict> || null}
         */
        this.AccessRegionList = null;

        /**
         * Default accesses Ip.
         * @type {string || null}
         */
        this.DefaultDnsIp = null;

        /**
         * Connection group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Total number of configuration of access regions.
         * @type {number || null}
         */
        this.AccessRegionCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRegionList) {
            this.AccessRegionList = new Array();
            for (let z in params.AccessRegionList) {
                let obj = new DomainAccessRegionDict();
                obj.deserialize(params.AccessRegionList[z]);
                this.AccessRegionList.push(obj);
            }
        }
        this.DefaultDnsIp = 'DefaultDnsIp' in params ? params.DefaultDnsIp : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AccessRegionCount = 'AccessRegionCount' in params ? params.AccessRegionCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificate response structure.
 * @class
 */
class ModifyCertificateResponse extends  AbstractModel {
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
 * OpenSecurityPolicy request structure.
 * @class
 */
class OpenSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the connections requiring enabled security policies.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DeleteDomainErrorPageInfo request structure.
 * @class
 */
class DeleteDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a custom error page. For more information, please see the response to CreateDomainErrorPageInfo.
         * @type {string || null}
         */
        this.ErrorPageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;

    }
}

/**
 * DescribeListenerRealServers request structure.
 * @class
 */
class DescribeListenerRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * DescribeProxyGroupStatistics request structure.
 * @class
 */
class DescribeProxyGroupStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical metric name list. Values: InBandwidth (inbound bandwidth); OutBandwidth (outbound bandwidth); Concurrent (concurrence); InPackets (inbound packets); OutPackets (outbound packets).
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Monitoring granularity (in seconds). Valid values: 60s, 300s, 3,600s, 86,400s.
Time range: ≤ 1 day. Supported minimum granularity: 60 seconds;
Time range: ≤ 7 days. Supported minimum granularity: 3,600 seconds;
Time range: ≤ 30 days. Supported minimum granularity: 86,400 seconds;
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeHTTPSListeners request structure.
 * @class
 */
class DescribeHTTPSListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition. Connection ID.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Filter condition. Exact query by listener IDs.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Filter condition. Exact query by listener names.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Filter condition. Exact query by listener ports.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Offset. The default value is 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition. It supports fuzzy query by ports or listener names.
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Connection group ID as a filter
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
Note: If HTTP3 is enabled for a connection, the listener will use the port that is originally accessed to UDP, and a UDP listener with the same port cannot be created.
After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DescribeAccessRegionsByDestRegion response structure.
 * @class
 */
class DescribeAccessRegionsByDestRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of available acceleration regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of available acceleration region information
         * @type {Array.<AccessRegionDetial> || null}
         */
        this.AccessRegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AccessRegionSet) {
            this.AccessRegionSet = new Array();
            for (let z in params.AccessRegionSet) {
                let obj = new AccessRegionDetial();
                obj.deserialize(params.AccessRegionSet[z]);
                this.AccessRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCountryAreaMapping request structure.
 * @class
 */
class DescribeCountryAreaMappingRequest extends  AbstractModel {
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
 * CheckProxyCreate response structure.
 * @class
 */
class CheckProxyCreateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries whether a connection with the specified configuration can be created. 1: yes; 0: no.
         * @type {number || null}
         */
        this.CheckFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificate request structure.
 * @class
 */
class ModifyCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener instance ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name whose certificate needs to be modified
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * New server certificate ID:
If CertificateId=default, using the listener certificate.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * New client certificate ID:
If ClientCertificateId=default, using the listener certificate.
This parameter is required only when the mutual authentication is adopted.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * List of new IDs of multiple client certificates, where:
This parameter or the `ClientCertificateId` parameter is required for mutual authentication only.
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * DestroyProxies request structure.
 * @class
 */
class DestroyProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The identifier for forced deletion
1: this connection list is deleted forcibly regardless of whether the origin server has been bound.
0: this connection list cannot be deleted if the origin server has been bound.
If this identifier is 0, the deletion can be performed only when all the connections have not been bound to any origin servers.
         * @type {number || null}
         */
        this.Force = null;

        /**
         * List of connection instance IDs; It's an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * List of connection instance IDs; It's a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Force = 'Force' in params ? params.Force : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * DescribeRules response structure.
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information list classified by domain name type
         * @type {Array.<DomainRuleSet> || null}
         */
        this.DomainRuleSet = null;

        /**
         * Total quantity of domain names under this listener
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

        if (params.DomainRuleSet) {
            this.DomainRuleSet = new Array();
            for (let z in params.DomainRuleSet) {
                let obj = new DomainRuleSet();
                obj.deserialize(params.DomainRuleSet[z]);
                this.DomainRuleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxies response structure.
 * @class
 */
class DescribeProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of connections.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Connection instance information list; It’s an old parameter, please switch to ProxySet.
         * @type {Array.<ProxyInfo> || null}
         */
        this.InstanceSet = null;

        /**
         * Connection instance information list; It’s a new parameter.
         * @type {Array.<ProxyInfo> || null}
         */
        this.ProxySet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new ProxyInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxyInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
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
         * The ID of the successfully created forwarding rule
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRealServerName request structure.
 * @class
 */
class ModifyRealServerNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server name
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;

    }
}

/**
 * ModifyGroupDomainConfig response structure.
 * @class
 */
class ModifyGroupDomainConfigResponse extends  AbstractModel {
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
 * DeleteProxyGroup response structure.
 * @class
 */
class DeleteProxyGroupResponse extends  AbstractModel {
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
 * CreateDomainErrorPageInfo response structure.
 * @class
 */
class CreateDomainErrorPageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration ID of a custom error response
         * @type {string || null}
         */
        this.ErrorPageId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindListenerRealServers request structure.
 * @class
 */
class BindListenerRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of origin servers to be bound. If the origin server scheduling policy type of this listener is weighted round robin, you need to enter the `RealServerWeight`, i.e., the origin server weight. If this field is left empty or for other scheduling types, the default origin server weight is 1.
         * @type {Array.<RealServerBindSetReq> || null}
         */
        this.RealServerBindSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RealServerBindSet) {
            this.RealServerBindSet = new Array();
            for (let z in params.RealServerBindSet) {
                let obj = new RealServerBindSetReq();
                obj.deserialize(params.RealServerBindSet[z]);
                this.RealServerBindSet.push(obj);
            }
        }

    }
}

/**
 * ModifyProxyConfiguration request structure.
 * @class
 */
class ModifyProxyConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection instance ID; It's an old parameter, please switch to ProxyId.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target bandwidth. Unit: Mbps.
Bandwidth or Concurrent must be set. Use the DescribeAccessRegionsByDestRegion API to obtain the value range.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Target concurrence value. Unit: 10,000 connections.
Bandwidth or Concurrent must be set. Use the DescribeAccessRegionsByDestRegion API to obtain the value range.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Connection instance ID; It's a new parameter.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Billing mode (0: bill-by-bandwidth, 1: bill-by-traffic. Default value: bill-by-bandwidth)
         * @type {number || null}
         */
        this.BillingType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;

    }
}

/**
 * DescribeRuleRealServers request structure.
 * @class
 */
class DescribeRuleRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 1000.
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeGroupDomainConfig request structure.
 * @class
 */
class DescribeGroupDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateProxyGroupDomain request structure.
 * @class
 */
class CreateProxyGroupDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID of the domain name to be enabled.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateTCPListeners request structure.
 * @class
 */
class CreateTCPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener name.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * List of listener ports.
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Origin server scheduling policy of listeners, which supports round robin (rr), weighted round robin (wrr), and least connections (lc).
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether origin server has the health check enabled. 1: enabled; 0: disabled. UDP listeners do not support health check.
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * The origin server type of listeners, supporting IP or DOMAIN type. The DOMAIN origin servers do not support the weighted round robin.
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Connection ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Connection group ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Time interval of origin server health check (unit: seconds). Value range: [5, 300].
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * Response timeout of origin server health check (unit: seconds). Value range: [2, 60]. The timeout value shall be less than the time interval for health check DelayLoop.
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * List of origin server ports, which only supports the listeners of version 1.0 and connection group.
         * @type {Array.<number> || null}
         */
        this.RealServerPorts = null;

        /**
         * Listener methods of getting client IPs. 0: TOA; 1: Proxy Protocol.
         * @type {number || null}
         */
        this.ClientIPMethod = null;

        /**
         * Whether to enable the primary/secondary origin server mode. Valid values: 1 (enable) and 0 (disable). It cannot be enabled for domain name origin servers.
         * @type {number || null}
         */
        this.FailoverSwitch = null;

        /**
         * Healthy threshold. The number of consecutive successful health checks required before considering an origin server healthy. Value range: 1 - 10.
         * @type {number || null}
         */
        this.HealthyThreshold = null;

        /**
         * Unhealthy threshold. The number of consecutive failed health checks required before considering an origin server unhealthy. Value range: 1 - 10.
         * @type {number || null}
         */
        this.UnhealthyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.RealServerPorts = 'RealServerPorts' in params ? params.RealServerPorts : null;
        this.ClientIPMethod = 'ClientIPMethod' in params ? params.ClientIPMethod : null;
        this.FailoverSwitch = 'FailoverSwitch' in params ? params.FailoverSwitch : null;
        this.HealthyThreshold = 'HealthyThreshold' in params ? params.HealthyThreshold : null;
        this.UnhealthyThreshold = 'UnhealthyThreshold' in params ? params.UnhealthyThreshold : null;

    }
}

/**
 * Certificate details, including the certificate ID, name, type, content, and key content.
 * @class
 */
class CertificateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate type.
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * Certificate name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * Certificate content.
         * @type {string || null}
         */
        this.CertificateContent = null;

        /**
         * Key content. This field will be returned if the certificate type is the SSL certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateKey = null;

        /**
         * Creation time in the format of UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (midnight in UTC/GMT).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Time that the certificate takes effect. Using the UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (Midnight in UTC/GMT).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Certificate expiration time. Using the UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (Midnight in UTC/GMT).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Common name of the certificate’s issuer.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuerCN = null;

        /**
         * Common name of the certificate subject.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubjectCN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CertificateContent = 'CertificateContent' in params ? params.CertificateContent : null;
        this.CertificateKey = 'CertificateKey' in params ? params.CertificateKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IssuerCN = 'IssuerCN' in params ? params.IssuerCN : null;
        this.SubjectCN = 'SubjectCN' in params ? params.SubjectCN : null;

    }
}

/**
 * DescribeListenerStatistics response structure.
 * @class
 */
class DescribeListenerStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group statistics
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyGroupDetails request structure.
 * @class
 */
class DescribeProxyGroupDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CloseProxies request structure.
 * @class
 */
class CloseProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection instance ID; It’s an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idem-potency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Connection instance ID; It’s a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * DescribeListenerRealServers response structure.
 * @class
 */
class DescribeListenerRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of origin servers that can be bound
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * An information list of origin servers
         * @type {Array.<RealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * Number of bound origin servers
         * @type {number || null}
         */
        this.BindRealServerTotalCount = null;

        /**
         * Information list of bound origin servers
         * @type {Array.<BindRealServer> || null}
         */
        this.BindRealServerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new RealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindRealServerTotalCount = 'BindRealServerTotalCount' in params ? params.BindRealServerTotalCount : null;

        if (params.BindRealServerSet) {
            this.BindRealServerSet = new Array();
            for (let z in params.BindRealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.BindRealServerSet[z]);
                this.BindRealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyDetail request structure.
 * @class
 */
class DescribeProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID to be queried.
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * IP details
 * @class
 */
class IPDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP string
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Network provider. `BGP`: Tencent Cloud BGP (default); `CMCC`: China Mobile; `CUCC`: China Unicom; `CTCC`: China Telecom.
         * @type {string || null}
         */
        this.Provider = null;

        /**
         * Max bandwidth
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Provider = 'Provider' in params ? params.Provider : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * Connection status information
 * @class
 */
class ProxyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Connection status.
Where:
`RUNNING`: Running
`CREATING`: Creating
`DESTROYING`: Terminating
`OPENING`: Enabling
`CLOSING`: Disabling
`CLOSED`: Disabled
`ADJUSTING`: Adjusting configuration
`ISOLATING`: Isolating
`ISOLATED`: Isolated
`MOVING`: Migrating
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteDomain request structure.
 * @class
 */
class DeleteDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name to be deleted
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Whether to make a forced deletion of forwarding rules that have been bound to origin servers. 0: no; 1: yes.
When not making a forced deletion, if there are rules bound to origin servers, they will not be deleted.
         * @type {number || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * OpenSecurityPolicy response structure.
 * @class
 */
class OpenSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async Process ID. Using DescribeAsyncTaskStatus to query process and status.
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
 * ModifyCertificateAttributes response structure.
 * @class
 */
class ModifyCertificateAttributesResponse extends  AbstractModel {
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
 * DescribeSecurityPolicyDetail response structure.
 * @class
 */
class DescribeSecurityPolicyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Security policy status:
BOUND (security policies enabled)
UNBIND (security policies disabled)
BINDING (enabling security policies)
UNBINDING (disabling security policies)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Default policy: ACCEPT or DROP.
         * @type {string || null}
         */
        this.DefaultAction = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * List of rules
         * @type {Array.<SecurityPolicyRuleOut> || null}
         */
        this.RuleList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DefaultAction = 'DefaultAction' in params ? params.DefaultAction : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new SecurityPolicyRuleOut();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHTTPListener response structure.
 * @class
 */
class CreateHTTPListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Created listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUDPListenerAttribute response structure.
 * @class
 */
class ModifyUDPListenerAttributeResponse extends  AbstractModel {
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
 * CreateProxyGroup request structure.
 * @class
 */
class CreateProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID of connection group
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Alias of connection group
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Origin server region; Reference API: DescribeDestRegions; It returnes the `RegionId` of the parameter `RegionDetail`.
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * Tag list
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * List of acceleration regions, including their names, bandwidth, and concurrence configuration.
         * @type {Array.<AccessConfiguration> || null}
         */
        this.AccessRegionSet = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Package type of connection group. Valid values: `Thunder` (default) and `Accelerator`.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
Note that if HTTP3 is enabled for a connection, TCP/UDP access will not be allowed.
After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AccessRegionSet) {
            this.AccessRegionSet = new Array();
            for (let z in params.AccessRegionSet) {
                let obj = new AccessConfiguration();
                obj.deserialize(params.AccessRegionSet[z]);
                this.AccessRegionSet.push(obj);
            }
        }
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * Forwarding rule of layer-7 listeners
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Listener information
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Rule domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Rule path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Origin server type
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Forwarding policy of the origin server
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether health check is enabled. 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * Rule status. 0: running, 1: creating, 2: terminating, 3: binding/unbinding origin server, 4: updating configuration
         * @type {number || null}
         */
        this.RuleStatus = null;

        /**
         * Health check parameters
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * Bound origin server information
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * Origin server service status. 0: exceptional, 1: normal
If health check is not enabled, this status will always be normal.
As long as one origin server is exceptional, this status will be exceptional. Please view `RealServerSet` for the status of specific origin servers.
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * The `host` carried in the request forwarded from the connection to the origin server. `default` indicates directly forwarding the received 'host'.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ForwardHost = null;

        /**
         * Specifies whether to enable Server Name Indication (SNI). Valid values: `ON` (enable) and `OFF` (disable).
Note: This field may return `null`, indicating that no valid value can be obtained.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ServerNameIndicationSwitch = null;

        /**
         * Server Name Indication (SNI). This field is required when `ServerNameIndicationSwitch` is `ON`.
Note: This field may return `null`, indicating that no valid value can be obtained.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ServerNameIndication = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;
        this.ServerNameIndicationSwitch = 'ServerNameIndicationSwitch' in params ? params.ServerNameIndicationSwitch : null;
        this.ServerNameIndication = 'ServerNameIndication' in params ? params.ServerNameIndication : null;

    }
}

/**
 * Query the binding status of origin servers. BindStatus: 0 (not bound), 1(bound to rules or listeners).
 * @class
 */
class RealServerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server ID.
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * `0`: Not bound; `1`: Bound to rule or listener.
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * ID of the connection bound to this origin server. This string is empty if they are not bound.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * ID of the connection group bound to this origin server. This string is null if no connection groups are bound.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeTCPListeners response structure.
 * @class
 */
class DescribeTCPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity of listeners that matches the conditions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * TCP listener list
         * @type {Array.<TCPListener> || null}
         */
        this.ListenerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new TCPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRules request structure.
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-7 listener ID.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * DescribeCountryAreaMapping response structure.
 * @class
 */
class DescribeCountryAreaMappingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country/region code mapping table
         * @type {Array.<CountryAreaMap> || null}
         */
        this.CountryAreaMappingList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CountryAreaMappingList) {
            this.CountryAreaMappingList = new Array();
            for (let z in params.CountryAreaMappingList) {
                let obj = new CountryAreaMap();
                obj.deserialize(params.CountryAreaMappingList[z]);
                this.CountryAreaMappingList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServers response structure.
 * @class
 */
class DescribeRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * An information list of origin server
         * @type {Array.<BindRealServerInfo> || null}
         */
        this.RealServerSet = null;

        /**
         * The quantity of origin servers
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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServerInfo();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHTTPListenerAttribute response structure.
 * @class
 */
class ModifyHTTPListenerAttributeResponse extends  AbstractModel {
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
 * DescribeRealServerStatistics request structure.
 * @class
 */
class DescribeRealServerStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Layer-7 rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Statistics duration. Unit: hours. It only supports querying statistics for the past 1, 3, 6, 12, and 24 hours.
         * @type {number || null}
         */
        this.WithinTime = null;

        /**
         * Statistics start time, such as `2020-08-19 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time, such as `2020-08-19 23:59:59`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistics granularity in seconds. Only 1-minute (60-second) and 5-minute (300-second) granularities are supported.
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.WithinTime = 'WithinTime' in params ? params.WithinTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * The returned value of the added origin server information
 * @class
 */
class BindRealServerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server IP or domain name
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Origin server name
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Tag list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagPair> || null}
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
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DescribeProxyAndStatisticsListeners request structure.
 * @class
 */
class DescribeProxyAndStatisticsListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeAccessRegions response structure.
 * @class
 */
class DescribeAccessRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity of acceleration regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Acceleration region details list
         * @type {Array.<RegionDetail> || null}
         */
        this.AccessRegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AccessRegionSet) {
            this.AccessRegionSet = new Array();
            for (let z in params.AccessRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.AccessRegionSet[z]);
                this.AccessRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListeners request structure.
 * @class
 */
class DeleteListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of listeners to be deleted
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Whether to allow a forced deletion of listeners that have been bound to origin servers. 1: allowed; 0: not allow.
         * @type {number || null}
         */
        this.Force = null;

        /**
         * Connection group ID; Either this parameter or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Connection ID; Either this parameter or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Force = 'Force' in params ? params.Force : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeSecurityRules request structure.
 * @class
 */
class DescribeSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of security rule IDs. Up to 20 security rules are supported.
         * @type {Array.<string> || null}
         */
        this.SecurityRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityRuleIds = 'SecurityRuleIds' in params ? params.SecurityRuleIds : null;

    }
}

/**
 * DescribeDestRegions response structure.
 * @class
 */
class DescribeDestRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of origin server regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of origin server region details
         * @type {Array.<RegionDetail> || null}
         */
        this.DestRegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DestRegionSet) {
            this.DestRegionSet = new Array();
            for (let z in params.DestRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.DestRegionSet[z]);
                this.DestRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainErrorPageInfoByIds response structure.
 * @class
 */
class DescribeDomainErrorPageInfoByIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration set of custom error responses
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DomainErrorPageInfo> || null}
         */
        this.ErrorPageSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ErrorPageSet) {
            this.ErrorPageSet = new Array();
            for (let z in params.ErrorPageSet) {
                let obj = new DomainErrorPageInfo();
                obj.deserialize(params.ErrorPageSet[z]);
                this.ErrorPageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxies request structure.
 * @class
 */
class DescribeProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or multiple instance IDs. The upper limit on the number of instances for each request is 100. This parameter does not support specifying InstanceIds and Filters at the same time. It’s an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
         * Filters   
The upper limit on Filters for each request is 10, and the upper limit on Filter.Values is 5. This parameter does not support specifying InstanceIds and Filters at the same time. 
ProjectId - String - Required: No - Filter by a project ID.   
AccessRegion - String - Required: No - Filter by an access region.    
RealServerRegion - String - Required: No - Filter by an origin server region.
GroupId - String - Required: No - Filter by a connection group ID.
IPAddressVersion - String - Required: No - Filter by IP version.
PackageType - String - Required: No - Filter by package type of connection groups.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Queries by one or multiple instance IDs. The upper limit on the number of instances for each request is 100. This parameter does not support specifying InstanceIds and Filters at the same time. It’s a new parameter, and replaces InstanceIds.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * Tag list. If this field exists, the list of the resources with the tag will be pulled.
It supports up to 5 tags. If there are two or more tags, the connections tagged any of them will be pulled.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * When this field is 1, only not-grouped connections are pulled.
When this field is 0, only grouped connections are pulled.
When this field does not exist, all connections are pulled, including both not-grouped and grouped connections.
         * @type {number || null}
         */
        this.Independent = null;

        /**
         * Specifies how connections are listed. Valid values:
`asc`: Ascending order
`desc`: Descending order
Default: `desc`
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting field. Valid values:
`create_time`: Sort by creation time
`proxy_id`: Sort by connection ID
`bandwidth`:Sort by bandwidth limit
`concurrent_connections`: Sort by number of concurrent connections
Default: `create_time`
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Independent = 'Independent' in params ? params.Independent : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * BindListenerRealServers response structure.
 * @class
 */
class BindListenerRealServersResponse extends  AbstractModel {
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
 * ModifyProxyGroupAttribute response structure.
 * @class
 */
class ModifyProxyGroupAttributeResponse extends  AbstractModel {
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
 * Used by internal APIs. It returns the information of listeners whose statistics can be queried.
 * @class
 */
class ListenerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listening port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Listener protocol type
         * @type {string || null}
         */
        this.Protocol = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeUDPListeners response structure.
 * @class
 */
class DescribeUDPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of listeners
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * UDP listener list
         * @type {Array.<UDPListener> || null}
         */
        this.ListenerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new UDPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUDPListeners request structure.
 * @class
 */
class CreateUDPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * List of listener ports
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Origin server scheduling policy of listeners, which supports round robin (rr), weighted round robin (wrr), and least connections (lc).
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Origin server type of listeners, which supports IP or DOMAIN type.
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Connection ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Connection group ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * List of origin server ports, which only supports the listeners of version 1.0 and connection group.
         * @type {Array.<number> || null}
         */
        this.RealServerPorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RealServerPorts = 'RealServerPorts' in params ? params.RealServerPorts : null;

    }
}

/**
 * ModifyRuleAttribute request structure.
 * @class
 */
class ModifyRuleAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Forwarding rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Scheduling policy:
rr: round robin;
wrr: weighted round robin;
lc: least connections.
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether to enable the origin server health check:
1: enable;
0: disable.
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * Health check configuration parameters
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * Forwarding rule path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Protocol types of the forwarding from acceleration connection to origin server, which supports default, HTTP and HTTPS.
If `ForwardProtocol=default`, the `ForwardProtocol` of the listener will be used.
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * The forwarding host, which is carried in the request forwarded from the acceleration connection to the origin server.
If `ForwardHost=default`, the domain name configured with the forwarding rule will be used. For other cases, the value set in this field will be used.
         * @type {string || null}
         */
        this.ForwardHost = null;

        /**
         * Specifies whether to enable Server Name Indication (SNI). Valid values: `ON` (enable) and `OFF` (disable).
         * @type {string || null}
         */
        this.ServerNameIndicationSwitch = null;

        /**
         * Server Name Indication (SNI). This field is required when `ServerNameIndicationSwitch` is `ON`.
         * @type {string || null}
         */
        this.ServerNameIndication = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;
        this.ServerNameIndicationSwitch = 'ServerNameIndicationSwitch' in params ? params.ServerNameIndicationSwitch : null;
        this.ServerNameIndication = 'ServerNameIndication' in params ? params.ServerNameIndication : null;

    }
}

/**
 * CreateSecurityPolicy response structure.
 * @class
 */
class CreateSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TCP listener information
 * @class
 */
class TCPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Origin server port, which is only valid for the connections of version 1.0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * Type of the origin server bound to listeners
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Listener protocol: TCP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener status:
`0`: Running
`1`: Creating
`2`: Terminating
`3`: Adjusting origin server
`4`: Adjusting configuration
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * Origin server access policy of listeners:
`rr`: Round robin
`wrr`: Weighted round robin
`lc`: Least connection
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Response timeout of origin server health check (unit: seconds).
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * Time interval of origin server health check (unit: seconds).
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * Whether to enable the listener health check:
`0`: Disable
`1`: Enable
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * Status of the origin server bound to listeners:
`0`: Abnormal
`1`: Normal
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * Information of the origin server bound to listeners
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * Listener creation time in the format of UNIX timestamp
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Describes how the listener obtains client IPs. `0`: TOA; `1`: Proxy Protocol.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClientIPMethod = null;

        /**
         * Healthy threshold. The number of consecutive successful health checks required before considering an origin server healthy. Value range: 1 - 10.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HealthyThreshold = null;

        /**
         * Unhealthy threshold. The number of consecutive failed health checks required before considering an origin server unhealthy. Value range: 1 - 10.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnhealthyThreshold = null;

        /**
         * Whether to enable the primary/secondary origin server mode for failover. Values: `1` (enabled); `0` (disabled). It’s not available if the origin type is `DOMAIN`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FailoverSwitch = null;

        /**
         * Specifies whether to enable session persistence. Values: `0` (disable), `1` (enable)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionPersist = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ClientIPMethod = 'ClientIPMethod' in params ? params.ClientIPMethod : null;
        this.HealthyThreshold = 'HealthyThreshold' in params ? params.HealthyThreshold : null;
        this.UnhealthyThreshold = 'UnhealthyThreshold' in params ? params.UnhealthyThreshold : null;
        this.FailoverSwitch = 'FailoverSwitch' in params ? params.FailoverSwitch : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * CreateSecurityRules response structure.
 * @class
 */
class CreateSecurityRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessRegions request structure.
 * @class
 */
class DescribeAccessRegionsRequest extends  AbstractModel {
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
 * CreateCertificate request structure.
 * @class
 */
class CreateCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate type. Where:
`0`: Basic authentication configuration;
`1`: Client CA certificate;
`2`: Server SSL certificate;
`3`: Origin server CA certificate;
`4`: Connection SSL certificate.
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * Certificate content. URL encoding. Where:
If the certificate type is basic authentication, enter username/password pair for this parameter. Format: “username:password”, for example, root:FSGdT. The password is `htpasswd` or `openssl`, for example, openssl passwd -crypt 123456.
When the certificate type is CA/SSL certificate, enter the certificate content for this parameter in the format of ‘pem’.
         * @type {string || null}
         */
        this.CertificateContent = null;

        /**
         * Certificate name
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * URL-encoded key content. This parameter is required only when the certificate type is SSL certificate. Its format is `PEM`.
         * @type {string || null}
         */
        this.CertificateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateContent = 'CertificateContent' in params ? params.CertificateContent : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CertificateKey = 'CertificateKey' in params ? params.CertificateKey : null;

    }
}

/**
 * DescribeCertificates response structure.
 * @class
 */
class DescribeCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate list, which includes certificate ID and certificate name.
         * @type {Array.<Certificate> || null}
         */
        this.CertificateSet = null;

        /**
         * Total quantity of server certificates that match the query conditions.
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

        if (params.CertificateSet) {
            this.CertificateSet = new Array();
            for (let z in params.CertificateSet) {
                let obj = new Certificate();
                obj.deserialize(params.CertificateSet[z]);
                this.CertificateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomHeader request structure.
 * @class
 */
class DescribeCustomHeaderRequest extends  AbstractModel {
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
 * DescribeProxyGroupList response structure.
 * @class
 */
class DescribeProxyGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of connection groups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of connection groups.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ProxyGroupInfo> || null}
         */
        this.ProxyGroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ProxyGroupList) {
            this.ProxyGroupList = new Array();
            for (let z in params.ProxyGroupList) {
                let obj = new ProxyGroupInfo();
                obj.deserialize(params.ProxyGroupList[z]);
                this.ProxyGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainErrorPageInfo request structure.
 * @class
 */
class DescribeDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * HTTPS listener information
 * @class
 */
class HTTPSListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Listener protocol. Valid values: HTTP, HTTPS. The value `HTTPS` is used for this structure
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener status:
0: running;
1: creating;
2: terminating;
3: adjusting origin server;
4: modifying configuration.
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * Server SSL certificate ID of the listener
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Protocol used in the forwarding from connections to origin servers
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * Listener creation time; using UNIX timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Server SSL certificate alias
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * Client CA certificate ID of the listener
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * Listener authentication mode. Valid values:
0: one-way authentication;
1: mutual authentication.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * Client CA certificate alias
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientCertificateAlias = null;

        /**
         * Alias information of multiple client CA certificates.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyClientCertificateAliasInfo = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ClientCertificateAlias = 'ClientCertificateAlias' in params ? params.ClientCertificateAlias : null;

        if (params.PolyClientCertificateAliasInfo) {
            this.PolyClientCertificateAliasInfo = new Array();
            for (let z in params.PolyClientCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyClientCertificateAliasInfo[z]);
                this.PolyClientCertificateAliasInfo.push(obj);
            }
        }

    }
}

/**
 * Nearest access configuration details of domain name resolution
 * @class
 */
class DomainAccessRegionDict extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nearest access region
         * @type {Array.<NationCountryInnerInfo> || null}
         */
        this.NationCountryInnerList = null;

        /**
         * Acceleration region connection list
         * @type {Array.<ProxyIdDict> || null}
         */
        this.ProxyList = null;

        /**
         * Acceleration region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Acceleration region internal code
         * @type {string || null}
         */
        this.GeographicalZoneInnerCode = null;

        /**
         * Internal code of the continent to which the acceleration region belongs
         * @type {string || null}
         */
        this.ContinentInnerCode = null;

        /**
         * Acceleration region alias
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NationCountryInnerList) {
            this.NationCountryInnerList = new Array();
            for (let z in params.NationCountryInnerList) {
                let obj = new NationCountryInnerInfo();
                obj.deserialize(params.NationCountryInnerList[z]);
                this.NationCountryInnerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyIdDict();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GeographicalZoneInnerCode = 'GeographicalZoneInnerCode' in params ? params.GeographicalZoneInnerCode : null;
        this.ContinentInnerCode = 'ContinentInnerCode' in params ? params.ContinentInnerCode : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * CloseSecurityPolicy request structure.
 * @class
 */
class CloseSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Security group policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ModifyCertificateAttributes request structure.
 * @class
 */
class ModifyCertificateAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate name. Up to 50 characters.
         * @type {string || null}
         */
        this.CertificateAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;

    }
}

/**
 * Tag key-value pair
 * @class
 */
class TagPair extends  AbstractModel {
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
 * CreateSecurityRules request structure.
 * @class
 */
class CreateSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * List of access rules
         * @type {Array.<SecurityPolicyRuleIn> || null}
         */
        this.RuleList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new SecurityPolicyRuleIn();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }

    }
}

/**
 * DescribeCertificates request structure.
 * @class
 */
class DescribeCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate type. Where:
0: basic authentication configuration;
1: client CA certificate;
2: server SSL certificate;
3: origin server CA certificate;
4: connection SSL certificate.
-1: all types.
The default value is -1.
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit. The default value is 20.
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
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeProxiesStatus request structure.
 * @class
 */
class DescribeProxiesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID list; It’s an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Connection ID list; It’s a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * ModifyTCPListenerAttribute request structure.
 * @class
 */
class ModifyTCPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Connection group ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Connection ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Origin server scheduling policy of listeners, which supports round robin (rr), weighted round robin (wrr), and least connections (lc).
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Time interval of origin server health check (unit: seconds). Value range: [5, 300].
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * Response timeout of origin server health check (unit: seconds). Value range: [2, 60]. The timeout value shall be less than the time interval for health check DelayLoop.
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * Whether to enable health check. 1: enable; 0: disable.
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * Whether to enable the primary/secondary origin server mode. Valid values: 1 (enable) and 0 (disable). It cannot be enabled for domain name origin servers.
         * @type {number || null}
         */
        this.FailoverSwitch = null;

        /**
         * Healthy threshold. The number of consecutive successful health checks required before considering an origin server healthy. Value range: 1 - 10.
         * @type {number || null}
         */
        this.HealthyThreshold = null;

        /**
         * Unhealthy threshold. The number of consecutive failed health checks required before considering an origin server unhealthy. Value range: 1 -10.
         * @type {number || null}
         */
        this.UnhealthyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.FailoverSwitch = 'FailoverSwitch' in params ? params.FailoverSwitch : null;
        this.HealthyThreshold = 'HealthyThreshold' in params ? params.HealthyThreshold : null;
        this.UnhealthyThreshold = 'UnhealthyThreshold' in params ? params.UnhealthyThreshold : null;

    }
}

/**
 * DeleteSecurityPolicy response structure.
 * @class
 */
class DeleteSecurityPolicyResponse extends  AbstractModel {
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
 * CreateDomain response structure.
 * @class
 */
class CreateDomainResponse extends  AbstractModel {
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
 * ModifyProxiesProject response structure.
 * @class
 */
class ModifyProxiesProjectResponse extends  AbstractModel {
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
 * ModifyDomain request structure.
 * @class
 */
class ModifyDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-7 listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Original domain name information
         * @type {string || null}
         */
        this.OldDomain = null;

        /**
         * New domain name information
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * Server SSL certificate ID. It's only applicable to the connections of version 3.0:
If this field is not passed in, the original certificate will be used;
If this field is passed in, and CertificateId=default, the listener certificate will be used;
For other cases, the certificate specified by CertificateId will be used.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Client CA certificate ID. It's only applicable to the connections of version 3.0:
If this field is not passed in, the original certificate will be used;
If this field is passed in, and ClientCertificateId=default, the listener certificate will be used;
For other cases, the certificate specified by ClientCertificateId will be used.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * Client CA certificate ID. It is only applicable to connections on version 3.0, where:
If this field and `ClientCertificateId` are not included, the original certificate will be used;
If this field is included, and ClientCertificateId=default, then the listener certificate will be used;
In other cases, the certificate specified by `ClientCertificateId` or `PolyClientCertificateIds` will be used.
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.OldDomain = 'OldDomain' in params ? params.OldDomain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * ModifySecurityRule request structure.
 * @class
 */
class ModifySecurityRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule name: up to 30 characters. The extra characters will be truncated.
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Security rule action
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * A CIDR IP address associated with the rule
         * @type {string || null}
         */
        this.SourceCidr = null;

        /**
         * Protocol type
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port range. Valid values:
A single port: 80
Multiple ports: 80 and 443
Consecutive ports: 3306-20000
All ports: ALL
         * @type {string || null}
         */
        this.DestPortRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DestPortRange = 'DestPortRange' in params ? params.DestPortRange : null;

    }
}

/**
 * CreateCustomHeader response structure.
 * @class
 */
class CreateCustomHeaderResponse extends  AbstractModel {
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
 * DescribeAccessRegionsByDestRegion request structure.
 * @class
 */
class DescribeAccessRegionsByDestRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server region: the DescribeDestRegions API returns the value of `RegionId` field of `DestRegionSet`.
         * @type {string || null}
         */
        this.DestRegion = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general), `Accelerator` (specific for games), and `CrossBorder` (cross-MLC-border connection).
         * @type {string || null}
         */
        this.PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestRegion = 'DestRegion' in params ? params.DestRegion : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;

    }
}

/**
 * Query listeners or rules-related origin server information, excluding `tag` information.
 * @class
 */
class RealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server IP or domain name
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Origin server name
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Indicates whether the origin server IP or domain name is in the blocklist. Valid values: `0` (no) and `1` (yes).
         * @type {number || null}
         */
        this.InBanBlacklist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InBanBlacklist = 'InBanBlacklist' in params ? params.InBanBlacklist : null;

    }
}

/**
 * DescribeRealServers request structure.
 * @class
 */
class DescribeRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the project ID to which the origin server belongs. -1: all projects.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Origin server IP or domain name to be queried. The fuzzy match is supported.
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Offset, which is 0 by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity of values to return. The default value is 20 and the maximum value is 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list. If this field exists, the list of the resources with the tag will be pulled.
It supports up to 5 tags. If there are two or more tags, the origin servers tagged any of them will be pulled.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * Filter conditions. The value of the `name` of the `filter` (RealServerName, RealServerIP)
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
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
 * Statistics information
 * @class
 */
class StatisticsDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Corresponding time point
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Statistics value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * CreateCustomHeader request structure.
 * @class
 */
class CreateCustomHeaderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Custom header name and content list. `‘’$remote_addr‘’` will be resolved and replaced with the client IP. Other values will be directly passed to the origin server.
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * Connection group details list
 * @class
 */
class ProxyGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Connection group domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Connection group name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Target region
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * Connection group status.
Where:
`RUNNING`: Running
`CREATING`: Creating
`DESTROYING`: Terminating
`MOVING`: Migrating
`CHANGING`: Deploying
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Tag list.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * Connection group version
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Whether the connection group contains a Microsoft connection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProxyType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: Disable
`1`: Enable
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * CreateProxyGroupDomain response structure.
 * @class
 */
class CreateProxyGroupDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Server Certificate
 * @class
 */
class Certificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate name; It's an old parameter, please switch to CertificateAlias.
         * @type {string || null}
         */
        this.CertificateName = null;

        /**
         * Certificate type.
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * Certificate name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * Certificate creation time in the format of UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (midnight in UTC/GMT).
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Certificate effective time in the format of UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (midnight in UTC/GMT).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * Certificate expiration time in the format of UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (midnight in UTC/GMT).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Common name of the certificate issuer.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuerCN = null;

        /**
         * Common name of the certificate subject.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubjectCN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateName = 'CertificateName' in params ? params.CertificateName : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IssuerCN = 'IssuerCN' in params ? params.IssuerCN : null;
        this.SubjectCN = 'SubjectCN' in params ? params.SubjectCN : null;

    }
}

/**
 * DescribeDomainErrorPageInfo response structure.
 * @class
 */
class DescribeDomainErrorPageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration set of a custom error response
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DomainErrorPageInfo> || null}
         */
        this.ErrorPageSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ErrorPageSet) {
            this.ErrorPageSet = new Array();
            for (let z in params.ErrorPageSet) {
                let obj = new DomainErrorPageInfo();
                obj.deserialize(params.ErrorPageSet[z]);
                this.ErrorPageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyProxies response structure.
 * @class
 */
class DestroyProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of connection instances that cannot be terminated.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * ID list of connection instances that failed to be terminated.
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleRealServers response structure.
 * @class
 */
class DescribeRuleRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of origin servers that can be bound
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information list of origin servers that can be bound
         * @type {Array.<RealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * Quantity of bound origin servers
         * @type {number || null}
         */
        this.BindRealServerTotalCount = null;

        /**
         * Bound origin server information list
         * @type {Array.<BindRealServer> || null}
         */
        this.BindRealServerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new RealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindRealServerTotalCount = 'BindRealServerTotalCount' in params ? params.BindRealServerTotalCount : null;

        if (params.BindRealServerSet) {
            this.BindRealServerSet = new Array();
            for (let z in params.BindRealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.BindRealServerSet[z]);
                this.BindRealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServersStatus request structure.
 * @class
 */
class DescribeRealServersStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of origin server IDs
         * @type {Array.<string> || null}
         */
        this.RealServerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIds = 'RealServerIds' in params ? params.RealServerIds : null;

    }
}

/**
 * ModifyHTTPListenerAttribute request structure.
 * @class
 */
class ModifyHTTPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID to be modified
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * New listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * CreateProxy request structure.
 * @class
 */
class CreateProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID of connection.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Connection name.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Access region.
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * Connection bandwidth cap. Unit: Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Connection concurrence cap, which indicates the maximum number of simultaneous online connections. Unit: 10,000 connections.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * Origin server region. If GroupId exists, the origin server region is the one of connection group, and this field is not required. If GroupId does not exist, this field is reuqired.
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Connection group ID. This parameter is required when the connection is created in the connection group. Otherwise, this field is ignored.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * List of tags to be added for connection.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * ID of the replicated connection. Only a running connection can be replicated.
The connection is to be replicated if this parameter is set.
         * @type {string || null}
         */
        this.ClonedProxyId = null;

        /**
         * Billing mode (0: bill-by-bandwidth, 1: bill-by-traffic. Default value: bill-by-bandwidth)
         * @type {number || null}
         */
        this.BillingType = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Network type. `normal`: general BGP; `cn2`: dedicated BGP; `triple`: Non-BGP (provided by the top 3 ISPs in the Chinese mainland).
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general), `Accelerator` (specific for games), and `CrossBorder` (cross-MLC-border connection).
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values: `0` (disable HTTP3); `1` (enable HTTP3). Note: If HTTP3 is enabled for a connection, TCP/UDP access will not be allowed. After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.ClonedProxyId = 'ClonedProxyId' in params ? params.ClonedProxyId : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DeleteCertificate request structure.
 * @class
 */
class DeleteCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the certificate to be deleted.
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * ModifySecurityRule response structure.
 * @class
 */
class ModifySecurityRuleResponse extends  AbstractModel {
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
 * DescribeProxiesStatus response structure.
 * @class
 */
class DescribeProxiesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection status list.
         * @type {Array.<ProxyStatus> || null}
         */
        this.InstanceStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceStatusSet) {
            this.InstanceStatusSet = new Array();
            for (let z in params.InstanceStatusSet) {
                let obj = new ProxyStatus();
                obj.deserialize(params.InstanceStatusSet[z]);
                this.InstanceStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveRealServers request structure.
 * @class
 */
class RemoveRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of origin server IDs
         * @type {Array.<string> || null}
         */
        this.RealServerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIds = 'RealServerIds' in params ? params.RealServerIds : null;

    }
}

/**
 * CreateDomain request structure.
 * @class
 */
class CreateDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name to be created. Each listener supports up to 100 domain names.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Server certificate, which is used for the HTTPS interaction between client and GAAP.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Client CA certificate, which is used for the HTTPS interaction between client and GAAP.
This field is required only when the mutual authentication method is adopted.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * Client CA certificate, which is used for the HTTPS interaction between the client and GAAP.
This field or the `ClientCertificateId` field is required for mutual authentication only.
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
HTTP3 is not enabled by default. You can enable it with this field SetDomainHttp3.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

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
         * Layer-7 listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name of the forwarding rule
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Path of the forwarding rule
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The origin server type of the forwarding rule, which supports IP and DOMAIN types.
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Forwarding rules of origin server, which supports round robin (rr), weighted round robin (wrr), and least connections (lc).
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Whether the health check is enabled for rules. 1: enabled; 0: disabled.
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * Parameters related to origin server health check
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * Protocol types of the forwarding from acceleration connection to origin server, which supports HTTP or HTTPS.
If this field is not passed in, it indicates that the ForwardProtocol of the corresponding listener will be used.
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * The host to which the acceleration connection forwards. If this parameter is not specified, the default host will be used, i.e., the host with which the client initiates HTTP requests.
         * @type {string || null}
         */
        this.ForwardHost = null;

        /**
         * Specifies whether to enable Server Name Indication (SNI). Valid values: `ON` (enable) and `OFF` (disable).
         * @type {string || null}
         */
        this.ServerNameIndicationSwitch = null;

        /**
         * Server Name Indication (SNI). This field is required when `ServerNameIndicationSwitch` is `ON`.
         * @type {string || null}
         */
        this.ServerNameIndication = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;
        this.ServerNameIndicationSwitch = 'ServerNameIndicationSwitch' in params ? params.ServerNameIndicationSwitch : null;
        this.ServerNameIndication = 'ServerNameIndication' in params ? params.ServerNameIndication : null;

    }
}

/**
 * Used by internal APIs. It returns connections from which the statistics can be derived, and the listener information.
 * @class
 */
class ProxySimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Connection name
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Listener list
         * @type {Array.<ListenerInfo> || null}
         */
        this.ListenerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;

        if (params.ListenerList) {
            this.ListenerList = new Array();
            for (let z in params.ListenerList) {
                let obj = new ListenerInfo();
                obj.deserialize(params.ListenerList[z]);
                this.ListenerList.push(obj);
            }
        }

    }
}

/**
 * DeleteSecurityPolicy request structure.
 * @class
 */
class DeleteSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * HTTP listener information
 * @class
 */
class HTTPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Listener creation time; using UNIX timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Listener protocol. Valid values: HTTP, HTTPS. The value `HTTP` is used for this structure
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener status:
0: running;
1: creating;
2: terminating;
3: adjusting origin server;
4: modifying configuration.
         * @type {number || null}
         */
        this.ListenerStatus = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;

    }
}

/**
 * Connection group details
 * @class
 */
class ProxyGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of connections in connection group
         * @type {number || null}
         */
        this.ProxyNum = null;

        /**
         * Connection group status:
`0`: Running normally
`1`: Creating
`4`: Terminating
`11`: Migrating
`12`: Deploying
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Owner UIN
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Creation UIN
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * Connection name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Default IP of domain name resolution for connection groups
         * @type {string || null}
         */
        this.DnsDefaultIp = null;

        /**
         * Connection group domain name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target region
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * Whether it is an old connection group, i.e., those created before August 3, 2018.
         * @type {boolean || null}
         */
        this.IsOldGroup = null;

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Tag list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * Security policy ID. This field exists if security policies are set.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Connection group version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Describes how the connection obtains client IPs. `0`: TOA; `1`: Proxy Protocol.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ClientIPMethod = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general connection group), `Accelerator` (silver connection group), and `CrossBorder` (cross-MLC-border connection group).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: Disable
`1`: Enable
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyNum = 'ProxyNum' in params ? params.ProxyNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.DnsDefaultIp = 'DnsDefaultIp' in params ? params.DnsDefaultIp : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.IsOldGroup = 'IsOldGroup' in params ? params.IsOldGroup : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ClientIPMethod = 'ClientIPMethod' in params ? params.ClientIPMethod : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * CreateHTTPListener request structure.
 * @class
 */
class CreateHTTPListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port, which is based on the listeners of same transport layer protocol (TCP or UDP). The port must be unique.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Connection ID, which cannot be set together with `GroupId` at the same time. A listener will be created for the corresponding connection.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Connection group ID, which cannot be set together with `ProxyId` at the same time. A listener will be created for the corresponding connection group.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CloseSecurityPolicy response structure.
 * @class
 */
class CloseSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async Process ID. Using DescribeAsyncTaskStatus to query process and status.
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
 * DescribeRegionAndPrice response structure.
 * @class
 */
class DescribeRegionAndPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of origin server regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of origin server region details
         * @type {Array.<RegionDetail> || null}
         */
        this.DestRegionSet = null;

        /**
         * Connection bandwidth price gradient
         * @type {Array.<BandwidthPriceGradient> || null}
         */
        this.BandwidthUnitPrice = null;

        /**
         * Currency type of bandwidth price:
CNY (Chinese Yuan)
USD (United States Dollar)
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DestRegionSet) {
            this.DestRegionSet = new Array();
            for (let z in params.DestRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.DestRegionSet[z]);
                this.DestRegionSet.push(obj);
            }
        }

        if (params.BandwidthUnitPrice) {
            this.BandwidthUnitPrice = new Array();
            for (let z in params.BandwidthUnitPrice) {
                let obj = new BandwidthPriceGradient();
                obj.deserialize(params.BandwidthUnitPrice[z]);
                this.BandwidthUnitPrice.push(obj);
            }
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddRealServers response structure.
 * @class
 */
class AddRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server information list
         * @type {Array.<NewRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new NewRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseProxies response structure.
 * @class
 */
class CloseProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Only the running connection instance ID lists can be enabled.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * ID list of connection instances failed to be enabled.
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCertificate response structure.
 * @class
 */
class DeleteCertificateResponse extends  AbstractModel {
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
 * Security policy rule (input parameter)
 * @class
 */
class SecurityPolicyRuleIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source IP or IP range of the request.
         * @type {string || null}
         */
        this.SourceCidr = null;

        /**
         * Policy: Allow (ACCEPT) or reject (DROP).
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Rule alias
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * Protocol: TCP or UDP. ALL indicates all protocols.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Target port. Formatting examples:
Single port: 80
Multiple ports: 80, 443
Consecutive ports: 3306-20000
All ports: ALL
         * @type {string || null}
         */
        this.DestPortRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DestPortRange = 'DestPortRange' in params ? params.DestPortRange : null;

    }
}

/**
 * DescribeBlackHeader response structure.
 * @class
 */
class DescribeBlackHeaderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of blocked custom headers
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BlackHeaders = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackHeaders = 'BlackHeaders' in params ? params.BlackHeaders : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDestRegions request structure.
 * @class
 */
class DescribeDestRegionsRequest extends  AbstractModel {
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
 * ModifyRuleAttribute response structure.
 * @class
 */
class ModifyRuleAttributeResponse extends  AbstractModel {
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
 * CreateTCPListeners response structure.
 * @class
 */
class CreateTCPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns the listener ID
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
 * DescribeSecurityPolicyDetail request structure.
 * @class
 */
class DescribeSecurityPolicyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

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
 * DescribeRulesByRuleIds response structure.
 * @class
 */
class DescribeRulesByRuleIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of returned rules.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of returned rules.
         * @type {Array.<RuleInfo> || null}
         */
        this.RuleSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetAuthentication request structure.
 * @class
 */
class SetAuthenticationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The domain name requiring advanced configuration, i.e., the domain name of the listener's forwarding rules.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Whether to enable the basic authentication:
0: disable basic authentication;
1: enable basic authentication.
The default value is 0.
         * @type {number || null}
         */
        this.BasicAuth = null;

        /**
         * Whether to enable the connection authentication, which is for the origin server to authenticate GAAP.
0: disable;
1: enable.
The default value is 0.
         * @type {number || null}
         */
        this.GaapAuth = null;

        /**
         * Whether to enable the origin server authentication, which is for GAAP to authenticate the server.
0: disable;
1: enable.
The default value is 0.
         * @type {number || null}
         */
        this.RealServerAuth = null;

        /**
         * Basic authentication configuration ID, which is obtained from the certificate management page.
         * @type {string || null}
         */
        this.BasicAuthConfId = null;

        /**
         * Connection SSL certificate ID, which is obtained from the certificate management page.
         * @type {string || null}
         */
        this.GaapCertificateId = null;

        /**
         * CA certificate ID of the origin server, which is obtained from the certificate management page. When authenticating the origin server, enter this parameter or the `RealServerCertificateIds` parameter.
         * @type {string || null}
         */
        this.RealServerCertificateId = null;

        /**
         * This field has been disused. Use ServerNameIndication instead.
         * @type {string || null}
         */
        this.RealServerCertificateDomain = null;

        /**
         * CA certificate IDs of multiple origin servers, which are obtained from the certificate management page. When authenticating the origin servers, enter this parameter or the `RealServerCertificateId` parameter.
         * @type {Array.<string> || null}
         */
        this.PolyRealServerCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.BasicAuth = 'BasicAuth' in params ? params.BasicAuth : null;
        this.GaapAuth = 'GaapAuth' in params ? params.GaapAuth : null;
        this.RealServerAuth = 'RealServerAuth' in params ? params.RealServerAuth : null;
        this.BasicAuthConfId = 'BasicAuthConfId' in params ? params.BasicAuthConfId : null;
        this.GaapCertificateId = 'GaapCertificateId' in params ? params.GaapCertificateId : null;
        this.RealServerCertificateId = 'RealServerCertificateId' in params ? params.RealServerCertificateId : null;
        this.RealServerCertificateDomain = 'RealServerCertificateDomain' in params ? params.RealServerCertificateDomain : null;
        this.PolyRealServerCertificateIds = 'PolyRealServerCertificateIds' in params ? params.PolyRealServerCertificateIds : null;

    }
}

/**
 * InquiryPriceCreateProxy response structure.
 * @class
 */
class InquiryPriceCreateProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic price of connection in USD/day.
         * @type {number || null}
         */
        this.ProxyDailyPrice = null;

        /**
         * Tiered price of connection bandwidth.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BandwidthPriceGradient> || null}
         */
        this.BandwidthUnitPrice = null;

        /**
         * Discounted basic price of connection in USD/day.
         * @type {number || null}
         */
        this.DiscountProxyDailyPrice = null;

        /**
         * Currency, which supports CNY, USD, etc.
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Connection traffic price in USD/GB.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowUnitPrice = null;

        /**
         * Discounted connection traffic price in USD/GB.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiscountFlowUnitPrice = null;

        /**
         * Dedicated BGP bandwidth price. Unit: USD/Mbps/day
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Cn2BandwidthPrice = null;

        /**
         * Dedicated BGP bandwidth discount price. Unit: USD/Mbps/day
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Cn2BandwidthPriceWithDiscount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyDailyPrice = 'ProxyDailyPrice' in params ? params.ProxyDailyPrice : null;

        if (params.BandwidthUnitPrice) {
            this.BandwidthUnitPrice = new Array();
            for (let z in params.BandwidthUnitPrice) {
                let obj = new BandwidthPriceGradient();
                obj.deserialize(params.BandwidthUnitPrice[z]);
                this.BandwidthUnitPrice.push(obj);
            }
        }
        this.DiscountProxyDailyPrice = 'DiscountProxyDailyPrice' in params ? params.DiscountProxyDailyPrice : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.FlowUnitPrice = 'FlowUnitPrice' in params ? params.FlowUnitPrice : null;
        this.DiscountFlowUnitPrice = 'DiscountFlowUnitPrice' in params ? params.DiscountFlowUnitPrice : null;
        this.Cn2BandwidthPrice = 'Cn2BandwidthPrice' in params ? params.Cn2BandwidthPrice : null;
        this.Cn2BandwidthPriceWithDiscount = 'Cn2BandwidthPriceWithDiscount' in params ? params.Cn2BandwidthPriceWithDiscount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Add new origin server information
 * @class
 */
class NewRealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Origin server IP or domain name
         * @type {string || null}
         */
        this.RealServerIP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;

    }
}

/**
 * DescribeHTTPListeners response structure.
 * @class
 */
class DescribeHTTPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of listeners
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * HTTP listener list
         * @type {Array.<HTTPListener> || null}
         */
        this.ListenerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new HTTPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter describing an HTTP packet header
 * @class
 */
class HttpHeaderParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header name
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * HTTP header value
         * @type {string || null}
         */
        this.HeaderValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;

    }
}

/**
 * DescribeRealServerStatistics response structure.
 * @class
 */
class DescribeRealServerStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server status statistics of specified listener
         * @type {Array.<StatisticsDataInfo> || null}
         */
        this.StatisticsData = null;

        /**
         * Status statistics of multiple origin servers
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.RsStatisticsData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new StatisticsDataInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }

        if (params.RsStatisticsData) {
            this.RsStatisticsData = new Array();
            for (let z in params.RsStatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.RsStatisticsData[z]);
                this.RsStatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain name nearest access configuration
 * @class
 */
class AccessRegionDomainConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region/country code for the nearest access, which can be obtained via the DescribeCountryAreaMapping API.
         * @type {Array.<string> || null}
         */
        this.NationCountryInnerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.NationCountryInnerList = 'NationCountryInnerList' in params ? params.NationCountryInnerList : null;

    }
}

/**
 * DeleteDomain response structure.
 * @class
 */
class DeleteDomainResponse extends  AbstractModel {
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
 * DeleteListeners response structure.
 * @class
 */
class DeleteListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of listeners failed to be deleted
         * @type {Array.<string> || null}
         */
        this.OperationFailedListenerSet = null;

        /**
         * ID list of listeners deleted successfully
         * @type {Array.<string> || null}
         */
        this.OperationSucceedListenerSet = null;

        /**
         * ID list of invalid listeners. For example: the listener does not exist, or the instance corresponding to the listener does not match.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusListenerSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationFailedListenerSet = 'OperationFailedListenerSet' in params ? params.OperationFailedListenerSet : null;
        this.OperationSucceedListenerSet = 'OperationSucceedListenerSet' in params ? params.OperationSucceedListenerSet : null;
        this.InvalidStatusListenerSet = 'InvalidStatusListenerSet' in params ? params.InvalidStatusListenerSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Health check parameters of the layer-7 listeners' forwarding rules
 * @class
 */
class RuleCheckParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time interval of health check
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * Response timeout of health check
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * Check path of health check
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Health check method: GET/HEAD
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Return code indicting normal origin servers. Value range: [100, 200, 300, 400, 500]
         * @type {Array.<number> || null}
         */
        this.StatusCode = null;

        /**
         * Domain name to be performed health check
You cannot modify this parameter when calling ModifyRuleAttribute API.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Origin server failure check frequency
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FailedCountInter = null;

        /**
         * Origin server health check threshold. All requests to the origin server will be blocked once the threshold is exceeded.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FailedThreshold = null;

        /**
         * Duration to block requests targeting the origin server after a failed health check
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BlockInter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.FailedCountInter = 'FailedCountInter' in params ? params.FailedCountInter : null;
        this.FailedThreshold = 'FailedThreshold' in params ? params.FailedThreshold : null;
        this.BlockInter = 'BlockInter' in params ? params.BlockInter : null;

    }
}

/**
 * CreateSecurityPolicy request structure.
 * @class
 */
class CreateSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default policy: ACCEPT or DROP
         * @type {string || null}
         */
        this.DefaultAction = null;

        /**
         * Acceleration connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefaultAction = 'DefaultAction' in params ? params.DefaultAction : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ModifyHTTPSListenerAttribute response structure.
 * @class
 */
class ModifyHTTPSListenerAttributeResponse extends  AbstractModel {
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
 * Query the available acceleration region information, the corresponding bandwidth options, and the concurrence based on origin servers.
 * @class
 */
class AccessRegionDetial extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name in Chinese or English
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Value array of the available concurrence
         * @type {Array.<number> || null}
         */
        this.ConcurrentList = null;

        /**
         * Value array of the available bandwidth
         * @type {Array.<number> || null}
         */
        this.BandwidthList = null;

        /**
         * Region where the data center locates
         * @type {string || null}
         */
        this.RegionArea = null;

        /**
         * Name of the region where the data center locates
         * @type {string || null}
         */
        this.RegionAreaName = null;

        /**
         * Data center type. `dc`: data center; `ec`: edge server.
         * @type {string || null}
         */
        this.IDCType = null;

        /**
         * Feature bitmap. Valid values:
`0`: disable the feature;
`1`: enable the feature.
Each bit in the bitmap represents a feature:
1st bit: layer-4 acceleration;
2nd bit: layer-7 acceleration;
3rd bit: HTTP3 access;
4th bit: IPv6;
5th bit: dedicated BGP access;
6th bit: non-BGP access;
7th bit: QoS acceleration.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FeatureBitmap = null;

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
        this.ConcurrentList = 'ConcurrentList' in params ? params.ConcurrentList : null;
        this.BandwidthList = 'BandwidthList' in params ? params.BandwidthList : null;
        this.RegionArea = 'RegionArea' in params ? params.RegionArea : null;
        this.RegionAreaName = 'RegionAreaName' in params ? params.RegionAreaName : null;
        this.IDCType = 'IDCType' in params ? params.IDCType : null;
        this.FeatureBitmap = 'FeatureBitmap' in params ? params.FeatureBitmap : null;

    }
}

/**
 * DescribeProxyGroupList request structure.
 * @class
 */
class DescribeProxyGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. The default value is 20. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Project ID. Value range:
-1: all projects of this user
0: default project
Other values: specified project
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Filter condition   
Each request can have a maximum of 5 filter conditions for `Filter.Values`.
`RealServerRegion` - String - Required: No - Filter by origin server region. You can also check the value of `RegionId` returned by the `DescribeDestRegions` API.
`PackageType` - String - Required: No - Filter by type of connection groups, which can be `Thunder` (general connection group) or `Accelerator` (silver connection group).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Tag list. If this field exists, the list of the resources with the tag will be pulled.
It supports up to 5 tags. If there are two or more tags, the connection groups tagged any of them will be pulled.
         * @type {Array.<TagPair> || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * Security policy rule (output parameter)
 * @class
 */
class SecurityPolicyRuleOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy: Allow (ACCEPT) or reject (DROP).
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Source IP or IP range of the request.
         * @type {string || null}
         */
        this.SourceCidr = null;

        /**
         * Rule alias
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * Target port range
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DestPortRange = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Protocol type to be matched (TCP/UDP)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Security policy ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.DestPortRange = 'DestPortRange' in params ? params.DestPortRange : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * Bound origin server information
 * @class
 */
class BindRealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Origin server IP or domain name
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * Origin server weight
         * @type {number || null}
         */
        this.RealServerWeight = null;

        /**
         * Origin server health check status. Valid values:
0: normal;
1: exceptional.
If health check is not enabled, this status will always be normal.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealServerStatus = null;

        /**
         * Origin server port number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * If the origin server is a domain name, the domain name will be resolved to one or multiple IPs. This field indicates the exceptional IP list.
         * @type {Array.<string> || null}
         */
        this.DownIPList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerWeight = 'RealServerWeight' in params ? params.RealServerWeight : null;
        this.RealServerStatus = 'RealServerStatus' in params ? params.RealServerStatus : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.DownIPList = 'DownIPList' in params ? params.DownIPList : null;

    }
}

/**
 * The connection groups from which the statistics can be derived, and the connection information.
 * @class
 */
class GroupStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Connection group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * List of connections of a connection group
         * @type {Array.<ProxySimpleInfo> || null}
         */
        this.ProxySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxySimpleInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
            }
        }

    }
}

/**
 * CreateProxyGroup response structure.
 * @class
 */
class CreateProxyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection Group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHTTPSListener response structure.
 * @class
 */
class CreateHTTPSListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Created listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * BindRuleRealServers response structure.
 * @class
 */
class BindRuleRealServersResponse extends  AbstractModel {
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
 * DescribeGroupAndStatisticsProxy request structure.
 * @class
 */
class DescribeGroupAndStatisticsProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyUDPListenerAttribute request structure.
 * @class
 */
class ModifyUDPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Connection group ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Connection ID; Either `ProxyId` or `GroupId` must be set, but you cannot set both.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Origin server scheduling policy of listeners
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * DeleteSecurityRules response structure.
 * @class
 */
class DeleteSecurityRulesResponse extends  AbstractModel {
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
 * ModifyTCPListenerAttribute response structure.
 * @class
 */
class ModifyTCPListenerAttributeResponse extends  AbstractModel {
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
 * Country/region code mapping (name and code)
 * @class
 */
class CountryAreaMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country name.
         * @type {string || null}
         */
        this.NationCountryName = null;

        /**
         * Country code.
         * @type {string || null}
         */
        this.NationCountryInnerCode = null;

        /**
         * Region name.
         * @type {string || null}
         */
        this.GeographicalZoneName = null;

        /**
         * Region code.
         * @type {string || null}
         */
        this.GeographicalZoneInnerCode = null;

        /**
         * Continent name.
         * @type {string || null}
         */
        this.ContinentName = null;

        /**
         * Continent code.
         * @type {string || null}
         */
        this.ContinentInnerCode = null;

        /**
         * Remark information
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.NationCountryName = 'NationCountryName' in params ? params.NationCountryName : null;
        this.NationCountryInnerCode = 'NationCountryInnerCode' in params ? params.NationCountryInnerCode : null;
        this.GeographicalZoneName = 'GeographicalZoneName' in params ? params.GeographicalZoneName : null;
        this.GeographicalZoneInnerCode = 'GeographicalZoneInnerCode' in params ? params.GeographicalZoneInnerCode : null;
        this.ContinentName = 'ContinentName' in params ? params.ContinentName : null;
        this.ContinentInnerCode = 'ContinentInnerCode' in params ? params.ContinentInnerCode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * One-metric statistics
 * @class
 */
class MetricStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric statistics
         * @type {Array.<StatisticsDataInfo> || null}
         */
        this.MetricData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.MetricData) {
            this.MetricData = new Array();
            for (let z in params.MetricData) {
                let obj = new StatisticsDataInfo();
                obj.deserialize(params.MetricData[z]);
                this.MetricData.push(obj);
            }
        }

    }
}

/**
 * DescribeProxyDetail response structure.
 * @class
 */
class DescribeProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection details
         * @type {ProxyInfo || null}
         */
        this.ProxyDetail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProxyDetail) {
            let obj = new ProxyInfo();
            obj.deserialize(params.ProxyDetail)
            this.ProxyDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroupAndStatisticsProxy response structure.
 * @class
 */
class DescribeGroupAndStatisticsProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of connection groups that the statistics can be derived from
         * @type {Array.<GroupStatisticsInfo> || null}
         */
        this.GroupSet = null;

        /**
         * Connection group quantity
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

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new GroupStatisticsInfo();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUDPListeners response structure.
 * @class
 */
class CreateUDPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns the listener ID
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
 * ModifyHTTPSListenerAttribute request structure.
 * @class
 */
class ModifyHTTPSListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Connection ID. This field is required if using a single connection listener.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * New listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Type of the protocol used in the forwarding from connections to origin servers
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * New listener server certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * New listener client certificate ID
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * Client certificate ID of the listener after modification, which is a new field.
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * DescribeProxyStatistics request structure.
 * @class
 */
class DescribeProxyStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Start time (2019-03-25 12:00:00)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time (2019-03-25 12:00:00)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical metric name list. Valid values: `InBandwidth` (inbound bandwidth); `OutBandwidth` (outbound bandwidth); Concurrent (concurrence); `InPackets` (inbound packets); `OutPackets` (outbound packets); `PacketLoss` (packet loss rate); `Latency` (latency); `HttpQPS` (the number of HTTP requests); `HttpsQPS` (the number of HTTPS requests).
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Monitoring granularity. It currently supports: 60, 300, 3,600, and 86,400. Unit: seconds.
Time range: ≤ 3 day. Supported minimum granularity: 60 seconds;
Time range: ≤ 7 day. Supported minimum granularity: 300 seconds;
Time range: ≤ 30 days. Supported minimum granularity: 36,00 seconds;
         * @type {number || null}
         */
        this.Granularity = null;

        /**
         * Specifies the ISP. Valid values: `CMCC`, `CUCC`, and `CTCC`. If it is not specified, all ISP data will be returned. Note that this field is valid only when a non-BGP connection is used.
         * @type {string || null}
         */
        this.Isp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;
        this.Isp = 'Isp' in params ? params.Isp : null;

    }
}

/**
 * Forwarding rule information of Layer-7 listeners classified by domain name
 * @class
 */
class DomainRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule list of the domain name.
         * @type {Array.<RuleInfo> || null}
         */
        this.RuleSet = null;

        /**
         * Server certificate ID of the domain. When it is `default`, it indicates that the default certificate will be used (i.e., the certificate configured for the listener).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Server certificate name of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * Client certificate ID of the domain. When it is `default`, it indicates that the default certificate will be used (i.e., the certificate configured for the listener).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * Client certificate name of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClientCertificateAlias = null;

        /**
         * Basic authentication configuration ID of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BasicAuthConfId = null;

        /**
         * Basic authentication status:
0: disabled;
1: enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BasicAuth = null;

        /**
         * Basic authentication configuration name of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BasicAuthConfAlias = null;

        /**
         * Origin server authentication certificate ID of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealServerCertificateId = null;

        /**
         * Origin server authentication status:
0: disabled;
1: enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealServerAuth = null;

        /**
         * Origin server authentication certificate name of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealServerCertificateAlias = null;

        /**
         * Connection authentication certificate ID of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GaapCertificateId = null;

        /**
         * Connection authentication status:
0: disabled;
1: enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GaapAuth = null;

        /**
         * Connection authentication certificate name of the domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GaapCertificateAlias = null;

        /**
         * Origin server authentication domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealServerCertificateDomain = null;

        /**
         * Returns IDs and aliases of multiple certificates when there are multiple client certificates.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyClientCertificateAliasInfo = null;

        /**
         * Returns IDs and aliases of multiple certificates when there are multiple origin certificates.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyRealServerCertificateAliasInfo = null;

        /**
         * Domain name status.
0: running;
1: changing;
2: deleting.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DomainStatus = null;

        /**
         * Blocking-related status of the domain name. `BANNED`: the domain name is blocked; `RECOVER`: the domain name is unblocked or normal; `BANNING`: the domain name is being blocked; `RECOVERING`: the domain name is being unblocked; `BAN_FAILED`: the blocking fails; RECOVER_FAILED: the unblocking fails.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BanStatus = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.ClientCertificateAlias = 'ClientCertificateAlias' in params ? params.ClientCertificateAlias : null;
        this.BasicAuthConfId = 'BasicAuthConfId' in params ? params.BasicAuthConfId : null;
        this.BasicAuth = 'BasicAuth' in params ? params.BasicAuth : null;
        this.BasicAuthConfAlias = 'BasicAuthConfAlias' in params ? params.BasicAuthConfAlias : null;
        this.RealServerCertificateId = 'RealServerCertificateId' in params ? params.RealServerCertificateId : null;
        this.RealServerAuth = 'RealServerAuth' in params ? params.RealServerAuth : null;
        this.RealServerCertificateAlias = 'RealServerCertificateAlias' in params ? params.RealServerCertificateAlias : null;
        this.GaapCertificateId = 'GaapCertificateId' in params ? params.GaapCertificateId : null;
        this.GaapAuth = 'GaapAuth' in params ? params.GaapAuth : null;
        this.GaapCertificateAlias = 'GaapCertificateAlias' in params ? params.GaapCertificateAlias : null;
        this.RealServerCertificateDomain = 'RealServerCertificateDomain' in params ? params.RealServerCertificateDomain : null;

        if (params.PolyClientCertificateAliasInfo) {
            this.PolyClientCertificateAliasInfo = new Array();
            for (let z in params.PolyClientCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyClientCertificateAliasInfo[z]);
                this.PolyClientCertificateAliasInfo.push(obj);
            }
        }

        if (params.PolyRealServerCertificateAliasInfo) {
            this.PolyRealServerCertificateAliasInfo = new Array();
            for (let z in params.PolyRealServerCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyRealServerCertificateAliasInfo[z]);
                this.PolyRealServerCertificateAliasInfo.push(obj);
            }
        }
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DescribeTCPListeners request structure.
 * @class
 */
class DescribeTCPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition that filters by connection ID. You must specify at least one filter condition (ProxyId/GroupId/ListenerId), but ProxyId and GroupId cannot be set at the same time.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Filter condition. Exact query by listener ID.
When ProxyId is specified, the listener will be checked whether it belongs to the connection.
When GroupId is specified, the listener will be checked whether it belongs to the connection group.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Filter condition. Exact query by listener name.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Filter condition. Exact query by listener port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity limit. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition that filters by connection group ID. You must specify at least one filter condition (ProxyId/GroupId/ListenerId), but ProxyId and GroupId cannot be set at the same time.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Filter condition. It supports fuzzy query by port or listener name. This parameter cannot be used with `ListenerName` or `Port`.
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * CreateCertificate response structure.
 * @class
 */
class CreateCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBlackHeader request structure.
 * @class
 */
class DescribeBlackHeaderRequest extends  AbstractModel {
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
 * DescribeProxyStatistics response structure.
 * @class
 */
class DescribeProxyStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection statistics
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServersStatus response structure.
 * @class
 */
class DescribeRealServersStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity of origin server query results returned
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Binding status list of origin servers
         * @type {Array.<RealServerStatus> || null}
         */
        this.RealServerStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RealServerStatusSet) {
            this.RealServerStatusSet = new Array();
            for (let z in params.RealServerStatusSet) {
                let obj = new RealServerStatus();
                obj.deserialize(params.RealServerStatusSet[z]);
                this.RealServerStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxyGroupAttribute request structure.
 * @class
 */
class ModifyProxyGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the connection group to be modified.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * New connection group name. Up to 30 characters. The extra characters will be truncated.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Project ID
         * @type {number || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CloseProxyGroup response structure.
 * @class
 */
class CloseProxyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the connection instances that are not running, which cannot be enabled.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * List of IDs of the connection instances failed to be enabled.
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDomainErrorPageInfo response structure.
 * @class
 */
class DeleteDomainErrorPageInfoResponse extends  AbstractModel {
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
 * ModifyProxiesAttribute response structure.
 * @class
 */
class ModifyProxiesAttributeResponse extends  AbstractModel {
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
 * DescribeDomainErrorPageInfoByIds request structure.
 * @class
 */
class DescribeDomainErrorPageInfoByIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of custom error IDs. Up to 10 IDs are supported
         * @type {Array.<string> || null}
         */
        this.ErrorPageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorPageIds = 'ErrorPageIds' in params ? params.ErrorPageIds : null;

    }
}

/**
 * CheckProxyCreate request structure.
 * @class
 */
class CheckProxyCreateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access (acceleration) region of the connection. The value can be obtained via the DescribeAccessRegionsByDestRegion API.
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * Origin server region of the connection. The value can be obtained via the DescribeDestRegions API.
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * Connection bandwidth cap. Unit: Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Connection concurrence cap, which indicates the maximum number of simultaneous online connections. Unit: 10,000 connections.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * Connection group ID that needs to be entered when a connection is created in a connection group
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Network type. Valid values: `normal` (default), `cn2`
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general connection group), `Accelerator` (game accelerator connection group), and `CrossBorder` (cross-border connection group).
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values: `0` (disable HTTP3); `1` (enable HTTP3). Note: If HTTP3 is enabled for a connection, TCP/UDP access will not be allowed. After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DescribeRegionAndPrice request structure.
 * @class
 */
class DescribeRegionAndPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general), `Accelerator` (specific for games), and `CrossBorder` (cross-MLC-border connection).
         * @type {string || null}
         */
        this.PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;

    }
}

/**
 * AddRealServers request structure.
 * @class
 */
class AddRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID corresponding to origin server
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP or domain name corresponding to origin server
         * @type {Array.<string> || null}
         */
        this.RealServerIP = null;

        /**
         * Origin server name
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * Tag list
         * @type {Array.<TagPair> || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * ModifyProxiesAttribute request structure.
 * @class
 */
class ModifyProxiesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of one or multiple connections to be operated; It's an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Connection name. Up to 30 characters.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * ID of one or multiple connections to be operated; It's a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * DescribeSecurityRules response structure.
 * @class
 */
class DescribeSecurityRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of returned security rules.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of returned security rules.
         * @type {Array.<SecurityPolicyRuleOut> || null}
         */
        this.SecurityRuleSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.SecurityRuleSet) {
            this.SecurityRuleSet = new Array();
            for (let z in params.SecurityRuleSet) {
                let obj = new SecurityPolicyRuleOut();
                obj.deserialize(params.SecurityRuleSet[z]);
                this.SecurityRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Certificate alias information.
 * @class
 */
class CertificateAliasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate alias.
         * @type {string || null}
         */
        this.CertificateAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;

    }
}

/**
 * CreateHTTPSListener request structure.
 * @class
 */
class CreateHTTPSListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port, which is based on the listeners of same transport layer protocol (TCP or UDP). The port must be unique.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Server certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Protocol types of the forwarding from acceleration connection to origin server: HTTP | HTTPS
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * Connection ID, which cannot be set together with `GroupId` at the same time. A listener will be created for the corresponding connection.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Authentication type, where:
0: one-way authentication;
1: mutual authentication.
The one-way authentication is used by default.
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * Client CA certificate ID, which is required only when the mutual authentication is adopted.
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * IDs of multiple new client CA certificates. This field or the `ClientCertificateId` field is required for mutual authentication only.
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

        /**
         * Connection group ID, which cannot be set together with `ProxyId` at the same time. A listener will be created for the corresponding connection group.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
Note: If HTTP3 is enabled for a connection, the listener will use the port that is originally accessed to UDP, and a UDP listener with the same port cannot be created.
After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DeleteSecurityRules request structure.
 * @class
 */
class DeleteSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * List of access rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * DescribeCertificateDetail response structure.
 * @class
 */
class DescribeCertificateDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate Details.
         * @type {CertificateDetail || null}
         */
        this.CertificateDetail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CertificateDetail) {
            let obj = new CertificateDetail();
            obj.deserialize(params.CertificateDetail)
            this.CertificateDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenProxyGroup response structure.
 * @class
 */
class OpenProxyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The connection instance ID list cannot be enabled if it’s not disabled.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * ID list of connection instances failed to be enabled.
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Nearest access country/region details
 * @class
 */
class NationCountryInnerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Country name
         * @type {string || null}
         */
        this.NationCountryName = null;

        /**
         * Country internal code
         * @type {string || null}
         */
        this.NationCountryInnerCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NationCountryName = 'NationCountryName' in params ? params.NationCountryName : null;
        this.NationCountryInnerCode = 'NationCountryInnerCode' in params ? params.NationCountryInnerCode : null;

    }
}

/**
 * Connection ID
 * @class
 */
class ProxyIdDict extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * Filter conditions
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values
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
 * CreateProxy response structure.
 * @class
 */
class CreateProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID of connection.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenProxies request structure.
 * @class
 */
class OpenProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of connection instance IDs; It's an old parameter, please switch to ProxyIds.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
For more information, please see How to Ensure Idempotence.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * List of connection instance IDs; It's a new parameter.
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * InquiryPriceCreateProxy request structure.
 * @class
 */
class InquiryPriceCreateProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration region name.
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * Connection bandwidth cap. Unit: Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Origin server region name. It's an old parameter, please switch to RealServerRegion.
         * @type {string || null}
         */
        this.DestRegion = null;

        /**
         * Upper limit of connection concurrence, which indicates a number of simultaneous online connections. Unit: 10,000 connections. It's an old parameter, please switch to Concurrent.
         * @type {number || null}
         */
        this.Concurrency = null;

        /**
         * Origin server region name; It's a new parameter.
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * Upper limit of connection concurrence, which indicates a number of simultaneous online connections. Unit: 10,000 connections. It's a new parameter.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * Billing mode. Valid values: 0: bill-by-bandwidth (default value); 1: bill-by-traffic.
         * @type {number || null}
         */
        this.BillingType = null;

        /**
         * IP version. Valid values: `IPv4` (default), `IPv6`.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Network type. Valid values: `normal` (default), `cn2`
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Package type of connection groups. Valid values: `Thunder` (general), `Accelerator` (specific for games), and `CrossBorder` (cross-MLC-border connection).
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Specifies whether to enable HTTP3. Valid values: `0` (disable HTTP3); `1` (enable HTTP3). Note: If HTTP3 is enabled for a connection, TCP/UDP access will not be allowed. After the connection is created, you cannot change your HTTP3 setting.
         * @type {number || null}
         */
        this.Http3Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DestRegion = 'DestRegion' in params ? params.DestRegion : null;
        this.Concurrency = 'Concurrency' in params ? params.Concurrency : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;

    }
}

/**
 * DescribeProxyGroupDetails response structure.
 * @class
 */
class DescribeProxyGroupDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group details
         * @type {ProxyGroupDetail || null}
         */
        this.ProxyGroupDetail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProxyGroupDetail) {
            let obj = new ProxyGroupDetail();
            obj.deserialize(params.ProxyGroupDetail)
            this.ProxyGroupDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenProxyGroup request structure.
 * @class
 */
class OpenProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group instance ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * UDP listener information
 * @class
 */
class UDPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener name
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Listener port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Origin server port, which is only valid for the connections or connection groups of version 1.0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * Type of the origin server bound to listeners
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * Listener protocol: UDP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Listener status:
`0`: Running
`1`: Creating
`2`: Terminating
`3`: Adjusting origin server
`4`: Adjusting configuration
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * Origin server access policy of listeners
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * Origin server binding status of listeners. `0`: Normal; `1`: IP exception; `2`: Domain name resolution exception.
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * Information of the origin server bound to listeners
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * Listener creation time in the format of UNIX timestamp
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Specifies whether to enable session persistence. Values: `0` (disable), `1` (enable)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionPersist = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * Connection information
 * @class
 */
class ProxyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection instance ID; It's an old parameter, please switch to ProxyId.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Creation time in the format of UNIX timestamp, indicating the number of seconds that have elapsed since January 1, 1970 (midnight in UTC/GMT).
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Connection name.
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Access region.
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * Origin server region.
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * Bandwidth. Unit: Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Concurrence. Unit: requests/second.
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * Connection status. Valid values:
`RUNNING`: Running
`CREATING`: Creating
`DESTROYING`: Terminating
`OPENING`: Enabling
`CLOSING`: Disabling
`CLOSED`: Disabled
`ADJUSTING`: Adjusting configuration
`ISOLATING`: Isolating
`ISOLATED`: Isolated
`CLONING`: Copying
`RECOVERING`: Maintaining
`MOVING`: Migrating
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Accessed domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Accessed IP.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Connection versions: 1.0, 2.0, 3.0.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Connection instance ID; It's a new parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 1: this connection is expandable; 0: this connection is not expandable.
         * @type {number || null}
         */
        this.Scalarable = null;

        /**
         * Supported protocol types.
         * @type {Array.<string> || null}
         */
        this.SupportProtocols = null;

        /**
         * Connection group ID. This field exists if a connection belongs to a connection group.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Security policy ID. This field exists if security policies are configured.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Access region details, including region ID and region name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RegionDetail || null}
         */
        this.AccessRegionInfo = null;

        /**
         * Origin server region details, including region ID and region name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * Forwarding IP of the connection
         * @type {string || null}
         */
        this.ForwardIP = null;

        /**
         * Tag list. This field is an empty list if no tags exist.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * Whether security groups are supported.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SupportSecurity = null;

        /**
         * Billing mode. 0: bill-by-bandwidth; 1: bill-by-traffic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BillingType = null;

        /**
         * List of domain names associated with resolution record
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RelatedGlobalDomains = null;

        /**
         * Configuration change time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ModifyConfigTime = null;

        /**
         * Connection type. `100`: THUNDER connection; `103`: Microsoft connection.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ProxyType = null;

        /**
         * Describes how the connection obtains client IPs. 0: TOA; 1: Proxy Protocol.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ClientIPMethod = null;

        /**
         * IP version. Valid values: `IPv4`, `IPv6`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPAddressVersion = null;

        /**
         * Network type. `normal`: general BGP; `cn2`: Dedicated BGP; `triple`: Non-BGP (provided by the top 3 ISPs in the Chinese mainland); `secure_eip`: Custom security EIP.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Package type of connections. Valid values: `Thunder` (general connection), `Accelerator` (silver connection), 
and `CrossBorder` (cross-MLC-border connection).
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Blocking-related status of the domain name. `BANNED`: the domain name is blocked; `RECOVER`: the domain name is unblocked or normal; `BANNING`: the domain name is being blocked; `RECOVERING`: the domain name is being unblocked; `BAN_FAILED`: the blocking fails; RECOVER_FAILED: the unblocking fails.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.BanStatus = null;

        /**
         * 
         * @type {Array.<IPDetail> || null}
         */
        this.IPList = null;

        /**
         * Specifies whether to enable HTTP3. Valid values:
`0`: disable HTTP3;
`1`: enable HTTP3.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Http3Supported = null;

        /**
         * Indicates whether the origin server IP or domain name is in the blocklist. Valid values: `0` (no) and `1` (yes).
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.InBanBlacklist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Scalarable = 'Scalarable' in params ? params.Scalarable : null;
        this.SupportProtocols = 'SupportProtocols' in params ? params.SupportProtocols : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.AccessRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.AccessRegionInfo)
            this.AccessRegionInfo = obj;
        }

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.ForwardIP = 'ForwardIP' in params ? params.ForwardIP : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.SupportSecurity = 'SupportSecurity' in params ? params.SupportSecurity : null;
        this.BillingType = 'BillingType' in params ? params.BillingType : null;
        this.RelatedGlobalDomains = 'RelatedGlobalDomains' in params ? params.RelatedGlobalDomains : null;
        this.ModifyConfigTime = 'ModifyConfigTime' in params ? params.ModifyConfigTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.ClientIPMethod = 'ClientIPMethod' in params ? params.ClientIPMethod : null;
        this.IPAddressVersion = 'IPAddressVersion' in params ? params.IPAddressVersion : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;

        if (params.IPList) {
            this.IPList = new Array();
            for (let z in params.IPList) {
                let obj = new IPDetail();
                obj.deserialize(params.IPList[z]);
                this.IPList.push(obj);
            }
        }
        this.Http3Supported = 'Http3Supported' in params ? params.Http3Supported : null;
        this.InBanBlacklist = 'InBanBlacklist' in params ? params.InBanBlacklist : null;

    }
}

/**
 * RemoveRealServers response structure.
 * @class
 */
class RemoveRealServersResponse extends  AbstractModel {
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
 * DescribeRulesByRuleIds request structure.
 * @class
 */
class DescribeRulesByRuleIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs. Up to 10 rules are supported.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * Information of the bound origin server
 * @class
 */
class RealServerBindSetReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * Origin server port
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * Origin server IP
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * Origin server weight
         * @type {number || null}
         */
        this.RealServerWeight = null;

        /**
         * Origin server role: master (primary origin server); slave (secondary origin server). This parameter is applicable when the primary/secondary origin server mode is enabled for a TCP listener.
         * @type {string || null}
         */
        this.RealServerFailoverRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerWeight = 'RealServerWeight' in params ? params.RealServerWeight : null;
        this.RealServerFailoverRole = 'RealServerFailoverRole' in params ? params.RealServerFailoverRole : null;

    }
}

/**
 * CloseProxyGroup request structure.
 * @class
 */
class CloseProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection group instance ID.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * OpenProxies response structure.
 * @class
 */
class OpenProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The connection instance ID list cannot be enabled if it's not disabled.
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * ID list of connection instances failed to be enabled.
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxyConfiguration response structure.
 * @class
 */
class ModifyProxyConfigurationResponse extends  AbstractModel {
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
 * CreateDomainErrorPageInfo request structure.
 * @class
 */
class CreateDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Original error code
         * @type {Array.<number> || null}
         */
        this.ErrorNos = null;

        /**
         * New response packet
         * @type {string || null}
         */
        this.Body = null;

        /**
         * New error code
         * @type {number || null}
         */
        this.NewErrorNo = null;

        /**
         * Response header to be deleted
         * @type {Array.<string> || null}
         */
        this.ClearHeaders = null;

        /**
         * Response header to be set
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.SetHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ErrorNos = 'ErrorNos' in params ? params.ErrorNos : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.NewErrorNo = 'NewErrorNo' in params ? params.NewErrorNo : null;
        this.ClearHeaders = 'ClearHeaders' in params ? params.ClearHeaders : null;

        if (params.SetHeaders) {
            this.SetHeaders = new Array();
            for (let z in params.SetHeaders) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.SetHeaders[z]);
                this.SetHeaders.push(obj);
            }
        }

    }
}

module.exports = {
    RegionDetail: RegionDetail,
    DescribeUDPListenersRequest: DescribeUDPListenersRequest,
    DeleteProxyGroupRequest: DeleteProxyGroupRequest,
    DescribeResourcesByTagRequest: DescribeResourcesByTagRequest,
    DescribeListenerStatisticsRequest: DescribeListenerStatisticsRequest,
    DescribeProxyAndStatisticsListenersResponse: DescribeProxyAndStatisticsListenersResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    BindRuleRealServersRequest: BindRuleRealServersRequest,
    DescribeHTTPSListenersResponse: DescribeHTTPSListenersResponse,
    ModifyProxiesProjectRequest: ModifyProxiesProjectRequest,
    DomainErrorPageInfo: DomainErrorPageInfo,
    AccessConfiguration: AccessConfiguration,
    DescribeCertificateDetailRequest: DescribeCertificateDetailRequest,
    TagResourceInfo: TagResourceInfo,
    SetAuthenticationResponse: SetAuthenticationResponse,
    DescribeProxyGroupStatisticsResponse: DescribeProxyGroupStatisticsResponse,
    DescribeResourcesByTagResponse: DescribeResourcesByTagResponse,
    ModifyGroupDomainConfigRequest: ModifyGroupDomainConfigRequest,
    BandwidthPriceGradient: BandwidthPriceGradient,
    DescribeHTTPListenersRequest: DescribeHTTPListenersRequest,
    DescribeCustomHeaderResponse: DescribeCustomHeaderResponse,
    ModifyRealServerNameResponse: ModifyRealServerNameResponse,
    DescribeGroupDomainConfigResponse: DescribeGroupDomainConfigResponse,
    ModifyCertificateResponse: ModifyCertificateResponse,
    OpenSecurityPolicyRequest: OpenSecurityPolicyRequest,
    DeleteDomainErrorPageInfoRequest: DeleteDomainErrorPageInfoRequest,
    DescribeListenerRealServersRequest: DescribeListenerRealServersRequest,
    DescribeProxyGroupStatisticsRequest: DescribeProxyGroupStatisticsRequest,
    DescribeHTTPSListenersRequest: DescribeHTTPSListenersRequest,
    DescribeAccessRegionsByDestRegionResponse: DescribeAccessRegionsByDestRegionResponse,
    DescribeCountryAreaMappingRequest: DescribeCountryAreaMappingRequest,
    CheckProxyCreateResponse: CheckProxyCreateResponse,
    ModifyCertificateRequest: ModifyCertificateRequest,
    DestroyProxiesRequest: DestroyProxiesRequest,
    DescribeRulesResponse: DescribeRulesResponse,
    DescribeProxiesResponse: DescribeProxiesResponse,
    CreateRuleResponse: CreateRuleResponse,
    ModifyRealServerNameRequest: ModifyRealServerNameRequest,
    ModifyGroupDomainConfigResponse: ModifyGroupDomainConfigResponse,
    DeleteProxyGroupResponse: DeleteProxyGroupResponse,
    CreateDomainErrorPageInfoResponse: CreateDomainErrorPageInfoResponse,
    BindListenerRealServersRequest: BindListenerRealServersRequest,
    ModifyProxyConfigurationRequest: ModifyProxyConfigurationRequest,
    DescribeRuleRealServersRequest: DescribeRuleRealServersRequest,
    DescribeGroupDomainConfigRequest: DescribeGroupDomainConfigRequest,
    CreateProxyGroupDomainRequest: CreateProxyGroupDomainRequest,
    CreateTCPListenersRequest: CreateTCPListenersRequest,
    CertificateDetail: CertificateDetail,
    DescribeListenerStatisticsResponse: DescribeListenerStatisticsResponse,
    DescribeProxyGroupDetailsRequest: DescribeProxyGroupDetailsRequest,
    CloseProxiesRequest: CloseProxiesRequest,
    DescribeListenerRealServersResponse: DescribeListenerRealServersResponse,
    DescribeProxyDetailRequest: DescribeProxyDetailRequest,
    IPDetail: IPDetail,
    ProxyStatus: ProxyStatus,
    DeleteDomainRequest: DeleteDomainRequest,
    OpenSecurityPolicyResponse: OpenSecurityPolicyResponse,
    ModifyCertificateAttributesResponse: ModifyCertificateAttributesResponse,
    DescribeSecurityPolicyDetailResponse: DescribeSecurityPolicyDetailResponse,
    CreateHTTPListenerResponse: CreateHTTPListenerResponse,
    ModifyUDPListenerAttributeResponse: ModifyUDPListenerAttributeResponse,
    CreateProxyGroupRequest: CreateProxyGroupRequest,
    RuleInfo: RuleInfo,
    RealServerStatus: RealServerStatus,
    DescribeTCPListenersResponse: DescribeTCPListenersResponse,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeCountryAreaMappingResponse: DescribeCountryAreaMappingResponse,
    DescribeRealServersResponse: DescribeRealServersResponse,
    ModifyHTTPListenerAttributeResponse: ModifyHTTPListenerAttributeResponse,
    DescribeRealServerStatisticsRequest: DescribeRealServerStatisticsRequest,
    BindRealServerInfo: BindRealServerInfo,
    DescribeProxyAndStatisticsListenersRequest: DescribeProxyAndStatisticsListenersRequest,
    DescribeAccessRegionsResponse: DescribeAccessRegionsResponse,
    DeleteListenersRequest: DeleteListenersRequest,
    DescribeSecurityRulesRequest: DescribeSecurityRulesRequest,
    DescribeDestRegionsResponse: DescribeDestRegionsResponse,
    DescribeDomainErrorPageInfoByIdsResponse: DescribeDomainErrorPageInfoByIdsResponse,
    DescribeProxiesRequest: DescribeProxiesRequest,
    BindListenerRealServersResponse: BindListenerRealServersResponse,
    ModifyProxyGroupAttributeResponse: ModifyProxyGroupAttributeResponse,
    ListenerInfo: ListenerInfo,
    DescribeUDPListenersResponse: DescribeUDPListenersResponse,
    CreateUDPListenersRequest: CreateUDPListenersRequest,
    ModifyRuleAttributeRequest: ModifyRuleAttributeRequest,
    CreateSecurityPolicyResponse: CreateSecurityPolicyResponse,
    TCPListener: TCPListener,
    CreateSecurityRulesResponse: CreateSecurityRulesResponse,
    DescribeAccessRegionsRequest: DescribeAccessRegionsRequest,
    CreateCertificateRequest: CreateCertificateRequest,
    DescribeCertificatesResponse: DescribeCertificatesResponse,
    DescribeCustomHeaderRequest: DescribeCustomHeaderRequest,
    DescribeProxyGroupListResponse: DescribeProxyGroupListResponse,
    DescribeDomainErrorPageInfoRequest: DescribeDomainErrorPageInfoRequest,
    HTTPSListener: HTTPSListener,
    DomainAccessRegionDict: DomainAccessRegionDict,
    CloseSecurityPolicyRequest: CloseSecurityPolicyRequest,
    ModifyCertificateAttributesRequest: ModifyCertificateAttributesRequest,
    TagPair: TagPair,
    CreateSecurityRulesRequest: CreateSecurityRulesRequest,
    DescribeCertificatesRequest: DescribeCertificatesRequest,
    DescribeProxiesStatusRequest: DescribeProxiesStatusRequest,
    ModifyTCPListenerAttributeRequest: ModifyTCPListenerAttributeRequest,
    DeleteSecurityPolicyResponse: DeleteSecurityPolicyResponse,
    CreateDomainResponse: CreateDomainResponse,
    ModifyProxiesProjectResponse: ModifyProxiesProjectResponse,
    ModifyDomainRequest: ModifyDomainRequest,
    ModifySecurityRuleRequest: ModifySecurityRuleRequest,
    CreateCustomHeaderResponse: CreateCustomHeaderResponse,
    DescribeAccessRegionsByDestRegionRequest: DescribeAccessRegionsByDestRegionRequest,
    RealServer: RealServer,
    DescribeRealServersRequest: DescribeRealServersRequest,
    StatisticsDataInfo: StatisticsDataInfo,
    CreateCustomHeaderRequest: CreateCustomHeaderRequest,
    ProxyGroupInfo: ProxyGroupInfo,
    CreateProxyGroupDomainResponse: CreateProxyGroupDomainResponse,
    Certificate: Certificate,
    DescribeDomainErrorPageInfoResponse: DescribeDomainErrorPageInfoResponse,
    DestroyProxiesResponse: DestroyProxiesResponse,
    DescribeRuleRealServersResponse: DescribeRuleRealServersResponse,
    DescribeRealServersStatusRequest: DescribeRealServersStatusRequest,
    ModifyHTTPListenerAttributeRequest: ModifyHTTPListenerAttributeRequest,
    CreateProxyRequest: CreateProxyRequest,
    DeleteCertificateRequest: DeleteCertificateRequest,
    ModifySecurityRuleResponse: ModifySecurityRuleResponse,
    DescribeProxiesStatusResponse: DescribeProxiesStatusResponse,
    RemoveRealServersRequest: RemoveRealServersRequest,
    CreateDomainRequest: CreateDomainRequest,
    CreateRuleRequest: CreateRuleRequest,
    ProxySimpleInfo: ProxySimpleInfo,
    DeleteSecurityPolicyRequest: DeleteSecurityPolicyRequest,
    HTTPListener: HTTPListener,
    ProxyGroupDetail: ProxyGroupDetail,
    CreateHTTPListenerRequest: CreateHTTPListenerRequest,
    CloseSecurityPolicyResponse: CloseSecurityPolicyResponse,
    DescribeRegionAndPriceResponse: DescribeRegionAndPriceResponse,
    AddRealServersResponse: AddRealServersResponse,
    CloseProxiesResponse: CloseProxiesResponse,
    DeleteCertificateResponse: DeleteCertificateResponse,
    SecurityPolicyRuleIn: SecurityPolicyRuleIn,
    DescribeBlackHeaderResponse: DescribeBlackHeaderResponse,
    DescribeDestRegionsRequest: DescribeDestRegionsRequest,
    ModifyRuleAttributeResponse: ModifyRuleAttributeResponse,
    CreateTCPListenersResponse: CreateTCPListenersResponse,
    DescribeSecurityPolicyDetailRequest: DescribeSecurityPolicyDetailRequest,
    ModifyDomainResponse: ModifyDomainResponse,
    DescribeRulesByRuleIdsResponse: DescribeRulesByRuleIdsResponse,
    SetAuthenticationRequest: SetAuthenticationRequest,
    InquiryPriceCreateProxyResponse: InquiryPriceCreateProxyResponse,
    NewRealServer: NewRealServer,
    DescribeHTTPListenersResponse: DescribeHTTPListenersResponse,
    HttpHeaderParam: HttpHeaderParam,
    DescribeRealServerStatisticsResponse: DescribeRealServerStatisticsResponse,
    AccessRegionDomainConf: AccessRegionDomainConf,
    DeleteDomainResponse: DeleteDomainResponse,
    DeleteListenersResponse: DeleteListenersResponse,
    RuleCheckParams: RuleCheckParams,
    CreateSecurityPolicyRequest: CreateSecurityPolicyRequest,
    ModifyHTTPSListenerAttributeResponse: ModifyHTTPSListenerAttributeResponse,
    AccessRegionDetial: AccessRegionDetial,
    DescribeProxyGroupListRequest: DescribeProxyGroupListRequest,
    SecurityPolicyRuleOut: SecurityPolicyRuleOut,
    BindRealServer: BindRealServer,
    GroupStatisticsInfo: GroupStatisticsInfo,
    CreateProxyGroupResponse: CreateProxyGroupResponse,
    CreateHTTPSListenerResponse: CreateHTTPSListenerResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    BindRuleRealServersResponse: BindRuleRealServersResponse,
    DescribeGroupAndStatisticsProxyRequest: DescribeGroupAndStatisticsProxyRequest,
    ModifyUDPListenerAttributeRequest: ModifyUDPListenerAttributeRequest,
    DeleteSecurityRulesResponse: DeleteSecurityRulesResponse,
    ModifyTCPListenerAttributeResponse: ModifyTCPListenerAttributeResponse,
    CountryAreaMap: CountryAreaMap,
    MetricStatisticsInfo: MetricStatisticsInfo,
    DescribeProxyDetailResponse: DescribeProxyDetailResponse,
    DescribeGroupAndStatisticsProxyResponse: DescribeGroupAndStatisticsProxyResponse,
    CreateUDPListenersResponse: CreateUDPListenersResponse,
    ModifyHTTPSListenerAttributeRequest: ModifyHTTPSListenerAttributeRequest,
    DescribeProxyStatisticsRequest: DescribeProxyStatisticsRequest,
    DomainRuleSet: DomainRuleSet,
    DescribeTCPListenersRequest: DescribeTCPListenersRequest,
    CreateCertificateResponse: CreateCertificateResponse,
    DescribeBlackHeaderRequest: DescribeBlackHeaderRequest,
    DescribeProxyStatisticsResponse: DescribeProxyStatisticsResponse,
    DescribeRealServersStatusResponse: DescribeRealServersStatusResponse,
    ModifyProxyGroupAttributeRequest: ModifyProxyGroupAttributeRequest,
    CloseProxyGroupResponse: CloseProxyGroupResponse,
    DeleteDomainErrorPageInfoResponse: DeleteDomainErrorPageInfoResponse,
    ModifyProxiesAttributeResponse: ModifyProxiesAttributeResponse,
    DescribeDomainErrorPageInfoByIdsRequest: DescribeDomainErrorPageInfoByIdsRequest,
    CheckProxyCreateRequest: CheckProxyCreateRequest,
    DescribeRegionAndPriceRequest: DescribeRegionAndPriceRequest,
    AddRealServersRequest: AddRealServersRequest,
    ModifyProxiesAttributeRequest: ModifyProxiesAttributeRequest,
    DescribeSecurityRulesResponse: DescribeSecurityRulesResponse,
    CertificateAliasInfo: CertificateAliasInfo,
    CreateHTTPSListenerRequest: CreateHTTPSListenerRequest,
    DeleteSecurityRulesRequest: DeleteSecurityRulesRequest,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    OpenProxyGroupResponse: OpenProxyGroupResponse,
    NationCountryInnerInfo: NationCountryInnerInfo,
    ProxyIdDict: ProxyIdDict,
    Filter: Filter,
    CreateProxyResponse: CreateProxyResponse,
    OpenProxiesRequest: OpenProxiesRequest,
    InquiryPriceCreateProxyRequest: InquiryPriceCreateProxyRequest,
    DescribeProxyGroupDetailsResponse: DescribeProxyGroupDetailsResponse,
    OpenProxyGroupRequest: OpenProxyGroupRequest,
    UDPListener: UDPListener,
    ProxyInfo: ProxyInfo,
    RemoveRealServersResponse: RemoveRealServersResponse,
    DescribeRulesByRuleIdsRequest: DescribeRulesByRuleIdsRequest,
    RealServerBindSetReq: RealServerBindSetReq,
    CloseProxyGroupRequest: CloseProxyGroupRequest,
    OpenProxiesResponse: OpenProxiesResponse,
    ModifyProxyConfigurationResponse: ModifyProxyConfigurationResponse,
    CreateDomainErrorPageInfoRequest: CreateDomainErrorPageInfoRequest,

}
