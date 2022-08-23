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
 * EnableVpcCniNetworkType request structure.
 * @class
 */
class EnableVpcCniNetworkTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The VPC-CNI mode. `tke-route-eni`: Multi-IP ENI, `tke-direct-eni`: Independent ENI
         * @type {string || null}
         */
        this.VpcCniType = null;

        /**
         * Whether to enable static IP address
         * @type {boolean || null}
         */
        this.EnableStaticIp = null;

        /**
         * The container subnet being used
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * Specifies when to release the IP after the Pod termination in static IP mode. It must be longer than 300 seconds. If this parameter is left empty, the IP address will never be released.
         * @type {number || null}
         */
        this.ExpiredSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VpcCniType = 'VpcCniType' in params ? params.VpcCniType : null;
        this.EnableStaticIp = 'EnableStaticIp' in params ? params.EnableStaticIp : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.ExpiredSeconds = 'ExpiredSeconds' in params ? params.ExpiredSeconds : null;

    }
}

/**
 * DescribeClusterEndpointVipStatus request structure.
 * @class
 */
class DescribeClusterEndpointVipStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterSecurity response structure.
 * @class
 */
class DescribeClusterSecurityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster's account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Cluster's password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Cluster's access CA certificate
         * @type {string || null}
         */
        this.CertificationAuthority = null;

        /**
         * Cluster's access address
         * @type {string || null}
         */
        this.ClusterExternalEndpoint = null;

        /**
         * Domain name accessed by the cluster
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Cluster's endpoint address
         * @type {string || null}
         */
        this.PgwEndpoint = null;

        /**
         * Cluster's access policy group
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.SecurityPolicy = null;

        /**
         * Cluster Kubeconfig file
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * Access address of the cluster JnsGw
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.JnsGwEndpoint = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CertificationAuthority = 'CertificationAuthority' in params ? params.CertificationAuthority : null;
        this.ClusterExternalEndpoint = 'ClusterExternalEndpoint' in params ? params.ClusterExternalEndpoint : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.PgwEndpoint = 'PgwEndpoint' in params ? params.PgwEndpoint : null;
        this.SecurityPolicy = 'SecurityPolicy' in params ? params.SecurityPolicy : null;
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.JnsGwEndpoint = 'JnsGwEndpoint' in params ? params.JnsGwEndpoint : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterSecurity request structure.
 * @class
 */
class DescribeClusterSecurityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the ClusterId field returned by the DescribeClusters API
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusAlertRule request structure.
 * @class
 */
class ModifyPrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alarm configurations
         * @type {PrometheusAlertRuleDetail || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertRuleDetail();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * DeleteClusterInstances response structure.
 * @class
 */
class DeleteClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of deleted instances
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * IDs of instances failed to be deleted
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * IDs of instances that cannot be found
         * @type {Array.<string> || null}
         */
        this.NotFoundInstanceIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.NotFoundInstanceIds = 'NotFoundInstanceIds' in params ? params.NotFoundInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstallEdgeLogAgent request structure.
 * @class
 */
class InstallEdgeLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEdgeCVMInstances request structure.
 * @class
 */
class DescribeEdgeCVMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Filter condition
Only `cvm-id` is supported.
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

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
 * DescribeClusterKubeconfig response structure.
 * @class
 */
class DescribeClusterKubeconfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-account kubeconfig file, used to access the cluster kube-apiserver directly
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterAuthenticationOptions request structure.
 * @class
 */
class DescribeClusterAuthenticationOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterEndpointVipStatus response structure.
 * @class
 */
class DescribeClusterEndpointVipStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port operation status (Creating = in the process of creation; CreateFailed = creation has failed; Created = creation completed; Deleting = in the process of deletion; DeletedFailed = deletion has failed; Deleted = deletion completed; NotFound = operation not found)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Reason for operation failure
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterEndpointSP request structure.
 * @class
 */
class ModifyClusterEndpointSPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Security policy opens single IP or CIDR block to the Internet (for example: '192.168.1.0/24', with 'reject all' as the default).
         * @type {Array.<string> || null}
         */
        this.SecurityPolicies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SecurityPolicies = 'SecurityPolicies' in params ? params.SecurityPolicies : null;

    }
}

/**
 * DescribeClusterInstances response structure.
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances in the cluster
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances in the cluster
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
 * DeleteCluster response structure.
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
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
 * Nodes that are added in scale-out
 * @class
 */
class AutoscalingAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes that are being added
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * Number of nodes that are being initialized
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * Number of normal nodes
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * Total number of nodes
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
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * CreatePrometheusAlertRule request structure.
 * @class
 */
class CreatePrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alarm configurations
         * @type {PrometheusAlertRuleDetail || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertRuleDetail();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * CreateClusterRouteTable response structure.
 * @class
 */
class CreateClusterRouteTableResponse extends  AbstractModel {
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
 * DescribeClusterCommonNames request structure.
 * @class
 */
class DescribeClusterCommonNamesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Sub-account. Up to 50 sub-accounts can be passed in at a time.
         * @type {Array.<string> || null}
         */
        this.SubaccountUins = null;

        /**
         * Role ID. Up to 50 role IDs can be passed in at a time.
         * @type {Array.<string> || null}
         */
        this.RoleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubaccountUins = 'SubaccountUins' in params ? params.SubaccountUins : null;
        this.RoleIds = 'RoleIds' in params ? params.RoleIds : null;

    }
}

/**
 * Describes the TAT service information.
 * @class
 */
class RunAutomationServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the TAT service. Valid values: <br><li>`TRUE`: yes;<br><li>`FALSE`: no<br><br>Default: `FALSE`.
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
 * Edge compute cluster public LB information
 * @class
 */
class EdgeClusterPublicLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the public LB is enabled
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Public network CIDR block allowed to access
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AllowFromCidrs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.AllowFromCidrs = 'AllowFromCidrs' in params ? params.AllowFromCidrs : null;

    }
}

/**
 * DeleteClusterEndpoint response structure.
 * @class
 */
class DeleteClusterEndpointResponse extends  AbstractModel {
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
 * amp alarm channel configuration
 * @class
 */
class PrometheusNotification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Convergence time
         * @type {string || null}
         */
        this.RepeatInterval = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * End time
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * Alarm delivery method. Valid values: `SMS`, `EMAIL`, `CALL`, and `WECHAT`
It respectively represents SMS, email, phone calls, and WeChat.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * The alarm recipient group (user group)
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * The alarm sequence of phone calls
This parameter is used when you specify `CALL` for `NotifyWay`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<number> || null}
         */
        this.PhoneNotifyOrder = null;

        /**
         * The number of phone call alarms
This parameter is used when you specify `CALL` for `NotifyWay`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * Dialing interval in seconds within one polling
This parameter is used when you specify `CALL` for `NotifyWay`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * Polling interval in seconds
This parameter is used when you specify `CALL` for `NotifyWay`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * Phone call alarm arrival notification
This parameter is used when you specify `CALL` for `NotifyWay`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.PhoneArriveNotice = null;

        /**
         * Channel type. Default value: `amp`. The following channels are supported:
amp
webhook
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This parameter is required if `Type` is `webhook`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.WebHook = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RepeatInterval = 'RepeatInterval' in params ? params.RepeatInterval : null;
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PhoneNotifyOrder = 'PhoneNotifyOrder' in params ? params.PhoneNotifyOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.PhoneArriveNotice = 'PhoneArriveNotice' in params ? params.PhoneArriveNotice : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.WebHook = 'WebHook' in params ? params.WebHook : null;

    }
}

/**
 * Cluster version information
 * @class
 */
class ClusterVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of cluster major version, such as 1.18.4
         * @type {Array.<string> || null}
         */
        this.Versions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Versions = 'Versions' in params ? params.Versions : null;

    }
}

/**
 * Object of cluster route
 * @class
 */
class RouteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Destination CIDR.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * Next hop address.
         * @type {string || null}
         */
        this.GatewayIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;

    }
}

/**
 * CreateEdgeLogConfig response structure.
 * @class
 */
class CreateEdgeLogConfigResponse extends  AbstractModel {
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
 * Cluster creation process
 * @class
 */
class ClusterCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Process status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Last time when the status is probed
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastProbeTime = null;

        /**
         * Last time when transiting to the process
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastTransitionTime = null;

        /**
         * Reasons for transiting to the process
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * More information on transition
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastProbeTime = 'LastProbeTime' in params ? params.LastProbeTime : null;
        this.LastTransitionTime = 'LastTransitionTime' in params ? params.LastTransitionTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeAvailableTKEEdgeVersion response structure.
 * @class
 */
class DescribeAvailableTKEEdgeVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version list
         * @type {Array.<string> || null}
         */
        this.Versions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Versions = 'Versions' in params ? params.Versions : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Upgrade progress of a node
 * @class
 */
class InstanceUpgradeProgressItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Task lifecycle
process: running
paused: stopped
pausing: stopping
done: completed
timeout: timed out
aborted: canceled
pending: not started
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Upgrade start time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * Upgrade end time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * Check result before upgrading
         * @type {InstanceUpgradePreCheckResult || null}
         */
        this.CheckResult = null;

        /**
         * Upgrade steps details
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;

        if (params.CheckResult) {
            let obj = new InstanceUpgradePreCheckResult();
            obj.deserialize(params.CheckResult)
            this.CheckResult = obj;
        }

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterEndpointSP response structure.
 * @class
 */
class ModifyClusterEndpointSPResponse extends  AbstractModel {
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
 * Node pool description
 * @class
 */
class NodePool extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Node pool name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cluster instance ID
         * @type {string || null}
         */
        this.ClusterInstanceId = null;

        /**
         * The lifecycle state of the current node pool. Valid values: `creating`, `normal`, `updating`, `deleting`, and `deleted`.
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Auto-scaling group ID
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

        /**
         * Labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Array of taint
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Node list
         * @type {NodeCountSummary || null}
         */
        this.NodeCountSummary = null;

        /**
         * 
         * @type {string || null}
         */
        this.AutoscalingGroupStatus = null;

        /**
         * Maximum number of nodes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.MaxNodesNum = null;

        /**
         * Minimum number of nodes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.MinNodesNum = null;

        /**
         * Desired number of nodes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.DesiredNodesNum = null;

        /**
         * The operating system of the node pool
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * Container image tag, `DOCKER_CUSTOMIZE` (container customized tag), `GENERAL` (general tag, default value)
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Image ID
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * This parameter is required when the custom PodCIDR mode is enabled for the cluster.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.DesiredPodNum = null;

        /**
         * Custom script
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * Resource tag
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether Deletion Protection is enabled
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterInstanceId = 'ClusterInstanceId' in params ? params.ClusterInstanceId : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

        if (params.NodeCountSummary) {
            let obj = new NodeCountSummary();
            obj.deserialize(params.NodeCountSummary)
            this.NodeCountSummary = obj;
        }
        this.AutoscalingGroupStatus = 'AutoscalingGroupStatus' in params ? params.AutoscalingGroupStatus : null;
        this.MaxNodesNum = 'MaxNodesNum' in params ? params.MaxNodesNum : null;
        this.MinNodesNum = 'MinNodesNum' in params ? params.MinNodesNum : null;
        this.DesiredNodesNum = 'DesiredNodesNum' in params ? params.DesiredNodesNum : null;
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.DesiredPodNum = 'DesiredPodNum' in params ? params.DesiredPodNum : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * InstallEdgeLogAgent response structure.
 * @class
 */
class InstallEdgeLogAgentResponse extends  AbstractModel {
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
 * DescribeEdgeClusterInstances response structure.
 * @class
 */
class DescribeEdgeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of nodes in the cluster
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of node information
         * @type {string || null}
         */
        this.InstanceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP Address
 * @class
 */
class IPAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values: `advertise`, `public`, and others
         * @type {string || null}
         */
        this.Type = null;

        /**
         * IP Address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Network port
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeTKEEdgeClusterCredential request structure.
 * @class
 */
class DescribeTKEEdgeClusterCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Auto-upgrades cluster specification
 * @class
 */
class AutoUpgradeClusterLevel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable Auto Cluster Upgrade
         * @type {boolean || null}
         */
        this.IsAutoUpgrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoUpgrade = 'IsAutoUpgrade' in params ? params.IsAutoUpgrade : null;

    }
}

/**
 * Cluster advanced configurations
 * @class
 */
class ClusterAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether IPVS is enabled
         * @type {boolean || null}
         */
        this.IPVS = null;

        /**
         * Whether auto-scaling is enabled for nodes in the cluster (Enabling this function is not supported when you create a cluster)
         * @type {boolean || null}
         */
        this.AsEnabled = null;

        /**
         * Type of runtime component used by the cluster. The types include "docker" and "containerd". Default value: docker
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * NodeName type for a node in a cluster (This includes the two forms of **hostname** and **lan-ip**, with the default as **lan-ip**. If **hostname** is used, you need to set the HostName parameter when creating a node, and the InstanceName needs to be the same as the HostName.)
         * @type {string || null}
         */
        this.NodeNameType = null;

        /**
         * Cluster custom parameter
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * Cluster network type, which can be GR (Global Router) or VPC-CNI. The default value is GR.
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Whether a cluster in VPC-CNI mode uses dynamic IP addresses. The default value is FALSE, which indicates that static IP addresses are used.
         * @type {boolean || null}
         */
        this.IsNonStaticIpMode = null;

        /**
         * Indicates whether to enable cluster deletion protection.
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * Cluster network proxy model, which is only used when ipvs-bpf mode is used. At present, TKE cluster supports three network proxy modes including `iptables`, `ipvs` and `ipvs-bpf` and their parameter setting relationships are as follows:
`iptables`: do not set IPVS and KubeProxyMode.
`ipvs`: set IPVS to `true` and do not set KubeProxyMode.
`ipvs-bpf`: set KubeProxyMode to `kube-proxy-bpf`.
The following conditions are required to use ipvs-bpf network mode:
1. The cluster version must be v1.14 or later.
2. The system image must be Tencent Linux 2.4.
         * @type {string || null}
         */
        this.KubeProxyMode = null;

        /**
         * Indicates whether to enable auditing
         * @type {boolean || null}
         */
        this.AuditEnabled = null;

        /**
         * Specifies the ID of logset to which the audit logs are uploaded.
         * @type {string || null}
         */
        this.AuditLogsetId = null;

        /**
         * Specifies the ID of topic to which the audit logs are uploaded.
         * @type {string || null}
         */
        this.AuditLogTopicId = null;

        /**
         * Specifies the ENI type. Values: `tke-route-eni` (multi-IP shared ENI); `tke-direct-eni` (independent ENI). It defaults to `tke-route-eni`.
         * @type {string || null}
         */
        this.VpcCniType = null;

        /**
         * Runtime version
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * Indicates whether to enable the custom mode for the node’s pod CIDR range
         * @type {boolean || null}
         */
        this.EnableCustomizedPodCIDR = null;

        /**
         * The basic number of Pods in custom mode
         * @type {number || null}
         */
        this.BasePodNumber = null;

        /**
         * Specifies whether to enable Cilium. If it’s left empty, Cilium is not enabled. If `clusterIP` is passed in, it means to enable Cilium to support the clusterIP service type.
         * @type {string || null}
         */
        this.CiliumMode = null;

        /**
         * Whether it is a dual-stack cluster in VPC-CNI mode. Default value: `false`, which indicates it is not a dual-stack cluster.
         * @type {boolean || null}
         */
        this.IsDualStack = null;

