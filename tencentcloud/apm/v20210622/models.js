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
 * Span log section.


 * @class
 */
class SpanLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log timestamp.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Tag.
         * @type {Array.<SpanTag> || null}
         */
        this.Fields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new SpanTag();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

    }
}

/**
 * ModifyApmInstance request structure.
 * @class
 */
class ModifyApmInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Business system name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag list.
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * Business system description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Retention period of trace data (unit: days).
         * @type {number || null}
         */
        this.TraceDuration = null;

        /**
         * Billing switch.
         * @type {boolean || null}
         */
        this.OpenBilling = null;

        /**
         * Business system report limit.
         * @type {number || null}
         */
        this.SpanDailyCounters = null;

        /**
         * Error rate warning line. when the average error rate of the application exceeds this threshold, the system will give an abnormal note.
         * @type {number || null}
         */
        this.ErrRateThreshold = null;

        /**
         * Sampling rate (unit: %).
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Error sampling switch (0: off, 1: on).
         * @type {number || null}
         */
        this.ErrorSample = null;

        /**
         * Sampling slow call saving threshold (unit: ms).
         * @type {number || null}
         */
        this.SlowRequestSavedThreshold = null;

        /**
         * Log feature switch (0: off; 1: on).
         * @type {number || null}
         */
        this.IsRelatedLog = null;

        /**
         * Log region, which takes effect after the log feature is enabled.
         * @type {string || null}
         */
        this.LogRegion = null;

        /**
         * CLS log topic id, which takes effect after the log feature is enabled.
         * @type {string || null}
         */
        this.LogTopicID = null;

        /**
         * Logset, which takes effect only after the log feature is enabled.
         * @type {string || null}
         */
        this.LogSet = null;

        /**
         * Log source, which takes effect only after the log feature is enabled.
         * @type {string || null}
         */
        this.LogSource = null;

        /**
         * List of custom display tags.
         * @type {Array.<string> || null}
         */
        this.CustomShowTags = null;

        /**
         * Modify billing mode (1: prepaid, 0: pay-as-you-go).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Response time warning line.
         * @type {number || null}
         */
        this.ResponseDurationWarningThreshold = null;

        /**
         * Whether it is free (0 = paid edition; 1 = tsf restricted free edition; 2 = free edition), default 0.
         * @type {number || null}
         */
        this.Free = null;

        /**
         * Whether to associate the dashboard (0 = off, 1 = on).
         * @type {number || null}
         */
        this.IsRelatedDashboard = null;

        /**
         * Associated dashboard id, which takes effect after the associated dashboard is enabled.
         * @type {string || null}
         */
        this.DashboardTopicID = null;

        /**
         * SQL injection detection switch (0: off, 1: on).
         * @type {number || null}
         */
        this.IsSqlInjectionAnalysis = null;

        /**
         * Whether to enable component vulnerability detection (0 = no, 1 = yes).
         * @type {number || null}
         */
        this.IsInstrumentationVulnerabilityScan = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.TraceDuration = 'TraceDuration' in params ? params.TraceDuration : null;
        this.OpenBilling = 'OpenBilling' in params ? params.OpenBilling : null;
        this.SpanDailyCounters = 'SpanDailyCounters' in params ? params.SpanDailyCounters : null;
        this.ErrRateThreshold = 'ErrRateThreshold' in params ? params.ErrRateThreshold : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.ErrorSample = 'ErrorSample' in params ? params.ErrorSample : null;
        this.SlowRequestSavedThreshold = 'SlowRequestSavedThreshold' in params ? params.SlowRequestSavedThreshold : null;
        this.IsRelatedLog = 'IsRelatedLog' in params ? params.IsRelatedLog : null;
        this.LogRegion = 'LogRegion' in params ? params.LogRegion : null;
        this.LogTopicID = 'LogTopicID' in params ? params.LogTopicID : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;
        this.CustomShowTags = 'CustomShowTags' in params ? params.CustomShowTags : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResponseDurationWarningThreshold = 'ResponseDurationWarningThreshold' in params ? params.ResponseDurationWarningThreshold : null;
        this.Free = 'Free' in params ? params.Free : null;
        this.IsRelatedDashboard = 'IsRelatedDashboard' in params ? params.IsRelatedDashboard : null;
        this.DashboardTopicID = 'DashboardTopicID' in params ? params.DashboardTopicID : null;
        this.IsSqlInjectionAnalysis = 'IsSqlInjectionAnalysis' in params ? params.IsSqlInjectionAnalysis : null;
        this.IsInstrumentationVulnerabilityScan = 'IsInstrumentationVulnerabilityScan' in params ? params.IsInstrumentationVulnerabilityScan : null;

    }
}

