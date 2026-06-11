/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * Alarm policy description
 * @class
 */
class AlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Monitoring object list
         * @type {Array.<AlarmTargetInfo> || null}
         */
        this.AlarmTargets = null;

        /**
         * Monitoring task running time point
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * Single trigger condition for whether to trigger alarm. Mutually exclusive with the MultiConditions parameter.
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Alarm persistence cycle. An alarm will be triggered only after the corresponding trigger condition is met for the number of times specified by `TriggerCount`. Value range: 1–10.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Repeated alarm interval in minutes. Value range: 0–1440.
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * List of associated alarm notification channel groups. - Search the list of associated alarm notification channel groups via [Query notification channel group list](https://www.tencentcloud.com/document/product/614/56462?from_cn_redirect=1). It is mutually exclusive with MonitorNotice.
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * Enablement status
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * Creation time. Format: YYYY-MM-DD HH:MM:SS
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Latest update time. Format: YYYY-MM-DD HH:MM:SS
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Custom notification template
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * Custom callback template
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * Multidimensional analysis settings
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

        /**
         * Group trigger status. true: enabled, false: disabled (default)
         * @type {boolean || null}
         */
        this.GroupTriggerStatus = null;

        /**
         * Grouping Trigger Conditions.
         * @type {Array.<string> || null}
         */
        this.GroupTriggerCondition = null;

        /**
         * Tag information bound to the alarm policy.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Monitored object type. 0: shared monitored object for execution statements; 1: separate monitored object for each execution statement. 
         * @type {number || null}
         */
        this.MonitorObjectType = null;

        /**
         * Alarm level. 0: Warn; 1: Information; 2: Critical.
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * Additional classification field for alerts.
         * @type {Array.<AlarmClassification> || null}
         */
        this.Classifications = null;

        /**
         * Multiple trigger conditions.
Mutually exclusive conditions.
         * @type {Array.<MultiCondition> || null}
         */
        this.MultiConditions = null;

        /**
         * Tencent Cloud observability platform channel-related information, mutually exclusive with AlarmNoticeIds
         * @type {MonitorNotice || null}
         */
        this.MonitorNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTargetInfo();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }
        this.GroupTriggerStatus = 'GroupTriggerStatus' in params ? params.GroupTriggerStatus : null;
        this.GroupTriggerCondition = 'GroupTriggerCondition' in params ? params.GroupTriggerCondition : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.MonitorObjectType = 'MonitorObjectType' in params ? params.MonitorObjectType : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;

        if (params.Classifications) {
            this.Classifications = new Array();
            for (let z in params.Classifications) {
                let obj = new AlarmClassification();
                obj.deserialize(params.Classifications[z]);
                this.Classifications.push(obj);
            }
        }

        if (params.MultiConditions) {
            this.MultiConditions = new Array();
            for (let z in params.MultiConditions) {
                let obj = new MultiCondition();
                obj.deserialize(params.MultiConditions[z]);
                this.MultiConditions.push(obj);
            }
        }

        if (params.MonitorNotice) {
            let obj = new MonitorNotice();
            obj.deserialize(params.MonitorNotice)
            this.MonitorNotice = obj;
        }

    }
}

/**
 * DescribeLogHistogram request structure.
 * @class
 */
class DescribeLogHistogramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be queried, which is a Unix timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Retrieval analysis statement.
The statement consists of [retrieval condition] | [SQL statement]. When there is no need to perform statistical analysis on logs, the pipe character | and SQL statement can be omitted.
Use * or an empty string to search all logs.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Log topic ID to query
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Interval in milliseconds. Condition: (To-From) / Interval <= 200
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Search syntax. Valid values:
`0` (default): Lucene; `1`: CQL
For more information, see <a href="https://intl.cloud.tencent.com/document/product/614/47044?from_cn_redirect=1#RetrievesConditionalRules" target="_blank">Search Syntax</a>.
         * @type {number || null}
         */
        this.SyntaxRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;

    }
}

/**
 * Task data filtering statistical information for delivery
 * @class
 */
class FilterStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of raw logs</p>
         * @type {number || null}
         */
        this.OriginalCount = null;

        /**
         * <p>Number of filtered logs</p>
         * @type {number || null}
         */
        this.FilteredCount = null;

        /**
         * <p>Filtered results</p>
         * @type {Array.<string> || null}
         */
        this.FilteredResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCount = 'OriginalCount' in params ? params.OriginalCount : null;
        this.FilteredCount = 'FilteredCount' in params ? params.FilteredCount : null;
        this.FilteredResult = 'FilteredResult' in params ? params.FilteredResult : null;

    }
}

/**
 * DescribeNetworkApplicationDetail request structure.
 * @class
 */
class DescribeNetworkApplicationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Web application id</p>
         * @type {string || null}
         */
        this.NetworkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;

    }
}

/**
 * DeleteShipper request structure.
 * @class
 */
class DeleteShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping Rule Id.
-Obtain the ShipperId by [obtaining the shipping task list](https://www.tencentcloud.com/document/product/614/58745?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ShipperId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;

    }
}

/**
 * DeleteConsole response structure.
 * @class
 */
class DeleteConsoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Key-value index auto-configuration enables automatic addition of fields from logs into the key-value index, including subsequently added fields in the logs.
 * @class
 */
class DynamicIndex extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic configuration switch of the key-value index.
         * @type {boolean || null}
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateRebuildIndexTask response structure.
 * @class
 */
class CreateRebuildIndexTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reindexing task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSearchView request structure.
 * @class
 */
class CreateSearchViewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>log set id</p><p>Logset to which the query view belongs. It is only used to manage the query view. Topics contained in the query view can be irrelevant to this logset.</p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Region of the logset</p><p>Parameter format: ap-guangzhou</p>
         * @type {string || null}
         */
        this.LogsetRegion = null;

        /**
         * <p>View name</p><p>Input parameter limit: Supports up to 255 characters. Cannot contain "|" character.</p>
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * <p>View type</p><p>Enumeration value:</p><ul><li>log: Log topic</li><li>metric: Metric topic</li></ul><p>The topic type in the field of Topics should match the ViewType.</p>
         * @type {string || null}
         */
        this.ViewType = null;

        /**
         * <p>The query view contains topics, with a maximum of 10 topics.</p><p>The topic information configured in the Topics field should match the ViewType.</p>
         * @type {Array.<ViewSearchTopic> || null}
         */
        this.Topics = null;

        /**
         * <p>Custom query view id prefix</p><p>Parameter format: <code>^[a-z0-9][a-z0-9_-]{1,61}[a-z0-9]$</code></p><p>ViewId format of successfully created query view is ${ViewIdPrefix}-view</p>
         * @type {string || null}
         */
        this.ViewIdPrefix = null;

        /**
         * <p>Description</p>
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetRegion = 'LogsetRegion' in params ? params.LogsetRegion : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ViewType = 'ViewType' in params ? params.ViewType : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new ViewSearchTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.ViewIdPrefix = 'ViewIdPrefix' in params ? params.ViewIdPrefix : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CheckFunction request structure.
 * @class
 */
class CheckFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Processing statement. When FuncType is 2, EtlContent must use [log_auto_output](https://www.tencentcloud.com/document/product/614/70733?from_cn_redirect=1#b3c58797-4825-4807-bef4-68106e25024f). 

Other reference documents

-[Create processing task](https://www.tencentcloud.com/document/product/614/63940?from_cn_redirect=1) 
-[Function overview](https://www.tencentcloud.com/document/product/614/70395?from_cn_redirect=1)
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * Target topic_id and alias of the processing task. This parameter is required when FuncType is 1.
Obtain the target log topic ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * Type of the target topic for data processing. Valid values: 1 (fixed Topic) and 2 (dynamic creation)
         * @type {number || null}
         */
        this.FuncType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.FuncType = 'FuncType' in params ? params.FuncType : null;

    }
}

/**
 * ModifyNetworkApplication response structure.
 * @class
 */
class ModifyNetworkApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Splunk delivery task - Configure network information related to the target
 * @class
 */
class NetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network address.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Authentication token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Network type; 1: Private network; 2: Public network
         * @type {number || null}
         */
        this.NetType = null;

        /**
         * Associated network; If the network type is private network, this field is required.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Network service type. If the network type is private network, this field is required.
-0: Cloud cvm
-3: Cloud Direct Connect Gateway
-CCN
-1025: Cloud clb
         * @type {number || null}
         */
        this.VirtualGatewayType = null;

        /**
         * Authentication mechanism, whether to use SSL, default non-use
         * @type {boolean || null}
         */
        this.IsSSL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VirtualGatewayType = 'VirtualGatewayType' in params ? params.VirtualGatewayType : null;
        this.IsSSL = 'IsSSL' in params ? params.IsSSL : null;

    }
}

/**
 * CreateLogset request structure.
 * @class
 */
class CreateLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log set name.

-Supports a maximum of 255 characters. The `|` character is not supported.
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Tag description list. Up to 10 tag key-value pairs are supported and must be unique.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Logset ID, format: custom part-User APPID. Automatically generate ID if left empty.

-The custom part only supports lowercase letters, digits, and -, cannot start or end with -, and has a length of 3 to 40 characters.
-The end requires the use of - to concatenate the User APPID, which can be queried on the https://console.cloud.tencent.com/developer page.
-If you specify this field, ensure uniqueness across all regions.
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
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * CreateScheduledSql response structure.
 * @class
 */
class CreateScheduledSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pre-aggregation YAML task details.
 * @class
 */
class RecordingRuleYamlTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * YAML configuration file ID.
         * @type {string || null}
         */
        this.YamlId = null;

        /**
         * Source Log Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic ID for the write description.
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * Creation Time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task Update Time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Task status, 1: running 2: stopped 3: error - source log topic not found 4: error - destination topic not found

5: Access permission issue 6: Internal failure 7: Other faults
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task status: 1 Enabled, 2 Disabled
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Schedule Start Time
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * Scheduling Interval (Minutes)
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * Execution Delay (Seconds)
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * YAML configuration file name.
         * @type {string || null}
         */
        this.YamlConfigName = null;

        /**
         * YAML configuration file content.
         * @type {string || null}
         */
        this.YamlContent = null;

        /**
         * Number of subtasks of the YAML file.
         * @type {number || null}
         */
        this.SubTaskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.YamlId = 'YamlId' in params ? params.YamlId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.YamlConfigName = 'YamlConfigName' in params ? params.YamlConfigName : null;
        this.YamlContent = 'YamlContent' in params ? params.YamlContent : null;
        this.SubTaskCount = 'SubTaskCount' in params ? params.SubTaskCount : null;

    }
}

/**
 * SearchLog response structure.
 * @class
 */
class SearchLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Pass through the Context value returned by this API to obtain more logs later. The expiration time is 1 hour.<br>Note:</p><ul><li>Applicable only for single log topic retrieval. To retrieve multiple log topics, use the Context in Topics.</li></ul>
         * @type {string || null}
         */
        this.Context = null;

        /**
         * <p>Whether all logs meeting the retrieval criteria have been returned. If not, use Context parameter to retrieve more logs.<br>Note: This is only valid when the search and analysis statement (Query) does not contain SQL.</p>
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * <p>Whether the returned data is the SQL analysis result</p>
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * <p>Raw logs matching the retrieval criteria</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * <p>Column names of log statistics analysis results<br>This parameter is valid only when UseNewAnalysis is false</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * <p>Statistical analysis results of logs<br>This parameter is valid only when UseNewAnalysis is false</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * <p>Log statistics and analysis results<br>This parameter is valid only when UseNewAnalysis is true</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * <p>Column attribute of log statistics and analysis results<br>This parameter is valid only when UseNewAnalysis is true</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * <p>Sampling rate used in this analysis</p>
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * <p>When multiple log topics are used for retrieval, basic information of each log topic, such as error message.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SearchLogTopics || null}
         */
        this.Topics = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;

        if (params.Topics) {
            let obj = new SearchLogTopics();
            obj.deserialize(params.Topics)
            this.Topics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMetricSubscribe response structure.
 * @class
 */
class DeleteMetricSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribePartitions request structure.
 * @class
 */
class DescribePartitionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * CheckFunction response structure.
 * @class
 */
class CheckFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Failure error code
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Failure error message
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarm response structure.
 * @class
 */
class ModifyAlarmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * PreviewKafkaRecharge request structure.
 * @class
 */
class PreviewKafkaRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Preview type. 1: preview of source data; 2: preview of exported results.
         * @type {number || null}
         */
        this.PreviewType = null;

        /**
         * Import Kafka type. 0: Tencent Cloud CKafka; 1: user-built kafka.
         * @type {number || null}
         */
        this.KafkaType = null;

        /**
         * List of Kafka-related topics to be imported by the user, topics separated by commas.
Supports up to 100.
         * @type {string || null}
         */
        this.UserKafkaTopics = null;

        /**
         * Import data location. -2: earliest; -1: latest.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Tencent Cloud CKafka instance ID. The parameter KafkaInstance is valid and required when KafkaType is 0.
-Get the instance id through [Get Instance List](https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
         * @type {string || null}
         */
        this.KafkaInstance = null;

        /**
         * Service address.
When KafkaType is 1, ServerAddr is required.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Whether ServerAddr is a secure connection.
Valid when KafkaType is 1.
         * @type {boolean || null}
         */
        this.IsEncryptionAddr = null;

        /**
         * Encrypted Access Protocol.
When KafkaType is 1 and IsEncryptionAddr is true, Protocol is required.
         * @type {KafkaProtocolInfo || null}
         */
        this.Protocol = null;

        /**
         * User Kafka consumer group.

-A consumption group is a scalable and fault-tolerant consumer mechanism provided by Kafka. Multiple consumers exist in a consumption group, and all consumers in the group consume subscribed data of messages in the Topic. A consumer can consume multiple partitions simultaneously, but one Partition can only be consumed by a single consumer in the group.
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * Log import rule
         * @type {LogRechargeRuleInfo || null}
         */
        this.LogRechargeRule = null;

        /**
         * User kafka extended information
         * @type {UserKafkaMeta || null}
         */
        this.UserKafkaMeta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreviewType = 'PreviewType' in params ? params.PreviewType : null;
        this.KafkaType = 'KafkaType' in params ? params.KafkaType : null;
        this.UserKafkaTopics = 'UserKafkaTopics' in params ? params.UserKafkaTopics : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.KafkaInstance = 'KafkaInstance' in params ? params.KafkaInstance : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.IsEncryptionAddr = 'IsEncryptionAddr' in params ? params.IsEncryptionAddr : null;

        if (params.Protocol) {
            let obj = new KafkaProtocolInfo();
            obj.deserialize(params.Protocol)
            this.Protocol = obj;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.LogRechargeRule) {
            let obj = new LogRechargeRuleInfo();
            obj.deserialize(params.LogRechargeRule)
            this.LogRechargeRule = obj;
        }

        if (params.UserKafkaMeta) {
            let obj = new UserKafkaMeta();
            obj.deserialize(params.UserKafkaMeta)
            this.UserKafkaMeta = obj;
        }

    }
}

/**
 * Shipping configuration input parameter.
 * @class
 */
class DeliverConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region information.

Example
ap-guangzhou: Guangzhou region.
ap-nanjing Nanjing region.

For detailed information, see [regions and access endpoints](https://www.tencentcloud.com/document/product/614/18940?from_cn_redirect=1) on the official website.


         * @type {string || null}
         */
        this.Region = null;

        /**
         * Log topic ID. Obtain the log topic ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Data delivery scope.

All logs, including daily logs generated by periodic execution of alarm policies and logs generated by policy changes. Default value.

1: Alarm triggering only and restore log
         * @type {number || null}
         */
        this.Scope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Scope = 'Scope' in params ? params.Scope : null;

    }
}

/**
 * DescribeClusterBaseMetricConfigs request structure.
 * @class
 */
class DescribeClusterBaseMetricConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * <li> Filter the topicId by [metric topic id]. Type: String. Required: No</li>
<li>Each request can have up to 10 Filters. The total upper limit of ALL Filter.Values is 100.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
 * DeleteMetricSubscribe request structure.
 * @class
 */
class DeleteMetricSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric collection task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Log topic ID of a metric collection task configuration.
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Advanced configuration for CKafka shipping.
 * @class
 */
class AdvancedConsumerConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kafka partition hash status. Default false.

-true: Enable sending messages with equal field Hash values to the same Kafka partition.
-false: Disable sending messages with equivalent field Hash values to the same kafka partition.
         * @type {boolean || null}
         */
        this.PartitionHashStatus = null;

        /**
         * Field list to calculate hash. Supports a maximum of 5 fields.
         * @type {Array.<string> || null}
         */
        this.PartitionFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionHashStatus = 'PartitionHashStatus' in params ? params.PartitionHashStatus : null;
        this.PartitionFields = 'PartitionFields' in params ? params.PartitionFields : null;

    }
}

/**
 * Resource information for ScheduledSql
 * @class
 */
class ScheduledSqlResouceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Regional information of the topic. Cross-region selection is not supported currently. For supported regions, see the region list (https://www.tencentcloud.com/document/api/614/56474?from_cn_redirect=1#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8) document.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Topic type: 0 for log topic, and 1 for metric topic
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * Metric name. When BizType is 1, MetricName needs to be specified.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric NameWhen BizType is 1, prioritize using the MetricNames field. Multiple metrics can only be filled in the MetricNames field, while it's recommended to fill a single metric in the MetricName field.
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * Metric dimension. Not accept time type.
         * @type {Array.<string> || null}
         */
        this.MetricLabels = null;

        /**
         * Metric timestamp. The default value is the left time point of the SQL query time range, but you can also specify other fields (The type is uinx time, TimeStamp, and precision millisecond) as the metric timestamp.
         * @type {string || null}
         */
        this.CustomTime = null;

        /**
         * In addition to MetricLabels, this parameter can be used to supplement static dimensions for the metric.
Dimension names must start with a letter or underscore, followed by letters, digits, or underscores, with a length less than or equal to 1024 bytes.
         * @type {Array.<MetricLabel> || null}
         */
        this.CustomMetricLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.MetricLabels = 'MetricLabels' in params ? params.MetricLabels : null;
        this.CustomTime = 'CustomTime' in params ? params.CustomTime : null;

        if (params.CustomMetricLabels) {
            this.CustomMetricLabels = new Array();
            for (let z in params.CustomMetricLabels) {
                let obj = new MetricLabel();
                obj.deserialize(params.CustomMetricLabels[z]);
                this.CustomMetricLabels.push(obj);
            }
        }

    }
}

/**
 * Authentication-free conditional information.
 * @class
 */
class ConditionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Condition attribute. Currently, only VpcID is supported.
         * @type {string || null}
         */
        this.Attributes = null;

        /**
         * Conditional rule. 1: equal to; 2: not equal to.
         * @type {number || null}
         */
        this.Rule = null;

        /**
         * Value corresponding to the condition attribute.
         * @type {string || null}
         */
        this.ConditionValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Attributes = 'Attributes' in params ? params.Attributes : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.ConditionValue = 'ConditionValue' in params ? params.ConditionValue : null;

    }
}

/**
 * es cluster configuration
 * @class
 */
class EsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES Types. 1: Cloud ES, 2: Self-build ES.
         * @type {number || null}
         */
        this.EsType = null;

        /**
         * Access method 1: private network, 2: public network. Self-built ES required.
         * @type {number || null}
         */
        this.AccessMode = null;

        /**
         * Instance id. Required for es instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Access address. Self-built ES required.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Access port. Self-built ES required.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Network. Required when accessing self-built ES via private network.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Network service type. Required when accessing a self-built ES via private network.
CLB:1025 Cloud Virtual Machine (CVM):0
         * @type {number || null}
         */
        this.VirtualGatewayType = null;

        /**
         * Password.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EsType = 'EsType' in params ? params.EsType : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VirtualGatewayType = 'VirtualGatewayType' in params ? params.VirtualGatewayType : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteMachineGroup response structure.
 * @class
 */
class DeleteMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Description of the tag pair bound to a resource instance when it is created
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
 * ScheduledSql task details
 * @class
 */
class ScheduledSqlTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ScheduledSql task id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * ScheduledSql task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source Log Topic ID
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * Source Log Topic Name
         * @type {string || null}
         */
        this.SrcTopicName = null;

        /**
         * Scheduled SQL analysis of target topic
         * @type {ScheduledSqlResouceInfo || null}
         */
        this.DstResource = null;

        /**
         * Task creation time. Format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task update time. Format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Task status: 1: Running 2: Stop 3: Exception - Source log topic not found 4: Exception - target topic not found5: Access permission issue 6: Internal failure 7: Other faults
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task status: 1 Enabled, 2 Disabled
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Queries statements
         * @type {string || null}
         */
        this.ScheduledSqlContent = null;

        /**
         * Schedule start time. Format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.ProcessStartTime = null;

        /**
         * Schedule Type: 1 Continuous Running 2 Specified Time Range
         * @type {number || null}
         */
        this.ProcessType = null;

        /**
         * Schedule End Time, format: yyyy-MM-dd HH:mm:ss, required when process_type=2
         * @type {string || null}
         */
        this.ProcessEndTime = null;

        /**
         * Scheduling cycle (minutes), 1-1440 minutes
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * Query Time Window. @m-15m, @m, meaning the last 15 minutes
         * @type {string || null}
         */
        this.ProcessTimeWindow = null;

        /**
         * Execution delay (seconds), 0-120 seconds, default 60
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * Regional information of the source topicId. Supported regions are listed in the region list document (https://www.tencentcloud.com/document/api/614/56474?from_cn_redirect=1#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8).
         * @type {string || null}
         */
        this.SrcTopicRegion = null;

        /**
         * Syntax rules. 0: Lucene syntax; 1: CQL syntax.
         * @type {number || null}
         */
        this.SyntaxRule = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Full-text search tag. 1: Off, 2: On.
         * @type {number || null}
         */
        this.FullQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.SrcTopicName = 'SrcTopicName' in params ? params.SrcTopicName : null;

        if (params.DstResource) {
            let obj = new ScheduledSqlResouceInfo();
            obj.deserialize(params.DstResource)
            this.DstResource = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ScheduledSqlContent = 'ScheduledSqlContent' in params ? params.ScheduledSqlContent : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessType = 'ProcessType' in params ? params.ProcessType : null;
        this.ProcessEndTime = 'ProcessEndTime' in params ? params.ProcessEndTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessTimeWindow = 'ProcessTimeWindow' in params ? params.ProcessTimeWindow : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.SrcTopicRegion = 'SrcTopicRegion' in params ? params.SrcTopicRegion : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.FullQuery = 'FullQuery' in params ? params.FullQuery : null;

    }
}

/**
 * CreateDlcDeliver response structure.
 * @class
 */
class CreateDlcDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Configuration id</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConsumerGroup request structure.
 * @class
 */
class CreateConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the created consumer group
Restriction: Alphanumeric underscore, numbers not allowed at the beginning, length limited to 256.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumer heartbeat timeout (seconds).
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * List of log topics included in the created consumer group.
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * Logset ID (the logset to which a log topic belongs).
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
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * Label structure.
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key of the tag. A valid tag key has two parts: an optional prefix and a name, separated by a slash (/). The name part is necessary and must be no more than 63 characters, starting and ending with alphanumeric characters ([a-z0-9A-Z]), with hyphens (-), underscores (_), dots (.), and alphanumerics in the middle. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), with a total length not exceeding 253 characters, followed by a slash (/).

-Format of prefix `[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*`
-Format of `name`: `([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]`
-key must be unique
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The comparison operator between tag key values. Different business scenarios support different comparison operators. See the API business description for supported ones.
such as `in`, `notin`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * Tag value.
-Supports up to 63 characters.
-Format: `([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]`
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifyMachineGroup response structure.
 * @class
 */
class ModifyMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Index rule. At least one of the `FullText`, `KeyValue`, and `Tag` parameters must be valid.
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full-text index configuration. If empty, full-text indexing is not enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FullTextInfo || null}
         */
        this.FullText = null;

        /**
         * Key-value index configuration. If empty, key-value indexing is not enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RuleKeyValueInfo || null}
         */
        this.KeyValue = null;

        /**
         * Metadata field index configuration. If empty, metadata field indexing is not enabled.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RuleTagInfo || null}
         */
        this.Tag = null;

        /**
         * Key-value index automatic configuration. If empty, the feature is not enabled.Once enabled, fields within logs are automatically added to the key-value index, including fields added to logs subsequently.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DynamicIndex || null}
         */
        this.DynamicIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FullText) {
            let obj = new FullTextInfo();
            obj.deserialize(params.FullText)
            this.FullText = obj;
        }

        if (params.KeyValue) {
            let obj = new RuleKeyValueInfo();
            obj.deserialize(params.KeyValue)
            this.KeyValue = obj;
        }

        if (params.Tag) {
            let obj = new RuleTagInfo();
            obj.deserialize(params.Tag)
            this.Tag = obj;
        }

        if (params.DynamicIndex) {
            let obj = new DynamicIndex();
            obj.deserialize(params.DynamicIndex)
            this.DynamicIndex = obj;
        }

    }
}

/**
 * DescribeConsumerPreview request structure.
 * @class
 */
class DescribeConsumerPreviewRequest extends  AbstractModel {
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
 * CreateRecordingRuleTask response structure.
 * @class
 */
class CreateRecordingRuleTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDashboard response structure.
 * @class
 */
class DeleteDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * OpenClsService request structure.
 * @class
 */
class OpenClsServiceRequest extends  AbstractModel {
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
 * `LogItem` array
 * @class
 */
class LogItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key-Value pair returned in analysis result
         * @type {Array.<LogItem> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new LogItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeRecordingRuleYamlTask response structure.
 * @class
 */
class DescribeRecordingRuleYamlTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task list information of RecordingRule</p>
         * @type {Array.<RecordingRuleYamlTaskInfo> || null}
         */
        this.RecordingRuleYamlTaskInfos = null;

        /**
         * <p>Total number of tasks</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordingRuleYamlTaskInfos) {
            this.RecordingRuleYamlTaskInfos = new Array();
            for (let z in params.RecordingRuleYamlTaskInfos) {
                let obj = new RecordingRuleYamlTaskInfo();
                obj.deserialize(params.RecordingRuleYamlTaskInfos[z]);
                this.RecordingRuleYamlTaskInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Key-Value index configuration
 * @class
 */
class RuleKeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Key-value pair information of the index to be created
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * DeleteExport response structure.
 * @class
 */
class DeleteExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeDashboardSubscribes request structure.
 * @class
 */
class DescribeDashboardSubscribesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * dashboardId: Filter by [dashboard id]. Type: String. Required: No.

-Dashboard id. Obtain DashboardId through the [Get Dashboard](https://www.tencentcloud.com/document/api/614/95636?from_cn_redirect=1) api.
-Input parameter example: dashboard-522a5609-1f41-4b11-8086-5afd1d7574f5

Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * Log topic partition information
 * @class
 */
class PartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Partition status. Valid values: `readwrite`, `readonly`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Partition hash start key
         * @type {string || null}
         */
        this.InclusiveBeginKey = null;

        /**
         * Partition hash end key
         * @type {string || null}
         */
        this.ExclusiveEndKey = null;

        /**
         * Partition Creation Time
Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Time to stop writing data to the read-only partition
Time format: yyyy-MM-dd HH:mm:ss
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastWriteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InclusiveBeginKey = 'InclusiveBeginKey' in params ? params.InclusiveBeginKey : null;
        this.ExclusiveEndKey = 'ExclusiveEndKey' in params ? params.ExclusiveEndKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastWriteTime = 'LastWriteTime' in params ? params.LastWriteTime : null;

    }
}

/**
 * CreateNoticeContent response structure.
 * @class
 */
class CreateNoticeContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content configuration ID.
         * @type {string || null}
         */
        this.NoticeContentId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenClsService response structure.
 * @class
 */
class OpenClsServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyAlarm request structure.
 * @class
 */
class ModifyAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Alert policy ID. - Search the alert policy ID by <a href="https://www.tencentcloud.com/document/product/614/56461?from_cn_redirect=1">obtaining the alarm policy list</a>.</p>
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * <p>Alarm policy name. Supports a maximum of 255 bytes. The '|' character is unsupported.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Monitoring task execution time point.</p>
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * <p>Trigger condition for sending alarm information.</p><p>Note:</p><ul><li>Condition and AlarmLevel are one set of configurations, and MultiConditions is another set of configurations. The two sets are mutually exclusive.</li></ul>
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * <p>Alarm level.</p><p>0: Warning (Warn); 1: Reminder (Info); 2: Emergency (Critical)</p><p>Note:</p><ul><li>Condition and AlarmLevel are one set of configurations, and MultiConditions are another set of configurations. The two sets are mutually exclusive.</li></ul>
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * <p>Multiple trigger conditions.</p><p>Note:</p><ul><li>Condition and AlarmLevel are one set of configurations, and MultiConditions are another set of configurations. The two sets of configurations are mutually exclusive.</li></ul>
         * @type {Array.<MultiCondition> || null}
         */
        this.MultiConditions = null;

        /**
         * <p>Duration cycle. An alarm is triggered after the trigger conditions are constantly met for TriggerCount cycles. The minimum value is 1, and the maximum value is 2000.</p>
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * <p>Alarm repeat cycle. In minutes. Value ranges from 0 to 1440.</p>
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * <p>Monitoring object list.</p>
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * <p>Whether to enable alarm policy.</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>This parameter has been deprecated, please use the Status parameter to control whether to enable the alarm policy.</p>
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * <p>User-defined alarm content</p>
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * <p>user-defined callback</p>
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * <p>Multi-dimensional analysis</p>
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

        /**
         * <p>Group trigger status. true: enabled, false: disabled (default)</p>
         * @type {boolean || null}
         */
        this.GroupTriggerStatus = null;

        /**
         * <p>Group trigger conditions.</p>
         * @type {Array.<string> || null}
         */
        this.GroupTriggerCondition = null;

        /**
         * <p>Tag description list, by specifying this parameter, you can simultaneously bind a tag to the corresponding alarm policy. Up to 10 tag key-value pairs are supported, and no duplicate key-value pairs are allowed.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Monitored object type. 0: Common monitoring object for execution statements; 1: Each execution statement selects its own monitored object.<br>When the value is 1, the number of elements in AlarmTargets cannot exceed 10. The Number in AlarmTargets must be consecutive positive integers starting from 1 and must be unique.</p>
         * @type {number || null}
         */
        this.MonitorObjectType = null;

        /**
         * <p>Alert additional classification information list.<br>Number of Classifications Elements cannot exceed 20.<br>The Key of Classifications elements cannot be empty, must be unique, length cannot exceed 50 characters, and complies with the regular expression <code>^[a-z]([a-z0-9_]{0,49})$</code>.<br>Value of Classifications elements cannot exceed 200 characters.</p>
         * @type {Array.<AlarmClassification> || null}
         */
        this.Classifications = null;

        /**
         * <p>List of associated CLS alarm notification channel groups. - Search the list of associated alarm notification channel groups via <a href="https://www.tencentcloud.com/document/product/614/56462?from_cn_redirect=1">Query notification channel group list</a>. It is mutually exclusive with MonitorNotice.</p>
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * <p>The associated observability platform notification template is mutually exclusive with the AlarmNoticeIds parameter and cannot include both.</p>
         * @type {MonitorNotice || null}
         */
        this.MonitorNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;

        if (params.MultiConditions) {
            this.MultiConditions = new Array();
            for (let z in params.MultiConditions) {
                let obj = new MultiCondition();
                obj.deserialize(params.MultiConditions[z]);
                this.MultiConditions.push(obj);
            }
        }
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }
        this.GroupTriggerStatus = 'GroupTriggerStatus' in params ? params.GroupTriggerStatus : null;
        this.GroupTriggerCondition = 'GroupTriggerCondition' in params ? params.GroupTriggerCondition : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.MonitorObjectType = 'MonitorObjectType' in params ? params.MonitorObjectType : null;

        if (params.Classifications) {
            this.Classifications = new Array();
            for (let z in params.Classifications) {
                let obj = new AlarmClassification();
                obj.deserialize(params.Classifications[z]);
                this.Classifications.push(obj);
            }
        }
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;

        if (params.MonitorNotice) {
            let obj = new MonitorNotice();
            obj.deserialize(params.MonitorNotice)
            this.MonitorNotice = obj;
        }

    }
}

/**
 * RetryShipperTask response structure.
 * @class
 */
class RetryShipperTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * SplitPartition request structure.
 * @class
 */
class SplitPartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Partition Id to split
-Get the Id of the partition to be split by [getting the partition list](https://www.tencentcloud.com/document/product/614/56470?from_cn_redirect=1).
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Partition split hash key position, which is meaningful only if `Number=2` is set
         * @type {string || null}
         */
        this.SplitKey = null;

        /**
         * Number of partitions to split into, which is optional. Default value: 2
         * @type {number || null}
         */
        this.Number = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.SplitKey = 'SplitKey' in params ? params.SplitKey : null;
        this.Number = 'Number' in params ? params.Number : null;

    }
}

/**
 * CreateAlarmShield request structure.
 * @class
 */
class CreateAlarmShieldRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel group id. Search the notification channel group list (https://www.tencentcloud.com/document/product/614/56462?from_cn_redirect=1) to get the notification channel group id.
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Block rule start time (second-level timestamp).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Block rule end time (second-level timestamp). The end time must be greater than the current time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Block type. 1: Block all notifications, 2: Block matching rules notifications according to the Rule parameter.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Blocking reason.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Blocking rules, required when Type is 2. For detailed information on filling in rules, see [Product Documentation](https://intl.cloud.tencent.com/document/product/614/103178?from_cn_redirect=1#rule).
         * @type {string || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Rule = 'Rule' in params ? params.Rule : null;

    }
}

/**
 * Machine group information
 * @class
 */
class MachineGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Machine group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Machine group type
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Creation time.
Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * List of tags bound to machine group
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether machine group auto-update is enabled
         * @type {string || null}
         */
        this.AutoUpdate = null;

        /**
         * Start time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * End time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether service logs are enabled to record logs generated by the LogListener service itself. Once enabled, it will create an internal log set cls_service_logging, and log topics including loglistener_status, loglistener_alarm, and loglistener_business, without incurring charges.
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * Regular cleanup time for offline machines in the machine group, in days, default setting 30 days.
         * @type {number || null}
         */
        this.DelayCleanupTime = null;

        /**
         * Metadata information list of a machine group
         * @type {Array.<MetaTagInfo> || null}
         */
        this.MetaTags = null;

        /**
         * Operating system type, 0: Linux, 1: Windows
         * @type {number || null}
         */
        this.OSType = null;

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

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.DelayCleanupTime = 'DelayCleanupTime' in params ? params.DelayCleanupTime : null;

        if (params.MetaTags) {
            this.MetaTags = new Array();
            for (let z in params.MetaTags) {
                let obj = new MetaTagInfo();
                obj.deserialize(params.MetaTags[z]);
                this.MetaTags.push(obj);
            }
        }
        this.OSType = 'OSType' in params ? params.OSType : null;

    }
}

/**
 * DeleteAlarmShield response structure.
 * @class
 */
class DeleteAlarmShieldResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Log topic extension information.
 * @class
 */
class TopicExtendInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic authentication-free configuration information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AnonymousInfo || null}
         */
        this.AnonymousAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AnonymousAccess) {
            let obj = new AnonymousInfo();
            obj.deserialize(params.AnonymousAccess)
            this.AnonymousAccess = obj;
        }

    }
}

/**
 * CreateIndex request structure.
 * @class
 */
class CreateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Index rule
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * Whether to take effect. Default value: true
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Whether full-text indexing includes internal fields (`__FILENAME__`, `__HOSTNAME__`, and `__SOURCE__`). Default value: `false`. Recommended value: `true`.
* `false`: Full-text indexing does not include internal fields.
* `true`: Full-text indexing includes internal fields.
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * Whether full-text indexing includes metadata fields (which are prefixed with `__TAG__`). Default value: `0`. Recommended value: `1`.
* `0`: Full-text indexing includes only the metadata fields with key-value indexing enabled.
* `1`: Full-text indexing includes all metadata fields.
* `2`: Full-text indexing does not include metadata fields.
         * @type {number || null}
         */
        this.MetadataFlag = null;

        /**
         * Custom log parsing exception storage fields
         * @type {string || null}
         */
        this.CoverageField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;
        this.CoverageField = 'CoverageField' in params ? params.CoverageField : null;

    }
}

/**
 * CreateConsole response structure.
 * @class
 */
class CreateConsoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console Id</p>
         * @type {string || null}
         */
        this.ConsoleId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleId = 'ConsoleId' in params ? params.ConsoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopic request structure.
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Logset ID</p><ul><li>Obtain the logset Id through <a href="https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1">Get Logset List</a>.</li></ul>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Topic name<br>Name limitation</p><ul><li>Cannot be an empty string</li><li>Cannot contain character '|'</li><li>Cannot use the following names ["cls_service_log","loglistener_status","loglistener_alarm","loglistener_business","cls_service_metric"]</li></ul>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Topic partition count. Default creation is 1 partition. Supports a maximum of 10 partitions.</p>
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * <p>Tag description list, by specifying this parameter, you can simultaneously bind a tag to the corresponding topic. Up to 10 tag key-value pairs are supported, and the same resource can only be bound to the same tag key.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Whether to enable auto-split, true by default</p>
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * <p>When auto-split is enabled, the maximum number of partitions allowed for each topic is 50 by default.</p>
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * <p>Log topic storage type. Available values: hot (standard storage), cold (infrequent storage). Default hot. This configuration is not supported for metric topics.</p>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Storage time, in days.</p><ul><li>Log topic: When logs are collected to standard storage, the supported range is 1 to 3600 days. A value of 3640 indicates permanent retention.</li><li>Log topic: When logs are collected to infrequently accessed storage, the supported range is 7 to 3600 days. A value of 3640 indicates permanent retention.</li><li>Metric topic: The supported range is 1 to 3600 days. A value of 3640 indicates permanent retention.</li></ul>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Topic description</p>
         * @type {string || null}
         */
        this.Describes = null;

        /**
         * <p>0: Log topic disables log settlement.<br>Non-0: Number of days for standard storage after log settlement is enabled in the log topic. HotPeriod needs to be greater than or equal to 7 and less than Period.<br>Effective only when StorageType is hot. This configuration is not supported for metric topics.</p>
         * @type {number || null}
         */
        this.HotPeriod = null;

        /**
         * <p>Encryption-related parameters. Encrypted regions and allowlisted users can pass this parameter, which cannot be passed in other scenarios.<br>0 or not passed: no encryption<br>1: kms-cls cloud service key encryption</p><p>Supported regions: ap-beijing, ap-guangzhou, ap-shanghai, ap-singapore, ap-bangkok, ap-jakarta, eu-frankfurt, ap-seoul, ap-tokyo</p>
         * @type {number || null}
         */
        this.Encryption = null;

        /**
         * <p>Topic type</p><ul><li>0: Log topic, default value</li><li>1: Metric topic</li></ul>
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * <p>Custom topic ID, format: custom part-User APPID. If this parameter is left empty, ID will be automatically generated.</p><ul><li>The custom part only supports lowercase letters, digits, and -, cannot start or end with -, and must be 3 to 40 characters in length.</li><li>The trailing part requires the use of - to concatenate User APPID. APPID can be queried on the page https://console.cloud.tencent.com/developer.</li><li>If this field is specified, ensure uniqueness across all regions.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Free authentication switch. False: turned off; true: turned on. Default false.<br>When enabled, anonymous access to the log topic will be supported for designated operations. For details, see <a href="https://www.tencentcloud.com/document/product/614/41035?from_cn_redirect=1">log topic</a>. This configuration is not supported for metric topics.</p>
         * @type {boolean || null}
         */
        this.IsWebTracking = null;

        /**
         * <p>Topic extended information</p>
         * @type {TopicExtendInfo || null}
         */
        this.Extends = null;

        /**
         * <p>Enable logging of public network source IP and server receipt time</p>
         * @type {boolean || null}
         */
        this.IsSourceFrom = null;

        /**
         * <p>Billing mode</p><p>Enumeration value:</p><ul><li>0: Function billing by usage</li><li>1: Raw log size billing (currently only supported for some customers)</li></ul><p>Default value: 0</p>
         * @type {number || null}
         */
        this.BillingMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Describes = 'Describes' in params ? params.Describes : null;
        this.HotPeriod = 'HotPeriod' in params ? params.HotPeriod : null;
        this.Encryption = 'Encryption' in params ? params.Encryption : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.IsWebTracking = 'IsWebTracking' in params ? params.IsWebTracking : null;

        if (params.Extends) {
            let obj = new TopicExtendInfo();
            obj.deserialize(params.Extends)
            this.Extends = obj;
        }
        this.IsSourceFrom = 'IsSourceFrom' in params ? params.IsSourceFrom : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;

    }
}

/**
 * ModifyDataTransform request structure.
 * @class
 */
class ModifyDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data processing task ID
-Get the data processing task Id by [searching data processing task list basic information](https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Processing task name
-Get the name of a data processing task by [searching data processing task list basic information](https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1).

Name limit
-Cannot be an empty string
-Cannot contain character '|'
-Up to 255 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Processing statement. When FuncType is 2, EtlContent must use [log_auto_output](https://www.tencentcloud.com/document/product/614/70733?from_cn_redirect=1#b3c58797-4825-4807-bef4-68106e25024f). 

Other reference documents:

-[Create a processing task](https://www.tencentcloud.com/document/product/614/63940?from_cn_redirect=1) 
-[Function overview](https://www.tencentcloud.com/document/product/614/70395?from_cn_redirect=1)
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * Task status. Valid values: 1 (enabled) and 2 (disabled).
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Destination topic ID and alias of the data processing task
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * Whether to discard log data after the limit is exceeded
         * @type {boolean || null}
         */
        this.BackupGiveUpData = null;

        /**
         * Whether to enable delivery service log. 1 for disabled, 2 for enabled
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Whether to keep the failure log status. Valid values: 1: no; 2: yes.
         * @type {number || null}
         */
        this.KeepFailureLog = null;

        /**
         * Field name of a failed log.
         * @type {string || null}
         */
        this.FailureLogKey = null;

        /**
         * External data source information
         * @type {Array.<DataTransformSqlDataSource> || null}
         */
        this.DataTransformSqlDataSources = null;

        /**
         * Set environment variable
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.BackupGiveUpData = 'BackupGiveUpData' in params ? params.BackupGiveUpData : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.KeepFailureLog = 'KeepFailureLog' in params ? params.KeepFailureLog : null;
        this.FailureLogKey = 'FailureLogKey' in params ? params.FailureLogKey : null;

        if (params.DataTransformSqlDataSources) {
            this.DataTransformSqlDataSources = new Array();
            for (let z in params.DataTransformSqlDataSources) {
                let obj = new DataTransformSqlDataSource();
                obj.deserialize(params.DataTransformSqlDataSources[z]);
                this.DataTransformSqlDataSources.push(obj);
            }
        }

        if (params.EnvInfos) {
            this.EnvInfos = new Array();
            for (let z in params.EnvInfos) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvInfos[z]);
                this.EnvInfos.push(obj);
            }
        }

    }
}

/**
 * CreateDlcDeliver request structure.
 * @class
 */
class CreateDlcDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic id.</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Name: Length not exceeding 64 characters, starts with a letter, accepts 0-9, a-z, A-Z, _, -, Chinese character.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Delivery Type. 0: Batch delivery, 1: Real-time delivery</p>
         * @type {number || null}
         */
        this.DeliverType = null;

        /**
         * <p>Start time of the delivery time range</p>
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * <p>dlc configuration message</p>
         * @type {DlcInfo || null}
         */
        this.DlcInfo = null;

        /**
         * <p>Delivery file size in MB. Required when DeliverType=0. Range: 5&lt;= MaxSize &lt;= 256.</p>
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * <p>Delivery interval in seconds. Required when DeliverType=0. Valid range: 300 &lt;= Interval &lt;= 900.</p>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * <p>End time of the delivery time range. If empty, it means unlimited time. When EndTime is not empty, it must be greater than StartTime.</p>
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * <p>Whether to enable delivery service log. Valid values: 1: disable; 2: enable. Enabled by default.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

        if (params.DlcInfo) {
            let obj = new DlcInfo();
            obj.deserialize(params.DlcInfo)
            this.DlcInfo = obj;
        }
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * Dimension information of a cloud product instance.
 * @class
 */
class Dimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance dimension name. This field may return null, indicating that no valid values can be obtained.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Instance dimension value. This field may return null, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyScheduledSql request structure.
 * @class
 */
class ModifyScheduledSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which can be obtained through [scheduled SQL analysis task list](https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Source log topic. Search the [scheduled SQL analysis task list](https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1) to obtain it.
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * Task start status. 1: Enabled, 2: Disabled
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Target log topic for scheduled SQL analysis
         * @type {ScheduledSqlResouceInfo || null}
         */
        this.DstResource = null;

        /**
         * Queries statements
         * @type {string || null}
         */
        this.ScheduledSqlContent = null;

        /**
         * Scheduling cycle (minutes), 1-1440 minutes
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * Time window for a single query. Example: last 15 minutes
         * @type {string || null}
         */
        this.ProcessTimeWindow = null;

        /**
         * Execution delay (seconds), 0-120 seconds, default 60
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * Regional information of the source topicId. Supported regions are listed in the region list document (https://www.tencentcloud.com/document/api/614/56474?from_cn_redirect=1#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8).
         * @type {string || null}
         */
        this.SrcTopicRegion = null;

        /**
         * Task name, 0-255 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Syntax rules. Default value: 0. 0: Lucene syntax, 1: CQL syntax
         * @type {number || null}
         */
        this.SyntaxRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.DstResource) {
            let obj = new ScheduledSqlResouceInfo();
            obj.deserialize(params.DstResource)
            this.DstResource = obj;
        }
        this.ScheduledSqlContent = 'ScheduledSqlContent' in params ? params.ScheduledSqlContent : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessTimeWindow = 'ProcessTimeWindow' in params ? params.ProcessTimeWindow : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.SrcTopicRegion = 'SrcTopicRegion' in params ? params.SrcTopicRegion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;

    }
}

/**
 * DeleteConfig response structure.
 * @class
 */
class DeleteConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateDeliverCloudFunction request structure.
 * @class
 */
class CreateDeliverCloudFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId to which the Shipping Rule belongs.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name of the cloud function for delivery. Only event functions (https://www.tencentcloud.com/document/product/583/9694?from_cn_redirect=1#scf-.E4.BA.8B.E4.BB.B6.E5.87.BD.E6.95.B0) (function type selection (https://www.tencentcloud.com/document/product/583/73483?from_cn_redirect=1)) are supported.
Get function information by [getting the function list](https://www.tencentcloud.com/document/product/583/18582?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Namespace. See [Namespace management](https://www.tencentcloud.com/document/product/583/35913?from_cn_redirect=1).
-Obtain the Name by listing the namespace list (https://www.tencentcloud.com/document/product/583/37158?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version.
-Get the function version by [querying the function version](https://www.tencentcloud.com/document/product/583/37162?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Maximum waiting time for delivery. Unit: seconds. Default: 60.
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Maximum number of messages to deliver. Default is 100. Supported range [1,10000].
         * @type {number || null}
         */
        this.MaxMsgNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.MaxMsgNum = 'MaxMsgNum' in params ? params.MaxMsgNum : null;

    }
}

/**
 * ModifyDlcDeliver response structure.
 * @class
 */
class ModifyDlcDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyDashboard response structure.
 * @class
 */
class ModifyDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeMetricSubscribes response structure.
 * @class
 */
class DescribeMetricSubscribesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Metric subscription configuration information.
         * @type {Array.<MetricSubscribeInfo> || null}
         */
        this.Datas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new MetricSubscribeInfo();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWebCallback request structure.
 * @class
 */
class CreateWebCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content name. Supports a maximum of 255 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel type.

WeCom: WeCom; DingTalk: DingTalk; Lark: Lark; Http: Custom Callback.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Webhook URL.
         * @type {string || null}
         */
        this.Webhook = null;

        /**
         * Request method. Support POST, PUT.

Required when Type is Http.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Secret key. Supports a maximum of 1024 bytes.
         * @type {string || null}
         */
        this.Key = null;

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
        this.Webhook = 'Webhook' in params ? params.Webhook : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DescribeClusterMetricConfigs request structure.
 * @class
 */
class DescribeClusterMetricConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * <li>Filter configId by [collection configuration id]. Type: String. Required: No</li>
<li>name - String - required: no - filter by [configuration name]</li>
<li>Each request can have up to 10 Filters. The total upper limit of ALL Filter.Values is 100.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
 * DescribeConfigs request structure.
 * @class
 */
class DescribeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * configName
-Filter by [collection configuration name] using fuzzy matching.
-Type: String
-Required: No
-Example: test-config.

configId
-Filter by [collection configuration ID].
-Type: String
-Required: No
-Example: 3581a3be-aa41-423b-995a-54ec84da6264

topicId
- Filter by [log topic].
-Type: String
-Required: No
-Example: 3b83f9d6-3a4d-47f9-9b7f-285c868b2f9a
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).

The maximum number of Filters per request is 10, and the maximum for Filter.Values is 5.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * Data Lake Computing Service (Data Lake Compute, abbreviation DLC) partitioning additional information
 * @class
 */
class DlcPartitionExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time format, e.g.: %Y-%m-%d %H:%m:%S.%f
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Time zone
         * @type {string || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * DescribeKafkaConsumerTopics response structure.
 * @class
 */
class DescribeKafkaConsumerTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * QueryMetric request structure.
 * @class
 */
class QueryMetricRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries statements; using PromQL syntax	
-Refer to the [Syntax Rules](https://www.tencentcloud.com/document/product/614/90334?from_cn_redirect=1) document
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Metric Topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Query time, Unix timestamp in seconds. When empty, it represents the current timestamp.

         * @type {number || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * Cloud Product log delivery task info
 * @class
 */
class CloudProductLogTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service region
         * @type {string || null}
         */
        this.ClsRegion = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log configuration extended information, generally used for storage of additional log delivery configuration
         * @type {string || null}
         */
        this.Extend = null;

        /**
         * Log type, support enumerate: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Task status: 0 Creating, 1 Creation completed, 2 Deleting
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
        this.ClsRegion = 'ClsRegion' in params ? params.ClsRegion : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Extend = 'Extend' in params ? params.Extend : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * Instance information
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
        this.Values = 'Values' in params ? params.Values : null;

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
         * Alarm notification template list
         * @type {Array.<AlarmNotice> || null}
         */
        this.AlarmNotices = null;

        /**
         * Total number of eligible alarm notification templates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AlarmNotices) {
            this.AlarmNotices = new Array();
            for (let z in params.AlarmNotices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.AlarmNotices[z]);
                this.AlarmNotices.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDataTransform request structure.
 * @class
 */
class DeleteDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data processing task ID - Search the data processing task list basic information (https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1) to get the data processing task ID.
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
 * AddMachineGroupInfo request structure.
 * @class
 */
class AddMachineGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group Id
-Obtain the machine group Id through [Get Machine Group List](https://www.tencentcloud.com/document/product/614/56438?from_cn_redirect=1).
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Machine group type
Supported types: `ip` and `label`
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

    }
}

/**
 * DescribeKafkaConsumerGroupList response structure.
 * @class
 */
class DescribeKafkaConsumerGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Logset id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of consumer group information
         * @type {Array.<ConsumerGroup> || null}
         */
        this.Groups = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new ConsumerGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHostMetricConfig response structure.
 * @class
 */
class CreateHostMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Host metric collection configuration id
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyConsumerGroup request structure.
 * @class
 */
class ModifyConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag to be updated.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumer heartbeat timeout (seconds).
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * List of log topics included in the updated consumer group.
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * Logset ID (the logset to which a log topic belongs).
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
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * CreateTopic response structure.
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Topic ID</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarm response structure.
 * @class
 */
class DeleteAlarmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeDlcDelivers response structure.
 * @class
 */
class DescribeDlcDeliversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of alarm channel callback configurations.
         * @type {Array.<DlcDeliverInfo> || null}
         */
        this.Infos = null;

        /**
         * Total number of notification content configurations that meet the conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DlcDeliverInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIndex request structure.
 * @class
 */
class ModifyIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Index status. false: close index, true: enable index.
Once enabled, retrieval and analysis of logs will generate indexing traffic, index storage and corresponding fees. [Billing details](https://www.tencentcloud.com/document/product/614/45802?from_cn_redirect=1#.E8.AE.A1.E8.B4.B9.E9.A1.B9)
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * Index rule
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * Whether full-text indexing includes internal fields (`__FILENAME__`, `__HOSTNAME__`, and `__SOURCE__`). Default value: `false`. Recommended value: `true`.
* `false`: Full-text indexing does not include internal fields.
* `true`: Full-text indexing includes internal fields.
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * Whether full-text indexing includes metadata fields (which are prefixed with `__TAG__`). Default value: `0`. Recommended value: `1`.
* `0`: Full-text indexing includes only metadata fields with key-value indexing enabled.
* `1`: Full-text indexing includes all metadata fields.
* `2`: Full-text indexing does not include metadata fields.
         * @type {number || null}
         */
        this.MetadataFlag = null;

        /**
         * Custom log parsing exception storage fields
         * @type {string || null}
         */
        this.CoverageField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;
        this.CoverageField = 'CoverageField' in params ? params.CoverageField : null;

    }
}

/**
 * Machine status information
 * @class
 */
class MachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Machine instance ID.
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Machine status. Valid values: `0`: exceptional; `1`: normal
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Machine offline time. Null indicates normal. Return a specific time in case of exceptions. Time format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Whether to enable automatic update for the machine. Valid values: `0`: no; `1`: yes
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * Current machine version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Machine upgrade status. 0: Upgrade successful; 1: Upgrading; -1: Upgrade failed.
         * @type {number || null}
         */
        this.UpdateStatus = null;

        /**
         * Machine upgrade result identifier.0: Success; 1200: Upgrade successful; Other values indicate exceptions.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Machine upgrade result information."ok": Success; "update success": Upgrade successful; Other values indicate the reason for failure.
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.UpdateStatus = 'UpdateStatus' in params ? params.UpdateStatus : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * Index description information of the field for which key-value index needs to be enabled
 * @class
 */
class ValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field type. Supported types: long, text, double, json.
Note: The json data type is currently supported by partial users or log topics. If needed, contact us to enable the allowlist.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Separator of fields. Each character represents a separator.
Only symbols, \n\t\r, and escape character \ are supported.
`long` and `double` fields need to be null.
Note: \n\t\r can be directly enclosed in double quotes as the input parameter without escaping. When debugging with API Explorer, use the JSON parameter input method to avoid repeated escaping of \n\t\r.
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * Whether the analysis feature is enabled for the field
         * @type {boolean || null}
         */
        this.SqlFlag = null;

        /**
         * Whether to include node data. Set this parameter to false for the long and double fields.
         * @type {boolean || null}
         */
        this.ContainZH = null;

        /**
         * field alias
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Enable index only for sub-node. This field is not enabled.
Note: Only json type fields can configure this parameter.
         * @type {boolean || null}
         */
        this.OpenIndexForChildOnly = null;

        /**
         * subnode list
Note: Only json type fields can configure this parameter.
         * @type {Array.<KeyValueInfo> || null}
         */
        this.ChildNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.SqlFlag = 'SqlFlag' in params ? params.SqlFlag : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OpenIndexForChildOnly = 'OpenIndexForChildOnly' in params ? params.OpenIndexForChildOnly : null;

        if (params.ChildNode) {
            this.ChildNode = new Array();
            for (let z in params.ChildNode) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.ChildNode[z]);
                this.ChildNode.push(obj);
            }
        }

    }
}

/**
 * GetAlarmLog request structure.
 * @class
 */
class GetAlarmLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the execution detail to be queried, Unix timestamp, unit: ms.
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the execution detail to be queried, Unix timestamp, unit: ms.
         * @type {number || null}
         */
        this.To = null;

        /**
         * Query filter criteria, for example:
- Query by alert policy ID: `alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971"`
-Obtain the alert policy ID by [obtaining the alarm policy list](https://www.tencentcloud.com/document/api/614/56461?from_cn_redirect=1).
- Query by monitoring object ID: `monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b" `
-Obtain the monitoring object ID by [obtaining the alarm policy list](https://www.tencentcloud.com/document/api/614/56461?from_cn_redirect=1)
- Query by alarm policy ID and monitoring object ID: `alert_id:"alarm-0745ec00-e605-xxxx-b50b-54afe61fc971" AND monitored_object:"823d8bfa-76a7-xxxx-8399-8cda74d4009b"`
- Query by alarm policy ID and monitoring object ID, supports SQL statement: `(alert_id:"alarm-5ce45495-09e8-4d58-xxxx-768134bf330c") AND (monitored_object:"3c514e84-6f1f-46ec-xxxx-05de6163f7fe") AND NOT condition_evaluate_result: "Skip" AND condition_evaluate_result:[* TO *] | SELECT count(*) as top50StatisticsTotalCount, count_if(condition_evaluate_result='ProcessError') as top50StatisticsFailureCount, count_if(notification_send_result!='NotSend') as top50NoticeTotalCount, count_if(notification_send_result='SendPartFail' or notification_send_result='SendFail') as top50NoticeFailureCount, alert_id, alert_name, monitored_object, topic_type, happen_threshold, alert_threshold, notify_template group by alert_id, alert_name, monitored_object, topic_type, happen_threshold, alert_threshold, notify_template order by top50StatisticsTotalCount desc limit 1`
         * @type {string || null}
         */
        this.Query = null;

        /**
         * The maximum number of execution details returned in a single query is 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pass the Context value returned by the last API call to retrieve more subsequent logs. A total of up to 10,000 raw logs can be obtained, with an expiration time of 1 hour.Note:* When passing this parameter, do not modify any other parameters except for this one* This is only valid when the retrieval analysis statement (Query) does not contain SQL. For obtaining subsequent SQL results, refer to <a href="https://intl.cloud.tencent.com/document/product/614/58977?from_cn_redirect=1" target="_blank">SQL LIMIT Syntax</a>
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Whether the original logs are returned in time order. Optional values are: asc (ascending) or desc (descending). The default is descNote:* This is only valid when the search and analysis statement (Query) does not contain SQL* For SQL result sorting, refer to <a href="https://intl.cloud.tencent.com/document/product/614/58978?from_cn_redirect=1" target="_blank">SQL ORDER BY Syntax</a>
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * true: Indicates the use of the new retrieval result return method, with valid output parameters AnalysisRecords and Columns.false: Indicates the use of the old retrieval result return method, with valid output parameters AnalysisResults and ColNames.There is a slight difference in encoding format between the two return methods, and it is recommended to use true.
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;

    }
}

/**
 * DeleteCosRecharge response structure.
 * @class
 */
class DeleteCosRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Custom metric collection object.
 * @class
 */
class CustomMetricSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port. Value range: [1,65535].
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Metric address. Verification format: ^/[a-zA-Z0-9-_./]*$.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Namespace list.
-Supports up to 100.
-Check format of namespace `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. Length cannot exceed 63.
-namespace must be unique
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * Pod tag.
-supports a maximum of 100

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Label> || null}
         */
        this.PodLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;

        if (params.PodLabel) {
            this.PodLabel = new Array();
            for (let z in params.PodLabel) {
                let obj = new Label();
                obj.deserialize(params.PodLabel[z]);
                this.PodLabel.push(obj);
            }
        }

    }
}

/**
 * Data Lake Computing Service (Data Lake Compute, abbreviation DLC) partitioning configuration
 * @class
 */
class DlcPartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Field names in cls logs</p>
         * @type {string || null}
         */
        this.ClsField = null;

        /**
         * <p>Column name of the dlc table</p>
         * @type {string || null}
         */
        this.DlcField = null;

        /**
         * <p>Refer to <a href="https://www.tencentcloud.com/document/product/1342/53778?from_cn_redirect=1#Column">Type definition in DLC Column</a></p><p>Enumeration value:</p><ul><li>int|string|array: Refer to <a href="https://www.tencentcloud.com/document/product/1342/53778?from_cn_redirect=1#Column">Type definition in DLC Column</a></li></ul>
         * @type {string || null}
         */
        this.DlcFieldType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClsField = 'ClsField' in params ? params.ClsField : null;
        this.DlcField = 'DlcField' in params ? params.DlcField : null;
        this.DlcFieldType = 'DlcFieldType' in params ? params.DlcFieldType : null;

    }
}

/**
 * Condition of triggering by group
 * @class
 */
class GroupTriggerConditionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the field for triggering by group
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value of the field for triggering by group
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
 * Kafka data import configuration
 * @class
 */
class KafkaRechargeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of Kafka data subscription configuration.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name of the Kafka import task
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Imports Kafka type. 0: Cloud CKafka; 1: user-built Kafka
         * @type {number || null}
         */
        this.KafkaType = null;

        /**
         * CKafka instance ID of cloud platform, required when KafkaType is 0.
         * @type {string || null}
         */
        this.KafkaInstance = null;

        /**
         * Service address
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Whether ServerAddr is an encrypted connection	
         * @type {boolean || null}
         */
        this.IsEncryptionAddr = null;

        /**
         * Encryption access protocol, which is required when `IsEncryptionAddr` is set to `true`
         * @type {KafkaProtocolInfo || null}
         */
        this.Protocol = null;

        /**
         * The list of Kafka-related topics that the user needs to import. Separate multiple topics by commas.
         * @type {string || null}
         */
        this.UserKafkaTopics = null;

        /**
         * Kafka consumer group name of the user	
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * Status. 1: Running; 2: Suspension.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Data import position. -2: earliest (default); -1: latest
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Creation time. Format `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time. Format: `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Log import rule
         * @type {LogRechargeRuleInfo || null}
         */
        this.LogRechargeRule = null;

        /**
         * User kafka extended information
         * @type {UserKafkaMeta || null}
         */
        this.UserKafkaMeta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.KafkaType = 'KafkaType' in params ? params.KafkaType : null;
        this.KafkaInstance = 'KafkaInstance' in params ? params.KafkaInstance : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.IsEncryptionAddr = 'IsEncryptionAddr' in params ? params.IsEncryptionAddr : null;

        if (params.Protocol) {
            let obj = new KafkaProtocolInfo();
            obj.deserialize(params.Protocol)
            this.Protocol = obj;
        }
        this.UserKafkaTopics = 'UserKafkaTopics' in params ? params.UserKafkaTopics : null;
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.LogRechargeRule) {
            let obj = new LogRechargeRuleInfo();
            obj.deserialize(params.LogRechargeRule)
            this.LogRechargeRule = obj;
        }

        if (params.UserKafkaMeta) {
            let obj = new UserKafkaMeta();
            obj.deserialize(params.UserKafkaMeta)
            this.UserKafkaMeta = obj;
        }

    }
}

/**
 * Collection rule configuration information
 * @class
 */
class ConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Collection rule configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log formatting method
         * @type {string || null}
         */
        this.LogFormat = null;

        /**
         * log collection path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Type of log collected.
-json_log represents JSON file logs (see [Use JSON extraction mode to collect logs](https://www.tencentcloud.com/document/product/614/17419?from_cn_redirect=1)).
-delimiter_log represents: delimiter-file logs (see [use delimiter extraction mode to collect logs](https://www.tencentcloud.com/document/product/614/17420?from_cn_redirect=1)).
-minimalist_log represents single-line full-text file logs (see [use single-line full-text extraction mode to collect logs](https://www.tencentcloud.com/document/product/614/17421?from_cn_redirect=1)).
-fullregex_log represents single-line full regex-file logs (see [Collect logs using single-line full regex extraction mode](https://www.tencentcloud.com/document/product/614/52365?from_cn_redirect=1)).
-multiline_log represents multi-line full-text file logs (see [use multi-line full-text extraction mode to collect logs](https://www.tencentcloud.com/document/product/614/17422?from_cn_redirect=1)).
-multiline_fullregex_log represents: Multiline full regex-file log (see [Collect logs using multiline-full regex extraction mode](https://www.tencentcloud.com/document/product/614/52366?from_cn_redirect=1));
-user_define_log represents: combined parsing mode (suitable for logs with multiple nested formats, see [Collecting logs using combined parsing extraction mode](https://www.tencentcloud.com/document/product/614/61310?from_cn_redirect=1));
-service_syslog represents syslog collection (see [Collect Syslog](https://www.tencentcloud.com/document/product/614/81454?from_cn_redirect=1)).
- windows_event_log: Windows event log (see [Collecting Windows Event Logs](https://www.tencentcloud.com/document/product/614/96678?from_cn_redirect=1)).
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If ExtractRule is set, then LogType must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Log topic ID (TopicId) of collection configuration
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Update time
-Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Creation time.
-Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Custom parsing string. For more information, see [Collecting logs using combined parsing extraction mode](https://www.tencentcloud.com/document/product/614/61310?from_cn_redirect=1).
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * Advanced collection configuration. Json string, Key/Value is defined as follows:
-ClsAgentFileTimeout (timeout attribute). Value ranges from 0 to integer. 0 means no timeout.
-ClsAgentMaxDepth (maximum directory depth), value ranges from 0 to integer
-ClsAgentParseFailMerge (merge parsing failure logs). Value ranges from true to false.
Example:
`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`

Default placeholder value in console: `{\"ClsAgentDefault\":0}`
         * @type {string || null}
         */
        this.AdvancedConfig = null;

        /**
         * Log input type (<span style="color:red; font-weight:bold">Note: required for Windows scenario and only supports file and windows_event event type</span>)
-file type collection
-windows event collection
-syslog: System log collection
         * @type {string || null}
         */
        this.InputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LogFormat = 'LogFormat' in params ? params.LogFormat : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.AdvancedConfig = 'AdvancedConfig' in params ? params.AdvancedConfig : null;
        this.InputType = 'InputType' in params ? params.InputType : null;

    }
}

/**
 * DeleteTopic request structure.
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID - Obtain the log topic ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * ModifyShipper request structure.
 * @class
 */
class ModifyShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shipping rule ID.</p><ul><li>Obtain the ShipperId by <a href="https://www.tencentcloud.com/document/product/614/58745?from_cn_redirect=1">obtaining the shipping task list</a>.</li></ul>
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * <p>COS bucket, see the supported <a href="https://www.tencentcloud.com/document/product/436/13312?from_cn_redirect=1">bucket naming conventions</a>.</p><ul><li>Obtain COS buckets via <a href="https://www.tencentcloud.com/document/product/436/8291?from_cn_redirect=1">GET Service (List Buckets)</a>.</li></ul>
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * <p>The new directory prefix delivered by the Shipping Rule.</p><ul><li>Only 0-9A-Za-z-_/ are allowed.</li><li>Supports a maximum of 256 characters.</li></ul>
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * <p>Switch state of shipping rules. true: enable delivery task; false: disable delivery task.</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Shipping rule name</p>
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * <p>Shipping time interval in seconds. Default: 300. Valid range: 300-900.</p>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * <p>Maximum value of delivered files in MB. Default: 256. Range: 5-256.</p>
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * <p>Filter rules for log shipping. Matched logs are shipped. The relationship between the rules is and. Up to 5 rules are allowed. An empty array indicates all logs are shipped without filtering.</p>
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * <p>Partition rules for log shipping support strftime time format representation</p>
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * <p>Compression configuration of shipped logs</p>
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * <p>Content format configuration for shipped logs</p>
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * <p>Delivery file naming configuration. 0: Random number naming. 1: Delivery time naming.</p>
         * @type {number || null}
         */
        this.FilenameMode = null;

        /**
         * <p>The storage type. Default value is STANDARD. For enumeration values, please refer to the <a href="https://www.tencentcloud.com/document/product/436/33417?from_cn_redirect=1">storage class overview</a> document.<br>Reference values include:</p><ul><li>STANDARD: standard storage</li><li>STANDARD_IA: infrequent storage</li><li>ARCHIVE: archive storage</li><li>DEEP_ARCHIVE: deep archive storage</li><li>MAZ_STANDARD: standard storage (multi-AZ)</li><li>MAZ_STANDARD_IA: infrequent storage (multi-AZ)</li><li>INTELLIGENT_TIERING: intelligent tiering storage</li><li>MAZ_INTELLIGENT_TIERING: intelligent tiering storage (multi-AZ)</li></ul>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Role access description name <a href="https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1">Create role</a></p>
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * <p>External ID</p>
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * <p>Used to generate time variables in the file path shipped to COS.</p><p>Input limitation: Supports the following time zone list</p><ul><li>GMT-12:00</li><li>GMT-11:00</li><li>GMT-10:00</li><li>GMT-09:30</li><li>GMT-09:00</li><li>GMT-08:00</li><li>GMT-07:00</li><li>GMT-06:00</li><li>GMT-05:00</li><li>GMT-04:00</li><li>GMT-03:30</li><li>GMT-03:00</li><li>GMT-02:00</li><li>GMT-01:00</li><li>GMT+00:00</li><li>GMT+01:00</li><li>GMT+02:00</li><li>GMT+03:30</li><li>GMT+04:00</li><li>GMT+04:30</li><li>GMT+05:00</li><li>GMT+05:30</li><li>GMT+05:45</li><li>GMT+06:00</li><li>GMT+06:30</li><li>GMT+07:00</li><li>GMT+08:00</li><li>GMT+09:00</li><li>GMT+09:30</li><li>GMT+10:00</li><li>GMT+10:30</li><li>GMT+11:00</li><li>GMT+11:30</li><li>GMT+12:00</li><li>GMT+12:45</li><li>GMT+13:00</li><li>GMT+14:00</li><li>UTC-11:00</li><li>UTC-10:00</li><li>UTC-09:00</li><li>UTC-08:00</li><li>UTC-12:00</li><li>UTC-07:00</li><li>UTC-06:00</li><li>UTC-05:00</li><li>UTC-04:30</li><li>UTC-04:00</li><li>UTC-03:30</li><li>UTC-03:00</li><li>UTC-02:00</li><li>UTC-01:00</li><li>UTC+00:00</li><li>UTC+01:00</li><li>UTC+02:00</li><li>UTC+03:00</li><li>UTC+03:30</li><li>UTC+04:00</li><li>UTC+04:30</li><li>UTC+05:00</li><li>UTC+05:45</li><li>UTC+06:00</li><li>UTC+06:30</li><li>UTC+07:00</li><li>UTC+08:00</li><li>UTC+09:00</li><li>UTC+09:30</li><li>UTC+10:00</li><li>UTC+11:00</li><li>UTC+12:00</li><li>UTC+13:00</li></ul>
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * <p>Pre-filtering process - filter out original data written to COS</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

    }
}

/**
 * Tencent Cloud observability platform notification channel group info
 * @class
 */
class MonitorNoticeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Tencent Cloud observability platform notification template ID</p>
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * <p>ID of the Tencent Cloud observability platform content template. The default content template is used when empty.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContentTmplId = null;

        /**
         * <p>Alarm level. 0: Warn; 1: Information; 2: Critical</p>
         * @type {Array.<number> || null}
         */
        this.AlarmLevels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.ContentTmplId = 'ContentTmplId' in params ? params.ContentTmplId : null;
        this.AlarmLevels = 'AlarmLevels' in params ? params.AlarmLevels : null;

    }
}

/**
 * DescribeKafkaConsumerPreview request structure.
 * @class
 */
class DescribeKafkaConsumerPreviewRequest extends  AbstractModel {
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
 * CreateDeliverCloudFunction response structure.
 * @class
 */
class CreateDeliverCloudFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Preview data details
 * @class
 */
class PreviewLogStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log content
         * @type {string || null}
         */
        this.LogContent = null;

        /**
         * Line number. Starts from 0.
         * @type {number || null}
         */
        this.LineNum = null;

        /**
         * target log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * Error message for failure. A null string "" indicates normal.
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * Log time, format: `2024-05-07 17:13:17.105`

-Invalid input parameter
-Valid at that time, the time format in logs
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Target topic name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DstTopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogContent = 'LogContent' in params ? params.LogContent : null;
        this.LineNum = 'LineNum' in params ? params.LineNum : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.DstTopicName = 'DstTopicName' in params ? params.DstTopicName : null;

    }
}

/**
 * Compression configuration of shipped log
 * @class
 */
class CompressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compression format. Valid values: `gzip`; `lzop`; `snappy`; `none` (no compression)
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * CreateConfig response structure.
 * @class
 */
class CreateConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCloudProductLogCollection response structure.
 * @class
 */
class CreateCloudProductLogCollectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic ID.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Log topic name</p>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Logset ID</p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Logset name</p>
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * <p>-1 Creating, 1 Creation completed</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchCosRechargeInfo response structure.
 * @class
 */
class SearchCosRechargeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * First few lines of data from a certain file under the matched bucket
         * @type {Array.<string> || null}
         */
        this.Data = null;

        /**
         * Number of files under the matched bucket
         * @type {number || null}
         */
        this.Sum = null;

        /**
         * Current preview file path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Reason for preview data fetch failure
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Status.
-0: Success
-10000: Parameter error. Parameter confirmation.
-10001: Authorization failure. Please confirm authorization.
-10002: Failed to get file list. Try again later. If the problem persists, consult [online support](https://andon.tencentcloud.com/online-service?from=doc_614) or [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=83&level2_id=469&source=14&data_title=%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1&step=1) to fix it.
-10003: No corresponding prefix files in the bucket. Use the correct bucket, file prefix, and compression method.
-10004: File download failed. Try again later. If the problem persists, consult [online support](https://andon.tencentcloud.com/online-service?from=doc_614) or [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=83&level2_id=469&source=14&data_title=%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1&step=1) to fix it.
-10005: File decompression failed. Select the correct compression method and try again.
-10006: Failed to read file content. Please confirm the file is readable.
-10007: File preview failed, try again later. If the problem persists, consult [online support](https://andon.tencentcloud.com/online-service?from=doc_614) or [submit a ticket](https://console.cloud.tencent.com/workorder/category?level1_id=83&level2_id=469&source=14&data_title=%E6%97%A5%E5%BF%97%E6%9C%8D%E5%8A%A1&step=1) to fix it.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.Sum = 'Sum' in params ? params.Sum : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEsRecharge response structure.
 * @class
 */
class CreateEsRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Field information of key value or metafield index
 * @class
 */
class KeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the field for which you want to configure a key-value or metadata field index. The name can contain letters, digits, underscores, and symbols -./@ and cannot start with an underscore.

Note:
For a metadata field, set its `Key` to be consistent with the one for log uploading, without prefixing it with `__TAG__.`. `__TAG__.` will be prefixed automatically for display in the console.
2. The total number of keys in key-value indexes (`KeyValue`) and metadata field indexes (`Tag`) cannot exceed 300.
3. The number of levels in `Key` cannot exceed 10. Example: a.b.c.d.e.f.g.h.j.k
4. JSON parent and child fields (such as “a” and “a.b”) cannot be contained at the same time.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Field index description information
         * @type {ValueInfo || null}
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

        if (params.Value) {
            let obj = new ValueInfo();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * SQL information of external tables
 * @class
 */
class DataTransformSqlDataSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data source type 1: MySql; 2: Self-built MySql; 3: PostgreSQL
         * @type {number || null}
         */
        this.DataSource = null;

        /**
         * Region of the InstanceId. For example: ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance ID.
-When DataSource is 1, it means the id of a cloud database Mysql Instance, such as cdb-zxcvbnm.

         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * mysql access username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Alias. For use in data processing statement.
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * mysql access password.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyMachineGroup request structure.
 * @class
 */
class ModifyMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group Id
-Obtain the machine group Id through [Get Machine Group List](https://www.tencentcloud.com/document/product/614/56438?from_cn_redirect=1).
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * machine group name
Input limit:
-Cannot be an empty string
-Cannot contain character '|'
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Machine group type. 
Type: ip; Values contains the string list of IP machines.
Type: label. Values contains the string list of tag machine groups.
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable automatic update for the machine group
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * Start time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * End time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether to enable the service log to record the logs generated by the LogListener service itself. After it is enabled, the internal logset `cls_service_logging` and the `loglistener_status`, `loglistener_alarm`, and `loglistener_business` log topics will be created, which will not incur fees.
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * Periodic offline cleanup time for machines in a machine group. Unit: day
         * @type {number || null}
         */
        this.DelayCleanupTime = null;

        /**
         * Metadata information list of a machine group
         * @type {Array.<MetaTagInfo> || null}
         */
        this.MetaTags = null;

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

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.DelayCleanupTime = 'DelayCleanupTime' in params ? params.DelayCleanupTime : null;

        if (params.MetaTags) {
            this.MetaTags = new Array();
            for (let z in params.MetaTags) {
                let obj = new MetaTagInfo();
                obj.deserialize(params.MetaTags[z]);
                this.MetaTags.push(obj);
            }
        }

    }
}

/**
 * Authentication-free information.
 * @class
 */
class AnonymousInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation list. Valid values: trackLog: log upload through JS/HTTP; realtimeProducer: log upload through Kafka protocol.
         * @type {Array.<string> || null}
         */
        this.Operations = null;

        /**
         * List of conditions.
         * @type {Array.<ConditionInfo> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operations = 'Operations' in params ? params.Operations : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ConditionInfo();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * DescribeHostMetricConfigs response structure.
 * @class
 */
class DescribeHostMetricConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Metric subscription configuration information.
         * @type {Array.<HostMetricConfig> || null}
         */
        this.Infos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new HostMetricConfig();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDashboard request structure.
 * @class
 */
class CreateDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * dashboard name
         * @type {string || null}
         */
        this.DashboardName = null;

        /**
         * Dashboard configuration data
         * @type {string || null}
         */
        this.Data = null;

        /**
         * List of tag descriptions. When you specify this parameter, tags can be bound to the corresponding log topic at the same time. It supports up to 10 tag key-value pairs, and one resource can only be bound to one tag key.
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
        this.DashboardName = 'DashboardName' in params ? params.DashboardName : null;
        this.Data = 'Data' in params ? params.Data : null;

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
 * DeleteAlarmNotice request structure.
 * @class
 */
class DeleteAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel group ID. Obtain the notification channel group ID by searching the notification channel group list (https://www.tencentcloud.com/document/api/614/56462?from_cn_redirect=1).
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

    }
}

/**
 * DescribeScheduledSqlInfo response structure.
 * @class
 */
class DescribeScheduledSqlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled SQL Task List Information
         * @type {Array.<ScheduledSqlTaskInfo> || null}
         */
        this.ScheduledSqlTaskInfos = null;

        /**
         * Total number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ScheduledSqlTaskInfos) {
            this.ScheduledSqlTaskInfos = new Array();
            for (let z in params.ScheduledSqlTaskInfos) {
                let obj = new ScheduledSqlTaskInfo();
                obj.deserialize(params.ScheduledSqlTaskInfos[z]);
                this.ScheduledSqlTaskInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumers request structure.
 * @class
 */
class DescribeConsumersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * - consumerId
Filter by [Delivery Rule ID].
Type: String
Required: No

- topicId
Filter by [Log topic].
Type: String
Required: No

- taskStatus
Filter by [task running status]. Supported values: `0`: stop, `1`: running, `2`: exception.
Type: String
Required: No


Each request can have up to 10 Filters. The upper limit of Filter.Values is 10.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination single page limit. The default value is 20, and the maximum value is 100.
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
 * ModifyRecordingRuleYamlTask response structure.
 * @class
 */
class ModifyRecordingRuleYamlTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateMachineGroup request structure.
 * @class
 */
class CreateMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group name.
Input limit:
-Supports up to 255 characters and cannot be an empty string
-Cannot contain character '|'
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Create machine group type. Values are as follows:
-Type: ip. Create a machine group with a string list of IPs in Values.
-Type: label. Create a machine group with a string list of tags in Values.
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

        /**
         * Tag description list. This parameter is used to bind a tag to a machine group. Up to 10 tag key-value pairs are supported, and a resource can be bound to only one tag key.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to enable machine group auto-update. Default false.
         * @type {boolean || null}
         */
        this.AutoUpdate = null;

        /**
         * Start time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * End time of upgrade. It is suggested to upgrade LogListener in the off-peak period of the business.
Time format: HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Whether to enable service logs, which is used to record logs generated by the Loglistener service itself. After enabling, it will create an internal logset named cls_service_logging and log topics named loglistener_status, loglistener_alarm, and loglistener_business, without incurring charges. The default value is false.
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * Offline cleanup time for machines in the machine group, in days.

-This parameter is valid only when larger than 0.
         * @type {number || null}
         */
        this.DelayCleanupTime = null;

        /**
         * Metadata information list of a machine group
         * @type {Array.<MetaTagInfo> || null}
         */
        this.MetaTags = null;

        /**
         * System type. Values as follows:
-0: Linux (default value)
- 1:Windows
         * @type {number || null}
         */
        this.OSType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.DelayCleanupTime = 'DelayCleanupTime' in params ? params.DelayCleanupTime : null;

        if (params.MetaTags) {
            this.MetaTags = new Array();
            for (let z in params.MetaTags) {
                let obj = new MetaTagInfo();
                obj.deserialize(params.MetaTags[z]);
                this.MetaTags.push(obj);
            }
        }
        this.OSType = 'OSType' in params ? params.OSType : null;

    }
}

/**
 * DescribeExports response structure.
 * @class
 */
class DescribeExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of exported logs
         * @type {Array.<ExportInfo> || null}
         */
        this.Exports = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Exports) {
            this.Exports = new Array();
            for (let z in params.Exports) {
                let obj = new ExportInfo();
                obj.deserialize(params.Exports[z]);
                this.Exports.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNoticeContent request structure.
 * @class
 */
class CreateNoticeContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name. Supports a maximum of 255 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template content language. Valid values: 0: Chinese; 1: English.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Detailed configurations of a template.
         * @type {Array.<NoticeContent> || null}
         */
        this.NoticeContents = null;

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

        if (params.NoticeContents) {
            this.NoticeContents = new Array();
            for (let z in params.NoticeContents) {
                let obj = new NoticeContent();
                obj.deserialize(params.NoticeContents[z]);
                this.NoticeContents.push(obj);
            }
        }

    }
}

/**
 * CSV content description
 * @class
 */
class CsvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to print `key` on the first row of the CSV file
         * @type {boolean || null}
         */
        this.PrintKey = null;

        /**
         * Names of keys
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * Field delimiter
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * Escape character used to enclose any field delimiter in field content. You can enter only a single quotation mark, double quotation mark, or an empty string.
         * @type {string || null}
         */
        this.EscapeChar = null;

        /**
         * Content used to populate non-existing fields
         * @type {string || null}
         */
        this.NonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrintKey = 'PrintKey' in params ? params.PrintKey : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.EscapeChar = 'EscapeChar' in params ? params.EscapeChar : null;
        this.NonExistingField = 'NonExistingField' in params ? params.NonExistingField : null;

    }
}

/**
 * DescribeCloudProductLogTasks request structure.
 * @class
 */
class DescribeCloudProductLogTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Paging offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of entries per page. Default value: 20. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <ul><li>assumerName<ul><li>Filter by [cloud product identifier].</li><li>Type: String</li><li>Required: No</li><li>Enumerate: CDS, CWP, CDB, TDSQL-C, MongoDB, TDStore, DCDB, MariaDB, PostgreSQL, BH, APIS</li></ul></li><li>logType<ul><li>Filter by [log type].</li><li>Type: String</li><li>Required: No</li><li>Enumerate: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS</li></ul></li><li>instanceId<ul><li>Filter by [instance ID].</li><li>Type: String</li><li>Required: No</li></ul></li></ul>
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
 * CreateAlarmNotice request structure.
 * @class
 */
class CreateAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel group name. Supports a maximum of 255 bytes. Does not support '|'.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag description list. By specifying this parameter, you can bind multiple tags to the corresponding notification channel group. A maximum of 50 tag key-value pairs are supported, and there should not be duplicate key-value pairs.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * [Easy mode] (Select either easy mode or alarm mode and configure corresponding parameters)
Alarm types that require sending notifications. Available values:
- Trigger - Alarm trigger
-Alarm Recovery
-All - Alarm trigger and alarm recovery
         * @type {string || null}
         */
        this.Type = null;

        /**
         * [Easy mode] (Select either easy mode or alarm mode and configure corresponding parameters)
Notification recipients
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * [Easy mode] (Select either easy mode or alarm mode and configure corresponding parameters)
Interface callback information (including WeCom, DingTalk, Lark).
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * [Advanced mode] (Choose between easy mode and alarm mode, and configure corresponding parameters)
Notification rules.
         * @type {Array.<NoticeRule> || null}
         */
        this.NoticeRules = null;

        /**
         * Query data link. It should start with http:// or https:// and should not end with /.
         * @type {string || null}
         */
        this.JumpDomain = null;

        /**
         * Delivery log switch. Values are as follows:
1: Off (default value).
2: Enable 
When the delivery log switch is enabled, the DeliverConfig parameter is required.
         * @type {number || null}
         */
        this.DeliverStatus = null;

        /**
         * Log shipping configuration parameter. It is required when DeliverStatus is enabled.
         * @type {DeliverConfig || null}
         */
        this.DeliverConfig = null;

        /**
         * Login-free operation alarm switch. Values are as follows:
- 1: disabled.
-2: Enable (default value)
         * @type {number || null}
         */
        this.AlarmShieldStatus = null;

        /**
         * Unify the custom callback parameter settings.
-true: Use the custom callback parameters in the notification content template to override the request header and request body separately configured in the alarm policy.
-false: Prioritize using the request header and request body separately configured in the alarm policy.
         * @type {boolean || null}
         */
        this.CallbackPrioritize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

        if (params.NoticeRules) {
            this.NoticeRules = new Array();
            for (let z in params.NoticeRules) {
                let obj = new NoticeRule();
                obj.deserialize(params.NoticeRules[z]);
                this.NoticeRules.push(obj);
            }
        }
        this.JumpDomain = 'JumpDomain' in params ? params.JumpDomain : null;
        this.DeliverStatus = 'DeliverStatus' in params ? params.DeliverStatus : null;

        if (params.DeliverConfig) {
            let obj = new DeliverConfig();
            obj.deserialize(params.DeliverConfig)
            this.DeliverConfig = obj;
        }
        this.AlarmShieldStatus = 'AlarmShieldStatus' in params ? params.AlarmShieldStatus : null;
        this.CallbackPrioritize = 'CallbackPrioritize' in params ? params.CallbackPrioritize : null;

    }
}

/**
 * Histogram details
 * @class
 */
class HistogramInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of logs within the statistical period
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Unix timestamp rounded by `period`, in milliseconds
         * @type {number || null}
         */
        this.BTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.BTime = 'BTime' in params ? params.BTime : null;

    }
}

/**
 * DescribeTopicMetricConfigs request structure.
 * @class
 */
class DescribeTopicMetricConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * configId is filtered by [metric collection configuration id]. Type: String. Required: No
Filter the name by [configuration name]. Type: String. Required: No.
Each request can have up to 10 Filters. The total upper limit of ALL Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * ModifyLogset request structure.
 * @class
 */
class ModifyLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log Set Id. It can be obtained through the [logset list](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log set name. Supports a maximum of 255 characters. Unsupported character: `|`.
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Tag key-value pair bound to logset. Up to 10 tag key-value pairs are supported, and a resource can be bound to only one tag key at any time.
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

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
 * SearchDashboardSubscribe response structure.
 * @class
 */
class SearchDashboardSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyCosRecharge request structure.
 * @class
 */
class ModifyCosRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS import configuration Id.

-Obtain the cos import configuration Id through the [Get cos import configuration](https://www.tencentcloud.com/document/product/614/88099?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Log topic Id.

-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * COS import task name, supports up to 128 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task status. Valid values: 0: disabled; 1: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * COS bucket, see the supported [bucket naming conventions](https://www.tencentcloud.com/document/product/436/13312?from_cn_redirect=1).	

-Get COS buckets via [GET Service (List Buckets)](https://www.tencentcloud.com/document/product/436/8291?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The region where the COS bucket is located, see the supported [region list](https://www.tencentcloud.com/document/product/436/6224?from_cn_redirect=1).
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Prefix of the folder where COS files are located. When it is an empty string, all files in the bucket will be delivered.
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Types of logs collected. json_log indicates logs in JSON format; delimiter_log indicates logs in delimiter-separated values format; minimalist_log indicates single-line full-text logs. The default value is minimalist_log.
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Parsing format. Valid values: "", "gzip", "lzop", "snappy". Empty string means no compression.
         * @type {string || null}
         */
        this.Compress = null;

        /**
         * Extraction rule. If ExtractRule is set, then LogType must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRuleInfo = null;

        /**
         * COS import task type. Valid values: 1: one-time import task; 2: continuous import task.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Metadata. Buckets and objects are supported.
         * @type {Array.<string> || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Compress = 'Compress' in params ? params.Compress : null;

        if (params.ExtractRuleInfo) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRuleInfo)
            this.ExtractRuleInfo = obj;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * DescribeClusterMetricConfigs response structure.
 * @class
 */
class DescribeClusterMetricConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of metric collection configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MetricCollectConfig> || null}
         */
        this.Datas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new MetricCollectConfig();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebCallbacks request structure.
 * @class
 */
class DescribeWebCallbacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * - name
Filter by [alarm channel callback configuration name].
Type: String
Required: No

- webCallbackId
Filter by [alarm channel callback configuration ID].
Type: String
Required: No

- type
Filter by [alarm channel callback configuration channel type].
Type: String
Required: No
Enumeration value: WeCom, DingTalk, Lark, Http
Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * Shipping content
 * @class
 */
class ConsumerContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to deliver TAG information.<br>When EnableTag is true, it means to deliver TAG metadata.</p>
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * <p>List of metadata to be shipped, currently only support: __SOURCE__, __FILENAME__, __TIMESTAMP__, __HOSTNAME__, and __PKGID__</p>
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * <p>When EnableTag is true, the TagJsonNotTiled field must be filled.<br>TagJsonNotTiled indicates whether tag information is json tiled.</p><p>When TagJsonNotTiled is true, it is not tiled. Example:<br>tag information: <code>{"__tag__":{"fieldA":200,"fieldB":"text"}}</code><br>Not Tiled: <code>{"__tag__":{"fieldA":200,"fieldB":"text"}}</code></p><p>When TagJsonNotTiled is false, tiling is applied. Example:<br>tag information: <code>{"__tag__":{"fieldA":200,"fieldB":"text"}}</code><br>Tiled: <code>{"__tag__.fieldA":200,"__tag__.fieldB":"text"}</code></p>
         * @type {boolean || null}
         */
        this.TagJsonNotTiled = null;

        /**
         * <p>Delivery timestamp precision, options [1: second; 2: millisecond], 1 is selected by default.</p>
         * @type {number || null}
         */
        this.TimestampAccuracy = null;

        /**
         * <p>Deliver in Json format.</p><p>Enumeration value:</p><ul><li>0: Escape. Example:<br>Original log: <code>{&quot;a&quot;:&quot;aa&quot;, &quot;b&quot;:{&quot;b1&quot;:&quot;b1b1&quot;, &quot;c1&quot;:&quot;c1c1&quot;}}</code><br>Deliver to Ckafka: <code>{&quot;a&quot;:&quot;aa&quot;,&quot;b&quot;:&quot;{\&quot;b1\&quot;:\&quot;b1b1\&quot;, \&quot;c1\&quot;:\&quot;c1c1\&quot;}&quot;}</code></li><li>1: Consistent with original log, non-escaping. Example:<br>Original log: <code>{&quot;a&quot;:&quot;aa&quot;, &quot;b&quot;:{&quot;b1&quot;:&quot;b1b1&quot;, &quot;c1&quot;:&quot;c1c1&quot;}}</code><br>Deliver to Ckafka: <code>{&quot;a&quot;:&quot;aa&quot;, &quot;b&quot;:{&quot;b1&quot;:&quot;b1b1&quot;, &quot;c1&quot;:&quot;c1c1&quot;}}</code></li></ul>
         * @type {number || null}
         */
        this.JsonType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.TagJsonNotTiled = 'TagJsonNotTiled' in params ? params.TagJsonNotTiled : null;
        this.TimestampAccuracy = 'TimestampAccuracy' in params ? params.TimestampAccuracy : null;
        this.JsonType = 'JsonType' in params ? params.JsonType : null;

    }
}

/**
 * CreateMetricSubscribe response structure.
 * @class
 */
class CreateMetricSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMachines request structure.
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID to query.

-Obtain the machine group ID by searching the machine group list (https://www.tencentcloud.com/document/api/614/56438?from_cn_redirect=1).
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * ip
-Filter by ip.
-Type: String
-Required: No

instance
-Filter by instance id.
-Type: String
-Required: No

version
- Filter by LogListener version.
-Type: String
-Required: No

status
- Filter by machine status.
-Type: String
-Optional: No.
-Available values: 0: offline, 1: normal

offlineTime
- Filter by machine offline time.
-Type: String
-Optional: No.
-Available values: 0: no offline time, 12: within 12 hours, 24: within a day, 48: within two days, 99: before two days

Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on the number of entries per page. A maximum of 100 entries are supported.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
 * Log keys to be filtered and the corresponding regex
 * @class
 */
class KeyRegexInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log key to be filtered
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter rule regex corresponding to key
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * DeleteSplunkDeliver response structure.
 * @class
 */
class DeleteSplunkDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeTopicMetricConfigs response structure.
 * @class
 */
class DescribeTopicMetricConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of metric collection configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MetricCollectConfig> || null}
         */
        this.Datas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new MetricCollectConfig();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDashboardSubscribe request structure.
 * @class
 */
class DeleteDashboardSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription record id. Obtain the id through the [Get Dashboard Subscription List](https://www.tencentcloud.com/document/api/614/105779?from_cn_redirect=1) api.
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Log result information
 * @class
 */
class LogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log time in milliseconds
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Log source IP
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Log filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * ID of the request package for log reporting
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Log ID in request package
         * @type {string || null}
         */
        this.PkgLogId = null;

        /**
         * Keywords that meet search criteria are generally highlighted. Only key-value search is supported, not full-text search.	
         * @type {Array.<HighLightItem> || null}
         */
        this.HighLights = null;

        /**
         * JSON serialized string of the log content
         * @type {string || null}
         */
        this.LogJson = null;

        /**
         * Log source host name
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Raw log (only available when there is an error in creating the log index).
         * @type {string || null}
         */
        this.RawLog = null;

        /**
         * Cause for log index creation exception. It has a value only when a log index creation exception occurs.
         * @type {string || null}
         */
        this.IndexStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;

        if (params.HighLights) {
            this.HighLights = new Array();
            for (let z in params.HighLights) {
                let obj = new HighLightItem();
                obj.deserialize(params.HighLights[z]);
                this.HighLights.push(obj);
            }
        }
        this.LogJson = 'LogJson' in params ? params.LogJson : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.RawLog = 'RawLog' in params ? params.RawLog : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;

    }
}

/**
 * DeleteAlarmNotice response structure.
 * @class
 */
class DeleteAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteAlarmShield request structure.
 * @class
 */
class DeleteAlarmShieldRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocking rule id. Retrieve the blocking rule id by [searching for alert masking configuration rules](https://www.tencentcloud.com/document/api/614/103650?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Notification channel group id. Retrieve the notification channel group id by [searching alert masking configuration rules](https://www.tencentcloud.com/document/api/614/103650?from_cn_redirect=1).
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

    }
}

/**
 * ModifyEsRecharge request structure.
 * @class
 */
class ModifyEsRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import task id.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name: Length not exceeding 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Index information. Different indexes can be separated by English commas and support wildcards.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Elasticsearch Query Statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * es cluster configuration.
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * es import information.
         * @type {EsImportInfo || null}
         */
        this.ImportInfo = null;

        /**
         * Field information of es import time.
         * @type {EsTimeInfo || null}
         */
        this.TimeInfo = null;

        /**
         * Task status. 1: Running, 2: Suspended.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.ImportInfo) {
            let obj = new EsImportInfo();
            obj.deserialize(params.ImportInfo)
            this.ImportInfo = obj;
        }

        if (params.TimeInfo) {
            let obj = new EsTimeInfo();
            obj.deserialize(params.TimeInfo)
            this.TimeInfo = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * CreateNetworkApplication request structure.
 * @class
 */
class CreateNetworkApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Network application name: length not exceeding 64 characters, name must be unique.</p><ul><li>Can only contain the following characters:<ul><li>English letters (a-z and A-Z)</li><li>Digits</li><li>Underscore</li><li>Hyphen (minus sign)</li><li>Chinese characters</li></ul></li><li>At least one character</li><li>Must not contain spaces</li><li>Cannot contain other special characters (such as @, #, $, %, etc.)</li></ul>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Log Set ID</p><ul><li>Obtain the Log Set ID through the <a href="https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1">logset list</a>.</li></ul>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Topic name. The limits are as follows:</p><ul><li>Cannot be an empty string</li><li>Cannot contain character '|'</li><li>Cannot use the following names ["cls_service_log","loglistener_status","loglistener_alarm","loglistener_business","cls_service_metric"]</li></ul>
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
        this.Name = 'Name' in params ? params.Name : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DeleteLogset response structure.
 * @class
 */
class DeleteLogsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * TopicPartitionOffsetInfo
 * @class
 */
class TopicPartitionOffsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * Partition offset information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PartitionOffsetInfo> || null}
         */
        this.PartitionOffsets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicID = 'TopicID' in params ? params.TopicID : null;

        if (params.PartitionOffsets) {
            this.PartitionOffsets = new Array();
            for (let z in params.PartitionOffsets) {
                let obj = new PartitionOffsetInfo();
                obj.deserialize(params.PartitionOffsets[z]);
                this.PartitionOffsets.push(obj);
            }
        }

    }
}

/**
 * DeleteDlcDeliver response structure.
 * @class
 */
class DeleteDlcDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * `Parquet` content description
 * @class
 */
class ParquetKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key name
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * Supported data types: string, boolean, int32, int64, float, and double
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * Assigned value for parsing failure
         * @type {string || null}
         */
        this.KeyNonExistingField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.KeyNonExistingField = 'KeyNonExistingField' in params ? params.KeyNonExistingField : null;

    }
}

/**
 * DescribeShipperTasks response structure.
 * @class
 */
class DescribeShipperTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping task list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ShipperTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new ShipperTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmShields response structure.
 * @class
 */
class DescribeAlarmShieldsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of rules that meet the criteria
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of the alarm blocking rules
         * @type {Array.<AlarmShieldInfo> || null}
         */
        this.AlarmShields = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AlarmShields) {
            this.AlarmShields = new Array();
            for (let z in params.AlarmShields) {
                let obj = new AlarmShieldInfo();
                obj.deserialize(params.AlarmShields[z]);
                this.AlarmShields.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadLog request structure.
 * @class
 */
class UploadLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic id
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * This parameter has been deprecated and should not be used.
         * @type {string || null}
         */
        this.HashKey = null;

        /**
         * Compression method. Currently supports
- lz4
- zstd
         * @type {string || null}
         */
        this.CompressType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.HashKey = 'HashKey' in params ? params.HashKey : null;
        this.CompressType = 'CompressType' in params ? params.CompressType : null;

    }
}

/**
 * consumption
 * @class
 */
class ChatUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of input tokens.
         * @type {number || null}
         */
        this.PromptTokens = null;

        /**
         * Number of output tokens.
         * @type {number || null}
         */
        this.CompletionTokens = null;

        /**
         * Total number of tokens.
         * @type {number || null}
         */
        this.TotalTokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromptTokens = 'PromptTokens' in params ? params.PromptTokens : null;
        this.CompletionTokens = 'CompletionTokens' in params ? params.CompletionTokens : null;
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * Metadata Pod label structure.
 * @class
 */
class AppointLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specify the tag type.

-0: ALL Pod labels, invalid field Keys
-Specify the Pod label. The Keys field cannot be empty.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The key of the metadata Pod tag. A valid tag key has two parts: an optional prefix and a name, separated by a slash (/). The name part is necessary and must be no more than 63 characters, starting and ending with alphanumeric characters ([a-z0-9A-Z]), with hyphens (-), underscores (_), dots (.), and alphanumerics in the middle. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), with a total length not exceeding 253 characters, followed by a slash (/).

-Format of prefix: `[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*`
-name format `([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]`
-key must be unique
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Keys = 'Keys' in params ? params.Keys : null;

    }
}

/**
 * CommitConsumerOffsets request structure.
 * @class
 */
class CommitConsumerOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumption machine name.
         * @type {string || null}
         */
        this.Consumer = null;

        /**
         * Logset id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Topic partition offset information.
         * @type {Array.<TopicPartitionOffsetInfo> || null}
         */
        this.TopicPartitionOffsetsInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.Consumer = 'Consumer' in params ? params.Consumer : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

        if (params.TopicPartitionOffsetsInfo) {
            this.TopicPartitionOffsetsInfo = new Array();
            for (let z in params.TopicPartitionOffsetsInfo) {
                let obj = new TopicPartitionOffsetInfo();
                obj.deserialize(params.TopicPartitionOffsetsInfo[z]);
                this.TopicPartitionOffsetsInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyConsole response structure.
 * @class
 */
class ModifyConsoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console Id</p>
         * @type {string || null}
         */
        this.ConsoleId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleId = 'ConsoleId' in params ? params.ConsoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shipping Rule
 * @class
 */
class ConsumerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule ID
         * @type {string || null}
         */
        this.ConsumerId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether the shipping task is effective.
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * Description of CKafka
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Whether to ship the log's metadata information
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Description of the metadata information to be shipped
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * Compression mode [0:NONE；2:SNAPPY；3:LZ4]
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * Creation time of a shipping task (a millisecond-level timestamp).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * ARN (Access Role Name) [Create role](https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1)	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * External ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * Task running status. Valid values: 0: stopped; 1: running; 2: abnormal.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Advanced configuration
         * @type {AdvancedConsumerConfiguration || null}
         */
        this.AdvancedConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerId = 'ConsumerId' in params ? params.ConsumerId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Effective = 'Effective' in params ? params.Effective : null;

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

        if (params.AdvancedConfig) {
            let obj = new AdvancedConsumerConfiguration();
            obj.deserialize(params.AdvancedConfig)
            this.AdvancedConfig = obj;
        }

    }
}

/**
 * DescribeAlarms request structure.
 * @class
 */
class DescribeAlarmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * name
-Filter by [alarm policy name].
-Type: String
-Optional: No.
-Example: test-alarm

alarmId
-Filter by [alert policy ID].
-Type: String
-Optional: No.
-Example: alarm-b60cf034-c3d6-4b01-xxxx-4e877ebb4751

topicId
-Filter by [log topic ID of the monitored object].
-Type: String
-Optional: No.
-Example: 6766f83d-659e-xxxx-a8f7-9104a1012743

enable
-Filter by [Enabled status].
-Type: String
-Remark: The parameter value range for enable is 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Other values will return error information.
-Optional: No.
-Example: true

The maximum number of Filters per request is 10, and the maximum for Filter.Values is 5.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * DescribeShippers response structure.
 * @class
 */
class DescribeShippersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule list
         * @type {Array.<ShipperInfo> || null}
         */
        this.Shippers = null;

        /**
         * Total number of results obtained in this query
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Shippers) {
            this.Shippers = new Array();
            for (let z in params.Shippers) {
                let obj = new ShipperInfo();
                obj.deserialize(params.Shippers[z]);
                this.Shippers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyShipper response structure.
 * @class
 */
class ModifyShipperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Consumption group distinguish information over kafka protocol
 * @class
 */
class GroupPartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Latest data timestamp of the partition, unit: s
         * @type {number || null}
         */
        this.CommitTimestamp = null;

        /**
         * consumer
         * @type {string || null}
         */
        this.Consumer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.CommitTimestamp = 'CommitTimestamp' in params ? params.CommitTimestamp : null;
        this.Consumer = 'Consumer' in params ? params.Consumer : null;

    }
}

/**
 * GetMetricLabelValues response structure.
 * @class
 */
class GetMetricLabelValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>label values of time series metric</p>
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Values = 'Values' in params ? params.Values : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMetric response structure.
 * @class
 */
class QueryMetricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Query Result Type, Support
-scalar value
-string value
-instantaneous vector
-matrix interval vector
         * @type {string || null}
         */
        this.ResultType = null;

        /**
         * Metric Query Result
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLogset request structure.
 * @class
 */
class DeleteLogsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log Set Id. It can be obtained through the [logset list](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).
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
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * OpenKafkaConsumer response structure.
 * @class
 */
class OpenKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Topic parameter used by KafkaConsumer during consumption</p>
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicID = 'TopicID' in params ? params.TopicID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSearchView response structure.
 * @class
 */
class DeleteSearchViewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateSplunkDeliver response structure.
 * @class
 */
class CreateSplunkDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>splunk delivery task id</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyScheduledSql response structure.
 * @class
 */
class ModifyScheduledSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * QueryRangeMetric request structure.
 * @class
 */
class QueryRangeMetricRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Queries statements; using PromQL syntax
-Refer to the [syntax rules](https://www.tencentcloud.com/document/product/614/90334?from_cn_redirect=1) document.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Queries start time; unix timestamp in seconds
         * @type {number || null}
         */
        this.Start = null;

        /**
         * Queries end time; unix timestamp in seconds
         * @type {number || null}
         */
        this.End = null;

        /**
         * Queries time interval, in seconds
         * @type {number || null}
         */
        this.Step = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;
        this.Step = 'Step' in params ? params.Step : null;

    }
}

/**
 * Metadata information
 * @class
 */
class MetaTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Metadata value
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
 * DescribeMachineGroups request structure.
 * @class
 */
class DescribeMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter criteria.
machineGroupName
- Filter by [Machine Group Name].
- Type: String
-Required: No

machineGroupId
- Filter by [machine group ID].
- Type: String
-Required: No

osType
- Filter by [Operating System Type]. 0: Linux; 1: Windows.
-Type: Int
-Required: No

tagKey
- Filter by [Tag key].
- Type: String
-Required: No

tag:tagKey
-Filter by [tag key-value pair]. Replace tagKey with a specific tag key.
- Type: String
-Required: No

The maximum number of Filters per request is 10, and the maximum for Filter.Values is 5.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * ModifySearchView response structure.
 * @class
 */
class ModifySearchViewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeConfigs response structure.
 * @class
 */
class DescribeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * Total number of filtered items
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log extraction rule
 * @class
 */
class ExtractRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>key name for the time field. TimeKey and TimeFormat must appear in pairs</p>
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * <p>Time field format. Refer to the strftime function in C language for time format description output parameter</p><ul><li>See <a href="https://www.tencentcloud.com/document/product/614/38614?from_cn_redirect=1">configure time format</a> document</li></ul>
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * <p>Delimiter for log type. Only valid when LogType is delimiter_log</p>
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * <p>The whole log matching rule is only valid when LogType is fullregex_log</p>
         * @type {string || null}
         */
        this.LogRegex = null;

        /**
         * <p>First-line matching rule. Valid only when LogType is multiline_log or fullregex_log.</p>
         * @type {string || null}
         */
        this.BeginRegex = null;

        /**
         * <p>The key name of each field. An empty key means to discard the field. Valid only when LogType is delimiter_log. For json_log, use the key in the json itself. Limited to 100.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * <p>Log filtering rule list (legacy version), keys to be filtered, and corresponding regex.<br> Note: For LogListener 2.9.3 and above versions, it is recommended to use log filtering rules configuration.</p>
         * @type {Array.<KeyRegexInfo> || null}
         */
        this.FilterKeyRegex = null;

        /**
         * <p>Whether to upload logs that failed to be parsed, true for upload, false for not uploading</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.UnMatchUpLoadSwitch = null;

        /**
         * <p>key of the failure log, required when UnMatchUpLoadSwitch is true</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnMatchLogKey = null;

        /**
         * <p>Backtracking data volume in incremental collection mode. Default: -1 (full collection). Other non-negative numbers indicate incremental collection (backward collection of ${Backtracking} Byte logs from the newest position). Supports up to 1073741824 (1G).<br>Note:</p><ul><li>COS import does not support this field.</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Backtracking = null;

        /**
         * <p>Whether it is Gbk encoding. 0: No; 1: Yes.<br>Note</p><ul><li>Currently, a value of 0 indicates UTF-8 encoding.</li><li>COS import does not support this field.</li></ul>
         * @type {number || null}
         */
        this.IsGBK = null;

        /**
         * <p>Whether it is standard json. 0: No; 1: Yes.</p><ul><li>Standard json means the collector uses industry-standard open-source parsers for json parsing. Non-standard json means the collector uses CLS self-developed json parsers. There is no essential difference between the two parsers. We recommend customers use standard json for parsing.</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.JsonStandard = null;

        /**
         * <p>syslog transport protocol, valid values: tcp, udp, this parameter is valid only when LogType is service_syslog, not required for other types.<br>Note:</p><ul><li>This field applies to: create collection rule configuration, modify collection rule configuration.</li><li>COS import does not support this field.</li></ul>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * <p>syslog system log collection specifies the address and port listened to by the collector, format: [ip]:[port]. This parameter is valid only when LogType is service_syslog. No need to specify for other types.<br>Note:</p><ul><li>This field applies to: create collection rule configuration, modify collection rule configuration.</li><li>COS import does not support this field.</li></ul>
         * @type {string || null}
         */
        this.Address = null;

        /**
         * <p>rfc3164: Specify system log collection using RFC3164 protocol parsing.<br>rfc5424: Specify system log collection using RFC5424 protocol parsing.<br>auto: Automatically match either RFC3164 or RFC5424 protocol.<br>This parameter is valid only when LogType is service_syslog. Not required for other types.<br>Note:</p><ul><li>This field is applicable to: create collection rule configuration, modify collection rule configuration.</li><li>COS import does not support this field.</li></ul>
         * @type {string || null}
         */
        this.ParseProtocol = null;

        /**
         * <p>Metadata type. 0: Not use metadata information; 1: Use machine group metadata; 2: Using custom metadata; 3: Use collection configuration path.<br>Note:</p><ul><li>COS import does not support this field.</li></ul>
         * @type {number || null}
         */
        this.MetadataType = null;

        /**
         * <p>Collection configuration path regular expression.</p><p><pre><code>Use "()" to identify the regular expression corresponding to the target field in the path. During parsing, "()" is considered as a capture group and reported together with logs in the form of __TAG__.{i}:{target field name}, where i is the serial number of the capture group. If you do not want to use the serial number as the key name, you can define a custom key name through the named capturing group "(?&lt;{key name}&gt;{regular expression})" and report it together with logs in the form of __TAG__.{key name}:{target field name}. Supports up to 5 capture groups.</code></pre></p><p>Note:</p><ul><li>Required when MetadataType is 3.</li><li>This field is not supported in COS import.</li></ul>
         * @type {string || null}
         */
        this.PathRegex = null;

        /**
         * <p>User-defined metadata information.<br>Note:</p><ul><li>Required when MetadataType is 2.</li><li>This field is not supported for COS import.</li></ul>
         * @type {Array.<MetaTagInfo> || null}
         */
        this.MetaTags = null;

        /**
         * <p>The Windows Event Log Collection rule is valid only when LogType is windows_event_log. No need to specify for other types.</p>
         * @type {Array.<EventLog> || null}
         */
        this.EventLogRules = null;

        /**
         * <p>Log filtering rule list (new version).<br>Note:</p><ul><li>LogListener versions below 2.9.3 do not support this. Please use FilterKeyRegex to configure log filter rules.</li><li>Self-built k8s collection configuration (CreateConfigExtra, ModifyConfigExtra) does not support this field.</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AdvanceFilterRuleInfo> || null}
         */
        this.AdvanceFilterRules = null;

        /**
         * <p>Key name of raw logs. All raw logs are uploaded with the Key name you specified, and the original log content as Value. If left empty, raw log upload is disabled.</p><ul><li>COS import does not support this field.</li></ul>
         * @type {string || null}
         */
        this.RawLogKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.LogRegex = 'LogRegex' in params ? params.LogRegex : null;
        this.BeginRegex = 'BeginRegex' in params ? params.BeginRegex : null;
        this.Keys = 'Keys' in params ? params.Keys : null;

        if (params.FilterKeyRegex) {
            this.FilterKeyRegex = new Array();
            for (let z in params.FilterKeyRegex) {
                let obj = new KeyRegexInfo();
                obj.deserialize(params.FilterKeyRegex[z]);
                this.FilterKeyRegex.push(obj);
            }
        }
        this.UnMatchUpLoadSwitch = 'UnMatchUpLoadSwitch' in params ? params.UnMatchUpLoadSwitch : null;
        this.UnMatchLogKey = 'UnMatchLogKey' in params ? params.UnMatchLogKey : null;
        this.Backtracking = 'Backtracking' in params ? params.Backtracking : null;
        this.IsGBK = 'IsGBK' in params ? params.IsGBK : null;
        this.JsonStandard = 'JsonStandard' in params ? params.JsonStandard : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ParseProtocol = 'ParseProtocol' in params ? params.ParseProtocol : null;
        this.MetadataType = 'MetadataType' in params ? params.MetadataType : null;
        this.PathRegex = 'PathRegex' in params ? params.PathRegex : null;

        if (params.MetaTags) {
            this.MetaTags = new Array();
            for (let z in params.MetaTags) {
                let obj = new MetaTagInfo();
                obj.deserialize(params.MetaTags[z]);
                this.MetaTags.push(obj);
            }
        }

        if (params.EventLogRules) {
            this.EventLogRules = new Array();
            for (let z in params.EventLogRules) {
                let obj = new EventLog();
                obj.deserialize(params.EventLogRules[z]);
                this.EventLogRules.push(obj);
            }
        }

        if (params.AdvanceFilterRules) {
            this.AdvanceFilterRules = new Array();
            for (let z in params.AdvanceFilterRules) {
                let obj = new AdvanceFilterRuleInfo();
                obj.deserialize(params.AdvanceFilterRules[z]);
                this.AdvanceFilterRules.push(obj);
            }
        }
        this.RawLogKey = 'RawLogKey' in params ? params.RawLogKey : null;

    }
}

/**
 * Basic Topic Information
 * @class
 */
class TopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Logset ID</p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Topic ID</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Topic name</p>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Topic partition count</p>
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * <p>Whether the topic has indexing enabled (the topic type must be log topic)</p>
         * @type {boolean || null}
         */
        this.Index = null;

        /**
         * <p>If AssumerUin is not empty, it indicates the Uin of the service provider creating the log topic</p>
         * @type {number || null}
         */
        this.AssumerUin = null;

        /**
         * <p>Cloud product identifier. When the topic is created by other cloud products, this field displays the cloud product name, such as CDN, TKE.</p>
         * @type {string || null}
         */
        this.AssumerName = null;

        /**
         * <p>Creation time. Format: yyyy-MM-dd HH:mm:ss</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Whether the topic has log collection enabled. true: enable collection; false: disable collection.<br>Enabled by default during log topic creation. You can modify this field via SDK invocation of ModifyTopic.<br>The console currently does not support modification of this parameter.</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Tag information bound to the topic</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>If RoleName is not empty, it indicates the role used by the service provider creating the log topic</p>
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * <p>Whether the topic has auto-split enabled</p>
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * <p>Maximum number of partitions allowed for the topic if auto-split is enabled</p>
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * <p>Storage type of the topic</p><ul><li>hot: standard storage</li><li>cold: infrequent storage</li></ul>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Lifecycle in days, valid values 1~3600. A value of 3640 indicates permanent retention.</p>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Cloud product sub-identifier. When the log topic is created by other cloud products, this field displays the cloud product name and its log type sub-category, such as TKE-Audit, TKE-Event. Some cloud products only have the cloud product identifier (AssumerName) without this field.</p>
         * @type {string || null}
         */
        this.SubAssumerName = null;

        /**
         * <p>Topic description</p>
         * @type {string || null}
         */
        this.Describes = null;

        /**
         * <p>Enable log settlement, lifecycle of standard storage, hotPeriod &lt; Period.<br>Standard storage is hotPeriod, infrequent storage is Period-hotPeriod. (Topic type must be log topic)<br>HotPeriod=0 means log settlement is not enabled.</p>
         * @type {number || null}
         */
        this.HotPeriod = null;

        /**
         * <p>kms-cls service key id</p>
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * <p>Topic type.</p><ul><li>0: Log topic</li><li>1: Metric topic</li></ul>
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * <p>Free authentication switch. false: disabled; true: enabled.<br>Once enabled, designated operations will be supported for anonymous access to the log topic. See <a href="https://www.tencentcloud.com/document/product/614/41035?from_cn_redirect=1">log topic</a> for details.</p>
         * @type {boolean || null}
         */
        this.IsWebTracking = null;

        /**
         * <p>Log topic extended information</p>
         * @type {TopicExtendInfo || null}
         */
        this.Extends = null;

        /**
         * <p>Async migration task ID</p>
         * @type {string || null}
         */
        this.TopicAsyncTaskID = null;

        /**
         * <p>Asynchronous migration status</p><ul><li>1: In progress</li><li>2: Completed</li><li>3: Failure</li><li>4: Canceled</li></ul>
         * @type {number || null}
         */
        this.MigrationStatus = null;

        /**
         * <p>After async migration, expected effective date<br>Time format: yyyy-MM-dd HH:mm:ss</p>
         * @type {string || null}
         */
        this.EffectiveDate = null;

        /**
         * <p>IsSourceFrom Enable recording public network source IP and server receipt time</p>
         * @type {boolean || null}
         */
        this.IsSourceFrom = null;

        /**
         * <p>Current billing mode</p><p>Enumeration value:</p><ul><li>0: Function billing by usage</li><li>1: Billing by raw log size (currently supported for some customers only)</li></ul>
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * <p>If there is an async task, the new billing model after the task succeeds</p><p>Enumeration value:</p><ul><li>0: Function billing by usage</li><li>1: Billing by raw log size (currently only supported for some customers)</li></ul>
         * @type {number || null}
         */
        this.NewBillingMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.AssumerUin = 'AssumerUin' in params ? params.AssumerUin : null;
        this.AssumerName = 'AssumerName' in params ? params.AssumerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.SubAssumerName = 'SubAssumerName' in params ? params.SubAssumerName : null;
        this.Describes = 'Describes' in params ? params.Describes : null;
        this.HotPeriod = 'HotPeriod' in params ? params.HotPeriod : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.IsWebTracking = 'IsWebTracking' in params ? params.IsWebTracking : null;

        if (params.Extends) {
            let obj = new TopicExtendInfo();
            obj.deserialize(params.Extends)
            this.Extends = obj;
        }
        this.TopicAsyncTaskID = 'TopicAsyncTaskID' in params ? params.TopicAsyncTaskID : null;
        this.MigrationStatus = 'MigrationStatus' in params ? params.MigrationStatus : null;
        this.EffectiveDate = 'EffectiveDate' in params ? params.EffectiveDate : null;
        this.IsSourceFrom = 'IsSourceFrom' in params ? params.IsSourceFrom : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.NewBillingMode = 'NewBillingMode' in params ? params.NewBillingMode : null;

    }
}

/**
 * DeleteDataTransform response structure.
 * @class
 */
class DeleteDataTransformResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Shipping task information
 * @class
 */
class ShipperTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Shipping information ID
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Start timestamp of the current batch of shipped logs in milliseconds
         * @type {number || null}
         */
        this.RangeStart = null;

        /**
         * End timestamp of the current batch of shipped logs in milliseconds
         * @type {number || null}
         */
        this.RangeEnd = null;

        /**
         * Start timestamp of the current shipping task in milliseconds
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp of the current shipping task in milliseconds
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Result of this shipping: "success", "running", "failed".

-success: Task successful.
- running: Task processing.
- failed: Task failure.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Result details
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RangeStart = 'RangeStart' in params ? params.RangeStart : null;
        this.RangeEnd = 'RangeEnd' in params ? params.RangeEnd : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * CreateConsumer response structure.
 * @class
 */
class CreateConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Information about the resource for data processing
 * @class
 */
class DataTransformResouceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic ID</p><ul><li>Get the log topic ID by <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">getting the log topic list</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Alias<br>Limitation: Cannot contain character |.</p>
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * <p>Whether it is a cross-account topic. false means it is not a cross-account topic, and true means it is a cross-account topic.</p><p>Default value: false</p>
         * @type {boolean || null}
         */
        this.IsCrossAccount = null;

        /**
         * <p>In a cross-account scenario, search for the role ARN value created by the delivery account for the shipping account in the roles of the shipping account.</p>
         * @type {string || null}
         */
        this.RoleARN = null;

        /**
         * <p>External ID value. Can be found in the role-carrier of the shipping account.</p>
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * <p>topic name</p>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Logset name</p>
         * @type {string || null}
         */
        this.LogsetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.IsCrossAccount = 'IsCrossAccount' in params ? params.IsCrossAccount : null;
        this.RoleARN = 'RoleARN' in params ? params.RoleARN : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;

    }
}

/**
 * DataSight Intranet anonymous login account information
 * @class
 */
class AnonymousLoginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Anonymous login account secretId</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * <p>Anonymous login account secretKey</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * DeleteMachineGroup request structure.
 * @class
 */
class DeleteMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group Id
-Obtain the machine group Id by searching the machine group list (https://www.tencentcloud.com/document/product/614/56438?from_cn_redirect=1).
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Web Application Task Detail
 * @class
 */
class NetworkApplicationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web application Id
         * @type {string || null}
         */
        this.NetworkAppId = null;

        /**
         * network app name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Region code
         * @type {string || null}
         */
        this.Region = null;

        /**
         * log topic id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Logset id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Application token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Host Account ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-account ID
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Creation time (a second-level timestamp)
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update time (a second-level timestamp)
         * @type {number || null}
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
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeSplunkDelivers response structure.
 * @class
 */
class DescribeSplunkDeliversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Splunk delivery task information list</p>
         * @type {Array.<SplunkDeliverInfo> || null}
         */
        this.Infos = null;

        /**
         * <p>Total number of qualified tasks.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SplunkDeliverInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchDashboardSubscribe request structure.
 * @class
 */
class SearchDashboardSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard id. Obtain the DashboardId through the [Get Dashboard](https://www.tencentcloud.com/document/api/614/95636?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * Dashboard subscription data.
         * @type {DashboardSubscribeData || null}
         */
        this.SubscribeData = null;

        /**
         * Dashboard subscription Id. Obtain through the api [Dashboard subscription list](https://www.tencentcloud.com/document/api/614/105779?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Dashboard subscription Name. Obtain through the api [Dashboard subscription list](https://www.tencentcloud.com/document/api/614/105779?from_cn_redirect=1).
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
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;

        if (params.SubscribeData) {
            let obj = new DashboardSubscribeData();
            obj.deserialize(params.SubscribeData)
            this.SubscribeData = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribePartitions response structure.
 * @class
 */
class DescribePartitionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition list
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHostMetricConfig response structure.
 * @class
 */
class ModifyHostMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeMetricCorrectDimension response structure.
 * @class
 */
class DescribeMetricCorrectDimensionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Notification channel group ID. Obtain the notification channel group ID by searching the notification channel group list (https://www.tencentcloud.com/document/api/614/56462?from_cn_redirect=1).
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Tag description list. Tags can be bound to corresponding notification channel groups at the same time by specifying this parameter. It supports up to 10 tag key-value pairs, which cannot be duplicate.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Notification group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification type. Optional Values:
<li> Trigger - Alarm trigger</li>
<li> Recovery - Alarm recovery</li>
<li> All - Alarm triggered and alarm recovery</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Notification recipient
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * API callback information (including WeCom).
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * Notification rulesNote: - Type, NoticeReceivers, and WebCallbacks are one set of configurations, while NoticeRules is another set of configurations. The two sets are mutually exclusive.- Submitting one set of data will nullify the other set.
         * @type {Array.<NoticeRule> || null}
         */
        this.NoticeRules = null;

        /**
         * Call link domain name. It must start with http:// or https:// and must not end with /.
         * @type {string || null}
         */
        this.JumpDomain = null;

        /**
         * Delivery log switch.

Parameter value:
1: disabled.

2: Enable 

         * @type {number || null}
         */
        this.DeliverStatus = null;

        /**
         * Log shipping configuration.
         * @type {DeliverConfig || null}
         */
        this.DeliverConfig = null;

        /**
         * Login-free operation alarm switch.

Parameter value: 
1: disabled
2: Enable (enabled by default)
         * @type {number || null}
         */
        this.AlarmShieldStatus = null;

        /**
         * Unify the custom callback parameter settings.
-true: Use the custom callback parameters in the notification content template to override the request header and request body separately configured in the alarm policy.
-false: Prioritize using the request header and request body separately configured in the alarm policy.
         * @type {boolean || null}
         */
        this.CallbackPrioritize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }

        if (params.NoticeRules) {
            this.NoticeRules = new Array();
            for (let z in params.NoticeRules) {
                let obj = new NoticeRule();
                obj.deserialize(params.NoticeRules[z]);
                this.NoticeRules.push(obj);
            }
        }
        this.JumpDomain = 'JumpDomain' in params ? params.JumpDomain : null;
        this.DeliverStatus = 'DeliverStatus' in params ? params.DeliverStatus : null;

        if (params.DeliverConfig) {
            let obj = new DeliverConfig();
            obj.deserialize(params.DeliverConfig)
            this.DeliverConfig = obj;
        }
        this.AlarmShieldStatus = 'AlarmShieldStatus' in params ? params.AlarmShieldStatus : null;
        this.CallbackPrioritize = 'CallbackPrioritize' in params ? params.CallbackPrioritize : null;

    }
}

/**
 * Specific Tool Call Function call
 * @class
 */
class ToolCallFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Function name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Function parameter, usually a json string</p>
         * @type {string || null}
         */
        this.Arguments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Arguments = 'Arguments' in params ? params.Arguments : null;

    }
}

/**
 * CreateAlarm request structure.
 * @class
 */
class CreateAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Alarm policy name. Supports a maximum of 255 bytes. Unsupported '|'.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Monitoring object list.</p>
         * @type {Array.<AlarmTarget> || null}
         */
        this.AlarmTargets = null;

        /**
         * <p>Monitoring task execution time point.</p>
         * @type {MonitorTime || null}
         */
        this.MonitorTime = null;

        /**
         * <p>Duration cycle. An alarm is triggered after trigger conditions are constantly met for TriggerCount cycles. Minimum value is 1. Maximum value is 2000.</p>
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * <p>Alarm repeat cycle in minutes. Value ranges from 0 to 1440.</p>
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * <p>Trigger conditions for sending alarm notifications<br> Note: </p><ul><li>Condition and AlarmLevel are one set of configurations, and MultiConditions are another set of configurations. The two sets are mutually exclusive.</li></ul>
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * <p>Alarm level<br>0: Warning; 1: Info; 2: Critical.<br>Note:</p><ul><li>Defaults to 0 if left empty.</li><li>Condition and AlarmLevel are one set of configurations, and MultiConditions are another set of configurations. The two sets are mutually exclusive.</li></ul>
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * <p>Multiple trigger conditions<br> Note: </p><ul><li>Condition and AlarmLevel are one set of configurations, and MultiConditions are another set of configurations. These two sets are mutually exclusive.</li></ul>
         * @type {Array.<MultiCondition> || null}
         */
        this.MultiConditions = null;

        /**
         * <p>Whether to enable alarm policy.<br>Default value is true</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Please use the Status parameter to control whether to enable the alarm policy.</p>
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * <p>User-defined alarm content</p>
         * @type {string || null}
         */
        this.MessageTemplate = null;

        /**
         * <p>user-defined callback</p>
         * @type {CallBackInfo || null}
         */
        this.CallBack = null;

        /**
         * <p>Multi-dimensional analysis</p>
         * @type {Array.<AnalysisDimensional> || null}
         */
        this.Analysis = null;

        /**
         * <p>Group trigger status.<br>false by default</p>
         * @type {boolean || null}
         */
        this.GroupTriggerStatus = null;

        /**
         * <p>Group trigger conditions.</p>
         * @type {Array.<string> || null}
         */
        this.GroupTriggerCondition = null;

        /**
         * <p>Tag description list. Tags can be bound to the corresponding alarm policy simultaneously by specifying this parameter.</p><p>It supports up to 10 tag key-value pairs, which cannot be duplicate.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Monitored object type. 0: Common monitoring object for execution statements; 1: Each execution statement selects its own monitored object.<br>Defaults to 0 if left blank.<br>When the value is 1, the number of elements in AlarmTargets must not exceed 10, and the Numbers in AlarmTargets must be consecutive positive integers starting from 1 without duplication.</p>
         * @type {number || null}
         */
        this.MonitorObjectType = null;

        /**
         * <p>Alert additional classification information list.<br>Number of Classifications elements must not exceed 20.<br>The Key of Classifications elements cannot be empty, must be unique, length cannot exceed 50 characters, and complies with the regular expression <code>^[a-z]([a-z0-9_]{0,49})$</code>.<br>Value of Classifications elements cannot exceed 200 characters.</p>
         * @type {Array.<AlarmClassification> || null}
         */
        this.Classifications = null;

        /**
         * <p>List of associated log service alarm notification channel groups. - Search the associated alarm notification channel group list via <a href="https://www.tencentcloud.com/document/product/614/56462?from_cn_redirect=1">Get Notification Channel Group List</a>, mutually exclusive with MonitorNotice.</p>
         * @type {Array.<string> || null}
         */
        this.AlarmNoticeIds = null;

        /**
         * <p>The associated observability platform notification template is mutually exclusive with the AlarmNoticeIds parameter and cannot be used simultaneously.</p>
         * @type {MonitorNotice || null}
         */
        this.MonitorNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AlarmTargets) {
            this.AlarmTargets = new Array();
            for (let z in params.AlarmTargets) {
                let obj = new AlarmTarget();
                obj.deserialize(params.AlarmTargets[z]);
                this.AlarmTargets.push(obj);
            }
        }

        if (params.MonitorTime) {
            let obj = new MonitorTime();
            obj.deserialize(params.MonitorTime)
            this.MonitorTime = obj;
        }
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;

        if (params.MultiConditions) {
            this.MultiConditions = new Array();
            for (let z in params.MultiConditions) {
                let obj = new MultiCondition();
                obj.deserialize(params.MultiConditions[z]);
                this.MultiConditions.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.MessageTemplate = 'MessageTemplate' in params ? params.MessageTemplate : null;

        if (params.CallBack) {
            let obj = new CallBackInfo();
            obj.deserialize(params.CallBack)
            this.CallBack = obj;
        }

        if (params.Analysis) {
            this.Analysis = new Array();
            for (let z in params.Analysis) {
                let obj = new AnalysisDimensional();
                obj.deserialize(params.Analysis[z]);
                this.Analysis.push(obj);
            }
        }
        this.GroupTriggerStatus = 'GroupTriggerStatus' in params ? params.GroupTriggerStatus : null;
        this.GroupTriggerCondition = 'GroupTriggerCondition' in params ? params.GroupTriggerCondition : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.MonitorObjectType = 'MonitorObjectType' in params ? params.MonitorObjectType : null;

        if (params.Classifications) {
            this.Classifications = new Array();
            for (let z in params.Classifications) {
                let obj = new AlarmClassification();
                obj.deserialize(params.Classifications[z]);
                this.Classifications.push(obj);
            }
        }
        this.AlarmNoticeIds = 'AlarmNoticeIds' in params ? params.AlarmNoticeIds : null;

        if (params.MonitorNotice) {
            let obj = new MonitorNotice();
            obj.deserialize(params.MonitorNotice)
            this.MonitorNotice = obj;
        }

    }
}

/**
 * Data Lake Computing Service (Data Lake Compute, DLC) data field configuration message
 * @class
 */
class DlcFiledInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Field name in the cls log</p>
         * @type {string || null}
         */
        this.ClsField = null;

        /**
         * <p>Column name of the data lake computing service table</p>
         * @type {string || null}
         */
        this.DlcField = null;

        /**
         * <p>Data lake computing service field Type</p><p>Enumeration value:</p><ul><li>int|string|struct: See <a href="https://www.tencentcloud.com/document/product/1342/53778?from_cn_redirect=1#Column">Type definition in DLC Column</a></li></ul>
         * @type {string || null}
         */
        this.DlcFieldType = null;

        /**
         * <p>Parsing failure padding field</p>
         * @type {string || null}
         */
        this.FillField = null;

        /**
         * <p>Whether to disable</p>
         * @type {boolean || null}
         */
        this.Disable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClsField = 'ClsField' in params ? params.ClsField : null;
        this.DlcField = 'DlcField' in params ? params.DlcField : null;
        this.DlcFieldType = 'DlcFieldType' in params ? params.DlcFieldType : null;
        this.FillField = 'FillField' in params ? params.FillField : null;
        this.Disable = 'Disable' in params ? params.Disable : null;

    }
}

/**
 * DeleteScheduledSql response structure.
 * @class
 */
class DeleteScheduledSqlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Upgrade notification.
 * @class
 */
class EscalateNoticeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification template recipient information.
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * Callback information of alarm notification template.
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * Alarm escalation switch. `true`: enable alarm escalation, `false`: disable alarm escalation. Default: false.
         * @type {boolean || null}
         */
        this.Escalate = null;

        /**
         * Escalate alarms interval. Unit: minutes, range `[1, 14400]`.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Upgrade conditions. `1`: Unclaimed and unrecovered, `2`: Unrecovered, defaults to 1.
-Unclaimed and unrecovered: Upgrade if the alert is not restored and no one claims it.
-Unrecovered: Upgrade if the alarm persists without recovery.

         * @type {number || null}
         */
        this.Type = null;

        /**
         * Notification channel configuration for the next step after alarm severity escalation. A maximum of five steps can be configured.
         * @type {EscalateNoticeInfo || null}
         */
        this.EscalateNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.Escalate = 'Escalate' in params ? params.Escalate : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.EscalateNotice) {
            let obj = new EscalateNoticeInfo();
            obj.deserialize(params.EscalateNotice)
            this.EscalateNotice = obj;
        }

    }
}

/**
 * Blocklist path information
 * @class
 */
class ExcludePathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Valid values: `File`, `Path`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specific content corresponding to `Type`
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeTopicBaseMetricConfigs request structure.
 * @class
 */
class DescribeTopicBaseMetricConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric log topic id.
- Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * groupId is filtered by [Bound machine group id]. Type: String. Required: No.
The maximum number of Filters per request is 10, and the total upper limit for ALL Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * Filter rule for shipped log
 * @class
 */
class FilterRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter rule key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter rule
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * Filter rule value
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
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeEsRecharges response structure.
 * @class
 */
class DescribeEsRechargesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * es import configuration info
         * @type {Array.<EsRechargeInfo> || null}
         */
        this.Infos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new EsRechargeInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Advanced filtering rule.
 * @class
 */
class AdvanceFilterRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter fields
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filtering rule. 0: equal to; 1: the field exists; 2 the field does not exist.
         * @type {number || null}
         */
        this.Rule = null;

        /**
         * Values after filtering
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
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CheckRechargeKafkaServer request structure.
 * @class
 */
class CheckRechargeKafkaServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import Kafka type. 0: Tencent Cloud CKafka; 1: user-built kafka.
         * @type {number || null}
         */
        this.KafkaType = null;

        /**
         * Tencent Cloud CKafka instance ID.
When KafkaType is 0, KafkaInstance is required

- Obtain the instance id by searching the instance list information (https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
         * @type {string || null}
         */
        this.KafkaInstance = null;

        /**
         * Service AddressWhen KafkaType is 1, ServerAddr is required
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Whether ServerAddr is an encrypted connection. The default value is false. It is valid when KafkaType is 1, indicating a user self-built Kafka.
         * @type {boolean || null}
         */
        this.IsEncryptionAddr = null;

        /**
         * Encrypted access protocol. It is required when the parameter KafkaType is 1 and the parameter IsEncryptionAddr is true.
         * @type {KafkaProtocolInfo || null}
         */
        this.Protocol = null;

        /**
         * User kafka extended information
         * @type {UserKafkaMeta || null}
         */
        this.UserKafkaMeta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KafkaType = 'KafkaType' in params ? params.KafkaType : null;
        this.KafkaInstance = 'KafkaInstance' in params ? params.KafkaInstance : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.IsEncryptionAddr = 'IsEncryptionAddr' in params ? params.IsEncryptionAddr : null;

        if (params.Protocol) {
            let obj = new KafkaProtocolInfo();
            obj.deserialize(params.Protocol)
            this.Protocol = obj;
        }

        if (params.UserKafkaMeta) {
            let obj = new UserKafkaMeta();
            obj.deserialize(params.UserKafkaMeta)
            this.UserKafkaMeta = obj;
        }

    }
}

/**
 * DeleteDashboardSubscribe response structure.
 * @class
 */
class DeleteDashboardSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeLogHistogram response structure.
 * @class
 */
class DescribeLogHistogramResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical period in milliseconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * The number of logs that hit the keywords
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Statistical result details within the period
         * @type {Array.<HistogramInfo> || null}
         */
        this.HistogramInfos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.HistogramInfos) {
            this.HistogramInfos = new Array();
            for (let z in params.HistogramInfos) {
                let obj = new HistogramInfo();
                obj.deserialize(params.HistogramInfos[z]);
                this.HistogramInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroups request structure.
 * @class
 */
class DescribeConsumerGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID (the logset to which a log topic belongs).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * topic list
         * @type {Array.<string> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Topics = 'Topics' in params ? params.Topics : null;

    }
}

/**
 * DataSight Console user account information
 * @class
 */
class ConsoleAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Username.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * <p>User password</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Tencent Cloud account SecretId</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * <p>Tencent Cloud Account SecretKey</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * <p>Electronic mailbox for sending verification code</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

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
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * CreateWebCallback response structure.
 * @class
 */
class CreateWebCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback configuration ID.
         * @type {string || null}
         */
        this.WebCallbackId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebCallbackId = 'WebCallbackId' in params ? params.WebCallbackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteConsumerGroup request structure.
 * @class
 */
class DeleteConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag to be deleted.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Logset id
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
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * OpenKafkaConsumer request structure.
 * @class
 */
class OpenKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic Id.</p><ul><li>Get log topic Id by <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">get log topic list</a>.</li><li>Get log topic Id by <a href="https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1">create log topic</a>.</li></ul>
         * @type {string || null}
         */
        this.FromTopicId = null;

        /**
         * <p>Compression mode [0:NONE; 2:SNAPPY; 3:LZ4], default: 0</p>
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * <p>kafka protocol consumption data format</p>
         * @type {KafkaConsumerContent || null}
         */
        this.ConsumerContent = null;

        /**
         * <p>Whether to enable service log shipping. Valid values: 1: disable; 2: enable. Default value: 2</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * <p>Range type of consumption, 0: latest; 1: historic + latest; default value: 0</p>
         * @type {number || null}
         */
        this.ScopeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;
        this.Compression = 'Compression' in params ? params.Compression : null;

        if (params.ConsumerContent) {
            let obj = new KafkaConsumerContent();
            obj.deserialize(params.ConsumerContent)
            this.ConsumerContent = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.ScopeType = 'ScopeType' in params ? params.ScopeType : null;

    }
}

/**
 * CreateConsumerGroup response structure.
 * @class
 */
class CreateConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Delivery task information of Splunk
 * @class
 */
class SplunkDeliverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Task Name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>User id</p>
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * <p>Log topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Task status; 1. Running; 2. Suspended; 3. Exception</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Enable status; 0: Disabled; 1: Enabled</p>
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * <p>Creation time; unit: second</p>
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time; Unit: seconds</p>
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * <p>splunk delivery task - target configuration</p>
         * @type {NetInfo || null}
         */
        this.NetInfo = null;

        /**
         * <p>splunk delivery task meta-information</p>
         * @type {MetadataInfo || null}
         */
        this.Metadata = null;

        /**
         * <p>Whether to enable service logs; 1: disable; 2: enable</p>
         * @type {number || null}
         */
        this.HasServiceLog = null;

        /**
         * <p>Advanced configuration - data source;</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Advanced configuration - data source type;</p>
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * <p>Advanced configuration - Splunk write indexes</p>
         * @type {string || null}
         */
        this.Index = null;

        /**
         * <p>Advanced configuration - Whether to enable indexer; 1 - not enabled; 2 - enable;</p>
         * @type {number || null}
         */
        this.IndexAck = null;

        /**
         * <p>Advanced configuration - Channel</p>
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * <p>Pre-filtering process - perform pre-filtering statements on original data written to Splunk</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

        /**
         * <p>Advanced configuration - Cross-account delivery parameter</p>
         * @type {ExternalRole || null}
         */
        this.ExternalRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.NetInfo) {
            let obj = new NetInfo();
            obj.deserialize(params.NetInfo)
            this.NetInfo = obj;
        }

        if (params.Metadata) {
            let obj = new MetadataInfo();
            obj.deserialize(params.Metadata)
            this.Metadata = obj;
        }
        this.HasServiceLog = 'HasServiceLog' in params ? params.HasServiceLog : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.IndexAck = 'IndexAck' in params ? params.IndexAck : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

        if (params.ExternalRole) {
            let obj = new ExternalRole();
            obj.deserialize(params.ExternalRole)
            this.ExternalRole = obj;
        }

    }
}

/**
 * Notification template content.
 * @class
 */
class NoticeContentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content template title information.
Some notification channel types do not support "title". See the Tencent Cloud Console page (https://console.cloud.tencent.com/cls/alarm/notice-template).
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Body information of a notification content template.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Request Headers: The Request header in an HTTP Request contains additional information sent to server, such as user agent, authorization credentials, expected response format.
Only "Custom Callback" supports this configuration.
         * @type {Array.<string> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * ModifyMetricConfig response structure.
 * @class
 */
class ModifyMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteSearchView request structure.
 * @class
 */
class DeleteSearchViewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>View ID</p>
         * @type {string || null}
         */
        this.ViewId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewId = 'ViewId' in params ? params.ViewId : null;

    }
}

/**
 * DescribeConsumer response structure.
 * @class
 */
class DescribeConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the shipping task is effective
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * Whether log metadata is shipped
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata shipped if `NeedContent` is `true`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression mode [0:NONE；2:SNAPPY；3:LZ4]
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EstimateRebuildIndexTask request structure.
 * @class
 */
class EstimateRebuildIndexTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Estimated task start time, in milliseconds
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Estimated end time of the task, in milliseconds.
         * @type {number || null}
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Import time field information for Es
 * @class
 */
class EsTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time type 1: Log collection time 2: Specify log fields
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Log time field.

Time type is 2: Required when specifying log fields
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * Log time format.

Time type is 2: Required when specifying log fields
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Time field time zone.

Time type is 2: Required when specifying log fields
         * @type {string || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * DescribeClusterBaseMetricConfigs response structure.
 * @class
 */
class DescribeClusterBaseMetricConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of metric collection configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BaseMetricCollectConfig> || null}
         */
        this.Datas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new BaseMetricCollectConfig();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyKafkaRecharge request structure.
 * @class
 */
class ModifyKafkaRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import configuration Id.
-Create a Kafka Data Subscription Task (https://www.tencentcloud.com/document/product/614/94448?from_cn_redirect=1) to obtain the Kafka import configuration Id.
-Get the Kafka import configuration Id by searching the [Kafka Data Subscription Task list](https://www.tencentcloud.com/document/product/614/94446?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Import the target topic ID of CLS.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Kafka data import configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Import Kafka type. 0: Tencent Cloud CKafka; 1: user-built kafka.
         * @type {number || null}
         */
        this.KafkaType = null;

        /**
         * Tencent Cloud CKafka instance ID. Required when KafkaType is 0.
- Obtain the instance id by searching the instance list information (https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
         * @type {string || null}
         */
        this.KafkaInstance = null;

        /**
         * Service address, which is required when KafkaType is 1.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Whether ServerAddr is an encrypted connection. Required when KafkaType is 1.
         * @type {boolean || null}
         */
        this.IsEncryptionAddr = null;

        /**
         * Encrypted access protocol. It is required when the parameter KafkaType is 1 and the parameter IsEncryptionAddr is true.
         * @type {KafkaProtocolInfo || null}
         */
        this.Protocol = null;

        /**
         * List of Kafka-related topics to be imported by the user, separated by commas.

-When Kafka Type is Tencent Cloud CKafka: Get TopicName by searching the topic list (https://www.tencentcloud.com/document/product/597/40847?from_cn_redirect=1).
         * @type {string || null}
         */
        this.UserKafkaTopics = null;

        /**
         * Kafka consumer group name
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * Log import rule
         * @type {LogRechargeRuleInfo || null}
         */
        this.LogRechargeRule = null;

        /**
         * Import control, 1: suspend; 2: start.
         * @type {number || null}
         */
        this.StatusControl = null;

        /**
         * User kafka extended information
         * @type {UserKafkaMeta || null}
         */
        this.UserKafkaMeta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.KafkaType = 'KafkaType' in params ? params.KafkaType : null;
        this.KafkaInstance = 'KafkaInstance' in params ? params.KafkaInstance : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.IsEncryptionAddr = 'IsEncryptionAddr' in params ? params.IsEncryptionAddr : null;

        if (params.Protocol) {
            let obj = new KafkaProtocolInfo();
            obj.deserialize(params.Protocol)
            this.Protocol = obj;
        }
        this.UserKafkaTopics = 'UserKafkaTopics' in params ? params.UserKafkaTopics : null;
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.LogRechargeRule) {
            let obj = new LogRechargeRuleInfo();
            obj.deserialize(params.LogRechargeRule)
            this.LogRechargeRule = obj;
        }
        this.StatusControl = 'StatusControl' in params ? params.StatusControl : null;

        if (params.UserKafkaMeta) {
            let obj = new UserKafkaMeta();
            obj.deserialize(params.UserKafkaMeta)
            this.UserKafkaMeta = obj;
        }

    }
}

/**
 * CreateIndex response structure.
 * @class
 */
class CreateIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyDashboardSubscribe response structure.
 * @class
 */
class ModifyDashboardSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeSplunkPreview request structure.
 * @class
 */
class DescribeSplunkPreviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic id. Obtain the log topic id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>splunk delivery task meta-information</p>
         * @type {MetadataInfo || null}
         */
        this.MetadataInfo = null;

        /**
         * <p>splunk delivery task - deliver splunk filtered raw log statements</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.MetadataInfo) {
            let obj = new MetadataInfo();
            obj.deserialize(params.MetadataInfo)
            this.MetadataInfo = obj;
        }
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

    }
}

/**
 * ModifyConfig request structure.
 * @class
 */
class ModifyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration ID, accessed through [Access collection rule configuration](https://intl.cloud.tencent.com/document/product/614/58616?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Collection rule configuration name
- Cannot contain special character '|'
-Length cannot exceed 255 characters. Excess will be truncated.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log collection path containing the filename
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The types of logs collected. Supported types are:
- json_log: JSON File Log (For more information, see [Using JSON pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17419?from_cn_redirect=1));- delimiter_log: Delimiter - File Logs (For more information, see [Using delimiter pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17420?from_cn_redirect=1));- minimalist_log: Single-line Full-text File Log (For more information, see [Using single-line full-text pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17421?from_cn_redirect=1));- fullregex_log: Single line full regular expression - File log (For more information, see [Using single-line - complete regular expression pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/52365?from_cn_redirect=1));- multiline_log: Multiline Full-text File Log (For more information, see [Using multi-line full-text pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17422?from_cn_redirect=1));- multiline_fullregex_log: Multi-line complete regular expression - File Logs (For more information, see [Using multi-line - complete regular expression pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/52366?from_cn_redirect=1));- user_define_log: Combined parsing (Suitable for logs with multiple nested formats, see [Using combined parsing pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/61310?from_cn_redirect=1));- service_syslog: syslog collection (For more information, see [Collect Syslog](https://intl.cloud.tencent.com/document/product/614/81454?from_cn_redirect=1));- windows_event_log: Windows event log (For more information, see [Collect Windows Event Log](https://intl.cloud.tencent.com/document/product/614/96678?from_cn_redirect=1)).
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Log topic associated with collection configuration (TopicId)
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Custom parsing string, serialized as a JSON string.
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * Advanced collection configuration. A JSON string, Key/Value definition as follows:
- ClsAgentFileTimeout (timeout property), value range: an integer greater than or equal to 0, where 0 means no timeout- ClsAgentMaxDepth (maximum directory depth), value range: an integer greater than or equal to 0
- ClsAgentParseFailMerge (merge logs that failed parsing), value range: true or false
Sample:
`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`
         * @type {string || null}
         */
        this.AdvancedConfig = null;

        /**
         * Log input type (<span style="color:red; font-weight:bold">Note: required for Windows scenario and only supports file and windows_event type</span>)
-file type collection
-windows event collection
-syslog: System log collection
         * @type {string || null}
         */
        this.InputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.AdvancedConfig = 'AdvancedConfig' in params ? params.AdvancedConfig : null;
        this.InputType = 'InputType' in params ? params.InputType : null;

    }
}

/**
 * CreateMetricConfig response structure.
 * @class
 */
class CreateMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of metric collection configuration IDs.
         * @type {Array.<string> || null}
         */
        this.ConfigIds = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigIds = 'ConfigIds' in params ? params.ConfigIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteConfigFromMachineGroup response structure.
 * @class
 */
class DeleteConfigFromMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * PreviewKafkaRecharge response structure.
 * @class
 */
class PreviewKafkaRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log sample, which is returned when `PreviewType` is set to `2`
         * @type {string || null}
         */
        this.LogSample = null;

        /**
         * Log preview results
         * @type {string || null}
         */
        this.LogData = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSample = 'LogSample' in params ? params.LogSample : null;
        this.LogData = 'LogData' in params ? params.LogData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Offer multiple Notice messages
 * @class
 */
class MonitorNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * MonitorNoticeRule in array format
         * @type {Array.<MonitorNoticeRule> || null}
         */
        this.Notices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new MonitorNoticeRule();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }

    }
}

/**
 * DescribeAlarms response structure.
 * @class
 */
class DescribeAlarmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy list
         * @type {Array.<AlarmInfo> || null}
         */
        this.Alarms = null;

        /**
         * Number of eligible alarm policies
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new AlarmInfo();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Metric collection configuration.
 * @class
 */
class MetricCollectConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection configuration ID.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Log topic ID.
         * @type {Array.<string> || null}
         */
        this.TopicIds = null;

        /**
         * Collection configuration source. Support: `0`, `1`.
-0: Self-build k8s
- 1:TKE
         * @type {number || null}
         */
        this.Source = null;

        /**
         * Machine group ID.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Monitoring type. Supported values: `0`, `1`. Cannot be modified.

-0: Basic monitoring
-Custom monitoring
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Collection configuration method. Supports `0` and `1`. Cannot be modified.
-0: Ordinary setting method. The Type field is only for: `1`
-YAML import method, Type can be `0` or `1`.
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * Name: Length not exceeding 253 characters, check format `[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Collection object. This parameter is valid only when Flag is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MetricSpec || null}
         */
        this.Spec = null;

        /**
         * Label processing. This parameter is valid only when Flag is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Relabeling> || null}
         */
        this.MetricRelabels = null;

        /**
         * Custom metadata. This parameter is valid only when Flag is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MetricConfigLabel || null}
         */
        this.MetricLabel = null;

        /**
         * Communication protocol. Valid values: HTTP and HTTPS. This parameter is valid only when Flag is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Collection frequency. This parameter is valid only when Flag is 0.
-Check format: `^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScrapeInterval = null;

        /**
         * Collection timeout. This parameter is valid only when Flag=0 && Type=1.
- format:`^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScrapeTimeout = null;

        /**
         * How Prometheus handles tag conflicts. When Flag=0 takes effect, `true` and `false` are supported.

- `false`: Rename conflicting tags in configuration data
-`true`: Ignore server-side tag conflicts
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HonorLabels = null;

        /**
         * Collection configuration, which is a string in YAML format. It is required when Flag is 1.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MetricYamlSpec || null}
         */
        this.YamlSpec = null;

        /**
         * Operation status. Valid values: 0: applied; 1: paused.
         * @type {number || null}
         */
        this.Operate = null;

        /**
         * Creation time (a second-level timestamp).
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update timestamp (second-level).
         * @type {number || null}
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.TopicIds = 'TopicIds' in params ? params.TopicIds : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Spec) {
            let obj = new MetricSpec();
            obj.deserialize(params.Spec)
            this.Spec = obj;
        }

        if (params.MetricRelabels) {
            this.MetricRelabels = new Array();
            for (let z in params.MetricRelabels) {
                let obj = new Relabeling();
                obj.deserialize(params.MetricRelabels[z]);
                this.MetricRelabels.push(obj);
            }
        }

        if (params.MetricLabel) {
            let obj = new MetricConfigLabel();
            obj.deserialize(params.MetricLabel)
            this.MetricLabel = obj;
        }
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.ScrapeInterval = 'ScrapeInterval' in params ? params.ScrapeInterval : null;
        this.ScrapeTimeout = 'ScrapeTimeout' in params ? params.ScrapeTimeout : null;
        this.HonorLabels = 'HonorLabels' in params ? params.HonorLabels : null;

        if (params.YamlSpec) {
            let obj = new MetricYamlSpec();
            obj.deserialize(params.YamlSpec)
            this.YamlSpec = obj;
        }
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Returned content.
 * @class
 */
class Delta extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Role</p><p>Enumeration value:</p><ul><li>user: User</li><li>assistant: AI assistant</li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * <p>Content details</p>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * <p>Thought chain content.<br>Used to show the model thinking process, only available in deep thinking mode. Returned as an output parameter only, no need to input it in multi-round dialogue.</p>
         * @type {string || null}
         */
        this.ReasoningContent = null;

        /**
         * <p>Tool call generated by the model. Only support output parameter return.<br>For each output value, merge the Type, Name, and Arguments fields with Id as the flag.</p>
         * @type {Array.<ToolCall> || null}
         */
        this.ToolCalls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ReasoningContent = 'ReasoningContent' in params ? params.ReasoningContent : null;

        if (params.ToolCalls) {
            this.ToolCalls = new Array();
            for (let z in params.ToolCalls) {
                let obj = new ToolCall();
                obj.deserialize(params.ToolCalls[z]);
                this.ToolCalls.push(obj);
            }
        }

    }
}

/**
 * DeleteIndex response structure.
 * @class
 */
class DeleteIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Alarm configuration for the multidimensional analysis
 * @class
 */
class AlarmAnalysisConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keys. The following keys are supported:
SyntaxRule: Syntax rule, value supports 0: Lucene syntax; 1: CQL syntax.
QueryIndex: Serial number of execution statement. value supports -1: custom; 1: execution statement 1; 2: execution statement 2.
CustomQuery: Query statement. Required and valid when QueryIndex is -1. Example of value: "* | select count(*) as count".
Fields: field. value supports __SOURCE__, __FILENAME__, __HOSTNAME__, __TIMESTAMP__, __INDEX_STATUS__, __PKG_LOGID__, __TOPIC__.
Format: Display Format. value supports 1: one log per line; 2: one field per line for each log entry.
Limit: Maximum number of logs. Example of value: 5.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
Key corresponds to the following values:
SyntaxRule: Syntax rule, value supports 0: Lucene syntax; 1: CQL syntax.
QueryIndex: Serial number of execution statement. value supports -1: custom; 1: execution statement 1; 2: execution statement 2.
CustomQuery: Query statement. Required and valid when QueryIndex is -1. Example of value: "* | select count(*) as count".
Fields: field. value supports __SOURCE__, __FILENAME__, __HOSTNAME__, __TIMESTAMP__, __INDEX_STATUS__, __PKG_LOGID__, __TOPIC__.
Format: Display Format. value supports 1: one log per line; 2: one field per line for each log entry.
Limit: Maximum number of logs. Example of value: 5.
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
 * Error information for multi-log topic search
 * @class
 */
class SearchLogErrors extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * Error code.
         * @type {string || null}
         */
        this.ErrorCodeStr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.ErrorCodeStr = 'ErrorCodeStr' in params ? params.ErrorCodeStr : null;

    }
}

/**
 * DescribeSplunkDelivers request structure.
 * @class
 */
class DescribeSplunkDeliversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic Id</p><ul><li>Get the log topic Id by <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">getting the log topic list</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <ul><li>taskId Filter by [task id]. Type: String Required: No</li><li>name Filter by [task name]. Type: String Required: No</li><li>statusFlag Filter by [status]. Type: String Required: No<br>The maximum number of Filters per request is 10, and the maximum number of Filter.Values is 10.</li></ul>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Paging offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of entries per page. Default value: 20. Maximum value: 100.</p>
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * DeleteScheduledSql request structure.
 * @class
 */
class DeleteScheduledSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which can be obtained through [Scheduled SQL Analysis Task List](https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Source log topic ID. Search the scheduled SQL analysis task list (https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1) to obtain it.
         * @type {string || null}
         */
        this.SrcTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;

    }
}

/**
 * ModifyRecordingRuleYamlTask request structure.
 * @class
 */
class ModifyRecordingRuleYamlTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Yaml configuration id</p>
         * @type {string || null}
         */
        this.YamlID = null;

        /**
         * <p>Source metric topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Target metric topic id</p>
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * <p>Task status: 1: Enabled; 2: Disabled</p>
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * <p>Schedule start time, Unix timestamp in milliseconds</p>
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * <p>Scheduling period (minutes). Supported range (0,1440] minutes.</p>
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * <p>Execution Delay (Seconds)</p>
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * <p>yaml configuration name</p>
         * @type {string || null}
         */
        this.YamlConfigName = null;

        /**
         * <p>yaml configuration content</p>
         * @type {string || null}
         */
        this.YamlContent = null;

        /**
         * <p>Whether to enable service log shipping. Valid values: 1: disable; 2: enable.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.YamlID = 'YamlID' in params ? params.YamlID : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.YamlConfigName = 'YamlConfigName' in params ? params.YamlConfigName : null;
        this.YamlContent = 'YamlContent' in params ? params.YamlContent : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * DescribeConsumerGroups response structure.
 * @class
 */
class DescribeConsumerGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of consumer group details.
         * @type {Array.<ConsumerGroupInfo> || null}
         */
        this.ConsumerGroupsInfo = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConsumerGroupsInfo) {
            this.ConsumerGroupsInfo = new Array();
            for (let z in params.ConsumerGroupsInfo) {
                let obj = new ConsumerGroupInfo();
                obj.deserialize(params.ConsumerGroupsInfo[z]);
                this.ConsumerGroupsInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed configuration of a notification content template.
 * @class
 */
class NoticeContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel type

Email: mail; Sms: Sms; WeChat: WeChat; Phone: call; WeCom: WeCom; DingTalk: DingTalk; Lark: Lark; Http: Custom Callback
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Alarm trigger notification content template.
         * @type {NoticeContentInfo || null}
         */
        this.TriggerContent = null;

        /**
         * Alarm clearing notification content template.
         * @type {NoticeContentInfo || null}
         */
        this.RecoveryContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TriggerContent) {
            let obj = new NoticeContentInfo();
            obj.deserialize(params.TriggerContent)
            this.TriggerContent = obj;
        }

        if (params.RecoveryContent) {
            let obj = new NoticeContentInfo();
            obj.deserialize(params.RecoveryContent)
            this.RecoveryContent = obj;
        }

    }
}

/**
 * CreateDataTransform response structure.
 * @class
 */
class CreateDataTransformResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKafkaConsumerTopics request structure.
 * @class
 */
class DescribeKafkaConsumerTopicsRequest extends  AbstractModel {
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
 * CreateConsumer request structure.
 * @class
 */
class CreateConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id of the log topic bound to the delivery task.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether to deliver log Metadata information, default is true.When NeedContent is true: Content field is valid.When NeedContent is false: Content field is invalid.
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata to ship if `NeedContent` is `true`
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression method during delivery. Valid values: 0, 2, and 3. [0: NONE; 2: SNAPPY; 3: LZ4]
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * ARN [Create role](https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1)
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * external ID
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * Advanced configuration item
         * @type {AdvancedConsumerConfiguration || null}
         */
        this.AdvancedConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

        if (params.AdvancedConfig) {
            let obj = new AdvancedConsumerConfiguration();
            obj.deserialize(params.AdvancedConfig)
            this.AdvancedConfig = obj;
        }

    }
}

/**
 * DeleteHostMetricConfig request structure.
 * @class
 */
class DeleteHostMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Collection Configuration id.
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DeleteMetricConfig response structure.
 * @class
 */
class DeleteMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Basic information of a data processing task
 * @class
 */
class DataTransformTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data processing task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Data processing task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task status. Valid values: 1 (enabled) and 2 (disabled).
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Processing task type, 1: DSL (processing task using custom language), 2: SQL (processing task using SQL)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Source log topic
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * Current task status. Valid values: 1 (preparing), 2 (in progress), 3 (being stopped), and 4 (stopped).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modification time
Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Last enabled time. Modify this time if the cluster needs to be rebuilt.
Time format: yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.LastEnableTime = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.SrcTopicName = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Target topic ID and alias of the data processing task
         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * Processing logic function.
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * Fallback Topic ID
         * @type {string || null}
         */
        this.BackupTopicID = null;

        /**
         * Whether to discard log data after the limit is exceeded
         * @type {boolean || null}
         */
        this.BackupGiveUpData = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Number of the target log topics of a task.
         * @type {number || null}
         */
        this.TaskDstCount = null;

        /**
         * Data processing type. Valid values: 0: standard processing task; 1: pre-processing task.
         * @type {number || null}
         */
        this.DataTransformType = null;

        /**
         * Whether to keep the failure log status. Valid values: 1: no; 2: yes.
         * @type {number || null}
         */
        this.KeepFailureLog = null;

        /**
         * Field name of a failed log.
         * @type {string || null}
         */
        this.FailureLogKey = null;

        /**
         * Specify the start time of data processing (a second-level timestamp).
-For any time range within the log topic lifecycle, if it exceeds the lifecycle, only process the part with data within the lifecycle.
         * @type {number || null}
         */
        this.ProcessFromTimestamp = null;

        /**
         * Specify the end time of data processing, a Unix second-level timestamp.
1. Cannot specify a future time
2. If left blank, it means that the task will run constantly.
         * @type {number || null}
         */
        this.ProcessToTimestamp = null;

        /**
         * sql data source information
         * @type {Array.<DataTransformSqlDataSource> || null}
         */
        this.DataTransformSqlDataSources = null;

        /**
         * Environment variable.
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.LastEnableTime = 'LastEnableTime' in params ? params.LastEnableTime : null;
        this.SrcTopicName = 'SrcTopicName' in params ? params.SrcTopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;
        this.BackupTopicID = 'BackupTopicID' in params ? params.BackupTopicID : null;
        this.BackupGiveUpData = 'BackupGiveUpData' in params ? params.BackupGiveUpData : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.TaskDstCount = 'TaskDstCount' in params ? params.TaskDstCount : null;
        this.DataTransformType = 'DataTransformType' in params ? params.DataTransformType : null;
        this.KeepFailureLog = 'KeepFailureLog' in params ? params.KeepFailureLog : null;
        this.FailureLogKey = 'FailureLogKey' in params ? params.FailureLogKey : null;
        this.ProcessFromTimestamp = 'ProcessFromTimestamp' in params ? params.ProcessFromTimestamp : null;
        this.ProcessToTimestamp = 'ProcessToTimestamp' in params ? params.ProcessToTimestamp : null;

        if (params.DataTransformSqlDataSources) {
            this.DataTransformSqlDataSources = new Array();
            for (let z in params.DataTransformSqlDataSources) {
                let obj = new DataTransformSqlDataSource();
                obj.deserialize(params.DataTransformSqlDataSources[z]);
                this.DataTransformSqlDataSources.push(obj);
            }
        }

        if (params.EnvInfos) {
            this.EnvInfos = new Array();
            for (let z in params.EnvInfos) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvInfos[z]);
                this.EnvInfos.push(obj);
            }
        }

    }
}

/**
 * Notification rules
 * @class
 */
class NoticeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Match rule JSON string.
**rule tree format is a nested structure JSON string**
`{"Value":"AND","Type":"Operation","Children":[{"Value":"OR","Type":"Operation","Children":[{"Type":"Condition","Value":"Level","Children":[{"Value":"In","Type":"Compare"},{"Value":"[1,0]","Type":"Value"}]},{"Type":"Condition","Value":"Level","Children":[{"Value":"NotIn","Type":"Compare"},{"Value":"[2]","Type":"Value"}]}]}]}`

**Rule tree limiting rules are as follows**:
-Valid values for Type in the top-level rule: `Condition`, `Operation`
-Valid values for the Type of the `Operation` sub-node: `Condition`, `Operation`
-Valid values for the Type of a `Condition` sub-node: `String`, `Compare`, `Array`, `TimeRange`, `Value`, `Key`.
-Other types have no sub-node
-When rule Type is `Operation`, the valid values for value are `AND`, `OR`.
-When rule Type is `Condition`, value is required and the number of child nodes cannot be less than 2.
-When the sub-node Type is `Compare`, the valid values for value are `>`, `<`, `>=`, `<=`, `=`, `!=`, `Between`, `NotBetween`, `=~`, `!=~`, `In`, `NotIn`.
-When the value is `Between` or `NotBetween`, the next sub-node value must be an array of length 2.
-When the value is `=~` or `!=~`, the next sub-node value must be a regular expression.
-When value is `In` or `NotIn`, the next sub-node value must be an array.

**Business parameter meaning**:
-Type: Condition means the rule condition. Value: Level means the alarm level.
-Sub-node Type supports `Compare`, and Value supports `In` and `NotIn`.
-Supported values for the next sub-node value: 0 (warning), 1 (reminder), 2 (critical).
The following example means the alarm level belongs to reminder.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Level\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]}]}`

-Type: Condition means rule condition. Value: NotifyType refers to notification type.
-Sub-node Type supports `Compare`, and Value supports `In` and `NotIn`.
-Supported values for the next sub-node value: 1 (alarm notification), 2 (recovery notification).
The following example means the notification type belongs to alarm notification or the notification type is not within restoration notification.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[1]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyType\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[2]\",\"Type\":\"Value\"}]}]}]}`

-Type: Condition means rule condition. Value: AlarmID indicates alarm policy.
-Sub-node Type supports `Compare`, and Value supports `In` and `NotIn`.
-Supported values for the next sub-node value: alarm policy id array.
The following example means: The alarm policy belongs to alarm-53af048c-254b-4c73-bb48-xxx, alarm-6dfa8bc5-08da-4d64-b6cb-xxx or the alarm policy does not belong to alarm-1036314c-1e49-4cee-a8fb-xxx.
`"{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-53af048c-254b-4c73-bb48-xxx\\\",\\\"alarm-6dfa8bc5-08da-4d64-b6cb-xxx\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmID\",\"Children\":[{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"alarm-1036314c-1e49-4cee-a8fb-xxx\\\"]\",\"Type\":\"Value\"}]}]}]}"`

-Type: Condition means the rule condition. Value: AlarmName means the alarm policy name.
-Sub-node Type supports `Compare`, and Value supports `=~`, `!=~`
-Next sub-node value supported values: Must be a regular expression.
The following example means the alarm policy name regular expression matching ^test$ or the alarm policy name regular expression mismatch ^hahaha$.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"AlarmName\",\"Children\":[{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`

-Type: Condition means rule condition. Value: Label refers to alarm classification field.
- The sub-node Type supports `Compare`, and Value supports `In`, `NotIn`, `=~`, `!=~`.
-Supported values for the next sub-node value: `In`, `NotIn` where value is an array, `=~`, `!=~` where value is a regex.
The following example means: the alarm classification field key1 belongs to v1, or the alarm classification field key2 NOT_IN v2, or the alarm classification field key3 matches the regular expression ^test$, or the alarm classification field key4 does not match the regular expression ^hahaha$.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key1\",\"Type\":\"Key\"},{\"Value\":\"In\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v1\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key2\",\"Type\":\"Key\"},{\"Value\":\"NotIn\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"v2\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key3\",\"Type\":\"Key\"},{\"Value\":\"=~\",\"Type\":\"Compare\"},{\"Value\":\"^test$\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Label\",\"Children\":[{\"Value\":\"key4\",\"Type\":\"Key\"},{\"Value\":\"!=~\",\"Type\":\"Compare\"},{\"Value\":\"^hahaha$\",\"Type\":\"Value\"}]}]}]}`

-Type: Condition means Rule Condition. Value: NotifyTime refers to notification time.
- Sub-node Type supports `Compare`, and Value supports `Between`, `NotBetween`
-Next sub-node value supported values: An array of strings with a length of 2 in the format `14:20:36`.
The following example indicates the notification time is within the specified scope 14:18:36 to 14:33:36 or not within specified range 14:20:36 to 14:30:36.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"Between\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:18:36\\\",\\\"14:33:36\\\"]\",\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"NotifyTime\",\"Children\":[{\"Value\":\"NotBetween\",\"Type\":\"Compare\"},{\"Value\":\"[\\\"14:20:36\\\",\\\"14:30:36\\\"]\",\"Type\":\"Value\"}]}]}]}`

-Type: Condition means the rule condition. Value: Duration indicates the duration of the alarm.
-The sub-node Type supports `Compare`, and Value supports `>`, `<`, `>=`, `<=`.
-Next sub-node value supported values: integer value in minutes
The following example means: the duration of the alarm is greater than 1 minute, equal to or greater than 2 minutes, less than 3 minutes, or less than or equal to 4 minutes.
`{\"Value\":\"AND\",\"Type\":\"Operation\",\"Children\":[{\"Value\":\"OR\",\"Type\":\"Operation\",\"Children\":[{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">\",\"Type\":\"Compare\"},{\"Value\":1,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\">=\",\"Type\":\"Compare\"},{\"Value\":2,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<\",\"Type\":\"Compare\"},{\"Value\":3,\"Type\":\"Value\"}]},{\"Type\":\"Condition\",\"Value\":\"Duration\",\"Children\":[{\"Value\":\"<=\",\"Type\":\"Compare\"},{\"Value\":4,\"Type\":\"Value\"}]}]}]}`
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * Alarm notification recipient information.
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * Alarm notification template callback information, including WeCom, DingTalk, and Lark.
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * Alarm escalation switch. `true`: enable alarm escalation, `false`: disable alarm escalation. Default: false.
         * @type {boolean || null}
         */
        this.Escalate = null;

        /**
         * Alarm escalation conditions. `1`: Unclaimed and unrecovered, `2`: Unrecovered. Default is 1.
-Unclaimed and unrecovered: Upgrade if the alert is not restored and no one claims it.
-Unrecovered: Upgrade if the alarm persists without recovery.

         * @type {number || null}
         */
        this.Type = null;

        /**
         * Escalate alarms interval. Unit: minutes, range `[1, 14400]`.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Notification channel configuration for the next step after alarm severity escalation.
         * @type {EscalateNoticeInfo || null}
         */
        this.EscalateNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rule = 'Rule' in params ? params.Rule : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.Escalate = 'Escalate' in params ? params.Escalate : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.EscalateNotice) {
            let obj = new EscalateNoticeInfo();
            obj.deserialize(params.EscalateNotice)
            this.EscalateNotice = obj;
        }

    }
}

/**
 * Format configuration of shipped log content
 * @class
 */
class ContentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content format, support json, csv, parquet
         * @type {string || null}
         */
        this.Format = null;

        /**
         * CSV format content description
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {CsvInfo || null}
         */
        this.Csv = null;

        /**
         * JSON format content description
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {JsonInfo || null}
         */
        this.Json = null;

        /**
         * `Parquet` format description
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ParquetInfo || null}
         */
        this.Parquet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.Csv) {
            let obj = new CsvInfo();
            obj.deserialize(params.Csv)
            this.Csv = obj;
        }

        if (params.Json) {
            let obj = new JsonInfo();
            obj.deserialize(params.Json)
            this.Json = obj;
        }

        if (params.Parquet) {
            let obj = new ParquetInfo();
            obj.deserialize(params.Parquet)
            this.Parquet = obj;
        }

    }
}

/**
 * ApplyConfigToMachineGroup response structure.
 * @class
 */
class ApplyConfigToMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Details about an alarm notification group
 * @class
 */
class AlertHistoryNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Notification group ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

    }
}

/**
 * DeleteAlarm request structure.
 * @class
 */
class DeleteAlarmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm policy ID.
         * @type {string || null}
         */
        this.AlarmId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;

    }
}

/**
 * DescribeLogContext response structure.
 * @class
 */
class DescribeLogContextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log context information set
         * @type {Array.<LogContextInfo> || null}
         */
        this.LogContextInfos = null;

        /**
         * Whether the previous logs have been fully returned (PrevOver is false indicates that some previous logs are yet to be returned).
         * @type {boolean || null}
         */
        this.PrevOver = null;

        /**
         * Whether the subsequent logs have been fully returned (NextOver is false indicates that some subsequent logs are yet to be returned).
         * @type {boolean || null}
         */
        this.NextOver = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogContextInfos) {
            this.LogContextInfos = new Array();
            for (let z in params.LogContextInfos) {
                let obj = new LogContextInfo();
                obj.deserialize(params.LogContextInfos[z]);
                this.LogContextInfos.push(obj);
            }
        }
        this.PrevOver = 'PrevOver' in params ? params.PrevOver : null;
        this.NextOver = 'NextOver' in params ? params.NextOver : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EstimateRebuildIndexTask response structure.
 * @class
 */
class EstimateRebuildIndexTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This API is used to Estimates the time needed for index rebuilding, in seconds.
         * @type {number || null}
         */
        this.RemainTime = null;

        /**
         * Estimates write traffic size, in MB
         * @type {number || null}
         */
        this.WriteTraffic = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RemainTime = 'RemainTime' in params ? params.RemainTime : null;
        this.WriteTraffic = 'WriteTraffic' in params ? params.WriteTraffic : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDashboard request structure.
 * @class
 */
class DeleteDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard ID
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
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;

    }
}

/**
 * CreateCosRecharge response structure.
 * @class
 */
class CreateCosRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS import task ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Alarm notification recipient information
 * @class
 */
class NoticeReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recipient type. Available values:
-Uin - User ID
-Group - User group ID
Other recipient types are not currently supported.
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Recipient.
When ReceiverType is Uin, the value of ReceiverIds is the user uid. [Sub-user information query](https://www.tencentcloud.com/document/api/598/53486?from_cn_redirect=1)
When ReceiverType is Group, ReceiverIds is the user Group id. [CAM User Group](https://www.tencentcloud.com/document/product/598/34589?from_cn_redirect=1)
         * @type {Array.<number> || null}
         */
        this.ReceiverIds = null;

        /**
         * Notification receiving channel
-Mail
-Sms
-WeChat
-Phone - phone
         * @type {Array.<string> || null}
         */
        this.ReceiverChannels = null;

        /**
         * Notification content template ID. Use Default-zh to refer to the Default template (Chinese). Use Default-en to refer to DefaultTemplate (English). Get the notification content template ID by searching the notification content template (https://www.tencentcloud.com/document/product/614/111714?from_cn_redirect=1).
         * @type {string || null}
         */
        this.NoticeContentId = null;

        /**
         * Start time to allow receipt of information. Format: `15:04:05`. Required.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Allow receipt of information end time. Format: `15:04:05`. Required
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Bit order.

-Invalid when passed as an input parameter.
-Valid at that time.
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.ReceiverIds = 'ReceiverIds' in params ? params.ReceiverIds : null;
        this.ReceiverChannels = 'ReceiverChannels' in params ? params.ReceiverChannels : null;
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * Information of the CKafka instance to ship to
 * @class
 */
class Ckafka extends  AbstractModel {
    constructor(){
        super();

        /**
         * InstanceId of Ckafka.
- Obtain the instance id by searching the instance list information (https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
- Obtain the instance id by [creating an instance](https://www.tencentcloud.com/document/product/597/53207?from_cn_redirect=1).
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * TopicName of Ckafka
-Obtain the TopicName by creating a topic (https://www.tencentcloud.com/document/product/597/73566?from_cn_redirect=1).
-Obtain the TopicName through [Get Topic List](https://www.tencentcloud.com/document/product/597/40847?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Vip of Ckafka.
- Obtain vip information by searching the instance attributes (https://www.tencentcloud.com/document/product/597/40836?from_cn_redirect=1).
-If the delivery task is created via the role ARN method, the Vip field can be empty.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Vport of Ckafka.
-Obtain vip port information by [obtaining instance attributes](https://www.tencentcloud.com/document/product/597/40836?from_cn_redirect=1).
-If it is created by the role ARN method, the Vport field can be empty.
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * InstanceName of Ckafka.
- Obtain the InstanceName by searching the instance list information (https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
-Get InstanceName by [creating an instance](https://www.tencentcloud.com/document/product/597/53207?from_cn_redirect=1).
- If the delivery task is created via the role ARN method, the InstanceName field can be empty.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Topic ID of Ckafka.
-Obtain the TopicId by creating a topic (https://www.tencentcloud.com/document/product/597/73566?from_cn_redirect=1).
-Obtain the TopicId through [Get Topic List](https://www.tencentcloud.com/document/product/597/40847?from_cn_redirect=1).
- If the delivery task is created via the role ARN method, the TopicId field can be empty.
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Multiple trigger conditions.
 * @class
 */
class MultiCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger conditions
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Alarm severity. 0: Warning (Warn); 1: Reminder (Info); 2: Urgent (Critical).

- If not specified, the default is 0.
         * @type {number || null}
         */
        this.AlarmLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value to be filtered
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Query view info
 * @class
 */
class SearchViewInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>View ID</p>
         * @type {string || null}
         */
        this.ViewId = null;

        /**
         * <p>View name</p>
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * <p>View type</p><p>Enumeration value:</p><ul><li>log: Log topic</li><li>metric: Metric topic</li></ul>
         * @type {string || null}
         */
        this.ViewType = null;

        /**
         * <p>Logset id</p><p>Logset of the view</p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Region of the logset</p><p>Parameter format: ap-guangzhou</p>
         * @type {string || null}
         */
        this.LogsetRegion = null;

        /**
         * <p>View log topic information</p>
         * @type {Array.<ViewSearchTopic> || null}
         */
        this.Topics = null;

        /**
         * <p>View description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Creation time</p><p>Unit: second-level timestamp</p>
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time</p><p>Measurement unit: second-level timestamp</p>
         * @type {number || null}
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
        this.ViewId = 'ViewId' in params ? params.ViewId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ViewType = 'ViewType' in params ? params.ViewType : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetRegion = 'LogsetRegion' in params ? params.LogsetRegion : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new ViewSearchTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyLogset response structure.
 * @class
 */
class ModifyLogsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Host metrics collection item
 * @class
 */
class HostMetricItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Host metric collection item type. Supports "cpu", "mem", "net", "disk", "system".

- cpu:CPU
-mem: memory
-net: network
-disk
- system: System
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateDashboard response structure.
 * @class
 */
class CreateDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard ID
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetMetricLabelValues request structure.
 * @class
 */
class GetMetricLabelValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Time Series Topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Name of time series label</p>
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * <p>Start time</p>
         * @type {number || null}
         */
        this.Start = null;

        /**
         * <p>End time.</p>
         * @type {number || null}
         */
        this.End = null;

        /**
         * <p>Label match rule</p>
         * @type {Array.<string> || null}
         */
        this.Match = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;
        this.Match = 'Match' in params ? params.Match : null;

    }
}

/**
 * ModifyMetricSubscribe response structure.
 * @class
 */
class ModifyMetricSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeIndex response structure.
 * @class
 */
class DescribeIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic Id</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Index status. true: enabled, false: disabled<br>Once enabled, you can perform retrieval and analysis of logs, which will generate indexing traffic, index storage, and corresponding fees. <a href="https://www.tencentcloud.com/document/product/614/45802?from_cn_redirect=1#.E8.AE.A1.E8.B4.B9.E9.A1.B9">Billing details</a></p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Index configuration information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RuleInfo || null}
         */
        this.Rule = null;

        /**
         * <p>Index modification time, which is initially the index creation time. Format <code>YYYY-MM-DD HH:MM:SS</code></p>
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * <p>Whether the built-in reserved fields (<code>__FILENAME__</code>, <code>__HOSTNAME__</code>, and <code>__SOURCE__</code>) are included in the full-text index</p><ul><li>false: does not include</li><li>true: includes</li></ul>
         * @type {boolean || null}
         */
        this.IncludeInternalFields = null;

        /**
         * <p>Whether metadata fields (fields prefixed with <code>__TAG__</code>) are included in full-text indexing</p><ul><li>0: Contain only metadata fields with key-value index enabled</li><li>1: Include all metadata fields</li><li>2: Exclude any metadata fields</li></ul>
         * @type {number || null}
         */
        this.MetadataFlag = null;

        /**
         * <p>Custom log parsing exception storage field.</p>
         * @type {string || null}
         */
        this.CoverageField = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new RuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.IncludeInternalFields = 'IncludeInternalFields' in params ? params.IncludeInternalFields : null;
        this.MetadataFlag = 'MetadataFlag' in params ? params.MetadataFlag : null;
        this.CoverageField = 'CoverageField' in params ? params.CoverageField : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerPreview response structure.
 * @class
 */
class DescribeConsumerPreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteRecordingRuleTask response structure.
 * @class
 */
class DeleteRecordingRuleTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteMachineGroupInfo response structure.
 * @class
 */
class DeleteMachineGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CheckRechargeKafkaServer response structure.
 * @class
 */
class CheckRechargeKafkaServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Accessibility status of the Kafka cluster.

-0: Normal access. 
-1: broker connection failure
-2: sasl authentication failure
-3: ckafka role not authorized
-4: topic list does not exist.
-5: No data available in the topic.
-6: User has no ckafka permission.
-7: The consumption group already exists.
-8: The kafka instance does not exist or is terminated.
-9: Broker list is empty
-10: Incorrect Broker address format.
-11: Broker port is not an integer.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Instance configuration information
 * @class
 */
class InstanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * instance dimension
         * @type {Array.<string> || null}
         */
        this.InstanceDimension = null;

        /**
         * Instance value
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceDimension = 'InstanceDimension' in params ? params.InstanceDimension : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * DeleteNetworkApplication response structure.
 * @class
 */
class DeleteNetworkApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * COS import configuration information.
 * @class
 */
class CosRechargeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS import configuration ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * COS import task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * COS bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS bucket location.

-Obtain region information via [regions and access endpoints](https://www.tencentcloud.com/document/product/436/6224?from_cn_redirect=1).
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Prefix of the COS file folder location
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Types of logs collected: json_log represents JSON logs, delimiter_log represents delimiter-separated format logs, minimalist_log represents single-line full-text representation.
default is minimalist_log
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * status 0: Created, 1: Running, 2: Stopped, 3: Completed, 4: Execution failed.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether this feature is enabled. 0: Disabled; 1: Enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Creation time. Time format: YYYY-MM-DD HH:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time. Time format: YYYY-MM-DD HH:mm:ss
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Progress Bar Percentage
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Compression methods supported: "", "gzip", "lzop", and "snappy". Default empty with no compression.
         * @type {string || null}
         */
        this.Compress = null;

        /**
         * See the description of the ExtractRuleInfo structure.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRuleInfo = null;

        /**
         * COS import task type. Valid values: 1: one-time import task; 2: continuous import task.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Metadata. Buckets and objects are supported.
         * @type {Array.<string> || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Compress = 'Compress' in params ? params.Compress : null;

        if (params.ExtractRuleInfo) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRuleInfo)
            this.ExtractRuleInfo = obj;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * DeleteNoticeContent request structure.
 * @class
 */
class DeleteNoticeContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content template ID. Get the notification content template ID by searching the notification content template (https://www.tencentcloud.com/document/api/614/111714?from_cn_redirect=1).
         * @type {string || null}
         */
        this.NoticeContentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;

    }
}

/**
 * DescribeKafkaConsumer request structure.
 * @class
 */
class DescribeKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic Id.</p><ul><li>Get log topic Id by <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">get log topic list</a>.</li><li>Get log topic Id by <a href="https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1">create log topic</a>.</li></ul>
         * @type {string || null}
         */
        this.FromTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;

    }
}

/**
 * DeleteRecordingRuleTask request structure.
 * @class
 */
class DeleteRecordingRuleTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Source metric topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeDataTransformInfo response structure.
 * @class
 */
class DescribeDataTransformInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of data processing tasks
         * @type {Array.<DataTransformTaskInfo> || null}
         */
        this.DataTransformTaskInfos = null;

        /**
         * Total tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataTransformTaskInfos) {
            this.DataTransformTaskInfos = new Array();
            for (let z in params.DataTransformTaskInfos) {
                let obj = new DataTransformTaskInfo();
                obj.deserialize(params.DataTransformTaskInfos[z]);
                this.DataTransformTaskInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCosRecharge response structure.
 * @class
 */
class ModifyCosRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Cross-account delivery of external roles
 * @class
 */
class ExternalRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Cross-account delivery - User role RoleArn</p>
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * <p>Cross-account delivery - User role name</p>
         * @type {string || null}
         */
        this.ExternalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

    }
}

/**
 * DescribeEsRechargePreview request structure.
 * @class
 */
class DescribeEsRechargePreviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name: Length not exceeding 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Index information. Different indexes can be separated by English commas and support wildcards.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Elasticsearch Query Statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * es cluster configuration.
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * es import information.
         * @type {EsImportInfo || null}
         */
        this.ImportInfo = null;

        /**
         * Field information of es import time.
         * @type {EsTimeInfo || null}
         */
        this.TimeInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.ImportInfo) {
            let obj = new EsImportInfo();
            obj.deserialize(params.ImportInfo)
            this.ImportInfo = obj;
        }

        if (params.TimeInfo) {
            let obj = new EsTimeInfo();
            obj.deserialize(params.TimeInfo)
            this.TimeInfo = obj;
        }

    }
}

/**
 * MergePartition response structure.
 * @class
 */
class MergePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Merge result set
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScheduledSql request structure.
 * @class
 */
class CreateScheduledSqlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source log topic ID. Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * Task name, 0-255 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task start status. 1: Enabled, 2: Disabled
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Target log topic for scheduled SQL analysis
         * @type {ScheduledSqlResouceInfo || null}
         */
        this.DstResource = null;

        /**
         * Query statement
         * @type {string || null}
         */
        this.ScheduledSqlContent = null;

        /**
         * Schedule start time, Unix timestamp, in milliseconds
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * Schedule type: 1: Continuous running; 2: Specified time range
         * @type {number || null}
         */
        this.ProcessType = null;

        /**
         * Scheduling Interval (Minutes), 1-1440 minutes
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * Time window for a single query. If your target topic is a metric topic, it is recommended that the size of this parameter not exceed 30 minutes, otherwise, metric conversion may fail.
         * @type {string || null}
         */
        this.ProcessTimeWindow = null;

        /**
         * Execution Delay (Seconds), 0-120 seconds, default 60 seconds
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * Regional information of the source topicId. For supported regions, see the region list (https://www.tencentcloud.com/document/api/614/56474?from_cn_redirect=1#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8) document.
         * @type {string || null}
         */
        this.SrcTopicRegion = null;

        /**
         * Schedule end time. Required field when ProcessType=2, Unix timestamp, in milliseconds
         * @type {number || null}
         */
        this.ProcessEndTime = null;

        /**
         * Query syntax rules. Default value is 0. 0: Lucene syntax, 1: CQL syntax
         * @type {number || null}
         */
        this.SyntaxRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.DstResource) {
            let obj = new ScheduledSqlResouceInfo();
            obj.deserialize(params.DstResource)
            this.DstResource = obj;
        }
        this.ScheduledSqlContent = 'ScheduledSqlContent' in params ? params.ScheduledSqlContent : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessType = 'ProcessType' in params ? params.ProcessType : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessTimeWindow = 'ProcessTimeWindow' in params ? params.ProcessTimeWindow : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.SrcTopicRegion = 'SrcTopicRegion' in params ? params.SrcTopicRegion : null;
        this.ProcessEndTime = 'ProcessEndTime' in params ? params.ProcessEndTime : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;

    }
}

/**
 * DescribeKafkaConsumerGroupDetail response structure.
 * @class
 */
class DescribeKafkaConsumerGroupDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.Group = null;

        /**
         * List of consumer group information
         * @type {Array.<GroupPartitionInfo> || null}
         */
        this.PartitionInfos = null;

        /**
         * Empty: The group has no members but has submitted offsets. All consumers have left but retained offsets.
Dead: No members in the group and no submitted offset. The group is deleted or has long-term inactivity.
Stable: Members in the group consume normally, and partition allocation is balanced. Normal operating status.
PreparingRebalance: The group is preparing to rebalance. A new member joins or an existing member leaves.
CompletingRebalance: The group is preparing to rebalance. New members join or existing members leave.
         * @type {string || null}
         */
        this.State = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Group = 'Group' in params ? params.Group : null;

        if (params.PartitionInfos) {
            this.PartitionInfos = new Array();
            for (let z in params.PartitionInfos) {
                let obj = new GroupPartitionInfo();
                obj.deserialize(params.PartitionInfos[z]);
                this.PartitionInfos.push(obj);
            }
        }
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDashboard request structure.
 * @class
 */
class ModifyDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard id. Obtain the DashboardId through the [Get Dashboard](https://www.tencentcloud.com/document/api/614/95636?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * dashboard name
         * @type {string || null}
         */
        this.DashboardName = null;

        /**
         * Dashboard configuration data
         * @type {string || null}
         */
        this.Data = null;

        /**
         * List of tag descriptions. When you specify this parameter, tags can be bound to the corresponding log topic at the same time. It supports up to 10 tag key-value pairs, and one resource can only be bound to one tag key.
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
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;
        this.DashboardName = 'DashboardName' in params ? params.DashboardName : null;
        this.Data = 'Data' in params ? params.Data : null;

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
 * SendConsumerHeartbeat response structure.
 * @class
 */
class SendConsumerHeartbeatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag corresponding to a log topic.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Partition information
         * @type {Array.<TopicPartitionInfo> || null}
         */
        this.TopicPartitionsInfo = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;

        if (params.TopicPartitionsInfo) {
            this.TopicPartitionsInfo = new Array();
            for (let z in params.TopicPartitionsInfo) {
                let obj = new TopicPartitionInfo();
                obj.deserialize(params.TopicPartitionsInfo[z]);
                this.TopicPartitionsInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteHostMetricConfig response structure.
 * @class
 */
class DeleteHostMetricConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * GetClsService response structure.
 * @class
 */
class GetClsServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account service activation status. 0: service activated; 1: service not activated
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Reply, supporting multiple values
 * @class
 */
class Choice extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>End flag, which may be stop, sensitive, or tool_calls.<br>stop means the output ends normally.<br>sensitive means the security review is not passed.<br>tool_calls identifies a function call.</p><p>Note:<br>Partial content may have been output, but if the FinishReason value in the middle of the response is sensitive, it means the security review is not passed. If the business scenario requires real-time text display on the screen, manually withdraw the displayed content and recommend replacing it with a custom reminder, such as "I can't answer this issue. Let's try another topic," to ensure terminal experience.</p>
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * <p>Incremental return value. This field is used when streaming.</p>
         * @type {Delta || null}
         */
        this.Delta = null;

        /**
         * <p>Return value, used when Non-streaming calls.</p>
         * @type {Message || null}
         */
        this.Message = null;

        /**
         * <p>Index value. This field is used when streaming.</p>
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;

        if (params.Delta) {
            let obj = new Delta();
            obj.deserialize(params.Delta)
            this.Delta = obj;
        }

        if (params.Message) {
            let obj = new Message();
            obj.deserialize(params.Message)
            this.Message = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DeleteMetricConfig request structure.
 * @class
 */
class DeleteMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Metric collection configuration ID.
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * CreateEsRecharge request structure.
 * @class
 */
class CreateEsRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name: Length not exceeding 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Index information. Different indexes can be separated by English commas and support wildcards.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Elasticsearch Query Statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Cluster configuration.
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * es import information.
         * @type {EsImportInfo || null}
         */
        this.ImportInfo = null;

        /**
         * Field information of es import time.
         * @type {EsTimeInfo || null}
         */
        this.TimeInfo = null;

        /**
         * Whether to enable delivery service log. Valid values: 1: disable; 2: enable. Enabled by default.
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.ImportInfo) {
            let obj = new EsImportInfo();
            obj.deserialize(params.ImportInfo)
            this.ImportInfo = obj;
        }

        if (params.TimeInfo) {
            let obj = new EsTimeInfo();
            obj.deserialize(params.TimeInfo)
            this.TimeInfo = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * Consumption group information over kafka protocol
 * @class
 */
class ConsumerGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Status.

-Empty: The group has no members but has submitted offsets. All consumers left but retained offsets.
-Dead: The group has no members and no submitted offsets. The group is deleted or has long-term inactivity.
-Stable: Members in the group consume normally with balanced partition allocation. Normal operating status.
-PreparingRebalance: The group is preparing to rebalance. New members join or existing members leave.
-CompletingRebalance: The group is preparing to rebalance. New members join or existing members leave.

         * @type {string || null}
         */
        this.State = null;

        /**
         * Partition allocation policy balancing algorithm name.

-Common load balancing algorithms are as follows:
-range: Allocate by partition range
-roundrobin: Poll-based allocation
-sticky: Sticky assignment (avoid unnecessary rebalance)
         * @type {string || null}
         */
        this.ProtocolName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.State = 'State' in params ? params.State : null;
        this.ProtocolName = 'ProtocolName' in params ? params.ProtocolName : null;

    }
}

/**
 * DeleteNoticeContent response structure.
 * @class
 */
class DeleteNoticeContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Metric collection configuration in YAML format.
 * @class
 */
class MetricYamlSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * yaml monitoring type.
Support:
- PodMonitor
- ServiceMonitor
- ScrapeConfig
- ScrapeConfig-prometheus

`PodMonitor`, `ServiceMonitor`, `ScrapeConfig` belong to prometheus-operator
`ScrapeConfig-prometheus` belongs to Prometheus
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Configures the YAML format.
For example: Type: ServiceMonitor


```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: test
  namespace: test
  labels:
    k8s-app1: test
    k8s-app2: test
spec:
  endpoints:
    - interval: 15s
      port: 8080-8080-tcp
      path: /metrics
      relabelings:
        - action: replace
          sourceLabels:
            - __meta_kubernetes_pod_label_app
          targetLabel: application
  namespaceSelector:
    matchNames:
      - test
  selector:
    matchLabels:
      app: test
```
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Spec = 'Spec' in params ? params.Spec : null;

    }
}

/**
 * DeleteCloudProductLogCollection request structure.
 * @class
 */
class DeleteCloudProductLogCollectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Cloud product identifier, support enumerate: CDS, CWP, CDB, TDSQL-C, MongoDB, TDStore, DCDB, MariaDB, PostgreSQL, BH, APIS</p>
         * @type {string || null}
         */
        this.AssumerName = null;

        /**
         * <p>Log type, supports enumerate: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS</p>
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * <p>Product region. Input parameter format varies for different log types (LogType). Refer to the following example:</p><ul><li>All log types for CDS: ap-guangzhou</li><li>CDB-AUDIT: gz</li><li>TDSQL-C-AUDIT: gz</li><li>MongoDB-AUDIT: gz</li><li>MongoDB-SlowLog: ap-guangzhou</li><li>MongoDB-ErrorLog: ap-guangzhou</li><li>TDMYSQL-SLOW: gz</li><li>All log types for DCDB: gz</li><li>All log types for MariaDB: gz</li><li>All log types for PostgreSQL: gz</li><li>All log types for BH: overseas-polaris (Hong Kong (China) and other)/fsi-polaris (financial district)/general-polaris (general zone)/intl-sg-prod (international site)</li><li>All log types for APIS: gz</li></ul>
         * @type {string || null}
         */
        this.CloudProductRegion = null;

        /**
         * <p>Whether to delete the associated topic</p>
         * @type {boolean || null}
         */
        this.IsDeleteTopic = null;

        /**
         * <p>Whether to delete the associated logset. If the logset still has topics, deletion will not be performed.</p>
         * @type {boolean || null}
         */
        this.IsDeleteLogset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssumerName = 'AssumerName' in params ? params.AssumerName : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.CloudProductRegion = 'CloudProductRegion' in params ? params.CloudProductRegion : null;
        this.IsDeleteTopic = 'IsDeleteTopic' in params ? params.IsDeleteTopic : null;
        this.IsDeleteLogset = 'IsDeleteLogset' in params ? params.IsDeleteLogset : null;

    }
}

/**
 * DescribeKafkaConsumer response structure.
 * @class
 */
class DescribeKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether Kafka Protocol Consumption is enabled</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Topic parameter used by KafkaConsumer during consumption</p>
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * <p>Compression mode [0:NONE;2:SNAPPY;3:LZ4]</p>
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * <p>kafka protocol consumption data format</p>
         * @type {KafkaConsumerContent || null}
         */
        this.ConsumerContent = null;

        /**
         * <p>Whether to enable the delivery service log. 1: Disabled, 2: Enabled.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * <p>Range type of consumption, 0: latest, 1: history + latest</p>
         * @type {number || null}
         */
        this.ScopeType = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.TopicID = 'TopicID' in params ? params.TopicID : null;
        this.Compression = 'Compression' in params ? params.Compression : null;

        if (params.ConsumerContent) {
            let obj = new KafkaConsumerContent();
            obj.deserialize(params.ConsumerContent)
            this.ConsumerContent = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.ScopeType = 'ScopeType' in params ? params.ScopeType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JSON type description
 * @class
 */
class JsonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enablement flag
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * Metadata information list, available values are __SOURCE__, __FILENAME__, __TIMESTAMP__, __HOSTNAME__.

-SOURCE IP for log collection, for example: 10.0.1.2
-__FILENAME__: Log collection file name, for example: /data/log/nginx/access.log
-__TIMESTAMP__: Log timestamp (millisecond-level Unix timestamp). When retrieving logs by time range, the time is automatically used to retrieve logs. It is displayed on the console as "log time", for example: 1640005601188.
-__HOSTNAME__: Log source machine name. Need to use Loglistener 2.7.4 and above versions to capture this field, for example: localhost.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * JSON format for shipping. 0: shipped as a string; 1: shipped in a structured way.
         * @type {number || null}
         */
        this.JsonType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.JsonType = 'JsonType' in params ? params.JsonType : null;

    }
}

/**
 * DeleteKafkaRecharge response structure.
 * @class
 */
class DeleteKafkaRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteDlcDeliver request structure.
 * @class
 */
class DeleteDlcDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Task ID.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Callback configuration
 * @class
 */
class CallBackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback Body.
Place various alarm variables in the request content. For details, see the help documentation (https://www.tencentcloud.com/document/product/614/74718?from_cn_redirect=1).
in the following example:

```
{
"TopicId": "{{ .QueryLog[0][0].topicId }}",
"key": "{{.Alarm}}",
"time": "{{ .QueryLog[0][0].time }}",
"log": "{{ .QueryLog[0][0].content.__CONTENT__ }}",
"namespace": "{{ .QueryLog[0][0].content.__TAG__.namespace }}"
}
```
         * @type {string || null}
         */
        this.Body = null;

        /**
         * HTTP request header field for callbacks.
For example, the following request header field informs the server request content type is JSON.
```
"Content-Type: application/json"
```
         * @type {Array.<string> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * ModifyNetworkApplication request structure.
 * @class
 */
class ModifyNetworkApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Web application id</p>
         * @type {string || null}
         */
        this.NetworkAppId = null;

        /**
         * <p>Network application name: Length not exceeding 64 characters, name must be unique.</p><ul><li>Can only contain the following characters:<ul><li>Letters (a-z and A-Z)</li><li>Numbers</li><li>Underscore</li><li>Hyphen (minus sign)</li><li>Chinese characters</li></ul></li><li>At least one character</li><li>Cannot contain spaces</li><li>Cannot contain other special characters (such as @, #, $, % etc.)</li></ul>
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
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeHostMetricConfigs request structure.
 * @class
 */
class DescribeHostMetricConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * -configId - String - required: no - filter by [configId].
-Filter the name by [configuration name]. Type: String. Required: No.

Each request can have up to 10 Filters. The upper limit of Filter.Values is 10.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * SplitPartition response structure.
 * @class
 */
class SplitPartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Split result set
         * @type {Array.<PartitionInfo> || null}
         */
        this.Partitions = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new PartitionInfo();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarm Classification Information
 * @class
 */
class AlarmClassification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Classification Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Classification Value
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
 * Alarm channel callback configuration information.
 * @class
 */
class WebCallbackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm channel callback configuration ID.
         * @type {string || null}
         */
        this.WebCallbackId = null;

        /**
         * Alarm channel callback configuration name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel type

WeCom: WeCom; DingTalk: DingTalk; Lark: Lark; Http: Custom Callback;
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Callback URL.
         * @type {string || null}
         */
        this.Webhook = null;

        /**
         * Request method.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Key information.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Root account.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-account.
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Creation time. A timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update time. A timestamp in seconds.
         * @type {number || null}
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
        this.WebCallbackId = 'WebCallbackId' in params ? params.WebCallbackId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Webhook = 'Webhook' in params ? params.Webhook : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateLogset response structure.
 * @class
 */
class CreateLogsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHostMetricConfig request structure.
 * @class
 */
class ModifyHostMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Collection configuration ID.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Name

-Length not exceeding 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Machine group id list. Supports up to 100 machine groups.
         * @type {Array.<string> || null}
         */
        this.MachineGroupIds = null;

        /**
         * Collection frequency. Unit: ms. Minimum support 5000 ms.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Collection items. Support "cpu", "mem", "net", "disk", "system". **Currently only support: ALL collection items require configuration**.
- cpu:CPU
-mem: memory
-net: Network
-disk
-system

         * @type {Array.<HostMetricItem> || null}
         */
        this.HostMetricItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MachineGroupIds = 'MachineGroupIds' in params ? params.MachineGroupIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.HostMetricItems) {
            this.HostMetricItems = new Array();
            for (let z in params.HostMetricItems) {
                let obj = new HostMetricItem();
                obj.deserialize(params.HostMetricItems[z]);
                this.HostMetricItems.push(obj);
            }
        }

    }
}

/**
 * Dashboard subscription notification method
 * @class
 */
class DashboardNoticeMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard notification method.

-Uin: Tencent Cloud user
-Group: Tencent Cloud user group
-WeCom: wecom callback
-Email: Custom email
-DingTalk
-Lark
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * Value of the known method.
-When ReceiverType is `WeCom`, `DingTalk`, or `Lark`, Values must be empty and the Url field is required.
-When ReceiverType is `Uin`, `Group`, or `Email`, the Values field is required and the Url field must be empty.
-When ReceiverType is `Uin`, Values is the user id. Obtain the sub-user UID by [querying sub-users](https://www.tencentcloud.com/document/product/598/34587?from_cn_redirect=1).
-When ReceiverType is `Group`, Values is the user Group id. Obtain user Group id by querying the user Group list (https://www.tencentcloud.com/document/product/598/34589?from_cn_redirect=1).
-When ReceiverType is `Email`, Values is the user email info.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Dashboard notification channel.

-Support: ["Email","Sms","WeChat","Phone"].
-When ReceiverType is `Email` or `WeCom`, ReceiverChannels is invalid.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ReceiverChannels = null;

        /**
         * Subscription method - Callback URL.
-When ReceiverType is `WeCom`, `DingTalk`, or `Lark`, the Url field is required as the callback URL of each channel.
-When the value is `WeCom`, the Url is the enterprise wechat callback address.
-When the value is `DingTalk`, Url is the chatbot Webhook address.
-When `Lark`, Url is the chatbot Webhook address.
-When ReceiverType is `Uin`, `Group`, or `Email`, the Url field must be empty.
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
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.ReceiverChannels = 'ReceiverChannels' in params ? params.ReceiverChannels : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Kafka access protocol
 * @class
 */
class KafkaProtocolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol type. Supported protocol types include plaintext, sasl_plaintext, or sasl_ssl. Recommend using sasl_ssl. Protocol enables encrypted connection and also requires user authentication.

-Protocol is required when IsEncryptionAddr is true.
-Supported protocol types are as follows:
-plaintext: Plaintext without encryption protocol
-sasl_ssl: sasl authentication + ssl encryption
-ssl: Pure ssl/TLS encryption protocol
-sasl_plaintext: SASL authentication + unencrypted tunnel

         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Encryption type, supports PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.

-Mechanism is required when Protocol is `sasl_plaintext` or `sasl_ssl`.
-Supported encryption types are as follows.
-PLAIN: plaintext authentication
-SCRAM-SHA-256: Based on challenge-response mechanism, uses PBKDF2-HMAC-SHA256 algorithm.
-SCRAM-SHA-512: Enhanced SCRAM that uses the PBKDF2-HMAC-SHA512 algorithm.
         * @type {string || null}
         */
        this.Mechanism = null;

        /**
         * Username.
Required when Protocol is sasl_plaintext or sasl_ssl
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User password.
Required when Protocol is sasl_plaintext or sasl_ssl
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Mechanism = 'Mechanism' in params ? params.Mechanism : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyAlarmShield response structure.
 * @class
 */
class ModifyAlarmShieldResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateCosRecharge request structure.
 * @class
 */
class CreateCosRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.

-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * FL instance set ID.

-Obtain the logset Id by searching the [logset list](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * COS import task name, supports up to 128 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * COS bucket, see the supported [bucket naming conventions](https://www.tencentcloud.com/document/product/436/13312?from_cn_redirect=1).	

-Get COS buckets via [GET Service (List Buckets)](https://www.tencentcloud.com/document/product/436/8291?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The region where the COS bucket is located, see the supported [region list](https://intl.cloud.tencent.com/document/product/436/6224?from_cn_redirect=1).
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * The type of log collected. `json_log`: JSON logs; `delimiter_log`: separator logs; `minimalist_log`: full text in a single line
Default value: `minimalist_log`
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * The prefix of the folder where COS files are located. By default, it is null, meaning that all files under the bucket will be shipped.
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Valid values: supported: "", "gzip", "lzop", "snappy"; Default value: ""; no compression.
         * @type {string || null}
         */
        this.Compress = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRuleInfo = null;

        /**
         * COS import task type. Valid values: 1: one-time import task (default value); 2: continuous import task.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Metadata.
         * @type {Array.<string> || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.Compress = 'Compress' in params ? params.Compress : null;

        if (params.ExtractRuleInfo) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRuleInfo)
            this.ExtractRuleInfo = obj;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * ChatCompletions response structure.
 * @class
 */
class ChatCompletionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Unix timestamp, in seconds.</p>
         * @type {number || null}
         */
        this.Created = null;

        /**
         * <p>Token statistical information.</p>
         * @type {ChatUsage || null}
         */
        this.Usage = null;

        /**
         * <p>Id of the current request.</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>Reply content.</p>
         * @type {Array.<Choice> || null}
         */
        this.Choices = null;

        /**
         * <p>Feature name</p><p>Enumeration value:</p><ul><li>text2sql: Intelligent generation of retrieval analysis statement</li><li>text2sql-reasoning: Intelligent generation of retrieval analysis statement - deep thinking</li></ul>
         * @type {string || null}
         */
        this.Model = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem. As a streaming response API, when the request is successfully completed, the RequestId will be placed in the Header "X-TC-RequestId" of the HTTP response.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Created = 'Created' in params ? params.Created : null;

        if (params.Usage) {
            let obj = new ChatUsage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Choices) {
            this.Choices = new Array();
            for (let z in params.Choices) {
                let obj = new Choice();
                obj.deserialize(params.Choices[z]);
                this.Choices.push(obj);
            }
        }
        this.Model = 'Model' in params ? params.Model : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNoticeContents response structure.
 * @class
 */
class DescribeNoticeContentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content template list.
         * @type {Array.<NoticeContentTemplate> || null}
         */
        this.NoticeContents = null;

        /**
         * Total number of notification content templates that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NoticeContents) {
            this.NoticeContents = new Array();
            for (let z in params.NoticeContents) {
                let obj = new NoticeContentTemplate();
                obj.deserialize(params.NoticeContents[z]);
                this.NoticeContents.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAlarmShield response structure.
 * @class
 */
class CreateAlarmShieldResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocking Rule ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumer request structure.
 * @class
 */
class DescribeConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id bound to the delivery task.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * ModifyConsumer request structure.
 * @class
 */
class ModifyConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id bound to the delivery task.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Whether the shipping task takes effect (default: no)
         * @type {boolean || null}
         */
        this.Effective = null;

        /**
         * Whether to deliver log Metadata information; the default is true.When NeedContent is true: Content field is valid.When NeedContent is false: Content field is invalid.
         * @type {boolean || null}
         */
        this.NeedContent = null;

        /**
         * Metadata to ship if `NeedContent` is `true`
         * @type {ConsumerContent || null}
         */
        this.Content = null;

        /**
         * CKafka information
         * @type {Ckafka || null}
         */
        this.Ckafka = null;

        /**
         * Compression method during delivery. Valid values: 0, 2, and 3. [0: NONE; 2: SNAPPY; 3: LZ4]
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * ARN [Create role](https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1)
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * external ID
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * Advanced configuration
         * @type {AdvancedConsumerConfiguration || null}
         */
        this.AdvancedConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Effective = 'Effective' in params ? params.Effective : null;
        this.NeedContent = 'NeedContent' in params ? params.NeedContent : null;

        if (params.Content) {
            let obj = new ConsumerContent();
            obj.deserialize(params.Content)
            this.Content = obj;
        }

        if (params.Ckafka) {
            let obj = new Ckafka();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }
        this.Compression = 'Compression' in params ? params.Compression : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

        if (params.AdvancedConfig) {
            let obj = new AdvancedConsumerConfiguration();
            obj.deserialize(params.AdvancedConfig)
            this.AdvancedConfig = obj;
        }

    }
}

/**
 * ModifyMetricConfig request structure.
 * @class
 */
class ModifyMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Metric collection configuration ID.
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Collection configuration source. Support: `0`, `1`.
-Self-built k8s
- 1:TKE
         * @type {number || null}
         */
        this.Source = null;

        /**
         * Machine group ID.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Operation status. Valid values: 0: applied; 1: paused.
         * @type {number || null}
         */
        this.Operate = null;

        /**
         * Collection object. This parameter is valid only when Flag is 0.
         * @type {MetricSpec || null}
         */
        this.Spec = null;

        /**
         * Label processing. This parameter is valid only when Flag is 0.
         * @type {Array.<Relabeling> || null}
         */
        this.MetricRelabels = null;

        /**
         * Custom metadata. This parameter is valid only when Flag is 0.
         * @type {MetricConfigLabel || null}
         */
        this.MetricLabel = null;

        /**
         * Communication protocol. Valid values: HTTP and HTTPS. This parameter is valid only when Flag is 0.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Collection frequency. This parameter is valid only when Flag=0.
-Check format: `^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`
-Default: 60s
         * @type {string || null}
         */
        this.ScrapeInterval = null;

        /**
         * Collection timeout. This parameter is valid only when Flag=0.
-Check format: `^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`
         * @type {string || null}
         */
        this.ScrapeTimeout = null;

        /**
         * How Prometheus handles tag conflicts. This parameter is valid only when Flag=0 && Type=1 and supports `true`, `false`.
-`false`: Rename conflicting tags in configuration data
-`true`: Ignore server-side tag conflicts
         * @type {boolean || null}
         */
        this.HonorLabels = null;

        /**
         * Collection configuration, which is a string in YAML format. It is required when Flag is 1.
         * @type {MetricYamlSpec || null}
         */
        this.YamlSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

        if (params.Spec) {
            let obj = new MetricSpec();
            obj.deserialize(params.Spec)
            this.Spec = obj;
        }

        if (params.MetricRelabels) {
            this.MetricRelabels = new Array();
            for (let z in params.MetricRelabels) {
                let obj = new Relabeling();
                obj.deserialize(params.MetricRelabels[z]);
                this.MetricRelabels.push(obj);
            }
        }

        if (params.MetricLabel) {
            let obj = new MetricConfigLabel();
            obj.deserialize(params.MetricLabel)
            this.MetricLabel = obj;
        }
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.ScrapeInterval = 'ScrapeInterval' in params ? params.ScrapeInterval : null;
        this.ScrapeTimeout = 'ScrapeTimeout' in params ? params.ScrapeTimeout : null;
        this.HonorLabels = 'HonorLabels' in params ? params.HonorLabels : null;

        if (params.YamlSpec) {
            let obj = new MetricYamlSpec();
            obj.deserialize(params.YamlSpec)
            this.YamlSpec = obj;
        }

    }
}

/**
 * ModifyDashboardSubscribe request structure.
 * @class
 */
class ModifyDashboardSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription id. Obtain the id through the [Get Dashboard Subscription List](https://www.tencentcloud.com/document/api/614/105779?from_cn_redirect=1) api.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Dashboard id. Obtain the DashboardId through the [Get Dashboard](https://www.tencentcloud.com/document/api/614/95636?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * Dashboard subscription name. Supports a maximum of 128 characters and does not support the '|' character.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subscription time cron expression, in format {seconds} {minutes} {hours} {date} {month} {weekday}; (valid data: {minutes} {hours} {date} {month} {weekday})
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * Dashboard subscription data.
         * @type {DashboardSubscribeData || null}
         */
        this.SubscribeData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

        if (params.SubscribeData) {
            let obj = new DashboardSubscribeData();
            obj.deserialize(params.SubscribeData)
            this.SubscribeData = obj;
        }

    }
}

/**
 * Index rebuild task information
 * @class
 */
class RebuildIndexTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reindexing task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Current status of the reindexing task. 0: reindexing task created; 1: creating reindexing resources; 2: reindexing resources created; 3: reindexing; 4: paused; 5: reindexing completed; 6: reindexing succeeded (searchable); 7: reindexing failed; 8: revoked; 9: deleting the metadata and index.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Start timestamp of the reindexing task
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Rebuild task end timestamp
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Estimated remaining time for reshipping, in seconds
         * @type {number || null}
         */
        this.RemainTime = null;

        /**
         * Rebuild task creation timestamp
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Re-shipping completion degree, in percentages.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Update time of the reindexing task
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Additional status description. Currently, it only describes the reason for failure.
         * @type {string || null}
         */
        this.StatusMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RemainTime = 'RemainTime' in params ? params.RemainTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;

    }
}

/**
 * CreateDashboardSubscribe request structure.
 * @class
 */
class CreateDashboardSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription name.
Input limit:
-Cannot be empty
-Length cannot exceed 128 bytes
-Cannot contain character '|'
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dashboard Id.
-Get the dashboard Id by [searching for the dashboard](https://www.tencentcloud.com/document/product/614/95636?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * Subscription time cron expression, in format {seconds} {minutes} {hours} {date} {month} {weekday}; (valid data: {minutes} {hours} {date} {month} {weekday})
-{seconds} Value ranges from 0 to 59. 
-{Minutes} Value ranges from 0 to 59. 
-Hour. Value ranges from 0 to 23. 
-{Date} value ranges from 1 to 31 AND (last day of month: L) 
-{Month} value ranges from 1 to 12. 
-Week value ranges from 0 to 6 [0:Sunday, 6:Saturday]
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * Dashboard subscription data.
         * @type {DashboardSubscribeData || null}
         */
        this.SubscribeData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

        if (params.SubscribeData) {
            let obj = new DashboardSubscribeData();
            obj.deserialize(params.SubscribeData)
            this.SubscribeData = obj;
        }

    }
}

/**
 * Full-Text index configuration
 * @class
 */
class FullTextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Separator of the full-text index. Each character represents a separator.
Only symbols, \n\t\r, and escape character \ are supported.
Note: \n\t\r can be directly enclosed in double quotes as the input parameter without escaping. When debugging with API Explorer, use the JSON parameter input method to avoid repeated escaping of \n\t\r.
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * Whether Chinese characters are contained
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DescribeConfigMachineGroups response structure.
 * @class
 */
class DescribeConfigMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of machine groups bound to the collection rule configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySplunkDeliver request structure.
 * @class
 */
class ModifySplunkDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>log topic id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>The delivery task name has the following restrictions: - Cannot be empty - Length not greater than 256 - Can only contain aA-zZ, underscore, -, 0-9</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task enable status. Valid values: 0: disabled; 1: enabled.</p>
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * <p>splunk delivery task - target configuration</p>
         * @type {NetInfo || null}
         */
        this.NetInfo = null;

        /**
         * <p>splunk delivery task meta information</p>
         * @type {MetadataInfo || null}
         */
        this.MetadataInfo = null;

        /**
         * <p>Whether to enable the service log; 1: Disabled; 2: Enabled</p>
         * @type {number || null}
         */
        this.HasServiceLog = null;

        /**
         * <p>Advanced configuration - Whether to enable the indexer;<br>1 - Disable; 2 - Enable; Default: 1</p>
         * @type {number || null}
         */
        this.IndexAck = null;

        /**
         * <p>Advanced configuration - data source; no more than 64 characters</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Advanced configuration - data source type; no more than 64 characters</p>
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * <p>Advanced configuration - Indexes written to Splunk; no more than 64 characters</p>
         * @type {string || null}
         */
        this.Index = null;

        /**
         * <p>Advanced configuration - Channel.<br>To meet the limitation: If the indexer is enabled, the value cannot be empty.</p>
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * <p>Pre-filtering process - filter out original data before writing to Splunk</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

        /**
         * <p>Advanced configuration - Cross-account delivery user role authorization information</p><p>For reference: <a href="https://console.cloud.tencent.com/cam/role/create?payloadType=account">Create custom role</a></p>
         * @type {ExternalRole || null}
         */
        this.ExternalRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.NetInfo) {
            let obj = new NetInfo();
            obj.deserialize(params.NetInfo)
            this.NetInfo = obj;
        }

        if (params.MetadataInfo) {
            let obj = new MetadataInfo();
            obj.deserialize(params.MetadataInfo)
            this.MetadataInfo = obj;
        }
        this.HasServiceLog = 'HasServiceLog' in params ? params.HasServiceLog : null;
        this.IndexAck = 'IndexAck' in params ? params.IndexAck : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

        if (params.ExternalRole) {
            let obj = new ExternalRole();
            obj.deserialize(params.ExternalRole)
            this.ExternalRole = obj;
        }

    }
}

/**
 * Keywords that meet search criteria are generally highlighted. Only key-value search is supported, not full-text search.
 * @class
 */
class HighLightItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Highlighted log field name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Highlighted keywords.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Import es configuration info
 * @class
 */
class EsRechargeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Main account id.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * es index.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Elasticsearch Query Statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * es cluster information.
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * es import information.
         * @type {EsImportInfo || null}
         */
        this.ImportInfo = null;

        /**
         * ES import time configuration message.
         * @type {EsTimeInfo || null}
         */
        this.TimeInfo = null;

        /**
         * Task status.
1. Running
Suspend
3. Complete
4. Exception
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task progress 0-100 percentage. 100: means done.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Sub-account id.
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Modify the time.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.ImportInfo) {
            let obj = new EsImportInfo();
            obj.deserialize(params.ImportInfo)
            this.ImportInfo = obj;
        }

        if (params.TimeInfo) {
            let obj = new EsTimeInfo();
            obj.deserialize(params.TimeInfo)
            this.TimeInfo = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * CreateMetricSubscribe request structure.
 * @class
 */
class CreateMetricSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name. It can contain a maximum of 64 characters and should start with a letter. Digits (0-9), uppercase letters (A-Z), lowercase letters (a-z), underscores (_), and Chinese characters are allowed.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log topic ID.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Cloud product namespace.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Database configuration information.
         * @type {Array.<MetricConfig> || null}
         */
        this.Metrics = null;

        /**
         * Instance configuration.
         * @type {InstanceConfig || null}
         */
        this.InstanceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricConfig();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

        if (params.InstanceInfo) {
            let obj = new InstanceConfig();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }

    }
}

/**
 * Notification content template information.
 * @class
 */
class NoticeContentTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content template ID.
         * @type {string || null}
         */
        this.NoticeContentId = null;

        /**
         * notification content template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Language type.

0: Chinese
1: English
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Notification content template information.
         * @type {Array.<NoticeContent> || null}
         */
        this.NoticeContents = null;

        /**
         * Notification content template tag.

0: user-customized
1: Built-in
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * Root account of a creator.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-account of a creator or modifier.
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Creation time. A timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update time. A timestamp in seconds.
         * @type {number || null}
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
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeContents) {
            this.NoticeContents = new Array();
            for (let z in params.NoticeContents) {
                let obj = new NoticeContent();
                obj.deserialize(params.NoticeContents[z]);
                this.NoticeContents.push(obj);
            }
        }
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Key-Value pair in log
 * @class
 */
class LogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Log value
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
 * DescribeConfigMachineGroups request structure.
 * @class
 */
class DescribeConfigMachineGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection Configuration ID
-Obtain the collection configuration Id by accessing the collection rule configuration (https://www.tencentcloud.com/document/product/614/58616?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DescribeMetricSubscribePreview request structure.
 * @class
 */
class DescribeMetricSubscribePreviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud product namespace.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Database configuration information.
         * @type {Array.<MetricConfig> || null}
         */
        this.Metrics = null;

        /**
         * Instance configuration.
         * @type {InstanceConfig || null}
         */
        this.InstanceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricConfig();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

        if (params.InstanceInfo) {
            let obj = new InstanceConfig();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }

    }
}

/**
 * DeleteConsumer response structure.
 * @class
 */
class DeleteConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeTopics request structure.
 * @class
 */
class DescribeTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <ul><li>Filter topicName by [topic name]. The default is fuzzy matching. You can set the PreciseSearch parameter to exact match. Type: String. Required: No</li>
<li>logsetName filters by [logset name], defaults to fuzzy matching, and can be set to exact match using the PreciseSearch parameter. Type: String. Required: No</li>
<li>topicId filters by [topic ID]. Type: String. Required: No</li>
<li>logsetId filters by [logset ID]. You can call the <a href="https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1">DescribeLogsets</a> API to query the list of created logsets or log in to the console to view. You can also call the <a href="https://www.tencentcloud.com/document/product/614/58626?from_cn_redirect=1">CreateLogset</a> API to create logset. Type: String. Required: No</li>
<li>tagKey Filter by [tag key]. Type: String. Required: No</li>
<li>tag:tagKey - filter by [tag key-value pair]. Replace tagKey with a specific tag key, such as tag:exampleKey. Type: String. Required: no</li>
<li>storageType filters by [storage type of the topic]. Value range: hot (standard storage), cold (infrequent storage). Type: String. Required: No</li></ul>
Note: Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Control whether the related fields in Filters are exact matches.
<ul><li>0: Default value. topicName and logsetName use fuzzy matching</li>
<li>1: topicName   Exact match</li>
<li>2: Exact match by logsetName</li>
<li>3: Exact match by both topicName and logsetName</li></ul>
         * @type {number || null}
         */
        this.PreciseSearch = null;

        /**
         * Topic type
-0: Log topic, default value
-Metric topic
         * @type {number || null}
         */
        this.BizType = null;

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
        this.PreciseSearch = 'PreciseSearch' in params ? params.PreciseSearch : null;
        this.BizType = 'BizType' in params ? params.BizType : null;

    }
}

/**
 * ModifySplunkDeliver response structure.
 * @class
 */
class ModifySplunkDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * RetryShipperTask request structure.
 * @class
 */
class RetryShipperTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping Rule Id.

-Obtain the ShipperId by [obtaining the shipping task list](https://www.tencentcloud.com/document/product/614/58745?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Delivery task Id.

-Obtain the TaskId by searching the shipping task list (https://www.tencentcloud.com/document/product/614/58745?from_cn_redirect=1).
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeleteCosRecharge request structure.
 * @class
 */
class DeleteCosRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS import configuration Id.
-Get the cos import configuration Id by [searching for the cos import configuration](https://www.tencentcloud.com/document/product/614/88099?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Log topic Id.
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/api/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * CreateHostMetricConfig request structure.
 * @class
 */
class CreateHostMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Topic id
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note: BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name

-Length not exceeding 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Machine group id list. Supports up to 100 machine groups.
         * @type {Array.<string> || null}
         */
        this.MachineGroupIds = null;

        /**
         * Collection frequency. Unit: ms. Minimum support 5000 ms.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Collection items. Support "cpu", "mem", "net", "disk", "system". **Currently only support: ALL collection items require configuration**.
- cpu:CPU
-mem: memory
-net: Network
-disk
-system
         * @type {Array.<HostMetricItem> || null}
         */
        this.HostMetricItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MachineGroupIds = 'MachineGroupIds' in params ? params.MachineGroupIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.HostMetricItems) {
            this.HostMetricItems = new Array();
            for (let z in params.HostMetricItems) {
                let obj = new HostMetricItem();
                obj.deserialize(params.HostMetricItems[z]);
                this.HostMetricItems.push(obj);
            }
        }

    }
}

/**
 * DataSight Access Control Rule
 * @class
 */
class AccessControlRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Network segment or IP, support IPv4 or IPv6.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CidrBlocks = null;

        /**
         * <p>ACCEPT or DROP.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * <p>Access method: public - public network, internal - private network</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CidrBlocks = 'CidrBlocks' in params ? params.CidrBlocks : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;

    }
}

/**
 * ModifyWebCallback response structure.
 * @class
 */
class ModifyWebCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyCloudProductLogCollection response structure.
 * @class
 */
class ModifyCloudProductLogCollectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteConsumer request structure.
 * @class
 */
class DeleteConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id bound to the delivery task.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Metric subscription configuration information.
 * @class
 */
class MetricSubscribeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Log topic ID.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Subscription task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cloud product namespace.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric configuration information.
         * @type {Array.<MetricConfig> || null}
         */
        this.Metrics = null;

        /**
         * Instance configuration information.
         * @type {InstanceConfig || null}
         */
        this.InstanceInfo = null;

        /**
         * Subscription task switch. Valid values: 1: paused; 2: enabled.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Subscription task running status. Valid values: 0 creating; 1: paused; 2: running; 3: abnormal.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Error information occurred when a subscription task runs abnormally.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Creation time (timestamp in seconds)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update time (second-level timestamp)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricConfig();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

        if (params.InstanceInfo) {
            let obj = new InstanceConfig();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateNetworkApplication response structure.
 * @class
 */
class CreateNetworkApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Web application id</p>
         * @type {string || null}
         */
        this.NetworkAppId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIndex request structure.
 * @class
 */
class DeleteIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeRecordingRuleTask request structure.
 * @class
 */
class DescribeRecordingRuleTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source metric topic id.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Maximum number of entries per page. Default value: 20. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li>yamlId [Configuration ID of the associated yaml] for filtering, fuzzy matching. Type: String. Required: No</li> <li>taskName [Task name] for filtering, fuzzy matching. Type: String. Required: No</li> <li>taskId [Task ID] for filtering, fuzzy matching. Type: String. Required: No</li>
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
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
 * DescribeAlertRecordHistory request structure.
 * @class
 */
class DescribeAlertRecordHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query time range, unix timestamp in milliseconds (ms)
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of query time range, unix timestamp in milliseconds (ms)
         * @type {number || null}
         */
        this.To = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * - alertId: Filter by alarm policy ID. Type: String; optional
- topicId: Filter by ID of monitored object. Type: String; optional
- status: Filter by alarm status. Type: String, optional. Valid values: `0` (uncleared), `1` (cleared), `2` (expired)
- alarmLevel: Filter by alarm severity. Type: String, optional. Valid values: `0` (Warn), `1` (Info), `2` (Critical)

Each request can have up to 10 `Filters` and 100 `Filter.Values`.
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
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
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
 * ChatCompletions request structure.
 * @class
 */
class ChatCompletionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Feature name</p><p>Enumeration value:</p><ul><li>text2sql: Intelligent generation of retrieval analysis statement</li><li>text2sql-reasoning: Intelligent generation of retrieval analysis statement - deep thinking</li></ul>
         * @type {string || null}
         */
        this.Model = null;

        /**
         * <p>Chat context information.<br>Description:</p><ol><li>The maximum length is 11 (5 historical sessions + new user question), arranged in the array in chronological order from old to new. Session data beyond this length will be discarded.</li><li>Message.Role available values: user, assistant.<br>user and assistant must alternate, starting with a user question and ending with a user question. Content cannot be empty. Example of Role order: [user assistant user assistant user ...].</li></ol>
         * @type {Array.<Message> || null}
         */
        this.Messages = null;

        /**
         * <p>Streaming call switch.<br>Description:</p><ol><li>Defaults to non-streaming call (false) when no value is passed.</li><li>In streaming calls, results are incrementally returned via SSE protocol (return value is taken from Choices[n].Delta, and incremental data needs to be concatenated to obtain the complete result).</li><li>In non-streaming calls:<br>The calling method is the same as a regular HTTP request.<br>API response is time-consuming. If reduced latency is needed, set it to true.<br>Only the final result is returned once (return value is taken from Choices[n].Message).</li></ol><p>Note:</p><ol><li>When calling via SDK, streaming and non-streaming calls require different ways to obtain return values. Refer to comments or examples in the SDK (in the examples/cls/v20201016/ directory of each language SDK code repository).</li><li>Partial content may have been output, but if the FinishReason value in an intermediate response is "sensitive", it indicates the security review was not passed. If the business scenario requires real-time text display on the screen, manually withdraw the displayed content and customize a replacement reminder, such as "I can't answer this question. Let's try another topic", to ensure terminal experience.</li></ol>
         * @type {boolean || null}
         */
        this.Stream = null;

        /**
         * <p>Additional metadata information. For example: [{"Key":"topic_id","Value":"xxxxxxxx-xxxx"},{"Key":"topic_region","Value":"ap-guangzhou"}]</p><p>It is recommended to transmit metadata information as per the example, otherwise it may cause inaccurate results. For example, in text2sql, not passing topic_id or topic_region will lead to unable to generate accurate query statements based on the log topic index.</p>
         * @type {Array.<MetadataItem> || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Model = 'Model' in params ? params.Model : null;

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new Message();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.Stream = 'Stream' in params ? params.Stream : null;

        if (params.Metadata) {
            this.Metadata = new Array();
            for (let z in params.Metadata) {
                let obj = new MetadataItem();
                obj.deserialize(params.Metadata[z]);
                this.Metadata.push(obj);
            }
        }

    }
}

/**
 * DeleteNetworkApplication request structure.
 * @class
 */
class DeleteNetworkApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Web application id.</p>
         * @type {string || null}
         */
        this.NetworkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;

    }
}

/**
 * Logset information
 * @class
 */
class LogsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Creation time. Format `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * If AssumerUin is not empty, it indicates the Uin of the service provider that created the log set.
         * @type {number || null}
         */
        this.AssumerUin = null;

        /**
         * Cloud product identifier. When the logset is created by other cloud products, this field displays the cloud product name, such as CDN and TKE.
         * @type {string || null}
         */
        this.AssumerName = null;

        /**
         * Tag bound to log set
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Number of log topics in logset
         * @type {number || null}
         */
        this.TopicCount = null;

        /**
         * If `AssumerName` is not empty, it indicates the service provider who creates the logset.
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * Number of metric topics under log sets
         * @type {number || null}
         */
        this.MetricTopicCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AssumerUin = 'AssumerUin' in params ? params.AssumerUin : null;
        this.AssumerName = 'AssumerName' in params ? params.AssumerName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TopicCount = 'TopicCount' in params ? params.TopicCount : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.MetricTopicCount = 'MetricTopicCount' in params ? params.MetricTopicCount : null;

    }
}

/**
 * CreateExport request structure.
 * @class
 */
class CreateExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Number of logs to be exported. Maximum value: 50 million
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Search statements for log export. <a href="https://intl.cloud.tencent.com/document/product/614/44061?from_cn_redirect=1" target="_blank">[SQL statements]</a> are not supported.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Start time of the log to be exported, which is a timestamp in milliseconds
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of the log to be exported, which is a timestamp in milliseconds
         * @type {number || null}
         */
        this.To = null;

        /**
         * Exported log sorting order by time. Valid values: `asc`: ascending; `desc`: descending. Default value: `desc`
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Exported log data format. Valid values: `json`, `csv`. Default value: `json`
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Syntax rules; the default value is 0.0: Lucene syntax; 1: CQL syntax.
         * @type {number || null}
         */
        this.SyntaxRule = null;

        /**
         * Export fields
         * @type {Array.<string> || null}
         */
        this.DerivedFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;
        this.DerivedFields = 'DerivedFields' in params ? params.DerivedFields : null;

    }
}

/**
 * Dashboard subscription template variable
 * @class
 */
class DashboardTemplateVariable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key value
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Corresponding values of the key
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * CancelRebuildIndexTask request structure.
 * @class
 */
class CancelRebuildIndexTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Reindexing task ID
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeLogsets response structure.
 * @class
 */
class DescribeLogsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Logset list
         * @type {Array.<LogsetInfo> || null}
         */
        this.Logsets = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Logsets) {
            this.Logsets = new Array();
            for (let z in params.Logsets) {
                let obj = new LogsetInfo();
                obj.deserialize(params.Logsets[z]);
                this.Logsets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKafkaConsumerPreview response structure.
 * @class
 */
class DescribeKafkaConsumerPreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Network application task info
 * @class
 */
class NetworkApplicationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web application Id
         * @type {string || null}
         */
        this.NetworkAppId = null;

        /**
         * Network app name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Region code
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Log topic id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * log set id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Host Account ID
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-account ID
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Creation time, timestamp in seconds
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update time (second-level timestamp)
         * @type {number || null}
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
        this.NetworkAppId = 'NetworkAppId' in params ? params.NetworkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifySearchView request structure.
 * @class
 */
class ModifySearchViewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>View ID.</p>
         * @type {string || null}
         */
        this.ViewId = null;

        /**
         * <p>View name</p><p>Parameter format: <code>^[a-z0-9][a-z0-9_-]{1,61}[a-z0-9]$</code></p>
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * <p>View type</p><p>Enumeration value:</p><ul><li>log: Log topic</li><li>metric: Metric topic</li></ul><p>The topic information configured in the Topics field should match the ViewType.</p>
         * @type {string || null}
         */
        this.ViewType = null;

        /**
         * <p>The query view contains topics, with a maximum of 10 topics.</p>
         * @type {Array.<ViewSearchTopic> || null}
         */
        this.Topics = null;

        /**
         * <p>Description information</p>
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
        this.ViewId = 'ViewId' in params ? params.ViewId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ViewType = 'ViewType' in params ? params.ViewType : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new ViewSearchTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Callback address
 * @class
 */
class WebCallback extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback type. Valid values:
-Http (custom webhook configuration)
-WeCom
-DingTalk
-Lark
         * @type {string || null}
         */
        this.CallbackType = null;

        /**
         * Callback URL, supports a maximum of 1024 bytes.
You can also use WebCallbackId to refer to the URL in the integration configuration. At this point, please enter an empty string for this field.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Integration configuration ID. Obtain the integration configuration ID by searching the alarm channel callback configuration list (https://www.tencentcloud.com/document/product/614/115229?from_cn_redirect=1).
         * @type {string || null}
         */
        this.WebCallbackId = null;

        /**
         * Callback method. Valid values:
-POST (default value)
- PUT

Note:
-Required when CallbackType is Http. No need to specify for other callback methods.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Notification content template ID. When Default-zh is used, DefaultTemplate (Chinese) is referenced. When Default-en is used, DefaultTemplate (English) is referenced.
         * @type {string || null}
         */
        this.NoticeContentId = null;

        /**
         * Reminder type.

0: No reminder; 1: Specified individual; 2: Everyone
         * @type {number || null}
         */
        this.RemindType = null;

        /**
         * Mobile phone list.
         * @type {Array.<string> || null}
         */
        this.Mobiles = null;

        /**
         * User ID list.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * This parameter is deprecated. Please use NoticeContentId.
         * @type {Array.<string> || null}
         */
        this.Headers = null;

        /**
         * This parameter is deprecated. Please use NoticeContentId.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Body = null;

        /**
         * Serial number.
-Invalid input parameter.
-Output parameter is valid.
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackType = 'CallbackType' in params ? params.CallbackType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.WebCallbackId = 'WebCallbackId' in params ? params.WebCallbackId : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;
        this.RemindType = 'RemindType' in params ? params.RemindType : null;
        this.Mobiles = 'Mobiles' in params ? params.Mobiles : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.Headers = 'Headers' in params ? params.Headers : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.Index = 'Index' in params ? params.Index : null;

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
         * Alarm template ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopic response structure.
 * @class
 */
class ModifyTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateConfig request structure.
 * @class
 */
class CreateConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * collection configuration name
-Names do not contain special characters
- Name can be up to 255 characters, exceeding which will be truncated
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log topic ID to which the collection configuration belongs, i.e., topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Log collection path, which contains the file name. Multiple paths are supported and should be separated by English commas. It is required for file collection.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The collected log type, default is minimalist_log. Supports the following types:- json_log: JSON File Log (For more information, see [Using JSON pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17419?from_cn_redirect=1));- delimiter_log: Delimiter - File Logs (For more information, see [Using delimiter pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17420?from_cn_redirect=1));- minimalist_log: Single-line Full-text File Log (For more information, see [Using single-line full-text pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17421?from_cn_redirect=1));- fullregex_log: Single line full regular expression - File log (For more information, see [Using single-line - complete regular expression pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/52365?from_cn_redirect=1));- multiline_log: Multiline Full-text File Log (For more information, see [Using multi-line full-text pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/17422?from_cn_redirect=1));- multiline_fullregex_log: Multi-line complete regular expression - File Logs (For more information, see [Using multi-line - complete regular expression pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/52366?from_cn_redirect=1));- user_define_log: Combined parsing (Suitable for logs with multiple nested formats, see [Using combined parsing pattern to collect logs](https://intl.cloud.tencent.com/document/product/614/61310?from_cn_redirect=1));- service_syslog: syslog collection (For more information, see [Collect Syslog](https://intl.cloud.tencent.com/document/product/614/81454?from_cn_redirect=1));- windows_event_log: Windows event log (see [Collecting Windows Event Logs](https://intl.cloud.tencent.com/document/product/614/96678?from_cn_redirect=1)).
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Extraction rule. If `ExtractRule` is set, `LogType` must be set.
         * @type {ExtractRuleInfo || null}
         */
        this.ExtractRule = null;

        /**
         * Collection path blocklist
         * @type {Array.<ExcludePathInfo> || null}
         */
        this.ExcludePaths = null;

        /**
         * Custom collection rules, serialized JSON string. Required when LogType is user_define_log.
         * @type {string || null}
         */
        this.UserDefineRule = null;

        /**
         * Advanced collection configuration. A JSON string, Key/Value definition as follows:- ClsAgentFileTimeout (timeout property), value range: an integer greater than or equal to 0, where 0 means no timeout.- ClsAgentMaxDepth (maximum directory depth), value range: an integer greater than or equal to 0.- `ClsAgentParseFailMerge` (Merge Parsing Failure Log), value range: true or false
Sample:`{\"ClsAgentFileTimeout\":0,\"ClsAgentMaxDepth\":10,\"ClsAgentParseFailMerge\":true}`

Default placeholder value in console: `{\"ClsAgentDefault\":0}`
         * @type {string || null}
         */
        this.AdvancedConfig = null;

        /**
         * Log input type (<span style="color:red; font-weight:bold">Note: Required for Windows scenario and only supports file and windows_event type</span>)
-file type collection
-windows event collection
-syslog: System log collection
         * @type {string || null}
         */
        this.InputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

        if (params.ExtractRule) {
            let obj = new ExtractRuleInfo();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

        if (params.ExcludePaths) {
            this.ExcludePaths = new Array();
            for (let z in params.ExcludePaths) {
                let obj = new ExcludePathInfo();
                obj.deserialize(params.ExcludePaths[z]);
                this.ExcludePaths.push(obj);
            }
        }
        this.UserDefineRule = 'UserDefineRule' in params ? params.UserDefineRule : null;
        this.AdvancedConfig = 'AdvancedConfig' in params ? params.AdvancedConfig : null;
        this.InputType = 'InputType' in params ? params.InputType : null;

    }
}

/**
 * DeleteEsRecharge response structure.
 * @class
 */
class DeleteEsRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeNetworkApplications request structure.
 * @class
 */
class DescribeNetworkApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Filter items</p><ul><li><p>name<br>Filter as [task name]. Query by fuzzy matching method.<br>Type: String<br>Required: No</p></li><li><p>networkAppId<br>Filter as [web application id].<br>Type: String<br>Required: No</p></li></ul><p>The maximum number of Filters per request is 10, and the maximum number of Filter.Values is 10.</p>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Maximum number of entries per page. Default value: 20. Maximum value: 100.</p>
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
 * DescribeKafkaRecharges response structure.
 * @class
 */
class DescribeKafkaRechargesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * KafkaRechargeInfo list
         * @type {Array.<KafkaRechargeInfo> || null}
         */
        this.Infos = null;

        /**
         * Total Kafka data records imported
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new KafkaRechargeInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDlcDeliver request structure.
 * @class
 */
class ModifyDlcDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>log topic id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Task id.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Name: Length not exceeding 64 characters, starts with a letter, accepts 0-9, a-z, A-Z, _, -, Chinese character.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Delivery Type. Valid values: 0: batch delivery; 1: real-time delivery.</p>
         * @type {number || null}
         */
        this.DeliverType = null;

        /**
         * <p>Start time of the delivery time range</p>
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * <p>End time of the delivery time range. If empty, it means unlimited time.</p>
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * <p>Delivery file size in MB. Required when DeliverType=0. Valid range: 5 &lt;= MaxSize &lt;= 256.</p>
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * <p>Delivery interval in seconds. Required when DeliverType=0. Valid range: 300 &lt;= Interval &lt;= 900.</p>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * <p>dlc configuration message</p>
         * @type {DlcInfo || null}
         */
        this.DlcInfo = null;

        /**
         * <p>Whether to enable the delivery service log. 1: Disabled, 2: Enabled. Enabled by default.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * <p>Task status.</p><p>Enumeration values: </p><ul><li>1: Running, </li><li>2: Stop.</li></ul>
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.DlcInfo) {
            let obj = new DlcInfo();
            obj.deserialize(params.DlcInfo)
            this.DlcInfo = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateRecordingRuleTask request structure.
 * @class
 */
class CreateRecordingRuleTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source metric topic id</p><p>For reference:</p><ul><li><a href="https://www.tencentcloud.com/document/api/614/56454?from_cn_redirect=1">DescribeTopics</a></li><li><a href="https://console.cloud.tencent.com/cls/metric">metric topic</a></li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Target metric topic id, which can be the same as TopicId.</p>
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * <p>Pre-aggregation task name</p><p>Input parameter restrictions: Only letters, numbers, and underscores are allowed. Cannot begin with an underscore. Less than 256 characters.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task status. Valid values: 1: enabled; 2: disabled.</p>
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * <p>Execution start time, Unix timestamp.</p><p>Unit: ms.</p>
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * <p>Scheduling period (minutes). Supported range (0,1440] minutes.</p>
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * <p>Execution delay. Set it to 30 seconds to avoid inaccuracy in pre-aggregation task calculation results due to latency in metric reporting.</p><p>Unit: seconds</p>
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * <p>Execution statement (PromQL)</p>
         * @type {string || null}
         */
        this.RecordingRuleContent = null;

        /**
         * <p>Metric name</p>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * <p>Metric custom dimension</p>
         * @type {Array.<MetricLabel> || null}
         */
        this.CustomMetricLabels = null;

        /**
         * <p>Whether to enable the delivery service log. 1: Disabled, 2: Enabled.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.RecordingRuleContent = 'RecordingRuleContent' in params ? params.RecordingRuleContent : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.CustomMetricLabels) {
            this.CustomMetricLabels = new Array();
            for (let z in params.CustomMetricLabels) {
                let obj = new MetricLabel();
                obj.deserialize(params.CustomMetricLabels[z]);
                this.CustomMetricLabels.push(obj);
            }
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * Model-generated tool call
 * @class
 */
class ToolCall extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Tool call id</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>Invocation type of the tool, currently only support function</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Specific function call</p>
         * @type {ToolCallFunction || null}
         */
        this.Function = null;

        /**
         * <p>Index value</p>
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Function) {
            let obj = new ToolCallFunction();
            obj.deserialize(params.Function)
            this.Function = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DeleteCloudProductLogCollection response structure.
 * @class
 */
class DeleteCloudProductLogCollectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Enumeration value, 0 creating 1 creation completed 2 deleting 3 deletion completed</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Log export information
 * @class
 */
class ExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic ID.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Log export task ID</p>
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * <p>Query statements of log export</p>
         * @type {string || null}
         */
        this.Query = null;

        /**
         * <p>Filenames of exported logs</p>
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * <p>Log file size</p><p>Unit: Byte</p>
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * <p>Sorting of log export time</p>
         * @type {string || null}
         */
        this.Order = null;

        /**
         * <p>Log export format</p>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * <p>Number of logs to be exported</p>
         * @type {number || null}
         */
        this.Count = null;

        /**
         * <p>Log download status. Processing: export in progress, Completed: export completed, Failed: export failure, Expired: log export expired (valid for 3 days), Queuing: queuing</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Start time of log export, with a timestamp in milliseconds</p>
         * @type {number || null}
         */
        this.From = null;

        /**
         * <p>End time of log export, timestamp in milliseconds</p>
         * @type {number || null}
         */
        this.To = null;

        /**
         * <p>Log export path, valid for one hour. Please download using this path as soon as possible.</p>
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * <p>Log export creation time<br>Date and Time Formats: yyyy-MM-dd HH:mm:ss</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Syntax rule. Default value is 0.<br>0: Lucene syntax, 1: CQL syntax.</p>
         * @type {number || null}
         */
        this.SyntaxRule = null;

        /**
         * <p>Export fields</p>
         * @type {Array.<string> || null}
         */
        this.DerivedFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;
        this.DerivedFields = 'DerivedFields' in params ? params.DerivedFields : null;

    }
}

/**
 * Configuration information of a metric collection label.
 * @class
 */
class MetricConfigLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata.
support
- `namespace`
- `pod_name`
- `pod_ip`
- `pod_uid`
- `container_name`
- `container_id`
- `image_name`
- `cluster_id`
- `node_id`
- `node_ip`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Metadata = null;

        /**
         * Metadata Pod label information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AppointLabel || null}
         */
        this.Label = null;

        /**
         * Custom label information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CustomLabel> || null}
         */
        this.CustomLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

        if (params.Label) {
            let obj = new AppointLabel();
            obj.deserialize(params.Label)
            this.Label = obj;
        }

        if (params.CustomLabels) {
            this.CustomLabels = new Array();
            for (let z in params.CustomLabels) {
                let obj = new CustomLabel();
                obj.deserialize(params.CustomLabels[z]);
                this.CustomLabels.push(obj);
            }
        }

    }
}

/**
 * Dashboard subscription information
 * @class
 */
class DashboardSubscribeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Dashboard subscription name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dashboard ID.
         * @type {string || null}
         */
        this.DashboardId = null;

        /**
         * Dashboard subscription time.
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * Dashboard subscription data.
         * @type {DashboardSubscribeData || null}
         */
        this.SubscribeData = null;

        /**
         * Creation time of dashboard subscription record. Format: `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Dashboard subscription record update time. Format: `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Time sent successfully of dashboard subscription record. Format: `YYYY-MM-DD HH:MM:SS`
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * Cloud primary account ID.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Sub-account ID under coud main account.
         * @type {number || null}
         */
        this.SubUin = null;

        /**
         * Last sending status of the dashboard subscription records. success: all sent successfully; fail: not sent; partialSuccess: partially sent successfully.
         * @type {string || null}
         */
        this.LastStatus = null;

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
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

        if (params.SubscribeData) {
            let obj = new DashboardSubscribeData();
            obj.deserialize(params.SubscribeData)
            this.SubscribeData = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.LastStatus = 'LastStatus' in params ? params.LastStatus : null;

    }
}

/**
 * DescribeWebCallbacks response structure.
 * @class
 */
class DescribeWebCallbacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of alarm channel callback configurations.
         * @type {Array.<WebCallbackInfo> || null}
         */
        this.WebCallbacks = null;

        /**
         * Total number of notification content configurations that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallbackInfo();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteExport request structure.
 * @class
 */
class DeleteExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export task ID.
-Obtain the log export task Id through [Get Log Download Task List](https://www.tencentcloud.com/document/product/614/56449?from_cn_redirect=1).

         * @type {string || null}
         */
        this.ExportId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;

    }
}

/**
 * ModifyKafkaConsumerGroupOffset request structure.
 * @class
 */
class ModifyKafkaConsumerGroupOffsetRequest extends  AbstractModel {
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
 * DescribeConsoles request structure.
 * @class
 */
class DescribeConsolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of entries per page. Default value: 100. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li> DomainPrefix filters by [domain name prefix]. Type: String Required: No</li><li> ConsoleId filters by [DataSight instance ID]. Type: String Required: No</li><li> tagKey filters by [tag key]. Type: String Required: No</li><li> tag:tagKey filters by [tag key-value pair]. Replace tagKey with a specific tag key, such as tag:exampleKey. Type: String Required: No</li>
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
 * Alarm suppression task configuration
 * @class
 */
class AlarmShieldInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification Channel Group ID
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Shield Rule ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Block start time (second-level timestamp).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Block end time (second-level timestamp).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Block type. 1: Block all notifications, 2: Block matching rules notifications according to the Rule parameter.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Blocking rules, required when Type is 2. For detailed information on filling in rules, see [Product Documentation](https://www.tencentcloud.com/document/product/614/103178?from_cn_redirect=1#rule).
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * Blocking reason.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Rule Creation Source.
1. Console; 2. API; 3. Alarm notification
         * @type {number || null}
         */
        this.Source = null;

        /**
         * Operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Rule Status.
0: Not yet effective; 1: In effect; 2: Expired
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Rule creation time. Unix second-level timestamp (s).
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Rule update time. Unix second-level timestamp (s).
         * @type {number || null}
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
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Import Es information
 * @class
 */
class EsImportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import mode.
1. Import history data
2. Import real-time data
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Start time. Unit: unix second-level timestamp.

         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time. Unit: unix second-level timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Maximum delay time. Unit: s

Import mode is 2. Required for importing real-time data.
         * @type {number || null}
         */
        this.MaxDelay = null;

        /**
         * Check interval. Unit: s

Import mode is 2. Required for importing real-time data.
         * @type {number || null}
         */
        this.CheckInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MaxDelay = 'MaxDelay' in params ? params.MaxDelay : null;
        this.CheckInterval = 'CheckInterval' in params ? params.CheckInterval : null;

    }
}

/**
 * ModifyConfig response structure.
 * @class
 */
class ModifyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Metric configuration information.
 * @class
 */
class MetricConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Statistical cycle (seconds).
         * @type {Array.<number> || null}
         */
        this.Periods = null;

        /**
         * Custom metric label.
         * @type {Array.<MetricLabel> || null}
         */
        this.MetricLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Periods = 'Periods' in params ? params.Periods : null;

        if (params.MetricLabels) {
            this.MetricLabels = new Array();
            for (let z in params.MetricLabels) {
                let obj = new MetricLabel();
                obj.deserialize(params.MetricLabels[z]);
                this.MetricLabels.push(obj);
            }
        }

    }
}

/**
 * ModifyConsole request structure.
 * @class
 */
class ModifyConsoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console ConsoleId</p>
         * @type {string || null}
         */
        this.ConsoleId = null;

        /**
         * <p>Access method: public - public network, internal - private network</p>
         * @type {Array.<string> || null}
         */
        this.AccessMode = null;

        /**
         * <p>Login methods</p><p>Enumeration value:</p><ul><li>0: Account password authentication</li><li>1: Anonymous login</li><li>2: Third-party authentication login</li></ul>
         * @type {number || null}
         */
        this.LoginMode = null;

        /**
         * <p>Custom domain name prefix</p>
         * @type {string || null}
         */
        this.DomainPrefix = null;

        /**
         * <p>User account information</p><p>"Account password authentication" is required for login methods.</p>
         * @type {Array.<ConsoleAccount> || null}
         */
        this.Accounts = null;

        /**
         * <p>Anonymous login account information</p><p>"Anonymous login" is required for the login method.</p>
         * @type {AnonymousLoginInfo || null}
         */
        this.AnonymousLogin = null;

        /**
         * <p>Private network type, defaults to 0</p>
         * @type {number || null}
         */
        this.IntranetType = null;

        /**
         * <p>Private network region</p>
         * @type {string || null}
         */
        this.IntranetRegion = null;

        /**
         * <p>Private network VpcId</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Private subnet SubnetId</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Auth user role information</p><p>"Third-party authentication login" is required for the login method.</p>
         * @type {Array.<AuthRoleInfo> || null}
         */
        this.AuthRoles = null;

        /**
         * <p>Custom hidden parameter</p>
         * @type {Array.<string> || null}
         */
        this.HideParams = null;

        /**
         * <p>Access Control Rule</p><p>The "third-party authentication login" login method requires the AccessMode: internal && Action: ACCEPT rule.</p>
         * @type {Array.<AccessControlRule> || null}
         */
        this.AccessControlRules = null;

        /**
         * <p>Remark</p>
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * <p>Custom display menu</p>
         * @type {Array.<string> || null}
         */
        this.Menus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleId = 'ConsoleId' in params ? params.ConsoleId : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.LoginMode = 'LoginMode' in params ? params.LoginMode : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new ConsoleAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

        if (params.AnonymousLogin) {
            let obj = new AnonymousLoginInfo();
            obj.deserialize(params.AnonymousLogin)
            this.AnonymousLogin = obj;
        }
        this.IntranetType = 'IntranetType' in params ? params.IntranetType : null;
        this.IntranetRegion = 'IntranetRegion' in params ? params.IntranetRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.AuthRoles) {
            this.AuthRoles = new Array();
            for (let z in params.AuthRoles) {
                let obj = new AuthRoleInfo();
                obj.deserialize(params.AuthRoles[z]);
                this.AuthRoles.push(obj);
            }
        }
        this.HideParams = 'HideParams' in params ? params.HideParams : null;

        if (params.AccessControlRules) {
            this.AccessControlRules = new Array();
            for (let z in params.AccessControlRules) {
                let obj = new AccessControlRule();
                obj.deserialize(params.AccessControlRules[z]);
                this.AccessControlRules.push(obj);
            }
        }
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Menus = 'Menus' in params ? params.Menus : null;

    }
}

/**
 * DescribeRebuildIndexTasks response structure.
 * @class
 */
class DescribeRebuildIndexTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Index rebuild task list</p>
         * @type {Array.<RebuildIndexTaskInfo> || null}
         */
        this.RebuildTasks = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RebuildTasks) {
            this.RebuildTasks = new Array();
            for (let z in params.RebuildTasks) {
                let obj = new RebuildIndexTaskInfo();
                obj.deserialize(params.RebuildTasks[z]);
                this.RebuildTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeConsumerOffsets response structure.
 * @class
 */
class DescribeConsumerOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumption offset information.
         * @type {Array.<TopicPartitionOffsetInfo> || null}
         */
        this.TopicPartitionOffsetsInfo = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;

        if (params.TopicPartitionOffsetsInfo) {
            this.TopicPartitionOffsetsInfo = new Array();
            for (let z in params.TopicPartitionOffsetsInfo) {
                let obj = new TopicPartitionOffsetInfo();
                obj.deserialize(params.TopicPartitionOffsetsInfo[z]);
                this.TopicPartitionOffsetsInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Multiple log topic search for topic information
 * @class
 */
class SearchLogInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log storage lifetime
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Pass through the Context value returned by this API, which can access more logs later, with an expiration time of 1 hour.
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * Data Processing - Advanced Setting - Environment Variable
 * @class
 */
class EnvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment variable name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Environment variable value
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
 * ModifyKafkaConsumer response structure.
 * @class
 */
class ModifyKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Machine group type description
 * @class
 */
class MachineGroupTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group type. Support ip and label.
-ip: Indicates that Values in this machine group represent the ip address of the collection machine.
-label: means the Values in this group contain machine tags
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Machine description list.
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
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Shipping rule
 * @class
 */
class ShipperInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Delivery Rule ID</p>
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * <p>Log topic ID.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>bucket address for shipping</p>
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * <p>Delivery prefix directory</p>
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * <p>Shipping rule name</p>
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * <p>Shipping time interval. Unit: seconds</p>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * <p>Maximum value of delivered files in MB</p>
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * <p>Whether effective</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Filter rules for log shipping</p>
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * <p>Partition rules for log shipping support strftime time format representation</p>
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * <p>Compression configuration of shipped logs</p>
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * <p>Content format configuration for shipped logs</p>
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * <p>Creation time of shipped logs. Format: YYYY-MM-DD HH:MM:SS</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Delivery file naming configuration. 0: Random number naming, 1: Delivery time naming. Default: 0 (Random number naming).</p>
         * @type {number || null}
         */
        this.FilenameMode = null;

        /**
         * <p>Start time of the data shipping range</p>
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * <p>End time of the data delivery range</p>
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * <p>Progress of historical data delivery (valid only when users select historical data within the dataset)</p>
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * <p>Remaining time for all historical data delivery completion (valid only when there is historical data in the selected data)</p><p>Unit: second</p>
         * @type {number || null}
         */
        this.RemainTime = null;

        /**
         * <p>Historical task status:<br>0: Real-time task<br>1: Task preparing<br>2: Task running<br>3: Task execution exception<br>4: Task execution complete</p>
         * @type {number || null}
         */
        this.HistoryStatus = null;

        /**
         * <p>Storage type. Default value is STANDARD. For enumeration values, see the <a href="https://www.tencentcloud.com/document/product/436/33417?from_cn_redirect=1">storage type overview</a> document.<br>Reference values:<br>STANDARD: standard storage<br>STANDARD_IA: infrequent storage<br>ARCHIVE: archive storage<br>DEEP_ARCHIVE: deep archive storage<br>MAZ_STANDARD: standard storage (multi-AZ)<br>MAZ_STANDARD_IA: infrequent storage (multi-AZ)<br>INTELLIGENT_TIERING: intelligent tiering storage<br>MAZ_INTELLIGENT_TIERING: intelligent tiering storage (multi-AZ)</p>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>ARN <a href="https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1">Create role</a></p>
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * <p>External ID</p>
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * <p>Task running status. Supports <code>0</code>, <code>1</code>, <code>2</code></p><ul><li><code>0</code>: Stop</li><li><code>1</code>: Running</li><li><code>2</code>: Exception</li></ul>
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * <p>Time variable used to generate the file path shipped to COS</p>
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * <p>Pre-filtering process - filter out original data before writing to COS</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RemainTime = 'RemainTime' in params ? params.RemainTime : null;
        this.HistoryStatus = 'HistoryStatus' in params ? params.HistoryStatus : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

    }
}

/**
 * DescribeAlertRecordHistory response structure.
 * @class
 */
class DescribeAlertRecordHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total alarm records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Alarm record details
         * @type {Array.<AlertHistoryRecord> || null}
         */
        this.Records = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new AlertHistoryRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEsRecharges request structure.
 * @class
 */
class DescribeEsRechargesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * -taskId is filtered by [configuration id]. Type: String. Required: No.
-Name is filtered by [configuration name]. Type: String. Required: No.
- statusFlag: Filter by [Configuration Status Marking]. Type: String. Optional: No
-Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * DescribeAlarmNotices request structure.
 * @class
 */
class DescribeAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * name
Filter by [notification channel group name].
Type: String
"Filters":[{"Key":"name","Values":["test-notice"]}]
Required: No
alarmNoticeId
Filter by [notification channel group ID].
Type: String
"Filters": [{Key: "alarmNoticeId", Values: ["notice-5281f1d2-6275-4e56-9ec3-a1eb19d8bc2f"]}]
Required: No
uid
Filter by [recipient user ID].
Type: String
"Filters": [{Key: "uid", Values: ["1137546"]}]
Required: No
groupId
Filter by [recipient user group ID].
Type: String
"Filters": [{Key: "groupId", Values: ["344098"]}]
Required: No

deliverFlag
Filter by [delivery status].
Type: String
Required: No
Available values: "1": disabled, "2": enabled, "3": delivery exception
"Filters":[{"Key":"deliverFlag","Values":["2"]}]
The maximum number of Filters per request is 10, and the maximum for Filter.Values is 5.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether to return the quantity information of alarm silence statistics status in the configured notification channel group.
- true: Need to return.
- false: do not return (default false).
         * @type {boolean || null}
         */
        this.HasAlarmShieldCount = null;

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
        this.HasAlarmShieldCount = 'HasAlarmShieldCount' in params ? params.HasAlarmShieldCount : null;

    }
}

/**
 * DescribeEsRechargePreview response structure.
 * @class
 */
class DescribeEsRechargePreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Preview data info
         * @type {Array.<string> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MergePartition request structure.
 * @class
 */
class MergePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Merged partition id (find the next partition whose InclusiveBeginKey equals the ExclusiveEndKey of the corresponding partition id in the input parameter, and the found partition must be a read-write partition (Status:readwrite), set the input partition id and the found partition id to read-only partition (Status:readonly), then create a new read-write partition). [Get partition list](https://www.tencentcloud.com/document/product/614/56470?from_cn_redirect=1)

1. PartitionId can only be a read-write partition (Status can be readonly or readwrite), and the next read-write partition of PartitionId can be found (the InclusiveBeginKey of the next partition equals to the ExclusiveEndKey of PartitionId).
2. The PartitionId cannot be the last partition (the ExclusiveEndKey of PartitionId cannot be ffffffffffffffffffffffffffffffff).
3. The number of topic partitions is limited (50 by default). After merging, it must not exceed the maximum partition, otherwise merging is not allowed.
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * Monitoring task execution time point in alarm policy
 * @class
 */
class MonitorTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Execution cycle. Value range: <code>Period</code>, <code>Fixed</code>, <code>Cron</code>.</p><ul><li>Period: at a fixed frequency</li><li>Fixed: fixed time</li><li>Cron: cron expression</li></ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Execution period or custom execution time point. Unit: minutes, value range: 1-1440.<br>When type is <code>Period</code> or <code>Fixed</code>, the time field takes effect.</p>
         * @type {number || null}
         */
        this.Time = null;

        /**
         * <p>The cron expression for the execution period. Example: <code>0/1 * * * *</code>. From left to right, each field represents Minutes field, Hours field, Day of month field, Month field, Day of week field. No support for second level. When the type is <code>Cron</code>, the CronExpression field takes effect.</p>
         * @type {string || null}
         */
        this.CronExpression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.CronExpression = 'CronExpression' in params ? params.CronExpression : null;

    }
}

/**
 * ApplyConfigToMachineGroup request structure.
 * @class
 */
class ApplyConfigToMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection Configuration ID
-Obtain the collection configuration Id through [Access collection rule configuration](https://www.tencentcloud.com/document/product/614/58616?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Machine group ID
-Get the machine group Id by searching the [machine group list](https://www.tencentcloud.com/document/api/614/56438?from_cn_redirect=1).
         * @type {string || null}
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeMachineGroupConfigs response structure.
 * @class
 */
class DescribeMachineGroupConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection rule configuration list
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ConfigInfo> || null}
         */
        this.Configs = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new ConfigInfo();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMachineGroupConfigs request structure.
 * @class
 */
class DescribeMachineGroupConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
-Obtain the machine group Id by searching the [machine group list](https://www.tencentcloud.com/document/api/614/56438?from_cn_redirect=1).
         * @type {string || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeSearchViews request structure.
 * @class
 */
class DescribeSearchViewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <ul><li>viewId Filter by [view ID]. Type: String Required: No</li><li>viewName Filter by [view name]. Type: String Required: No</li><li>logsetId Filter by [logset ID]. Type: String Required: No<br>The maximum number of Filters per request is 10, and the maximum number of Filter.Values is 10.</li></ul>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Maximum number of entries per page. Default value: 20. Maximum value: 100.</p>
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
 * ModifyWebCallback request structure.
 * @class
 */
class ModifyWebCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm channel callback configuration ID. Obtain the alarm channel callback configuration ID by searching the alarm channel callback configuration list (https://www.tencentcloud.com/document/api/614/115229?from_cn_redirect=1).
         * @type {string || null}
         */
        this.WebCallbackId = null;

        /**
         * Alarm channel callback configuration name. Supports a maximum of 255 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel type

WeCom: WeCom; DingTalk: DingTalk; Lark: Lark; Http: Custom Callback;
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Callback URL.
         * @type {string || null}
         */
        this.Webhook = null;

        /**
         * Request method.

Support POST, PUT.

Note: This parameter is required when Type is set to Http.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Secret key information. Supports a maximum of 1024 bytes.
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebCallbackId = 'WebCallbackId' in params ? params.WebCallbackId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Webhook = 'Webhook' in params ? params.Webhook : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DeleteTopic response structure.
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateExport response structure.
 * @class
 */
class CreateExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export ID.
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelRebuildIndexTask response structure.
 * @class
 */
class CancelRebuildIndexTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeRecordingRuleYamlTask request structure.
 * @class
 */
class DescribeRecordingRuleYamlTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source metric topic id.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Maximum number of entries per page. Default value: 20. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li>Filter by yamlConfigName [configuration file name] with fuzzy matching. Type: String. Required: No</li> <li>Filter by yamlId as [yamlID] with fuzzy matching. Type: String. Required: No</li>
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
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
 * UploadLog response structure.
 * @class
 */
class UploadLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DataSight Console instance
 * @class
 */
class Console extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console Id</p>
         * @type {string || null}
         */
        this.ConsoleId = null;

        /**
         * <p>Access method: public - internet, internal - intranet</p>
         * @type {Array.<string> || null}
         */
        this.AccessMode = null;

        /**
         * <p>Log-in methods: 0-account password authentication, 1-anonymous login, 2-third-party authentication login</p>
         * @type {number || null}
         */
        this.LoginMode = null;

        /**
         * <p>Custom domain name prefix</p>
         * @type {string || null}
         */
        this.DomainPrefix = null;

        /**
         * <p>User account information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsoleAccount> || null}
         */
        this.Accounts = null;

        /**
         * <p>Private network type, defaults to 0</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IntranetType = null;

        /**
         * <p>Private network region</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IntranetRegion = null;

        /**
         * <p>Private network VpcId</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Private subnet SubnetId</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Anonymous login account information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AnonymousLoginInfo || null}
         */
        this.AnonymousLogin = null;

        /**
         * <p>auth user role information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuthRoleInfo> || null}
         */
        this.AuthRoles = null;

        /**
         * <p>Bound tag information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Custom hidden parameter</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.HideParams = null;

        /**
         * <p>Access Control Rule</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AccessControlRule> || null}
         */
        this.AccessControlRules = null;

        /**
         * <p>Remark</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * <p>Customize menu</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Menus = null;

        /**
         * <p>Public access domain name</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>private network access domain</p>
         * @type {string || null}
         */
        this.IntranetDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleId = 'ConsoleId' in params ? params.ConsoleId : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.LoginMode = 'LoginMode' in params ? params.LoginMode : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new ConsoleAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.IntranetType = 'IntranetType' in params ? params.IntranetType : null;
        this.IntranetRegion = 'IntranetRegion' in params ? params.IntranetRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.AnonymousLogin) {
            let obj = new AnonymousLoginInfo();
            obj.deserialize(params.AnonymousLogin)
            this.AnonymousLogin = obj;
        }

        if (params.AuthRoles) {
            this.AuthRoles = new Array();
            for (let z in params.AuthRoles) {
                let obj = new AuthRoleInfo();
                obj.deserialize(params.AuthRoles[z]);
                this.AuthRoles.push(obj);
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
        this.HideParams = 'HideParams' in params ? params.HideParams : null;

        if (params.AccessControlRules) {
            this.AccessControlRules = new Array();
            for (let z in params.AccessControlRules) {
                let obj = new AccessControlRule();
                obj.deserialize(params.AccessControlRules[z]);
                this.AccessControlRules.push(obj);
            }
        }
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Menus = 'Menus' in params ? params.Menus : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.IntranetDomain = 'IntranetDomain' in params ? params.IntranetDomain : null;

    }
}

/**
 * CreateAlarm response structure.
 * @class
 */
class CreateAlarmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Alert policy ID.</p>
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom label structure.
 * @class
 */
class CustomLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
-Must start with a letter or underscore, but cannot start with double underscores (__), followed by any letter, digit, or underscore.
- Supports up to 256 characters.
-key must be unique
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
- Supports up to 256 characters.
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
 * Splunk task submission meta information
 * @class
 */
class MetadataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * data format, rawlog/json
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Fields to be delivered, including __SOURCE__, __FILENAME__
,\_\_TIMESTAMP\_\_,\_\_HOSTNAME\_\_,\_\_PKG\_ID\_\_
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * Whether to deliver the __TAG__ field
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * Whether JSON is flattened. Required when delivering the __TAG__ field.
         * @type {boolean || null}
         */
        this.TagJsonTiled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.TagJsonTiled = 'TagJsonTiled' in params ? params.TagJsonTiled : null;

    }
}

/**
 * DescribeMetricSubscribes request structure.
 * @class
 */
class DescribeMetricSubscribesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <br><li> Filter taskId by [configuration id]. Type: String. Required: No</li>
<br><li> Name is filtered by [configuration name]. Type: String Required: No</li>
<br><li> Filter status by [configuration status tag]. Type: String Required: No</li>
<br><li>Each request can have up to 10 Filters. The maximum number of Filter.Values is 100.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * DescribeLogContext request structure.
 * @class
 */
class DescribeLogContextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id to query.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log time, which is the Time in the Results structure in the returned information of the [retrieve and analyze logs](https://www.tencentcloud.com/document/product/614/56447?from_cn_redirect=1) api, should be converted from the millisecond-level Unix timestamp to a string in the YYYY-mm-dd HH:MM:SS.FFF format according to the UTC+8 time zone.
         * @type {string || null}
         */
        this.BTime = null;

        /**
         * Log package sequence number, which is the PkgId in the Results structure returned by the retrieve and analyze logs api (https://www.tencentcloud.com/document/product/614/56447?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Sequence number of a log within the log package, which is the PkgLogId in the Results structure returned by the [retrieve and analyze logs](https://www.tencentcloud.com/document/product/614/56447?from_cn_redirect=1) api.
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * The previous ${PrevLogs} logs. Default value: 10.
         * @type {number || null}
         */
        this.PrevLogs = null;

        /**
         * The next ${NextLogs} logs. Default value: 10.
         * @type {number || null}
         */
        this.NextLogs = null;

        /**
         * Query statement, filtering the log context with a maximum length of 12KB
The statement consists of <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1" target="_blank">[retrieval criteria]</a> and does not support SQL statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Context search start time, unit: millisecond-level timestamp
Note:
-When From is empty, it means no restrictions on the start time of context search.
-From and To are not empty, From < To
-Currently, the system only supports the Shanghai/Virginia/Singapore region.
         * @type {number || null}
         */
        this.From = null;

        /**
         * End time of context search. Measurement unit: millisecond-level timestamp.
Note:
-When To is empty, it means no restrictions on the end time of context search.
-From and To are not empty, From < To
-Currently, the system only supports the Shanghai/Virginia/Singapore region.
         * @type {number || null}
         */
        this.To = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.PrevLogs = 'PrevLogs' in params ? params.PrevLogs : null;
        this.NextLogs = 'NextLogs' in params ? params.NextLogs : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;

    }
}

/**
 * DescribeMetricCorrectDimension request structure.
 * @class
 */
class DescribeMetricCorrectDimensionRequest extends  AbstractModel {
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
 * CreateRecordingRuleYamlTask request structure.
 * @class
 */
class CreateRecordingRuleYamlTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source metric topic id</p><p>For reference:</p><ul><li><a href="https://www.tencentcloud.com/document/api/614/56454?from_cn_redirect=1">DescribeTopics</a></li><li><a href="https://console.cloud.tencent.com/cls/metric">metric topic</a></li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Target metric topic id, which can be the same as TopicId.</p>
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * <p>Task status. Valid values: 1: enabled; 2: disabled.</p>
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * <p>Execution start time, Unix timestamp.</p><p>Unit: ms.</p>
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * <p>Scheduling period (minutes). Supported range (0,1440] minutes.</p><p>Measurement unit: minutes</p><p>Can also use interval: duration in YAML to set execution interval individually for each group.</p>
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * <p>Execution delay. Set it to 30 seconds to avoid inaccuracy in pre-aggregation task calculation results due to latency in metric reporting.</p><p>Unit: seconds</p>
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * <p>yaml configuration name</p>
         * @type {string || null}
         */
        this.YamlConfigName = null;

        /**
         * <p>yaml configuration content</p><p>Compatible with Prometheus Recording Rules configuration files. Please note the line breaks and indent in the string during API calls.</p>
         * @type {string || null}
         */
        this.YamlContent = null;

        /**
         * <p>Whether to enable the delivery service log. 1: Disabled, 2: Enabled.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.YamlConfigName = 'YamlConfigName' in params ? params.YamlConfigName : null;
        this.YamlContent = 'YamlContent' in params ? params.YamlContent : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * DescribeCosRecharges response structure.
 * @class
 */
class DescribeCosRechargesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * See CosRechargeInfo structural description.
         * @type {Array.<CosRechargeInfo> || null}
         */
        this.Data = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CosRechargeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSplunkDeliver request structure.
 * @class
 */
class CreateSplunkDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>log topic id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>The splunk delivery task name has the following restrictions: - Cannot be empty - Length not greater than 256 - Can only contain aA-zZ, underscore, -, 0-9</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Splunk delivery task - target configuration - network info</p>
         * @type {NetInfo || null}
         */
        this.NetInfo = null;

        /**
         * <p>Splunk delivery task meta information</p>
         * @type {MetadataInfo || null}
         */
        this.MetadataInfo = null;

        /**
         * <p>Whether service logs are enabled 1: Disabled; 2: Enabled; Enabled by default</p>
         * @type {number || null}
         */
        this.HasServiceLog = null;

        /**
         * <p>Advanced configuration - Whether to enable the indexer; 1 - Disable; 2 - Enable;<br>Default: 1</p>
         * @type {number || null}
         */
        this.IndexAck = null;

        /**
         * <p>Advanced configuration - data source; no more than 64 characters</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Advanced configuration - data source type; no more than 64 characters</p>
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * <p>Advanced configuration - Indexes written to Splunk; no more than 64 characters</p>
         * @type {string || null}
         */
        this.Index = null;

        /**
         * <p>Advanced configuration - Channel.<br>To meet the limitation: If the indexer is enabled, then Channel is required.</p>
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * <p>Log pre-filtering - filter out original data before writing to Splunk</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

        /**
         * <p>Advanced configuration - Cross-account delivery user role authorization information</p><p>For reference: <a href="https://console.cloud.tencent.com/cam/role/create?payloadType=account">Create custom role</a></p>
         * @type {ExternalRole || null}
         */
        this.ExternalRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.NetInfo) {
            let obj = new NetInfo();
            obj.deserialize(params.NetInfo)
            this.NetInfo = obj;
        }

        if (params.MetadataInfo) {
            let obj = new MetadataInfo();
            obj.deserialize(params.MetadataInfo)
            this.MetadataInfo = obj;
        }
        this.HasServiceLog = 'HasServiceLog' in params ? params.HasServiceLog : null;
        this.IndexAck = 'IndexAck' in params ? params.IndexAck : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

        if (params.ExternalRole) {
            let obj = new ExternalRole();
            obj.deserialize(params.ExternalRole)
            this.ExternalRole = obj;
        }

    }
}

/**
 * CreateMachineGroup response structure.
 * @class
 */
class CreateMachineGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteRecordingRuleYamlTask response structure.
 * @class
 */
class DeleteRecordingRuleYamlTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Metafield index configuration
 * @class
 */
class RuleTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Case sensitivity
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Field information in the metafield index configuration
         * @type {Array.<KeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new KeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * OpenClawService request structure.
 * @class
 */
class OpenClawServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Tag type</p><p>Enumeration value:</p><ul><li>OpenClaw: OpenClaw type</li><li>ClawPro: ClawPro type</li></ul>
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * <p>Whether to create a trace topic, default to false</p><p>Enumeration value:</p><ul><li>true: Creates a trace topic</li><li>false: Does not create a trace topic</li></ul>
         * @type {boolean || null}
         */
        this.EnableTrace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.EnableTrace = 'EnableTrace' in params ? params.EnableTrace : null;

    }
}

/**
 * Alarm object
 * @class
 */
class AlarmTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Monitoring object number
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Offset of the query start time from the alarm execution time in minutes. The value cannot be positive. Value range: -1440–0.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * Offset of the query end time from the alarm execution time in minutes. The value cannot be positive and must be greater than `StartTimeOffset`. Value range: -1440–0.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Retrieval syntax rules. Default value is 0.
0: Lucene syntax; 1: CQL syntax.
For detailed explanation, refer to <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1#RetrievesConditionalRules" target="_blank">Retrieve Syntax Rules</a>
         * @type {number || null}
         */
        this.SyntaxRule = null;

        /**
         * Topic type.
0: log topic; 1: metric topic
         * @type {number || null}
         */
        this.BizType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;
        this.BizType = 'BizType' in params ? params.BizType : null;

    }
}

/**
 * SearchCosRechargeInfo request structure.
 * @class
 */
class SearchCosRechargeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * FL instance set ID.

-Obtain the logset Id by searching the [logset list](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * COS import task name, supports up to 128 bytes.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * COS bucket, see the supported [bucket naming conventions](https://www.tencentcloud.com/document/product/436/13312?from_cn_redirect=1).	

-Get COS buckets via [GET Service (List Buckets)](https://www.tencentcloud.com/document/product/436/8291?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The region where the COS bucket is located, see the supported [region list](https://intl.cloud.tencent.com/document/product/436/6224?from_cn_redirect=1).
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * The prefix of the folder where COS files are located. By default, it is null, meaning that all files under the bucket will be shipped.
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * Compression mode: "", "gzip", "lzop", "snappy". Default: ""; no compression.
         * @type {string || null}
         */
        this.Compress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.Compress = 'Compress' in params ? params.Compress : null;

    }
}

/**
 * DescribeNoticeContents request structure.
 * @class
 */
class DescribeNoticeContentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li> name
Filter by [notification content template name].
Type: String
Required: No
</li>
<li> noticeContentId
Filter by [notification content template ID].
Type: String
Required: No
</li>
Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
 * DescribeDlcDelivers request structure.
 * @class
 */
class DescribeDlcDeliversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * - taskId
Filter by [task id].
Type: String
Required: No

- name
Filter by [task name].
Type: String
Required: No

- tableName
Filter by [data table].
Type: String
Required: No

- statusFlag
Filter by [status]. Supported values: "1", "2", "3", "4". Meanings: 1: RUNNING, 2: STOPPED, 3: FINISHED, 4: FAILED.
Type: String
Required: No

Each request can have up to 10 Filters. The upper limit of Filter.Values is 10.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * DescribeNetworkApplicationDetail response structure.
 * @class
 */
class DescribeNetworkApplicationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Query specified web application details</p>
         * @type {NetworkApplicationDetail || null}
         */
        this.Info = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            let obj = new NetworkApplicationDetail();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetClsService request structure.
 * @class
 */
class GetClsServiceRequest extends  AbstractModel {
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
 * DescribeShipperTasks request structure.
 * @class
 */
class DescribeShipperTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping Rule Id.

-Obtain the ShipperId by [obtaining the shipping task list](https://www.tencentcloud.com/document/product/614/58745?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * Start timestamp for the query. Supports queries within the most recent 3 days in ms.
StartTime must be less than EndTime
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end timestamp, in ms.
StartTime must be less than EndTime
         * @type {number || null}
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
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateCloudProductLogCollection request structure.
 * @class
 */
class CreateCloudProductLogCollectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID</p><ul><li>Obtained through official documentation of connected cloud services</li></ul>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Cloud product identifier, support enumerate: CDS, CWP, CDB, TDSQL-C, MongoDB, TDStore, DCDB, MariaDB, PostgreSQL, BH, APIS</p>
         * @type {string || null}
         */
        this.AssumerName = null;

        /**
         * <p>Log type, supports enumerate: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS</p>
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * <p>Product region. The input parameter format for regions varies by log type (LogType). Refer to the following example:</p><ul><li>All CDS log types: ap-guangzhou</li><li>CDB-AUDIT: gz</li><li>TDSQL-C-AUDIT: gz</li><li>MongoDB-AUDIT: gz</li><li>MongoDB-SlowLog: ap-guangzhou</li><li>MongoDB-ErrorLog: ap-guangzhou</li><li>TDMYSQL-SLOW: gz</li><li>All DCDB log types: gz</li><li>All MariaDB log types: gz</li><li>All PostgreSQL log types: gz</li><li>All BH log types: overseas-polaris (Hong Kong (China) and other)/fsi-polaris (financial district)/general-polaris (general zone)/intl-sg-prod (international site)</li><li>All APIS log types: gz</li></ul>
         * @type {string || null}
         */
        this.CloudProductRegion = null;

        /**
         * <p>CLS target region</p><ul><li>Supported regions: see <a href="https://www.tencentcloud.com/document/api/614/56474?from_cn_redirect=1#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8">region list</a> document</li></ul>
         * @type {string || null}
         */
        this.ClsRegion = null;

        /**
         * <p>Logset name. Required when LogsetId is not specified. If the log set does not exist, it will automatically create one.</p>
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * <p>Log topic name. This parameter is required when TopicId is empty. If the log topic does not exist, the system will automatically create one.</p>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Log configuration extension info, generally used to store additional log delivery configuration</p>
         * @type {string || null}
         */
        this.Extend = null;

        /**
         * <p>log set id</p><ul><li>Obtain the log set Id through <a href="https://www.tencentcloud.com/document/api/614/58624?from_cn_redirect=1">Get Logset List</a>.</li></ul>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>log topic id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Tag description list. By specifying this parameter, you can simultaneously bind tags to the appropriate theme. Supports up to 10 tag key-value pairs. The same resource can only be bound to the same tag key.</p>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssumerName = 'AssumerName' in params ? params.AssumerName : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.CloudProductRegion = 'CloudProductRegion' in params ? params.CloudProductRegion : null;
        this.ClsRegion = 'ClsRegion' in params ? params.ClsRegion : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Extend = 'Extend' in params ? params.Extend : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * DescribeIndex request structure.
 * @class
 */
class DescribeIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>log topic Id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeKafkaConsumerGroupList request structure.
 * @class
 */
class DescribeKafkaConsumerGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * - group
Filter by [consumer group name].
Type: String
Required: No
Example: Consumption group 1

Each request can have up to 10 Filters. The upper limit of Filter.Values is 10.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * CreateConsole request structure.
 * @class
 */
class CreateConsoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Access method: public - public network, internal - private network</p>
         * @type {Array.<string> || null}
         */
        this.AccessMode = null;

        /**
         * <p>Login method</p><p>Enumeration value:</p><ul><li>0: Account password authentication</li><li>1: Anonymous login</li><li>2: Third-party authentication login</li></ul>
         * @type {number || null}
         */
        this.LoginMode = null;

        /**
         * <p>Custom domain name prefix</p>
         * @type {string || null}
         */
        this.DomainPrefix = null;

        /**
         * <p>User account information</p><p>"Account password authentication" is required for login method</p>
         * @type {Array.<ConsoleAccount> || null}
         */
        this.Accounts = null;

        /**
         * <p>Anonymous login account information</p><p>"Anonymous login" is a required login method.</p>
         * @type {AnonymousLoginInfo || null}
         */
        this.AnonymousLogin = null;

        /**
         * <p>Private network type, defaults to 0</p>
         * @type {number || null}
         */
        this.IntranetType = null;

        /**
         * <p>Private network region</p>
         * @type {string || null}
         */
        this.IntranetRegion = null;

        /**
         * <p>Private network VpcId</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Private subnet SubnetId</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Auth role information</p><p>"Third-party authentication login" is a required login method.</p>
         * @type {Array.<AuthRoleInfo> || null}
         */
        this.AuthRoles = null;

        /**
         * <p>Tag description list. By specifying this parameter, you can simultaneously bind tags to the corresponding log topic. Supports up to 10 tag key-value pairs. The same resource can only be bound to the same tag key.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Custom hidden parameter</p>
         * @type {Array.<string> || null}
         */
        this.HideParams = null;

        /**
         * <p>Access Control Rule</p><p>The "third-party authentication login" login method requires the AccessMode: internal && Action: ACCEPT rule.</p>
         * @type {Array.<AccessControlRule> || null}
         */
        this.AccessControlRules = null;

        /**
         * <p>Remark</p>
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * <p>Customize menu</p>
         * @type {Array.<string> || null}
         */
        this.Menus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.LoginMode = 'LoginMode' in params ? params.LoginMode : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new ConsoleAccount();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

        if (params.AnonymousLogin) {
            let obj = new AnonymousLoginInfo();
            obj.deserialize(params.AnonymousLogin)
            this.AnonymousLogin = obj;
        }
        this.IntranetType = 'IntranetType' in params ? params.IntranetType : null;
        this.IntranetRegion = 'IntranetRegion' in params ? params.IntranetRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.AuthRoles) {
            this.AuthRoles = new Array();
            for (let z in params.AuthRoles) {
                let obj = new AuthRoleInfo();
                obj.deserialize(params.AuthRoles[z]);
                this.AuthRoles.push(obj);
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
        this.HideParams = 'HideParams' in params ? params.HideParams : null;

        if (params.AccessControlRules) {
            this.AccessControlRules = new Array();
            for (let z in params.AccessControlRules) {
                let obj = new AccessControlRule();
                obj.deserialize(params.AccessControlRules[z]);
                this.AccessControlRules.push(obj);
            }
        }
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Menus = 'Menus' in params ? params.Menus : null;

    }
}

/**
 * DeleteMachineGroupInfo request structure.
 * @class
 */
class DeleteMachineGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group Id
-Obtain the machine group Id by searching the [machine group list](https://www.tencentcloud.com/document/product/614/56438?from_cn_redirect=1).
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Machine group type
Supported types: `ip` and `label`
         * @type {MachineGroupTypeInfo || null}
         */
        this.MachineGroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.MachineGroupType) {
            let obj = new MachineGroupTypeInfo();
            obj.deserialize(params.MachineGroupType)
            this.MachineGroupType = obj;
        }

    }
}

/**
 * ModifyNoticeContent response structure.
 * @class
 */
class ModifyNoticeContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DeleteWebCallback response structure.
 * @class
 */
class DeleteWebCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeSearchViews response structure.
 * @class
 */
class DescribeSearchViewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Query view detailed information.</p>
         * @type {Array.<SearchViewInfo> || null}
         */
        this.Infos = null;

        /**
         * <p>Total number of qualified tasks.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SearchViewInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmShields request structure.
 * @class
 */
class DescribeAlarmShieldsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel group id. Obtain the notification channel group id by searching the [notification channel group list](https://www.tencentcloud.com/document/api/614/56462?from_cn_redirect=1).
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * - taskId: Filter by [Rule ID]. Type: String. Optional: No
- status: Filter by [Rule Status]. Type: String. Supports 0: Not yet effective, 1: In Effect, 2: Expired. Optional: No
Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
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
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

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
 * CreateRecordingRuleYamlTask response structure.
 * @class
 */
class CreateRecordingRuleYamlTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Yaml configuration id, can be associated with multiple subtasks</p>
         * @type {string || null}
         */
        this.YamlId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.YamlId = 'YamlId' in params ? params.YamlId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopics response structure.
 * @class
 */
class DescribeTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic list
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Windows event log collection configuration
 * @class
 */
class EventLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event channel, support
-Application log
-Security log
-Startup log
-System log
-ALL logs

         * @type {string || null}
         */
        this.EventChannel = null;

        /**
         * Supported types of the time field (Timestamp)
-1 (User-customized time)
-2 (current time)
         * @type {number || null}
         */
        this.TimeType = null;

        /**
         * Time, when users choose custom time type, specify the time in seconds
Format: timestamp, 1754897446
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Event ID filter list
	
Optional. Being empty indicates no filtering is applied.
Support forward filtering for a single value (for example: 20) or a range (for example: 0-20), also support reverse filtering for a single value (for example: -20).
Multiple filter items can be separated by commas, for example: 1-200,-100 means collect event logs within the range of 1-200 except 100.
         * @type {Array.<string> || null}
         */
        this.EventIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventChannel = 'EventChannel' in params ? params.EventChannel : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.EventIDs = 'EventIDs' in params ? params.EventIDs : null;

    }
}

/**
 * Consumer group information
 * @class
 */
class ConsumerGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumer heartbeat timeout (seconds).
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * topic list
         * @type {Array.<string> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Topics = 'Topics' in params ? params.Topics : null;

    }
}

/**
 * DescribeRebuildIndexTasks request structure.
 * @class
 */
class DescribeRebuildIndexTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic ID.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Index rebuild task ID</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Index rebuild task status. Leave it blank to return the task list of all statuses. Multiple statuses are separated by commas.</p><p>Enumeration value:</p><ul><li>0: Reindexing task created</li><li>1: Creating reindexing resources</li><li>2: Index rebuild resource created</li><li>3: Rebuilding</li><li>4: Suspension</li><li>5: Rebuild complete</li><li>6: Rebuild successful (retrievable)</li><li>7: Rebuilding failed</li><li>8: Task cancellation</li><li>9: Metadata and index deleted</li></ul>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Pagination offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of entries per page. Default value: 10. Maximum value: 20.</p>
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Submit DLC task configuration
 * @class
 */
class DlcDeliverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Account id.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Log topic ID.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Delivery Type. Valid values: 0: real-time delivery; 1: historic delivery.
         * @type {number || null}
         */
        this.DeliverType = null;

        /**
         * Delivery file size in MB
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Delivery interval in seconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Start time of the delivery time range
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time of the delivery time range
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * dlc configuration message
         * @type {DlcInfo || null}
         */
        this.DlcInfo = null;

        /**
         * Whether to enable delivery service log. 1 for disabled, 2 for enabled
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Task status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task progress. Historic delivery tasks take effect.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Topic type of logs. 0: standard topic; 1: metric topic.
         * @type {number || null}
         */
        this.BizType = null;

        /**
         * Task creation time.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Task modification time.
         * @type {number || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.DlcInfo) {
            let obj = new DlcInfo();
            obj.deserialize(params.DlcInfo)
            this.DlcInfo = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeShippers request structure.
 * @class
 */
class DescribeShippersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * -shipperName: Filter by [delivery rule name].
Type: String.
    Required: No
-shipperId: Filter by [Delivery Rule ID].
Type: String.
    Required: No
-topicId: Filter by [log topic].
Type: String.
    Required: No
-taskStatus: Filter by [task running status]. Supported values: `0`: stop, `1`: running, `2`: exception.
Type: String
    Required: No

Each request can have up to 10 Filters. The upper limit of Filter.Values is 10.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Control whether the relevant fields in Filters use exact matching. 0: Default value, fuzzy matching for shipperName. 1: Exact match for shipperName.
         * @type {number || null}
         */
        this.PreciseSearch = null;

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
        this.PreciseSearch = 'PreciseSearch' in params ? params.PreciseSearch : null;

    }
}

/**
 * DescribeCloudProductLogTasks response structure.
 * @class
 */
class DescribeCloudProductLogTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Logging configuration detail list</p>
         * @type {Array.<CloudProductLogTaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * <p>Total configuration count of logs</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new CloudProductLogTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyKafkaConsumer request structure.
 * @class
 */
class ModifyKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>log topic id</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1">Create Log Topic</a>.</li></ul>
         * @type {string || null}
         */
        this.FromTopicId = null;

        /**
         * <p>Compression mode. 0: No compression; 2: Use Snappy compression; 3: Use LZ4 compression</p>
         * @type {number || null}
         */
        this.Compression = null;

        /**
         * <p>kafka protocol consumption data format</p>
         * @type {KafkaConsumerContent || null}
         */
        this.ConsumerContent = null;

        /**
         * <p>Whether to enable the delivery service log. 1: Disabled, 2: Enabled.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * <p>Range type of consumption, 0: latest, 1: history + latest</p>
         * @type {number || null}
         */
        this.ScopeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;
        this.Compression = 'Compression' in params ? params.Compression : null;

        if (params.ConsumerContent) {
            let obj = new KafkaConsumerContent();
            obj.deserialize(params.ConsumerContent)
            this.ConsumerContent = obj;
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.ScopeType = 'ScopeType' in params ? params.ScopeType : null;

    }
}

/**
 * DescribeCosRecharges request structure.
 * @class
 */
class DescribeCosRechargesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
- Get the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/api/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Status. `0`: Created, `1`: Running, `2`: Stopped, `3`: Completed, `4`: Run failed
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether the configuration is enabled. `0`: Not enabled, `1`: Enabled
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeNetworkApplications response structure.
 * @class
 */
class DescribeNetworkApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Large model performance profiling task list that meet the search criteria</p>
         * @type {Array.<NetworkApplicationInfo> || null}
         */
        this.Infos = null;

        /**
         * <p>Total number of tasks that meet the search criteria.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new NetworkApplicationInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicBaseMetricConfigs response structure.
 * @class
 */
class DescribeTopicBaseMetricConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of metric collection configurations.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BaseMetricCollectConfig> || null}
         */
        this.Datas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new BaseMetricCollectConfig();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseKafkaConsumer response structure.
 * @class
 */
class CloseKafkaConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Query view topic configuration
 * @class
 */
class ViewSearchTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Region of the logset and topic</p><p>Parameter format: ap-guangzhou</p><p>In the same query view, each topic must be in the same region.</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Log set id</p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Log topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Tag remark configuration.
Permission to dynamically rewrite the tag set of targets, alerts, captured samples and remote write samples.
 * @class
 */
class Relabeling extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action executed based on regular expression matching.
-replace: Label replacement, required: SourceLabels, Separator, Regex, TargetLabel, Replacement
-labeldrop: Discard Label, Required: Regex
-labelkeep: Reserve Label, required: Regex
-lowercase, required: SourceLabels, Separator, TargetLabel
-Uppercase: uppercase, Required: SourceLabels, Separator, TargetLabel
-dropequal: Drop metric - exact match, required: SourceLabels, Separator, TargetLabel
-keepequal: retain metric - exact match, required: SourceLabels, Separator, TargetLabel
-drop: Drop metric - Regular expression matching. Required: SourceLabels, Separator, Regex.
-keep: Retain metric - Regular expression matching, Required: SourceLabels, Separator, Regex
-hashmod: hash modulo, required: SourceLabels, Separator, TargetLabel, Modulus
-labelmap: Label map, required: Regex, Replacement
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * original label
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SourceLabels = null;

        /**
         * Original label delimiter. This parameter cannot be an empty string when it is required. Its length cannot exceed 256 characters.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Separator = null;

        /**
         * Target label. This parameter cannot be an empty string when it is required. The verification format is ^[a-zA-Z_][a-zA-Z0-9_]*$, and its length cannot exceed 256 characters.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TargetLabel = null;

        /**
         * Replacement value. If regular expression matching is performed, execute the replacement operation.
-Cannot be an empty string when required. Length cannot exceed 256.
-When the action is LabelMap, check format for Replacement: `^(?:(?:[a-zA-Z_]|\$(?:\{\w+\}|\w+))+\w*)+$`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Replacement = null;

        /**
         * Regular expression. The matching value is extracted. This parameter cannot be an empty string when it is required. The regular expression should be a valid RE2. 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * Obtains the hash value of a label value. This parameter cannot be empty or 0 when it is required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Modulus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.SourceLabels = 'SourceLabels' in params ? params.SourceLabels : null;
        this.Separator = 'Separator' in params ? params.Separator : null;
        this.TargetLabel = 'TargetLabel' in params ? params.TargetLabel : null;
        this.Replacement = 'Replacement' in params ? params.Replacement : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Modulus = 'Modulus' in params ? params.Modulus : null;

    }
}

/**
 * GetAlarmLog response structure.
 * @class
 */
class GetAlarmLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Context for loading subsequent details
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Whether alarm execution details within a specified time range are fully returned
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * Whether return value is SQL analysis result or not
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * Column names of analysis results. If the Query statement contains an SQL query, then column names of the queried fields will be returned;Otherwise, it will be empty.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * Execution details query results.
When there is no SQL statement in the Query field, it returns query results.
When there is an SQL statement in the Query field, it may return null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogInfo> || null}
         */
        this.Results = null;

        /**
         * Execution details statistical analysis results. When there is an SQL statement in the Query field, it returns SQL statistical results; otherwise, it may return null.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * Execution details statistical analysis results; only valid if UseNewAnalysis is true.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AnalysisRecords = null;

        /**
         * Column names of analysis results, valid only if UseNewAnalysis is trueNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Column> || null}
         */
        this.Columns = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new LogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new LogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.AnalysisRecords = 'AnalysisRecords' in params ? params.AnalysisRecords : null;

        if (params.Columns) {
            this.Columns = new Array();
            for (let z in params.Columns) {
                let obj = new Column();
                obj.deserialize(params.Columns[z]);
                this.Columns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKafkaRecharges request structure.
 * @class
 */
class DescribeKafkaRechargesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Import configuration Id.
-Create a Kafka Data Subscription Task (https://www.tencentcloud.com/document/product/614/94448?from_cn_redirect=1) to obtain the Kafka import configuration Id.
-Get the Kafka import configuration Id by [searching the Kafka Data Subscription Task list](https://www.tencentcloud.com/document/product/614/94446?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Status. 1: Running, 2: Suspension, 3: Error.
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateDashboardSubscribe response structure.
 * @class
 */
class CreateDashboardSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeExports request structure.
 * @class
 */
class DescribeExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Monitoring object
 * @class
 */
class AlarmTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID. Obtain the log topic ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Query statement.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Alarm object SN. It starts from 1 and increments.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * Offset of the start time of the query time range from alarm execution time, in minutes. The value cannot be positive. Maximum value: 0. Minimum value: -1,440.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * Offset of the end time of the query time range from alarm execution time, in minutes. The value cannot be positive and should be greater than StartTimeOffset. Maximum value: 0. Minimum value: -1440.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Logset ID. Obtain the logset ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Search syntax rules. Default value is 0.
0: Lucene syntax; 1: CQL syntax.
For detailed explanation, refer to <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1#RetrievesConditionalRules" target="_blank">Retrieve Syntax Rules</a>
         * @type {number || null}
         */
        this.SyntaxRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;

    }
}

/**
 * CreateKafkaRecharge response structure.
 * @class
 */
class CreateKafkaRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kafka data import configuration ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Dashboard subscription data
 * @class
 */
class DashboardSubscribeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription notification method.
         * @type {Array.<DashboardNoticeMode> || null}
         */
        this.NoticeModes = null;

        /**
         * Dashboard subscription time. If this field is empty, the dashboard default time is used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DashboardTime = null;

        /**
         * Dashboard subscription template variable.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DashboardTemplateVariable> || null}
         */
        this.TemplateVariables = null;

        /**
         * Time zone. Refer to: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#SHANGHAI.
         * @type {string || null}
         */
        this.Timezone = null;

        /**
         * Language. zh: Chinese; en: English.
         * @type {string || null}
         */
        this.SubscribeLanguage = null;

        /**
         * Call link domain name. It must start with http:// or https:// and must not end with /.
         * @type {string || null}
         */
        this.JumpDomain = null;

        /**
         * Custom redirection link.
         * @type {string || null}
         */
        this.JumpUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NoticeModes) {
            this.NoticeModes = new Array();
            for (let z in params.NoticeModes) {
                let obj = new DashboardNoticeMode();
                obj.deserialize(params.NoticeModes[z]);
                this.NoticeModes.push(obj);
            }
        }
        this.DashboardTime = 'DashboardTime' in params ? params.DashboardTime : null;

        if (params.TemplateVariables) {
            this.TemplateVariables = new Array();
            for (let z in params.TemplateVariables) {
                let obj = new DashboardTemplateVariable();
                obj.deserialize(params.TemplateVariables[z]);
                this.TemplateVariables.push(obj);
            }
        }
        this.Timezone = 'Timezone' in params ? params.Timezone : null;
        this.SubscribeLanguage = 'SubscribeLanguage' in params ? params.SubscribeLanguage : null;
        this.JumpDomain = 'JumpDomain' in params ? params.JumpDomain : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

    }
}

/**
 * ModifyIndex response structure.
 * @class
 */
class ModifyIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * QueryRangeMetric response structure.
 * @class
 */
class QueryRangeMetricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric Query Result Type, support
-scalar value
-string value
-instantaneous vector
-matrix interval vector
         * @type {string || null}
         */
        this.ResultType = null;

        /**
         * Metric Query Result
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDashboardSubscribes response structure.
 * @class
 */
class DescribeDashboardSubscribesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dashboard subscription list
         * @type {Array.<DashboardSubscribeInfo> || null}
         */
        this.DashboardSubscribeInfos = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DashboardSubscribeInfos) {
            this.DashboardSubscribeInfos = new Array();
            for (let z in params.DashboardSubscribeInfos) {
                let obj = new DashboardSubscribeInfo();
                obj.deserialize(params.DashboardSubscribeInfos[z]);
                this.DashboardSubscribeInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Metric collection configuration.
 * @class
 */
class BaseMetricCollectConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Basic monitoring collection configuration information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MetricCollectConfig> || null}
         */
        this.Configs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new MetricCollectConfig();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }

    }
}

/**
 * Multi-topic search return information
 * @class
 */
class SearchLogTopics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error information corresponding to multi-log topic retrieval
         * @type {Array.<SearchLogErrors> || null}
         */
        this.Errors = null;

        /**
         * Information for each log topic during multi-log topic retrieval
         * @type {Array.<SearchLogInfos> || null}
         */
        this.Infos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Errors) {
            this.Errors = new Array();
            for (let z in params.Errors) {
                let obj = new SearchLogErrors();
                obj.deserialize(params.Errors[z]);
                this.Errors.push(obj);
            }
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SearchLogInfos();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }

    }
}

/**
 * CreateMetricConfig request structure.
 * @class
 */
class CreateMetricConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric log topic id.
- Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1). Note that BizType 0: log topic (default value), 1: metric topic.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Collection configuration source. Support: `0`, `1`.
-0: Self-build k8s
- 1:TKE
         * @type {number || null}
         */
        this.Source = null;

        /**
         * Machine group ID.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Monitoring type. Supported values: `0`, `1`. Cannot be modified.
-0: Basic monitoring
-Custom monitoring
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Collection configuration method. Supports `0`, `1`. Cannot be modified.
-0: Ordinary setting method. The Type field is only for `1`.
-YAML import method. Type can be `0` or `1`.
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * Name: Length not exceeding 253 characters, check format `[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Collection object. This parameter is valid only when Flag is 0.
         * @type {MetricSpec || null}
         */
        this.Spec = null;

        /**
         * Label processing. This parameter is valid only when Flag is 0.
         * @type {Array.<Relabeling> || null}
         */
        this.MetricRelabels = null;

        /**
         * Custom metadata. This parameter is valid only when Flag is 0.
         * @type {MetricConfigLabel || null}
         */
        this.MetricLabel = null;

        /**
         * Communication protocol. Valid values: HTTP and HTTPS. This parameter is valid only when Flag is 0.
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * Collection frequency. This parameter is valid only when Flag is 0.
-Check format: `^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`
-Default: 60s
         * @type {string || null}
         */
        this.ScrapeInterval = null;

        /**
         * Collection timeout. This parameter is valid only when Flag is 0.
-Check format: `^(((\d+)y)?((\d+)w)?((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?((\d+)ms)?|0)$`
-Default: 30s
         * @type {string || null}
         */
        this.ScrapeTimeout = null;

        /**
         * How to handle tag conflicts. This parameter is valid only when Flag=0 and supports `true` and `false`.
-`false`: Rename conflicting tags in configuration data
-`true`: Ignore server-side tag conflicts
         * @type {boolean || null}
         */
        this.HonorLabels = null;

        /**
         * Collection configuration, which is a string in YAML format. It is required when Flag is 1.
         * @type {MetricYamlSpec || null}
         */
        this.YamlSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Spec) {
            let obj = new MetricSpec();
            obj.deserialize(params.Spec)
            this.Spec = obj;
        }

        if (params.MetricRelabels) {
            this.MetricRelabels = new Array();
            for (let z in params.MetricRelabels) {
                let obj = new Relabeling();
                obj.deserialize(params.MetricRelabels[z]);
                this.MetricRelabels.push(obj);
            }
        }

        if (params.MetricLabel) {
            let obj = new MetricConfigLabel();
            obj.deserialize(params.MetricLabel)
            this.MetricLabel = obj;
        }
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.ScrapeInterval = 'ScrapeInterval' in params ? params.ScrapeInterval : null;
        this.ScrapeTimeout = 'ScrapeTimeout' in params ? params.ScrapeTimeout : null;
        this.HonorLabels = 'HonorLabels' in params ? params.HonorLabels : null;

        if (params.YamlSpec) {
            let obj = new MetricYamlSpec();
            obj.deserialize(params.YamlSpec)
            this.YamlSpec = obj;
        }

    }
}

/**
 * session content
 * @class
 */
class Message extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Role</p><p>Enumeration value:</p><ul><li>user: User</li><li>assistant: AI assistant</li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * <p>Text content</p>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * <p>Thought chain content.<br>Used to show the model thinking process, only available in deep thinking mode. Returned as an output parameter only. No need to import it into the input parameter during multi-round dialogue.</p>
         * @type {string || null}
         */
        this.ReasoningContent = null;

        /**
         * <p>Tool call generated by the model. Only support output parameter return.</p>
         * @type {Array.<ToolCall> || null}
         */
        this.ToolCalls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ReasoningContent = 'ReasoningContent' in params ? params.ReasoningContent : null;

        if (params.ToolCalls) {
            this.ToolCalls = new Array();
            for (let z in params.ToolCalls) {
                let obj = new ToolCall();
                obj.deserialize(params.ToolCalls[z]);
                this.ToolCalls.push(obj);
            }
        }

    }
}

/**
 * ModifyConsumer response structure.
 * @class
 */
class ModifyConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateSearchView response structure.
 * @class
 */
class CreateSearchViewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>View ID</p>
         * @type {string || null}
         */
        this.ViewId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewId = 'ViewId' in params ? params.ViewId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PartitionOffsetInfo
 * @class
 */
class PartitionOffsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PartitionId = null;

        /**
         * Offset.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Kafka consumer content
 * @class
 */
class KafkaConsumerContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumption data format. Valid values: 0 (original content) and 1 (JSON).
         * @type {number || null}
         */
        this.Format = null;

        /**
         * Whether to ship tag information
This parameter does not need to be set when `Format` is set to `0`.
         * @type {boolean || null}
         */
        this.EnableTag = null;

        /**
         * Metadata information list. Valid values: \_\_SOURCE\_\_, \_\_FILENAME\_\_,
\_\_TIMESTAMP\_\_, \_\_HOSTNAME\_\_, and \_\_PKGID\_\_.
This parameter does not need to be set when `Format` is set to `0`.
         * @type {Array.<string> || null}
         */
        this.MetaFields = null;

        /**
         * tag data processing method: 1: Not Tiled (default value); 2: Tile.

Untiled example:
TAG information: `{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
No tiling: `{"__TAG__":{"fieldA":200,"fieldB":"text"}}`

Tiled example:
TAG information: `{"__TAG__":{"fieldA":200,"fieldB":"text"}}`
Tiled: `{"__TAG__.fieldA":200,"__TAG__.fieldB":"text"}`
         * @type {number || null}
         */
        this.TagTransaction = null;

        /**
         * JSON data format:
1: Not escaped (default format)
2: Escaped

Deliver in JSON format.JsonType is 1: Consistent with the original log, not escaped. Example:
Original log: `{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
Deliver to CKafka: `{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`JsonType is 2: escaped. Example:Original log: `{"a":"aa", "b":{"b1":"b1b1", "c1":"c1c1"}}`
Deliver to CKafka: `{"a":"aa","b":"{\"b1\":\"b1b1\", \"c1\":\"c1c1\"}"}`
         * @type {number || null}
         */
        this.JsonType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;
        this.EnableTag = 'EnableTag' in params ? params.EnableTag : null;
        this.MetaFields = 'MetaFields' in params ? params.MetaFields : null;
        this.TagTransaction = 'TagTransaction' in params ? params.TagTransaction : null;
        this.JsonType = 'JsonType' in params ? params.JsonType : null;

    }
}

/**
 * DeleteConfig request structure.
 * @class
 */
class DeleteConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection Configuration ID
-Obtain the collection configuration Id through [Access collection rule configuration](https://www.tencentcloud.com/document/product/614/58616?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * Multi-Dimensional analysis dimension
 * @class
 */
class AnalysisDimensional extends  AbstractModel {
    constructor(){
        super();

        /**
         * Analysis Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Analysis type: query (custom retrieval and analysis), field (TOP5 fields and proportion statistics), original (related raw logs)

         * @type {string || null}
         */
        this.Type = null;

        /**
         * Analysis content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Multi-dimensional analysis configuration.

When the Type field of Analysis is query (custom), support
{
"Key": "SyntaxRule",  // Syntax rule
"Value": "1"  //0: Lucene syntax, 1: CQL syntax
}

When the Type field of Analysis is field (top5), it supports
 {
    "Key": "QueryIndex",
"Value": "-1" // -1: Custom, 1: Execute statement 1, 2: Execute statement 2
},{
"Key": "CustomQuery", //Query statement. Required and valid when QueryIndex is -1.
    "Value": "* | select count(*) as count"
},{
"Key": "SyntaxRule", // If this field cannot be found, it's assumed to be the legacy syntax (Lucene)
    "Value": "0"//0:Lucene, 1:CQL
}       

When the Type field of Analysis is original (raw log), it supports
{
    "Key": "Fields",
    "Value": "__SOURCE__,__HOSTNAME__,__TIMESTAMP__,__PKG_LOGID__,__TAG__.pod_ip"
}, {
    "Key": "QueryIndex",
"Value": "-1" // -1: Custom, 1: Execute statement 1, 2: Execute statement 2
},{
"Key": "CustomQuery", // Retrieval statement. Required and valid when QueryIndex is -1.
    "Value": "* | select count(*) as count"
},{
"Key": "Format", //Display format. 1: one log per line, 2: one field per line for each log entry
    "Value": "2"
},
{
"Key": "Limit", //Maximum number of logs
    "Value": "5"
},{
"Key": "SyntaxRule", // If this field is not found, it's also the old syntax
    "Value": "0"//0:Lucene, 1:CQL
}
         * @type {Array.<AlarmAnalysisConfig> || null}
         */
        this.ConfigInfo = null;

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
        this.Content = 'Content' in params ? params.Content : null;

        if (params.ConfigInfo) {
            this.ConfigInfo = new Array();
            for (let z in params.ConfigInfo) {
                let obj = new AlarmAnalysisConfig();
                obj.deserialize(params.ConfigInfo[z]);
                this.ConfigInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteWebCallback request structure.
 * @class
 */
class DeleteWebCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the alarm channel callback configuration. Search the alarm channel callback configuration list (https://www.tencentcloud.com/document/api/614/115229?from_cn_redirect=1) to get the ID of the alarm channel callback configuration.
         * @type {string || null}
         */
        this.WebCallbackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebCallbackId = 'WebCallbackId' in params ? params.WebCallbackId : null;

    }
}

/**
 * Log import rule
 * @class
 */
class LogRechargeRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import type. Valid values: `json_log` (JSON logs), `minimalist_log` (single-line full text), and fullregex_log (single-line full regex)
         * @type {string || null}
         */
        this.RechargeType = null;

        /**
         * Encoding format. Valid values: 0 (default, UTF-8) and 1 GBK).
         * @type {number || null}
         */
        this.EncodingFormat = null;

        /**
         * Use default time status. true: when enabled, current system time or Kafka message timestamp will be used as log timestamp. false: when disabled, time field in the log will be used as log timestamp. Default: true.
         * @type {boolean || null}
         */
        this.DefaultTimeSwitch = null;

        /**
         * Full log matching rule. It is valid only when RechargeType is fullregex_log.
         * @type {string || null}
         */
        this.LogRegex = null;

        /**
         * Whether to upload the logs that failed to be parsed. Valid values: `true` and `false`.
         * @type {boolean || null}
         */
        this.UnMatchLogSwitch = null;

        /**
         * key name of parsing-failed logs
         * @type {string || null}
         */
        this.UnMatchLogKey = null;

        /**
         * Time source for parsing failure logs. 0: current time of the system; 1: Kafka message timestamp.
         * @type {number || null}
         */
        this.UnMatchLogTimeSrc = null;

        /**
         * Default time source. 0: Current system time; 1: Kafka message timestamp.
         * @type {number || null}
         */
        this.DefaultTimeSrc = null;

        /**
         * Time field. Field name representing time in logs.

-When DefaultTimeSwitch is false and RechargeType data extraction mode is `json_log` JSON file log or `fullregex_log` single-line full regex file log, TimeKey cannot be empty.
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * Time extraction regular expression.
-When DefaultTimeSwitch is false and the data extraction mode of RechargeType is `minimalist_log` (single-line full text - file log), TimeRegex cannot be empty.
-Only need to input the regular expression representing the time field in logs. If multiple fields are matched to, the first will be used.
Example: The original log is "message with time 2022-08-08 14:20:20". You can set the retrieval time regex to \d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d.

         * @type {string || null}
         */
        this.TimeRegex = null;

        /**
         * Time field format.
-When DefaultTimeSwitch is false, TimeFormat cannot be empty.
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Time field time zone.
-When DefaultTimeSwitch is false, TimeZone cannot be empty.
-Time zone format rule
Prefix: Use GMT or UTC as the time zone benchmark.
Offset:
-`-` indicates a western time zone (later than the benchmark time).
-`+` means the east time zone (earlier than the benchmark time).
-Format ±HH:MM (hr:min)

-Currently supported:
```
"GMT-12:00" 
"GMT-11:00" 
"GMT-10:00" 
"GMT-09:30" 
"GMT-09:00" 
"GMT-08:00" 
"GMT-07:00" 
"GMT-06:00" 
"GMT-05:00" 
"GMT-04:00" 
"GMT-03:30" 
"GMT-03:00" 
"GMT-02:00" 
"GMT-01:00" 
"GMT+00:00"
"GMT+01:00"
"GMT+02:00"
"GMT+03:30"
"GMT+04:00"
"GMT+04:30"
"GMT+05:00"
"GMT+05:30"
"GMT+05:45"
"GMT+06:00"
"GMT+06:30"
"GMT+07:00"
"GMT+08:00"
"GMT+09:00"
"GMT+09:30"
"GMT+10:00"
"GMT+10:30"
"GMT+11:00"
"GMT+11:30"
"GMT+12:00"
"GMT+12:45"
"GMT+13:00"
"GMT+14:00"
"UTC-11:00"
"UTC-10:00"
"UTC-09:00"
"UTC-08:00"
"UTC-12:00"
"UTC-07:00"
"UTC-06:00"
"UTC-05:00"
"UTC-04:30"
"UTC-04:00"
"UTC-03:30"
"UTC-03:00"
"UTC-02:00"
"UTC-01:00"
"UTC+00:00"
"UTC+01:00"
"UTC+02:00"
"UTC+03:00"
"UTC+03:30"
"UTC+04:00"
"UTC+04:30"
"UTC+05:00"
"UTC+05:45"
"UTC+06:00"
"UTC+06:30"
"UTC+07:00"
"UTC+08:00"
"UTC+09:00"
"UTC+09:30"
"UTC+10:00"
"UTC+11:00"
"UTC+12:00"
"UTC+13:00"
```
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * Metadata information. Kafka import supports kafka_topic, kafka_partition, kafka_offset, and kafka_timestamp.
         * @type {Array.<string> || null}
         */
        this.Metadata = null;

        /**
         * log Key list. It is required when RechargeType is full_regex_log or delimiter_log.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * JSON parsing mode. The first-level data parsing is enabled.
         * @type {boolean || null}
         */
        this.ParseArray = null;

        /**
         * Delimiter parsing mode - Separator
This field is required when the parsing format is delimiter extraction.
         * @type {string || null}
         */
        this.Delimiter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RechargeType = 'RechargeType' in params ? params.RechargeType : null;
        this.EncodingFormat = 'EncodingFormat' in params ? params.EncodingFormat : null;
        this.DefaultTimeSwitch = 'DefaultTimeSwitch' in params ? params.DefaultTimeSwitch : null;
        this.LogRegex = 'LogRegex' in params ? params.LogRegex : null;
        this.UnMatchLogSwitch = 'UnMatchLogSwitch' in params ? params.UnMatchLogSwitch : null;
        this.UnMatchLogKey = 'UnMatchLogKey' in params ? params.UnMatchLogKey : null;
        this.UnMatchLogTimeSrc = 'UnMatchLogTimeSrc' in params ? params.UnMatchLogTimeSrc : null;
        this.DefaultTimeSrc = 'DefaultTimeSrc' in params ? params.DefaultTimeSrc : null;
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeRegex = 'TimeRegex' in params ? params.TimeRegex : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.ParseArray = 'ParseArray' in params ? params.ParseArray : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;

    }
}

/**
 * CloseKafkaConsumer request structure.
 * @class
 */
class CloseKafkaConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic Id.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FromTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromTopicId = 'FromTopicId' in params ? params.FromTopicId : null;

    }
}

/**
 * ModifyAlarmShield request structure.
 * @class
 */
class ModifyAlarmShieldRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocking rule ID. Retrieve the blocking rule ID via [retrieve alert masking configuration rules](https://www.tencentcloud.com/document/api/614/103650?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * id of the notification channel group. Retrieve alert masking configuration rules (https://www.tencentcloud.com/document/api/614/103650?from_cn_redirect=1) to get the id of the notification channel group.
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Block start time, second-level (s) timestamp.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Block end time (second-level timestamp).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Block type. 1: Block all notifications, 2: Block matching rules notifications according to the Rule parameter.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Blocking rules, required when Type is 2. For detailed information on filling in rules, see [Product Documentation](https://intl.cloud.tencent.com/document/product/614/103178?from_cn_redirect=1#rule).
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * Blocking Reason
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Rule status. Only when the rule status is in effect (status:1) can it be modified to expired (status:2).
Enumerate: 0 (inactive), 1 (active), 2 (invalid)
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Rule = 'Rule' in params ? params.Rule : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Log shipping configuration information of a notification channel.
 * @class
 */
class AlarmNoticeDeliverConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log shipping configuration information of a notification channel.
         * @type {DeliverConfig || null}
         */
        this.DeliverConfig = null;

        /**
         * Shipping failure reason.
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeliverConfig) {
            let obj = new DeliverConfig();
            obj.deserialize(params.DeliverConfig)
            this.DeliverConfig = obj;
        }
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * DescribeConsumers response structure.
 * @class
 */
class DescribeConsumersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shipping rule list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumerInfo> || null}
         */
        this.Consumers = null;

        /**
         * Total number obtained in this query
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Consumers) {
            this.Consumers = new Array();
            for (let z in params.Consumers) {
                let obj = new ConsumerInfo();
                obj.deserialize(params.Consumers[z]);
                this.Consumers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data Lake Computing Service (Data Lake Compute, DLC) data table configuration info
 * @class
 */
class DlcTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data catalog
         * @type {string || null}
         */
        this.DataDirectory = null;

        /**
         * Database.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * data table
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataDirectory = 'DataDirectory' in params ? params.DataDirectory : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * ModifyKafkaConsumerGroupOffset response structure.
 * @class
 */
class ModifyKafkaConsumerGroupOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code. 0: Success, -1: Failure.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateShipper request structure.
 * @class
 */
class CreateShipperRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Log topic Id belonging to the created shipping rule.</p><ul><li>Obtain the log topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Log Topic List</a>.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>COS bucket, see the supported <a href="https://www.tencentcloud.com/document/product/436/13312?from_cn_redirect=1">bucket naming conventions</a>.</p><ul><li>Retrieve COS buckets via <a href="https://www.tencentcloud.com/document/product/436/8291?from_cn_redirect=1">GET Service (List Buckets)</a>.</li></ul>
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * <p>New directory prefix delivered by the Shipping Rule.</p><ul><li>Only supports 0-9A-Za-z-_/</li><li>Supports up to 256 characters</li></ul>
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * <p>Shipping rule name. Supports a maximum of 255 characters.</p>
         * @type {string || null}
         */
        this.ShipperName = null;

        /**
         * <p>Shipping time interval in seconds. Default: 300. Range: 300-900.</p>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * <p>Maximum value of delivered files in MB. Default: 256. Range: 5-256.</p>
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * <p>Filter rules for log shipping. Matched logs are shipped. The relationship between the rules is and. Up to 5 rules are allowed. An empty array indicates all logs are shipped without filtering.</p>
         * @type {Array.<FilterRuleInfo> || null}
         */
        this.FilterRules = null;

        /**
         * <p>Partition rules for log shipping support strftime time format representation</p>
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * <p>Compression configuration of shipped logs</p>
         * @type {CompressInfo || null}
         */
        this.Compress = null;

        /**
         * <p>Content format configuration for shipped logs</p>
         * @type {ContentInfo || null}
         */
        this.Content = null;

        /**
         * <p>Delivery file naming configuration. 0: Random number naming, 1: Delivery time naming. Default: 0 (Random number naming).</p>
         * @type {number || null}
         */
        this.FilenameMode = null;

        /**
         * <p>Starting point of the data shipping range (Unix second-level timestamp). It cannot exceed the starting point of the log topic's lifecycle.<br>If not filled in by the user, it defaults to the time when the user creates the shipping task.</p>
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * <p>End time point of the data shipping range (unix second-level timestamp). It cannot be in the future.<br>If not filled in by the user, it defaults to continuous shipping, unlimited.</p>
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * <p>The storage type of an object. Default value is STANDARD. For enumeration values, please refer to the <a href="https://www.tencentcloud.com/document/product/436/33417?from_cn_redirect=1">storage type overview</a> document.<br>Reference values include:</p><ul><li>STANDARD: standard storage</li><li>STANDARD_IA: infrequent storage</li><li>ARCHIVE: archive storage</li><li>DEEP_ARCHIVE: deep archive storage</li><li>MAZ_STANDARD: standard storage (multi-AZ)</li><li>MAZ_STANDARD_IA: infrequent storage (multi-AZ)</li><li>INTELLIGENT_TIERING: intelligent tiering storage</li><li>MAZ_INTELLIGENT_TIERING: intelligent tiering storage (multi-AZ)</li></ul>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Role ARN <a href="https://www.tencentcloud.com/document/product/598/19381?from_cn_redirect=1">Create role</a></p>
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * <p>External ID</p>
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * <p>Used to generate time variables in the file path shipped to COS.</p><p>Input limit: Support the following time zone list.</p><ul><li>GMT-12:00</li><li>GMT-11:00</li><li>GMT-10:00</li><li>GMT-09:30</li><li>GMT-09:00</li><li>GMT-08:00</li><li>GMT-07:00</li><li>GMT-06:00</li><li>GMT-05:00</li><li>GMT-04:00</li><li>GMT-03:30</li><li>GMT-03:00</li><li>GMT-02:00</li><li>GMT-01:00</li><li>GMT+00:00</li><li>GMT+01:00</li><li>GMT+02:00</li><li>GMT+03:30</li><li>GMT+04:00</li><li>GMT+04:30</li><li>GMT+05:00</li><li>GMT+05:30</li><li>GMT+05:45</li><li>GMT+06:00</li><li>GMT+06:30</li><li>GMT+07:00</li><li>GMT+08:00</li><li>GMT+09:00</li><li>GMT+09:30</li><li>GMT+10:00</li><li>GMT+10:30</li><li>GMT+11:00</li><li>GMT+11:30</li><li>GMT+12:00</li><li>GMT+12:45</li><li>GMT+13:00</li><li>GMT+14:00</li><li>UTC-11:00</li><li>UTC-10:00</li><li>UTC-09:00</li><li>UTC-08:00</li><li>UTC-12:00</li><li>UTC-07:00</li><li>UTC-06:00</li><li>UTC-05:00</li><li>UTC-04:30</li><li>UTC-04:00</li><li>UTC-03:30</li><li>UTC-03:00</li><li>UTC-02:00</li><li>UTC-01:00</li><li>UTC+00:00</li><li>UTC+01:00</li><li>UTC+02:00</li><li>UTC+03:00</li><li>UTC+03:30</li><li>UTC+04:00</li><li>UTC+04:30</li><li>UTC+05:00</li><li>UTC+05:45</li><li>UTC+06:00</li><li>UTC+06:30</li><li>UTC+07:00</li><li>UTC+08:00</li><li>UTC+09:00</li><li>UTC+09:30</li><li>UTC+10:00</li><li>UTC+11:00</li><li>UTC+12:00</li><li>UTC+13:00</li></ul>
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * <p>Pre-filtering process - perform pre-filtering on the original data written to COS</p>
         * @type {string || null}
         */
        this.DSLFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;
        this.ShipperName = 'ShipperName' in params ? params.ShipperName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new FilterRuleInfo();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Compress) {
            let obj = new CompressInfo();
            obj.deserialize(params.Compress)
            this.Compress = obj;
        }

        if (params.Content) {
            let obj = new ContentInfo();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.FilenameMode = 'FilenameMode' in params ? params.FilenameMode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.DSLFilter = 'DSLFilter' in params ? params.DSLFilter : null;

    }
}

/**
 * Instance information in cloud product metric subscription preview results.
 * @class
 */
class InstanceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud Monitor metric name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * CLS metric name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CLSMetricName = null;

        /**
         * Cloud product namespace.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Instance information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * Period (seconds).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Statistical value of a metric.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.CLSMetricName = 'CLSMetricName' in params ? params.CLSMetricName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * Host metrics collection configuration
 * @class
 */
class HostMetricConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection Configuration id
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * Collection configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Collection frequency, in milliseconds
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Collection item
         * @type {Array.<HostMetricItem> || null}
         */
        this.HostMetricItems = null;

        /**
         * Machine group id list
         * @type {Array.<string> || null}
         */
        this.MachineGroupIds = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Modification time.
         * @type {number || null}
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
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.HostMetricItems) {
            this.HostMetricItems = new Array();
            for (let z in params.HostMetricItems) {
                let obj = new HostMetricItem();
                obj.deserialize(params.HostMetricItems[z]);
                this.HostMetricItems.push(obj);
            }
        }
        this.MachineGroupIds = 'MachineGroupIds' in params ? params.MachineGroupIds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateShipper response structure.
 * @class
 */
class CreateShipperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Delivery task ID</p>
         * @type {string || null}
         */
        this.ShipperId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShipperId = 'ShipperId' in params ? params.ShipperId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCloudProductLogCollection request structure.
 * @class
 */
class ModifyCloudProductLogCollectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Cloud product identifier, support enumerate: CDS, CWP, CDB, TDSQL-C, MongoDB, TDStore, DCDB, MariaDB, PostgreSQL, BH, APIS.
         * @type {string || null}
         */
        this.AssumerName = null;

        /**
         * Log type, support enumerate: CDS-AUDIT, CDS-RISK, CDB-AUDIT, TDSQL-C-AUDIT, MongoDB-AUDIT, MongoDB-SlowLog, MongoDB-ErrorLog, TDMYSQL-SLOW, DCDB-AUDIT, DCDB-SLOW, DCDB-ERROR, MariaDB-AUDIT, MariaDB-SLOW, MariaDB-ERROR, PostgreSQL-SLOW, PostgreSQL-ERROR, PostgreSQL-AUDIT, BH-FILELOG, BH-COMMANDLOG, APIS-ACCESS
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Cloud product region. Data discrepancies exist in the format of region input parameters for different log types (LogType). Refer to the following example:
-All log types of CDS: ap-guangzhou
- CDB-AUDIT: gz
- TDSQL-C-AUDIT: gz
- MongoDB-AUDIT: gz
- MongoDB-SlowLog:ap-guangzhou
- MongoDB-ErrorLog:ap-guangzhou
- TDMYSQL-SLOW:gz
-All log types of DCDB: gz
-All log types of MariaDB: gz
-PostgreSQL all log types: gz
-BH all log types: overseas-polaris (Hong Kong (China) and other)/fsi-polaris (financial district)/general-polaris (general zone)/intl-sg-prod (international site)
-All log types of APIS: gz
         * @type {string || null}
         */
        this.CloudProductRegion = null;

        /**
         * Logging configuration extended information, normally used to store additional log shipping configuration
         * @type {string || null}
         */
        this.Extend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AssumerName = 'AssumerName' in params ? params.AssumerName : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.CloudProductRegion = 'CloudProductRegion' in params ? params.CloudProductRegion : null;
        this.Extend = 'Extend' in params ? params.Extend : null;

    }
}

/**
 * OpenClawService response structure.
 * @class
 */
class OpenClawServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Logset id</p><p><a href="https://www.tencentcloud.com/document/product/614/41034?from_cn_redirect=1">Logset document</a></p>
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * <p>Logset name</p>
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * <p>Log topic id</p><p><a href="https://www.tencentcloud.com/document/product/614/41035?from_cn_redirect=1">Log topic document</a></p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Log topic name</p>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>Metric topic id</p><p><a href="https://www.tencentcloud.com/document/product/614/90328?from_cn_redirect=1">Metric topic document</a></p>
         * @type {string || null}
         */
        this.MetricTopicId = null;

        /**
         * <p>Metric topic name</p>
         * @type {string || null}
         */
        this.MetricTopicName = null;

        /**
         * <p>Bound machine group id</p><p><a href="https://www.tencentcloud.com/document/product/614/17412?from_cn_redirect=1">Machine group document</a></p>
         * @type {string || null}
         */
        this.MachineGroupId = null;

        /**
         * <p>Machine group name</p>
         * @type {string || null}
         */
        this.MachineGroupName = null;

        /**
         * <p>Collection configuration id. Application log</p><p><a href="https://www.tencentcloud.com/document/product/614/33494?from_cn_redirect=1">Collection overview document</a> - <a href="https://www.tencentcloud.com/document/product/614/57497?from_cn_redirect=1">LogListener collection configuration import</a></p>
         * @type {string || null}
         */
        this.AppLogConfigId = null;

        /**
         * <p>Collection configuration name. Application log</p>
         * @type {string || null}
         */
        this.AppLogConfigName = null;

        /**
         * <p>Collection configuration id. Session log</p><p><a href="https://www.tencentcloud.com/document/product/614/33494?from_cn_redirect=1">Collection overview document</a> - <a href="https://www.tencentcloud.com/document/product/614/57497?from_cn_redirect=1">LogListener collection configuration import</a></p>
         * @type {string || null}
         */
        this.SessionLogConfigId = null;

        /**
         * <p>Collection configuration name. Session log</p>
         * @type {string || null}
         */
        this.SessionLogConfigName = null;

        /**
         * <p>trace topic ID</p>
         * @type {string || null}
         */
        this.TraceTopicId = null;

        /**
         * <p>trace topic name</p>
         * @type {string || null}
         */
        this.TraceTopicName = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MetricTopicId = 'MetricTopicId' in params ? params.MetricTopicId : null;
        this.MetricTopicName = 'MetricTopicName' in params ? params.MetricTopicName : null;
        this.MachineGroupId = 'MachineGroupId' in params ? params.MachineGroupId : null;
        this.MachineGroupName = 'MachineGroupName' in params ? params.MachineGroupName : null;
        this.AppLogConfigId = 'AppLogConfigId' in params ? params.AppLogConfigId : null;
        this.AppLogConfigName = 'AppLogConfigName' in params ? params.AppLogConfigName : null;
        this.SessionLogConfigId = 'SessionLogConfigId' in params ? params.SessionLogConfigId : null;
        this.SessionLogConfigName = 'SessionLogConfigName' in params ? params.SessionLogConfigName : null;
        this.TraceTopicId = 'TraceTopicId' in params ? params.TraceTopicId : null;
        this.TraceTopicName = 'TraceTopicName' in params ? params.TraceTopicName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Column attribute of log analysis
 * @class
 */
class Column extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Column attribute
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeDataTransformInfo request structure.
 * @class
 */
class DescribeDataTransformInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * - taskName
Filter by [processing task name].
Type: String
Required: No
Example: test-task

- taskId
Filter by [processing task id].
Type: String
Required: No
Example: a3622556-6402-4942-b4ff-5ae32ec29810
Data processing task ID - Search the data processing task list basic information (https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1) to get the data processing task ID.

- topicId
Filter by [source topicId].
Type: String
Required: No
Example: 756cec3e-a0a5-44c3-85a8-090870582000
Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).

- status
Filter by [Task running status]. 1: Preparing, 2: Running, 3: Stopping, 4: Stopped.
Type: String
Required: No
Example: 1

- hasServiceLog
Filter by [whether service logs are enabled]. 1: not enabled, 2: on.
Type: String
Required: No
Example: 1

- dstTopicType
Filter by [Target topic Type]. 1: Fixed, 2: Dynamic.
Type: String
Required: No
Example: 1

Each request can have up to 10 Filters. The upper limit of Filter.Values is 100.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Task type. Valid values: 1: Get the details of a single task. 2 (default): Get the task list.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * When Type is 1, this parameter is required.
Data processing task ID - Search the data processing task list basic information (https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1) to get the data processing task ID.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Alarm silence statistics.
 * @class
 */
class AlarmShieldCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of alarm silence policies that meet the search conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Number of ineffective alarm silence policies.
         * @type {number || null}
         */
        this.InvalidCount = null;

        /**
         * Number of effective alarm silence policies.
         * @type {number || null}
         */
        this.ValidCount = null;

        /**
         * Number of expired alarm silence policies.
         * @type {number || null}
         */
        this.ExpireCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.InvalidCount = 'InvalidCount' in params ? params.InvalidCount : null;
        this.ValidCount = 'ValidCount' in params ? params.ValidCount : null;
        this.ExpireCount = 'ExpireCount' in params ? params.ExpireCount : null;

    }
}

/**
 * CreateRebuildIndexTask request structure.
 * @class
 */
class CreateRebuildIndexTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Reconstruction start timestamp, in milliseconds
Start time cannot exceed log lifecycle
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Reconstruction end timestamp, in milliseconds
End time not later than 15 minutes before the current time
Note: It is advisable to use the "EstimateRebuildIndexTask" API in advance to assess the data volume and duration involved in index rebuilding within this time range, avoiding excessive cost or duration due to overly large data volume.
         * @type {number || null}
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeleteShipper response structure.
 * @class
 */
class DeleteShipperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Partitions
 * @class
 */
class TopicPartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicID = null;

        /**
         * Partition ID list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicID = 'TopicID' in params ? params.TopicID : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * ModifyTopic request structure.
 * @class
 */
class ModifyTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Topic ID - Obtain the topic Id through <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">Get Topic List</a>.</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Topic name<br>Input restrictions:</p><ul><li>Cannot be an empty string</li><li>Cannot contain character '|'</li><li>Cannot use the following names ["cls_service_log","loglistener_status","loglistener_alarm","loglistener_business","cls_service_metric"]</li></ul>
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * <p>List of tag descriptions. By specifying this parameter, you can bind tags to the appropriate topic simultaneously. Supports up to 10 tag key-value pairs, and no duplicate key-value pairs are allowed.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Whether the topic has log collection enabled. true: start collection; false: disable collection.<br>The console currently does not support modification of this parameter.</p>
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * <p>Whether to enable auto-split</p>
         * @type {boolean || null}
         */
        this.AutoSplit = null;

        /**
         * <p>If maximum split is enabled, the maximum number of partitions allowed for this topic;<br>default is 50; must be a positive number</p>
         * @type {number || null}
         */
        this.MaxSplitPartitions = null;

        /**
         * <p>Lifecycle in days. Standard storage value range is 1-3600. Infrequent storage value range is 7-3600. A value of 3640 indicates permanent retention.</p>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Storage type: cold infrequent storage, hot standard storage</p>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Topic description</p>
         * @type {string || null}
         */
        this.Describes = null;

        /**
         * <p>0: The log topic disables log settlement.<br>Non-0: Number of days for standard storage after log settlement is enabled for the log topic. HotPeriod needs to be greater than or equal to 7 and less than Period.<br>Effective only when StorageType is hot. This configuration is not supported for metric topics.</p>
         * @type {number || null}
         */
        this.HotPeriod = null;

        /**
         * <p>Free authentication switch. false: disabled; true: enabled.<br>Once enabled, anonymous access to the log topic will be supported for specified operations. For details, please see <a href="https://www.tencentcloud.com/document/product/614/41035?from_cn_redirect=1">log topic</a>.</p>
         * @type {boolean || null}
         */
        this.IsWebTracking = null;

        /**
         * <p>Topic extended information</p>
         * @type {TopicExtendInfo || null}
         */
        this.Extends = null;

        /**
         * <p>Number of topic partitions.<br>Defaults to 1.<br>Value ranges and constraints:</p><ul><li>When the input value &lt;=0, the system automatically adjusts it to 1.</li><li>If MaxSplitPartitions is not passed, PartitionCount must be &lt;=50.</li><li>If MaxSplitPartitions is passed, PartitionCount must be &lt;=MaxSplitPartitions.</li></ul>
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * <p>id of the cancel switch storage task</p><ul><li>Obtain the id of the cancel switch storage task [TopicAsyncTaskID field in Topics] by <a href="https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1">get log topic list</a>.</li></ul>
         * @type {string || null}
         */
        this.CancelTopicAsyncTaskID = null;

        /**
         * <p>Encryption-related parameters. Encrypted regions are supported and can be passed for allowlisted users. Cannot be passed in other scenarios.<br>Only support passing in 1: kms-cls secret key for cloud product encryption.</p>
         * @type {number || null}
         */
        this.Encryption = null;

        /**
         * <p>Enable logging of public network source IP and server receipt time</p>
         * @type {boolean || null}
         */
        this.IsSourceFrom = null;

        /**
         * <p>Billing mode</p><p>Enumeration value:</p><ul><li>0: Function billing by usage</li><li>1: Raw log size billing (currently only supports some customers)</li></ul><p>Default value: 0</p>
         * @type {number || null}
         */
        this.BillingMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.AutoSplit = 'AutoSplit' in params ? params.AutoSplit : null;
        this.MaxSplitPartitions = 'MaxSplitPartitions' in params ? params.MaxSplitPartitions : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Describes = 'Describes' in params ? params.Describes : null;
        this.HotPeriod = 'HotPeriod' in params ? params.HotPeriod : null;
        this.IsWebTracking = 'IsWebTracking' in params ? params.IsWebTracking : null;

        if (params.Extends) {
            let obj = new TopicExtendInfo();
            obj.deserialize(params.Extends)
            this.Extends = obj;
        }
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.CancelTopicAsyncTaskID = 'CancelTopicAsyncTaskID' in params ? params.CancelTopicAsyncTaskID : null;
        this.Encryption = 'Encryption' in params ? params.Encryption : null;
        this.IsSourceFrom = 'IsSourceFrom' in params ? params.IsSourceFrom : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;

    }
}

/**
 * DeleteSplunkDeliver request structure.
 * @class
 */
class DeleteSplunkDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Log topic id
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * ModifyEsRecharge response structure.
 * @class
 */
class ModifyEsRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * ModifyConsumerGroup response structure.
 * @class
 */
class ModifyConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * CreateKafkaRecharge request structure.
 * @class
 */
class CreateKafkaRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Import the target topic ID of CLS.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Kafka data import configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Kafka type. Valid values: 0 (Tencent Cloud CKafka) and 1 (customer's Kafka).
         * @type {number || null}
         */
        this.KafkaType = null;

        /**
         * List of Kafka topics to import data from. Separate multiple topics with commas (,).
         * @type {string || null}
         */
        this.UserKafkaTopics = null;

        /**
         * Position for data import. Valid values: -2 (earliest, default) and -1 (latest).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Log Import Rules.
         * @type {LogRechargeRuleInfo || null}
         */
        this.LogRechargeRule = null;

        /**
         * Tencent Cloud CKafka instance ID. Required when KafkaType is 0.
-Obtain the instance id through [Get Instance List Information](https://www.tencentcloud.com/document/product/597/40835?from_cn_redirect=1).
         * @type {string || null}
         */
        this.KafkaInstance = null;

        /**
         * Service address, which is required when KafkaType is 1.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Whether ServerAddr is an encrypted connection. Required when KafkaType is 1.
         * @type {boolean || null}
         */
        this.IsEncryptionAddr = null;

        /**
         * Encrypted Access Protocol.
When KafkaType is 1 and IsEncryptionAddr is true, Protocol is required.
         * @type {KafkaProtocolInfo || null}
         */
        this.Protocol = null;

        /**
         * User Kafka consumer group name.
-A consumption group is a scalable and fault-tolerant consumer mechanism provided by Kafka. Multiple consumers exist in a consumption group, and all consumers in the group consume subscribed messages of the Topic. A consumer can consume multiple partitions simultaneously, but one Partition can only be consumed by one consumer in the group.
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * User kafka extended information
         * @type {UserKafkaMeta || null}
         */
        this.UserKafkaMeta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.KafkaType = 'KafkaType' in params ? params.KafkaType : null;
        this.UserKafkaTopics = 'UserKafkaTopics' in params ? params.UserKafkaTopics : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.LogRechargeRule) {
            let obj = new LogRechargeRuleInfo();
            obj.deserialize(params.LogRechargeRule)
            this.LogRechargeRule = obj;
        }
        this.KafkaInstance = 'KafkaInstance' in params ? params.KafkaInstance : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.IsEncryptionAddr = 'IsEncryptionAddr' in params ? params.IsEncryptionAddr : null;

        if (params.Protocol) {
            let obj = new KafkaProtocolInfo();
            obj.deserialize(params.Protocol)
            this.Protocol = obj;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.UserKafkaMeta) {
            let obj = new UserKafkaMeta();
            obj.deserialize(params.UserKafkaMeta)
            this.UserKafkaMeta = obj;
        }

    }
}

/**
 * DeleteKafkaRecharge request structure.
 * @class
 */
class DeleteKafkaRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kafka import configuration Id.

-Create a Kafka Data Subscription Task (https://www.tencentcloud.com/document/product/614/94448?from_cn_redirect=1) to obtain the Kafka import configuration Id.
-Get the Kafka import configuration Id by [searching the Kafka Data Subscription Task list](https://www.tencentcloud.com/document/product/614/94446?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Import the target log topic Id of CLS.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Data Lake Computing Service (Data Lake Compute, DLC) import configuration info
 * @class
 */
class DlcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * dlc table information
         * @type {DlcTableInfo || null}
         */
        this.TableInfo = null;

        /**
         * dlc data field information
         * @type {Array.<DlcFiledInfo> || null}
         */
        this.FieldInfos = null;

        /**
         * dlc partition information
         * @type {Array.<DlcPartitionInfo> || null}
         */
        this.PartitionInfos = null;

        /**
         * dlc partition additional information
         * @type {DlcPartitionExtra || null}
         */
        this.PartitionExtra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableInfo) {
            let obj = new DlcTableInfo();
            obj.deserialize(params.TableInfo)
            this.TableInfo = obj;
        }

        if (params.FieldInfos) {
            this.FieldInfos = new Array();
            for (let z in params.FieldInfos) {
                let obj = new DlcFiledInfo();
                obj.deserialize(params.FieldInfos[z]);
                this.FieldInfos.push(obj);
            }
        }

        if (params.PartitionInfos) {
            this.PartitionInfos = new Array();
            for (let z in params.PartitionInfos) {
                let obj = new DlcPartitionInfo();
                obj.deserialize(params.PartitionInfos[z]);
                this.PartitionInfos.push(obj);
            }
        }

        if (params.PartitionExtra) {
            let obj = new DlcPartitionExtra();
            obj.deserialize(params.PartitionExtra)
            this.PartitionExtra = obj;
        }

    }
}

/**
 * ModifyDataTransform response structure.
 * @class
 */
class ModifyDataTransformResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Alarm record details
 * @class
 */
class AlertHistoryRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm record ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Alarm policy ID
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.AlarmName = null;

        /**
         * ID of the monitored object
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Name of the monitored object
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Region of the monitored object
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Trigger condition
         * @type {string || null}
         */
        this.Trigger = null;

        /**
         * Number of cycles for which the alarm lasts. An alarm will be triggered only after the trigger condition is met for the number of cycles specified by `TriggerCount`.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Alert notification sent frequency, in minutes
         * @type {number || null}
         */
        this.AlarmPeriod = null;

        /**
         * Notification group
         * @type {Array.<AlertHistoryNotice> || null}
         */
        this.Notices = null;

        /**
         * Duration of the alarm in minutes
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Alarm status. Valid values: `0` (uncleared), `1` (cleared), `2` (expired)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Alarm occurrence time, Unix timestamp in milliseconds (ms)
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Corresponding group information when alarm grouping is triggered
         * @type {Array.<GroupTriggerConditionInfo> || null}
         */
        this.GroupTriggerCondition = null;

        /**
         * Alarm level. 0: warning (Warn); 1: reminder (Info); 2: urgent (Critical).
         * @type {number || null}
         */
        this.AlarmLevel = null;

        /**
         * Monitored object type.
`0`: The same object is specified for all statements. `1`: An object is separately specified for each statement.
         * @type {number || null}
         */
        this.MonitorObjectType = null;

        /**
         * Notification channel type. 0 represents the internal notification channel of cls. 1 represents the Tencent Cloud observability platform notification channel.
         * @type {number || null}
         */
        this.SendType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.AlarmName = 'AlarmName' in params ? params.AlarmName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Trigger = 'Trigger' in params ? params.Trigger : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.AlarmPeriod = 'AlarmPeriod' in params ? params.AlarmPeriod : null;

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new AlertHistoryNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.GroupTriggerCondition) {
            this.GroupTriggerCondition = new Array();
            for (let z in params.GroupTriggerCondition) {
                let obj = new GroupTriggerConditionInfo();
                obj.deserialize(params.GroupTriggerCondition[z]);
                this.GroupTriggerCondition.push(obj);
            }
        }
        this.AlarmLevel = 'AlarmLevel' in params ? params.AlarmLevel : null;
        this.MonitorObjectType = 'MonitorObjectType' in params ? params.MonitorObjectType : null;
        this.SendType = 'SendType' in params ? params.SendType : null;

    }
}

/**
 * Log topic search information
 * @class
 */
class MultiTopicSearchInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the log topic to be searched for
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * You can pass through the `Context` value (validity: 1 hour) returned by the last API to continue to get logs, which can get up to 10,000 raw logs.
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * Alarm notification channel group detailed setting
 * @class
 */
class AlarmNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm notification channel group name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag information bound to the alarm notification channel group.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Alarm template type. Optional values:<br><li> Trigger - Alarm Trigger </li><br><li> Recovery - Alarm Recovery </li><br><li> All - Alarm Trigger and Alarm Recovery </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Alarm notification template recipient information.
         * @type {Array.<NoticeReceiver> || null}
         */
        this.NoticeReceivers = null;

        /**
         * Callback information of alarm notification template.
         * @type {Array.<WebCallback> || null}
         */
        this.WebCallbacks = null;

        /**
         * Alarm notification template ID.
         * @type {string || null}
         */
        this.AlarmNoticeId = null;

        /**
         * Notification rules.
         * @type {Array.<NoticeRule> || null}
         */
        this.NoticeRules = null;

        /**
         * Login-free operation alarm switch.
Parameter value: 1: Turn off 2: Turn on (enabled by default)
         * @type {number || null}
         */
        this.AlarmShieldStatus = null;

        /**
         * Call link domain name. It must start with http:// or https:// and must not end with /.
         * @type {string || null}
         */
        this.JumpDomain = null;

        /**
         * Shipping-related information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AlarmNoticeDeliverConfig || null}
         */
        this.AlarmNoticeDeliverConfig = null;

        /**
         * Creation time. Format: YYYY-MM-DD HH:MM:SS
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Latest update time. Format: YYYY-MM-DD HH:MM:SS
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Delivery log switch.

Parameter value:

1: Disabled

2: enable 

         * @type {number || null}
         */
        this.DeliverStatus = null;

        /**
         * Delivery log flag.

Parameter value:

1: Disabled

2: Enabled

3: Delivery exception
         * @type {number || null}
         */
        this.DeliverFlag = null;

        /**
         * Alarm silence status quantity information configured for a notification channel group.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AlarmShieldCount || null}
         */
        this.AlarmShieldCount = null;

        /**
         * Unify the setting of custom callback parameters.
-true: Use the custom callback parameters in the notification content template to override the request header and request body separately configured in the alarm policy.
-false: Prioritize using the request header and request body separately configured in the alarm policy.
         * @type {boolean || null}
         */
        this.CallbackPrioritize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeReceivers) {
            this.NoticeReceivers = new Array();
            for (let z in params.NoticeReceivers) {
                let obj = new NoticeReceiver();
                obj.deserialize(params.NoticeReceivers[z]);
                this.NoticeReceivers.push(obj);
            }
        }

        if (params.WebCallbacks) {
            this.WebCallbacks = new Array();
            for (let z in params.WebCallbacks) {
                let obj = new WebCallback();
                obj.deserialize(params.WebCallbacks[z]);
                this.WebCallbacks.push(obj);
            }
        }
        this.AlarmNoticeId = 'AlarmNoticeId' in params ? params.AlarmNoticeId : null;

        if (params.NoticeRules) {
            this.NoticeRules = new Array();
            for (let z in params.NoticeRules) {
                let obj = new NoticeRule();
                obj.deserialize(params.NoticeRules[z]);
                this.NoticeRules.push(obj);
            }
        }
        this.AlarmShieldStatus = 'AlarmShieldStatus' in params ? params.AlarmShieldStatus : null;
        this.JumpDomain = 'JumpDomain' in params ? params.JumpDomain : null;

        if (params.AlarmNoticeDeliverConfig) {
            let obj = new AlarmNoticeDeliverConfig();
            obj.deserialize(params.AlarmNoticeDeliverConfig)
            this.AlarmNoticeDeliverConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DeliverStatus = 'DeliverStatus' in params ? params.DeliverStatus : null;
        this.DeliverFlag = 'DeliverFlag' in params ? params.DeliverFlag : null;

        if (params.AlarmShieldCount) {
            let obj = new AlarmShieldCount();
            obj.deserialize(params.AlarmShieldCount)
            this.AlarmShieldCount = obj;
        }
        this.CallbackPrioritize = 'CallbackPrioritize' in params ? params.CallbackPrioritize : null;

    }
}

/**
 * ModifyNoticeContent request structure.
 * @class
 */
class ModifyNoticeContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification content template ID. Obtain the notification content template ID by searching the notification content template (https://www.tencentcloud.com/document/api/614/111714?from_cn_redirect=1).
         * @type {string || null}
         */
        this.NoticeContentId = null;

        /**
         * Notification content template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Content language of the notification.

0-Chinese by default, 1-English
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Notification content template details.
         * @type {Array.<NoticeContent> || null}
         */
        this.NoticeContents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeContentId = 'NoticeContentId' in params ? params.NoticeContentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.NoticeContents) {
            this.NoticeContents = new Array();
            for (let z in params.NoticeContents) {
                let obj = new NoticeContent();
                obj.deserialize(params.NoticeContents[z]);
                this.NoticeContents.push(obj);
            }
        }

    }
}

/**
 * ModifyKafkaRecharge response structure.
 * @class
 */
class ModifyKafkaRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * Pre-aggregation task details.
 * @class
 */
class RecordingRuleTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pre-aggregation task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Source Log Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Pre-aggregation task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation Time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task Update Time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Task status: 1: Running 2: Stopped 3: Error - Source log topic not found 4: Error - Target topic not found

5: Access permission issue 6: Internal failure 7: Other faults
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task status: 1 Enabled, 2 Disabled
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Schedule Start Time
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * Scheduling Interval (Minutes)
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * Execution Delay (Seconds)
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Pre-aggregation search statement.
         * @type {string || null}
         */
        this.RecordingRuleContent = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Custom metric name.
         * @type {Array.<MetricLabel> || null}
         */
        this.CustomMetricLabels = null;

        /**
         * YAML configuration file ID.
         * @type {string || null}
         */
        this.YamlId = null;

        /**
         * YAML configuration file name.
         * @type {string || null}
         */
        this.YamlConfigName = null;

        /**
         * Target log topic ID
         * @type {string || null}
         */
        this.DstTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.RecordingRuleContent = 'RecordingRuleContent' in params ? params.RecordingRuleContent : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.CustomMetricLabels) {
            this.CustomMetricLabels = new Array();
            for (let z in params.CustomMetricLabels) {
                let obj = new MetricLabel();
                obj.deserialize(params.CustomMetricLabels[z]);
                this.CustomMetricLabels.push(obj);
            }
        }
        this.YamlId = 'YamlId' in params ? params.YamlId : null;
        this.YamlConfigName = 'YamlConfigName' in params ? params.YamlConfigName : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;

    }
}

/**
 * collection object
 * @class
 */
class MetricSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom metric collection configuration item.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CustomMetricSpec> || null}
         */
        this.CustomSpecs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CustomSpecs) {
            this.CustomSpecs = new Array();
            for (let z in params.CustomSpecs) {
                let obj = new CustomMetricSpec();
                obj.deserialize(params.CustomSpecs[z]);
                this.CustomSpecs.push(obj);
            }
        }

    }
}

/**
 * DescribeMachines response structure.
 * @class
 */
class DescribeMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group of machine status information
         * @type {Array.<MachineInfo> || null}
         */
        this.Machines = null;

        /**
         * Whether the machine group has enabled automatic upgrade function. 0: Automatic upgrade not enabled; 1: Automatic upgrade enabled.
         * @type {number || null}
         */
        this.AutoUpdate = null;

        /**
         * Preset start time of automatic update of machine group
         * @type {string || null}
         */
        this.UpdateStartTime = null;

        /**
         * Preset end time of automatic update of machine group
         * @type {string || null}
         */
        this.UpdateEndTime = null;

        /**
         * Latest LogListener version available to the current user
         * @type {string || null}
         */
        this.LatestAgentVersion = null;

        /**
         * Whether to enable the service log
         * @type {boolean || null}
         */
        this.ServiceLogging = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new MachineInfo();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.AutoUpdate = 'AutoUpdate' in params ? params.AutoUpdate : null;
        this.UpdateStartTime = 'UpdateStartTime' in params ? params.UpdateStartTime : null;
        this.UpdateEndTime = 'UpdateEndTime' in params ? params.UpdateEndTime : null;
        this.LatestAgentVersion = 'LatestAgentVersion' in params ? params.LatestAgentVersion : null;
        this.ServiceLogging = 'ServiceLogging' in params ? params.ServiceLogging : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEsRecharge request structure.
 * @class
 */
class DeleteEsRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Log topic id of the task configuration.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- Obtain the log topic Id through [Create Log Topic](https://www.tencentcloud.com/document/product/614/56456?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * Configuration information of the third-party verification login role for DataSight
 * @class
 */
class AuthRoleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Auth role name</p>
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * <p>SecretId of the permission corresponding to the Auth role</p>
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * <p>SecretKey of the permission corresponding to the Auth role</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * Log context information
 * @class
 */
class LogContextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log source device
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Collection path
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * Log content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Log package number
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Log number in log package
         * @type {number || null}
         */
        this.PkgLogId = null;

        /**
         * Log timestamp
         * @type {number || null}
         */
        this.BTime = null;

        /**
         * Log source host name
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Raw log (only available when there is an error in creating the log index).
         * @type {string || null}
         */
        this.RawLog = null;

        /**
         * Cause for log index creation exception. It has a value only when a log index creation exception occurs.
         * @type {string || null}
         */
        this.IndexStatus = null;

        /**
         * Highlighted description of the log content
         * @type {Array.<HighLightItem> || null}
         */
        this.HighLights = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.BTime = 'BTime' in params ? params.BTime : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.RawLog = 'RawLog' in params ? params.RawLog : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;

        if (params.HighLights) {
            this.HighLights = new Array();
            for (let z in params.HighLights) {
                let obj = new HighLightItem();
                obj.deserialize(params.HighLights[z]);
                this.HighLights.push(obj);
            }
        }

    }
}

/**
 * ModifyMetricSubscribe request structure.
 * @class
 */
class ModifyMetricSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID of a metric collection task. This parameter is required.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Metric collection task ID. This parameter is required.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Name. It can contain a maximum of 64 characters and should start with a letter. Digits (0-9), uppercase letters (A-Z), lowercase letters (a-z), underscores (_), and Chinese characters are allowed.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cloud product namespace.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric configuration information.
         * @type {Array.<MetricConfig> || null}
         */
        this.Metrics = null;

        /**
         * Instance configuration information.
         * @type {InstanceConfig || null}
         */
        this.InstanceInfo = null;

        /**
         * Task status.

1: disabled

2: Enable
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricConfig();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

        if (params.InstanceInfo) {
            let obj = new InstanceConfig();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteRecordingRuleYamlTask request structure.
 * @class
 */
class DeleteRecordingRuleYamlTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.YamlId = null;

        /**
         * <p>Source metric topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.YamlId = 'YamlId' in params ? params.YamlId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DeleteConfigFromMachineGroup request structure.
 * @class
 */
class DeleteConfigFromMachineGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group ID
-Get the machine group Id through [Get Machine Group List](https://www.tencentcloud.com/document/api/614/56438?from_cn_redirect=1).
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Collection Configuration ID
-Obtain the collection configuration Id through [Access collection rule configuration](https://www.tencentcloud.com/document/product/614/58616?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DescribeRecordingRuleTask response structure.
 * @class
 */
class DescribeRecordingRuleTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task list information of RecordingRule</p>
         * @type {Array.<RecordingRuleTaskInfo> || null}
         */
        this.RecordingRuleTaskInfos = null;

        /**
         * <p>Total number of tasks.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordingRuleTaskInfos) {
            this.RecordingRuleTaskInfos = new Array();
            for (let z in params.RecordingRuleTaskInfos) {
                let obj = new RecordingRuleTaskInfo();
                obj.deserialize(params.RecordingRuleTaskInfos[z]);
                this.RecordingRuleTaskInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddMachineGroupInfo response structure.
 * @class
 */
class AddMachineGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * User kafka extended information
 * @class
 */
class UserKafkaMeta extends  AbstractModel {
    constructor(){
        super();

        /**
         * User kafka version
Support the following versions:
  - 0.10.2.0
  - 1.0.0
  - 2.0.0
  - 2.2.0
  - 2.4.0
  - 2.6.0
  - 2.7.0
  - 2.8.0
  - 3.0.0
  - 3.2.0
         * @type {string || null}
         */
        this.KafkaVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KafkaVersion = 'KafkaVersion' in params ? params.KafkaVersion : null;

    }
}

/**
 * Filters
 * @class
 */
class MetricLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Metric content.
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
 * ModifyRecordingRuleTask request structure.
 * @class
 */
class ModifyRecordingRuleTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>Source metric topic id</p>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <p>Target metric topic id.</p>
         * @type {string || null}
         */
        this.DstTopicId = null;

        /**
         * <p>Task Name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Task start status. 1: Enabled, 2: Disabled</p>
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * <p>Schedule start time, Unix timestamp, in milliseconds</p>
         * @type {number || null}
         */
        this.ProcessStartTime = null;

        /**
         * <p>Scheduling interval (minutes), supported range (0,1440] minutes.</p>
         * @type {number || null}
         */
        this.ProcessPeriod = null;

        /**
         * <p>Execution Delay (Seconds)</p>
         * @type {number || null}
         */
        this.ProcessDelay = null;

        /**
         * <p>Metric name</p>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * <p>Execution statement (PromQL)</p>
         * @type {string || null}
         */
        this.RecordingRuleContent = null;

        /**
         * <p>Custom metric name</p>
         * @type {Array.<MetricLabel> || null}
         */
        this.CustomMetricLabels = null;

        /**
         * <p>Whether to enable service log shipping. Valid values: 1: disable; 2: enable.</p>
         * @type {number || null}
         */
        this.HasServicesLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.DstTopicId = 'DstTopicId' in params ? params.DstTopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;
        this.ProcessStartTime = 'ProcessStartTime' in params ? params.ProcessStartTime : null;
        this.ProcessPeriod = 'ProcessPeriod' in params ? params.ProcessPeriod : null;
        this.ProcessDelay = 'ProcessDelay' in params ? params.ProcessDelay : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RecordingRuleContent = 'RecordingRuleContent' in params ? params.RecordingRuleContent : null;

        if (params.CustomMetricLabels) {
            this.CustomMetricLabels = new Array();
            for (let z in params.CustomMetricLabels) {
                let obj = new MetricLabel();
                obj.deserialize(params.CustomMetricLabels[z]);
                this.CustomMetricLabels.push(obj);
            }
        }
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;

    }
}

/**
 * DescribeMetricSubscribePreview response structure.
 * @class
 */
class DescribeMetricSubscribePreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Success count
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * Failure Count
         * @type {number || null}
         */
        this.FailCount = null;

        /**
         * Data of a successful instance.
         * @type {Array.<InstanceData> || null}
         */
        this.SuccessInstances = null;

        /**
         * Data of a failed instance.
         * @type {Array.<InstanceData> || null}
         */
        this.FailInstances = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;

        if (params.SuccessInstances) {
            this.SuccessInstances = new Array();
            for (let z in params.SuccessInstances) {
                let obj = new InstanceData();
                obj.deserialize(params.SuccessInstances[z]);
                this.SuccessInstances.push(obj);
            }
        }

        if (params.FailInstances) {
            this.FailInstances = new Array();
            for (let z in params.FailInstances) {
                let obj = new InstanceData();
                obj.deserialize(params.FailInstances[z]);
                this.FailInstances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScheduledSqlInfo request structure.
 * @class
 */
class DescribeScheduledSqlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * -srcTopicName is filtered by [source log topic name] with fuzzy matching. Type: String. Required: No. Example: business log topic 1. Get the log topic name by [get log topic list](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-Filter dstTopicName by [target log topic name] with fuzzy matching. Type: String. Required: No. Example: Business log topic 2. Get the log topic name by [getting the log topic list](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
- srcTopicId is filtered by [source log topic ID]. Type: String. Required: No. Example: a4478687-2382-4486-9692-de7986350f6b. Get the log topic id by [get log topic list](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-dstTopicId is filtered by [target log topic ID]. Type: String. Required: No. Example: bd4d3375-d72a-4cd2-988d-d8eda2bd62b0. Get log topic ID by [get log topic list](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
-bizType is filtered by [topic type], 0: log topic; 1: metric topic. Type: String. Required: No.
-Status is filtered by [task status]: 1: running; 2: stop; 3: exception. Type: String. Required: no.
-Filter the taskName by [task name] with fuzzy matching. Type: String. Required: No. Example: metricTask. Search the task name by [retrieving the scheduled SQL analysis task list](https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1).
-taskId is filtered by [task ID] with fuzzy matching. Type: String. Required: No. Example: 9c64f9c1-a14e-4b59-b074-5b73cac3dd66. Obtain the task ID by [retrieving the scheduled SQL analysis task list](https://www.tencentcloud.com/document/product/614/95519?from_cn_redirect=1).
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
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * DeleteConsumerGroup response structure.
 * @class
 */
class DeleteConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * SearchLog request structure.
 * @class
 */
class SearchLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Start time for logs to be searched and analyzed, <strong>Unix timestamp (ms)</strong></p>
         * @type {number || null}
         */
        this.From = null;

        /**
         * <p>End time for logs to be searched and analyzed, <strong>Unix timestamp (ms)</strong></p>
         * @type {number || null}
         */
        this.To = null;

        /**
         * <p>The retrieval analysis statement has a maximum length of 12KB.<br>The statement consists of <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1" target="_blank">[retrieval condition]</a> | <a href="https://www.tencentcloud.com/document/product/614/44061?from_cn_redirect=1" target="_blank">[SQL statement]</a>. When there is no need to perform statistical analysis on logs, the pipe character <code> | </code> and SQL statement can be omitted.<br>Use * or an empty string to search all logs.</p><p>Default value: empty string</p>
         * @type {string || null}
         */
        this.QueryString = null;

        /**
         * <p>Search syntax rules. Default value is 1. Recommended for use is 1.</p><ul><li>0: Lucene syntax</li><li>1: CQL syntax (CLS Query Language, dedicated retrieval syntax for log service)</li></ul><p>For details, see <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1#RetrievesConditionalRules" target="_blank">retrieval condition syntax rules</a>.</p><p>Default value: 1</p>
         * @type {number || null}
         */
        this.QuerySyntax = null;

        /**
         * <ul><li>Log topic ID to be retrieved and analyzed. Only one can be specified.</li><li>If needed to retrieve multiple log topics at the same time, please use the Topics parameter.</li><li>TopicId and Topics cannot include both. Only select one in a single request.</li></ul>
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * <ul><li>Log topic list for retrieval and analysis supports a maximum of 50 log topics.</li><li>Use TopicId to retrieve a single log topic.</li><li>TopicId and Topics cannot be used simultaneously. Only select one in a single request.</li></ul>
         * @type {Array.<MultiTopicSearchInformation> || null}
         */
        this.Topics = null;

        /**
         * <p>Whether raw logs are returned in time sequence. Value range: asc (ascending), desc (descending). Default is desc.<br>Note:</p><ul><li>Only valid when the search and analysis statement (Query) does not contain SQL.</li><li>For SQL result sorting, see <a href="https://www.tencentcloud.com/document/product/614/58978?from_cn_redirect=1" target="_blank">SQL ORDER BY syntax</a>.</li></ul>
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * <p>Number of raw logs returned in a single query. Default is 100, maximum value is 1000.<br>Note:</p><ul><li>Only valid when the search and analysis statement (Query) does not contain SQL.</li><li>For the method for specifying SQL result count, see <a href="https://www.tencentcloud.com/document/product/614/58977?from_cn_redirect=1" target="_blank">SQL LIMIT syntax</a>.</li></ul><p>There are two methods to retrieve more logs:</p><ul><li>Context: Pass the Context value returned by the last API call to retrieve more logs. The total number of raw logs that can be obtained is up to 10,000 entries.</li><li>Offset: The offset refers to the line number from which raw logs start to return. There is no log entry limit.</li></ul>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset of the raw log Query, indicating the line number from which the raw log starts to return, defaults to 0.<br>Note:</p><ul><li>Valid only when the retrieval statement (Query) does not contain SQL</li><li>Cannot be used with Context parameter simultaneously</li><li>Applicable only for single log topic retrieval</li></ul>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Pass the Context value returned by the last API call to obtain more logs later. The total number of raw logs that can be retrieved is up to 10,000 entries, with an expiration time of 1 hour.<br>Note:</p><ul><li>When passing this parameter, do not modify other parameters except this one.</li><li>Applicable only for single log topic retrieval. To retrieve multiple log topics, use the Context in Topics.</li><li>Valid only when the search and analysis statement (Query) does not contain SQL. For SQL to obtain follow-up results, see <a href="https://www.tencentcloud.com/document/product/614/58977?from_cn_redirect=1" target="_blank">SQL LIMIT syntax</a>.</li></ul>
         * @type {string || null}
         */
        this.Context = null;

        /**
         * <p>Whether to sample raw logs first and then perform statistical analysis when executing statistical analysis (SQL included in Query).<br>0: auto-sample;<br>0–1: sample at the specified sampling rate, such as 0.02;<br>1: indicates no sampling, that is, precise analysis.<br>The default value is 1.</p>
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * <p>true means using the new retrieval result return method, and output parameters AnalysisRecords and Columns are valid.<br>false means using the old retrieval result return method, and output AnalysisResults and ColNames are valid.<br>There is a slight difference in encoding format between the two return methods. Recommend using true.</p>
         * @type {boolean || null}
         */
        this.UseNewAnalysis = null;

        /**
         * <p>Whether to highlight keywords that meet retrieval criteria, generally used for highlighting. Only key-value retrieval is supported, full-text retrieval is not supported.</p>
         * @type {boolean || null}
         */
        this.HighLight = null;

        /**
         * <p><strong>The Query field is deprecated. Please use the QueryString field.</strong><br>Field differences: When the syntax rule is not specified, Query uses Lucene syntax by default, while QueryString uses CQL syntax. For syntax differences, see <a href="https://www.tencentcloud.com/document/product/614/47044?from_cn_redirect=1#RetrievesConditionalRules">Syntax Rule</a>.</p>
         * @type {string || null}
         */
        this.Query = null;

        /**
         * <p><strong>The SyntaxRule field is deprecated. Please use the QuerySyntax field.</strong></p><p>Field differences:</p><ul><li>SyntaxRule is used in conjunction with the Query field and uses Lucene syntax by default.</li><li>QuerySyntax is used in conjunction with the QueryString field and uses CQL syntax by default.</li></ul><p>SyntaxRule parameter description:</p><ul><li>0: Lucene syntax</li><li>1: CQL syntax (CLS Query Language, a dedicated retrieval syntax for log service)</li></ul>
         * @type {number || null}
         */
        this.SyntaxRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.QueryString = 'QueryString' in params ? params.QueryString : null;
        this.QuerySyntax = 'QuerySyntax' in params ? params.QuerySyntax : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new MultiTopicSearchInformation();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.UseNewAnalysis = 'UseNewAnalysis' in params ? params.UseNewAnalysis : null;
        this.HighLight = 'HighLight' in params ? params.HighLight : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.SyntaxRule = 'SyntaxRule' in params ? params.SyntaxRule : null;

    }
}

/**
 * DescribeKafkaConsumerGroupDetail request structure.
 * @class
 */
class DescribeKafkaConsumerGroupDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID.
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Consumer group name
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * DescribeConsumerOffsets request structure.
 * @class
 */
class DescribeConsumerOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumer group flag corresponding to a log topic.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Timestamp (second-level).
         * @type {string || null}
         */
        this.From = null;

        /**
         * Logset ID (corresponding to a log topic).
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Partition ID
         * @type {string || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.From = 'From' in params ? params.From : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * DeleteConsole request structure.
 * @class
 */
class DeleteConsoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console Id</p>
         * @type {string || null}
         */
        this.ConsoleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleId = 'ConsoleId' in params ? params.ConsoleId : null;

    }
}

/**
 * CreateDataTransform request structure.
 * @class
 */
class CreateDataTransformRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. 1: Specify topic; 2: Dynamic creation. For details, please refer to Creating Processing Task Document (https://intl.cloud.tencent.com/document/product/614/63940?from_cn_redirect=1).
         * @type {number || null}
         */
        this.FuncType = null;

        /**
         * Log topic ID
-Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {string || null}
         */
        this.SrcTopicId = null;

        /**
         * Processing task name
Name limit
-Cannot be an empty string
-Cannot contain character '|'
-Longest 128 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Processing statement. When FuncType is 2, EtlContent must use [log_auto_output](https://www.tencentcloud.com/document/product/614/70733?from_cn_redirect=1#b3c58797-4825-4807-bef4-68106e25024f). 

Other reference documents

-[Create a processing task](https://www.tencentcloud.com/document/product/614/63940?from_cn_redirect=1) 
-[Function overview](https://www.tencentcloud.com/document/product/614/70395?from_cn_redirect=1)
         * @type {string || null}
         */
        this.EtlContent = null;

        /**
         * Processing type.
1: Process preview using random data from the source log topic; 2: Process preview using user-defined test data; 3: Create real processing tasks.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Target topic_id and alias of the processing task. This parameter is required when FuncType=1, and not required when FuncType=2.
Target topic_id. Obtain the log topic Id through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
Alias limitation: 1. Cannot be an empty string. 2. Cannot contain the character '|'.

         * @type {Array.<DataTransformResouceInfo> || null}
         */
        this.DstResources = null;

        /**
         * Task status. Valid values: 1 (enabled) and 2 (disabled).
         * @type {number || null}
         */
        this.EnableFlag = null;

        /**
         * Test data for preview processing results
Obtain the target log topic ID through [Get Log Topic List](https://www.tencentcloud.com/document/product/614/56454?from_cn_redirect=1).
         * @type {Array.<PreviewLogStatistic> || null}
         */
        this.PreviewLogStatistics = null;

        /**
         * When FuncType is 2, whether to discard data if the count of dynamically created logsets and log topics exceeds product specification limits, default false.

false: Create a fallback logset and log topic and write to fallback topic.
true: Discard log data.
         * @type {boolean || null}
         */
        this.BackupGiveUpData = null;

        /**
         * Whether to enable service log shipping. Valid values: 1: disable; 2: enable.
         * @type {number || null}
         */
        this.HasServicesLog = null;

        /**
         * Data processing type. Valid values: 0: standard processing task; 1: pre-processing task. A pre-processing task can process the collected logs and then write them into a log topic.
         * @type {number || null}
         */
        this.DataTransformType = null;

        /**
         * Log status of failed jobs, 1: not retain (default), 2: retain.
         * @type {number || null}
         */
        this.KeepFailureLog = null;

        /**
         * Field name of a failed log.
         * @type {string || null}
         */
        this.FailureLogKey = null;

        /**
         * Specify the start time of data processing, a Unix second-level timestamp.
-For any time range within the log topic lifecycle, if it exceeds the lifecycle, only process the part with data within the lifecycle.
         * @type {number || null}
         */
        this.ProcessFromTimestamp = null;

        /**
         * Specify the end time of data processing, a Unix second-level timestamp.

-Cannot specify a future time
-Leave blank to run constantly
         * @type {number || null}
         */
        this.ProcessToTimestamp = null;

        /**
         * Preview a task (TaskType is 1 or 2) that is already created and used the capacity to associate with external data. This parameter is required.
Data processing task ID - Search the data processing task list basic information (https://www.tencentcloud.com/document/product/614/72182?from_cn_redirect=1) to get the data processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Associated data source information
         * @type {Array.<DataTransformSqlDataSource> || null}
         */
        this.DataTransformSqlDataSources = null;

        /**
         * Set environment variable
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FuncType = 'FuncType' in params ? params.FuncType : null;
        this.SrcTopicId = 'SrcTopicId' in params ? params.SrcTopicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EtlContent = 'EtlContent' in params ? params.EtlContent : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.DstResources) {
            this.DstResources = new Array();
            for (let z in params.DstResources) {
                let obj = new DataTransformResouceInfo();
                obj.deserialize(params.DstResources[z]);
                this.DstResources.push(obj);
            }
        }
        this.EnableFlag = 'EnableFlag' in params ? params.EnableFlag : null;

        if (params.PreviewLogStatistics) {
            this.PreviewLogStatistics = new Array();
            for (let z in params.PreviewLogStatistics) {
                let obj = new PreviewLogStatistic();
                obj.deserialize(params.PreviewLogStatistics[z]);
                this.PreviewLogStatistics.push(obj);
            }
        }
        this.BackupGiveUpData = 'BackupGiveUpData' in params ? params.BackupGiveUpData : null;
        this.HasServicesLog = 'HasServicesLog' in params ? params.HasServicesLog : null;
        this.DataTransformType = 'DataTransformType' in params ? params.DataTransformType : null;
        this.KeepFailureLog = 'KeepFailureLog' in params ? params.KeepFailureLog : null;
        this.FailureLogKey = 'FailureLogKey' in params ? params.FailureLogKey : null;
        this.ProcessFromTimestamp = 'ProcessFromTimestamp' in params ? params.ProcessFromTimestamp : null;
        this.ProcessToTimestamp = 'ProcessToTimestamp' in params ? params.ProcessToTimestamp : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.DataTransformSqlDataSources) {
            this.DataTransformSqlDataSources = new Array();
            for (let z in params.DataTransformSqlDataSources) {
                let obj = new DataTransformSqlDataSource();
                obj.deserialize(params.DataTransformSqlDataSources[z]);
                this.DataTransformSqlDataSources.push(obj);
            }
        }

        if (params.EnvInfos) {
            this.EnvInfos = new Array();
            for (let z in params.EnvInfos) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvInfos[z]);
                this.EnvInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeMachineGroups response structure.
 * @class
 */
class DescribeMachineGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine group information list
         * @type {Array.<MachineGroupInfo> || null}
         */
        this.MachineGroups = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MachineGroups) {
            this.MachineGroups = new Array();
            for (let z in params.MachineGroups) {
                let obj = new MachineGroupInfo();
                obj.deserialize(params.MachineGroups[z]);
                this.MachineGroups.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogsets request structure.
 * @class
 */
class DescribeLogsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * logsetName
-Filter by [logset name].
- Type: String
-Required: No
- Obtain the logset name through [Get Logset List](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).
logsetId
-Filter by [logset ID].
- Type: String
-Required: No
-Obtain the logset Id through [Get Logset List](https://www.tencentcloud.com/document/product/614/58624?from_cn_redirect=1).

tagKey
- Filter by [Tag key].
- Type: String
-Required: No

tag:tagKey
-Filter by [tag key-value pair]. Replace tagKey with a specific tag key.
- Type: String
-Required: No

The maximum number of Filters per request is 10, and the maximum for Filter.Values is 5.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Page offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100
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
 * Metadata array item
 * @class
 */
class MetadataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Metadata tag key</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Metadata tag value</p>
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
 * `Parquet` contents
 * @class
 */
class ParquetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * `ParquetKeyInfo` array
         * @type {Array.<ParquetKeyInfo> || null}
         */
        this.ParquetKeyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ParquetKeyInfo) {
            this.ParquetKeyInfo = new Array();
            for (let z in params.ParquetKeyInfo) {
                let obj = new ParquetKeyInfo();
                obj.deserialize(params.ParquetKeyInfo[z]);
                this.ParquetKeyInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyRecordingRuleTask response structure.
 * @class
 */
class ModifyRecordingRuleTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Pre-aggregation task id.</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsoles response structure.
 * @class
 */
class DescribeConsolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DataSight Console Instance List</p>
         * @type {Array.<Console> || null}
         */
        this.Consoles = null;

        /**
         * <p>Total number of instances</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Consoles) {
            this.Consoles = new Array();
            for (let z in params.Consoles) {
                let obj = new Console();
                obj.deserialize(params.Consoles[z]);
                this.Consoles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendConsumerHeartbeat request structure.
 * @class
 */
class SendConsumerHeartbeatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flag of the consumer group that reports the heartbeat.
         * @type {string || null}
         */
        this.ConsumerGroup = null;

        /**
         * Consumer name for reporting heartbeat
(alphanumeric underscore, no numbers or _ at the beginning, length less than 256)
         * @type {string || null}
         */
        this.Consumer = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Topic partition information.
         * @type {Array.<TopicPartitionInfo> || null}
         */
        this.TopicPartitionsInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroup = 'ConsumerGroup' in params ? params.ConsumerGroup : null;
        this.Consumer = 'Consumer' in params ? params.Consumer : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

        if (params.TopicPartitionsInfo) {
            this.TopicPartitionsInfo = new Array();
            for (let z in params.TopicPartitionsInfo) {
                let obj = new TopicPartitionInfo();
                obj.deserialize(params.TopicPartitionsInfo[z]);
                this.TopicPartitionsInfo.push(obj);
            }
        }

    }
}

/**
 * CommitConsumerOffsets response structure.
 * @class
 */
class CommitConsumerOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * DescribeSplunkPreview response structure.
 * @class
 */
class DescribeSplunkPreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Preview result</p>
         * @type {Array.<string> || null}
         */
        this.PreviewInfos = null;

        /**
         * <p>Filtered results</p>
         * @type {FilterStatistics || null}
         */
        this.FilterStats = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreviewInfos = 'PreviewInfos' in params ? params.PreviewInfos : null;

        if (params.FilterStats) {
            let obj = new FilterStatistics();
            obj.deserialize(params.FilterStats)
            this.FilterStats = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    AlarmInfo: AlarmInfo,
    DescribeLogHistogramRequest: DescribeLogHistogramRequest,
    FilterStatistics: FilterStatistics,
    DescribeNetworkApplicationDetailRequest: DescribeNetworkApplicationDetailRequest,
    DeleteShipperRequest: DeleteShipperRequest,
    DeleteConsoleResponse: DeleteConsoleResponse,
    DynamicIndex: DynamicIndex,
    CreateRebuildIndexTaskResponse: CreateRebuildIndexTaskResponse,
    CreateSearchViewRequest: CreateSearchViewRequest,
    CheckFunctionRequest: CheckFunctionRequest,
    ModifyNetworkApplicationResponse: ModifyNetworkApplicationResponse,
    NetInfo: NetInfo,
    CreateLogsetRequest: CreateLogsetRequest,
    CreateScheduledSqlResponse: CreateScheduledSqlResponse,
    RecordingRuleYamlTaskInfo: RecordingRuleYamlTaskInfo,
    SearchLogResponse: SearchLogResponse,
    DeleteMetricSubscribeResponse: DeleteMetricSubscribeResponse,
    DescribePartitionsRequest: DescribePartitionsRequest,
    CheckFunctionResponse: CheckFunctionResponse,
    ModifyAlarmResponse: ModifyAlarmResponse,
    PreviewKafkaRechargeRequest: PreviewKafkaRechargeRequest,
    DeliverConfig: DeliverConfig,
    DescribeClusterBaseMetricConfigsRequest: DescribeClusterBaseMetricConfigsRequest,
    DeleteMetricSubscribeRequest: DeleteMetricSubscribeRequest,
    AdvancedConsumerConfiguration: AdvancedConsumerConfiguration,
    ScheduledSqlResouceInfo: ScheduledSqlResouceInfo,
    ConditionInfo: ConditionInfo,
    EsInfo: EsInfo,
    DeleteMachineGroupResponse: DeleteMachineGroupResponse,
    Tag: Tag,
    ScheduledSqlTaskInfo: ScheduledSqlTaskInfo,
    CreateDlcDeliverResponse: CreateDlcDeliverResponse,
    CreateConsumerGroupRequest: CreateConsumerGroupRequest,
    Label: Label,
    ModifyMachineGroupResponse: ModifyMachineGroupResponse,
    RuleInfo: RuleInfo,
    DescribeConsumerPreviewRequest: DescribeConsumerPreviewRequest,
    CreateRecordingRuleTaskResponse: CreateRecordingRuleTaskResponse,
    DeleteDashboardResponse: DeleteDashboardResponse,
    OpenClsServiceRequest: OpenClsServiceRequest,
    LogItems: LogItems,
    DescribeRecordingRuleYamlTaskResponse: DescribeRecordingRuleYamlTaskResponse,
    RuleKeyValueInfo: RuleKeyValueInfo,
    DeleteExportResponse: DeleteExportResponse,
    DescribeDashboardSubscribesRequest: DescribeDashboardSubscribesRequest,
    PartitionInfo: PartitionInfo,
    CreateNoticeContentResponse: CreateNoticeContentResponse,
    OpenClsServiceResponse: OpenClsServiceResponse,
    ModifyAlarmRequest: ModifyAlarmRequest,
    RetryShipperTaskResponse: RetryShipperTaskResponse,
    SplitPartitionRequest: SplitPartitionRequest,
    CreateAlarmShieldRequest: CreateAlarmShieldRequest,
    MachineGroupInfo: MachineGroupInfo,
    DeleteAlarmShieldResponse: DeleteAlarmShieldResponse,
    TopicExtendInfo: TopicExtendInfo,
    CreateIndexRequest: CreateIndexRequest,
    CreateConsoleResponse: CreateConsoleResponse,
    CreateTopicRequest: CreateTopicRequest,
    ModifyDataTransformRequest: ModifyDataTransformRequest,
    CreateDlcDeliverRequest: CreateDlcDeliverRequest,
    Dimension: Dimension,
    ModifyScheduledSqlRequest: ModifyScheduledSqlRequest,
    DeleteConfigResponse: DeleteConfigResponse,
    CreateDeliverCloudFunctionRequest: CreateDeliverCloudFunctionRequest,
    ModifyDlcDeliverResponse: ModifyDlcDeliverResponse,
    ModifyDashboardResponse: ModifyDashboardResponse,
    DescribeMetricSubscribesResponse: DescribeMetricSubscribesResponse,
    CreateWebCallbackRequest: CreateWebCallbackRequest,
    DescribeClusterMetricConfigsRequest: DescribeClusterMetricConfigsRequest,
    DescribeConfigsRequest: DescribeConfigsRequest,
    DlcPartitionExtra: DlcPartitionExtra,
    DescribeKafkaConsumerTopicsResponse: DescribeKafkaConsumerTopicsResponse,
    QueryMetricRequest: QueryMetricRequest,
    CloudProductLogTaskInfo: CloudProductLogTaskInfo,
    Instance: Instance,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    DeleteDataTransformRequest: DeleteDataTransformRequest,
    AddMachineGroupInfoRequest: AddMachineGroupInfoRequest,
    DescribeKafkaConsumerGroupListResponse: DescribeKafkaConsumerGroupListResponse,
    CreateHostMetricConfigResponse: CreateHostMetricConfigResponse,
    ModifyConsumerGroupRequest: ModifyConsumerGroupRequest,
    CreateTopicResponse: CreateTopicResponse,
    DeleteAlarmResponse: DeleteAlarmResponse,
    DescribeDlcDeliversResponse: DescribeDlcDeliversResponse,
    ModifyIndexRequest: ModifyIndexRequest,
    MachineInfo: MachineInfo,
    ValueInfo: ValueInfo,
    GetAlarmLogRequest: GetAlarmLogRequest,
    DeleteCosRechargeResponse: DeleteCosRechargeResponse,
    CustomMetricSpec: CustomMetricSpec,
    DlcPartitionInfo: DlcPartitionInfo,
    GroupTriggerConditionInfo: GroupTriggerConditionInfo,
    KafkaRechargeInfo: KafkaRechargeInfo,
    ConfigInfo: ConfigInfo,
    DeleteTopicRequest: DeleteTopicRequest,
    ModifyShipperRequest: ModifyShipperRequest,
    MonitorNoticeRule: MonitorNoticeRule,
    DescribeKafkaConsumerPreviewRequest: DescribeKafkaConsumerPreviewRequest,
    CreateDeliverCloudFunctionResponse: CreateDeliverCloudFunctionResponse,
    PreviewLogStatistic: PreviewLogStatistic,
    CompressInfo: CompressInfo,
    CreateConfigResponse: CreateConfigResponse,
    CreateCloudProductLogCollectionResponse: CreateCloudProductLogCollectionResponse,
    SearchCosRechargeInfoResponse: SearchCosRechargeInfoResponse,
    CreateEsRechargeResponse: CreateEsRechargeResponse,
    KeyValueInfo: KeyValueInfo,
    DataTransformSqlDataSource: DataTransformSqlDataSource,
    ModifyMachineGroupRequest: ModifyMachineGroupRequest,
    AnonymousInfo: AnonymousInfo,
    DescribeHostMetricConfigsResponse: DescribeHostMetricConfigsResponse,
    CreateDashboardRequest: CreateDashboardRequest,
    DeleteAlarmNoticeRequest: DeleteAlarmNoticeRequest,
    DescribeScheduledSqlInfoResponse: DescribeScheduledSqlInfoResponse,
    DescribeConsumersRequest: DescribeConsumersRequest,
    ModifyRecordingRuleYamlTaskResponse: ModifyRecordingRuleYamlTaskResponse,
    CreateMachineGroupRequest: CreateMachineGroupRequest,
    DescribeExportsResponse: DescribeExportsResponse,
    CreateNoticeContentRequest: CreateNoticeContentRequest,
    CsvInfo: CsvInfo,
    DescribeCloudProductLogTasksRequest: DescribeCloudProductLogTasksRequest,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    HistogramInfo: HistogramInfo,
    DescribeTopicMetricConfigsRequest: DescribeTopicMetricConfigsRequest,
    ModifyLogsetRequest: ModifyLogsetRequest,
    SearchDashboardSubscribeResponse: SearchDashboardSubscribeResponse,
    ModifyCosRechargeRequest: ModifyCosRechargeRequest,
    DescribeClusterMetricConfigsResponse: DescribeClusterMetricConfigsResponse,
    DescribeWebCallbacksRequest: DescribeWebCallbacksRequest,
    ConsumerContent: ConsumerContent,
    CreateMetricSubscribeResponse: CreateMetricSubscribeResponse,
    DescribeMachinesRequest: DescribeMachinesRequest,
    KeyRegexInfo: KeyRegexInfo,
    DeleteSplunkDeliverResponse: DeleteSplunkDeliverResponse,
    DescribeTopicMetricConfigsResponse: DescribeTopicMetricConfigsResponse,
    DeleteDashboardSubscribeRequest: DeleteDashboardSubscribeRequest,
    LogInfo: LogInfo,
    DeleteAlarmNoticeResponse: DeleteAlarmNoticeResponse,
    DeleteAlarmShieldRequest: DeleteAlarmShieldRequest,
    ModifyEsRechargeRequest: ModifyEsRechargeRequest,
    CreateNetworkApplicationRequest: CreateNetworkApplicationRequest,
    DeleteLogsetResponse: DeleteLogsetResponse,
    TopicPartitionOffsetInfo: TopicPartitionOffsetInfo,
    DeleteDlcDeliverResponse: DeleteDlcDeliverResponse,
    ParquetKeyInfo: ParquetKeyInfo,
    DescribeShipperTasksResponse: DescribeShipperTasksResponse,
    DescribeAlarmShieldsResponse: DescribeAlarmShieldsResponse,
    UploadLogRequest: UploadLogRequest,
    ChatUsage: ChatUsage,
    AppointLabel: AppointLabel,
    CommitConsumerOffsetsRequest: CommitConsumerOffsetsRequest,
    ModifyConsoleResponse: ModifyConsoleResponse,
    ConsumerInfo: ConsumerInfo,
    DescribeAlarmsRequest: DescribeAlarmsRequest,
    DescribeShippersResponse: DescribeShippersResponse,
    ModifyShipperResponse: ModifyShipperResponse,
    GroupPartitionInfo: GroupPartitionInfo,
    GetMetricLabelValuesResponse: GetMetricLabelValuesResponse,
    QueryMetricResponse: QueryMetricResponse,
    DeleteLogsetRequest: DeleteLogsetRequest,
    OpenKafkaConsumerResponse: OpenKafkaConsumerResponse,
    DeleteSearchViewResponse: DeleteSearchViewResponse,
    CreateSplunkDeliverResponse: CreateSplunkDeliverResponse,
    ModifyScheduledSqlResponse: ModifyScheduledSqlResponse,
    QueryRangeMetricRequest: QueryRangeMetricRequest,
    MetaTagInfo: MetaTagInfo,
    DescribeMachineGroupsRequest: DescribeMachineGroupsRequest,
    ModifySearchViewResponse: ModifySearchViewResponse,
    DescribeConfigsResponse: DescribeConfigsResponse,
    ExtractRuleInfo: ExtractRuleInfo,
    TopicInfo: TopicInfo,
    DeleteDataTransformResponse: DeleteDataTransformResponse,
    ShipperTaskInfo: ShipperTaskInfo,
    CreateConsumerResponse: CreateConsumerResponse,
    DataTransformResouceInfo: DataTransformResouceInfo,
    AnonymousLoginInfo: AnonymousLoginInfo,
    DeleteMachineGroupRequest: DeleteMachineGroupRequest,
    NetworkApplicationDetail: NetworkApplicationDetail,
    DescribeSplunkDeliversResponse: DescribeSplunkDeliversResponse,
    SearchDashboardSubscribeRequest: SearchDashboardSubscribeRequest,
    DescribePartitionsResponse: DescribePartitionsResponse,
    ModifyHostMetricConfigResponse: ModifyHostMetricConfigResponse,
    DescribeMetricCorrectDimensionResponse: DescribeMetricCorrectDimensionResponse,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    ToolCallFunction: ToolCallFunction,
    CreateAlarmRequest: CreateAlarmRequest,
    DlcFiledInfo: DlcFiledInfo,
    DeleteScheduledSqlResponse: DeleteScheduledSqlResponse,
    EscalateNoticeInfo: EscalateNoticeInfo,
    ExcludePathInfo: ExcludePathInfo,
    DescribeTopicBaseMetricConfigsRequest: DescribeTopicBaseMetricConfigsRequest,
    FilterRuleInfo: FilterRuleInfo,
    DescribeEsRechargesResponse: DescribeEsRechargesResponse,
    AdvanceFilterRuleInfo: AdvanceFilterRuleInfo,
    CheckRechargeKafkaServerRequest: CheckRechargeKafkaServerRequest,
    DeleteDashboardSubscribeResponse: DeleteDashboardSubscribeResponse,
    DescribeLogHistogramResponse: DescribeLogHistogramResponse,
    DescribeConsumerGroupsRequest: DescribeConsumerGroupsRequest,
    ConsoleAccount: ConsoleAccount,
    CreateWebCallbackResponse: CreateWebCallbackResponse,
    DeleteConsumerGroupRequest: DeleteConsumerGroupRequest,
    OpenKafkaConsumerRequest: OpenKafkaConsumerRequest,
    CreateConsumerGroupResponse: CreateConsumerGroupResponse,
    SplunkDeliverInfo: SplunkDeliverInfo,
    NoticeContentInfo: NoticeContentInfo,
    ModifyMetricConfigResponse: ModifyMetricConfigResponse,
    DeleteSearchViewRequest: DeleteSearchViewRequest,
    DescribeConsumerResponse: DescribeConsumerResponse,
    EstimateRebuildIndexTaskRequest: EstimateRebuildIndexTaskRequest,
    EsTimeInfo: EsTimeInfo,
    DescribeClusterBaseMetricConfigsResponse: DescribeClusterBaseMetricConfigsResponse,
    ModifyKafkaRechargeRequest: ModifyKafkaRechargeRequest,
    CreateIndexResponse: CreateIndexResponse,
    ModifyDashboardSubscribeResponse: ModifyDashboardSubscribeResponse,
    DescribeSplunkPreviewRequest: DescribeSplunkPreviewRequest,
    ModifyConfigRequest: ModifyConfigRequest,
    CreateMetricConfigResponse: CreateMetricConfigResponse,
    DeleteConfigFromMachineGroupResponse: DeleteConfigFromMachineGroupResponse,
    PreviewKafkaRechargeResponse: PreviewKafkaRechargeResponse,
    MonitorNotice: MonitorNotice,
    DescribeAlarmsResponse: DescribeAlarmsResponse,
    MetricCollectConfig: MetricCollectConfig,
    Delta: Delta,
    DeleteIndexResponse: DeleteIndexResponse,
    AlarmAnalysisConfig: AlarmAnalysisConfig,
    SearchLogErrors: SearchLogErrors,
    DescribeSplunkDeliversRequest: DescribeSplunkDeliversRequest,
    DeleteScheduledSqlRequest: DeleteScheduledSqlRequest,
    ModifyRecordingRuleYamlTaskRequest: ModifyRecordingRuleYamlTaskRequest,
    DescribeConsumerGroupsResponse: DescribeConsumerGroupsResponse,
    NoticeContent: NoticeContent,
    CreateDataTransformResponse: CreateDataTransformResponse,
    DescribeKafkaConsumerTopicsRequest: DescribeKafkaConsumerTopicsRequest,
    CreateConsumerRequest: CreateConsumerRequest,
    DeleteHostMetricConfigRequest: DeleteHostMetricConfigRequest,
    DeleteMetricConfigResponse: DeleteMetricConfigResponse,
    DataTransformTaskInfo: DataTransformTaskInfo,
    NoticeRule: NoticeRule,
    ContentInfo: ContentInfo,
    ApplyConfigToMachineGroupResponse: ApplyConfigToMachineGroupResponse,
    AlertHistoryNotice: AlertHistoryNotice,
    DeleteAlarmRequest: DeleteAlarmRequest,
    DescribeLogContextResponse: DescribeLogContextResponse,
    EstimateRebuildIndexTaskResponse: EstimateRebuildIndexTaskResponse,
    DeleteDashboardRequest: DeleteDashboardRequest,
    CreateCosRechargeResponse: CreateCosRechargeResponse,
    NoticeReceiver: NoticeReceiver,
    Ckafka: Ckafka,
    MultiCondition: MultiCondition,
    Filter: Filter,
    SearchViewInfo: SearchViewInfo,
    ModifyLogsetResponse: ModifyLogsetResponse,
    HostMetricItem: HostMetricItem,
    CreateDashboardResponse: CreateDashboardResponse,
    GetMetricLabelValuesRequest: GetMetricLabelValuesRequest,
    ModifyMetricSubscribeResponse: ModifyMetricSubscribeResponse,
    DescribeIndexResponse: DescribeIndexResponse,
    DescribeConsumerPreviewResponse: DescribeConsumerPreviewResponse,
    DeleteRecordingRuleTaskResponse: DeleteRecordingRuleTaskResponse,
    DeleteMachineGroupInfoResponse: DeleteMachineGroupInfoResponse,
    CheckRechargeKafkaServerResponse: CheckRechargeKafkaServerResponse,
    InstanceConfig: InstanceConfig,
    DeleteNetworkApplicationResponse: DeleteNetworkApplicationResponse,
    CosRechargeInfo: CosRechargeInfo,
    DeleteNoticeContentRequest: DeleteNoticeContentRequest,
    DescribeKafkaConsumerRequest: DescribeKafkaConsumerRequest,
    DeleteRecordingRuleTaskRequest: DeleteRecordingRuleTaskRequest,
    DescribeDataTransformInfoResponse: DescribeDataTransformInfoResponse,
    ModifyCosRechargeResponse: ModifyCosRechargeResponse,
    ExternalRole: ExternalRole,
    DescribeEsRechargePreviewRequest: DescribeEsRechargePreviewRequest,
    MergePartitionResponse: MergePartitionResponse,
    CreateScheduledSqlRequest: CreateScheduledSqlRequest,
    DescribeKafkaConsumerGroupDetailResponse: DescribeKafkaConsumerGroupDetailResponse,
    ModifyDashboardRequest: ModifyDashboardRequest,
    SendConsumerHeartbeatResponse: SendConsumerHeartbeatResponse,
    DeleteHostMetricConfigResponse: DeleteHostMetricConfigResponse,
    GetClsServiceResponse: GetClsServiceResponse,
    Choice: Choice,
    DeleteMetricConfigRequest: DeleteMetricConfigRequest,
    CreateEsRechargeRequest: CreateEsRechargeRequest,
    ConsumerGroup: ConsumerGroup,
    DeleteNoticeContentResponse: DeleteNoticeContentResponse,
    MetricYamlSpec: MetricYamlSpec,
    DeleteCloudProductLogCollectionRequest: DeleteCloudProductLogCollectionRequest,
    DescribeKafkaConsumerResponse: DescribeKafkaConsumerResponse,
    JsonInfo: JsonInfo,
    DeleteKafkaRechargeResponse: DeleteKafkaRechargeResponse,
    DeleteDlcDeliverRequest: DeleteDlcDeliverRequest,
    CallBackInfo: CallBackInfo,
    ModifyNetworkApplicationRequest: ModifyNetworkApplicationRequest,
    DescribeHostMetricConfigsRequest: DescribeHostMetricConfigsRequest,
    SplitPartitionResponse: SplitPartitionResponse,
    AlarmClassification: AlarmClassification,
    WebCallbackInfo: WebCallbackInfo,
    CreateLogsetResponse: CreateLogsetResponse,
    ModifyHostMetricConfigRequest: ModifyHostMetricConfigRequest,
    DashboardNoticeMode: DashboardNoticeMode,
    KafkaProtocolInfo: KafkaProtocolInfo,
    ModifyAlarmShieldResponse: ModifyAlarmShieldResponse,
    CreateCosRechargeRequest: CreateCosRechargeRequest,
    ChatCompletionsResponse: ChatCompletionsResponse,
    DescribeNoticeContentsResponse: DescribeNoticeContentsResponse,
    CreateAlarmShieldResponse: CreateAlarmShieldResponse,
    DescribeConsumerRequest: DescribeConsumerRequest,
    ModifyConsumerRequest: ModifyConsumerRequest,
    ModifyMetricConfigRequest: ModifyMetricConfigRequest,
    ModifyDashboardSubscribeRequest: ModifyDashboardSubscribeRequest,
    RebuildIndexTaskInfo: RebuildIndexTaskInfo,
    CreateDashboardSubscribeRequest: CreateDashboardSubscribeRequest,
    FullTextInfo: FullTextInfo,
    DescribeConfigMachineGroupsResponse: DescribeConfigMachineGroupsResponse,
    ModifySplunkDeliverRequest: ModifySplunkDeliverRequest,
    HighLightItem: HighLightItem,
    EsRechargeInfo: EsRechargeInfo,
    CreateMetricSubscribeRequest: CreateMetricSubscribeRequest,
    NoticeContentTemplate: NoticeContentTemplate,
    LogItem: LogItem,
    DescribeConfigMachineGroupsRequest: DescribeConfigMachineGroupsRequest,
    DescribeMetricSubscribePreviewRequest: DescribeMetricSubscribePreviewRequest,
    DeleteConsumerResponse: DeleteConsumerResponse,
    DescribeTopicsRequest: DescribeTopicsRequest,
    ModifySplunkDeliverResponse: ModifySplunkDeliverResponse,
    RetryShipperTaskRequest: RetryShipperTaskRequest,
    DeleteCosRechargeRequest: DeleteCosRechargeRequest,
    CreateHostMetricConfigRequest: CreateHostMetricConfigRequest,
    AccessControlRule: AccessControlRule,
    ModifyWebCallbackResponse: ModifyWebCallbackResponse,
    ModifyCloudProductLogCollectionResponse: ModifyCloudProductLogCollectionResponse,
    DeleteConsumerRequest: DeleteConsumerRequest,
    MetricSubscribeInfo: MetricSubscribeInfo,
    CreateNetworkApplicationResponse: CreateNetworkApplicationResponse,
    DeleteIndexRequest: DeleteIndexRequest,
    DescribeRecordingRuleTaskRequest: DescribeRecordingRuleTaskRequest,
    DescribeAlertRecordHistoryRequest: DescribeAlertRecordHistoryRequest,
    ChatCompletionsRequest: ChatCompletionsRequest,
    DeleteNetworkApplicationRequest: DeleteNetworkApplicationRequest,
    LogsetInfo: LogsetInfo,
    CreateExportRequest: CreateExportRequest,
    DashboardTemplateVariable: DashboardTemplateVariable,
    CancelRebuildIndexTaskRequest: CancelRebuildIndexTaskRequest,
    DescribeLogsetsResponse: DescribeLogsetsResponse,
    DescribeKafkaConsumerPreviewResponse: DescribeKafkaConsumerPreviewResponse,
    NetworkApplicationInfo: NetworkApplicationInfo,
    ModifySearchViewRequest: ModifySearchViewRequest,
    WebCallback: WebCallback,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    ModifyTopicResponse: ModifyTopicResponse,
    CreateConfigRequest: CreateConfigRequest,
    DeleteEsRechargeResponse: DeleteEsRechargeResponse,
    DescribeNetworkApplicationsRequest: DescribeNetworkApplicationsRequest,
    DescribeKafkaRechargesResponse: DescribeKafkaRechargesResponse,
    ModifyDlcDeliverRequest: ModifyDlcDeliverRequest,
    CreateRecordingRuleTaskRequest: CreateRecordingRuleTaskRequest,
    ToolCall: ToolCall,
    DeleteCloudProductLogCollectionResponse: DeleteCloudProductLogCollectionResponse,
    ExportInfo: ExportInfo,
    MetricConfigLabel: MetricConfigLabel,
    DashboardSubscribeInfo: DashboardSubscribeInfo,
    DescribeWebCallbacksResponse: DescribeWebCallbacksResponse,
    DeleteExportRequest: DeleteExportRequest,
    ModifyKafkaConsumerGroupOffsetRequest: ModifyKafkaConsumerGroupOffsetRequest,
    DescribeConsolesRequest: DescribeConsolesRequest,
    AlarmShieldInfo: AlarmShieldInfo,
    EsImportInfo: EsImportInfo,
    ModifyConfigResponse: ModifyConfigResponse,
    MetricConfig: MetricConfig,
    ModifyConsoleRequest: ModifyConsoleRequest,
    DescribeRebuildIndexTasksResponse: DescribeRebuildIndexTasksResponse,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    DescribeConsumerOffsetsResponse: DescribeConsumerOffsetsResponse,
    SearchLogInfos: SearchLogInfos,
    EnvInfo: EnvInfo,
    ModifyKafkaConsumerResponse: ModifyKafkaConsumerResponse,
    MachineGroupTypeInfo: MachineGroupTypeInfo,
    ShipperInfo: ShipperInfo,
    DescribeAlertRecordHistoryResponse: DescribeAlertRecordHistoryResponse,
    DescribeEsRechargesRequest: DescribeEsRechargesRequest,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    DescribeEsRechargePreviewResponse: DescribeEsRechargePreviewResponse,
    MergePartitionRequest: MergePartitionRequest,
    MonitorTime: MonitorTime,
    ApplyConfigToMachineGroupRequest: ApplyConfigToMachineGroupRequest,
    DescribeMachineGroupConfigsResponse: DescribeMachineGroupConfigsResponse,
    DescribeMachineGroupConfigsRequest: DescribeMachineGroupConfigsRequest,
    DescribeSearchViewsRequest: DescribeSearchViewsRequest,
    ModifyWebCallbackRequest: ModifyWebCallbackRequest,
    DeleteTopicResponse: DeleteTopicResponse,
    CreateExportResponse: CreateExportResponse,
    CancelRebuildIndexTaskResponse: CancelRebuildIndexTaskResponse,
    DescribeRecordingRuleYamlTaskRequest: DescribeRecordingRuleYamlTaskRequest,
    UploadLogResponse: UploadLogResponse,
    Console: Console,
    CreateAlarmResponse: CreateAlarmResponse,
    CustomLabel: CustomLabel,
    MetadataInfo: MetadataInfo,
    DescribeMetricSubscribesRequest: DescribeMetricSubscribesRequest,
    DescribeLogContextRequest: DescribeLogContextRequest,
    DescribeMetricCorrectDimensionRequest: DescribeMetricCorrectDimensionRequest,
    CreateRecordingRuleYamlTaskRequest: CreateRecordingRuleYamlTaskRequest,
    DescribeCosRechargesResponse: DescribeCosRechargesResponse,
    CreateSplunkDeliverRequest: CreateSplunkDeliverRequest,
    CreateMachineGroupResponse: CreateMachineGroupResponse,
    DeleteRecordingRuleYamlTaskResponse: DeleteRecordingRuleYamlTaskResponse,
    RuleTagInfo: RuleTagInfo,
    OpenClawServiceRequest: OpenClawServiceRequest,
    AlarmTargetInfo: AlarmTargetInfo,
    SearchCosRechargeInfoRequest: SearchCosRechargeInfoRequest,
    DescribeNoticeContentsRequest: DescribeNoticeContentsRequest,
    DescribeDlcDeliversRequest: DescribeDlcDeliversRequest,
    DescribeNetworkApplicationDetailResponse: DescribeNetworkApplicationDetailResponse,
    GetClsServiceRequest: GetClsServiceRequest,
    DescribeShipperTasksRequest: DescribeShipperTasksRequest,
    CreateCloudProductLogCollectionRequest: CreateCloudProductLogCollectionRequest,
    DescribeIndexRequest: DescribeIndexRequest,
    DescribeKafkaConsumerGroupListRequest: DescribeKafkaConsumerGroupListRequest,
    CreateConsoleRequest: CreateConsoleRequest,
    DeleteMachineGroupInfoRequest: DeleteMachineGroupInfoRequest,
    ModifyNoticeContentResponse: ModifyNoticeContentResponse,
    DeleteWebCallbackResponse: DeleteWebCallbackResponse,
    DescribeSearchViewsResponse: DescribeSearchViewsResponse,
    DescribeAlarmShieldsRequest: DescribeAlarmShieldsRequest,
    CreateRecordingRuleYamlTaskResponse: CreateRecordingRuleYamlTaskResponse,
    DescribeTopicsResponse: DescribeTopicsResponse,
    EventLog: EventLog,
    ConsumerGroupInfo: ConsumerGroupInfo,
    DescribeRebuildIndexTasksRequest: DescribeRebuildIndexTasksRequest,
    DlcDeliverInfo: DlcDeliverInfo,
    DescribeShippersRequest: DescribeShippersRequest,
    DescribeCloudProductLogTasksResponse: DescribeCloudProductLogTasksResponse,
    ModifyKafkaConsumerRequest: ModifyKafkaConsumerRequest,
    DescribeCosRechargesRequest: DescribeCosRechargesRequest,
    DescribeNetworkApplicationsResponse: DescribeNetworkApplicationsResponse,
    DescribeTopicBaseMetricConfigsResponse: DescribeTopicBaseMetricConfigsResponse,
    CloseKafkaConsumerResponse: CloseKafkaConsumerResponse,
    ViewSearchTopic: ViewSearchTopic,
    Relabeling: Relabeling,
    GetAlarmLogResponse: GetAlarmLogResponse,
    DescribeKafkaRechargesRequest: DescribeKafkaRechargesRequest,
    CreateDashboardSubscribeResponse: CreateDashboardSubscribeResponse,
    DescribeExportsRequest: DescribeExportsRequest,
    AlarmTarget: AlarmTarget,
    CreateKafkaRechargeResponse: CreateKafkaRechargeResponse,
    DashboardSubscribeData: DashboardSubscribeData,
    ModifyIndexResponse: ModifyIndexResponse,
    QueryRangeMetricResponse: QueryRangeMetricResponse,
    DescribeDashboardSubscribesResponse: DescribeDashboardSubscribesResponse,
    BaseMetricCollectConfig: BaseMetricCollectConfig,
    SearchLogTopics: SearchLogTopics,
    CreateMetricConfigRequest: CreateMetricConfigRequest,
    Message: Message,
    ModifyConsumerResponse: ModifyConsumerResponse,
    CreateSearchViewResponse: CreateSearchViewResponse,
    PartitionOffsetInfo: PartitionOffsetInfo,
    KafkaConsumerContent: KafkaConsumerContent,
    DeleteConfigRequest: DeleteConfigRequest,
    AnalysisDimensional: AnalysisDimensional,
    DeleteWebCallbackRequest: DeleteWebCallbackRequest,
    LogRechargeRuleInfo: LogRechargeRuleInfo,
    CloseKafkaConsumerRequest: CloseKafkaConsumerRequest,
    ModifyAlarmShieldRequest: ModifyAlarmShieldRequest,
    AlarmNoticeDeliverConfig: AlarmNoticeDeliverConfig,
    DescribeConsumersResponse: DescribeConsumersResponse,
    DlcTableInfo: DlcTableInfo,
    ModifyKafkaConsumerGroupOffsetResponse: ModifyKafkaConsumerGroupOffsetResponse,
    CreateShipperRequest: CreateShipperRequest,
    InstanceData: InstanceData,
    HostMetricConfig: HostMetricConfig,
    CreateShipperResponse: CreateShipperResponse,
    ModifyCloudProductLogCollectionRequest: ModifyCloudProductLogCollectionRequest,
    OpenClawServiceResponse: OpenClawServiceResponse,
    Column: Column,
    DescribeDataTransformInfoRequest: DescribeDataTransformInfoRequest,
    AlarmShieldCount: AlarmShieldCount,
    CreateRebuildIndexTaskRequest: CreateRebuildIndexTaskRequest,
    DeleteShipperResponse: DeleteShipperResponse,
    TopicPartitionInfo: TopicPartitionInfo,
    ModifyTopicRequest: ModifyTopicRequest,
    DeleteSplunkDeliverRequest: DeleteSplunkDeliverRequest,
    ModifyEsRechargeResponse: ModifyEsRechargeResponse,
    ModifyConsumerGroupResponse: ModifyConsumerGroupResponse,
    CreateKafkaRechargeRequest: CreateKafkaRechargeRequest,
    DeleteKafkaRechargeRequest: DeleteKafkaRechargeRequest,
    DlcInfo: DlcInfo,
    ModifyDataTransformResponse: ModifyDataTransformResponse,
    AlertHistoryRecord: AlertHistoryRecord,
    MultiTopicSearchInformation: MultiTopicSearchInformation,
    AlarmNotice: AlarmNotice,
    ModifyNoticeContentRequest: ModifyNoticeContentRequest,
    ModifyKafkaRechargeResponse: ModifyKafkaRechargeResponse,
    RecordingRuleTaskInfo: RecordingRuleTaskInfo,
    MetricSpec: MetricSpec,
    DescribeMachinesResponse: DescribeMachinesResponse,
    DeleteEsRechargeRequest: DeleteEsRechargeRequest,
    AuthRoleInfo: AuthRoleInfo,
    LogContextInfo: LogContextInfo,
    ModifyMetricSubscribeRequest: ModifyMetricSubscribeRequest,
    DeleteRecordingRuleYamlTaskRequest: DeleteRecordingRuleYamlTaskRequest,
    DeleteConfigFromMachineGroupRequest: DeleteConfigFromMachineGroupRequest,
    DescribeRecordingRuleTaskResponse: DescribeRecordingRuleTaskResponse,
    AddMachineGroupInfoResponse: AddMachineGroupInfoResponse,
    UserKafkaMeta: UserKafkaMeta,
    MetricLabel: MetricLabel,
    ModifyRecordingRuleTaskRequest: ModifyRecordingRuleTaskRequest,
    DescribeMetricSubscribePreviewResponse: DescribeMetricSubscribePreviewResponse,
    DescribeScheduledSqlInfoRequest: DescribeScheduledSqlInfoRequest,
    DeleteConsumerGroupResponse: DeleteConsumerGroupResponse,
    SearchLogRequest: SearchLogRequest,
    DescribeKafkaConsumerGroupDetailRequest: DescribeKafkaConsumerGroupDetailRequest,
    DescribeConsumerOffsetsRequest: DescribeConsumerOffsetsRequest,
    DeleteConsoleRequest: DeleteConsoleRequest,
    CreateDataTransformRequest: CreateDataTransformRequest,
    DescribeMachineGroupsResponse: DescribeMachineGroupsResponse,
    DescribeLogsetsRequest: DescribeLogsetsRequest,
    MetadataItem: MetadataItem,
    ParquetInfo: ParquetInfo,
    ModifyRecordingRuleTaskResponse: ModifyRecordingRuleTaskResponse,
    DescribeConsolesResponse: DescribeConsolesResponse,
    SendConsumerHeartbeatRequest: SendConsumerHeartbeatRequest,
    CommitConsumerOffsetsResponse: CommitConsumerOffsetsResponse,
    DescribeSplunkPreviewResponse: DescribeSplunkPreviewResponse,

}
