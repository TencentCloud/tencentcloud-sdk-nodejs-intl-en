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
 * DescribeNatFwInstance request structure.
 * @class
 */
class DescribeNatFwInstanceRequest extends  AbstractModel {
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
 * ModifyNatFwVpcDnsSwitch response structure.
 * @class
 */
class ModifyNatFwVpcDnsSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Modified successfully
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstanceWithRegion request structure.
 * @class
 */
class DescribeNatFwInstanceWithRegionRequest extends  AbstractModel {
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
 * ModifyNatAcRule response structure.
 * @class
 */
class ModifyNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of new rules that have been successfully modified.
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleOverview response structure.
 * @class
 */
class DescribeRuleOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * Number of blocking rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StrategyNum = null;

        /**
         * Number of enabled rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StartRuleNum = null;

        /**
         * Number of disabled rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StopRuleNum = null;

        /**
         * Remaining quota
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.RemainingNum = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.StrategyNum = 'StrategyNum' in params ? params.StrategyNum : null;
        this.StartRuleNum = 'StartRuleNum' in params ? params.StartRuleNum : null;
        this.StopRuleNum = 'StopRuleNum' in params ? params.StopRuleNum : null;
        this.RemainingNum = 'RemainingNum' in params ? params.RemainingNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NAT firewall DNAT rules
 * @class
 */
class CfwNatDnatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network protocol. Valid values: TCP or UDP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Elastic IP.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * Public port.
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * Private address.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Private port.
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * The description of NAT firewall forwarding rules.
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
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Firewall IP range information
 * @class
 */
class FwCidrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IP range type of the firewall. Values: `VpcSelf` (VPC IP range preferred); `Assis` (Secondary IP range preferred); `Custom` (Custom IP range)
         * @type {string || null}
         */
        this.FwCidrType = null;

        /**
         * The IP segment assigned for each VPC.
         * @type {Array.<FwVpcCidr> || null}
         */
        this.FwCidrLst = null;

        /**
         * The IP segment used by other firewalls. Specify this if you want to assign a dedicated segment for the firewall.
         * @type {string || null}
         */
        this.ComFwCidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FwCidrType = 'FwCidrType' in params ? params.FwCidrType : null;

        if (params.FwCidrLst) {
            this.FwCidrLst = new Array();
            for (let z in params.FwCidrLst) {
                let obj = new FwVpcCidr();
                obj.deserialize(params.FwCidrLst[z]);
                this.FwCidrLst.push(obj);
            }
        }
        this.ComFwCidr = 'ComFwCidr' in params ? params.ComFwCidr : null;

    }
}

/**
 * Most frequent attacker statistics
 
 * @class
 */
class StaticInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Asset ID
         * @type {string || null}
         */
        this.InsID = null;

        /**
         * Asset name
         * @type {string || null}
         */
        this.InsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.InsID = 'InsID' in params ? params.InsID : null;
        this.InsName = 'InsName' in params ? params.InsName : null;

    }
}

/**
 * DescribeNatAcRule response structure.
 * @class
 */
class DescribeNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * NAT access control list data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescAcItem> || null}
         */
        this.Data = null;

        /**
         * Total number of entries returned without filtering.
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescAcItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPublicIPSwitchStatus response structure.
 * @class
 */
class ModifyPublicIPSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return message
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Error code. 0: success; non-0: failed
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatAcRule request structure.
 * @class
 */
class ModifyNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rules to be modified.
         * @type {Array.<CreateNatRuleItem> || null}
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new CreateNatRuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyAcRule response structure.
 * @class
 */
class ModifyAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: operation successful; non-0: operation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returns redundant information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatSequenceRules request structure.
 * @class
 */
class ModifyNatSequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule sequence number. Values: `OrderIndex` (Original sequence number), `NewOrderIndex` (New sequence number)
         * @type {Array.<RuleChangeItem> || null}
         */
        this.RuleChangeItems = null;

        /**
         * Rule direction. Values: `1` (Inbound) and `0` (Outbound)
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleChangeItems) {
            this.RuleChangeItems = new Array();
            for (let z in params.RuleChangeItems) {
                let obj = new RuleChangeItem();
                obj.deserialize(params.RuleChangeItems[z]);
                this.RuleChangeItems.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeTableStatus response structure.
 * @class
 */
class DescribeTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: normal; non-0: abnormal
Note: This field may return `null`, indicating that no valid value was found.
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
 * AddAcRule request structure.
 * @class
 */
class AddAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * -1: lowest priority; 1: highest priority
         * @type {string || null}
         */
        this.OrderIndex = null;

        /**
         * The action that Cloud Firewall performs on the traffic. Valid values:
accept: allow
drop: deny
log: observe
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * The traffic direction for access control rules. Valid values:
in: incoming traffic access control
out: outgoing traffic access control
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * The description of access control rules.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The type of source address in access control rules. Valid values:
net: source IP or range (IP or CIDR)
location: source region
template: CFW address template
instance: instance ID
vendor: Cloud vendor
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The source address in the access control policy. 
When `SourceType` is `net`, `SourceContent` is the source IP or CIDR block.
For example: 1.1.1.0/24

When `SourceType` is `template`, `SourceContent` must be the source address template ID.

When `SourceType` is `location`, `SourceContent` is the source region. 
For example, ["BJ11", "ZB"]

When `SourceType` is `instance`, `SourceContent` is the public IP of the instance.
For example, ins-xxxxx

When `SourceType` is `vendor`, `SourceContent` is the cloud service provider.
Values: `aws`, `huawei`, `tencent`, `aliyun`, `azure` and `all`. 
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * The type of destination address in access control rules. Valid values:
net: destination IP or range (IP or CIDR)
location: source region
template: CFW address template
instance: instance ID
vendor: Cloud vendor
domain: Domain name or IP.
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * The destination address in the access control policy. 
When `DestType` is `net`, `DestContent` is the destination IP or CIDR block.
For example: 1.1.1.0/24

When `DestType` is `template`, `DestContent` is the destination address template ID.

When `DestType` is `location`, `DestContent` is the destination region. 
For example, ["BJ11", "ZB"]

When `DestType` is `instance`, `DestContent` is the public IP of the instance.
For example, ins-xxxxx

When `DestType` is `domain`, `DestContent` is the domain name associated with the instance.
For example, *.qq.com

When `DestType`, `DestContent` is the selected cloud service provider.
Values: `aws`, `huawei`, `tencent`, `aliyun`, `azure` and `all`. 
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * The port to apply access control rules. Valid values:
-1/-1: all ports
80,443: 80 or 443
         * @type {string || null}
         */
        this.Port = null;

        /**
         * The protocol type of traffic in access control rules. Valid value: TCP. Only TCP is supported for edge firewall rules. If this parameter is not specified, it defaults to TCP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The Layer 7 protocol. Valid values:
HTTP/HTTPS
TLS/SSL
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Indicates whether to enable the rules. Default: enable. Valid values:
true: enable; false: disable
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * IP protection status
 * @class
 */
class IPDefendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Protection status. 1: enabled; -1: incorrect address; others: disabled
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
        this.IP = 'IP' in params ? params.IP : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Allowlist or blocklist for intrusion prevention
 * @class
 */
class BlockIgnoreRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Rule IP.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ioc = null;

        /**
         * Threat level.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Source event name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Direction. Valid values: 0: outbound; 1: inbound.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Protocol.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Rule type. Valid values: 1: block; 2: allow.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Action = null;

        /**
         * Time when a rule starts to take effect.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Time when a rule expires.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Reason for ignoring.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreReason = null;

        /**
         * Security event source.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Rule ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * Number of rule matching times.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MatchTimes = null;

        /**
         * Country.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ioc = 'Ioc' in params ? params.Ioc : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IgnoreReason = 'IgnoreReason' in params ? params.IgnoreReason : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.MatchTimes = 'MatchTimes' in params ? params.MatchTimes : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * ModifyNatFwVpcDnsSwitch request structure.
 * @class
 */
class ModifyNatFwVpcDnsSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT firewall ID
         * @type {string || null}
         */
        this.NatFwInsId = null;

        /**
         * DNS toggle list
         * @type {Array.<DnsVpcSwitch> || null}
         */
        this.DnsVpcSwitchLst = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatFwInsId = 'NatFwInsId' in params ? params.NatFwInsId : null;

        if (params.DnsVpcSwitchLst) {
            this.DnsVpcSwitchLst = new Array();
            for (let z in params.DnsVpcSwitchLst) {
                let obj = new DnsVpcSwitch();
                obj.deserialize(params.DnsVpcSwitchLst[z]);
                this.DnsVpcSwitchLst.push(obj);
            }
        }

    }
}

/**
 * Unhandled event details
 * @class
 */
class UnHandleEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unhandled event type
         * @type {Array.<UnHandleEventDetail> || null}
         */
        this.EventTableListStruct = null;

        /**
         * 1: yes; 0: no
         * @type {number || null}
         */
        this.BaseLineUser = null;

        /**
         * 1: on; 0: off
         * @type {number || null}
         */
        this.BaseLineInSwitch = null;

        /**
         * 1: on; 0: off
         * @type {number || null}
         */
        this.BaseLineOutSwitch = null;

        /**
         * Number of inter-VPC firewall instances
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.VpcFwCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventTableListStruct) {
            this.EventTableListStruct = new Array();
            for (let z in params.EventTableListStruct) {
                let obj = new UnHandleEventDetail();
                obj.deserialize(params.EventTableListStruct[z]);
                this.EventTableListStruct.push(obj);
            }
        }
        this.BaseLineUser = 'BaseLineUser' in params ? params.BaseLineUser : null;
        this.BaseLineInSwitch = 'BaseLineInSwitch' in params ? params.BaseLineInSwitch : null;
        this.BaseLineOutSwitch = 'BaseLineOutSwitch' in params ? params.BaseLineOutSwitch : null;
        this.VpcFwCount = 'VpcFwCount' in params ? params.VpcFwCount : null;

    }
}

/**
 * DeleteAllAccessControlRule request structure.
 * @class
 */
class DeleteAllAccessControlRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direction. 0: outbound; 1: inbound. 0 by default
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Deletes all the access control rules for inter-VPC firewall toggles associated with the EdgeId. It is empty by default. Enter either EdgeId or Area.
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Deletes all the access control rules for NAT firewalls of this region. It is empty by default. Enter either EdgeId or Area.
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyAllVPCSwitchStatus response structure.
 * @class
 */
class ModifyAllVPCSwitchStatusResponse extends  AbstractModel {
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
 * CreateSecurityGroupRules response structure.
 * @class
 */
class CreateSecurityGroupRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: added successfully; non-0: failed to add
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
 * DescribeNatFwVpcDnsLst request structure.
 * @class
 */
class DescribeNatFwVpcDnsLstRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT firewall instance ID
         * @type {string || null}
         */
        this.NatFwInsId = null;

        /**
         * Content filtered by NAT firewall, separated with ","
         * @type {string || null}
         */
        this.NatInsIdFilter = null;

