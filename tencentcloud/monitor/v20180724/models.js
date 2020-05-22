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
 * DescribePolicyConditionList.ConfigManual
 * @class
 */
class DescribePolicyConditionListConfigManual extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check method.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualCalcType || null}
         */
        this.CalcType = null;

        /**
         * Threshold.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualCalcValue || null}
         */
        this.CalcValue = null;

        /**
         * Duration.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualContinueTime || null}
         */
        this.ContinueTime = null;

        /**
         * Data period.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualPeriod || null}
         */
        this.Period = null;

        /**
         * Number of periods.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualPeriodNum || null}
         */
        this.PeriodNum = null;

        /**
         * Statistics method.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManualStatType || null}
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CalcType) {
            let obj = new DescribePolicyConditionListConfigManualCalcType();
            obj.deserialize(params.CalcType)
            this.CalcType = obj;
        }

        if (params.CalcValue) {
            let obj = new DescribePolicyConditionListConfigManualCalcValue();
            obj.deserialize(params.CalcValue)
            this.CalcValue = obj;
        }

        if (params.ContinueTime) {
            let obj = new DescribePolicyConditionListConfigManualContinueTime();
            obj.deserialize(params.ContinueTime)
            this.ContinueTime = obj;
        }

        if (params.Period) {
            let obj = new DescribePolicyConditionListConfigManualPeriod();
            obj.deserialize(params.Period)
            this.Period = obj;
        }

        if (params.PeriodNum) {
            let obj = new DescribePolicyConditionListConfigManualPeriodNum();
            obj.deserialize(params.PeriodNum)
            this.PeriodNum = obj;
        }

        if (params.StatType) {
            let obj = new DescribePolicyConditionListConfigManualStatType();
            obj.deserialize(params.StatType)
            this.StatType = obj;
        }

    }
}

/**
 * UnBindingPolicyObject request structure.
 * @class
 */
class UnBindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * List of unique IDs of object instances to be deleted.
         * @type {Array.<string> || null}
         */
        this.UniqueId = null;

        /**
         * Instance group ID. The UniqueId parameter is invalid if object instances are deleted by instance group.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

    }
}

/**
 * DescribePolicyConditionList request structure.
 * @class
 */
class DescribePolicyConditionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;

    }
}

/**
 * DeletePolicyGroup response structure.
 * @class
 */
class DeletePolicyGroupResponse extends  AbstractModel {
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
 * Output parameter type of the DescribeAccidentEventList API
 * @class
 */
class DescribeAccidentEventListAlarms extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event type.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.BusinessTypeDesc = null;

        /**
         * Event type.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AccidentTypeDesc = null;

        /**
         * ID of the event type. The value 1 indicates service issues. The value 2 indicates other subscriptions.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.BusinessID = null;

        /**
         * Event status ID. The value 0 indicates that the event has been recovered. The value 1 indicates that the event has not been recovered.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.EventStatus = null;

        /**
         * Affected object.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AffectResource = null;

        /**
         * Region where the event occurs.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Time when the event occurs.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.OccurTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessTypeDesc = 'BusinessTypeDesc' in params ? params.BusinessTypeDesc : null;
        this.AccidentTypeDesc = 'AccidentTypeDesc' in params ? params.AccidentTypeDesc : null;
        this.BusinessID = 'BusinessID' in params ? params.BusinessID : null;
        this.EventStatus = 'EventStatus' in params ? params.EventStatus : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.OccurTime = 'OccurTime' in params ? params.OccurTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Event alarm condition input when a policy is created.
 * @class
 */
class CreatePolicyGroupEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Alarm sending and converging type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Alarm sending period in seconds. The value <0 indicates that no alarm will be triggered. The value 0 indicates that an alarm will be triggered only once. The value >0 indicates that an alarm will be triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * If a metric is created based on a template, the RuleId of the metric in the template must be input.
         * @type {number || null}
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeProductEventList request structure.
 * @class
 */
class DescribeProductEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API module name. It is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Filter by product type. For example, “cvm” indicates Cloud Virtual Machine.
         * @type {Array.<string> || null}
         */
        this.ProductName = null;

        /**
         * Filter by product name. For example, "guest_reboot" indicates server restart.
         * @type {Array.<string> || null}
         */
        this.EventName = null;

        /**
         * Affected object, such as ins-19708ino.
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * Filter by dimension, such as by public IP: 10.0.0.1.
         * @type {Array.<DescribeProductEventListDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * Filter by region, such as by gz.
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * Filter by event type. Valid values: ["status_change","abnormal"], which indicate events whose statuses have changed and exceptional events respectively.
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * Filter by event status. Valid values: ["recover","alarm","-"], which indicate that an event has been recovered, has not been recovered, and has no status respectively.
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Filter by project ID.
         * @type {Array.<string> || null}
         */
        this.Project = null;

        /**
         * Filter by alarm status configuration. The value 1 indicates that the alarm status has been configured. The value 0 indicates that the alarm status has not been configured.
         * @type {number || null}
         */
        this.IsAlarmConfig = null;

        /**
         * Sorting by update time. The value ASC indicates the ascending order. The value DESC indicates the descending order. The default value is DESC.
         * @type {string || null}
         */
        this.TimeOrder = null;

