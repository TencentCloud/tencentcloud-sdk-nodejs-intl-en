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
 * Game attribute details
 * @class
 */
class GameProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name. Up to 32 ASCII characters are allowed.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Attribute value. Up to 96 ASCII characters are allowed.
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
 * DeleteTimerScalingPolicy response structure.
 * @class
 */
class DeleteTimerScalingPolicyResponse extends  AbstractModel {
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
 * DescribeTimerScalingPolicies request structure.
 * @class
 */
class DescribeTimerScalingPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the fleet to be bound with the policy
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Scheduled scaling policy name
         * @type {string || null}
         */
        this.TimerName = null;

        /**
         * Start time of the scheduled scaling policy
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the scheduled scaling policy
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.TimerName = 'TimerName' in params ? params.TimerName : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Service deployment attributes
 * @class
 */
class FleetAttributes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset package ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Server fleet creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Description
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Description of server fleet resource
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.FleetArn = null;

        /**
         * Server fleet ID
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Server fleet type, which only supports ON_DEMAND now.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.FleetType = null;

        /**
         * Server type, such as S5.LARGE8
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Server fleet name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Game session protection policy
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NewGameServerSessionProtectionPolicy = null;

        /**
         * Operating system type
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.OperatingSystem = null;

        /**
         * Limit policy of resource creation
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * Statuses: “Create”, “Downloading”, “Verifying”, “Generating”, “Activating”, “Active”, “Exception”, “Deleting”, and “End”.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The status of server fleet when it stopped. If this field is left empty, it means automatic scaling.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.StoppedActions = null;

        /**
         * Server fleet termination time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TerminationTime = null;

        /**
         * Timeout period of time-limited protection. Value range: 5-1440 minutes. Default value: 60 minutes.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

        /**
         * Billing status: Unactivated, Activated, Exception, Isolated due to arrears, Terminated, and Unfrozen.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.BillingStatus = null;

        /**
         * Tag list. Up to 50 tags.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Data disk. It can be SSD disks (CLOUD_SSD) with 100-32000 GB capacity or Premium Cloud Storage disks (CLOUD_PREMIUM) with 10-32000 GB capacity. The increment is 10. 
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDiskInfo = null;

        /**
         * System disk. It can be a SSD (CLOUD_SSD) with 100-500 GB capacity or a Premium Cloud Storage disk (CLOUD_PREMIUM) with 50-500 GB capacity. The increment is 1.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {DiskInfo || null}
         */
        this.SystemDiskInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FleetArn = 'FleetArn' in params ? params.FleetArn : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.FleetType = 'FleetType' in params ? params.FleetType : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NewGameServerSessionProtectionPolicy = 'NewGameServerSessionProtectionPolicy' in params ? params.NewGameServerSessionProtectionPolicy : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

        if (params.ResourceCreationLimitPolicy) {
            let obj = new ResourceCreationLimitPolicy();
            obj.deserialize(params.ResourceCreationLimitPolicy)
            this.ResourceCreationLimitPolicy = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StoppedActions = 'StoppedActions' in params ? params.StoppedActions : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;
        this.BillingStatus = 'BillingStatus' in params ? params.BillingStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.DataDiskInfo) {
            this.DataDiskInfo = new Array();
            for (let z in params.DataDiskInfo) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDiskInfo[z]);
                this.DataDiskInfo.push(obj);
            }
        }

        if (params.SystemDiskInfo) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDiskInfo)
            this.SystemDiskInfo = obj;
        }

    }
}

/**
 * Configuration of target tracking scaling
 * @class
 */
class TargetConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ratio of reserved server session resource 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;

    }
}

/**
 * Allowed network range.
 * @class
 */
class InboundPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start port number. Minimum value: 1025.
         * @type {number || null}
         */
        this.FromPort = null;

        /**
         * IP range. Valid range of the input IPv4 addresses in CIDR format; for example, 0.0.0.0.0/0.
         * @type {string || null}
         */
        this.IpRange = null;

        /**
         * Protocol type: TCP or UDP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * End port number. Maximum value: 60000.
         * @type {number || null}
         */
        this.ToPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromPort = 'FromPort' in params ? params.FromPort : null;
        this.IpRange = 'IpRange' in params ? params.IpRange : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ToPort = 'ToPort' in params ? params.ToPort : null;

    }
}

/**
 * DescribeGameServerSessions response structure.
 * @class
 */
class DescribeGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetInstanceAccess response structure.
 * @class
 */
class GetInstanceAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credentials required for instance login
         * @type {InstanceAccess || null}
         */
        this.InstanceAccess = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceAccess) {
            let obj = new InstanceAccess();
            obj.deserialize(params.InstanceAccess)
            this.InstanceAccess = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JoinGameServerSession request structure.
 * @class
 */
class JoinGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Player ID. Up to 1024 ASCII characters are allowed.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player custom data. Up to 2048 ASCII characters are allowed.
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * DescribePlayerSessions response structure.
 * @class
 */
class DescribePlayerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateBucketCORSOpt response structure.
 * @class
 */
class UpdateBucketCORSOptResponse extends  AbstractModel {
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
 * DescribeTimerScalingPolicies response structure.
 * @class
 */
class DescribeTimerScalingPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration of the scheduled scaling policy
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<TimerScalingPolicy> || null}
         */
        this.TimerScalingPolicies = null;

        /**
         * Total number of scheduled scaling policies
Note: this field may return `null`, indicating that no valid values can be obtained.
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

        if (params.TimerScalingPolicies) {
            this.TimerScalingPolicies = new Array();
            for (let z in params.TimerScalingPolicies) {
                let obj = new TimerScalingPolicy();
                obj.deserialize(params.TimerScalingPolicies[z]);
                this.TimerScalingPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetServerReserved response structure.
 * @class
 */
class SetServerReservedResponse extends  AbstractModel {
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
 * Game service process
 * @class
 */
class ServerProcesse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of concurrent processes. Value range of total concurrent processes: 1-50.
         * @type {number || null}
         */
        this.ConcurrentExecutions = null;

        /**
         * Launch Path. Linux: /local/game/ or Windows: C:\game\. The path length is 1-1024.
         * @type {string || null}
         */
        this.LaunchPath = null;

        /**
         * Launch parameter. The length is 0-1024.
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
        this.ConcurrentExecutions = 'ConcurrentExecutions' in params ? params.ConcurrentExecutions : null;
        this.LaunchPath = 'LaunchPath' in params ? params.LaunchPath : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

    }
}

/**
 * StopGameServerSessionPlacement request structure.
 * @class
 */
class StopGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of game server session placement
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * Configurations of a scheduled scaling policy
 * @class
 */
class TimerScalingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the policy. When it’s filled in, the policy will be updated.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimerId = null;

        /**
         * Scheduled scaling policy name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimerName = null;

        /**
         * Scheduled scaling policy status. `0`: Undefined, `1`: Not started, 2: Activated, `3`: Stopped, `4`: Expired
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimerStatus = null;

        /**
         * The capacity configurations of the scheduled scaling policy
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {TimerFleetCapacity || null}
         */
        this.TimerFleetCapacity = null;

        /**
         * The recurrence pattern of auto-scaling
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {TimerConfiguration || null}
         */
        this.TimerConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimerId = 'TimerId' in params ? params.TimerId : null;
        this.TimerName = 'TimerName' in params ? params.TimerName : null;
        this.TimerStatus = 'TimerStatus' in params ? params.TimerStatus : null;

        if (params.TimerFleetCapacity) {
            let obj = new TimerFleetCapacity();
            obj.deserialize(params.TimerFleetCapacity)
            this.TimerFleetCapacity = obj;
        }

        if (params.TimerConfiguration) {
            let obj = new TimerConfiguration();
            obj.deserialize(params.TimerConfiguration)
            this.TimerConfiguration = obj;
        }

    }
}

/**
 * The capacity configurations of the scheduled scaling policy
 * @class
 */
class TimerFleetCapacity extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the fleet to be bound with the policy
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Desired number of instances
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DesiredInstances = null;

        /**
         * Minimum number of instances
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum number of instances
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Scaling cooldown period, in minutes
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScalingInterval = null;

        /**
         * Scaling type. `1`: manual, `2`: automatic, `0`: undefined
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScalingType = null;

        /**
         * Configuration of target tracking scaling
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {TargetConfiguration || null}
         */
        this.TargetConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.DesiredInstances = 'DesiredInstances' in params ? params.DesiredInstances : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.ScalingInterval = 'ScalingInterval' in params ? params.ScalingInterval : null;
        this.ScalingType = 'ScalingType' in params ? params.ScalingType : null;

        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration)
            this.TargetConfiguration = obj;
        }

    }
}

/**
 * CopyFleet request structure.
 * @class
 */
class CopyFleetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Replica number. It should a value between 1 to the number of the remaining quota. It can be obtained through [Obtaining User Quota](https://intl.cloud.tencent.com/document/product/1165/48732?from_cn_redirect=1).
         * @type {number || null}
         */
        this.CopyNumber = null;

        /**
         * Asset package ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Description. The length is 0-100 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Network configuration
         * @type {Array.<InboundPermission> || null}
         */
        this.InboundPermissions = null;

        /**
         * Server type. It can be obtained through [Obtaining Server Instance Type List](https://intl.cloud.tencent.com/document/product/1165/48732?from_cn_redirect=1).
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Server fleet type, which only supports “ON_DEMAND” type now.
         * @type {string || null}
         */
        this.FleetType = null;

        /**
         * Server fleet name. The length is 1-50 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Protection policy. Valid values: NoProtection·(no protection), FullProtection (full protection), TimeLimitProtection (time-limited protection)
         * @type {string || null}
         */
        this.NewGameServerSessionProtectionPolicy = null;

        /**
         * Limit policy of resource creation
         * @type {ResourceCreationLimitPolicy || null}
         */
        this.ResourceCreationLimitPolicy = null;

        /**
         * Progress configuration
         * @type {RuntimeConfiguration || null}
         */
        this.RuntimeConfiguration = null;

        /**
         * Timeout period of time-limited protection. Value range: 5-1440 minutes. Default value: 60 minutes. This parameter is valid only when NewGameSessionProtectionPolicy is set as TimeLimitProtection.
         * @type {number || null}
         */
        this.GameServerSessionProtectionTimeLimit = null;

        /**
         * Whether to select scaling. Valid values: SCALING_SELECTED, SCALING_UNSELECTED. Default value: SCALING_UNSELECTED.
         * @type {string || null}
         */
        this.SelectedScalingType = null;

        /**
         * Whether to select CCN. Valid values: CCN_SELECTED, CCN_UNSELECTED. Default value: CCN_UNSELECTED.
         * @type {string || null}
         */
        this.SelectedCcnType = null;

        /**
         * Tag list. Up to 50 tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * System disk. It can be a SSD (CLOUD_SSD) with 100-500 GB capacity or a Premium Cloud Storage disk (CLOUD_PREMIUM) with 50-500 GB capacity. The increment is 1.
         * @type {DiskInfo || null}
         */
        this.SystemDiskInfo = null;

        /**
         * Data disk. It can be SSD disks (CLOUD_SSD) with 100-32000 GB capacity or Premium Cloud Storage disks (CLOUD_PREMIUM) with 10-32000 GB capacity. The increment is 10. 
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDiskInfo = null;

        /**
         * Whether to select to replicate the timer policy: TIMER_SELECTED or TIMER_UNSELECTED. The default value is TIMER_UNSELECTED.
         * @type {string || null}
         */
        this.SelectedTimerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.CopyNumber = 'CopyNumber' in params ? params.CopyNumber : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.InboundPermissions) {
            this.InboundPermissions = new Array();
            for (let z in params.InboundPermissions) {
                let obj = new InboundPermission();
                obj.deserialize(params.InboundPermissions[z]);
                this.InboundPermissions.push(obj);
            }
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.FleetType = 'FleetType' in params ? params.FleetType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NewGameServerSessionProtectionPolicy = 'NewGameServerSessionProtectionPolicy' in params ? params.NewGameServerSessionProtectionPolicy : null;

        if (params.ResourceCreationLimitPolicy) {
            let obj = new ResourceCreationLimitPolicy();
            obj.deserialize(params.ResourceCreationLimitPolicy)
            this.ResourceCreationLimitPolicy = obj;
        }

        if (params.RuntimeConfiguration) {
            let obj = new RuntimeConfiguration();
            obj.deserialize(params.RuntimeConfiguration)
            this.RuntimeConfiguration = obj;
        }
        this.GameServerSessionProtectionTimeLimit = 'GameServerSessionProtectionTimeLimit' in params ? params.GameServerSessionProtectionTimeLimit : null;
        this.SelectedScalingType = 'SelectedScalingType' in params ? params.SelectedScalingType : null;
        this.SelectedCcnType = 'SelectedCcnType' in params ? params.SelectedCcnType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.SystemDiskInfo) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDiskInfo)
            this.SystemDiskInfo = obj;
        }

        if (params.DataDiskInfo) {
            this.DataDiskInfo = new Array();
            for (let z in params.DataDiskInfo) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDiskInfo[z]);
                this.DataDiskInfo.push(obj);
            }
        }
        this.SelectedTimerType = 'SelectedTimerType' in params ? params.SelectedTimerType : null;

    }
}