        /**
         * Number of pages
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum entries per page
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
        this.NatFwInsId = 'NatFwInsId' in params ? params.NatFwInsId : null;
        this.NatInsIdFilter = 'NatInsIdFilter' in params ? params.NatInsIdFilter : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeTLogInfo response structure.
 * @class
 */
class DescribeTLogInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `NetworkNum`: Number of detected network scans
 `HandleNum`: Number of pending processing events
"BanNum": 
  `VulNum`: Number of vulnerability exploits
  "OutNum`: Number of compromised servers
"BruteForceNum": 0
         * @type {TLogInfo || null}
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
            let obj = new TLogInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnHandleEventTabList request structure.
 * @class
 */
class DescribeUnHandleEventTabListRequest extends  AbstractModel {
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
         * Gets example ID
         * @type {string || null}
         */
        this.AssetID = null;

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
        this.AssetID = 'AssetID' in params ? params.AssetID : null;

    }
}

/**
 * DescribeAssociatedInstanceList response structure.
 * @class
 */
class DescribeAssociatedInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Instance list
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<AssociatedInstanceInfo> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AssociatedInstanceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance associated with an enterprise security group
 * @class
 */
class AssociatedInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance type. 3: CVM instance; 4: CLB instance; 5: ENI instance; 6: Cloud database
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * VPC ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Public IP
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * The number of associated security groups
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.SecurityGroupCount = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.SecurityGroupCount = 'SecurityGroupCount' in params ? params.SecurityGroupCount : null;

    }
}

/**
 * ModifyStorageSetting response structure.
 * @class
 */
class ModifyStorageSettingResponse extends  AbstractModel {
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
 * RemoveAcRule response structure.
 * @class
 */
class RemoveAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns the UUID of the deleted policy after the deletion is successful
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0: operation successful; -1: operation failed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * success: operation successful; failed: operation failed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NAT instance type
 * @class
 */
class NatFwInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT instance ID
         * @type {string || null}
         */
        this.NatinsId = null;

        /**
         * NAT instance name
         * @type {string || null}
         */
        this.NatinsName = null;

        /**
         * Instance region
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 0: create new; 1: use existing
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * 0: normal; 1: creating
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * NAT public IP
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.NatIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatinsId = 'NatinsId' in params ? params.NatinsId : null;
        this.NatinsName = 'NatinsName' in params ? params.NatinsName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NatIp = 'NatIp' in params ? params.NatIp : null;

    }
}

/**
 * ExpandCfwVertical request structure.
 * @class
 */
class ExpandCfwVerticalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * nat: NAT firewall, ew: east-west firewall
         * @type {string || null}
         */
        this.FwType = null;

        /**
         * Bandwidth value
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Firewall instance ID
         * @type {string || null}
         */
        this.CfwInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FwType = 'FwType' in params ? params.FwType : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

    }
}

/**
 * ModifyAllPublicIPSwitchStatus response structure.
 * @class
 */
class ModifyAllPublicIPSwitchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return message
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Error code. 0: success; non-0: failed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpcInstance response structure.
 * @class
 */
class DeleteVpcInstanceResponse extends  AbstractModel {
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
 * ModifyAssetScan request structure.
 * @class
 */
class ModifyAssetScanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scan range. 1: port; 2: port + vulnerability scan
         * @type {number || null}
         */
        this.ScanRange = null;

        /**
         * Scan mode: 'heavy', 'medium', 'light'
         * @type {string || null}
         */
        this.ScanDeep = null;

        /**
         * Scan type. 1: scan now; 2: periodic scan
         * @type {number || null}
         */
        this.RangeType = null;

        /**
         * Scheduled task time, required when RangeType is 2
         * @type {string || null}
         */
        this.ScanPeriod = null;

        /**
         * Scans this field now and passes the filtered IPs
         * @type {Array.<string> || null}
         */
        this.ScanFilterIp = null;

        /**
         * 1: all; 2: single
         * @type {number || null}
         */
        this.ScanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScanRange = 'ScanRange' in params ? params.ScanRange : null;
        this.ScanDeep = 'ScanDeep' in params ? params.ScanDeep : null;
        this.RangeType = 'RangeType' in params ? params.RangeType : null;
        this.ScanPeriod = 'ScanPeriod' in params ? params.ScanPeriod : null;
        this.ScanFilterIp = 'ScanFilterIp' in params ? params.ScanFilterIp : null;
        this.ScanType = 'ScanType' in params ? params.ScanType : null;

    }
}

/**
 * ModifyBlockIgnoreList request structure.
 * @class
 */
class ModifyBlockIgnoreListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the rule. Values: `1` (Blocklist); `2` (Allowlist)
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * Either IP or Domain is required
         * @type {Array.<IocListData> || null}
         */
        this.IOC = null;

        /**
         * Optional values: delete, edit, and add
         * @type {string || null}
         */
        this.IocAction = null;

        /**
         * Time format: yyyy-MM-dd HH:mm:ss. Required when IocAction is edit or add
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the period in the format of yyyy-MM-dd HH:mm:ss. It must be later than both the start time and the current time. It’s required when `IocAction` is `edit` or `add`. 
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
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

        if (params.IOC) {
            this.IOC = new Array();
            for (let z in params.IOC) {
                let obj = new IocListData();
                obj.deserialize(params.IOC[z]);
                this.IOC.push(obj);
            }
        }
        this.IocAction = 'IocAction' in params ? params.IocAction : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AddEnterpriseSecurityGroupRules request structure.
 * @class
 */
class AddEnterpriseSecurityGroupRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creates rule data
         * @type {Array.<SecurityGroupRule> || null}
         */
        this.Data = null;

        /**
         * Adding type. 0: add to the end; 1: add to the front; 2: insert. Default: 0
         * @type {number || null}
         */
        this.Type = null;

        /**
         * An identifier to ensure the idempotency of the request. The value of the ClientToken parameter is a unique string that is generated by your client and can contain up to 64 ASCII characters in length.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Indicates whether to delay publishing. 1: delay; other values: do not delay
         * @type {number || null}
         */
        this.IsDelay = null;

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
                let obj = new SecurityGroupRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.IsDelay = 'IsDelay' in params ? params.IsDelay : null;

    }
}

/**
 * Security group rules
 * @class
 */
class SecurityGroupRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source example:
net: IP/CIDR (192.168.0.2)
template: parameter template (ipm-dyodhpby)
instance: asset instance (ins-123456)
resourcegroup: asset group (/all groups/group 1/subgroup 1)
tag: resource tag ({"Key":"tag key","Value":"tag value"})
region: region (ap-gaungzhou)
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * Access source type. Valid values: net|template|instance|resourcegroup|tag|region
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Destination example:
net: IP/CIDR (192.168.0.2)
template: parameter template (ipm-dyodhpby)
instance: asset instance (ins-123456)
resourcegroup: asset group (/all groups/group 1/subgroup 1)
tag: resource tag ({"Key":"tag key","Value":"tag value"})
region: region (ap-gaungzhou)
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * Access destination type. Valid values: net|template|instance|resourcegroup|tag|region
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * The action that Cloud Firewall performs on the traffic. Valid values:
accept: allow
drop: deny
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Rule priority. -1: lowest; 1: highest
         * @type {string || null}
         */
        this.OrderIndex = null;

        /**
         * Protocol. TCP/UDP/ICMP/ANY
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The port to apply access control rules. Valid values:
-1/-1: all ports
80: port 80
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Parameter template ID of port and protocol type; mutually exclusive with Protocol and Port
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * The unique ID of the rule
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Rule status. true: enabled; false: disabled
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteSecurityGroupRule response structure.
 * @class
 */
class DeleteSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: operation successful; non-0: operation failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returns redundant information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySequenceRules request structure.
 * @class
 */
class ModifySequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Edge ID value
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Modifies data
         * @type {Array.<SequenceData> || null}
         */
        this.Data = null;

        /**
         * NAT region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SequenceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * Priority
 * @class
 */
class SequenceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Rule priority before change
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Rule priority after change
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * CreateNatFwInstance request structure.
 * @class
 */
class CreateNatFwInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Firewall instance name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Bandwidth
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Mode. 1: use existing; 0: create new
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Parameter passed for the Create New mode. Either NewModeItems or NatgwList is required.
         * @type {NewModeItems || null}
         */
        this.NewModeItems = null;

        /**
         * NAT gateway list for the Using Existing mode. Either NewModeItems or NatgwList is required.
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * Primary zone. The default zone is selected if it is empty.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Secondary zone. The default zone is selected if it is empty.
         * @type {string || null}
         */
        this.ZoneBak = null;

        /**
         * Remote disaster recovery. 1: enable; 0: disable; empty: disable by default
         * @type {number || null}
         */
        this.CrossAZone = null;

        /**
         * IP range of the firewall
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.NewModeItems) {
            let obj = new NewModeItems();
            obj.deserialize(params.NewModeItems)
            this.NewModeItems = obj;
        }
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneBak = 'ZoneBak' in params ? params.ZoneBak : null;
        this.CrossAZone = 'CrossAZone' in params ? params.CrossAZone : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * ModifySecurityGroupItemRuleStatus response structure.
 * @class
 */
class ModifySecurityGroupItemRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: modified successfully; non-0: failed to modify
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
 * DescribeEnterpriseSecurityGroupRule response structure.
 * @class
 */
class DescribeEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number of the current page displayed for query by page number.
         * @type {string || null}
         */
        this.PageNo = null;

        /**
         * Maximum number of entries per page displayed for query by page number.
         * @type {string || null}
         */
        this.PageSize = null;

        /**
         * Access control rule list
         * @type {Array.<SecurityGroupRule> || null}
         */
        this.Rules = null;

        /**
         * Total number of access control rules
         * @type {string || null}
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
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new SecurityGroupRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC DNS status of NAT firewall
 * @class
 */
class VpcDnsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * NAT firewall mode. 0: Create new; 1: Use existing
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * VPC IPv4 CIDR block (Classless Inter-Domain Routing)
         * @type {string || null}
         */
        this.VpcIpv4Cidr = null;

        /**
         * Public EIP, which is the firewall DNS resolution address
         * @type {string || null}
         */
        this.DNSEip = null;

        /**
         * NAT gateway ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.NatInsId = null;

        /**
         * NAT gateway name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.NatInsName = null;

        /**
         * 0: off; 1: on
         * @type {number || null}
         */
        this.SwitchStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.VpcIpv4Cidr = 'VpcIpv4Cidr' in params ? params.VpcIpv4Cidr : null;
        this.DNSEip = 'DNSEip' in params ? params.DNSEip : null;
        this.NatInsId = 'NatInsId' in params ? params.NatInsId : null;
        this.NatInsName = 'NatInsName' in params ? params.NatInsName : null;
        this.SwitchStatus = 'SwitchStatus' in params ? params.SwitchStatus : null;

    }
}

/**
 * DescribeEnterpriseSecurityGroupRule request structure.
 * @class
 */
class DescribeEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number of the current page displayed for query by page number.

