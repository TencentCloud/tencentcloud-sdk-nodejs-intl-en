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
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Warning = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Warning = 'Warning' in params ? params.Warning : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusInstancesOverview request structure.
 * @class
 */
class DescribePrometheusInstancesOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Instance filter. Valid values:
`ID`: Filter by instance ID 
`Name`: Filter by instance name
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
 * ModifyGrafanaInstance response structure.
 * @class
 */
class ModifyGrafanaInstanceResponse extends  AbstractModel {
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
 * ModifyGrafanaInstance request structure.
 * @class
 */
class ModifyGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * TCMG instance name, such as “test”.
         * @type {string || null}
         */
        this.InstanceName = null;

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
 * EnableGrafanaSSO response structure.
 * @class
 */
class EnableGrafanaSSOResponse extends  AbstractModel {
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
 * DeletePrometheusClusterAgent request structure.
 * @class
 */
class DeletePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent list
         * @type {Array.<PrometheusAgentInfo> || null}
         */
        this.Agents = null;

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

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentInfo();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
 * DescribePolicyConditionListResponseDeprecatingInfo
 * @class
 */
class DescribePolicyConditionListResponseDeprecatingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to hide
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * Names of new views
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NewViewNames = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.NewViewNames = 'NewViewNames' in params ? params.NewViewNames : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Modifiable items in the TMP template
 * @class
 */
class PrometheusTempModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of ServiceMonitor rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of PodMonitor rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of RawJob rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * This parameter is valid if `Level` is `instance`.
List of recording rules in the template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * Modification content, which is valid only if template type is `Alert`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
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
         * Message policy ID, which is configured on the custom message page.
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

        /**
         * The alert configured for an event
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * Whether the event alert has been configured
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

    }
}

/**
 * Policy type information
 * @class
 */
class CommonNamespaceNew extends  AbstractModel {
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
         * Monitoring type
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Dimension information
         * @type {Array.<DimensionNew> || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionNew();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * Tag
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
 * DescribePrometheusAgentInstances request structure.
 * @class
 */
class DescribePrometheusAgentInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
It can be the ID of a TKE, EKS, or edge cluster.
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
 * Details of the Prometheus recording rule instance, including the cluster ID.
 * @class
 */
class PrometheusRecordRuleYamlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Last update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * YAML content
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * If the recording rule comes from a template, `TemplateId` is the template ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * If the recording rule comes from the user cluster CRD resource definition, `ClusterId` is the cluster ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * Tags in K8s, which generally exist in the form of an array.
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * Label name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Label value
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
 * DescribeGrafanaIntegrations response structure.
 * @class
 */
class DescribeGrafanaIntegrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of integrations
         * @type {Array.<GrafanaIntegrationConfig> || null}
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
                let obj = new GrafanaIntegrationConfig();
                obj.deserialize(params.IntegrationSet[z]);
                this.IntegrationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * SyncPrometheusTemp response structure.
 * @class
 */
class SyncPrometheusTempResponse extends  AbstractModel {
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
 * UpdateGrafanaWhiteList response structure.
 * @class
 */
class UpdateGrafanaWhiteListResponse extends  AbstractModel {
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
 * DescribeGrafanaEnvironments request structure.
 * @class
 */
class DescribeGrafanaEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a TencentCloud Managed Service for Grafana instance, such as “grafana-abcdefgh”.
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
 * Prometheus configuration
 * @class
 */
class PrometheusConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Configuration content
         * @type {string || null}
         */
        this.Config = null;

        /**
         * If the configuration comes from a template, this parameter is the template ID, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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

        /**
         * Whether the policy is associated with all objects
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsBindAll = null;

        /**
         * Policy tag
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.IsBindAll = 'IsBindAll' in params ? params.IsBindAll : null;

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
         * General alarm policy type, including TAPM, RUM, and CAT.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CommonNamespaceNew> || null}
         */
        this.CommonNamespaces = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.CommonNamespaces) {
            this.CommonNamespaces = new Array();
            for (let z in params.CommonNamespaces) {
                let obj = new CommonNamespaceNew();
                obj.deserialize(params.CommonNamespaces[z]);
                this.CommonNamespaces.push(obj);
            }
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
 * InstallPlugins response structure.
 * @class
 */
class InstallPluginsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the installed plugin
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PluginIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginIds = 'PluginIds' in params ? params.PluginIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * Maximum value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ValueMax = null;

        /**
         * Minimum value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ValueMin = null;

        /**
         * The configuration of alarm level threshold
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AlarmHierarchicalValue || null}
         */
        this.HierarchicalValue = null;

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
        this.ValueMax = 'ValueMax' in params ? params.ValueMax : null;
        this.ValueMin = 'ValueMin' in params ? params.ValueMin : null;

        if (params.HierarchicalValue) {
            let obj = new AlarmHierarchicalValue();
            obj.deserialize(params.HierarchicalValue)
            this.HierarchicalValue = obj;
        }

    }
}

/**
 * CreateGrafanaIntegration request structure.
 * @class
 */
class CreateGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Integration type, such as “tencent-cloud-prometheus”. You can view it by going to the instance details page and clicking **Tencent Cloud Service Integration** > **Integration List**.
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Integration configuration
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
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * TMP v2 instance overview
 * @class
 */
class PrometheusInstancesOverview extends  AbstractModel {
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
         * Running status. Valid values: `1` (creating); `2` (running); `3` (abnormal); `4` (restarting); `5` (terminating); `6` (stopped); `7` (deleted).
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * Billing status. Valid values: `1` (normal); `2` (expired); `3` (terminated); `4` (assigning); `5` (failed to assign)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * Whether Grafana is enabled. Valid values: `0` (no); `1` (yes).
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Grafana dashboard URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * Instance payment type. Valid values: `1` (trial edition); `2` (prepaid)
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * Specification name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Storage period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * Expiration time of the purchased instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Auto-renewal flag. Valid values: `0` (auto-renewal not enabled); `1` (auto-renewal enabled); `2` (auto-renewal prohibited); `-1` (invalid).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Total number of bound clusters
         * @type {number || null}
         */
        this.BoundTotal = null;

        /**
         * Total number of bound clusters in the normal status
         * @type {number || null}
         */
        this.BoundNormal = null;

        /**
         * Resource pack status (`0`: Unavailable; `1`: Available)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResourcePackageStatus = null;

        /**
         * Resource pack specification name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourcePackageSpecName = null;

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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.BoundTotal = 'BoundTotal' in params ? params.BoundTotal : null;
        this.BoundNormal = 'BoundNormal' in params ? params.BoundNormal : null;
        this.ResourcePackageStatus = 'ResourcePackageStatus' in params ? params.ResourcePackageStatus : null;
        this.ResourcePackageSpecName = 'ResourcePackageSpecName' in params ? params.ResourcePackageSpecName : null;

    }
}

/**
 * DescribePrometheusInstanceInitStatus response structure.
 * @class
 */
class DescribePrometheusInstanceInitStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance initialization status. Valid values:
`uninitialized` 
`initializing`
`running`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Initialize task steps
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Steps = null;

        /**
         * EKS cluster ID of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EksClusterId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.EksClusterId = 'EksClusterId' in params ? params.EksClusterId : null;
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
 * DescribePrometheusInstanceUsage request structure.
 * @class
 */
class DescribePrometheusInstanceUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by one or more instance IDs. Instance ID is in the format of `prom-xxxxxxxx`. Up to 100 instances can be queried in one request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartCalcDate = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndCalcDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.StartCalcDate = 'StartCalcDate' in params ? params.StartCalcDate : null;
        this.EndCalcDate = 'EndCalcDate' in params ? params.EndCalcDate : null;

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
 * CreatePrometheusRecordRuleYaml request structure.
 * @class
 */
class CreatePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * YAML content
         * @type {string || null}
         */
        this.Content = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.Name = 'Name' in params ? params.Name : null;

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
 * Additional pod configurations of the components deployed in the cluster when a cluster is associated
 * @class
 */
class PrometheusClusterAgentPodConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use HostNetWork
         * @type {boolean || null}
         */
        this.HostNet = null;

        /**
         * A parameter used to specify the running nodes for a pod
         * @type {Array.<Label> || null}
         */
        this.NodeSelector = null;

        /**
         * Tolerable taints
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostNet = 'HostNet' in params ? params.HostNet : null;

        if (params.NodeSelector) {
            this.NodeSelector = new Array();
            for (let z in params.NodeSelector) {
                let obj = new Label();
                obj.deserialize(params.NodeSelector[z]);
                this.NodeSelector.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

    }
}

/**
 * Instance type when the Grafana instance is queried
 * @class
 */
class GrafanaInstanceInfo extends  AbstractModel {
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
         * Array of subnet IDs
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Grafana private network address
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * Grafana public network address
         * @type {string || null}
         */
        this.InternalUrl = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Status. Valid values: `1` (creating), `2` (running), `3` (abnormal), `4` (restarting), `5` (stopping), `6` (stopped), `7` (deleted).
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * Instance tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * Instance AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Billing mode. Valid value: `1` (monthly subscription).
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Subnet name
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * The full URL used to access this instance
         * @type {string || null}
         */
        this.RootUrl = null;

        /**
         * Whether to enable SSO
         * @type {boolean || null}
         */
        this.EnableSSO = null;

        /**
         * Version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Whether to enable CAM authentication during SSO
         * @type {boolean || null}
         */
        this.EnableSSOCamCheck = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.InternalUrl = 'InternalUrl' in params ? params.InternalUrl : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RootUrl = 'RootUrl' in params ? params.RootUrl : null;
        this.EnableSSO = 'EnableSSO' in params ? params.EnableSSO : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.EnableSSOCamCheck = 'EnableSSOCamCheck' in params ? params.EnableSSOCamCheck : null;

    }
}

/**
 * DeletePrometheusConfig response structure.
 * @class
 */
class DeletePrometheusConfigResponse extends  AbstractModel {
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
 * CreatePrometheusRecordRuleYaml response structure.
 * @class
 */
class CreatePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * UninstallGrafanaPlugins response structure.
 * @class
 */
class UninstallGrafanaPluginsResponse extends  AbstractModel {
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
 * ModifyPrometheusTemp request structure.
 * @class
 */
class ModifyPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Modified content
         * @type {PrometheusTempModify || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Template) {
            let obj = new PrometheusTempModify();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * UpgradeGrafanaInstance response structure.
 * @class
 */
class UpgradeGrafanaInstanceResponse extends  AbstractModel {
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
 * DeletePrometheusTempSync response structure.
 * @class
 */
class DeletePrometheusTempSyncResponse extends  AbstractModel {
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
 * DescribeDNSConfig request structure.
 * @class
 */
class DescribeDNSConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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
 * DescribePrometheusRecordRules request structure.
 * @class
 */
class DescribePrometheusRecordRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * EnableGrafanaSSO request structure.
 * @class
 */
class EnableGrafanaSSORequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable SSO (`true`: Yes; `false`: No)
         * @type {boolean || null}
         */
        this.EnableSSO = null;

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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
        this.EnableSSO = 'EnableSSO' in params ? params.EnableSSO : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
 * EnableGrafanaInternet request structure.
 * @class
 */
class EnableGrafanaInternetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-kleu3gt0”.
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Whether to enable public network access (`true`: Yes; `false`: No)
         * @type {boolean || null}
         */
        this.EnableInternet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.EnableInternet = 'EnableInternet' in params ? params.EnableInternet : null;

    }
}

/**
 * TCMG account permission
 * @class
 */
class GrafanaAccountRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * Permission
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Role = 'Role' in params ? params.Role : null;

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
 * DeleteSSOAccount request structure.
 * @class
 */
class DeleteSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User account ID, such as “10000000”.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribePrometheusAgentInstances response structure.
 * @class
 */
class DescribePrometheusAgentInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instances associated with the cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Instances = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Instances = 'Instances' in params ? params.Instances : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeletePrometheusTemp response structure.
 * @class
 */
class DeletePrometheusTempResponse extends  AbstractModel {
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
         * If a metric is created based on a template, the `RuleId` of the metric in the template must be passed in.
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
         * Group name
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

        /**
         * Rule name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleName = null;

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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

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
 * DescribeGrafanaInstances request structure.
 * @class
 */
class DescribeGrafanaInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset for query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items to be queried
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Array of TCMG instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * TCMG instance name, which can be fuzzily matched by prefix.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Query status
         * @type {Array.<number> || null}
         */
        this.InstanceStatus = null;

        /**
         * Array of tag filters
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagFilters = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * DescribePrometheusTempSync request structure.
 * @class
 */
class DescribePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribePrometheusGlobalConfig response structure.
 * @class
 */
class DescribePrometheusGlobalConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration content
         * @type {string || null}
         */
        this.Config = null;

        /**
         * List of service monitors and the corresponding targets information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * List of pod monitors and the corresponding targets information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * List of raw jobs and the corresponding targets information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateGrafanaNotificationChannel response structure.
 * @class
 */
class CreateGrafanaNotificationChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGrafanaNotificationChannels request structure.
 * @class
 */
class DescribeGrafanaNotificationChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items to be queried
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Alert channel name, such as “test”.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Alert channel ID, such as “nchannel-abcd1234”.
         * @type {Array.<string> || null}
         */
        this.ChannelIDs = null;

        /**
         * Alert channel status
         * @type {number || null}
         */
        this.ChannelState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChannelIDs = 'ChannelIDs' in params ? params.ChannelIDs : null;
        this.ChannelState = 'ChannelState' in params ? params.ChannelState : null;

    }
}

/**
 * CleanGrafanaInstance request structure.
 * @class
 */
class CleanGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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
 * DescribeSSOAccount request structure.
 * @class
 */
class DescribeSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by account ID such as “10000”
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

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

        /**
         * Tags bound to a template
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
 * UpdateGrafanaNotificationChannel response structure.
 * @class
 */
class UpdateGrafanaNotificationChannelResponse extends  AbstractModel {
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
 * CreatePrometheusTemp response structure.
 * @class
 */
class CreatePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
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
         * Policy group ID. If `PolicyId` is used, this parameter will be ignored, and any value, e.g., `0`, can be passed in.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Alarm policy ID. If this parameter is used, `GroupId` will be ignored.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * The alert configured for an event
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * Whether the event alert has been configured
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

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
 * Metric trigger condition of alarm policy
 * @class
 */
class AlarmPolicyCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Judgment condition of an alarm trigger condition (`0`: Any; `1`: All; `2`: Composite). When the value is set to `2` (i.e., composite trigger conditions), this parameter should be used together with `ComplexExpression`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * Alarm trigger condition list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AlarmPolicyRule> || null}
         */
        this.Rules = null;

        /**
         * The judgment expression of composite alarm trigger conditions, which is valid when the value of `IsUnionRule` is `2`. This parameter is used to determine that an alarm condition is met only when the expression values are `True` for multiple trigger conditions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComplexExpression = null;

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
        this.ComplexExpression = 'ComplexExpression' in params ? params.ComplexExpression : null;

    }
}

/**
 * DescribeGrafanaChannels request structure.
 * @class
 */
class DescribeGrafanaChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items to be queried
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Alert channel name, such as “test”.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Alert channel ID, such as “nchannel-abcd1234”.
         * @type {Array.<string> || null}
         */
        this.ChannelIds = null;

        /**
         * Alert channel status
         * @type {number || null}
         */
        this.ChannelState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChannelIds = 'ChannelIds' in params ? params.ChannelIds : null;
        this.ChannelState = 'ChannelState' in params ? params.ChannelState : null;

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
 * DescribeGrafanaConfig request structure.
 * @class
 */
class DescribeGrafanaConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
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
 * Kubernetes taint
 * @class
 */
class Toleration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the taint to which the toleration is applied
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The key-value relationship
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The taint effect to be matched
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Effect = 'Effect' in params ? params.Effect : null;

    }
}

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
 * InstallPlugins request structure.
 * @class
 */
class InstallPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Plugin information
         * @type {Array.<GrafanaPlugin> || null}
         */
        this.Plugins = null;

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new GrafanaPlugin();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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

        /**
         * The alert configured for an event
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * Whether the event alert has been configured
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

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
 * EnableSSOCamCheck response structure.
 * @class
 */
class EnableSSOCamCheckResponse extends  AbstractModel {
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
 * CreatePrometheusScrapeJob response structure.
 * @class
 */
class CreatePrometheusScrapeJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a successfully created scrape task.
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

        /**
         * Tags bound to a template
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Log alarm information
         * @type {LogAlarmReq || null}
         */
        this.LogAlarmReqInfo = null;

        /**
         * Notification rules for different alarm levels
         * @type {Array.<AlarmHierarchicalNotice> || null}
         */
        this.HierarchicalNotices = null;

        /**
         * A dedicated field for migration policies. 0: Implement authentication logic; 1: Skip authentication logic.
         * @type {number || null}
         */
        this.MigrateFlag = null;

        /**
         * The alert configured for an event
         * @type {string || null}
         */
        this.EbSubject = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.LogAlarmReqInfo) {
            let obj = new LogAlarmReq();
            obj.deserialize(params.LogAlarmReqInfo)
            this.LogAlarmReqInfo = obj;
        }

        if (params.HierarchicalNotices) {
            this.HierarchicalNotices = new Array();
            for (let z in params.HierarchicalNotices) {
                let obj = new AlarmHierarchicalNotice();
                obj.deserialize(params.HierarchicalNotices[z]);
                this.HierarchicalNotices.push(obj);
            }
        }
        this.MigrateFlag = 'MigrateFlag' in params ? params.MigrateFlag : null;
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;

    }
}

/**
 * Region information returned by `PrometheusZoneItem`
 * @class
 */
class PrometheusZoneItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * AZ status. Valid values: `0`(Unavailable), `1` (Available).
         * @type {number || null}
         */
        this.ZoneState = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * AZ name
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyPrometheusAlertPolicy request structure.
 * @class
 */
class ModifyPrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert configuration
         * @type {PrometheusAlertPolicyItem || null}
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
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

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
 * Sync target of the TMP template
 * @class
 */
class PrometheusTemplateSyncTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Target instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster ID, which is required only if the `Level` of the collection template is `cluster`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Last sync time, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SyncTime = null;

