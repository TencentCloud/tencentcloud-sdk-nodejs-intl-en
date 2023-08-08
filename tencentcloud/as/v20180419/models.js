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
 * DisableAutoScalingGroup response structure.
 * @class
 */
class DisableAutoScalingGroupResponse extends  AbstractModel {
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
 * ModifyLaunchConfigurationAttributes request structure.
 * @class
 */
class ModifyLaunchConfigurationAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * [Image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are three types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><br/>You can obtain the image IDs in the [CVM console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE).</li><li>You can also use the [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of instance types. Each type specifies different resource specifications. This list contains up to 10 instance types.
The launch configuration uses `InstanceType` to indicate one single instance type and `InstanceTypes` to indicate multiple instance types. Specifying the `InstanceTypes` field will invalidate the original `InstanceType`.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Instance type verification policy which works when InstanceTypes is actually modified. Value range: ALL, ANY. Default value: ANY.
<br><li> ALL: The verification will success only if all instance types (InstanceType) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any instance type (InstanceType) is available; otherwise, an error will be reported.

Common reasons why an instance type is unavailable include stock-out of the instance type or the corresponding cloud disk.
If a model in InstanceTypes does not exist or has been discontinued, a verification error will be reported regardless of the value of InstanceTypesCheckPolicy.
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

        /**
         * Display name of the launch configuration, which can contain Chinese characters, letters, numbers, underscores, separators ("-"), and decimal points with a maximum length of 60 bytes.
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Base64-encoded custom data of up to 16 KB. If you want to clear `UserData`, set it to an empty string.
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the `SecurityGroupId` field in the response of the [`DescribeSecurityGroups`](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1) API.
At least one security group is required for this parameter. The security group specified is sequential.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Information of the public network bandwidth configuration.
When the public outbound network bandwidth is 0 Mbps, assigning a public IP is not allowed. Accordingly, if a public IP is assigned, the new public network outbound bandwidth must be greater than 0 Mbps.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Instance billing mode. Valid values:
<br><li>POSTPAID_BY_HOUR: pay-as-you-go hourly
<br><li>SPOTPAID: spot instance
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Parameter setting for the prepaid mode (monthly subscription mode). This parameter can specify the renewal period, whether to set the auto-renewal, and other attributes of the monthly-subscribed instances.
This parameter is required when changing the instance billing mode to monthly subscription. It will be automatically discarded after you choose another billing mode.
This field requires passing in the `Period` field. Other fields that are not passed in will use their default values.
This field can be modified only when the current billing mode is monthly subscription.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Market-related options for instances, such as parameters related to spot instances.
This parameter is required when changing the instance billing mode to spot instance. It will be automatically discarded after you choose another instance billing mode.
This field requires passing in the `MaxPrice` field under the `SpotOptions`. Other fields that are not passed in will use their default values.
This field can be modified only when the current billing mode is spot instance.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * Selection policy of cloud disks. Default value: ORIGINAL. Valid values:
<br><li>ORIGINAL: uses the configured cloud disk type
<br><li>AUTOMATIC: automatically chooses an available cloud disk type
         * @type {string || null}
         */
        this.DiskTypePolicy = null;

        /**
         * Instance system disk configurations
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Configuration information of instance data disks.
Up to 11 data disks can be specified and will be collectively modified. Please provide all the new values for the modification.
The default data disk should be the same as the system disk.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * CVM hostname settings.
This field is not supported for Windows instances.
This field requires passing the `HostName` field. Other fields that are not passed in will use their default values.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * Settings of CVM instance names. 
If this field is configured in a launch configuration, the `InstanceName` of a CVM created by the scaling group will be generated according to the configuration; otherwise, it will be in the `as-{{AutoScalingGroupName }}` format.
This field requires passing in the `InstanceName` field. Other fields that are not passed in will use their default values.
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * Specifies whether to enable additional services, such as security services and monitoring service.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * CAM role name. This parameter can be obtained from the `roleName` field returned by DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * HPC ID<br>
Note: This field is default to empty
         * @type {string || null}
         */
        this.HpcClusterId = null;

        /**
         * IPv6 public network bandwidth configuration. If the IPv6 address is available in the new instance, public network bandwidth can be allocated to the IPv6 address. This parameter is invalid if `Ipv6AddressCount` of the scaling group associated with the launch configuration is 0.
         * @type {IPv6InternetAccessible || null}
         */
        this.IPv6InternetAccessible = null;

        /**
         * Placement group ID. Only one is allowed.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.DiskTypePolicy = 'DiskTypePolicy' in params ? params.DiskTypePolicy : null;

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

        if (params.HostNameSettings) {
            let obj = new HostNameSettings();
            obj.deserialize(params.HostNameSettings)
            this.HostNameSettings = obj;
        }

        if (params.InstanceNameSettings) {
            let obj = new InstanceNameSettings();
            obj.deserialize(params.InstanceNameSettings)
            this.InstanceNameSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;

        if (params.IPv6InternetAccessible) {
            let obj = new IPv6InternetAccessible();
            obj.deserialize(params.IPv6InternetAccessible)
            this.IPv6InternetAccessible = obj;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

    }
}

/**
 * DisableAutoScalingGroup request structure.
 * @class
 */
class DisableAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

    }
}

/**
 * ModifyAutoScalingGroup request structure.
 * @class
 */
class ModifyAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Auto scaling group name, which can only contain letters, numbers, underscores, hyphens ("-"), and decimal points with a maximum length of 55 bytes and must be unique under your account.
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * Default cooldown period in seconds. Default value: 300
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * Desired number of instances. The number should be no larger than the maximum and no smaller than minimum number of instances
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Maximum number of instances. Value range: 0-2,000.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Minimum number of instances. Value range: 0-2,000.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of subnet IDs
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Termination policy. Currently, the maximum length is 1. Value range: OLDEST_INSTANCE, NEWEST_INSTANCE.
<br><li> OLDEST_INSTANCE: The oldest instance in the auto scaling group will be terminated first.
<br><li> NEWEST_INSTANCE: The newest instance in the auto scaling group will be terminated first.
         * @type {Array.<string> || null}
         */
        this.TerminationPolicies = null;

        /**
         * VPC ID. This field is left empty for basic networks. You need to specify SubnetIds when modifying the network of the auto scaling group to a VPC with a specified VPC ID. Specify Zones when modifying the network to a basic network.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * List of availability zones
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Retry policy. Valid values: `IMMEDIATE_RETRY` (default), `INCREMENTAL_INTERVALS`, `NO_RETRY`. A partially successful scaling is judged as a failed one.
<br><li>
`IMMEDIATE_RETRY`: Retrying immediately in a short period of time and stopping after five consecutive failures.
<br><li>
`INCREMENTAL_INTERVALS`: Retrying at incremental intervals. As the number of consecutive failures increases, the retry interval gradually increases, ranging from seconds to one day.
<br><li>`NO_RETRY`: Do not retry. Actions are taken when the next call or alarm message comes.
         * @type {string || null}
         */
        this.RetryPolicy = null;

        /**
         * Availability zone verification policy. Value range: ALL, ANY. Default value: ANY. This will work when the resource-related fields (launch configuration, availability zone, or subnet) of the auto scaling group are actually modified.
<br><li> ALL: The verification will succeed only if all availability zones (Zone) or subnets (SubnetId) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any availability zone (Zone) or subnet (SubnetId) is available; otherwise, an error will be reported.

Common reasons why an availability zone or subnet is unavailable include stock-out of CVM instances or CBS cloud disks in the availability zone, insufficient quota in the availability zone, or insufficient IPs in the subnet.
If an availability zone or subnet in Zones/SubnetIds does not exist, a verification error will be reported regardless of the value of ZonesCheckPolicy.
         * @type {string || null}
         */
        this.ZonesCheckPolicy = null;

        /**
         * Service settings such as unhealthy instance replacement.
         * @type {ServiceSettings || null}
         */
        this.ServiceSettings = null;

        /**
         * The number of IPv6 addresses that an instance has. Valid values: 0 and 1.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * Multi-availability zone/subnet policy. Valid values: `PRIORITY` and `EQUALITY`. Default value: `PRIORITY`.
<br><li>`PRIORITY`: When an instance is being created, the availability zone/subnet is chosen from top to bottom in the list. The first availability zone/subnet is always used as long as instances can be created.
<br><li>`EQUALITY`: Instances created for scaling out are distributed to multiple availability zones/subnets, so as to keep the number of instances in different availability zone/subnet in balance.

Notes:
<br><li> When the scaling group is based on the classic network, this policy applies to multiple availability zones. When the scaling group is based on a VPC, this policy applies to multiple subnets, and you do not need to consider availability zones. For example, if you have four subnets (A, B, C, and D) and A, B, and C are in availability zone 1 and D is in availability zone 2, you only need to decide the order of the four subnets, without worrying about the issue of availability zones.
<br><li> This policy is applicable to multiple availability zones/subnets, but is not applicable to multiple models with launch configurations. Specify the models according to the model priority.
<br><li> When `PRIORITY` policy is used, the multi-model policy prevails the multi-availability zones/subnet policy. For example, if you have Model A/B, and Subnet 1/2/3, the model-subnet combinations are tried in the following order: A1 -> A2 -> A3 -> B1 -> B2 -> B3. If A1 is sold out, A2 (not B1) is tried next.
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

        /**
         * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information, see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB: confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).
         * @type {string || null}
         */
        this.HealthCheckType = null;

        /**
         * Grace period of the CLB health check
         * @type {number || null}
         */
        this.LoadBalancerHealthCheckGracePeriod = null;

        /**
         * Specifies how to assign instances. Valid values: `LAUNCH_CONFIGURATION` and `SPOT_MIXED`.
<br><li>`LAUNCH_CONFIGURATION`: the launch configuration mode.
<br><li>`SPOT_MIXED`: a mixed instance mode. Currently, this mode is supported only when the launch configuration takes the pay-as-you-go billing mode. With this mode, the scaling group can provision a combination of pay-as-you-go instances and spot instances to meet the configured capacity. Note that the billing mode of the associated launch configuration cannot be modified when this mode is used.
         * @type {string || null}
         */
        this.InstanceAllocationPolicy = null;

        /**
         * Specifies how to assign pay-as-you-go instances and spot instances.
This parameter is valid only when `InstanceAllocationPolicy` is set to `SPOT_MIXED`.
         * @type {SpotMixedAllocationPolicy || null}
         */
        this.SpotMixedAllocationPolicy = null;

        /**
         * Indicates whether the capacity rebalancing feature is enabled. This parameter is only valid for spot instances in the scaling group. Valid values:
<br><li>`TRUE`: yes. Before the spot instances in the scaling group are about to be automatically repossessed, AS will terminate them. The scale-in hook (if configured) will take effect before the termination. After the termination process starts, AS will asynchronously initiate a scaling activity to meet the desired capacity.
<br><li>`FALSE`: no. In this case, AS will add instances to meet the desired capacity only after the spot instances are terminated.
         * @type {boolean || null}
         */
        this.CapacityRebalance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.TerminationPolicies = 'TerminationPolicies' in params ? params.TerminationPolicies : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.ZonesCheckPolicy = 'ZonesCheckPolicy' in params ? params.ZonesCheckPolicy : null;

        if (params.ServiceSettings) {
            let obj = new ServiceSettings();
            obj.deserialize(params.ServiceSettings)
            this.ServiceSettings = obj;
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;
        this.MultiZoneSubnetPolicy = 'MultiZoneSubnetPolicy' in params ? params.MultiZoneSubnetPolicy : null;
        this.HealthCheckType = 'HealthCheckType' in params ? params.HealthCheckType : null;
        this.LoadBalancerHealthCheckGracePeriod = 'LoadBalancerHealthCheckGracePeriod' in params ? params.LoadBalancerHealthCheckGracePeriod : null;
        this.InstanceAllocationPolicy = 'InstanceAllocationPolicy' in params ? params.InstanceAllocationPolicy : null;

        if (params.SpotMixedAllocationPolicy) {
            let obj = new SpotMixedAllocationPolicy();
            obj.deserialize(params.SpotMixedAllocationPolicy)
            this.SpotMixedAllocationPolicy = obj;
        }
        this.CapacityRebalance = 'CapacityRebalance' in params ? params.CapacityRebalance : null;

    }
}

/**
 * ScaleOutInstances request structure.
 * @class
 */
class ScaleOutInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Number of instances to be added
         * @type {number || null}
         */
        this.ScaleOutNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScaleOutNumber = 'ScaleOutNumber' in params ? params.ScaleOutNumber : null;

    }
}

/**
 * AS event notification
 * @class
 */
class AutoScalingNotification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of user group IDs.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

        /**
         * List of notification events.
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * Event notification ID.
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

        /**
         * Notification receiver type.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * CMQ queue name.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * CMQ topic name.
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * ModifyScheduledAction request structure.
 * @class
 */
class ModifyScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the scheduled task to be edited
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * Scheduled task name, which can only contain letters, numbers, underscores, hyphens ("-"), and decimal points with a maximum length of 60 bytes and must be unique in an auto scaling group.
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * The maximum number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * The minimum number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * The desired number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Initial triggered time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard. <br>This parameter and `Recurrence` need to be specified at the same time. After the end time, the scheduled task will no longer take effect.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Repeating mode of the scheduled task, which is in standard cron format. <br>This parameter and `EndTime` need to be specified at the same time.
         * @type {string || null}
         */
        this.Recurrence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;

    }
}

/**
 * DescribeAutoScalingGroups request structure.
 * @class
 */
class DescribeAutoScalingGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more auto scaling group IDs in the format of `asg-nkdwoui0`. The maximum quantity per request is 100. This parameter does not support specifying both `AutoScalingGroupIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * Filters.
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
<li> auto-scaling-group-name - String - Required: No - (Filter) Filter by auto scaling group name.</li>
<li> vague-auto-scaling-group-name - String - Required: No - (Filter) Fuzzy search by auto scaling group name.</li>
<li> launch-configuration-id - String - Required: No - (Filter) Filter by launch configuration ID.</li>
<li> tag-key - String - Required: No - (Filter) Filter by tag key.</li>
<li> tag-value - String - Required: No - (Filter) Filter by tag value.</li>
<li> tag:tag-key - String - Required: No - (Filter) Filter by tag key-value pair. The tag-key should be replaced with a specified tag key. For more information, see example 2.</li>
The maximum number of `Filters` in each request is 10. The upper limit for `Filter.Values` is 5. This parameter cannot specify `AutoScalingGroupIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;

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
 * Information set of eligible launch configurations.
 * @class
 */
class LaunchConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID of the instance.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Launch configuration name.
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Information of the instance's system disk configuration.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Information of the instance's data disk configuration.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Instance login settings.
         * @type {LimitedLoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Information of the public network bandwidth configuration.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Security group of the instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Auto scaling group associated with the launch configuration.
         * @type {Array.<AutoScalingGroupAbstract> || null}
         */
        this.AutoScalingGroupAbstractSet = null;

        /**
         * Custom data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Creation time of the launch configuration.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Conditions of enhancement services for the instance and their settings.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Image ID.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Current status of the launch configuration. Value range: <br><li>NORMAL: normal <br><li>IMAGE_ABNORMAL: Exception with the image of the launch configuration <br><li>CBS_SNAP_ABNORMAL: Exception with the data disk snapshot of the launch configuration <br><li>SECURITY_GROUP_ABNORMAL: Exception with the security group of the launch configuration<br>
         * @type {string || null}
         */
        this.LaunchConfigurationStatus = null;

        /**
         * Instance billing mode. CVM instances take `POSTPAID_BY_HOUR` by default. Valid values:
<br><li>POSTPAID_BY_HOUR: pay-as-you-go hourly
<br><li>SPOTPAID: spot instance
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market options of the instance, such as parameters related to spot instances. This parameter is required for spot instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * List of instance models.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * List of instance tags, which will be added to instances created by the scale-out activity. Up to 10 tags allowed.
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

        /**
         * Tag list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Version
         * @type {number || null}
         */
        this.VersionNumber = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * CAM role name. This parameter can be obtained from the `roleName` field returned by DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * Value of InstanceTypesCheckPolicy upon the last operation.
         * @type {string || null}
         */
        this.LastOperationInstanceTypesCheckPolicy = null;

        /**
         * CVM hostname settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * Settings of CVM instance names
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * Details of the monthly subscription, including the purchase period, auto-renewal. It is required if the `InstanceChargeType` is `PREPAID`.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Selection policy of cloud disks. Default value: ORIGINAL. Valid values:
<br><li>ORIGINAL: uses the configured cloud disk type
<br><li>AUTOMATIC: automatically chooses an available cloud disk type in the current availability zone
         * @type {string || null}
         */
        this.DiskTypePolicy = null;

        /**
         * HPC ID<br>
Note: This field is default to empty
         * @type {string || null}
         */
        this.HpcClusterId = null;

        /**
         * IPv6 public network bandwidth configuration.
         * @type {IPv6InternetAccessible || null}
         */
        this.IPv6InternetAccessible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

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

        if (params.LoginSettings) {
            let obj = new LimitedLoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.AutoScalingGroupAbstractSet) {
            this.AutoScalingGroupAbstractSet = new Array();
            for (let z in params.AutoScalingGroupAbstractSet) {
                let obj = new AutoScalingGroupAbstract();
                obj.deserialize(params.AutoScalingGroupAbstractSet[z]);
                this.AutoScalingGroupAbstractSet.push(obj);
            }
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.LaunchConfigurationStatus = 'LaunchConfigurationStatus' in params ? params.LaunchConfigurationStatus : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
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
        this.VersionNumber = 'VersionNumber' in params ? params.VersionNumber : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.LastOperationInstanceTypesCheckPolicy = 'LastOperationInstanceTypesCheckPolicy' in params ? params.LastOperationInstanceTypesCheckPolicy : null;

        if (params.HostNameSettings) {
            let obj = new HostNameSettings();
            obj.deserialize(params.HostNameSettings)
            this.HostNameSettings = obj;
        }

        if (params.InstanceNameSettings) {
            let obj = new InstanceNameSettings();
            obj.deserialize(params.InstanceNameSettings)
            this.InstanceNameSettings = obj;
        }

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.DiskTypePolicy = 'DiskTypePolicy' in params ? params.DiskTypePolicy : null;
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;

        if (params.IPv6InternetAccessible) {
            let obj = new IPv6InternetAccessible();
            obj.deserialize(params.IPv6InternetAccessible)
            this.IPv6InternetAccessible = obj;
        }

    }
}

/**
 * DescribeAccountLimits response structure.
 * @class
 */
class DescribeAccountLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of launch configurations allowed for creation by the user account
         * @type {number || null}
         */
        this.MaxNumberOfLaunchConfigurations = null;

        /**
         * Current number of launch configurations under the user account
         * @type {number || null}
         */
        this.NumberOfLaunchConfigurations = null;

        /**
         * Maximum number of auto scaling groups allowed for creation by the user account
         * @type {number || null}
         */
        this.MaxNumberOfAutoScalingGroups = null;

        /**
         * Current number of auto scaling groups under the user account
         * @type {number || null}
         */
        this.NumberOfAutoScalingGroups = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxNumberOfLaunchConfigurations = 'MaxNumberOfLaunchConfigurations' in params ? params.MaxNumberOfLaunchConfigurations : null;
        this.NumberOfLaunchConfigurations = 'NumberOfLaunchConfigurations' in params ? params.NumberOfLaunchConfigurations : null;
        this.MaxNumberOfAutoScalingGroups = 'MaxNumberOfAutoScalingGroups' in params ? params.MaxNumberOfAutoScalingGroups : null;
        this.NumberOfAutoScalingGroups = 'NumberOfAutoScalingGroups' in params ? params.NumberOfAutoScalingGroups : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLaunchConfiguration response structure.
 * @class
 */
class CreateLaunchConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter is returned when a launch configuration is created through this API, indicating the launch configuration ID.
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the instances related to the current scaling activity.
 * @class
 */
class RelatedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Status of the instance in the scaling activity. Valid values:
`INIT`: Initializing
`RUNNING`: u200dProcessing u200dthe instance
`SUCCESSFUL`: Task succeeded on the instance
`FAILED`: Task failed on the instance
         * @type {string || null}
         */
        this.InstanceStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

    }
}

/**
 * Suggestions for scaling group configurations.
 * @class
 */
class Advice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Problem Description
         * @type {string || null}
         */
        this.Problem = null;

        /**
         * Problem Details
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * Recommended resolutions
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * u200dRisk level of the scaling group configuration. Valid values: <br>
<li>WARNING<br>
<li>CRITICAL<br>
         * @type {string || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Problem = 'Problem' in params ? params.Problem : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * CreateLifecycleHook response structure.
 * @class
 */
class CreateLifecycleHookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearLaunchConfigurationAttributes response structure.
 * @class
 */
class ClearLaunchConfigurationAttributesResponse extends  AbstractModel {
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
 * DescribeAutoScalingGroups response structure.
 * @class
 */
class DescribeAutoScalingGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of auto scaling group details.
         * @type {Array.<AutoScalingGroup> || null}
         */
        this.AutoScalingGroupSet = null;

        /**
         * Number of eligible auto scaling groups.
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

        if (params.AutoScalingGroupSet) {
            this.AutoScalingGroupSet = new Array();
            for (let z in params.AutoScalingGroupSet) {
                let obj = new AutoScalingGroup();
                obj.deserialize(params.AutoScalingGroupSet[z]);
                this.AutoScalingGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScheduledAction request structure.
 * @class
 */
class CreateScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Scheduled task name, which can only contain letters, numbers, underscores, hyphens ("-"), and decimal points with a maximum length of 60 bytes and must be unique in an auto scaling group.
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * The maximum number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * The minimum number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * The desired number of instances set for the auto scaling group when the scheduled task is triggered.
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Initial triggered time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard. <br><br>This parameter and `Recurrence` need to be specified at the same time. After the end time, the scheduled task will no longer take effect.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Repeating mode of the scheduled task, which is in standard cron format. <br><br>This parameter and `EndTime` need to be specified at the same time.
         * @type {string || null}
         */
        this.Recurrence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;

    }
}

/**
 * System disk configuration of the launch configuration. If this parameter is not specified, the default value is assigned to it.
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * System disk type. For more information on limits of system disk types, see [Cloud Disk Types](https://intl.cloud.tencent.com/document/product/362/31636). Valid values:<br><li>`LOCAL_BASIC`: local disk <br><li>`LOCAL_SSD`: local SSD disk <br><li>`CLOUD_BASIC`: HDD cloud disk <br><li>`CLOUD_PREMIUM`: premium cloud storage<br><li>`CLOUD_SSD`: SSD cloud disk <br><br>Default value: `CLOUD_PREMIUM`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk size in GB. Default value: 50
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * Bidding-related options
 * @class
 */
class SpotMarketOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bidding price such as "1.05"
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * Bid request type. Currently, only "one-time" type is supported. Default value: one-time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpotInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxPrice = 'MaxPrice' in params ? params.MaxPrice : null;
        this.SpotInstanceType = 'SpotInstanceType' in params ? params.SpotInstanceType : null;

    }
}

/**
 * StopAutoScalingInstances response structure.
 * @class
 */
class StopAutoScalingInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling activity ID.
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScalingPolicies request structure.
 * @class
 */
class DescribeScalingPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more alarm policy IDs in the format of asp-i9vkg894. The maximum number of instances per request is 100. This parameter does not support specifying both `AutoScalingPolicyIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.AutoScalingPolicyIds = null;

        /**
         * Filters.
<li> `auto-scaling-policy-id` - String - Optional - Filter by the alarm policy ID.</li>
<li> `auto-scaling-group-id` - String - Optional - Filter by the scaling group ID.</li>
<li> `scaling-policy-name` - String - Optional - Filter by the alarm policy name.</li>
<li> `scaling-policy-type` - String - Optional - Filter by the alarm policy type. Valid values: `SIMPLE`, `TARGET_TRACKING`.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. You cannot specify `AutoScalingPolicyIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.AutoScalingPolicyIds = 'AutoScalingPolicyIds' in params ? params.AutoScalingPolicyIds : null;

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
 * Settings of CVM instance names.
 * @class
 */
class InstanceNameSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance name

The `InstanceName` cannot start or end with a dot (.) or hyphen (-), and cannot contain consecutive dots and hyphens.
The name contains 2 to 40 characters, and supports multiple dots (.). The string between two dots can consist of letters (case-insensitive), numbers, and hyphens (-), and cannot be all numbers.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Type of CVM instance name. Valid values: `ORIGINAL` and `UNIQUE`. Default value: `ORIGINAL`.

`ORIGINAL`: Auto Scaling sends the input parameter `InstanceName` to the CVM directly. The CVM may append a serial number to the `InstanceName`. The `InstanceName` of the instances within the scaling group may conflict.

`UNIQUE`: the input parameter `InstanceName` is the prefix of an instance name. Auto Scaling and CVM expand it. The `InstanceName` of an instance in the scaling group is unique.
         * @type {string || null}
         */
        this.InstanceNameStyle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceNameStyle = 'InstanceNameStyle' in params ? params.InstanceNameStyle : null;

    }
}

/**
 * Detailed description of scaling activity status
 * @class
 */
class DetailedStatusMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error type
         * @type {string || null}
         */
        this.Code = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance billing mode
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Instance type
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * ModifyScheduledAction response structure.
 * @class
 */
class ModifyScheduledActionResponse extends  AbstractModel {
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
 * AttachLoadBalancers response structure.
 * @class
 */
class AttachLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExecuteScalingPolicy response structure.
 * @class
 */
class ExecuteScalingPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAutoScalingGroup request structure.
 * @class
 */
class DeleteAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

    }
}

/**
 * SetInstancesProtection response structure.
 * @class
 */
class SetInstancesProtectionResponse extends  AbstractModel {
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
 * StartAutoScalingInstances response structure.
 * @class
 */
class StartAutoScalingInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling activity ID.
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompleteLifecycleAction request structure.
 * @class
 */
class CompleteLifecycleActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * Result of the lifecycle action. Value range: "CONTINUE", "ABANDON"
         * @type {string || null}
         */
        this.LifecycleActionResult = null;

        /**
         * Instance ID. Either "InstanceId" or "LifecycleActionToken" must be specified
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Either "InstanceId" or "LifecycleActionToken" must be specified
         * @type {string || null}
         */
        this.LifecycleActionToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleActionResult = 'LifecycleActionResult' in params ? params.LifecycleActionResult : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LifecycleActionToken = 'LifecycleActionToken' in params ? params.LifecycleActionToken : null;

    }
}

/**
 * CreateScalingPolicy response structure.
 * @class
 */
class CreateScalingPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm trigger policy ID.
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNotificationConfiguration response structure.
 * @class
 */
class CreateNotificationConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification ID.
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLaunchConfigurations response structure.
 * @class
 */
class DescribeLaunchConfigurationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible launch configurations.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of launch configuration details.
         * @type {Array.<LaunchConfiguration> || null}
         */
        this.LaunchConfigurationSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.LaunchConfigurationSet) {
            this.LaunchConfigurationSet = new Array();
            for (let z in params.LaunchConfigurationSet) {
                let obj = new LaunchConfiguration();
                obj.deserialize(params.LaunchConfigurationSet[z]);
                this.LaunchConfigurationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveInstances request structure.
 * @class
 */
class RemoveInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of CVM instance IDs
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DeleteScalingPolicy response structure.
 * @class
 */
class DeleteScalingPolicyResponse extends  AbstractModel {
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
 * Resource type and tag key-value pair
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Type of the resource binded to the tag. Currently supported types include "auto-scaling-group"
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * DetachLoadBalancers request structure.
 * @class
 */
class DetachLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of classic CLB IDs. Up to 20 IDs are allowed. `LoadBalancerIds` and `ForwardLoadBalancerIdentifications` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * List of application CLB IDs. Up to 100 IDs are allowed. `LoadBalancerIds` and `ForwardLoadBalancerIdentifications` cannot be specified at the same time.
         * @type {Array.<ForwardLoadBalancerIdentification> || null}
         */
        this.ForwardLoadBalancerIdentifications = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ForwardLoadBalancerIdentifications) {
            this.ForwardLoadBalancerIdentifications = new Array();
            for (let z in params.ForwardLoadBalancerIdentifications) {
                let obj = new ForwardLoadBalancerIdentification();
                obj.deserialize(params.ForwardLoadBalancerIdentifications[z]);
                this.ForwardLoadBalancerIdentifications.push(obj);
            }
        }

    }
}

/**
 * DescribeAutoScalingInstances request structure.
 * @class
 */
class DescribeAutoScalingInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the CVM instances to query. Up to 100 IDs can be queried at one time. `InstanceIds` and `Filters` can not be both specified.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter.
<li> instance-id - String - Required: No - (Filter) Filter by instance ID.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `InstanceIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned results. Default value: `20`. Maximum value: `100`. For more information on `Limit`, see the relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
 * ModifyLoadBalancers request structure.
 * @class
 */
class ModifyLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of classic CLB IDs. Currently, the maximum length is 20. You cannot specify LoadBalancerIds and ForwardLoadBalancers at the same time.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * List of application CLBs. Up to 100 CLBs are allowed. `LoadBalancerIds` and `ForwardLoadBalancers` cannot be specified at the same time.
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

        /**
         * CLB verification policy. Valid values: "ALL" and "DIFF". Default value: "ALL"
<br><li> ALL. Verification is successful only when all CLBs are valid. Otherwise, verification fails.
<br><li> DIFF. Only the changes in the CLB parameters are verified. If valid, the verification is successful. Otherwise, verification fails.
         * @type {string || null}
         */
        this.LoadBalancersCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }
        this.LoadBalancersCheckPolicy = 'LoadBalancersCheckPolicy' in params ? params.LoadBalancersCheckPolicy : null;

    }
}

/**
 * RemoveInstances response structure.
 * @class
 */
class RemoveInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyScalingPolicy response structure.
 * @class
 */
class ModifyScalingPolicyResponse extends  AbstractModel {
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
 * SetInstancesProtection request structure.
 * @class
 */
class SetInstancesProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Instance ID.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to enable scale-in protection for this instance
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;

    }
}

/**
 * DeleteNotificationConfiguration response structure.
 * @class
 */
class DeleteNotificationConfigurationResponse extends  AbstractModel {
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
 * DetachInstances response structure.
 * @class
 */
class DetachInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLaunchConfigurationAttributes response structure.
 * @class
 */
class ModifyLaunchConfigurationAttributesResponse extends  AbstractModel {
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
 * CreateLaunchConfiguration request structure.
 * @class
 */
class CreateLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Display name of the launch configuration, which can contain letters, digits, underscores and hyphens (-), and dots. Up to of 60 bytes allowed..
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * [Image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are three types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><br/>You can obtain the image IDs in the [CVM console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE).</li><li>You can also use the [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Project ID of the launch configuration. The default project is used if it’s left blank.
Note that this project ID is not the same as the project ID of the scaling group. 
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance model. Different instance models specify different resource specifications. The specific value can be obtained by calling the [DescribeInstanceTypeConfigs](https://intl.cloud.tencent.com/document/api/213/15749?from_cn_redirect=1) API to get the latest specification table or referring to the descriptions in [Instance Types](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1).
`InstanceType` and `InstanceTypes` are mutually exclusive, and one and only one of them must be entered.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be used.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Information of the instance's data disk configuration. If this parameter is not specified, no data disk is purchased by default. Up to 11 data disks can be supported.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Configuration of public network bandwidth. If this parameter is not specified, 0 Mbps will be used by default.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * The security group to which the instance belongs. This parameter can be obtained by calling the `SecurityGroupId` field in the returned value of [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1). If this parameter is not specified, no security group will be bound by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Security and Cloud Monitor. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Base64-encoded custom data of up to 16 KB.
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Instance billing mode. CVM instances take `POSTPAID_BY_HOUR` by default. Valid values:
<br><li>POSTPAID_BY_HOUR: pay-as-you-go hourly
<br><li>SPOTPAID: spot instance
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market options of the instance, such as parameters related to spot instances. This parameter is required for spot instances.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * List of instance models. Different instance models specify different resource specifications. Up to 10 instance models can be supported.
`InstanceType` and `InstanceTypes` are mutually exclusive, and one and only one of them must be entered.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * CAM role name. This parameter can be obtained from the `roleName` field returned by DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * Instance type verification policy. Value range: ALL, ANY. Default value: ANY.
<br><li> ALL: The verification will success only if all instance types (InstanceType) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any instance type (InstanceType) is available; otherwise, an error will be reported.

Common reasons why an instance type is unavailable include stock-out of the instance type or the corresponding cloud disk.
If a model in InstanceTypes does not exist or has been discontinued, a verification error will be reported regardless of the value of InstanceTypesCheckPolicy.
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

        /**
         * List of tags. This parameter is used to bind up to 10 tags to newly added instances.
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

        /**
         * List of tags. You can specify tags that you want to bind to the launch configuration. Each launch configuration can have up to 30 tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * CVM hostname settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * Settings of CVM instance names
If this field is configured in a launch configuration, the `InstanceName` of a CVM created by the scaling group will be generated according to the configuration; otherwise, it will be in the `as-{{AutoScalingGroupName }}` format.
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * Details of the monthly subscription, including the purchase period, auto-renewal. It is required if the `InstanceChargeType` is `PREPAID`.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Selection policy of cloud disks. Default value: ORIGINAL. Valid values:
<br><li>ORIGINAL: uses the configured cloud disk type
<br><li>AUTOMATIC: automatically chooses an available cloud disk type
         * @type {string || null}
         */
        this.DiskTypePolicy = null;

        /**
         * HPC ID<br>
Note: This field is default to empty
         * @type {string || null}
         */
        this.HpcClusterId = null;

        /**
         * IPv6 public network bandwidth configuration. If the IPv6 address is available in the new instance, public network bandwidth can be allocated to the IPv6 address. This parameter is invalid if `Ipv6AddressCount` of the scaling group associated with the launch configuration is 0.
         * @type {IPv6InternetAccessible || null}
         */
        this.IPv6InternetAccessible = null;

        /**
         * Placement group ID. Only one is allowed.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

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

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
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

        if (params.HostNameSettings) {
            let obj = new HostNameSettings();
            obj.deserialize(params.HostNameSettings)
            this.HostNameSettings = obj;
        }

        if (params.InstanceNameSettings) {
            let obj = new InstanceNameSettings();
            obj.deserialize(params.InstanceNameSettings)
            this.InstanceNameSettings = obj;
        }

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.DiskTypePolicy = 'DiskTypePolicy' in params ? params.DiskTypePolicy : null;
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;

        if (params.IPv6InternetAccessible) {
            let obj = new IPv6InternetAccessible();
            obj.deserialize(params.IPv6InternetAccessible)
            this.IPv6InternetAccessible = obj;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

    }
}

/**
 * Auto scaling group
 * @class
 */
class AutoScalingGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Auto scaling group name
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * Current scaling group status. Valid values:<br>
<li>NORMAL: Normal<br>
<li>CVM_ABNORMAL: Abnormal launch configuration<br>
<li>LB_ABNORMAL: Abnormal load balancer<br>
<li>LB_LISTENER_ABNORMAL: Abnormal load balancer listener<br>
<li>LB_LOCATION_ABNORMAL: Abnormal forwarding configuration of the load balancer listener<br>
<li>VPC_ABNORMAL: VPC network error<br>
<li>SUBNET_ABNORMAL: VPC subnet exception<br>
<li>INSUFFICIENT_BALANCE: Insufficient account balance<br>
<li>LB_BACKEND_REGION_NOT_MATCH: The CLB backend and the AS service are not in the same region.<br>
<li>LB_BACKEND_VPC_NOT_MATCH: The CLB instance and the scaling group are not in the same VPC.
         * @type {string || null}
         */
        this.AutoScalingGroupStatus = null;

        /**
         * Creation time in UTC format
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Default cooldown period in seconds
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * Desired number of instances
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Enabled status. Value range: `ENABLED`, `DISABLED`
         * @type {string || null}
         */
        this.EnabledStatus = null;

        /**
         * List of application load balancers
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancerSet = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Number of instances in `IN_SERVICE` status
         * @type {number || null}
         */
        this.InServiceInstanceCount = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Launch configuration name
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * List of Classic load balancer IDs
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIdSet = null;

        /**
         * Maximum number of instances
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Minimum number of instances
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of subnet IDs
         * @type {Array.<string> || null}
         */
        this.SubnetIdSet = null;

        /**
         * Termination policy
         * @type {Array.<string> || null}
         */
        this.TerminationPolicySet = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * List of availability zones
         * @type {Array.<string> || null}
         */
        this.ZoneSet = null;

        /**
         * Retry policy
         * @type {string || null}
         */
        this.RetryPolicy = null;

        /**
         * Whether the auto scaling group is performing a scaling activity. `IN_ACTIVITY` indicates yes, and `NOT_IN_ACTIVITY` indicates no.
         * @type {string || null}
         */
        this.InActivityStatus = null;

        /**
         * List of auto scaling group tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Service settings
         * @type {ServiceSettings || null}
         */
        this.ServiceSettings = null;

        /**
         * The number of IPv6 addresses that an instance has.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * The policy applied when there are multiple availability zones/subnets
<br><li> PRIORITY: when creating instances, choose the availability zone/subnet based on the order in the list from top to bottom. If the first instance is successfully created in the availability zone/subnet of the highest priority, all instances will be created in this availability zone/subnet.
<br><li> EQUALITY: chooses the availability zone/subnet with the least instances for scale-out. This gives each availability zone/subnet an opportunity for scale-out and disperses the instances created during multiple scale-out operations across different availability zones/subnets.
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

        /**
         * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information, see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB: confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).
         * @type {string || null}
         */
        this.HealthCheckType = null;

        /**
         * Grace period of the CLB health check
         * @type {number || null}
         */
        this.LoadBalancerHealthCheckGracePeriod = null;

        /**
         * Specifies how to assign instances. Valid values: `LAUNCH_CONFIGURATION` and `SPOT_MIXED`.
<br><li>`LAUNCH_CONFIGURATION`: the launch configuration mode.
<br><li>`SPOT_MIXED`: a mixed instance mode. Currently, this mode is supported only when the launch configuration takes the pay-as-you-go billing mode. With this mode, the scaling group can provision a combination of pay-as-you-go instances and spot instances to meet the configured capacity. Note that the billing mode of the associated launch configuration cannot be modified when this mode is used.
         * @type {string || null}
         */
        this.InstanceAllocationPolicy = null;

        /**
         * Specifies how to assign pay-as-you-go instances and spot instances.
A valid value will be returned only when `InstanceAllocationPolicy` is set to `SPOT_MIXED`.
         * @type {SpotMixedAllocationPolicy || null}
         */
        this.SpotMixedAllocationPolicy = null;

        /**
         * Indicates whether the capacity rebalancing feature is enabled. This parameter is only valid for spot instances in the scaling group. Valid values:
<br><li>`TRUE`: yes. Before the spot instances in the scaling group are about to be automatically repossessed, AS will terminate them. The scale-in hook (if configured) will take effect before the termination. After the termination process starts, AS will asynchronously initiate a scaling activity to meet the desired capacity.
<br><li>`FALSE`: no. AS will add instances to meet the desired capacity only after the spot instances are terminated.
         * @type {boolean || null}
         */
        this.CapacityRebalance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.AutoScalingGroupStatus = 'AutoScalingGroupStatus' in params ? params.AutoScalingGroupStatus : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.EnabledStatus = 'EnabledStatus' in params ? params.EnabledStatus : null;

        if (params.ForwardLoadBalancerSet) {
            this.ForwardLoadBalancerSet = new Array();
            for (let z in params.ForwardLoadBalancerSet) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancerSet[z]);
                this.ForwardLoadBalancerSet.push(obj);
            }
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InServiceInstanceCount = 'InServiceInstanceCount' in params ? params.InServiceInstanceCount : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.LoadBalancerIdSet = 'LoadBalancerIdSet' in params ? params.LoadBalancerIdSet : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubnetIdSet = 'SubnetIdSet' in params ? params.SubnetIdSet : null;
        this.TerminationPolicySet = 'TerminationPolicySet' in params ? params.TerminationPolicySet : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ZoneSet = 'ZoneSet' in params ? params.ZoneSet : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.InActivityStatus = 'InActivityStatus' in params ? params.InActivityStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ServiceSettings) {
            let obj = new ServiceSettings();
            obj.deserialize(params.ServiceSettings)
            this.ServiceSettings = obj;
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;
        this.MultiZoneSubnetPolicy = 'MultiZoneSubnetPolicy' in params ? params.MultiZoneSubnetPolicy : null;
        this.HealthCheckType = 'HealthCheckType' in params ? params.HealthCheckType : null;
        this.LoadBalancerHealthCheckGracePeriod = 'LoadBalancerHealthCheckGracePeriod' in params ? params.LoadBalancerHealthCheckGracePeriod : null;
        this.InstanceAllocationPolicy = 'InstanceAllocationPolicy' in params ? params.InstanceAllocationPolicy : null;

        if (params.SpotMixedAllocationPolicy) {
            let obj = new SpotMixedAllocationPolicy();
            obj.deserialize(params.SpotMixedAllocationPolicy)
            this.SpotMixedAllocationPolicy = obj;
        }
        this.CapacityRebalance = 'CapacityRebalance' in params ? params.CapacityRebalance : null;

    }
}

/**
 * AttachInstances response structure.
 * @class
 */
class AttachInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoScalingGroupLastActivities response structure.
 * @class
 */
class DescribeAutoScalingGroupLastActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of eligible scaling activities. Scaling groups without scaling activities are not returned. For example, if there are 50 auto scaling group IDs but only 45 records are returned, it indicates that 5 of the auto scaling groups do not have scaling activities.
         * @type {Array.<Activity> || null}
         */
        this.ActivitySet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountLimits request structure.
 * @class
 */
class DescribeAccountLimitsRequest extends  AbstractModel {
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
 * UpgradeLifecycleHook request structure.
 * @class
 */
class UpgradeLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * Lifecycle hook name
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * Scenario for the lifecycle hook. Value range: "INSTANCE_LAUNCHING", "INSTANCE_TERMINATING"
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * Defines the action to be taken by the auto scaling group upon lifecycle hook timeout. Value range: "CONTINUE", "ABANDON". Default value: "CONTINUE"
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * The maximum length of time (in seconds) that can elapse before the lifecycle hook times out. Value range: 30-7200. Default value: 300
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Additional information of a notification that Auto Scaling sends to targets. This parameter is set when you configure a notification (default value: "").
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * Notification result. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * The scenario where the lifecycle hook is applied. `EXTENSION`: the lifecycle hook will be triggered when AttachInstances, DetachInstances or RemoveInstaces is called. `NORMAL`: the lifecycle hook is not triggered by the above APIs. 
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

        /**
         * Remote command execution object. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
         * @type {LifecycleCommand || null}
         */
        this.LifecycleCommand = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }
        this.LifecycleTransitionType = 'LifecycleTransitionType' in params ? params.LifecycleTransitionType : null;

        if (params.LifecycleCommand) {
            let obj = new LifecycleCommand();
            obj.deserialize(params.LifecycleCommand)
            this.LifecycleCommand = obj;
        }

    }
}

/**
 * DetachLoadBalancers response structure.
 * @class
 */
class DetachLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarm trigger policy.
 * @class
 */
class ScalingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Alarm trigger policy ID.
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * Scaling policy type. Valid values:
- `SIMPLE`: A simple policy.
- `TARGET_TRACKING`: A target tracking policy.
         * @type {string || null}
         */
        this.ScalingPolicyType = null;

        /**
         * Alarm trigger policy name.
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * The method to adjust the desired capacity after the alarm is triggered. It’s only available when `ScalingPolicyType` is `Simple`. Valid values: <br><li>`CHANGE_IN_CAPACITY`: Increase or decrease the desired capacity </li><li>`EXACT_CAPACITY`: Adjust to the specified desired capacity </li> <li>`PERCENT_CHANGE_IN_CAPACITY`: Adjust the desired capacity by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * The adjusted value of desired capacity after the alarm is triggered. This parameter is only applicable to a simple policy.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Cooldown period. This parameter is only applicable to a simple policy.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Alarm monitoring metrics of a simple policy.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * Preset monitoring item. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>ASG_AVG_CPU_UTILIZATION: Average CPU utilization</li><li>ASG_AVG_LAN_TRAFFIC_OUT: Average private bandwidth out</li><li>ASG_AVG_LAN_TRAFFIC_IN: Average private bandwidth in</li><li>ASG_AVG_WAN_TRAFFIC_OUT: Average public bandwidth out</li><li>ASG_AVG_WAN_TRAFFIC_IN: Average public bandwidth in</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PredefinedMetricType = null;

        /**
         * Target value. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value ranges: <br><li>`ASG_AVG_CPU_UTILIZATION` (in %): [1, 100)</li><li>`ASG_AVG_LAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_LAN_TRAFFIC_IN` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_IN` (in Mbps): >0</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetValue = null;

        /**
         * Instance warm-up period (in seconds). It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value range: 0-3600.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EstimatedInstanceWarmup = null;

        /**
         * Whether to disable scale-in. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>`true`: Scaling in is not allowed.</li><li>`false`: Allows both scale-out and scale-in</li>
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.DisableScaleIn = null;

        /**
         * List of alarm monitoring metrics. This parameter is only applicable to a target tracking policy.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<MetricAlarm> || null}
         */
        this.MetricAlarms = null;

        /**
         * Notification group ID, which is the set of user group IDs.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.ScalingPolicyType = 'ScalingPolicyType' in params ? params.ScalingPolicyType : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.PredefinedMetricType = 'PredefinedMetricType' in params ? params.PredefinedMetricType : null;
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;
        this.EstimatedInstanceWarmup = 'EstimatedInstanceWarmup' in params ? params.EstimatedInstanceWarmup : null;
        this.DisableScaleIn = 'DisableScaleIn' in params ? params.DisableScaleIn : null;

        if (params.MetricAlarms) {
            this.MetricAlarms = new Array();
            for (let z in params.MetricAlarms) {
                let obj = new MetricAlarm();
                obj.deserialize(params.MetricAlarms[z]);
                this.MetricAlarms.push(obj);
            }
        }
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

    }
}

/**
 * DescribeAutoScalingGroupLastActivities request structure.
 * @class
 */
class DescribeAutoScalingGroupLastActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of an auto scaling group.
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;

    }
}

/**
 * CVM HostName settings
 * @class
 */
class HostNameSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hostname of a CVM
<br><li>The `HostName` cannot start or end with a period (.) or hyphen (-), and cannot contain consecutive periods and hyphens.
<br><li>This field is unavailable to CVM instances.
<br><li>Other types of instances (such as Linux): the name contains 2 to 40 characters, and supports multiple periods (.). The string between two periods can consist of letters (case insensitive), numbers, and hyphens (-), and cannot be all numbers.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Type of CVM host name. Valid values: "ORIGINAL" and "UNIQUE". Default value: "ORIGINAL"
<br><li> ORIGINAL. Auto Scaling transfers the HostName set in input parameters to the CVM directly. CVM may adds serial numbers for the HostName. The HostName of instances within the auto scaling group may conflict.
<br><li> UNIQUE. The HostName set in input parameters is the prefix of a host name. Auto Scaling and CVM expand it. The HostName of an instance in the auto scaling group is unique.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HostNameStyle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostNameStyle = 'HostNameStyle' in params ? params.HostNameStyle : null;

    }
}