/**
 * APM business system information.
 * @class
 */
class ApmInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Business system name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Business system description information.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Status of the business system.
{Initializing; running; throttling}.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Region where the business system belongs.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Business system tag list.
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * AppID information.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Creator uin.
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * Storage used (unit: mb).
         * @type {number || null}
         */
        this.AmountOfUsedStorage = null;

        /**
         * Quantity of server applications of the business system.
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * Average daily reported span count.
         * @type {number || null}
         */
        this.CountOfReportSpanPerDay = null;

        /**
         * Retention period of trace data (unit: days).
         * @type {number || null}
         */
        this.TraceDuration = null;

        /**
         * Business system report limit.
         * @type {number || null}
         */
        this.SpanDailyCounters = null;

        /**
         * Whether the business system billing is Activated (0 = not activated, 1 = activated).
         * @type {number || null}
         */
        this.BillingInstance = null;

        /**
         * Error warning line (unit: %).
         * @type {number || null}
         */
        this.ErrRateThreshold = null;

        /**
         * Sampling rate (unit: %).
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Error sampling switch (0: off, 1: on).
         * @type {number || null}
         */
        this.ErrorSample = null;

        /**
         * Sampling slow call saving threshold (unit: ms).
         * @type {number || null}
         */
        this.SlowRequestSavedThreshold = null;

        /**
         * CLS log region.
         * @type {string || null}
         */
        this.LogRegion = null;

        /**
         * Log source.
         * @type {string || null}
         */
        this.LogSource = null;

        /**
         * Log feature switch (0: off; 1: on).
         * @type {number || null}
         */
        this.IsRelatedLog = null;

        /**
         * Log topic id.
         * @type {string || null}
         */
        this.LogTopicID = null;

        /**
         * Quantity of client applications of the business system.
         * @type {number || null}
         */
        this.ClientCount = null;

        /**
         * The quantity of active applications in this business system in the last two days.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CLS log set.
         * @type {string || null}
         */
        this.LogSet = null;

        /**
         * Retention period of metric data (unit: days).
         * @type {number || null}
         */
        this.MetricDuration = null;

        /**
         * List of custom display tags.
         * @type {Array.<string> || null}
         */
        this.CustomShowTags = null;

        /**
         * Business system billing mode (1: prepaid, 0: pay-as-you-go).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Indicates whether the billing mode of the business system takes effect.
         * @type {boolean || null}
         */
        this.PayModeEffective = null;

        /**
         * Response time warning line (unit: ms).
         * @type {number || null}
         */
        this.ResponseDurationWarningThreshold = null;

        /**
         * Whether it is free (0 = no; 1 = limited free; 2 = completely free), default 0.
         * @type {number || null}
         */
        this.Free = null;

        /**
         * Indicates whether it is the default business system of tsf (0 = no, 1 = yes).
         * @type {number || null}
         */
        this.DefaultTSF = null;

        /**
         * Whether to associate the dashboard (0 = off, 1 = on).
         * @type {number || null}
         */
        this.IsRelatedDashboard = null;

        /**
         * Associated dashboard id.
         * @type {string || null}
         */
        this.DashboardTopicID = null;

        /**
         * Whether to enable component vulnerability detection (0 = no, 1 = yes).
         * @type {number || null}
         */
        this.IsInstrumentationVulnerabilityScan = null;

        /**
         * Whether to enable sql injection analysis (0: off, 1: on).
         * @type {number || null}
         */
        this.IsSqlInjectionAnalysis = null;

        /**
         * Reasons for traffic throttling.
Official version quota;.
Trial version quota.
Trial version expiration;.
Account in arrears.
}.
         * @type {number || null}
         */
        this.StopReason = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.AmountOfUsedStorage = 'AmountOfUsedStorage' in params ? params.AmountOfUsedStorage : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.CountOfReportSpanPerDay = 'CountOfReportSpanPerDay' in params ? params.CountOfReportSpanPerDay : null;
        this.TraceDuration = 'TraceDuration' in params ? params.TraceDuration : null;
        this.SpanDailyCounters = 'SpanDailyCounters' in params ? params.SpanDailyCounters : null;
        this.BillingInstance = 'BillingInstance' in params ? params.BillingInstance : null;
        this.ErrRateThreshold = 'ErrRateThreshold' in params ? params.ErrRateThreshold : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.ErrorSample = 'ErrorSample' in params ? params.ErrorSample : null;
        this.SlowRequestSavedThreshold = 'SlowRequestSavedThreshold' in params ? params.SlowRequestSavedThreshold : null;
        this.LogRegion = 'LogRegion' in params ? params.LogRegion : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;
        this.IsRelatedLog = 'IsRelatedLog' in params ? params.IsRelatedLog : null;
        this.LogTopicID = 'LogTopicID' in params ? params.LogTopicID : null;
        this.ClientCount = 'ClientCount' in params ? params.ClientCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.MetricDuration = 'MetricDuration' in params ? params.MetricDuration : null;
        this.CustomShowTags = 'CustomShowTags' in params ? params.CustomShowTags : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeEffective = 'PayModeEffective' in params ? params.PayModeEffective : null;
        this.ResponseDurationWarningThreshold = 'ResponseDurationWarningThreshold' in params ? params.ResponseDurationWarningThreshold : null;
        this.Free = 'Free' in params ? params.Free : null;
        this.DefaultTSF = 'DefaultTSF' in params ? params.DefaultTSF : null;
        this.IsRelatedDashboard = 'IsRelatedDashboard' in params ? params.IsRelatedDashboard : null;
        this.DashboardTopicID = 'DashboardTopicID' in params ? params.DashboardTopicID : null;
        this.IsInstrumentationVulnerabilityScan = 'IsInstrumentationVulnerabilityScan' in params ? params.IsInstrumentationVulnerabilityScan : null;
        this.IsSqlInjectionAnalysis = 'IsSqlInjectionAnalysis' in params ? params.IsSqlInjectionAnalysis : null;
        this.StopReason = 'StopReason' in params ? params.StopReason : null;

    }
}