        /**
         * Start time, which is the timestamp one day ago by default.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current timestamp by default.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Page offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of parameters that can be returned on each page. The default value is 20.
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
        this.Module = 'Module' in params ? params.Module : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;
        this.TimeOrder = 'TimeOrder' in params ? params.TimeOrder : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Array of instance dimension combinations
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Combination of instance dimensions
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * Events returned by the DescribeProductEventList API
 * @class
 */
class DescribeProductEventListEvents extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Chinese event name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EventCName = null;

        /**
         * English event name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EventEName = null;

        /**
         * Event name abbreviation.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Chinese product name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductCName = null;

        /**
         * English product name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductEName = null;

        /**
         * Product name abbreviation.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Project ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Region.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Status.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether to support alarms.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.SupportAlarm = null;

        /**
         * Event type.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Start time.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Instance object information.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeProductEventListEventsDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * Additional information of the instance object.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeProductEventListEventsDimensions> || null}
         */
        this.AdditionMsg = null;

        /**
         * Whether to configure alarms.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsAlarmConfig = null;

        /**
         * Policy information.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeProductEventListEventsGroupInfo> || null}
         */
        this.GroupInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventCName = 'EventCName' in params ? params.EventCName : null;
        this.EventEName = 'EventEName' in params ? params.EventEName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.ProductCName = 'ProductCName' in params ? params.ProductCName : null;
        this.ProductEName = 'ProductEName' in params ? params.ProductEName : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SupportAlarm = 'SupportAlarm' in params ? params.SupportAlarm : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

        if (params.AdditionMsg) {
            this.AdditionMsg = new Array();
            for (let z in params.AdditionMsg) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.AdditionMsg[z]);
                this.AdditionMsg.push(obj);
            }
        }
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new DescribeProductEventListEventsGroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }

    }
}

/**
 * Dimensions of instances bound to a policy
 * @class
 */
class BindingPolicyObjectDimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Dimensions.
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Event dimensions.
         * @type {string || null}
         */
        this.EventDimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

    }
}

/**
 * Metric alarm configuration.
 * @class
 */
class DescribePolicyConditionListMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric configuration.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyConditionListConfigManual || null}
         */
        this.ConfigManual = null;

        /**
         * Metric ID.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricShowName = null;

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.MetricUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConfigManual) {
            let obj = new DescribePolicyConditionListConfigManual();
            obj.deserialize(params.ConfigManual)
            this.ConfigManual = obj;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;

    }
}

/**
 * CreatePolicyGroup request structure.
 * @class
 */
class CreatePolicyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Name of the view to which the policy group belongs. If the policy group is created based on a template, this parameter may not be set.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * ID of the project to which the policy group belongs, which will be used for authentication.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * ID of a template-based policy group. This parameter is required only when the policy group is created based on a template.
         * @type {number || null}
         */
        this.ConditionTempGroupId = null;

        /**
         * Whether the policy group is shielded. The value 0 indicates that the policy group is not shielded. The value 1 indicates that the policy group is shielded. The default value is 0.
         * @type {number || null}
         */
        this.IsShielded = null;

        /**
         * Remarks of the policy group.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Insertion time in the format of Unix timestamp. If you do not set this parameter, the background processing time is used.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Alarm threshold rule in the policy group.
         * @type {Array.<CreatePolicyGroupCondition> || null}
         */
        this.Conditions = null;

        /**
         * Event alarm rules in the policy group.
         * @type {Array.<CreatePolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * Whether to invoke at the background. Only when the value is 1, the rules in the background pull policy template are filled into the Conditions and EventConditions fields.
         * @type {number || null}
         */
        this.BackEndCall = null;

        /**
         * The “AND” and “OR” rules for alarm metrics. The value 0 indicates “OR”, which means that an alarm will be reported when any rule is met. The value 1 indicates “AND”, which means that an alarm will be reported only when all rules are met.
         * @type {number || null}
         */
        this.IsUnionRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new CreatePolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new CreatePolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.BackEndCall = 'BackEndCall' in params ? params.BackEndCall : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * Alarm threshold condition input when a policy is created.
 * @class
 */
class CreatePolicyGroupCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric ID.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Alarm sending and converging type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Alarm sending period in seconds. The value <0 indicates that no alarm will be triggered. The value 0 indicates that an alarm is triggered only once. The value >0 indicates that an alarm is triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Comparative type. The value 1 indicates greater than. The value 2 indicates greater than or equal to. The value 3 indicates smaller than. The value 4 indicates smaller than or equal to. The value 5 indicates equal to. The value 6 indicates not equal to. This parameter may not be set if a default comparative type is set for a metric.
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * Comparative value. This parameter may not be set if a metric has no requirement.
         * @type {number || null}
         */
        this.CalcValue = null;

        /**
         * Data statistics period in seconds. This parameter may not be set if a metric has a default value.
         * @type {number || null}
         */
        this.CalcPeriod = null;

        /**
         * Number of consecutive periods after which an alarm will be triggered.
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * If a metric is created based on a template, the RuleId of the metric in the template must be input.
         * @type {number || null}
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
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * Alarm recipient information in the output of policy query
 * @class
 */
class DescribePolicyGroupInfoReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of alarm receiver group IDs.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * List of alarm recipient IDs.
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * Start time of the alarm period. Value range: [0,86400). Convert the Unix timestamp to Beijing time and then remove the date. For example, 7200 indicates “10:0:0”.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the alarm period. The meaning is the same as that of StartTime.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Recipient type. Valid values: group and user.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Alarm notification type. Valid values: "SMS", "SITE", "EMAIL", "CALL", and "WECHAT".
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Uid of the alarm call receiver.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<number> || null}
         */
        this.UidList = null;

        /**
         * Number of alarm call rounds.
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * Round interval of alarm calls in seconds.
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * Person interval of alarm calls in seconds.
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * Whether to send an alarm call delivery notice. The value 0 indicates that no notice needs to be sent. The value 1 indicates that a notice needs to be sent.
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * Alarm call notification time. Valid values: OCCUR (indicating that a notice is sent when the alarm is reported) and RECOVER (indicating that a notice is sent when the alarm is cleared).
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * Notification method when an alarm is cleared. Valid value: SMS.
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

        /**
         * Alarm language.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ReceiveLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

    }
}

/**
 * BindingPolicyObject request structure.
 * @class
 */
class BindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Required. It is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Instance group ID.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Dimensions of an object to be bound.
         * @type {Array.<BindingPolicyObjectDimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new BindingPolicyObjectDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * GroupInfo in Events returned by the DescribeProductEventList API
 * @class
 */
class DescribeProductEventListEventsGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Policy name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.GroupName = null;

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

    }
}

/**
 * PutMonitorData request structure.
 * @class
 */
class PutMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A group of metrics and data.
         * @type {Array.<MetricDatum> || null}
         */
        this.Metrics = null;

        /**
         * IP address that is automatically specified when monitoring data is reported.
         * @type {string || null}
         */
        this.AnnounceIp = null;

        /**
         * Timestamp that is automatically specified when monitoring data is reported.
         * @type {number || null}
         */
        this.AnnounceTimestamp = null;

        /**
         * IP address or product instance ID that is automatically specified when monitoring data is reported.
         * @type {string || null}
         */
        this.AnnounceInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricDatum();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.AnnounceIp = 'AnnounceIp' in params ? params.AnnounceIp : null;
        this.AnnounceTimestamp = 'AnnounceTimestamp' in params ? params.AnnounceTimestamp : null;
        this.AnnounceInstance = 'AnnounceInstance' in params ? params.AnnounceInstance : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.Period
 * @class
 */
class DescribePolicyConditionListConfigManualPeriod extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default period in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Default = null;

        /**
         * Optional period in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * Required or not.
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyConditionList.EventMetric
 * @class
 */
class DescribePolicyConditionListEventMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Event name.
         * @type {string || null}
         */
        this.EventShowName = null;

        /**
         * Whether to recover.
         * @type {boolean || null}
         */
        this.NeedRecovered = null;

        /**
         * Event type, which is a reserved field. At present, it is fixed to 2.
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.NeedRecovered = 'NeedRecovered' in params ? params.NeedRecovered : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Policy conditions returned by the DescribePolicyConditionList API
 * @class
 */
class DescribePolicyConditionListCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy view name.
         * @type {string || null}
         */
        this.PolicyViewName = null;

        /**
         * Event alarm conditions.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyConditionListEventMetric> || null}
         */
        this.EventMetrics = null;

        /**
         * Whether to support multiple regions.
         * @type {boolean || null}
         */
        this.IsSupportMultiRegion = null;

        /**
         * Metric alarm conditions.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyConditionListMetric> || null}
         */
        this.Metrics = null;

        /**
         * Policy type name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sorting ID.
         * @type {number || null}
         */
        this.SortId = null;

        /**
         * Whether to support default policies.
         * @type {boolean || null}
         */
        this.SupportDefault = null;

        /**
         * List of regions that support this policy type.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.SupportRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyViewName = 'PolicyViewName' in params ? params.PolicyViewName : null;

        if (params.EventMetrics) {
            this.EventMetrics = new Array();
            for (let z in params.EventMetrics) {
                let obj = new DescribePolicyConditionListEventMetric();
                obj.deserialize(params.EventMetrics[z]);
                this.EventMetrics.push(obj);
            }
        }
        this.IsSupportMultiRegion = 'IsSupportMultiRegion' in params ? params.IsSupportMultiRegion : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new DescribePolicyConditionListMetric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.SupportDefault = 'SupportDefault' in params ? params.SupportDefault : null;
        this.SupportRegions = 'SupportRegions' in params ? params.SupportRegions : null;

    }
}

/**
 * DescribeBasicAlarmList request structure.
 * @class
 */
class DescribeBasicAlarmListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API module name. The value for the current API is monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Start time, which is the timestamp one day ago by default.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current timestamp by default.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of parameters that can be returned on each page. Value range: 1 - 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Parameter offset on each page. The value starts from 0 and the default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting by occurrence time. Valid values: asc and desc.
         * @type {string || null}
         */
        this.OccurTimeOrder = null;

        /**
         * Filter by project ID.
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Filter by policy type.
         * @type {Array.<string> || null}
         */
        this.ViewNames = null;

        /**
         * Filter by alarm status.
         * @type {Array.<number> || null}
         */
        this.AlarmStatus = null;

        /**
         * Filter by alarm object.
         * @type {string || null}
         */
        this.ObjLike = null;

        /**
         * Filter by instance group ID.
         * @type {Array.<number> || null}
         */
        this.InstanceGroupIds = null;

        /**
         * Filtering by metric names
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.ObjLike = 'ObjLike' in params ? params.ObjLike : null;
        this.InstanceGroupIds = 'InstanceGroupIds' in params ? params.InstanceGroupIds : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;

    }
}

/**
 * DescribePolicyGroupList response structure.
 * @class
 */
class DescribePolicyGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupListGroup> || null}
         */
        this.GroupList = null;

        /**
         * Total number of policy groups.
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

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribePolicyGroupListGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicyGroupInfo request structure.
 * @class
 */
class DescribePolicyGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID.
         * @type {number || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Dimension information
 * @class
 */
class DimensionsDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of dimension names
         * @type {Array.<string> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DescribePolicyGroupList.Group
 * @class
 */
class DescribePolicyGroupListGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Whether it is enabled.
         * @type {boolean || null}
         */
        this.IsOpen = null;

        /**
         * Policy view name.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Uin that is last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Last update time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Number of instances that are bound to the policy group.
         * @type {number || null}
         */
        this.UseSum = null;

        /**
         * Number of unshielded instances that are bound to the policy group.
         * @type {number || null}
         */
        this.NoShieldedSum = null;

        /**
         * Whether it is the default policy. The value 0 indicates that it is not the default policy. The value 1 indicates that it is the default policy.
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Whether the policy can be set as the default policy.
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * Parent policy group ID.
         * @type {number || null}
         */
        this.ParentGroupId = null;

        /**
         * Remarks of the policy group.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * ID of the project to which the policy group belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Threshold rule list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoCondition> || null}
         */
        this.Conditions = null;

        /**
         * Product event rule list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * Recipient list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * Template-based policy group.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyGroupInfoConditionTpl || null}
         */
        this.ConditionsTemp = null;

        /**
         * Instance group that is bound to the policy group.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyGroupListGroupInstanceGroup || null}
         */
        this.InstanceGroup = null;

        /**
         * The “AND” or “OR” rule. The value 0 indicates the “OR” rule (indicating that an alarm will be reported if any rule reaches the threshold condition). The value 1 indicates the “AND” rule (indicating that an alarm will be reported when all rules reach the threshold conditions).
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.UseSum = 'UseSum' in params ? params.UseSum : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.ParentGroupId = 'ParentGroupId' in params ? params.ParentGroupId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new DescribePolicyGroupInfoReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }

        if (params.InstanceGroup) {
            let obj = new DescribePolicyGroupListGroupInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * Alarms returned by DescribeBasicAlarmList
 * @class
 */
class DescribeBasicAlarmListAlarms extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Project ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Project name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Alarm status ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Alarm status.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AlarmStatus = null;

        /**
         * Policy group ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Policy group name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Occurrence time.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.FirstOccurTime = null;

        /**
         * Duration in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * End time.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.LastOccurTime = null;

        /**
         * Alarm content.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Alarm object.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ObjName = null;

        /**
         * Alarm object ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ObjId = null;

        /**
         * Policy type.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * VPC, which is unique to CVM.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Metric ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Metric name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Alarm type. The value 0 indicates metric alarms. The value 2 indicates product event alarms. The value 3 indicates platform event alarms.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Region.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Dimensions of an alarm object.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Notification method.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Instance group information.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<InstanceGroup> || null}
         */
        this.InstanceGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ObjName = 'ObjName' in params ? params.ObjName : null;
        this.ObjId = 'ObjId' in params ? params.ObjId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;

        if (params.InstanceGroup) {
            this.InstanceGroup = new Array();
            for (let z in params.InstanceGroup) {
                let obj = new InstanceGroup();
                obj.deserialize(params.InstanceGroup[z]);
                this.InstanceGroup.push(obj);
            }
        }

    }
}

/**
 * GetMonitorData request structure.
 * @class
 */
class GetMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace. Each Tencent Cloud product has a namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name. For detailed metric descriptions of each Tencent Cloud product, see the corresponding [Monitoring API](https://cloud.tencent.com/document/product/248/30384) document
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Combination of instance object dimensions
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * Monitoring statistical period. The default value is 300, and the unit is s
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Start time such as 2018-09-22T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. Uses the current time by default and cannot be earlier than StartTime
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Statistical method during the period
 * @class
 */
class PeriodsSt extends  AbstractModel {
    constructor(){
        super();

        /**
         * Period
         * @type {string || null}
         */
        this.Period = null;

        /**
         * Statistical method
         * @type {Array.<string> || null}
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StatType = 'StatType' in params ? params.StatType : null;

    }
}

/**
 * DescribeAccidentEventList request structure.
 * @class
 */
class DescribeAccidentEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API module name. The value for the current API is monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Start time, which is the timestamp one day earlier by default.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current timestamp by default.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of parameters that can be returned on each page. Value range: 1 - 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Parameter offset on each page. The value starts from 0 and the default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting rule by UpdateTime. Valid values: asc and desc.
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

        /**
         * Sorting rule by OccurTime. Valid values: asc or desc. Sorting by UpdateTimeOrder takes a higher priority.
         * @type {string || null}
         */
        this.OccurTimeOrder = null;

        /**
         * Filter by event type. The value 1 indicates service issues. The value 2 indicates other subscriptions.
         * @type {Array.<number> || null}
         */
        this.AccidentType = null;

        /**
         * Filter by event. The value 1 indicates CVM storage issues. The value 2 indicates CVM network connection issues. The value 3 indicates that the CVM runs exceptionally. The value 202 indicates that an ISP network jitter occurs.
         * @type {Array.<number> || null}
         */
        this.AccidentEvent = null;

        /**
         * Filter by event status. The value 0 indicates that the event has been recovered. The value 1 indicates that the event has not been recovered.
         * @type {Array.<number> || null}
         */
        this.AccidentStatus = null;

        /**
         * Filter by region where the event occurs. The value gz indicates Guangzhou. The value sh indicates Shanghai.
         * @type {Array.<string> || null}
         */
        this.AccidentRegion = null;

        /**
         * Filter by affected resource, such as ins-19a06bka.
         * @type {string || null}
         */
        this.AffectResource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.AccidentType = 'AccidentType' in params ? params.AccidentType : null;
        this.AccidentEvent = 'AccidentEvent' in params ? params.AccidentEvent : null;
        this.AccidentStatus = 'AccidentStatus' in params ? params.AccidentStatus : null;
        this.AccidentRegion = 'AccidentRegion' in params ? params.AccidentRegion : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;

    }
}

/**
 * OverView object returned by the DescribeProductEventList API
 * @class
 */
class DescribeProductEventListOverView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of events whose statuses have changed.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.StatusChangeAmount = null;

        /**
         * Number of events whose alarm statuses are not configured.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UnConfigAlarmAmount = null;

        /**
         * Number of exceptional events.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UnNormalEventAmount = null;

        /**
         * Number of events that have not been recovered.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UnRecoverAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusChangeAmount = 'StatusChangeAmount' in params ? params.StatusChangeAmount : null;
        this.UnConfigAlarmAmount = 'UnConfigAlarmAmount' in params ? params.UnConfigAlarmAmount : null;
        this.UnNormalEventAmount = 'UnNormalEventAmount' in params ? params.UnNormalEventAmount : null;
        this.UnRecoverAmount = 'UnRecoverAmount' in params ? params.UnRecoverAmount : null;

    }
}

/**
 * Meaning of metric data
 * @class
 */
class MetricObjectMeaning extends  AbstractModel {
    constructor(){
        super();

        /**
         * Meaning of the metric in English
         * @type {string || null}
         */
        this.En = null;

        /**
         * Meaning of the metric in Chinese
         * @type {string || null}
         */
        this.Zh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.En = 'En' in params ? params.En : null;
        this.Zh = 'Zh' in params ? params.Zh : null;

    }
}

/**
 * Metric names and values
 * @class
 */
class MetricDatum extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric value.
         * @type {number || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeletePolicyGroup request structure.
 * @class
 */
class DeletePolicyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID.
         * @type {Array.<number> || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * User callback information in the output of policy query
 * @class
 */
class DescribePolicyGroupInfoCallback extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of the user callback API.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * Status of the user callback API. The value 0 indicates that the API is not verified. The value 1 indicates that the API is verified. The value 2 indicates that a URL exists but the API fails to be verified.
         * @type {number || null}
         */
        this.ValidFlag = null;

        /**
         * Verification code of the user callback API.
         * @type {string || null}
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ValidFlag = 'ValidFlag' in params ? params.ValidFlag : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * Instance group information returned by the DescribeBindingPolicyObjectList API
 * @class
 */
class DescribeBindingPolicyObjectListInstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Alarm policy type name.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Uin that was last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Instance group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Number of instances.
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Regions where the instances reside.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * DescribePolicyConditionList response structure.
 * @class
 */
class DescribePolicyConditionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of Alarm policy conditions.
         * @type {Array.<DescribePolicyConditionListCondition> || null}
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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyConditionListCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindingPolicyObject response structure.
 * @class
 */
class UnBindingPolicyObjectResponse extends  AbstractModel {
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
 * DescribePolicyConditionList.ConfigManual.CalcType
 * @class
 */
class DescribePolicyConditionListConfigManualCalcType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value of CalcType.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * Required or not.
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * PutMonitorData response structure.
 * @class
 */
class PutMonitorDataResponse extends  AbstractModel {
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
 * Recipient information.
 * @class
 */
class ReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the alarm period. Value range: [0,86400). Convert the Unix timestamp to Beijing time and then remove the date. For example, 7200 indicates “10:0:0”.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the alarm period. The meaning is the same as that of StartTime.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Alarm notification type. Valid values: "SMS", "SITE", "EMAIL", "CALL", and "WECHAT".
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Recipient type. Valid values: group and user.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * ReceiverId
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Call alarm notification time. Valid values: OCCUR (indicating that a notice is sent when the alarm is reported) and RECOVER (indicating that a notice is sent when the alarm is cleared).
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * Uid of the alarm call receiver.
         * @type {Array.<number> || null}
         */
        this.UidList = null;

        /**
         * Number of alarm call rounds.
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * Person interval of alarm calls in seconds.
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * Round interval of alarm calls in seconds.
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * Notification method when an alarm is cleared. Valid value: SMS.
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

        /**
         * Whether to send an alarm call delivery notice. The value 0 indicates that no notice needs to be sent. The value 1 indicates that a notice needs to be sent.
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * Recipient group list. The list of recipient group IDs that is queried by a platform API.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * Recipient list. The list of recipient IDs that is queried by a platform API.
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * Language of received alarms. Enumerated values: zh-CN and en-US.
         * @type {string || null}
         */
        this.ReceiveLanguage = null;

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
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

    }
}

/**
 * ModifyAlarmReceivers request structure.
 * @class
 */
class ModifyAlarmReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a policy group whose recipient needs to be modified.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Required. The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * New recipient information. If this parameter is not set, all recipients will be deleted.
         * @type {Array.<ReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new ReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

    }
}

/**
 * Input parameter Dimensions of the DescribeProductEventList API
 * @class
 */
class DescribeProductEventListDimensions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dimension value.
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
 * DescribePolicyGroupInfo response structure.
 * @class
 */
class DescribePolicyGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * ID of the project to which the policy group belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Whether it is the default policy. The value 0 indicates that it is not the default policy. The value 1 indicates that it is the default policy.
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Policy type.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Policy description
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Policy type name.
         * @type {string || null}
         */
        this.ShowName = null;

        /**
         * Uin that was last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Last update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Regions that support this policy.
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * List of policy type dimensions.
         * @type {Array.<string> || null}
         */
        this.DimensionGroup = null;

        /**
         * Threshold rule list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoCondition> || null}
         */
        this.ConditionsConfig = null;

        /**
         * Product event rule list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoEventCondition> || null}
         */
        this.EventConfig = null;

        /**
         * Recipient list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribePolicyGroupInfoReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * User callback information.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyGroupInfoCallback || null}
         */
        this.Callback = null;

        /**
         * Template-based policy group.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribePolicyGroupInfoConditionTpl || null}
         */
        this.ConditionsTemp = null;

        /**
         * Whether the policy can be set as the default policy.
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * Whether the “AND” rule is used.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ShowName = 'ShowName' in params ? params.ShowName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DimensionGroup = 'DimensionGroup' in params ? params.DimensionGroup : null;

        if (params.ConditionsConfig) {
            this.ConditionsConfig = new Array();
            for (let z in params.ConditionsConfig) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.ConditionsConfig[z]);
                this.ConditionsConfig.push(obj);
            }
        }

        if (params.EventConfig) {
            this.EventConfig = new Array();
            for (let z in params.EventConfig) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConfig[z]);
                this.EventConfig.push(obj);
            }
        }

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new DescribePolicyGroupInfoReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

        if (params.Callback) {
            let obj = new DescribePolicyGroupInfoCallback();
            obj.deserialize(params.Callback)
            this.Callback = obj;
        }

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicAlarmList response structure.
 * @class
 */
class DescribeBasicAlarmListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeBasicAlarmListAlarms> || null}
         */
        this.Alarms = null;

        /**
         * Total number.
Note: This field may return null, indicating that no valid value was found.
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

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new DescribeBasicAlarmListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dimensions of the DescribeBindingPolicyObjectList API
 * @class
 */
class DescribeBindingPolicyObjectListDimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region abbreviation.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Combined JSON string of dimensions.
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Combined JSON string of event dimensions.
         * @type {string || null}
         */
        this.EventDimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

    }
}