        /**
         * Whether to enable qGPU Sharing
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPVS = 'IPVS' in params ? params.IPVS : null;
        this.AsEnabled = 'AsEnabled' in params ? params.AsEnabled : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.NodeNameType = 'NodeNameType' in params ? params.NodeNameType : null;

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.IsNonStaticIpMode = 'IsNonStaticIpMode' in params ? params.IsNonStaticIpMode : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.KubeProxyMode = 'KubeProxyMode' in params ? params.KubeProxyMode : null;
        this.AuditEnabled = 'AuditEnabled' in params ? params.AuditEnabled : null;
        this.AuditLogsetId = 'AuditLogsetId' in params ? params.AuditLogsetId : null;
        this.AuditLogTopicId = 'AuditLogTopicId' in params ? params.AuditLogTopicId : null;
        this.VpcCniType = 'VpcCniType' in params ? params.VpcCniType : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.EnableCustomizedPodCIDR = 'EnableCustomizedPodCIDR' in params ? params.EnableCustomizedPodCIDR : null;
        this.BasePodNumber = 'BasePodNumber' in params ? params.BasePodNumber : null;
        this.CiliumMode = 'CiliumMode' in params ? params.CiliumMode : null;
        this.IsDualStack = 'IsDualStack' in params ? params.IsDualStack : null;
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;

    }
}

/**
 * Node configuration parameters of different roles
 * @class
 */
class RunInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node role. Values: MASTER_ETCD, WORKER. You only need to specify MASTER_ETCD when creating a self-deployed cluster (INDEPENDENT_CLUSTER).
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. For more information, see the API for [creating a CVM instance](https://intl.cloud.tencent.com/document/product/213/15730?from_cn_redirect=1). Pass any parameter other than common parameters. ImageId will be replaced with the image corresponding to the TKE cluster operating system.
         * @type {Array.<string> || null}
         */
        this.RunInstancesPara = null;

        /**
         * An advanced node setting. This parameter overrides the InstanceAdvancedSettings item set at the cluster level and corresponds to RunInstancesPara in a one-to-one sequential manner (currently valid for the ExtraArgs node custom parameter only).
         * @type {Array.<InstanceAdvancedSettings> || null}
         */
        this.InstanceAdvancedSettingsOverrides = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.RunInstancesPara = 'RunInstancesPara' in params ? params.RunInstancesPara : null;

        if (params.InstanceAdvancedSettingsOverrides) {
            this.InstanceAdvancedSettingsOverrides = new Array();
            for (let z in params.InstanceAdvancedSettingsOverrides) {
                let obj = new InstanceAdvancedSettings();
                obj.deserialize(params.InstanceAdvancedSettingsOverrides[z]);
                this.InstanceAdvancedSettingsOverrides.push(obj);
            }
        }

    }
}

/**
 * DescribeTKEEdgeExternalKubeconfig request structure.
 * @class
 */
class DescribeTKEEdgeExternalKubeconfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeAvailableTKEEdgeVersion request structure.
 * @class
 */
class DescribeAvailableTKEEdgeVersionRequest extends  AbstractModel {
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
 * DeleteClusterAsGroups request structure.
 * @class
 */
class DeleteClusterAsGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cluster ID, obtained through the [DescribeClusters](https://intl.cloud.tencent.com/document/api/457/31862?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster scaling group ID list
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * Whether to keep nodes in the scaling group. Default to **false** (not keep)
         * @type {boolean || null}
         */
        this.KeepInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;
        this.KeepInstance = 'KeepInstance' in params ? params.KeepInstance : null;

    }
}

/**
 * DescribeExistedInstances request structure.
 * @class
 */
class DescribeExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the `ClusterId` field returned when you call the DescribeClusters API (Only VPC ID obtained through `ClusterId` need filtering conditions. When comparing statuses, the nodes on all clusters in this region will be used for comparison. You cannot specify `InstanceIds` and `ClusterId` at the same time.)
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Query by one or more instance ID(s). Instance ID format: ins-xxxxxxxx. (Refer to section ID.N of the API overview for this parameter's specific format.) Up to 100 instances are allowed for each request. You cannot specify InstanceIds and Filters at the same time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter condition. For fields and other information, see [the DescribeInstances API](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1). If a ClusterId has been set, then the cluster's VPC ID will be attached as a query field. In this situation, if a "vpc-id" is specified in Filter, then the specified VPC ID must be consistent with the cluster's VPC ID.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Filter by instance IP (Supports both private and public IPs)
         * @type {string || null}
         */
        this.VagueIpAddress = null;

        /**
         * Filter by instance name
         * @type {string || null}
         */
        this.VagueInstanceName = null;

        /**
         * Offset. Default value: 0. For more information on Offset, see the relevant section in the API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on Limit, see the relevant section in the API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter by multiple instance IPs
         * @type {Array.<string> || null}
         */
        this.IpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.VagueIpAddress = 'VagueIpAddress' in params ? params.VagueIpAddress : null;
        this.VagueInstanceName = 'VagueInstanceName' in params ? params.VagueInstanceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IpAddresses = 'IpAddresses' in params ? params.IpAddresses : null;

    }
}

/**
 * Node custom parameter
 * @class
 */
class InstanceExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kubelet custom parameter, in the format of ["k1=v1", "k1=v2"], for example: ["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"].
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubelet = 'Kubelet' in params ? params.Kubelet : null;

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
         * Number of regions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * ## Region List
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegionInstance> || null}
         */
        this.RegionInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RegionInstanceSet) {
            this.RegionInstanceSet = new Array();
            for (let z in params.RegionInstanceSet) {
                let obj = new RegionInstance();
                obj.deserialize(params.RegionInstanceSet[z]);
                this.RegionInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster model adjustment history
 * @class
 */
class ClusterLevelChangeRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Status (valid values: `trading`, `upgrading`, `success`, `failed`)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Original model
         * @type {string || null}
         */
        this.OldLevel = null;

        /**
         * New model
         * @type {string || null}
         */
        this.NewLevel = null;

        /**
         * Trigger type (valid values: `manual`, `auto`)
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartedAt = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.OldLevel = 'OldLevel' in params ? params.OldLevel : null;
        this.NewLevel = 'NewLevel' in params ? params.NewLevel : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.StartedAt = 'StartedAt' in params ? params.StartedAt : null;
        this.EndedAt = 'EndedAt' in params ? params.EndedAt : null;

    }
}

/**
 * ModifyPrometheusAlertRule response structure.
 * @class
 */
class ModifyPrometheusAlertRuleResponse extends  AbstractModel {
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
 * AddNodeToNodePool request structure.
 * @class
 */
class AddNodeToNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Node ID
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * EnableVpcCniNetworkType response structure.
 * @class
 */
class EnableVpcCniNetworkTypeResponse extends  AbstractModel {
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
 * Object of cluster route table
 * @class
 */
class RouteTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table CIDR.
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC instance ID.
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
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeECMInstances request structure.
 * @class
 */
class DescribeECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Filter condition
Only filtering by an ECM ID is supported
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

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
 * EnableClusterDeletionProtection response structure.
 * @class
 */
class EnableClusterDeletionProtectionResponse extends  AbstractModel {
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
 * Cluster-associated scaling group information
 * @class
 */
class ClusterAsGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Scaling group status (`enabled`, `enabling`, `disabled`, `disabling`, `updating`, `deleting`, `scaleDownEnabling`, `scaleDownDisabling`)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether the node is set to unschedulable
Note: this field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IsUnschedulable = null;

        /**
         * Scaling group label list
Note: this field may return null, indicating that no valid value was found.
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsUnschedulable = 'IsUnschedulable' in params ? params.IsUnschedulable : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * Cluster's instance information
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node role: MASTER, WORKER, ETCD, MASTER_ETCD, and ALL. Default value: WORKER
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Reason for instance exception (or initialization)
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * Instance status (running, initializing, or failed)
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * Whether the instance is drained
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.DrainStatus = null;

        /**
         * Node settings
Note: this field may return null, indicating that no valid value is obtained.
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Node private IP
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LanIP = null;

        /**
         * Resource pool ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * ID of the auto-scaling group
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.DrainStatus = 'DrainStatus' in params ? params.DrainStatus : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.LanIP = 'LanIP' in params ? params.LanIP : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

    }
}

/**
 * DescribeVpcCniPodLimits response structure.
 * @class
 */
class DescribeVpcCniPodLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of the models
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The model information and the maximum supported number of Pods in the VPC-CNI mode
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<PodLimitsInstance> || null}
         */
        this.PodLimitsInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.PodLimitsInstanceSet) {
            this.PodLimitsInstanceSet = new Array();
            for (let z in params.PodLimitsInstanceSet) {
                let obj = new PodLimitsInstance();
                obj.deserialize(params.PodLimitsInstanceSet[z]);
                this.PodLimitsInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVersions response structure.
 * @class
 */
class DescribeVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of versions
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Version list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<VersionInstance> || null}
         */
        this.VersionInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.VersionInstanceSet) {
            this.VersionInstanceSet = new Array();
            for (let z in params.VersionInstanceSet) {
                let obj = new VersionInstance();
                obj.deserialize(params.VersionInstanceSet[z]);
                this.VersionInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeClusterInstances request structure.
 * @class
 */
class DescribeEdgeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Max number of returned entries
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter condition. Only `NodeName` is supported.
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
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
 * ECM Cloud Monitoring
 * @class
 */
class ECMRunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is enabled
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
 * DeleteEdgeClusterInstances request structure.
 * @class
 */
class DeleteEdgeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Array of instance IDs to be deleted
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * The type of resource the label is bound to. Type currently supported is **cluster**.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
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
 * ForwardTKEEdgeApplicationRequestV3 response structure.
 * @class
 */
class ForwardTKEEdgeApplicationRequestV3Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data returned after requesting the cluster add-on
         * @type {string || null}
         */
        this.ResponseBody = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResponseBody = 'ResponseBody' in params ? params.ResponseBody : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster network-related parameters
 * @class
 */
class ClusterNetworkSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * CIDR used to assign container and service IPs for the cluster. It cannot conflict with the VPC's CIDR or the CIDRs of other clusters in the same VPC.
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * Whether to ignore ClusterCIDR conflict errors. It defaults to not ignore.
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * Maximum number of pods on each node in the cluster. Default value: 256
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * Maximum number of cluster services. Default value: 256
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * Whether IPVS is enabled. Default value: disabled
         * @type {boolean || null}
         */
        this.Ipvs = null;

        /**
         * Cluster VPC ID, which is required when you create an empty cluster; otherwise, it is automatically set to be consistent with that of the nodes in the cluster
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Whether CNI is enabled for network plugin(s). Default value: enabled
         * @type {boolean || null}
         */
        this.Cni = null;

        /**
         * The network mode of service. This parameter is only applicable to ipvs+bpf mode.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KubeProxyMode = null;

        /**
         * The IP range for service assignment. It cannot conflict with the VPC’s CIDR block nor the CIDR blocks of other clusters in the same VPC.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * The container subnet associated with the cluster
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * Whether to ignore ServiceCIDR conflict errors. It is only valid in VPC-CNI mode. Default value: `false`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.IgnoreServiceCIDRConflict = null;

        /**
         * Whether it is a dual-stack cluster in VPC-CNI mode. Default value: `false`, which indicates it is not a dual-stack cluster.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.IsDualStack = null;

        /**
         * It is used to automatically assign the IP ranges for the service.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Ipv6ServiceCIDR = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.Ipvs = 'Ipvs' in params ? params.Ipvs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Cni = 'Cni' in params ? params.Cni : null;
        this.KubeProxyMode = 'KubeProxyMode' in params ? params.KubeProxyMode : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.IgnoreServiceCIDRConflict = 'IgnoreServiceCIDRConflict' in params ? params.IgnoreServiceCIDRConflict : null;
        this.IsDualStack = 'IsDualStack' in params ? params.IsDualStack : null;
        this.Ipv6ServiceCIDR = 'Ipv6ServiceCIDR' in params ? params.Ipv6ServiceCIDR : null;

    }
}

/**
 * DescribeImages response structure.
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of images
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image information list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageInstance> || null}
         */
        this.ImageInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ImageInstanceSet) {
            this.ImageInstanceSet = new Array();
            for (let z in params.ImageInstanceSet) {
                let obj = new ImageInstance();
                obj.deserialize(params.ImageInstanceSet[z]);
                this.ImageInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Maximum and minimum number of pods in cluster-associated scaling groups
 * @class
 */
class AutoScalingGroupRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of pods in a scaling group
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum number of pods in a scaling group
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * ModifyClusterAttribute request structure.
 * @class
 */
class ModifyClusterAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Project of the Cluster
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * Cluster specification
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * Auto-upgrades cluster specification
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * Whether to enable qGPU Sharing
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;

    }
}

/**
 * DeleteClusterRoute response structure.
 * @class
 */
class DeleteClusterRouteResponse extends  AbstractModel {
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
 * Edge cluster advanced settings
 * @class
 */
class EdgeClusterAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom parameters of the cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {EdgeClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * Runtime type. Valid values: "docker" (default), "containerd".
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Forwarding mode of kube-proxy. Valid values: "iptables" (default), "ipvs".
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExtraArgs) {
            let obj = new EdgeClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.ProxyMode = 'ProxyMode' in params ? params.ProxyMode : null;

    }
}

/**
 * ServiceAccount authentication configuration
 * @class
 */
class ServiceAccountAuthenticationOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * service-account-issuer
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * service-account-jwks-uri
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JWKSURI = null;

        /**
         * If it is set to `true`, a RABC rule is automatically created to allow anonymous users to access `/.well-known/openid-configuration` and `/openid/v1/jwks`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AutoCreateDiscoveryAnonymousAuth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.JWKSURI = 'JWKSURI' in params ? params.JWKSURI : null;
        this.AutoCreateDiscoveryAnonymousAuth = 'AutoCreateDiscoveryAnonymousAuth' in params ? params.AutoCreateDiscoveryAnonymousAuth : null;

    }
}

/**
 * CreateClusterEndpointVip response structure.
 * @class
 */
class CreateClusterEndpointVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request job's FlowId
         * @type {number || null}
         */
        this.RequestFlowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestFlowId = 'RequestFlowId' in params ? params.RequestFlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster resource usage
 * @class
 */
class ResourceUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Resource usage
         * @type {number || null}
         */
        this.Usage = null;

        /**
         * Resource usage details
         * @type {Array.<ResourceUsageDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ResourceUsageDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterRoutes response structure.
 * @class
 */
class DescribeClusterRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances that match the filter condition(s).
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Object of cluster route.
         * @type {Array.<RouteInfo> || null}
         */
        this.RouteSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new RouteInfo();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID list (When it is empty,
all clusters under the account will be obtained)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ·  ClusterName
    Filters by the cluster name
    Type: String
    Required: No

·  ClusterType
    Filters by the cluster type
    Type: String
    Required: No

·  ClusterStatus
    Filters by the cluster status
    Type: String
    Required: No

·  Tags
    Filters by key-value pairs of tags
    Type: String
    Required: No

·  vpc-id
    Filters by the VPC ID
    Type: String
    Required: No

·  tag-key
    Filters by the tag key
    Type: String
    Required: No

·  tag-value
    Filters by the tag value
    Type: String
    Required: No

·  tag:tag-key
    Filters by key-value pairs of tags
    Type: String
    Required: No
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Cluster type, such as `MANAGED_CLUSTER`
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * UpgradeClusterInstances request structure.
 * @class
 */
class UpgradeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * create: starting an upgrade task
pause: pausing the task
resume: continuing the task
abort: stopping the task
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Upgrade type. It’s only required when `Operation` is set as `create`.
reset: the reinstallation and upgrade of major version
hot: the hot upgrade of minor version
major: in-place upgrade of major version
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * List of nodes that need to upgrade
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * This parameter is used when the node joins the cluster again. Refer to the API of creating one or more cluster nodes.
         * @type {UpgradeNodeResetParam || null}
         */
        this.ResetParam = null;

        /**
         * Whether to skip the pre-upgrade check of the node
         * @type {boolean || null}
         */
        this.SkipPreCheck = null;

        /**
         * The maximum tolerable proportion of unavailable pods
         * @type {number || null}
         */
        this.MaxNotReadyPercent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ResetParam) {
            let obj = new UpgradeNodeResetParam();
            obj.deserialize(params.ResetParam)
            this.ResetParam = obj;
        }
        this.SkipPreCheck = 'SkipPreCheck' in params ? params.SkipPreCheck : null;
        this.MaxNotReadyPercent = 'MaxNotReadyPercent' in params ? params.MaxNotReadyPercent : null;

    }
}

/**
 * Information of the add-on selected for installation during cluster creation
 * @class
 */
class ExtensionAddon extends  AbstractModel {
    constructor(){
        super();

        /**
         * Add-on name
         * @type {string || null}
         */
        this.AddonName = null;

        /**
         * Add-on information (description of the add-on resource object in JSON string format)
         * @type {string || null}
         */
        this.AddonParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddonName = 'AddonName' in params ? params.AddonName : null;
        this.AddonParam = 'AddonParam' in params ? params.AddonParam : null;

    }
}

/**
 * DeletePrometheusAlertRule request structure.
 * @class
 */
class DeletePrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The ID list of alarm rules
         * @type {Array.<string> || null}
         */
        this.AlertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AlertIds = 'AlertIds' in params ? params.AlertIds : null;

    }
}

/**
 * DescribeResourceUsage request structure.
 * @class
 */
class DescribeResourceUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeTKEEdgeClusters request structure.
 * @class
 */
class DescribeTKEEdgeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID list (when it is empty,
all clusters under the account are obtained)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Offset. Default value: `0`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: `20`
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition (only filtering by a single ClusterName is supported)
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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

    }
}

/**
 * ECM Cloud Workload Protection
 * @class
 */
class ECMRunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * CWP version. Valid values: `0` (CWP Pro), `1` (CWP Pro)
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
 * k8s tags, generally exist as an array
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name in map list
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value in map list
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * The maximum number of Pods in VPC-CNI mode supported by a model
 * @class
 */