/**
 * ModifyLoadBalancers response structure.
 * @class
 */
class ModifyLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNotificationConfiguration request structure.
 * @class
 */
class CreateNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Notification type, i.e., the set of types of notifications to be subscribed to. Value range:
<li>SCALE_OUT_SUCCESSFUL: scale-out succeeded</li>
<li>SCALE_OUT_FAILED: scale-out failed</li>
<li>SCALE_IN_SUCCESSFUL: scale-in succeeded</li>
<li>SCALE_IN_FAILED: scale-in failed</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL: unhealthy instance replacement succeeded</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED: unhealthy instance replacement failed</li>
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://intl.cloud.tencent.com/document/product/598/34589?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

        /**
         * Notification receiver type. Valid values:
<br><li>USER_GROUP:User group
<br><li>CMQ_QUEUE:CMQ queue
<br><li>CMQ_TOPIC:CMQ topic
<br><li>TDMQ_CMQ_TOPIC:TDMQ CMQ topic
<br><li>TDMQ_CMQ_QUEUE:TDMQ CMQ queue

Default value: `USER_GROUP`.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * CMQ queue name. This parameter is required when `TargetType` is `CMQ_QUEUE` or `TDMQ_CMQ_QUEUE`.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * CMQ topic name. This parameter is required when `TargetType` is `CMQ_TOPIC` or `TDMQ_CMQ_TOPIC`.
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeScheduledActions response structure.
 * @class
 */
class DescribeScheduledActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible scheduled tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of scheduled task details.
         * @type {Array.<ScheduledAction> || null}
         */
        this.ScheduledActionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ScheduledActionSet) {
            this.ScheduledActionSet = new Array();
            for (let z in params.ScheduledActionSet) {
                let obj = new ScheduledAction();
                obj.deserialize(params.ScheduledActionSet[z]);
                this.ScheduledActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLifecycleHook request structure.
 * @class
 */
class DeleteLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;

    }
}

/**
 * ModifyLoadBalancerTargetAttributes response structure.
 * @class
 */
class ModifyLoadBalancerTargetAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoScalingGroup response structure.
 * @class
 */
class ModifyAutoScalingGroupResponse extends  AbstractModel {
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
 * DeleteLaunchConfiguration request structure.
 * @class
 */
class DeleteLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the launch configuration to be deleted.
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;

    }
}

/**
 * Result of the command execution
 * @class
 */
class InvocationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Execution activity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Execution task ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InvocationTaskId = null;

        /**
         * Command ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Execution Status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Execution exception information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.InvocationTaskId = 'InvocationTaskId' in params ? params.InvocationTaskId : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * ModifyScalingPolicy request structure.
 * @class
 */
class ModifyScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID.
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * Alarm policy name.
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * The method to adjust the desired capacity after the alarm is triggered. It’s only available when `ScalingPolicyType` is `Simple`. Valid values: <br><li>`CHANGE_IN_CAPACITY`: Increase or decrease the desired capacity </li><li>`EXACT_CAPACITY`: Adjust to the specified desired capacity </li> <li>`PERCENT_CHANGE_IN_CAPACITY`: Adjust the desired capacity by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * Specifies how to adjust the number of desired capacity when the alarm is triggered. It’s only available when `ScalingPolicyType` is `Simple`. Values: <br><li>`AdjustmentType`=`CHANGE_IN_CAPACITY`: Number of instances to add (positive number) or remove (negative number). </li> <li>`AdjustmentType`=`EXACT_CAPACITY`: Set the desired capacity to the specified number. It must be ≥ 0. </li> <li>`AdjustmentType`=`PERCENT_CHANGE_IN_CAPACITY`: Percentage of instance number. Add instances (positive value) or remove instances (negative value) accordingly.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Cooldown period (in seconds). It’s only available when `ScalingPolicyType` is `Simple`.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Alarm monitoring metric. It’s only available when `ScalingPolicyType` is `Simple`.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * Preset monitoring item. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>ASG_AVG_CPU_UTILIZATION: Average CPU utilization</li><li>ASG_AVG_LAN_TRAFFIC_OUT: Average private bandwidth out</li><li>ASG_AVG_LAN_TRAFFIC_IN: Average private bandwidth in</li><li>ASG_AVG_WAN_TRAFFIC_OUT: Average public bandwidth out</li><li>ASG_AVG_WAN_TRAFFIC_IN: Average public bandwidth in</li>
         * @type {string || null}
         */
        this.PredefinedMetricType = null;

        /**
         * Target value. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value ranges: <br><li>`ASG_AVG_CPU_UTILIZATION` (in %): [1, 100)</li><li>`ASG_AVG_LAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_LAN_TRAFFIC_IN` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_IN` (in Mbps): >0</li>
         * @type {number || null}
         */
        this.TargetValue = null;

        /**
         * Instance warm-up period (in seconds). It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value range: 0-3600.
         * @type {number || null}
         */
        this.EstimatedInstanceWarmup = null;

        /**
         * Whether to disable scale-in. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>`true`: Scaling in is not allowed.</li><li>`false`: Allows both scale-out and scale-in</li>
         * @type {boolean || null}
         */
        this.DisableScaleIn = null;

        /**
         * This parameter is diused. Please use [CreateNotificationConfiguration](https://intl.cloud.tencent.com/document/api/377/33185?from_cn_redirect=1) instead.
Notification group ID, which is the set of user group IDs.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.PredefinedMetricType = 'PredefinedMetricType' in params ? params.PredefinedMetricType : null;
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;
        this.EstimatedInstanceWarmup = 'EstimatedInstanceWarmup' in params ? params.EstimatedInstanceWarmup : null;
        this.DisableScaleIn = 'DisableScaleIn' in params ? params.DisableScaleIn : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

    }
}

/**
 * Options related to a CVM bidding request
 * @class
 */
class InstanceMarketOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bidding-related options
         * @type {SpotMarketOptions || null}
         */
        this.SpotOptions = null;

        /**
         * Market option type. Currently, this only supports the value "spot"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MarketType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpotOptions) {
            let obj = new SpotMarketOptions();
            obj.deserialize(params.SpotOptions)
            this.SpotOptions = obj;
        }
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * UpgradeLifecycleHook response structure.
 * @class
 */
class UpgradeLifecycleHookResponse extends  AbstractModel {
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
 * Instance tag. This parameter is used to bind tags to newly added instances.
 * @class
 */
class InstanceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
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
 * ModifyLifecycleHook response structure.
 * @class
 */
class ModifyLifecycleHookResponse extends  AbstractModel {
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
 * Remote command execution object.
 * @class
 */
class LifecycleCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remote command ID. It’s required to execute a command.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Custom parameter. The field type is JSON encoded string. For example, {"varA": "222"}.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
If this parameter is not specified, the `DefaultParameters` of `Command` is used.
Up to 20 customer parameters allowed. The parameter name can contain up to 64 characters, including [a-z], [A-Z], [0-9] and [-_].
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

    }
}

/**
 * DescribeAutoScalingAdvices response structure.
 * @class
 */
class DescribeAutoScalingAdvicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A collection of suggestions for scaling group configurations.
         * @type {Array.<AutoScalingAdvice> || null}
         */
        this.AutoScalingAdviceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AutoScalingAdviceSet) {
            this.AutoScalingAdviceSet = new Array();
            for (let z in params.AutoScalingAdviceSet) {
                let obj = new AutoScalingAdvice();
                obj.deserialize(params.AutoScalingAdviceSet[z]);
                this.AutoScalingAdviceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAutoScalingGroup request structure.
 * @class
 */
class CreateAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group name, which can only contain letters, numbers, underscores, hyphens ("-"), and decimal points with a maximum length of 55 bytes and must be unique under your account.
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Maximum number of instances. Value range: 0-2,000.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Minimum number of instances. Value range: 0-2,000.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * VPC ID; if on a basic network, enter an empty string
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Default cooldown period in seconds. Default value: 300
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * Desired number of instances. The number should be no larger than the maximum and no smaller than minimum number of instances
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * List of classic CLB IDs. Currently, the maximum length is 20. You cannot specify LoadBalancerIds and ForwardLoadBalancers at the same time.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Project ID of an instance in a scaling group. The default project is used if it’s left blank.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of application CLBs. Up to 100 CLBs are allowed. `LoadBalancerIds` and `ForwardLoadBalancers` cannot be specified at the same time.
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

        /**
         * List of subnet IDs. A subnet must be specified in the VPC scenario. If multiple subnets are entered, their priority will be determined by the order in which they are entered, and they will be tried one by one until instances can be successfully created.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Termination policy. Currently, the maximum length is 1. Value range: OLDEST_INSTANCE, NEWEST_INSTANCE. Default value: OLDEST_INSTANCE.
<br><li> OLDEST_INSTANCE: The oldest instance in the auto scaling group will be terminated first.
<br><li> NEWEST_INSTANCE: The newest instance in the auto scaling group will be terminated first.
         * @type {Array.<string> || null}
         */
        this.TerminationPolicies = null;

        /**
         * List of availability zones. An availability zone must be specified in the basic network scenario. If multiple availability zones are entered, their priority will be determined by the order in which they are entered, and they will be tried one by one until instances can be successfully created.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Retry policy. Valid values: `IMMEDIATE_RETRY` (default), `INCREMENTAL_INTERVALS`, `NO_RETRY`. A partially successful scaling is judged as a failed one.
<br><li>`IMMEDIATE_RETRY`: Retry immediately. Stop retrying after five consecutive failures.
<br><li>`INCREMENTAL_INTERVALS`: Retry at incremental intervals. As the number of consecutive failures increases, the retry interval gradually increases, ranging from seconds to one day.
<br><li>`NO_RETRY`: Do not retry. Actions are taken when the next call or alarm message comes.
         * @type {string || null}
         */
        this.RetryPolicy = null;

        /**
         * Availability zone verification policy. Value range: ALL, ANY. Default value: ANY.
<br><li> ALL: The verification will succeed only if all availability zones (Zone) or subnets (SubnetId) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any availability zone (Zone) or subnet (SubnetId) is available; otherwise, an error will be reported.

Common reasons why an availability zone or subnet is unavailable include stock-out of CVM instances or CBS cloud disks in the availability zone, insufficient quota in the availability zone, or insufficient IPs in the subnet.
If an availability zone or subnet in Zones/SubnetIds does not exist, a verification error will be reported regardless of the value of ZonesCheckPolicy.
         * @type {string || null}
         */
        this.ZonesCheckPolicy = null;

        /**
         * List of tag descriptions. In this parameter, you can specify the tags to be bound with a scaling group as well as corresponding resource instances. Each scaling group can have up to 30 tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Service settings such as unhealthy instance replacement.
         * @type {ServiceSettings || null}
         */
        this.ServiceSettings = null;

        /**
         * The number of IPv6 addresses that an instance has. Valid values: 0 and 1. Default value: 0.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * Multi-availability zone/subnet policy. Valid values: PRIORITY and EQUALITY. Default value: PRIORITY.
<br><li> PRIORITY: when creating instances, choose the availability zone/subnet based on the order in the list from top to bottom. If the first instance is successfully created in the availability zone/subnet of the highest priority, all instances will be created in this availability zone/subnet.
<br><li>EQUALITY: instances created for scale-out are distributed to multiple availability zones/subnets, so as to keep the number of instances in different availability zone/subnet in balance.

Notes: 
<br><li> When the scaling group is based on the classic network, this policy applies to multiple availability zones. When the scaling group is based on a VPC, this policy applies to multiple subnets, and you do not need to consider availability zones. For example, if you have four subnets (A, B, C, and D) and A, B, and C are in availability zone 1 and D is in availability zone 2, you only need to decide the order of the four subnets, without worrying about the issue of availability zones.
<br><li> This policy is applicable to multiple availability zones/subnets, but is not applicable to multiple models with launch configurations. Specify the models according to the model priority.
<br><li> When creating instances based on the PRIORITY policy, apply the multi-model policy and then apply the multi-availability zones/subnet policy. For example, if you have models A and B and subnets 1, 2, and 3, creation will be attempted in the following order: A1, A2, A3, B1, B2, and B3. If A1 is sold out, A2 (not B1) is tried next.
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

        /**
         * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information, see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB: confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).<br>If the parameter is set to `CLB`, the scaling group will check both the network status and the CLB health check status. If the network check indicates unhealthy, the `HealthStatus` field will return `UNHEALTHY`. If the CLB health check indicates unhealthy, the `HealthStatus` field will return `CLB_UNHEALTHY`. If both checks indicate unhealthy, the `HealthStatus` field will return `UNHEALTHY|CLB_UNHEALTHY`. Default value: `CLB`.
         * @type {string || null}
         */
        this.HealthCheckType = null;

        /**
         * Grace period of the CLB health check during which the `IN_SERVICE` instances added will not be marked as `CLB_UNHEALTHY`.<br>Valid range: 0-7200, in seconds. Default value: `0`.
         * @type {number || null}
         */
        this.LoadBalancerHealthCheckGracePeriod = null;

        /**
         * Specifies how to assign instances. Valid values: `LAUNCH_CONFIGURATION` and `SPOT_MIXED`; default value: `LAUNCH_CONFIGURATION`.
<br><li>`LAUNCH_CONFIGURATION`: the launch configuration mode.
<br><li>`SPOT_MIXED`: a mixed instance mode. Currently, this mode is supported only when the launch configuration takes the pay-as-you-go billing mode. With this mode, the scaling group can provision a combination of pay-as-you-go instances and spot instances to meet the configured capacity. Note that the billing mode of the associated launch configuration cannot be modified when this mode is used.
         * @type {string || null}
         */
        this.InstanceAllocationPolicy = null;

        /**
         * Specifies how to assign pay-as-you-go instances and spot instances.
This parameter is valid only when `InstanceAllocationPolicy ` is set to `SPOT_MIXED`.
         * @type {SpotMixedAllocationPolicy || null}
         */
        this.SpotMixedAllocationPolicy = null;

        /**
         * Indicates whether the capacity re-balancing feature is enabled. This parameter is only valid for spot instances in the scaling group. Valid values:
<br><li>`TRUE`: yes. Before the spot instances in the scaling group are about to be automatically repossessed, AS will terminate them. The scale-in hook (if configured) will take effect before the termination. After the termination process starts, AS will asynchronously initiate a scaling activity to meet the desired capacity.
<br><li>`FALSE`: no. In this case, AS will add instances to meet the desired capacity only after the spot instances are terminated.

Default value: `False`.
         * @type {boolean || null}
         */
        this.CapacityRebalance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.TerminationPolicies = 'TerminationPolicies' in params ? params.TerminationPolicies : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.ZonesCheckPolicy = 'ZonesCheckPolicy' in params ? params.ZonesCheckPolicy : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ServiceSettings) {
            let obj = new ServiceSettings();
            obj.deserialize(params.ServiceSettings)
            this.ServiceSettings = obj;
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;
        this.MultiZoneSubnetPolicy = 'MultiZoneSubnetPolicy' in params ? params.MultiZoneSubnetPolicy : null;
        this.HealthCheckType = 'HealthCheckType' in params ? params.HealthCheckType : null;
        this.LoadBalancerHealthCheckGracePeriod = 'LoadBalancerHealthCheckGracePeriod' in params ? params.LoadBalancerHealthCheckGracePeriod : null;
        this.InstanceAllocationPolicy = 'InstanceAllocationPolicy' in params ? params.InstanceAllocationPolicy : null;

        if (params.SpotMixedAllocationPolicy) {
            let obj = new SpotMixedAllocationPolicy();
            obj.deserialize(params.SpotMixedAllocationPolicy)
            this.SpotMixedAllocationPolicy = obj;
        }
        this.CapacityRebalance = 'CapacityRebalance' in params ? params.CapacityRebalance : null;

    }
}

/**
 * DeleteScheduledAction response structure.
 * @class
 */
