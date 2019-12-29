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
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url
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
         * CLB instance type. 1: generic CLB instance. Currently, only 1 can be passed in
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * CLB instance name, which takes effect only when an instance is created. Rule: 1-50 letters, digits, dashes (-), or underscores (_).
Note: If this name is the same as the name of an existing CLB instance in the system, the system will automatically generate a name for this newly created instance.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network ID of the backend target server of CLB, which can be obtained through the DescribeVpcEx API. If this parameter is not passed in, it will default to a basic network ("0").
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * A subnet ID must be specified when you purchase a private network CLB instance in a VPC, and the VIP of this instance will be generated in this subnet. This parameter is not supported in other cases.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ID of the project to which a CLB instance belongs, which can be obtained through the DescribeProject API. If this parameter is not passed in, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP version. Value range: IPv4, IPv6. Default value: IPv4. This parameter is applicable only to public network CLB.
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * Number of CLBs to be created. Default value: 1.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Sets the primary AZ ID for cross-AZ disaster recovery, such as 100001 or ap-guangzhou-1, which is applicable only to public network CLB.
Note: A primary AZ carries traffic, while a secondary AZ does not carry traffic by default and will be used only if the primary AZ becomes unavailable. The platform will automatically select the optimal secondary AZ. The list of primary AZs in a specific region can be queried through the DescribeMasterZones API.
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * Specifies an AZ ID for creating a CLB instance, such as ap-guangzhou-1, which is applicable only to public network CLB.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB network billing method. This parameter is applicable only to public network CLB, and takes effect only for users whose bandwidth is managed in IP and CLB.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Tags a CLB instance when purchasing it
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
         * Domain name of the forwarding rule to be deleted. This parameter does not take effect if LocationIds is specified
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding path of the forwarding rule to be deleted. This parameter does not take effect if LocationIds is specified
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
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * Region information of the real server bound to a CLB.
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * Network billing parameter. Note: The maximum outbound bandwidth can be modified, but the network billing method cannot be modified.
         * @type {InternetAccessible || null}
         */
        this.InternetChargeInfo = null;

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
         * New forwarding path of the forwarding rule. This parameter is not required if the URL does not need to be modified
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
         * Forwarding protocol between CLB instance and real server. Value range: HTTP, HTTPS. Default value: HTTP
         * @type {string || null}
         */
        this.ForwardType = null;

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
         * Array of CLB forwarding rules
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
 * Modifies the data type of a node weight
 * @class
 */
class RsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers for which to modify the weight
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID
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
         * New forwarding weight of a real server. Value range: 0-100.
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
         * List of real server instance IDs
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
 * DescribeTaskStatus request structure.
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request ID, i.e., the RequestId parameter returned by the API
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
 * DescribeRewrite response structure.
 * @class
 */
class DescribeRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of redirection forwarding rules. If there are no redirection rules, an empty array will be returned
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
 * CreateRule response structure.
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
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
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of listener IDs
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
 * DescribeListeners response structure.
 * @class
 */
class DescribeListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of listeners
         * @type {Array.<Listener> || null}
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
                let obj = new Listener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * HTTPS:443 listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Domain name to be redirected under an HTTPS:443 listener
         * @type {Array.<string> || null}
         */
        this.Domains = null;

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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Detailed information of the current health status. Alive: healthy; Dead: exceptional; Unknown: check not started/checking/unknown status.
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
        this.HealthStatusDetial = 'HealthStatusDetial' in params ? params.HealthStatusDetial : null;

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
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Health check status of the real server bound to this rule
Note: This field may return null, indicating that no valid values can be obtained.
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
         * 
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
         * Health check parameter, which is applicable only to TCP/UDP/TCP_SSL listeners.
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information. This parameter is applicable only to HTTPS/TCP_SSL listeners.
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
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Unique ID of a CVM instance, which needs to be passed in when binding a CVM instance and can be obtained from the InstanceId field in the return of the DescribeInstances API.
Note: Either InstanceId or EniIp must be passed in.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Forwarding weight of a real server. Value range: [0, 100]. Default value: 10.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * This parameter must be passed in when you bind an ENI, which represents the IP address of the ENI. The ENI has to be bound to a CVM instance first before it can be bound to a CLB instance. Note: Either InstanceId or EniIp must be passed in. To bind an ENI, you need to submit a ticket for application first.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * List of real servers to be bound. Array length limit: 20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Target forwarding rule domain name. This parameter does not take effect if LocationId is specified
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Target forwarding rule URL. This parameter does not take effect if LocationId is specified
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
1 means that the return value of 1xx after detection means healthy, 2 for returning 2xx for healthy, 4 for returning 3xx for healthy, 8 for returning 4xx for healthy, and 16 for returning 5xx for healthy. If you want multiple return codes to represent healthy, sum up the corresponding values. Note: The HTTP health check mode of TCP listeners only supports specifying one kind of health check status code.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Health check domain name (applicable only to HTTP/HTTPS forwarding rules and HTTP health checks of TCP listeners).
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeClassicalLBByInstanceId request structure.
 * @class
 */
class DescribeClassicalLBByInstanceIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of real server IDs.
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
 * 独占集群
 * @class
 */
class ExclusiveCluster extends  AbstractModel {
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
         * Forwarding rule ID. When binding a real server to a layer-7 forwarding rule, you must provide either this parameter or Domain+Url
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
         * List of real servers for which to modify the weight
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
 * ModifyDomain request structure.
 * @class
 */
class ModifyDomainRequest extends  AbstractModel {
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
 * Details of a real server bound to a listener
 * @class
 */
class Backend extends  AbstractModel {
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
         * 
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * 
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
         * List of CLB instances
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Listener protocol: TCP, UDP, HTTP, HTTPS, or TCP_SSL (which is currently in beta test. If you want to use it, please submit a ticket for application)
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * List of names of the listeners to be created. The array of names and array of ports are in one-to-one correspondence. If you do not want to name them now, you do not need to provide this parameter.
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * Health check parameter, which is applicable only to TCP/UDP/TCP_SSL listeners
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information. This parameter is applicable only to HTTPS/TCP_SSL listeners.
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
         * CLB instance ID.
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
         * Public IP of the real server bound to a CLB.
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * Private IP of the real server bound to a CLB.
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * Data offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of CLB instances to be returned. Default value: 20.
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
         * Security group ID, such as sg-m1cc9123
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * Master AZ, such as "100001" (Guangzhou Zone 1)
         * @type {string || null}
         */
        this.MasterZone = null;

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
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Binding port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * CVM instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ENI IP
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * Weight of a CVM instance. Value range: [0, 100]. If it is not specified when binding the instance, 10 will be used by default.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Layer-7 rule ID
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
         * Domain name, which must be under a created forwarding rule.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * New domain name
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * Domain name certificate information. Note: This is only applicable to SNI-enabled listeners.
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
         * CLB instance ID in the format of lb-12345678
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Listener ID in the format of lbl-12345678
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of real servers to be unbound. Array length limit: 20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * Forwarding rule ID in the format of loc-12345678. When unbinding a server from a layer-7 forwarding rule, you must provide either this parameter or Domain+Url
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
 * DescribeClassicalLBListeners response structure.
 * @class
 */
class DescribeClassicalLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of listeners
Note: This field may return null, indicating that no valid values can be obtained.
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
 * CreateLoadBalancer response structure.
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of unique CLB instance IDs.
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
         * Type of the listener protocol to be queried. Value range: TCP, UDP, HTTP, HTTPS, TCP_SSL
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
         * List of real servers
Note: This field may return null, indicating that no valid values can be obtained.
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
 * HTTP/HTTPS forwarding rule (input)
 * @class
 */
class RuleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name of the forwarding rule. Length: 1-80.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Forwarding rule path. Length: 1-200.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Session persistence time in seconds. Value range: 30-3,600. Setting it to 0 indicates that session persistence is disabled.
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * Health check information
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * Certificate information
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
         * Forwarding protocol between CLB and real server. Currently, HTTP is supported
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * Whether to set this domain name as the default domain name. Note: Only one default domain name can be set under one listener.
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * Whether to enable Http2. Note: Http2 can be enabled only for HTTPS domain names.
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * Target real server type. NODE: binding a general node; TARGETGROUP: binding a target group.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * 
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
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
 * Network billing method based on the maximum outbound bandwidth
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
         * CLB listening protocol. Value range: TCP, UDP, HTTP, HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CLB listening port. Value range: [1-65535]
         * @type {number || null}
         */
        this.ListenerPort = null;

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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * CLB instance domain name. This field is provided only to public network classic CLB instance.
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
         * IP version. Value range: ipv4, ipv6
Note: This field may return null, indicating that no valid values can be obtained.
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
         * CLB instance billing mode
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
         * Whether a real server opens the traffic from a CLB instance to the internet by default
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * 
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * 
         * @type {string || null}
         */
        this.IPv6Mode = null;

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

    }
}

module.exports = {
    DeleteRewriteRequest: DeleteRewriteRequest,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    ExtraInfo: ExtraInfo,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeClassicalLBByInstanceIdResponse: DescribeClassicalLBByInstanceIdResponse,
    DescribeRewriteRequest: DescribeRewriteRequest,
    ClassicalTarget: ClassicalTarget,
    RsWeightRule: RsWeightRule,
    DeregisterTargetsFromClassicalLBRequest: DeregisterTargetsFromClassicalLBRequest,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    BasicTargetGroupInfo: BasicTargetGroupInfo,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    DescribeRewriteResponse: DescribeRewriteResponse,
    CreateRuleResponse: CreateRuleResponse,
    ClassicalTargetInfo: ClassicalTargetInfo,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ZoneInfo: ZoneInfo,
    RegisterTargetsWithClassicalLBResponse: RegisterTargetsWithClassicalLBResponse,
    LoadBalancerHealth: LoadBalancerHealth,
    ModifyRuleResponse: ModifyRuleResponse,
    DescribeClassicalLBTargetsRequest: DescribeClassicalLBTargetsRequest,
    DescribeListenersResponse: DescribeListenersResponse,
    AutoRewriteRequest: AutoRewriteRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    TargetHealth: TargetHealth,
    DescribeClassicalLBHealthStatusResponse: DescribeClassicalLBHealthStatusResponse,
    RuleHealth: RuleHealth,
    Listener: Listener,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    RegisterTargetsWithClassicalLBRequest: RegisterTargetsWithClassicalLBRequest,
    ReplaceCertForLoadBalancersResponse: ReplaceCertForLoadBalancersResponse,
    ModifyListenerRequest: ModifyListenerRequest,
    Target: Target,
    RegisterTargetsRequest: RegisterTargetsRequest,
    HealthCheck: HealthCheck,
    DeleteListenerRequest: DeleteListenerRequest,
    ClassicalHealth: ClassicalHealth,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    DescribeClassicalLBByInstanceIdRequest: DescribeClassicalLBByInstanceIdRequest,
    ManualRewriteResponse: ManualRewriteResponse,
    ModifyDomainAttributesResponse: ModifyDomainAttributesResponse,
    ExclusiveCluster: ExclusiveCluster,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    ModifyDomainRequest: ModifyDomainRequest,
    Backend: Backend,
    LBChargePrepaid: LBChargePrepaid,
    ClassicalListener: ClassicalListener,
    CertificateInput: CertificateInput,
    CreateListenerResponse: CreateListenerResponse,
    ClassicalLoadBalancerInfo: ClassicalLoadBalancerInfo,
    RuleOutput: RuleOutput,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    CreateRuleRequest: CreateRuleRequest,
    RuleTargets: RuleTargets,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    ManualRewriteRequest: ManualRewriteRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    CreateListenerRequest: CreateListenerRequest,
    RewriteLocationMap: RewriteLocationMap,
    ModifyDomainResponse: ModifyDomainResponse,
    RegisterTargetsResponse: RegisterTargetsResponse,
    DeregisterTargetsFromClassicalLBResponse: DeregisterTargetsFromClassicalLBResponse,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    AutoRewriteResponse: AutoRewriteResponse,
    DeregisterTargetsResponse: DeregisterTargetsResponse,
    RewriteTarget: RewriteTarget,
    DescribeTargetsResponse: DescribeTargetsResponse,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    DeleteRewriteResponse: DeleteRewriteResponse,
    BatchTarget: BatchTarget,
    TargetRegionInfo: TargetRegionInfo,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    ReplaceCertForLoadBalancersRequest: ReplaceCertForLoadBalancersRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    ModifyDomainAttributesRequest: ModifyDomainAttributesRequest,
    DeregisterTargetsRequest: DeregisterTargetsRequest,
    CertificateOutput: CertificateOutput,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    ListenerBackend: ListenerBackend,
    TagInfo: TagInfo,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    DescribeClassicalLBHealthStatusRequest: DescribeClassicalLBHealthStatusRequest,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    DescribeListenersRequest: DescribeListenersRequest,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeClassicalLBTargetsResponse: DescribeClassicalLBTargetsResponse,
    RuleInput: RuleInput,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DeleteListenerResponse: DeleteListenerResponse,
    InternetAccessible: InternetAccessible,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    ListenerHealth: ListenerHealth,
    LoadBalancer: LoadBalancer,

}
