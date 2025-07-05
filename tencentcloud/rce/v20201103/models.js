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
 * DescribeRiskAssessment request structure.
 * @class
 */
class DescribeRiskAssessmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business parameters
         * @type {InputBizCryptoData || null}
         */
        this.BizCryptoData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BizCryptoData) {
            let obj = new InputBizCryptoData();
            obj.deserialize(params.BizCryptoData)
            this.BizCryptoData = obj;
        }

    }
}

/**
 * Risk assessment extended attribute key-value pairs.
 * @class
 */
class OutputRiskAssessmentExtraInfoPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
Note: This field may return null, indicating that no valid value is found.
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
 * Query output parameters of risk assessment results.
 * @class
 */
class OutputRiskAssessment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return code.
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Returned information

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Business details.
Note: This field may return null, indicating that no valid value is found.
         * @type {OutputRiskAssessmentInfo || null}
         */
        this.Value = null;

        /**
         * Request ID.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.UUid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            let obj = new OutputRiskAssessmentInfo();
            obj.deserialize(params.Value)
            this.Value = obj;
        }
        this.UUid = 'UUid' in params ? params.UUid : null;

    }
}

/**
 * Query input parameters of risk assessment results
 * @class
 */
class InputBizCryptoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to authorize.
         * @type {string || null}
         */
        this.IsAuthorized = null;

        /**
         * Encryption type.
         * @type {string || null}
         */
        this.CryptoType = null;

        /**
         * Encrypted content.
         * @type {string || null}
         */
        this.CryptoContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.CryptoType = 'CryptoType' in params ? params.CryptoType : null;
        this.CryptoContent = 'CryptoContent' in params ? params.CryptoContent : null;

    }
}

/**
 * Query output parameters of risk assessment results.
 * @class
 */
class OutputRiskAssessmentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Risk value.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * Risk type.
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

        /**
         * Device identification

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * Extended attributes.
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<OutputRiskAssessmentExtraInfoPair> || null}
         */
        this.ExtraInfo = null;

        /**
         * Token generation timestamp.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.TokenTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

        if (params.ExtraInfo) {
            this.ExtraInfo = new Array();
            for (let z in params.ExtraInfo) {
                let obj = new OutputRiskAssessmentExtraInfoPair();
                obj.deserialize(params.ExtraInfo[z]);
                this.ExtraInfo.push(obj);
            }
        }
        this.TokenTime = 'TokenTime' in params ? params.TokenTime : null;

    }
}

/**
 * DescribeRiskAssessment response structure.
 * @class
 */
class DescribeRiskAssessmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business output parameters.
         * @type {OutputRiskAssessment || null}
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
            let obj = new OutputRiskAssessment();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeRiskAssessmentRequest: DescribeRiskAssessmentRequest,
    OutputRiskAssessmentExtraInfoPair: OutputRiskAssessmentExtraInfoPair,
    OutputRiskAssessment: OutputRiskAssessment,
    InputBizCryptoData: InputBizCryptoData,
    OutputRiskAssessmentInfo: OutputRiskAssessmentInfo,
    DescribeRiskAssessmentResponse: DescribeRiskAssessmentResponse,

}