class DeleteScheduledActionResponse extends  AbstractModel {
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
 * UpgradeLaunchConfiguration request structure.
 * @class
 */
class UpgradeLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Launch configuration ID.
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * [Image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are three types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><br/>You can obtain the image IDs in the [CVM console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE).</li><li>You can also use the [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of instance models. Different instance models specify different resource specifications. Up to 5 instance models can be supported.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Display name of the launch configuration, which can contain letters, digits, underscores and hyphens (-), and dots. Up to of 60 bytes allowed..
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Information of the instance's data disk configuration. If this parameter is not specified, no data disk is purchased by default. Up to 11 data disks can be supported.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Security and Cloud Monitor. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Instance billing type. CVM instances are POSTPAID_BY_HOUR by default.
<br><li>POSTPAID_BY_HOUR: Pay-as-you-go on an hourly basis
<br><li>SPOTPAID: Bidding
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market options of the instance, such as parameters related to spot instances. This parameter is required for spot instances.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * Instance type verification policy. Value range: ALL, ANY. Default value: ANY.
<br><li> ALL: The verification will success only if all instance types (InstanceType) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any instance type (InstanceType) is available; otherwise, an error will be reported.

Common reasons why an instance type is unavailable include stock-out of the instance type or the corresponding cloud disk.
If a model in InstanceTypes does not exist or has been discontinued, a verification error will be reported regardless of the value of InstanceTypesCheckPolicy.
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

        /**
         * Configuration of public network bandwidth. If this parameter is not specified, 0 Mbps will be used by default.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Project ID of the instance. Leave it blank as the default.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The security group to which the instance belongs. This parameter can be obtained by calling the `SecurityGroupId` field in the returned value of [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1). If this parameter is not specified, no security group will be bound by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be used.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Base64-encoded custom data of up to 16 KB.
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * List of tags. This parameter is used to bind up to 10 tags to newly added instances.
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

        /**
         * CAM role name, which can be obtained from the roleName field in the return value of the DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * CVM hostname settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * Settings of CVM instance names
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * Details of the monthly subscription, including the purchase period, auto-renewal. It is required if the `InstanceChargeType` is `PREPAID`.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Selection policy of cloud disks. Default value: ORIGINAL. Valid values:
<br><li>ORIGINAL: uses the configured cloud disk type
<br><li>AUTOMATIC: automatically chooses an available cloud disk type
         * @type {string || null}
         */
        this.DiskTypePolicy = null;

        /**
         * IPv6 public network bandwidth configuration. If the IPv6 address is available in the new instance, public network bandwidth can be allocated to the IPv6 address. This parameter is invalid if `Ipv6AddressCount` of the scaling group associated with the launch configuration is 0.
         * @type {IPv6InternetAccessible || null}
         */
        this.IPv6InternetAccessible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;

        if (params.HostNameSettings) {
            let obj = new HostNameSettings();
            obj.deserialize(params.HostNameSettings)
            this.HostNameSettings = obj;
        }

        if (params.InstanceNameSettings) {
            let obj = new InstanceNameSettings();
            obj.deserialize(params.InstanceNameSettings)
            this.InstanceNameSettings = obj;
        }

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.DiskTypePolicy = 'DiskTypePolicy' in params ? params.DiskTypePolicy : null;

        if (params.IPv6InternetAccessible) {
            let obj = new IPv6InternetAccessible();
            obj.deserialize(params.IPv6InternetAccessible)
            this.IPv6InternetAccessible = obj;
        }

    }
}

/**
 * DescribeAutoScalingActivities response structure.
 * @class
 */
class DescribeAutoScalingActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible scaling activities.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information set of eligible scaling activities.
         * @type {Array.<Activity> || null}
         */
        this.ActivitySet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNotificationConfigurations response structure.
 * @class
 */
class DescribeNotificationConfigurationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible notifications.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of AS event notification details.
         * @type {Array.<AutoScalingNotification> || null}
         */
        this.AutoScalingNotificationSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AutoScalingNotificationSet) {
            this.AutoScalingNotificationSet = new Array();
            for (let z in params.AutoScalingNotificationSet) {
                let obj = new AutoScalingNotification();
                obj.deserialize(params.AutoScalingNotificationSet[z]);
                this.AutoScalingNotificationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration information of data disk in launch configuration. If this parameter is not specified, no data disk will be purchased by default. You can specify only one data disk when purchasing it.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk type. See [Cloud Disk Types](https://intl.cloud.tencent.com/document/product/362/31636). Valid values:<br><li>`LOCAL_BASIC`: Local disk<br><li>`LOCAL_SSD`: Local SSD disk<br><li>`CLOUD_BASIC`: HDD cloud disk<br><li>`CLOUD_PREMIUM`: Premium cloud storage<br><li>`CLOUD_SSD`: SSD cloud disk<br><li>`CLOUD_HSSD`: Enhanced SSD<br><li>`CLOUD_TSSD`: Tremendous SSD<br><br>The default value should be the same as the `DiskType` field under `SystemDisk`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type. For more information on limits, see [CVM Instance Configuration](https://intl.cloud.tencent.com/document/product/213/2177?from_cn_redirect=1). The default value is 0, indicating that no data disk is purchased. For more information, see the product documentation.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Data disk snapshot ID, such as `snap-l8psqwnt`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Specifies whether the data disk is terminated along with the termination of the associated CVM instance.  Values: <br><li>`TRUE` (only available for pay-as-you-go cloud disks that are billed by hour) and `FALSE`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Data disk encryption. Valid values: <br><li>`TRUE`: Encrypted<br><li>`FALSE`: Not encrypted
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * Cloud disk performance (MB/s). This parameter is used to purchase extra performance for the cloud disk. For details on the feature and limits, see [Enhanced SSD Performance](https://intl.cloud.tencent.com/document/product/362/51896?from_cn_redirect=1#. E5.A2.9E.E5.BC.BA.E5.9E.8B-ssd-.E4.BA.91.E7.A1.AC.E7.9B.98.E9.A2.9D.E5.A4.96 .E6.80.A7.E8.83.BD).
This feature is only available to enhanced SSD (`CLOUD_HSSD`) and tremendous SSD (`CLOUD_TSSD`) disks with a capacity greater than 460 GB.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

/**
 * DeleteScalingPolicy request structure.
 * @class
 */
class DeleteScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the alarm policy to be deleted.
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;

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
         * Instance login password. <br><li>Linux: 8-16 characters. It should contain at least two sets of the following categories: [a-z], [A-Z], [0-9] and [()`~!@#$%^&*-+=|{}[]:;',.?/]. <br><li>Windows: 12-16 characters. It should contain at least three sets of the following categories: [a-z], [A-Z], [0-9] and [()`~!@#$%^&*-+={}[]:;',.?/]. <br><br>If this parameter is not specified, a random password is generated and sent to you via the Message Center.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call `DescribeKeyPairs` to obtain `KeyId`. Key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings of an image. It cannot be specified together with `Password` or `KeyIds.N`. You can specify this parameter as `TRUE` only when you create an instance using a custom image, a shared image, or an imported image. Valid values: <br><li>`TRUE`: Keep the login settings of the image <br><li>`FALSE` (Default): Do not keep the login settings of the image <br>
         * @type {boolean || null}
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
 * CreateAutoScalingGroupFromInstance response structure.
 * @class
 */
class CreateAutoScalingGroupFromInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachInstances request structure.
 * @class
 */
class DetachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of CVM instance IDs
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Instance information
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
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Launch configuration name
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Lifecycle status. Valid values:<br>
<li>`IN_SERVICE`: The instance is running.
<li>`CREATING`: The instance is being created.
<li>`CREATION_FAILED`: The instance fails to be created.
<li>`TERMINATING`: The instance is being terminated.
<li>`TERMINATION_FAILED`: The instance fails to be terminated.
<li>`ATTACHING`: The instance is being bound.
<li>`ATTACH_FAILED`: The instance fails to be bound.
<li>`DETACHING`: The instance is being unbound.
<li>`DETACH_FAILED`: The instance fails to be unbound.
<li>`ATTACHING_LB`: The LB is being bound.
<li>DETACHING_LB: The LB is being unbound.
<li>`MODIFYING_LB`: The LB is being modified.
<li>`STARTING`: The instance is being started up.
<li>`START_FAILED`: The instance fails to be started up.
<li>`STOPPING`: The instance is being shut down.
<li>`STOP_FAILED`: The instance fails to be shut down.
<li>`STOPPED`: The instance is shut down.
<li>`IN_LAUNCHING_HOOK`: The lifecycle hook is being scaled out.
<li>`IN_TERMINATING_HOOK`: The lifecycle hook is being scaled in.
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Health status. Value range: HEALTHY, UNHEALTHY
         * @type {string || null}
         */
        this.HealthStatus = null;

        /**
         * Whether to add scale-in protection
         * @type {boolean || null}
         */
        this.ProtectedFromScaleIn = null;

        /**
         * Availability zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Creation type. Value range: AUTO_CREATION, MANUAL_ATTACHING.
         * @type {string || null}
         */
        this.CreationType = null;

        /**
         * Instance addition time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.VersionNumber = null;

        /**
         * Auto scaling group name
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * Warming up status. Valid values:
<li>`WAITING_ENTER_WARMUP`: The instance is waiting to be warmed up.
<li>`NO_NEED_WARMUP`: Warming up is not required.
<li>`IN_WARMUP`: The instance is being warmed up.
<li>`AFTER_WARMUP`: Warming up is completed.
         * @type {string || null}
         */
        this.WarmupStatus = null;

        /**
         * Placement group ID. Only one is allowed.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreationType = 'CreationType' in params ? params.CreationType : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.VersionNumber = 'VersionNumber' in params ? params.VersionNumber : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.WarmupStatus = 'WarmupStatus' in params ? params.WarmupStatus : null;
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

    }
}

/**
 * DescribeAutoScalingInstances response structure.
 * @class
 */
class DescribeAutoScalingInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance details.
         * @type {Array.<Instance> || null}
         */
        this.AutoScalingInstanceSet = null;

        /**
         * Number of eligible instances.
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

        if (params.AutoScalingInstanceSet) {
            this.AutoScalingInstanceSet = new Array();
            for (let z in params.AutoScalingInstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.AutoScalingInstanceSet[z]);
                this.AutoScalingInstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * This describes the conditions and configurations of the enhanced services of the instance, such as cloud security, cloud monitor, TencentCloud Automation Tools, and other instance agents.
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables the Cloud Security service. If this parameter is not specified, the Cloud Security service will be enabled by default.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Enables the Cloud Monitor service. If this parameter is not specified, the Cloud Monitor service will be enabled by default.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * Deprecated parameter.
         * @type {Array.<RunAutomationServiceEnabled> || null}
         */
        this.AutomationService = null;

        /**
         * Enable TAT service. If this parameter is not specified, the default logic is the same as that of the CVM instance. Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {RunAutomationServiceEnabled || null}
         */
        this.AutomationToolsService = null;

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
            this.AutomationService = new Array();
            for (let z in params.AutomationService) {
                let obj = new RunAutomationServiceEnabled();
                obj.deserialize(params.AutomationService[z]);
                this.AutomationService.push(obj);
            }
        }

        if (params.AutomationToolsService) {
            let obj = new RunAutomationServiceEnabled();
            obj.deserialize(params.AutomationToolsService)
            this.AutomationToolsService = obj;
        }

    }
}

/**
 * Status of TAT service.
 * @class
 */
class RunAutomationServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [TencentCloud Automation Tools](https://intl.cloud.tencent.com/document/product/1340?from_cn_redirect=1). Valid values:<br><li>`TRUE`: Enable<br><li>`FALSE`: Not enable.
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * DeleteLaunchConfiguration response structure.
 * @class
 */
class DeleteLaunchConfigurationResponse extends  AbstractModel {
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
 * This describes the IPv6 address public network accessibility of the instance created by a launch configuration and declares the public network usage billing method of the IPv6 address and the maximum bandwidth.
 * @class
 */
class IPv6InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network billing mode. Valid values: TRAFFIC_POSTPAID_BY_HOUR, BANDWIDTH_PACKAGE. Default value: TRAFFIC_POSTPAID_BY_HOUR. For the current account type, see [Account Type Description](https://intl.cloud.tencent.com/document/product/1199/49090?from_cn_redirect=1#judge).
<br><li> IPv6 supports `TRAFFIC_POSTPAID_BY_HOUR` under a bill-by-IP account.
<br><li> IPv6 supports `BANDWIDTH_PACKAGE` under a bill-by-CVM account.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Outbound bandwidth cap of the public network (in Mbps). <br>It defaults to `0`, which indicates no public network bandwidth is allocated to IPv6. The value range of bandwidth caps varies with the model, availability zone and billing mode. For more information, see [Public Network Bandwidth Cap](https://intl.cloud.tencent.com/document/product/213/12523?from_cn_redirect=1).
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Bandwidth package ID. You can obtain the ID from the `BandwidthPackageId` field in the response of the [DescribeBandwidthPackages](https://intl.cloud.tencent.com/document/api/215/19209?from_cn_redirect=1) API.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * DescribeScheduledActions request structure.
 * @class
 */
class DescribeScheduledActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more scheduled task IDs in the format of asst-am691zxo. The maximum number of instances per request is 100. This parameter does not support specifying both ScheduledActionIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.ScheduledActionIds = null;

        /**
         * Filter.
<li> scheduled-action-id - String - Required: No - (Filter) Filter by scheduled task ID.</li>
<li> scheduled-action-name - String - Required: No - (Filter) Filter by scheduled task name.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.ScheduledActionIds = 'ScheduledActionIds' in params ? params.ScheduledActionIds : null;

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
 * This describes the information on the Cloud Security service
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the [Cloud Security](https://intl.cloud.tencent.com/document/product/296?from_cn_redirect=1) service. Value range: <br><li>TRUE: Cloud Security is enabled <br><li>FALSE: Cloud Security is disabled <br><br>Default value: TRUE.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DeleteScheduledAction request structure.
 * @class
 */
class DeleteScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the scheduled task to be deleted.
         * @type {string || null}
         */
        this.ScheduledActionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;

    }
}

/**
 * DescribeAutoScalingActivities request structure.
 * @class
 */
class DescribeAutoScalingActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more scaling activity IDs in the format of `asa-5l2ejpfo`. The maximum quantity per request is 100. This parameter does not support specifying both `ActivityIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.ActivityIds = null;

        /**
         * Filter.
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
<li> activity-status-code - String - Required: No - (Filter) Filter by scaling activity status . (INIT: initializing | RUNNING: running | SUCCESSFUL: succeeded | PARTIALLY_SUCCESSFUL: partially succeeded | FAILED: failed | CANCELLED: canceled)</li>
<li> activity-type - String - Required: No - (Filter) Filter by scaling activity type. (SCALE_OUT: scale-out | SCALE_IN: scale-in | ATTACH_INSTANCES: adding an instance | REMOVE_INSTANCES: terminating an instance | DETACH_INSTANCES: removing an instance | TERMINATE_INSTANCES_UNEXPECTEDLY: terminating an instance in the CVM console | REPLACE_UNHEALTHY_INSTANCE: replacing an unhealthy instance | UPDATE_LOAD_BALANCERS: updating a load balancer)</li>
<li> activity-id - String - Required: No - (Filter) Filter by scaling activity ID.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `ActivityIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The earliest start time of the scaling activity, which will be ignored if ActivityIds is specified. The value is in `UTC time` in the format of `YYYY-MM-DDThh:mm:ssZ` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The latest end time of the scaling activity, which will be ignored if ActivityIds is specified. The value is in `UTC time` in the format of `YYYY-MM-DDThh:mm:ssZ` according to the `ISO8601` standard.
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
        this.ActivityIds = 'ActivityIds' in params ? params.ActivityIds : null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyDesiredCapacity request structure.
 * @class
 */
class ModifyDesiredCapacityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Desired capacity
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Minimum number of instances. Value range: 0-2000.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum number of instances. Value range: 0-2000.
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * CreateScheduledAction response structure.
 * @class
 */
class CreateScheduledActionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled task ID
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLifecycleHook request structure.
 * @class
 */
class CreateLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Lifecycle hook name, which can contain Chinese characters, letters, numbers, underscores (_), hyphens (-), and periods (.) with a maximum length of 128 bytes.
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * Scenario for the lifecycle hook. Valid values: "INSTANCE_LAUNCHING" and "INSTANCE_TERMINATING"
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * Defined actions when lifecycle hook times out. Valid values: "CONTINUE" and "ABANDON". Default value: "CONTINUE"
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * The maximum length of time (in seconds) that can elapse before the lifecycle hook times out. Value range: 30-7200. Default value: 300
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Additional information of a notification that Auto Scaling sends to targets. This parameter is set when you configure a notification (default value: ""). Up to 1024 characters are allowed.
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * Notification target. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * The scenario where the lifecycle hook is applied. `EXTENSION`: the lifecycle hook will be triggered when AttachInstances, DetachInstances or RemoveInstaces is called. `NORMAL`: the lifecycle hook is not triggered by the above APIs. 
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

        /**
         * Remote command execution object. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
         * @type {LifecycleCommand || null}
         */
        this.LifecycleCommand = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }
        this.LifecycleTransitionType = 'LifecycleTransitionType' in params ? params.LifecycleTransitionType : null;

        if (params.LifecycleCommand) {
            let obj = new LifecycleCommand();
            obj.deserialize(params.LifecycleCommand)
            this.LifecycleCommand = obj;
        }

    }
}

/**
 * This describes the information of a scheduled task.
 * @class
 */
class ScheduledAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled task ID.
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * Scheduled task name.
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * ID of the auto scaling group where the scheduled task is located.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Start time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Repeating mode of the scheduled task.
         * @type {string || null}
         */
        this.Recurrence = null;

        /**
         * End time of the scheduled task. The value is in `Beijing time` (UTC+8) in the format of `YYYY-MM-DDThh:mm:ss+08:00` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Maximum number of instances set by the scheduled task.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Desired number of instances set by the scheduled task.
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Minimum number of instances set by the scheduled task.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Creation time of the scheduled task. The value is in `UTC time` in the format of `YYYY-MM-DDThh:mm:ssZ` according to the `ISO8601` standard.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Specifies how the scheduled action is executed. <br><li>`CRONTAB`: execute repeatedly <br><li>`ONCE`: execute only once
         * @type {string || null}
         */
        this.ScheduledType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ScheduledType = 'ScheduledType' in params ? params.ScheduledType : null;

    }
}

