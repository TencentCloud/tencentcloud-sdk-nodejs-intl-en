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
 * Line chart data
 * @class
 */
class MAULineChartData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Year-month date data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataTime = null;

        /**
         * MAU data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MAUCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataTime = 'DataTime' in params ? params.DataTime : null;
        this.MAUCount = 'MAUCount' in params ? params.MAUCount : null;

    }
}

/**
 * MAU metric comparison response data
 * @class
 */
class MAUIndicatorCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Growth rate (targetData - sourceData) / sourceData, returns 0 when SourceMAUNum is 0
         * @type {string || null}
         */
        this.ComparisonRatio = null;

        /**
         * 1 Increase
2 Decrease
Returns 0 when SourceMAUNum is 0
         * @type {number || null}
         */
        this.ComparisonResult = null;

        /**
         * Last month's MAU data
         * @type {number || null}
         */
        this.SourceMAUNum = null;

        /**
         * This month's MAU data
         * @type {number || null}
         */
        this.TargetMAUNum = null;

        /**
         * Data timestamp
         * @type {number || null}
         */
        this.FlushTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComparisonRatio = 'ComparisonRatio' in params ? params.ComparisonRatio : null;
        this.ComparisonResult = 'ComparisonResult' in params ? params.ComparisonResult : null;
        this.SourceMAUNum = 'SourceMAUNum' in params ? params.SourceMAUNum : null;
        this.TargetMAUNum = 'TargetMAUNum' in params ? params.TargetMAUNum : null;
        this.FlushTime = 'FlushTime' in params ? params.FlushTime : null;

    }
}

/**
 * DescribeMNGMAUMonthlyComparisonMetricCard request structure.
 * @class
 */
class DescribeMNGMAUMonthlyComparisonMetricCardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in YYYYMMDD format
         * @type {number || null}
         */
        this.SourceMonth = null;

        /**
         * Type: 0 Non-production data, 1 Production data 
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * End time in YYYYMMDD format
         * @type {number || null}
         */
        this.TargetMonth = null;

        /**
         * Superapp ID starting with App
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Mini program team ID, required. When provided, the query is performed based on the mini program team.
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMonth = 'SourceMonth' in params ? params.SourceMonth : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.TargetMonth = 'TargetMonth' in params ? params.TargetMonth : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * DescribeMNGMAUMonthlyComparisonMetricCard response structure.
 * @class
 */
class DescribeMNGMAUMonthlyComparisonMetricCardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display at the top of the page
         * @type {MAUIndicatorCard || null}
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
            let obj = new MAUIndicatorCard();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMNGMAULineChart response structure.
 * @class
 */
class DescribeMNGMAULineChartResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display at the top of the page
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MNGMAULineChartData> || null}
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
                let obj = new MNGMAULineChartData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMNGMAULineChart request structure.
 * @class
 */
class DescribeMNGMAULineChartRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type: 0 Non-production data, 1 Production data 
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * Superapp ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Mini program team ID
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * DescribeMNPMAULineChart request structure.
 * @class
 */
class DescribeMNPMAULineChartRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type: 0 Non-production data, 1 Production data
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * Superapp ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Mini program team ID
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * DescribeMNPMAUDataDetail request structure.
 * @class
 */
class DescribeMNPMAUDataDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type: 0 Non-production data, 1 Production data
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * Superapp ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Program team ID, -1 means not provided
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * Mini game MAU line chart data
 * @class
 */
class MNGMAULineChartData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Year-month-date data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataTime = null;

        /**
         * MAU data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MAUCount = null;

        /**
         * Update time
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
        this.DataTime = 'DataTime' in params ? params.DataTime : null;
        this.MAUCount = 'MAUCount' in params ? params.MAUCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMNPMAUMetricCard request structure.
 * @class
 */
class DescribeMNPMAUMetricCardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in YYYYMMDD format
         * @type {number || null}
         */
        this.SourceMonth = null;

        /**
         * Type: 0 Non-production data, 1 Production data 
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * End time in YYYYMMDD format
         * @type {number || null}
         */
        this.TargetMonth = null;

        /**
         * Superapp ID starting with App
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Mini program team ID, required. When provided, the query is performed based on the mini program team.
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMonth = 'SourceMonth' in params ? params.SourceMonth : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.TargetMonth = 'TargetMonth' in params ? params.TargetMonth : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * Mini program MAU details
 * @class
 */
class MAUDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mini program name
         * @type {string || null}
         */
        this.MNPName = null;

        /**
         * MAU details
         * @type {Array.<MAULineChartData> || null}
         */
        this.DataList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MNPName = 'MNPName' in params ? params.MNPName : null;

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new MAULineChartData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }

    }
}

/**
 * DescribeMNPMAUMetricCard response structure.
 * @class
 */
class DescribeMNPMAUMetricCardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display at the top of the page
         * @type {MAUIndicatorCard || null}
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
            let obj = new MAUIndicatorCard();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMNGMAUDataDetail request structure.
 * @class
 */
class DescribeMNGMAUDataDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type
         * @type {number || null}
         */
        this.DataType = null;

        /**
         * Tenant ID
         * @type {string || null}
         */
        this.PlatformId = null;

        /**
         * Superapp ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Mini program appid, required. When provided, the query is performed based on the mini program.
         * @type {string || null}
         */
        this.MNPId = null;

        /**
         * Mini program team ID
         * @type {number || null}
         */
        this.MNPTeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PlatformId = 'PlatformId' in params ? params.PlatformId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.MNPId = 'MNPId' in params ? params.MNPId : null;
        this.MNPTeamId = 'MNPTeamId' in params ? params.MNPTeamId : null;

    }
}

/**
 * DescribeMNGMAUDataDetail response structure.
 * @class
 */
class DescribeMNGMAUDataDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MAUDetail> || null}
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
                let obj = new MAUDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMNPMAULineChart response structure.
 * @class
 */
class DescribeMNPMAULineChartResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MAUChartData> || null}
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
                let obj = new MAUChartData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MAU line chart data
 * @class
 */
class MAUChartData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Year and month: 2024-12
         * @type {number || null}
         */
        this.DataTime = null;

        /**
         * Value
         * @type {number || null}
         */
        this.MAUCount = null;

        /**
         * Data update time, only available when MAUCount is greater than 0.
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
        this.DataTime = 'DataTime' in params ? params.DataTime : null;
        this.MAUCount = 'MAUCount' in params ? params.MAUCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeMNPMAUDataDetail response structure.
 * @class
 */
class DescribeMNPMAUDataDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data display
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MAUDetail> || null}
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
                let obj = new MAUDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    MAULineChartData: MAULineChartData,
    MAUIndicatorCard: MAUIndicatorCard,
    DescribeMNGMAUMonthlyComparisonMetricCardRequest: DescribeMNGMAUMonthlyComparisonMetricCardRequest,
    DescribeMNGMAUMonthlyComparisonMetricCardResponse: DescribeMNGMAUMonthlyComparisonMetricCardResponse,
    DescribeMNGMAULineChartResponse: DescribeMNGMAULineChartResponse,
    DescribeMNGMAULineChartRequest: DescribeMNGMAULineChartRequest,
    DescribeMNPMAULineChartRequest: DescribeMNPMAULineChartRequest,
    DescribeMNPMAUDataDetailRequest: DescribeMNPMAUDataDetailRequest,
    MNGMAULineChartData: MNGMAULineChartData,
    DescribeMNPMAUMetricCardRequest: DescribeMNPMAUMetricCardRequest,
    MAUDetail: MAUDetail,
    DescribeMNPMAUMetricCardResponse: DescribeMNPMAUMetricCardResponse,
    DescribeMNGMAUDataDetailRequest: DescribeMNGMAUDataDetailRequest,
    DescribeMNGMAUDataDetailResponse: DescribeMNGMAUDataDetailResponse,
    DescribeMNPMAULineChartResponse: DescribeMNPMAULineChartResponse,
    MAUChartData: MAUChartData,
    DescribeMNPMAUDataDetailResponse: DescribeMNPMAUDataDetailResponse,

}