/**
 * Details of the recurrence pattern of the scheduled scaling policy
 * @class
 */
class TimerValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execute once every X day(s)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Day = null;

        /**
         * Specify the first day to execute the scaling action in a month (execute once per day)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FromDay = null;

        /**
         * Specify the last day to execute the scaling action in a month
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ToDay = null;

        /**
         * Specify the week days to repeat the scaling action. Multiple values are supported. Valid values: `1` (Monday), `2` (Tuesday), `3` (Wednesday), `4` (Thursday), `5` (Friday), `6` (Saturday), `7` (Sunday). 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.WeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Day = 'Day' in params ? params.Day : null;
        this.FromDay = 'FromDay' in params ? params.FromDay : null;
        this.ToDay = 'ToDay' in params ? params.ToDay : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;

    }
}

/**
 * CopyFleet response structure.
 * @class
 */
class CopyFleetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server fleet attributes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<FleetAttributes> || null}
         */
        this.FleetAttributes = null;

        /**
         * The number of server fleets
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

        if (params.FleetAttributes) {
            this.FleetAttributes = new Array();
            for (let z in params.FleetAttributes) {
                let obj = new FleetAttributes();
                obj.deserialize(params.FleetAttributes[z]);
                this.FleetAttributes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetInstanceAccess request structure.
 * @class
 */
class GetInstanceAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeGameServerSessions request structure.
 * @class
 */
class DescribeGameServerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * UpdateGameServerSession request structure.
 * @class
 */
class UpdateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Name of the game server session. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player session creation policy, which includes `ACCEPT_ALL` (allow all players) and `DENY_ALL` (reject all players).
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * Protection policy, which includes `NoProtection`·(no protection), `TimeLimitProtection` (time-limited protection) and `FullProtection` (full protection)
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * PutTimerScalingPolicy response structure.
 * @class
 */
class PutTimerScalingPolicyResponse extends  AbstractModel {
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
 * Player latency information
 * @class
 */
class PlayerLatency extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Name of region corresponding to latency
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionIdentifier = null;

        /**
         * Latency in milliseconds
         * @type {number || null}
         */
        this.LatencyInMilliseconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.RegionIdentifier = 'RegionIdentifier' in params ? params.RegionIdentifier : null;
        this.LatencyInMilliseconds = 'LatencyInMilliseconds' in params ? params.LatencyInMilliseconds : null;

    }
}

/**
 * Disk storage information
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disk type: Premium Cloud Storage (CLOUD_PREMIUM) or SSD (CLOUD_SSD)
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk: the available disk capacity is 50-500 GB. Data disk: the available disk capacity is 100-32000 GB, and the value is a multiple of 10. When the disk type is SSD (CLOUD_SSD), the minimum capacity is 100 GB.
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
 * StartGameServerSessionPlacement response structure.
 * @class
 */
class StartGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Credentials required for instance access
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSH private key
         * @type {string || null}
         */
        this.Secret = null;

        /**
         * Username
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
        this.Secret = 'Secret' in params ? params.Secret : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * GetGameServerSessionLogUrl request structure.
 * @class
 */
class GetGameServerSessionLogUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;

    }
}

/**
 * SetServerReserved request structure.
 * @class
 */
class SetServerReservedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the fleet to be bound with the policy
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether the instance is retained. Valid values: 1 (retained), 0 (not retained). Default value: 0.
         * @type {number || null}
         */
        this.ReserveValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReserveValue = 'ReserveValue' in params ? params.ReserveValue : null;

    }
}

/**
 * CreateGameServerSession response structure.
 * @class
 */
class CreateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePlayerSessions request structure.
 * @class
 */
class DescribePlayerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Player ID. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * Player session status. Valid values: RESERVED, ACTIVE, COMPLETED, TIMEDOUT
         * @type {string || null}
         */
        this.PlayerSessionStatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.PlayerSessionStatusFilter = 'PlayerSessionStatusFilter' in params ? params.PlayerSessionStatusFilter : null;

    }
}

/**
 * UpdateBucketCORSOpt request structure.
 * @class
 */
class UpdateBucketCORSOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allowed access source. For details, see [COS Documentation](https://intl.cloud.tencent.com/document/product/436/8279?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.AllowedOrigins = null;

        /**
         * Allowed HTTP method(s). Multiple methods are allowed, including PUT, GET, POST, and HEAD. For details, see [COS Documentation](https://intl.cloud.tencent.com/document/product/436/8279?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.AllowedMethods = null;

        /**
         * Specifies the custom HTTP request headers that the browser is allowed to include in a CORS request. Wildcard (*) is supported, indicating allowing all headers (recommended). For details, see [COS Documentation](https://intl.cloud.tencent.com/document/product/436/8279?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.AllowedHeaders = null;

        /**
         * Sets the validity duration for the CORS configuration (in second). For details, see [COS Documentation](https://intl.cloud.tencent.com/document/product/436/8279?from_cn_redirect=1).
         * @type {number || null}
         */
        this.MaxAgeSeconds = null;

        /**
         * CORS response header(s) that can be exposed to the browser, case-insensitive. If this parameter is not specified, the browser can access only simple response headers Cache-Control, Content-Type, Expires, and Last-Modified by default. For details, see [COS Documentation](https://intl.cloud.tencent.com/document/product/436/8279?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.ExposeHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllowedOrigins = 'AllowedOrigins' in params ? params.AllowedOrigins : null;
        this.AllowedMethods = 'AllowedMethods' in params ? params.AllowedMethods : null;
        this.AllowedHeaders = 'AllowedHeaders' in params ? params.AllowedHeaders : null;
        this.MaxAgeSeconds = 'MaxAgeSeconds' in params ? params.MaxAgeSeconds : null;
        this.ExposeHeaders = 'ExposeHeaders' in params ? params.ExposeHeaders : null;

    }
}

/**
 * The recurrence pattern of auto-scaling
 * @class
 */
class TimerConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recurrence pattern of auto-scaling. `0`: undefined, `1`: once, `2`: daily, `3`: monthly, `4`: weekly
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimerType = null;

        /**
         * Details of the recurrence pattern of auto-scaling
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {TimerValue || null}
         */
        this.TimerValue = null;

        /**
         * Start time of the scheduled scaling policy
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the scheduled scaling policy
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.TimerType = 'TimerType' in params ? params.TimerType : null;

        if (params.TimerValue) {
            let obj = new TimerValue();
            obj.deserialize(params.TimerValue)
            this.TimerValue = obj;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Runtime configuration
 * @class
 */
class RuntimeConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game session timeout. Value range: 1-600. Unit: second.
         * @type {number || null}
         */
        this.GameServerSessionActivationTimeoutSeconds = null;

        /**
         * Maximum number of game sessions. Value range: 1-2,147,483,647.
         * @type {number || null}
         */
        this.MaxConcurrentGameServerSessionActivations = null;

        /**
         * Service process configuration. There must be at least one service configuration.
         * @type {Array.<ServerProcesse> || null}
         */
        this.ServerProcesses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionActivationTimeoutSeconds = 'GameServerSessionActivationTimeoutSeconds' in params ? params.GameServerSessionActivationTimeoutSeconds : null;
        this.MaxConcurrentGameServerSessionActivations = 'MaxConcurrentGameServerSessionActivations' in params ? params.MaxConcurrentGameServerSessionActivations : null;

        if (params.ServerProcesses) {
            this.ServerProcesses = new Array();
            for (let z in params.ServerProcesses) {
                let obj = new ServerProcesse();
                obj.deserialize(params.ServerProcesses[z]);
                this.ServerProcesses.push(obj);
            }
        }

    }
}

/**
 * DeleteTimerScalingPolicy request structure.
 * @class
 */
class DeleteTimerScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the policy
         * @type {string || null}
         */
        this.TimerId = null;

        /**
         * ID of the fleet to be bound with the policy
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Scheduled scaling policy name
         * @type {string || null}
         */
        this.TimerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimerId = 'TimerId' in params ? params.TimerId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.TimerName = 'TimerName' in params ? params.TimerName : null;

    }
}

/**
 * JoinGameServerSession response structure.
 * @class
 */
class JoinGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PlayerSession || null}
         */
        this.PlayerSession = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PlayerSession) {
            let obj = new PlayerSession();
            obj.deserialize(params.PlayerSession)
            this.PlayerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player game session information
 * @class
 */
class DesiredPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique player ID associated with player session
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Developer-defined player data
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * SearchGameServerSessions response structure.
 * @class
 */
class SearchGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessionPlacement request structure.
 * @class
 */
class DescribeGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of game server session placement
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * SearchGameServerSessions request structure.
 * @class
 */
class SearchGameServerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Search filter expression. Valid values:
gameServerSessionName: game session name in `String` type
gameServerSessionId: game session ID in `String` type
maximumSessions: maximum number of player sessions in `Number` type
creationTimeMillis: creation time in milliseconds in `Number` type
playerSessionCount: current number of player sessions in `Number` type
hasAvailablePlayerSessions: whether there is available player session in `String` type. Valid values: true, false
gameServerSessionProperties: game session attributes in `String` type

Expressions in `String` type support = and <> for judgment
Expressions in `Number` type support =, <>, >, >=, <, and <= for judgment

Example:
If FilterExpression takes the value:
playerSessionCount>=2 AND hasAvailablePlayerSessions=true"
It means searching for game sessions that have at least two players and have player sessions available.
If FilterExpression takes the value:
gameServerSessionProperties.K1 = 'V1' AND gameServerSessionProperties.K2 = 'V2' OR gameServerSessionProperties.K3 = 'V3'

it means
searching for game sessions that meets the following game server session attributes
{
    "GameProperties":[
        {
            "Key":"K1",
            "Value":"V1"
        },
        {
            "Key":"K2",
            "Value":"V2"
        },
        {
            "Key":"K3",
            "Value":"V3"
        }
    ]
}
         * @type {string || null}
         */
        this.FilterExpression = null;

        /**
         * Sorting keyword
Valid values:
gameServerSessionName: game session name in `String` type
gameServerSessionId: game session ID in `String` type
maximumSessions: maximum number of player sessions in `Number` type
creationTimeMillis: creation time in milliseconds in `Number` type
playerSessionCount: current number of player sessions in `Number` type
         * @type {string || null}
         */
        this.SortExpression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.FilterExpression = 'FilterExpression' in params ? params.FilterExpression : null;
        this.SortExpression = 'SortExpression' in params ? params.SortExpression : null;

    }
}

/**
 * Deployed player game session
 * @class
 */
class PlacedPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player ID
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;

    }
}

/**
 * Game session deployment object
 * @class
 */
class GameServerSessionPlacement extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deployment ID
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * Service deployment group name
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * Player latency
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

        /**
         * Service deployment status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNS ID assigned to the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Game session ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Game session name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * Service deployment region
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionRegion = null;

        /**
         * Game attributes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The maximum number of players that can be connected simultaneously to the game session. It should a value between 1 to the maximum number of player sessions.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Game session data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * IP address of the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Port number of the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Game match data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * Deployed player game data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlacedPlayerSession> || null}
         */
        this.PlacedPlayerSessions = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        this.GameServerSessionRegion = 'GameServerSessionRegion' in params ? params.GameServerSessionRegion : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;

        if (params.PlacedPlayerSessions) {
            this.PlacedPlayerSessions = new Array();
            for (let z in params.PlacedPlayerSessions) {
                let obj = new PlacedPlayerSession();
                obj.deserialize(params.PlacedPlayerSessions[z]);
                this.PlacedPlayerSessions.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * JoinGameServerSessionBatch request structure.
 * @class
 */
class JoinGameServerSessionBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Player ID list. At least 1 ID and up to 25 IDs.
         * @type {Array.<string> || null}
         */
        this.PlayerIds = null;

        /**
         * Player custom data
         * @type {PlayerDataMap || null}
         */
        this.PlayerDataMap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerIds = 'PlayerIds' in params ? params.PlayerIds : null;

        if (params.PlayerDataMap) {
            let obj = new PlayerDataMap();
            obj.deserialize(params.PlayerDataMap)
            this.PlayerDataMap = obj;
        }

    }
}

/**
 * UpdateGameServerSession response structure.
 * @class
 */
class UpdateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Updated game session
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player session details
 * @class
 */
class PlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * ID of the DNS where the game server session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Address of the CVM instance where the game server session is running
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Player custom data. Up to 2048 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerData = null;

        /**
         * Player ID. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * Port number. It should be a value between 1 to 60000.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Player session status. Valid values: RESERVED = 1, ACTIVE = 2, COMPLETED =3, TIMEDOUT = 4
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Player session termination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TerminationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;

    }
}

/**
 * CreateGameServerSession request structure.
 * @class
 */
class CreateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Alias ID. You need to specify an alias ID or fleet ID for each request. If both of them are specified, the fleet ID shall prevail.
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Creator ID. Up to 1024 ASCII characters are allowed.
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * Fleet ID. You need to specify an alias ID or fleet ID for each request. If both of them are specified, the fleet ID shall prevail.
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game attributes. Up to 16 groups of attributes are allowed.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The attribute details of game server session. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * The custom ID of game server session. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Idempotency token. Up to 48 ASCII characters are allowed.
         * @type {string || null}
         */
        this.IdempotencyToken = null;

        /**
         * The name of game server session. Up to 1024 ASCII characters are allowed.
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
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IdempotencyToken = 'IdempotencyToken' in params ? params.IdempotencyToken : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetGameServerSessionLogUrl response structure.
 * @class
 */
class GetGameServerSessionLogUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log download URL. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PreSignedUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateBucketAccelerateOpt request structure.
 * @class
 */
class UpdateBucketAccelerateOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `true`: enable global acceleration; `false`: disable global acceleration
         * @type {boolean || null}
         */
        this.Allowed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Allowed = 'Allowed' in params ? params.Allowed : null;

    }
}

/**
 * Game server session details (GameServerSessionDetail)
 * @class
 */
class GameServerSessionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

        /**
         * Protection policy. Valid values: NoProtection, FullProtection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * UpdateBucketAccelerateOpt response structure.
 * @class
 */
class UpdateBucketAccelerateOptResponse extends  AbstractModel {
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
 * DescribeGameServerSessionDetails request structure.
 * @class
 */
class DescribeGameServerSessionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * StartGameServerSessionPlacement request structure.
 * @class
 */
class StartGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the game server session placement. It should contain up to 48 ASCII characters, supporting [a-zA-Z0-9-]+.
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * Game server session queue name
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * The maximum number of players that can be connected simultaneously to the game session. It should a value between 1 to the maximum number of player sessions.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Player game session information
         * @type {Array.<DesiredPlayerSession> || null}
         */
        this.DesiredPlayerSessions = null;

        /**
         * Player game session attributes
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * Data of game server sessions. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * Name of game server sessions. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * Player latency
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;

        if (params.DesiredPlayerSessions) {
            this.DesiredPlayerSessions = new Array();
            for (let z in params.DesiredPlayerSessions) {
                let obj = new DesiredPlayerSession();
                obj.deserialize(params.DesiredPlayerSessions[z]);
                this.DesiredPlayerSessions.push(obj);
            }
        }

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }

    }
}

/**
 * Game session details
 * @class
 */
class GameServerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Creator ID. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * The current number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.CurrentPlayerSessionCount = null;

        /**
         * CVM DNS ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game attributes. Up to 16 groups of attributes are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The attribute details of game server session. Up to 4096 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * CVM IP address
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Battle progress details. Up to 400,000 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * The name of game server session. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player session creation policy. Valid values: ACCEPT_ALL, DENY_ALL
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * Port number. It should be a value between 1 to 60000.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Additional information of game server session status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * Termination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TerminationTime = null;

        /**
         * Instance type. Up to 128 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Current custom count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentCustomCount = null;

        /**
         * Maximum custom count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxCustomCount = null;

        /**
         * Weight
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Session availability status, i.e., whether it is blocked. Valid value: Enable, Disable
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AvailabilityStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.CurrentPlayerSessionCount = 'CurrentPlayerSessionCount' in params ? params.CurrentPlayerSessionCount : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.CurrentCustomCount = 'CurrentCustomCount' in params ? params.CurrentCustomCount : null;
        this.MaxCustomCount = 'MaxCustomCount' in params ? params.MaxCustomCount : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.AvailabilityStatus = 'AvailabilityStatus' in params ? params.AvailabilityStatus : null;

    }
}

/**
 * DescribeGameServerSessionDetails response structure.
 * @class
 */
class DescribeGameServerSessionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of game server session details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSessionDetail> || null}
         */
        this.GameServerSessionDetails = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessionDetails) {
            this.GameServerSessionDetails = new Array();
            for (let z in params.GameServerSessionDetails) {
                let obj = new GameServerSessionDetail();
                obj.deserialize(params.GameServerSessionDetails[z]);
                this.GameServerSessionDetails.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessionPlacement response structure.
 * @class
 */
class DescribeGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag structure
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key. Up to 127 bytes are allowed.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value. Up to 255 bytes are allowed.
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
 * JoinGameServerSessionBatch response structure.
 * @class
 */
class JoinGameServerSessionBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session list. Up to 25 sessions.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player custom data
 * @class
 */
class PlayerDataMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key of player custom data. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The value of player custom data. It should contain 1 to 2048 ASCII characters.
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
 * Resource creation policy
 * @class
 */
class ResourceCreationLimitPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation quantity. Minimum value: 1. Default value: 2.
         * @type {number || null}
         */
        this.NewGameServerSessionsPerCreator = null;

        /**
         * Unit time. Minimum value: 1. Default value: 3. Unit: minute.
         * @type {number || null}
         */
        this.PolicyPeriodInMinutes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewGameServerSessionsPerCreator = 'NewGameServerSessionsPerCreator' in params ? params.NewGameServerSessionsPerCreator : null;
        this.PolicyPeriodInMinutes = 'PolicyPeriodInMinutes' in params ? params.PolicyPeriodInMinutes : null;

    }
}