1 by default.
         * @type {string || null}
         */
        this.PageNo = null;

        /**
         * Maximum number of entries per page displayed for query by page number.

Maximum value: 50.
         * @type {string || null}
         */
        this.PageSize = null;

        /**
         * Source example:
net: IP/CIDR (192.168.0.2)
template: parameter template (ipm-dyodhpby)
instance: asset instance (ins-123456)
resourcegroup: asset group (/all groups/group 1/subgroup 1)
tag: resource tag ({"Key":"tag key","Value":"tag value"})
region: region (ap-gaungzhou)
Wildcards are supported.
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * Destination example:
net: IP/CIDR (192.168.0.2)
template: parameter template (ipm-dyodhpby)
instance: asset instance (ins-123456)
resourcegroup: asset group (/all groups/group 1/subgroup 1)
tag: resource tag ({"Key":"tag key","Value":"tag value"})
region: region (ap-gaungzhou)
Wildcards are supported.
         * @type {string || null}
         */
        this.DestContent = null;

        /**
         * Rule description. Wildcards are supported.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The action that Cloud Firewall performs on the traffic. Valid values:
accept: allow
drop: deny
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * Indicates whether to enable the rules. Default: enable. Valid values:
true: enable; false: disable
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * The port to apply access control rules. Valid values:
-1/-1: all ports
80: port 80
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Protocol. TCP/UDP/ICMP/ANY
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Parameter template ID of port and protocol type; mutually exclusive with Protocol and Port
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.DestContent = 'DestContent' in params ? params.DestContent : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

    }
}

/**
 * ModifyNatFwReSelect response structure.
 * @class
 */
class ModifyNatFwReSelectResponse extends  AbstractModel {
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
 * DeleteSecurityGroupRule request structure.
 * @class
 */
class DeleteSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the rule to delete
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Tencent Cloud region (abbreviation)
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Indicates whether to delete the reverse rule. 0: no; 1: yes
         * @type {number || null}
         */
        this.IsDelReverse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.IsDelReverse = 'IsDelReverse' in params ? params.IsDelReverse : null;

    }
}

/**
 * SetNatFwEip request structure.
 * @class
 */
class SetNatFwEipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * bind: bind EIP; unbind: unbind EIP; newAdd: add firewall EIP
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * Firewall instance ID
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * This field is required when OperationType is "bind" or "unbind".
         * @type {Array.<string> || null}
         */
        this.EipList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;
        this.EipList = 'EipList' in params ? params.EipList : null;

    }
}

/**
 * SetNatFwEip response structure.
 * @class
 */
class SetNatFwEipResponse extends  AbstractModel {
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
 * Access control list rule
 * @class
 */
class AcListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Access source
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * Access destination
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Protocol
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Policy
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Description
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Hit count
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Alert rule ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.LogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.LogId = 'LogId' in params ? params.LogId : null;

    }
}

/**
 * ModifyPublicIPSwitchStatus request structure.
 * @class
 */
class ModifyPublicIPSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public IP
         * @type {string || null}
         */
        this.FireWallPublicIP = null;

        /**
         * Status value. 0: off; 1: on
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
        this.FireWallPublicIP = 'FireWallPublicIP' in params ? params.FireWallPublicIP : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Parameters for creating an NAT access control rule
 * @class
 */
class CreateNatRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source. Example: `net: IP/CIDR(192.168.0.2)`
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * Access source type. Values for inbound rules: `ip`, `net`, `template`, and `location`. Values for outbound rules: `ip`, `net`, `template`, `instance`, `group`, and `tag`.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Access target. Example: `net: IP/CIDR(192.168.0.2); domain: domain name rule, e.g., *.qq.com
         * @type {string || null}
         */
        this.TargetContent = null;

        /**
         * Access target type. Values for inbound rules: `ip`, `net`, `template`, `instance`, `group`, and `tag`. Values for outbound rules: `ip`, `net`, `domain`, `template`, and `location`.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Protocol. Values: `TCP`, `UDP`, `ICMP`, `ANY`, `HTTP`, `HTTPS`, `HTTP/HTTPS`, `SMTP`, `SMTPS`, `SMTP/SMTPS`, `FTP`, and `DNS`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Specify how the CFW instance deals with the traffic hit the access control rule. Values: `accept` (allow), `drop` (reject), and `log` (observe).
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * The port of the access control rule. Values: `-1/-1` (all ports) and `80` (Port 80)
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Rule direction. Values: `1` (Inbound) and `0` (Outbound)
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Rule sequence number
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Rule status. `true` (Enabled); `false` (Disabled)
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * The unique ID of the rule, which is not required when you create a rule.
         * @type {number || null}
         */
        this.Uuid = null;

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
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetContent = 'TargetContent' in params ? params.TargetContent : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifySecurityGroupItemRuleStatus request structure.
 * @class
 */
class ModifySecurityGroupItemRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direction. 0: outbound; 1: inbound. 1 by default
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Toggle status. 0: off; 1: on
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Modified priority of enterprise security group rules
         * @type {number || null}
         */
        this.RuleSequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleSequence = 'RuleSequence' in params ? params.RuleSequence : null;

    }
}

/**
 * DescribeSourceAsset request structure.
 * @class
 */
class DescribeSourceAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fuzzy search
         * @type {string || null}
         */
        this.FuzzySearch = null;

        /**
         * Asset type. 1: public network; 2: private network
         * @type {string || null}
         */
        this.InsType = null;

        /**
         * If ChooseType is 1, grouped assets are queried; if ChooseType is not 1, non-grouped assets are queried
         * @type {string || null}
         */
        this.ChooseType = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Maximum number of results returned per page. For example, if it is set to 10, 10 results will be returned at most.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset of search results
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
        this.FuzzySearch = 'FuzzySearch' in params ? params.FuzzySearch : null;
        this.InsType = 'InsType' in params ? params.InsType : null;
        this.ChooseType = 'ChooseType' in params ? params.ChooseType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Change priority of enterprise security group rules
 * @class
 */
class SecurityGroupOrderIndexData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current priority of enterprise security group rules
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * New priority of enterprise security group rules
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * DescribeSourceAsset response structure.
 * @class
 */
class DescribeSourceAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region collection
         * @type {Array.<AssetZone> || null}
         */
        this.ZoneList = null;

        /**
         * Data
         * @type {Array.<InstanceInfo> || null}
         */
        this.Data = null;

        /**
         * Total number of returned data
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

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new AssetZone();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTLogInfo request structure.
 * @class
 */
class DescribeTLogInfoRequest extends  AbstractModel {
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
         * Type. 1: alert; 2: block
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * Search criteria
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * DescribeSecurityGroupList response structure.
 * @class
 */
class DescribeSecurityGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total rules in the list
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Security group rule list data
         * @type {Array.<SecurityGroupListData> || null}
         */
        this.Data = null;

        /**
         * Total entries excluding the filtered ones
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * All access control rules enabled/disabled
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssetZone 
 * @class
 */
class AssetZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Region
         * @type {string || null}
         */
        this.ZoneEng = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneEng = 'ZoneEng' in params ? params.ZoneEng : null;

    }
}

/**
 * DescribeTLogIpList request structure.
 * @class
 */
class DescribeTLogIpListRequest extends  AbstractModel {
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
         * Type. 1: alert; 2: block
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * Number of top results returned
         * @type {number || null}
         */
        this.Top = null;

        /**
         * Search criteria
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * Common filters for search
 * @class
 */
class CommonFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search key.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Search values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Enum of integers that represent relations between Name and Values.
enum FilterOperatorType {
    // Invalid
    FILTER_OPERATOR_TYPE_INVALID = 0;
    // Equal to
    FILTER_OPERATOR_TYPE_EQUAL = 1;
    // Greater than
    FILTER_OPERATOR_TYPE_GREATER = 2;
    // Less than
    FILTER_OPERATOR_TYPE_LESS = 3;
    // Greater than or equal to
    FILTER_OPERATOR_TYPE_GREATER_EQ = 4;
    // Less than or equal to
    FILTER_OPERATOR_TYPE_LESS_EQ = 5;
    // Not equal to
    FILTER_OPERATOR_TYPE_NO_EQ = 6;
    // In (contained in the array)
    FILTER_OPERATOR_TYPE_IN = 7;
    // Not in
    FILTER_OPERATOR_TYPE_NOT_IN = 8;
    // Fuzzily matched
    FILTER_OPERATOR_TYPE_FUZZINESS = 9;
    // Existing
    FILTER_OPERATOR_TYPE_EXIST = 10;
    // Not existing
    FILTER_OPERATOR_TYPE_NOT_EXIST = 11;
    // Regular
    FILTER_OPERATOR_TYPE_REGULAR = 12;
}
         * @type {number || null}
         */
        this.OperatorType = null;

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
        this.OperatorType = 'OperatorType' in params ? params.OperatorType : null;

    }
}

/**
 * DescribeNatFwInstancesInfo request structure.
 * @class
 */
class DescribeNatFwInstancesInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gets filtering fields of instance list
         * @type {Array.<NatFwFilter> || null}
         */
        this.Filter = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page length
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

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new NatFwFilter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyNatSequenceRules response structure.
 * @class
 */
class ModifyNatSequenceRulesResponse extends  AbstractModel {
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
 * DescribeTableStatus request structure.
 * @class
 */
class DescribeTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Edge ID between two VPCs, required for VPCs
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Status value. 0: the only default value
         * @type {number || null}
         */
        this.Status = null;

        /**
         * NAT region, required for NAT
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Direction. 0: outbound; 1: inbound. 0 by default
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeSecurityGroupList request structure.
 * @class
 */
class DescribeSecurityGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: outbound rule; 1: inbound rule
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Region code (e.g. ap-guangzhou ). All Tencent Cloud regions are supported.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Search value
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Number of entries per page. Default: 10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Status. Null: all; '0': filter disabled rules; '1': filter enabled rules
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 0: not filter; 1: filter out normal rules to retain abnormal rules
         * @type {number || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * ModifyResourceGroup request structure.
 * @class
 */
class ModifyResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Parent group ID
         * @type {string || null}
         */
        this.ParentId = null;

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
        this.ParentId = 'ParentId' in params ? params.ParentId : null;

    }
}

/**
 * CreateNatFwInstance response structure.
 * @class
 */
class CreateNatFwInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Firewall instance ID
         * @type {string || null}
         */
        this.CfwInsId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfwInsId = 'CfwInsId' in params ? params.CfwInsId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameters passed for the Create New mode
 * @class
 */
class NewModeItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC list for the Create New mode
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * The list of egress public EIPs bound for the Create New mode. Either Eips or AddCount is required.
         * @type {Array.<string> || null}
         */
        this.Eips = null;

        /**
         * The number of egress public EIPs newly bound for the Create New mode. Either Eips or AddCount is required.
         * @type {number || null}
         */
        this.AddCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcList = 'VpcList' in params ? params.VpcList : null;
        this.Eips = 'Eips' in params ? params.Eips : null;
        this.AddCount = 'AddCount' in params ? params.AddCount : null;

    }
}

/**
 * DescribeNatFwInfoCount response structure.
 * @class
 */
class DescribeNatFwInfoCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response parameter
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Number of NAT instances of the current tenant
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.NatFwInsCount = null;

        /**
         * Number of subnets connected by the current tenant
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.SubnetCount = null;

        /**
         * Number of firewalls enabled
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OpenSwitchCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.NatFwInsCount = 'NatFwInsCount' in params ? params.NatFwInsCount : null;
        this.SubnetCount = 'SubnetCount' in params ? params.SubnetCount : null;
        this.OpenSwitchCount = 'OpenSwitchCount' in params ? params.OpenSwitchCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefenseSwitch request structure.
 * @class
 */
class DescribeDefenseSwitchRequest extends  AbstractModel {
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
 * ModifyEnterpriseSecurityDispatchStatus response structure.
 * @class
 */
class ModifyEnterpriseSecurityDispatchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `0`: Modified successfully; Others: Modification failed
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Security group list data
 * @class
 */
class SecurityGroupListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Priority
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Access source
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Access source type. Default: 0. 1: VPC; 2: SUBNET; 3: CVM; 4: CLB; 5: ENI; 6: CDB; 7: Parameter template. 100: Resource group
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Access destination
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Access destination type. Default: 0. 1: VPC; 2: SUBNET; 3: CVM; 4: CLB; 5: ENI; 6: CDB; 7: Parameter template; 100: resource group
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * Protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Destination port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Policy. 1: block; 2: allow
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * One-way/two-way. 0: one-way; 1: two-way
         * @type {number || null}
         */
        this.BothWay = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Toggle status. 0: off; 1: on
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Indicates whether the rule is normal. 0: normal; 1: abnormal
         * @type {number || null}
         */
        this.IsNew = null;

        /**
         * VPC ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Public IP. Multiple IPs are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP. Multiple IPs are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Masked address. Multiple addresses are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * Port protocol template ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * Two-way rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<SecurityGroupBothWayInfo> || null}
         */
        this.BothWayInfo = null;

        /**
         * Direction. 0: outbound; 1: inbound. 1 by default
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Indicates whether to use the port protocol template. 0: no; 1: yes
         * @type {number || null}
         */
        this.ProtocolPortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.BothWay = 'BothWay' in params ? params.BothWay : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

        if (params.BothWayInfo) {
            this.BothWayInfo = new Array();
            for (let z in params.BothWayInfo) {
                let obj = new SecurityGroupBothWayInfo();
                obj.deserialize(params.BothWayInfo[z]);
                this.BothWayInfo.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.ProtocolPortType = 'ProtocolPortType' in params ? params.ProtocolPortType : null;

    }
}

/**
 * RemoveNatAcRule response structure.
 * @class
 */
class RemoveNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUID list of the deleted rules.
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNatFwInstanceWithDomain response structure.
 * @class
 */
class CreateNatFwInstanceWithDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT instance info
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CfwInsId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfwInsId = 'CfwInsId' in params ? params.CfwInsId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveAcRule request structure.
 * @class
 */
class RemoveAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUID of the rule, which can be obtained by querying the rule list
         * @type {number || null}
         */
        this.RuleUuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;

    }
}

/**
 * Canary publish information of the rule
 * @class
 */
class BetaInfoByACL extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Last execution time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;

    }
}

/**
 * RemoveNatAcRule request structure.
 * @class
 */
class RemoveNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUIDs of the rules to delete, which can be obtained by querying the rule list. Note: If [-1] is passed in, all rules are deleted.
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * Rule direction. Valid values: 1: inbound; 0: outbound.
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ModifyAllRuleStatus request structure.
 * @class
 */
class ModifyAllRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. 0: all disabled; 1: all enabled
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Edge ID value
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT region
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Rule input object
 * @class
 */
class RuleInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Priority
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Access source
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * Access destination
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Policy. 0: observe; 1: block; 2: allow
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * Access source type. 1: IP; 3: domain name; 4: IP address template; 5: domain name address template
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Access destination type. 1: IP, 3: domain name; 4: IP address template; 5: domain name address template
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * Port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * ID value
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Log ID, required when an alert log is created
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * City code
         * @type {number || null}
         */
        this.City = null;

        /**
         * Country code
         * @type {number || null}
         */
        this.Country = null;

        /**
         * Cloud vendor. Multiple vendors are supported and separated with commas. 1: Tencent Cloud (only in Hong Kong, China and overseas); 2: Alibaba Cloud; 3: Amazon Cloud; 4: Huawei Cloud; 5: Microsoft Cloud
         * @type {string || null}
         */
        this.CloudCode = null;

        /**
         * Indicates whether it is a region
         * @type {number || null}
         */
        this.IsRegion = null;

        /**
         * City name
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * Country name
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
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;
        this.IsRegion = 'IsRegion' in params ? params.IsRegion : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * DescribeAcLists response structure.
 * @class
 */
class DescribeAcListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total entries
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Access control list data
         * @type {Array.<AcListsData> || null}
         */
        this.Data = null;

        /**
         * Total entries excluding the filtered ones
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * All access control rules enabled/disabled
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AcListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAllPublicIPSwitchStatus request structure.
 * @class
 */
class ModifyAllPublicIPSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. 0: off; 1: on
         * @type {number || null}
         */
        this.Status = null;

        /**
         * ID of the selected firewall toggle
         * @type {Array.<string> || null}
         */
        this.FireWallPublicIPs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FireWallPublicIPs = 'FireWallPublicIPs' in params ? params.FireWallPublicIPs : null;

    }
}

/**
 * DescribeBlockStaticList response structure.
 * @class
 */
class DescribeBlockStaticListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
         * @type {Array.<StaticInfo> || null}
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
                let obj = new StaticInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddNatAcRule request structure.
 * @class
 */
class AddNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT access control rules to be added.
         * @type {Array.<CreateNatRuleItem> || null}
         */
        this.Rules = null;

        /**
         * Source of the rules to be added. Generally, this parameter is not used. The value insert_rule indicates that rules in the specified location are inserted, and the value batch_import indicates that rules are imported in batches. If the parameter is left empty, rules defined in the API request are added.
         * @type {string || null}
         */
        this.From = null;

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
                let obj = new CreateNatRuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.From = 'From' in params ? params.From : null;

    }
}

/**
 * ModifySecurityGroupSequenceRules request structure.
 * @class
 */
class ModifySecurityGroupSequenceRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direction. 0: outbound; 1: inbound. 1 by default
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Sorting data of enterprise security group rules
         * @type {Array.<SecurityGroupOrderIndexData> || null}
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
        this.Direction = 'Direction' in params ? params.Direction : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecurityGroupOrderIndexData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * Getting started on scanning result information PortNum   int
	LeakNum   int
	IPNum     int
	IPStatus  bool
	IdpStatus bool
	BanStatus bool
 * @class
 */
class ScanResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of vulnerability exploits
         * @type {number || null}
         */
        this.LeakNum = null;

        /**
         * Number of protected IPs
         * @type {number || null}
         */
        this.IPNum = null;

        /**
         * Number of exposed ports
         * @type {number || null}
         */
        this.PortNum = null;

        /**
         * Protection status
         * @type {boolean || null}
         */
        this.IPStatus = null;

        /**
         * Attack blocking status
         * @type {boolean || null}
         */
        this.IdpStatus = null;

        /**
         * Port blocking status
         * @type {boolean || null}
         */
        this.BanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LeakNum = 'LeakNum' in params ? params.LeakNum : null;
        this.IPNum = 'IPNum' in params ? params.IPNum : null;
        this.PortNum = 'PortNum' in params ? params.PortNum : null;
        this.IPStatus = 'IPStatus' in params ? params.IPStatus : null;
        this.IdpStatus = 'IdpStatus' in params ? params.IdpStatus : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;

    }
}

/**
 * Getting started on scanning information  
 * @class
 */
class ScanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scanning result information
         * @type {ScanResultInfo || null}
         */
        this.ScanResultInfo = null;

        /**
         * Scanning status. 0: scanning; 1: completed; 2: auto scanning unselected
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * Progress
         * @type {number || null}
         */
        this.ScanPercent = null;

        /**
         * Estimated completion time
         * @type {string || null}
         */
        this.ScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ScanResultInfo) {
            let obj = new ScanResultInfo();
            obj.deserialize(params.ScanResultInfo)
            this.ScanResultInfo = obj;
        }
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.ScanPercent = 'ScanPercent' in params ? params.ScanPercent : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;

    }
}

/**
 * DescribeUnHandleEventTabList response structure.
 * @class
 */
class DescribeUnHandleEventTabListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gets unhandled security events
Note: This field may return `null`, indicating that no valid value was found.
         * @type {UnHandleEvent || null}
         */
        this.Data = null;

        /**
         * Error code. 0: success; non-0: error
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Return message: success
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new UnHandleEvent();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The filter list displayed by the NAT firewall instance
 * @class
 */
class NatFwFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter type, e.g., instance ID
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Filtered content, separated with ","
         * @type {string || null}
         */
        this.FilterContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterContent = 'FilterContent' in params ? params.FilterContent : null;

    }
}

/**
 * ModifyRunSyncAsset response structure.
 * @class
 */
class ModifyRunSyncAssetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: synced successfully, 1: updating assets, 2: failed to sync by calling the API at the backend
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
 * ModifyEnterpriseSecurityGroupRule response structure.
 * @class
 */
class ModifyEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. `0`: Edited successfully; Others: Failed to edit
         * @type {number || null}
         */
        this.Status = null;

        /**
         * ID of new rule generated after the modification
         * @type {number || null}
         */
        this.NewRuleUuid = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.NewRuleUuid = 'NewRuleUuid' in params ? params.NewRuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityGroupSequenceRules response structure.
 * @class
 */
class ModifySecurityGroupSequenceRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: modified successfully; non-0: failed to modify
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
 * Statistical line graph general structure
 * @class
 */
class IpStatic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Time shown on the x-axis of the line graph
         * @type {string || null}
         */
        this.StatTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.StatTime = 'StatTime' in params ? params.StatTime : null;

    }
}

/**
 * AddEnterpriseSecurityGroupRules response structure.
 * @class
 */
class AddEnterpriseSecurityGroupRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: added successfully; non-0: failed to add
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
 * Unhandled event statistics
 * @class
 */
class UnHandleEventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Number of unhandled events
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * RemoveEnterpriseSecurityGroupRule request structure.
 * @class
 */
class RemoveEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUID of the rule, which can be obtained by querying the rule list
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * Type of deletion. 0: delete a single entry, and enter ID of the deleted rule for RuleUuid; 1: delete all, and enter 0 for RuleUuid
         * @type {number || null}
         */
        this.RemoveType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RemoveType = 'RemoveType' in params ? params.RemoveType : null;

    }
}

/**
 * DeleteResourceGroup request structure.
 * @class
 */
class DeleteResourceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID
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
 * DescribeBlockByIpTimesList request structure.
 * @class
 */
class DescribeBlockByIpTimesListRequest extends  AbstractModel {
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
         * IP search criteria
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Direction
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Inter-VPC firewall toggle edge ID
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Log source. move: inter-VPC firewall
         * @type {string || null}
         */
        this.LogSource = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;

    }
}

/**
 * RemoveEnterpriseSecurityGroupRule response structure.
 * @class
 */
class RemoveEnterpriseSecurityGroupRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns the UUID of the deleted policy after the deletion is successful
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0: operation successful; -1: operation failed
Note: This field may return `null`, indicating that no valid value was found.
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
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEnterpriseSecurityGroupRule request structure.
 * @class
 */
class ModifyEnterpriseSecurityGroupRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUID of the rule, which can be obtained by querying the rule list
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * Modification type. Values: `0` (Modify rule content), `1` (Toggle on/off a rule) and `2` (Toggle on/off all rules)
         * @type {number || null}
         */
        this.ModifyType = null;

        /**
         * The new rule content you want. It’s only required when you want to modify the rule content (`ModifyType=0`)
         * @type {SecurityGroupRule || null}
         */
        this.Data = null;

        /**
         * `0`: Do not enable; `1`: Enable
         * @type {number || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;

        if (params.Data) {
            let obj = new SecurityGroupRule();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ModifySequenceRules response structure.
 * @class
 */
class ModifySequenceRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: modified successfully; non-0: modification failed
Note: This field may return `null`, indicating that no valid value was found.
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
 * DescribeResourceGroupNew response structure.
 * @class
 */
class DescribeResourceGroupNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns a tree structure
         * @type {string || null}
         */
        this.Data = null;

        /**
         * Number of uncategorizd instances
         * @type {number || null}
         */
        this.UnResourceNum = null;

        /**
         * Response message
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Return code. 0: Request successful
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.UnResourceNum = 'UnResourceNum' in params ? params.UnResourceNum : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstanceWithRegion response structure.
 * @class
 */
class DescribeNatFwInstanceWithRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance array
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<NatFwInstance> || null}
         */
        this.NatinsLst = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatFwInstance();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceGroupNew request structure.
 * @class
 */
class DescribeResourceGroupNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query type. Network–VPC; business recognition–resource; resource tag–tag
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * Asset group ID, 0: all asset group IDs
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * all: all, including subgroups; own: my asset groups only
         * @type {string || null}
         */
        this.ShowType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ShowType = 'ShowType' in params ? params.ShowType : null;

    }
}

/**
 * ModifyBlockTop request structure.
 * @class
 */
class ModifyBlockTopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * Operation type. 1: pin to top; 0: unpin
         * @type {string || null}
         */
        this.OpeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.OpeType = 'OpeType' in params ? params.OpeType : null;

    }
}

/**
 * DeleteAcRule response structure.
 * @class
 */
class DeleteAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: deleted successfully; !0: deletion failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returns redundant information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Blocklist, allowlist, IOC list
 * @class
 */
class IocListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address to be handled. Either IP or Domain is required.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 0 or 1. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Domain name to be handled. Either IP or Domain is required.
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
        this.IP = 'IP' in params ? params.IP : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * // InstanceInfo instance details result
type InstanceInfo struct {
	AppID        string `json:"AppId" gorm:"column:appid"`
	Region       string `json:"Region" gorm:"column:region"`
	VPCID        string `json:"VpcId" gorm:"column:vpc_id"`
	SubNetID     string `json:"SubnetId" gorm:"column:subnet_id"`
	InstanceID   string `json:"InstanceId" gorm:"column:instance_id"`
	InstanceName string `json:"InstanceName" gorm:"column:instance_name"`
	//InsType common.CVM 3 is CVM instance, 4 is CLB instance, 5 is ENI instance, 6 is MySQL, 7 is Redis, 8 is NAT, 9 is VPN, 10 is ES, 11 is MariaDB, and 12 is Kafka
	InsType   int    `json:"InsType" gorm:"column:instance_type"`
	PublicIP  string `json:"PublicIp" gorm:"column:public_ip"`
	PrivateIP string `json:"PrivateIp" gorm:"column:ip"`

	// It is not required for rule publishing and is used for frontend display
	PortNum          string `json:"PortNum" gorm:"column:port_num"`
	LeakNum          string `json:"LeakNum" gorm:"column:leak_num"`
	ResourceGroupNum int    `json:"ResourceGroupNum"`
	VPCName          string `json:"VPCName" gorm:"column:VPCName"`
}

 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * App ID
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VPCName = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Asset ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Asset name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Asset type
 3: CVM instance; 4: CLB instance; 5: ENI instance; 6: MySQL; 7: Redis; 8: NAT; 9: VPN; 10: ES; 11: MariaDB; 12: Kafka; 13: NATFW
         * @type {number || null}
         */
        this.InsType = null;

        /**
         * Public IP
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Number of ports
         * @type {string || null}
         */
        this.PortNum = null;

        /**
         * Number of vulnerabilities
         * @type {string || null}
         */
        this.LeakNum = null;

        /**
         * 1: public network; 2: private network
         * @type {string || null}
         */
        this.InsSource = null;

        /**
         * [a,b]
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.ResourcePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VPCName = 'VPCName' in params ? params.VPCName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InsType = 'InsType' in params ? params.InsType : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.PortNum = 'PortNum' in params ? params.PortNum : null;
        this.LeakNum = 'LeakNum' in params ? params.LeakNum : null;
        this.InsSource = 'InsSource' in params ? params.InsSource : null;
        this.ResourcePath = 'ResourcePath' in params ? params.ResourcePath : null;

    }
}

/**
 * DescribeIPStatusList request structure.
 * @class
 */
class DescribeIPStatusListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
         * @type {Array.<string> || null}
         */
        this.IPList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPList = 'IPList' in params ? params.IPList : null;

    }
}

/**
 * ModifyNatFwSwitch response structure.
 * @class
 */
class ModifyNatFwSwitchResponse extends  AbstractModel {
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
 * DescribeBlockByIpTimesList response structure.
 * @class
 */
class DescribeBlockByIpTimesListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response data
         * @type {Array.<IpStatic> || null}
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
                let obj = new IpStatic();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetNatFwDnatRule response structure.
 * @class
 */
class SetNatFwDnatRuleResponse extends  AbstractModel {
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
 * DescribeRuleOverview request structure.
 * @class
 */
class DescribeRuleOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * DescribeDefenseSwitch response structure.
 * @class
 */
class DescribeDefenseSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the Basic Protection feature
         * @type {number || null}
         */
        this.BasicRuleSwitch = null;

        /**
         * Whether to enable the Security Baseline feature
         * @type {number || null}
         */
        this.BaselineAllSwitch = null;

        /**
         * Whether to enable the Treat Intelligence feature
         * @type {number || null}
         */
        this.TiSwitch = null;

        /**
         * Whether to enable the Virtual Patch feature
         * @type {number || null}
         */
        this.VirtualPatchSwitch = null;

        /**
         * Whether it has been enabled before
         * @type {number || null}
         */
        this.HistoryOpen = null;

        /**
         * Status code. `0`: Succeeded. Others: Failed
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Status message. `success` and `fail.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicRuleSwitch = 'BasicRuleSwitch' in params ? params.BasicRuleSwitch : null;
        this.BaselineAllSwitch = 'BaselineAllSwitch' in params ? params.BaselineAllSwitch : null;
        this.TiSwitch = 'TiSwitch' in params ? params.TiSwitch : null;
        this.VirtualPatchSwitch = 'VirtualPatchSwitch' in params ? params.VirtualPatchSwitch : null;
        this.HistoryOpen = 'HistoryOpen' in params ? params.HistoryOpen : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAcLists request structure.
 * @class
 */
class DescribeAcListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Policy
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * Search value
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Indicates whether it is outbound or inbound. 1: inbound; 0: outbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * EdgeId value
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Indicates whether the rule is enabled. '0': disabled; '1': enabled. '0' by default
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeGuideScanInfo request structure.
 * @class
 */
class DescribeGuideScanInfoRequest extends  AbstractModel {
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
 * DescribeAssociatedInstanceList request structure.
 * @class
 */
class DescribeAssociatedInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of records per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Region code (e.g. ap-guangzhou). All Tencent Cloud regions are supported.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Additional search criteria (JSON string)
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Sorting field
         * @type {string || null}
         */
        this.By = null;

        /**
         * Sort order. asc: ascending; desc: descending
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Instance type. '3': CVM instance; '4': CLB instance; '5': ENI instance; '6': Cloud database
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.By = 'By' in params ? params.By : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteAcRule request structure.
 * @class
 */
class DeleteAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the rule to delete. It can be queried via the DescribeAcLists API.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Direction. 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Edge ID between two VPCs
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * NAT region, e.g. ap-shanghai/ap-guangzhou/ap-chongqing
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DeleteAllAccessControlRule response structure.
 * @class
 */
class DeleteAllAccessControlRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status of the task. `0`: Modified successfully; Others: Modification failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of access control rules deleted.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Info = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatFwSwitch request structure.
 * @class
 */
class ModifyNatFwSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. 0: off; 1: on
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * List of firewall instance IDs. Only one of CfwInsIdList, SubnetIdList, and RouteTableIdList can be passed.
         * @type {Array.<string> || null}
         */
        this.CfwInsIdList = null;

        /**
         * List of subnet IDs. Only one of CfwInsIdList, SubnetIdList, and RouteTableIdList can be passed.
         * @type {Array.<string> || null}
         */
        this.SubnetIdList = null;

        /**
         * List of route table IDs. Only one of CfwInsIdList, SubnetIdList, and RouteTableIdList can be passed.
         * @type {Array.<string> || null}
         */
        this.RouteTableIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CfwInsIdList = 'CfwInsIdList' in params ? params.CfwInsIdList : null;
        this.SubnetIdList = 'SubnetIdList' in params ? params.SubnetIdList : null;
        this.RouteTableIdList = 'RouteTableIdList' in params ? params.RouteTableIdList : null;

    }
}

/**
 * DescribeIPStatusList response structure.
 * @class
 */
class DescribeIPStatusListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP status information
         * @type {Array.<IPDefendStatus> || null}
         */
        this.StatusList = null;

        /**
         * Status code
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Status information
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatusList) {
            this.StatusList = new Array();
            for (let z in params.StatusList) {
                let obj = new IPDefendStatus();
                obj.deserialize(params.StatusList[z]);
                this.StatusList.push(obj);
            }
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NAT instance card details
 * @class
 */
class NatInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT instance ID
         * @type {string || null}
         */
        this.NatinsId = null;

        /**
         * NAT instance name
         * @type {string || null}
         */
        this.NatinsName = null;

        /**
         * Instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 0: create new; 1: use existing
         * @type {number || null}
         */
        this.FwMode = null;

        /**
         * Instance bandwidth (Mbps)
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * Inbound traffic peak bandwidth (bps)
         * @type {number || null}
         */
        this.InFlowMax = null;

        /**
         * Outbound traffic peak bandwidth (bps)
         * @type {number || null}
         */
        this.OutFlowMax = null;

        /**
         * Chinese region information
         * @type {string || null}
         */
        this.RegionZh = null;

        /**
         * Public IP array
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.EipAddress = null;

        /**
         * Array of internal and external IPs
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.VpcIp = null;

        /**
         * Array of subnets associated with an instance
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * 0: normal 1: initializing
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Region information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionDetail = null;

        /**
         * Availability zone of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneZh = null;

        /**
         * Availability zone of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneZhBak = null;

        /**
         * Number of used rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleUsed = null;

        /**
         * The maximum number of rules allowed in the instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatinsId = 'NatinsId' in params ? params.NatinsId : null;
        this.NatinsName = 'NatinsName' in params ? params.NatinsName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FwMode = 'FwMode' in params ? params.FwMode : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.InFlowMax = 'InFlowMax' in params ? params.InFlowMax : null;
        this.OutFlowMax = 'OutFlowMax' in params ? params.OutFlowMax : null;
        this.RegionZh = 'RegionZh' in params ? params.RegionZh : null;
        this.EipAddress = 'EipAddress' in params ? params.EipAddress : null;
        this.VpcIp = 'VpcIp' in params ? params.VpcIp : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RegionDetail = 'RegionDetail' in params ? params.RegionDetail : null;
        this.ZoneZh = 'ZoneZh' in params ? params.ZoneZh : null;
        this.ZoneZhBak = 'ZoneZhBak' in params ? params.ZoneZhBak : null;
        this.RuleUsed = 'RuleUsed' in params ? params.RuleUsed : null;
        this.RuleMax = 'RuleMax' in params ? params.RuleMax : null;

    }
}

/**
 * DescribeTLogIpList response structure.
 * @class
 */
class DescribeTLogIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data collection
         * @type {Array.<StaticInfo> || null}
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
                let obj = new StaticInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopSecurityGroupRuleDispatch response structure.
 * @class
 */
class StopSecurityGroupRuleDispatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: operation successful; false: error
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
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
 * DescribeNatFwInfoCount request structure.
 * @class
 */
class DescribeNatFwInfoCountRequest extends  AbstractModel {
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
 * AddAcRule response structure.
 * @class
 */
class AddAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * UUID of the new rule
         * @type {number || null}
         */
        this.RuleUuid = null;

        /**
         * 0: operation successful; -1: operation failed
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * success: operation successful; failed: operation failed
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatFwReSelect request structure.
 * @class
 */
class ModifyNatFwReSelectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mode. 1: use existing; 0: create new
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Firewall instance ID
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * List of NAT gateways reconnected for the Using Existing mode. Only one of NatGwList and VpcList can be passed.
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * List of VPCs reconnected for the Create New mode. Only one of NatGwList and VpcList can be passed.
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

        /**
         * IP range of the firewall
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * SetNatFwDnatRule request structure.
 * @class
 */
class SetNatFwDnatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: Create new; 1: Use existing
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Operation type. Valid values: add, del, and modify.
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * Firewall instance ID. This field is required.
         * @type {string || null}
         */
        this.CfwInstance = null;

        /**
         * List of added/deleted DNAT rules
         * @type {Array.<CfwNatDnatRule> || null}
         */
        this.AddOrDelDnatRules = null;

        /**
         * Original DNAT rule before change
         * @type {CfwNatDnatRule || null}
         */
        this.OriginDnat = null;

        /**
         * New DNAT rule after change
         * @type {CfwNatDnatRule || null}
         */
        this.NewDnat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.CfwInstance = 'CfwInstance' in params ? params.CfwInstance : null;

        if (params.AddOrDelDnatRules) {
            this.AddOrDelDnatRules = new Array();
            for (let z in params.AddOrDelDnatRules) {
                let obj = new CfwNatDnatRule();
                obj.deserialize(params.AddOrDelDnatRules[z]);
                this.AddOrDelDnatRules.push(obj);
            }
        }

        if (params.OriginDnat) {
            let obj = new CfwNatDnatRule();
            obj.deserialize(params.OriginDnat)
            this.OriginDnat = obj;
        }

        if (params.NewDnat) {
            let obj = new CfwNatDnatRule();
            obj.deserialize(params.NewDnat)
            this.NewDnat = obj;
        }

    }
}

/**
 * ModifyAllVPCSwitchStatus request structure.
 * @class
 */
class ModifyAllVPCSwitchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. 0: off; 1: on
         * @type {number || null}
         */
        this.Status = null;

        /**
         * ID of the selected firewall toggle
         * @type {Array.<string> || null}
         */
        this.FireWallVpcIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FireWallVpcIds = 'FireWallVpcIds' in params ? params.FireWallVpcIds : null;

    }
}

/**
 * Two-way enterprise security group rules
 * @class
 */
class SecurityGroupBothWayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Priority
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Access source
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Access source type. Default: 0. 0: IP; 1: VPC; 2: SUBNET; 3: CVM; 4: CLB; 5: ENI; 6: CDB; 7: Parameter template. 100: asset group
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * Access destination
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Access destination type. Default: 0. 0: IP; 1: VPC; 2: SUBNET; 3: CVM; 4: CLB; 5: ENI; 6: CDB; 7: Parameter template. 100: asset group
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.TargetType = null;

        /**
         * Protocol
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Destination port
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Policy. 1: block; 2: allow
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Direction. 0: outbound; 1: inbound. 1 by default
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Description
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Toggle status. 0: off; 1: on
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Indicates whether the rule is normal. 0: normal; 1: abnormal
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsNew = null;

        /**
         * One-way/two-way. 0: one-way; 1: two-way
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.BothWay = null;

        /**
         * VPC ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Public IP. Multiple IPs are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP. Multiple IPs are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Masked address. Multiple addresses are separated by commas.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Cidr = null;

        /**
         * Port protocol template ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * Indicates whether to use the port protocol template. 0: no; 1: yes
         * @type {number || null}
         */
        this.ProtocolPortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.BothWay = 'BothWay' in params ? params.BothWay : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ProtocolPortType = 'ProtocolPortType' in params ? params.ProtocolPortType : null;

    }
}

/**
 * ModifyAllRuleStatus response structure.
 * @class
 */
class ModifyAllRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: modified successfully; non-0: modification failed
Note: This field may return `null`, indicating that no valid value was found.
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
 * StopSecurityGroupRuleDispatch request structure.
 * @class
 */
class StopSecurityGroupRuleDispatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stops all if set to 1
         * @type {number || null}
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
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * DescribeBlockIgnoreList request structure.
 * @class
 */
class DescribeBlockIgnoreListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Direction. Valid values: 1: inbound public access; 0: outbound public access; 3: private network access; empty string: all access.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Rule type. Valid values: 1: block; 2: allow.
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * Column by which rules are sorted. Valid values: EndTime: end time; StartTime: start time; MatchTimes: number of matching times.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sort order. Valid values: desc: descending; asc: ascending.
         * @type {string || null}
         */
        this.By = null;

        /**
         * Search keys, in a JSON string. Valid values: {}: empty; domain: domain name; level: threat level; ignore_reason: reason for allowing access; rule_source: source of a security event; address: geographical location; common: fuzzy search.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * ModifyBlockTop response structure.
 * @class
 */
class ModifyBlockTopResponse extends  AbstractModel {
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
 * ModifyStorageSetting request structure.
 * @class
 */
class ModifyStorageSettingRequest extends  AbstractModel {
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
 * DescribeNatFwVpcDnsLst response structure.
 * @class
 */
class DescribeNatFwVpcDnsLstResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC DNS info array of NAT firewall
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<VpcDnsInfo> || null}
         */
        this.VpcDnsSwitchLst = null;

        /**
         * Response parameter
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Total number of toggles
Note: This field may return `null`, indicating that no valid value was found.
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

        if (params.VpcDnsSwitchLst) {
            this.VpcDnsSwitchLst = new Array();
            for (let z in params.VpcDnsSwitchLst) {
                let obj = new VpcDnsInfo();
                obj.deserialize(params.VpcDnsSwitchLst[z]);
                this.VpcDnsSwitchLst.push(obj);
            }
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Item in the access control list. Each item represents an access control rule.
 * @class
 */
class DescAcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceContent = null;

        /**
         * Access destination.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetContent = null;

        /**
         * Protocol.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Action that Cloud Firewall performs on the traffic. Valid values: accept (allow), drop (reject), and log (monitor).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleAction = null;

        /**
         * Description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Number of rule matching times.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Rule sequence number.
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * Access source type. Valid values for an inbound rule: ip, net, template, and location; valid values for an outbound rule: ip, net, template, instance, group, and tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Access destination type. Valid values for an inbound rule: ip, net, template, instance, group, and tag; valid values for an outbound rule: ip, net, domain, template, and location.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Unique ID of the rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Uuid = null;

        /**
         * Rule validity.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Invalid = null;

        /**
         * Valid values: 0: common rules; 1: regional rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsRegion = null;

        /**
         * Country ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CountryCode = null;

        /**
         * City ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CityCode = null;

        /**
         * Country name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CountryName = null;

        /**
         * City name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * Cloud provider code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloudCode = null;

        /**
         * Valid values: 0: common rules; 1: cloud provider rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCloud = null;

        /**
         * Rule status. Valid values: true: enabled; false: disabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * Rule direction. Valid values: 1: inbound; 0: outbound.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Instance name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * UUID for internal use. Generally, this field is not required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InternalUuid = null;

        /**
         * Rule status. This field is valid when you query rule matching details. Valid values: 0: new; 1: deleted; 2: edited and deleted.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Details of associated tasks
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BetaInfoByACL> || null}
         */
        this.BetaList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceContent = 'SourceContent' in params ? params.SourceContent : null;
        this.TargetContent = 'TargetContent' in params ? params.TargetContent : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RuleAction = 'RuleAction' in params ? params.RuleAction : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Invalid = 'Invalid' in params ? params.Invalid : null;
        this.IsRegion = 'IsRegion' in params ? params.IsRegion : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.CityCode = 'CityCode' in params ? params.CityCode : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.CloudCode = 'CloudCode' in params ? params.CloudCode : null;
        this.IsCloud = 'IsCloud' in params ? params.IsCloud : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InternalUuid = 'InternalUuid' in params ? params.InternalUuid : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.BetaList) {
            this.BetaList = new Array();
            for (let z in params.BetaList) {
                let obj = new BetaInfoByACL();
                obj.deserialize(params.BetaList[z]);
                this.BetaList.push(obj);
            }
        }

    }
}

/**
 * Changes of the rule sequence number.
 * @class
 */
class RuleChangeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original sequence number
         * @type {number || null}
         */
        this.OrderIndex = null;

        /**
         * New sequence number
         * @type {number || null}
         */
        this.NewOrderIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIndex = 'OrderIndex' in params ? params.OrderIndex : null;
        this.NewOrderIndex = 'NewOrderIndex' in params ? params.NewOrderIndex : null;

    }
}

/**
 * ExpandCfwVertical response structure.
 * @class
 */
class ExpandCfwVerticalResponse extends  AbstractModel {
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
 * DescribeNatAcRule request structure.
 * @class
 */
class DescribeNatAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Index to be queried. This parameter is optional, and is used only in specific cases.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Filter condition combination.
         * @type {Array.<CommonFilter> || null}
         */
        this.Filters = null;

        /**
         * Start time for search. This parameter is optional.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time for search. This parameter is optional.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Valid values: desc: descending; asc: ascending. The returned results are sorted by the value of By. If this parameter is specified, By is also required.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Field by which the returned results are sorted.
         * @type {string || null}
         */
        this.By = null;

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
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CommonFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * Alert monitoring data

 * @class
 */
class TLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compromised servers
         * @type {number || null}
         */
        this.OutNum = null;

        /**
         * Unhandled alerts
         * @type {number || null}
         */
        this.HandleNum = null;

        /**
         * Vulnerability attacks
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * Detected networks
         * @type {number || null}
         */
        this.NetworkNum = null;

        /**
         * Blocklist
         * @type {number || null}
         */
        this.BanNum = null;

