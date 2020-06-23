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
 * LivenessCompare response structure.
 * @class
 */
class LivenessCompareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The best screenshot of the video after successful verification. The photo is Base64-encoded and in JPG format.
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * Similarity. Value range: [0.00, 100.00]. As a recommendation, when the similarity is greater than or equal to 70, it can be determined that the two faces are of the same person. You can adjust the threshold according to your specific scenario (the FAR at the threshold of 70 is 0.1%, and FAR at the threshold of 80 is 0.01%).
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * Service error code. `Success` will be returned for success. For error information, please see the `FailedOperation` section in the error code list below.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Service result description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LivenessCompare request structure.
 * @class
 */
class LivenessCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64 value of a photo for face comparison;
Base64-encoded image data is up to 3 MB. Only JPG and PNG formats are supported.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Base64 value of a video for liveness detection;
The size after Base64-encoding cannot exceed 5 MB. MP4, AVI, and FLV formats are supported.
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * Liveness detection type. Valid values: LIP/ACTION/SILENT.
LIP: numeric mode; ACTION: motion mode; SILENT: silent mode. You need to select a mode to input.
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * Input parameter for the numeric mode: numeric verification code (1234). An API needs to be called first to get a numeric verification code;
Input parameter for the motion mode: motion order (2,1 or 1,2). An API needs to be called first to get the motion order;
Input parameter for silent mode: empty.
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * This parameter does not need to be passed in for this API.
         * @type {string || null}
         */
        this.Optional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

module.exports = {
    LivenessCompareResponse: LivenessCompareResponse,
    LivenessCompareRequest: LivenessCompareRequest,

}
