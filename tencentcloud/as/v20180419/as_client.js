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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DisableAutoScalingGroupResponse = models.DisableAutoScalingGroupResponse;
const ModifyLaunchConfigurationAttributesRequest = models.ModifyLaunchConfigurationAttributesRequest;
const DisableAutoScalingGroupRequest = models.DisableAutoScalingGroupRequest;
const ModifyAutoScalingGroupRequest = models.ModifyAutoScalingGroupRequest;
const ScaleOutInstancesRequest = models.ScaleOutInstancesRequest;
const AutoScalingNotification = models.AutoScalingNotification;
const ModifyScheduledActionRequest = models.ModifyScheduledActionRequest;
const DescribeAutoScalingGroupsRequest = models.DescribeAutoScalingGroupsRequest;
const LaunchConfiguration = models.LaunchConfiguration;
const DescribeAccountLimitsResponse = models.DescribeAccountLimitsResponse;
const CreateLaunchConfigurationResponse = models.CreateLaunchConfigurationResponse;
const Advice = models.Advice;
const CreateLifecycleHookResponse = models.CreateLifecycleHookResponse;
const ClearLaunchConfigurationAttributesResponse = models.ClearLaunchConfigurationAttributesResponse;
const DescribeAutoScalingGroupsResponse = models.DescribeAutoScalingGroupsResponse;
const CreateScheduledActionRequest = models.CreateScheduledActionRequest;
const SystemDisk = models.SystemDisk;
const SpotMarketOptions = models.SpotMarketOptions;
const StopAutoScalingInstancesResponse = models.StopAutoScalingInstancesResponse;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const InstanceNameSettings = models.InstanceNameSettings;
const DetailedStatusMessage = models.DetailedStatusMessage;
const ModifyScheduledActionResponse = models.ModifyScheduledActionResponse;
const AttachLoadBalancersResponse = models.AttachLoadBalancersResponse;
const ExecuteScalingPolicyResponse = models.ExecuteScalingPolicyResponse;
const DeleteAutoScalingGroupRequest = models.DeleteAutoScalingGroupRequest;
const SetInstancesProtectionResponse = models.SetInstancesProtectionResponse;
const StartAutoScalingInstancesResponse = models.StartAutoScalingInstancesResponse;
const CompleteLifecycleActionRequest = models.CompleteLifecycleActionRequest;
const CreateScalingPolicyResponse = models.CreateScalingPolicyResponse;
const CreateNotificationConfigurationResponse = models.CreateNotificationConfigurationResponse;
const DescribeLaunchConfigurationsResponse = models.DescribeLaunchConfigurationsResponse;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const Tag = models.Tag;
const DetachLoadBalancersRequest = models.DetachLoadBalancersRequest;
const DescribeAutoScalingInstancesRequest = models.DescribeAutoScalingInstancesRequest;
const ModifyLoadBalancersRequest = models.ModifyLoadBalancersRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const ModifyScalingPolicyResponse = models.ModifyScalingPolicyResponse;
const SetInstancesProtectionRequest = models.SetInstancesProtectionRequest;
const DeleteNotificationConfigurationResponse = models.DeleteNotificationConfigurationResponse;
const DetachInstancesResponse = models.DetachInstancesResponse;
const ModifyLaunchConfigurationAttributesResponse = models.ModifyLaunchConfigurationAttributesResponse;
const CreateLaunchConfigurationRequest = models.CreateLaunchConfigurationRequest;
const AutoScalingGroup = models.AutoScalingGroup;
const AttachInstancesResponse = models.AttachInstancesResponse;
const DescribeAutoScalingGroupLastActivitiesResponse = models.DescribeAutoScalingGroupLastActivitiesResponse;
const DescribeAccountLimitsRequest = models.DescribeAccountLimitsRequest;
const UpgradeLifecycleHookRequest = models.UpgradeLifecycleHookRequest;
const DetachLoadBalancersResponse = models.DetachLoadBalancersResponse;
const ScalingPolicy = models.ScalingPolicy;
const DescribeAutoScalingGroupLastActivitiesRequest = models.DescribeAutoScalingGroupLastActivitiesRequest;
const HostNameSettings = models.HostNameSettings;
const ModifyLoadBalancersResponse = models.ModifyLoadBalancersResponse;
const CreateNotificationConfigurationRequest = models.CreateNotificationConfigurationRequest;
const DescribeScheduledActionsResponse = models.DescribeScheduledActionsResponse;
const DeleteLifecycleHookRequest = models.DeleteLifecycleHookRequest;
const ModifyLoadBalancerTargetAttributesResponse = models.ModifyLoadBalancerTargetAttributesResponse;
const ModifyAutoScalingGroupResponse = models.ModifyAutoScalingGroupResponse;
const DeleteLaunchConfigurationRequest = models.DeleteLaunchConfigurationRequest;
const InvocationResult = models.InvocationResult;
const ModifyScalingPolicyRequest = models.ModifyScalingPolicyRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const UpgradeLifecycleHookResponse = models.UpgradeLifecycleHookResponse;
const InstanceTag = models.InstanceTag;
const ModifyLifecycleHookResponse = models.ModifyLifecycleHookResponse;
const LifecycleCommand = models.LifecycleCommand;
const DescribeAutoScalingAdvicesResponse = models.DescribeAutoScalingAdvicesResponse;
const CreateAutoScalingGroupRequest = models.CreateAutoScalingGroupRequest;
const DeleteScheduledActionResponse = models.DeleteScheduledActionResponse;
const UpgradeLaunchConfigurationRequest = models.UpgradeLaunchConfigurationRequest;
const DescribeAutoScalingActivitiesResponse = models.DescribeAutoScalingActivitiesResponse;
const DescribeNotificationConfigurationsResponse = models.DescribeNotificationConfigurationsResponse;
const DataDisk = models.DataDisk;
const DeleteScalingPolicyRequest = models.DeleteScalingPolicyRequest;
const LoginSettings = models.LoginSettings;
const CreateAutoScalingGroupFromInstanceResponse = models.CreateAutoScalingGroupFromInstanceResponse;
const DetachInstancesRequest = models.DetachInstancesRequest;
const Instance = models.Instance;
const DescribeAutoScalingInstancesResponse = models.DescribeAutoScalingInstancesResponse;
const EnhancedService = models.EnhancedService;
const RunAutomationServiceEnabled = models.RunAutomationServiceEnabled;
const DeleteLaunchConfigurationResponse = models.DeleteLaunchConfigurationResponse;
const IPv6InternetAccessible = models.IPv6InternetAccessible;
const DescribeScheduledActionsRequest = models.DescribeScheduledActionsRequest;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DeleteScheduledActionRequest = models.DeleteScheduledActionRequest;
const DescribeAutoScalingActivitiesRequest = models.DescribeAutoScalingActivitiesRequest;
const ModifyDesiredCapacityRequest = models.ModifyDesiredCapacityRequest;
const CreateScheduledActionResponse = models.CreateScheduledActionResponse;
const CreateLifecycleHookRequest = models.CreateLifecycleHookRequest;
const ScheduledAction = models.ScheduledAction;
const ModifyLifecycleHookRequest = models.ModifyLifecycleHookRequest;
const CompleteLifecycleActionResponse = models.CompleteLifecycleActionResponse;
const ScaleOutInstancesResponse = models.ScaleOutInstancesResponse;
const Filter = models.Filter;
const DescribeLifecycleHooksRequest = models.DescribeLifecycleHooksRequest;
const ServiceSettings = models.ServiceSettings;
const CreateAutoScalingGroupResponse = models.CreateAutoScalingGroupResponse;
const TargetAttribute = models.TargetAttribute;
const ModifyNotificationConfigurationResponse = models.ModifyNotificationConfigurationResponse;
const LimitedLoginSettings = models.LimitedLoginSettings;
const DescribeLifecycleHooksResponse = models.DescribeLifecycleHooksResponse;
const CreateScalingPolicyRequest = models.CreateScalingPolicyRequest;
const ScaleInInstancesResponse = models.ScaleInInstancesResponse;
const DescribeAutoScalingAdvicesRequest = models.DescribeAutoScalingAdvicesRequest;
const DeleteNotificationConfigurationRequest = models.DeleteNotificationConfigurationRequest;
const DescribeLaunchConfigurationsRequest = models.DescribeLaunchConfigurationsRequest;
const NotificationTarget = models.NotificationTarget;
const ModifyLoadBalancerTargetAttributesRequest = models.ModifyLoadBalancerTargetAttributesRequest;
const DeleteAutoScalingGroupResponse = models.DeleteAutoScalingGroupResponse;
const LifecycleActionResultInfo = models.LifecycleActionResultInfo;
const AutoScalingGroupAbstract = models.AutoScalingGroupAbstract;
const EnableAutoScalingGroupRequest = models.EnableAutoScalingGroupRequest;
const MetricAlarm = models.MetricAlarm;
const DescribeNotificationConfigurationsRequest = models.DescribeNotificationConfigurationsRequest;
const ScaleInInstancesRequest = models.ScaleInInstancesRequest;
const LifecycleHook = models.LifecycleHook;
const ForwardLoadBalancer = models.ForwardLoadBalancer;
const ClearLaunchConfigurationAttributesRequest = models.ClearLaunchConfigurationAttributesRequest;
const ForwardLoadBalancerIdentification = models.ForwardLoadBalancerIdentification;
const AutoScalingAdvice = models.AutoScalingAdvice;
const StartAutoScalingInstancesRequest = models.StartAutoScalingInstancesRequest;
const AttachInstancesRequest = models.AttachInstancesRequest;
const AttachLoadBalancersRequest = models.AttachLoadBalancersRequest;
const SpotMixedAllocationPolicy = models.SpotMixedAllocationPolicy;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const Activity = models.Activity;
const ModifyDesiredCapacityResponse = models.ModifyDesiredCapacityResponse;
const StopAutoScalingInstancesRequest = models.StopAutoScalingInstancesRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ModifyNotificationConfigurationRequest = models.ModifyNotificationConfigurationRequest;
const ActivtyRelatedInstance = models.ActivtyRelatedInstance;
const CreateAutoScalingGroupFromInstanceRequest = models.CreateAutoScalingGroupFromInstanceRequest;
const InternetAccessible = models.InternetAccessible;
const EnableAutoScalingGroupResponse = models.EnableAutoScalingGroupResponse;
const UpgradeLaunchConfigurationResponse = models.UpgradeLaunchConfigurationResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DeleteLifecycleHookResponse = models.DeleteLifecycleHookResponse;
const ExecuteScalingPolicyRequest = models.ExecuteScalingPolicyRequest;


