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
 * CreateTawInstance request structure.
 * @class
 */
class CreateTawInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID (at least greater than 0)
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * Billing type (1: Pay-as-you-go).
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Data retention period (at least greater than 0)
         * @type {number || null}
         */
        this.DataRetentionDays = null;

        /**
         * Instance name (up to 255 bytes)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Instance description (up to 1,024 bytes)
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * Number of data entries reported per day
         * @type {string || null}
         */
        this.CountNum = null;

        /**
         * Billing for data storage
         * @type {string || null}
         */
        this.PeriodRetain = null;

        /**
         * Instance purchase channel. Valid value: `cdn`.
         * @type {string || null}
         */
        this.BuyingChannel = null;

        /**
         * Type of prepaid resource pack (only required for prepaid mode)
         * @type {number || null}
         */
        this.ResourcePackageType = null;

        /**
         * The number of prepaid resource packs (only required for prepaid mode)
         * @type {number || null}
         */
        this.ResourcePackageNum = null;

        /**
         * Instance type. `1`: Web; `2`: Application
         * @type {number || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.DataRetentionDays = 'DataRetentionDays' in params ? params.DataRetentionDays : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.CountNum = 'CountNum' in params ? params.CountNum : null;
        this.PeriodRetain = 'PeriodRetain' in params ? params.PeriodRetain : null;
        this.BuyingChannel = 'BuyingChannel' in params ? params.BuyingChannel : null;
        this.ResourcePackageType = 'ResourcePackageType' in params ? params.ResourcePackageType : null;
        this.ResourcePackageNum = 'ResourcePackageNum' in params ? params.ResourcePackageNum : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeDataFetchProject request structure.
 * @class
 */
class DescribeDataFetchProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`: performance view; `day`: 14-day data; `condition`: condition list; `area`: request speed distribution; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

        /**
         * HTTP status code.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;

    }
}

/**
 * DescribeData response structure.
 * @class
 */
class DescribeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTawInstance response structure.
 * @class
 */
class CreateTawInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of prepaid order
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject request structure.
 * @class
 */
class DeleteProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the project to be deleted
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeProjectLimits response structure.
 * @class
 */
class DescribeProjectLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of reporting rates
         * @type {Array.<ProjectLimit> || null}
         */
        this.ProjectLimitSet = null;

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

        if (params.ProjectLimitSet) {
            this.ProjectLimitSet = new Array();
            for (let z in params.ProjectLimitSet) {
                let obj = new ProjectLimit();
                obj.deserialize(params.ProjectLimitSet[z]);
                this.ProjectLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOfflineLogConfig response structure.
 * @class
 */
class DeleteOfflineLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API call information
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeProject response structure.
 * @class
 */
class ResumeProjectResponse extends  AbstractModel {
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
 * DescribeRumLogList response structure.
 * @class
 */
class DescribeRumLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataPvUrlInfo response structure.
 * @class
 */
class DescribeDataPvUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopProject response structure.
 * @class
 */
class StopProjectResponse extends  AbstractModel {
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
 * DescribeDataFetchUrl response structure.
 * @class
 */
class DescribeDataFetchUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeError request structure.
 * @class
 */
class DescribeErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * StopInstance request structure.
 * @class
 */
class StopInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be stopped
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
 * DescribeDataStaticUrlV2 request structure.
 * @class
 */
class DescribeDataStaticUrlV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * pagepv: performance view. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * ModifyInstance request structure.
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be modified
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New instance name (up to 255 characters)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * New instance description (up to 1,024 characters)
         * @type {string || null}
         */
        this.InstanceDesc = null;

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
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;

    }
}

/**
 * DescribeDataStaticProjectV2 response structure.
 * @class
 */
class DescribeDataStaticProjectV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogList request structure.
 * @class
 */
class DescribeLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting order (required). Valid values: `desc`, `asc`.
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * This parameter is required. Valid values: `searchlog`, `histogram`.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Start time (required)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The number of raw logs returned for a single query. This parameter is required. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Context, which is used to load more logs. Pass through the last `Context` value returned to get more log content (up to 10,000 raw logs). It will expire after 1 hour
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Query statement, which is required and can contain up to 4,096 characters, such as "id:120001 AND type:\"log\"".
         * @type {string || null}
         */
        this.Query = null;

        /**
         * End time (required)
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
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeError response structure.
 * @class
 */
class DescribeErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Time
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWhitelist response structure.
 * @class
 */
class DeleteWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success message
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogExport request structure.
 * @class
 */
class CreateLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Log export start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log export end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Log export search statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Number of logs to be exported. Maximum value: 10 million
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Exported log sorting order by time. Valid values: asc: ascending; desc: descending. Default value: desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Exported log data format. Valid values: json, csv. Default value: json
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
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * DescribePvList response structure.
 * @class
 */
class DescribePvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * PV list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RumPvInfo> || null}
         */
        this.ProjectPvSet = null;

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

        if (params.ProjectPvSet) {
            this.ProjectPvSet = new Array();
            for (let z in params.ProjectPvSet) {
                let obj = new RumPvInfo();
                obj.deserialize(params.ProjectPvSet[z]);
                this.ProjectPvSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Number of RUM UVs
 * @class
 */
class RumUvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of UVs
         * @type {string || null}
         */
        this.Uv = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Uv = 'Uv' in params ? params.Uv : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeOfflineLogs request structure.
 * @class
 */
class DescribeOfflineLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * List of offline log file IDs
         * @type {Array.<string> || null}
         */
        this.FileIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.FileIDs = 'FileIDs' in params ? params.FileIDs : null;

    }
}

/**
 * DescribeScores request structure.
 * @class
 */
class DescribeScoresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * This parameter has been disused.
         * @type {number || null}
         */
        this.IsDemo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;

    }
}

/**
 * Project score entity.
 * @class
 */
class ScoreInfoV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * Total project score.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * API performance score.
         * @type {number || null}
         */
        this.ApiPerformanceScore = null;

        /**
         * API availability score.
         * @type {number || null}
         */
        this.ApiAvailableScore = null;

        /**
         * Total API calls.
         * @type {number || null}
         */
        this.ApiNum = null;

        /**
         * API failures.
         * @type {number || null}
         */
        this.ApiFail = null;

        /**
         * Average API duration.
         * @type {number || null}
         */
        this.ApiDuration = null;

        /**
         * Page performance score.
         * @type {number || null}
         */
        this.PagePerformanceScore = null;

        /**
         * Page views.
         * @type {number || null}
         */
        this.PagePv = null;

        /**
         * Unique visitors.
         * @type {number || null}
         */
        this.PageUv = null;

        /**
         * Page errors.
         * @type {number || null}
         */
        this.PageError = null;

        /**
         * First meaningful paint.
         * @type {number || null}
         */
        this.PageDuration = null;

        /**
         * Average largest contentful paint (LCP).
         * @type {number || null}
         */
        this.PageLCP = null;

        /**
         * Average first input delay (FID).
         * @type {number || null}
         */
        this.PageFID = null;

        /**
         * Average cumulative layout shift (CLS).
         * @type {number || null}
         */
        this.PageCLS = null;

        /**
         * Average first contentful paint (FCP).
         * @type {number || null}
         */
        this.PageFCP = null;

        /**
         * Average interaction to next paint (INP).
         * @type {number || null}
         */
        this.PageINP = null;

        /**
         * JavaScript error score.
         * @type {number || null}
         */
        this.JsErrorScore = null;

        /**
         * Static resource availability score.
         * @type {number || null}
         */
        this.StaticAvailableScore = null;

        /**
         * Static resource performance score.
         * @type {number || null}
         */
        this.StaticPerformanceScore = null;

        /**
         * Total static resource requests.
         * @type {number || null}
         */
        this.StaticNum = null;

        /**
         * Static resource loading failures.
         * @type {number || null}
         */
        this.StaticFail = null;

        /**
         * Static resource loading time.
         * @type {number || null}
         */
        this.StaticDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.ApiPerformanceScore = 'ApiPerformanceScore' in params ? params.ApiPerformanceScore : null;
        this.ApiAvailableScore = 'ApiAvailableScore' in params ? params.ApiAvailableScore : null;
        this.ApiNum = 'ApiNum' in params ? params.ApiNum : null;
        this.ApiFail = 'ApiFail' in params ? params.ApiFail : null;
        this.ApiDuration = 'ApiDuration' in params ? params.ApiDuration : null;
        this.PagePerformanceScore = 'PagePerformanceScore' in params ? params.PagePerformanceScore : null;
        this.PagePv = 'PagePv' in params ? params.PagePv : null;
        this.PageUv = 'PageUv' in params ? params.PageUv : null;
        this.PageError = 'PageError' in params ? params.PageError : null;
        this.PageDuration = 'PageDuration' in params ? params.PageDuration : null;
        this.PageLCP = 'PageLCP' in params ? params.PageLCP : null;
        this.PageFID = 'PageFID' in params ? params.PageFID : null;
        this.PageCLS = 'PageCLS' in params ? params.PageCLS : null;
        this.PageFCP = 'PageFCP' in params ? params.PageFCP : null;
        this.PageINP = 'PageINP' in params ? params.PageINP : null;
        this.JsErrorScore = 'JsErrorScore' in params ? params.JsErrorScore : null;
        this.StaticAvailableScore = 'StaticAvailableScore' in params ? params.StaticAvailableScore : null;
        this.StaticPerformanceScore = 'StaticPerformanceScore' in params ? params.StaticPerformanceScore : null;
        this.StaticNum = 'StaticNum' in params ? params.StaticNum : null;
        this.StaticFail = 'StaticFail' in params ? params.StaticFail : null;
        this.StaticDuration = 'StaticDuration' in params ? params.StaticDuration : null;

    }
}

/**
 * DescribeDataReportCount request structure.
 * @class
 */
class DescribeDataReportCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Reporting type
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * DeleteOfflineLogRecord request structure.
 * @class
 */
class DeleteOfflineLogRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * Offline log file ID
         * @type {string || null}
         */
        this.FileID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.FileID = 'FileID' in params ? params.FileID : null;

    }
}

/**
 * DescribeDataStaticResourceV2 request structure.
 * @class
 */
class DescribeDataStaticResourceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * top: top resource view. count40x: 40X view. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeReleaseFiles request structure.
 * @class
 */
class DescribeReleaseFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * File version
         * @type {string || null}
         */
        this.FileVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.FileVersion = 'FileVersion' in params ? params.FileVersion : null;

    }
}

/**
 * CreateReleaseFile request structure.
 * @class
 */
class CreateReleaseFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * File information list
         * @type {Array.<ReleaseFile> || null}
         */
        this.Files = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new ReleaseFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }

    }
}

/**
 * DeleteOfflineLogRecord response structure.
 * @class
 */
class DeleteOfflineLogRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API call information
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataCustomUrl request structure.
 * @class
 */
class DescribeDataCustomUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `top`: top resources view; `allcount`: performance view; `day`: 14-day data; `condition`: condition list; `pagepv`: PV view; `area`: request speed distribution; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Key value of the custom speed test
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeUvList response structure.
 * @class
 */
class DescribeUvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * UV list
         * @type {Array.<RumUvInfo> || null}
         */
        this.ProjectUvSet = null;

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

        if (params.ProjectUvSet) {
            this.ProjectUvSet = new Array();
            for (let z in params.ProjectUvSet) {
                let obj = new RumUvInfo();
                obj.deserialize(params.ProjectUvSet[z]);
                this.ProjectUvSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataStaticUrlV2 response structure.
 * @class
 */
class DescribeDataStaticUrlV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeDataPvUrlStatisticsV2 request structure.
 * @class
 */
class DescribeDataPvUrlStatisticsV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount: performance view. day: 14-day data. vp: performance. ckuv: UV. ckpv: PV. condition: condition list. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type (1, 2, 3, 4, 5, or 100). 1 indicates Wi-Fi. 2 indicates 2G. 3 indicates 3G. 4 indicates 4G. 5 indicates 5G. 6 indicates 6G. 100 indicates unknown.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Parameter value enumeration for group by. 1: 1 minute. 2: 5 minutes. 3: 30 minutes. 4: 1 hour.
 5:1d
         * @type {number || null}
         */
        this.GroupByType = null;

        /**
         * 1: Queries Zhiyan.
0: Uses the old logic, which is removed. Do not use this value.
         * @type {number || null}
         */
        this.IsNewData = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.GroupByType = 'GroupByType' in params ? params.GroupByType : null;
        this.IsNewData = 'IsNewData' in params ? params.IsNewData : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeDataFetchUrlV2 response structure.
 * @class
 */
class DescribeDataFetchUrlV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProject request structure.
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the created project (required and up to 200 characters)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Business system ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Project sampling rate (greater than or equal to 0)
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * Whether to enable aggregation
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * Project type (valid values: "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Repository address of the project (optional and up to 256 characters)
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * Webpage address of the project (optional and up to 256 characters)
         * @type {string || null}
         */
        this.URL = null;

        /**
         * Description of the created project (optional and up to 1,000 characters)
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeDataStaticUrl request structure.
 * @class
 */
class DescribeDataStaticUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `pagepv`: page view; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * ModifyInstance response structure.
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
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
 * DescribeOfflineLogRecords response structure.
 * @class
 */
class DescribeOfflineLogRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API call information
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Array of record IDs
         * @type {Array.<string> || null}
         */
        this.RecordSet = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RecordSet = 'RecordSet' in params ? params.RecordSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStarProject request structure.
 * @class
 */
class DeleteStarProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeWhitelists request structure.
 * @class
 */
class DescribeWhitelistsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * DescribeLogExports response structure.
 * @class
 */
class DescribeLogExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of log export records
         * @type {Array.<LogExport> || null}
         */
        this.LogExportSet = null;

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

        if (params.LogExportSet) {
            this.LogExportSet = new Array();
            for (let z in params.LogExportSet) {
                let obj = new LogExport();
                obj.deserialize(params.LogExportSet[z]);
                this.LogExportSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUvList request structure.
 * @class
 */
class DescribeUvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Get day:d min:m
         * @type {string || null}
         */
        this.Dimension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeDataReportCountV2 request structure.
 * @class
 */
class DescribeDataReportCountV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Reporting type (custom, event, log, miniProgramData, performance, pv, speed, and webvitals).
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceID = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * CreateStarProject request structure.
 * @class
 */
class CreateStarProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeData request structure.
 * @class
 */
class DescribeDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query string
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataEventUrlV2 request structure.
 * @class
 */
class DescribeDataEventUrlV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount: performance view. day: 14-day data. condition: condition list. ckuv: obtaining UV trend. ckpv: obtaining PV trend. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Filter condition.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * StopProject request structure.
 * @class
 */
class StopProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeTawAreas response structure.
 * @class
 */
class DescribeTawAreasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region list
         * @type {Array.<RumAreaInfo> || null}
         */
        this.AreaSet = null;

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

        if (params.AreaSet) {
            this.AreaSet = new Array();
            for (let z in params.AreaSet) {
                let obj = new RumAreaInfo();
                obj.deserialize(params.AreaSet[z]);
                this.AreaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOfflineLogConfig response structure.
 * @class
 */
class CreateOfflineLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API response information
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProjectLimit request structure.
 * @class
 */
class ModifyProjectLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * Project API
         * @type {string || null}
         */
        this.ProjectInterface = null;

        /**
         * Reporting rate. 10 means 10%
         * @type {number || null}
         */
        this.ReportRate = null;

        /**
         * Reporting type. 1: rate; 2: number of reported data entries
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * Primary key ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.ProjectInterface = 'ProjectInterface' in params ? params.ProjectInterface : null;
        this.ReportRate = 'ReportRate' in params ? params.ReportRate : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataEventUrlV2 response structure.
 * @class
 */
class DescribeDataEventUrlV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstance response structure.
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * DescribeDataWebVitalsPageV2 request structure.
 * @class
 */
class DescribeDataWebVitalsPageV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * No type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * ResumeInstance request structure.
 * @class
 */
class ResumeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be resumed
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
 * DescribeDataPerformancePage request structure.
 * @class
 */
class DescribeDataPerformancePageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * `pagepv`: PV view; `allcount`: performance view; `falls`: page loading waterfall plot; `samp`: FMP, `day`: 14-day data, `nettype`: network/platform view; `performance`: top underperformed pages view; `version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: version view; device view; ISP view; region view; browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment variable
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Network status
         * @type {string || null}
         */
        this.NetStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.From = 'From' in params ? params.From : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

    }
}