/**
 * ModifyLifecycleHook request structure.
 * @class
 */
class ModifyLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID.
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * Lifecycle hook name.
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * The time when the lifecycle hook is applied. Valid values:
<li> `INSTANCE_LAUNCHING`: After the instance launch
<li> `INSTANCE_TERMINATING`: Before the instance termination
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * Actions after the lifecycle hook times out. Valid values:
<li> `CONTINUE`: Continue the scaling activity after the timeout
<li> `ABANDON`: Terminate the scaling activity after the timeout
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * The maximum length of time (in seconds) that can elapse before the lifecycle hook times out. Value range: 30 - 7,200 seconds.
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Additional information sent by AS to the notification target.
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * The scenario where the lifecycle hook is applied. `EXTENSION`: The lifecycle hook will be triggered when `AttachInstances`, `DetachInstances` or `RemoveInstances` is called. `NORMAL`: The lifecycle hook is not triggered by the above APIs.
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

        /**
         * Information of the notification target.
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * Remote command execution object.
         * @type {LifecycleCommand || null}
         */
        this.LifecycleCommand = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;
        this.LifecycleTransitionType = 'LifecycleTransitionType' in params ? params.LifecycleTransitionType : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }

        if (params.LifecycleCommand) {
            let obj = new LifecycleCommand();
            obj.deserialize(params.LifecycleCommand)
            this.LifecycleCommand = obj;
        }

    }
}

/**
 * CompleteLifecycleAction response structure.
 * @class
 */
class CompleteLifecycleActionResponse extends  AbstractModel {
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
 * ScaleOutInstances response structure.
 * @class
 */
class ScaleOutInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * > Describes key-value pair filters used for conditional queries, such as filtering results by ID, name and state.
> * If there are multiple `Filter` parameters, the relationship among them will be logical `AND`.
> * If there are multiple `Values` for the same `Filter`, the relationship among the `Values` for the same `Filter` will be logical `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of the field.
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
 * DescribeLifecycleHooks request structure.
 * @class
 */
class DescribeLifecycleHooksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more lifecycle hook IDs in the format of `ash-8azjzxcl`. The maximum quantity per request is 100. This parameter does not support specifying both `LifecycleHookIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.LifecycleHookIds = null;

        /**
         * Filters.
<li> `lifecycle-hook-id` - String - Required: No - (Filter) Filter by lifecycle hook ID.</li>
<li> `lifecycle-hook-name` - String - Required: No - (Filter) Filter by lifecycle hook name.</li>
<li> `auto-scaling-group-id` - String - Required: No - (Filter) Filter by scaling group ID.</li>
Up to 10 filters can be included in a request and up to 5 values for each filter. It cannot be specified with `LifecycleHookIds` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.LifecycleHookIds = 'LifecycleHookIds' in params ? params.LifecycleHookIds : null;

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
 * Service settings
 * @class
 */
class ServiceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables unhealthy instance replacement. If this feature is enabled, AS will replace instances that are flagged as unhealthy by Cloud Monitor. If this parameter is not specified, the value will be False by default.
         * @type {boolean || null}
         */
        this.ReplaceMonitorUnhealthy = null;

        /**
         * Valid values: 
CLASSIC_SCALING: this is the typical scaling method, which creates and terminates instances to perform scaling operations. 
WAKE_UP_STOPPED_SCALING: this scaling method first tries to start stopped instances. If the number of instances woken up is insufficient, the system creates new instances for scale-out. For scale-in, instances are terminated as in the typical method. You can use the StopAutoScalingInstances API to stop instances in the scaling group. Scale-out operations triggered by alarms will still create new instances.
Default value: CLASSIC_SCALING
         * @type {string || null}
         */
        this.ScalingMode = null;

        /**
         * Enable unhealthy instance replacement. If this feature is enabled, AS will replace instances that are found unhealthy in the CLB health check. If this parameter is not specified, the default value `False` will be used.
         * @type {boolean || null}
         */
        this.ReplaceLoadBalancerUnhealthy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplaceMonitorUnhealthy = 'ReplaceMonitorUnhealthy' in params ? params.ReplaceMonitorUnhealthy : null;
        this.ScalingMode = 'ScalingMode' in params ? params.ScalingMode : null;
        this.ReplaceLoadBalancerUnhealthy = 'ReplaceLoadBalancerUnhealthy' in params ? params.ReplaceLoadBalancerUnhealthy : null;

    }
}

/**
 * CreateAutoScalingGroup response structure.
 * @class
 */
class CreateAutoScalingGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Load balancer target attribute
 * @class
 */
class TargetAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyNotificationConfiguration response structure.
 * @class
 */
class ModifyNotificationConfigurationResponse extends  AbstractModel {
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
 * This describes the configuration and information related to instance login. For security reasons, sensitive information is not described.
 * @class
 */
class LimitedLoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of key IDs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * DescribeLifecycleHooks response structure.
 * @class
 */
class DescribeLifecycleHooksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of lifecycle hooks
         * @type {Array.<LifecycleHook> || null}
         */
        this.LifecycleHookSet = null;

        /**
         * Total quantity
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

        if (params.LifecycleHookSet) {
            this.LifecycleHookSet = new Array();
            for (let z in params.LifecycleHookSet) {
                let obj = new LifecycleHook();
                obj.deserialize(params.LifecycleHookSet[z]);
                this.LifecycleHookSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScalingPolicy request structure.
 * @class
 */
class CreateScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Alarm trigger policy name.
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * Scaling policy type. Valid values: <br><li>`SIMPLE` (default): A simple policy</li><li>`TARGET_TRACKING`: A target tracking policy</li>.
         * @type {string || null}
         */
        this.ScalingPolicyType = null;

        /**
         * The method to adjust the desired capacity after the alarm is triggered. It’s only available when `ScalingPolicyType` is `Simple`. Valid values: <br><li>`CHANGE_IN_CAPACITY`: Increase or decrease the desired capacity </li><li>`EXACT_CAPACITY`: Adjust to the specified desired capacity </li> <li>`PERCENT_CHANGE_IN_CAPACITY`: Adjust the desired capacity by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * Specifies how to adjust the number of desired capacity when the alarm is triggered. It’s only available when `ScalingPolicyType` is `Simple`. Values: <br><li>`AdjustmentType`=`CHANGE_IN_CAPACITY`: Number of instances to add (positive number) or remove (negative number). </li> <li>`AdjustmentType`=`EXACT_CAPACITY`: Set the desired capacity to the specified number. It must be ≥ 0. </li> <li>`AdjustmentType`=`PERCENT_CHANGE_IN_CAPACITY`: Percentage of instance number. Add instances (positive value) or remove instances (negative value) accordingly.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Cooldown period (in seconds). This parameter is only applicable to a simple policy. Default value: 300.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Alarm monitoring metric. It’s only available when `ScalingPolicyType` is `Simple`.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * Preset monitoring item. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>ASG_AVG_CPU_UTILIZATION: Average CPU utilization</li><li>ASG_AVG_LAN_TRAFFIC_OUT: Average private bandwidth out</li><li>ASG_AVG_LAN_TRAFFIC_IN: Average private bandwidth in</li><li>ASG_AVG_WAN_TRAFFIC_OUT: Average public bandwidth out</li><li>ASG_AVG_WAN_TRAFFIC_IN: Average public bandwidth in</li>
         * @type {string || null}
         */
        this.PredefinedMetricType = null;

        /**
         * Target value. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value ranges: <br><li>`ASG_AVG_CPU_UTILIZATION` (in %): [1, 100)</li><li>`ASG_AVG_LAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_LAN_TRAFFIC_IN` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_OUT` (in Mbps): >0</li><li>`ASG_AVG_WAN_TRAFFIC_IN` (in Mbps): >0</li>
         * @type {number || null}
         */
        this.TargetValue = null;

        /**
         * Instance warm-up period (in seconds). It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Value range: 0-3600. Default value: 300.
         * @type {number || null}
         */
        this.EstimatedInstanceWarmup = null;

        /**
         * Whether to disable scale-in. It’s only available when `ScalingPolicyType` is `TARGET_TRACKING`. Valid values: <br><li>`true`: Do not scale in </li><li>`false` (default): Both scale-out and scale-in can be triggered.</li>
         * @type {boolean || null}
         */
        this.DisableScaleIn = null;

        /**
         * This parameter is diused. Please use [CreateNotificationConfiguration](https://intl.cloud.tencent.com/document/api/377/33185?from_cn_redirect=1) instead.
Notification group ID, which is the set of user group IDs.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.ScalingPolicyType = 'ScalingPolicyType' in params ? params.ScalingPolicyType : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.PredefinedMetricType = 'PredefinedMetricType' in params ? params.PredefinedMetricType : null;
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;
        this.EstimatedInstanceWarmup = 'EstimatedInstanceWarmup' in params ? params.EstimatedInstanceWarmup : null;
        this.DisableScaleIn = 'DisableScaleIn' in params ? params.DisableScaleIn : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

    }
}

/**
 * ScaleInInstances response structure.
 * @class
 */
class ScaleInInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling activity ID
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoScalingAdvices request structure.
 * @class
 */
class DescribeAutoScalingAdvicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of scaling groups to be queried. Upper limit: 100.
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;

    }
}

/**
 * DeleteNotificationConfiguration request structure.
 * @class
 */
class DeleteNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the notification to be deleted.
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;

    }
}

/**
 * DescribeLaunchConfigurations request structure.
 * @class
 */
class DescribeLaunchConfigurationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more launch configuration IDs in the format of `asc-ouy1ax38`. The maximum quantity per request is 100. This parameter does not support specifying both `LaunchConfigurationIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.LaunchConfigurationIds = null;

        /**
         * Filters
<li> `launch-configuration-id` - String - Required: No - Filter by launch configuration ID.</li>
<li> `launch-configuration-name` - String - Required: No - Filter by launch configuration name.</li>
<li> `launch-configuration-name` - String - Required: No - Fuzzy search by launch configuration name.</li>
<li> `tag-key` - String - Required: No - Filter by the tag key.</li>
<li> `tag-value` - String - Required: No - Filter by the tag value.</li>
<li>tag:tag-key - String - Optional - Filter by tag key pair. Use a specific tag key to replace `tag-key`. See Example 3 for the detailed usage.</li>
</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `LaunchConfigurationIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The number of returned results. Default value: `20`. Maximum value: `100`. For more information on `Limit`, see the relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The offset. Default value: `0`. For more information on `Offset`, see the relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.LaunchConfigurationIds = 'LaunchConfigurationIds' in params ? params.LaunchConfigurationIds : null;

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
 * Notification target
 * @class
 */
class NotificationTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target type. Valid values: `CMQ_QUEUE`, `CMQ_TOPIC`, `TDMQ_CMQ_QUEUE` and `TDMQ_CMQ_TOPIC`.
<li> CMQ_QUEUE: Tencent Cloud message queue - queue model.</li>
<li> CMQ_TOPIC: Tencent Cloud message queue - topic model.</li>
<li> TDMQ_CMQ_QUEUE: Tencent Cloud TDMQ message queue - queue model.</li>
<li> TDMQ_CMQ_TOPIC: Tencent Cloud TDMQ message queue - topic model.</li>
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Queue name. This parameter is required when `TargetType` is `CMQ_QUEUE` or `TDMQ_CMQ_QUEUE`.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Topic name. This parameter is required when `TargetType` is `CMQ_TOPIC` or `TDMQ_CMQ_TOPIC`.
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * ModifyLoadBalancerTargetAttributes request structure.
 * @class
 */
class ModifyLoadBalancerTargetAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of application CLBs to modify. Up to 100 CLBs allowed.
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }

    }
}

/**
 * DeleteAutoScalingGroup response structure.
 * @class
 */
