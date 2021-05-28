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
 * SmsPackagesStatistics request structure.
 * @class
 */
class SmsPackagesStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SMS `SdkAppId` generated after an application is added in the [SMS console](https://console.cloud.tencent.com/smsv2/app-manage), such as 1400006666.
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * Upper limit (number of packages to be pulled)
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Start time in the format of `yyyymmddhh` accurate to the hour, such as 2021050113 (13:00 on May 1, 2021).
Note: the creation time of a pulled package should not be earlier than the start time.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time in the format of `yyyymmddhh` accurate to the hour, such as 2021050118 (18:00 on May 1, 2021).
Note: `EndTime` must be later than `BeginTime`. The creation time of a pulled package should not be later than the end time.
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
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Package message statistics response body
 * @class
 */
class SmsPackagesStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * The creation time of the package in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageCreateTime = null;

        /**
         * The effective time of the package in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageEffectiveTime = null;

        /**
         * The expiration time of the package in seconds in the format of UNIX timestamp.
         * @type {number || null}
         */
        this.PackageExpiredTime = null;

        /**
         * Number of SMS messages in the package
         * @type {number || null}
         */
        this.PackageAmount = null;

        /**
         * Package type. 0: gifted package; 1: purchased package.
         * @type {number || null}
         */
        this.PackageType = null;

        /**
         * Package ID.
         * @type {number || null}
         */
        this.PackageId = null;

        /**
         * Current number of used messages in the package.
         * @type {number || null}
         */
        this.CurrentUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageCreateTime = 'PackageCreateTime' in params ? params.PackageCreateTime : null;
        this.PackageEffectiveTime = 'PackageEffectiveTime' in params ? params.PackageEffectiveTime : null;
        this.PackageExpiredTime = 'PackageExpiredTime' in params ? params.PackageExpiredTime : null;
        this.PackageAmount = 'PackageAmount' in params ? params.PackageAmount : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.CurrentUsage = 'CurrentUsage' in params ? params.CurrentUsage : null;

    }
}

/**
 * SmsPackagesStatistics response structure.
 * @class
 */
class SmsPackagesStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery statistics response packet body.
         * @type {Array.<SmsPackagesStatistics> || null}
         */
        this.SmsPackagesStatisticsSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SmsPackagesStatisticsSet) {
            this.SmsPackagesStatisticsSet = new Array();
            for (let z in params.SmsPackagesStatisticsSet) {
                let obj = new SmsPackagesStatistics();
                obj.deserialize(params.SmsPackagesStatisticsSet[z]);
                this.SmsPackagesStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SmsPackagesStatisticsRequest: SmsPackagesStatisticsRequest,
    SmsPackagesStatistics: SmsPackagesStatistics,
    SmsPackagesStatisticsResponse: SmsPackagesStatisticsResponse,

}