/**
 * CreateApmInstance request structure.
 * @class
 */
class CreateApmInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Business system description information.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Retention period of trace data (unit: days, the default storage duration is 3 days).
         * @type {number || null}
         */
        this.TraceDuration = null;

        /**
         * Business system tag list.
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * The report quota value of the business system. the default value is 0, indicating no limit on the report quota. (obsolete).
         * @type {number || null}
         */
        this.SpanDailyCounters = null;

        /**
         * Billing model of the business system (0: pay-as-you-go, 1: prepaid).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether it is a free edition business system (0 = paid edition; 1 = tsf restricted free edition; 2 = free edition).
         * @type {number || null}
         */
        this.Free = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TraceDuration = 'TraceDuration' in params ? params.TraceDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SpanDailyCounters = 'SpanDailyCounters' in params ? params.SpanDailyCounters : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Free = 'Free' in params ? params.Free : null;

    }
}

/**
 * ModifyGeneralApmApplicationConfig request structure.
 * @class
 */
class ModifyGeneralApmApplicationConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Fields to be modified. the key and value respectively specify the field name and field value.
.
For specific fields, please refer to.
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * Name of the application list that requires configuration modification.	
         * @type {Array.<string> || null}
         */
        this.ServiceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ServiceNames = 'ServiceNames' in params ? params.ServiceNames : null;

    }
}

/**
 * DescribeServiceOverview response structure.
 * @class
 */
class DescribeServiceOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicator result set.
         * @type {Array.<ApmMetricRecord> || null}
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new ApmMetricRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Querying.
 * @class
 */
class QueryMetricItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Year-Over-Year comparison is now supported for comparebyyesterday (compared to yesterday) and comparebylastweek (compared to last week). 
         * @type {Array.<string> || null}
         */
        this.Compares = null;

        /**
         * Year-On-Year, deprecated, not recommended for use.
         * @type {string || null}
         */
        this.Compare = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Compares = 'Compares' in params ? params.Compares : null;
        this.Compare = 'Compare' in params ? params.Compare : null;

    }
}

/**
 * TerminateApmInstance request structure.
 * @class
 */
class TerminateApmInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
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
 * DescribeApmInstances response structure.
 * @class
 */
class DescribeApmInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * APM business system list.
         * @type {Array.<ApmInstanceDetail> || null}
         */
        this.Instances = null;

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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new ApmInstanceDetail();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Component.
 * @class
 */