        /**
         * The currently used template version, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Cluster type, which is required only if the `Level` of the collection template is `cluster`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Instance name, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Cluster name, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SyncTime = 'SyncTime' in params ? params.SyncTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * DescribePrometheusAlertPolicy response structure.
 * @class
 */
class DescribePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alert details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertRules = null;

        /**
         * Total number
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

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGrafanaEnvironments request structure.
 * @class
 */
class UpdateGrafanaEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Environment variable string
         * @type {string || null}
         */
        this.Envs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Envs = 'Envs' in params ? params.Envs : null;

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
 * DeleteGrafanaNotificationChannel response structure.
 * @class
 */
class DeleteGrafanaNotificationChannelResponse extends  AbstractModel {
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
 * ModifyPrometheusGlobalNotification request structure.
 * @class
 */
class ModifyPrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert notification channel
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

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
 * DescribePrometheusRecordRules response structure.
 * @class
 */
class DescribePrometheusRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording rule
         * @type {Array.<PrometheusRecordRuleYamlItem> || null}
         */
        this.Records = null;

        /**
         * Total number
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new PrometheusRecordRuleYamlItem();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusGlobalNotification response structure.
 * @class
 */
class DescribePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Global alert notification channel
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
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
 * DeletePrometheusAlertPolicy request structure.
 * @class
 */
class DeletePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of alerting rule IDs
         * @type {Array.<string> || null}
         */
        this.AlertIds = null;

        /**
         * Alerting rule name
         * @type {Array.<string> || null}
         */
        this.Names = null;

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
        this.Names = 'Names' in params ? params.Names : null;

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
 * ModifyPrometheusAgentExternalLabels response structure.
 * @class
 */
class ModifyPrometheusAgentExternalLabelsResponse extends  AbstractModel {
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

