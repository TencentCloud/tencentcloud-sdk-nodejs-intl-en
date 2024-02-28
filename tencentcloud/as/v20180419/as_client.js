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
const DescribeRefreshActivitiesResponse = models.DescribeRefreshActivitiesResponse;
const ModifyAutoScalingGroupRequest = models.ModifyAutoScalingGroupRequest;
const ScaleOutInstancesRequest = models.ScaleOutInstancesRequest;
const AutoScalingNotification = models.AutoScalingNotification;
const ModifyScheduledActionRequest = models.ModifyScheduledActionRequest;
const DescribeAutoScalingGroupsRequest = models.DescribeAutoScalingGroupsRequest;
const LaunchConfiguration = models.LaunchConfiguration;
const DescribeAccountLimitsResponse = models.DescribeAccountLimitsResponse;
const CreateLaunchConfigurationResponse = models.CreateLaunchConfigurationResponse;
const RelatedInstance = models.RelatedInstance;
const Advice = models.Advice;
const CreateLifecycleHookResponse = models.CreateLifecycleHookResponse;
const ClearLaunchConfigurationAttributesResponse = models.ClearLaunchConfigurationAttributesResponse;
const DescribeAutoScalingGroupsResponse = models.DescribeAutoScalingGroupsResponse;
const CreateScheduledActionRequest = models.CreateScheduledActionRequest;
const ExitStandbyRequest = models.ExitStandbyRequest;
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
const DescribeRefreshActivitiesRequest = models.DescribeRefreshActivitiesRequest;
const DescribeLaunchConfigurationsResponse = models.DescribeLaunchConfigurationsResponse;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const Tag = models.Tag;
const DetachLoadBalancersRequest = models.DetachLoadBalancersRequest;
const DescribeAutoScalingInstancesRequest = models.DescribeAutoScalingInstancesRequest;
const ModifyLoadBalancersRequest = models.ModifyLoadBalancersRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const ModifyScalingPolicyResponse = models.ModifyScalingPolicyResponse;
const DeleteLaunchConfigurationRequest = models.DeleteLaunchConfigurationRequest;
const SetInstancesProtectionRequest = models.SetInstancesProtectionRequest;
const DeleteNotificationConfigurationResponse = models.DeleteNotificationConfigurationResponse;
const DetachInstancesResponse = models.DetachInstancesResponse;
const RollingUpdateSettings = models.RollingUpdateSettings;
const ModifyLaunchConfigurationAttributesResponse = models.ModifyLaunchConfigurationAttributesResponse;
const CreateLaunchConfigurationRequest = models.CreateLaunchConfigurationRequest;
const AutoScalingGroup = models.AutoScalingGroup;
const AttachInstancesResponse = models.AttachInstancesResponse;
const DescribeAutoScalingGroupLastActivitiesResponse = models.DescribeAutoScalingGroupLastActivitiesResponse;
const DescribeAccountLimitsRequest = models.DescribeAccountLimitsRequest;
const ScaleInInstancesResponse = models.ScaleInInstancesResponse;
const CancelInstanceRefreshRequest = models.CancelInstanceRefreshRequest;
const DetachLoadBalancersResponse = models.DetachLoadBalancersResponse;
const ScalingPolicy = models.ScalingPolicy;
const DescribeAutoScalingGroupLastActivitiesRequest = models.DescribeAutoScalingGroupLastActivitiesRequest;
const HostNameSettings = models.HostNameSettings;
const ModifyLoadBalancersResponse = models.ModifyLoadBalancersResponse;
const CreateNotificationConfigurationRequest = models.CreateNotificationConfigurationRequest;
const DescribeScheduledActionsResponse = models.DescribeScheduledActionsResponse;
const ModifyNotificationConfigurationRequest = models.ModifyNotificationConfigurationRequest;
const DeleteLifecycleHookRequest = models.DeleteLifecycleHookRequest;
const ModifyLoadBalancerTargetAttributesResponse = models.ModifyLoadBalancerTargetAttributesResponse;
const ModifyAutoScalingGroupResponse = models.ModifyAutoScalingGroupResponse;
const ExitStandbyResponse = models.ExitStandbyResponse;
const InvocationResult = models.InvocationResult;
const ModifyScalingPolicyRequest = models.ModifyScalingPolicyRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const RefreshBatch = models.RefreshBatch;
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
const RollbackInstanceRefreshResponse = models.RollbackInstanceRefreshResponse;
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
const RefreshBatchRelatedInstance = models.RefreshBatchRelatedInstance;
const DeleteScheduledActionRequest = models.DeleteScheduledActionRequest;
const DescribeAutoScalingActivitiesRequest = models.DescribeAutoScalingActivitiesRequest;
const ModifyDesiredCapacityRequest = models.ModifyDesiredCapacityRequest;
const CreateScheduledActionResponse = models.CreateScheduledActionResponse;
const StartInstanceRefreshResponse = models.StartInstanceRefreshResponse;
const CreateLifecycleHookRequest = models.CreateLifecycleHookRequest;
const ScheduledAction = models.ScheduledAction;
const ModifyLifecycleHookRequest = models.ModifyLifecycleHookRequest;
const CompleteLifecycleActionResponse = models.CompleteLifecycleActionResponse;
const ScaleOutInstancesResponse = models.ScaleOutInstancesResponse;
const RefreshSettings = models.RefreshSettings;
const Filter = models.Filter;
const DescribeLifecycleHooksRequest = models.DescribeLifecycleHooksRequest;
const ServiceSettings = models.ServiceSettings;
const CreateAutoScalingGroupResponse = models.CreateAutoScalingGroupResponse;
const TargetAttribute = models.TargetAttribute;
const ModifyNotificationConfigurationResponse = models.ModifyNotificationConfigurationResponse;
const LimitedLoginSettings = models.LimitedLoginSettings;
const DescribeLifecycleHooksResponse = models.DescribeLifecycleHooksResponse;
const CreateScalingPolicyRequest = models.CreateScalingPolicyRequest;
const ResumeInstanceRefreshRequest = models.ResumeInstanceRefreshRequest;
const DescribeAutoScalingAdvicesRequest = models.DescribeAutoScalingAdvicesRequest;
const DeleteNotificationConfigurationRequest = models.DeleteNotificationConfigurationRequest;
const DescribeLaunchConfigurationsRequest = models.DescribeLaunchConfigurationsRequest;
const NotificationTarget = models.NotificationTarget;
const ModifyLoadBalancerTargetAttributesRequest = models.ModifyLoadBalancerTargetAttributesRequest;
const RollbackInstanceRefreshRequest = models.RollbackInstanceRefreshRequest;
const StartInstanceRefreshRequest = models.StartInstanceRefreshRequest;
const DeleteAutoScalingGroupResponse = models.DeleteAutoScalingGroupResponse;
const LifecycleActionResultInfo = models.LifecycleActionResultInfo;
const AutoScalingGroupAbstract = models.AutoScalingGroupAbstract;
const EnableAutoScalingGroupRequest = models.EnableAutoScalingGroupRequest;
const StopInstanceRefreshRequest = models.StopInstanceRefreshRequest;
const MetricAlarm = models.MetricAlarm;
const RefreshActivity = models.RefreshActivity;
const DescribeNotificationConfigurationsRequest = models.DescribeNotificationConfigurationsRequest;
const ScaleInInstancesRequest = models.ScaleInInstancesRequest;
const LifecycleHook = models.LifecycleHook;
const ForwardLoadBalancer = models.ForwardLoadBalancer;
const ClearLaunchConfigurationAttributesRequest = models.ClearLaunchConfigurationAttributesRequest;
const InstanceNameIndexSettings = models.InstanceNameIndexSettings;
const ForwardLoadBalancerIdentification = models.ForwardLoadBalancerIdentification;
const AutoScalingAdvice = models.AutoScalingAdvice;
const StartAutoScalingInstancesRequest = models.StartAutoScalingInstancesRequest;
const AttachInstancesRequest = models.AttachInstancesRequest;
const StopInstanceRefreshResponse = models.StopInstanceRefreshResponse;
const AttachLoadBalancersRequest = models.AttachLoadBalancersRequest;
const SpotMixedAllocationPolicy = models.SpotMixedAllocationPolicy;
const UpgradeLifecycleHookRequest = models.UpgradeLifecycleHookRequest;
const ResumeInstanceRefreshResponse = models.ResumeInstanceRefreshResponse;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const Activity = models.Activity;
const ModifyDesiredCapacityResponse = models.ModifyDesiredCapacityResponse;
const StopAutoScalingInstancesRequest = models.StopAutoScalingInstancesRequest;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const CancelInstanceRefreshResponse = models.CancelInstanceRefreshResponse;
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
     * This API is used to pause the ongoing instance refresh activity.