class Instrument extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Component switch.
         * @type {boolean || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeTagValues response structure.
 * @class
 */
class DescribeTagValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension value list.
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
 * Span object.
 * @class
 */
class Span extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trace ID
         * @type {string || null}
         */
        this.TraceID = null;

        /**
         * Log.
         * @type {Array.<SpanLog> || null}
         */
        this.Logs = null;

        /**
         * Tag.
         * @type {Array.<SpanTag> || null}
         */
        this.Tags = null;

        /**
         * Submit application service information.
         * @type {SpanProcess || null}
         */
        this.Process = null;

        /**
         * Generated timestamp (ms).
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Span name.
         * @type {string || null}
         */
        this.OperationName = null;

        /**
         * Association relationship.
         * @type {Array.<SpanReference> || null}
         */
        this.References = null;

        /**
         * Generated timestamp (ms).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Duration (ms).
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Span ID
         * @type {string || null}
         */
        this.SpanID = null;

        /**
         * Generated timestamp (ms).
         * @type {number || null}
         */
        this.StartTimeMillis = null;

        /**
         * Parent Span ID
         * @type {string || null}
         */
        this.ParentSpanID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceID = 'TraceID' in params ? params.TraceID : null;

        if (params.Logs) {
            this.Logs = new Array();
            for (let z in params.Logs) {
                let obj = new SpanLog();
                obj.deserialize(params.Logs[z]);
                this.Logs.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new SpanTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Process) {
            let obj = new SpanProcess();
            obj.deserialize(params.Process)
            this.Process = obj;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.OperationName = 'OperationName' in params ? params.OperationName : null;

        if (params.References) {
            this.References = new Array();
            for (let z in params.References) {
                let obj = new SpanReference();
                obj.deserialize(params.References[z]);
                this.References.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.SpanID = 'SpanID' in params ? params.SpanID : null;
        this.StartTimeMillis = 'StartTimeMillis' in params ? params.StartTimeMillis : null;
        this.ParentSpanID = 'ParentSpanID' in params ? params.ParentSpanID : null;

    }
}

/**
 * APM agent information.
 * @class
 */
class ApmAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent download address.
         * @type {string || null}
         */
        this.AgentDownloadURL = null;

        /**
         * Collector reporting address.
         * @type {string || null}
         */
        this.CollectorURL = null;

        /**
         * Token information.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Public network reporting address.
         * @type {string || null}
         */
        this.PublicCollectorURL = null;

        /**
         * Self-Developed vpc report address.
         * @type {string || null}
         */
        this.InnerCollectorURL = null;

        /**
         * Private link reporting address.
         * @type {string || null}
         */
        this.PrivateLinkCollectorURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentDownloadURL = 'AgentDownloadURL' in params ? params.AgentDownloadURL : null;
        this.CollectorURL = 'CollectorURL' in params ? params.CollectorURL : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.PublicCollectorURL = 'PublicCollectorURL' in params ? params.PublicCollectorURL : null;
        this.InnerCollectorURL = 'InnerCollectorURL' in params ? params.InnerCollectorURL : null;
        this.PrivateLinkCollectorURL = 'PrivateLinkCollectorURL' in params ? params.PrivateLinkCollectorURL : null;

    }
}

/**
 * DescribeGeneralSpanList response structure.
 * @class
 */
class DescribeGeneralSpanListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Span pagination list.
         * @type {Array.<Span> || null}
         */
        this.Spans = null;

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

        if (params.Spans) {
            this.Spans = new Array();
            for (let z in params.Spans) {
                let obj = new Span();
                obj.deserialize(params.Spans[z]);
                this.Spans.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Metric list cell.
 * @class
 */
class ApmMetricRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field array, used for the query result of indicators.
         * @type {Array.<ApmField> || null}
         */
        this.Fields = null;

        /**
         * Tag array, used to distinguish the objects of groupby.
         * @type {Array.<ApmTag> || null}
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

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new ApmField();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceOverview request structure.
 * @class
 */
class DescribeServiceOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric list.
         * @type {Array.<QueryMetricItem> || null}
         */
        this.Metrics = null;

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Aggregation dimension.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * Start time (unit: sec).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Sorting method
.
Value: fill in.
-Asc: sorts query metrics in ascending order.
- desc: sort query metrics in descending order.
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging starting point.
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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new QueryMetricItem();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeApmAgent response structure.
 * @class
 */
class DescribeApmAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent information.
         * @type {ApmAgentInfo || null}
         */
        this.ApmAgent = null;

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

        if (params.ApmAgent) {
            let obj = new ApmAgentInfo();
            obj.deserialize(params.ApmAgent)
            this.ApmAgent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagValues request structure.
 * @class
 */
class DescribeTagValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension name.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Start time (unit: sec).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Or filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.OrFilters = null;

        /**
         * Usage type.
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
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.OrFilters) {
            this.OrFilters = new Array();
            for (let z in params.OrFilters) {
                let obj = new Filter();
                obj.deserialize(params.OrFilters[z]);
                this.OrFilters.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Metric dimension information.
 * @class
 */
class ApmField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Indicator numerical value.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Units corresponding to the metric.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Year-Over-Year result array, recommended to use.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<APMKVItem> || null}
         */
        this.CompareVals = null;

        /**
         * Indicator numerical value of the previous period in year-over-year comparison.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<APMKV> || null}
         */
        this.LastPeriodValue = null;

        /**
         * Year-On-Year metric value. deprecated, not recommended for use.
         * @type {string || null}
         */
        this.CompareVal = null;

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
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.CompareVals) {
            this.CompareVals = new Array();
            for (let z in params.CompareVals) {
                let obj = new APMKVItem();
                obj.deserialize(params.CompareVals[z]);
                this.CompareVals.push(obj);
            }
        }

        if (params.LastPeriodValue) {
            this.LastPeriodValue = new Array();
            for (let z in params.LastPeriodValue) {
                let obj = new APMKV();
                obj.deserialize(params.LastPeriodValue[z]);
                this.LastPeriodValue.push(obj);
            }
        }
        this.CompareVal = 'CompareVal' in params ? params.CompareVal : null;

    }
}

