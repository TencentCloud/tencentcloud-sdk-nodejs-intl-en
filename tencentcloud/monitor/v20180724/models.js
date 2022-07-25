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
 * Instance tag information of the alarm policy
 * @class
 */
class TagInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Number of instances
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * Service type, for example, CVM
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Region ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Binding status. 2: bound; 1: binding
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BindingStatus = null;

        /**
         * Tag status. 2: existent; 1: nonexistent
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TagStatus = null;

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
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.BindingStatus = 'BindingStatus' in params ? params.BindingStatus : null;
        this.TagStatus = 'TagStatus' in params ? params.TagStatus : null;

    }
}

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
 * ModifyAlarmPolicyNotice response structure.
 * @class
 */
class ModifyAlarmPolicyNoticeResponse extends  AbstractModel {
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
 * ModifyAlarmPolicyInfo request structure.
 * @class
 */
class ModifyAlarmPolicyInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Field to be modified. Valid values: NAME (policy name), REMARK (policy remarks)
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value after modification
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Event alarm condition passed in when a policy is created.
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
         * Alarm sending period in seconds. The value <0 indicates that no alarm will be triggered. The value 0 indicates that an alarm is triggered only once. The value >0 indicates that an alarm is triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * If a metric is created based on a template, the RuleId of the metric in the template must be passed in.
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
         * API component name. It is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Filter by product type. For example, 'cvm' indicates Cloud Virtual Machine.
         * @type {Array.<string> || null}
         */
        this.ProductName = null;

        /**
         * Filter by product name. For example, "guest_reboot" indicates server restart.
         * @type {Array.<string> || null}
         */
        this.EventName = null;

        /**
         * Affected object, such as "ins-19708ino"
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * Filter by dimension, such as by public IP: 10.0.0.1.
         * @type {Array.<DescribeProductEventListDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * Region filter parameter for service events.
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * Filter by event type. Valid values: ["status_change","abnormal"], which indicate events whose statuses have changed and events with exceptions respectively.
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
         * Start time, which is the timestamp one day prior by default.
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
 * Task triggered by alarm policy
 * @class
 */
class AlarmPolicyTriggerTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Triggered task type. Valid value: AS (auto scaling)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Configuration information in JSON format, such as {"Key1":"Value1","Key2":"Value2"}
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskConfig = 'TaskConfig' in params ? params.TaskConfig : null;

    }
}

/**
 * DescribeServiceDiscovery response structure.
 * @class
 */
class DescribeServiceDiscoveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned scrape configurations
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceDiscoveryItem> || null}
         */
        this.ServiceDiscoverySet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceDiscoverySet) {
            this.ServiceDiscoverySet = new Array();
            for (let z in params.ServiceDiscoverySet) {
                let obj = new ServiceDiscoveryItem();
                obj.deserialize(params.ServiceDiscoverySet[z]);
                this.ServiceDiscoverySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordingRules response structure.
 * @class
 */
class DescribeRecordingRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of rule groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Rule group details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RecordingRuleSet> || null}
         */
        this.RecordingRuleSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RecordingRuleSet) {
            this.RecordingRuleSet = new Array();
            for (let z in params.RecordingRuleSet) {
                let obj = new RecordingRuleSet();
                obj.deserialize(params.RecordingRuleSet[z]);
                this.RecordingRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TMP tag
 * @class
 */
class PrometheusTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DestroyPrometheusInstance response structure.
 * @class
 */
class DestroyPrometheusInstanceResponse extends  AbstractModel {
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
 * DescribeAlertRules request structure.
 * @class
 */
class DescribeAlertRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

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

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule status code. Valid values:
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Alerting rule template category
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribePrometheusInstances response structure.
 * @class
 */
class DescribePrometheusInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusInstancesItem> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new PrometheusInstancesItem();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * BindingPolicyObject request structure.
 * @class
 */
class BindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Required. The value is fixed to monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy group ID, such as `4739573`. This parameter will be disused soon. Another parameter `PolicyId` is recommended.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Alarm policy ID, such as `policy-gh892hg0`. At least one of the two parameters, `PolicyId` and `GroupId`, must be specified; otherwise, an error will be reported. `PolicyId` is preferred over `GroupId` when both of them are specified.
         * @type {string || null}
         */
        this.PolicyId = null;

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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
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
 * DescribeAlarmNoticeCallbacks request structure.
 * @class
 */
class DescribeAlarmNoticeCallbacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
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
         * Bound instance group information. This parameter is not configured if no instance group is bound.
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
 * UpdateAlertRuleState response structure.
 * @class
 */
class UpdateAlertRuleStateResponse extends  AbstractModel {
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
 * CreatePrometheusScrapeJob response structure.
 * @class
 */
class CreatePrometheusScrapeJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * User callback information output by the policy query
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
 * Metric information of alarm records
 * @class
 */
class AlarmHistoryMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace used to query data by Tencent Cloud service monitoring type
         * @type {string || null}
         */
        this.QceNamespace = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical period
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Value triggering alarm
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Metric display name
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
        this.QceNamespace = 'QceNamespace' in params ? params.QceNamespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateAlarmPolicy request structure.
 * @class
 */
class CreateAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Policy name, which can contain up to 20 characters
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring)
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Type of alarm policy, which can be obtained via [DescribeAllNamespaces](https://intl.cloud.tencent.com/document/product/248/48683?from_cn_redirect=1). For the monitoring of Tencent Cloud services, the value of this parameter is `QceNamespacesNew.N.Id` of the output parameter of `DescribeAllNamespaces`, for example, `cvm_device`.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Remarks with up to 100 letters, digits, underscores, and hyphens
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to enable. Valid values: 0 (no), 1 (yes). Default value: 1. This parameter can be left empty
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Project ID. For products with different projects, a value other than `-1` must be passed in. `-1`: no project; `0`: default project. If no value is passed in, `-1` will be used. The supported project IDs can be viewed on the [**Account Center** > **Project Management**](https://console.cloud.tencent.com/project) page of the console.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Trigger condition template ID. Pass in this parameter if the policy is associated with the trigger condition template; otherwise, pass in the `Condition` parameter. The trigger condition template ID can be obtained via [`DescribeConditionsTemplateList`](https://intl.cloud.tencent.com/document/api/248/70250?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ConditionTemplateId = null;

        /**
         * Metric trigger condition. The supported metrics can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1).
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * Event trigger condition. The supported events can be queried via [DescribeAlarmEvents](https://intl.cloud.tencent.com/document/product/248/51284?from_cn_redirect=1).
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

        /**
         * List of notification rule IDs, which can be obtained via [DescribeAlarmNotices](https://intl.cloud.tencent.com/document/product/248/51280?from_cn_redirect=1)
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * Triggered task list
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

        /**
         * Global filter.
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * Aggregation dimension list, which is used to specify which dimension keys data is grouped by.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

    }
}

/**
 * CreateExporterIntegration request structure.
 * @class
 */
class CreateExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Integrated configuration
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Kubernetes cluster type. Valid values:
<li> 1 = TKE </li>
<li> 2 = EKS </li>
<li> 3 = MEKS </li>
         * @type {number || null}
         */
        this.KubeType = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeAlarmEvents response structure.
 * @class
 */
class DescribeAlarmEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm event list
         * @type {Array.<AlarmEvent> || null}
         */
        this.Events = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new AlarmEvent();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Last edited time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Regions supported by this policy.
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
         * Whether the policy can be configured as the default policy.
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * Whether the 'AND' rule is used.
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
 * prometheus agent
 * @class
 */
class PrometheusAgent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent IP
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ipv4 = null;

        /**
         * Heartbeat time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeartbeatTime = null;

        /**
         * Last error
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastError = null;

        /**
         * Agent version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * Agent status
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
        this.Name = 'Name' in params ? params.Name : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv4 = 'Ipv4' in params ? params.Ipv4 : null;
        this.HeartbeatTime = 'HeartbeatTime' in params ? params.HeartbeatTime : null;
        this.LastError = 'LastError' in params ? params.LastError : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteExporterIntegration request structure.
 * @class
 */
class DeleteExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kubernetes cluster type. Valid values:
<li> 1 = TKE </li>
<li> 2 = EKS </li>
<li> 3 = MEKS </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyAlarmPolicyNotice request structure.
 * @class
 */
class ModifyAlarmPolicyNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is specified as `monitor`.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID. If both `PolicyIds` and this parameter are returned, only `PolicyIds` takes effect.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * List of alarm notification template IDs.
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * Alarm policy ID array, which can be used to associate notification templates with multiple alarm policies. Max value: 30.
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

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
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

    }
}

/**
 * DeleteAlarmPolicy request structure.
 * @class
 */
class DeleteAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID list
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

    }
}

/**
 * Event alarm conditions
 * @class
 */
class EventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification frequency.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Predefined repeated notification policy. `0`: One-time alarm; `1`: exponential alarm; `2`: consecutive alarm
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Event ID.
         * @type {string || null}
         */
        this.EventID = null;

        /**
         * Displayed event name.
         * @type {string || null}
         */
        this.EventDisplayName = null;

        /**
         * Rule ID.
         * @type {string || null}
         */
        this.RuleID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.EventDisplayName = 'EventDisplayName' in params ? params.EventDisplayName : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;

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

        /**
         * Metric name (in Chinese).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetricCName = null;

        /**
         * Metric name (in English).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetricEName = null;

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
        this.MetricCName = 'MetricCName' in params ? params.MetricCName : null;
        this.MetricEName = 'MetricEName' in params ? params.MetricEName : null;

    }
}

/**
 * DescribeConditionsTemplateList request structure.
 * @class
 */
class DescribeConditionsTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is fixed to `monitor`.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * View name, which can be obtained via [DescribeAllNamespaces](https://intl.cloud.tencent.com/document/product/248/48683?from_cn_redirect=1). For the monitoring of Tencent Cloud services, the value of this parameter is `QceNamespacesNew.N.Id` of the output parameter of `DescribeAllNamespaces`, for example, `cvm_device`.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Filter by trigger condition template name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Filter by trigger condition template ID.
         * @type {string || null}
         */
        this.GroupID = null;

        /**
         * Pagination parameter, which specifies the number of returned results per page. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset starting from 0. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting method by update time. `asc`: Ascending order; `desc`: Descending order.
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;

    }
}

/**
 * DescribePrometheusScrapeJobs request structure.
 * @class
 */
class DescribePrometheusScrapeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of task IDs
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateAlertRule response structure.
 * @class
 */
class CreateAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAlarmPolicyTasks response structure.
 * @class
 */
class ModifyAlarmPolicyTasksResponse extends  AbstractModel {
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
 * Prometheus scrape task
 * @class
 */
class PrometheusScrapeJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * CreatePrometheusMultiTenantInstancePostPayMode request structure.
 * @class
 */
class CreatePrometheusMultiTenantInstancePostPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

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
         * Data retention period in days. Valid values: 15, 30, 45.
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance tag
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * The Grafana instance to be associated
         * @type {string || null}
         */
        this.GrafanaInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.GrafanaInstanceId = 'GrafanaInstanceId' in params ? params.GrafanaInstanceId : null;

    }
}

/**
 * `DescribeMetricData` output parameters
 * @class
 */
class MetricDataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Combination of instance object dimensions
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * Data point list
         * @type {Array.<Point> || null}
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

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new Point();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

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
         * Custom durations in seconds.
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
 * DeleteAlertRules response structure.
 * @class
 */
class DeleteAlertRulesResponse extends  AbstractModel {
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
 * GetMonitorData request structure.
 * @class
 */
class GetMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace, such as QCE/CVM. For more information on the namespaces of each Tencent Cloud service, please see [Tencent Cloud Service Metrics](https://intl.cloud.tencent.com/document/product/248/6140?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name, such as `CPUUsage`. Only one monitoring metric can be pulled at a time. For more information on the metrics of each Tencent Cloud service, please see [Tencent Cloud Service Metrics](https://intl.cloud.tencent.com/document/product/248/6140?from_cn_redirect=1). The corresponding metric name is `MetricName`.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * The dimension combination for instance objects, which is in the form of a set of key-value pairs. The dimension fields for instances of different Tencent Cloud services are completely different. For example, the field is [{"Name":"InstanceId","Value":"ins-j0hk02zo"}] for CVM instances, [{"Name":"instanceId","Value":"ckafka-l49k54dd"}] for CKafka instances, and [{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}] for COS instances. For more information on the dimensions of various Tencent Cloud services, please see [Tencent Cloud Service Metrics](https://intl.cloud.tencent.com/document/product/248/6140?from_cn_redirect=1). In each document, the dimension column displays a dimension combination’s key, which has a corresponding value. A single request can get the data of up to 10 instances.
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * Monitoring statistical period in seconds, such as 60. Default value: 300. The statistical period varies by metric. For more information on the statistical periods supported by each Tencent Cloud service, please see [Tencent Cloud Service Metrics](https://intl.cloud.tencent.com/document/product/248/6140?from_cn_redirect=1). The values in the statistical period column are the supported statistical periods. A single request can get up to 1,440 data points.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Start time such as 2018-09-22T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current time by default, such as 2018-09-22T20:51:23+08:00. `EndTime` cannot be earlier than `StartTime`
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
 * DescribeAlarmPolicies response structure.
 * @class
 */
class DescribeAlarmPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of policies
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Policy array
         * @type {Array.<AlarmPolicy> || null}
         */
        this.Policies = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Policies) {
            this.Policies = new Array();
            for (let z in params.Policies) {
                let obj = new AlarmPolicy();
                obj.deserialize(params.Policies[z]);
                this.Policies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStatisticData request structure.
 * @class
 */
class DescribeStatisticDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module, whose value is fixed at `monitor`
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Namespace. Valid values: QCE/TKE
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name list
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Dimension condition. The `=` and `in` operators are supported
         * @type {Array.<MidQueryCondition> || null}
         */
        this.Conditions = null;

        /**
         * Statistical period in seconds. Default value: 300. Optional values: 60, 300, 3,600, and 86,400.
Due to the storage period limit, the statistical period is subject to the time range of statistics:
60s: The time range is less than 12 hours, and the timespan between `StartTime` and the current time cannot exceed 15 days.
300s: The time range is less than three days, and the timespan between `StartTime` and the current time cannot exceed 31 days.
3,600s: The time range is less than 30 days, and the timespan between `StartTime` and the current time cannot exceed 93 days.
86,400s: The time range is less than 186 days, and the timespan between `StartTime` and the current time cannot exceed 186 days.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Start time, which is the current time by default, such as 2020-12-08T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current time by default, such as 2020-12-08T19:51:23+08:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * `groupBy` by the specified dimension
         * @type {Array.<string> || null}
         */
        this.GroupBys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new MidQueryCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.GroupBys = 'GroupBys' in params ? params.GroupBys : null;

    }
}

/**
 * Alarm condition template
 * @class
 */
class ConditionsTemp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Metric trigger condition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * Event trigger condition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }

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
         * API component name. The value for the current API is monitor.
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
 * CreateRecordingRule request structure.
 * @class
 */
class CreateRecordingRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Recording rule group content in YAML format
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rule status code. Valid values:
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
Default value: 2 (enabled).
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
        this.Group = 'Group' in params ? params.Group : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * ModifyPrometheusInstanceAttributes request structure.
 * @class
 */
class ModifyPrometheusInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Storage period. Valid values: 15, 30, 45. This parameter is not applicable to monthly subscribed instances.
         * @type {number || null}
         */
        this.DataRetentionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;

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
         * Custom periods in seconds.
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
 * Metric configuration
 * @class
 */
class MetricConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allowed operator
         * @type {Array.<string> || null}
         */
        this.Operator = null;

        /**
         * Allowed data cycle in seconds
         * @type {Array.<number> || null}
         */
        this.Period = null;

        /**
         * Allowed number of continuous cycles
         * @type {Array.<number> || null}
         */
        this.ContinuePeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;

    }
}

