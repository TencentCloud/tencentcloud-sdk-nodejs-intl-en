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
         * Valid [image](https://cloud.tencent.com/document/product/213/4940) ID in the format of `img-8toqc6s3`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the image IDs; for `marketplace images`, query the image IDs through [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>This value can be obtained from the `ImageId` field in the return value of the [DescribeImages API](https://cloud.tencent.com/document/api/213/15715).</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of instance types. Different instance models specify different resource specifications. Up to 5 instance models can be supported.
The launch configuration uses InstanceType to indicate one single instance type and InstanceTypes to indicate multiple instance types. After InstanceTypes is successfully specified for the launch configuration, the original InstanceType will be automatically invalidated.
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
         * Base64-encoded custom data of up to 16 KB. If you want to clear UserData, specify it as an empty string
         * @type {string || null}
         */
        this.UserData = null;

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
         * Retry policy. Value range: IMMEDIATE_RETRY, INCREMENTAL_INTERVALS, and NO_RETRY. Default value: IMMEDIATE_RETRY.
<br><li> IMMEDIATE_RETRY: Retrying immediately in a short period of time and stopping after a number of consecutive failures (5).
<br><li> INCREMENTAL_INTERVALS: Retrying at incremental intervals, i.e., as the number of consecutive failures increases, the retry interval gradually increases, ranging from one second to one day.
<br><li> NO_RETRY: No retry until a user call or alarm message is received again.
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
         * 
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * 
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

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
         * Filter.
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
<li> auto-scaling-group-name - String - Required: No - (Filter) Filter by auto scaling group name.</li>
<li> launch-configuration-id - String - Required: No - (Filter) Filter by launch configuration ID.</li>
<li> tag-key - String - Required: No - (Filter) Filter by tag key.</li>
<li> tag-value - String - Required: No - (Filter) Filter by tag value.</li>
<li> tag:tag-key - String - Required: No - (Filter) Filter by tag key-value pair. The tag-key should be replaced with a specified tag key. For detailed usage, see sample 2</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `AutoScalingGroupIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
 * CreatePaiInstance response structure.
 * @class
 */
class CreatePaiInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter is returned when an instance is created via this API, representing one or more instance `IDs`. The return of the instance `ID` list does not mean that the instance is created successfully. You can find out whether the instance is created by checking the status of the instance `ID` in the InstancesSet returned by the [DescribeInstances API](https://cloud.tencent.com/document/api/213/15728). If the status of the instance changes from "pending" to "running", the instance is created successfully.
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
 * CreatePaiInstance request structure.
 * @class
 */
class CreatePaiInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * PAI instance domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Information of the public network bandwidth configuration.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Base64-encoded string of the launch script.
         * @type {string || null}
         */
        this.InitScript = null;

        /**
         * List of availability zones.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * VpcId.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * List of subnets.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Instance display name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * List of instance models.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Instance login settings.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Instance billing type.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Relevant parameter settings for the prepaid mode (i.e., monthly subscription). This parameter can specify the purchased usage period, whether to set automatic renewal, and other attributes of the instance purchased on a prepaid basis. If the billing method of the specified instance is prepaid, this parameter is required.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InitScript = 'InitScript' in params ? params.InitScript : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

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
         * System disk type. For more information on limits of system disk types, see [CVM Instance Configuration](https://cloud.tencent.com/document/product/213/2177). Value range: <br><li>LOCAL_BASIC: Local disk <br><li>LOCAL_SSD: Local SSD disk <br><li>CLOUD_BASIC: HDD cloud disk <br><li>CLOUD_PREMIUM: Premium cloud disk <br><li>CLOUD_SSD: SSD cloud disk <br><br>Default value: LOCAL_BASIC.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Filter.
<li> auto-scaling-policy-id - String - Required: No - (Filter) Filter by alarm policy ID.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
<li> scaling-policy-name - String - Required: No - (Filter) Filter by alarm policy name.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `AutoScalingPolicyIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
 * 
 * @class
 */
class InstanceNameSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 
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
         * The minimum number of instances. Value range: 0 - 2000.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * The maximum number of instances. Value range: 0 - 2000.
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
 * DescribeAutoScalingInstances request structure.
 * @class
 */
class DescribeAutoScalingInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the CVM instance to be queried. This parameter does not support specifying both InstanceIds and Filters at the same time.
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
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
         * List of CLBs. Currently, the maximum length is 20. You cannot specify LoadBalancerIds and ForwardLoadBalancers at the same time.
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
         * Whether the instance needs to be protected from scale-in.
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
 * CreateLaunchConfiguration request structure.
 * @class
 */
class CreateLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Display name of the launch configuration, which can contain Chinese characters, letters, numbers, underscores, separators ("-"), and decimal points with a maximum length of 60 bytes.
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Valid [image](https://cloud.tencent.com/document/product/213/4940) ID in the format of `img-8toqc6s3`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the image IDs; for `marketplace images`, query the image IDs through [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>This value can be obtained from the `ImageId` field in the return value of the [DescribeImages API](https://cloud.tencent.com/document/api/213/15715).</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * ID of the project to which the instance belongs. This parameter can be obtained from the `projectId` field in the returned values of [DescribeProject](https://cloud.tencent.com/document/api/378/4400). If this is left empty, default project is used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance model. Different instance models specify different resource specifications. The specific value can be obtained by calling the [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) API to get the latest specification table or referring to the descriptions in [Instance Types](https://cloud.tencent.com/document/product/213/11518).
`InstanceType` and `InstanceTypes` are mutually exclusive, and one and only one of them must be entered.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be assigned to it.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Information of the instance's data disk configuration. If this parameter is not specified, no data disk is purchased by default. Up to 11 data disks can be supported.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Configuration information of public network bandwidth. If this parameter is not specified, the default public network bandwidth is 0 Mbps.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Login settings of the instance. This parameter is used to set the login password and key for the instance, or to keep the original login settings for the image. By default, a random password is generated and sent to the user via the internal message.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * The security group to which the instance belongs. This parameter can be obtained by calling the `SecurityGroupId` field in the returned value of [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808). If this parameter is not specified, no security group will be bound by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Enhanced service. This parameter is used to specify whether to enable Cloud Security, Cloud Monitoring and other services. If this parameter is not specified, Cloud Monitoring and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Base64-encoded custom data of up to 16 KB.
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Instance billing type. CVM instances are POSTPAID_BY_HOUR by default.
<br><li>POSTPAID_BY_HOUR: Pay-as-you-go on an hourly basis
<br><li>SPOTPAID: Bidding
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market-related options of the instance, such as the parameters related to stop instances. If the billing method of instance is specified as bidding, this parameter must be passed in.
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
         * CAM role name, which can be obtained from the roleName field in the return value of the DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * CVM HostName settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * 
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * 
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

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
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;

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
         * Current status of the auto scaling group. Value range: <br><li>NORMAL: normal <br><li>CVM_ABNORMAL: Exception with the launch configuration <br><li>LB_ABNORMAL: exception with the load balancer <br><li>VPC_ABNORMAL: exception with the VPC <br><li>INSUFFICIENT_BALANCE: insufficient balance <br><li>LB_BACKEND_REGION_NOT_MATCH: the backend region of the CLB instance is not the same as the one of AS service.<br>
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
         * 
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * 
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

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
         * The maximum length of time (in seconds) that can elapse before the lifecycle hook times out. Value range: 30-3,600. Default value: 300
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Additional information sent by AS to the notification target. The default value is ''
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * Notification target
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * The scenario where the lifecycle hook is applied. `EXTENSION`: the lifecycle hook will be triggered when AttachInstances, DetachInstances or RemoveInstaces is called. `NORMAL`: the lifecycle hook is not triggered by the above APIs. 
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

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
         * Alarm trigger policy name.
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * The method to adjust the desired number of instances after the alarm is triggered. Value range: <br><li>CHANGE_IN_CAPACITY: Increase or decrease the desired number of instances </li><li>EXACT_CAPACITY: Adjust to the specified desired number of instances </li> <li>PERCENT_CHANGE_IN_CAPACITY: Adjust the desired number of instances by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * The adjusted value of desired number of instances after the alarm is triggered.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Cooldown period.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Alarm monitoring metric.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

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
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
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
         * Host name of a CVM.
<br><li> A period (.) and hyphen (-) cannot be used as the first and the last characters of HostName, and multiple consecutive hyphens (-) or periods (.) are not allowed.
<br><li> No support for Windows instances.
<br><li> Other types of instances (such as Linux): the name should be a combination of 2 to 40 characters, supports multiple periods (.). The string between two periods can be composed of letters (case insensitive), numbers, and hyphens (-).
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribePaiInstances request structure.
 * @class
 */
class DescribePaiInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by PAI instance ID.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://cloud.tencent.com/document/product/598/34589) API.
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
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://cloud.tencent.com/document/product/598/34589) API.
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
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
         * The method to adjust the desired number of instances after the alarm is triggered. Value range: <br><li>CHANGE_IN_CAPACITY: Increase or decrease the desired number of instances </li><li>EXACT_CAPACITY: Adjust to the specified desired number of instances </li> <li>PERCENT_CHANGE_IN_CAPACITY: Adjust the desired number of instances by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * The adjusted value of desired number of instances after the alarm is triggered. Value range: <br><li>When AdjustmentType is CHANGE_IN_CAPACITY, if AdjustmentValue is a positive value, some new instances will be added after the alarm is triggered, and if it is a negative value, some existing instances will be removed after the alarm is triggered </li> <li> When AdjustmentType is EXACT_CAPACITY, the value of AdjustmentValue is the desired number of instances after the alarm is triggered, which should be equal to or greater than 0 </li> <li> When AdjustmentType is PERCENT_CHANGE_IN_CAPACITY, if AdjusmentValue (in %) is a positive value, new instances will be added by percentage after the alarm is triggered; if it is a negative value, existing instances will be removed by percentage after the alarm is triggered.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Cooldown period in seconds.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Alarm monitoring metric.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://cloud.tencent.com/document/product/598/34589) API.
If you want to clear the user group, you need to pass in the specific string "NULL" to the list.
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
 * PAI instance
 * @class
 */
class PaiInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 
         * @type {string || null}
         */
        this.PaiMateUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.PaiMateUrl = 'PaiMateUrl' in params ? params.PaiMateUrl : null;

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
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of CLBs. Currently, the maximum length is 20. You cannot specify LoadBalancerIds and ForwardLoadBalancers at the same time.
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
         * Retry policy. Value range: IMMEDIATE_RETRY, INCREMENTAL_INTERVALS, and NO_RETRY. Default value: IMMEDIATE_RETRY.
<br><li> IMMEDIATE_RETRY: Retrying immediately in a short period of time and stopping after a number of consecutive failures (5).
<br><li> INCREMENTAL_INTERVALS: Retrying at incremental intervals, i.e., as the number of consecutive failures increases, the retry interval gradually increases, ranging from one second to one day.
<br><li> NO_RETRY: No retry until a user call or alarm message is received again.
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
         * 
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

        /**
         * 
         * @type {string || null}
         */
        this.MultiZoneSubnetPolicy = null;

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
         * Valid [image](https://cloud.tencent.com/document/product/213/4940) ID in the format of `img-8toqc6s3`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the image IDs; for `marketplace images`, query the image IDs through [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>This value can be obtained from the `ImageId` field in the return value of the [DescribeImages API](https://cloud.tencent.com/document/api/213/15715).</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of instance models. Different instance models specify different resource specifications. Up to 5 instance models can be supported.
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * Display name of the launch configuration, which can contain Chinese characters, letters, numbers, underscores, separators ("-"), and decimal points with a maximum length of 60 bytes.
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * Information of the instance's data disk configuration. If this parameter is not specified, no data disk is purchased by default. Up to 11 data disks can be supported.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Enhanced service. This parameter is used to specify whether to enable Cloud Security, Cloud Monitoring and other services. If this parameter is not specified, Cloud Monitoring and Cloud Security will be enabled by default.
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
         * Market-related options of the instance, such as the parameters related to stop instances. If the billing method of instance is specified as bidding, this parameter must be passed in.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * Instance type verification policy. Value range: ALL, ANY. Default value: ANY.
<br><li> ALL: The verification will success only if all instance types (InstanceType) are available; otherwise, an error will be reported.
<br><li> ANY: The verification will success if any instance type (InstanceType) is available; otherwise, an error will be reported.

Common reasons why an instance type is unavailable include stock-out of the instance type and the corresponding cloud disk.
If a model in InstanceTypes does not exist or has been deactivated, a verification error will be reported regardless of the value of InstanceTypesCheckPolicy.
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

        /**
         * Configuration information of public network bandwidth. If this parameter is not specified, the default public network bandwidth is 0 Mbps.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Login settings of the instance. This parameter is used to set the login password and key for the instance, or to keep the original login settings for the image. By default, a random password is generated and sent to the user via the internal message.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Project ID of the instance. This parameter can be obtained from the `projectId` field in the returned values of [DescribeProject](https://cloud.tencent.com/document/api/378/4400). If this is left empty, default project is used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The security group of instance. This parameter can be obtained by calling the `SecurityGroupId` field in the returned value of [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808). If this parameter is not specified, no security group will be bound by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be assigned to it.
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
         * CVM HostName settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * 
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * 
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

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
         * Data disk type. For more information on limits of data disk types, see [CVM Instance Configuration](https://cloud.tencent.com/document/product/213/2177). Value range: <br><li>LOCAL_BASIC: Local disk <br><li>LOCAL_SSD: Local SSD disk <br><li>CLOUD_BASIC: HDD cloud disk <br><li>CLOUD_PREMIUM: Premium cloud disk <br><li>CLOUD_SSD: SSD cloud disk <br><br>Default value: LOCAL_BASIC.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type. For more information on limits, see [CVM Instance Configuration](https://cloud.tencent.com/document/product/213/2177). The default value is 0, indicating that no data disk is purchased. For more information, see the product documentation.
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

    }
}

/**
 * PreviewPaiDomainName request structure.
 * @class
 */
class PreviewPaiDomainNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name type
         * @type {string || null}
         */
        this.DomainNameType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainNameType = 'DomainNameType' in params ? params.DomainNameType : null;

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
 * This describes the configuration and information related to instance login.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login password of the instance. The rule of password complexity varies by operating system: <br><li>For Linux instances, the password must be a combination of 8-16 characters comprised of at least two of the following types: [a-z, A-Z], [0-9] and [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]. <br><li>For Windows instances, the password must be a combination of 12-16 characters comprised of at least three of the following types: [a-z], [A-Z], [0-9] and [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]. <br><br>If this parameter is not specified, a password will be randomly generated and sent to you via internal message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. An instance associated with the key can be accessed using the corresponding private key. KeyId can be obtained via the API DescribeKeyPairs. A key and a password cannot be specified at the same time, and specifying the key is not supported in Windows. You can specify only one key when purchasing an instance.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Keep the original settings for an image. You cannot specify this parameter if Password or KeyIds.N is specified. You can specify this parameter to TRUE only when you create an instance using a custom image, shared image, or image imported from external resources. Value range: <br><li>TRUE: Keep the login settings for the image <br><li>FALSE: Do not keep the login settings for the image <br><br>Default value: FALSE.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Lifecycle status. Value range: IN_SERVICE, CREATING, TERMINATING, ATTACHING, DETACHING, ATTACHING_LB, DETACHING_LB
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
 * This describes the conditions of enhancement services for the instance and their settings, such as the Agent of Cloud Security or Cloud Monitor.
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
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
         * Whether to enable the [Cloud Security](https://cloud.tencent.com/document/product/296) service. Value range: <br><li>TRUE: Cloud Security is enabled <br><li>FALSE: Cloud Security is disabled <br><br>Default value: TRUE.
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
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
         * The maximum length of time (in seconds) that can elapse before the lifecycle hook times out. Value range: 30-3,600. Default value: 300
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * Additional information sent by Auto Scaling to the notification target. Default value is ''. Maximum length is 1024 characters.
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * Notification target
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

        /**
         * The scenario where the lifecycle hook is applied. `EXTENSION`: the lifecycle hook will be triggered when AttachInstances, DetachInstances or RemoveInstaces is called. `NORMAL`: the lifecycle hook is not triggered by the above APIs. 
         * @type {string || null}
         */
        this.LifecycleTransitionType = null;

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
         * Filter.
<li> lifecycle-hook-id - String - Required: No - (Filter) Filter by lifecycle hook ID.</li>
<li> lifecycle-hook-name - String - Required: No - (Filter) Filter by lifecycle hook name.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
Filter.
<li> lifecycle-hook-id - String - Required: No - (Filter) Filter by lifecycle hook ID.</li>
<li> lifecycle-hook-name - String - Required: No - (Filter) Filter by lifecycle hook name.</li>
<li> auto-scaling-group-id - String - Required: No - (Filter) Filter by auto scaling group ID.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `LifecycleHookIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
         * 
         * @type {string || null}
         */
        this.ScalingMode = null;

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
         * Launch configuration ID.
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
         * Instance billing type. CVM instances are POSTPAID_BY_HOUR by default.
<br><li>POSTPAID_BY_HOUR: Pay-as-you-go on an hourly basis
<br><li>SPOTPAID: Bidding
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Market-related options of the instance, such as the parameters related to stop instances. If the billing method of instance is specified as bidding, this parameter must be passed in.
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
         * List of tags.
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

        /**
         * Version number.
         * @type {number || null}
         */
        this.VersionNumber = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * CAM role name, which can be obtained from the roleName field in the return value of the DescribeRoleList API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * Value of InstanceTypesCheckPolicy upon the last operation.
         * @type {string || null}
         */
        this.LastOperationInstanceTypesCheckPolicy = null;

        /**
         * CVM HostName settings.
         * @type {HostNameSettings || null}
         */
        this.HostNameSettings = null;

        /**
         * 
         * @type {InstanceNameSettings || null}
         */
        this.InstanceNameSettings = null;

        /**
         * 
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

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
         * The method to adjust the desired number of instances after the alarm is triggered. Value range: <br><li>CHANGE_IN_CAPACITY: Increase or decrease the desired number of instances </li><li>EXACT_CAPACITY: Adjust to the specified desired number of instances </li> <li>PERCENT_CHANGE_IN_CAPACITY: Adjust the desired number of instances by percentage </li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * The adjusted value of desired number of instances after the alarm is triggered. Value range: <br><li>When AdjustmentType is CHANGE_IN_CAPACITY, if AdjustmentValue is a positive value, some new instances will be added after the alarm is triggered, and if it is a negative value, some existing instances will be removed after the alarm is triggered </li> <li> When AdjustmentType is EXACT_CAPACITY, the value of AdjustmentValue is the desired number of instances after the alarm is triggered, which should be equal to or greater than 0 </li> <li> When AdjustmentType is PERCENT_CHANGE_IN_CAPACITY, if AdjusmentValue (in %) is a positive value, new instances will be added by percentage after the alarm is triggered; if it is a negative value, existing instances will be removed by percentage after the alarm is triggered.
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * Alarm monitoring metric.
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * Cooldown period in seconds. Default value: 300 seconds.
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * Notification group ID, which is the set of user group IDs. You can query the user group IDs through the [ListGroups](https://cloud.tencent.com/document/product/598/34589) API.
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
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
         * Filter.
<li> launch-configuration-id - String - Required: No - (Filter) Filter by launch configuration ID.</li>
<li> launch-configuration-name - String - Required: No - (Filter) Filter by launch configuration name.</li>
The maximum number of `Filters` per request is 10. The upper limit for `Filter.Values` is 5. This parameter does not support specifying both `LaunchConfigurationIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
         * Target type. Value range: `CMQ_QUEUE`, `CMQ_TOPIC`.
<li> CMQ_QUEUE: CMQ_QUEUE: CMQ queue model.</li>
<li> CMQ_TOPIC: CMQ topic model.</li>
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Queue name. If `TargetType` is `CMQ_QUEUE`, this parameter is required.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * Topic name. If `TargetType` is `CMQ_TOPIC`, this parameter is required.
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
         * Whether the notification is sent to CMQ successfully
         * @type {string || null}
         */
        this.NotificationResult = null;

        /**
         * Result of the lifecyle hook action. Values: CONTINUE, ABANDON
         * @type {string || null}
         */
        this.LifecycleActionResult = null;

        /**
         * Cause of the result
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
        this.NotificationResult = 'NotificationResult' in params ? params.NotificationResult : null;
        this.LifecycleActionResult = 'LifecycleActionResult' in params ? params.LifecycleActionResult : null;
        this.ResultReason = 'ResultReason' in params ? params.ResultReason : null;

    }
}

/**
 * Brief information of an auto scaling group.
 * @class
 */
class AutoScalingGroupAbstract extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto scaling group ID.
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
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0. For more information on `Offset`, see the relevant section in the API [overview](https://cloud.tencent.com/document/api/213/15688).
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
 * PreviewPaiDomainName response structure.
 * @class
 */
class PreviewPaiDomainNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Available PAI domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
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
         * Scaling activity type. Value range:<br>
<li>SCALE_OUT: scale-out <li>SCALE_IN: scale-in <li>ATTACH_INSTANCES: adding an instance <li>REMOVE_INSTANCES: terminating an instance <li>DETACH_INSTANCES: removing an instance <li>TERMINATE_INSTANCES_UNEXPECTEDLY: terminating an instance in the CVM console <li>REPLACE_UNHEALTHY_INSTANCE: replacing an unhealthy instance
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
         * Information set of the instances related to the scaling activity.
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
         * Whether to enable the [Cloud Monitor](https://cloud.tencent.com/document/product/248) service. Value range: <br><li>TRUE: Cloud Monitor is enabled <br><li>FALSE: Cloud Monitor is disabled <br><br>Default value: TRUE. |
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
         * The maximum outbound bandwidth in Mbps of the public network. The default value is 0 Mbps. The upper limit of bandwidth varies by model. For more information, see [Purchase Network Bandwidth](https://cloud.tencent.com/document/product/213/509).
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
         * Bandwidth package ID. You can obtain the ID from the `BandwidthPackageId` field in the response of the [DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209) API.
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
 * This describes the billing method of an instance
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
 * DescribePaiInstances response structure.
 * @class
 */
class DescribePaiInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible PAI instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * PAI instance details
         * @type {Array.<PaiInstance> || null}
         */
        this.PaiInstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.PaiInstanceSet) {
            this.PaiInstanceSet = new Array();
            for (let z in params.PaiInstanceSet) {
                let obj = new PaiInstance();
                obj.deserialize(params.PaiInstanceSet[z]);
                this.PaiInstanceSet.push(obj);
            }
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
         * Alarm-based scaling policy ID
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
    AutoScalingNotification: AutoScalingNotification,
    ModifyScheduledActionRequest: ModifyScheduledActionRequest,
    DescribeAutoScalingGroupsRequest: DescribeAutoScalingGroupsRequest,
    CreateAutoScalingGroupResponse: CreateAutoScalingGroupResponse,
    DescribeAccountLimitsResponse: DescribeAccountLimitsResponse,
    CreatePaiInstanceResponse: CreatePaiInstanceResponse,
    CreateLaunchConfigurationResponse: CreateLaunchConfigurationResponse,
    CreateLifecycleHookResponse: CreateLifecycleHookResponse,
    DescribeAutoScalingGroupsResponse: DescribeAutoScalingGroupsResponse,
    CreatePaiInstanceRequest: CreatePaiInstanceRequest,
    SystemDisk: SystemDisk,
    SpotMarketOptions: SpotMarketOptions,
    StopAutoScalingInstancesResponse: StopAutoScalingInstancesResponse,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    InstanceNameSettings: InstanceNameSettings,
    ModifyScheduledActionResponse: ModifyScheduledActionResponse,
    CreateAutoScalingGroupFromInstanceRequest: CreateAutoScalingGroupFromInstanceRequest,
    ExecuteScalingPolicyResponse: ExecuteScalingPolicyResponse,
    ModifyLaunchConfigurationAttributesResponse: ModifyLaunchConfigurationAttributesResponse,
    SetInstancesProtectionResponse: SetInstancesProtectionResponse,
    StartAutoScalingInstancesResponse: StartAutoScalingInstancesResponse,
    CompleteLifecycleActionRequest: CompleteLifecycleActionRequest,
    CreateScalingPolicyResponse: CreateScalingPolicyResponse,
    CreateNotificationConfigurationResponse: CreateNotificationConfigurationResponse,
    DescribeLaunchConfigurationsResponse: DescribeLaunchConfigurationsResponse,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    Tag: Tag,
    DescribeAutoScalingInstancesRequest: DescribeAutoScalingInstancesRequest,
    LimitedLoginSettings: LimitedLoginSettings,
    ModifyLoadBalancersRequest: ModifyLoadBalancersRequest,
    RemoveInstancesResponse: RemoveInstancesResponse,
    ModifyScalingPolicyResponse: ModifyScalingPolicyResponse,
    SetInstancesProtectionRequest: SetInstancesProtectionRequest,
    DeleteNotificationConfigurationResponse: DeleteNotificationConfigurationResponse,
    DetachInstancesResponse: DetachInstancesResponse,
    CreateLaunchConfigurationRequest: CreateLaunchConfigurationRequest,
    AutoScalingGroup: AutoScalingGroup,
    AttachInstancesResponse: AttachInstancesResponse,
    DescribeAutoScalingGroupLastActivitiesResponse: DescribeAutoScalingGroupLastActivitiesResponse,
    DescribeAccountLimitsRequest: DescribeAccountLimitsRequest,
    UpgradeLifecycleHookRequest: UpgradeLifecycleHookRequest,
    ScalingPolicy: ScalingPolicy,
    DescribeAutoScalingGroupLastActivitiesRequest: DescribeAutoScalingGroupLastActivitiesRequest,
    HostNameSettings: HostNameSettings,
    ModifyLoadBalancersResponse: ModifyLoadBalancersResponse,
    DescribePaiInstancesRequest: DescribePaiInstancesRequest,
    CreateNotificationConfigurationRequest: CreateNotificationConfigurationRequest,
    DescribeScheduledActionsResponse: DescribeScheduledActionsResponse,
    ModifyNotificationConfigurationRequest: ModifyNotificationConfigurationRequest,
    DeleteLifecycleHookRequest: DeleteLifecycleHookRequest,
    ModifyAutoScalingGroupResponse: ModifyAutoScalingGroupResponse,
    DeleteLaunchConfigurationRequest: DeleteLaunchConfigurationRequest,
    ModifyScalingPolicyRequest: ModifyScalingPolicyRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    UpgradeLifecycleHookResponse: UpgradeLifecycleHookResponse,
    InstanceTag: InstanceTag,
    PaiInstance: PaiInstance,
    CreateAutoScalingGroupRequest: CreateAutoScalingGroupRequest,
    DeleteScheduledActionResponse: DeleteScheduledActionResponse,
    UpgradeLaunchConfigurationRequest: UpgradeLaunchConfigurationRequest,
    DescribeAutoScalingActivitiesResponse: DescribeAutoScalingActivitiesResponse,
    DescribeNotificationConfigurationsResponse: DescribeNotificationConfigurationsResponse,
    DataDisk: DataDisk,
    PreviewPaiDomainNameRequest: PreviewPaiDomainNameRequest,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    LoginSettings: LoginSettings,
    CreateAutoScalingGroupFromInstanceResponse: CreateAutoScalingGroupFromInstanceResponse,
    DetachInstancesRequest: DetachInstancesRequest,
    Instance: Instance,
    CreateScheduledActionRequest: CreateScheduledActionRequest,
    EnhancedService: EnhancedService,
    DeleteLaunchConfigurationResponse: DeleteLaunchConfigurationResponse,
    DescribeScheduledActionsRequest: DescribeScheduledActionsRequest,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteScheduledActionRequest: DeleteScheduledActionRequest,
    DescribeAutoScalingActivitiesRequest: DescribeAutoScalingActivitiesRequest,
    ModifyDesiredCapacityRequest: ModifyDesiredCapacityRequest,
    CreateScheduledActionResponse: CreateScheduledActionResponse,
    CreateLifecycleHookRequest: CreateLifecycleHookRequest,
    ScheduledAction: ScheduledAction,
    CompleteLifecycleActionResponse: CompleteLifecycleActionResponse,
    Filter: Filter,
    DescribeLifecycleHooksRequest: DescribeLifecycleHooksRequest,
    ServiceSettings: ServiceSettings,
    LaunchConfiguration: LaunchConfiguration,
    TargetAttribute: TargetAttribute,
    ModifyNotificationConfigurationResponse: ModifyNotificationConfigurationResponse,
    DescribeAutoScalingInstancesResponse: DescribeAutoScalingInstancesResponse,
    DescribeLifecycleHooksResponse: DescribeLifecycleHooksResponse,
    CreateScalingPolicyRequest: CreateScalingPolicyRequest,
    DeleteNotificationConfigurationRequest: DeleteNotificationConfigurationRequest,
    DescribeLaunchConfigurationsRequest: DescribeLaunchConfigurationsRequest,
    NotificationTarget: NotificationTarget,
    DeleteAutoScalingGroupResponse: DeleteAutoScalingGroupResponse,
    LifecycleActionResultInfo: LifecycleActionResultInfo,
    AutoScalingGroupAbstract: AutoScalingGroupAbstract,
    EnableAutoScalingGroupRequest: EnableAutoScalingGroupRequest,
    MetricAlarm: MetricAlarm,
    DescribeNotificationConfigurationsRequest: DescribeNotificationConfigurationsRequest,
    LifecycleHook: LifecycleHook,
    ForwardLoadBalancer: ForwardLoadBalancer,
    PreviewPaiDomainNameResponse: PreviewPaiDomainNameResponse,
    DeleteAutoScalingGroupRequest: DeleteAutoScalingGroupRequest,
    RemoveInstancesRequest: RemoveInstancesRequest,
    StartAutoScalingInstancesRequest: StartAutoScalingInstancesRequest,
    AttachInstancesRequest: AttachInstancesRequest,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    Activity: Activity,
    ModifyDesiredCapacityResponse: ModifyDesiredCapacityResponse,
    StopAutoScalingInstancesRequest: StopAutoScalingInstancesRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    DeleteLifecycleHookResponse: DeleteLifecycleHookResponse,
    ActivtyRelatedInstance: ActivtyRelatedInstance,
    InternetAccessible: InternetAccessible,
    EnableAutoScalingGroupResponse: EnableAutoScalingGroupResponse,
    UpgradeLaunchConfigurationResponse: UpgradeLaunchConfigurationResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DescribePaiInstancesResponse: DescribePaiInstancesResponse,
    ExecuteScalingPolicyRequest: ExecuteScalingPolicyRequest,

}