        /**
         * List of IDs of the alerting rules bound to an alarm notification template
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
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

    }
}

/**
 * DescribeGrafanaWhiteList response structure.
 * @class
 */
class DescribeGrafanaWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array
         * @type {Array.<string> || null}
         */
        this.WhiteList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteList = 'WhiteList' in params ? params.WhiteList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ResumeGrafanaInstance request structure.
 * @class
 */
class ResumeGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
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
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Warning = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Warning = 'Warning' in params ? params.Warning : null;
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
 * DescribePrometheusInstanceDetail response structure.
 * @class
 */
class DescribePrometheusInstanceDetailResponse extends  AbstractModel {
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
         * Instance status. Valid values:

`1`: Creating
`2`: Running
`3`: Abnormal
`4`: Rebooting
`5`: Terminating
`6`: Service suspended
`8`: Suspending service for overdue payment
`9`: Service suspended for overdue payment
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * Billing status

`1`: Normal
`2`: Expired
`3`: Terminated
`4`: Assigning
`5`: Failed to assign
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * Whether Grafana is enabled
`0`: Disabled
`1`: Enabled
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Grafana dashboard URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * Instance billing mode. Valid values:

`2`: Monthly subscription
`3`: Pay-as-you-go
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * Specification name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Storage period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * Expiration time of the purchased instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Auto-renewal flag

`0`: Auto-renewal not enabled
`1`: Auto-renewal enabled
`2`: Auto-renewal prohibited
`-1`: Invalid
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateGrafanaNotificationChannel request structure.
 * @class
 */
class CreateGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert channel name, such as “test”.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Default value: `1`. This parameter has been deprecated. Please use `OrganizationIds` instead.
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Array of notification channel IDs
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Array of extra organization IDs. This parameter has been deprecated. Please use `OrganizationIds` instead.
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * Array of all valid organization IDs. Default value: `1`.
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

    }
}

/**
 * DescribePrometheusTargetsTMP response structure.
 * @class
 */
class DescribePrometheusTargetsTMPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Targets information of all jobs
         * @type {Array.<PrometheusJobTargets> || null}
         */
        this.Jobs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new PrometheusJobTargets();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusClusterAgents response structure.
 * @class
 */
class DescribePrometheusClusterAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the associated cluster
         * @type {Array.<PrometheusAgentOverview> || null}
         */
        this.Agents = null;

        /**
         * The total number of the associated clusters
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Whether the TMP instance is associated with the cluster for the first time. If so, you need to configure recording rules for it. This also applies if it has no default recording rule.
         * @type {boolean || null}
         */
        this.IsFirstBind = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentOverview();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.IsFirstBind = 'IsFirstBind' in params ? params.IsFirstBind : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * TMP instance ID, such as “prom-abcd1234”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID such as “agent-abcd1234”, which can be obtained on the **Agent Management** page in the console
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Scrape task ID such as “job-abcd1234”. You can go to the **Agent Management** page and obtain the ID in the pop-up **Create Scrape Task** window.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Scrape task ID in the format of “job_name:xx”
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
 * Information of managed Prometheus agent
 * @class
 */
class PrometheusAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Describe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

    }
}

/**
 * CreatePrometheusClusterAgent response structure.
 * @class
 */
class CreatePrometheusClusterAgentResponse extends  AbstractModel {
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
 * CreateGrafanaIntegration response structure.
 * @class
 */
class CreateGrafanaIntegrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Integration ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
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
 * Self-built AlertManager configuration used by the alert channel
 * @class
 */
class PrometheusAlertManagerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * AlertManager URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Type of the cluster where AlertManager is deployed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * ID of the cluster where AlertManager is deployed
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Url = 'Url' in params ? params.Url : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateGrafanaInstance request structure.
 * @class
 */
class CreateGrafanaInstanceRequest extends  AbstractModel {
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
         * Array of subnet IDs
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Initial Grafana password
         * @type {string || null}
         */
        this.GrafanaInitPassword = null;

        /**
         * Whether to enable public network access
         * @type {boolean || null}
         */
        this.EnableInternet = null;

        /**
         * Tag
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

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
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.GrafanaInitPassword = 'GrafanaInitPassword' in params ? params.GrafanaInitPassword : null;
        this.EnableInternet = 'EnableInternet' in params ? params.EnableInternet : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

    }
}

/**
 * DescribePrometheusInstanceUsage response structure.
 * @class
 */
class DescribePrometheusInstanceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusInstanceTenantUsage> || null}
         */
        this.UsageSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UsageSet) {
            this.UsageSet = new Array();
            for (let z in params.UsageSet) {
                let obj = new PrometheusInstanceTenantUsage();
                obj.deserialize(params.UsageSet[z]);
                this.UsageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusGlobalNotification request structure.
 * @class
 */
class DescribePrometheusGlobalNotificationRequest extends  AbstractModel {
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
 * CreatePrometheusAgent response structure.
 * @class
 */
class CreatePrometheusAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a successfully created agent.
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
 * DescribePrometheusAlertPolicy request structure.
 * @class
 */
class DescribePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter
Valid values: `ID`, `Name`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribePrometheusRecordRuleYaml request structure.
 * @class
 */
class DescribePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter. Valid values:
`Name`: Name
`Values`: List of target names
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribeGrafanaWhiteList request structure.
 * @class
 */
class DescribeGrafanaWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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
 * DescribePrometheusConfig request structure.
 * @class
 */
class DescribePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster type
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * CreateGrafanaInstance response structure.
 * @class
 */
class CreateGrafanaInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
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

        /**
         * Binding between a notification template and a policy
         * @type {Array.<NoticeBindPolicys> || null}
         */
        this.NoticeBindPolicys = null;

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

        if (params.NoticeBindPolicys) {
            this.NoticeBindPolicys = new Array();
            for (let z in params.NoticeBindPolicys) {
                let obj = new NoticeBindPolicys();
                obj.deserialize(params.NoticeBindPolicys[z]);
                this.NoticeBindPolicys.push(obj);
            }
        }

    }
}

/**
 * DescribeGrafanaNotificationChannels response structure.
 * @class
 */
class DescribeGrafanaNotificationChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of notification channels
         * @type {Array.<GrafanaNotificationChannel> || null}
         */
        this.NotificationChannelSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NotificationChannelSet) {
            this.NotificationChannelSet = new Array();
            for (let z in params.NotificationChannelSet) {
                let obj = new GrafanaNotificationChannel();
                obj.deserialize(params.NotificationChannelSet[z]);
                this.NotificationChannelSet.push(obj);
            }
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
 * ResumeGrafanaInstance response structure.
 * @class
 */
class ResumeGrafanaInstanceResponse extends  AbstractModel {
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
 * DescribePrometheusTempSync response structure.
 * @class
 */
class DescribePrometheusTempSyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of the sync target
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusConfig response structure.
 * @class
 */
class CreatePrometheusConfigResponse extends  AbstractModel {
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
 * UpdateDNSConfig request structure.
 * @class
 */
class UpdateDNSConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Array of DNS servers
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;

    }
}

/**
 * DeletePrometheusClusterAgent response structure.
 * @class
 */
class DeletePrometheusClusterAgentResponse extends  AbstractModel {
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
 * DescribeDNSConfig response structure.
 * @class
 */
class DescribeDNSConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of DNS servers
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UninstallGrafanaPlugins request structure.
 * @class
 */
class UninstallGrafanaPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of plugin IDs, such as "PluginIds": [ "grafana-clock-panel" ]. The plugin ID can be obtained through the `DescribePluginOverviews` API.
         * @type {Array.<string> || null}
         */
        this.PluginIds = null;

        /**
         * TCMG instance ID, such as “grafana-abcdefg”.
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
        this.PluginIds = 'PluginIds' in params ? params.PluginIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteSSOAccount response structure.
 * @class
 */
class DeleteSSOAccountResponse extends  AbstractModel {
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
 * TCMG authorized account information
 * @class
 */
class GrafanaAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User account ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User permission
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateAt = null;

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User’s root account UIN
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.CreateAt = 'CreateAt' in params ? params.CreateAt : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

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
 * UpdateDNSConfig response structure.
 * @class
 */
class UpdateDNSConfigResponse extends  AbstractModel {
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
 * The configuration of alarm level threshold
 * @class
 */
class AlarmHierarchicalValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Threshold for the `Remind` level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remind = null;

        /**
         * Threshold for the `Warn` level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Warn = null;

        /**
         * Threshold for the `Serious` level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Serious = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Remind = 'Remind' in params ? params.Remind : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Serious = 'Serious' in params ? params.Serious : null;

    }
}

/**
 * UpdateGrafanaNotificationChannel request structure.
 * @class
 */
class UpdateGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID, such as “nchannel-abcd1234”.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert channel name, such as “test”.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Array of notification channel IDs
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * This parameter has been deprecated. Please use `OrganizationIds` instead.
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * Array of valid organization IDs
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

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
         * If a metric is created based on a template, the `RuleId` of the metric in the template must be passed in.
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
 * Grafana plugin
 * @class
 */
class GrafanaPlugin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana plugin ID
         * @type {string || null}
         */
        this.PluginId = null;

        /**
         * Grafana plugin version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.PluginId = 'PluginId' in params ? params.PluginId : null;
        this.Version = 'Version' in params ? params.Version : null;

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
 * Log alarm search condition structure
 * @class
 */
class LogFilterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Comparison operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Field value
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * ModifyPrometheusConfig response structure.
 * @class
 */
class ModifyPrometheusConfigResponse extends  AbstractModel {
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
 * CreatePrometheusAlertPolicy response structure.
 * @class
 */
class CreatePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alerting rule ID
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
 * DescribePrometheusInstanceDetail request structure.
 * @class
 */
class DescribePrometheusInstanceDetailRequest extends  AbstractModel {
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

        /**
         * The alert rule limit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AlertRuleLimit = null;

        /**
         * The recording rule limit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordingRuleLimit = null;

        /**
         * Migration status. 0: Not migrating; 1: Migrating from source instance; 2: Migrating to target instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MigrationType = null;

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
        this.AlertRuleLimit = 'AlertRuleLimit' in params ? params.AlertRuleLimit : null;
        this.RecordingRuleLimit = 'RecordingRuleLimit' in params ? params.RecordingRuleLimit : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;

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

        /**
         * Sorting order based on the number of associated policies. Valid values: `asc` (ascending order), `desc` (descending order).
         * @type {string || null}
         */
        this.PolicyCountOrder = null;

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
        this.PolicyCountOrder = 'PolicyCountOrder' in params ? params.PolicyCountOrder : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml response structure.
 * @class
 */
class DeletePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * ModifyPrometheusConfig request structure.
 * @class
 */
class ModifyPrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Configuration of service monitors
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * Configuration of pod monitors
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * Configuration of Prometheus raw jobs
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * DescribeGrafanaEnvironments response structure.
 * @class
 */
class DescribeGrafanaEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment variable string
         * @type {string || null}
         */
        this.Envs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Envs = 'Envs' in params ? params.Envs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteGrafanaInstance request structure.
 * @class
 */
class DeleteGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance names
         * @type {Array.<string> || null}
         */
        this.InstanceIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIDs = 'InstanceIDs' in params ? params.InstanceIDs : null;

    }
}

/**
 * Grafana instance configuration
 * @class
 */
class GrafanaIntegrationConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Integration ID
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * Integration type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Integration content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Integration description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Grafana redirection address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GrafanaURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;

    }
}

/**
 * DeleteGrafanaIntegration request structure.
 * @class
 */
class DeleteGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Integration ID, such as “integration-abcd1234”. You can view it by going to the instance details page and clicking **Tencent Cloud Service Integration** > **Integration List**.
         * @type {string || null}
         */
        this.IntegrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;

    }
}

/**
 * ModifyPrometheusAlertPolicy response structure.
 * @class
 */
class ModifyPrometheusAlertPolicyResponse extends  AbstractModel {
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
 * DescribePrometheusTargetsTMP request structure.
 * @class
 */
class DescribePrometheusTargetsTMPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Filters.
You can filter by `RawJob`, `Job`, `ServiceMonitor`, `PodMonitor`, or `Health`.
`Health` contains three values: `up`, `down`, `unknown`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
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
 * Grafana alert channel
 * @class
 */
class GrafanaChannel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Channel name
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Array of alert channel template IDs
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * All valid organizations in an alert channel
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

    }
}