/**
 * DescribeServiceDiscovery request structure.
 * @class
 */
class DescribeServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>TKE: ID of the integrated TKE cluster</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * Kubernetes cluster type:
<li> 1 = TKE </li>
         * @type {number || null}
         */
        this.KubeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;

    }
}

/**
 * Unified namespace information
 * @class
 */
class CommonNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Namespace value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Configuration information
         * @type {string || null}
         */
        this.Config = null;

        /**
         * List of supported regions
         * @type {Array.<string> || null}
         */
        this.AvailableRegions = null;

        /**
         * Sort ID
         * @type {number || null}
         */
        this.SortId = null;

        /**
         * Unique ID in Dashboard
         * @type {string || null}
         */
        this.DashboardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.AvailableRegions = 'AvailableRegions' in params ? params.AvailableRegions : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;

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
 * DescribeConditionsTemplateList response structure.
 * @class
 */
class DescribeConditionsTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of templates.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Template list.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TemplateGroup> || null}
         */
        this.TemplateGroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TemplateGroupList) {
            this.TemplateGroupList = new Array();
            for (let z in params.TemplateGroupList) {
                let obj = new TemplateGroup();
                obj.deserialize(params.TemplateGroupList[z]);
                this.TemplateGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitorTypes request structure.
 * @class
 */
class DescribeMonitorTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
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
 * DescribeAlarmNotices response structure.
 * @class
 */
class DescribeAlarmNoticesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of alarm notification templates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Alarm notification template list
         * @type {Array.<AlarmNotice> || null}
         */
        this.Notices = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarmPolicyTasks request structure.
 * @class
 */
class ModifyAlarmPolicyTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * List of tasks triggered by alarm policy. If this parameter is left empty, it indicates to unbind all tasks
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

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

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }

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
 * ModifyAlarmPolicyStatus request structure.
 * @class
 */
class ModifyAlarmPolicyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Status. Valid values: 0 (disabled), 1 (enabled)
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * CreatePrometheusMultiTenantInstancePostPayMode response structure.
 * @class
 */
class CreatePrometheusMultiTenantInstancePostPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePrometheusAgentStatus response structure.
 * @class
 */
class UpdatePrometheusAgentStatusResponse extends  AbstractModel {
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
 * Prometheus scrape configuration information
 * @class
 */
class ServiceDiscoveryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scrape configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Namespace of the scrape configuration
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Scrape configuration type: ServiceMonitor/PodMonitor
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Namespace selection method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceSelector = null;

        /**
         * Label selection method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Selector = null;

        /**
         * `Endpoints` information (PodMonitor does not have this parameter)
         * @type {string || null}
         */
        this.Endpoints = null;

        /**
         * Scrape configuration information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.NamespaceSelector = 'NamespaceSelector' in params ? params.NamespaceSelector : null;
        this.Selector = 'Selector' in params ? params.Selector : null;
        this.Endpoints = 'Endpoints' in params ? params.Endpoints : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * SetDefaultAlarmPolicy request structure.
 * @class
 */
class SetDefaultAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ModifyAlarmNotice request structure.
 * @class
 */
class ModifyAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm notification rule name, which can contain up to 60 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification type. Valid values: ALARM (for unresolved alarms), OK (for resolved alarms), ALL (for all alarms)
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * Notification language. Valid values: zh-CN (Chinese), en-US (English)
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * Alarm notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * User notifications (up to 5)
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * Callback notifications (up to 3)
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

        /**
         * The operation of pushing alarm notifications to CLS. Up to one CLS log topic can be configured.
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }

    }
}

/**
 * CreateServiceDiscovery request structure.
 * @class
 */
class CreateServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>TKE: ID of the integrated TKE cluster</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * Kubernetes cluster type:
<li> 1 = TKE </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * Scrape configuration type. Valid values:
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Scrape configuration information
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * DescribeAlertRules response structure.
 * @class
 */
class DescribeAlertRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of alerting rules
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Alerting rule details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusRuleSet> || null}
         */
        this.AlertRuleSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AlertRuleSet) {
            this.AlertRuleSet = new Array();
            for (let z in params.AlertRuleSet) {
                let obj = new PrometheusRuleSet();
                obj.deserialize(params.AlertRuleSet[z]);
                this.AlertRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KV parameter of the Prometheus alerting rule
 * @class
 */
class PrometheusRuleKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
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
 * BindPrometheusManagedGrafana response structure.
 * @class
 */
class BindPrometheusManagedGrafanaResponse extends  AbstractModel {
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
 * Alarm policy details
 * @class
 */
class AlarmPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Alarm policy name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Status. Valid values: 0 (disabled), 1 (enabled)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Number of instances bound to policy group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UseSum = null;

        /**
         * Project ID. Valid values: -1 (no project), 0 (default project)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Project name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Alarm policy type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Trigger condition template ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConditionTemplateId = null;

        /**
         * Metric trigger condition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * Event trigger condition
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

        /**
         * Notification rule ID list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * Notification rule list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AlarmNotice> || null}
         */
        this.Notices = null;

        /**
         * Triggered task list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

        /**
         * Template policy group
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ConditionsTemp || null}
         */
        this.ConditionsTemp = null;

        /**
         * `Uin` of the last modifying user
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Update time
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Region
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * Namespace display name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceShowName = null;

        /**
         * Whether it is the default policy. Valid values: 1 (yes), 0 (no)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Whether the default policy can be set. Valid values: 1 (yes), 0 (no)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CanSetDefault = null;

        /**
         * Instance group ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Total number of instances in instance group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * Instance group name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceGroupName = null;

        /**
         * Trigger condition type. Valid values: STATIC (static threshold), DYNAMIC (dynamic)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Policy ID for instance/instance group binding and unbinding APIs (BindingPolicyObject, UnBindingAllPolicyObject, UnBindingPolicyObject)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Tag
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TagInstance> || null}
         */
        this.TagInstances = null;

        /**
         * Information on the filter dimension associated with a policy.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilterDimensionsParam = null;

        /**
         * Whether it is a quick alarm policy.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsOneClick = null;

        /**
         * Whether the quick alarm policy is enabled.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OneClickStatus = null;

        /**
         * The number of advanced metrics.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AdvancedMetricNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.UseSum = 'UseSum' in params ? params.UseSum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }

        if (params.ConditionsTemp) {
            let obj = new ConditionsTemp();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.NamespaceShowName = 'NamespaceShowName' in params ? params.NamespaceShowName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.InstanceGroupName = 'InstanceGroupName' in params ? params.InstanceGroupName : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.TagInstances) {
            this.TagInstances = new Array();
            for (let z in params.TagInstances) {
                let obj = new TagInstance();
                obj.deserialize(params.TagInstances[z]);
                this.TagInstances.push(obj);
            }
        }
        this.FilterDimensionsParam = 'FilterDimensionsParam' in params ? params.FilterDimensionsParam : null;
        this.IsOneClick = 'IsOneClick' in params ? params.IsOneClick : null;
        this.OneClickStatus = 'OneClickStatus' in params ? params.OneClickStatus : null;
        this.AdvancedMetricNumber = 'AdvancedMetricNumber' in params ? params.AdvancedMetricNumber : null;

    }
}

/**
 * CreateAlarmPolicy response structure.
 * @class
 */
class CreateAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Alarm policy ID, which can be used when you call APIs ([BindingPolicyObject](https://intl.cloud.tencent.com/document/product/248/40421?from_cn_redirect=1), [UnBindingAllPolicyObject](https://intl.cloud.tencent.com/document/product/248/40568?from_cn_redirect=1), [UnBindingPolicyObject](https://intl.cloud.tencent.com/document/product/248/40567?from_cn_redirect=1)) to bind/unbind instances or instance groups to/from an alarm policy
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Prometheus agent management command line
 * @class
 */
class ManagementCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent installation command
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Install = null;

        /**
         * Agent restart command
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Restart = null;

        /**
         * Agent stop command
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Stop = null;

        /**
         * Agent status detection command
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusCheck = null;

        /**
         * Agent log detection command
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Install = 'Install' in params ? params.Install : null;
        this.Restart = 'Restart' in params ? params.Restart : null;
        this.Stop = 'Stop' in params ? params.Stop : null;
        this.StatusCheck = 'StatusCheck' in params ? params.StatusCheck : null;
        this.LogCheck = 'LogCheck' in params ? params.LogCheck : null;

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
         * List of alarm policy conditions.
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
 * Set of Prometheus alerting rules
 * @class
 */
class PrometheusRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule status code
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Rule category
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of rule tags
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * List of rule annotations
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * Rule expression
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * Rule alert duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * List of alert recipient groups
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Rule status. Valid values:
<li>unknown: Unknown</li>
<li>pending: Loading</li>
<li>ok: Running</li>
<li>err: Error</li>
         * @type {string || null}
         */
        this.Health = null;

        /**
         * Rule creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Rule update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.Health = 'Health' in params ? params.Health : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * DescribeAllNamespaces response structure.
 * @class
 */
class DescribeAllNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy type of Tencent Cloud service (disused)
         * @type {CommonNamespace || null}
         */
        this.QceNamespaces = null;

        /**
         * Other alarm policy type (disused)
         * @type {CommonNamespace || null}
         */
        this.CustomNamespaces = null;

        /**
         * Alarm policy type of Tencent Cloud service
         * @type {Array.<CommonNamespace> || null}
         */
        this.QceNamespacesNew = null;

        /**
         * Other alarm policy type (not supported currently)
         * @type {Array.<CommonNamespace> || null}
         */
        this.CustomNamespacesNew = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QceNamespaces) {
            let obj = new CommonNamespace();
            obj.deserialize(params.QceNamespaces)
            this.QceNamespaces = obj;
        }

        if (params.CustomNamespaces) {
            let obj = new CommonNamespace();
            obj.deserialize(params.CustomNamespaces)
            this.CustomNamespaces = obj;
        }

        if (params.QceNamespacesNew) {
            this.QceNamespacesNew = new Array();
            for (let z in params.QceNamespacesNew) {
                let obj = new CommonNamespace();
                obj.deserialize(params.QceNamespacesNew[z]);
                this.QceNamespacesNew.push(obj);
            }
        }

        if (params.CustomNamespacesNew) {
            this.CustomNamespacesNew = new Array();
            for (let z in params.CustomNamespacesNew) {
                let obj = new CommonNamespace();
                obj.deserialize(params.CustomNamespacesNew[z]);
                this.CustomNamespacesNew.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPrometheusAgentManagementCommand request structure.
 * @class
 */
class GetPrometheusAgentManagementCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;

    }
}

/**
 * ModifyPrometheusInstanceAttributes response structure.
 * @class
 */
class ModifyPrometheusInstanceAttributesResponse extends  AbstractModel {
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
 * DeleteAlarmNotices response structure.
 * @class
 */
class DeleteAlarmNoticesResponse extends  AbstractModel {
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
 * TerminatePrometheusInstances request structure.
 * @class
 */
class TerminatePrometheusInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs
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
 * UnbindPrometheusManagedGrafana response structure.
 * @class
 */
class UnbindPrometheusManagedGrafanaResponse extends  AbstractModel {
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
 * UpdatePrometheusAgentStatus request structure.
 * @class
 */
class UpdatePrometheusAgentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of agent IDs
         * @type {Array.<string> || null}
         */
        this.AgentIds = null;

        /**
         * Status to update
<li> 1 = enabled </li>
<li> 2 = disabled </li>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentIds = 'AgentIds' in params ? params.AgentIds : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * New recipient information. If this parameter is not configured, all recipients will be deleted.
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
 * Trigger condition of alarm policy
 * @class
 */
class AlarmPolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name or event name. The supported metrics can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1) and the supported events via [DescribeAlarmEvents](https://intl.cloud.tencent.com/document/product/248/51284?from_cn_redirect=1).
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical period in seconds. The valid values can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1).
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Operator
intelligent = intelligent detection without threshold
eq = equal to
ge = greater than or equal to
gt = greater than
le = less than or equal to
lt = less than
ne = not equal to
day_increase = day-on-day increase
day_decrease = day-on-day decrease
day_wave = day-on-day fluctuation
week_increase = week-on-week increase
week_decrease = week-on-week decrease
week_wave = week-on-week fluctuation
cycle_increase = cyclical increase
cycle_decrease = cyclical decrease
cycle_wave = cyclical fluctuation
re = regex match
The valid values can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1).
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Threshold. The valid value range can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1).
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Number of periods. `1`: continue for one period; `2`: continue for two periods; and so on. The valid values can be queried via [DescribeAlarmMetrics](https://intl.cloud.tencent.com/document/product/248/51283?from_cn_redirect=1).
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * Alarm interval in seconds. Valid values: 0 (do not repeat), 300 (alarm once every 5 minutes), 600 (alarm once every 10 minutes), 900 (alarm once every 15 minutes), 1800 (alarm once every 30 minutes), 3600 (alarm once every hour), 7200 (alarm once every 2 hours), 10800 (alarm once every 3 hours), 21600 (alarm once every 6 hours),  43200 (alarm once every 12 hours), 86400 (alarm once every day)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NoticeFrequency = null;

        /**
         * Whether the alarm frequency increases exponentially. Valid values: 0 (no), 1 (yes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsPowerNotice = null;

        /**
         * Filter condition for one single trigger rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * Metric display name, which is used in the output parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Unit, which is used in the output parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Trigger condition type. `STATIC`: static threshold; `dynamic`: dynamic threshold. If you do not specify this parameter when creating or editing a policy, `STATIC` is used by default.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Whether it is an advanced metric. 0: No; 1: Yes.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * Whether the advanced metric feature is enabled. 0: No; 1: Yes.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * Integration center product ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.NoticeFrequency = 'NoticeFrequency' in params ? params.NoticeFrequency : null;
        this.IsPowerNotice = 'IsPowerNotice' in params ? params.IsPowerNotice : null;

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * CreateServiceDiscovery response structure.
 * @class
 */
class CreateServiceDiscoveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scrape configuration information returned after successful creation
         * @type {ServiceDiscoveryItem || null}
         */
        this.ServiceDiscovery = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceDiscovery) {
            let obj = new ServiceDiscoveryItem();
            obj.deserialize(params.ServiceDiscovery)
            this.ServiceDiscovery = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusAgent response structure.
 * @class
 */
class CreatePrometheusAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExporterIntegrations request structure.
 * @class
 */
class DescribeExporterIntegrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kubernetes cluster type. Valid values:
<li> 1 = TKE </li>
<li> 2 = EKS </li>
<li> 3 = MEKS </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * Dimension name in English.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Dimension name in Chinese.
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
 * ModifyAlarmPolicyCondition response structure.
 * @class
 */
class ModifyAlarmPolicyConditionResponse extends  AbstractModel {
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
 * DestroyPrometheusInstance request structure.
 * @class
 */
class DestroyPrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. The instance must be terminated first.
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
 * Instance authorization information
 * @class
 */
class PrometheusInstanceGrantInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether there is permission to operate on the billing information. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasChargeOperation = null;

        /**
         * Whether there is permission to display the VPC information. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasVpcDisplay = null;

        /**
         * Whether there is permission to change the Grafana status. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasGrafanaStatusChange = null;

        /**
         * Whether there is permission to manage agents. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasAgentManage = null;

        /**
         * Whether there is permission to manage TKE integrations. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasTkeManage = null;

        /**
         * Whether there is permission to display the API information. Valid values: 1 (yes), 2 (no).
         * @type {number || null}
         */
        this.HasApiOperation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HasChargeOperation = 'HasChargeOperation' in params ? params.HasChargeOperation : null;
        this.HasVpcDisplay = 'HasVpcDisplay' in params ? params.HasVpcDisplay : null;
        this.HasGrafanaStatusChange = 'HasGrafanaStatusChange' in params ? params.HasGrafanaStatusChange : null;
        this.HasAgentManage = 'HasAgentManage' in params ? params.HasAgentManage : null;
        this.HasTkeManage = 'HasTkeManage' in params ? params.HasTkeManage : null;
        this.HasApiOperation = 'HasApiOperation' in params ? params.HasApiOperation : null;

    }
}

/**
 * UnbindPrometheusManagedGrafana request structure.
 * @class
 */
class UnbindPrometheusManagedGrafanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Grafana instance ID
         * @type {string || null}
         */
        this.GrafanaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GrafanaId = 'GrafanaId' in params ? params.GrafanaId : null;

    }
}

/**
 * Template list
 * @class
 */
class TemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric alarm rules.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Condition> || null}
         */
        this.Conditions = null;

        /**
         * Event alarm rules.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<EventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * The associated alarm policy groups.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<PolicyGroup> || null}
         */
        this.PolicyGroups = null;

        /**
         * Template-based policy group ID.
         * @type {number || null}
         */
        this.GroupID = null;

        /**
         * Template-based policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * UIN of the last modifier.
         * @type {number || null}
         */
        this.LastEditUin = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * View.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Whether the logical relationship between rules is AND.
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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new Condition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new EventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }

        if (params.PolicyGroups) {
            this.PolicyGroups = new Array();
            for (let z in params.PolicyGroups) {
                let obj = new PolicyGroup();
                obj.deserialize(params.PolicyGroups[z]);
                this.PolicyGroups.push(obj);
            }
        }
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

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
 * Monitoring data point
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time point when this monitoring data point is generated
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Monitoring data point value
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * UpdateAlertRuleState request structure.
 * @class
 */
class UpdateAlertRuleStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rule status code. Valid values:
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
Default value: 2 (enabled).
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * Modification of the event alarm condition passed in by the alarm policy group.
 * @class
 */
class ModifyPolicyGroupEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Alarm sending and convergence type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Alarm sending period in seconds. If the value is less than 0, no alarm will be triggered. If the value is 0, an alarm will be triggered only once. If the value is greater than 0, an alarm will be triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Rule ID. No filling means new addition while filling in ruleId means to modify existing rules.
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
 * Metric, which can be used to set alarms and query data
 * @class
 */
class Metric extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy type
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric display name
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Minimum value
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Maximum value
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Dimension list
         * @type {Array.<string> || null}
         */
        this.Dimensions = null;

        /**
         * Unit
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Metric configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MetricConfig || null}
         */
        this.MetricConfig = null;

        /**
         * Whether it is an advanced metric. 1: Yes; 0: No.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * Whether the advanced metric feature is enabled. 1: Yes; 0: No.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * Integration center product ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProductId = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.MetricConfig) {
            let obj = new MetricConfig();
            obj.deserialize(params.MetricConfig)
            this.MetricConfig = obj;
        }
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * ModifyPolicyGroup request structure.
 * @class
 */
class ModifyPolicyGroupRequest extends  AbstractModel {
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
         * Alarm type.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The 'AND' and 'OR' rules for metric alarms. The value 1 indicates 'AND', which means that an alarm will be triggered only when all rules are met. The value 0 indicates 'OR', which means that an alarm will be triggered when any rule is met.
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * Metric alarm condition rules. No filling indicates that all existing metric alarm condition rules will be deleted.
         * @type {Array.<ModifyPolicyGroupCondition> || null}
         */
        this.Conditions = null;