class PodLimitsByType extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of Pods supported by a TKE shared ENI in non-static IP address mode
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TKERouteENINonStaticIP = null;

        /**
         * The number of Pods supported by a TKE shared ENI in static IP address mode
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TKERouteENIStaticIP = null;

        /**
         * The number of Pods supported by TKE independent ENI mode
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TKEDirectENI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TKERouteENINonStaticIP = 'TKERouteENINonStaticIP' in params ? params.TKERouteENINonStaticIP : null;
        this.TKERouteENIStaticIP = 'TKERouteENIStaticIP' in params ? params.TKERouteENIStaticIP : null;
        this.TKEDirectENI = 'TKEDirectENI' in params ? params.TKEDirectENI : null;

    }
}

/**
 * DescribeClusterRouteTables response structure.
 * @class
 */
class DescribeClusterRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances that match the filter condition(s).
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Object of cluster route table.
         * @type {Array.<RouteTableInfo> || null}
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
                let obj = new RouteTableInfo();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetNodePoolNodeProtection response structure.
 * @class
 */
class SetNodePoolNodeProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the node that has successfully set the removal protection
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SucceedInstanceIds = null;

        /**
         * ID of the node that fails to set the removal protection
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SucceedInstanceIds = 'SucceedInstanceIds' in params ? params.SucceedInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource usage details
 * @class
 */
class ResourceUsageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Resource usage
         * @type {number || null}
         */
        this.Usage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

    }
}

/**
 * CreateTKEEdgeCluster request structure.
 * @class
 */
class CreateTKEEdgeClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster Pod CIDR block
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * Cluster service CIDR block
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * Cluster advanced settings
         * @type {EdgeClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * Maximum number of Pods on the node
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * Public LB of the TKE Edge cluster
         * @type {EdgeClusterPublicLB || null}
         */
        this.PublicLB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;

        if (params.ClusterAdvancedSettings) {
            let obj = new EdgeClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;

        if (params.PublicLB) {
            let obj = new EdgeClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

    }
}

/**
 * DescribeRouteTableConflicts request structure.
 * @class
 */
class DescribeRouteTableConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC bound to the route table
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
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DeleteClusterEndpointVip response structure.
 * @class
 */
class DeleteClusterEndpointVipResponse extends  AbstractModel {
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
 * CreateEdgeLogConfig request structure.
 * @class
 */
class CreateEdgeLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Log collection configuration in json form
         * @type {string || null}
         */
        this.LogConfig = null;

        /**
         * CLS logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.LogConfig = 'LogConfig' in params ? params.LogConfig : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * Describes the basic configuration information of a cluster
 * @class
 */
class ClusterBasicSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster operating system. Public image (enter the image ID) and custom image (enter the image name) are supported. For details, see https://intl.cloud.tencent.com/document/product/457/68289?from_cn_redirect=1
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * Cluster version. The default value is 1.10.5.
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * VPC ID, in the format of vpc-xxx, which is required when you create an empty managed cluster.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the project to which the new resources in the cluster belong.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a resource instance. Currently, a tag can only be bound to cluster instances.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * Container image tag, `DOCKER_CUSTOMIZE` (container customized tag), `GENERAL` (general tag, default value)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Whether to enable the node’s default security group (default: `No`, Alpha feature)
         * @type {boolean || null}
         */
        this.NeedWorkSecurityGroup = null;

        /**
         * When the Cilium Overlay add-on is selected, TKE will take two IPs from the subnet to create the private network CLB.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Cluster specifications available for managed clusters
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * Auto cluster upgrade for managed clusters
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.NeedWorkSecurityGroup = 'NeedWorkSecurityGroup' in params ? params.NeedWorkSecurityGroup : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }

    }
}

/**
 * Object of route table conflict
 * @class
 */
class RouteTableConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table type.
         * @type {string || null}
         */
        this.RouteTableType = null;

        /**
         * Route table CIDR.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * Route table name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RouteTableType = 'RouteTableType' in params ? params.RouteTableType : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DeleteClusterInstances request structure.
 * @class
 */
class DeleteClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of Instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Policy used to delete an instance in the cluster: `terminate` (terminates the instance. Only available for pay-as-you-go CVMs); `retain` (only removes it from the cluster. The instance will be retained.)
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

        /**
         * Whether or not there is forced deletion (when a node is initialized, the parameters can be specified as TRUE)
         * @type {boolean || null}
         */
        this.ForceDelete = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;
        this.ForceDelete = 'ForceDelete' in params ? params.ForceDelete : null;

    }
}

/**
 * Node upgrade and reinstallation parameters
 * @class
 */
class UpgradeNodeResetParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Additional parameters set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Security and Cloud Monitor. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Node login information. For now, it only supports Password or a single KeyIds
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the `sgId` field in the response of `DescribeSecurityGroups`. If this parameter is not specified, the default security group is bound. (Currently, you can only set a single sgId.)
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

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeTKEEdgeClusterStatus response structure.
 * @class
 */
class DescribeTKEEdgeClusterStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current cluster status
         * @type {string || null}
         */
        this.Phase = null;

        /**
         * Array of cluster processes
         * @type {Array.<ClusterCondition> || null}
         */
        this.Conditions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phase = 'Phase' in params ? params.Phase : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ClusterCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterInstances request structure.
 * @class
 */
class CreateClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the ClusterId field returned by the DescribeClusters API
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. To ensure the idempotence of requests for adding cluster nodes, you need to add the ClientToken field in this parameter. For more information, see the documentation for [RunInstances](https://intl.cloud.tencent.com/document/product/213/15730?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.RunInstancePara = null;

        /**
         * Additional parameter to be set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Skips the specified verification. Valid values: GlobalRouteCIDRCheck, VpcCniCIDRCheck
         * @type {Array.<string> || null}
         */
        this.SkipValidateOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RunInstancePara = 'RunInstancePara' in params ? params.RunInstancePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.SkipValidateOptions = 'SkipValidateOptions' in params ? params.SkipValidateOptions : null;

    }
}

/**
 * CreateClusterNodePoolFromExistingAsg request structure.
 * @class
 */
class CreateClusterNodePoolFromExistingAsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

    }
}

/**
 * DescribeTKEEdgeScript response structure.
 * @class
 */
class DescribeTKEEdgeScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to download the link
         * @type {string || null}
         */
        this.Link = null;

        /**
         * Whether to download the desired token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Whether to download the command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Version of edgectl script. The latest version is obtained by default.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScriptVersion = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Link = 'Link' in params ? params.Link : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.ScriptVersion = 'ScriptVersion' in params ? params.ScriptVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterStatus request structure.
 * @class
 */
class DescribeClusterStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID list. All clusters are pulled if it is left empty.
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * Version Info
 * @class
 */
class VersionInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Version Info
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Remark
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteClusterNodePool request structure.
 * @class
 */
class DeleteClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClusterId of a node pool
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * IDs of node pools to delete
         * @type {Array.<string> || null}
         */
        this.NodePoolIds = null;

        /**
         * Indicates whether nodes in a node pool are retained when the node pool is deleted. (The nodes are removed from the cluster. However, the corresponding instances will not be terminated.)
         * @type {boolean || null}
         */
        this.KeepInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolIds = 'NodePoolIds' in params ? params.NodePoolIds : null;
        this.KeepInstance = 'KeepInstance' in params ? params.KeepInstance : null;

    }
}

/**
 * DescribeClusterKubeconfig request structure.
 * @class
 */
class DescribeClusterKubeconfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Defaults to `false`, which means to obtain the kubeconfig of private network
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * Container networking parameters for the cluster
 * @class
 */
class ClusterCIDRSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * CIDR used to assign container and service IPs for the cluster. It cannot conflict with the VPC's CIDR or the CIDRs of other clusters in the same VPC
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * Whether to ignore ClusterCIDR conflict errors, which are not ignored by default
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * Maximum number of Pods on each node. Value range: 16 to 256. When its power is not 2, it will round upward to the closest power of 2.
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * The maximum number of services in a cluster. The range is from 32 to 32768. When its power is not 2, it will round upward to the closest power of 2. Default value is 256.
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * The CIDR block used to assign cluster service IP addresses. It must conflict with neither the VPC CIDR block nor with CIDR blocks of other clusters in the same VPC instance. The IP range must be within the private network IP range, such as 10.1.0.0/14, 192.168.0.1/18, and 172.16.0.0/16.
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * Subnet ID of the ENI in VPC-CNI network mode
         * @type {Array.<string> || null}
         */
        this.EniSubnetIds = null;

        /**
         * Repossession time of ENI IP addresses in VPC-CNI network mode, whose range is [300,15768000)
         * @type {number || null}
         */
        this.ClaimExpiredSeconds = null;

        /**
         * Whether to ignore ServiceCIDR conflict errors. It is only valid in VPC-CNI mode. Default value: `false`.
         * @type {boolean || null}
         */
        this.IgnoreServiceCIDRConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.EniSubnetIds = 'EniSubnetIds' in params ? params.EniSubnetIds : null;
        this.ClaimExpiredSeconds = 'ClaimExpiredSeconds' in params ? params.ClaimExpiredSeconds : null;
        this.IgnoreServiceCIDRConflict = 'IgnoreServiceCIDRConflict' in params ? params.IgnoreServiceCIDRConflict : null;

    }
}

/**
 * CreateClusterEndpointVip request structure.
 * @class
 */
class CreateClusterEndpointVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Security policy opens single IP or CIDR to the Internet (for example: '192.168.1.0/24', with 'reject all' as the default).
         * @type {Array.<string> || null}
         */
        this.SecurityPolicies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SecurityPolicies = 'SecurityPolicies' in params ? params.SecurityPolicies : null;

    }
}

/**
 * Kubernetes Taint
 * @class
 */
class Taint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the taint
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value of the taint
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Effect of the taint
         * @type {string || null}
         */
        this.Effect = null;

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
        this.Effect = 'Effect' in params ? params.Effect : null;

    }
}

/**
 * CheckInstancesUpgradeAble request structure.
 * @class
 */
class CheckInstancesUpgradeAbleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Specify the node list to check. If it’s not passed in, all nodes of the cluster will be checked.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Upgrade type
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filtering
         * @type {Array.<Filter> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

    }
}

/**
 * CreateECMInstances response structure.
 * @class
 */
class CreateECMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM ID list
         * @type {Array.<string> || null}
         */
        this.EcmIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmIdSet = 'EcmIdSet' in params ? params.EcmIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterAsGroupOptionAttribute request structure.
 * @class
 */
class ModifyClusterAsGroupOptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster auto scaling attributes
         * @type {ClusterAsGroupOption || null}
         */
        this.ClusterAsGroupOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ClusterAsGroupOption) {
            let obj = new ClusterAsGroupOption();
            obj.deserialize(params.ClusterAsGroupOption)
            this.ClusterAsGroupOption = obj;
        }

    }
}

/**
 * DescribeClusterNodePools response structure.
 * @class
 */
class DescribeClusterNodePoolsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NodePools (node pool list)
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<NodePool> || null}
         */
        this.NodePoolSet = null;

        /**
         * Total resources
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

        if (params.NodePoolSet) {
            this.NodePoolSet = new Array();
            for (let z in params.NodePoolSet) {
                let obj = new NodePool();
                obj.deserialize(params.NodePoolSet[z]);
                this.NodePoolSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Upgradeable node information
 * @class
 */
class UpgradeAbleInstancesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The current version of the node
         * @type {string || null}
         */
        this.Version = null;

        /**
         * The latest minor version of the current version
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LatestVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;

    }
}

/**
 * GetUpgradeInstanceProgress request structure.
 * @class
 */
class GetUpgradeInstanceProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Maximum number of nodes to be queried
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The starting node for the query
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeClusterEndpoints request structure.
 * @class
 */
class DescribeClusterEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEdgeAvailableExtraArgs request structure.
 * @class
 */
class DescribeEdgeAvailableExtraArgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster version
         * @type {string || null}
         */
        this.ClusterVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

    }
}

/**
 * Information of existing instances
 * @class
 */
class ExistedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the instance supports being added to the cluster (TRUE: support; FALSE: not support).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Usable = null;

        /**
         * Reason that the instance does not support being added.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnusableReason = null;

        /**
         * ID of the cluster in which the instance currently resides.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlreadyInCluster = null;

        /**
         * Instance ID, in the format of ins-xxxxxxxx.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * List of private IPs of the instance's primary ENI.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * List of public IPs of the instance's primary ENI.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Creation time, which follows the ISO8601 standard and uses UTC time. Format: YYYY-MM-DDThh:mm:ssZ.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Instance's number of CPU cores. Unit: cores.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Instance's memory capacity. Unit: GB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Operating system name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Instance model.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Auto scaling group ID
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

        /**
         * Instance billing method. Valid values: POSTPAID_BY_HOUR (pay-as-you-go hourly); CDHPAID (billed based on CDH, i.e., only CDH is billed but not the instances on CDH)
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * IPv6 address of the instance
Note: This field may return `null`, indicating that no valid values can be obtained.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IPv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Usable = 'Usable' in params ? params.Usable : null;
        this.UnusableReason = 'UnusableReason' in params ? params.UnusableReason : null;
        this.AlreadyInCluster = 'AlreadyInCluster' in params ? params.AlreadyInCluster : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.IPv6Addresses = 'IPv6Addresses' in params ? params.IPv6Addresses : null;

    }
}

/**
 * AddNodeToNodePool response structure.
 * @class
 */
class AddNodeToNodePoolResponse extends  AbstractModel {
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
 * ModifyNodePoolInstanceTypes request structure.
 * @class
 */
class ModifyNodePoolInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * List of instance types
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

    }
}

/**
 * DescribeClusterLevelAttribute request structure.
 * @class
 */
class DescribeClusterLevelAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID (available for cluster model adjustment)
         * @type {string || null}
         */
        this.ClusterID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

    }
}

/**
 * DisableClusterDeletionProtection request structure.
 * @class
 */
class DisableClusterDeletionProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * The options for adding the existing node to the node pool
 * @class
 */
class NodePoolOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to add to the node pool.
         * @type {boolean || null}
         */
        this.AddToNodePool = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Whether to inherit the node pool configuration.
         * @type {boolean || null}
         */
        this.InheritConfigurationFromNodePool = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddToNodePool = 'AddToNodePool' in params ? params.AddToNodePool : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InheritConfigurationFromNodePool = 'InheritConfigurationFromNodePool' in params ? params.InheritConfigurationFromNodePool : null;

    }
}

/**
 * DescribeEdgeCVMInstances response structure.
 * @class
 */
class DescribeEdgeCVMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances matched the condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the returned instance information
         * @type {Array.<string> || null}
         */
        this.InstanceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateECMInstances request structure.
 * @class
 */
class CreateECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Module ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * Instance AZ, number of instances and ISP
         * @type {Array.<ECMZoneInstanceCountISP> || null}
         */
        this.ZoneInstanceCountISPSet = null;

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public network bandwidth
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Host name
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Enhanced service (including CWP and Cloud Monitoring)
         * @type {ECMEnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Custom script
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Instance extension information
         * @type {string || null}
         */
        this.External = null;

        /**
         * Security group of the instance
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

        if (params.ZoneInstanceCountISPSet) {
            this.ZoneInstanceCountISPSet = new Array();
            for (let z in params.ZoneInstanceCountISPSet) {
                let obj = new ECMZoneInstanceCountISP();
                obj.deserialize(params.ZoneInstanceCountISPSet[z]);
                this.ZoneInstanceCountISPSet.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.EnhancedService) {
            let obj = new ECMEnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.External = 'External' in params ? params.External : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeClusters response structure.
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster information list
         * @type {Array.<Cluster> || null}
         */
        this.Clusters = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new Cluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Authentication information for accessing K8s
 * @class
 */
class ClusterCredential extends  AbstractModel {
    constructor(){
        super();

        /**
         * CA root certificate
         * @type {string || null}
         */
        this.CACert = null;

        /**
         * Token for authentication
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CACert = 'CACert' in params ? params.CACert : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * DescribeVpcCniPodLimits request structure.
 * @class
 */
class DescribeVpcCniPodLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The availability zone of the model to query, for example, `ap-guangzhou-3`. This field is left empty by default, that is, do not filter by the availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The instance family to query, for example, `S5`. This field is left empty by default, that is, do not filter by the instance family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * The instance model to query, for example, `S5.LARGE8`. This field is empty by default, that is, do not filter by instance type.
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeTKEEdgeScript request structure.
 * @class
 */
class DescribeTKEEdgeScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ENI
         * @type {string || null}
         */
        this.Interface = null;

        /**
         * Name of the name
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Node configuration in JSON format 
         * @type {string || null}
         */
        this.Config = null;

        /**
         * A legacy version of edgectl script can be downloaded. The latest version is downloaded by default. The version information can be checked in the script.
         * @type {string || null}
         */
        this.ScriptVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Interface = 'Interface' in params ? params.Interface : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.ScriptVersion = 'ScriptVersion' in params ? params.ScriptVersion : null;

    }
}

/**
 * Cluster master custom parameter
 * @class
 */
class ClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver custom parameter, in the format of ["k1=v1", "k1=v2"], for example: ["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"].
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeScheduler = null;

        /**
         * etcd custom parameter, which is only effective for self-deployed cluster.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Etcd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KubeAPIServer = 'KubeAPIServer' in params ? params.KubeAPIServer : null;
        this.KubeControllerManager = 'KubeControllerManager' in params ? params.KubeControllerManager : null;
        this.KubeScheduler = 'KubeScheduler' in params ? params.KubeScheduler : null;
        this.Etcd = 'Etcd' in params ? params.Etcd : null;

    }
}

/**
 * Described the configuration and information of k8s node data disk.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * File system (ext3/ext4/xfs)
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * Disk size (G)
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Whether the disk is auto-formatted and mounted
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.AutoFormatAndMount = null;

        /**
         * Mounting directory
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * Mounted device name or partition name (only required when adding an existing node)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskPartition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AutoFormatAndMount = 'AutoFormatAndMount' in params ? params.AutoFormatAndMount : null;
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DiskPartition = 'DiskPartition' in params ? params.DiskPartition : null;

    }
}

/**
 * DescribeEdgeLogSwitches response structure.
 * @class
 */
class DescribeEdgeLogSwitchesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of TKE Edge cluster log switches
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SwitchSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SwitchSet = 'SwitchSet' in params ? params.SwitchSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeCVMInstances response structure.
 * @class
 */
class DeleteEdgeCVMInstancesResponse extends  AbstractModel {
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
 * ModifyClusterNodePool response structure.
 * @class
 */
class ModifyClusterNodePoolResponse extends  AbstractModel {
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
 * GetUpgradeInstanceProgress response structure.
 * @class
 */
class GetUpgradeInstanceProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total nodes to upgrade
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Total upgraded nodes
         * @type {number || null}
         */
        this.Done = null;

        /**
         * The lifecycle of the upgrade task
process: running
paused: stopped
pausing: stopping
done: completed
timeout: timed out
aborted: canceled
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Details of upgrade progress of each node
         * @type {Array.<InstanceUpgradeProgressItem> || null}
         */
        this.Instances = null;

        /**
         * Current cluster status
         * @type {InstanceUpgradeClusterStatus || null}
         */
        this.ClusterStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Done = 'Done' in params ? params.Done : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceUpgradeProgressItem();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

        if (params.ClusterStatus) {
            let obj = new InstanceUpgradeClusterStatus();
            obj.deserialize(params.ClusterStatus)
            this.ClusterStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExistedInstances response structure.
 * @class
 */
class DescribeExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of existing instance information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ExistedInstance> || null}
         */
        this.ExistedInstanceSet = null;

        /**
         * Number of instances that match the filter condition(s).
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

        if (params.ExistedInstanceSet) {
            this.ExistedInstanceSet = new Array();
            for (let z in params.ExistedInstanceSet) {
                let obj = new ExistedInstance();
                obj.deserialize(params.ExistedInstanceSet[z]);
                this.ExistedInstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeAvailableExtraArgs response structure.
 * @class
 */
class DescribeEdgeAvailableExtraArgsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster version
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Available custom parameters
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {EdgeAvailableExtraArgs || null}
         */
        this.AvailableExtraArgs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

        if (params.AvailableExtraArgs) {
            let obj = new EdgeAvailableExtraArgs();
            obj.deserialize(params.AvailableExtraArgs)
            this.AvailableExtraArgs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusAlertRule response structure.
 * @class
 */
class CreatePrometheusAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm ID
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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ECM enhanced services
 * @class
 */
class ECMEnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether Cloud Monitoring is enabled
         * @type {ECMRunMonitorServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Whether Cloud Workload Protection is enabled
         * @type {ECMRunSecurityServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new ECMRunMonitorServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new ECMRunSecurityServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * Describes login settings of an instance.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login password of the instance. <br><li>For Linux instances, the password must include 8-30 characters, and contain at least two of the following character sets: [a-z], [A-Z], [0-9] and [()\`~!@#$%^&*-+=|{}[]:;',.?/]. <br><li>For Windows instances, the password must include 12-30 characters, and contain at least three of the following character sets: [a-z], [A-Z], [0-9] and [()\`~!@#$%^&*-+=|{}[]:;',.?/]. <br><br>If it's not specified, the user needs to set the login password using the **Reset password** option in the CVM console or calling the API `ResetInstancesPassword` to complete the creation of the CVM instance(s).
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call [`DescribeKeyPairs`](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) to obtain `KeyId`. A key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings of an image. You cannot specify this parameter and `Password` or `KeyIds.N` at the same time. You can specify this parameter as `TRUE` only when you create an instance using a custom image, a shared image, or an imported image. Valid values: <br><li>TRUE: keep the login settings of the image <br><li>FALSE: do not keep the login settings of the image <br><br>Default value: FALSE.
Note: This field may return null, indicating that no valid value is found.
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
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * ModifyNodePoolInstanceTypes response structure.
 * @class
 */
class ModifyNodePoolInstanceTypesResponse extends  AbstractModel {
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
 * CreateClusterNodePoolFromExistingAsg response structure.
 * @class
 */
class CreateClusterNodePoolFromExistingAsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnableVpcCniProgress request structure.
 * @class
 */
class DescribeEnableVpcCniProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster for which you want to enable the VPC-CNI mode
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterEndpointStatus request structure.
 * @class
 */
class DescribeClusterEndpointStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether public network access is enabled or not (True = public network access, FALSE = private network access, with the default value as FALSE).
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * GetClusterLevelPrice response structure.
 * @class
 */
class GetClusterLevelPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Discount price (unit: US cent)
         * @type {number || null}
         */
        this.Cost = null;

        /**
         * Original price (unit: US cent)
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PROM instance alarm rule
 * @class
 */
class PrometheusAlertRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * PromQL contents
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * Additional labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Alarm delivery template
         * @type {string || null}
         */
        this.Template = null;

        /**
         * Duration
         * @type {string || null}
         */
        this.For = null;

        /**
         * Rule description
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * Refer to annotations in prometheus rule
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Label> || null}
         */
        this.Annotations = null;

        /**
         * Alarm rule status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RuleState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Rule = 'Rule' in params ? params.Rule : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.For = 'For' in params ? params.For : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Label();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * DescribeResourceUsage response structure.
 * @class
 */
class DescribeResourceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CRD usage
         * @type {ResourceUsage || null}
         */
        this.CRDUsage = null;

        /**
         * Pod usage
         * @type {number || null}
         */
        this.PodUsage = null;

        /**
         * ConfigMap usage
         * @type {number || null}
         */
        this.ConfigMapUsage = null;

        /**
         * Other resource usage
         * @type {ResourceUsage || null}
         */
        this.OtherUsage = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CRDUsage) {
            let obj = new ResourceUsage();
            obj.deserialize(params.CRDUsage)
            this.CRDUsage = obj;
        }
        this.PodUsage = 'PodUsage' in params ? params.PodUsage : null;
        this.ConfigMapUsage = 'ConfigMapUsage' in params ? params.ConfigMapUsage : null;

        if (params.OtherUsage) {
            let obj = new ResourceUsage();
            obj.deserialize(params.OtherUsage)
            this.OtherUsage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterStatus response structure.
 * @class
 */
class DescribeClusterStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster status list
         * @type {Array.<ClusterStatus> || null}
         */
        this.ClusterStatusSet = null;

        /**
         * Number of clusters
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

        if (params.ClusterStatusSet) {
            this.ClusterStatusSet = new Array();
            for (let z in params.ClusterStatusSet) {
                let obj = new ClusterStatus();
                obj.deserialize(params.ClusterStatusSet[z]);
                this.ClusterStatusSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRouteTableConflicts response structure.
 * @class
 */
class DescribeRouteTableConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether there is a conflict in the route table.
         * @type {boolean || null}
         */
        this.HasConflict = null;

        /**
         * Route table conflict list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteTableConflict> || null}
         */
        this.RouteTableConflictSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HasConflict = 'HasConflict' in params ? params.HasConflict : null;

        if (params.RouteTableConflictSet) {
            this.RouteTableConflictSet = new Array();
            for (let z in params.RouteTableConflictSet) {
                let obj = new RouteTableConflict();
                obj.deserialize(params.RouteTableConflictSet[z]);
                this.RouteTableConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Edge compute cluster private LB information
 * @class
 */
class EdgeClusterInternalLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the private LB is enabled
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * ID of the subnet associated with the private LB
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeVersions request structure.
 * @class
 */
class DescribeVersionsRequest extends  AbstractModel {
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
 * CreateCluster response structure.
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task step information
 * @class
 */
class TaskStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Step name
         * @type {string || null}
         */
        this.Step = null;

        /**
         * Lifecycle
pending: the step is not started
running: the step is in progress
success: the step is completed
failed: the step failed
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Step start time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * Step end time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * If the lifecycle of the step is failed, this field will display the error information.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.FailedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Step = 'Step' in params ? params.Step : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;
        this.FailedMsg = 'FailedMsg' in params ? params.FailedMsg : null;

    }
}

/**
 * Describes information related to the Cloud Security service.
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Security](https://intl.cloud.tencent.com/document/product/296?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Security <br><li>FALSE: do not enable Cloud Security <br><br>Default value: TRUE.
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
 * DeleteClusterRouteTable request structure.
 * @class
 */
class DeleteClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * DescribeAvailableClusterVersion request structure.
 * @class
 */
class DescribeAvailableClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * CreateCluster request structure.
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Container networking configuration information for the cluster
         * @type {ClusterCIDRSettings || null}
         */
        this.ClusterCIDRSettings = null;

        /**
         * Cluster type. Managed cluster: MANAGED_CLUSTER; self-deployed cluster: INDEPENDENT_CLUSTER.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. For more information, see the API for [creating a CVM instance](https://intl.cloud.tencent.com/document/product/213/15730?from_cn_redirect=1).
         * @type {Array.<RunInstancesForNode> || null}
         */
        this.RunInstancesForNode = null;

        /**
         * Basic configuration information of the cluster
         * @type {ClusterBasicSettings || null}
         */
        this.ClusterBasicSettings = null;

        /**
         * Advanced configuration information of the cluster
         * @type {ClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * Advanced configuration information of the node
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * The configuration information for existing instances. All instances must be in the same VPC. Up to 100 instances are allowed in one VPC. Spot instances are not supported.
         * @type {Array.<ExistedInstancesForNode> || null}
         */
        this.ExistedInstancesForNode = null;

        /**
         * CVM type and the corresponding data disk mounting configuration information.
         * @type {Array.<InstanceDataDiskMountSetting> || null}
         */
        this.InstanceDataDiskMountSettings = null;

        /**
         * Information of the add-on to be installed
         * @type {Array.<ExtensionAddon> || null}
         */
        this.ExtensionAddons = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterCIDRSettings) {
            let obj = new ClusterCIDRSettings();
            obj.deserialize(params.ClusterCIDRSettings)
            this.ClusterCIDRSettings = obj;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.RunInstancesForNode) {
            this.RunInstancesForNode = new Array();
            for (let z in params.RunInstancesForNode) {
                let obj = new RunInstancesForNode();
                obj.deserialize(params.RunInstancesForNode[z]);
                this.RunInstancesForNode.push(obj);
            }
        }

        if (params.ClusterBasicSettings) {
            let obj = new ClusterBasicSettings();
            obj.deserialize(params.ClusterBasicSettings)
            this.ClusterBasicSettings = obj;
        }

        if (params.ClusterAdvancedSettings) {
            let obj = new ClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.ExistedInstancesForNode) {
            this.ExistedInstancesForNode = new Array();
            for (let z in params.ExistedInstancesForNode) {
                let obj = new ExistedInstancesForNode();
                obj.deserialize(params.ExistedInstancesForNode[z]);
                this.ExistedInstancesForNode.push(obj);
            }
        }

        if (params.InstanceDataDiskMountSettings) {
            this.InstanceDataDiskMountSettings = new Array();
            for (let z in params.InstanceDataDiskMountSettings) {
                let obj = new InstanceDataDiskMountSetting();
                obj.deserialize(params.InstanceDataDiskMountSettings[z]);
                this.InstanceDataDiskMountSettings.push(obj);
            }
        }

        if (params.ExtensionAddons) {
            this.ExtensionAddons = new Array();
            for (let z in params.ExtensionAddons) {
                let obj = new ExtensionAddon();
                obj.deserialize(params.ExtensionAddons[z]);
                this.ExtensionAddons.push(obj);
            }
        }

    }
}

/**
 * DeletePrometheusAlertRule response structure.
 * @class
 */
class DeletePrometheusAlertRuleResponse extends  AbstractModel {
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
 * AcquireClusterAdminRole request structure.
 * @class
 */
class AcquireClusterAdminRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteEdgeClusterInstances response structure.
 * @class
 */
class DeleteEdgeClusterInstancesResponse extends  AbstractModel {
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
 * DeleteTKEEdgeCluster request structure.
 * @class
 */
class DeleteTKEEdgeClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyClusterAuthenticationOptions response structure.
 * @class
 */
class ModifyClusterAuthenticationOptionsResponse extends  AbstractModel {
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
 * DescribeClusterAuthenticationOptions response structure.
 * @class
 */
class DescribeClusterAuthenticationOptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ServiceAccount authentication configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ServiceAccountAuthenticationOptions || null}
         */
        this.ServiceAccounts = null;

        /**
         * Result of the last modification. Values: `Updating`, `Success`, `Failed` or `TimeOut`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceAccounts) {
            let obj = new ServiceAccountAuthenticationOptions();
            obj.deserialize(params.ServiceAccounts)
            this.ServiceAccounts = obj;
        }
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterAsGroups response structure.
 * @class
 */
class DeleteClusterAsGroupsResponse extends  AbstractModel {
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
 * EnableClusterDeletionProtection request structure.
 * @class
 */
class EnableClusterDeletionProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribePrometheusInstance request structure.
 * @class
 */
class DescribePrometheusInstanceRequest extends  AbstractModel {
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
 * Combination of the ECM instance AZ, number of instances, and ISP
 * @class
 */
class ECMZoneInstanceCountISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of instances to be created in the current AZ
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.ISP = null;

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

    }
}

/**
 * DescribeClusterInstances request structure.
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * List of instance IDs to be obtained. This parameter is empty by default, which indicates that all instances in the cluster will be pulled.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Node role. Valid values are MASTER, WORKER, ETCD, MASTER_ETCD, and ALL. Default value: WORKER.
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Filters include `nodepool-id` and `nodepool-instance-type` (how the instance is added to the pool). For `nodepool-instance-type`, the values can be `MANUALLY_ADDED`, `AUTOSCALING_ADDED` and `ALL`.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

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
 * Describes K8s cluster configuration and related information.
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk mount point. By default, no data disk is mounted. Data disks in ext3, ext4, or XFS file system formats will be mounted directly, while data disks in other file systems and unformatted data disks will automatically be formatted as ext4 (xfs for tlinux system) and then mounted. Please back up your data in advance. This setting is only applicable to CVMs with a single data disk.
Note: in multi-disk scenarios, use the DataDisks data structure below to set the corresponding information, such as cloud disk type, cloud disk size, mount path, and whether to perform formatting.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * Specified value of dockerd --graph. Default value: /var/lib/docker
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.DockerGraphPath = null;

        /**
         * Base64-encoded user script, which will be executed after the K8s component starts running. You need to ensure the reentrant and retry logic of the script. The script and its log files can be viewed at the node path: /data/ccs_userscript/. If you want to initialize nodes before adding them to the scheduling list, you can use this parameter together with the unschedulable parameter. After the final initialization of userScript is completed, add the kubectl uncordon nodename --kubeconfig=/root/.kube/config command to enable the node for scheduling.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * Sets whether the added node is schedulable. 0 (default): schedulable; other values: unschedulable. After node initialization is completed, you can run kubectl uncordon nodename to enable this node for scheduling.
         * @type {number || null}
         */
        this.Unschedulable = null;

        /**
         * Node label array
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Mounting information of multiple data disks. When you create a node, ensure that the CVM purchase parameter specifies the information required for the purchase of multiple data disks. For example, the `DataDisks` under `RunInstancesPara` of the `CreateClusterInstances` API should be configured accordingly (Referto document of CreateClusterInstances API). When you add an existing node, ensure that the specified partition exists in the node.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Information about node custom parameters
Note: This field may return null, indicating that no valid value was found.
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * When the custom PodCIDR mode is enabled for the cluster, you can specify the maximum number of pods per node.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DesiredPodNumber = null;

        /**
         * Specifies the base64-encoded custom script to be executed before initialization of the node. It’s only valid for adding existing nodes for now.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PreStartUserScript = null;

        /**
         * Node taint
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DockerGraphPath = 'DockerGraphPath' in params ? params.DockerGraphPath : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.DesiredPodNumber = 'DesiredPodNumber' in params ? params.DesiredPodNumber : null;
        this.PreStartUserScript = 'PreStartUserScript' in params ? params.PreStartUserScript : null;

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

    }
}

/**
 * Region information
 * @class
 */
class RegionInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status of region-related features (return all attributes in JSON format)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FeatureGates = null;

        /**
         * Region abbreviation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Whitelisted location
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FeatureGates = 'FeatureGates' in params ? params.FeatureGates : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Edge cluster master custom parameters
 * @class
 */
class EdgeClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver custom parameter, in the format of ["k1=v1", "k1=v2"], for example: ["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.KubeScheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KubeAPIServer = 'KubeAPIServer' in params ? params.KubeAPIServer : null;
        this.KubeControllerManager = 'KubeControllerManager' in params ? params.KubeControllerManager : null;
        this.KubeScheduler = 'KubeScheduler' in params ? params.KubeScheduler : null;

    }
}

/**
 * The model information and the maximum supported number of Pods in the VPC-CNI mode
 * @class
 */
class PodLimitsInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * The availability zone where the model is located
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The instance family to which the model belongs
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Instance type
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The maximum number of Pods in the VPC-CNI mode supported by the model
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {PodLimitsByType || null}
         */
        this.PodLimits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.PodLimits) {
            let obj = new PodLimitsByType();
            obj.deserialize(params.PodLimits)
            this.PodLimits = obj;
        }

    }
}

/**
 * DescribeEnableVpcCniProgress response structure.
 * @class
 */
class DescribeEnableVpcCniProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status, which can be `Running`, `Succeed`, or `Failed`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The description for the task status when the task status is “Failed”, for example, failed to install the IPAMD component.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The alarm configuration
 * @class
 */
class PrometheusAlertRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Rule list
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.Rules = null;

        /**
         * Last modification time
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * Alarm delivery methods
         * @type {PrometheusNotification || null}
         */
        this.Notification = null;

        /**
         * Alarm rule ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * If the alarm is delivered via a template, the TemplateId is the template ID.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Alarm interval
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

        if (params.Notification) {
            let obj = new PrometheusNotification();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DescribePrometheusInstance response structure.
 * @class
 */
class DescribePrometheusInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.Name = null;

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
         * COS bucket name
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * Data query address
         * @type {string || null}
         */
        this.QueryAddress = null;

        /**
         * The grafana related information in the instance
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {PrometheusGrafanaInfo || null}
         */
        this.Grafana = null;

        /**
         * Custom alertmanager
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.AlertManagerUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Name = 'Name' in params ? params.Name : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.QueryAddress = 'QueryAddress' in params ? params.QueryAddress : null;

        if (params.Grafana) {
            let obj = new PrometheusGrafanaInfo();
            obj.deserialize(params.Grafana)
            this.Grafana = obj;
        }
        this.AlertManagerUrl = 'AlertManagerUrl' in params ? params.AlertManagerUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeCVMInstances request structure.
 * @class
 */
class DeleteEdgeCVMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * IDs of CVMs to be deleted
         * @type {Array.<string> || null}
         */
        this.CvmIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.CvmIdSet = 'CvmIdSet' in params ? params.CvmIdSet : null;

    }
}

/**
 * ModifyClusterNodePool request structure.
 * @class
 */
class ModifyClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum number of nodes
         * @type {number || null}
         */
        this.MaxNodesNum = null;

        /**
         * Minimum number of nodes
         * @type {number || null}
         */
        this.MinNodesNum = null;

        /**
         * Labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Taints
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Indicates whether auto scaling is enabled.
         * @type {boolean || null}
         */
        this.EnableAutoscale = null;

        /**
         * Operating system name
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Image tag, `DOCKER_CUSTOMIZE` (container customized tag), `GENERAL` (general tag, default value)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Node custom parameter
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * Resource tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Sets whether the added node is schedulable. 0 (default): schedulable; other values: unschedulable. After node initialization is completed, you can run `kubectl uncordon nodename` to enable this node for scheduling.
         * @type {number || null}
         */
        this.Unschedulable = null;

        /**
         * Whether Deletion Protection is enabled
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MaxNodesNum = 'MaxNodesNum' in params ? params.MaxNodesNum : null;
        this.MinNodesNum = 'MinNodesNum' in params ? params.MinNodesNum : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.EnableAutoscale = 'EnableAutoscale' in params ? params.EnableAutoscale : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * DescribeEdgeLogSwitches request structure.
 * @class
 */
class DescribeEdgeLogSwitchesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * DescribeECMInstances response structure.
 * @class
 */
class DescribeECMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances matched the condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the returned instance information
         * @type {Array.<string> || null}
         */
        this.InstanceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetClusterLevelPrice request structure.
 * @class
 */
class GetClusterLevelPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cluster model. It’s used for price query.
         * @type {string || null}
         */
        this.ClusterLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

    }
}

/**
 * CreateClusterEndpoint response structure.
 * @class
 */
class CreateClusterEndpointResponse extends  AbstractModel {
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
 * DescribeTKEEdgeClusterStatus request structure.
 * @class
 */
class DescribeTKEEdgeClusterStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Edge compute cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateClusterNodePool request structure.
 * @class
 */
class CreateClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * AS group parameters
         * @type {string || null}
         */
        this.AutoScalingGroupPara = null;

        /**
         * Running parameters
         * @type {string || null}
         */
        this.LaunchConfigurePara = null;

        /**
         * Sample parameters
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Indicates whether to enable auto scaling
         * @type {boolean || null}
         */
        this.EnableAutoscale = null;

        /**
         * Node pool name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Labels
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Taints
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * Node pool runtime type and version
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * Runtime version
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * Node pool operating system (enter the image ID for a custom image, and enter the OS name for a public image)
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * Container image tag, `DOCKER_CUSTOMIZE` (container customized tag), `GENERAL` (general tag, default value)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Resource tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether Deletion Protection is enabled
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupPara = 'AutoScalingGroupPara' in params ? params.AutoScalingGroupPara : null;
        this.LaunchConfigurePara = 'LaunchConfigurePara' in params ? params.LaunchConfigurePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.EnableAutoscale = 'EnableAutoscale' in params ? params.EnableAutoscale : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * CheckEdgeClusterCIDR response structure.
 * @class
 */
class CheckEdgeClusterCIDRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return code. Valid values:
-1: Internal error
0: No conflict
1: Conflict between VPC and serviceCIDR
2: Conflict between VPC and podCIDR
3: Conflict between serviceCIDR and podCIDR
         * @type {number || null}
         */
        this.ConflictCode = null;

        /**
         * CIDR block conflict description
         * @type {string || null}
         */
        this.ConflictMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConflictCode = 'ConflictCode' in params ? params.ConflictCode : null;
        this.ConflictMsg = 'ConflictMsg' in params ? params.ConflictMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcquireClusterAdminRole response structure.
 * @class
 */
class AcquireClusterAdminRoleResponse extends  AbstractModel {
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
 * Custom parameters available for the edge cluster
 * @class
 */
class EdgeAvailableExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeScheduler = null;

        /**
         * kubelet custom parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KubeAPIServer) {
            this.KubeAPIServer = new Array();
            for (let z in params.KubeAPIServer) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeAPIServer[z]);
                this.KubeAPIServer.push(obj);
            }
        }

        if (params.KubeControllerManager) {
            this.KubeControllerManager = new Array();
            for (let z in params.KubeControllerManager) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeControllerManager[z]);
                this.KubeControllerManager.push(obj);
            }
        }

        if (params.KubeScheduler) {
            this.KubeScheduler = new Array();
            for (let z in params.KubeScheduler) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeScheduler[z]);
                this.KubeScheduler.push(obj);
            }
        }

        if (params.Kubelet) {
            this.Kubelet = new Array();
            for (let z in params.Kubelet) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.Kubelet[z]);
                this.Kubelet.push(obj);
            }
        }

    }
}

/**
 * UpdateClusterVersion request structure.
 * @class
 */
class UpdateClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The version that needs to upgrade to
         * @type {string || null}
         */
        this.DstVersion = null;

        /**
         * Cluster custom parameter
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * The maximum tolerable number of unavailable pods
         * @type {number || null}
         */
        this.MaxNotReadyPercent = null;

        /**
         * Whether to skip the precheck
         * @type {boolean || null}
         */
        this.SkipPreCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DstVersion = 'DstVersion' in params ? params.DstVersion : null;

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.MaxNotReadyPercent = 'MaxNotReadyPercent' in params ? params.MaxNotReadyPercent : null;
        this.SkipPreCheck = 'SkipPreCheck' in params ? params.SkipPreCheck : null;

    }
}

/**
 * ModifyClusterAuthenticationOptions request structure.
 * @class
 */
class ModifyClusterAuthenticationOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceAccount authentication configuration
         * @type {ServiceAccountAuthenticationOptions || null}
         */
        this.ServiceAccounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceAccounts) {
            let obj = new ServiceAccountAuthenticationOptions();
            obj.deserialize(params.ServiceAccounts)
            this.ServiceAccounts = obj;
        }

    }
}

/**
 * DeleteClusterEndpointVip request structure.
 * @class
 */
class DeleteClusterEndpointVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Edge cluster parameters
 * @class
 */
class EdgeArgsFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter type
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Parameter description
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * Default value of the parameter
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Valid value or range. Options: `[]` (it indicates a range, for example, “[1, 5]” indicates the parameter must be equal or larger than 1, and be equal or smaller than 5), and `()` (it indicates a valid value, for example, “('aa', 'bb')” indicates the parameter must be “aa” or “bb”. If it is left empty, the verification can be skipped.)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Constraint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Constraint = 'Constraint' in params ? params.Constraint : null;

    }
}

/**
 * DescribeClusterLevelChangeRecords response structure.
 * @class
 */
class DescribeClusterLevelChangeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster model
         * @type {Array.<ClusterLevelChangeRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ClusterLevelChangeRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckInstancesUpgradeAble response structure.
 * @class
 */
class CheckInstancesUpgradeAbleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The current minor version of cluster Master
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * The latest minor version of cluster Master corresponding major version
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * List of nodes that can be upgraded
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<UpgradeAbleInstancesItem> || null}
         */
        this.UpgradeAbleInstances = null;

        /**
         * Total number
Note: this field may return `null`, indicating that no valid value is obtained.
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
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;

        if (params.UpgradeAbleInstances) {
            this.UpgradeAbleInstances = new Array();
            for (let z in params.UpgradeAbleInstances) {
                let obj = new UpgradeAbleInstancesItem();
                obj.deserialize(params.UpgradeAbleInstances[z]);
                this.UpgradeAbleInstances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster information struct
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * Cluster version. The default value is 1.10.5.
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Cluster operating system. centOS 7.2x86_64 or ubuntu 16.04.1 LTSx86_64. Default value: ubuntu 16.04.1 LTSx86_64
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * Cluster type. Managed cluster: MANAGED_CLUSTER; Self-deployed cluster: INDEPENDENT_CLUSTER.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster network-related parameters
         * @type {ClusterNetworkSettings || null}
         */
        this.ClusterNetworkSettings = null;

        /**
         * Current number of nodes in the cluster
         * @type {number || null}
         */
        this.ClusterNodeNum = null;

        /**
         * ID of the project to which the cluster belongs
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Tag description list.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * Cluster status (`Running`, `Creating`, `Idling` or `Abnormal`)
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * Cluster attributes (including a map of different cluster attributes, with attribute fields including NodeNameType (lan-ip mode and hostname mode, with lan-ip mode as default))
         * @type {string || null}
         */
        this.Property = null;

        /**
         * Number of primary nodes currently in the cluster
         * @type {number || null}
         */
        this.ClusterMaterNodeNum = null;

        /**
         * ID of the image used by the cluster
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Container image tag
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Runtime environment of the cluster. Values can be `docker` or `containerd`.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Whether Deletion Protection is enabled
Note: this field may return null, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * Specifies whether the cluster supports external nodes.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.EnableExternalNode = null;

        /**
         * Cluster models. It’s valid for managed clusters.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * The target cluster model for auto-upgrade
Note: this field may return null, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * Whether to enable qGPU Sharing
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

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
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.ClusterNetworkSettings) {
            let obj = new ClusterNetworkSettings();
            obj.deserialize(params.ClusterNetworkSettings)
            this.ClusterNetworkSettings = obj;
        }
        this.ClusterNodeNum = 'ClusterNodeNum' in params ? params.ClusterNodeNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.Property = 'Property' in params ? params.Property : null;
        this.ClusterMaterNodeNum = 'ClusterMaterNodeNum' in params ? params.ClusterMaterNodeNum : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.EnableExternalNode = 'EnableExternalNode' in params ? params.EnableExternalNode : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;
        this.AutoUpgradeClusterLevel = 'AutoUpgradeClusterLevel' in params ? params.AutoUpgradeClusterLevel : null;
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;

    }
}

/**
 * DescribeClusterEndpointStatus response structure.
 * @class
 */
class DescribeClusterEndpointStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The status of cluster access port. It can be `Created` (enabled); `Creating` (enabling) and `NotFound` (not enabled)
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Details of the error occurred while opening the access port
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster status information
 * @class
 */
class ClusterStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster status
         * @type {string || null}
         */
        this.ClusterState = null;

        /**
         * Status of nodes in the cluster
         * @type {string || null}
         */
        this.ClusterInstanceState = null;

        /**
         * Indicates whether the monitoring service is enabled for the cluster
         * @type {boolean || null}
         */
        this.ClusterBMonitor = null;

        /**
         * Number of cluster nodes being created. "-1" indicates that the request to obtain the node status timed out. "-2" indicates that the request failed.
         * @type {number || null}
         */
        this.ClusterInitNodeNum = null;

        /**
         * Number of running nodes in the cluster. "-1" indicates that the request to obtain the node status timed out. "-2" indicates that the request failed.
         * @type {number || null}
         */
        this.ClusterRunningNodeNum = null;

        /**
         * Number of abnormal nodes in the cluster.  "-1" indicates that the request to obtain the node status timed out. "-2" indicates that the request failed.
         * @type {number || null}
         */
        this.ClusterFailedNodeNum = null;

        /**
         * Number of shutdown nodes in the cluster.  "-1" indicates that the request to obtain the node status timed out. "-2" indicates that the request failed.
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ClusterClosedNodeNum = null;

        /**
         * Number of nodes being shut down in the cluster.  "-1" indicates that the request to obtain the node status timed out. "-2" indicates that the request failed.
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ClusterClosingNodeNum = null;

        /**
         * Indicates whether to enable cluster deletion protection
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.ClusterDeletionProtection = null;

        /**
         * Indicates whether the cluster is auditable
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.ClusterAuditEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterState = 'ClusterState' in params ? params.ClusterState : null;
        this.ClusterInstanceState = 'ClusterInstanceState' in params ? params.ClusterInstanceState : null;
        this.ClusterBMonitor = 'ClusterBMonitor' in params ? params.ClusterBMonitor : null;
        this.ClusterInitNodeNum = 'ClusterInitNodeNum' in params ? params.ClusterInitNodeNum : null;
        this.ClusterRunningNodeNum = 'ClusterRunningNodeNum' in params ? params.ClusterRunningNodeNum : null;
        this.ClusterFailedNodeNum = 'ClusterFailedNodeNum' in params ? params.ClusterFailedNodeNum : null;
        this.ClusterClosedNodeNum = 'ClusterClosedNodeNum' in params ? params.ClusterClosedNodeNum : null;
        this.ClusterClosingNodeNum = 'ClusterClosingNodeNum' in params ? params.ClusterClosingNodeNum : null;
        this.ClusterDeletionProtection = 'ClusterDeletionProtection' in params ? params.ClusterDeletionProtection : null;
        this.ClusterAuditEnabled = 'ClusterAuditEnabled' in params ? params.ClusterAuditEnabled : null;

    }
}

/**
 * UpgradeClusterInstances response structure.
 * @class
 */
class UpgradeClusterInstancesResponse extends  AbstractModel {
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
 * AddExistedInstances response structure.
 * @class
 */
class AddExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of failed nodes
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * IDs of successful nodes
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * IDs of (successful or failed) nodes that timed out
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.TimeoutInstanceIds = null;

        /**
         * Causes of the failure to add a node to a cluster
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.FailedReasons = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.TimeoutInstanceIds = 'TimeoutInstanceIds' in params ? params.TimeoutInstanceIds : null;
        this.FailedReasons = 'FailedReasons' in params ? params.FailedReasons : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterRouteTable response structure.
 * @class
 */
class DeleteClusterRouteTableResponse extends  AbstractModel {
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
 * CreateClusterInstances response structure.
 * @class
 */
class CreateClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
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
 * DisableClusterDeletionProtection response structure.
 * @class
 */
class DisableClusterDeletionProtectionResponse extends  AbstractModel {
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
 * DescribeClusterAsGroupOption request structure.
 * @class
 */
class DescribeClusterAsGroupOptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyClusterAttribute response structure.
 * @class
 */
class ModifyClusterAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project of the Cluster
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Cluster name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * Cluster specification
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * Auto-upgrades cluster specification
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * Whether to enable qGPU Sharing
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterAsGroupAttribute response structure.
 * @class
 */
class ModifyClusterAsGroupAttributeResponse extends  AbstractModel {
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
 * DescribeTKEEdgeClusters response structure.
 * @class
 */
class DescribeTKEEdgeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster information list
         * @type {Array.<EdgeCluster> || null}
         */
        this.Clusters = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new EdgeCluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterEndpoint request structure.
 * @class
 */
class CreateClusterEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The ID of the subnet where the cluster's port is located (only needs to be entered when the non-public network access is enabled, and must be within the subnet of the cluster's VPC). 
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether public network access is enabled or not (True = public network access, FALSE = private network access, with the default value as FALSE).
         * @type {boolean || null}
         */
        this.IsExtranet = null;

        /**
         * The domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The security group in use. Required only for public network access.
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * The LB parameter. Required only for public network access.
         * @type {string || null}
         */
        this.ExtensiveParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.ExtensiveParameters = 'ExtensiveParameters' in params ? params.ExtensiveParameters : null;

    }
}

/**
 * ModifyClusterAsGroupOptionAttribute response structure.
 * @class
 */
class ModifyClusterAsGroupOptionAttributeResponse extends  AbstractModel {
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
 * DescribeClusterLevelAttribute response structure.
 * @class
 */
class DescribeClusterLevelAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster model
         * @type {Array.<ClusterLevelAttribute> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ClusterLevelAttribute();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeClusterExtraArgs request structure.
 * @class
 */
class DescribeEdgeClusterExtraArgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * AddExistedInstances request structure.
 * @class
 */
class AddExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance list. Spot instance is not supported.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Detailed information of the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Enhanced services. This parameter is used to specify whether to enable Cloud Security, Cloud Monitoring and other services. If this parameter is not specified, Cloud Monitor and Cloud Security are enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Node login information (currently only supports using Password or single KeyIds)
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * When reinstalling the system, you can specify the HostName of the modified instance (when the cluster is in HostName mode, this parameter is required, and the rule name is the same as the [Create CVM Instance](https://intl.cloud.tencent.com/document/product/213/15730?from_cn_redirect=1) API HostName except for uppercase letters not being supported.
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the `sgId` field returned by DescribeSecurityGroups. If this parameter is not specified, the default security group is bound. (Currently, you can only set a single sgId)
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Node pool options
         * @type {NodePoolOption || null}
         */
        this.NodePool = null;

        /**
         * Skips the specified verification. Valid values: GlobalRouteCIDRCheck, VpcCniCIDRCheck
         * @type {Array.<string> || null}
         */
        this.SkipValidateOptions = null;

        /**
         * This parameter is used to customize the configuration of an instance, which corresponds to the `InstanceIds` one-to-one in sequence. If this parameter is passed in, the default parameter `InstanceAdvancedSettings` will be overwritten and will not take effect. If this parameter is not passed in, the `InstanceAdvancedSettings` will take effect for each instance.

The array length of `InstanceAdvancedSettingsOverride` should be the same as the array length of `InstanceIds`. If its array length is greater than the `InstanceIds` array length, an error will be reported. If its array length is less than the `InstanceIds` array length, the instance without corresponding configuration will use the default configuration.
         * @type {Array.<InstanceAdvancedSettings> || null}
         */
        this.InstanceAdvancedSettingsOverrides = null;

        /**
         * Node image (it is required when creating a node)
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.NodePool) {
            let obj = new NodePoolOption();
            obj.deserialize(params.NodePool)
            this.NodePool = obj;
        }
        this.SkipValidateOptions = 'SkipValidateOptions' in params ? params.SkipValidateOptions : null;

        if (params.InstanceAdvancedSettingsOverrides) {
            this.InstanceAdvancedSettingsOverrides = new Array();
            for (let z in params.InstanceAdvancedSettingsOverrides) {
                let obj = new InstanceAdvancedSettings();
                obj.deserialize(params.InstanceAdvancedSettingsOverrides[z]);
                this.InstanceAdvancedSettingsOverrides.push(obj);
            }
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * DescribeTKEEdgeExternalKubeconfig response structure.
 * @class
 */
class DescribeTKEEdgeExternalKubeconfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kubeconfig file content
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster auto scaling configuration
 * @class
 */
class ClusterAsGroupOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable scale-in
Note: this field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IsScaleDownEnabled = null;

        /**
         * The scale-out method when there are multiple scaling groups. `random`: select a random scaling group. `most-pods`: choose the scaling group that can schedule the most pods. `least-waste`: select the scaling group that can ensure the fewest remaining resources after Pod scheduling.. The default value is `random`.)
Note: this field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Expander = null;

        /**
         * Max concurrent scale-in volume
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MaxEmptyBulkDelete = null;

        /**
         * Number of minutes after cluster scale-out when the system starts judging whether to perform scale-in
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ScaleDownDelay = null;

        /**
         * Number of consecutive minutes of idleness after which the node is subject to scale-in (default value: 10)
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ScaleDownUnneededTime = null;

        /**
         * Percentage of node resource usage below which the node is considered to be idle (default value: 50)
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ScaleDownUtilizationThreshold = null;

        /**
         * During scale-in, ignore nodes with local storage pods (default value: False)
Note: this field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.SkipNodesWithLocalStorage = null;

        /**
         * During scale-in, ignore nodes with pods in the kube-system namespace that are not managed by DaemonSet (default value: False)
Note: this field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.SkipNodesWithSystemPods = null;

        /**
         * Whether to ignore DaemonSet pods by default when calculating resource usage (default value: False: do not ignore)
Note: this field may return null, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.IgnoreDaemonSetsUtilization = null;

        /**
         * Number at which CA health detection is triggered (default value: 3). After the number specified in OkTotalUnreadyCount is exceeded, CA will perform health detection.
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OkTotalUnreadyCount = null;

        /**
         * Max percentage of unready nodes. After the max percentage is exceeded, CA will stop operation.
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MaxTotalUnreadyPercentage = null;

        /**
         * Amount of time before unready nodes become eligible for scale-in
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ScaleDownUnreadyTime = null;

        /**
         * Waiting time before CA deletes nodes that are not registered in Kubernetes
Note: this field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UnregisteredNodeRemovalTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsScaleDownEnabled = 'IsScaleDownEnabled' in params ? params.IsScaleDownEnabled : null;
        this.Expander = 'Expander' in params ? params.Expander : null;
        this.MaxEmptyBulkDelete = 'MaxEmptyBulkDelete' in params ? params.MaxEmptyBulkDelete : null;
        this.ScaleDownDelay = 'ScaleDownDelay' in params ? params.ScaleDownDelay : null;
        this.ScaleDownUnneededTime = 'ScaleDownUnneededTime' in params ? params.ScaleDownUnneededTime : null;
        this.ScaleDownUtilizationThreshold = 'ScaleDownUtilizationThreshold' in params ? params.ScaleDownUtilizationThreshold : null;
        this.SkipNodesWithLocalStorage = 'SkipNodesWithLocalStorage' in params ? params.SkipNodesWithLocalStorage : null;
        this.SkipNodesWithSystemPods = 'SkipNodesWithSystemPods' in params ? params.SkipNodesWithSystemPods : null;
        this.IgnoreDaemonSetsUtilization = 'IgnoreDaemonSetsUtilization' in params ? params.IgnoreDaemonSetsUtilization : null;
        this.OkTotalUnreadyCount = 'OkTotalUnreadyCount' in params ? params.OkTotalUnreadyCount : null;
        this.MaxTotalUnreadyPercentage = 'MaxTotalUnreadyPercentage' in params ? params.MaxTotalUnreadyPercentage : null;
        this.ScaleDownUnreadyTime = 'ScaleDownUnreadyTime' in params ? params.ScaleDownUnreadyTime : null;
        this.UnregisteredNodeRemovalTime = 'UnregisteredNodeRemovalTime' in params ? params.UnregisteredNodeRemovalTime : null;

    }
}

/**
 * AddVpcCniSubnets response structure.
 * @class
 */
class AddVpcCniSubnetsResponse extends  AbstractModel {
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
 * DescribeClusterNodePools request structure.
 * @class
 */
class DescribeClusterNodePoolsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClusterId (cluster ID)
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ·  NodePoolsName
    Filters by the node pool name
    Type: String
    Required: No

·  NodePoolsId
    Filters by the node pool ID
    Type: String
    Required: No

·  tags
    Filters by key-value pairs of tags
    Type: String
    Required: No

·  tag:tag-key
    Filters by key-value pairs of tags
    Type: String
    Required: No
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DescribeClusterRouteTables request structure.
 * @class
 */
class DescribeClusterRouteTablesRequest extends  AbstractModel {
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
 * DeleteTKEEdgeCluster response structure.
 * @class
 */
class DeleteTKEEdgeClusterResponse extends  AbstractModel {
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
 * Configuration parameters of existing nodes in different roles
 * @class
 */
class ExistedInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node role. Values: MASTER_ETCD, WORKER. You only need to specify MASTER_ETCD when creating a self-deployed cluster (INDEPENDENT_CLUSTER).
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Reinstallation parameter of existing instances
         * @type {ExistedInstancesPara || null}
         */
        this.ExistedInstancesPara = null;

        /**
         * Advanced node setting, which overrides the InstanceAdvancedSettings item set at the cluster level (currently valid for the ExtraArgs node custom parameter only)
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettingsOverride = null;

        /**
         * When the custom PodCIDR mode is enabled for the cluster, you can specify the maximum number of pods per node.
         * @type {Array.<number> || null}
         */
        this.DesiredPodNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;

        if (params.ExistedInstancesPara) {
            let obj = new ExistedInstancesPara();
            obj.deserialize(params.ExistedInstancesPara)
            this.ExistedInstancesPara = obj;
        }

        if (params.InstanceAdvancedSettingsOverride) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettingsOverride)
            this.InstanceAdvancedSettingsOverride = obj;
        }
        this.DesiredPodNumbers = 'DesiredPodNumbers' in params ? params.DesiredPodNumbers : null;

    }
}

/**
 * Current status of the cluster during node upgrade
 * @class
 */
class InstanceUpgradeClusterStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total Pods
         * @type {number || null}
         */
        this.PodTotal = null;

        /**
         * Total number of NotReady Pods
         * @type {number || null}
         */
        this.NotReadyPod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PodTotal = 'PodTotal' in params ? params.PodTotal : null;
        this.NotReadyPod = 'NotReadyPod' in params ? params.NotReadyPod : null;

    }
}

/**
 * UninstallEdgeLogAgent response structure.
 * @class
 */
class UninstallEdgeLogAgentResponse extends  AbstractModel {
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
 * DescribeClusterRoutes request structure.
 * @class
 */
class DescribeClusterRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Filtering conditions, which are optional. Currently, only filtering by GatewayIP is supported.
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
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

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
 * DeleteClusterRoute request structure.
 * @class
 */
class DeleteClusterRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Next hop address.
         * @type {string || null}
         */
        this.GatewayIp = null;

        /**
         * Destination CIDR.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

    }
}

/**
 * DeleteECMInstances request structure.
 * @class
 */
class DeleteECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * IDs of ECMs to be deleted
         * @type {Array.<string> || null}
         */
        this.EcmIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.EcmIdSet = 'EcmIdSet' in params ? params.EcmIdSet : null;

    }
}

/**
 * Information of the managed cluster model
 * @class
 */
class ClusterLevelAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster model
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Model name
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Number of Pods
         * @type {number || null}
         */
        this.PodCount = null;

        /**
         * Number of ConfigMap
         * @type {number || null}
         */
        this.ConfigMapCount = null;

        /**
         * Number of CRDs
         * @type {number || null}
         */
        this.CRDCount = null;

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Number of other resources
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OtherCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.PodCount = 'PodCount' in params ? params.PodCount : null;
        this.ConfigMapCount = 'ConfigMapCount' in params ? params.ConfigMapCount : null;
        this.CRDCount = 'CRDCount' in params ? params.CRDCount : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.OtherCount = 'OtherCount' in params ? params.OtherCount : null;

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
 * Describes the configuration of enhanced services, such as Cloud Security and Cloud Monitor.
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables cloud security service. If this parameter is not specified, the cloud security service will be enabled by default.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Enables cloud monitor service. If this parameter is not specified, the cloud monitor service will be enabled by default.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * Enables the TAT service. If this parameter is not specified, the TAT service will not be enabled.
         * @type {RunAutomationServiceEnabled || null}
         */
        this.AutomationService = null;

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

        if (params.AutomationService) {
            let obj = new RunAutomationServiceEnabled();
            obj.deserialize(params.AutomationService)
            this.AutomationService = obj;
        }

    }
}

/**
 * DescribeClusterNodePoolDetail request structure.
 * @class
 */
class DescribeClusterNodePoolDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;

    }
}

/**
 * SetNodePoolNodeProtection request structure.
 * @class
 */
class SetNodePoolNodeProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Node ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether the node needs removal protection
         * @type {boolean || null}
         */
        this.ProtectedFromScaleIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;

    }
}

/**
 * CreateClusterRouteTable request structure.
 * @class
 */
class CreateClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC bound to the route table
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Whether to ignore CIDR conflicts
         * @type {number || null}
         */
        this.IgnoreClusterCidrConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IgnoreClusterCidrConflict = 'IgnoreClusterCidrConflict' in params ? params.IgnoreClusterCidrConflict : null;

    }
}

/**
 * DescribeClusterEndpoints response structure.
 * @class
 */
class DescribeClusterEndpointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CA certificate of cluster APIServer
         * @type {string || null}
         */
        this.CertificationAuthority = null;

        /**
         * Public network access address of cluster APIServer
         * @type {string || null}
         */
        this.ClusterExternalEndpoint = null;

        /**
         * Private network access address of cluster APIServer
         * @type {string || null}
         */
        this.ClusterIntranetEndpoint = null;

        /**
         * Domain name of cluster APIServer
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterDomain = null;

        /**
         * Public network access ACL of cluster APIServer
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterExternalACL = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificationAuthority = 'CertificationAuthority' in params ? params.CertificationAuthority : null;
        this.ClusterExternalEndpoint = 'ClusterExternalEndpoint' in params ? params.ClusterExternalEndpoint : null;
        this.ClusterIntranetEndpoint = 'ClusterIntranetEndpoint' in params ? params.ClusterIntranetEndpoint : null;
        this.ClusterDomain = 'ClusterDomain' in params ? params.ClusterDomain : null;
        this.ClusterExternalACL = 'ClusterExternalACL' in params ? params.ClusterExternalACL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pre-upgrade check result of a node
 * @class
 */
class InstanceUpgradePreCheckResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the check is passed
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * Array of check items
         * @type {Array.<InstanceUpgradePreCheckResultItem> || null}
         */
        this.Items = null;

        /**
         * List of independent pods on this node
         * @type {Array.<string> || null}
         */
        this.SinglePods = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceUpgradePreCheckResultItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.SinglePods = 'SinglePods' in params ? params.SinglePods : null;

    }
}

/**
 * DescribeClusterAsGroups request structure.
 * @class
 */
class DescribeClusterAsGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Scaling group ID list. If this value is null, it indicates that all cluster-associated scaling groups are pulled.
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * Offset. This value defaults to 0. For more information on Offset, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. This value defaults to 20. The maximum is 100. For more information on Limit, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeImages request structure.
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
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
 * UninstallEdgeLogAgent request structure.
 * @class
 */
class UninstallEdgeLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeAvailableClusterVersion response structure.
 * @class
 */
class DescribeAvailableClusterVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Upgradable cluster version
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Versions = null;

        /**
         * Cluster information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<ClusterVersion> || null}
         */
        this.Clusters = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Versions = 'Versions' in params ? params.Versions : null;

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new ClusterVersion();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of tag descriptions. By specifying this parameter, you can bind tags to corresponding resource instances at the same time. Currently, only tags are bound to cloud host instances.
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type of resource that the tag is bound to. The type currently supported is `cluster`.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * List of tag pairs
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
 * DescribeClusterLevelChangeRecords request structure.
 * @class
 */
class DescribeClusterLevelChangeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * Offset. Default value: `0`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: `20`
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AddVpcCniSubnets request structure.
 * @class
 */
class AddVpcCniSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The subnets added for the cluster container network
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * ID of the VPC where the cluster resides
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * Check result for node upgrade
 * @class
 */
class InstanceUpgradePreCheckResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The namespace of the workload
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Workload type
         * @type {string || null}
         */
        this.WorkLoadKind = null;

        /**
         * Workload name
         * @type {string || null}
         */
        this.WorkLoadName = null;

        /**
         * The number of running pods in the workload before draining the node
         * @type {number || null}
         */
        this.Before = null;

        /**
         * The number of running pods in the workload after draining the node
         * @type {number || null}
         */
        this.After = null;

        /**
         * The pod list of the workload on this node
         * @type {Array.<string> || null}
         */
        this.Pods = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.WorkLoadKind = 'WorkLoadKind' in params ? params.WorkLoadKind : null;
        this.WorkLoadName = 'WorkLoadName' in params ? params.WorkLoadName : null;
        this.Before = 'Before' in params ? params.Before : null;
        this.After = 'After' in params ? params.After : null;
        this.Pods = 'Pods' in params ? params.Pods : null;

    }
}

/**
 * DescribeClusterCommonNames response structure.
 * @class
 */
class DescribeClusterCommonNamesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CommonName in the certificate of the client corresponding to the sub-account UIN
         * @type {Array.<CommonName> || null}
         */
        this.CommonNames = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CommonNames) {
            this.CommonNames = new Array();
            for (let z in params.CommonNames) {
                let obj = new CommonName();
                obj.deserialize(params.CommonNames[z]);
                this.CommonNames.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Reinstallation parameter of existing instances
 * @class
 */
class ExistedInstancesPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Additional parameter to be set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Enhanced services. This parameter is used to specify whether to enable Cloud Security, Cloud Monitor and other services. If this parameter is not specified, Cloud Monitor and Cloud Security are enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Node login information (currently only supports using Password or single KeyIds)
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the sgId field in the returned values of DescribeSecurityGroups. If this parameter is not specified, the default security group is bound. (Currently, you can only set a single sgId)
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * When reinstalling the system, you can specify the HostName of the modified instance (when the cluster is in HostName mode, this parameter is required, and the rule name is the same as the [Create CVM Instance](https://intl.cloud.tencent.com/document/product/213/15730?from_cn_redirect=1) API HostName except for uppercase letters not being supported.
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * The CommonName in the certificate of the client corresponding to the user UIN
 * @class
 */
class CommonName extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
         * @type {string || null}
         */
        this.SubaccountUin = null;

        /**
         * The CommonName in the certificate of the client corresponding to the sub-account
         * @type {string || null}
         */
        this.CN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubaccountUin = 'SubaccountUin' in params ? params.SubaccountUin : null;
        this.CN = 'CN' in params ? params.CN : null;

    }
}

/**
 * DescribeClusterAsGroupOption response structure.
 * @class
 */
class DescribeClusterAsGroupOptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster auto scaling attributes
Note: this field may return null, indicating that no valid value was found.
         * @type {ClusterAsGroupOption || null}
         */
        this.ClusterAsGroupOption = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterAsGroupOption) {
            let obj = new ClusterAsGroupOption();
            obj.deserialize(params.ClusterAsGroupOption)
            this.ClusterAsGroupOption = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster scaling group attributes
 * @class
 */
class ClusterAsGroupAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.AutoScalingGroupEnabled = null;

        /**
         * Maximum and minimum number of pods in a scaling group
         * @type {AutoScalingGroupRange || null}
         */
        this.AutoScalingGroupRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupEnabled = 'AutoScalingGroupEnabled' in params ? params.AutoScalingGroupEnabled : null;

        if (params.AutoScalingGroupRange) {
            let obj = new AutoScalingGroupRange();
            obj.deserialize(params.AutoScalingGroupRange)
            this.AutoScalingGroupRange = obj;
        }

    }
}

/**
 * CreateTKEEdgeCluster response structure.
 * @class
 */
class CreateTKEEdgeClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE Edge cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterNodePool response structure.
 * @class
 */
class DeleteClusterNodePoolResponse extends  AbstractModel {
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
 * DeleteECMInstances response structure.
 * @class
 */
class DeleteECMInstancesResponse extends  AbstractModel {
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
 * DescribeEdgeClusterExtraArgs response structure.
 * @class
 */
class DescribeEdgeClusterExtraArgsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom parameters of the cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {EdgeClusterExtraArgs || null}
         */
        this.ClusterExtraArgs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterExtraArgs) {
            let obj = new EdgeClusterExtraArgs();
            obj.deserialize(params.ClusterExtraArgs)
            this.ClusterExtraArgs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCluster request structure.
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Policy used to delete an instance in the cluster: terminate (terminates the instance. Only available for instances on pay-as-you-go CVMs); retain (only removes it from the cluster. The instance will be retained.)
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

        /**
         * Specifies the policy to deal with resources in the cluster when the cluster is deleted. It only supports CBS now. The default policy is to retain CBS disks.
         * @type {Array.<ResourceDeleteOption> || null}
         */
        this.ResourceDeleteOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;

        if (params.ResourceDeleteOptions) {
            this.ResourceDeleteOptions = new Array();
            for (let z in params.ResourceDeleteOptions) {
                let obj = new ResourceDeleteOption();
                obj.deserialize(params.ResourceDeleteOptions[z]);
                this.ResourceDeleteOptions.push(obj);
            }
        }

    }
}

/**
 * ForwardTKEEdgeApplicationRequestV3 request structure.
 * @class
 */
class ForwardTKEEdgeApplicationRequestV3Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access to request the cluster add-on
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Path to request the cluster add-on
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Data format allowed to receive the requested cluster add-on
         * @type {string || null}
         */
        this.Accept = null;

        /**
         * Data format for requesting the cluster add-on
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * Data sent to request the cluster add-on
         * @type {string || null}
         */
        this.RequestBody = null;

        /**
         * Cluster name (for example, `cls-1234abcd`)
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Whether to encode the request content
         * @type {string || null}
         */
        this.EncodedBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Accept = 'Accept' in params ? params.Accept : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RequestBody = 'RequestBody' in params ? params.RequestBody : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.EncodedBody = 'EncodedBody' in params ? params.EncodedBody : null;

    }
}

/**
 * The policy to deal with resources in the cluster when the cluster is deleted.
 * @class
 */
class ResourceDeleteOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type, for example `CBS`
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Specifies the policy to deal with resources in the cluster when the cluster is deleted. It can be `terminate` or `retain`.
         * @type {string || null}
         */
        this.DeleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.DeleteMode = 'DeleteMode' in params ? params.DeleteMode : null;

    }
}

/**
 * Describes information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Monitor](https://intl.cloud.tencent.com/document/product/248?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Monitor <br><li>FALSE: do not enable Cloud Monitor <br><br>Default value: TRUE.
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
 * UpdateClusterVersion response structure.
 * @class
 */
class UpdateClusterVersionResponse extends  AbstractModel {
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
 * DescribeTKEEdgeClusterCredential response structure.
 * @class
 */
class DescribeTKEEdgeClusterCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access address of the cluster
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<IPAddress> || null}
         */
        this.Addresses = null;

        /**
         * Cluster authentication information
         * @type {ClusterCredential || null}
         */
        this.Credential = null;

        /**
         * Public network access information of the cluster
         * @type {EdgeClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * Private network access information of the cluster
         * @type {EdgeClusterInternalLB || null}
         */
        this.InternalLB = null;

        /**
         * CoreDns deployment information of the cluster
         * @type {string || null}
         */
        this.CoreDns = null;

        /**
         * Multi-region health check deployment information of the cluster
         * @type {string || null}
         */
        this.HealthRegion = null;

        /**
         * Health check deployment information of the cluster
         * @type {string || null}
         */
        this.Health = null;

        /**
         * Whether to deploy GridDaemon to support headless service
         * @type {string || null}
         */
        this.GridDaemon = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Addresses) {
            this.Addresses = new Array();
            for (let z in params.Addresses) {
                let obj = new IPAddress();
                obj.deserialize(params.Addresses[z]);
                this.Addresses.push(obj);
            }
        }

        if (params.Credential) {
            let obj = new ClusterCredential();
            obj.deserialize(params.Credential)
            this.Credential = obj;
        }

        if (params.PublicLB) {
            let obj = new EdgeClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

        if (params.InternalLB) {
            let obj = new EdgeClusterInternalLB();
            obj.deserialize(params.InternalLB)
            this.InternalLB = obj;
        }
        this.CoreDns = 'CoreDns' in params ? params.CoreDns : null;
        this.HealthRegion = 'HealthRegion' in params ? params.HealthRegion : null;
        this.Health = 'Health' in params ? params.Health : null;
        this.GridDaemon = 'GridDaemon' in params ? params.GridDaemon : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterEndpoint request structure.
 * @class
 */
class DeleteClusterEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether public network access is enabled or not (True = public network access, FALSE = private network access, with the default value as FALSE).
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * CreateClusterNodePool response structure.
 * @class
 */
class CreateClusterNodePoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * > Key-value pair filters used for conditional queries, such as filtering results by ID, name, and state.
> * If there are multiple `Filter` parameters, they are evaluated using the logical `AND` operator.
> * If a `Filter` contains multiple `Values`, they are evaluated using the logical `OR` operator.
>
> Take [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) as an example. You can use the following filters to query the instances in availability zone (`zone`) Guangzhou Zone 1 ***and*** whose billing plan (`instance-charge-type`) is pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=POSTPAID_BY_HOUR
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values.
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
 * Nodes that are manually added
 * @class
 */
class ManuallyAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes that are being added
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * Number of nodes that are being initialized
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * Number of normal nodes
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * Total number of nodes
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
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * CheckEdgeClusterCIDR request structure.
 * @class
 */
class CheckEdgeClusterCIDRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Cluster Pod CIDR block
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * Cluster service CIDR block
         * @type {string || null}
         */
        this.ServiceCIDR = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;

    }
}

/**
 * ModifyClusterAsGroupAttribute request structure.
 * @class
 */
class ModifyClusterAsGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster-associated scaling group attributes
         * @type {ClusterAsGroupAttribute || null}
         */
        this.ClusterAsGroupAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ClusterAsGroupAttribute) {
            let obj = new ClusterAsGroupAttribute();
            obj.deserialize(params.ClusterAsGroupAttribute)
            this.ClusterAsGroupAttribute = obj;
        }

    }
}

/**
 * The grafana information in the managed PROM instance
 * @class
 */
class PrometheusGrafanaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Domain name. It will be effective only when the public network access is enabled.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The private network or public network address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Whether the public network access is enabled.
`close`: the public network access is not enabled
`opening`: the public network access is being enabled
`open`: the public network access is enabled
         * @type {string || null}
         */
        this.Internet = null;

        /**
         * The user name of the grafana admin
         * @type {string || null}
         */
        this.AdminUser = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Internet = 'Internet' in params ? params.Internet : null;
        this.AdminUser = 'AdminUser' in params ? params.AdminUser : null;

    }
}

/**
 * RemoveNodeFromNodePool response structure.
 * @class
 */
class RemoveNodeFromNodePoolResponse extends  AbstractModel {
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
 * Mounting configuration of the CVM instance data disk
 * @class
 */
class InstanceDataDiskMountSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Data disk mounting information
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Availability zone where the CVM instance is located
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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * RemoveNodeFromNodePool request structure.
 * @class
 */
class RemoveNodeFromNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Node pool ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * The node ID list. Up to 100 nodes can be removed at a time.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Node statistics list
 * @class
 */
class NodeCountSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nodes that are manually managed
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {ManuallyAdded || null}
         */
        this.ManuallyAdded = null;

        /**
         * Nodes that are automatically managed
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {AutoscalingAdded || null}
         */
        this.AutoscalingAdded = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ManuallyAdded) {
            let obj = new ManuallyAdded();
            obj.deserialize(params.ManuallyAdded)
            this.ManuallyAdded = obj;
        }

        if (params.AutoscalingAdded) {
            let obj = new AutoscalingAdded();
            obj.deserialize(params.AutoscalingAdded)
            this.AutoscalingAdded = obj;
        }

    }
}

/**
 * DescribeClusterAsGroups response structure.
 * @class
 */
class DescribeClusterAsGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of scaling groups associated with the cluster
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster-associated scaling group list
         * @type {Array.<ClusterAsGroup> || null}
         */
        this.ClusterAsGroupSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ClusterAsGroupSet) {
            this.ClusterAsGroupSet = new Array();
            for (let z in params.ClusterAsGroupSet) {
                let obj = new ClusterAsGroup();
                obj.deserialize(params.ClusterAsGroupSet[z]);
                this.ClusterAsGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Image details
 * @class
 */
class ImageInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image alias
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Operating system name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Image ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Container image tag, **DOCKER_CUSTOMIZE** (container customized tag), **GENERAL** (general tag, default value)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsCustomizeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

    }
}

/**
 * Edge compute cluster information
 * @class
 */
class EdgeCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Cluster Pod CIDR block
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * Cluster service CIDR block
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * Cluster status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * Cluster creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Edge cluster version
         * @type {string || null}
         */
        this.EdgeClusterVersion = null;

        /**
         * Maximum number of Pods on the node
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * Cluster advanced settings
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {EdgeClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.EdgeClusterVersion = 'EdgeClusterVersion' in params ? params.EdgeClusterVersion : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;

        if (params.ClusterAdvancedSettings) {
            let obj = new EdgeClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }

    }
}

/**
 * DescribeClusterNodePoolDetail response structure.
 * @class
 */
class DescribeClusterNodePoolDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node pool details
         * @type {NodePool || null}
         */
        this.NodePool = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodePool) {
            let obj = new NodePool();
            obj.deserialize(params.NodePool)
            this.NodePool = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    EnableVpcCniNetworkTypeRequest: EnableVpcCniNetworkTypeRequest,
    DescribeClusterEndpointVipStatusRequest: DescribeClusterEndpointVipStatusRequest,
    DescribeClusterSecurityResponse: DescribeClusterSecurityResponse,
    DescribeClusterSecurityRequest: DescribeClusterSecurityRequest,
    ModifyPrometheusAlertRuleRequest: ModifyPrometheusAlertRuleRequest,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    InstallEdgeLogAgentRequest: InstallEdgeLogAgentRequest,
    DescribeEdgeCVMInstancesRequest: DescribeEdgeCVMInstancesRequest,
    DescribeClusterKubeconfigResponse: DescribeClusterKubeconfigResponse,
    DescribeClusterAuthenticationOptionsRequest: DescribeClusterAuthenticationOptionsRequest,
    DescribeClusterEndpointVipStatusResponse: DescribeClusterEndpointVipStatusResponse,
    ModifyClusterEndpointSPRequest: ModifyClusterEndpointSPRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    AutoscalingAdded: AutoscalingAdded,
    CreatePrometheusAlertRuleRequest: CreatePrometheusAlertRuleRequest,
    CreateClusterRouteTableResponse: CreateClusterRouteTableResponse,
    DescribeClusterCommonNamesRequest: DescribeClusterCommonNamesRequest,
    RunAutomationServiceEnabled: RunAutomationServiceEnabled,
    EdgeClusterPublicLB: EdgeClusterPublicLB,
    DeleteClusterEndpointResponse: DeleteClusterEndpointResponse,
    PrometheusNotification: PrometheusNotification,
    ClusterVersion: ClusterVersion,
    RouteInfo: RouteInfo,
    CreateEdgeLogConfigResponse: CreateEdgeLogConfigResponse,
    ClusterCondition: ClusterCondition,
    DescribeAvailableTKEEdgeVersionResponse: DescribeAvailableTKEEdgeVersionResponse,
    InstanceUpgradeProgressItem: InstanceUpgradeProgressItem,
    ModifyClusterEndpointSPResponse: ModifyClusterEndpointSPResponse,
    NodePool: NodePool,
    InstallEdgeLogAgentResponse: InstallEdgeLogAgentResponse,
    DescribeEdgeClusterInstancesResponse: DescribeEdgeClusterInstancesResponse,
    IPAddress: IPAddress,
    DescribeTKEEdgeClusterCredentialRequest: DescribeTKEEdgeClusterCredentialRequest,
    AutoUpgradeClusterLevel: AutoUpgradeClusterLevel,
    ClusterAdvancedSettings: ClusterAdvancedSettings,
    RunInstancesForNode: RunInstancesForNode,
    DescribeTKEEdgeExternalKubeconfigRequest: DescribeTKEEdgeExternalKubeconfigRequest,
    DescribeAvailableTKEEdgeVersionRequest: DescribeAvailableTKEEdgeVersionRequest,
    DeleteClusterAsGroupsRequest: DeleteClusterAsGroupsRequest,
    DescribeExistedInstancesRequest: DescribeExistedInstancesRequest,
    InstanceExtraArgs: InstanceExtraArgs,
    DescribeRegionsResponse: DescribeRegionsResponse,
    ClusterLevelChangeRecord: ClusterLevelChangeRecord,
    ModifyPrometheusAlertRuleResponse: ModifyPrometheusAlertRuleResponse,
    AddNodeToNodePoolRequest: AddNodeToNodePoolRequest,
    EnableVpcCniNetworkTypeResponse: EnableVpcCniNetworkTypeResponse,
    RouteTableInfo: RouteTableInfo,
    DescribeECMInstancesRequest: DescribeECMInstancesRequest,
    EnableClusterDeletionProtectionResponse: EnableClusterDeletionProtectionResponse,
    ClusterAsGroup: ClusterAsGroup,
    Instance: Instance,
    DescribeVpcCniPodLimitsResponse: DescribeVpcCniPodLimitsResponse,
    DescribeVersionsResponse: DescribeVersionsResponse,
    DescribeEdgeClusterInstancesRequest: DescribeEdgeClusterInstancesRequest,
    ECMRunMonitorServiceEnabled: ECMRunMonitorServiceEnabled,
    DeleteEdgeClusterInstancesRequest: DeleteEdgeClusterInstancesRequest,
    Tag: Tag,
    ForwardTKEEdgeApplicationRequestV3Response: ForwardTKEEdgeApplicationRequestV3Response,
    ClusterNetworkSettings: ClusterNetworkSettings,
    DescribeImagesResponse: DescribeImagesResponse,
    AutoScalingGroupRange: AutoScalingGroupRange,
    ModifyClusterAttributeRequest: ModifyClusterAttributeRequest,
    DeleteClusterRouteResponse: DeleteClusterRouteResponse,
    EdgeClusterAdvancedSettings: EdgeClusterAdvancedSettings,
    ServiceAccountAuthenticationOptions: ServiceAccountAuthenticationOptions,
    CreateClusterEndpointVipResponse: CreateClusterEndpointVipResponse,
    ResourceUsage: ResourceUsage,
    DescribeClusterRoutesResponse: DescribeClusterRoutesResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    UpgradeClusterInstancesRequest: UpgradeClusterInstancesRequest,
    ExtensionAddon: ExtensionAddon,
    DeletePrometheusAlertRuleRequest: DeletePrometheusAlertRuleRequest,
    DescribeResourceUsageRequest: DescribeResourceUsageRequest,
    DescribeTKEEdgeClustersRequest: DescribeTKEEdgeClustersRequest,
    ECMRunSecurityServiceEnabled: ECMRunSecurityServiceEnabled,
    Label: Label,
    PodLimitsByType: PodLimitsByType,
    DescribeClusterRouteTablesResponse: DescribeClusterRouteTablesResponse,
    SetNodePoolNodeProtectionResponse: SetNodePoolNodeProtectionResponse,
    ResourceUsageDetail: ResourceUsageDetail,
    CreateTKEEdgeClusterRequest: CreateTKEEdgeClusterRequest,
    DescribeRouteTableConflictsRequest: DescribeRouteTableConflictsRequest,
    DeleteClusterEndpointVipResponse: DeleteClusterEndpointVipResponse,
    CreateEdgeLogConfigRequest: CreateEdgeLogConfigRequest,
    ClusterBasicSettings: ClusterBasicSettings,
    RouteTableConflict: RouteTableConflict,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    UpgradeNodeResetParam: UpgradeNodeResetParam,
    DescribeTKEEdgeClusterStatusResponse: DescribeTKEEdgeClusterStatusResponse,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    CreateClusterNodePoolFromExistingAsgRequest: CreateClusterNodePoolFromExistingAsgRequest,
    DescribeTKEEdgeScriptResponse: DescribeTKEEdgeScriptResponse,
    DescribeClusterStatusRequest: DescribeClusterStatusRequest,
    VersionInstance: VersionInstance,
    DeleteClusterNodePoolRequest: DeleteClusterNodePoolRequest,
    DescribeClusterKubeconfigRequest: DescribeClusterKubeconfigRequest,
    ClusterCIDRSettings: ClusterCIDRSettings,
    CreateClusterEndpointVipRequest: CreateClusterEndpointVipRequest,
    Taint: Taint,
    CheckInstancesUpgradeAbleRequest: CheckInstancesUpgradeAbleRequest,
    CreateECMInstancesResponse: CreateECMInstancesResponse,
    ModifyClusterAsGroupOptionAttributeRequest: ModifyClusterAsGroupOptionAttributeRequest,
    DescribeClusterNodePoolsResponse: DescribeClusterNodePoolsResponse,
    UpgradeAbleInstancesItem: UpgradeAbleInstancesItem,
    GetUpgradeInstanceProgressRequest: GetUpgradeInstanceProgressRequest,
    DescribeClusterEndpointsRequest: DescribeClusterEndpointsRequest,
    DescribeEdgeAvailableExtraArgsRequest: DescribeEdgeAvailableExtraArgsRequest,
    ExistedInstance: ExistedInstance,
    AddNodeToNodePoolResponse: AddNodeToNodePoolResponse,
    ModifyNodePoolInstanceTypesRequest: ModifyNodePoolInstanceTypesRequest,
    DescribeClusterLevelAttributeRequest: DescribeClusterLevelAttributeRequest,
    DisableClusterDeletionProtectionRequest: DisableClusterDeletionProtectionRequest,
    NodePoolOption: NodePoolOption,
    DescribeEdgeCVMInstancesResponse: DescribeEdgeCVMInstancesResponse,
    CreateECMInstancesRequest: CreateECMInstancesRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ClusterCredential: ClusterCredential,
    DescribeVpcCniPodLimitsRequest: DescribeVpcCniPodLimitsRequest,
    DescribeTKEEdgeScriptRequest: DescribeTKEEdgeScriptRequest,
    ClusterExtraArgs: ClusterExtraArgs,
    DataDisk: DataDisk,
    DescribeEdgeLogSwitchesResponse: DescribeEdgeLogSwitchesResponse,
    DeleteEdgeCVMInstancesResponse: DeleteEdgeCVMInstancesResponse,
    ModifyClusterNodePoolResponse: ModifyClusterNodePoolResponse,
    GetUpgradeInstanceProgressResponse: GetUpgradeInstanceProgressResponse,
    DescribeExistedInstancesResponse: DescribeExistedInstancesResponse,
    DescribeEdgeAvailableExtraArgsResponse: DescribeEdgeAvailableExtraArgsResponse,
    CreatePrometheusAlertRuleResponse: CreatePrometheusAlertRuleResponse,
    ECMEnhancedService: ECMEnhancedService,
    LoginSettings: LoginSettings,
    ModifyNodePoolInstanceTypesResponse: ModifyNodePoolInstanceTypesResponse,
    CreateClusterNodePoolFromExistingAsgResponse: CreateClusterNodePoolFromExistingAsgResponse,
    DescribeEnableVpcCniProgressRequest: DescribeEnableVpcCniProgressRequest,
    DescribeClusterEndpointStatusRequest: DescribeClusterEndpointStatusRequest,
    GetClusterLevelPriceResponse: GetClusterLevelPriceResponse,
    PrometheusAlertRule: PrometheusAlertRule,
    DescribeResourceUsageResponse: DescribeResourceUsageResponse,
    DescribeClusterStatusResponse: DescribeClusterStatusResponse,
    DescribeRouteTableConflictsResponse: DescribeRouteTableConflictsResponse,
    EdgeClusterInternalLB: EdgeClusterInternalLB,
    DescribeVersionsRequest: DescribeVersionsRequest,
    CreateClusterResponse: CreateClusterResponse,
    TaskStepInfo: TaskStepInfo,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteClusterRouteTableRequest: DeleteClusterRouteTableRequest,
    DescribeAvailableClusterVersionRequest: DescribeAvailableClusterVersionRequest,
    CreateClusterRequest: CreateClusterRequest,
    DeletePrometheusAlertRuleResponse: DeletePrometheusAlertRuleResponse,
    AcquireClusterAdminRoleRequest: AcquireClusterAdminRoleRequest,
    DeleteEdgeClusterInstancesResponse: DeleteEdgeClusterInstancesResponse,
    DeleteTKEEdgeClusterRequest: DeleteTKEEdgeClusterRequest,
    ModifyClusterAuthenticationOptionsResponse: ModifyClusterAuthenticationOptionsResponse,
    DescribeClusterAuthenticationOptionsResponse: DescribeClusterAuthenticationOptionsResponse,
    DeleteClusterAsGroupsResponse: DeleteClusterAsGroupsResponse,
    EnableClusterDeletionProtectionRequest: EnableClusterDeletionProtectionRequest,
    DescribePrometheusInstanceRequest: DescribePrometheusInstanceRequest,
    ECMZoneInstanceCountISP: ECMZoneInstanceCountISP,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    RegionInstance: RegionInstance,
    EdgeClusterExtraArgs: EdgeClusterExtraArgs,
    PodLimitsInstance: PodLimitsInstance,
    DescribeEnableVpcCniProgressResponse: DescribeEnableVpcCniProgressResponse,
    PrometheusAlertRuleDetail: PrometheusAlertRuleDetail,
    DescribePrometheusInstanceResponse: DescribePrometheusInstanceResponse,
    DeleteEdgeCVMInstancesRequest: DeleteEdgeCVMInstancesRequest,
    ModifyClusterNodePoolRequest: ModifyClusterNodePoolRequest,
    DescribeEdgeLogSwitchesRequest: DescribeEdgeLogSwitchesRequest,
    DescribeECMInstancesResponse: DescribeECMInstancesResponse,
    GetClusterLevelPriceRequest: GetClusterLevelPriceRequest,
    CreateClusterEndpointResponse: CreateClusterEndpointResponse,
    DescribeTKEEdgeClusterStatusRequest: DescribeTKEEdgeClusterStatusRequest,
    CreateClusterNodePoolRequest: CreateClusterNodePoolRequest,
    CheckEdgeClusterCIDRResponse: CheckEdgeClusterCIDRResponse,
    AcquireClusterAdminRoleResponse: AcquireClusterAdminRoleResponse,
    EdgeAvailableExtraArgs: EdgeAvailableExtraArgs,
    UpdateClusterVersionRequest: UpdateClusterVersionRequest,
    ModifyClusterAuthenticationOptionsRequest: ModifyClusterAuthenticationOptionsRequest,
    DeleteClusterEndpointVipRequest: DeleteClusterEndpointVipRequest,
    EdgeArgsFlag: EdgeArgsFlag,
    DescribeClusterLevelChangeRecordsResponse: DescribeClusterLevelChangeRecordsResponse,
    CheckInstancesUpgradeAbleResponse: CheckInstancesUpgradeAbleResponse,
    Cluster: Cluster,
    DescribeClusterEndpointStatusResponse: DescribeClusterEndpointStatusResponse,
    ClusterStatus: ClusterStatus,
    UpgradeClusterInstancesResponse: UpgradeClusterInstancesResponse,
    AddExistedInstancesResponse: AddExistedInstancesResponse,
    DeleteClusterRouteTableResponse: DeleteClusterRouteTableResponse,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,
    DisableClusterDeletionProtectionResponse: DisableClusterDeletionProtectionResponse,
    DescribeClusterAsGroupOptionRequest: DescribeClusterAsGroupOptionRequest,
    ModifyClusterAttributeResponse: ModifyClusterAttributeResponse,
    ModifyClusterAsGroupAttributeResponse: ModifyClusterAsGroupAttributeResponse,
    DescribeTKEEdgeClustersResponse: DescribeTKEEdgeClustersResponse,
    CreateClusterEndpointRequest: CreateClusterEndpointRequest,
    ModifyClusterAsGroupOptionAttributeResponse: ModifyClusterAsGroupOptionAttributeResponse,
    DescribeClusterLevelAttributeResponse: DescribeClusterLevelAttributeResponse,
    DescribeEdgeClusterExtraArgsRequest: DescribeEdgeClusterExtraArgsRequest,
    AddExistedInstancesRequest: AddExistedInstancesRequest,
    DescribeTKEEdgeExternalKubeconfigResponse: DescribeTKEEdgeExternalKubeconfigResponse,
    ClusterAsGroupOption: ClusterAsGroupOption,
    AddVpcCniSubnetsResponse: AddVpcCniSubnetsResponse,
    DescribeClusterNodePoolsRequest: DescribeClusterNodePoolsRequest,
    DescribeClusterRouteTablesRequest: DescribeClusterRouteTablesRequest,
    DeleteTKEEdgeClusterResponse: DeleteTKEEdgeClusterResponse,
    ExistedInstancesForNode: ExistedInstancesForNode,
    InstanceUpgradeClusterStatus: InstanceUpgradeClusterStatus,
    UninstallEdgeLogAgentResponse: UninstallEdgeLogAgentResponse,
    DescribeClusterRoutesRequest: DescribeClusterRoutesRequest,
    DeleteClusterRouteRequest: DeleteClusterRouteRequest,
    DeleteECMInstancesRequest: DeleteECMInstancesRequest,
    ClusterLevelAttribute: ClusterLevelAttribute,
    DescribeRegionsRequest: DescribeRegionsRequest,
    EnhancedService: EnhancedService,
    DescribeClusterNodePoolDetailRequest: DescribeClusterNodePoolDetailRequest,
    SetNodePoolNodeProtectionRequest: SetNodePoolNodeProtectionRequest,
    CreateClusterRouteTableRequest: CreateClusterRouteTableRequest,
    DescribeClusterEndpointsResponse: DescribeClusterEndpointsResponse,
    InstanceUpgradePreCheckResult: InstanceUpgradePreCheckResult,
    DescribeClusterAsGroupsRequest: DescribeClusterAsGroupsRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    UninstallEdgeLogAgentRequest: UninstallEdgeLogAgentRequest,
    DescribeAvailableClusterVersionResponse: DescribeAvailableClusterVersionResponse,
    TagSpecification: TagSpecification,
    DescribeClusterLevelChangeRecordsRequest: DescribeClusterLevelChangeRecordsRequest,
    AddVpcCniSubnetsRequest: AddVpcCniSubnetsRequest,
    InstanceUpgradePreCheckResultItem: InstanceUpgradePreCheckResultItem,
    DescribeClusterCommonNamesResponse: DescribeClusterCommonNamesResponse,
    ExistedInstancesPara: ExistedInstancesPara,
    CommonName: CommonName,
    DescribeClusterAsGroupOptionResponse: DescribeClusterAsGroupOptionResponse,
    ClusterAsGroupAttribute: ClusterAsGroupAttribute,
    CreateTKEEdgeClusterResponse: CreateTKEEdgeClusterResponse,
    DeleteClusterNodePoolResponse: DeleteClusterNodePoolResponse,
    DeleteECMInstancesResponse: DeleteECMInstancesResponse,
    DescribeEdgeClusterExtraArgsResponse: DescribeEdgeClusterExtraArgsResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    ForwardTKEEdgeApplicationRequestV3Request: ForwardTKEEdgeApplicationRequestV3Request,
    ResourceDeleteOption: ResourceDeleteOption,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    UpdateClusterVersionResponse: UpdateClusterVersionResponse,
    DescribeTKEEdgeClusterCredentialResponse: DescribeTKEEdgeClusterCredentialResponse,
    DeleteClusterEndpointRequest: DeleteClusterEndpointRequest,
    CreateClusterNodePoolResponse: CreateClusterNodePoolResponse,
    Filter: Filter,
    ManuallyAdded: ManuallyAdded,
    CheckEdgeClusterCIDRRequest: CheckEdgeClusterCIDRRequest,
    ModifyClusterAsGroupAttributeRequest: ModifyClusterAsGroupAttributeRequest,
    PrometheusGrafanaInfo: PrometheusGrafanaInfo,
    RemoveNodeFromNodePoolResponse: RemoveNodeFromNodePoolResponse,
    InstanceDataDiskMountSetting: InstanceDataDiskMountSetting,
    RemoveNodeFromNodePoolRequest: RemoveNodeFromNodePoolRequest,
    NodeCountSummary: NodeCountSummary,
    DescribeClusterAsGroupsResponse: DescribeClusterAsGroupsResponse,
    ImageInstance: ImageInstance,
    EdgeCluster: EdgeCluster,
    DescribeClusterNodePoolDetailResponse: DescribeClusterNodePoolDetailResponse,

}