/**
 * CreatePrometheusConfig request structure.
 * @class
 */
class CreatePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Configuration of service monitors
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * Configuration of pod monitors
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * Configuration of Prometheus raw job
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * DescribeSSOAccount response structure.
 * @class
 */
class DescribeSSOAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of authorized accounts
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GrafanaAccountInfo> || null}
         */
        this.AccountSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new GrafanaAccountInfo();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteGrafanaNotificationChannel request structure.
 * @class
 */
class DeleteGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of channel IDs, such as “nchannel-abcd1234”.
         * @type {Array.<string> || null}
         */
        this.ChannelIDs = null;

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
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
        this.ChannelIDs = 'ChannelIDs' in params ? params.ChannelIDs : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
         * Backend AMP consumer ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AMPConsumerId = null;

        /**
         * Channel to push alarm notifications to CLS.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

        /**
         * Tags bound to a notification template
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.AMPConsumerId = 'AMPConsumerId' in params ? params.AMPConsumerId : null;

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
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
 * CreatePrometheusClusterAgent request structure.
 * @class
 */
class CreatePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent list
         * @type {Array.<PrometheusClusterAgentBasic> || null}
         */
        this.Agents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusClusterAgentBasic();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

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
 * DescribePrometheusInstancesOverview response structure.
 * @class
 */
class DescribePrometheusInstancesOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instances
         * @type {Array.<PrometheusInstancesOverview> || null}
         */
        this.Instances = null;

        /**
         * Total number of instances
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new PrometheusInstancesOverview();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * UpdateGrafanaIntegration response structure.
 * @class
 */
class UpdateGrafanaIntegrationResponse extends  AbstractModel {
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
 * CreateSSOAccount request structure.
 * @class
 */
class CreateSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User account ID, such as “10000000”.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Permission
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Notes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;

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
 * Prometheus alerting rule
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
         * Prometheus statement
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * Additional tags
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Alert sending template
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
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * See `annotations` in the Prometheus rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Label> || null}
         */
        this.Annotations = null;

        /**
         * Alerting rule status
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeGrafanaChannels response structure.
 * @class
 */
class DescribeGrafanaChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of alert channels
         * @type {Array.<GrafanaChannel> || null}
         */
        this.NotificationChannelSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NotificationChannelSet) {
            this.NotificationChannelSet = new Array();
            for (let z in params.NotificationChannelSet) {
                let obj = new GrafanaChannel();
                obj.deserialize(params.NotificationChannelSet[z]);
                this.NotificationChannelSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Alert notification channel configuration
 * @class
 */
class PrometheusNotificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Channel type. Default value: `amp`. Valid values:
`amp`
`webhook`
`alertmanager`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * If `Type` is `webhook`, this field is required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WebHook = null;

        /**
         * If `Type` is `alertmanager`, this field is required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PrometheusAlertManagerConfig || null}
         */
        this.AlertManager = null;

        /**
         * Convergence time
         * @type {string || null}
         */
        this.RepeatInterval = null;

        /**
         * Effect start time
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * Effect end time
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * Alert notification channel. Valid values: `SMS`, `EMAIL`, `CALL`, `WECHAT`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * Alert recipient group (user group)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ReceiverGroups = null;

        /**
         * Alert call sequence.
Note: If `NotifyWay` is `CALL`, this parameter will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.PhoneNotifyOrder = null;

        /**
         * Number of alert calls.
Note: If `NotifyWay` is `CALL`, this parameter will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * Alert call interval within a cycle in seconds.
Note: If `NotifyWay` is `CALL`, this parameter will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * Alert call cycle interval in seconds.
Note: If `NotifyWay` is `CALL`, this parameter will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * Alert call receipt notification
Note: If `NotifyWay` is `CALL`, this parameter will be used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.PhoneArriveNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.WebHook = 'WebHook' in params ? params.WebHook : null;

        if (params.AlertManager) {
            let obj = new PrometheusAlertManagerConfig();
            obj.deserialize(params.AlertManager)
            this.AlertManager = obj;
        }
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
         * Monitoring type details
         * @type {Array.<MonitorTypeInfo> || null}
         */
        this.MonitorTypeInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.MonitorTypeInfos) {
            this.MonitorTypeInfos = new Array();
            for (let z in params.MonitorTypeInfos) {
                let obj = new MonitorTypeInfo();
                obj.deserialize(params.MonitorTypeInfos[z]);
                this.MonitorTypeInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeGrafanaInstance request structure.
 * @class
 */
class UpgradeGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Version alias, such as v7.4.2.
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

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
 * CreatePrometheusGlobalNotification response structure.
 * @class
 */
class CreatePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the global alert notification channel
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribePrometheusRecordRuleYaml response structure.
 * @class
 */
class DescribePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * EnableSSOCamCheck request structure.
 * @class
 */
class EnableSSOCamCheckRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to enable CAM authentication (`true`: Yes; `false`: No)
         * @type {boolean || null}
         */
        this.EnableSSOCamCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EnableSSOCamCheck = 'EnableSSOCamCheck' in params ? params.EnableSSOCamCheck : null;

    }
}

/**
 * DeleteGrafanaIntegration response structure.
 * @class
 */
class DeleteGrafanaIntegrationResponse extends  AbstractModel {
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
 * DescribeInstalledPlugins request structure.
 * @class
 */
class DescribeInstalledPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-kleu3gt0”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter by plugin ID such as “grafana-piechart-panel”. You can view the IDs of installed plugins through the `DescribeInstalledPlugins` API.
         * @type {string || null}
         */
        this.PluginId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PluginId = 'PluginId' in params ? params.PluginId : null;

    }
}

/**
 * DescribePrometheusZones response structure.
 * @class
 */
class DescribePrometheusZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusZoneItem> || null}
         */
        this.ZoneSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new PrometheusZoneItem();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribePrometheusInstanceInitStatus request structure.
 * @class
 */