class DeleteAutoScalingGroupResponse extends  AbstractModel {
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
 * Result information of the lifecycle hook action
 * @class
 */
class LifecycleActionResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the lifecycle hook
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * ID of the instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Execution task ID. You can query the result by using the [DescribeInvocations](https://intl.cloud.tencent.com/document/api/1340/52679?from_cn_redirect=1) API of TAT. 
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Result of command invocation,
<li>`SUCCESSFUL`: Successful command invocation. It does mean that the task is successfully. You can query the task result with the `InvocationId.</li>
<li>`FAILED`: Failed to invoke the command</li>
<li>`NONE`</li>
         * @type {string || null}
         */
        this.InvokeCommandResult = null;

        /**
         * Notification result, which indicates whether it is successful to notify CMQ/TDMQ.<br>
<li>SUCCESSFUL: It is successful to notify CMQ/TDMQ.</li>
<li>FAILED: It is failed to notify CMQ/TDMQ.</li>
<li>NONE</li>
         * @type {string || null}
         */
        this.NotificationResult = null;

        /**
         * Result of the lifecyle hook action. Values: CONTINUE, ABANDON
         * @type {string || null}
         */
        this.LifecycleActionResult = null;

        /**
         * Reason of the result <br>
<li>`HEARTBEAT_TIMEOUT`: Heartbeat timed out. The setting of `DefaultResult` is used.</li>
<li>`NOTIFICATION_FAILURE`: Failed to send the notification. The setting of `DefaultResult` is used.</li>
<li>`CALL_INTERFACE`: Calls the `CompleteLifecycleAction` to set the result</li>
<li>ANOTHER_ACTION_ABANDON: It has been set to `ABANDON` by another operation.</li>
<li>COMMAND_CALL_FAILURE: Failed to call the command. The DefaultResult is applied.</li>
<li>COMMAND_EXEC_FINISH: Command completed</li>
<li>COMMAND_CALL_FAILURE: Failed to execute the command. The DefaultResult is applied.</li>
<li>COMMAND_EXEC_RESULT_CHECK_FAILURE: Failed to check the command result. The DefaultResult is applied.</li>
         * @type {string || null}
         */
        this.ResultReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.InvokeCommandResult = 'InvokeCommandResult' in params ? params.InvokeCommandResult : null;
        this.NotificationResult = 'NotificationResult' in params ? params.NotificationResult : null;
        this.LifecycleActionResult = 'LifecycleActionResult' in params ? params.LifecycleActionResult : null;
        this.ResultReason = 'ResultReason' in params ? params.ResultReason : null;

    }
}

/**
 * Brief information of a scaling group.
 * @class
 */
class AutoScalingGroupAbstract extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Auto scaling group name.
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;

    }
}

/**
 * EnableAutoScalingGroup request structure.
 * @class
 */
class EnableAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

    }
}

/**
 * Alarming metric of AS
 * @class
 */
class MetricAlarm extends  AbstractModel {
    constructor(){
        super();

        /**
         * Comparison operator. Value range: <br><li>GREATER_THAN: greater than </li><li>GREATER_THAN_OR_EQUAL_TO: greater than or equal to </li><li>LESS_THAN: less than </li><li> LESS_THAN_OR_EQUAL_TO: less than or equal to </li><li> EQUAL_TO: equal to </li> <li>NOT_EQUAL_TO: not equal to </li>
         * @type {string || null}
         */
        this.ComparisonOperator = null;

        /**
         * Metric name. Value range: <br><li>CPU_UTILIZATION: CPU utilization </li><li>MEM_UTILIZATION: memory utilization </li><li>LAN_TRAFFIC_OUT: private network outbound bandwidth </li><li>LAN_TRAFFIC_IN: private network inbound bandwidth </li><li>WAN_TRAFFIC_OUT: public network outbound bandwidth </li><li>WAN_TRAFFIC_IN: public network inbound bandwidth </li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Alarming threshold: <br><li>CPU_UTILIZATION: [1, 100] in % </li><li>MEM_UTILIZATION: [1, 100] in % </li><li>LAN_TRAFFIC_OUT: >0 in Mbps </li><li>LAN_TRAFFIC_IN: >0 in Mbps </li><li>WAN_TRAFFIC_OUT: >0 in Mbps </li><li>WAN_TRAFFIC_IN: >0 in Mbps </li>
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Time period in seconds. Enumerated values: 60, 300.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of repetitions. Value range: [1, 10]
         * @type {number || null}
         */
        this.ContinuousTime = null;

        /**
         * Statistics type. Value range: <br><li>AVERAGE: average </li><li>MAXIMUM: maximum <li>MINIMUM: minimum </li><br> Default value: AVERAGE
         * @type {string || null}
         */
        this.Statistic = null;

        /**
         * Exact alarming threshold. This parameter is only used in API outputs. Values: <br><li>`CPU_UTILIZATION` (in %): (0, 100]</li><li>`MEM_UTILIZATION` (in %): (0, 100]</li><li>`LAN_TRAFFIC_OUT` (in Mbps): > 0</li><li>`LAN_TRAFFIC_IN` (in Mbps): > 0</li><li>`WAN_TRAFFIC_OUT` (in Mbps): > 0</li><li>`WAN_TRAFFIC_IN` (in Mbps): > 0</li>
         * @type {number || null}
         */
        this.PreciseThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ContinuousTime = 'ContinuousTime' in params ? params.ContinuousTime : null;
        this.Statistic = 'Statistic' in params ? params.Statistic : null;
        this.PreciseThreshold = 'PreciseThreshold' in params ? params.PreciseThreshold : null;

    }
}

/**
 * DescribeNotificationConfigurations request structure.
 * @class
 */
class DescribeNotificationConfigurationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by one or more notification IDs in the format of asn-2sestqbr. The maximum number of instances per request is 100. This parameter does not support specifying both `AutoScalingNotificationIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.AutoScalingNotificationIds = null;

        /**
         * Filter.
<li> auto-scaling-notification-id - String - Required: No - (Filter) Filter by notification ID.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `AutoScalingNotificationIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.AutoScalingNotificationIds = 'AutoScalingNotificationIds' in params ? params.AutoScalingNotificationIds : null;

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
 * ScaleInInstances request structure.
 * @class
 */
class ScaleInInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Number of instances to be reduced
         * @type {number || null}
         */
        this.ScaleInNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScaleInNumber = 'ScaleInNumber' in params ? params.ScaleInNumber : null;

    }
}

/**
 * Lifecycle hook
 * @class
 */
class LifecycleHook extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle hook ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * Lifecycle hook name
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Default result of the lifecycle hook
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * Wait timeout period of the lifecycle hook
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Applicable scenario of the lifecycle hook
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * Additional information for the notification target
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Notification target
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * Applicable scenario of the lifecycle hook
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

        /**
         * Remote command execution object.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LifecycleCommand || null}
         */
        this.LifecycleCommand = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }
        this.LifecycleTransitionType = 'LifecycleTransitionType' in params ? params.LifecycleTransitionType : null;

        if (params.LifecycleCommand) {
            let obj = new LifecycleCommand();
            obj.deserialize(params.LifecycleCommand)
            this.LifecycleCommand = obj;
        }

    }
}

/**
 * Application load balancer
 * @class
 */
class ForwardLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Load balancer ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Application load balancer listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * List of target rule attributes
         * @type {Array.<TargetAttribute> || null}
         */
        this.TargetAttributes = null;

        /**
         * ID of a forwarding rule. This parameter is required for layer-7 listeners.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * The region of CLB instance. It defaults to the region of AS service and is in the format of the common parameter `Region`, such as `ap-guangzhou`.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.TargetAttributes) {
            this.TargetAttributes = new Array();
            for (let z in params.TargetAttributes) {
                let obj = new TargetAttribute();
                obj.deserialize(params.TargetAttributes[z]);
                this.TargetAttributes.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * ClearLaunchConfigurationAttributes request structure.
 * @class
 */
class ClearLaunchConfigurationAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Launch configuration ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * Whether to clear data disk information. This parameter is optional and the default value is `false`.
Setting it to `true` will clear data disks, which means that CVM newly created on this launch configuration will have no data disk.
         * @type {boolean || null}
         */
        this.ClearDataDisks = null;

        /**
         * Whether to clear the CVM hostname settings. This parameter is optional and the default value is `false`.
Setting it to `true` will clear the hostname settings, which means that CVM newly created on this launch configuration will have no hostname.
         * @type {boolean || null}
         */
        this.ClearHostNameSettings = null;

        /**
         * Whether to clear the CVM instance name settings. This parameter is optional and the default value is `false`.
Setting it to `true` will clear the instance name settings, which means that CVM newly created on this launch configuration will be named in the “as-{{AutoScalingGroupName}} format.
         * @type {boolean || null}
         */
        this.ClearInstanceNameSettings = null;

        /**
         * Whether to clear placement group information. This parameter is optional. Default value: `false`.
`True` means clearing placement group information. After that, no placement groups are specified for CVMs created based on the information.
         * @type {boolean || null}
         */
        this.ClearDisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.ClearDataDisks = 'ClearDataDisks' in params ? params.ClearDataDisks : null;
        this.ClearHostNameSettings = 'ClearHostNameSettings' in params ? params.ClearHostNameSettings : null;
        this.ClearInstanceNameSettings = 'ClearInstanceNameSettings' in params ? params.ClearInstanceNameSettings : null;
        this.ClearDisasterRecoverGroupIds = 'ClearDisasterRecoverGroupIds' in params ? params.ClearDisasterRecoverGroupIds : null;

    }
}

/**
 * Application CLB IDs
 * @class
 */
class ForwardLoadBalancerIdentification extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CLB
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Application CLB listener ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * ID of a forwarding rule. This parameter is required for layer-7 listeners.
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * Suggestions for scaling group configurations.
 * @class
 */
class AutoScalingAdvice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Scaling group warning level. Valid values:<br>
<li>NORMAL: Normal<br>
<li>WARNING: Warning<br>
<li>CRITICAL: Serious warning<br>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * A collection of suggestions for scaling group configurations.
         * @type {Array.<Advice> || null}
         */
        this.Advices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.Level = 'Level' in params ? params.Level : null;

        if (params.Advices) {
            this.Advices = new Array();
            for (let z in params.Advices) {
                let obj = new Advice();
                obj.deserialize(params.Advices[z]);
                this.Advices.push(obj);
            }
        }

    }
}

/**
 * StartAutoScalingInstances request structure.
 * @class
 */
class StartAutoScalingInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * The list of the CVM instances you want to start up.
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * AttachInstances request structure.
 * @class
 */
class AttachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of CVM instance IDs
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * AttachLoadBalancers request structure.
 * @class
 */
class AttachLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling group ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * List of classic CLB IDs. Up to 20 classic CLBs can be bound to a security group. `LoadBalancerIds` and `ForwardLoadBalancers` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * List of application CLBs. Up to 100 application CLBs can be bound to a scaling group. `LoadBalancerIds` and `ForwardLoadBalancers` cannot be specified at the same time.
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }

    }
}

/**
 * Specifies how to assign pay-as-you-go instances and spot instances in a mixed instance mode.
 * @class
 */
class SpotMixedAllocationPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The minimum number of the scaling group’s capacity that must be fulfilled by pay-as-you-go instances. It defaults to 0 if not specified. Its value cannot exceed the max capacity of the scaling group.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.BaseCapacity = null;

        /**
         * Controls the percentage of pay-as-you-go instances for the additional capacity beyond `BaseCapacity`. Valid range: 0-100. The value 0 indicates that only spot instances are provisioned, while the value 100 indicates that only pay-as-you-go instances are provisioned. It defaults to 70 if not specified. The number of pay-as-you-go instances calculated on the percentage should be rounded up.
For example, if the desired capacity is 3, the `BaseCapacity` is set to 1, and the `OnDemandPercentageAboveBaseCapacity` is set to 1, the scaling group will have 2 pay-as-you-go instance (one comes from the base capacity, and the other comes from the rounded up value of the proportion), and 1 spot instance.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.OnDemandPercentageAboveBaseCapacity = null;

        /**
         * Specifies how to assign spot instances in a mixed instance mode. Valid values: `COST_OPTIMIZED` and `CAPACITY_OPTIMIZED`; default value: `COST_OPTIMIZED`.
<br><li>`COST_OPTIMIZED`: the lowest cost policy. For each model in the launch configuration, AS tries to purchase it based on the lowest unit price per core in each availability zone. If the purchase failed, try the second-lowest unit price.
<br><li>`CAPACITY_OPTIMIZED`: the optimal capacity policy. For each model in the launch configuration, AS tries to purchase it based on the largest stock in each availability zone, minimizing the automatic repossession probability of spot instances.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SpotAllocationStrategy = null;

        /**
         * Whether to replace with pay-as-you go instances. Valid values:
<br><li>`TRUE`: yes. After the purchase of spot instances failed due to insufficient stock and other reasons, purchase pay-as-you-go instances.
<br><li>`FALSE`: no. The scaling group only tries the configured model of spot instances when it needs to add spot instances.

Default value: `TRUE`.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.CompensateWithBaseInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaseCapacity = 'BaseCapacity' in params ? params.BaseCapacity : null;
        this.OnDemandPercentageAboveBaseCapacity = 'OnDemandPercentageAboveBaseCapacity' in params ? params.OnDemandPercentageAboveBaseCapacity : null;
        this.SpotAllocationStrategy = 'SpotAllocationStrategy' in params ? params.SpotAllocationStrategy : null;
        this.CompensateWithBaseInstance = 'CompensateWithBaseInstance' in params ? params.CompensateWithBaseInstance : null;

    }
}

/**
 * DescribeScalingPolicies response structure.
 * @class
 */
class DescribeScalingPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of AS alarm trigger policy details.
         * @type {Array.<ScalingPolicy> || null}
         */
        this.ScalingPolicySet = null;

        /**
         * Number of eligible notifications.
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

        if (params.ScalingPolicySet) {
            this.ScalingPolicySet = new Array();
            for (let z in params.ScalingPolicySet) {
                let obj = new ScalingPolicy();
                obj.deserialize(params.ScalingPolicySet[z]);
                this.ScalingPolicySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on eligible scaling activities.
 * @class
 */
class Activity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * Scaling activity ID.
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * Type of the scaling activity. Valid values:<br>
<li>`SCALE_OUT`: Scale out. <li>`SCALE_IN`: Scale in. <li>`ATTACH_INSTANCES`: Add instances. <li>`REMOVE_INSTANCES`: Terminate instances. <li>`DETACH_INSTANCES`: Remove instances. <li>`TERMINATE_INSTANCES_UNEXPECTEDLY`: Terminate instances in the CVM console. <li>`REPLACE_UNHEALTHY_INSTANCE`: Replace an unhealthy instance.
<li>`START_INSTANCES`: Starts up instances.
<li>`STOP_INSTANCES`: Shut down instances.
<li>`INVOKE_COMMAND`: Execute commands
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * Scaling activity status. Value range:<br>
<li>INIT: initializing
<li>RUNNING: running
<li>SUCCESSFUL: succeeded
<li>PARTIALLY_SUCCESSFUL: partially succeeded
<li>FAILED: failed
<li>CANCELLED: canceled
         * @type {string || null}
         */
        this.StatusCode = null;

        /**
         * Description of the scaling activity status.
         * @type {string || null}
         */
        this.StatusMessage = null;

        /**
         * Cause of the scaling activity.
         * @type {string || null}
         */
        this.Cause = null;

        /**
         * Description of the scaling activity.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Start time of the scaling activity.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the scaling activity.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Creation time of the scaling activity.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * This parameter has been deprecated.
         * @type {Array.<ActivtyRelatedInstance> || null}
         */
        this.ActivityRelatedInstanceSet = null;

        /**
         * Brief description of the scaling activity status.
         * @type {string || null}
         */
        this.StatusMessageSimplified = null;

        /**
         * Result of the lifecycle hook action in the scaling activity
         * @type {Array.<LifecycleActionResultInfo> || null}
         */
        this.LifecycleActionResultSet = null;

        /**
         * Detailed description of scaling activity status
         * @type {Array.<DetailedStatusMessage> || null}
         */
        this.DetailedStatusMessageSet = null;

        /**
         * Result of the command execution
         * @type {Array.<InvocationResult> || null}
         */
        this.InvocationResultSet = null;

        /**
         * Information set of the instances related to the scaling activity.
         * @type {Array.<RelatedInstance> || null}
         */
        this.RelatedInstanceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;
        this.Cause = 'Cause' in params ? params.Cause : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.ActivityRelatedInstanceSet) {
            this.ActivityRelatedInstanceSet = new Array();
            for (let z in params.ActivityRelatedInstanceSet) {
                let obj = new ActivtyRelatedInstance();
                obj.deserialize(params.ActivityRelatedInstanceSet[z]);
                this.ActivityRelatedInstanceSet.push(obj);
            }
        }
        this.StatusMessageSimplified = 'StatusMessageSimplified' in params ? params.StatusMessageSimplified : null;

        if (params.LifecycleActionResultSet) {
            this.LifecycleActionResultSet = new Array();
            for (let z in params.LifecycleActionResultSet) {
                let obj = new LifecycleActionResultInfo();
                obj.deserialize(params.LifecycleActionResultSet[z]);
                this.LifecycleActionResultSet.push(obj);
            }
        }

        if (params.DetailedStatusMessageSet) {
            this.DetailedStatusMessageSet = new Array();
            for (let z in params.DetailedStatusMessageSet) {
                let obj = new DetailedStatusMessage();
                obj.deserialize(params.DetailedStatusMessageSet[z]);
                this.DetailedStatusMessageSet.push(obj);
            }
        }

        if (params.InvocationResultSet) {
            this.InvocationResultSet = new Array();
            for (let z in params.InvocationResultSet) {
                let obj = new InvocationResult();
                obj.deserialize(params.InvocationResultSet[z]);
                this.InvocationResultSet.push(obj);
            }
        }

        if (params.RelatedInstanceSet) {
            this.RelatedInstanceSet = new Array();
            for (let z in params.RelatedInstanceSet) {
                let obj = new RelatedInstance();
                obj.deserialize(params.RelatedInstanceSet[z]);
                this.RelatedInstanceSet.push(obj);
            }
        }

    }
}

