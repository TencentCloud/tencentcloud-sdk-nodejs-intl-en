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
 * DescribeBaseMetrics request structure.
 * @class
 */
class DescribeBaseMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Metric name
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

module.exports = {
    GetMonitorDataRequest: GetMonitorDataRequest,
    Instance: Instance,
    PeriodsSt: PeriodsSt,
    Dimension: Dimension,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DataPoint: DataPoint,
    MetricObjectMeaning: MetricObjectMeaning,
    DimensionsDesc: DimensionsDesc,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,

}