/**
 * Alarm threshold conditions in the output of policy query
 * @class
 */
class DescribePolicyGroupInfoCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricShowName = null;

        /**
         * Data statistics period in seconds.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Metric ID.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Threshold rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Alarm sending and converging type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Alarm sending period in seconds. The value <0 indicates that no alarm will be triggered. The value 0 indicates that an alarm is triggered only once. The value >0 indicates that an alarm is triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Comparative type. The value 1 indicates greater than. The value 2 indicates greater than or equal to. The value 3 indicates smaller than. The value 4 indicates smaller than or equal to. The value 5 indicates equal to. The value 6 indicates not equal to. The value 7 indicates day-on-day increase. The value 8 indicates day-on-day decrease. The value 9 indicates week-on-week increase. The value 10 indicates week-on-week decrease. The value 11 indicates periodical increase. The value 12 indicates periodical decrease.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * Threshold.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * Duration at which an alarm will be triggered in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.ContinueTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.ContinueTime = 'ContinueTime' in params ? params.ContinueTime : null;

    }
}

/**
 * GetMonitorData response structure.
 * @class
 */
class GetMonitorDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical period
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Array of data points
         * @type {Array.<DataPoint> || null}
         */
        this.DataPoints = null;

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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.DataPoints) {
            this.DataPoints = new Array();
            for (let z in params.DataPoints) {
                let obj = new DataPoint();
                obj.deserialize(params.DataPoints[z]);
                this.DataPoints.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of the unit and supported statistical period of the business metric
 * @class
 */
class MetricSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace. Each Tencent Cloud product has a namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric Name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Unit used by the metric
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Unit used by the metric
         * @type {string || null}
         */
        this.UnitCname = null;

        /**
         * Statistical period in seconds supported by the metric, such as 60 and 300
         * @type {Array.<number> || null}
         */
        this.Period = null;

        /**
         * Metric method during the statistical period
         * @type {Array.<PeriodsSt> || null}
         */
        this.Periods = null;

        /**
         * Meaning of the statistical metric
         * @type {MetricObjectMeaning || null}
         */
        this.Meaning = null;

        /**
         * Dimension description
         * @type {Array.<DimensionsDesc> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.UnitCname = 'UnitCname' in params ? params.UnitCname : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Periods) {
            this.Periods = new Array();
            for (let z in params.Periods) {
                let obj = new PeriodsSt();
                obj.deserialize(params.Periods[z]);
                this.Periods.push(obj);
            }
        }

        if (params.Meaning) {
            let obj = new MetricObjectMeaning();
            obj.deserialize(params.Meaning)
            this.Meaning = obj;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionsDesc();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * DescribeBindingPolicyObjectList response structure.
 * @class
 */
class DescribeBindingPolicyObjectListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of bound object instances.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeBindingPolicyObjectListInstance> || null}
         */
        this.List = null;

        /**
         * Total number of bound object instances.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of object instances that are not shielded.
         * @type {number || null}
         */
        this.NoShieldedSum = null;

        /**
         * Bound instance group information. You do not need to set this parameter if no instance group is bound.
Note: This field may return null, indicating that no valid value was found.
         * @type {DescribeBindingPolicyObjectListInstanceGroup || null}
         */
        this.InstanceGroup = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new DescribeBindingPolicyObjectListInstance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;

        if (params.InstanceGroup) {
            let obj = new DescribeBindingPolicyObjectListInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Template-based policy group information in the output of policy query
 * @class
 */
class DescribePolicyGroupInfoConditionTpl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Policy type.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Policy group remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Uin that was last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Update time.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Whether the “AND” rule is used.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DescribeBindingPolicyObjectList request structure.
 * @class
 */
class DescribeBindingPolicyObjectListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Number of parameters that can be returned on each page. Value range: 1 - 100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Parameter offset on each page. The value starts from 0 and the default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Dimensions of filtering objects.
         * @type {Array.<DescribeBindingPolicyObjectListDimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeBindingPolicyObjectListDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * CreatePolicyGroup response structure.
 * @class
 */
class CreatePolicyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the created policy group.
         * @type {number || null}
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
 * UnBindingAllPolicyObject request structure.
 * @class
 */
class UnBindingAllPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID.
         * @type {number || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * InstanceGroup in Alarms returned by the DescribeBasicAlarmList API
 * @class
 */
class InstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Instance group name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.InstanceGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.InstanceGroupName = 'InstanceGroupName' in params ? params.InstanceGroupName : null;

    }
}

/**
 * Event alarm conditions in the output of policy query
 * @class
 */
class DescribePolicyGroupInfoEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Event alarm rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Event name.
         * @type {string || null}
         */
        this.EventShowName = null;

        /**
         * Alarm sending period in seconds. The value <0 indicates that no alarm will be triggered. The value 0 indicates that an alarm is triggered only once. The value >0 indicates that an alarm is triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Alarm sending and converging type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;

    }
}

/**
 * DescribeBaseMetrics response structure.
 * @class
 */
class DescribeBaseMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listed of queried metric descriptions
         * @type {Array.<MetricSet> || null}
         */
        this.MetricSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetricSet) {
            this.MetricSet = new Array();
            for (let z in params.MetricSet) {
                let obj = new MetricSet();
                obj.deserialize(params.MetricSet[z]);
                this.MetricSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendCustomAlarmMsg response structure.
 * @class
 */
class SendCustomAlarmMsgResponse extends  AbstractModel {
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
 * DescribePolicyConditionList.ConfigManual.PeriodNum
 * @class
 */
class DescribePolicyConditionListConfigManualPeriodNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of default periods.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Default = null;

        /**
         * Number of optional periods.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * Required or not.
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * Object instance information returned by the DescribeBindingPolicyObjectListInstance API.
 * @class
 */
class DescribeBindingPolicyObjectListInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the object.
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * Dimension set of an object instance, which is a jsonObj string.
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Whether the object is shielded. The value 0 indicates that the object is not shielded. The value 1 indicates that the object is shielded.
         * @type {number || null}
         */
        this.IsShielded = null;

        /**
         * Region where the object resides.
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
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * SendCustomAlarmMsg request structure.
 * @class
 */
class SendCustomAlarmMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API module name. The value for the current API is monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Message policy ID, which is configured on the custom message page of Cloud Monitor.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Custom message content that a user wants to send.
         * @type {string || null}
         */
        this.Msg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.ContinueTime
 * @class
 */
class DescribePolicyConditionListConfigManualContinueTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default duration in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Default = null;

        /**
         * Optional duration in seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * Required or not.
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyGroupList request structure.
 * @class
 */
class DescribePolicyGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Number of parameters that can be returned on each page. Value range: 1 - 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Parameter offset on each page. The value starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Search by policy name.
         * @type {string || null}
         */
        this.Like = null;

        /**
         * Instance group ID.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Sort by update time. Valid values: asc and desc.
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

        /**
         * Project ID list.
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * List of alarm policy types.
         * @type {Array.<string> || null}
         */
        this.ViewNames = null;

        /**
         * Whether to filter policy groups without recipients. The value 1 indicates that policy groups without recipients will be filtered. The value 0 indicates that policy groups without recipients will not be filtered.
         * @type {number || null}
         */
        this.FilterUnuseReceiver = null;

        /**
         * Filter by recipient group.
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Filter by recipient.
         * @type {Array.<string> || null}
         */
        this.ReceiverUserList = null;

        /**
         * Dimension set field (json string), for example, [[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]].
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Template-based policy group IDs, which are separated by commas.
         * @type {string || null}
         */
        this.ConditionTempGroupId = null;

        /**
         * Filter by recipient or recipient group. The value “user” indicates by recipient. The value “group” indicates by recipient group.
         * @type {string || null}
         */
        this.ReceiverType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Like = 'Like' in params ? params.Like : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.FilterUnuseReceiver = 'FilterUnuseReceiver' in params ? params.FilterUnuseReceiver : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;

    }
}

/**
 * DescribeAccidentEventList response structure.
 * @class
 */
class DescribeAccidentEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Platform event list.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeAccidentEventListAlarms> || null}
         */
        this.Alarms = null;

        /**
         * Total number of platform events.
Note: This field may return null, indicating that no valid value was found.
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

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new DescribeAccidentEventListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductEventList response structure.
 * @class
 */
class DescribeProductEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event list
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<DescribeProductEventListEvents> || null}
         */
        this.Events = null;

        /**
         * Event statistics.
         * @type {DescribeProductEventListOverView || null}
         */
        this.OverView = null;

        /**
         * Total number of events.
Note: This field may return null, indicating that no valid value was found.
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DescribeProductEventListEvents();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }

        if (params.OverView) {
            let obj = new DescribeProductEventListOverView();
            obj.deserialize(params.OverView)
            this.OverView = obj;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaseMetrics request structure.
 * @class
 */
class DescribeBaseMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service namespace. Different Tencent Cloud services have different namespaces. For more information on service namespaces, see the monitoring API documentation of each product. For example, you can see [CVM Monitoring APIs](https://cloud.tencent.com/document/api/248/30385) for the namespace of CVM.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name. Different Tencent Cloud services have different metric names. For more information on service metric names, see the monitoring API documentation of each product. For example, you can see the [CVM Monitoring APIs](https://cloud.tencent.com/document/api/248/30385) for the metric names of CVM.
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * Combination of instance object dimensions
 * @class
 */
class Dimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance dimension name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Instance dimension value
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
 * Monitoring data point
 * @class
 */
class DataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Combination of instance object dimensions
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * The array of timestamps indicating at which points in time there is data. Missing timestamps have no data points (i.e., missed)
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * The array of monitoring values, which is in one-to-one correspondence to Timestamps
         * @type {Array.<number> || null}
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

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * UnBindingAllPolicyObject response structure.
 * @class
 */
class UnBindingAllPolicyObjectResponse extends  AbstractModel {
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
 * DescribePolicyConditionList.ConfigManual.StatType
 * @class
 */
class DescribePolicyConditionListConfigManualStatType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data aggregation method in a period of 5 seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P5 = null;

        /**
         * Data aggregation method in a period of 10 seconds.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P10 = null;

        /**
         * Data aggregation method in a period of 1 second.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P60 = null;

        /**
         * Data aggregation method in a period of 5 minutes.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P300 = null;

        /**
         * Data aggregation method in a period of 10 minutes.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P600 = null;

        /**
         * Data aggregation method in a period of 30 minutes.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P1800 = null;

        /**
         * Data aggregation method in a period of 1 hour.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P3600 = null;

        /**
         * Data aggregation method in a period of 1 day.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.P86400 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.P5 = 'P5' in params ? params.P5 : null;
        this.P10 = 'P10' in params ? params.P10 : null;
        this.P60 = 'P60' in params ? params.P60 : null;
        this.P300 = 'P300' in params ? params.P300 : null;
        this.P600 = 'P600' in params ? params.P600 : null;
        this.P1800 = 'P1800' in params ? params.P1800 : null;
        this.P3600 = 'P3600' in params ? params.P3600 : null;
        this.P86400 = 'P86400' in params ? params.P86400 : null;

    }
}

/**
 * Dimensions of events returned by the DescribeProductEventList API
 * @class
 */
class DescribeProductEventListEventsDimensions extends  AbstractModel {
    constructor(){
        super();

        /**
         * English dimension name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Chinese dimension name.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dimension value.
Note: This field may return null, indicating that no valid value was found.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcValue
 * @class
 */
class DescribePolicyConditionListConfigManualCalcValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default value.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Fixed value.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Fixed = null;

        /**
         * Maximum value.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Required or not.
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Fixed = 'Fixed' in params ? params.Fixed : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * ModifyAlarmReceivers response structure.
 * @class
 */
class ModifyAlarmReceiversResponse extends  AbstractModel {
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
 * Instance group that is bound to a policy group returned by the DescribePolicyGroupList API
 * @class
 */
class DescribePolicyGroupListGroupInstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group name ID.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Policy type view name.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Uin that is last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Instance group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Number of instances.
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.InsertTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

    }
}

/**
 * BindingPolicyObject response structure.
 * @class
 */
class BindingPolicyObjectResponse extends  AbstractModel {
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

module.exports = {
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    Instance: Instance,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    PutMonitorDataRequest: PutMonitorDataRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    DimensionsDesc: DimensionsDesc,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    GetMonitorDataRequest: GetMonitorDataRequest,
    PeriodsSt: PeriodsSt,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    MetricObjectMeaning: MetricObjectMeaning,
    MetricDatum: MetricDatum,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    PutMonitorDataResponse: PutMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    InstanceGroup: InstanceGroup,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    Dimension: Dimension,
    DataPoint: DataPoint,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