        /**
         * Brute force attacks
         * @type {number || null}
         */
        this.BruteForceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutNum = 'OutNum' in params ? params.OutNum : null;
        this.HandleNum = 'HandleNum' in params ? params.HandleNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.BanNum = 'BanNum' in params ? params.BanNum : null;
        this.BruteForceNum = 'BruteForceNum' in params ? params.BruteForceNum : null;

    }
}

/**
 * CreateSecurityGroupRules request structure.
 * @class
 */
class CreateSecurityGroupRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Added enterprise security group rule data
         * @type {Array.<SecurityGroupListData> || null}
         */
        this.Data = null;

        /**
         * Direction. 0: outbound; 1: inbound. 1 by default
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * 0: at the end; 1: at the top; 2: in the middle. 0 by default
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Indicates whether to enable rules after addition. 0: disable; 1: enable. 1 by default
         * @type {number || null}
         */
        this.Enable = null;

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
                let obj = new SecurityGroupListData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteVpcInstance request structure.
 * @class
 */
class DeleteVpcInstanceRequest extends  AbstractModel {
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
 * Firewall status list
 * @class
 */
class SwitchListsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public IP
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.IntranetIp = null;

        /**
         * Instance name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Asset type
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * Region
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Firewall toggle
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * ID value
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Public IP type
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.PublicIpType = null;

        /**
         * Number of risky ports
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.PortTimes = null;

        /**
         * Last scan time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * Scan mode
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ScanMode = null;

        /**
         * Scan status
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ScanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.IntranetIp = 'IntranetIp' in params ? params.IntranetIp : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.PublicIpType = 'PublicIpType' in params ? params.PublicIpType : null;
        this.PortTimes = 'PortTimes' in params ? params.PortTimes : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.ScanMode = 'ScanMode' in params ? params.ScanMode : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;

    }
}

/**
 * CreateNatFwInstanceWithDomain request structure.
 * @class
 */
class CreateNatFwInstanceWithDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Firewall instance name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Bandwidth
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Mode. 1: use existing; 0: create new
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Parameter passed for the Create New mode. Either NewModeItems or NatgwList is required.
         * @type {NewModeItems || null}
         */
        this.NewModeItems = null;

        /**
         * NAT gateway list for the Using Existing mode. Either NewModeItems or NatgwList is required.
         * @type {Array.<string> || null}
         */
        this.NatGwList = null;

        /**
         * Primary zone. The default zone is selected if it is empty.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Secondary zone. The default zone is selected if it is empty.
         * @type {string || null}
         */
        this.ZoneBak = null;

        /**
         * Remote disaster recovery. 1: enable; 0: disable; empty: disable by default
         * @type {number || null}
         */
        this.CrossAZone = null;

        /**
         * 0: not create; 1: create
         * @type {number || null}
         */
        this.IsCreateDomain = null;

        /**
         * Required for creating a domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * IP range of the firewall
         * @type {FwCidrInfo || null}
         */
        this.FwCidrInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.NewModeItems) {
            let obj = new NewModeItems();
            obj.deserialize(params.NewModeItems)
            this.NewModeItems = obj;
        }
        this.NatGwList = 'NatGwList' in params ? params.NatGwList : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneBak = 'ZoneBak' in params ? params.ZoneBak : null;
        this.CrossAZone = 'CrossAZone' in params ? params.CrossAZone : null;
        this.IsCreateDomain = 'IsCreateDomain' in params ? params.IsCreateDomain : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.FwCidrInfo) {
            let obj = new FwCidrInfo();
            obj.deserialize(params.FwCidrInfo)
            this.FwCidrInfo = obj;
        }

    }
}

/**
 * DescribeSwitchLists response structure.
 * @class
 */
class DescribeSwitchListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total entries
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List data
         * @type {Array.<SwitchListsData> || null}
         */
        this.Data = null;

        /**
         * Region list
         * @type {Array.<string> || null}
         */
        this.AreaLists = null;

        /**
         * Number of enabled firewalls
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OnNum = null;

        /**
         * Number of disabled firewalls
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OffNum = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SwitchListsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.AreaLists = 'AreaLists' in params ? params.AreaLists : null;
        this.OnNum = 'OnNum' in params ? params.OnNum : null;
        this.OffNum = 'OffNum' in params ? params.OffNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceGroup response structure.
 * @class
 */
class ModifyResourceGroupResponse extends  AbstractModel {
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
 * DeleteResourceGroup response structure.
 * @class
 */
class DeleteResourceGroupResponse extends  AbstractModel {
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
 * DescribeSwitchLists request structure.
 * @class
 */
class DescribeSwitchListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Firewall status. 0: disabled; 1: enabled
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Asset type, e.g. CVM/NAT/VPN/CLB/others
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Region, e.g. Shanghai, Chongqing, Guangzhou, etc.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Search value, e.g. "{"common":"106.54.189.45"}"
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * Number of entries. Default: 10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort order. desc: descending; asc: ascending
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting field. PortTimes (number of risky ports)
         * @type {string || null}
         */
        this.By = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

    }
}

/**
 * DescribeBlockStaticList request structure.
 * @class
 */
class DescribeBlockStaticListRequest extends  AbstractModel {
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
         * List type. Valid values: port, address, or IP
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * Number of top results returned
         * @type {number || null}
         */
        this.Top = null;

        /**
         * Search criteria
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * Firewall IP range of the VPC
 * @class
 */
class FwVpcCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IP range of the firewall. The mask must be at least /24.
         * @type {string || null}
         */
        this.FwCidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FwCidr = 'FwCidr' in params ? params.FwCidr : null;

    }
}

/**
 * ModifyRunSyncAsset request structure.
 * @class
 */
class ModifyRunSyncAssetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: edge firewall toggle; 1: VPC firewall toggle
         * @type {number || null}
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateAcRules response structure.
 * @class
 */
class CreateAcRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value. 0: operation successful
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Returns redundant information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAssetScan response structure.
 * @class
 */
class ModifyAssetScanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return message
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Error code. 0: success; non-0: failed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Status value. 0: success; 1: scanning; others: failed
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
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAcRule request structure.
 * @class
 */
class ModifyAcRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rules
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * EdgeId value
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Access rule status
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * NAT region
         * @type {string || null}
         */
        this.Area = null;

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
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeNatFwInstancesInfo response structure.
 * @class
 */
class DescribeNatFwInstancesInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance card info array
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<NatInstanceInfo> || null}
         */
        this.NatinsLst = null;

        /**
         * Number of NAT firewalls
Note: This field may return `null`, indicating that no valid value was found.
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

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatInstanceInfo();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddNatAcRule response structure.
 * @class
 */
class AddNatAcRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of new rules.
         * @type {Array.<number> || null}
         */
        this.RuleUuid = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleUuid = 'RuleUuid' in params ? params.RuleUuid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBlockIgnoreList response structure.
 * @class
 */
class ModifyBlockIgnoreListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return message
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * Error code. 0: success; non-0: failed
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatFwInstance response structure.
 * @class
 */
class DescribeNatFwInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance array
         * @type {Array.<NatFwInstance> || null}
         */
        this.NatinsLst = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NatinsLst) {
            this.NatinsLst = new Array();
            for (let z in params.NatinsLst) {
                let obj = new NatFwInstance();
                obj.deserialize(params.NatinsLst[z]);
                this.NatinsLst.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sets the VPC DNS toggle of the NAT firewall 
 * @class
 */
class DnsVpcSwitch extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 0: off; 1: on
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateAcRules request structure.
 * @class
 */
class CreateAcRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creates rule data
         * @type {Array.<RuleInfoData> || null}
         */
        this.Data = null;

        /**
         * 0: add (default); 1: insert
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Edge ID
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Access control rule status
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 0: add; 1: overwrite
         * @type {number || null}
         */
        this.Overwrite = null;

        /**
         * NAT instance ID, required when the parameter Area exists
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * portScan: from port scanning; patchImport: from batch import
         * @type {string || null}
         */
        this.From = null;

        /**
         * NAT region
         * @type {string || null}
         */
        this.Area = null;

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
                let obj = new RuleInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Overwrite = 'Overwrite' in params ? params.Overwrite : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.From = 'From' in params ? params.From : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyEnterpriseSecurityDispatchStatus request structure.
 * @class
 */
class ModifyEnterpriseSecurityDispatchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. Values: `0` (Publish now), `1` (Stop publishing)
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeBlockIgnoreList response structure.
 * @class
 */
class DescribeBlockIgnoreListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List data.
         * @type {Array.<BlockIgnoreRule> || null}
         */
        this.Data = null;

        /**
         * Total number of results, which is used for pagination.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Status code. Valid values: 0: successful; others: failed.
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Status message. Valid values: success: successful query; fail: failed query.
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new BlockIgnoreRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTableStatus request structure.
 * @class
 */
class ModifyTableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Edge ID between two VPCs
         * @type {string || null}
         */
        this.EdgeId = null;

        /**
         * Status value. 1: table locked; 2: table unlocked
         * @type {number || null}
         */
        this.Status = null;

        /**
         * NAT region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 0: outbound; 1: inbound
         * @type {number || null}
         */
        this.Direction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * ModifyTableStatus response structure.
 * @class
 */
class ModifyTableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: normal; -1: abnormal
Note: This field may return `null`, indicating that no valid value was found.
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
 * DescribeGuideScanInfo response structure.
 * @class
 */
class DescribeGuideScanInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scan information
         * @type {ScanInfo || null}
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
            let obj = new ScanInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeNatFwInstanceRequest: DescribeNatFwInstanceRequest,
    ModifyNatFwVpcDnsSwitchResponse: ModifyNatFwVpcDnsSwitchResponse,
    DescribeNatFwInstanceWithRegionRequest: DescribeNatFwInstanceWithRegionRequest,
    ModifyNatAcRuleResponse: ModifyNatAcRuleResponse,
    DescribeRuleOverviewResponse: DescribeRuleOverviewResponse,
    CfwNatDnatRule: CfwNatDnatRule,
    FwCidrInfo: FwCidrInfo,
    StaticInfo: StaticInfo,
    DescribeNatAcRuleResponse: DescribeNatAcRuleResponse,
    ModifyPublicIPSwitchStatusResponse: ModifyPublicIPSwitchStatusResponse,
    ModifyNatAcRuleRequest: ModifyNatAcRuleRequest,
    ModifyAcRuleResponse: ModifyAcRuleResponse,
    ModifyNatSequenceRulesRequest: ModifyNatSequenceRulesRequest,
    DescribeTableStatusResponse: DescribeTableStatusResponse,
    AddAcRuleRequest: AddAcRuleRequest,
    IPDefendStatus: IPDefendStatus,
    BlockIgnoreRule: BlockIgnoreRule,
    ModifyNatFwVpcDnsSwitchRequest: ModifyNatFwVpcDnsSwitchRequest,
    UnHandleEvent: UnHandleEvent,
    DeleteAllAccessControlRuleRequest: DeleteAllAccessControlRuleRequest,
    ModifyAllVPCSwitchStatusResponse: ModifyAllVPCSwitchStatusResponse,
    CreateSecurityGroupRulesResponse: CreateSecurityGroupRulesResponse,
    DescribeNatFwVpcDnsLstRequest: DescribeNatFwVpcDnsLstRequest,
    DescribeTLogInfoResponse: DescribeTLogInfoResponse,
    DescribeUnHandleEventTabListRequest: DescribeUnHandleEventTabListRequest,
    DescribeAssociatedInstanceListResponse: DescribeAssociatedInstanceListResponse,
    AssociatedInstanceInfo: AssociatedInstanceInfo,
    ModifyStorageSettingResponse: ModifyStorageSettingResponse,
    RemoveAcRuleResponse: RemoveAcRuleResponse,
    NatFwInstance: NatFwInstance,
    ExpandCfwVerticalRequest: ExpandCfwVerticalRequest,
    ModifyAllPublicIPSwitchStatusResponse: ModifyAllPublicIPSwitchStatusResponse,
    DeleteVpcInstanceResponse: DeleteVpcInstanceResponse,
    ModifyAssetScanRequest: ModifyAssetScanRequest,
    ModifyBlockIgnoreListRequest: ModifyBlockIgnoreListRequest,
    AddEnterpriseSecurityGroupRulesRequest: AddEnterpriseSecurityGroupRulesRequest,
    SecurityGroupRule: SecurityGroupRule,
    DeleteSecurityGroupRuleResponse: DeleteSecurityGroupRuleResponse,
    ModifySequenceRulesRequest: ModifySequenceRulesRequest,
    SequenceData: SequenceData,
    CreateNatFwInstanceRequest: CreateNatFwInstanceRequest,
    ModifySecurityGroupItemRuleStatusResponse: ModifySecurityGroupItemRuleStatusResponse,
    DescribeEnterpriseSecurityGroupRuleResponse: DescribeEnterpriseSecurityGroupRuleResponse,
    VpcDnsInfo: VpcDnsInfo,
    DescribeEnterpriseSecurityGroupRuleRequest: DescribeEnterpriseSecurityGroupRuleRequest,
    ModifyNatFwReSelectResponse: ModifyNatFwReSelectResponse,
    DeleteSecurityGroupRuleRequest: DeleteSecurityGroupRuleRequest,
    SetNatFwEipRequest: SetNatFwEipRequest,
    SetNatFwEipResponse: SetNatFwEipResponse,
    AcListsData: AcListsData,
    ModifyPublicIPSwitchStatusRequest: ModifyPublicIPSwitchStatusRequest,
    CreateNatRuleItem: CreateNatRuleItem,
    ModifySecurityGroupItemRuleStatusRequest: ModifySecurityGroupItemRuleStatusRequest,
    DescribeSourceAssetRequest: DescribeSourceAssetRequest,
    SecurityGroupOrderIndexData: SecurityGroupOrderIndexData,
    DescribeSourceAssetResponse: DescribeSourceAssetResponse,
    DescribeTLogInfoRequest: DescribeTLogInfoRequest,
    DescribeSecurityGroupListResponse: DescribeSecurityGroupListResponse,
    AssetZone: AssetZone,
    DescribeTLogIpListRequest: DescribeTLogIpListRequest,
    CommonFilter: CommonFilter,
    DescribeNatFwInstancesInfoRequest: DescribeNatFwInstancesInfoRequest,
    ModifyNatSequenceRulesResponse: ModifyNatSequenceRulesResponse,
    DescribeTableStatusRequest: DescribeTableStatusRequest,
    DescribeSecurityGroupListRequest: DescribeSecurityGroupListRequest,
    ModifyResourceGroupRequest: ModifyResourceGroupRequest,
    CreateNatFwInstanceResponse: CreateNatFwInstanceResponse,
    NewModeItems: NewModeItems,
    DescribeNatFwInfoCountResponse: DescribeNatFwInfoCountResponse,
    DescribeDefenseSwitchRequest: DescribeDefenseSwitchRequest,
    ModifyEnterpriseSecurityDispatchStatusResponse: ModifyEnterpriseSecurityDispatchStatusResponse,
    SecurityGroupListData: SecurityGroupListData,
    RemoveNatAcRuleResponse: RemoveNatAcRuleResponse,
    CreateNatFwInstanceWithDomainResponse: CreateNatFwInstanceWithDomainResponse,
    RemoveAcRuleRequest: RemoveAcRuleRequest,
    BetaInfoByACL: BetaInfoByACL,
    RemoveNatAcRuleRequest: RemoveNatAcRuleRequest,
    ModifyAllRuleStatusRequest: ModifyAllRuleStatusRequest,
    RuleInfoData: RuleInfoData,
    DescribeAcListsResponse: DescribeAcListsResponse,
    ModifyAllPublicIPSwitchStatusRequest: ModifyAllPublicIPSwitchStatusRequest,
    DescribeBlockStaticListResponse: DescribeBlockStaticListResponse,
    AddNatAcRuleRequest: AddNatAcRuleRequest,
    ModifySecurityGroupSequenceRulesRequest: ModifySecurityGroupSequenceRulesRequest,
    ScanResultInfo: ScanResultInfo,
    ScanInfo: ScanInfo,
    DescribeUnHandleEventTabListResponse: DescribeUnHandleEventTabListResponse,
    NatFwFilter: NatFwFilter,
    ModifyRunSyncAssetResponse: ModifyRunSyncAssetResponse,
    ModifyEnterpriseSecurityGroupRuleResponse: ModifyEnterpriseSecurityGroupRuleResponse,
    ModifySecurityGroupSequenceRulesResponse: ModifySecurityGroupSequenceRulesResponse,
    IpStatic: IpStatic,
    AddEnterpriseSecurityGroupRulesResponse: AddEnterpriseSecurityGroupRulesResponse,
    UnHandleEventDetail: UnHandleEventDetail,
    RemoveEnterpriseSecurityGroupRuleRequest: RemoveEnterpriseSecurityGroupRuleRequest,
    DeleteResourceGroupRequest: DeleteResourceGroupRequest,
    DescribeBlockByIpTimesListRequest: DescribeBlockByIpTimesListRequest,
    RemoveEnterpriseSecurityGroupRuleResponse: RemoveEnterpriseSecurityGroupRuleResponse,
    ModifyEnterpriseSecurityGroupRuleRequest: ModifyEnterpriseSecurityGroupRuleRequest,
    ModifySequenceRulesResponse: ModifySequenceRulesResponse,
    DescribeResourceGroupNewResponse: DescribeResourceGroupNewResponse,
    DescribeNatFwInstanceWithRegionResponse: DescribeNatFwInstanceWithRegionResponse,
    DescribeResourceGroupNewRequest: DescribeResourceGroupNewRequest,
    ModifyBlockTopRequest: ModifyBlockTopRequest,
    DeleteAcRuleResponse: DeleteAcRuleResponse,
    IocListData: IocListData,
    InstanceInfo: InstanceInfo,
    DescribeIPStatusListRequest: DescribeIPStatusListRequest,
    ModifyNatFwSwitchResponse: ModifyNatFwSwitchResponse,
    DescribeBlockByIpTimesListResponse: DescribeBlockByIpTimesListResponse,
    SetNatFwDnatRuleResponse: SetNatFwDnatRuleResponse,
    DescribeRuleOverviewRequest: DescribeRuleOverviewRequest,
    DescribeDefenseSwitchResponse: DescribeDefenseSwitchResponse,
    DescribeAcListsRequest: DescribeAcListsRequest,
    DescribeGuideScanInfoRequest: DescribeGuideScanInfoRequest,
    DescribeAssociatedInstanceListRequest: DescribeAssociatedInstanceListRequest,
    DeleteAcRuleRequest: DeleteAcRuleRequest,
    DeleteAllAccessControlRuleResponse: DeleteAllAccessControlRuleResponse,
    ModifyNatFwSwitchRequest: ModifyNatFwSwitchRequest,
    DescribeIPStatusListResponse: DescribeIPStatusListResponse,
    NatInstanceInfo: NatInstanceInfo,
    DescribeTLogIpListResponse: DescribeTLogIpListResponse,
    StopSecurityGroupRuleDispatchResponse: StopSecurityGroupRuleDispatchResponse,
    DescribeNatFwInfoCountRequest: DescribeNatFwInfoCountRequest,
    AddAcRuleResponse: AddAcRuleResponse,
    ModifyNatFwReSelectRequest: ModifyNatFwReSelectRequest,
    SetNatFwDnatRuleRequest: SetNatFwDnatRuleRequest,
    ModifyAllVPCSwitchStatusRequest: ModifyAllVPCSwitchStatusRequest,
    SecurityGroupBothWayInfo: SecurityGroupBothWayInfo,
    ModifyAllRuleStatusResponse: ModifyAllRuleStatusResponse,
    StopSecurityGroupRuleDispatchRequest: StopSecurityGroupRuleDispatchRequest,
    DescribeBlockIgnoreListRequest: DescribeBlockIgnoreListRequest,
    ModifyBlockTopResponse: ModifyBlockTopResponse,
    ModifyStorageSettingRequest: ModifyStorageSettingRequest,
    DescribeNatFwVpcDnsLstResponse: DescribeNatFwVpcDnsLstResponse,
    DescAcItem: DescAcItem,
    RuleChangeItem: RuleChangeItem,
    ExpandCfwVerticalResponse: ExpandCfwVerticalResponse,
    DescribeNatAcRuleRequest: DescribeNatAcRuleRequest,
    TLogInfo: TLogInfo,
    CreateSecurityGroupRulesRequest: CreateSecurityGroupRulesRequest,
    DeleteVpcInstanceRequest: DeleteVpcInstanceRequest,
    SwitchListsData: SwitchListsData,
    CreateNatFwInstanceWithDomainRequest: CreateNatFwInstanceWithDomainRequest,
    DescribeSwitchListsResponse: DescribeSwitchListsResponse,
    ModifyResourceGroupResponse: ModifyResourceGroupResponse,
    DeleteResourceGroupResponse: DeleteResourceGroupResponse,
    DescribeSwitchListsRequest: DescribeSwitchListsRequest,
    DescribeBlockStaticListRequest: DescribeBlockStaticListRequest,
    FwVpcCidr: FwVpcCidr,
    ModifyRunSyncAssetRequest: ModifyRunSyncAssetRequest,
    CreateAcRulesResponse: CreateAcRulesResponse,
    ModifyAssetScanResponse: ModifyAssetScanResponse,
    ModifyAcRuleRequest: ModifyAcRuleRequest,
    DescribeNatFwInstancesInfoResponse: DescribeNatFwInstancesInfoResponse,
    AddNatAcRuleResponse: AddNatAcRuleResponse,
    ModifyBlockIgnoreListResponse: ModifyBlockIgnoreListResponse,
    DescribeNatFwInstanceResponse: DescribeNatFwInstanceResponse,
    DnsVpcSwitch: DnsVpcSwitch,
    CreateAcRulesRequest: CreateAcRulesRequest,
    ModifyEnterpriseSecurityDispatchStatusRequest: ModifyEnterpriseSecurityDispatchStatusRequest,
    DescribeBlockIgnoreListResponse: DescribeBlockIgnoreListResponse,
    ModifyTableStatusRequest: ModifyTableStatusRequest,
    ModifyTableStatusResponse: ModifyTableStatusResponse,
    DescribeGuideScanInfoResponse: DescribeGuideScanInfoResponse,

}
