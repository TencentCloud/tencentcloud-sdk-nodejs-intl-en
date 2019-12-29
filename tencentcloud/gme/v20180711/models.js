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
 * Tag list
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Application usage statistics
 * @class
 */
class AppStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voice chat statistics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RealTimeSpeechStatisticsItem || null}
         */
        this.RealtimeSpeechStatisticsItem = null;

        /**
         * Voice messaging statistics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VoiceMessageStatisticsItem || null}
         */
        this.VoiceMessageStatisticsItem = null;

        /**
         * Phrase filtering statistics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VoiceFilterStatisticsItem || null}
         */
        this.VoiceFilterStatisticsItem = null;

        /**
         * Statistical period
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RealtimeSpeechStatisticsItem) {
            let obj = new RealTimeSpeechStatisticsItem();
            obj.deserialize(params.RealtimeSpeechStatisticsItem)
            this.RealtimeSpeechStatisticsItem = obj;
        }

        if (params.VoiceMessageStatisticsItem) {
            let obj = new VoiceMessageStatisticsItem();
            obj.deserialize(params.VoiceMessageStatisticsItem)
            this.VoiceMessageStatisticsItem = obj;
        }

        if (params.VoiceFilterStatisticsItem) {
            let obj = new VoiceFilterStatisticsItem();
            obj.deserialize(params.VoiceFilterStatisticsItem)
            this.VoiceFilterStatisticsItem = obj;
        }
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * ModifyAppStatus request structure.
 * @class
 */
class ModifyAppStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is generated and returned by the backend after application creation
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application status. Valid values: open, close
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Phrase filtering usage statistics
 * @class
 */
class VoiceFilterStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total duration of phrase filtering
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * CreateApp request structure.
 * @class
 */
class CreateAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Tencent Cloud project ID. Default value: 0, which means that the default project is used
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of engines to be supported. Valid values: android, ios, unity, cocos, unreal, windows. All values are selected by default.
         * @type {Array.<string> || null}
         */
        this.EngineList = null;

        /**
         * List of service regions. Valid values: mainland (Mainland China), sa (South America), eu (Europe), oc (Australia), me (Middle East). All values are selected by default.
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * Configuration information of voice chat
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * Configuration information of voice messaging and speech-to-text
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of phrase analysis
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

        /**
         * List of tags to be added
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EngineList = 'EngineList' in params ? params.EngineList : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;

        if (params.RealtimeSpeechConf) {
            let obj = new RealtimeSpeechConf();
            obj.deserialize(params.RealtimeSpeechConf)
            this.RealtimeSpeechConf = obj;
        }

        if (params.VoiceMessageConf) {
            let obj = new VoiceMessageConf();
            obj.deserialize(params.VoiceMessageConf)
            this.VoiceMessageConf = obj;
        }

        if (params.VoiceFilterConf) {
            let obj = new VoiceFilterConf();
            obj.deserialize(params.VoiceFilterConf)
            this.VoiceFilterConf = obj;
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
 * Configuration information of voice chat
 * @class
 */
class RealtimeSpeechConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voice chat status. Valid values: open, close
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Voice Chat sound quality type. Valid values: high (HD), ordinary (SD). Default value: ordinary
         * @type {string || null}
         */
        this.Quality = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Quality = 'Quality' in params ? params.Quality : null;

    }
}

/**
 * CreateApp output parameters
 * @class
 */
class CreateAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is automatically generated by the backend
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application name, which is passed through from the `AppName` input parameter
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Project ID, which is passed through from the entered `ProjectId`
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Application key, which is used when the GME SDK is initialized
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Service creation timestamp
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Configuration information of voice chat
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * Configuration information of voice messaging and speech-to-text
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of phrase analysis
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RealtimeSpeechConf) {
            let obj = new RealtimeSpeechConf();
            obj.deserialize(params.RealtimeSpeechConf)
            this.RealtimeSpeechConf = obj;
        }

        if (params.VoiceMessageConf) {
            let obj = new VoiceMessageConf();
            obj.deserialize(params.VoiceMessageConf)
            this.VoiceMessageConf = obj;
        }

        if (params.VoiceFilterConf) {
            let obj = new VoiceFilterConf();
            obj.deserialize(params.VoiceFilterConf)
            this.VoiceFilterConf = obj;
        }

    }
}

/**
 * Voice chat usage statistics
 * @class
 */
class RealTimeSpeechStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * DAU in Mainland China
         * @type {number || null}
         */
        this.MainLandDau = null;

        /**
         * PCU in Mainland China
         * @type {number || null}
         */
        this.MainLandPcu = null;

        /**
         * Total duration of use in Mainland China in minutes
         * @type {number || null}
         */
        this.MainLandDuration = null;

        /**
         * DAU outside Mainland China
         * @type {number || null}
         */
        this.OverseaDau = null;

        /**
         * PCU outside Mainland China
         * @type {number || null}
         */
        this.OverseaPcu = null;

        /**
         * Total duration of use outside Mainland China in minutes
         * @type {number || null}
         */
        this.OverseaDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainLandDau = 'MainLandDau' in params ? params.MainLandDau : null;
        this.MainLandPcu = 'MainLandPcu' in params ? params.MainLandPcu : null;
        this.MainLandDuration = 'MainLandDuration' in params ? params.MainLandDuration : null;
        this.OverseaDau = 'OverseaDau' in params ? params.OverseaDau : null;
        this.OverseaPcu = 'OverseaPcu' in params ? params.OverseaPcu : null;
        this.OverseaDuration = 'OverseaDuration' in params ? params.OverseaDuration : null;

    }
}

/**
 * DescribeAppStatistics request structure.
 * @class
 */
class DescribeAppStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * GME application ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Data start date (GMT+8) in the format of yyyy-mm-dd, such as 2018-07-13
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * Data end date (GMT+8) in the format of yyyy-mm-dd, such as 2018-07-13
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * List of services to be queried. Valid values: RealTimeSpeech, VoiceMessage, VoiceFilter
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * ModifyAppStatus API output parameters
 * @class
 */
class ModifyAppStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * GME application ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application status. Valid values: open, close
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Voice messaging usage statistics
 * @class
 */
class VoiceMessageStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * DAU of voice messaging and speech-to-text
         * @type {number || null}
         */
        this.Dau = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dau = 'Dau' in params ? params.Dau : null;

    }
}

/**
 * Configuration information of voice messaging and speech-to-text
 * @class
 */
class VoiceMessageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voice messaging and speech-to-text status. Valid values: open, close
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Language supported for voice messaging and speech-to-text. Valid values: all (all languages), cnen (Chinese and English). Default value: cnen
         * @type {string || null}
         */
        this.Language = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Language = 'Language' in params ? params.Language : null;

    }
}

/**
 * Configuration information of phrase filtering
 * @class
 */
class VoiceFilterConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Phrase filtering status. Valid values: open, close
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Gets application usage statistics output parameters
 * @class
 */
class DescribeAppStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application usage statistics
         * @type {Array.<AppStatisticsItem> || null}
         */
        this.AppStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppStatistics) {
            this.AppStatistics = new Array();
            for (let z in params.AppStatistics) {
                let obj = new AppStatisticsItem();
                obj.deserialize(params.AppStatistics[z]);
                this.AppStatistics.push(obj);
            }
        }

    }
}

module.exports = {
    Tag: Tag,
    AppStatisticsItem: AppStatisticsItem,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    CreateAppRequest: CreateAppRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    CreateAppResponse: CreateAppResponse,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    VoiceMessageConf: VoiceMessageConf,
    VoiceFilterConf: VoiceFilterConf,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,

}