/**
 * ModifyDesiredCapacity response structure.
 * @class
 */
class ModifyDesiredCapacityResponse extends  AbstractModel {
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
 * StopAutoScalingInstances request structure.
 * @class
 */
class StopAutoScalingInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling group ID.
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * The list of the CVM instances you want to shut down.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether the shutdown instances will be charged. Valid values:  
KEEP_CHARGING: keep charging after shutdown.  
STOP_CHARGING: stop charging after shutdown.
Default value: KEEP_CHARGING.
         * @type {string || null}
         */
        this.StoppedMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.StoppedMode = 'StoppedMode' in params ? params.StoppedMode : null;

    }
}

/**
 * This describes the information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the [Cloud Monitor](https://intl.cloud.tencent.com/document/product/248?from_cn_redirect=1) service. Value range: <br><li>TRUE: Cloud Monitor is enabled <br><li>FALSE: Cloud Monitor is disabled <br><br>Default value: TRUE. |
Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyNotificationConfiguration request structure.
 * @class
 */
class ModifyNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the notification to be modified.
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

        /**
         * Notification type, i.e., the set of types of notifications to be subscribed to. Value range:
<li>SCALE_OUT_SUCCESSFUL: scale-out succeeded</li>
<li>SCALE_OUT_FAILED: scale-out failed</li>
<li>SCALE_IN_SUCCESSFUL: scale-in succeeded</li>
<li>SCALE_IN_FAILED: scale-in failed</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL: unhealthy instance replacement succeeded</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED: unhealthy instance replacement failed</li>
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://intl.cloud.tencent.com/document/product/598/34589?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

        /**
         * CMQ or TDMQ CMQ queue name.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * CMQ or TDMQ CMQ toipc name.
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * Information of the instances related to the current scaling activity.
 * @class
 */
class ActivtyRelatedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Status of the instance in the scaling activity. Value range:
<li>INIT: initializing
<li>RUNNING: running
<li>SUCCESSFUL: succeeded
<li>FAILED: failed
         * @type {string || null}
         */
        this.InstanceStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

    }
}

/**
 * CreateAutoScalingGroupFromInstance request structure.
 * @class
 */
class CreateAutoScalingGroupFromInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scaling group name. It must be unique under your account. The name can only contain letters, numbers, underscore, hyphen “-” and periods. It cannot exceed 55 bytes.
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The minimum number of instances. Value range: 0-2000.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * The maximum number of instances. Value range: 0-2000.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * The desired capacity. Its value must be greater than the minimum and smaller than the maximum.
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * Whether to inherit the instance tag. Default value: False
         * @type {boolean || null}
         */
        this.InheritInstanceTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.InheritInstanceTag = 'InheritInstanceTag' in params ? params.InheritInstanceTag : null;

    }
}

/**
 * This describes the internet accessibility of the instance created by a launch configuration and declares the internet usage billing method of the instance and the maximum bandwidth
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network billing method. Value range: <br><li>BANDWIDTH_PREPAID: Prepaid by bandwidth <br><li>TRAFFIC_POSTPAID_BY_HOUR: Postpaid by traffic on a per hour basis <br><li>BANDWIDTH_POSTPAID_BY_HOUR: Postpaid by bandwidth on a per hour basis <br><li>BANDWIDTH_PACKAGE: BWP user <br>Default value: TRAFFIC_POSTPAID_BY_HOUR.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * The maximum outbound bandwidth in Mbps of the public network. The default value is 0 Mbps. The upper limit of bandwidth varies by model. For more information, see [Purchase Network Bandwidth](https://intl.cloud.tencent.com/document/product/213/509?from_cn_redirect=1).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Whether to assign a public IP. Value range: <br><li>TRUE: Assign a public IP <br><li>FALSE: Do not assign a public IP <br><br>If the public network bandwidth is greater than 0 Mbps, you are free to choose whether to enable the public IP (which is enabled by default). If the public network bandwidth is 0 Mbps, no public IP will be allowed to be assigned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * Bandwidth package ID. You can obtain the ID from the `BandwidthPackageId` field in the response of the [DescribeBandwidthPackages](https://intl.cloud.tencent.com/document/api/215/19209?from_cn_redirect=1) API.
Note: this field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

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
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * EnableAutoScalingGroup response structure.
 * @class
 */
class EnableAutoScalingGroupResponse extends  AbstractModel {
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
 * UpgradeLaunchConfiguration response structure.
 * @class
 */
class UpgradeLaunchConfigurationResponse extends  AbstractModel {
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
 * This API is used to describe the billing mode of an instance.
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchased usage period of an instance in months. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-renewal flag. Value range: <br><li>NOTIFY_AND_AUTO_RENEW: Notify expiry and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: Notify expiry but not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: Neither notify expiry nor renew automatically <br><br>Default value: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient.
         * @type {string || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DeleteLifecycleHook response structure.
 * @class
 */
class DeleteLifecycleHookResponse extends  AbstractModel {
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
 * ExecuteScalingPolicy request structure.
 * @class
 */
class ExecuteScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto-scaling policy ID. This parameter is not available to a target tracking policy.
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * Whether to check if the auto scaling group is in the cooldown period. Default value: false
         * @type {boolean || null}
         */
        this.HonorCooldown = null;

        /**
         * Source that triggers the scaling policy. Valid values: API and CLOUD_MONITOR. Default value: API. The value `CLOUD_MONITOR` is specific to the Cloud Monitor service.
         * @type {string || null}
         */
        this.TriggerSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.HonorCooldown = 'HonorCooldown' in params ? params.HonorCooldown : null;
        this.TriggerSource = 'TriggerSource' in params ? params.TriggerSource : null;

    }
}

module.exports = {
    DisableAutoScalingGroupResponse: DisableAutoScalingGroupResponse,
    ModifyLaunchConfigurationAttributesRequest: ModifyLaunchConfigurationAttributesRequest,
    DisableAutoScalingGroupRequest: DisableAutoScalingGroupRequest,
    ModifyAutoScalingGroupRequest: ModifyAutoScalingGroupRequest,
    ScaleOutInstancesRequest: ScaleOutInstancesRequest,
    AutoScalingNotification: AutoScalingNotification,
    ModifyScheduledActionRequest: ModifyScheduledActionRequest,
    DescribeAutoScalingGroupsRequest: DescribeAutoScalingGroupsRequest,
    LaunchConfiguration: LaunchConfiguration,
    DescribeAccountLimitsResponse: DescribeAccountLimitsResponse,
    CreateLaunchConfigurationResponse: CreateLaunchConfigurationResponse,
    RelatedInstance: RelatedInstance,
    Advice: Advice,
    CreateLifecycleHookResponse: CreateLifecycleHookResponse,
    ClearLaunchConfigurationAttributesResponse: ClearLaunchConfigurationAttributesResponse,
    DescribeAutoScalingGroupsResponse: DescribeAutoScalingGroupsResponse,
    CreateScheduledActionRequest: CreateScheduledActionRequest,
    SystemDisk: SystemDisk,
    SpotMarketOptions: SpotMarketOptions,
    StopAutoScalingInstancesResponse: StopAutoScalingInstancesResponse,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    InstanceNameSettings: InstanceNameSettings,
    DetailedStatusMessage: DetailedStatusMessage,
    ModifyScheduledActionResponse: ModifyScheduledActionResponse,
    AttachLoadBalancersResponse: AttachLoadBalancersResponse,
    ExecuteScalingPolicyResponse: ExecuteScalingPolicyResponse,
    DeleteAutoScalingGroupRequest: DeleteAutoScalingGroupRequest,
    SetInstancesProtectionResponse: SetInstancesProtectionResponse,
    StartAutoScalingInstancesResponse: StartAutoScalingInstancesResponse,
    CompleteLifecycleActionRequest: CompleteLifecycleActionRequest,
    CreateScalingPolicyResponse: CreateScalingPolicyResponse,
    CreateNotificationConfigurationResponse: CreateNotificationConfigurationResponse,
    DescribeLaunchConfigurationsResponse: DescribeLaunchConfigurationsResponse,
    RemoveInstancesRequest: RemoveInstancesRequest,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    Tag: Tag,
    DetachLoadBalancersRequest: DetachLoadBalancersRequest,
    DescribeAutoScalingInstancesRequest: DescribeAutoScalingInstancesRequest,
    ModifyLoadBalancersRequest: ModifyLoadBalancersRequest,
    RemoveInstancesResponse: RemoveInstancesResponse,
    ModifyScalingPolicyResponse: ModifyScalingPolicyResponse,
    SetInstancesProtectionRequest: SetInstancesProtectionRequest,
    DeleteNotificationConfigurationResponse: DeleteNotificationConfigurationResponse,
    DetachInstancesResponse: DetachInstancesResponse,
    ModifyLaunchConfigurationAttributesResponse: ModifyLaunchConfigurationAttributesResponse,
    CreateLaunchConfigurationRequest: CreateLaunchConfigurationRequest,
    AutoScalingGroup: AutoScalingGroup,
    AttachInstancesResponse: AttachInstancesResponse,
    DescribeAutoScalingGroupLastActivitiesResponse: DescribeAutoScalingGroupLastActivitiesResponse,
    DescribeAccountLimitsRequest: DescribeAccountLimitsRequest,
    UpgradeLifecycleHookRequest: UpgradeLifecycleHookRequest,
    DetachLoadBalancersResponse: DetachLoadBalancersResponse,
    ScalingPolicy: ScalingPolicy,
    DescribeAutoScalingGroupLastActivitiesRequest: DescribeAutoScalingGroupLastActivitiesRequest,
    HostNameSettings: HostNameSettings,
    ModifyLoadBalancersResponse: ModifyLoadBalancersResponse,
    CreateNotificationConfigurationRequest: CreateNotificationConfigurationRequest,
    DescribeScheduledActionsResponse: DescribeScheduledActionsResponse,
    DeleteLifecycleHookRequest: DeleteLifecycleHookRequest,
    ModifyLoadBalancerTargetAttributesResponse: ModifyLoadBalancerTargetAttributesResponse,
    ModifyAutoScalingGroupResponse: ModifyAutoScalingGroupResponse,
    DeleteLaunchConfigurationRequest: DeleteLaunchConfigurationRequest,
    InvocationResult: InvocationResult,
    ModifyScalingPolicyRequest: ModifyScalingPolicyRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    UpgradeLifecycleHookResponse: UpgradeLifecycleHookResponse,
    InstanceTag: InstanceTag,
    ModifyLifecycleHookResponse: ModifyLifecycleHookResponse,
    LifecycleCommand: LifecycleCommand,
    DescribeAutoScalingAdvicesResponse: DescribeAutoScalingAdvicesResponse,
    CreateAutoScalingGroupRequest: CreateAutoScalingGroupRequest,
    DeleteScheduledActionResponse: DeleteScheduledActionResponse,
    UpgradeLaunchConfigurationRequest: UpgradeLaunchConfigurationRequest,
    DescribeAutoScalingActivitiesResponse: DescribeAutoScalingActivitiesResponse,
    DescribeNotificationConfigurationsResponse: DescribeNotificationConfigurationsResponse,
    DataDisk: DataDisk,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    LoginSettings: LoginSettings,
    CreateAutoScalingGroupFromInstanceResponse: CreateAutoScalingGroupFromInstanceResponse,
    DetachInstancesRequest: DetachInstancesRequest,
    Instance: Instance,
    DescribeAutoScalingInstancesResponse: DescribeAutoScalingInstancesResponse,
    EnhancedService: EnhancedService,
    RunAutomationServiceEnabled: RunAutomationServiceEnabled,
    DeleteLaunchConfigurationResponse: DeleteLaunchConfigurationResponse,
    IPv6InternetAccessible: IPv6InternetAccessible,
    DescribeScheduledActionsRequest: DescribeScheduledActionsRequest,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteScheduledActionRequest: DeleteScheduledActionRequest,
    DescribeAutoScalingActivitiesRequest: DescribeAutoScalingActivitiesRequest,
    ModifyDesiredCapacityRequest: ModifyDesiredCapacityRequest,
    CreateScheduledActionResponse: CreateScheduledActionResponse,
    CreateLifecycleHookRequest: CreateLifecycleHookRequest,
    ScheduledAction: ScheduledAction,
    ModifyLifecycleHookRequest: ModifyLifecycleHookRequest,
    CompleteLifecycleActionResponse: CompleteLifecycleActionResponse,
    ScaleOutInstancesResponse: ScaleOutInstancesResponse,
    Filter: Filter,
    DescribeLifecycleHooksRequest: DescribeLifecycleHooksRequest,
    ServiceSettings: ServiceSettings,
    CreateAutoScalingGroupResponse: CreateAutoScalingGroupResponse,
    TargetAttribute: TargetAttribute,
    ModifyNotificationConfigurationResponse: ModifyNotificationConfigurationResponse,
    LimitedLoginSettings: LimitedLoginSettings,
    DescribeLifecycleHooksResponse: DescribeLifecycleHooksResponse,
    CreateScalingPolicyRequest: CreateScalingPolicyRequest,
    ScaleInInstancesResponse: ScaleInInstancesResponse,
    DescribeAutoScalingAdvicesRequest: DescribeAutoScalingAdvicesRequest,
    DeleteNotificationConfigurationRequest: DeleteNotificationConfigurationRequest,
    DescribeLaunchConfigurationsRequest: DescribeLaunchConfigurationsRequest,
    NotificationTarget: NotificationTarget,
    ModifyLoadBalancerTargetAttributesRequest: ModifyLoadBalancerTargetAttributesRequest,
    DeleteAutoScalingGroupResponse: DeleteAutoScalingGroupResponse,
    LifecycleActionResultInfo: LifecycleActionResultInfo,
    AutoScalingGroupAbstract: AutoScalingGroupAbstract,
    EnableAutoScalingGroupRequest: EnableAutoScalingGroupRequest,
    MetricAlarm: MetricAlarm,
    DescribeNotificationConfigurationsRequest: DescribeNotificationConfigurationsRequest,
    ScaleInInstancesRequest: ScaleInInstancesRequest,
    LifecycleHook: LifecycleHook,
    ForwardLoadBalancer: ForwardLoadBalancer,
    ClearLaunchConfigurationAttributesRequest: ClearLaunchConfigurationAttributesRequest,
    ForwardLoadBalancerIdentification: ForwardLoadBalancerIdentification,
    AutoScalingAdvice: AutoScalingAdvice,
    StartAutoScalingInstancesRequest: StartAutoScalingInstancesRequest,
    AttachInstancesRequest: AttachInstancesRequest,
    AttachLoadBalancersRequest: AttachLoadBalancersRequest,
    SpotMixedAllocationPolicy: SpotMixedAllocationPolicy,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    Activity: Activity,
    ModifyDesiredCapacityResponse: ModifyDesiredCapacityResponse,
    StopAutoScalingInstancesRequest: StopAutoScalingInstancesRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ModifyNotificationConfigurationRequest: ModifyNotificationConfigurationRequest,
    ActivtyRelatedInstance: ActivtyRelatedInstance,
    CreateAutoScalingGroupFromInstanceRequest: CreateAutoScalingGroupFromInstanceRequest,
    InternetAccessible: InternetAccessible,
    EnableAutoScalingGroupResponse: EnableAutoScalingGroupResponse,
    UpgradeLaunchConfigurationResponse: UpgradeLaunchConfigurationResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DeleteLifecycleHookResponse: DeleteLifecycleHookResponse,
    ExecuteScalingPolicyRequest: ExecuteScalingPolicyRequest,

}