/**
 * Metric curve data.
 * @class
 */
class Line extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name.
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric chinese name.
         * @type {string || null}
         */
        this.MetricNameCN = null;

        /**
         * Time series.
         * @type {Array.<number> || null}
         */
        this.TimeSerial = null;

        /**
         * Data sequence.
         * @type {Array.<number> || null}
         */
        this.DataSerial = null;

        /**
         * Dimension list.
         * @type {Array.<ApmTag> || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricNameCN = 'MetricNameCN' in params ? params.MetricNameCN : null;
        this.TimeSerial = 'TimeSerial' in params ? params.TimeSerial : null;
        this.DataSerial = 'DataSerial' in params ? params.DataSerial : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Application-Related configuration list items.
 * @class
 */
class ApmApplicationConfigView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceKey = null;

        /**
         * Application name	.	
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * API filtering.
         * @type {string || null}
         */
        this.OperationNameFilter = null;

        /**
         * Error type filtering.
         * @type {string || null}
         */
        this.ExceptionFilter = null;

        /**
         * HTTP status code filtering.
         * @type {string || null}
         */
        this.ErrorCodeFilter = null;

        /**
         * Application diagnosis switch (deprecated).
         * @type {boolean || null}
         */
        this.EventEnable = null;

        /**
         * URL convergence switch. 0: off; 1: on.
         * @type {number || null}
         */
        this.UrlConvergenceSwitch = null;

        /**
         * URL convergence threshold.	
         * @type {number || null}
         */
        this.UrlConvergenceThreshold = null;

        /**
         * URL convergence rule in the form of a regular expression.	
         * @type {string || null}
         */
        this.UrlConvergence = null;

        /**
         * URL exclusion rule in the form of a regular expression.
         * @type {string || null}
         */
        this.UrlExclude = null;

        /**
         * Log feature switch. 0: off; 1: on.
         * @type {number || null}
         */
        this.IsRelatedLog = null;

        /**
         * Log source.	
         * @type {string || null}
         */
        this.LogSource = null;

        /**
         * Log set. 
         * @type {string || null}
         */
        this.LogSet = null;

        /**
         * Log topic.
         * @type {string || null}
         */
        this.LogTopicID = null;

        /**
         * Method stack snapshot switch: true to enable, false to disable.
         * @type {boolean || null}
         */
        this.SnapshotEnable = null;

        /**
         * Slow call listening trigger threshold.
         * @type {number || null}
         */
        this.SnapshotTimeout = null;

        /**
         * Probe master switch.
         * @type {boolean || null}
         */
        this.AgentEnable = null;

        /**
         * Component list switch (deprecated).
         * @type {Array.<Instrument> || null}
         */
        this.InstrumentList = null;

        /**
         * Link compression switch (deprecated).
         * @type {boolean || null}
         */
        this.TraceSquash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceKey = 'InstanceKey' in params ? params.InstanceKey : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.OperationNameFilter = 'OperationNameFilter' in params ? params.OperationNameFilter : null;
        this.ExceptionFilter = 'ExceptionFilter' in params ? params.ExceptionFilter : null;
        this.ErrorCodeFilter = 'ErrorCodeFilter' in params ? params.ErrorCodeFilter : null;
        this.EventEnable = 'EventEnable' in params ? params.EventEnable : null;
        this.UrlConvergenceSwitch = 'UrlConvergenceSwitch' in params ? params.UrlConvergenceSwitch : null;
        this.UrlConvergenceThreshold = 'UrlConvergenceThreshold' in params ? params.UrlConvergenceThreshold : null;
        this.UrlConvergence = 'UrlConvergence' in params ? params.UrlConvergence : null;
        this.UrlExclude = 'UrlExclude' in params ? params.UrlExclude : null;
        this.IsRelatedLog = 'IsRelatedLog' in params ? params.IsRelatedLog : null;
        this.LogSource = 'LogSource' in params ? params.LogSource : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.LogTopicID = 'LogTopicID' in params ? params.LogTopicID : null;
        this.SnapshotEnable = 'SnapshotEnable' in params ? params.SnapshotEnable : null;
        this.SnapshotTimeout = 'SnapshotTimeout' in params ? params.SnapshotTimeout : null;
        this.AgentEnable = 'AgentEnable' in params ? params.AgentEnable : null;

        if (params.InstrumentList) {
            this.InstrumentList = new Array();
            for (let z in params.InstrumentList) {
                let obj = new Instrument();
                obj.deserialize(params.InstrumentList[z]);
                this.InstrumentList.push(obj);
            }
        }
        this.TraceSquash = 'TraceSquash' in params ? params.TraceSquash : null;

    }
}

