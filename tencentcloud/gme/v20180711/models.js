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
 * ScanVoice response structure.
 * @class
 */
class ScanVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech detection return. The `Data` field is a JSON array where each element contains: <li>DataId: corresponding `DataId` in request.</li>
<li>TaskID: detection task ID, which is used to poll the speech detection result.</li>
         * @type {Array.<ScanVoiceResult> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ScanVoiceResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Application ID, which is generated and returned by the backend after application creation.
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
 * DescribeScanResultList response structure.
 * @class
 */
class DescribeScanResultListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the speech detection task to be queried
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeScanResult> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DescribeScanResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeScanResultList request structure.
 * @class
 */
class DescribeScanResultListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is the `AppID` obtained when you create an application in the [console](https://console.cloud.tencent.com/gamegme)
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * List of IDs of the tasks to be queried. Up to 100 entries can be added in the ID list.
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * Number of task results to be returned. Default value: 10. Maximum value: 500. This parameter will be ignored for large file tasks where all results will be returned
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
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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

/**
 * Speech detection task list
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique data ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * URL-encoded data file URL, which is a pull address if the detected speech is a stream
         * @type {string || null}
         */
        this.Url = null;

        /**
         * GME voice chat room ID, which is entered during speech detection by GME voice chat
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * GME voice chat user ID, which is entered during speech detection by GME voice chat
         * @type {string || null}
         */
        this.OpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

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
 * Returned speech detection result
 * @class
 */
class DescribeScanResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business return code
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Unique data ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * Detection completion timestamp
         * @type {number || null}
         */
        this.ScanFinishTime = null;

        /**
         * Whether non-compliant information is detected
         * @type {boolean || null}
         */
        this.HitFlag = null;

        /**
         * Whether it is a stream
         * @type {boolean || null}
         */
        this.Live = null;

        /**
         * Business return description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Detection result, which will be returned if `Code` is 0
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ScanPiece> || null}
         */
        this.ScanPiece = null;

        /**
         * Detection task submission timestamp
         * @type {number || null}
         */
        this.ScanStartTime = null;

        /**
         * Speech detection scenario, which corresponds to the `Scene` at the time of request
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * Speech detection task ID, which is assigned by the backend
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * File or stream address
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Detection task execution result task. Valid values:
<li>Start: task started</li>
<li>Success: task ended successfully</li>
<li>Error: exceptional</li>
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
        this.Code = 'Code' in params ? params.Code : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.ScanFinishTime = 'ScanFinishTime' in params ? params.ScanFinishTime : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Live = 'Live' in params ? params.Live : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

        if (params.ScanPiece) {
            this.ScanPiece = new Array();
            for (let z in params.ScanPiece) {
                let obj = new ScanPiece();
                obj.deserialize(params.ScanPiece[z]);
                this.ScanPiece.push(obj);
            }
        }
        this.ScanStartTime = 'ScanStartTime' in params ? params.ScanStartTime : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Speech detection details
 * @class
 */
class ScanDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Violation scenario. For more information, please see the definition of <a href="https://cloud.tencent.com/document/product/607/37622#Label_Value">Label</a>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Confidence score in scenario. Value range: [0.00,100.00]. The higher the score, the more likely the content is non-compliant
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * Non-compliant keyword
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * Start time offset in milliseconds from 0 of keyword in audio
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time offset in milliseconds from 0 of keyword in audio
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
        this.Label = 'Label' in params ? params.Label : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Tencent Cloud project ID. Default value: 0, which means the default project
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * List of engines to be supported. All values are selected by default.
         * @type {Array.<string> || null}
         */
        this.EngineList = null;

        /**
         * Service region list. All values are selected by default.
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
         * Voice chat sound quality type. Valid values: high (HD), ordinary (SD). Default value: high. SD sound quality is only available to whitelisted users. To try it out, please contact your Tencent Cloud rep.
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
 * Returned result of speech detection
 * @class
 */
class ScanVoiceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * Task ID
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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * Application ID, which is automatically generated by the backend.
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
 * Speech detection result, which will be returned if `Code` is 0
 * @class
 */
class ScanPiece extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio retention address, which will be returned for stream detection. The audio will be retained for 30 minutes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DumpUrl = null;

        /**
         * Whether non-compliant information is detected
         * @type {boolean || null}
         */
        this.HitFlag = null;

        /**
         * Main non-compliant content type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MainType = null;

        /**
         * Speech detection details
         * @type {Array.<ScanDetail> || null}
         */
        this.ScanDetail = null;

        /**
         * GME voice chat room ID, which is the `RoomId` passed through when the task was submitted
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * GME voice chat user ID, which is the `OpenId` passed through when the task was submitted
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * Remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Offset time in milliseconds of segment in stream during stream detection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Segment duration during stream detection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Segment detection start time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PieceStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DumpUrl = 'DumpUrl' in params ? params.DumpUrl : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.MainType = 'MainType' in params ? params.MainType : null;

        if (params.ScanDetail) {
            this.ScanDetail = new Array();
            for (let z in params.ScanDetail) {
                let obj = new ScanDetail();
                obj.deserialize(params.ScanDetail[z]);
                this.ScanDetail.push(obj);
            }
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.PieceStartTime = 'PieceStartTime' in params ? params.PieceStartTime : null;

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
 * ScanVoice request structure.
 * @class
 */
class ScanVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, which is the `AppID` obtained when you create an application in [Console > Service Management](https://console.cloud.tencent.com/gamegme)
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Speech detection scenario. The value of this parameter is currently required to be `default`. Preset scenarios: abusive, pornographic, politically sensitive, advertising, terrorism, and prohibited scenarios. For specific values, please see the <a href="#Label_Value">Label description</a> above.
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * Whether it is a live stream. false: audio file detection, true: audio stream detection.
         * @type {boolean || null}
         */
        this.Live = null;

        /**
         * Speech detection task list. Up to 100 tasks can be added in the list. The structure contains:
<li>DataId: unique data ID</li>
<li>Url: URL-encoded data file URL, which is a pull address if the detected speech is a stream</li>
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * Async callback address for detection result. For more information, please see the <a href="#Callback_Declare">callback description</a> above. (Note: if this field is empty, the detection result can only be obtained by calling the `DescribeScanResultList` API.)
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;
        this.Live = 'Live' in params ? params.Live : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

module.exports = {
    ScanVoiceResponse: ScanVoiceResponse,
    AppStatisticsItem: AppStatisticsItem,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    DescribeScanResultListResponse: DescribeScanResultListResponse,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    DescribeScanResultListRequest: DescribeScanResultListRequest,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    Tag: Tag,
    VoiceMessageConf: VoiceMessageConf,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,
    Task: Task,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    DescribeScanResult: DescribeScanResult,
    ScanDetail: ScanDetail,
    CreateAppRequest: CreateAppRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    ScanVoiceResult: ScanVoiceResult,
    CreateAppResponse: CreateAppResponse,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    ScanPiece: ScanPiece,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    VoiceFilterConf: VoiceFilterConf,
    ScanVoiceRequest: ScanVoiceRequest,

}