* In the paused status, the scaling group will also be disabled.
* Instances that are currently being updated will not be paused, instances pending updates will have their updates paused.
     * @param {StopInstanceRefreshRequest} req
     * @param {function(string, StopInstanceRefreshResponse):void} cb
     * @public
     */
    StopInstanceRefresh(req, cb) {
        let resp = new StopInstanceRefreshResponse();
        this.request("StopInstanceRefresh", req, resp, cb);
    }

    /**
     * This API is used to execute a scaling policy.

* The scaling policy can be executed based on the scaling policy ID.
* The policy cannot be executed if there are ongoing scaling actions on the scaling group.
* Executing a target tracking policy is not supported.
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
     * This API is used to refresh running CVM instances in the scaling group and return the RefreshActivityId for the instance refresh activity based on parameters in the launch configuration.
* For refresh methods involving reinstallation (currently only reinstallation is supported), during reinstallation, only the ImageId, UserData, EnhancedService, HostName, and LoginSettings parameters will be fetched from the launch configuration for refreshing; other parameters of the instance will not be refreshed.
* During the instance refresh process (including paused status), the scaling group will be disabled. It is not recommended to modify the associated launch configuration during a refresh, as this may impact the refresh parameters, leading to inconsistent instance configurations.
* In rolling update mode, instance refreshes are performed in multiple batches. If there are failed refreshes within a batch, the activity will enter a failed paused status.
* Instances pending refresh that are removed or destroyed will be marked as NOT_FOUND status, but they will not block the instance refresh activity.
* Even if a running instance has parameters consistent with the latest launch configuration, it can still undergo another refresh.
     * @param {StartInstanceRefreshRequest} req
     * @param {function(string, StartInstanceRefreshResponse):void} cb
     * @public
     */
    StartInstanceRefresh(req, cb) {
        let resp = new StartInstanceRefreshResponse();
        this.request("StartInstanceRefresh", req, resp, cb);
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
     * This API is used to delete an auto-scaling group. Make sure that there are no `IN_SERVICE` instances in the group, and there are no ongoing scaling activities. When you delete a scaling group, instances in the status of `CREATION_FAILED`, `TERMINATION_FAILED` and `DETACH_FAILED` are not terminated.
     * @param {DeleteAutoScalingGroupRequest} req
     * @param {function(string, DeleteAutoScalingGroupResponse):void} cb
     * @public
     */
    DeleteAutoScalingGroup(req, cb) {
        let resp = new DeleteAutoScalingGroupResponse();
        this.request("DeleteAutoScalingGroup", req, resp, cb);
    }

    /**
     * This API is used to add the specified number of instances to a scaling group. It returns the scaling activity ID `ActivityId`.
* u200dMake sure that there are no ongoing scaling tasks.
* This API is valid even when the scaling group is disabled. For more details, see [DisableAutoScalingGroup](https://intl.cloud.tencent.com/document/api/377/20435?from_cn_redirect=1).
* The total number of instances after this action cannot exceed the maximum capacity.
* If a scale-out action failed or partially succeeded, only the number of successfully created instances is added to the number of desired capacity.
* If the allocation policy is `SPOT_MIXED`, there may be multiple scaling activities triggered for one scaling task. u200dIn this case, the first activity ID (`ActivityId`) is returned.
     * @param {ScaleOutInstancesRequest} req
     * @param {function(string, ScaleOutInstancesResponse):void} cb
     * @public
     */
    ScaleOutInstances(req, cb) {
        let resp = new ScaleOutInstancesResponse();
        this.request("ScaleOutInstances", req, resp, cb);
    }

    /**
     * This API is used to exit instances from the standby status in the scaling group.
* When an instance is in standby status, its load balancer weight is set to 0. Upon exiting the standby status, the weight value automatically gets restored.
* Initiating power-on/power-off actions on instances that are in standby status also results in them exiting from the standby status.
     * @param {ExitStandbyRequest} req
     * @param {function(string, ExitStandbyResponse):void} cb
     * @public
     */
    ExitStandby(req, cb) {
        let resp = new ExitStandbyResponse();
        this.request("ExitStandby", req, resp, cb);
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
     * 已有替代接口ModifyLaunchConfiguration。该接口存在覆盖参数风险，目前官网已隐藏

There is a replacement API: ModifyLaunchConfiguration. This API carries the risk of parameter overwriting, and it has currently been hidden on the official website.
This API (UpgradeLaunchConfiguration) is used to upgrade the launch configuration.
* This API is used to upgrade the launch configuration, adopting an "entirely overwrite" approach. Regardless of previous parameter settings, they will be uniformly replaced with new configurations as specified in the interface parameters. For non-mandatory fields, if not filled in, default values will be assigned.
* After upgrading and modifying the launch configuration, existing instances that have been scaled out using this configuration will not undergo any changes. Subsequently, newly added instances using this upgraded launch configuration will be scaled out according to the new configuration.
     * @param {UpgradeLaunchConfigurationRequest} req
     * @param {function(string, UpgradeLaunchConfigurationResponse):void} cb
     * @public
     */
    UpgradeLaunchConfiguration(req, cb) {
        let resp = new UpgradeLaunchConfigurationResponse();
        this.request("UpgradeLaunchConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeRefreshActivities) is used to query the instance refresh activity records of a scaling group.
     * @param {DescribeRefreshActivitiesRequest} req
     * @param {function(string, DescribeRefreshActivitiesResponse):void} cb
     * @public
     */
    DescribeRefreshActivities(req, cb) {
        let resp = new DescribeRefreshActivitiesResponse();
        this.request("DescribeRefreshActivities", req, resp, cb);
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
     * This API is used to complete a lifecycle action by setting the status of lifecycle hook to `CONTINUE` or `ABANDON`.

* If this API is not called, the lifecycle hook goes to the status specified in `DefaultResult` after the timeout period.
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
     * This API is used to generate a new instance refresh activity, which also supports batched refreshing and operations such as pausing, resuming, and canceling. The interface returns the RefreshActivityId for the rollback activity.
* Instances pending refresh in the original activity are updated to a canceled status. Nonexistent instances are disregarded, while instances in all other statuses proceed to enter the rollback process.
* Instances that were being refreshed in the original activity will not be immediately terminated; instead, the rollback activity will be executed after their refresh has been completed.
* Rollback is supported for activities that are in a paused status or those with the most recent successful refresh; it is not supported for activities in other statuses.
* When the original refresh activity involves reinstalling instances, for the ImageId parameter, it will automatically restore to the image ID before the rollback; for parameters such as UserData, EnhancedService, LoginSettings, and HostName, they will still be retrieved from the launch configuration, requiring users to manually modify the launch configuration before initiating the rollback.
     * @param {RollbackInstanceRefreshRequest} req
     * @param {function(string, RollbackInstanceRefreshResponse):void} cb
     * @public
     */
    RollbackInstanceRefresh(req, cb) {
        let resp = new RollbackInstanceRefreshResponse();
        this.request("RollbackInstanceRefresh", req, resp, cb);
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

* To modify a launch configuration, please use `ModifyLaunchConfigurationAttributes`.

* Up to 20 launch configurations can be created for each project. For more information, see [Usage Limits](https://intl.cloud.tencent.com/document/product/377/3120?from_cn_redirect=1).
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
     * This API is used to resume the paused instance refresh activity, allowing it to retry failed instances in the current batch or proceed with refreshing subsequent batches. Note that calling this interface is ineffective when the activity is not in a paused status.
     * @param {ResumeInstanceRefreshRequest} req
     * @param {function(string, ResumeInstanceRefreshResponse):void} cb
     * @public
     */
    ResumeInstanceRefresh(req, cb) {
        let resp = new ResumeInstanceRefreshResponse();
        this.request("ResumeInstanceRefresh", req, resp, cb);
    }

    /**
     * This API is used to cancel the instance refresh activity of the scaling group.
* Batches that have already been refreshed or are currently being refreshed remain unaffected; batches pending refresh will be canceled.
* If a refresh fails, the affected instances will remain in the standby status and require manual intervention by the user to either attempt to exit the standby status or destroy the instances.
* Rollback operations are not allowed after cancellation, and resuming is also unsupported.
     * @param {CancelInstanceRefreshRequest} req
     * @param {function(string, CancelInstanceRefreshResponse):void} cb
     * @public
     */
    CancelInstanceRefresh(req, cb) {
        let resp = new CancelInstanceRefreshResponse();
        this.request("CancelInstanceRefresh", req, resp, cb);
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