/**
 * Dimension (tag) object.
 * @class
 */
class ApmTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dimension key (column name, Tag key).
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Dimension value (tag value).
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
 * Common kv structure of apm.
 * @class
 */
class APMKVItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key value definition.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value definition.
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
 * Sorting fields.
 * @class
 */
class OrderBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sort field (starttime, endtime, duration are supported).
         * @type {string || null}
         */
        this.Key = null;

        /**
         * ASC: sequential sorting / desc: reverse sorting.
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
 * DescribeMetricRecords response structure.
 * @class
 */
class DescribeMetricRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicator result set.
         * @type {Array.<ApmMetricRecord> || null}
         */
        this.Records = null;

        /**
         * Number of metric query result sets.
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new ApmMetricRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGeneralOTSpanList response structure.
 * @class
 */
class DescribeGeneralOTSpanListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The trace structure containing the query results spans. the string after the opentelemetry standard trace structure is hashed. first, the trace is converted into a json string using ptrace.jsonmarshaler, then compressed with gzip, and finally converted into a base64 standard string.
         * @type {string || null}
         */
        this.Spans = null;

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
        this.Spans = 'Spans' in params ? params.Spans : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGeneralSpanList request structure.
 * @class
 */
class DescribeGeneralSpanListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Span query start timestamp (unit: seconds).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Span query end timestamp (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Universal filter parameters.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sort
.
The currently supported keys are:.

-StartTime (start time).
-EndTime (end time).
-Duration (response time).

The currently supported values are:.

- desc: sort in descending order.
-Asc - ascending order.
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * The service name of the business itself. console users should fill in taw.
         * @type {string || null}
         */
        this.BusinessName = null;

        /**
         * Number of items per page, defaults to 10,000, valid values are 0 to 10,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.BusinessName = 'BusinessName' in params ? params.BusinessName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Queries filter parameters.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filtering method (=, !=, in).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter dimension name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Filter value. uses commas to separate multiple values in in filtering method.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * APM floating-point number type key-value pair.
 * @class
 */
class APMKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key value definition.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value definition.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeGeneralOTSpanList request structure.
 * @class
 */
class DescribeGeneralOTSpanListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Span query start timestamp (unit: seconds).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Span query end timestamp (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Universal filter parameters.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sort
.
The currently supported keys are:.

-StartTime (start time).
-EndTime (end time).
-Duration (response time).

The currently supported values are:.

- desc: sort in descending order.
-Asc - ascending order.
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * The service name of the business itself. console users should fill in taw.
         * @type {string || null}
         */
        this.BusinessName = null;

        /**
         * Number of items per page, defaults to 10,000, valid value range is 0 – 10,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.BusinessName = 'BusinessName' in params ? params.BusinessName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeApmAgent request structure.
 * @class
 */
class DescribeApmAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Access method: currently supports access and reporting via skywalking, ot, and ebpf methods. if not specified, ot is used by default.
         * @type {string || null}
         */
        this.AgentType = null;

        /**
         * Reporting environment: currently supports pl (private network reporting), public (public network), and inner (self-developed vpc) environment reporting. if not specified, the default is public.
         * @type {string || null}
         */
        this.NetworkMode = null;

        /**
         * Language reporting is now supported for java, golang, php, python, dotnet, nodejs. if not specified, golang is used by default.
         * @type {string || null}
         */
        this.LanguageEnvironment = null;

        /**
         * Reporting method, deprecated.
         * @type {string || null}
         */
        this.ReportMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentType = 'AgentType' in params ? params.AgentType : null;
        this.NetworkMode = 'NetworkMode' in params ? params.NetworkMode : null;
        this.LanguageEnvironment = 'LanguageEnvironment' in params ? params.LanguageEnvironment : null;
        this.ReportMethod = 'ReportMethod' in params ? params.ReportMethod : null;

    }
}