/**
 * DeleteReleaseFile request structure.
 * @class
 */
class DeleteReleaseFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeScoresV2 request structure.
 * @class
 */
class DescribeScoresV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Project ID list.
         * @type {Array.<number> || null}
         */
        this.IDList = null;

        /**
         * Query granularity. Valid values: hour or day.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

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
        this.IDList = 'IDList' in params ? params.IDList : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeDataFetchUrl request structure.
 * @class
 */
class DescribeDataFetchUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`: performance view; `day`: 14-day data; `count40x`: HTTP status codes 40X view; `count50x`: HTTP status codes 50X view; `count5xand4x`: HTTP status codes 40X∑50X view; `top`: top resources view; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

        /**
         * HTTP status code.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

        /**
         * Network status
         * @type {string || null}
         */
        this.NetStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

    }
}

/**
 * DescribeRumLogExport request structure.
 * @class
 */
class DescribeRumLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Export identifier name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Start time (required)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query statement, which is required and can contain up to 4,096 characters.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * End time (required)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Filter field
         * @type {Array.<string> || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Fields = 'Fields' in params ? params.Fields : null;

    }
}

/**
 * DescribeDataLogUrlStatistics response structure.
 * @class
 */
class DescribeDataLogUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProject response structure.
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Unique project key
         * @type {string || null}
         */
        this.Key = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataLogUrlStatisticsV2 response structure.
 * @class
 */
class DescribeDataLogUrlStatisticsV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataCustomUrl response structure.
 * @class
 */
class DescribeDataCustomUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStarProject response structure.
 * @class
 */
class CreateStarProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API response information
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject response structure.
 * @class
 */
class DeleteProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation information
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogRecords request structure.
 * @class
 */
class DescribeOfflineLogRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;

    }
}

/**
 * DescribeDataPvUrlStatistics request structure.
 * @class
 */
class DescribeDataPvUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`; performance view; `day`: 14-day data, `vp`: performance; `ckuv`: UV; `ckpv`: PV; `condition`: condition list; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

        /**
         * group by parameter value enumeration: 1:1m
   2:5m  3:30m 
   4:1h
 5:1d
         * @type {number || null}
         */
        this.GroupByType = null;

        /**
         * 1: Query Intelligent Research
0: Use old logic, already offline, do not use
         * @type {number || null}
         */
        this.IsNewData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.GroupByType = 'GroupByType' in params ? params.GroupByType : null;
        this.IsNewData = 'IsNewData' in params ? params.IsNewData : null;

    }
}

/**
 * Release file list (sourcemap)
 * @class
 */
class ReleaseFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * File version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Unique file key
         * @type {string || null}
         */
        this.FileKey = null;

        /**
         * Filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * File hash
         * @type {string || null}
         */
        this.FileHash = null;

        /**
         * File ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileHash = 'FileHash' in params ? params.FileHash : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ModifyProjectLimit response structure.
 * @class
 */
class ModifyProjectLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned message
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRumLogExports response structure.
 * @class
 */
class DescribeRumLogExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataStaticProject request structure.
 * @class
 */
class DescribeDataStaticProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`: performance view; `day`: 14-day data; `condition`: condition list; `area`: request speed distribution; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {Array.<string> || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeScores response structure.
 * @class
 */
class DescribeScoresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array
         * @type {Array.<ScoreInfo> || null}
         */
        this.ScoreSet = null;

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

        if (params.ScoreSet) {
            this.ScoreSet = new Array();
            for (let z in params.ScoreSet) {
                let obj = new ScoreInfo();
                obj.deserialize(params.ScoreSet[z]);
                this.ScoreSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRumStatsLogList request structure.
 * @class
 */
class DescribeRumStatsLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (required)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The number of raw logs returned for a single query. This parameter is required. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query statement, which is required and can contain up to 4,096 characters.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * End time (required)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataBridgeUrlV2 request structure.
 * @class
 */
class DescribeDataBridgeUrlV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * pagepv: performance view. allcount: performance view. falls: page loading waterfall chart. samp: first meaningful paint. day: 14-day data. nettype: network or platform view. performance: top page performance view. version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: ISP view, region view, browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Global or not.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment variable.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * URL name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP status code.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

        /**
         * Network status.
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.From = 'From' in params ? params.From : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * ResumeProject request structure.
 * @class
 */
class ResumeProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Project API restriction type
 * @class
 */
class ProjectLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary key ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * API
         * @type {string || null}
         */
        this.ProjectInterface = null;

        /**
         * Reporting rate
         * @type {number || null}
         */
        this.ReportRate = null;

        /**
         * Reporting type. 1: reporting rate; 2: reporting count limit
         * @type {number || null}
         */
        this.ReportType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.ProjectInterface = 'ProjectInterface' in params ? params.ProjectInterface : null;
        this.ReportRate = 'ReportRate' in params ? params.ReportRate : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;

    }
}

/**
 * DeleteLogExport request structure.
 * @class
 */
class DeleteLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Log export ID
         * @type {string || null}
         */
        this.ExportID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ExportID = 'ExportID' in params ? params.ExportID : null;

    }
}

/**
 * DescribeRumGroupLog response structure.
 * @class
 */
class DescribeRumGroupLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRumStatsLogList response structure.
 * @class
 */
class DescribeRumStatsLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhitelist request structure.
 * @class
 */
class CreateWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * uin: business identifier
         * @type {string || null}
         */
        this.WhitelistUin = null;

        /**
         * Business identifier
         * @type {string || null}
         */
        this.Aid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.WhitelistUin = 'WhitelistUin' in params ? params.WhitelistUin : null;
        this.Aid = 'Aid' in params ? params.Aid : null;

    }
}

/**
 * StopInstance response structure.
 * @class
 */
class StopInstanceResponse extends  AbstractModel {
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
 * DescribeDataPvUrlStatistics response structure.
 * @class
 */
class DescribeDataPvUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataLogUrlInfo request structure.
 * @class
 */
class DescribeDataLogUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Timestamp
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Timestamp
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
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeProjectLimits request structure.
 * @class
 */
class DescribeProjectLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

    }
}

/**
 * DescribeDataPvUrlStatisticsV2 response structure.
 * @class
 */
class DescribeDataPvUrlStatisticsV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RUM region information
 * @class
 */
class RumAreaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * Region status (1: valid; 2: invalid)
         * @type {number || null}
         */
        this.AreaStatus = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * Region key
         * @type {string || null}
         */
        this.AreaKey = null;

        /**
         * Region ID.
         * @type {string || null}
         */
        this.AreaRegionID = null;

        /**
         * Region code, such as “ap-xxx” (xxx is the region name).
         * @type {string || null}
         */
        this.AreaRegionCode = null;

        /**
         * Region abbreviation.
         * @type {string || null}
         */
        this.AreaAbbr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaStatus = 'AreaStatus' in params ? params.AreaStatus : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;
        this.AreaKey = 'AreaKey' in params ? params.AreaKey : null;
        this.AreaRegionID = 'AreaRegionID' in params ? params.AreaRegionID : null;
        this.AreaRegionCode = 'AreaRegionCode' in params ? params.AreaRegionCode : null;
        this.AreaAbbr = 'AreaAbbr' in params ? params.AreaAbbr : null;

    }
}

/**
 * DescribeDataSetUrlStatistics request structure.
 * @class
 */
class DescribeDataSetUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`: performance view; `data`: mini program; `component`: mini program-related components; `day`: 14-day data; `nettype`: network/platform view; `performance`: top underperformed pages view; `version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: version view; device view; ISP view; region view; browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

        /**
         * The obtained package.
         * @type {string || null}
         */
        this.PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;

    }
}

/**
 * DescribeDataPerformanceProject response structure.
 * @class
 */
class DescribeDataPerformanceProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataWebVitalsPageV2 response structure.
 * @class
 */
class DescribeDataWebVitalsPageV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeInstance response structure.
 * @class
 */
class ResumeInstanceResponse extends  AbstractModel {
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
 * DescribeDataStaticProject response structure.
 * @class
 */
class DescribeDataStaticProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataPerformancePageV2 response structure.
 * @class
 */
class DescribeDataPerformancePageV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataSetUrlStatisticsV2 request structure.
 * @class
 */
class DescribeDataSetUrlStatisticsV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount: performance view. data: mini program. component: related to mini program. day: 14-day data. nettype: network or platform view. performance: top page performance view. version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: ISP view, region view, browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Obtaining package.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeReleaseFileSign request structure.
 * @class
 */
class DescribeReleaseFileSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timeout period. If it is not set, it will be 5 minutes by default
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Bucket type. Valid values: `1`: (Web, which is the default value), `2` (Application).
         * @type {number || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * DeleteWhitelist request structure.
 * @class
 */
class DeleteWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * List ID
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataLogUrlInfo response structure.
 * @class
 */
class DescribeDataLogUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RUM log object
 * @class
 */
class RumPvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Number of PVs
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Pv = null;

        /**
         * Time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Pv = 'Pv' in params ? params.Pv : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DeleteReleaseFile response structure.
 * @class
 */
class DeleteReleaseFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string of the API request
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataCustomUrlV2 request structure.
 * @class
 */
class DescribeDataCustomUrlV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * top: top resource view. allcount: performance view. day: 14-day data. condition: condition list. pagepv: performance view. area: request speed distribution. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type (1, 2, 3, 4, 5, or 100). 1 indicates Wi-Fi. 2 indicates 2G. 3 indicates 3G. 4 indicates 4G. 5 indicates 5G. 6 indicates 6G. 100 indicates unknown.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Value of the custom speed test key.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeOfflineLogConfigs response structure.
 * @class
 */
class DescribeOfflineLogConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API call information
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Array of unique user identifiers
         * @type {Array.<string> || null}
         */
        this.UniqueIDSet = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.UniqueIDSet = 'UniqueIDSet' in params ? params.UniqueIDSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLogExport response structure.
 * @class
 */
class DeleteLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is successful. If so, `success` will be returned; otherwise, `Error` rather than this parameter will be returned
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataBridgeUrlV2 response structure.
 * @class
 */
class DescribeDataBridgeUrlV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogs response structure.
 * @class
 */
class DescribeOfflineLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API call response
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Log list
         * @type {Array.<string> || null}
         */
        this.LogSet = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTawAreas request structure.
 * @class
 */
class DescribeTawAreasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {Array.<number> || null}
         */
        this.AreaIds = null;

        /**
         * Region key
         * @type {Array.<string> || null}
         */
        this.AreaKeys = null;

        /**
         * Pagination limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Region status (1: valid; 2: invalid)
         * @type {Array.<number> || null}
         */
        this.AreaStatuses = null;

        /**
         * Pagination offset
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
        this.AreaIds = 'AreaIds' in params ? params.AreaIds : null;
        this.AreaKeys = 'AreaKeys' in params ? params.AreaKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AreaStatuses = 'AreaStatuses' in params ? params.AreaStatuses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDataCustomUrlV2 response structure.
 * @class
 */
class DescribeDataCustomUrlV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Key-Value pair filter for conditional filtering queries, such as filtering ID, name, status, etc.

· If more than one filter exists, the logical relationship between these filters is `AND`.
· If multiple values exist in one filter, the logical relationship between these values is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * One or more filter values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Filter name.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeDataLogUrlStatistics request structure.
 * @class
 */
class DescribeDataLogUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `analysis`: exception analysis; `compare`: exception list comparison; `allcount`: performance view; `condition`: condition list; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DeleteStarProject response structure.
 * @class
 */
class DeleteStarProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response message
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataPerformancePage response structure.
 * @class
 */
class DescribeDataPerformancePageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstance request structure.
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be deleted
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
 * Log export record
 * @class
 */
class LogExport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export path
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * Number of logs to be exported
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Log export task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Log export task ID
         * @type {string || null}
         */
        this.ExportID = null;

        /**
         * Log export filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Log file size
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Log export format
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Log export time sorting
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Log export query statement
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Log export start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log export end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Log download status. Valid values: Queuing: queuing; Processing: exporting; Complete: completed; Failed: failed; Expired: expired (3-day validity period).
         * @type {string || null}
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
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExportID = 'ExportID' in params ? params.ExportID : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDataStaticResource response structure.
 * @class
 */
class DescribeDataStaticResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataEventUrl response structure.
 * @class
 */
class DescribeDataEventUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReleaseFileSign response structure.
 * @class
 */
class DescribeReleaseFileSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary key
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Temporary key ID
         * @type {string || null}
         */
        this.SecretID = null;

        /**
         * Temporary key token
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * Start timestamp
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Expiration timestamp
         * @type {number || null}
         */
        this.ExpiredTime = null;

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
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SecretID = 'SecretID' in params ? params.SecretID : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataWebVitalsPage request structure.
 * @class
 */
class DescribeDataWebVitalsPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * No type yet
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeDataFetchUrlInfo request structure.
 * @class
 */
class DescribeDataFetchUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeDataFetchUrlInfo response structure.
 * @class
 */
class DescribeDataFetchUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReleaseFiles response structure.
 * @class
 */
class DescribeReleaseFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File information list
         * @type {Array.<ReleaseFile> || null}
         */
        this.Files = null;

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

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new ReleaseFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOfflineLogConfig request structure.
 * @class
 */
class CreateOfflineLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * Unique identifier of the user to be listened on (`aid` or `uin`)
         * @type {string || null}
         */
        this.UniqueID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.UniqueID = 'UniqueID' in params ? params.UniqueID : null;

    }
}

/**
 * DescribeDataStaticUrl response structure.
 * @class
 */
class DescribeDataStaticUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhitelist response structure.
 * @class
 */
class CreateWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Message
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Allowlist ID
         * @type {number || null}
         */
        this.ID = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Project score entity
 * @class
 */
class ScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * duration
         * @type {string || null}
         */
        this.StaticDuration = null;

        /**
         * pv
         * @type {string || null}
         */
        this.PagePv = null;

        /**
         * Failure
         * @type {string || null}
         */
        this.ApiFail = null;

        /**
         * Request
         * @type {string || null}
         */
        this.ApiNum = null;

        /**
         * fail
         * @type {string || null}
         */
        this.StaticFail = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * uv
         * @type {string || null}
         */
        this.PageUv = null;

        /**
         * Number of requests
         * @type {string || null}
         */
        this.ApiDuration = null;

        /**
         * Score
         * @type {string || null}
         */
        this.Score = null;

        /**
         * error
         * @type {string || null}
         */
        this.PageError = null;

        /**
         * num
         * @type {string || null}
         */
        this.StaticNum = null;

        /**
         * num
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * Duration
         * @type {string || null}
         */
        this.PageDuration = null;

        /**
         * Time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StaticDuration = 'StaticDuration' in params ? params.StaticDuration : null;
        this.PagePv = 'PagePv' in params ? params.PagePv : null;
        this.ApiFail = 'ApiFail' in params ? params.ApiFail : null;
        this.ApiNum = 'ApiNum' in params ? params.ApiNum : null;
        this.StaticFail = 'StaticFail' in params ? params.StaticFail : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.PageUv = 'PageUv' in params ? params.PageUv : null;
        this.ApiDuration = 'ApiDuration' in params ? params.ApiDuration : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.PageError = 'PageError' in params ? params.PageError : null;
        this.StaticNum = 'StaticNum' in params ? params.StaticNum : null;
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.PageDuration = 'PageDuration' in params ? params.PageDuration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDataWebVitalsPage response structure.
 * @class
 */
class DescribeDataWebVitalsPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataStaticProjectV2 request structure.
 * @class
 */
class DescribeDataStaticProjectV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount: performance view. day: 14-day data. condition: condition list. area: request speed distribution. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level (1 indicates allowlist log. 2 indicates general log. 4 indicates error log. 8 indicates Promise error. 16 indicates AJAX request exception. 32 indicates JavaScript loading exception. 64 indicates image loading exception. 128 indicates CSS loading exception. 256 indicates console.error. 512 indicates audio or video resource exception. 1024 indicates retcode exception. 2048 indicates Aegis report. 4096 indicates PV log. 8192 indicates custom event. 16384 indicates mini program page does not exist. 32768 indicates WebSocket error. 65536 indicates JavaScript bridge error).
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type (1, 2, 3, 4, 5, or 100). 1 indicates Wi-Fi. 2 indicates 2G. 3 indicates 3G. 4 indicates 4G. 5 indicates 5G. 6 indicates 6G. 100 indicates unknown.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source.
         * @type {Array.<string> || null}
         */
        this.Url = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeLogList response structure.
 * @class
 */
class DescribeLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjects request structure.
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items per page (integer)
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number (integer)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter parameter. Pass in {"Name": "IsDemo", "Values":["1"]} for the demo mode.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * This parameter has been disused. You need to indicate whether the demo mode is used in `Filters`.
         * @type {number || null}
         */
        this.IsDemo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;

    }
}

/**
 * DescribeDataEventUrl request structure.
 * @class
 */
class DescribeDataEventUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`: performance view; `day`: 14-day data; `condition`: condition list; `ckuv`: UV trend; `ckpv`: PV trend; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Filter
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeDataSetUrlStatisticsV2 response structure.
 * @class
 */
