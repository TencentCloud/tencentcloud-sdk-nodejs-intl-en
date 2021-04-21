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
 * ModifyDDoSPolicyCase request structure.
 * @class
 */
class ModifyDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy scenario ID
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * Development platform. Valid values: [PC (PC client), MOBILE (mobile device), TV (TV), SERVER (server)]
         * @type {Array.<string> || null}
         */
        this.PlatformTypes = null;

        /**
         * Category. Valid values: [WEB (website), GAME (game), APP (application), OTHER (other)]
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * Application protocol. Valid values: [tcp (TCP protocol), udp (UDP protocol), icmp (ICMP protocol), all (other protocols)]
         * @type {Array.<string> || null}
         */
        this.AppProtocols = null;

        /**
         * TCP start port. Value range: (0, 65535]
         * @type {string || null}
         */
        this.TcpSportStart = null;

        /**
         * TCP end port. Value range: (0, 65535). It must be greater than or equal to the TCP start port
         * @type {string || null}
         */
        this.TcpSportEnd = null;

        /**
         * UDP start port. Value range: (0, 65535]
         * @type {string || null}
         */
        this.UdpSportStart = null;

        /**
         * End UDP business port. Value range: (0, 65535). It must be greater than or equal to the start UDP business port
         * @type {string || null}
         */
        this.UdpSportEnd = null;

        /**
         * Whether there are customers outside Mainland China. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasAbroad = null;

        /**
         * Whether to actively initiate outbound TCP requests. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasInitiateTcp = null;

        /**
         * Whether to actively initiate outbound UDP requests. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasInitiateUdp = null;

        /**
         * Port that actively initiates TCP requests. Value range: (0, 65535]
         * @type {string || null}
         */
        this.PeerTcpPort = null;

        /**
         * Port that actively initiates UDP requests. Value range: (0, 65535]
         * @type {string || null}
         */
        this.PeerUdpPort = null;

        /**
         * Fixed feature code of TCP payload. String length limit: 512
         * @type {string || null}
         */
        this.TcpFootprint = null;

        /**
         * Fixed feature code of UDP payload. String length limit: 512
         * @type {string || null}
         */
        this.UdpFootprint = null;

        /**
         * Web business API URL
         * @type {Array.<string> || null}
         */
        this.WebApiUrl = null;

        /**
         * Minimum length of TCP business packet. Value range: (0, 1500)
         * @type {string || null}
         */
        this.MinTcpPackageLen = null;

        /**
         * Maximum length of TCP business packet. Value range: (0, 1500). It must be greater than or equal to the minimum length of TCP business packet
         * @type {string || null}
         */
        this.MaxTcpPackageLen = null;

        /**
         * Minimum length of UDP business packet. Value range: (0, 1500)
         * @type {string || null}
         */
        this.MinUdpPackageLen = null;

        /**
         * Maximum length of UDP business packet. Value range: (0, 1500). It must be greater than or equal to the minimum length of UDP business packet
         * @type {string || null}
         */
        this.MaxUdpPackageLen = null;

        /**
         * Whether there are VPN businesses. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasVPN = null;

        /**
         * TCP business port list. Individual ports and port ranges are supported, which should be in string type, such as 80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.TcpPortList = null;

        /**
         * UDP business port list. Individual ports and port ranges are supported, which should be in string type, such as 80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.UdpPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.PlatformTypes = 'PlatformTypes' in params ? params.PlatformTypes : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.AppProtocols = 'AppProtocols' in params ? params.AppProtocols : null;
        this.TcpSportStart = 'TcpSportStart' in params ? params.TcpSportStart : null;
        this.TcpSportEnd = 'TcpSportEnd' in params ? params.TcpSportEnd : null;
        this.UdpSportStart = 'UdpSportStart' in params ? params.UdpSportStart : null;
        this.UdpSportEnd = 'UdpSportEnd' in params ? params.UdpSportEnd : null;
        this.HasAbroad = 'HasAbroad' in params ? params.HasAbroad : null;
        this.HasInitiateTcp = 'HasInitiateTcp' in params ? params.HasInitiateTcp : null;
        this.HasInitiateUdp = 'HasInitiateUdp' in params ? params.HasInitiateUdp : null;
        this.PeerTcpPort = 'PeerTcpPort' in params ? params.PeerTcpPort : null;
        this.PeerUdpPort = 'PeerUdpPort' in params ? params.PeerUdpPort : null;
        this.TcpFootprint = 'TcpFootprint' in params ? params.TcpFootprint : null;
        this.UdpFootprint = 'UdpFootprint' in params ? params.UdpFootprint : null;
        this.WebApiUrl = 'WebApiUrl' in params ? params.WebApiUrl : null;
        this.MinTcpPackageLen = 'MinTcpPackageLen' in params ? params.MinTcpPackageLen : null;
        this.MaxTcpPackageLen = 'MaxTcpPackageLen' in params ? params.MaxTcpPackageLen : null;
        this.MinUdpPackageLen = 'MinUdpPackageLen' in params ? params.MinUdpPackageLen : null;
        this.MaxUdpPackageLen = 'MaxUdpPackageLen' in params ? params.MaxUdpPackageLen : null;
        this.HasVPN = 'HasVPN' in params ? params.HasVPN : null;
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;

    }
}

/**
 * DescribeIpUnBlockList request structure.
 * @class
 */
class DescribeIpUnBlockListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * IP (if this field is not empty, IP filtering will be performed)
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Pagination parameter (paginated query will be performed if this field is not empty). This field will be disused in the future. Please use the `Limit` and `Offset` fields instead;
         * @type {Paging || null}
         */
        this.Paging = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

        if (params.Paging) {
            let obj = new Paging();
            obj.deserialize(params.Paging)
            this.Paging = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteDDoSPolicyCase request structure.
 * @class
 */
class DeleteDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy scenario ID
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * CreateDDoSPolicy response structure.
 * @class
 */
class CreateDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
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
 * DeleteL7Rules request structure.
 * @class
 */
class DeleteL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID list
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * CreateBoundIP request structure.
 * @class
 */
class CreateBoundIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Array of IPs to be bound to the Anti-DDoS instance. For Anti-DDoS Pro Single IP instance, this array can contain only one IP. If there are no IPs to bind, it can be empty; however, either `BoundDevList` or `UnBoundDevList` must not be empty;
         * @type {Array.<BoundIpInfo> || null}
         */
        this.BoundDevList = null;

        /**
         * Array of IPs to be unbound from Anti-DDoS instance. For Anti-DDoS Pro Single IP instance, this array can contain only one IP; if there are no IPs to unbind, it can be empty; however, either `BoundDevList` or `UnBoundDevList` must not be empty;
         * @type {Array.<BoundIpInfo> || null}
         */
        this.UnBoundDevList = null;

        /**
         * [Disused]
         * @type {string || null}
         */
        this.CopyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.BoundDevList) {
            this.BoundDevList = new Array();
            for (let z in params.BoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.BoundDevList[z]);
                this.BoundDevList.push(obj);
            }
        }

        if (params.UnBoundDevList) {
            this.UnBoundDevList = new Array();
            for (let z in params.UnBoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.UnBoundDevList[z]);
                this.UnBoundDevList.push(obj);
            }
        }
        this.CopyPolicy = 'CopyPolicy' in params ? params.CopyPolicy : null;

    }
}

/**
 * DescribeCCEvList request structure.
 * @class
 */
class DescribeCCEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

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
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource instance IP. When `business` is not `basic`, if `IpList` is not empty, `Id` must not be empty;
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.Business = 'Business' in params ? params.Business : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTransmitStatis response structure.
 * @class
 */
class DescribeTransmitStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If `MetricName` is `traffic`, this field indicates the inbound traffic bandwidth in bps;
If `MetricName` is `pkg`, this field indicates the inbound packet rate in pps;
         * @type {Array.<number> || null}
         */
        this.InDataList = null;

        /**
         * If `MetricName` is `traffic`, this field indicates the outbound traffic bandwidth in bps;
If `MetricName` is `pkg`, this field indicates the outbound packet rate in pps;
         * @type {Array.<number> || null}
         */
        this.OutDataList = null;

        /**
         * Metric name:
traffic: traffic bandwidth;
pkg: packet rate;
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InDataList = 'InDataList' in params ? params.InDataList : null;
        this.OutDataList = 'OutDataList' in params ? params.OutDataList : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Advanced DDoS policy
 * @class
 */
class DDosPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource bound to policy
         * @type {Array.<ResourceIp> || null}
         */
        this.Resources = null;

        /**
         * Disabled protocol
         * @type {DDoSPolicyDropOption || null}
         */
        this.DropOptions = null;

        /**
         * Disabled port
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * Packet filter
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * IP blocklist/allowlist
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpBlackWhiteLists = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Watermarking policy parameter. There can be only one policy. If there are no policies, the array is empty
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

        /**
         * Watermark key. There can be up to two keys. If there are no policies, the array is empty
         * @type {Array.<WaterPrintKey> || null}
         */
        this.WaterKey = null;

        /**
         * Resource instance bound to policy
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BoundResources = null;

        /**
         * Policy scenario
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new ResourceIp();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

        if (params.DropOptions) {
            let obj = new DDoSPolicyDropOption();
            obj.deserialize(params.DropOptions)
            this.DropOptions = obj;
        }

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.IpBlackWhiteLists) {
            this.IpBlackWhiteLists = new Array();
            for (let z in params.IpBlackWhiteLists) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpBlackWhiteLists[z]);
                this.IpBlackWhiteLists.push(obj);
            }
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

        if (params.WaterKey) {
            this.WaterKey = new Array();
            for (let z in params.WaterKey) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.WaterKey[z]);
                this.WaterKey.push(obj);
            }
        }
        this.BoundResources = 'BoundResources' in params ? params.BoundResources : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * Protocol and port parameters
 * @class
 */
class ProtocolPort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol (TCP, UDP)
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeDDoSNetTrend request structure.
 * @class
 */
class DescribeDDoSNetTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Metric. Valid values: [bps (attack traffic bandwidth), pps (attack packet rate)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeUnBlockStatis request structure.
 * @class
 */
class DescribeUnBlockStatisRequest extends  AbstractModel {
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
 * ModifyCCUrlAllow response structure.
 * @class
 */
class ModifyCCUrlAllowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicDeviceThreshold response structure.
 * @class
 */
class DescribeBasicDeviceThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blackhole blocking value
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCAlarmThreshold response structure.
 * @class
 */
class DescribeCCAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC alarm threshold
         * @type {CCAlarmThreshold || null}
         */
        this.CCAlarmThreshold = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CCAlarmThreshold) {
            let obj = new CCAlarmThreshold();
            obj.deserialize(params.CCAlarmThreshold)
            this.CCAlarmThreshold = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvList request structure.
 * @class
 */
class DescribeDDoSNetEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

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
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteL4Rules response structure.
 * @class
 */
class DeleteL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNewDomainRules request structure.
 * @class
 */
class ModifyNewDomainRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced).
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Domain name forwarding rule.
         * @type {NewL7RuleEntry || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rule) {
            let obj = new NewL7RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DDoS alarm threshold
 * @class
 */
class DDoSAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm threshold type. 1: inbound traffic, 2: cleansed traffic
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Alarm threshold, which should be greater than 0 (currently scheduled value)
         * @type {number || null}
         */
        this.AlarmThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * DescribePolicyCase response structure.
 * @class
 */
class DescribePolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy scenario list
         * @type {Array.<KeyValueRecord> || null}
         */
        this.CaseList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CaseList) {
            this.CaseList = new Array();
            for (let z in params.CaseList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.CaseList[z]);
                this.CaseList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResIpList request structure.
 * @class
 */
class DescribeResIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID. If this field is left empty, it means to get all resources IP of the current user
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * ModifyCCLevel request structure.
 * @class
 */
class ModifyCCLevelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CC protection level. Valid values: [default (normal), loose (loose), strict (strict)];
         * @type {string || null}
         */
        this.Level = null;

        /**
         * CC protection type, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)]; if this field is left empty, HTTPS CC protection will be used by default; if `https` is entered, the `RuleId` field is required;
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Layer-7 forwarding rule ID (which can be obtained from the layer-7 forwarding rule API);
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeleteCCSelfDefinePolicy request structure.
 * @class
 */
class DeleteCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.SetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

    }
}

/**
 * DescribeCCUrlAllow request structure.
 * @class
 */
class DescribeCCUrlAllowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Blocklist or allowlist. Valid value: [white (allowlist)]. Currently, only allowlist is supported.
Note: this array can only have one value which can only be `white`
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * HTTP or HTTPS CC protection, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)];
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Field value in K-V format
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Field value
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
 * IP blocklist/allowlist
 * @class
 */
class IpBlackWhite extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Blocklist/allowlist type. Valid values: [black, white]
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyDDoSAlarmThreshold request structure.
 * @class
 */
class ModifyDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`shield`: Chess Shield, `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.RsId = null;

        /**
         * Alarm threshold type. 0: not set, 1: inbound traffic, 2: cleansed traffic
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Alarm threshold, which should be greater than 0 (currently scheduled value)
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * List of IPs associated with resource. If no Anti-DDoS Pro instance is bound, pass in an empty array. For Anti-DDoS Ultimate, pass in multiple IPs
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * CreateDDoSPolicy request structure.
 * @class
 */
class CreateDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Protocol disablement, which must be entered, and the array length must be 1
         * @type {Array.<DDoSPolicyDropOption> || null}
         */
        this.DropOptions = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Ports to be closed. If no ports are to be closed, enter an empty array
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * Request source IP blocklist/allowlist, which should be an empty array if there are no blocked or allowed IPs.
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpAllowDenys = null;

        /**
         * Packet filter. Enter an empty array if there are no packets to filter
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * Watermarking policy parameters. Enter an empty array if the watermarking feature is not enabled. Only one watermarking policy can be passed in (that is, the size of the array cannot exceed 1)
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;

        if (params.DropOptions) {
            this.DropOptions = new Array();
            for (let z in params.DropOptions) {
                let obj = new DDoSPolicyDropOption();
                obj.deserialize(params.DropOptions[z]);
                this.DropOptions.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.IpAllowDenys) {
            this.IpAllowDenys = new Array();
            for (let z in params.IpAllowDenys) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpAllowDenys[z]);
                this.IpAllowDenys.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

    }
}

/**
 * ModifyCCThreshold response structure.
 * @class
 */
class ModifyCCThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetReturnSwitch response structure.
 * @class
 */
class ModifyNetReturnSwitchResponse extends  AbstractModel {
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
 * DescribeActionLog request structure.
 * @class
 */
class DescribeActionLogRequest extends  AbstractModel {
    constructor(){
        super();

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
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Search value, which can only be resource ID or user `UIN`
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateL7RuleCert request structure.
 * @class
 */
class CreateL7RuleCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * The resource instance ID, such as the ID of an Anti-DDoS Advanced instance or the ID of an Anti-DDoS Ultimate instance.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Certificate type, which is required if the protocol is HTTPS. Valid value: [2 (Tencent Cloud-hosted certificate)]
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * If the certificate is a Tencent Cloud-hosted certificate, this field must be entered with the hosted certificate ID.
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * [Disused] If the certificate is an external certificate, this field must be entered with the certificate content. 
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * [Disused] If the certificate is an external certificate, this field must be entered with the certificate key. 
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * DescribeBGPIPL7RuleMaxCnt response structure.
 * @class
 */
class DescribeBGPIPL7RuleMaxCntResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of layer-7 rules that can be added for Anti-DDoS Advanced
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
 * DescribePcap response structure.
 * @class
 */
class DescribePcapResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * PCAP packet download link list, which is an empty array if there are no PCAP packets;
         * @type {Array.<string> || null}
         */
        this.PcapUrlList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PcapUrlList = 'PcapUrlList' in params ? params.PcapUrlList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePackIndex response structure.
 * @class
 */
class DescribePackIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field value as follows:
TotalPackCount: number of resources
AttackPackCount: number of resources being cleansed
BlockPackCount: number of blocked resources
ExpiredPackCount: number of expired resources
ExpireingPackCount: number of expiring resources
IsolatePackCount: number of isolated resources
         * @type {Array.<KeyValue> || null}
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSAttackSource request structure.
 * @class
 */
class DescribeDDoSAttackSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

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
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * IP attack source of specified resource, which is optional
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeDDoSCount request structure.
 * @class
 */
class DescribeDDoSCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric. Valid values: [traffic (attack protocol traffic in KB), pkg (number of attack protocol packets), classnum (number of attack events)]
         * @type {string || null}
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * Number of resource instances in region
 * @class
 */
class RegionInstanceCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region code
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region code (new specification)
         * @type {string || null}
         */
        this.RegionV3 = null;

        /**
         * Number of resource instances
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
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionV3 = 'RegionV3' in params ? params.RegionV3 : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Watermark key
 * @class
 */
class WaterPrintKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Watermark key value
         * @type {string || null}
         */
        this.KeyContent = null;

        /**
         * Watermark key version number
         * @type {string || null}
         */
        this.KeyVersion = null;

        /**
         * Whether it is enabled. Valid values: [0 (no), 1 (yes)]
         * @type {number || null}
         */
        this.OpenStatus = null;

        /**
         * Key generation time
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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyContent = 'KeyContent' in params ? params.KeyContent : null;
        this.KeyVersion = 'KeyVersion' in params ? params.KeyVersion : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDDoSNetIpLog request structure.
 * @class
 */
class DescribeDDoSNetIpLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyNewL4Rule response structure.
 * @class
 */
class ModifyNewL4RuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code.
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNewDomainRules response structure.
 * @class
 */
class ModifyNewDomainRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code.
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSUsedStatis response structure.
 * @class
 */
class DescribeDDoSUsedStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field value as follows:
Days: number of days of Anti-DDoS resource use
Attacks: number of DDoS attacks
         * @type {Array.<KeyValue> || null}
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicCCThreshold request structure.
 * @class
 */
class DescribeBasicCCThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queried IP address, such as 1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * IP region. Valid values: region abbreviations such as gz, bj, sh, and hk
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * Zone type. Valid values: public (public cloud zone), bm (BM zone), nat (NAT server zone), channel (internet channel).
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * Device type. Valid values: cvm (CVM), clb (public CLB), lb (BM CLB), nat (NAT server), channel (internet channel).
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * IPInstance Nat gateway, which is optional. (If the device type to be queried is a NAT server, this parameter is required, which can be obtained through the NAT resource query API)
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * ISP line, which is optional. (If the device type to be queried is a NAT server, this parameter should be 5)
         * @type {number || null}
         */
        this.BasicIspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;

    }
}

/**
 * CreateDDoSPolicyCase response structure.
 * @class
 */
class CreateDDoSPolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy scenario ID
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIPProductInfo response structure.
 * @class
 */
class DescribeIPProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tencent Cloud product information list. If nothing is found, an empty array will be returned. Valid values:
If `Key` is ProductName, `value` indicates the name of a Tencent Cloud product instance;
If `Key` is `ProductInstanceId`, `value` indicates the ID of a Tencent Cloud product instance;
If `Key` is `ProductType`, `value` indicates the Tencent Cloud product type (cvm: CVM, clb: CLB);
If `Key` is `IP`, `value` indicates the IP of a Tencent Cloud product instance;
         * @type {Array.<KeyValueRecord> || null}
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
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSSwitch response structure.
 * @class
 */
class ModifyDDoSSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current protection status value. Valid values: [0 (disabled), 1 (enabled)]
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
 * IP blocking record
 * @class
 */
class IpBlockData extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Status (Blocked: blocked, UnBlocking: unblocking, UnBlockFailed: unblocking failed)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Blocked time
         * @type {string || null}
         */
        this.BlockTime = null;

        /**
         * Unblocked time (estimated)
         * @type {string || null}
         */
        this.UnBlockTime = null;

        /**
         * Type of the unblocking action (`user`: self-service unblocking, `auto`: automatic unblocking, `update`: unblocking by service upgrading, `bind`: unblocking by binding Anti-DDoS Pro instance)
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.UnBlockTime = 'UnBlockTime' in params ? params.UnBlockTime : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * DescribeCCSelfDefinePolicy request structure.
 * @class
 */
class DescribeCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro, `bgp-multip`: Anti-DDoS Pro (multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Number of entries pulled
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyDDoSDefendStatus request structure.
 * @class
 */
class ModifyDDoSDefendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate, `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Protection status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Disablement duration in hours. Valid values: [0, 1, 2, 3, 4, 5, 6]. If `Status` is `0` (indicating to disable), `Hour` must be greater than 0;
         * @type {number || null}
         */
        this.Hour = null;

        /**
         * Resource ID, which is required if `Business` is not Anti-DDoS Basic;
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Anti-DDoS Basic IP, which is required only if `Business` is Anti-DDoS Basic;
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Product type of IP, which is required only if `Business` is Anti-DDoS Basic. Valid values: [public (CVM), bm (BM), eni (ENI), vpngw (VPN Gateway), natgw (NAT Gateway), waf (WAF), fpc (finance product), gaap (GAAP), other (hosted IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Product subtype of IP, which is required only if `Business` is Anti-DDoS Basic. Valid values: [cvm (CVM), lb (CLB), eni (ENI), vpngw (VPN), natgw (NAT), waf (WAF), fpc (finance), gaap (GAAP), other (hosted IP), eip (BM EIP)]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Resource instance ID of IP, which is required only if `Business` is Anti-DDoS Basic. This field is required when binding a new IP. For example, if it is an ENI IP, enter `ID(eni-*)` of the ENI for `InstanceId`;
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * This field is required only if `Business` is Anti-DDoS Basic, indicating the IP region. Valid values:
"bj":     North China (Beijing)
"cd":     Southwest China (Chengdu)
"cq":     Southwest China (Chongqing)
"gz":     South China (Guangzhou)
"gzopen": South China (Guangzhou Open)
"hk":     Hong Kong (China)
"kr":     Southeast Asia (Seoul)
"sh":     East China (Shanghai)
"shjr":   East China (Shanghai Finance)
"szjr":   South China (Shenzhen Finance)
"sg":     Southeast Asia (Singapore)
"th":     Southeast Asia (Thailand)
"de":     Europe (Germany)
"usw":    West US (Silicon Valley)
"ca":     North America (Toronto)
"jp":     Japan
"hzec":   Hangzhou
"in":     India
"use":    East US (Virginia)
"ru":     Russia
"tpe":    Taiwan (China)
"nj":     Nanjing
         * @type {string || null}
         */
        this.IPRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;

    }
}

/**
 * DescribeRuleSets response structure.
 * @class
 */
class DescribeRuleSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule record array. Valid values:
If `Key` is "Id", `Value` indicates the resource ID
If `Key` is "RuleIdList", `Value` indicates the resource rule ID. Multiple rule IDs are separated by ","
If `Key` is "RuleNameList", `Value` indicates the resource rule name. Multiple rule names are separated by ","
If `Key` is "RuleNum", `Value` indicates the number of resource rules
         * @type {Array.<KeyValueRecord> || null}
         */
        this.L4RuleSets = null;

        /**
         * Rule record array. Valid values:
If `Key` is "Id", `Value` indicates the resource ID
If `Key` is "RuleIdList", `Value` indicates the resource rule ID. Multiple rule IDs are separated by ","
If `Key` is "RuleNameList", `Value` indicates the resource rule name. Multiple rule names are separated by ","
If `Key` is "RuleNum", `Value` indicates the number of resource rules
         * @type {Array.<KeyValueRecord> || null}
         */
        this.L7RuleSets = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L4RuleSets) {
            this.L4RuleSets = new Array();
            for (let z in params.L4RuleSets) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.L4RuleSets[z]);
                this.L4RuleSets.push(obj);
            }
        }

        if (params.L7RuleSets) {
            this.L7RuleSets = new Array();
            for (let z in params.L7RuleSets) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.L7RuleSets[z]);
                this.L7RuleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaradData response structure.
 * @class
 */
class DescribeBaradDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned metric value
         * @type {Array.<BaradData> || null}
         */
        this.DataList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new BaradData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSEvInfo request structure.
 * @class
 */
class DescribeDDoSEvInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDDoSAttackIPRegionMap response structure.
 * @class
 */
class DescribeDDoSAttackIPRegionMapResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Global region distribution data
         * @type {Array.<KeyValueRecord> || null}
         */
        this.NationCount = null;

        /**
         * Chinese province distribution data
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ProvinceCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NationCount) {
            this.NationCount = new Array();
            for (let z in params.NationCount) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.NationCount[z]);
                this.NationCount.push(obj);
            }
        }

        if (params.ProvinceCount) {
            this.ProvinceCount = new Array();
            for (let z in params.ProvinceCount) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ProvinceCount[z]);
                this.ProvinceCount.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4KeepTime response structure.
 * @class
 */
class ModifyL4KeepTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL7Rules response structure.
 * @class
 */
class ModifyL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL7HealthConfig request structure.
 * @class
 */
class DescribeL7HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID array. To export the health check configurations of all rules, leave this field empty or enter an empty array;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * IP object bound to Anti-DDoS Pro
 * @class
 */
class BoundIpInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Category of product that can be bound. Valid values: public (CVM and CLB), bm (BM), eni (ENI), vpngw (VPN gateway), natgw (NAT gateway), waf (WAF), fpc (financial products), gaap (GAAP), and other (Hosted IP).
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Subtype under product type. Valid values: [cvm (CVM), lb (CLB), eni (ENI), vpngw (VPN), natgw (NAT), waf (WAF), fpc (finance), gaap (GAAP), other (hosted IP), eip (BM EIP)]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Resource instance ID of IP. This field is required when binding a new IP. For example, if it is an ENI IP, enter `ID(eni-*)` of the ENI for `InstanceId`; if it is a hosted IP without corresponding resource instance ID, enter "none";
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribePcap request structure.
 * @class
 */
class DescribePcapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Attack event start time in the format of "2018-08-28 07:00:00"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack event end time in the format of "2018-08-28 07:02:00"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Resource IP, which is required only if `Business` is `net`;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeDDoSAlarmThreshold response structure.
 * @class
 */
class DescribeDDoSAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS alarm threshold
         * @type {DDoSAlarmThreshold || null}
         */
        this.DDoSAlarmThreshold = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DDoSAlarmThreshold) {
            let obj = new DDoSAlarmThreshold();
            obj.deserialize(params.DDoSAlarmThreshold)
            this.DDoSAlarmThreshold = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `KeyValue` record
 * @class
 */
class KeyValueRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key-Value array of a record
         * @type {Array.<KeyValue> || null}
         */
        this.Record = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new KeyValue();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }

    }
}

/**
 * DescribeBasicDeviceThreshold request structure.
 * @class
 */
class DescribeBasicDeviceThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queried IP address, such as 1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * IP region. Valid values: region abbreviations such as gz, bj, sh, and hk
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * Zone type. Valid values: public (public cloud zone), bm (BM zone), nat (NAT server zone), channel (internet channel).
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * Device type. Valid values: cvm (CVM), clb (public CLB), lb (BM CLB), nat (NAT server), channel (internet channel).
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * Validity check. Valid value: 1
         * @type {number || null}
         */
        this.BasicCheckFlag = null;

        /**
         * IPInstance Nat gateway, which is optional. (If the device type to be queried is a NAT server, this parameter is required, which can be obtained through the NAT resource query API)
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * ISP line, which is optional. (If the device type to be queried is a NAT server, this parameter should be 5)
         * @type {number || null}
         */
        this.BasicIspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicCheckFlag = 'BasicCheckFlag' in params ? params.BasicCheckFlag : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;

    }
}

/**
 * ModifyResBindDDoSPolicy response structure.
 * @class
 */
class ModifyResBindDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSWaterKey request structure.
 * @class
 */
class ModifyDDoSWaterKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Key operation. Valid values: [add (add), delete (delete), open (open), close (close), get (get key)]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Key ID, which can be left empty or 0 when adding a key but is required for other operations
         * @type {number || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ModifyCCLevel response structure.
 * @class
 */
class ModifyCCLevelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaradData request structure.
 * @class
 */
class DescribeBaradDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Metric name. Valid values:
connum: number of active TCP connections;
new_conn: number of new TCP connections;
inactive_conn: number of inactive connections;
intraffic: inbound traffic;
outtraffic: outbound traffic;
alltraffic: sum of inbound and outbound traffic;
inpkg: inbound packet rate;
outpkg: outbound packet rate;
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical time granularity in seconds (300: 5-minute, 3600: hourly, 86400: daily)
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time. The second part is kept at 0, and the minute part is a multiple of 5
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time. The second part is kept at 0, and the minute part is a multiple of 5
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical method. Valid values:
max: maximum value;
min: minimum value;
avg: average;
         * @type {string || null}
         */
        this.Statistics = null;

        /**
         * Protocol port array
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPort = null;

        /**
         * Resource instance IP, which is required only if `Business` is `net` (Anti-DDoS Ultimate), because an Anti-DDoS Ultimate instance has multiple IPs;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Statistics = 'Statistics' in params ? params.Statistics : null;

        if (params.ProtocolPort) {
            this.ProtocolPort = new Array();
            for (let z in params.ProtocolPort) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPort[z]);
                this.ProtocolPort.push(obj);
            }
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeDDoSDefendStatus response structure.
 * @class
 */
class DescribeDDoSDefendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protection status. 0: disabled, 1: enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DefendStatus = null;

        /**
         * Expiration time of temporary protection disablement. This field is empty if the protection is in enabled status;
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UndefendExpire = null;

        /**
         * Console feature display field. 1: displays console features, 0: hides console features
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ShowFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefendStatus = 'DefendStatus' in params ? params.DefendStatus : null;
        this.UndefendExpire = 'UndefendExpire' in params ? params.UndefendExpire : null;
        this.ShowFlag = 'ShowFlag' in params ? params.ShowFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCSelfDefinePolicy response structure.
 * @class
 */
class DescribeCCSelfDefinePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of custom rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Policy list
         * @type {Array.<CCPolicy> || null}
         */
        this.Policys = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Policys) {
            this.Policys = new Array();
            for (let z in params.Policys) {
                let obj = new CCPolicy();
                obj.deserialize(params.Policys[z]);
                this.Policys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom CC protection rule
 * @class
 */
class CCPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Matching mode. Valid values: [matching (matching mode), speedlimit (speed limiting mode)]
         * @type {string || null}
         */
        this.Smode = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * Number of requests allowed per minute
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * Executed policy mode. Valid values: [alg (verification code), drop (blocking)]
         * @type {string || null}
         */
        this.ExeMode = null;

        /**
         * Specifies whether the policy is activated
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule list
         * @type {Array.<CCRule> || null}
         */
        this.RuleList = null;

        /**
         * IP list. If this field is to be left empty, please pass in an empty instead of null;
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * CC protection type. Valid values: [http, https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * ID of the forwarding rule corresponding to the HTTPS CC protection domain name
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * HTTPS CC protection domain name
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Smode = 'Smode' in params ? params.Smode : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.ExeMode = 'ExeMode' in params ? params.ExeMode : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new CCRule();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyDDoSAIStatus response structure.
 * @class
 */
class ModifyDDoSAIStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AI protection status. Valid values: [on, off]
         * @type {string || null}
         */
        this.DDoSAI = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvInfo request structure.
 * @class
 */
class DescribeDDoSNetEvInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyResourceRenewFlag request structure.
 * @class
 */
class ModifyResourceRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate, `shield`: Chess Shield, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `insurance`: guarantee package, `staticpack`: non-BGP package
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Auto-renewal flag (0: manual renewal, 1: auto-renewal, 2: no renewal upon expiration)
         * @type {number || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DescribeCCEvList response structure.
 * @class
 */
class DescribeCCEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `shield`: Chess Shield; `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Instance IP list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IpList = null;

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
         * CC attack event list
         * @type {Array.<CCEventRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CCEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCFrequencyRules request structure.
 * @class
 */
class DescribeCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Layer-7 forwarding rule ID (which can be obtained from the layer-7 forwarding rule API). If a value is entered, it means to get the access frequency control rule of the forwarding rule;
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateL4HealthConfig request structure.
 * @class
 */
class CreateL4HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Layer-4 health check configuration array
         * @type {Array.<L4HealthConfig> || null}
         */
        this.HealthConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L4HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeBGPIPL7RuleMaxCnt request structure.
 * @class
 */
class DescribeBGPIPL7RuleMaxCntRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDDoSPolicyName response structure.
 * @class
 */
class ModifyDDoSPolicyNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCAlarmThreshold request structure.
 * @class
 */
class DescribeCCAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`shield`: Chess Shield, `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.RsId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;

    }
}

/**
 * ModifyCCUrlAllow request structure.
 * @class
 */
class ModifyCCUrlAllowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * add: add, delete: delete
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Blocklist/allowlist type. Valid value: [white (allowlist)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * URL array. URL format:
http://domain name/cgi
https://domain name/cgi
         * @type {Array.<string> || null}
         */
        this.UrlList = null;

        /**
         * CC protection type, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)]; if this field is left empty, HTTPS CC protection will be used by default; if `https` is entered, the `Domain` and `RuleId` fields are required;
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * HTTPS layer-7 forwarding rule domain name (which is optional and can be obtained from the layer-7 forwarding rule API). This field is required only if `Protocol` is `https`;
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * HTTPS layer-7 forwarding rule ID (which is optional and can be obtained from the layer-7 forwarding rule API). This field is required only when adding a rule and `Protocol` is `https`;
If `Method` is `delete`, this field can be left empty;
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UrlList = 'UrlList' in params ? params.UrlList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * ModifyDDoSAlarmThreshold response structure.
 * @class
 */
class ModifyDDoSAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSLevel response structure.
 * @class
 */
class ModifyDDoSLevelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Protection level. Valid values: [low,middle,high]
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSWaterKey response structure.
 * @class
 */
class ModifyDDoSWaterKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark key list
         * @type {Array.<WaterPrintKey> || null}
         */
        this.KeyList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyList) {
            this.KeyList = new Array();
            for (let z in params.KeyList) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.KeyList[z]);
                this.KeyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCIpAllowDeny response structure.
 * @class
 */
class DescribeCCIpAllowDenyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field has been replaced by `RecordList` and should not be used
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * Number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Returned Blocklist/allowlist record,
If "Key":"ip", "Value": IP;
If "Key":"domain", "Value": domain name.
If "Key":"type", "Value" can be `white` (allowlist) or `black` (blocklist).
If "Key":"protocol", "Value": CC protection protocol (HTTP or HTTPS);
         * @type {Array.<KeyValueRecord> || null}
         */
        this.RecordList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSIpLog response structure.
 * @class
 */
class DescribeDDoSIpLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP attack log, which is a `KeyValue` array. Valid values of `Key-Value`:
If `Key` is `LogTime`, `Value` indicates the IP log time
If `Key` is `LogMessage`, `Value` indicates the IP log content
         * @type {Array.<KeyValueRecord> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The custom CC protection policy in key-value format
 * @class
 */
class CCRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the policy. Valid values: `host`, `cgi`, `ua`, `referer`
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * Rule condition. Valid values: `include`, `not_include`, `equal`
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Value of the policy. Length limit: 31 bytes
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
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeResIpList response structure.
 * @class
 */
class DescribeResIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource IP list
         * @type {Array.<ResourceIp> || null}
         */
        this.Resource = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resource) {
            this.Resource = new Array();
            for (let z in params.Resource) {
                let obj = new ResourceIp();
                obj.deserialize(params.Resource[z]);
                this.Resource.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCIpAllowDeny request structure.
 * @class
 */
class ModifyCCIpAllowDenyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * add: add, delete: delete
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Blocklist/allowlist type. Valid values: [white (allowlist), black (blocklist)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Blocklisted/whitelisted IP array
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * CC protection type, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)]; if this field is left empty, HTTPS CC protection will be used by default; if `https` is entered, the `Domain` and `RuleId` fields are required;
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * HTTPS layer-7 forwarding rule domain name (which is optional and can be obtained from the layer-7 forwarding rule API). This field is required only if `Protocol` is `https`;
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * HTTPS layer-7 forwarding rule ID (which is optional and can be obtained from the layer-7 forwarding rule API),
If `Method` is `delete`, this field can be left empty;
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateInstanceName response structure.
 * @class
 */
class CreateInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSDefendStatus request structure.
 * @class
 */
class DescribeDDoSDefendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `basic`: Anti-DDoS Basic, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS (multi-IP), `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Instance ID, which is required only if `Business` is not `basic`.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Anti-DDoS Basic IP, which is required only if `Business` is Anti-DDoS Basic;
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Type of products bound to the anti-DDoS instance, which is required only if `Business` is Anti-DDoS Basic. Valid values: [public (CVM), bm (Bare metal products), eni (elastic network interface), vpngw (VPN Gateway), natgw (NAT Gateway), waf (Web Application Firewall), fpc (Finance products), gaap (GAAP), other (hosted IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Product subtype of IP, which is required only if `Business` is Anti-DDoS Basic. Valid values: [cvm (CVM), lb (CLB), eni (ENI), vpngw (VPN), natgw (NAT), waf (WAF), fpc (finance), gaap (GAAP), other (hosted IP), eip (BM EIP)]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Resource instance ID of IP, which is required only if `Business` is Anti-DDoS Basic. This field is required when binding a new IP. For example, if it is an ENI IP, enter `ID(eni-*)` of the ENI for `InstanceId`;
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * This field is required only if `Business` is Anti-DDoS Basic, indicating the IP region. Valid values:
"bj":     North China (Beijing)
"cd":     Southwest China (Chengdu)
"cq":     Southwest China (Chongqing)
"gz":     South China (Guangzhou)
"gzopen": South China (Guangzhou Open)
"hk":     Hong Kong (China)
"kr":     Southeast Asia (Seoul)
"sh":     East China (Shanghai)
"shjr":   East China (Shanghai Finance)
"szjr":   South China (Shenzhen Finance)
"sg":     Southeast Asia (Singapore)
"th":     Southeast Asia (Thailand)
"de":     Europe (Germany)
"usw":    West US (Silicon Valley)
"ca":     North America (Toronto)
"jp":     Japan
"hzec":   Hangzhou
"in":     India
"use":    East US (Virginia)
"ru":     Russia
"tpe":    Taiwan (China)
"nj":     Nanjing
         * @type {string || null}
         */
        this.IPRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;

    }
}

/**
 * Aggregated data on the HTTP status codes of business traffic
 * @class
 */
class HttpStatusMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP 2xx Status code
         * @type {Array.<number> || null}
         */
        this.Http2xx = null;

        /**
         * HTTP 3xx Status code
         * @type {Array.<number> || null}
         */
        this.Http3xx = null;

        /**
         * HTTP 404 Status code
         * @type {Array.<number> || null}
         */
        this.Http404 = null;

        /**
         * HTTP 4xx Status code
         * @type {Array.<number> || null}
         */
        this.Http4xx = null;

        /**
         * HTTP 5xx Status code
         * @type {Array.<number> || null}
         */
        this.Http5xx = null;

        /**
         * HTTP 2xx Forwarding status code
         * @type {Array.<number> || null}
         */
        this.SourceHttp2xx = null;

        /**
         * HTTP 3xx Forwarding status code
         * @type {Array.<number> || null}
         */
        this.SourceHttp3xx = null;

        /**
         * HTTP 404 Forwarding status code
         * @type {Array.<number> || null}
         */
        this.SourceHttp404 = null;

        /**
         * HTTP 4xx Forwarding status code
         * @type {Array.<number> || null}
         */
        this.SourceHttp4xx = null;

        /**
         * HTTP 5xx Forwarding status code
         * @type {Array.<number> || null}
         */
        this.SourceHttp5xx = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Http2xx = 'Http2xx' in params ? params.Http2xx : null;
        this.Http3xx = 'Http3xx' in params ? params.Http3xx : null;
        this.Http404 = 'Http404' in params ? params.Http404 : null;
        this.Http4xx = 'Http4xx' in params ? params.Http4xx : null;
        this.Http5xx = 'Http5xx' in params ? params.Http5xx : null;
        this.SourceHttp2xx = 'SourceHttp2xx' in params ? params.SourceHttp2xx : null;
        this.SourceHttp3xx = 'SourceHttp3xx' in params ? params.SourceHttp3xx : null;
        this.SourceHttp404 = 'SourceHttp404' in params ? params.SourceHttp404 : null;
        this.SourceHttp4xx = 'SourceHttp4xx' in params ? params.SourceHttp4xx : null;
        this.SourceHttp5xx = 'SourceHttp5xx' in params ? params.SourceHttp5xx : null;

    }
}

/**
 * ModifyL4Health request structure.
 * @class
 */
class ModifyL4HealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Health check parameter array
         * @type {Array.<L4RuleHealth> || null}
         */
        this.Healths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L4RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }

    }
}

/**
 * ModifyCCHostProtection response structure.
 * @class
 */
class ModifyCCHostProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL4Rules response structure.
 * @class
 */
class CreateL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInsurePacks request structure.
 * @class
 */
class DescribeInsurePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Guarantee package ID, which is optional. If you need to get the guarantee package with a specified ID (such as insure-000000xe), please use this field
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * DescribeDDoSNetCount request structure.
 * @class
 */
class DescribeDDoSNetCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric. Valid values: [traffic (attack protocol traffic in KB), pkg (number of attack protocol packets), classnum (number of attack events)]
         * @type {string || null}
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * Pagination index
 * @class
 */
class Paging extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyCCSelfDefinePolicy request structure.
 * @class
 */
class ModifyCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * Details of the CC protection policy
         * @type {CCPolicy || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

        if (params.Policy) {
            let obj = new CCPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

    }
}

/**
 * Layer-4 health check configuration
 * @class
 */
class L4HealthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding protocol. Valid values: [TCP, UDP]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding port
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Response timeout period in seconds
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * Detection interval in seconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Unhealthy threshold in times.
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * Healthy threshold in times.
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * Session persistence duration in seconds
         * @type {number || null}
         */
        this.KeepTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

    }
}

/**
 * CreateCCSelfDefinePolicy request structure.
 * @class
 */
class CreateCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Details of the CC protection policy
         * @type {CCPolicy || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Policy) {
            let obj = new CCPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

    }
}

/**
 * Operation return code, which is only used to return success
 * @class
 */
class SuccessCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success/error code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Description
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribleL4Rules request structure.
 * @class
 */
class DescribleL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID, which is optional. If this field is entered, the specified rule will be obtained
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Layer-4 rule
 * @class
 */
class L4RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding protocol. Valid values: [TCP, UDP]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding port
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * Real server port
         * @type {number || null}
         */
        this.SourcePort = null;

        /**
         * Forwarding method. Valid values: [1 (forwarding via domain name), 2 (forwarding via IP)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Session persistence duration in seconds
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * Forward list
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * Load balancing method. Valid values: [1 (weighted round robin), 2 (source IP hash)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * Session persistence status. Valid values: [0 (disabled), 1 (enabled)];
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Watermark removal status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.RemoveSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SourcePort = 'SourcePort' in params ? params.SourcePort : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RemoveSwitch = 'RemoveSwitch' in params ? params.RemoveSwitch : null;

    }
}

/**
 * DescribeL4HealthConfig request structure.
 * @class
 */
class DescribeL4HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID array. To export the health check configurations of all rules, leave this field empty or enter an empty array;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * CreateL7CCRule response structure.
 * @class
 */
class CreateL7CCRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom layer-7 CC protection rule parameters. If custom CC protection rule is not enabled, an empty array will be returned.
         * @type {Array.<CCRuleConfig> || null}
         */
        this.RuleConfig = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleConfig) {
            this.RuleConfig = new Array();
            for (let z in params.RuleConfig) {
                let obj = new CCRuleConfig();
                obj.deserialize(params.RuleConfig[z]);
                this.RuleConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCFrequencyRulesStatus response structure.
 * @class
 */
class ModifyCCFrequencyRulesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetReturnSwitch request structure.
 * @class
 */
class ModifyNetReturnSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Switch status. 0: disabled, 1: enabled
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Switch duration in hours. Valid values: [0,1,2,3,4,5,6;]. If `status` is 1, this field is required and must be greater than 0
         * @type {number || null}
         */
        this.Hour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Hour = 'Hour' in params ? params.Hour : null;

    }
}

/**
 * CreateL7CCRule request structure.
 * @class
 */
class CreateL7CCRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Operation. Valid values: [query (query), add (add), del (delete)]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Layer-7 forwarding rule ID, such as rule-0000001
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Custom layer-7 CC protection rule. If the `Method` is `query`, this field can be left empty; if the `Method` is `add` or `del`, it is required, and the array length can only be 1;
         * @type {Array.<CCRuleConfig> || null}
         */
        this.RuleConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.RuleConfig) {
            this.RuleConfig = new Array();
            for (let z in params.RuleConfig) {
                let obj = new CCRuleConfig();
                obj.deserialize(params.RuleConfig[z]);
                this.RuleConfig.push(obj);
            }
        }

    }
}

/**
 * CreateL7Rules request structure.
 * @class
 */
class CreateL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule list
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * DescribeBizHttpStatus response structure.
 * @class
 */
class DescribeBizHttpStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics on the HTTP status codes of business traffic
         * @type {HttpStatusMap || null}
         */
        this.HttpStatusMap = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HttpStatusMap) {
            let obj = new HttpStatusMap();
            obj.deserialize(params.HttpStatusMap)
            this.HttpStatusMap = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvList response structure.
 * @class
 */
class DescribeDDoSNetEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

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
         * DDoS attack event list
         * @type {Array.<DDoSEventRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DDoSEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL4Rules request structure.
 * @class
 */
class CreateL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule list
         * @type {Array.<L4RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyNewL4Rule request structure.
 * @class
 */
class ModifyNewL4RuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced).
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Forwarding rule.
         * @type {L4RuleEntry || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rule) {
            let obj = new L4RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeL4RulesErrHealth request structure.
 * @class
 */
class DescribeL4RulesErrHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Layer-4 forwarding rule list
 * @class
 */
class L4RuleSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intermediate IP or domain name
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Weight value. Value range: [0,100]
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
        this.Source = 'Source' in params ? params.Source : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * CreateBasicDDoSAlarmThreshold response structure.
 * @class
 */
class CreateBasicDDoSAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If there is an alarm threshold configuration, the returned alarm threshold will be greater than 0; otherwise, the returned alarm threshold will be 0;
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * Alarm threshold type. 1: inbound traffic, 2: cleansed traffic. This field is valid if `AlarmThreshold` is above 0;
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNetReturn response structure.
 * @class
 */
class CreateNetReturnResponse extends  AbstractModel {
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
 * DeleteL4Rules request structure.
 * @class
 */
class DeleteL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID list
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * ModifyCCAlarmThreshold response structure.
 * @class
 */
class ModifyCCAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7HealthConfig request structure.
 * @class
 */
class CreateL7HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Layer-7 health check configuration array
         * @type {Array.<L7HealthConfig> || null}
         */
        this.HealthConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L7HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeIPProductInfo request structure.
 * @class
 */
class DescribeIPProductInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * IP list
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeL4HealthConfig response structure.
 * @class
 */
class DescribeL4HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 health check configuration array
         * @type {Array.<L4HealthConfig> || null}
         */
        this.HealthConfig = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L4HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7RuleCert response structure.
 * @class
 */
class CreateL7RuleCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSAttackIPRegionMap request structure.
 * @class
 */
class DescribeDDoSAttackIPRegionMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`shield`: Chess Shield, `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time. Maximum statistics time range: half a year;
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP attack source of specified resource, which is optional
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * ModifyDDoSPolicy request structure.
 * @class
 */
class ModifyDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Protocol disablement, which must be entered, and the array length must be 1
         * @type {Array.<DDoSPolicyDropOption> || null}
         */
        this.DropOptions = null;

        /**
         * Port disablement. If no ports are to be disabled, enter an empty array
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * IP blocklist/allowlist. Enter an empty array if there is no IP blocklist/allowlist
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpAllowDenys = null;

        /**
         * Packet filter. Enter an empty array if there are no packets to filter
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * Watermarking policy parameter. Enter an empty array if the watermarking feature is not enabled. At most one watermarking policy can be passed in (that is, the size of the array cannot exceed 1)
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.DropOptions) {
            this.DropOptions = new Array();
            for (let z in params.DropOptions) {
                let obj = new DDoSPolicyDropOption();
                obj.deserialize(params.DropOptions[z]);
                this.DropOptions.push(obj);
            }
        }

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.IpAllowDenys) {
            this.IpAllowDenys = new Array();
            for (let z in params.IpAllowDenys) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpAllowDenys[z]);
                this.IpAllowDenys.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

    }
}

/**
 * DescribeSourceIpSegment request structure.
 * @class
 */
class DescribeSourceIpSegmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeSourceIpSegment response structure.
 * @class
 */
class DescribeSourceIpSegmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intermediate IP range. Multiple values are separated by ";"
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResBindDDoSPolicy request structure.
 * @class
 */
class ModifyResBindDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * bind: bind policy; unbind: unbind policy
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * Layer-7 rule health check parameter
 * @class
 */
class L7RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Detection interval in seconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Unhealthy threshold in times.
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * Healthy threshold in times.
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * HTTP request method. Valid values: [HEAD, GET]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Healthy status code during health check. xx = 1, 2xx = 2, 3xx = 4, 4xx = 8, 5xx = 16. Multiple status code values are added up
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * URL of checked directory. Default value: /
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Configuration status. 0: normal, 1: configuring, 2: configuration failed
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateL7RulesUpload request structure.
 * @class
 */
class CreateL7RulesUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule list
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * Rule health check parameter
 * @class
 */
class L4RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Response timeout period in seconds
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * Detection interval in seconds, which must be greater than the response timeout period
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Unhealthy threshold in times
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * Healthy threshold in times.
         * @type {number || null}
         */
        this.AliveNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;

    }
}