class DescribePrometheusInstanceInitStatusRequest extends  AbstractModel {
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
 * CreatePrometheusAlertPolicy request structure.
 * @class
 */
class CreatePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert configuration
         * @type {PrometheusAlertPolicyItem || null}
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
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

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
 * DescribePrometheusClusterAgents request structure.
 * @class
 */
class DescribePrometheusClusterAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page limit
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * CreatePrometheusTemp request structure.
 * @class
 */
class CreatePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template settings
         * @type {PrometheusTemp || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new PrometheusTemp();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

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

        /**
         * Log alarm creation request parameters
         * @type {LogAlarmReq || null}
         */
        this.LogAlarmReqInfo = null;

        /**
         * Template ID, which is dedicated to TMP.
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * Status (`0`: Disabled; `1`: Enabled)
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Name of the policy dedicated to TMP
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * The alert configured for an event
         * @type {string || null}
         */
        this.EbSubject = null;

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

        if (params.LogAlarmReqInfo) {
            let obj = new LogAlarmReq();
            obj.deserialize(params.LogAlarmReqInfo)
            this.LogAlarmReqInfo = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;

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
 * Targets of a Prometheus job
 * @class
 */
class PrometheusJobTargets extends  AbstractModel {
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
 * UpdateGrafanaConfig request structure.
 * @class
 */
class UpdateGrafanaConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * JSON-encoded string
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
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * DescribeGrafanaIntegrations request structure.
 * @class
 */
class DescribeGrafanaIntegrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Integration ID
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

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
 * Basic information of the cluster associated with a CM-integrated TMP instance.
 * @class
 */
class PrometheusClusterAgentBasic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether to enable public network CLB
         * @type {boolean || null}
         */
        this.EnableExternal = null;

        /**
         * Pod configurations of components deployed in the cluster
         * @type {PrometheusClusterAgentPodConfig || null}
         */
        this.InClusterPodConfig = null;

        /**
         * External labels, which will be attached to all metrics collected by this cluster
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * Whether to install the default collection configuration.
         * @type {boolean || null}
         */
        this.NotInstallBasicScrape = null;

        /**
         * Whether to collect metrics (`true`: Drop all metrics; `false`: Collect default metrics)
         * @type {boolean || null}
         */
        this.NotScrape = null;

        /**
         * Whether to enable the default recording rule
         * @type {boolean || null}
         */
        this.OpenDefaultRecord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnableExternal = 'EnableExternal' in params ? params.EnableExternal : null;

        if (params.InClusterPodConfig) {
            let obj = new PrometheusClusterAgentPodConfig();
            obj.deserialize(params.InClusterPodConfig)
            this.InClusterPodConfig = obj;
        }

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.NotInstallBasicScrape = 'NotInstallBasicScrape' in params ? params.NotInstallBasicScrape : null;
        this.NotScrape = 'NotScrape' in params ? params.NotScrape : null;
        this.OpenDefaultRecord = 'OpenDefaultRecord' in params ? params.OpenDefaultRecord : null;

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
         * Whether it is a backend call. Rules pulled from the policy template will be used to fill in the `Conditions` and `EventConditions` fields only when the value of this parameter is `1`.
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
 * CreatePrometheusScrapeJob request structure.
 * @class
 */
class CreatePrometheusScrapeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TMP instance ID, such as “prom-abcd1234”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID, such as “agent-abcd1234”. It can be obtained on the **Agent Management** page in the console.
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * Scrape task ID in the format of “job_name:xx”
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
 * CreateExporterIntegration response structure.
 * @class
 */
class CreateExporterIntegrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of successfully created integrations.
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
 * Binding between a notification template and a policy
 * @class
 */
class NoticeBindPolicys extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alert notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * List of IDs of the alerting rules bound to an alarm notification template
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
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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

        /**
         * Filter templates by tag
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
 * RunPrometheusInstance response structure.
 * @class
 */
class RunPrometheusInstanceResponse extends  AbstractModel {
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
 * CheckIsPrometheusNewUser request structure.
 * @class
 */
class CheckIsPrometheusNewUserRequest extends  AbstractModel {
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
 * SyncPrometheusTemp request structure.
 * @class
 */
class SyncPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Sync target
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

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
         * Returned message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * UID of the phone call alarm.
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
         * Recipient group list. The list of recipient group IDs that is queried by API.
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * Recipient list. The list of recipient IDs that is queried by API.
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
 * DescribeInstalledPlugins response structure.
 * @class
 */
class DescribeInstalledPluginsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of plugins
         * @type {Array.<GrafanaPlugin> || null}
         */
        this.PluginSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PluginSet) {
            this.PluginSet = new Array();
            for (let z in params.PluginSet) {
                let obj = new GrafanaPlugin();
                obj.deserialize(params.PluginSet[z]);
                this.PluginSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGrafanaConfig response structure.
 * @class
 */
class UpdateGrafanaConfigResponse extends  AbstractModel {
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
 * DescribePrometheusConfig response structure.
 * @class
 */
class DescribePrometheusConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Global configuration
         * @type {string || null}
         */
        this.Config = null;

        /**
         * ServiceMonitor configuration
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitor configuration
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * Raw jobs
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * Probes
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.Probes = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

        if (params.Probes) {
            this.Probes = new Array();
            for (let z in params.Probes) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.Probes[z]);
                this.Probes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGrafanaEnvironments response structure.
 * @class
 */
class UpdateGrafanaEnvironmentsResponse extends  AbstractModel {
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
         * Filter by product type. For example, "cvm" indicates Cloud Virtual Machine.
         * @type {Array.<string> || null}
         */
        this.ProductName = null;

        /**
         * Filter by event name. For example, "guest_reboot" indicates instance restart.
         * @type {Array.<string> || null}
         */
        this.EventName = null;

        /**
         * Affected object, such as "ins-19708ino".
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
 * CreatePrometheusGlobalNotification request structure.
 * @class
 */
class CreatePrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Alert notification channel
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

    }
}

/**
 * ModifyPrometheusTemp response structure.
 * @class
 */
class ModifyPrometheusTempResponse extends  AbstractModel {
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
 * UpdateGrafanaWhiteList request structure.
 * @class
 */
class UpdateGrafanaWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Array of public IPs (such as “127.0.0.1”) in the allowlist, which can be viewed through the `DescribeGrafanaWhiteList` API.
         * @type {Array.<string> || null}
         */
        this.Whitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Whitelist = 'Whitelist' in params ? params.Whitelist : null;

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
         * TMP instance ID, such as “prom-abcd1234”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of agent IDs such as “agent-abcd1234”, which can be obtained on the **Agent Management** page in the console.
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
 * CheckIsPrometheusNewUser response structure.
 * @class
 */
class CheckIsPrometheusNewUserResponse extends  AbstractModel {
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
 * ModifyPrometheusRecordRuleYaml request structure.
 * @class
 */
class ModifyPrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Recording instance name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New content
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeletePrometheusAlertPolicy response structure.
 * @class
 */
class DeletePrometheusAlertPolicyResponse extends  AbstractModel {
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

        /**
         * Notification rules for different alarm levels
         * @type {Array.<AlarmHierarchicalNotice> || null}
         */
        this.HierarchicalNotices = null;

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

        if (params.HierarchicalNotices) {
            this.HierarchicalNotices = new Array();
            for (let z in params.HierarchicalNotices) {
                let obj = new AlarmHierarchicalNotice();
                obj.deserialize(params.HierarchicalNotices[z]);
                this.HierarchicalNotices.push(obj);
            }
        }

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
 * Monitoring type details
 * @class
 */
class MonitorTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitoring type ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Monitoring type
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sort order
         * @type {number || null}
         */
        this.SortId = null;

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
        this.SortId = 'SortId' in params ? params.SortId : null;

    }
}

/**
 * Dimension information of the policy type
 * @class
 */
class DimensionNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension key ID displayed on the backend
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Dimension key name displayed on the frontend
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether it is required
         * @type {boolean || null}
         */
        this.IsRequired = null;

        /**
         * List of supported operators
         * @type {Array.<Operator> || null}
         */
        this.Operators = null;

        /**
         * Whether multiple items can be selected
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * Whether it can be modified after creation
         * @type {boolean || null}
         */
        this.IsMutable = null;

        /**
         * Whether it is displayed to users
         * @type {boolean || null}
         */
        this.IsVisible = null;

        /**
         * Whether it can be used to filter policies
         * @type {boolean || null}
         */
        this.CanFilterPolicy = null;

        /**
         * Whether it can be used to filter historical alarms
         * @type {boolean || null}
         */
        this.CanFilterHistory = null;

        /**
         * Whether it can be used as an aggregate dimension
         * @type {boolean || null}
         */
        this.CanGroupBy = null;

        /**
         * Whether it must be used as an aggregate dimension
         * @type {boolean || null}
         */
        this.MustGroupBy = null;

        /**
         * The key to be replaced on the frontend
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ShowValueReplace = null;

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
        this.IsRequired = 'IsRequired' in params ? params.IsRequired : null;

        if (params.Operators) {
            this.Operators = new Array();
            for (let z in params.Operators) {
                let obj = new Operator();
                obj.deserialize(params.Operators[z]);
                this.Operators.push(obj);
            }
        }
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsMutable = 'IsMutable' in params ? params.IsMutable : null;
        this.IsVisible = 'IsVisible' in params ? params.IsVisible : null;
        this.CanFilterPolicy = 'CanFilterPolicy' in params ? params.CanFilterPolicy : null;
        this.CanFilterHistory = 'CanFilterHistory' in params ? params.CanFilterHistory : null;
        this.CanGroupBy = 'CanGroupBy' in params ? params.CanGroupBy : null;
        this.MustGroupBy = 'MustGroupBy' in params ? params.MustGroupBy : null;
        this.ShowValueReplace = 'ShowValueReplace' in params ? params.ShowValueReplace : null;

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
 * Operators supported by the instance
 * @class
 */
class Operator extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operator ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Operator name
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
`pending`
`running`
`success`
`failed`
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * Step start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * Step end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * If `LifeState` is `failed`, this field displays the error message.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribePrometheusTemp response structure.
 * @class
 */
class DescribePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of templates
         * @type {Array.<PrometheusTemp> || null}
         */
        this.Templates = null;

        /**
         * Total number
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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new PrometheusTemp();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGrafanaConfig response structure.
 * @class
 */
class DescribeGrafanaConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * JSON-encoded string
         * @type {string || null}
         */
        this.Config = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Template instance
 * @class
 */
class PrometheusTemp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template dimension. Valid values:
`instance`
`cluster`
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Template description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * This parameter is valid if `Level` is `instance`.
List of recording rules in the template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of ServiceMonitor rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of PodMonitor rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * This parameter is valid if `Level` is `cluster`.
List of RawJob rules in the template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * Template ID, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Last update time, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The current version, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Whether it is the default template provided by the system, which is used as an output parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * This parameter is valid if `Level` is `instance`.
List of alert configurations in the template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

        /**
         * Number of associated instances
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetsTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }
        this.TargetsTotal = 'TargetsTotal' in params ? params.TargetsTotal : null;

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

        /**
         * Deprecated information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DescribePolicyConditionListResponseDeprecatingInfo || null}
         */
        this.DeprecatingInfo = null;

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

        if (params.DeprecatingInfo) {
            let obj = new DescribePolicyConditionListResponseDeprecatingInfo();
            obj.deserialize(params.DeprecatingInfo)
            this.DeprecatingInfo = obj;
        }

    }
}

/**
 * DeletePrometheusTemp request structure.
 * @class
 */
class DeletePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * EnableGrafanaInternet response structure.
 * @class
 */
class EnableGrafanaInternetResponse extends  AbstractModel {
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
 * DeletePrometheusTempSync request structure.
 * @class
 */
class DeletePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * List of unsynced objects
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DescribePrometheusGlobalConfig request structure.
 * @class
 */
class DescribePrometheusGlobalConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance-level scrape configuration
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to disable statistics
         * @type {boolean || null}
         */
        this.DisableStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DisableStatistics = 'DisableStatistics' in params ? params.DisableStatistics : null;

    }
}

/**
 * TMP usage information
 * @class
 */
class PrometheusInstanceTenantUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Billing cycle
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CalcDate = null;

        /**
         * Total usage
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Usage of basic (free) metrics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Basic = null;

        /**
         * Usage of paid metrics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CalcDate = 'CalcDate' in params ? params.CalcDate : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Basic = 'Basic' in params ? params.Basic : null;
        this.Fee = 'Fee' in params ? params.Fee : null;

    }
}

/**
 * DescribePrometheusZones request structure.
 * @class
 */
class DescribePrometheusZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID. You only need to specify the value of either `RegionId` or `RegionName`.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region name. You only need to specify the value of either `RegionId` or `RegionName`.
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

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
 * DeletePrometheusConfig request structure.
 * @class
 */
class DeletePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of names of the service monitors to be deleted
         * @type {Array.<string> || null}
         */
        this.ServiceMonitors = null;

        /**
         * List of names of the pod monitors to be deleted
         * @type {Array.<string> || null}
         */
        this.PodMonitors = null;

        /**
         * List of names of the raw jobs to be deleted
         * @type {Array.<string> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ServiceMonitors = 'ServiceMonitors' in params ? params.ServiceMonitors : null;
        this.PodMonitors = 'PodMonitors' in params ? params.PodMonitors : null;
        this.RawJobs = 'RawJobs' in params ? params.RawJobs : null;

    }
}

/**
 * TMP alerting rule instance
 * @class
 */
class PrometheusAlertPolicyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of rules
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.Rules = null;

        /**
         * Alerting rule ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * If the alert comes from a template, `TemplateId` is the template ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Alert channel, which may be returned as null if used in a template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * Last modification time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * If the alerting rule comes from the user cluster CRD resource definition, `ClusterId` is the cluster ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusAgentExternalLabels request structure.
 * @class
 */
class ModifyPrometheusAgentExternalLabelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * New external labels
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }

    }
}

/**
 * Notification template ID and the list of alarm notification levels. The values `Remind` and `Serious` indicate that the notification template only sends alarms at the `Remind` and `Serious` levels.
 * @class
 */
class AlarmHierarchicalNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification template ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * The list of alarm notification levels. The values `Remind` and `Serious` indicate that the notification template only sends alarms at the `Remind` and `Serious` levels.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Classification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.Classification = 'Classification' in params ? params.Classification : null;

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
 * DescribePrometheusTemp request structure.
 * @class
 */
class DescribePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fuzzy filter. Valid values:
`Level`: Filter by template level
`Name`: Filter by name
`Describe`: Filter by description
`ID`: Filter by templateId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page
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
         * Duration in seconds.
Note: This field may return null, indicating that no valid values can be obtained.
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

        /**
         * Whether it is an advanced metric. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * Whether the advance metric feature is enabled. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * Product ID.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DeleteGrafanaInstance response structure.
 * @class
 */
class DeleteGrafanaInstanceResponse extends  AbstractModel {
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
 * Overview of managed Prometheus agent
 * @class
 */
class PrometheusAgentOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster type
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Agent status. Valid values: 
`normal`
`abnormal`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * External labels
External labels, which will be attached to all metrics in this cluster
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * Cluster region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * ID of the VPC where the cluster resides
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Recorded information of failed operations, such as association.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * Agent name
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Query filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter method. Valid values: `=`, `!=`, `in`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter dimension name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter value. For the `in` filter method, separate multiple values by comma.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Filter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value range
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

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
 * UpdateSSOAccount request structure.
 * @class
 */
class UpdateSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCMG instance ID, such as “grafana-abcdefgh”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User account ID, such as “10000000”.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Permission
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Notes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;

    }
}

/**
 * CreateSSOAccount response structure.
 * @class
 */
class CreateSSOAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The added user UIN
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
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