/**
 * StopGameServerSessionPlacement response structure.
 * @class
 */
class StopGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutTimerScalingPolicy request structure.
 * @class
 */
class PutTimerScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration of the scheduled scaling policy
         * @type {TimerScalingPolicy || null}
         */
        this.TimerScalingPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TimerScalingPolicy) {
            let obj = new TimerScalingPolicy();
            obj.deserialize(params.TimerScalingPolicy)
            this.TimerScalingPolicy = obj;
        }

    }
}

/**
 * Identity credentials for instance access
 * @class
 */
class InstanceAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credentials required for instance access
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * Service deployment ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Public IP of instance
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * OS
         * @type {string || null}
         */
        this.OperatingSystem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

    }
}

module.exports = {
    GameProperty: GameProperty,
    DeleteTimerScalingPolicyResponse: DeleteTimerScalingPolicyResponse,
    DescribeTimerScalingPoliciesRequest: DescribeTimerScalingPoliciesRequest,
    FleetAttributes: FleetAttributes,
    TargetConfiguration: TargetConfiguration,
    InboundPermission: InboundPermission,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    GetInstanceAccessResponse: GetInstanceAccessResponse,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribePlayerSessionsResponse: DescribePlayerSessionsResponse,
    UpdateBucketCORSOptResponse: UpdateBucketCORSOptResponse,
    DescribeTimerScalingPoliciesResponse: DescribeTimerScalingPoliciesResponse,
    SetServerReservedResponse: SetServerReservedResponse,
    ServerProcesse: ServerProcesse,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    TimerScalingPolicy: TimerScalingPolicy,
    TimerFleetCapacity: TimerFleetCapacity,
    CopyFleetRequest: CopyFleetRequest,
    TimerValue: TimerValue,
    CopyFleetResponse: CopyFleetResponse,
    GetInstanceAccessRequest: GetInstanceAccessRequest,
    DescribeGameServerSessionsRequest: DescribeGameServerSessionsRequest,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    PutTimerScalingPolicyResponse: PutTimerScalingPolicyResponse,
    PlayerLatency: PlayerLatency,
    DiskInfo: DiskInfo,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    Credentials: Credentials,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    SetServerReservedRequest: SetServerReservedRequest,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribePlayerSessionsRequest: DescribePlayerSessionsRequest,
    UpdateBucketCORSOptRequest: UpdateBucketCORSOptRequest,
    TimerConfiguration: TimerConfiguration,
    RuntimeConfiguration: RuntimeConfiguration,
    DeleteTimerScalingPolicyRequest: DeleteTimerScalingPolicyRequest,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    DesiredPlayerSession: DesiredPlayerSession,
    SearchGameServerSessionsResponse: SearchGameServerSessionsResponse,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    SearchGameServerSessionsRequest: SearchGameServerSessionsRequest,
    PlacedPlayerSession: PlacedPlayerSession,
    GameServerSessionPlacement: GameServerSessionPlacement,
    JoinGameServerSessionBatchRequest: JoinGameServerSessionBatchRequest,
    UpdateGameServerSessionResponse: UpdateGameServerSessionResponse,
    PlayerSession: PlayerSession,
    CreateGameServerSessionRequest: CreateGameServerSessionRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    UpdateBucketAccelerateOptRequest: UpdateBucketAccelerateOptRequest,
    GameServerSessionDetail: GameServerSessionDetail,
    UpdateBucketAccelerateOptResponse: UpdateBucketAccelerateOptResponse,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    GameServerSession: GameServerSession,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    Tag: Tag,
    JoinGameServerSessionBatchResponse: JoinGameServerSessionBatchResponse,
    PlayerDataMap: PlayerDataMap,
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicy,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,
    PutTimerScalingPolicyRequest: PutTimerScalingPolicyRequest,
    InstanceAccess: InstanceAccess,

}