/**
 * ModifyCCFrequencyRules request structure.
 * @class
 */
class ModifyCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CC access frequency control rule ID
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * Matching rule. Valid values: ["include" (prefix match), "equal" (exact match)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Reference period in seconds. Valid values: [10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of access requests. Value range: [1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * Action take. Valid values: ["alg" (CAPTCHA), "drop" (blocking)]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * Execution duration in seconds. Valid range: [1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

        /**
         * URI string, which must start with `/`, such as `/abc/a.php`. Length limit: 31. If URI is `/`, only prefix match can be selected as the matching mode;
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * `User-Agent` string. Length limit: 80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie string. Length limit: 40
         * @type {string || null}
         */
        this.Cookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;

    }
}

/**
 * ModifyCCPolicySwitch response structure.
 * @class
 */
class ModifyCCPolicySwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSThreshold response structure.
 * @class
 */
class ModifyDDoSThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSPolicyCase request structure.
 * @class
 */
class CreateDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy scenario name string. Length limit: 64
         * @type {string || null}
         */
        this.CaseName = null;

        /**
         * Development platform. Valid values: [PC (PC client), MOBILE (mobile device), TV (TV), SERVER (server)]
         * @type {Array.<string> || null}
         */
        this.PlatformTypes = null;

        /**
         * Category. Valid values: [WEB (website), GAME (game), APP (application), OTHER (other)]
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * Application protocol. Valid values: [tcp (TCP protocol), udp (UDP protocol), icmp (ICMP protocol), all (other protocols)]
         * @type {Array.<string> || null}
         */
        this.AppProtocols = null;

        /**
         * TCP start port. Value range: (0, 65535]
         * @type {string || null}
         */
        this.TcpSportStart = null;

        /**
         * TCP end port. Value range: (0, 65535). It must be greater than or equal to the TCP start port.
         * @type {string || null}
         */
        this.TcpSportEnd = null;

        /**
         * UDP start port. Value range: (0, 65535]
         * @type {string || null}
         */
        this.UdpSportStart = null;

        /**
         * UDP end port. Value range: (0, 65535). It must be greater than or equal to the UDP start port.
         * @type {string || null}
         */
        this.UdpSportEnd = null;

        /**
         * Whether there are customers outside China. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasAbroad = null;

        /**
         * Whether to actively initiate outbound TCP requests. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasInitiateTcp = null;

        /**
         * Whether to actively initiate outbound UDP requests. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasInitiateUdp = null;

        /**
         * Port that actively initiates TCP requests. Value range: (0, 65535]
         * @type {string || null}
         */
        this.PeerTcpPort = null;

        /**
         * Port that actively initiates UDP requests. Value range: (0, 65535]
         * @type {string || null}
         */
        this.PeerUdpPort = null;

        /**
         * Fixed feature code of TCP payload. Max string length: 512
         * @type {string || null}
         */
        this.TcpFootprint = null;

        /**
         * Fixed feature code of UDP payload. Max string length: 512
         * @type {string || null}
         */
        this.UdpFootprint = null;

        /**
         * Web application API URL
         * @type {Array.<string> || null}
         */
        this.WebApiUrl = null;

        /**
         * Minimum length of TCP packet. Value range: (0, 1500)
         * @type {string || null}
         */
        this.MinTcpPackageLen = null;

        /**
         * Maximum length of TCP packet. Value range: (0, 1500). It must be greater than or equal to the minimum length of TCP packet
         * @type {string || null}
         */
        this.MaxTcpPackageLen = null;

        /**
         * Minimum length of UDP packet. Value range: (0, 1500)
         * @type {string || null}
         */
        this.MinUdpPackageLen = null;

        /**
         * Maximum length of UDP packet. Value range: (0, 1500). It must be greater than or equal to the minimum length of UDP packet
         * @type {string || null}
         */
        this.MaxUdpPackageLen = null;

        /**
         * Whether there are applications using VPN. Valid values: [no, yes]
         * @type {string || null}
         */
        this.HasVPN = null;

        /**
         * TCP port list. You can enter a single port, or a port range. Format: 80,443,700-800,53,1000-3000.
         * @type {string || null}
         */
        this.TcpPortList = null;

        /**
         * UDP port list. You can enter a single port, or a port range. Format: 80,443,700-800,53,1000-3000.
         * @type {string || null}
         */
        this.UdpPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.CaseName = 'CaseName' in params ? params.CaseName : null;
        this.PlatformTypes = 'PlatformTypes' in params ? params.PlatformTypes : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.AppProtocols = 'AppProtocols' in params ? params.AppProtocols : null;
        this.TcpSportStart = 'TcpSportStart' in params ? params.TcpSportStart : null;
        this.TcpSportEnd = 'TcpSportEnd' in params ? params.TcpSportEnd : null;
        this.UdpSportStart = 'UdpSportStart' in params ? params.UdpSportStart : null;
        this.UdpSportEnd = 'UdpSportEnd' in params ? params.UdpSportEnd : null;
        this.HasAbroad = 'HasAbroad' in params ? params.HasAbroad : null;
        this.HasInitiateTcp = 'HasInitiateTcp' in params ? params.HasInitiateTcp : null;
        this.HasInitiateUdp = 'HasInitiateUdp' in params ? params.HasInitiateUdp : null;
        this.PeerTcpPort = 'PeerTcpPort' in params ? params.PeerTcpPort : null;
        this.PeerUdpPort = 'PeerUdpPort' in params ? params.PeerUdpPort : null;
        this.TcpFootprint = 'TcpFootprint' in params ? params.TcpFootprint : null;
        this.UdpFootprint = 'UdpFootprint' in params ? params.UdpFootprint : null;
        this.WebApiUrl = 'WebApiUrl' in params ? params.WebApiUrl : null;
        this.MinTcpPackageLen = 'MinTcpPackageLen' in params ? params.MinTcpPackageLen : null;
        this.MaxTcpPackageLen = 'MaxTcpPackageLen' in params ? params.MaxTcpPackageLen : null;
        this.MinUdpPackageLen = 'MinUdpPackageLen' in params ? params.MinUdpPackageLen : null;
        this.MaxUdpPackageLen = 'MaxUdpPackageLen' in params ? params.MaxUdpPackageLen : null;
        this.HasVPN = 'HasVPN' in params ? params.HasVPN : null;
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;

    }
}

/**
 * ModifyCCIpAllowDeny response structure.
 * @class
 */
class ModifyCCIpAllowDenyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCAlarmThreshold request structure.
 * @class
 */
class ModifyCCAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`shield`: Chess Shield, `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.RsId = null;

        /**
         * Alarm threshold, which should be greater than 0 (currently scheduled value). It is set to 1000 on the backend by default
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * List of IPs associated with resource. If no Anti-DDoS Pro instance is bound, pass in an empty array. For Anti-DDoS Ultimate, pass in multiple IPs
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeCCFrequencyRules response structure.
 * @class
 */
class DescribeCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access frequency control rule list
         * @type {Array.<CCFrequencyRule> || null}
         */
        this.CCFrequencyRuleList = null;

        /**
         * Access frequency control rule status. Valid values: [on, off];
         * @type {string || null}
         */
        this.CCFrequencyRuleStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CCFrequencyRuleList) {
            this.CCFrequencyRuleList = new Array();
            for (let z in params.CCFrequencyRuleList) {
                let obj = new CCFrequencyRule();
                obj.deserialize(params.CCFrequencyRuleList[z]);
                this.CCFrequencyRuleList.push(obj);
            }
        }
        this.CCFrequencyRuleStatus = 'CCFrequencyRuleStatus' in params ? params.CCFrequencyRuleStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSEvList request structure.
 * @class
 */
class DescribeDDoSEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

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
         * Resource instance ID. If `Business` is `basic`, this field is not required (because Anti-DDoS Basic has no resource instance)
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * Whether the elastic protection bandwidth is exceeded. Valid values: [yes, no]. If an empty string is entered, it means no filtering
         * @type {string || null}
         */
        this.OverLoad = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
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
        this.Business = 'Business' in params ? params.Business : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.OverLoad = 'OverLoad' in params ? params.OverLoad : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeBasicCCThreshold response structure.
 * @class
 */
class DescribeBasicCCThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC status (0: disabled, 1: enabled)
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC protection threshold
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSPolicyName request structure.
 * @class
 */
class ModifyDDoSPolicyNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
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
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeIpUnBlockList response structure.
 * @class
 */
class DescribeIpUnBlockListResponse extends  AbstractModel {
    constructor(){
        super();

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
         * IP unblocking record
         * @type {Array.<IpUnBlockData> || null}
         */
        this.List = null;

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new IpUnBlockData();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCPolicySwitch request structure.
 * @class
 */
class ModifyCCPolicySwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Policy ID
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * Status
         * @type {number || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ModifyCCFrequencyRules response structure.
 * @class
 */
class ModifyCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4KeepTime request structure.
 * @class
 */
class ModifyL4KeepTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Session persistence status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * Session persistence duration in seconds
         * @type {number || null}
         */
        this.KeepTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

    }
}

/**
 * Scheduling domain name information
 * @class
 */
class SchedulingDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduling domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * List of BGP IPs
         * @type {Array.<string> || null}
         */
        this.BGPIpList = null;

        /**
         * List of CTCC IPs
         * @type {Array.<string> || null}
         */
        this.CTCCIpList = null;

        /**
         * List of CUCC IPs
         * @type {Array.<string> || null}
         */
        this.CUCCIpList = null;

        /**
         * List of CMCC IPs
         * @type {Array.<string> || null}
         */
        this.CMCCIpList = null;

        /**
         * List of IPs outside Mainland China
         * @type {Array.<string> || null}
         */
        this.OverseaIpList = null;

        /**
         * Scheduling method. It only supports `priority` now.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.BGPIpList = 'BGPIpList' in params ? params.BGPIpList : null;
        this.CTCCIpList = 'CTCCIpList' in params ? params.CTCCIpList : null;
        this.CUCCIpList = 'CUCCIpList' in params ? params.CUCCIpList : null;
        this.CMCCIpList = 'CMCCIpList' in params ? params.CMCCIpList : null;
        this.OverseaIpList = 'OverseaIpList' in params ? params.OverseaIpList : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * ModifyCCHostProtection request structure.
 * @class
 */
class ModifyCCHostProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Enables/disables CC domain name protection. Valid values: [open (enable), close (disable)]
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeIpBlockList request structure.
 * @class
 */
class DescribeIpBlockListRequest extends  AbstractModel {
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
 * DescribeDDoSNetCount response structure.
 * @class
 */
class DescribeDDoSNetCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric. Valid values: [traffic (attack protocol traffic in KB), pkg (number of attack protocol packets), classnum (number of attack events)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * `Key-Value` array. Valid values of `Key`:
If `MetricName` is `traffic`:
If `key` is `TcpKBSum`, it indicates the traffic of TCP packets in KB.
If `key` is `UdpKBSum`, it indicates the traffic of UDP packets in KB.
If `key` is `IcmpKBSum`, it indicates the traffic of ICMP packets in KB.
If `key` is `OtherKBSum`, it indicates the traffic of other packets in KB.

If `MetricName` is `pkg`:
If `key` is `TcpPacketSum`, it indicates the number of TCP packets.
If `key` is `UdpPacketSum`, it indicates the number of UDP packets.
If `key` is `IcmpPacketSum`, it indicates the number of ICMP packets.
If `key` is `OtherPacketSum`, it indicates the number of other packets.

If `MetricName` is `classnum`:
The value of `key` indicates the attack event type. When the `key` is `UNKNOWNFLOOD`, it indicates  unknown attack events.
         * @type {Array.<KeyValue> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7Rules response structure.
 * @class
 */
class CreateL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data returned by Barad
 * @class
 */
class BaradData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name (connum: number of active TCP connections;
new_conn: number of new TCP connections;
inactive_conn: number of inactive connections;
intraffic: inbound traffic;
outtraffic: outbound traffic;
alltraffic: sum of inbound and outbound traffic;
inpkg: inbound packet rate;
outpkg: outbound packet rate;)
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Value array
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * Value array size
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModifyDDoSSwitch request structure.
 * @class
 */
class ModifyDDoSSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * `get`: read DDoS protection status, `set`: modify DDoS protection status
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Anti-DDoS Basic IP, which is required only if `Business` is Anti-DDoS Basic;
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Product type of IP, which is required only if `Business` is Anti-DDoS Basic. Valid values: [public (CVM), bm (BM), eni (ENI), vpngw (VPN Gateway), natgw (NAT Gateway), waf (WAF), fpc (finance product), gaap (GAAP), other (hosted IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Product subtype of IP, which is required only if `Business` is Anti-DDoS Basic. Valid values: [cvm (CVM), lb (CLB), eni (ENI), vpngw (VPN), natgw (NAT), waf (WAF), fpc (finance), gaap (GAAP), other (hosted IP), eip (BM EIP)]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Resource instance ID of IP, which is required only if `Business` is Anti-DDoS Basic. This field is required when binding a new IP. For example, if it is an ENI IP, enter `ID(eni-*)` of the ENI for `InstanceId`;
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * This field is required only if `Business` is Anti-DDoS Basic, indicating the IP region. Valid values:
"bj":     North China (Beijing)
"cd":     Southwest China (Chengdu)
"cq":     Southwest China (Chongqing)
"gz":     South China (Guangzhou)
"gzopen": South China (Guangzhou Open)
"hk":     Hong Kong (China)
"kr":     Southeast Asia (Seoul)
"sh":     East China (Shanghai)
"shjr":   East China (Shanghai Finance)
"szjr":   South China (Shenzhen Finance)
"sg":     Southeast Asia (Singapore)
"th":     Southeast Asia (Thailand)
"de":     Europe (Germany)
"usw":    West US (Silicon Valley)
"ca":     North America (Toronto)
"jp":     Japan
"hzec":   Hangzhou
"in":     India
"use":    East US (Virginia)
"ru":     Russia
"tpe":    Taiwan (China)
"nj":     Nanjing
         * @type {string || null}
         */
        this.IPRegion = null;

        /**
         * Protection status value, which is optional. Valid values: [0 (disabled), 1 (enabled)]. If `Method` is `get`, this field can be left empty;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateNetReturn request structure.
 * @class
 */
class CreateNetReturnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDDoSAIStatus request structure.
 * @class
 */
class ModifyDDoSAIStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * get (read AI protection status), set (modify AI protection status);
         * @type {string || null}
         */
        this.Method = null;

        /**
         * AI protection status, which is required if `Method` is `set`. Valid values: [on, off].
         * @type {string || null}
         */
        this.DDoSAI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

    }
}

/**
 * DescribeDDoSAttackSource response structure.
 * @class
 */
class DescribeDDoSAttackSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of attack sources
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Attack source list
         * @type {Array.<DDoSAttackSourceRecord> || null}
         */
        this.AttackSourceList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.AttackSourceList) {
            this.AttackSourceList = new Array();
            for (let z in params.AttackSourceList) {
                let obj = new DDoSAttackSourceRecord();
                obj.deserialize(params.AttackSourceList[z]);
                this.AttackSourceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceList response structure.
 * @class
 */
class DescribeResourceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Resource record list. The description of key values is as follows:
"Key": "CreateTime" (Instance purchase time)
"Key": "Region" (Instance region)
"Key": "BoundIP" (IP bound to the single-IP instance)
"Key": "Id" (Instance ID)
"Key": "CCEnabled" (CC protection switch status of the instance)
"Key": "DDoSThreshold" (Anti-DDoS cleansing threshold of the instance)	
"Key": "BoundStatus" (IP binding status of the single-IP/multi-IP instance; binding or bound)
"Key": "Type" (Disused field)
"Key": "ElasticLimit" (Elastic protection value of the instance)
"Key": "DDoSAI" (Anti-DDoS AI protection switch of the instance)
"Key": "OverloadCount" (The number of attacks exceeding the elastic protection value to the instance)
"Key": "Status" (Instance status; idle: running; attacking: under attacks; blocking: being blocked; isolate: being isolated)
"Key": "Lbid" (Disused field)
"Key": "ShowFlag" (Disused field)
"Key": "Expire" (Instance expiry time)
"Key": "CCThreshold" (CC protection trigger value of the instance)
"Key": "AutoRenewFlag" (Whether the instance is on auto-renewal)
"Key": "IspCode" (Line of the single-IP/multi-IP instance; 0: China Telecom; 1: China Unicom; 2: China Mobile; 5: BGP)
"Key": "PackType" (Package type)
"Key": "PackId" (Package ID)
"Key": "Name" (Instance name)
"Key": "Locked" (Disused field)
"Key": "IpDDoSLevel" (Protection level of the instance; low: loose; middle: normal; high: strict)
"Key": "DefendStatus" (DDoS protection status of the instance; enabled or temporarily disabled)
"Key": "UndefendExpire" (End time of the temporary disabling on DDoS protection for the instance)
"Key": "Tgw" (Whether it is a new instance)
"Key": "Bandwidth" (Base protection value of the Anti-DDoS Pro/Advanced instance)
"Key": "DdosMax" (Base protection value of the Anti-DDoS Ultimate instance)
"Key": "GFBandwidth" (Base business application bandwidth of the Anti-DDoS Advanced instance)
"Key": "ServiceBandwidth" (Base business application bandwidth of the Anti-DDoS Ultimate instance)
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ServicePacks = null;

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ServicePacks) {
            this.ServicePacks = new Array();
            for (let z in params.ServicePacks) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ServicePacks[z]);
                this.ServicePacks.push(obj);
            }
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCThreshold request structure.
 * @class
 */
class ModifyCCThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate, `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CC protection threshold. Valid values: (0 100 150 240 350 480 550 700 850 1000 1500 2000 3000 5000 10000 20000);
If `Business` is Anti-DDoS Advanced or Anti-DDoS Ultimate, its maximum CC protection threshold is subject to the base protection bandwidth in the following way:
  Base bandwidth: maximum CC protection threshold
  10:  20000,
  20:  40000,
  30:  70000,
  40:  100000,
  50:  150000,
  60:  200000,
  80:  250000,
  100: 300000,
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CC protection type, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)]; if this field is left empty, HTTPS CC protection will be used by default; if `https` is entered, the `RuleId` field is required;
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * HTTPS layer-7 forwarding rule ID (which is optional and can be obtained from the layer-7 forwarding rule API);
Required if `Protocol` is `https`;
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Queried IP address (only provided by Anti-DDoS Basic), such as 1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * IP region (only provided for Anti-DDoS Basic). Valid values: region abbreviations such as gz, bj, sh, and hk
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * Zone type (only provided for Anti-DDoS Basic). Valid values: public (public cloud zone), bm (BM zone), nat (NAT server zone), channel (internet channel).
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * Device type (only provided for Anti-DDoS Basic). Valid values: cvm (CVM), clb (public CLB), lb (BM CLB), nat (NAT server), channel (internet channel).
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * IPInstance Nat gateway (only provided for Anti-DDoS Basic), which is optional. (If the device type to be queried is a NAT server, this parameter is required, which can be obtained through the NAT resource query API)
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * ISP line (only provided for Anti-DDoS Basic), which is optional. (If the device type to be queried is a NAT server, this parameter should be 5)
         * @type {number || null}
         */
        this.BasicIspCode = null;

        /**
         * This optional field must be specified when HTTPS protocol is used.
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyDDoSDefendStatus response structure.
 * @class
 */
class ModifyDDoSDefendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBasicDDoSAlarmThreshold request structure.
 * @class
 */
class CreateBasicDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`basic`: Anti-DDoS Basic)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * `get`: read alarm threshold, `set`: set alarm threshold
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Alarm threshold type. 1: inbound traffic, 2: cleansed traffic. This field is required if `Method` is `set`;
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Alarm threshold. It is required if `Method` is `set`. If it is set to 0, it means to clear the alarm threshold configuration;
         * @type {number || null}
         */
        this.AlarmThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * Custom layer-7 CC policy
 * @class
 */
class CCRuleConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reference period in seconds. Valid values: [10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of access requests. Value range: [1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * Action take. Valid values: ["alg" (CAPTCHA), "drop" (blocking)]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Execution duration in seconds. Valid range: [1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;

    }
}

/**
 * DescribeDDoSEvInfo response structure.
 * @class
 */
class DescribeDDoSEvInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of TCP attack packets
         * @type {number || null}
         */
        this.TcpPacketSum = null;

        /**
         * Traffic of TCP attacks in KB
         * @type {number || null}
         */
        this.TcpKBSum = null;

        /**
         * Number of UDP attack packets
         * @type {number || null}
         */
        this.UdpPacketSum = null;

        /**
         * Traffic of UDP attacks in KB
         * @type {number || null}
         */
        this.UdpKBSum = null;

        /**
         * Number of ICMP attack packets
         * @type {number || null}
         */
        this.IcmpPacketSum = null;

        /**
         * Traffic of ICMP attacks in KB
         * @type {number || null}
         */
        this.IcmpKBSum = null;

        /**
         * Number of other attack packets
         * @type {number || null}
         */
        this.OtherPacketSum = null;

        /**
         * Traffic of other attacks in KB
         * @type {number || null}
         */
        this.OtherKBSum = null;

        /**
         * Total attack traffic in KB
         * @type {number || null}
         */
        this.TotalTraffic = null;

        /**
         * Attack traffic bandwidth peak
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * Attack packet rate peak
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * PCAP file download link
         * @type {Array.<string> || null}
         */
        this.PcapUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TcpPacketSum = 'TcpPacketSum' in params ? params.TcpPacketSum : null;
        this.TcpKBSum = 'TcpKBSum' in params ? params.TcpKBSum : null;
        this.UdpPacketSum = 'UdpPacketSum' in params ? params.UdpPacketSum : null;
        this.UdpKBSum = 'UdpKBSum' in params ? params.UdpKBSum : null;
        this.IcmpPacketSum = 'IcmpPacketSum' in params ? params.IcmpPacketSum : null;
        this.IcmpKBSum = 'IcmpKBSum' in params ? params.IcmpKBSum : null;
        this.OtherPacketSum = 'OtherPacketSum' in params ? params.OtherPacketSum : null;
        this.OtherKBSum = 'OtherKBSum' in params ? params.OtherKBSum : null;
        this.TotalTraffic = 'TotalTraffic' in params ? params.TotalTraffic : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.PcapUrl = 'PcapUrl' in params ? params.PcapUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribleRegionCount request structure.
 * @class
 */
class DescribleRegionCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Line search. Valid values: [1 (BGP line), 2 (Nanjing Telecom), 3 (Nanjing Unicom), 99 (third-party partner line)]. This field is valid only for Anti-DDoS Advanced and should be ignored for other product
         * @type {Array.<number> || null}
         */
        this.LineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.LineList = 'LineList' in params ? params.LineList : null;

    }
}

/**
 * ModifyCCSelfDefinePolicy response structure.
 * @class
 */
class ModifyCCSelfDefinePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSIpLog request structure.
 * @class
 */
class DescribeDDoSIpLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDDoSAlarmThreshold request structure.
 * @class
 */
class DescribeDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`shield`: Chess Shield, `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.RsId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;

    }
}

/**
 * DescribePolicyCase request structure.
 * @class
 */
class DescribePolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Policy scenario ID
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * Watermarking policy parameter
 * @class
 */
class WaterPrintPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCP port range, such as ["2000-3000","3500-4000"]
         * @type {Array.<string> || null}
         */
        this.TcpPortList = null;

        /**
         * UDP port range, such as ["2000-3000","3500-4000"]
         * @type {Array.<string> || null}
         */
        this.UdpPortList = null;

        /**
         * Watermark offset. Value range: [0, 100)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to automatically remove. Valid values: [0 (no), 1 (yes)]
         * @type {number || null}
         */
        this.RemoveSwitch = null;

        /**
         * Whether it is enabled. Valid values: [0 (no), 1 (yes)]
         * @type {number || null}
         */
        this.OpenStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RemoveSwitch = 'RemoveSwitch' in params ? params.RemoveSwitch : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;

    }
}

/**
 * CreateNewL7RulesUpload request structure.
 * @class
 */
class CreateNewL7RulesUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced).
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID list.
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * Resource IP address list.
         * @type {Array.<string> || null}
         */
        this.VipList = null;

        /**
         * Rule list.
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.VipList = 'VipList' in params ? params.VipList : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * DeleteCCSelfDefinePolicy response structure.
 * @class
 */
class DeleteCCSelfDefinePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSPolicy response structure.
 * @class
 */
class DescribeDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Advanced DDoS policy list
         * @type {Array.<DDosPolicy> || null}
         */
        this.DDosPolicyList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DDosPolicyList) {
            this.DDosPolicyList = new Array();
            for (let z in params.DDosPolicyList) {
                let obj = new DDosPolicy();
                obj.deserialize(params.DDosPolicyList[z]);
                this.DDosPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCCFrequencyRules response structure.
 * @class
 */
class DeleteCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDDoSPolicyCase response structure.
 * @class
 */
class DeleteDDoSPolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL4HealthConfig response structure.
 * @class
 */
class CreateL4HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL7Rules request structure.
 * @class
 */
class ModifyL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule
         * @type {L7RuleEntry || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rule) {
            let obj = new L7RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * ModifyElasticLimit response structure.
 * @class
 */
class ModifyElasticLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNewL7RulesUpload response structure.
 * @class
 */
class CreateNewL7RulesUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code.
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Attack source information
 * @class
 */
class DDoSAttackSourceRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attack source IP
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Province (valid for Mainland China)
         * @type {string || null}
         */
        this.Province = null;

        /**
         * Country/region
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * Total number of attack packets
         * @type {number || null}
         */
        this.PacketSum = null;

        /**
         * Total attack traffic
         * @type {number || null}
         */
        this.PacketLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.PacketSum = 'PacketSum' in params ? params.PacketSum : null;
        this.PacketLen = 'PacketLen' in params ? params.PacketLen : null;

    }
}

/**
 * CreateUnblockIp response structure.
 * @class
 */
class CreateUnblockIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Type of the unblocking action (`user`: self-service unblocking, `auto`: automatic unblocking, `update`: unblocking by service upgrading, `bind`: unblocking by binding Anti-DDoS Pro instance)
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Unblocked time (estimated)
         * @type {string || null}
         */
        this.UnblockTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.UnblockTime = 'UnblockTime' in params ? params.UnblockTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePackIndex request structure.
 * @class
 */
class DescribePackIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced, `bgp`: Anti-DDoS Pro (single IP), `net`: Anti-DDoS Ultimate
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
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * ModifyL4Rules request structure.
 * @class
 */
class ModifyL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule
         * @type {L4RuleEntry || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rule) {
            let obj = new L4RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeDDoSEvList response structure.
 * @class
 */
class DescribeDDoSEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IpList = null;

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
         * DDoS attack event list
         * @type {Array.<DDoSEventRecord> || null}
         */
        this.Data = null;

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DDoSEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSPolicy request structure.
 * @class
 */
class DescribeDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID, which is optional. If a value is entered, it indicates the advanced DDoS policy bound to the resource
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeL7HealthConfig response structure.
 * @class
 */
class DescribeL7HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-7 health check configuration array
         * @type {Array.<L7HealthConfig> || null}
         */
        this.HealthConfig = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L7HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Access frequency control rule for CC protection
 * @class
 */
class CCFrequencyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the access frequency control rule for CC protection
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * URI string, which must start with `/`, such as `/abc/a.php`. Length limit: 31. If URI is `/`, only prefix match can be selected as the matching mode;
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * `User-Agent` string. Length limit: 80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie string. Length limit: 40
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * Matching rule. Valid values: ["include" (prefix match), "equal" (exact match)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Reference period in seconds. Valid values: [10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of access requests. Value range: [1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * Action take. Valid values: ["alg" (CAPTCHA), "drop" (blocking)]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * Execution duration in seconds. Valid range: [1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;

    }
}

/**
 * CreateCCSelfDefinePolicy response structure.
 * @class
 */
class CreateCCSelfDefinePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Layer-7 rule.
 * @class
 */
class NewL7RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding protocol. Valid values: `http` and `https`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding method. Valid values: `1` (by domain name); `2` (by IP).
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Session persistence duration, in seconds.
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * List of sources
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * Load balancing method. Valid value: `1` (weighed polling).
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * Whether session persistence is enabled. Valid values: `0` (disabled) and `1` (enabled).
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * Rule ID. This field is not required for adding a rule, but is required for modifying or deleting a rule.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Certificate source. When the forwarding protocol is HTTPS, this field must be set to `2` (Tencent Cloud managed certificate), and for HTTP protocol, it can be set to `0`.
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * When the certificate source is Tencent Cloud managed certificate, this field must be set to the ID of the managed certificate.
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * [Disused] When the certificate is an external certificate, the certificate content should be provided here. 
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * [Disused] When the certificate is an external certificate, the certificate key should be provided here. 
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * Rule description.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule status. Valid values: `0` (the rule was successfully configured), `1` (configuring the rule), `2` (rule configuration failed), `3` (deleting the rule), `5` (failed to delete rule), `6` (rule awaiting configuration), `7` (rule awaiting deletion), and `8` (rule awaiting certificate configuration).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CC protection status. Valid values: `0` (disabled) and `1` (enabled).
         * @type {number || null}
         */
        this.CCStatus = null;

        /**
         * CC protection status based on HTTPS. Valid values: `0` (disabled) and `1` (enabled).
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC protection threshold based on HTTPS.
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * CC protection level based on HTTPS.
         * @type {string || null}
         */
        this.CCLevel = null;

        /**
         * Region code.
         * @type {number || null}
         */
        this.Region = null;

        /**
         * Anti-DDoS instance ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Anti-DDoS instance IP address.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Modification time.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Whether to enable **Forward HTTPS requests via HTTP**. Valid values: `0` (disabled) and `1` (enabled). The default value is disabled.
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

        /**
         * Access port number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VirtualPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;

    }
}

/**
 * DescribeBizHttpStatus request structure.
 * @class
 */
class DescribeBizHttpStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Statistical period in seconds. Valid values: 300, 1800, 3600, 21600, and 86400.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Statistical mode, which only supports sum.
         * @type {string || null}
         */
        this.Statistics = null;

        /**
         * Protocol and port list, which is valid when the statistical dimension is the number of connections. Valid protocols: TCP, UDP, HTTP, and HTTPS.
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtoInfo = null;

        /**
         * Specific domain name query
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Statistics = 'Statistics' in params ? params.Statistics : null;

        if (params.ProtoInfo) {
            this.ProtoInfo = new Array();
            for (let z in params.ProtoInfo) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtoInfo[z]);
                this.ProtoInfo.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * CreateBoundIP response structure.
 * @class
 */
class CreateBoundIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSUsedStatis request structure.
 * @class
 */
class DescribeDDoSUsedStatisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`bgpip`: Anti-DDoS Advanced)
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
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * Disabled protocol in advanced DDoS policy
 * @class
 */
class DDoSPolicyDropOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocks all TCP traffic. Valid values: [0,1]
         * @type {number || null}
         */
        this.DropTcp = null;

        /**
         * Blocks all UDP traffic. Valid values: [0,1]
         * @type {number || null}
         */
        this.DropUdp = null;

        /**
         * Blocks all ICMP traffic. Valid values: [0,1]
         * @type {number || null}
         */
        this.DropIcmp = null;

        /**
         * Blocks traffic of other protocols. Valid values: [0,1]
         * @type {number || null}
         */
        this.DropOther = null;

        /**
         * Rejects traffic from outside Mainland China. Valid values: [0,1]
         * @type {number || null}
         */
        this.DropAbroad = null;

        /**
         * Null session protection. Valid values: [0,1]
         * @type {number || null}
         */
        this.CheckSyncConn = null;

        /**
         * New connection suppression based on source IP and destination IP. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.SdNewLimit = null;

        /**
         * New connection suppression based on destination IP. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DstNewLimit = null;

        /**
         * Concurrent connection suppression based on source IP and destination IP. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.SdConnLimit = null;

        /**
         * Concurrent connection suppression based on destination IP. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DstConnLimit = null;

        /**
         * Threshold for triggering connection suppression. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.BadConnThreshold = null;

        /**
         * Exceptional connection detection condition: null session protection status. Valid values: [0,1]
         * @type {number || null}
         */
        this.NullConnEnable = null;

        /**
         * Exceptional connection detection condition: connection timeout. Valid values: [0,65535]
         * @type {number || null}
         */
        this.ConnTimeout = null;

        /**
         * Exceptional connection detection condition: percentage of SYN out of ACK. Valid values: [0,100]
         * @type {number || null}
         */
        this.SynRate = null;

        /**
         * Exceptional connection detection condition: SYN threshold. Valid values: [0,100]
         * @type {number || null}
         */
        this.SynLimit = null;

        /**
         * TCP speed limit. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DTcpMbpsLimit = null;

        /**
         * UDP speed limit. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DUdpMbpsLimit = null;

        /**
         * ICMP speed limit. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DIcmpMbpsLimit = null;

        /**
         * Other protocol speed limit. Value range: [0,4294967295]
         * @type {number || null}
         */
        this.DOtherMbpsLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DropTcp = 'DropTcp' in params ? params.DropTcp : null;
        this.DropUdp = 'DropUdp' in params ? params.DropUdp : null;
        this.DropIcmp = 'DropIcmp' in params ? params.DropIcmp : null;
        this.DropOther = 'DropOther' in params ? params.DropOther : null;
        this.DropAbroad = 'DropAbroad' in params ? params.DropAbroad : null;
        this.CheckSyncConn = 'CheckSyncConn' in params ? params.CheckSyncConn : null;
        this.SdNewLimit = 'SdNewLimit' in params ? params.SdNewLimit : null;
        this.DstNewLimit = 'DstNewLimit' in params ? params.DstNewLimit : null;
        this.SdConnLimit = 'SdConnLimit' in params ? params.SdConnLimit : null;
        this.DstConnLimit = 'DstConnLimit' in params ? params.DstConnLimit : null;
        this.BadConnThreshold = 'BadConnThreshold' in params ? params.BadConnThreshold : null;
        this.NullConnEnable = 'NullConnEnable' in params ? params.NullConnEnable : null;
        this.ConnTimeout = 'ConnTimeout' in params ? params.ConnTimeout : null;
        this.SynRate = 'SynRate' in params ? params.SynRate : null;
        this.SynLimit = 'SynLimit' in params ? params.SynLimit : null;
        this.DTcpMbpsLimit = 'DTcpMbpsLimit' in params ? params.DTcpMbpsLimit : null;
        this.DUdpMbpsLimit = 'DUdpMbpsLimit' in params ? params.DUdpMbpsLimit : null;
        this.DIcmpMbpsLimit = 'DIcmpMbpsLimit' in params ? params.DIcmpMbpsLimit : null;
        this.DOtherMbpsLimit = 'DOtherMbpsLimit' in params ? params.DOtherMbpsLimit : null;

    }
}

/**
 * ModifyElasticLimit request structure.
 * @class
 */
class ModifyElasticLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Elastic protection threshold. Valid values: [0 10000 20000 30000 40000 50000 60000 70000 80000 90000 100000 120000 150000 200000 250000 300000 400000 600000 800000 220000 310000 110000 270000 610000]
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyL4Health response structure.
 * @class
 */
class ModifyL4HealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC attack event record
 * @class
 */
class CCEventRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Total requests peak (QPS)
         * @type {number || null}
         */
        this.ReqQps = null;

        /**
         * Attack peak (QPS)
         * @type {number || null}
         */
        this.DropQps = null;

        /**
         * Attack status. Valid values: [0 (ongoing), 1 (ended)]
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * Resource name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Domain name list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainList = null;

        /**
         * URI list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UriList = null;

        /**
         * Attack source list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AttackipList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReqQps = 'ReqQps' in params ? params.ReqQps : null;
        this.DropQps = 'DropQps' in params ? params.DropQps : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.UriList = 'UriList' in params ? params.UriList : null;
        this.AttackipList = 'AttackipList' in params ? params.AttackipList : null;

    }
}

/**
 * DescribeTransmitStatis request structure.
 * @class
 */
class DescribeTransmitStatisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate, `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Metric name. Valid values:
traffic: traffic bandwidth;
pkg: packet rate;
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical time granularity (300: 5-minute, 3600: hourly, 86400: daily)
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time. The second part is kept at 0, and the minute part is a multiple of 5
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time. The second part is kept at 0, and the minute part is a multiple of 5
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Resource IP, which is required and only supports one IP if `Business` is `bgp-multip`. If this field is left empty, all IPs of a resource instance will be counted by default. If the resource instance has multiple IPs (such as Anti-DDoS Ultimate), the statistical method is summation;
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeInsurePacks response structure.
 * @class
 */
class DescribeInsurePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Guarantee package list
         * @type {Array.<KeyValueRecord> || null}
         */
        this.InsurePacks = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InsurePacks) {
            this.InsurePacks = new Array();
            for (let z in params.InsurePacks) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.InsurePacks[z]);
                this.InsurePacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUnblockIp request structure.
 * @class
 */
class CreateUnblockIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Type of the unblocking action (`user`: self-service unblocking, `auto`: automatic unblocking, `update`: unblocking by service upgrading, `bind`: unblocking by binding Anti-DDoS Pro instance)
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * ModifyResourceRenewFlag response structure.
 * @class
 */
class ModifyResourceRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sort by field
 * @class
 */
class OrderBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sort by field name. Valid values: [
bandwidth (bandwidth),
overloadCount (number of times of exceeding peak value)
]
         * @type {string || null}
         */
        this.Field = null;

        /**
         * Sorting order. Valid values: [asc (ascending), desc (descending)]
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
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeActionLog response structure.
 * @class
 */
class DescribeActionLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Record array
         * @type {Array.<KeyValueRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCTrend response structure.
 * @class
 */
class DescribeCCTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Metric. Valid values: [inqps (total requests peak), dropqps (attack requests peak)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Value array
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * Number of values
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSPolicyCase response structure.
 * @class
 */
class ModifyDDoSPolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCUrlAllow response structure.
 * @class
 */
class DescribeCCUrlAllowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field has been replaced by `RecordList` and should not be used
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * Total number of records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Returned Blocklist/allowlist record,
If "Key":"url", "Value": URL;
If "Key":"domain", "Value": domain name.
If "Key":"type", "Value" can be `white` (allowlist) or `black` (blocklist).
If "Key":"protocol", "Value": CC protection type (HTTP protection or HTTPS domain name protection);
         * @type {Array.<KeyValueRecord> || null}
         */
        this.RecordList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecIndex request structure.
 * @class
 */
class DescribeSecIndexRequest extends  AbstractModel {
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
 * ModifyCCFrequencyRulesStatus request structure.
 * @class
 */
class ModifyCCFrequencyRulesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Layer-7 forwarding rule ID, which can be obtained through the `DescribleL7Rules` API
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Enables or disable. Valid values: ["on", "off"]
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeDDoSCount response structure.
 * @class
 */
class DescribeDDoSCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Metric. Valid values: [traffic (attack protocol traffic in KB), pkg (number of attack protocol packets), classnum (number of attack events)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * `Key-Value` array. Valid values of `Key`:
If `MetricName` is `traffic`:
If `key` is `TcpKBSum`, it indicates the traffic of TCP packets in KB.
If `key` is `UdpKBSum`, it indicates the traffic of UDP packets in KB.
If `key` is `IcmpKBSum`, it indicates the traffic of ICMP packets in KB.
If `key` is `OtherKBSum`, it indicates the traffic of other packets in KB.

If `MetricName` is `pkg`:
If `key` is `TcpPacketSum`, it indicates the number of TCP packets.
If `key` is `UdpPacketSum`, it indicates the number of UDP packets.
If `key` is `IcmpPacketSum`, it indicates the number of ICMP packets.
If `key` is `OtherPacketSum`, it indicates the number of other packets.

If `MetricName` is `classnum`:
The value of `key` indicates the attack event type. When the `key` is `UNKNOWNFLOOD`, it indicates  unknown attack events.
         * @type {Array.<KeyValue> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL4RulesErrHealth response structure.
 * @class
 */
class DescribeL4RulesErrHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of exceptional rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Exceptional rule list. Returned value description: `Key` is the rule ID, while `Value` is the exceptional IP. Multiple IPs are separated by ","
         * @type {Array.<KeyValue> || null}
         */
        this.ErrHealths = null;

        /**
         * Exceptional rule list (which provides more error-related information). Returned value description:
If `key` is `RuleId`, `Value` indicates the rule ID;
If `key` is `Protocol`, `Value` indicates the forwarding protocol of a rule;
If `key` is `VirtualPort`, `Value` indicates the forwarding port of a rule;
If `Key` is `ErrMessage`, `Value` indicates the exception message for health check;
Exception message for health check in the format of `"SourceIp:1.1.1.1|SourcePort:1234|AbnormalStatTime:1570689065|AbnormalReason:connection time out|Interval:20|CheckNum:6|FailNum:6"`. Multiple error messages for the source IP should be separated by `,`,
SourceIp: real server IP, SourcePort: real server port, AbnormalStatTime: exception time, AbnormalReason: cause of exception, Interval: check frequency, CheckNum: number of checks, FailNum: number of failures;
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ExtErrHealths = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ErrHealths) {
            this.ErrHealths = new Array();
            for (let z in params.ErrHealths) {
                let obj = new KeyValue();
                obj.deserialize(params.ErrHealths[z]);
                this.ErrHealths.push(obj);
            }
        }

        if (params.ExtErrHealths) {
            this.ExtErrHealths = new Array();
            for (let z in params.ExtErrHealths) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ExtErrHealths[z]);
                this.ExtErrHealths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDDoSPolicy response structure.
 * @class
 */
class DeleteDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSTrend request structure.
 * @class
 */
class DescribeDDoSTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Metric. Valid values: [bps (attack traffic bandwidth), pps (attack packet rate)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Resource instance ID. If `Business` is `basic`, this field is not required (because Anti-DDoS Basic has no resource instance)
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDDoSPolicy response structure.
 * @class
 */
class ModifyDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource IP array
 * @class
 */
class ResourceIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP array
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * CC alarm threshold
 * @class
 */
class CCAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC alarm threshold
         * @type {number || null}
         */
        this.AlarmThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * DescribeResourceList request structure.
 * @class
 */
class DescribeResourceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (single IP), `bgp-multip`: Anti-DDoS Pro (multi-IP), `bgpip`: Anti-DDoS Advanced, `net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Region code search, which is optional. If no regions are to be specified, enter an empty array. If a region is to be specified, enter a region code, such as ["gz", "sh"]
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * Line search. This field can be optionally entered only when getting the list of Anti-DDoS Advanced resources. Valid values: [1 (BGP line), 2 (Nanjing Telecom), 3 (Nanjing Unicom), 99 (third-party partner line)]. Please enter an empty array when getting other products;
         * @type {Array.<number> || null}
         */
        this.Line = null;

        /**
         * Resource ID search, which is optional. If this field is not an empty array, it means to get the resource list of a specified resource;
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * Resource name search, which is optional. If this field is not an empty string, it means to search for resources by name;
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IP query list, which is optional. Resources will be queried by IP if the list is not empty.
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * Resource status search list, which is optional. Valid values: [0 (running), 1 (cleansing), 2 (blocking)]. No status search will be performed if an empty array is entered;
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Expiring resource search, which is optional. Valid values: [0 (no search), 1 (search for expiring resources)]
         * @type {number || null}
         */
        this.Expire = null;

        /**
         * Sort by field, which is optional
         * @type {Array.<OrderBy> || null}
         */
        this.OderBy = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * CNAME of Anti-DDoS Ultimate resource, which is optional and only valid for the Anti-DDoS Ultimate resource list;
         * @type {string || null}
         */
        this.CName = null;

        /**
         * Domain name of Anti-DDoS Ultimate resource, which is optional and only valid for the Anti-DDoS Ultimate resource list;
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

        if (params.OderBy) {
            this.OderBy = new Array();
            for (let z in params.OderBy) {
                let obj = new OrderBy();
                obj.deserialize(params.OderBy[z]);
                this.OderBy.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CName = 'CName' in params ? params.CName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * Layer-7 health check configuration
 * @class
 */
class L7HealthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding protocol. Valid values: [http, https, http/https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 1: enabled, 0: disabled
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Detection interval in seconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Number of exceptions in times
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * Number of health checks in times
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * Health check detection method. Valid values: HEAD, GET. Default VALUE: HEAD
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Healthy status code during health check. xx = 1, 2xx = 2, 3xx = 4, 4xx = 8, 5xx = 16. Multiple status code values are added up
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * URL of checked directory. Default value: /
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeDDoSNetEvInfo response structure.
 * @class
 */
class DescribeDDoSNetEvInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of TCP attack packets
         * @type {number || null}
         */
        this.TcpPacketSum = null;

        /**
         * Traffic of TCP attacks in KB
         * @type {number || null}
         */
        this.TcpKBSum = null;

        /**
         * Number of UDP attack packets
         * @type {number || null}
         */
        this.UdpPacketSum = null;

        /**
         * Traffic of UDP attacks in KB
         * @type {number || null}
         */
        this.UdpKBSum = null;

        /**
         * Number of ICMP attack packets
         * @type {number || null}
         */
        this.IcmpPacketSum = null;

        /**
         * Traffic of ICMP attacks in KB
         * @type {number || null}
         */
        this.IcmpKBSum = null;

        /**
         * Number of other attack packets
         * @type {number || null}
         */
        this.OtherPacketSum = null;

        /**
         * Traffic of other attacks in KB
         * @type {number || null}
         */
        this.OtherKBSum = null;

        /**
         * Total attack traffic in KB
         * @type {number || null}
         */
        this.TotalTraffic = null;

        /**
         * Attack traffic bandwidth peak
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * Attack packet rate peak
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * PCAP file download link
         * @type {Array.<string> || null}
         */
        this.PcapUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TcpPacketSum = 'TcpPacketSum' in params ? params.TcpPacketSum : null;
        this.TcpKBSum = 'TcpKBSum' in params ? params.TcpKBSum : null;
        this.UdpPacketSum = 'UdpPacketSum' in params ? params.UdpPacketSum : null;
        this.UdpKBSum = 'UdpKBSum' in params ? params.UdpKBSum : null;
        this.IcmpPacketSum = 'IcmpPacketSum' in params ? params.IcmpPacketSum : null;
        this.IcmpKBSum = 'IcmpKBSum' in params ? params.IcmpKBSum : null;
        this.OtherPacketSum = 'OtherPacketSum' in params ? params.OtherPacketSum : null;
        this.OtherKBSum = 'OtherKBSum' in params ? params.OtherKBSum : null;
        this.TotalTraffic = 'TotalTraffic' in params ? params.TotalTraffic : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.PcapUrl = 'PcapUrl' in params ? params.PcapUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleSets request structure.
 * @class
 */
class DescribeRuleSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource ID list
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * DescribeSchedulingDomainList request structure.
 * @class
 */
class DescribeSchedulingDomainListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items in a page. Returned results are not paged if you enter '0'.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Starting offset of the page. Value: (number of pages - 1) * items per page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * (Optional) Filter by specific domain name
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribleL7Rules response structure.
 * @class
 */
class DescribleL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule list
         * @type {Array.<L7RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * Total number of rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Health check configuration list
         * @type {Array.<L7RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L7RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCFrequencyRules response structure.
 * @class
 */
class CreateCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access frequency control rule ID for CC protection
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIpBlockList response structure.
 * @class
 */
class DescribeIpBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocked IP list
         * @type {Array.<IpBlockData> || null}
         */
        this.List = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new IpBlockData();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Disabled port in advanced DDoS policy
 * @class
 */
class DDoSPolicyPortLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: [tcp, udp, all]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Start destination port. Value range: [0,65535]
         * @type {number || null}
         */
        this.DPortStart = null;

        /**
         * End destination port, which must be greater than or equal to the start destination port. Value range: [0,65535]
         * @type {number || null}
         */
        this.DPortEnd = null;

        /**
         * Start source port. Value range: [0,65535]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SPortStart = null;

        /**
         * End source port, which must be greater than or equal to the start source port. Value range: [0,65535]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SPortEnd = null;

        /**
         * Action to be executed. Valid values: [drop (discard) , transmit (forward)]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Type of port to be disabled. Valid values: [0 (destination port range), 1 (source port range), 2 (destination port range and source port range)]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DPortStart = 'DPortStart' in params ? params.DPortStart : null;
        this.DPortEnd = 'DPortEnd' in params ? params.DPortEnd : null;
        this.SPortStart = 'SPortStart' in params ? params.SPortStart : null;
        this.SPortEnd = 'SPortEnd' in params ? params.SPortEnd : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

    }
}

/**
 * DescribeSchedulingDomainList response structure.
 * @class
 */
class DescribeSchedulingDomainListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of scheduling domain names
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of scheduling domain names
         * @type {Array.<SchedulingDomain> || null}
         */
        this.DomainList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new SchedulingDomain();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetTrend response structure.
 * @class
 */
class DescribeDDoSNetTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Metric. Valid values: [bps (attack traffic bandwidth), pps (attack packet rate)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Value array
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * Number of values
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnBlockStatis response structure.
 * @class
 */
class DescribeUnBlockStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of unblocking chances
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of used chances
         * @type {number || null}
         */
        this.Used = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Statistics end time
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
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribleL7Rules request structure.
 * @class
 */
class DescribleL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule ID, which is optional. If this field is entered, the specified rule will be obtained
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

        /**
         * Number of entries per page. A value of 0 means no pagination
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page start offset, whose value is (page number - 1) * number of entries per page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Domain name search, which is optional. Enter it if you need to search for domain names
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding protocol search, which is optional. Valid values: [http, https, http/https]
         * @type {Array.<string> || null}
         */
        this.ProtocolList = null;

        /**
         * Status search, which is optional. Valid values: [0 (successfully configured rule), 1 (rule configuration taking effect), 2 (rule configuration failed), 3 (rule deletion taking effect), 5 (rule deletion failed), 6 (rule waiting for configuration), 7 (rule waiting for deletion), 8 (rule waiting for certificate configuration)]
         * @type {Array.<number> || null}
         */
        this.StatusList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.StatusList = 'StatusList' in params ? params.StatusList : null;

    }
}

/**
 * DescribeCCIpAllowDeny request structure.
 * @class
 */
class DescribeCCIpAllowDenyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Blocklist or allowlist. Valid values: [white (allowlist), black (blocklist)]
Note: this array can only have one value. It cannot get the blocklist and allowlist at the same time
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * HTTP or HTTPS CC protection, which is optional. Valid values: [http (HTTP CC protection), https (HTTPS CC protection)];
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeSecIndex response structure.
 * @class
 */
class DescribeSecIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field value as follows:
AttackIpCount: number of attacked IPs
AttackCount: number of attacks
BlockCount: number of blockings
MaxMbps: attack bandwidth peak in Mbps
IpNum: IP statistics
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * Start time of the current month
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * End time of the current month
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Layer-7 rule
 * @class
 */
class L7RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding protocol. Valid values: [http, https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Forwarding domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding method. Valid values: [1 (forwarding via domain name), 2 (forwarding via IP)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Session persistence duration in seconds
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * Forward list
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * Load balancing method. Valid value: [1 (weighted round robin)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * Session persistence status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * Rule ID, which is optional when adding a new rule but required when modifying or deleting a rule;
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Certificate source, which is required if the forwarding protocol is HTTPS. Valid value: [2 (Tencent Cloud-hosted certificate)]. If the forwarding protocol is HTTP, 0 can be entered for this field
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * If the certificate is a Tencent Cloud-hosted certificate, this field must be entered with the hosted certificate ID
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * If the certificate is an external certificate, this field must be entered with the certificate content. (As external certificates are no longer supported, this field has been disused and does not need to be entered)
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * If the certificate is an external certificate, this field must be entered with the certificate key. (As external certificates are no longer supported, this field has been disused and does not need to be entered)
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule status. Valid values: [0 (successfully configured rule), 1 (rule configuration taking effect), 2 (rule configuration failed), 3 (rule deletion taking effect), 5 (rule deletion failed), 6 (rule waiting for configuration), 7 (rule waiting for deletion), 8 (rule waiting for certificate configuration)]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CC protection status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.CCStatus = null;

        /**
         * HTTPS CC protection status. Valid values: [0 (disabled), 1 (enabled)]
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * HTTPS CC protection threshold
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * HTTPS CC protection level
         * @type {string || null}
         */
        this.CCLevel = null;

        /**
         * Whether to enable **Forward HTTPS requests via HTTP**. Valid values: `0` (disabled) and `1` (enabled). The default value is disabled.
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

        /**
         * Access port number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VirtualPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;

    }
}

/**
 * IP unblocking record
 * @class
 */
class IpUnBlockData extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Blocked time
         * @type {string || null}
         */
        this.BlockTime = null;

        /**
         * Unblocked time (actual)
         * @type {string || null}
         */
        this.UnBlockTime = null;

        /**
         * Type of the unblocking action (`user`: self-service unblocking, `auto`: automatic unblocking, `update`: unblocking by service upgrading, `bind`: unblocking by binding Anti-DDoS Pro instance)
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.UnBlockTime = 'UnBlockTime' in params ? params.UnBlockTime : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * ModifyDDoSLevel request structure.
 * @class
 */
class ModifyDDoSLevelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * get (read protection level), set (modify protection level);
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Protection level, which is required if `Method` is `set`. Valid values: [low,middle,high]
         * @type {string || null}
         */
        this.DDoSLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;

    }
}

/**
 * Packet filter in advanced DDoS policy
 * @class
 */
class DDoSPolicyPacketFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: [tcp, udp, icmp, all]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Start source port. Value range: [0,65535]
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * End source port. Value range: [0,65535]
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Start destination port. Value range: [0,65535]
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * End destination port. Value range: [0,65535]
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Minimum packet length. Value range: [0,1500]
         * @type {number || null}
         */
        this.PktlenMin = null;

        /**
         * Maximum packet length. Value range: [0,1500]
         * @type {number || null}
         */
        this.PktlenMax = null;

        /**
         * Whether to detect the payload. Valid values: [
begin_l3 (IP header)
begin_l4 (TCP header)
begin_l5 (payload)
no_match (no check)
]
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * Whether it is a regular expression. Valid values: [sunday (keyword), pcre (regular expression)]
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Keyword or regular expression
         * @type {string || null}
         */
        this.Str = null;

        /**
         * Detection depth. Value range: [0,1500]
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * Detection offset. Value range: [0,1500]
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to include. Valid values: [0 (no), 1 (yes)]
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * Policy action. Valid values: [drop, drop_black, drop_rst, drop_black_rst, transmit]
         * @type {string || null}
         */
        this.Action = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PktlenMin = 'PktlenMin' in params ? params.PktlenMin : null;
        this.PktlenMax = 'PktlenMax' in params ? params.PktlenMax : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * DeleteCCFrequencyRules request structure.
 * @class
 */
class DeleteCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Access frequency control rule ID for CC protection
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;

    }
}

/**
 * DescribeDDoSNetIpLog response structure.
 * @class
 */
class DescribeDDoSNetIpLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type (`net`: Anti-DDoS Ultimate)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP attack log, which is a `KeyValue` array. Valid values of `Key-Value`:
If `Key` is `LogTime`, `Value` indicates the IP log time
If `Key` is `LogMessage`, `Value` indicates the IP log content
         * @type {Array.<KeyValueRecord> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCFrequencyRules request structure.
 * @class
 */
class CreateCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Layer-7 forwarding rule ID, which can be obtained through the `DescribleL7Rules` API
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Matching rule. Valid values: ["include" (prefix match), "equal" (exact match)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Reference period in seconds. Valid values: [10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of access requests. Value range: [1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * Action take. Valid values: ["alg" (CAPTCHA), "drop" (blocking)]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * Execution duration in seconds. Valid range: [1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

        /**
         * URI string, which must start with `/`, such as `/abc/a.php`. Length limit: 31. If URI is `/`, only prefix match can be selected as the matching mode;
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * `User-Agent` string. Length limit: 80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie string. Length limit: 40
         * @type {string || null}
         */
        this.Cookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;

    }
}

/**
 * DeleteL7Rules response structure.
 * @class
 */
class DeleteL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7HealthConfig response structure.
 * @class
 */
class CreateL7HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSTrend response structure.
 * @class
 */
class DescribeDDoSTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Metric. Valid values: [bps (attack traffic bandwidth), pps (attack packet rate)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Value array. The unit for attack traffic bandwidth is Mbps, and that for the packet rate is pps.
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * Number of values
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribleRegionCount response structure.
 * @class
 */
class DescribleRegionCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of resource instances in region
         * @type {Array.<RegionInstanceCount> || null}
         */
        this.RegionList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new RegionInstanceCount();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSThreshold request structure.
 * @class
 */
class ModifyDDoSThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DDoS cleansing threshold. Valid values: [0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];
If the value is set to 0, the default value will be used;
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * DDoS attack event record
 * @class
 */
class DDoSEventRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Attack start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Attack end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Maximum attack bandwidth
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * Maximum attack packet rate
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * Attack type
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Whether the IP is blocked. Valid values: [1 (yes), 0 (no), 2 (invalid value)]
         * @type {number || null}
         */
        this.BlockFlag = null;

        /**
         * Whether the elastic protection bandwidth is exceeded. Valid values: [yes (yes), no (no), empty string (unknown value)]
         * @type {string || null}
         */
        this.OverLoad = null;

        /**
         * Attack status. Valid values: [0 (ongoing), 1 (ended)]
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * Resource name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Attack event ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.BlockFlag = 'BlockFlag' in params ? params.BlockFlag : null;
        this.OverLoad = 'OverLoad' in params ? params.OverLoad : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribleL4Rules response structure.
 * @class
 */
class DescribleL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding rule list
         * @type {Array.<L4RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * Total number of rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Health check configuration list
         * @type {Array.<L4RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L4RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4Rules response structure.
 * @class
 */
class ModifyL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDDoSPolicy request structure.
 * @class
 */
class DeleteDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

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
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CreateL7RulesUpload response structure.
 * @class
 */
class CreateL7RulesUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstanceName request structure.
 * @class
 */
class CreateInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (single IP); `bgp-multip`: Anti-DDoS Pro (multi-IP), `net`: Anti-DDoS Ultimate
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Instance name. Length limit: 32 characters
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeCCTrend request structure.
 * @class
 */
class DescribeCCTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgpip`: Anti-DDoS Advanced; `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP); `net`: Anti-DDoS Ultimate; `basic`: Anti-DDoS Basic
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Resource IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Metric. Valid values: [inqps (total requests peak), dropqps (attack requests peak)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical granularity. Valid values: [300 (5-minute), 3600 (hourly), 86400 (daily)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistics start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Statistics end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Resource instance ID. If `Business` is `basic`, this field is not required (because Anti-DDoS Basic has no resource instance)
         * @type {string || null}
         */
        this.Id = null;

        /**
         * (Optional) Domain name
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

module.exports = {
    ModifyDDoSPolicyCaseRequest: ModifyDDoSPolicyCaseRequest,
    DescribeIpUnBlockListRequest: DescribeIpUnBlockListRequest,
    DeleteDDoSPolicyCaseRequest: DeleteDDoSPolicyCaseRequest,
    CreateDDoSPolicyResponse: CreateDDoSPolicyResponse,
    DeleteL7RulesRequest: DeleteL7RulesRequest,
    CreateBoundIPRequest: CreateBoundIPRequest,
    DescribeCCEvListRequest: DescribeCCEvListRequest,
    DescribeTransmitStatisResponse: DescribeTransmitStatisResponse,
    DDosPolicy: DDosPolicy,
    ProtocolPort: ProtocolPort,
    DescribeDDoSNetTrendRequest: DescribeDDoSNetTrendRequest,
    DescribeUnBlockStatisRequest: DescribeUnBlockStatisRequest,
    ModifyCCUrlAllowResponse: ModifyCCUrlAllowResponse,
    DescribeBasicDeviceThresholdResponse: DescribeBasicDeviceThresholdResponse,
    DescribeCCAlarmThresholdResponse: DescribeCCAlarmThresholdResponse,
    DescribeDDoSNetEvListRequest: DescribeDDoSNetEvListRequest,
    DeleteL4RulesResponse: DeleteL4RulesResponse,
    ModifyNewDomainRulesRequest: ModifyNewDomainRulesRequest,
    DDoSAlarmThreshold: DDoSAlarmThreshold,
    DescribePolicyCaseResponse: DescribePolicyCaseResponse,
    DescribeResIpListRequest: DescribeResIpListRequest,
    ModifyCCLevelRequest: ModifyCCLevelRequest,
    DeleteCCSelfDefinePolicyRequest: DeleteCCSelfDefinePolicyRequest,
    DescribeCCUrlAllowRequest: DescribeCCUrlAllowRequest,
    KeyValue: KeyValue,
    IpBlackWhite: IpBlackWhite,
    ModifyDDoSAlarmThresholdRequest: ModifyDDoSAlarmThresholdRequest,
    CreateDDoSPolicyRequest: CreateDDoSPolicyRequest,
    ModifyCCThresholdResponse: ModifyCCThresholdResponse,
    ModifyNetReturnSwitchResponse: ModifyNetReturnSwitchResponse,
    DescribeActionLogRequest: DescribeActionLogRequest,
    CreateL7RuleCertRequest: CreateL7RuleCertRequest,
    DescribeBGPIPL7RuleMaxCntResponse: DescribeBGPIPL7RuleMaxCntResponse,
    DescribePcapResponse: DescribePcapResponse,
    DescribePackIndexResponse: DescribePackIndexResponse,
    DescribeDDoSAttackSourceRequest: DescribeDDoSAttackSourceRequest,
    DescribeDDoSCountRequest: DescribeDDoSCountRequest,
    RegionInstanceCount: RegionInstanceCount,
    WaterPrintKey: WaterPrintKey,
    DescribeDDoSNetIpLogRequest: DescribeDDoSNetIpLogRequest,
    ModifyNewL4RuleResponse: ModifyNewL4RuleResponse,
    ModifyNewDomainRulesResponse: ModifyNewDomainRulesResponse,
    DescribeDDoSUsedStatisResponse: DescribeDDoSUsedStatisResponse,
    DescribeBasicCCThresholdRequest: DescribeBasicCCThresholdRequest,
    CreateDDoSPolicyCaseResponse: CreateDDoSPolicyCaseResponse,
    DescribeIPProductInfoResponse: DescribeIPProductInfoResponse,
    ModifyDDoSSwitchResponse: ModifyDDoSSwitchResponse,
    IpBlockData: IpBlockData,
    DescribeCCSelfDefinePolicyRequest: DescribeCCSelfDefinePolicyRequest,
    ModifyDDoSDefendStatusRequest: ModifyDDoSDefendStatusRequest,
    DescribeRuleSetsResponse: DescribeRuleSetsResponse,
    DescribeBaradDataResponse: DescribeBaradDataResponse,
    DescribeDDoSEvInfoRequest: DescribeDDoSEvInfoRequest,
    DescribeDDoSAttackIPRegionMapResponse: DescribeDDoSAttackIPRegionMapResponse,
    ModifyL4KeepTimeResponse: ModifyL4KeepTimeResponse,
    ModifyL7RulesResponse: ModifyL7RulesResponse,
    DescribeL7HealthConfigRequest: DescribeL7HealthConfigRequest,
    BoundIpInfo: BoundIpInfo,
    DescribePcapRequest: DescribePcapRequest,
    DescribeDDoSAlarmThresholdResponse: DescribeDDoSAlarmThresholdResponse,
    KeyValueRecord: KeyValueRecord,
    DescribeBasicDeviceThresholdRequest: DescribeBasicDeviceThresholdRequest,
    ModifyResBindDDoSPolicyResponse: ModifyResBindDDoSPolicyResponse,
    ModifyDDoSWaterKeyRequest: ModifyDDoSWaterKeyRequest,
    ModifyCCLevelResponse: ModifyCCLevelResponse,
    DescribeBaradDataRequest: DescribeBaradDataRequest,
    DescribeDDoSDefendStatusResponse: DescribeDDoSDefendStatusResponse,
    DescribeCCSelfDefinePolicyResponse: DescribeCCSelfDefinePolicyResponse,
    CCPolicy: CCPolicy,
    ModifyDDoSAIStatusResponse: ModifyDDoSAIStatusResponse,
    DescribeDDoSNetEvInfoRequest: DescribeDDoSNetEvInfoRequest,
    ModifyResourceRenewFlagRequest: ModifyResourceRenewFlagRequest,
    DescribeCCEvListResponse: DescribeCCEvListResponse,
    DescribeCCFrequencyRulesRequest: DescribeCCFrequencyRulesRequest,
    CreateL4HealthConfigRequest: CreateL4HealthConfigRequest,
    DescribeBGPIPL7RuleMaxCntRequest: DescribeBGPIPL7RuleMaxCntRequest,
    ModifyDDoSPolicyNameResponse: ModifyDDoSPolicyNameResponse,
    DescribeCCAlarmThresholdRequest: DescribeCCAlarmThresholdRequest,
    ModifyCCUrlAllowRequest: ModifyCCUrlAllowRequest,
    ModifyDDoSAlarmThresholdResponse: ModifyDDoSAlarmThresholdResponse,
    ModifyDDoSLevelResponse: ModifyDDoSLevelResponse,
    ModifyDDoSWaterKeyResponse: ModifyDDoSWaterKeyResponse,
    DescribeCCIpAllowDenyResponse: DescribeCCIpAllowDenyResponse,
    DescribeDDoSIpLogResponse: DescribeDDoSIpLogResponse,
    CCRule: CCRule,
    DescribeResIpListResponse: DescribeResIpListResponse,
    ModifyCCIpAllowDenyRequest: ModifyCCIpAllowDenyRequest,
    CreateInstanceNameResponse: CreateInstanceNameResponse,
    DescribeDDoSDefendStatusRequest: DescribeDDoSDefendStatusRequest,
    HttpStatusMap: HttpStatusMap,
    ModifyL4HealthRequest: ModifyL4HealthRequest,
    ModifyCCHostProtectionResponse: ModifyCCHostProtectionResponse,
    CreateL4RulesResponse: CreateL4RulesResponse,
    DescribeInsurePacksRequest: DescribeInsurePacksRequest,
    DescribeDDoSNetCountRequest: DescribeDDoSNetCountRequest,
    Paging: Paging,
    ModifyCCSelfDefinePolicyRequest: ModifyCCSelfDefinePolicyRequest,
    L4HealthConfig: L4HealthConfig,
    CreateCCSelfDefinePolicyRequest: CreateCCSelfDefinePolicyRequest,
    SuccessCode: SuccessCode,
    DescribleL4RulesRequest: DescribleL4RulesRequest,
    L4RuleEntry: L4RuleEntry,
    DescribeL4HealthConfigRequest: DescribeL4HealthConfigRequest,
    CreateL7CCRuleResponse: CreateL7CCRuleResponse,
    ModifyCCFrequencyRulesStatusResponse: ModifyCCFrequencyRulesStatusResponse,
    ModifyNetReturnSwitchRequest: ModifyNetReturnSwitchRequest,
    CreateL7CCRuleRequest: CreateL7CCRuleRequest,
    CreateL7RulesRequest: CreateL7RulesRequest,
    DescribeBizHttpStatusResponse: DescribeBizHttpStatusResponse,
    DescribeDDoSNetEvListResponse: DescribeDDoSNetEvListResponse,
    CreateL4RulesRequest: CreateL4RulesRequest,
    ModifyNewL4RuleRequest: ModifyNewL4RuleRequest,
    DescribeL4RulesErrHealthRequest: DescribeL4RulesErrHealthRequest,
    L4RuleSource: L4RuleSource,
    CreateBasicDDoSAlarmThresholdResponse: CreateBasicDDoSAlarmThresholdResponse,
    CreateNetReturnResponse: CreateNetReturnResponse,
    DeleteL4RulesRequest: DeleteL4RulesRequest,
    ModifyCCAlarmThresholdResponse: ModifyCCAlarmThresholdResponse,
    CreateL7HealthConfigRequest: CreateL7HealthConfigRequest,
    DescribeIPProductInfoRequest: DescribeIPProductInfoRequest,
    DescribeL4HealthConfigResponse: DescribeL4HealthConfigResponse,
    CreateL7RuleCertResponse: CreateL7RuleCertResponse,
    DescribeDDoSAttackIPRegionMapRequest: DescribeDDoSAttackIPRegionMapRequest,
    ModifyDDoSPolicyRequest: ModifyDDoSPolicyRequest,
    DescribeSourceIpSegmentRequest: DescribeSourceIpSegmentRequest,
    DescribeSourceIpSegmentResponse: DescribeSourceIpSegmentResponse,
    ModifyResBindDDoSPolicyRequest: ModifyResBindDDoSPolicyRequest,
    L7RuleHealth: L7RuleHealth,
    CreateL7RulesUploadRequest: CreateL7RulesUploadRequest,
    L4RuleHealth: L4RuleHealth,
    ModifyCCFrequencyRulesRequest: ModifyCCFrequencyRulesRequest,
    ModifyCCPolicySwitchResponse: ModifyCCPolicySwitchResponse,
    ModifyDDoSThresholdResponse: ModifyDDoSThresholdResponse,
    CreateDDoSPolicyCaseRequest: CreateDDoSPolicyCaseRequest,
    ModifyCCIpAllowDenyResponse: ModifyCCIpAllowDenyResponse,
    ModifyCCAlarmThresholdRequest: ModifyCCAlarmThresholdRequest,
    DescribeCCFrequencyRulesResponse: DescribeCCFrequencyRulesResponse,
    DescribeDDoSEvListRequest: DescribeDDoSEvListRequest,
    DescribeBasicCCThresholdResponse: DescribeBasicCCThresholdResponse,
    ModifyDDoSPolicyNameRequest: ModifyDDoSPolicyNameRequest,
    DescribeIpUnBlockListResponse: DescribeIpUnBlockListResponse,
    ModifyCCPolicySwitchRequest: ModifyCCPolicySwitchRequest,
    ModifyCCFrequencyRulesResponse: ModifyCCFrequencyRulesResponse,
    ModifyL4KeepTimeRequest: ModifyL4KeepTimeRequest,
    SchedulingDomain: SchedulingDomain,
    ModifyCCHostProtectionRequest: ModifyCCHostProtectionRequest,
    DescribeIpBlockListRequest: DescribeIpBlockListRequest,
    DescribeDDoSNetCountResponse: DescribeDDoSNetCountResponse,
    CreateL7RulesResponse: CreateL7RulesResponse,
    BaradData: BaradData,
    ModifyDDoSSwitchRequest: ModifyDDoSSwitchRequest,
    CreateNetReturnRequest: CreateNetReturnRequest,
    ModifyDDoSAIStatusRequest: ModifyDDoSAIStatusRequest,
    DescribeDDoSAttackSourceResponse: DescribeDDoSAttackSourceResponse,
    DescribeResourceListResponse: DescribeResourceListResponse,
    ModifyCCThresholdRequest: ModifyCCThresholdRequest,
    ModifyDDoSDefendStatusResponse: ModifyDDoSDefendStatusResponse,
    CreateBasicDDoSAlarmThresholdRequest: CreateBasicDDoSAlarmThresholdRequest,
    CCRuleConfig: CCRuleConfig,
    DescribeDDoSEvInfoResponse: DescribeDDoSEvInfoResponse,
    DescribleRegionCountRequest: DescribleRegionCountRequest,
    ModifyCCSelfDefinePolicyResponse: ModifyCCSelfDefinePolicyResponse,
    DescribeDDoSIpLogRequest: DescribeDDoSIpLogRequest,
    DescribeDDoSAlarmThresholdRequest: DescribeDDoSAlarmThresholdRequest,
    DescribePolicyCaseRequest: DescribePolicyCaseRequest,
    WaterPrintPolicy: WaterPrintPolicy,
    CreateNewL7RulesUploadRequest: CreateNewL7RulesUploadRequest,
    DeleteCCSelfDefinePolicyResponse: DeleteCCSelfDefinePolicyResponse,
    DescribeDDoSPolicyResponse: DescribeDDoSPolicyResponse,
    DeleteCCFrequencyRulesResponse: DeleteCCFrequencyRulesResponse,
    DeleteDDoSPolicyCaseResponse: DeleteDDoSPolicyCaseResponse,
    CreateL4HealthConfigResponse: CreateL4HealthConfigResponse,
    ModifyL7RulesRequest: ModifyL7RulesRequest,
    ModifyElasticLimitResponse: ModifyElasticLimitResponse,
    CreateNewL7RulesUploadResponse: CreateNewL7RulesUploadResponse,
    DDoSAttackSourceRecord: DDoSAttackSourceRecord,
    CreateUnblockIpResponse: CreateUnblockIpResponse,
    DescribePackIndexRequest: DescribePackIndexRequest,
    ModifyL4RulesRequest: ModifyL4RulesRequest,
    DescribeDDoSEvListResponse: DescribeDDoSEvListResponse,
    DescribeDDoSPolicyRequest: DescribeDDoSPolicyRequest,
    DescribeL7HealthConfigResponse: DescribeL7HealthConfigResponse,
    CCFrequencyRule: CCFrequencyRule,
    CreateCCSelfDefinePolicyResponse: CreateCCSelfDefinePolicyResponse,
    NewL7RuleEntry: NewL7RuleEntry,
    DescribeBizHttpStatusRequest: DescribeBizHttpStatusRequest,
    CreateBoundIPResponse: CreateBoundIPResponse,
    DescribeDDoSUsedStatisRequest: DescribeDDoSUsedStatisRequest,
    DDoSPolicyDropOption: DDoSPolicyDropOption,
    ModifyElasticLimitRequest: ModifyElasticLimitRequest,
    ModifyL4HealthResponse: ModifyL4HealthResponse,
    CCEventRecord: CCEventRecord,
    DescribeTransmitStatisRequest: DescribeTransmitStatisRequest,
    DescribeInsurePacksResponse: DescribeInsurePacksResponse,
    CreateUnblockIpRequest: CreateUnblockIpRequest,
    ModifyResourceRenewFlagResponse: ModifyResourceRenewFlagResponse,
    OrderBy: OrderBy,
    DescribeActionLogResponse: DescribeActionLogResponse,
    DescribeCCTrendResponse: DescribeCCTrendResponse,
    ModifyDDoSPolicyCaseResponse: ModifyDDoSPolicyCaseResponse,
    DescribeCCUrlAllowResponse: DescribeCCUrlAllowResponse,
    DescribeSecIndexRequest: DescribeSecIndexRequest,
    ModifyCCFrequencyRulesStatusRequest: ModifyCCFrequencyRulesStatusRequest,
    DescribeDDoSCountResponse: DescribeDDoSCountResponse,
    DescribeL4RulesErrHealthResponse: DescribeL4RulesErrHealthResponse,
    DeleteDDoSPolicyResponse: DeleteDDoSPolicyResponse,
    DescribeDDoSTrendRequest: DescribeDDoSTrendRequest,
    ModifyDDoSPolicyResponse: ModifyDDoSPolicyResponse,
    ResourceIp: ResourceIp,
    CCAlarmThreshold: CCAlarmThreshold,
    DescribeResourceListRequest: DescribeResourceListRequest,
    L7HealthConfig: L7HealthConfig,
    DescribeDDoSNetEvInfoResponse: DescribeDDoSNetEvInfoResponse,
    DescribeRuleSetsRequest: DescribeRuleSetsRequest,
    DescribeSchedulingDomainListRequest: DescribeSchedulingDomainListRequest,
    DescribleL7RulesResponse: DescribleL7RulesResponse,
    CreateCCFrequencyRulesResponse: CreateCCFrequencyRulesResponse,
    DescribeIpBlockListResponse: DescribeIpBlockListResponse,
    DDoSPolicyPortLimit: DDoSPolicyPortLimit,
    DescribeSchedulingDomainListResponse: DescribeSchedulingDomainListResponse,
    DescribeDDoSNetTrendResponse: DescribeDDoSNetTrendResponse,
    DescribeUnBlockStatisResponse: DescribeUnBlockStatisResponse,
    DescribleL7RulesRequest: DescribleL7RulesRequest,
    DescribeCCIpAllowDenyRequest: DescribeCCIpAllowDenyRequest,
    DescribeSecIndexResponse: DescribeSecIndexResponse,
    L7RuleEntry: L7RuleEntry,
    IpUnBlockData: IpUnBlockData,
    ModifyDDoSLevelRequest: ModifyDDoSLevelRequest,
    DDoSPolicyPacketFilter: DDoSPolicyPacketFilter,
    DeleteCCFrequencyRulesRequest: DeleteCCFrequencyRulesRequest,
    DescribeDDoSNetIpLogResponse: DescribeDDoSNetIpLogResponse,
    CreateCCFrequencyRulesRequest: CreateCCFrequencyRulesRequest,
    DeleteL7RulesResponse: DeleteL7RulesResponse,
    CreateL7HealthConfigResponse: CreateL7HealthConfigResponse,
    DescribeDDoSTrendResponse: DescribeDDoSTrendResponse,
    DescribleRegionCountResponse: DescribleRegionCountResponse,
    ModifyDDoSThresholdRequest: ModifyDDoSThresholdRequest,
    DDoSEventRecord: DDoSEventRecord,
    DescribleL4RulesResponse: DescribleL4RulesResponse,
    ModifyL4RulesResponse: ModifyL4RulesResponse,
    DeleteDDoSPolicyRequest: DeleteDDoSPolicyRequest,
    CreateL7RulesUploadResponse: CreateL7RulesUploadResponse,
    CreateInstanceNameRequest: CreateInstanceNameRequest,
    DescribeCCTrendRequest: DescribeCCTrendRequest,

}