        /**
         * Whether the returned result filters policies associated with all objects. Valid values: `1` (Yes), `0` (No).
         * @type {number || null}
         */
        this.NotBindAll = null;

        /**
         * Whether the returned result filters policies associated with instance groups. Valid values: `1` (Yes), `0` (No).
         * @type {number || null}
         */
        this.NotInstanceGroup = null;

        /**
         * Filter policies by tag
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
        this.NotBindAll = 'NotBindAll' in params ? params.NotBindAll : null;
        this.NotInstanceGroup = 'NotInstanceGroup' in params ? params.NotInstanceGroup : null;

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
 * ModifyPrometheusGlobalNotification response structure.
 * @class
 */
class ModifyPrometheusGlobalNotificationResponse extends  AbstractModel {
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
 * CleanGrafanaInstance response structure.
 * @class
 */
class CleanGrafanaInstanceResponse extends  AbstractModel {
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
 * CreateAlertRule request structure.
 * @class
 */
class CreateAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TMP instance ID, such as “prom-abcd1234”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Alerting rule expression. For more information, see <a href="https://www.tencentcloud.com/document/product/1116/43192?lang=en&pg=">Alerting Rule Description</a>
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
 * ModifyPrometheusRecordRuleYaml response structure.
 * @class
 */
class ModifyPrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * UpdateGrafanaIntegration request structure.
 * @class
 */
class UpdateGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Integration ID, such as “integration-abcd1234”. You can view it by going to the instance details page and clicking **Tencent Cloud Service Integration** > **Integration List**.
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * TCMG instance ID, such as “grafana-12345678”.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Integration type, such as “tencent-cloud-prometheus”. You can view it by going to the instance details page and clicking **Tencent Cloud Service Integration** > **Integration List**.
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Integration content
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
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml request structure.
 * @class
 */
class DeletePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of recording rules
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Names = 'Names' in params ? params.Names : null;

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
         * Namespace. Valid values: `QCE`, `TKE2`.
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
 * Grafana notification channel
 * @class
 */
class GrafanaNotificationChannel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Channel name
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Array of notification channel template IDs
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * Default valid organization. This parameter has been deprecated. Please use `OrganizationIds` instead.
         * @type {string || null}
         */
        this.OrgId = null;

        /**
         * Extra valid organization. This parameter has been deprecated. Please use `OrganizationIds` instead.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * Valid organization. This parameter has been deprecated. Please use `OrganizationIds` instead.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgIds = null;

        /**
         * All valid organizations in an alert channel
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrgIds = 'OrgIds' in params ? params.OrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

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
 * Log alarm request information
 * @class
 */
class LogAlarmReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * APM instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Search condition
         * @type {Array.<LogFilterInfo> || null}
         */
        this.Filter = null;

        /**
         * The switch to enable/disable alarm merging
         * @type {string || null}
         */
        this.AlarmMerge = null;

        /**
         * Alarm merging time
         * @type {string || null}
         */
        this.AlarmMergeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new LogFilterInfo();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.AlarmMerge = 'AlarmMerge' in params ? params.AlarmMerge : null;
        this.AlarmMergeTime = 'AlarmMergeTime' in params ? params.AlarmMergeTime : null;

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
 * UpdateSSOAccount response structure.
 * @class
 */
class UpdateSSOAccountResponse extends  AbstractModel {
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
 * DescribeGrafanaInstances response structure.
 * @class
 */
class DescribeGrafanaInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter has been disused. Use `Instances` instead.
         * @type {Array.<GrafanaInstanceInfo> || null}
         */
        this.InstanceSet = null;