/**
 * as client
 * @class
 */
class AsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("as.tencentcloudapi.com", "2018-04-19", credential, region, profile);
    }
    
    /**
     * This API (ExecuteScalingPolicy) is used to execute a scaling policy.

* The scaling policy can be executed based on the scaling policy ID.
* When the auto scaling group to which the scaling policy belongs is performing a scaling activity, the scaling policy will be rejected.
     * @param {ExecuteScalingPolicyRequest} req
     * @param {function(string, ExecuteScalingPolicyResponse):void} cb
     * @public
     */
    ExecuteScalingPolicy(req, cb) {
        let resp = new ExecuteScalingPolicyResponse();
        this.request("ExecuteScalingPolicy", req, resp, cb);
    }

    /**
     * This API (CreateAutoScalingGroup) is used to create an auto scaling group.
     * @param {CreateAutoScalingGroupRequest} req
     * @param {function(string, CreateAutoScalingGroupResponse):void} cb
     * @public
     */
    CreateAutoScalingGroup(req, cb) {
        let resp = new CreateAutoScalingGroupResponse();
        this.request("CreateAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API is used to clear specific attributes of the launch configuration.
     * @param {ClearLaunchConfigurationAttributesRequest} req
     * @param {function(string, ClearLaunchConfigurationAttributesResponse):void} cb
     * @public
     */
    ClearLaunchConfigurationAttributes(req, cb) {
        let resp = new ClearLaunchConfigurationAttributesResponse();
        this.request("ClearLaunchConfigurationAttributes", req, resp, cb);
    }

    /**
     * This API (ModifyScalingPolicy) is used to modify an alarm trigger policy.
     * @param {ModifyScalingPolicyRequest} req
     * @param {function(string, ModifyScalingPolicyResponse):void} cb
     * @public
     */
    ModifyScalingPolicy(req, cb) {
        let resp = new ModifyScalingPolicyResponse();
        this.request("ModifyScalingPolicy", req, resp, cb);
    }

    /**
     * This API is used to modify the target rule attributes of the CLB in the scaling group.
     * @param {ModifyLoadBalancerTargetAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerTargetAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerTargetAttributes(req, cb) {
        let resp = new ModifyLoadBalancerTargetAttributesResponse();
        this.request("ModifyLoadBalancerTargetAttributes", req, resp, cb);
    }

    /**
     * This API (DescribeNotificationConfigurations) is used to query the information of one or more notifications.

You can query the details of notifications based on information such as notification ID and auto scaling group ID. For more information on filters, see `Filter`.
If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of notifications of the current user will be returned.
     * @param {DescribeNotificationConfigurationsRequest} req
     * @param {function(string, DescribeNotificationConfigurationsResponse):void} cb
     * @public
     */
    DescribeNotificationConfigurations(req, cb) {
        let resp = new DescribeNotificationConfigurationsResponse();
        this.request("DescribeNotificationConfigurations", req, resp, cb);
    }

    /**
     * This API (DeleteAutoScalingGroup) is used to delete the specified auto scaling group that has no instances and remains inactive.
     * @param {DeleteAutoScalingGroupRequest} req
     * @param {function(string, DeleteAutoScalingGroupResponse):void} cb
     * @public
     */
    DeleteAutoScalingGroup(req, cb) {
        let resp = new DeleteAutoScalingGroupResponse();
        this.request("DeleteAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API is used to add the specified number of instances to the scaling group, which returns the scaling activity ID `ActivityId`.
* There is no on going scaling task.
* This API is valid even when the scaling group is disabled. For more details, see [DisableAutoScalingGroup](https://intl.cloud.tencent.com/document/api/377/20435?from_cn_redirect=1).
* The desired capacity will be increased accordingly. The new desired capacity should be no more than the maximum capacity.
* If the scale-out activity failed or partially succeeded, the final desired capacity only includes the instances that have been added successfully.
     * @param {ScaleOutInstancesRequest} req
     * @param {function(string, ScaleOutInstancesResponse):void} cb
     * @public
     */
    ScaleOutInstances(req, cb) {
        let resp = new ScaleOutInstancesResponse();
        this.request("ScaleOutInstances", req, resp, cb);
    }

    /**
     * This API is used to start up CVM instances in a scaling group.
* After startup, the instance will be in the `IN_SERVICE` status, which will increase the desired capacity. Please note that the desired capacity cannot exceed the maximum value.
* This API supports batch operation. Up to 100 instances can be started up in each request.
     * @param {StartAutoScalingInstancesRequest} req
     * @param {function(string, StartAutoScalingInstancesResponse):void} cb
     * @public
     */
    StartAutoScalingInstances(req, cb) {
        let resp = new StartAutoScalingInstancesResponse();
        this.request("StartAutoScalingInstances", req, resp, cb);
    }

    /**
     * This API is used to upgrade a launch configuration.

* This API is used to upgrade a launch configuration in a "completely overriding" manner, i.e., it uniformly sets a new configuration according to the API parameters regardless of the original parameters. If optional fields are left empty, their default values will be used.
* After the launch configuration is upgraded, the existing instances that have been created by it will not be changed, but new instances will be created according to the new configuration.
     * @param {UpgradeLaunchConfigurationRequest} req
     * @param {function(string, UpgradeLaunchConfigurationResponse):void} cb
     * @public
     */
    UpgradeLaunchConfiguration(req, cb) {
        let resp = new UpgradeLaunchConfigurationResponse();
        this.request("UpgradeLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API is used to modify the lifecycle hook.
     * @param {ModifyLifecycleHookRequest} req
     * @param {function(string, ModifyLifecycleHookResponse):void} cb
     * @public
     */
    ModifyLifecycleHook(req, cb) {
        let resp = new ModifyLifecycleHookResponse();
        this.request("ModifyLifecycleHook", req, resp, cb);
    }

    /**
     * This API is used to unbind one or more CLBs from a scaling group. This API will not terminate CLBs.
     * @param {DetachLoadBalancersRequest} req
     * @param {function(string, DetachLoadBalancersResponse):void} cb
     * @public
     */
    DetachLoadBalancers(req, cb) {
        let resp = new DetachLoadBalancersResponse();
        this.request("DetachLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to add CVM instances to an auto scaling group.
* Only CVM instances in `RUNNING` or `STOPPED` status can be added.
* The added CVM instances must in the same VPC as the scaling group.

     * @param {AttachInstancesRequest} req
     * @param {function(string, AttachInstancesResponse):void} cb
     * @public
     */
    AttachInstances(req, cb) {
        let resp = new AttachInstancesResponse();
        this.request("AttachInstances", req, resp, cb);
    }

    /**
     * This API (DescribeScalingPolicies) is used to query alarm trigger policies.
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * This API (DeleteScheduledAction) is used to delete the specified scheduled task.
     * @param {DeleteScheduledActionRequest} req
     * @param {function(string, DeleteScheduledActionResponse):void} cb
     * @public
     */
    DeleteScheduledAction(req, cb) {
        let resp = new DeleteScheduledActionResponse();
        this.request("DeleteScheduledAction", req, resp, cb);
    }

    /**
     * This API is used to add CLBs to a security group.
     * @param {AttachLoadBalancersRequest} req
     * @param {function(string, AttachLoadBalancersResponse):void} cb
     * @public
     */
    AttachLoadBalancers(req, cb) {
        let resp = new AttachLoadBalancersResponse();
        this.request("AttachLoadBalancers", req, resp, cb);
    }

    /**
     * This API is used to remove CVM instances from a scaling group. Instances removed via this API will not be terminated.
* If the number of remaining `IN_SERVICE` instances in the scaling group is less than the minimum capacity, this API will return an error.
* However, if the scaling group is in `DISABLED` status, the removal will not verify the relationship between the number of `IN_SERVICE` instances and the minimum capacity.
* This removal will unassociate the CVM from the CLB instance that has been configured for the scaling group.
     * @param {DetachInstancesRequest} req
     * @param {function(string, DetachInstancesResponse):void} cb
     * @public
     */
    DetachInstances(req, cb) {
        let resp = new DetachInstancesResponse();
        this.request("DetachInstances", req, resp, cb);
    }

    /**
     * This API is used to reduce the specified number of instances from the scaling group.
* There is no on going scaling task.
* This API is valid even when the scaling group is disabled. For more details, see [DisableAutoScalingGroup](https://intl.cloud.tencent.com/document/api/377/20435?from_cn_redirect=1).
* You can specify the instances to remove in the scale-in activity by using `TerminationPolicies`. For more information, see [Scaling In Policies](https://intl.cloud.tencent.com/document/product/377/8563?from_cn_redirect=1).
* Only the `IN_SERVICE` instances will be reduced. To reduce instances in other statues, use the [`DetachInstances`](https://intl.cloud.tencent.com/document/api/377/20436?from_cn_redirect=1) or [`RemoveInstances`](https://intl.cloud.tencent.com/document/api/377/20431?from_cn_redirect=1) API.
* The desired capacity will be reduced accordingly. The new desired capacity should be no less than the minimum capacity.
* If the scale-in activity failed or partially succeeded, the final desired capacity only deducts the instances that have been reduced successfully.
     * @param {ScaleInInstancesRequest} req
     * @param {function(string, ScaleInInstancesResponse):void} cb
     * @public
     */
    ScaleInInstances(req, cb) {
        let resp = new ScaleInInstancesResponse();
        this.request("ScaleInInstances", req, resp, cb);
    }

    /**
     * This API (CreateScheduledAction) is used to create a scheduled task.
     * @param {CreateScheduledActionRequest} req
     * @param {function(string, CreateScheduledActionResponse):void} cb
     * @public
     */
    CreateScheduledAction(req, cb) {
        let resp = new CreateScheduledActionResponse();
        this.request("CreateScheduledAction", req, resp, cb);
    }

    /**
     * This API is used to query suggestions for scaling group configurations.
     * @param {DescribeAutoScalingAdvicesRequest} req
     * @param {function(string, DescribeAutoScalingAdvicesResponse):void} cb
     * @public
     */
    DescribeAutoScalingAdvices(req, cb) {
        let resp = new DescribeAutoScalingAdvicesResponse();
        this.request("DescribeAutoScalingAdvices", req, resp, cb);
    }

    /**
     * This API is used to delete CVM instances from a scaling group. Instances that are automatically created through AS will be terminated, while those manually added to the scaling group will be removed and retained.
* If the number of remaining `IN_SERVICE` instances in the scaling group is less than the minimum capacity, this API will return an error.
* However, if the scaling group is in `DISABLED` status, the removal will not verify the relationship between the number of `IN_SERVICE` instances and the minimum capacity.
* This removal will unassociate the CVM from the CLB instance that has been configured for the scaling group.
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        let resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }

    /**
     * This API (DeleteScalingPolicy) is used to delete an alarm trigger policy.
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * This API (CompleteLifecycleAction) is used to complete a lifecycle action.

* The result ("CONTINUE" or "ABANDON") of a specific lifecycle hook can be specified by calling this API. If this API is not called at all, the lifecycle hook will be processed based on the "DefaultResult" after timeout.

     * @param {CompleteLifecycleActionRequest} req
     * @param {function(string, CompleteLifecycleActionResponse):void} cb
     * @public
     */
    CompleteLifecycleAction(req, cb) {
        let resp = new CompleteLifecycleActionResponse();
        this.request("CompleteLifecycleAction", req, resp, cb);
    }

    /**
     * This API is used to modify the cloud load balancers of a scaling group.

* This API can specify a new cloud load balancer configuration for the scaling group. The new configuration overwrites the original load balancer configuration.
* To clear the cloud load balancer of the scaling group, specify only the scaling group ID but not the specific cloud load balancer.
* This API modifies the cloud load balancer of the scaling group and generate a scaling activity to asynchronously modify the cloud load balancers of existing instances.
     * @param {ModifyLoadBalancersRequest} req
     * @param {function(string, ModifyLoadBalancersResponse):void} cb
     * @public
     */
    ModifyLoadBalancers(req, cb) {
        let resp = new ModifyLoadBalancersResponse();
        this.request("ModifyLoadBalancers", req, resp, cb);
    }

    /**
     * This API (ModifyDesiredCapacity) is used to modify the desired number of instances in the specified auto scaling group.
     * @param {ModifyDesiredCapacityRequest} req
     * @param {function(string, ModifyDesiredCapacityResponse):void} cb
     * @public
     */
    ModifyDesiredCapacity(req, cb) {
        let resp = new ModifyDesiredCapacityResponse();
        this.request("ModifyDesiredCapacity", req, resp, cb);
    }

    /**
     * This API is used to enable scale-in protection for an instance.
When scale-in protection is enabled, the instance will not be removed in scale-in activities triggered by replacement of unhealthy instances, alarm threshold reached, change of desired quantity, etc.
     * @param {SetInstancesProtectionRequest} req
     * @param {function(string, SetInstancesProtectionResponse):void} cb
     * @public
     */
    SetInstancesProtection(req, cb) {
        let resp = new SetInstancesProtectionResponse();
        this.request("SetInstancesProtection", req, resp, cb);
    }

    /**
     * This API is used to modify a notification policy.
* The receiver type of the notification policy cannot be modified.
     * @param {ModifyNotificationConfigurationRequest} req
     * @param {function(string, ModifyNotificationConfigurationResponse):void} cb
     * @public
     */
    ModifyNotificationConfiguration(req, cb) {
        let resp = new ModifyNotificationConfigurationResponse();
        this.request("ModifyNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API is used to shut down CVM instances in a scaling group.
* Use the `SOFT_FIRST` shutdown, which means the CVM will be forcibly shut down if the soft shutdown fails.
* Shutting down instances in the `IN_SERVICE` status will reduce the desired capacity, but the desired capacity cannot be less than the minimum value.
* To use the `STOP_CHARGING` shutdown, the instances you want to shut down must satisfy the conditions of [no charges when shut down](https://intl.cloud.tencent.com/document/product/213/19918?from_cn_redirect=1).
* This API supports batch operation. Up to 100 instances can be shut down in each request.
     * @param {StopAutoScalingInstancesRequest} req
     * @param {function(string, StopAutoScalingInstancesResponse):void} cb
     * @public
     */
    StopAutoScalingInstances(req, cb) {
        let resp = new StopAutoScalingInstancesResponse();
        this.request("StopAutoScalingInstances", req, resp, cb);
    }

    /**
     * This API is used to create a launch configuration.

* To modify a launch configuration, you can use `ModifyLaunchConfigurationAttributes`.

* You can create up to 20 launch configurations for each project. For more information, see [Usage Limits](https://intl.cloud.tencent.com/document/product/377/3120?from_cn_redirect=1).

     * @param {CreateLaunchConfigurationRequest} req
     * @param {function(string, CreateLaunchConfigurationResponse):void} cb
     * @public
     */
    CreateLaunchConfiguration(req, cb) {
        let resp = new CreateLaunchConfigurationResponse();
        this.request("CreateLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (ModifyAutoScalingGroup) is used to modify an auto scaling group.
     * @param {ModifyAutoScalingGroupRequest} req
     * @param {function(string, ModifyAutoScalingGroupResponse):void} cb
     * @public
     */
    ModifyAutoScalingGroup(req, cb) {
        let resp = new ModifyAutoScalingGroupResponse();
        this.request("ModifyAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API is used to create a notification policy.
When the notification is sent to a CMQ topic or queue, the following contents are included:
```
{
    "Service": "Tencent Cloud Auto Scaling",
    "CreatedTime": "2021-10-11T10:15:11Z", // Activity creation time
    "AppId": "100000000",
    "ActivityId": "asa-fznnvrja", // Scaling activity ID
    "AutoScalingGroupId": "asg-pc2oqu2z", // Scaling group ID
    "ActivityType": "SCALE_OUT",  // Scaling activity type
    "StatusCode": "SUCCESSFUL",   // Scaling activity result
    "Description": "Activity was launched in response to a difference between desired capacity and actual capacity,
    scale out 1 instance(s).", // Scaling activity description
    "StartTime": "2021-10-11T10:15:11Z",  // Activity starting time
    "EndTime": "2021-10-11T10:15:32Z",    // Activity ending time
    "DetailedStatusMessageSet": [ // A collection of failed attempts during the scaling process (Failed attempts are allowed in a successful scaling activity)
        {
            "Code": "InvalidInstanceType",
            "Zone": "ap-guangzhou-2",
            "InstanceId": "",
            "InstanceChargeType": "POSTPAID_BY_HOUR",
            "SubnetId": "subnet-4t5mgeuu",
            "Message": "The specified instance type `S5.LARGE8` is invalid in `subnet-4t5mgeuu`, `ap-guangzhou-2`.",
            "InstanceType": "S5.LARGE8",
        }
    ]
}
```
     * @param {CreateNotificationConfigurationRequest} req
     * @param {function(string, CreateNotificationConfigurationResponse):void} cb
     * @public
     */
    CreateNotificationConfiguration(req, cb) {
        let resp = new CreateNotificationConfigurationResponse();
        this.request("CreateNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingInstances) is used to query the information of instances associated with AS.

* You can query the details of instances based on information such as instance ID and auto scaling group ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of instances of the current user will be returned.
     * @param {DescribeAutoScalingInstancesRequest} req
     * @param {function(string, DescribeAutoScalingInstancesResponse):void} cb
     * @public
     */
    DescribeAutoScalingInstances(req, cb) {
        let resp = new DescribeAutoScalingInstancesResponse();
        this.request("DescribeAutoScalingInstances", req, resp, cb);
    }

    /**
     * This API is used to create launch configurations and scaling groups based on an instance.

Note: for a scaling group that is created based on a monthly-subscribed instance, the instances added for scale-out are pay-as-you-go instance.
     * @param {CreateAutoScalingGroupFromInstanceRequest} req
     * @param {function(string, CreateAutoScalingGroupFromInstanceResponse):void} cb
     * @public
     */
    CreateAutoScalingGroupFromInstance(req, cb) {
        let resp = new CreateAutoScalingGroupFromInstanceResponse();
        this.request("CreateAutoScalingGroupFromInstance", req, resp, cb);
    }

    /**
     * This API is used to create a lifecycle hook.

* You can configure notifications or automation commands (TAT) for the lifecycle hook.

If you configured a notification, Auto Scaling will notify the TDMQ queue of the following information:

```
{
	"Service": "Tencent Cloud Auto Scaling",
	"Time": "2019-03-14T10:15:11Z",
	"AppId": "1251783334",
	"ActivityId": "asa-fznnvrja",
	"AutoScalingGroupId": "asg-rrrrtttt",
	"LifecycleHookId": "ash-xxxxyyyy",
	"LifecycleHookName": "my-hook",
	"LifecycleActionToken": "3080e1c9-0efe-4dd7-ad3b-90cd6618298f",
	"InstanceId": "ins-aaaabbbb",
	"LifecycleTransition": "INSTANCE_LAUNCHING",
	"NotificationMetadata": ""
}
```
     * @param {CreateLifecycleHookRequest} req
     * @param {function(string, CreateLifecycleHookResponse):void} cb
     * @public
     */
    CreateLifecycleHook(req, cb) {
        let resp = new CreateLifecycleHookResponse();
        this.request("CreateLifecycleHook", req, resp, cb);
    }

    /**
     * This API (UpgradeLifecycleHook) is used to upgrade a lifecycle hook.

* This API is used to upgrade a lifecycle hook in a "completely overriding" manner, i.e., it uniformly sets a new configuration according to the API parameters regardless of the original parameters. If optional fields are left empty, their default values will be used.

     * @param {UpgradeLifecycleHookRequest} req
     * @param {function(string, UpgradeLifecycleHookResponse):void} cb
     * @public
     */
    UpgradeLifecycleHook(req, cb) {
        let resp = new UpgradeLifecycleHookResponse();
        this.request("UpgradeLifecycleHook", req, resp, cb);
    }

    /**
     * This API is used to disable the specified auto-scaling group.
* When a scaling group is disabled, the following activities are not triggered automatically:
    - Scaling activities triggered alert policies
    - Scaling activities triggered by desired group capacity
    - Replacement of unhealthy instances
    - Scheduled actions
* When the scaling group is disabled, you can trigger scaling activities manually, including: 
    - Scale out to the specify number of instances (ScaleOutInstances)
    - Scale in to the specify number of instances (ScaleInInstances)
    - Remove instances from the scaling group (DetachInstances)
    - Delete instances from the scaling group (RemoveInstances)
    - Add instances to a scaling group (AttachInstances)
    - Shut down CVM instances in a scaling group (StopAutoScalingInstances)
    - Start up CVM instances in a scaling group (StartAutoScalingInstances)
     * @param {DisableAutoScalingGroupRequest} req
     * @param {function(string, DisableAutoScalingGroupResponse):void} cb
     * @public
     */
    DisableAutoScalingGroup(req, cb) {
        let resp = new DisableAutoScalingGroupResponse();
        this.request("DisableAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API is used to query the information of launch configurations.

* You can query the launch configuration details based on information such as launch configuration ID and name. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of launch configurations of the current user will be returned.
     * @param {DescribeLaunchConfigurationsRequest} req
     * @param {function(string, DescribeLaunchConfigurationsResponse):void} cb
     * @public
     */
    DescribeLaunchConfigurations(req, cb) {
        let resp = new DescribeLaunchConfigurationsResponse();
        this.request("DescribeLaunchConfigurations", req, resp, cb);
    }

    /**
     * This API (CreateScalingPolicy) is used to create an alarm trigger policy.
     * @param {CreateScalingPolicyRequest} req
     * @param {function(string, CreateScalingPolicyResponse):void} cb
     * @public
     */
    CreateScalingPolicy(req, cb) {
        let resp = new CreateScalingPolicyResponse();
        this.request("CreateScalingPolicy", req, resp, cb);
    }

    /**
     * This API (DeleteLaunchConfiguration) is used to delete a launch configuration.

* If the launch configuration is active in an auto scaling group, it cannot be deleted.

     * @param {DeleteLaunchConfigurationRequest} req
     * @param {function(string, DeleteLaunchConfigurationResponse):void} cb
     * @public
     */
    DeleteLaunchConfiguration(req, cb) {
        let resp = new DeleteLaunchConfigurationResponse();
        this.request("DeleteLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (DeleteLifeCycleHook) is used to delete a lifecycle hook.
     * @param {DeleteLifecycleHookRequest} req
     * @param {function(string, DeleteLifecycleHookResponse):void} cb
     * @public
     */
    DeleteLifecycleHook(req, cb) {
        let resp = new DeleteLifecycleHookResponse();
        this.request("DeleteLifecycleHook", req, resp, cb);
    }

    /**
     * This API is used to query the latest activity history of an auto scaling group.
     * @param {DescribeAutoScalingGroupLastActivitiesRequest} req
     * @param {function(string, DescribeAutoScalingGroupLastActivitiesResponse):void} cb
     * @public
     */
    DescribeAutoScalingGroupLastActivities(req, cb) {
        let resp = new DescribeAutoScalingGroupLastActivitiesResponse();
        this.request("DescribeAutoScalingGroupLastActivities", req, resp, cb);
    }

    /**
     * This API (DescribeLifecycleHooks) is used to query the information of lifecycle hooks.

* You can query the details of lifecycle hooks based on information such as auto scaling group ID, lifecycle hook ID, or lifecycle hook name. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of lifecycle hooks of the current user will be returned.
     * @param {DescribeLifecycleHooksRequest} req
     * @param {function(string, DescribeLifecycleHooksResponse):void} cb
     * @public
     */
    DescribeLifecycleHooks(req, cb) {
        let resp = new DescribeLifecycleHooksResponse();
        this.request("DescribeLifecycleHooks", req, resp, cb);
    }

    /**
     * This API (EnableAutoScalingGroup) is used to enable the specified auto scaling group.
     * @param {EnableAutoScalingGroupRequest} req
     * @param {function(string, EnableAutoScalingGroupResponse):void} cb
     * @public
     */
    EnableAutoScalingGroup(req, cb) {
        let resp = new EnableAutoScalingGroupResponse();
        this.request("EnableAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API (DescribeScheduledActions) is used to query the details of one or more scheduled tasks.

* You can query the details of scheduled tasks based on information such as scheduled task ID, scheduled task name, or auto scaling group ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of scheduled tasks of the current user will be returned.
     * @param {DescribeScheduledActionsRequest} req
     * @param {function(string, DescribeScheduledActionsResponse):void} cb
     * @public
     */
    DescribeScheduledActions(req, cb) {
        let resp = new DescribeScheduledActionsResponse();
        this.request("DescribeScheduledActions", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingGroups) is used to query the information of auto scaling groups.

* You can query the details of auto scaling groups based on information such as auto scaling group ID, auto scaling group name, or launch configuration ID. For more information on filters, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit` and 20 by default) of auto scaling groups of the current user will be returned.
     * @param {DescribeAutoScalingGroupsRequest} req
     * @param {function(string, DescribeAutoScalingGroupsResponse):void} cb
     * @public
     */
    DescribeAutoScalingGroups(req, cb) {
        let resp = new DescribeAutoScalingGroupsResponse();
        this.request("DescribeAutoScalingGroups", req, resp, cb);
    }

    /**
     * This API (ModifyScheduledAction) is used to modify a scheduled task.
     * @param {ModifyScheduledActionRequest} req
     * @param {function(string, ModifyScheduledActionResponse):void} cb
     * @public
     */
    ModifyScheduledAction(req, cb) {
        let resp = new ModifyScheduledActionResponse();
        this.request("ModifyScheduledAction", req, resp, cb);
    }

    /**
     * This API (DescribeAutoScalingActivities) is used to query the activity history of an auto scaling group.
     * @param {DescribeAutoScalingActivitiesRequest} req
     * @param {function(string, DescribeAutoScalingActivitiesResponse):void} cb
     * @public
     */
    DescribeAutoScalingActivities(req, cb) {
        let resp = new DescribeAutoScalingActivitiesResponse();
        this.request("DescribeAutoScalingActivities", req, resp, cb);
    }

    /**
     * This API (DeleteNotificationConfiguration) is used to delete the specified notification.
     * @param {DeleteNotificationConfigurationRequest} req
     * @param {function(string, DeleteNotificationConfigurationResponse):void} cb
     * @public
     */
    DeleteNotificationConfiguration(req, cb) {
        let resp = new DeleteNotificationConfigurationResponse();
        this.request("DeleteNotificationConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeAccountLimits) is used to query the limits of user's AS resources.
     * @param {DescribeAccountLimitsRequest} req
     * @param {function(string, DescribeAccountLimitsResponse):void} cb
     * @public
     */
    DescribeAccountLimits(req, cb) {
        let resp = new DescribeAccountLimitsResponse();
        this.request("DescribeAccountLimits", req, resp, cb);
    }

    /**
     * This API (ModifyLaunchConfigurationAttributes) is used to modify some attributes of a launch configuration.

* The changes of launch configuration do not affect the existing instances. New instances will be created based on the modified configuration.
* This API supports modifying certain simple types of attributes.
     * @param {ModifyLaunchConfigurationAttributesRequest} req
     * @param {function(string, ModifyLaunchConfigurationAttributesResponse):void} cb
     * @public
     */
    ModifyLaunchConfigurationAttributes(req, cb) {
        let resp = new ModifyLaunchConfigurationAttributesResponse();
        this.request("ModifyLaunchConfigurationAttributes", req, resp, cb);
    }


}
module.exports = AsClient;