/**
 * DescribeMetricRecords request structure.
 * @class
 */
class DescribeMetricRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric list.
         * @type {Array.<QueryMetricItem> || null}
         */
        this.Metrics = null;

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time (unit: sec).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Or filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.OrFilters = null;

        /**
         * Aggregation dimension.
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * Sort
.
The currently supported keys are:.

-StartTime (start time).
-EndTime (end time).
-Duration (response time).

The currently supported values are:.

- desc: sort in descending order.
-Asc - ascending order.
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * The service name of the business itself. console users should fill in taw.
         * @type {string || null}
         */
        this.BusinessName = null;

        /**
         * Special handling of query results.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Size per page, defaults to 1,000, valid value range is 0 – 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging starting point.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * Page length.
         * @type {number || null}
         */
        this.PageSize = null;

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
                let obj = new QueryMetricItem();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.OrFilters) {
            this.OrFilters = new Array();
            for (let z in params.OrFilters) {
                let obj = new Filter();
                obj.deserialize(params.OrFilters[z]);
                this.OrFilters.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.BusinessName = 'BusinessName' in params ? params.BusinessName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeGeneralApmApplicationConfig response structure.
 * @class
 */
class DescribeGeneralApmApplicationConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application configuration item.
         * @type {ApmApplicationConfigView || null}
         */
        this.ApmApplicationConfigView = null;

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

        if (params.ApmApplicationConfigView) {
            let obj = new ApmApplicationConfigView();
            obj.deserialize(params.ApmApplicationConfigView)
            this.ApmApplicationConfigView = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGeneralMetricData request structure.
 * @class
 */
class DescribeGeneralMetricDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metric name to be queried, which cannot be customized. (for details, see <https://intl.cloud.tencent.com/document/product/248/101681?from_cn_redirect=1>.).
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * View name. the input cannot be customized. [for details, see.](https://intl.cloud.tencent.com/document/product/248/101681?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * The dimension information to be filtered; different views have corresponding metric dimensions. (for details, see <https://intl.cloud.tencent.com/document/product/248/101681?from_cn_redirect=1>.).
         * @type {Array.<GeneralFilter> || null}
         */
        this.Filters = null;

        /**
         * Aggregated dimension; different views have corresponding metric dimensions. (for details, see <https://intl.cloud.tencent.com/document/product/248/101681?from_cn_redirect=1>.).
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * The timestamp of the start time, supporting the query of metric data within 30 days. (unit: seconds).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The timestamp of the end time, supporting the query of metric data within 30 days. (unit: seconds).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Whether to aggregate by a fixed time span: enter 1 for values of 1 and greater, and 0 if not filled in.
-If 0 is filled in, it calculates the metric data from the start time to the cutoff time.
- if 1 is filled in, the aggregation granularity will be selected according to the time span from the start time to the deadline:.
 -If the time span is (0,12) hours, it is aggregated by one-minute granularity.
 -If the time span is [12,48] hours, it is aggregated at a five-minute granularity.
 -If the time span is (48, +∞) hours, it is aggregated at an hourly granularity.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Sort query metrics.
Key: enter the tencentcloud api metric name. [for details, see](https://intl.cloud.tencent.com/document/product/248/101681?from_cn_redirect=1) .
Value: specify the sorting method:.     
-Asc: sorts query metrics in ascending order.
- desc: sort query metrics in descending order.
         * @type {OrderBy || null}
         */
        this.OrderBy = null;

        /**
         * Maximum number of queried metrics. currently, up to 50 data entries can be displayed. the value range for pagesize is 1-50. submit pagesize to show the limited number based on the value of pagesize.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new GeneralFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.OrderBy) {
            let obj = new OrderBy();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * CreateApmInstance response structure.
 * @class
 */
class CreateApmInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business system id.
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Upstream and downstream relationships of span.
 * @class
 */
class SpanReference extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of association relationship.
         * @type {string || null}
         */
        this.RefType = null;

        /**
         * Span ID
         * @type {string || null}
         */
        this.SpanID = null;

        /**
         * Trace ID
         * @type {string || null}
         */
        this.TraceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RefType = 'RefType' in params ? params.RefType : null;
        this.SpanID = 'SpanID' in params ? params.SpanID : null;
        this.TraceID = 'TraceID' in params ? params.TraceID : null;

    }
}

/**
 * Service information.
 * @class
 */
class SpanProcess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application service name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Tags Tag array.
         * @type {Array.<SpanTag> || null}
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
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new SpanTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeGeneralApmApplicationConfig request structure.
 * @class
 */
class DescribeGeneralApmApplicationConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Business system id.
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
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyApmInstance response structure.
 * @class
 */
class ModifyApmInstanceResponse extends  AbstractModel {
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
 * Queries filter parameters.
 * @class
 */
class GeneralFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter dimension name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Values after filtering.
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
 * DescribeApmInstances request structure.
 * @class
 */
class DescribeApmInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag list.
         * @type {Array.<ApmTag> || null}
         */
        this.Tags = null;

        /**
         * Filter by business system name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Filter by business system id.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to query the official demo business system (0 = non-demo business system, 1 = demo business system, default is 0).
         * @type {number || null}
         */
        this.DemoInstanceFlag = null;

        /**
         * Whether to query all regional business systems (0 = do not query all regions, 1 = query all regions, default is 0).
         * @type {number || null}
         */
        this.AllRegionsFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new ApmTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.DemoInstanceFlag = 'DemoInstanceFlag' in params ? params.DemoInstanceFlag : null;
        this.AllRegionsFlag = 'AllRegionsFlag' in params ? params.AllRegionsFlag : null;

    }
}

/**
 * Tag.
 * @class
 */
class SpanTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Tag key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeGeneralMetricData response structure.
 * @class
 */
class DescribeGeneralMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicator result set.
         * @type {Array.<Line> || null}
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new Line();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGeneralApmApplicationConfig response structure.
 * @class
 */
class ModifyGeneralApmApplicationConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description of the returned value.
         * @type {string || null}
         */
        this.Message = null;

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
        this.Message = 'Message' in params ? params.Message : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateApmInstance response structure.
 * @class
 */
class TerminateApmInstanceResponse extends  AbstractModel {
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

module.exports = {
    SpanLog: SpanLog,
    ModifyApmInstanceRequest: ModifyApmInstanceRequest,
    ApmInstanceDetail: ApmInstanceDetail,
    CreateApmInstanceRequest: CreateApmInstanceRequest,
    ModifyGeneralApmApplicationConfigRequest: ModifyGeneralApmApplicationConfigRequest,
    DescribeServiceOverviewResponse: DescribeServiceOverviewResponse,
    QueryMetricItem: QueryMetricItem,
    TerminateApmInstanceRequest: TerminateApmInstanceRequest,
    DescribeApmInstancesResponse: DescribeApmInstancesResponse,
    Instrument: Instrument,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    Span: Span,
    ApmAgentInfo: ApmAgentInfo,
    DescribeGeneralSpanListResponse: DescribeGeneralSpanListResponse,
    ApmMetricRecord: ApmMetricRecord,
    DescribeServiceOverviewRequest: DescribeServiceOverviewRequest,
    DescribeApmAgentResponse: DescribeApmAgentResponse,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    ApmField: ApmField,
    Line: Line,
    ApmApplicationConfigView: ApmApplicationConfigView,
    ApmTag: ApmTag,
    APMKVItem: APMKVItem,
    OrderBy: OrderBy,
    DescribeMetricRecordsResponse: DescribeMetricRecordsResponse,
    DescribeGeneralOTSpanListResponse: DescribeGeneralOTSpanListResponse,
    DescribeGeneralSpanListRequest: DescribeGeneralSpanListRequest,
    Filter: Filter,
    APMKV: APMKV,
    DescribeGeneralOTSpanListRequest: DescribeGeneralOTSpanListRequest,
    DescribeApmAgentRequest: DescribeApmAgentRequest,
    DescribeMetricRecordsRequest: DescribeMetricRecordsRequest,
    DescribeGeneralApmApplicationConfigResponse: DescribeGeneralApmApplicationConfigResponse,
    DescribeGeneralMetricDataRequest: DescribeGeneralMetricDataRequest,
    CreateApmInstanceResponse: CreateApmInstanceResponse,
    SpanReference: SpanReference,
    SpanProcess: SpanProcess,
    DescribeGeneralApmApplicationConfigRequest: DescribeGeneralApmApplicationConfigRequest,
    ModifyApmInstanceResponse: ModifyApmInstanceResponse,
    GeneralFilter: GeneralFilter,
    DescribeApmInstancesRequest: DescribeApmInstancesRequest,
    SpanTag: SpanTag,
    DescribeGeneralMetricDataResponse: DescribeGeneralMetricDataResponse,
    ModifyGeneralApmApplicationConfigResponse: ModifyGeneralApmApplicationConfigResponse,
    TerminateApmInstanceResponse: TerminateApmInstanceResponse,

}