        /**
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances
         * @type {Array.<GrafanaInstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new GrafanaInstanceInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new GrafanaInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunPrometheusInstance request structure.
 * @class
 */
class RunPrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Subnet ID. Initialization is performed with the subnet used by the instance by default and can also be performed with the subnet passed in by this parameter.
         * @type {string || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

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
    ModifyAlarmPolicyInfoRequest: ModifyAlarmPolicyInfoRequest,
    AlarmPolicyTriggerTask: AlarmPolicyTriggerTask,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    DescribePrometheusInstancesOverviewRequest: DescribePrometheusInstancesOverviewRequest,
    ModifyGrafanaInstanceResponse: ModifyGrafanaInstanceResponse,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    ModifyGrafanaInstanceRequest: ModifyGrafanaInstanceRequest,
    AlarmHistoryMetric: AlarmHistoryMetric,
    EnableGrafanaSSOResponse: EnableGrafanaSSOResponse,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    DeletePrometheusClusterAgentRequest: DeletePrometheusClusterAgentRequest,
    DescribePrometheusScrapeJobsRequest: DescribePrometheusScrapeJobsRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    CreatePrometheusMultiTenantInstancePostPayModeRequest: CreatePrometheusMultiTenantInstancePostPayModeRequest,
    DescribePolicyConditionListResponseDeprecatingInfo: DescribePolicyConditionListResponseDeprecatingInfo,
    PrometheusTempModify: PrometheusTempModify,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    CommonNamespaceNew: CommonNamespaceNew,
    Tag: Tag,
    DescribePrometheusAgentInstancesRequest: DescribePrometheusAgentInstancesRequest,
    PrometheusRecordRuleYamlItem: PrometheusRecordRuleYamlItem,
    Label: Label,
    DescribeGrafanaIntegrationsResponse: DescribeGrafanaIntegrationsResponse,
    CreatePrometheusMultiTenantInstancePostPayModeResponse: CreatePrometheusMultiTenantInstancePostPayModeResponse,
    UpdatePrometheusAgentStatusResponse: UpdatePrometheusAgentStatusResponse,
    SyncPrometheusTempResponse: SyncPrometheusTempResponse,
    UpdateGrafanaWhiteListResponse: UpdateGrafanaWhiteListResponse,
    DescribeGrafanaEnvironmentsRequest: DescribeGrafanaEnvironmentsRequest,
    PrometheusConfigItem: PrometheusConfigItem,
    AlarmPolicy: AlarmPolicy,
    DeleteExporterIntegrationRequest: DeleteExporterIntegrationRequest,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    PrometheusRuleSet: PrometheusRuleSet,
    DescribeAllNamespacesResponse: DescribeAllNamespacesResponse,
    TerminatePrometheusInstancesRequest: TerminatePrometheusInstancesRequest,
    InstallPluginsResponse: InstallPluginsResponse,
    AlarmPolicyRule: AlarmPolicyRule,
    CreateGrafanaIntegrationRequest: CreateGrafanaIntegrationRequest,
    Dimension: Dimension,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    PrometheusInstancesOverview: PrometheusInstancesOverview,
    DescribePrometheusInstanceInitStatusResponse: DescribePrometheusInstanceInitStatusResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeAlarmNoticeCallbacksResponse: DescribeAlarmNoticeCallbacksResponse,
    DescribePrometheusInstanceUsageRequest: DescribePrometheusInstanceUsageRequest,
    DeletePrometheusScrapeJobsRequest: DeletePrometheusScrapeJobsRequest,
    CreatePrometheusRecordRuleYamlRequest: CreatePrometheusRecordRuleYamlRequest,
    Instance: Instance,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    PrometheusClusterAgentPodConfig: PrometheusClusterAgentPodConfig,
    GrafanaInstanceInfo: GrafanaInstanceInfo,
    DeletePrometheusConfigResponse: DeletePrometheusConfigResponse,
    CreatePrometheusRecordRuleYamlResponse: CreatePrometheusRecordRuleYamlResponse,
    MetricObjectMeaning: MetricObjectMeaning,
    AlarmEvent: AlarmEvent,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    UninstallGrafanaPluginsResponse: UninstallGrafanaPluginsResponse,
    ModifyPrometheusTempRequest: ModifyPrometheusTempRequest,
    UpgradeGrafanaInstanceResponse: UpgradeGrafanaInstanceResponse,
    DeletePrometheusTempSyncResponse: DeletePrometheusTempSyncResponse,
    DescribeDNSConfigRequest: DescribeDNSConfigRequest,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    DescribePrometheusRecordRulesRequest: DescribePrometheusRecordRulesRequest,
    DescribeExporterIntegrationsResponse: DescribeExporterIntegrationsResponse,
    UpdateAlertRuleResponse: UpdateAlertRuleResponse,
    InstanceGroup: InstanceGroup,
    EnableGrafanaSSORequest: EnableGrafanaSSORequest,
    DescribePrometheusScrapeJobsResponse: DescribePrometheusScrapeJobsResponse,
    EnableGrafanaInternetRequest: EnableGrafanaInternetRequest,
    GrafanaAccountRole: GrafanaAccountRole,
    DestroyPrometheusInstanceRequest: DestroyPrometheusInstanceRequest,
    PolicyGroupReceiverInfo: PolicyGroupReceiverInfo,
    Metric: Metric,
    MidQueryCondition: MidQueryCondition,
    DeleteSSOAccountRequest: DeleteSSOAccountRequest,
    DescribePrometheusAgentInstancesResponse: DescribePrometheusAgentInstancesResponse,
    URLNotice: URLNotice,
    DeletePrometheusTempResponse: DeletePrometheusTempResponse,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    RecordingRuleSet: RecordingRuleSet,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    ModifyAlarmPolicyStatusResponse: ModifyAlarmPolicyStatusResponse,
    DescribeGrafanaInstancesRequest: DescribeGrafanaInstancesRequest,
    DescribePrometheusTempSyncRequest: DescribePrometheusTempSyncRequest,
    DescribePrometheusGlobalConfigResponse: DescribePrometheusGlobalConfigResponse,
    CreateRecordingRuleResponse: CreateRecordingRuleResponse,
    CreateGrafanaNotificationChannelResponse: CreateGrafanaNotificationChannelResponse,
    DescribeGrafanaNotificationChannelsRequest: DescribeGrafanaNotificationChannelsRequest,
    CleanGrafanaInstanceRequest: CleanGrafanaInstanceRequest,
    DescribeSSOAccountRequest: DescribeSSOAccountRequest,
    UpdateExporterIntegrationResponse: UpdateExporterIntegrationResponse,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    InstanceGroups: InstanceGroups,
    UpdateGrafanaNotificationChannelResponse: UpdateGrafanaNotificationChannelResponse,
    CreatePrometheusTempResponse: CreatePrometheusTempResponse,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    AlarmPolicyCondition: AlarmPolicyCondition,
    DescribeGrafanaChannelsRequest: DescribeGrafanaChannelsRequest,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeGrafanaConfigRequest: DescribeGrafanaConfigRequest,
    UpdateRecordingRuleRequest: UpdateRecordingRuleRequest,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    DescribePrometheusInstancesRequest: DescribePrometheusInstancesRequest,
    Toleration: Toleration,
    TagInstance: TagInstance,
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    InstallPluginsRequest: InstallPluginsRequest,
    DescribeAlarmEventsResponse: DescribeAlarmEventsResponse,
    DescribeServiceDiscoveryResponse: DescribeServiceDiscoveryResponse,
    PrometheusTag: PrometheusTag,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    CreateServiceDiscoveryResponse: CreateServiceDiscoveryResponse,
    EnableSSOCamCheckResponse: EnableSSOCamCheckResponse,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    CreatePrometheusScrapeJobResponse: CreatePrometheusScrapeJobResponse,
    CreateAlarmPolicyRequest: CreateAlarmPolicyRequest,
    PrometheusZoneItem: PrometheusZoneItem,
    ModifyPrometheusAlertPolicyRequest: ModifyPrometheusAlertPolicyRequest,
    ModifyPrometheusInstanceAttributesResponse: ModifyPrometheusInstanceAttributesResponse,
    PrometheusTemplateSyncTarget: PrometheusTemplateSyncTarget,
    DescribePrometheusAlertPolicyResponse: DescribePrometheusAlertPolicyResponse,
    UpdateGrafanaEnvironmentsRequest: UpdateGrafanaEnvironmentsRequest,
    CommonNamespace: CommonNamespace,
    DeleteGrafanaNotificationChannelResponse: DeleteGrafanaNotificationChannelResponse,
    DataPoint: DataPoint,
    DescribeAlarmPoliciesResponse: DescribeAlarmPoliciesResponse,
    ModifyPrometheusGlobalNotificationRequest: ModifyPrometheusGlobalNotificationRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    DescribePrometheusRecordRulesResponse: DescribePrometheusRecordRulesResponse,
    DescribePrometheusGlobalNotificationResponse: DescribePrometheusGlobalNotificationResponse,
    DescribeMonitorTypesRequest: DescribeMonitorTypesRequest,
    DimensionsDesc: DimensionsDesc,
    DeletePrometheusAlertPolicyRequest: DeletePrometheusAlertPolicyRequest,
    ServiceDiscoveryItem: ServiceDiscoveryItem,
    ModifyPrometheusAgentExternalLabelsResponse: ModifyPrometheusAgentExternalLabelsResponse,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    DescribeGrafanaWhiteListResponse: DescribeGrafanaWhiteListResponse,
    DescribeAlertRulesResponse: DescribeAlertRulesResponse,
    ResumeGrafanaInstanceRequest: ResumeGrafanaInstanceRequest,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribeExporterIntegrationsRequest: DescribeExporterIntegrationsRequest,
    DescribePrometheusInstanceDetailResponse: DescribePrometheusInstanceDetailResponse,
    Point: Point,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    CreateGrafanaNotificationChannelRequest: CreateGrafanaNotificationChannelRequest,
    DescribePrometheusTargetsTMPResponse: DescribePrometheusTargetsTMPResponse,
    DescribePrometheusClusterAgentsResponse: DescribePrometheusClusterAgentsResponse,
    UpdatePrometheusScrapeJobRequest: UpdatePrometheusScrapeJobRequest,
    PrometheusAgentInfo: PrometheusAgentInfo,
    CreatePrometheusClusterAgentResponse: CreatePrometheusClusterAgentResponse,
    CreateGrafanaIntegrationResponse: CreateGrafanaIntegrationResponse,
    BindPrometheusManagedGrafanaRequest: BindPrometheusManagedGrafanaRequest,
    PrometheusAlertManagerConfig: PrometheusAlertManagerConfig,
    CreateGrafanaInstanceRequest: CreateGrafanaInstanceRequest,
    DescribePrometheusInstanceUsageResponse: DescribePrometheusInstanceUsageResponse,
    DescribePrometheusGlobalNotificationRequest: DescribePrometheusGlobalNotificationRequest,
    DeleteExporterIntegrationResponse: DeleteExporterIntegrationResponse,
    UpdateRecordingRuleResponse: UpdateRecordingRuleResponse,
    CreatePrometheusAgentResponse: CreatePrometheusAgentResponse,
    DescribePrometheusAlertPolicyRequest: DescribePrometheusAlertPolicyRequest,
    DescribeAlarmMetricsResponse: DescribeAlarmMetricsResponse,
    DescribePrometheusRecordRuleYamlRequest: DescribePrometheusRecordRuleYamlRequest,
    DescribeGrafanaWhiteListRequest: DescribeGrafanaWhiteListRequest,
    DescribePrometheusConfigRequest: DescribePrometheusConfigRequest,
    CreateGrafanaInstanceResponse: CreateGrafanaInstanceResponse,
    UpdateAlertRuleRequest: UpdateAlertRuleRequest,
    AlarmPolicyEventCondition: AlarmPolicyEventCondition,
    DeleteAlarmNoticesRequest: DeleteAlarmNoticesRequest,
    DescribeGrafanaNotificationChannelsResponse: DescribeGrafanaNotificationChannelsResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    ResumeGrafanaInstanceResponse: ResumeGrafanaInstanceResponse,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribePrometheusTempSyncResponse: DescribePrometheusTempSyncResponse,
    CreatePrometheusConfigResponse: CreatePrometheusConfigResponse,
    UpdateDNSConfigRequest: UpdateDNSConfigRequest,
    DeletePrometheusClusterAgentResponse: DeletePrometheusClusterAgentResponse,
    DescribeDNSConfigResponse: DescribeDNSConfigResponse,
    DeleteRecordingRulesRequest: DeleteRecordingRulesRequest,
    MonitorTypeNamespace: MonitorTypeNamespace,
    UninstallGrafanaPluginsRequest: UninstallGrafanaPluginsRequest,
    DeleteSSOAccountResponse: DeleteSSOAccountResponse,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    GrafanaAccountInfo: GrafanaAccountInfo,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    ModifyAlarmPolicyTasksRequest: ModifyAlarmPolicyTasksRequest,
    GetPrometheusAgentManagementCommandRequest: GetPrometheusAgentManagementCommandRequest,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    GetPrometheusAgentManagementCommandResponse: GetPrometheusAgentManagementCommandResponse,
    MetricData: MetricData,
    DescribeStatisticDataResponse: DescribeStatisticDataResponse,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    UpdateDNSConfigResponse: UpdateDNSConfigResponse,
    UninstallGrafanaDashboardResponse: UninstallGrafanaDashboardResponse,
    AlarmHierarchicalValue: AlarmHierarchicalValue,
    UpdateGrafanaNotificationChannelRequest: UpdateGrafanaNotificationChannelRequest,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    GrafanaPlugin: GrafanaPlugin,
    DestroyPrometheusInstanceResponse: DestroyPrometheusInstanceResponse,
    DescribeAlertRulesRequest: DescribeAlertRulesRequest,
    DescribePrometheusInstancesResponse: DescribePrometheusInstancesResponse,
    LogFilterInfo: LogFilterInfo,
    CreateExporterIntegrationRequest: CreateExporterIntegrationRequest,
    ModifyPrometheusConfigResponse: ModifyPrometheusConfigResponse,
    PrometheusAgent: PrometheusAgent,
    CreatePrometheusAlertPolicyResponse: CreatePrometheusAlertPolicyResponse,
    DescribePrometheusInstanceDetailRequest: DescribePrometheusInstanceDetailRequest,
    UserNotice: UserNotice,
    PrometheusInstancesItem: PrometheusInstancesItem,
    DescribeConditionsTemplateListRequest: DescribeConditionsTemplateListRequest,
    DeletePrometheusRecordRuleYamlResponse: DeletePrometheusRecordRuleYamlResponse,
    MetricDataPoint: MetricDataPoint,
    GetMonitorDataRequest: GetMonitorDataRequest,
    CreateRecordingRuleRequest: CreateRecordingRuleRequest,
    ModifyPrometheusConfigRequest: ModifyPrometheusConfigRequest,
    DescribeGrafanaEnvironmentsResponse: DescribeGrafanaEnvironmentsResponse,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DeleteGrafanaInstanceRequest: DeleteGrafanaInstanceRequest,
    GrafanaIntegrationConfig: GrafanaIntegrationConfig,
    DeleteGrafanaIntegrationRequest: DeleteGrafanaIntegrationRequest,
    ModifyPrometheusAlertPolicyResponse: ModifyPrometheusAlertPolicyResponse,
    DescribePrometheusTargetsTMPRequest: DescribePrometheusTargetsTMPRequest,
    CreateServiceDiscoveryRequest: CreateServiceDiscoveryRequest,
    PeriodsSt: PeriodsSt,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    GrafanaChannel: GrafanaChannel,
    CreatePrometheusConfigRequest: CreatePrometheusConfigRequest,
    DescribeSSOAccountResponse: DescribeSSOAccountResponse,
    CreateAlarmPolicyResponse: CreateAlarmPolicyResponse,
    DeleteGrafanaNotificationChannelRequest: DeleteGrafanaNotificationChannelRequest,
    AlarmNotice: AlarmNotice,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    CreatePrometheusClusterAgentRequest: CreatePrometheusClusterAgentRequest,
    ModifyAlarmPolicyConditionResponse: ModifyAlarmPolicyConditionResponse,
    DescribePrometheusInstancesOverviewResponse: DescribePrometheusInstancesOverviewResponse,
    MetricSet: MetricSet,
    PrometheusInstanceGrantInfo: PrometheusInstanceGrantInfo,
    TemplateGroup: TemplateGroup,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    UpdateGrafanaIntegrationResponse: UpdateGrafanaIntegrationResponse,
    DescribeAlarmHistoriesResponse: DescribeAlarmHistoriesResponse,
    DescribeAlarmMetricsRequest: DescribeAlarmMetricsRequest,
    CreateSSOAccountRequest: CreateSSOAccountRequest,
    AlarmPolicyFilter: AlarmPolicyFilter,
    ModifyAlarmPolicyNoticeResponse: ModifyAlarmPolicyNoticeResponse,
    PrometheusAlertRule: PrometheusAlertRule,
    UnbindPrometheusManagedGrafanaResponse: UnbindPrometheusManagedGrafanaResponse,
    DescribeGrafanaChannelsResponse: DescribeGrafanaChannelsResponse,
    DescribeAlarmPolicyResponse: DescribeAlarmPolicyResponse,
    PrometheusNotificationItem: PrometheusNotificationItem,
    DescribeMonitorTypesResponse: DescribeMonitorTypesResponse,
    UpgradeGrafanaInstanceRequest: UpgradeGrafanaInstanceRequest,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePrometheusGlobalNotificationResponse: CreatePrometheusGlobalNotificationResponse,
    DescribeAlarmHistoriesRequest: DescribeAlarmHistoriesRequest,
    DescribePrometheusRecordRuleYamlResponse: DescribePrometheusRecordRuleYamlResponse,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    EnableSSOCamCheckRequest: EnableSSOCamCheckRequest,
    DeleteGrafanaIntegrationResponse: DeleteGrafanaIntegrationResponse,
    DescribeInstalledPluginsRequest: DescribeInstalledPluginsRequest,
    DescribePrometheusZonesResponse: DescribePrometheusZonesResponse,
    DescribePrometheusAgentsRequest: DescribePrometheusAgentsRequest,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    DescribePrometheusInstanceInitStatusRequest: DescribePrometheusInstanceInitStatusRequest,
    CreatePrometheusAlertPolicyRequest: CreatePrometheusAlertPolicyRequest,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    UpgradeGrafanaDashboardResponse: UpgradeGrafanaDashboardResponse,
    DescribeAllNamespacesRequest: DescribeAllNamespacesRequest,
    PolicyGroup: PolicyGroup,
    DescribePrometheusClusterAgentsRequest: DescribePrometheusClusterAgentsRequest,
    UnbindPrometheusManagedGrafanaRequest: UnbindPrometheusManagedGrafanaRequest,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    DescribeConditionsTemplateListResponse: DescribeConditionsTemplateListResponse,
    CreatePrometheusTempRequest: CreatePrometheusTempRequest,
    ModifyAlarmPolicyInfoResponse: ModifyAlarmPolicyInfoResponse,
    MetricConfig: MetricConfig,
    DescribeAlarmEventsRequest: DescribeAlarmEventsRequest,
    ModifyAlarmPolicyConditionRequest: ModifyAlarmPolicyConditionRequest,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    PrometheusJobTargets: PrometheusJobTargets,
    UpdateGrafanaConfigRequest: UpdateGrafanaConfigRequest,
    DescribeGrafanaIntegrationsRequest: DescribeGrafanaIntegrationsRequest,
    AlarmHistory: AlarmHistory,
    PrometheusClusterAgentBasic: PrometheusClusterAgentBasic,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePrometheusScrapeJobRequest: CreatePrometheusScrapeJobRequest,
    CreateExporterIntegrationResponse: CreateExporterIntegrationResponse,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    NoticeBindPolicys: NoticeBindPolicys,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    RunPrometheusInstanceResponse: RunPrometheusInstanceResponse,
    UpdateExporterIntegrationRequest: UpdateExporterIntegrationRequest,
    CheckIsPrometheusNewUserRequest: CheckIsPrometheusNewUserRequest,
    DescribeAlarmNoticeResponse: DescribeAlarmNoticeResponse,
    DeleteAlertRulesRequest: DeleteAlertRulesRequest,
    SyncPrometheusTempRequest: SyncPrometheusTempRequest,
    GetMonitorDataResponse: GetMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    DescribeRecordingRulesRequest: DescribeRecordingRulesRequest,
    UpgradeGrafanaDashboardRequest: UpgradeGrafanaDashboardRequest,
    DeleteAlarmPolicyResponse: DeleteAlarmPolicyResponse,
    DescribeInstalledPluginsResponse: DescribeInstalledPluginsResponse,
    UpdateGrafanaConfigResponse: UpdateGrafanaConfigResponse,
    ModifyPrometheusInstanceAttributesRequest: ModifyPrometheusInstanceAttributesRequest,
    DescribePrometheusConfigResponse: DescribePrometheusConfigResponse,
    UpdateGrafanaEnvironmentsResponse: UpdateGrafanaEnvironmentsResponse,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    CreatePrometheusGlobalNotificationRequest: CreatePrometheusGlobalNotificationRequest,
    ModifyPrometheusTempResponse: ModifyPrometheusTempResponse,
    DescribeRecordingRulesResponse: DescribeRecordingRulesResponse,
    DeleteRecordingRulesResponse: DeleteRecordingRulesResponse,
    UpdateGrafanaWhiteListRequest: UpdateGrafanaWhiteListRequest,
    UpdatePrometheusAgentStatusRequest: UpdatePrometheusAgentStatusRequest,
    DescribeAlarmNoticeCallbacksRequest: DescribeAlarmNoticeCallbacksRequest,
    CheckIsPrometheusNewUserResponse: CheckIsPrometheusNewUserResponse,
    PutMonitorDataResponse: PutMonitorDataResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    UpdateAlertRuleStateResponse: UpdateAlertRuleStateResponse,
    ModifyPrometheusRecordRuleYamlRequest: ModifyPrometheusRecordRuleYamlRequest,
    DeletePrometheusAlertPolicyResponse: DeletePrometheusAlertPolicyResponse,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    ModifyAlarmPolicyNoticeRequest: ModifyAlarmPolicyNoticeRequest,
    DeleteAlarmPolicyRequest: DeleteAlarmPolicyRequest,
    EventCondition: EventCondition,
    CreateAlertRuleResponse: CreateAlertRuleResponse,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    ModifyAlarmPolicyTasksResponse: ModifyAlarmPolicyTasksResponse,
    MonitorTypeInfo: MonitorTypeInfo,
    DimensionNew: DimensionNew,
    DeleteAlertRulesResponse: DeleteAlertRulesResponse,
    ModifyAlarmPolicyStatusRequest: ModifyAlarmPolicyStatusRequest,
    ConditionsTemp: ConditionsTemp,
    Operator: Operator,
    DescribeServiceDiscoveryRequest: DescribeServiceDiscoveryRequest,
    TaskStepInfo: TaskStepInfo,
    DescribePrometheusTempResponse: DescribePrometheusTempResponse,
    DescribeGrafanaConfigResponse: DescribeGrafanaConfigResponse,
    DescribeAlarmNoticeRequest: DescribeAlarmNoticeRequest,
    PrometheusTemp: PrometheusTemp,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DeletePrometheusTempRequest: DeletePrometheusTempRequest,
    EnableGrafanaInternetResponse: EnableGrafanaInternetResponse,
    PrometheusRuleKV: PrometheusRuleKV,
    BindPrometheusManagedGrafanaResponse: BindPrometheusManagedGrafanaResponse,
    ManagementCommand: ManagementCommand,
    CreatePrometheusAgentRequest: CreatePrometheusAgentRequest,
    DeleteAlarmNoticesResponse: DeleteAlarmNoticesResponse,
    DeletePrometheusTempSyncRequest: DeletePrometheusTempSyncRequest,
    DescribePrometheusGlobalConfigRequest: DescribePrometheusGlobalConfigRequest,
    PrometheusInstanceTenantUsage: PrometheusInstanceTenantUsage,
    DescribePrometheusZonesRequest: DescribePrometheusZonesRequest,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    DeletePrometheusConfigRequest: DeletePrometheusConfigRequest,
    PrometheusAlertPolicyItem: PrometheusAlertPolicyItem,
    ModifyPrometheusAgentExternalLabelsRequest: ModifyPrometheusAgentExternalLabelsRequest,
    AlarmHierarchicalNotice: AlarmHierarchicalNotice,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DescribePrometheusTempRequest: DescribePrometheusTempRequest,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    Condition: Condition,
    DeleteGrafanaInstanceResponse: DeleteGrafanaInstanceResponse,
    PrometheusAgentOverview: PrometheusAgentOverview,
    Filter: Filter,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    UpdateSSOAccountRequest: UpdateSSOAccountRequest,
    CreateSSOAccountResponse: CreateSSOAccountResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    UpdatePrometheusScrapeJobResponse: UpdatePrometheusScrapeJobResponse,
    DescribeAlarmPoliciesRequest: DescribeAlarmPoliciesRequest,
    PrometheusScrapeJob: PrometheusScrapeJob,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    IntegrationConfiguration: IntegrationConfiguration,
    DescribePrometheusAgentsResponse: DescribePrometheusAgentsResponse,
    ModifyPrometheusGlobalNotificationResponse: ModifyPrometheusGlobalNotificationResponse,
    CleanGrafanaInstanceResponse: CleanGrafanaInstanceResponse,
    CreateAlertRuleRequest: CreateAlertRuleRequest,
    ModifyPrometheusRecordRuleYamlResponse: ModifyPrometheusRecordRuleYamlResponse,
    DeletePrometheusScrapeJobsResponse: DeletePrometheusScrapeJobsResponse,
    DescribeAlarmPolicyRequest: DescribeAlarmPolicyRequest,
    UninstallGrafanaDashboardRequest: UninstallGrafanaDashboardRequest,
    UpdateGrafanaIntegrationRequest: UpdateGrafanaIntegrationRequest,
    DeletePrometheusRecordRuleYamlRequest: DeletePrometheusRecordRuleYamlRequest,
    MetricDatum: MetricDatum,
    DescribeStatisticDataRequest: DescribeStatisticDataRequest,
    GrafanaNotificationChannel: GrafanaNotificationChannel,
    SetDefaultAlarmPolicyRequest: SetDefaultAlarmPolicyRequest,
    CLSNotice: CLSNotice,
    LogAlarmReq: LogAlarmReq,
    TerminatePrometheusInstancesResponse: TerminatePrometheusInstancesResponse,
    UpdateSSOAccountResponse: UpdateSSOAccountResponse,
    DescribeGrafanaInstancesResponse: DescribeGrafanaInstancesResponse,
    RunPrometheusInstanceRequest: RunPrometheusInstanceRequest,
    UpdateAlertRuleStateRequest: UpdateAlertRuleStateRequest,
    SetDefaultAlarmPolicyResponse: SetDefaultAlarmPolicyResponse,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