class DescribeDataSetUrlStatisticsV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogConfigs request structure.
 * @class
 */
class DescribeOfflineLogConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;

    }
}

/**
 * DescribeRumGroupLog request structure.
 * @class
 */
class DescribeRumGroupLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting order (required). Valid values: `desc`, `asc`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Start time (required)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The number of raw logs returned for a single query. This parameter is required. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Query statement, which is required and can contain up to 4,096 characters.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * End time (required)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Aggregate field
         * @type {string || null}
         */
        this.GroupField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.GroupField = 'GroupField' in params ? params.GroupField : null;

    }
}

/**
 * DeleteOfflineLogConfig request structure.
 * @class
 */
class DeleteOfflineLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique project key for reporting
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * Unique user identifier (uin or aid)
         * @type {string || null}
         */
        this.UniqueID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.UniqueID = 'UniqueID' in params ? params.UniqueID : null;

    }
}

/**
 * DescribeWhitelists response structure.
 * @class
 */
class DescribeWhitelistsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Allowlist list
         * @type {Array.<Whitelist> || null}
         */
        this.WhitelistSet = null;

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

        if (params.WhitelistSet) {
            this.WhitelistSet = new Array();
            for (let z in params.WhitelistSet) {
                let obj = new Whitelist();
                obj.deserialize(params.WhitelistSet[z]);
                this.WhitelistSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataFetchUrlV2 request structure.
 * @class
 */
class DescribeDataFetchUrlV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount: performance view. pagepv: PV view. day: 14-day data. count40x: 40X view. count50x: 50X view. count5xand4x: 40∑50 view. top: top resource view. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * HTTP response code.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

        /**
         * Network status.
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeProjects response structure.
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of items in the list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Project list
         * @type {Array.<RumProject> || null}
         */
        this.ProjectSet = null;

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

        if (params.ProjectSet) {
            this.ProjectSet = new Array();
            for (let z in params.ProjectSet) {
                let obj = new RumProject();
                obj.deserialize(params.ProjectSet[z]);
                this.ProjectSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataReportCountV2 response structure.
 * @class
 */
class DescribeDataReportCountV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProject response structure.
 * @class
 */
class ModifyProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation information
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogExports request structure.
 * @class
 */
class DescribeLogExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataReportCount response structure.
 * @class
 */
class DescribeDataReportCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataPerformanceProject request structure.
 * @class
 */
class DescribeDataPerformanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `allcount`; performance view; `falls`: page loading waterfall plot; `samp`: FMP, `day`: 14-day data, `nettype`: network/platform view; `performance`: top underperformed pages view; `condition`: condition list; `area`: request speed distribution; `version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: version view; device view; ISP view; region view; browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeRumLogExport response structure.
 * @class
 */
class DescribeRumLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response string
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRumLogExports request structure.
 * @class
 */
class DescribeRumLogExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page size
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ModifyProject request structure.
 * @class
 */
class ModifyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Project name (optional, not empty, and up to 200 characters)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Project webpage URL (optional and up to 256 characters)
         * @type {string || null}
         */
        this.URL = null;

        /**
         * Project repository address (optional and up to 256 characters)
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * ID of the instance to which to move the project (optional)
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Project sample rate (optional)
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * Whether to enable aggregation (optional)
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * Project type (valid values: "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Project description (optional and up to 1,000 characters)
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeRumLogList request structure.
 * @class
 */
class DescribeRumLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting order (required). Valid values: `desc`, `asc`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Start time in milliseconds. It is in timestamp format and is required.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The number of raw logs returned for a single query. This parameter is required. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Query statement, which is required and can contain up to 4,096 characters.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * End time in milliseconds. It is in timestamp format and is required.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Project ID (required)
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataPerformancePageV2 request structure.
 * @class
 */
class DescribeDataPerformancePageV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * pagepv: PV view. allcount: performance view. falls: page loading waterfall chart. samp: first meaningful paint. day: 14-day data. nettype: network or platform view. performance: top page performance view. version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: ISP view, region view, browser view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Duration calculation method.
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Environment variable.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * Network status.
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * Indicates whether to return webvitals data.
         * @type {boolean || null}
         */
        this.WebVitals = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.From = 'From' in params ? params.From : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;
        this.WebVitals = 'WebVitals' in params ? params.WebVitals : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeDataStaticResource request structure.
 * @class
 */
class DescribeDataStaticResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * `top`: top resources view; `count40x`: HTTP status codes 40X view; `nettype`/`version`/`platform`/`isp`/`region`/`device`/`browser`/`ext1`/`ext2`/`ext3`/`ret`/`status`/`from`/`url`/`env`: network/platform view; version view; device view; ISP view; region view; browser view; custom view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Duration calculation method
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * Source
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribePvList request structure.
 * @class
 */
class DescribePvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Get day:d (leave this parameter empty if to get min)
         * @type {string || null}
         */
        this.Dimension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeDataPvUrlInfo request structure.
 * @class
 */
class DescribeDataPvUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom 2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom 3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom 1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Whether it is outside the Chinese mainland
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * OS
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Environment
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * CreateReleaseFile response structure.
 * @class
 */
class CreateReleaseFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Call result
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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogExport response structure.
 * @class
 */
class CreateLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log export ID
         * @type {string || null}
         */
        this.ExportID = null;

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
        this.ExportID = 'ExportID' in params ? params.ExportID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataFetchProject response structure.
 * @class
 */
class DescribeDataFetchProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScoresV2 response structure.
 * @class
 */
class DescribeScoresV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project score array.
         * @type {Array.<ScoreInfoV2> || null}
         */
        this.ScoreSet = null;

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

        if (params.ScoreSet) {
            this.ScoreSet = new Array();
            for (let z in params.ScoreSet) {
                let obj = new ScoreInfoV2();
                obj.deserialize(params.ScoreSet[z]);
                this.ScoreSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Allowlist
 * @class
 */
class Whitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * End time
         * @type {string || null}
         */
        this.Ttl = null;

        /**
         * Auto-Increment allowlist ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Unique business identifier
         * @type {string || null}
         */
        this.WhitelistUin = null;

        /**
         * Creator ID
         * @type {string || null}
         */
        this.CreateUser = null;

        /**
         * aid
         * @type {string || null}
         */
        this.Aid = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.WhitelistUin = 'WhitelistUin' in params ? params.WhitelistUin : null;
        this.CreateUser = 'CreateUser' in params ? params.CreateUser : null;
        this.Aid = 'Aid' in params ? params.Aid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDataLogUrlStatisticsV2 request structure.
 * @class
 */
class DescribeDataLogUrlStatisticsV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * analysis: exception analysis. compare: exception list comparison. allcount: performance view. condition: condition list. nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/: network platform view, version view, device view, ISP view, region view, browser view, ext1 view, and so on.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * End time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Custom parameter 2.
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * Browser engine.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Internet service provider.
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Source page.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Log level.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Brand.
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Version.
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Custom parameter 3.
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * Custom parameter 1.
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * Network type.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Model.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Indicates whether to query global data. 1 indicates global. 0 indicates not global. This is empty by default, which means to query all data.
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * Operating system.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Browser.
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * Environment differentiation.
         * @type {string || null}
         */
        this.Env = null;

        /**
         * JavaScript exception message.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * Custom parameter 4.
         * @type {string || null}
         */
        this.ExtFourth = null;

        /**
         * Custom parameter 5.
         * @type {string || null}
         */
        this.ExtFifth = null;

        /**
         * Custom parameter 6.
         * @type {string || null}
         */
        this.ExtSixth = null;

        /**
         * Custom parameter 7.
         * @type {string || null}
         */
        this.ExtSeventh = null;

        /**
         * Custom parameter 8.
         * @type {string || null}
         */
        this.ExtEighth = null;

        /**
         * Custom parameter 9.
         * @type {string || null}
         */
        this.ExtNinth = null;

        /**
         * Custom parameter 10.
         * @type {string || null}
         */
        this.ExtTenth = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.ExtFourth = 'ExtFourth' in params ? params.ExtFourth : null;
        this.ExtFifth = 'ExtFifth' in params ? params.ExtFifth : null;
        this.ExtSixth = 'ExtSixth' in params ? params.ExtSixth : null;
        this.ExtSeventh = 'ExtSeventh' in params ? params.ExtSeventh : null;
        this.ExtEighth = 'ExtEighth' in params ? params.ExtEighth : null;
        this.ExtNinth = 'ExtNinth' in params ? params.ExtNinth : null;
        this.ExtTenth = 'ExtTenth' in params ? params.ExtTenth : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * RUM project information
 * @class
 */
class RumProject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creator ID
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Project type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Project repository address
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * Project URL
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.URL = null;

        /**
         * Project sample rate
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * Unique project key (12 characters)
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Whether to enable URL aggregation
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Instance key
         * @type {string || null}
         */
        this.InstanceKey = null;

        /**
         * Project description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Starred status. 1: yes; 0: no
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsStar = null;

        /**
         * Project status (`1`: Creating; `2`: Running; `3`: Abnormal; `4`: Restarting; `5`: Stopping; `6`: Stopped; `7`: Terminating; `8`: Terminated)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectStatus = null;

        /**
         * Log access point, which can be ignored. 
Note:  This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.InstanceKey = 'InstanceKey' in params ? params.InstanceKey : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IsStar = 'IsStar' in params ? params.IsStar : null;
        this.ProjectStatus = 'ProjectStatus' in params ? params.ProjectStatus : null;
        this.AccessPoint = 'AccessPoint' in params ? params.AccessPoint : null;

    }
}

/**
 * DescribeDataStaticResourceV2 response structure.
 * @class
 */
class DescribeDataStaticResourceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return value.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataSetUrlStatistics response structure.
 * @class
 */
class DescribeDataSetUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned value
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateTawInstanceRequest: CreateTawInstanceRequest,
    DescribeDataFetchProjectRequest: DescribeDataFetchProjectRequest,
    DescribeDataResponse: DescribeDataResponse,
    CreateTawInstanceResponse: CreateTawInstanceResponse,
    DeleteProjectRequest: DeleteProjectRequest,
    DescribeProjectLimitsResponse: DescribeProjectLimitsResponse,
    DeleteOfflineLogConfigResponse: DeleteOfflineLogConfigResponse,
    ResumeProjectResponse: ResumeProjectResponse,
    DescribeRumLogListResponse: DescribeRumLogListResponse,
    DescribeDataPvUrlInfoResponse: DescribeDataPvUrlInfoResponse,
    StopProjectResponse: StopProjectResponse,
    DescribeDataFetchUrlResponse: DescribeDataFetchUrlResponse,
    DescribeErrorRequest: DescribeErrorRequest,
    StopInstanceRequest: StopInstanceRequest,
    DescribeDataStaticUrlV2Request: DescribeDataStaticUrlV2Request,
    ModifyInstanceRequest: ModifyInstanceRequest,
    DescribeDataStaticProjectV2Response: DescribeDataStaticProjectV2Response,
    DescribeLogListRequest: DescribeLogListRequest,
    DescribeErrorResponse: DescribeErrorResponse,
    DeleteWhitelistResponse: DeleteWhitelistResponse,
    CreateLogExportRequest: CreateLogExportRequest,
    DescribePvListResponse: DescribePvListResponse,
    RumUvInfo: RumUvInfo,
    DescribeOfflineLogsRequest: DescribeOfflineLogsRequest,
    DescribeScoresRequest: DescribeScoresRequest,
    ScoreInfoV2: ScoreInfoV2,
    DescribeDataReportCountRequest: DescribeDataReportCountRequest,
    DeleteOfflineLogRecordRequest: DeleteOfflineLogRecordRequest,
    DescribeDataStaticResourceV2Request: DescribeDataStaticResourceV2Request,
    DescribeReleaseFilesRequest: DescribeReleaseFilesRequest,
    CreateReleaseFileRequest: CreateReleaseFileRequest,
    DeleteOfflineLogRecordResponse: DeleteOfflineLogRecordResponse,
    DescribeDataCustomUrlRequest: DescribeDataCustomUrlRequest,
    DescribeUvListResponse: DescribeUvListResponse,
    DescribeDataStaticUrlV2Response: DescribeDataStaticUrlV2Response,
    Tag: Tag,
    DescribeDataPvUrlStatisticsV2Request: DescribeDataPvUrlStatisticsV2Request,
    DescribeDataFetchUrlV2Response: DescribeDataFetchUrlV2Response,
    CreateProjectRequest: CreateProjectRequest,
    DescribeDataStaticUrlRequest: DescribeDataStaticUrlRequest,
    ModifyInstanceResponse: ModifyInstanceResponse,
    DescribeOfflineLogRecordsResponse: DescribeOfflineLogRecordsResponse,
    DeleteStarProjectRequest: DeleteStarProjectRequest,
    DescribeWhitelistsRequest: DescribeWhitelistsRequest,
    DescribeLogExportsResponse: DescribeLogExportsResponse,
    DescribeUvListRequest: DescribeUvListRequest,
    DescribeDataReportCountV2Request: DescribeDataReportCountV2Request,
    CreateStarProjectRequest: CreateStarProjectRequest,
    DescribeDataRequest: DescribeDataRequest,
    DescribeDataEventUrlV2Request: DescribeDataEventUrlV2Request,
    StopProjectRequest: StopProjectRequest,
    DescribeTawAreasResponse: DescribeTawAreasResponse,
    CreateOfflineLogConfigResponse: CreateOfflineLogConfigResponse,
    ModifyProjectLimitRequest: ModifyProjectLimitRequest,
    DescribeDataEventUrlV2Response: DescribeDataEventUrlV2Response,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeDataWebVitalsPageV2Request: DescribeDataWebVitalsPageV2Request,
    ResumeInstanceRequest: ResumeInstanceRequest,
    DescribeDataPerformancePageRequest: DescribeDataPerformancePageRequest,
    DeleteReleaseFileRequest: DeleteReleaseFileRequest,
    DescribeScoresV2Request: DescribeScoresV2Request,
    DescribeDataFetchUrlRequest: DescribeDataFetchUrlRequest,
    DescribeRumLogExportRequest: DescribeRumLogExportRequest,
    DescribeDataLogUrlStatisticsResponse: DescribeDataLogUrlStatisticsResponse,
    CreateProjectResponse: CreateProjectResponse,
    DescribeDataLogUrlStatisticsV2Response: DescribeDataLogUrlStatisticsV2Response,
    DescribeDataCustomUrlResponse: DescribeDataCustomUrlResponse,
    CreateStarProjectResponse: CreateStarProjectResponse,
    DeleteProjectResponse: DeleteProjectResponse,
    DescribeOfflineLogRecordsRequest: DescribeOfflineLogRecordsRequest,
    DescribeDataPvUrlStatisticsRequest: DescribeDataPvUrlStatisticsRequest,
    ReleaseFile: ReleaseFile,
    ModifyProjectLimitResponse: ModifyProjectLimitResponse,
    DescribeRumLogExportsResponse: DescribeRumLogExportsResponse,
    DescribeDataStaticProjectRequest: DescribeDataStaticProjectRequest,
    DescribeScoresResponse: DescribeScoresResponse,
    DescribeRumStatsLogListRequest: DescribeRumStatsLogListRequest,
    DescribeDataBridgeUrlV2Request: DescribeDataBridgeUrlV2Request,
    ResumeProjectRequest: ResumeProjectRequest,
    ProjectLimit: ProjectLimit,
    DeleteLogExportRequest: DeleteLogExportRequest,
    DescribeRumGroupLogResponse: DescribeRumGroupLogResponse,
    DescribeRumStatsLogListResponse: DescribeRumStatsLogListResponse,
    CreateWhitelistRequest: CreateWhitelistRequest,
    StopInstanceResponse: StopInstanceResponse,
    DescribeDataPvUrlStatisticsResponse: DescribeDataPvUrlStatisticsResponse,
    DescribeDataLogUrlInfoRequest: DescribeDataLogUrlInfoRequest,
    DescribeProjectLimitsRequest: DescribeProjectLimitsRequest,
    DescribeDataPvUrlStatisticsV2Response: DescribeDataPvUrlStatisticsV2Response,
    RumAreaInfo: RumAreaInfo,
    DescribeDataSetUrlStatisticsRequest: DescribeDataSetUrlStatisticsRequest,
    DescribeDataPerformanceProjectResponse: DescribeDataPerformanceProjectResponse,
    DescribeDataWebVitalsPageV2Response: DescribeDataWebVitalsPageV2Response,
    ResumeInstanceResponse: ResumeInstanceResponse,
    DescribeDataStaticProjectResponse: DescribeDataStaticProjectResponse,
    DescribeDataPerformancePageV2Response: DescribeDataPerformancePageV2Response,
    DescribeDataSetUrlStatisticsV2Request: DescribeDataSetUrlStatisticsV2Request,
    DescribeReleaseFileSignRequest: DescribeReleaseFileSignRequest,
    DeleteWhitelistRequest: DeleteWhitelistRequest,
    DescribeDataLogUrlInfoResponse: DescribeDataLogUrlInfoResponse,
    RumPvInfo: RumPvInfo,
    DeleteReleaseFileResponse: DeleteReleaseFileResponse,
    DescribeDataCustomUrlV2Request: DescribeDataCustomUrlV2Request,
    DescribeOfflineLogConfigsResponse: DescribeOfflineLogConfigsResponse,
    DeleteLogExportResponse: DeleteLogExportResponse,
    DescribeDataBridgeUrlV2Response: DescribeDataBridgeUrlV2Response,
    DescribeOfflineLogsResponse: DescribeOfflineLogsResponse,
    DescribeTawAreasRequest: DescribeTawAreasRequest,
    DescribeDataCustomUrlV2Response: DescribeDataCustomUrlV2Response,
    Filter: Filter,
    DescribeDataLogUrlStatisticsRequest: DescribeDataLogUrlStatisticsRequest,
    DeleteStarProjectResponse: DeleteStarProjectResponse,
    DescribeDataPerformancePageResponse: DescribeDataPerformancePageResponse,
    DeleteInstanceRequest: DeleteInstanceRequest,
    LogExport: LogExport,
    DescribeDataStaticResourceResponse: DescribeDataStaticResourceResponse,
    DescribeDataEventUrlResponse: DescribeDataEventUrlResponse,
    DescribeReleaseFileSignResponse: DescribeReleaseFileSignResponse,
    DescribeDataWebVitalsPageRequest: DescribeDataWebVitalsPageRequest,
    DescribeDataFetchUrlInfoRequest: DescribeDataFetchUrlInfoRequest,
    DescribeDataFetchUrlInfoResponse: DescribeDataFetchUrlInfoResponse,
    DescribeReleaseFilesResponse: DescribeReleaseFilesResponse,
    CreateOfflineLogConfigRequest: CreateOfflineLogConfigRequest,
    DescribeDataStaticUrlResponse: DescribeDataStaticUrlResponse,
    CreateWhitelistResponse: CreateWhitelistResponse,
    ScoreInfo: ScoreInfo,
    DescribeDataWebVitalsPageResponse: DescribeDataWebVitalsPageResponse,
    DescribeDataStaticProjectV2Request: DescribeDataStaticProjectV2Request,
    DescribeLogListResponse: DescribeLogListResponse,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeDataEventUrlRequest: DescribeDataEventUrlRequest,
    DescribeDataSetUrlStatisticsV2Response: DescribeDataSetUrlStatisticsV2Response,
    DescribeOfflineLogConfigsRequest: DescribeOfflineLogConfigsRequest,
    DescribeRumGroupLogRequest: DescribeRumGroupLogRequest,
    DeleteOfflineLogConfigRequest: DeleteOfflineLogConfigRequest,
    DescribeWhitelistsResponse: DescribeWhitelistsResponse,
    DescribeDataFetchUrlV2Request: DescribeDataFetchUrlV2Request,
    DescribeProjectsResponse: DescribeProjectsResponse,
    DescribeDataReportCountV2Response: DescribeDataReportCountV2Response,
    ModifyProjectResponse: ModifyProjectResponse,
    DescribeLogExportsRequest: DescribeLogExportsRequest,
    DescribeDataReportCountResponse: DescribeDataReportCountResponse,
    DescribeDataPerformanceProjectRequest: DescribeDataPerformanceProjectRequest,
    DescribeRumLogExportResponse: DescribeRumLogExportResponse,
    DescribeRumLogExportsRequest: DescribeRumLogExportsRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    DescribeRumLogListRequest: DescribeRumLogListRequest,
    DescribeDataPerformancePageV2Request: DescribeDataPerformancePageV2Request,
    DescribeDataStaticResourceRequest: DescribeDataStaticResourceRequest,
    DescribePvListRequest: DescribePvListRequest,
    DescribeDataPvUrlInfoRequest: DescribeDataPvUrlInfoRequest,
    CreateReleaseFileResponse: CreateReleaseFileResponse,
    CreateLogExportResponse: CreateLogExportResponse,
    DescribeDataFetchProjectResponse: DescribeDataFetchProjectResponse,
    DescribeScoresV2Response: DescribeScoresV2Response,
    Whitelist: Whitelist,
    DescribeDataLogUrlStatisticsV2Request: DescribeDataLogUrlStatisticsV2Request,
    RumProject: RumProject,
    DescribeDataStaticResourceV2Response: DescribeDataStaticResourceV2Response,
    DescribeDataSetUrlStatisticsResponse: DescribeDataSetUrlStatisticsResponse,

}
