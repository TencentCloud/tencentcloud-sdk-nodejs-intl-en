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
 * DescribeCloudDedicatedZoneResourceSummary request structure.
 * @class
 */
class DescribeCloudDedicatedZoneResourceSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique id of the cloud dedicated zone.
         * @type {string || null}
         */
        this.CdzId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdzId = 'CdzId' in params ? params.CdzId : null;

    }
}

/**
 * Details of the queried data for the statistical item of the CDZ resource, corresponding to a specific vertical product resource statistics.
 * @class
 */
class CloudDedicatedZoneResourceStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the item name of resource statistics.
         * @type {string || null}
         */
        this.Item = null;

        /**
         * Resource statistics item measurement unit.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Total resource amount.
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Used resources.
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * Specifies the percentage of used resources.
         * @type {string || null}
         */
        this.UsageRate = null;

        /**
         * Remaining resource.
         * @type {string || null}
         */
        this.Remain = null;

        /**
         * Remaining resource percentage.
         * @type {string || null}
         */
        this.RemainRate = null;

        /**
         * Resource utilization rate at midnight this monday.
         * @type {string || null}
         */
        this.ThisMondayUsageRate = null;

        /**
         * Resource growth rate this week.
         * @type {string || null}
         */
        this.ThisMondayUsageGrowthRate = null;

        /**
         * Resource growth rate last week.
         * @type {string || null}
         */
        this.LastMondayUsageGrowthRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Item = 'Item' in params ? params.Item : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.UsageRate = 'UsageRate' in params ? params.UsageRate : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.RemainRate = 'RemainRate' in params ? params.RemainRate : null;
        this.ThisMondayUsageRate = 'ThisMondayUsageRate' in params ? params.ThisMondayUsageRate : null;
        this.ThisMondayUsageGrowthRate = 'ThisMondayUsageGrowthRate' in params ? params.ThisMondayUsageGrowthRate : null;
        this.LastMondayUsageGrowthRate = 'LastMondayUsageGrowthRate' in params ? params.LastMondayUsageGrowthRate : null;

    }
}

/**
 * Extended information of CDZ resource water level data, including availability zone local time and wait for data.
 * @class
 */
class ExtraInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud dedicated zone local time this monday date.
         * @type {string || null}
         */
        this.ThisMondayLocalDate = null;

        /**
         * Cloud dedicated zone local time last monday date.
         * @type {string || null}
         */
        this.LastMondayLocalDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ThisMondayLocalDate = 'ThisMondayLocalDate' in params ? params.ThisMondayLocalDate : null;
        this.LastMondayLocalDate = 'LastMondayLocalDate' in params ? params.LastMondayLocalDate : null;

    }
}

/**
 * Details of the CDZ resource water level, corresponding to a specific vertical product.
 * @class
 */
class CloudDedicatedZoneResourceSummaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Subproduct name
         * @type {string || null}
         */
        this.SubProductName = null;

        /**
         * Statistical detail of the resource.
         * @type {Array.<CloudDedicatedZoneResourceStatisticsInfo> || null}
         */
        this.Statistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;

        if (params.Statistics) {
            this.Statistics = new Array();
            for (let z in params.Statistics) {
                let obj = new CloudDedicatedZoneResourceStatisticsInfo();
                obj.deserialize(params.Statistics[z]);
                this.Statistics.push(obj);
            }
        }

    }
}

/**
 * DescribeCloudDedicatedZoneResourceSummary response structure.
 * @class
 */
class DescribeCloudDedicatedZoneResourceSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource utilization.
         * @type {Array.<CloudDedicatedZoneResourceSummaryInfo> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * Extended information of resource utilization.
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

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

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new CloudDedicatedZoneResourceSummaryInfo();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }

        if (params.ExtraInfo) {
            let obj = new ExtraInfo();
            obj.deserialize(params.ExtraInfo)
            this.ExtraInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeCloudDedicatedZoneResourceSummaryRequest: DescribeCloudDedicatedZoneResourceSummaryRequest,
    CloudDedicatedZoneResourceStatisticsInfo: CloudDedicatedZoneResourceStatisticsInfo,
    ExtraInfo: ExtraInfo,
    CloudDedicatedZoneResourceSummaryInfo: CloudDedicatedZoneResourceSummaryInfo,
    DescribeCloudDedicatedZoneResourceSummaryResponse: DescribeCloudDedicatedZoneResourceSummaryResponse,

}