        /**
         * Event alarm conditions. No filling indicates that all existing event alarm conditions will be deleted.
         * @type {Array.<ModifyPolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * Template-based policy group ID.
         * @type {number || null}
         */
        this.ConditionTempGroupId = null;

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
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ModifyPolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new ModifyPolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;

    }
}

/**
 * DescribeAlarmHistories response structure.
 * @class
 */
class DescribeAlarmHistoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Alarm record list
         * @type {Array.<AlarmHistory> || null}
         */
        this.Histories = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Histories) {
            this.Histories = new Array();
            for (let z in params.Histories) {
                let obj = new AlarmHistory();
                obj.deserialize(params.Histories[z]);
                this.Histories.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmMetrics request structure.
 * @class
 */
class DescribeAlarmMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Monitor type filter. Valid values: MT_QCE (Tencent Cloud service monitoring)
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Alarm policy type such as cvm_device, which is obtained through the `DescribeAllNamespaces` API
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
         * Service namespace. Tencent Cloud services have different namespaces. For more information on service namespaces, see the monitoring metric documentation of each service. For example, see [CVM Monitoring Metrics](https://intl.cloud.tencent.com/document/product/248/6843?from_cn_redirect=1) for the namespace of CVM
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name. Tencent Cloud services have different metric names. For more information on metric names, see the monitoring metric documentation of each service. For example, see [CVM Monitoring Metrics](https://intl.cloud.tencent.com/document/product/248/6843?from_cn_redirect=1) for the metric names of CVM
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Filter by dimension. This parameter is optional.
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * Cloud Monitor alarm notification template - user notification details
 * @class
 */
class UserNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient type. Valid values: USER (user), GROUP (user group)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Notification start time, which is expressed by the number of seconds since 00:00:00. Value range: 0–86399
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Notification end time, which is expressed by the number of seconds since 00:00:00. Value range: 0–86399
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Notification channel list. Valid values: `EMAIL` (email), `SMS` (SMS), `CALL` (phone), `WECHAT` (WeChat), `RTX` (WeCom)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NoticeWay = null;

        /**
         * User `uid` list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.UserIds = null;

        /**
         * User group ID list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.GroupIds = null;

        /**
         * Phone polling list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.PhoneOrder = null;

        /**
         * Number of phone pollings. Value range: 1–5
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * Call interval in seconds within one polling. Value range: 60–900
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * Polling interval in seconds. Value range: 60–900
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * Whether receipt notification is required. Valid values: 0 (no), 1 (yes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NeedPhoneArriveNotice = null;

        /**
         * Dial type. `SYNC` (simultaneous dial), `CIRCLE` (polled dial). Default value: `CIRCLE`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhoneCallType = null;

        /**
         * Notification cycle. The values 1-7 indicate Monday to Sunday.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Weekday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeWay = 'NoticeWay' in params ? params.NoticeWay : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.PhoneOrder = 'PhoneOrder' in params ? params.PhoneOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.NeedPhoneArriveNotice = 'NeedPhoneArriveNotice' in params ? params.NeedPhoneArriveNotice : null;
        this.PhoneCallType = 'PhoneCallType' in params ? params.PhoneCallType : null;
        this.Weekday = 'Weekday' in params ? params.Weekday : null;

    }
}

/**
 * UpdatePrometheusScrapeJob request structure.
 * @class
 */
class UpdatePrometheusScrapeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Scrape task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Scrape task configuration
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * Filter condition of alarm policy
 * @class
 */
class AlarmPolicyFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition type. Valid values: DIMENSION (uses dimensions for filtering)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * JSON string generated by serializing the `AlarmPolicyDimension` two-dimensional array. The one-dimensional arrays are in OR relationship, and the elements in a one-dimensional array are in AND relationship
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DescribeAlarmNoticeCallbacks response structure.
 * @class
 */
class DescribeAlarmNoticeCallbacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm callback notification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateExporterIntegration response structure.
 * @class
 */
class UpdateExporterIntegrationResponse extends  AbstractModel {
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
 * ModifyAlarmPolicyCondition request structure.
 * @class
 */
class ModifyAlarmPolicyConditionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * ID of trigger condition template. This parameter can be left empty.
         * @type {number || null}
         */
        this.ConditionTemplateId = null;

        /**
         * Metric trigger condition
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * Event trigger condition
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

        /**
         * Global filter.
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * Aggregation dimension list, which is used to specify which dimension keys data is grouped by.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

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
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

    }
}

/**
 * ModifyAlarmNotice response structure.
 * @class
 */
class ModifyAlarmNoticeResponse extends  AbstractModel {
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
 * BindPrometheusManagedGrafana request structure.
 * @class
 */
class BindPrometheusManagedGrafanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Grafana instance ID
         * @type {string || null}
         */
        this.GrafanaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GrafanaId = 'GrafanaId' in params ? params.GrafanaId : null;

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
         * Instance dimension information in the following format:
{"unInstanceId":"ins-00jvv9mo"}. The dimension information varies by Tencent Cloud services. For more information, please see:
[Dimension List](https://intl.cloud.tencent.com/document/product/248/50397?from_cn_redirect=1)
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
 * DescribeAlarmPolicy response structure.
 * @class
 */
class DescribeAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy details
         * @type {AlarmPolicy || null}
         */
        this.Policy = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Policy) {
            let obj = new AlarmPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteExporterIntegration response structure.
 * @class
 */
class DeleteExporterIntegrationResponse extends  AbstractModel {
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
 * DescribeMonitorTypes response structure.
 * @class
 */
class DescribeMonitorTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring)
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Alarm status ID. Valid values: 0 (not resolved), 1 (resolved), 2/3/5 (insufficient data), 4 (expired)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Alarm status. Valid values: ALARM (not resolved), OK (resolved), NO_DATA (insufficient data), NO_CONF (expired)
Note: this field may return null, indicating that no valid values can be obtained.
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
 * UpdateRecordingRule response structure.
 * @class
 */
class UpdateRecordingRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAlarmNotice response structure.
 * @class
 */
class CreateAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmHistories request structure.
 * @class
 */
class DescribeAlarmHistoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Page number starting from 1. Default value: 1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page. Value range: 1–100. Default value: 20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Sort by the first occurrence time in descending order by default. Valid values: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Start time, which is the timestamp one day ago by default and the time when the alarm `FirstOccurTime` first occurs. An alarm record can be searched only if its `FirstOccurTime` is later than the `StartTime`.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, which is the current timestamp and the time when the alarm `FirstOccurTime` first occurs. An alarm record can be searched only if its `FirstOccurTime` is earlier than the `EndTime`.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Filter by monitor type. Valid values: "MT_QCE" (Tencent Cloud service monitoring), "MT_TAW" (application performance monitoring), "MT_RUM" (frontend performance monitoring), "MT_PROBE" (cloud automated testing). If this parameter is left empty, all types will be queried by default.
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * Filter by alarm object. Fuzzy search with string is supported
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * Filter by alarm status. Valid values: ALARM (not resolved), OK (resolved), NO_CONF (expired), NO_DATA (insufficient data). If this parameter is left empty, all will be queried by default
         * @type {Array.<string> || null}
         */
        this.AlarmStatus = null;

        /**
         * Filter by project ID. Valid values: `-1` (no project), `0` (default project)
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Filter by instance group ID
         * @type {Array.<number> || null}
         */
        this.InstanceGroupIds = null;

        /**
         * Filter by policy type. Monitoring type and policy type are first-level and second-level filters respectively and both need to be passed in. For example, `[{"MonitorType": "MT_QCE", "Namespace": "cvm_device"}]`
         * @type {Array.<MonitorTypeNamespace> || null}
         */
        this.Namespaces = null;

        /**
         * Filter by metric name
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Fuzzy search by policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Fuzzy search by alarm content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Search by recipient
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * Search by recipient group
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * Search by alarm policy ID list
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.InstanceGroupIds = 'InstanceGroupIds' in params ? params.InstanceGroupIds : null;

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new MonitorTypeNamespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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
 * ModifyPolicyGroup response structure.
 * @class
 */
class ModifyPolicyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy group ID.
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
 * DescribeAlarmMetrics response structure.
 * @class
 */
class DescribeAlarmMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm metric list
         * @type {Array.<Metric> || null}
         */
        this.Metrics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

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
                let obj = new Metric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarm condition
 * @class
 */
class Condition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification frequency.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Predefined repeated notification policy. `0`: One-time alarm; `1`: exponential alarm; `2`: consecutive alarm.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Detection method.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CalcType = null;

        /**
         * Detection value.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * Duration.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContinueTime = null;

        /**
         * Metric ID.
         * @type {number || null}
         */
        this.MetricID = null;

        /**
         * Displayed metric name.
         * @type {string || null}
         */
        this.MetricDisplayName = null;

        /**
         * Statistical period.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Rule ID.
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * Metric unit.
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.ContinueTime = 'ContinueTime' in params ? params.ContinueTime : null;
        this.MetricID = 'MetricID' in params ? params.MetricID : null;
        this.MetricDisplayName = 'MetricDisplayName' in params ? params.MetricDisplayName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * UpdateAlertRule response structure.
 * @class
 */
class UpdateAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribePrometheusAgents request structure.
 * @class
 */
class DescribePrometheusAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of agent IDs
         * @type {Array.<string> || null}
         */
        this.AgentIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AgentIds = 'AgentIds' in params ? params.AgentIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * TerminatePrometheusInstances response structure.
 * @class
 */
class TerminatePrometheusInstancesResponse extends  AbstractModel {
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
 * Alarm event
 * @class
 */
class AlarmEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event name
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * Event display name
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Alarm policy type
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * Alarm threshold conditions output by the policy query.
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
         * Data aggregation period in seconds.
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
         * Alarm sending period in seconds. If the value is less than 0, no alarm will be triggered. If the value is 0, an alarm will be triggered only once. If the value is greater than 0, an alarm will be triggered at the interval of `triggerTime`.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Comparative type. The value 1 indicates greater than. The value 2 indicates greater than or equal to. The value 3 indicates smaller than. The value 4 indicates smaller than or equal to. The value 5 indicates equal to. The value 6 indicates not equal to. The value 7 indicates day-on-day increase. The value 8 indicates day-on-day decrease. The value 9 indicates week-on-week increase. The value 10 indicates week-on-week decrease. The value 11 indicates periodical increase. The value 12 indicates periodical decrease.
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * Threshold.
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * Duration at which an alarm will be triggered in seconds.
         * @type {number || null}
         */
        this.ContinueTime = null;

        /**
         * Alarm metric name.
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * Export integration configuration
 * @class
 */
class IntegrationConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Instance description
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * Dashboard URL
         * @type {string || null}
         */
        this.GrafanaDashboardURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.GrafanaDashboardURL = 'GrafanaDashboardURL' in params ? params.GrafanaDashboardURL : null;

    }
}

/**
 * UpdateAlertRule request structure.
 * @class
 */
class UpdateAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus alerting rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rule status code. Valid values:
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
Default value: 2 (enabled).
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Alerting rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Alerting rule expression
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * Alerting rule duration
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * List of alerting rule recipient groups
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * List of alerting rule tags
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * List of alerting rule annotations.

Alert object and alert message are special fields of Prometheus Rule Annotations, which need to be passed in through `annotations` and correspond to `summary` and `description` keys respectively.
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * Alerting rule template category
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Event trigger condition of alarm policy
 * @class
 */
class AlarmPolicyEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm trigger condition list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AlarmPolicyRule> || null}
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
                let obj = new AlarmPolicyRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * Template-based policy group information output by the policy query
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
         * Whether the 'AND' rule is used.
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
         * Policy group ID. If the ID is in the format of “policy-xxxx”, please enter it in the `PolicyId` field. Enter 0 in this field.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Alarm policy ID in the format of “policy-xxxx”. If a value has been entered in this field, you can enter 0 in the `GroupId` field.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * The number of alarm objects returned each time. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which starts from 0 and is set to 0 by default. For example, the parameter `Offset=0&Limit=20` returns the zeroth to 19th alarm objects, and `Offset=20&Limit=20` returns the 20th to 39th alarm objects, and so on.
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
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
         * Event name in Chinese.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EventCName = null;

        /**
         * Event name in English.
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
         * Product name in Chinese.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductCName = null;

        /**
         * Product name in English.
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

        /**
         * Display name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ViewName = null;

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
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

    }
}

/**
 * DeleteAlarmNotices request structure.
 * @class
 */
class DeleteAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm notification template ID list
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

    }
}

/**
 * DescribeExporterIntegrations response structure.
 * @class
 */
class DescribeExporterIntegrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of integration configurations
         * @type {Array.<IntegrationConfiguration> || null}
         */
        this.IntegrationSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntegrationSet) {
            this.IntegrationSet = new Array();
            for (let z in params.IntegrationSet) {
                let obj = new IntegrationConfiguration();
                obj.deserialize(params.IntegrationSet[z]);
                this.IntegrationSet.push(obj);
            }
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
         * Number of custom periods.
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
 * UpgradeGrafanaDashboard response structure.
 * @class
 */
class UpgradeGrafanaDashboardResponse extends  AbstractModel {
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
 * DescribeAllNamespaces request structure.
 * @class
 */
class DescribeAllNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter by use case. Currently, the only valid value is `ST_ALARM` (alarm type).
         * @type {string || null}
         */
        this.SceneType = null;

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Filter by monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring). If this parameter is left empty, all will be queried by default
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * Filter by namespace ID. If this parameter is left empty, all will be queried
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Policy group information
 * @class
 */
class PolicyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the alarm policy can be set to default.
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * Alarm policy group ID.
         * @type {number || null}
         */
        this.GroupID = null;

        /**
         * Alarm policy group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Whether the alarm policy is set to default.
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Whether the alarm policy is enabled.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * UIN of the last modifier.
         * @type {number || null}
         */
        this.LastEditUin = null;

        /**
         * Number of unshielded instances.
         * @type {number || null}
         */
        this.NoShieldedInstanceCount = null;

        /**
         * Parent policy group ID.
         * @type {number || null}
         */
        this.ParentGroupID = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * Alarm recipient information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<PolicyGroupReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Modification time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * The total number of associated instances.
         * @type {number || null}
         */
        this.TotalInstanceCount = null;

        /**
         * View.
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * Whether the logical relationship between rules is AND.
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
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.NoShieldedInstanceCount = 'NoShieldedInstanceCount' in params ? params.NoShieldedInstanceCount : null;
        this.ParentGroupID = 'ParentGroupID' in params ? params.ParentGroupID : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new PolicyGroupReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TotalInstanceCount = 'TotalInstanceCount' in params ? params.TotalInstanceCount : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DeleteRecordingRules request structure.
 * @class
 */
class DeleteRecordingRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Prometheus instance ID
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * UpdatePrometheusScrapeJob response structure.
 * @class
 */
class UpdatePrometheusScrapeJobResponse extends  AbstractModel {
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
 * Instance group that is bound to a policy group of the DescribePolicyGroupList API
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
 * DescribeAlarmPolicies request structure.
 * @class
 */
class DescribeAlarmPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Page number starting from 1. Default value: 1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page. Value range: 1–100. Default value: 20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Fuzzy search by policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Filter by monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring). If this parameter is left empty, all will be queried by default
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * Filter by namespace. For the values of different policy types, please see:
[Policy Type List](https://intl.cloud.tencent.com/document/product/248/50397?from_cn_redirect=1)
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * The alarm object list, which is a JSON string. The outer array corresponds to multiple instances, and the inner array is the dimension of an object. For example, “CVM - Basic Monitor” can be written as:
`[ {"Dimensions": {"unInstanceId": "ins-qr8d555g"}}, {"Dimensions": {"unInstanceId": "ins-qr8d555h"}} ]`
You can also refer to the “Example 2” below.

For more information on the parameter samples of different Tencent Cloud services, see [Product Policy Type and Dimension Information](https://intl.cloud.tencent.com/document/product/248/50397?from_cn_redirect=1).

Note: If `1` is passed in for `NeedCorrespondence`, the relationship between a policy and an instance needs to be returned. You can pass in up to 20 alarm object dimensions to avoid request timeout.
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Search by recipient. You can get the user list with the API [ListUsers](https://intl.cloud.tencent.com/document/product/598/34587?from_cn_redirect=1) in “Cloud Access Management” or query the sub-user information with the API [GetUser](https://intl.cloud.tencent.com/document/product/598/34590?from_cn_redirect=1). The `Uid` field in the returned result should be entered here.
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * Search by recipient group. You can get the user group list with the API [ListGroups](https://intl.cloud.tencent.com/document/product/598/34589?from_cn_redirect=1) in “Cloud Access Management” or query the user group list where a sub-user is in with the API [ListGroupsForUser](https://intl.cloud.tencent.com/document/product/598/34588?from_cn_redirect=1). The `GroupId` field in the returned result should be entered here.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * Filter by default policy. Valid values: DEFAULT (display default policy), NOT_DEFAULT (display non-default policies). If this parameter is left empty, all policies will be displayed
         * @type {Array.<string> || null}
         */
        this.PolicyType = null;

        /**
         * Sort by field. For example, to sort by the last modification time, use Field: "UpdateTime".
         * @type {string || null}
         */
        this.Field = null;

        /**
         * Sort order. Valid values: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.Order = null;

        /**
         * ID array of the policy project, which can be viewed on the following page:
[Project Management](https://console.cloud.tencent.com/project)
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * ID list of the notification template, which can be obtained by querying the notification template list.
It can be queried with the API [DescribeAlarmNotices](https://intl.cloud.tencent.com/document/product/248/51280?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * Filter by trigger condition. Valid values: STATIC (display policies with static threshold), DYNAMIC (display policies with dynamic threshold). If this parameter is left empty, all policies will be displayed
         * @type {Array.<string> || null}
         */
        this.RuleTypes = null;

        /**
         * Filter by alarm status. Valid values: [1]: enabled; [0]: disabled; [0, 1]: all
         * @type {Array.<number> || null}
         */
        this.Enable = null;

        /**
         * If `1` is passed in, alarm policies with no notification rules configured are queried. If it is left empty or other values are passed in, all alarm policies are queried.
         * @type {number || null}
         */
        this.NotBindingNoticeRule = null;

        /**
         * Instance group ID.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Whether the relationship between a policy and the input parameter filter dimension is required. `1`: Yes. `0`: No. Default value: `0`.
         * @type {number || null}
         */
        this.NeedCorrespondence = null;

        /**
         * Filter alarm policy by triggered task (such as auto scaling task). Up to 10 tasks can be specified.
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

        /**
         * Filter by quick alarm policy. If this parameter is left empty, all policies are displayed. `ONECLICK`: Display quick alarm policies; `NOT_ONECLICK`: Display non-quick alarm policies.
         * @type {Array.<string> || null}
         */
        this.OneClickPolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.RuleTypes = 'RuleTypes' in params ? params.RuleTypes : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.NotBindingNoticeRule = 'NotBindingNoticeRule' in params ? params.NotBindingNoticeRule : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.NeedCorrespondence = 'NeedCorrespondence' in params ? params.NeedCorrespondence : null;

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }
        this.OneClickPolicyType = 'OneClickPolicyType' in params ? params.OneClickPolicyType : null;

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
 * DescribePrometheusScrapeJobs response structure.
 * @class
 */
class DescribePrometheusScrapeJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of tasks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusScrapeJob> || null}
         */
        this.ScrapeJobSet = null;

        /**
         * Total number of tasks
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

        if (params.ScrapeJobSet) {
            this.ScrapeJobSet = new Array();
            for (let z in params.ScrapeJobSet) {
                let obj = new PrometheusScrapeJob();
                obj.deserialize(params.ScrapeJobSet[z]);
                this.ScrapeJobSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Data aggregation method in a period of 1 minute.
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
 * ModifyAlarmPolicyInfo response structure.
 * @class
 */
class ModifyAlarmPolicyInfoResponse extends  AbstractModel {
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
 * Alarm notification template details
 * @class
 */
class AlarmNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Alarm notification template name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Last modified time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * Last modified by
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedBy = null;

        /**
         * Alarm notification type. Valid values: ALARM (for unresolved alarms), OK (for resolved alarms), ALL (for all alarms)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * User notification list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * Callback notification list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

        /**
         * Whether it is the system default notification template. Valid values: 0 (no), 1 (yes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsPreset = null;

        /**
         * Notification language. Valid values: zh-CN (Chinese), en-US (English)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * List of IDs of the alarm policies bound to alarm notification template
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

        /**
         * Channel to push alarm notifications to CLS.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.UpdatedBy = 'UpdatedBy' in params ? params.UpdatedBy : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }
        this.IsPreset = 'IsPreset' in params ? params.IsPreset : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }

    }
}

/**
 * DeleteRecordingRules response structure.
 * @class
 */
class DeleteRecordingRulesResponse extends  AbstractModel {
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
 * Information on recipients in the policy template list (API v2018)
 * @class
 */
class PolicyGroupReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * End time of a valid time period.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Whether it is required to send notifications.
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * Alarm receiving channel.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Alarm call intervals for individuals in seconds.
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * Message recipient group list.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * Recipient type.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Recipient list. The list of recipient IDs that is queried by a platform API.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * Alarm resolution notification method.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

        /**
         * Alarm call interval per round in seconds.
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * Number of alarm call rounds.
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * Alarm call notification time. Valid values: `OCCUR` (indicating that a notification is sent when the alarm is triggered) and `RECOVER` (indicating that a notification is sent when the alarm is resolved).
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * Start time of a valid time period.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * UID of the alarm call recipient.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.UIDList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UIDList = 'UIDList' in params ? params.UIDList : null;

    }
}

/**
 * DescribePrometheusAgents response structure.
 * @class
 */
class DescribePrometheusAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of agents
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusAgent> || null}
         */
        this.AgentSet = null;

        /**
         * Total number of agents
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

        if (params.AgentSet) {
            this.AgentSet = new Array();
            for (let z in params.AgentSet) {
                let obj = new PrometheusAgent();
                obj.deserialize(params.AgentSet[z]);
                this.AgentSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmEvents request structure.
 * @class
 */
class DescribeAlarmEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name, which is fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy type such as cvm_device, which is obtained through the `DescribeAllNamespaces` API
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Monitoring type, such as `MT_QCE`, which is set to default.
         * @type {string || null}
         */
        this.MonitorType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;

    }
}

/**
 * `DescribeMidDimensionValueList` query conditions
 * @class
 */
class MidQueryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Operator. Valid values: eq (equal to), ne (not equal to), in
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Dimension value. If `Operator` is `eq` or `ne`, only the first element will be used
         * @type {Array.<string> || null}
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeletePrometheusScrapeJobs request structure.
 * @class
 */
class DeletePrometheusScrapeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * List of task IDs
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

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
         * Policy group ID. If `PolicyId` is used, this parameter will be ignored, and any value, e.g., `0`, can be passed in.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * List of unique IDs of the object instances to be deleted. `UniqueId` can be obtained from the output parameter `List` of the [DescribeBindingPolicyObjectList](https://intl.cloud.tencent.com/document/api/248/40570?from_cn_redirect=1) API
         * @type {Array.<string> || null}
         */
        this.UniqueId = null;

        /**
         * Instance group ID. The `UniqueId` parameter is invalid if object instances are deleted by instance group.
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * Alarm policy ID. If this parameter is used, `GroupId` will be ignored.
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * Cloud Monitor alarm notification template - callback notification details
 * @class
 */
class URLNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback URL, which can contain up to 256 characters
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.URL = null;

        /**
         * Whether verification is passed. Valid values: 0 (no), 1 (yes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsValid = null;

        /**
         * Verification code
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValidationCode = null;

        /**
         * Start time of the notification in seconds, which is calculated from 00:00:00.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the notification in seconds, which is calculated from 00:00:00.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Notification cycle. The values 1-7 indicate Monday to Sunday.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Weekday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.URL = 'URL' in params ? params.URL : null;
        this.IsValid = 'IsValid' in params ? params.IsValid : null;
        this.ValidationCode = 'ValidationCode' in params ? params.ValidationCode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Weekday = 'Weekday' in params ? params.Weekday : null;

    }
}

/**
 * CreateAlertRule request structure.
 * @class
 */
class CreateAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule expression
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * List of alert notification template IDs
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Rule status code. Valid values:
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Rule alert duration
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * List of tags
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * List of annotations.

Alert object and alert message are special fields of Prometheus Rule Annotations, which need to be passed in through `annotations` and correspond to `summary` and `description` keys respectively.
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * Alerting rule template category
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

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
 * Alarm record data
 * @class
 */
class AlarmHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm record ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * Monitor type
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Policy type
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Alarm object
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * Alarm content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Timestamp of the first occurrence
         * @type {number || null}
         */
        this.FirstOccurTime = null;

        /**
         * Timestamp of the last occurrence
         * @type {number || null}
         */
        this.LastOccurTime = null;

        /**
         * Alarm status. Valid values: ALARM (not resolved), OK (resolved), NO_CONF (expired), NO_DATA (insufficient data)
         * @type {string || null}
         */
        this.AlarmStatus = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * VPC of alarm object for basic product alarm
         * @type {string || null}
         */
        this.VPC = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Instance group of alarm object
         * @type {Array.<InstanceGroups> || null}
         */
        this.InstanceGroup = null;

        /**
         * Recipient list
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * Recipient group list
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * Alarm channel list. Valid values: SMS (SMS), EMAIL (email), CALL (phone), WECHAT (WeChat)
         * @type {Array.<string> || null}
         */
        this.NoticeWays = null;

        /**
         * Alarm policy ID, which can be used when you call APIs ([BindingPolicyObject](https://intl.cloud.tencent.com/document/product/248/40421?from_cn_redirect=1), [UnBindingAllPolicyObject](https://intl.cloud.tencent.com/document/product/248/40568?from_cn_redirect=1), [UnBindingPolicyObject](https://intl.cloud.tencent.com/document/product/248/40567?from_cn_redirect=1)) to bind/unbind instances or instance groups to/from an alarm policy
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Alarm type
         * @type {string || null}
         */
        this.AlarmType = null;

        /**
         * Event ID
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Whether the policy exists. Valid values: 0 (no), 1 (yes)
         * @type {number || null}
         */
        this.PolicyExists = null;

        /**
         * Metric information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AlarmHistoryMetric> || null}
         */
        this.MetricsInfo = null;

        /**
         * Dimension information of an instance that triggered alarms.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.VPC = 'VPC' in params ? params.VPC : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

        if (params.InstanceGroup) {
            this.InstanceGroup = new Array();
            for (let z in params.InstanceGroup) {
                let obj = new InstanceGroups();
                obj.deserialize(params.InstanceGroup[z]);
                this.InstanceGroup.push(obj);
            }
        }
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.NoticeWays = 'NoticeWays' in params ? params.NoticeWays : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PolicyExists = 'PolicyExists' in params ? params.PolicyExists : null;

        if (params.MetricsInfo) {
            this.MetricsInfo = new Array();
            for (let z in params.MetricsInfo) {
                let obj = new AlarmHistoryMetric();
                obj.deserialize(params.MetricsInfo[z]);
                this.MetricsInfo.push(obj);
            }
        }
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * Policy type
 * @class
 */
class MonitorTypeNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitor type
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Policy type value
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * `DescribeMetricData` output parameters
 * @class
 */
class MetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Monitoring data point
         * @type {Array.<MetricDataPoint> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new MetricDataPoint();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * DeletePrometheusScrapeJobs response structure.
 * @class
 */
class DeletePrometheusScrapeJobsResponse extends  AbstractModel {
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
 * DescribeAlarmPolicy request structure.
 * @class
 */
class DescribeAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value fixed at "monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm policy ID
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

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
         * Name of the view to which the policy group belongs. If the policy group is created based on a template, this parameter is optional.
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
         * Insertion time in the format of Unix timestamp. If this parameter is not configured, the backend processing time is used.
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * Alarm threshold rules in the policy group.
         * @type {Array.<CreatePolicyGroupCondition> || null}
         */
        this.Conditions = null;

        /**
         * Event alarm rules in the policy group.
         * @type {Array.<CreatePolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * Whether it is a backend call. If the value is 1, rules from the policy template will be used to fill in the `Conditions` and `EventConditions` fields.
         * @type {number || null}
         */
        this.BackEndCall = null;

        /**
         * The 'AND' and 'OR' rules for alarm metrics. The value 0 indicates 'OR', which means that an alarm will be triggered when any rule is met. The value 1 indicates 'AND', which means that an alarm will be triggered only when all rules are met.
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
 * Alarm threshold condition passed in when a policy is created.
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
         * Comparative type. The value 1 indicates greater than. The value 2 indicates greater than or equal to. The value 3 indicates smaller than. The value 4 indicates smaller than or equal to. The value 5 indicates equal to. The value 6 indicates not equal to. This parameter is optional if a default comparative type is configured for the metric.
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * Comparative value. This parameter is optional if the metric has no requirement.
         * @type {number || null}
         */
        this.CalcValue = null;

        /**
         * Data aggregation period in seconds. This parameter is optional if the metric has a default value.
         * @type {number || null}
         */
        this.CalcPeriod = null;

        /**
         * Number of consecutive periods after which an alarm will be triggered.
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * If a metric is created based on a template, the RuleId of the metric in the template must be passed in.
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
 * Alarm recipient information output by the policy query
 * @class
 */
class DescribePolicyGroupInfoReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of alarm recipient group IDs.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * List of alarm recipient IDs.
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * Start time of the alarm period. Value range: [0,86400). Convert the Unix timestamp to Beijing time and then remove the date. For example, 7200 indicates '10:0:0'.
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
         * Alarm notification method. Valid values: "SMS", "SITE", "EMAIL", "CALL", and "WECHAT".
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Uid of the alarm call recipient.
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
         * Intervals of alarm call rounds in seconds.
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * Alarm call intervals for individuals in seconds.
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * Whether to send an alarm call delivery notice. The value 0 indicates that no notice needs to be sent. The value 1 indicates that a notice needs to be sent.
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * Alarm call notification time. Valid values: OCCUR (indicating that a notice is sent when the alarm is triggered) and RECOVER (indicating that a notice is sent when the alarm is recovered).
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * Notification method when an alarm is recovered. Valid value: SMS.
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
 * DescribeStatisticData response structure.
 * @class
 */
class DescribeStatisticDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical period
         * @type {number || null}
         */
        this.Period = null;

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
         * Monitoring data
         * @type {Array.<MetricData> || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new MetricData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusScrapeJob request structure.
 * @class
 */
class CreatePrometheusScrapeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Task content
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * Response structure information of the Prometheus recording rule
 * @class
 */
class RecordingRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule status code
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Rule group
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Number of rules
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Rule creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Rule update time
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * CreateExporterIntegration response structure.
 * @class
 */
class CreateExporterIntegrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Event type, which is a reserved field. Currently, it is fixed to 2.
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
         * Filter by recipient or recipient group. The value 'user' indicates by recipient. The value 'group' indicates by recipient group.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Filter conditions. Whether the alarm policy has been enabled or disabled
         * @type {boolean || null}
         */
        this.IsOpen = null;

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
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;

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
         * API component name. The value for the current API is monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Start time, which is the timestamp one day prior by default.
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
 * DescribeAlarmNotices request structure.
 * @class
 */
class DescribeAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Page number. Minimum value: 1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of entries per page. Value range: 1–200
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Sort by update time. Valid values: ASC (ascending), DESC (descending)
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Root account `uid`, which is used to create preset notifications
         * @type {number || null}
         */
        this.OwnerUid = null;

        /**
         * Alarm notification template name, which is used for fuzzy search
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter by recipient. The type of notified users should be selected for the alarm notification template. Valid values: USER (user), GROUP (user group). If this parameter is left empty, no filter by recipient will be performed
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Recipient object list
         * @type {Array.<number> || null}
         */
        this.UserIds = null;

        /**
         * Recipient group list
         * @type {Array.<number> || null}
         */
        this.GroupIds = null;

        /**
         * Filter by notification template ID. If an empty array is passed in or if this parameter is left empty, the filter operation will not be performed.
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OwnerUid = 'OwnerUid' in params ? params.OwnerUid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

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
         * Uin that was last edited.
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * Last modified time.
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
         * Whether the policy can be configured as the default policy.
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
         * The 'AND' or 'OR' rule. The value 0 indicates the 'OR' rule (indicating that an alarm will be triggered if any rule meets the threshold condition). The value 1 indicates the 'AND' rule (indicating that an alarm will be triggered when all rules meet the threshold conditions).
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
 * UpdateExporterIntegration request structure.
 * @class
 */
class UpdateExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kubernetes cluster type. Valid values:
<li> 1 = TKE </li>
<li> 2 = EKS </li>
<li> 3 = MEKS </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Configuration content
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;

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
         * API component name. The value for the current API is monitor.
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Start time, which is the timestamp one day prior by default.
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
         * Sorting rule by OccurTime. Valid values: asc or desc. Sorting by UpdateTimeOrder takes priority.
         * @type {string || null}
         */
        this.OccurTimeOrder = null;

        /**
         * Filter by event type. The value 1 indicates service issues. The value 2 indicates other subscriptions.
         * @type {Array.<number> || null}
         */
        this.AccidentType = null;

        /**
         * Filter by event. The value 1 indicates CVM storage issues. The value 2 indicates CVM network connection issues. The value 3 indicates that the CVM has an exception. The value 202 indicates that an ISP network jitter occurs.
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
 * CreateRecordingRule response structure.
 * @class
 */
class CreateRecordingRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeAlarmNotice response structure.
 * @class
 */
class DescribeAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template details
         * @type {AlarmNotice || null}
         */
        this.Notice = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Notice) {
            let obj = new AlarmNotice();
            obj.deserialize(params.Notice)
            this.Notice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteAlertRules request structure.
 * @class
 */
class DeleteAlertRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Prometheus instance ID
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeAlarmNotice request structure.
 * @class
 */
class DescribeAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Alarm notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

    }
}

/**
 * UninstallGrafanaDashboard request structure.
 * @class
 */
class UninstallGrafanaDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus integration code, indicating to delete the corresponding dashboard. Valid values:
<li>spring_mvc</li>
<li>mysql</li>
<li>go</li>
<li>redis</li>
<li>jvm</li>
<li>pgsql</li>
<li>mongo</li>
<li>kafka</li>
<li>es</li>
<li>flink</li>
<li>blackbox</li>
<li>consule</li>
<li>memcached</li>
<li>zk</li>
<li>tps</li>
<li>istio</li>
<li>etcd</li>
         * @type {Array.<string> || null}
         */
        this.IntegrationCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationCodes = 'IntegrationCodes' in params ? params.IntegrationCodes : null;

    }
}

/**
 * CreatePrometheusAgent request structure.
 * @class
 */
class CreatePrometheusAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;

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
 * CreateAlarmNotice request structure.
 * @class
 */
class CreateAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Module name. Enter "monitor" here
         * @type {string || null}
         */
        this.Module = null;

        /**
         * Notification template name, which can contain up to 60 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification type. Valid values: ALARM (for unresolved alarms), OK (for resolved alarms), ALL (for all alarms)
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * Notification language. Valid values: zh-CN (Chinese), en-US (English)
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * User notifications (up to 5)
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * Callback notifications (up to 3)
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

        /**
         * The operation of pushing alarm notifications to CLS. Up to one CLS log topic can be configured.
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }

    }
}

/**
 * Instance group of alarm object
 * @class
 */
class InstanceGroups extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance group ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Instance group name
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

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
 * Recipient information.
 * @class
 */
class ReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the alarm period. Value range: [0,86400). Convert the Unix timestamp to Beijing time and then remove the date. For example, 7200 indicates '10:0:0'.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the alarm period. The meaning is the same as that of StartTime.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Alarm notification method. Valid values: "SMS", "SITE", "EMAIL", "CALL", and "WECHAT".
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
         * Alarm call notification time. Valid values: OCCUR (indicating that a notice is sent when the alarm is triggered) and RECOVER (indicating that a notice is sent when the alarm is recovered).
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * Uid of the alarm call recipient.
         * @type {Array.<number> || null}
         */
        this.UidList = null;

        /**
         * Number of alarm call rounds.
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * Alarm call intervals for individuals in seconds.
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * Intervals of alarm call rounds in seconds.
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * Notification method when an alarm is recovered. Valid value: SMS.
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
 * DescribeRecordingRules request structure.
 * @class
 */
class DescribeRecordingRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

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

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule status code. Valid values:
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * Rule name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * Policy group ID. If `PolicyId` is used, this parameter will be ignored, and any value, e.g., `0`, can be passed in.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Alarm policy ID. If this parameter is used, `GroupId` will be ignored.
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * The operation of pushing alarm notifications to CLS
 * @class
 */
class CLSNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Logset ID.
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Topic ID.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Status. Valid values: `0` (disabled), `1` (enabled). Default value: `1` (enabled). This parameter can be left empty.
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
        this.Region = 'Region' in params ? params.Region : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * Event alarm conditions output by the policy query
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
 * UpgradeGrafanaDashboard request structure.
 * @class
 */
class UpgradeGrafanaDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus integration code, indicating to upgrade to the corresponding dashboard. Valid values:
<li>spring_mvc</li>
<li>mysql</li>
<li>go</li>
<li>redis</li>
<li>jvm</li>
<li>pgsql</li>
<li>mongo</li>
<li>kafka</li>
<li>es</li>
<li>flink</li>
<li>blackbox</li>
<li>consule</li>
<li>memcached</li>
<li>zk</li>
<li>tps</li>
<li>istio</li>
<li>etcd</li>
         * @type {Array.<string> || null}
         */
        this.IntegrationCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationCodes = 'IntegrationCodes' in params ? params.IntegrationCodes : null;

    }
}

/**
 * ModifyAlarmPolicyStatus response structure.
 * @class
 */
class ModifyAlarmPolicyStatusResponse extends  AbstractModel {
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
 * GetPrometheusAgentManagementCommand response structure.
 * @class
 */
class GetPrometheusAgentManagementCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent management command
         * @type {ManagementCommand || null}
         */
        this.Command = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Command) {
            let obj = new ManagementCommand();
            obj.deserialize(params.Command)
            this.Command = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRecordingRule request structure.
 * @class
 */
class UpdateRecordingRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Recording rule group content, which is in YAML format and is Base64-encoded.
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Prometheus instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus recording rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule status code. Valid values:
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
Default value: 2 (enabled).
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
        this.Group = 'Group' in params ? params.Group : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * Metric trigger condition of alarm policy
 * @class
 */
class AlarmPolicyCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric trigger condition operator. Valid values: 0 (OR), 1 (AND)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * Alarm trigger condition list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AlarmPolicyRule> || null}
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
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new AlarmPolicyRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * Modification of the metric threshold condition passed in by the alarm policy group.
 * @class
 */
class ModifyPolicyGroupCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric ID.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Comparative type. The value 1 indicates greater than. The value 2 indicates greater than or equal to. The value 3 indicates smaller than. The value 4 indicates smaller than or equal to. The value 5 indicates equal to. The value 6 indicates not equal to.
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * Threshold.
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * Data period of the detected metric.
         * @type {number || null}
         */
        this.CalcPeriod = null;

        /**
         * Number of consecutive periods.
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * Alarm sending and convergence type. The value 0 indicates that alarms are sent consecutively. The value 1 indicates that alarms are sent exponentially.
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * Alarm sending period in seconds. If the value is less than 0, no alarm will be triggered. If the value is 0, an alarm will be triggered only once. If the value is greater than 0, an alarm will be triggered at the interval of triggerTime.
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * Rule ID. No filling means new addition while filling in ruleId means to modify existing rules.
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
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
 * Prometheus service response body
 * @class
 */
class PrometheusInstancesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing mode. Valid values:
<ul>
<li>2: Monthly subscription</li>
<li>3: Pay-as-you-go</li>
</ul>
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

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
         * Storage period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * Instance status. Valid values:
<ul>
<li>1: Creating</li>
<li>2: Running</li>
<li>3: Abnormal</li>
<li>4: Rebooting</li>
<li>5: Terminating</li>
<li>6: Service suspended</li>
<li>8: Suspending service for overdue payment</li>
<li>9: Service suspended for overdue payment</li>
</ul>
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * Grafana dashboard URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Whether Grafana is enabled
<li>0: Disabled</li>
<li>1: Enabled</li>
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Instance IPv4 address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IPv4Address = null;

        /**
         * List of tags associated with the instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * Expiration time of the purchased instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Billing status
<ul>
<li>1: Normal</li>
<li>2: Expired</li>
<li>3: Terminated</li>
<li>4: Assigning</li>
<li>5: Assignment failed</li>
</ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * Specification name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Auto-renewal flag
<ul>
<li>0: Auto-renewal not enabled</li>
<li>1: Auto-renewal enabled</li>
<li>2: Auto-renewal prohibited</li>
<li>-1: Invalid</ii>
</ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Expiring soon
<ul>
<li>0: No</li>
<li>1: Yes</li>
</ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNearExpire = null;

        /**
         * The token required for data writing
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthToken = null;

        /**
         * Prometheus remote write address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RemoteWrite = null;

        /**
         * Prometheus HTTP API root address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiRootPath = null;

        /**
         * Proxy address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProxyAddress = null;

        /**
         * Grafana status
<ul>
<li>1: Creating</li>
<li>2: Running</li>
<li>3: Abnormal</li>
<li>4: Restarting</li>
<li>5: Terminating</li>
<li>6: Service suspended</li>
<li>7: Deleted</li>
</ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GrafanaStatus = null;

        /**
         * Grafana IP allowlist, where IPs are separated by comma.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaIpWhiteList = null;

        /**
         * Instance authorization information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PrometheusInstanceGrantInfo || null}
         */
        this.Grant = null;

        /**
         * ID of the bound Grafana instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaInstanceId = null;

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
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.IPv4Address = 'IPv4Address' in params ? params.IPv4Address : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.IsNearExpire = 'IsNearExpire' in params ? params.IsNearExpire : null;
        this.AuthToken = 'AuthToken' in params ? params.AuthToken : null;
        this.RemoteWrite = 'RemoteWrite' in params ? params.RemoteWrite : null;
        this.ApiRootPath = 'ApiRootPath' in params ? params.ApiRootPath : null;
        this.ProxyAddress = 'ProxyAddress' in params ? params.ProxyAddress : null;
        this.GrafanaStatus = 'GrafanaStatus' in params ? params.GrafanaStatus : null;
        this.GrafanaIpWhiteList = 'GrafanaIpWhiteList' in params ? params.GrafanaIpWhiteList : null;

        if (params.Grant) {
            let obj = new PrometheusInstanceGrantInfo();
            obj.deserialize(params.Grant)
            this.Grant = obj;
        }
        this.GrafanaInstanceId = 'GrafanaInstanceId' in params ? params.GrafanaInstanceId : null;

    }
}

/**
 * DeleteAlarmPolicy response structure.
 * @class
 */
class DeleteAlarmPolicyResponse extends  AbstractModel {
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
 * DescribePrometheusInstances request structure.
 * @class
 */
class DescribePrometheusInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by instance ID or IDs. Instance ID is in the format of `prom-xxxxxxxx`. Up to 100 instances can be queried in one request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter by instance status
<ul>
<li>1: Creating</li>
<li>2: Running</li>
<li>3: Abnormal</li>
<li>4: Rebooting</li>
<li>5: Terminating</li>
<li>6: Service suspended</li>
<li>8: Suspending service for overdue payment</li>
<li>9: Service suspended for overdue payment</li>
</ul>
         * @type {Array.<number> || null}
         */
        this.InstanceStatus = null;

        /**
         * Filter by instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Filter by AZ in the format of `ap-guangzhou-1`
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Filter by tag key-value pair. The `tag-key` should be replaced with a specific tag key.
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagFilters = null;

        /**
         * Filter by instance IPv4 address
         * @type {Array.<string> || null}
         */
        this.IPv4Address = null;

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

        /**
         * Filter by billing mode
<li>2: Monthly subscription</li>
<li>3: Pay-as-you-go</li>
         * @type {number || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.IPv4Address = 'IPv4Address' in params ? params.IPv4Address : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

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
         * Number of events with exceptions.
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
 * SetDefaultAlarmPolicy response structure.
 * @class
 */
class SetDefaultAlarmPolicyResponse extends  AbstractModel {
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
 * UninstallGrafanaDashboard response structure.
 * @class
 */
class UninstallGrafanaDashboardResponse extends  AbstractModel {
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
    TagInstance: TagInstance,
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    ModifyAlarmPolicyNoticeResponse: ModifyAlarmPolicyNoticeResponse,
    ModifyAlarmPolicyInfoRequest: ModifyAlarmPolicyInfoRequest,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    AlarmPolicyTriggerTask: AlarmPolicyTriggerTask,
    DescribeServiceDiscoveryResponse: DescribeServiceDiscoveryResponse,
    DescribeRecordingRulesResponse: DescribeRecordingRulesResponse,
    PrometheusTag: PrometheusTag,
    DestroyPrometheusInstanceResponse: DestroyPrometheusInstanceResponse,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    DescribeAlertRulesRequest: DescribeAlertRulesRequest,
    DescribePrometheusInstancesResponse: DescribePrometheusInstancesResponse,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    DescribeAlarmNoticeCallbacksRequest: DescribeAlarmNoticeCallbacksRequest,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    PutMonitorDataResponse: PutMonitorDataResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    UpdateAlertRuleStateResponse: UpdateAlertRuleStateResponse,
    CreatePrometheusScrapeJobResponse: CreatePrometheusScrapeJobResponse,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    AlarmHistoryMetric: AlarmHistoryMetric,
    CreateAlarmPolicyRequest: CreateAlarmPolicyRequest,
    CreateExporterIntegrationRequest: CreateExporterIntegrationRequest,
    DescribeAlarmEventsResponse: DescribeAlarmEventsResponse,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    PrometheusAgent: PrometheusAgent,
    DeleteExporterIntegrationRequest: DeleteExporterIntegrationRequest,
    ModifyAlarmPolicyNoticeRequest: ModifyAlarmPolicyNoticeRequest,
    DeleteAlarmPolicyRequest: DeleteAlarmPolicyRequest,
    EventCondition: EventCondition,
    MetricSet: MetricSet,
    DescribeConditionsTemplateListRequest: DescribeConditionsTemplateListRequest,
    DescribePrometheusScrapeJobsRequest: DescribePrometheusScrapeJobsRequest,
    CreateAlertRuleResponse: CreateAlertRuleResponse,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    ModifyAlarmPolicyTasksResponse: ModifyAlarmPolicyTasksResponse,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    PrometheusScrapeJob: PrometheusScrapeJob,
    CreatePrometheusMultiTenantInstancePostPayModeRequest: CreatePrometheusMultiTenantInstancePostPayModeRequest,
    MetricDataPoint: MetricDataPoint,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    DeleteAlertRulesResponse: DeleteAlertRulesResponse,
    GetMonitorDataRequest: GetMonitorDataRequest,
    DataPoint: DataPoint,
    DescribeAlarmPoliciesResponse: DescribeAlarmPoliciesResponse,
    DescribeStatisticDataRequest: DescribeStatisticDataRequest,
    ConditionsTemp: ConditionsTemp,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    CreateRecordingRuleRequest: CreateRecordingRuleRequest,
    ModifyPrometheusInstanceAttributesRequest: ModifyPrometheusInstanceAttributesRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    MetricConfig: MetricConfig,
    DescribeServiceDiscoveryRequest: DescribeServiceDiscoveryRequest,
    CommonNamespace: CommonNamespace,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeConditionsTemplateListResponse: DescribeConditionsTemplateListResponse,
    DescribeMonitorTypesRequest: DescribeMonitorTypesRequest,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    ModifyAlarmPolicyTasksRequest: ModifyAlarmPolicyTasksRequest,
    DimensionsDesc: DimensionsDesc,
    ModifyAlarmPolicyStatusRequest: ModifyAlarmPolicyStatusRequest,
    CreatePrometheusMultiTenantInstancePostPayModeResponse: CreatePrometheusMultiTenantInstancePostPayModeResponse,
    UpdatePrometheusAgentStatusResponse: UpdatePrometheusAgentStatusResponse,
    ServiceDiscoveryItem: ServiceDiscoveryItem,
    SetDefaultAlarmPolicyRequest: SetDefaultAlarmPolicyRequest,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    CreateServiceDiscoveryRequest: CreateServiceDiscoveryRequest,
    DescribeAlertRulesResponse: DescribeAlertRulesResponse,
    PrometheusRuleKV: PrometheusRuleKV,
    PeriodsSt: PeriodsSt,
    BindPrometheusManagedGrafanaResponse: BindPrometheusManagedGrafanaResponse,
    AlarmPolicy: AlarmPolicy,
    CreateAlarmPolicyResponse: CreateAlarmPolicyResponse,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    ManagementCommand: ManagementCommand,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    PrometheusRuleSet: PrometheusRuleSet,
    DescribeAllNamespacesResponse: DescribeAllNamespacesResponse,
    GetPrometheusAgentManagementCommandRequest: GetPrometheusAgentManagementCommandRequest,
    ModifyPrometheusInstanceAttributesResponse: ModifyPrometheusInstanceAttributesResponse,
    DeleteAlarmNoticesResponse: DeleteAlarmNoticesResponse,
    TerminatePrometheusInstancesRequest: TerminatePrometheusInstancesRequest,
    UnbindPrometheusManagedGrafanaResponse: UnbindPrometheusManagedGrafanaResponse,
    UpdatePrometheusAgentStatusRequest: UpdatePrometheusAgentStatusRequest,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    AlarmPolicyRule: AlarmPolicyRule,
    CreateServiceDiscoveryResponse: CreateServiceDiscoveryResponse,
    CreatePrometheusAgentResponse: CreatePrometheusAgentResponse,
    DescribeExporterIntegrationsRequest: DescribeExporterIntegrationsRequest,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    ModifyAlarmPolicyConditionResponse: ModifyAlarmPolicyConditionResponse,
    DestroyPrometheusInstanceRequest: DestroyPrometheusInstanceRequest,
    PrometheusInstanceGrantInfo: PrometheusInstanceGrantInfo,
    UnbindPrometheusManagedGrafanaRequest: UnbindPrometheusManagedGrafanaRequest,
    TemplateGroup: TemplateGroup,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    Point: Point,
    UpdateAlertRuleStateRequest: UpdateAlertRuleStateRequest,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    Metric: Metric,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribeAlarmHistoriesResponse: DescribeAlarmHistoriesResponse,
    DescribeAlarmMetricsRequest: DescribeAlarmMetricsRequest,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    UserNotice: UserNotice,
    UpdatePrometheusScrapeJobRequest: UpdatePrometheusScrapeJobRequest,
    AlarmPolicyFilter: AlarmPolicyFilter,
    DescribeAlarmNoticeCallbacksResponse: DescribeAlarmNoticeCallbacksResponse,
    UpdateExporterIntegrationResponse: UpdateExporterIntegrationResponse,
    ModifyAlarmPolicyConditionRequest: ModifyAlarmPolicyConditionRequest,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    BindPrometheusManagedGrafanaRequest: BindPrometheusManagedGrafanaRequest,
    Instance: Instance,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribeAlarmPolicyResponse: DescribeAlarmPolicyResponse,
    DeleteExporterIntegrationResponse: DeleteExporterIntegrationResponse,
    DescribeMonitorTypesResponse: DescribeMonitorTypesResponse,
    Dimension: Dimension,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    UpdateRecordingRuleResponse: UpdateRecordingRuleResponse,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    DescribeAlarmHistoriesRequest: DescribeAlarmHistoriesRequest,
    MetricObjectMeaning: MetricObjectMeaning,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    DescribeAlarmMetricsResponse: DescribeAlarmMetricsResponse,
    Condition: Condition,
    UpdateAlertRuleResponse: UpdateAlertRuleResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    DescribePrometheusAgentsRequest: DescribePrometheusAgentsRequest,
    TerminatePrometheusInstancesResponse: TerminatePrometheusInstancesResponse,
    AlarmEvent: AlarmEvent,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    IntegrationConfiguration: IntegrationConfiguration,
    UpdateAlertRuleRequest: UpdateAlertRuleRequest,
    AlarmPolicyEventCondition: AlarmPolicyEventCondition,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    InstanceGroup: InstanceGroup,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    DeleteAlarmNoticesRequest: DeleteAlarmNoticesRequest,
    DescribeExporterIntegrationsResponse: DescribeExporterIntegrationsResponse,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    UpgradeGrafanaDashboardResponse: UpgradeGrafanaDashboardResponse,
    DescribeAllNamespacesRequest: DescribeAllNamespacesRequest,
    PolicyGroup: PolicyGroup,
    DeleteRecordingRulesRequest: DeleteRecordingRulesRequest,
    UpdatePrometheusScrapeJobResponse: UpdatePrometheusScrapeJobResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    DescribeAlarmPoliciesRequest: DescribeAlarmPoliciesRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribePrometheusScrapeJobsResponse: DescribePrometheusScrapeJobsResponse,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    ModifyAlarmPolicyInfoResponse: ModifyAlarmPolicyInfoResponse,
    AlarmNotice: AlarmNotice,
    DeleteRecordingRulesResponse: DeleteRecordingRulesResponse,
    PolicyGroupReceiverInfo: PolicyGroupReceiverInfo,
    DescribePrometheusAgentsResponse: DescribePrometheusAgentsResponse,
    DescribeAlarmEventsRequest: DescribeAlarmEventsRequest,
    MidQueryCondition: MidQueryCondition,
    DeletePrometheusScrapeJobsRequest: DeletePrometheusScrapeJobsRequest,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    URLNotice: URLNotice,
    CreateAlertRuleRequest: CreateAlertRuleRequest,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    AlarmHistory: AlarmHistory,
    MonitorTypeNamespace: MonitorTypeNamespace,
    MetricData: MetricData,
    DeletePrometheusScrapeJobsResponse: DeletePrometheusScrapeJobsResponse,
    DescribeAlarmPolicyRequest: DescribeAlarmPolicyRequest,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    DescribeStatisticDataResponse: DescribeStatisticDataResponse,
    CreatePrometheusScrapeJobRequest: CreatePrometheusScrapeJobRequest,
    RecordingRuleSet: RecordingRuleSet,
    CreateExporterIntegrationResponse: CreateExporterIntegrationResponse,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    UpdateExporterIntegrationRequest: UpdateExporterIntegrationRequest,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    CreateRecordingRuleResponse: CreateRecordingRuleResponse,
    MetricDatum: MetricDatum,
    DescribeAlarmNoticeResponse: DescribeAlarmNoticeResponse,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    DeleteAlertRulesRequest: DeleteAlertRulesRequest,
    DescribeAlarmNoticeRequest: DescribeAlarmNoticeRequest,
    UninstallGrafanaDashboardRequest: UninstallGrafanaDashboardRequest,
    CreatePrometheusAgentRequest: CreatePrometheusAgentRequest,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    InstanceGroups: InstanceGroups,
    GetMonitorDataResponse: GetMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    DescribeRecordingRulesRequest: DescribeRecordingRulesRequest,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    CLSNotice: CLSNotice,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    UpgradeGrafanaDashboardRequest: UpgradeGrafanaDashboardRequest,
    ModifyAlarmPolicyStatusResponse: ModifyAlarmPolicyStatusResponse,
    GetPrometheusAgentManagementCommandResponse: GetPrometheusAgentManagementCommandResponse,
    UpdateRecordingRuleRequest: UpdateRecordingRuleRequest,
    AlarmPolicyCondition: AlarmPolicyCondition,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    PrometheusInstancesItem: PrometheusInstancesItem,
    DeleteAlarmPolicyResponse: DeleteAlarmPolicyResponse,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    DescribePrometheusInstancesRequest: DescribePrometheusInstancesRequest,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    SetDefaultAlarmPolicyResponse: SetDefaultAlarmPolicyResponse,
    UninstallGrafanaDashboardResponse: UninstallGrafanaDashboardResponse,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
