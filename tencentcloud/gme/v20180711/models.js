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
         * Voice moderation result. <li>`DataId`: Corresponding `DataId` in request.</li>
<li>`TaskID`: Moderation task ID, which is used to poll the voice detection result.</li>
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
         * Voice Chat statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {RealTimeSpeechStatisticsItem || null}
         */
        this.RealtimeSpeechStatisticsItem = null;

        /**
         * Voice Message statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {VoiceMessageStatisticsItem || null}
         */
        this.VoiceMessageStatisticsItem = null;

        /**
         * Phrase Filtering statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {VoiceFilterStatisticsItem || null}
         */
        this.VoiceFilterStatisticsItem = null;

        /**
         * Reference period
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Recording-to-Text usage statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AudioTextStatisticsItem || null}
         */
        this.AudioTextStatisticsItem = null;

        /**
         * Stream-to-Text usage statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {StreamTextStatisticsItem || null}
         */
        this.StreamTextStatisticsItem = null;

        /**
         * Usage statistics of Voice-to-Text of outside-MLC requests
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {OverseaTextStatisticsItem || null}
         */
        this.OverseaTextStatisticsItem = null;

        /**
         * Real-time Voice-to-Text usage statistics
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {RealtimeTextStatisticsItem || null}
         */
        this.RealtimeTextStatisticsItem = null;

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

        if (params.AudioTextStatisticsItem) {
            let obj = new AudioTextStatisticsItem();
            obj.deserialize(params.AudioTextStatisticsItem)
            this.AudioTextStatisticsItem = obj;
        }

        if (params.StreamTextStatisticsItem) {
            let obj = new StreamTextStatisticsItem();
            obj.deserialize(params.StreamTextStatisticsItem)
            this.StreamTextStatisticsItem = obj;
        }

        if (params.OverseaTextStatisticsItem) {
            let obj = new OverseaTextStatisticsItem();
            obj.deserialize(params.OverseaTextStatisticsItem)
            this.OverseaTextStatisticsItem = obj;
        }

        if (params.RealtimeTextStatisticsItem) {
            let obj = new RealtimeTextStatisticsItem();
            obj.deserialize(params.RealtimeTextStatisticsItem)
            this.RealtimeTextStatisticsItem = obj;
        }

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
         * Application ID, which is generated and returned by the backend after the application creation.
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application status. Valid values: `open`, `close`.
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
         * Result of the voice detection task to be queried
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * DescribeApplicationData request structure.
 * @class
 */
class DescribeApplicationDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Data start date in the format of yyyy-mm-dd, such as 2018-07-13.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * Data end date in the format of yyyy-mm-dd, such as 2018-07-13.
         * @type {string || null}
         */
        this.EndDate = null;

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

    }
}

/**
 * Voice detection task list
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
         * URL-encoded data file URL, which is a pull address if the detected voice is a stream.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * GME Voice Chat room ID, which is entered during voice analysis by GME Voice Chat.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * GME Voice Chat user ID, which is entered during voice analysis by GME Voice Chat.
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
 * Voice Message Service usage statistics
 * @class
 */
class VoiceMessageStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * DAUs of Voice Message Service
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
 * DeleteRoomMember request structure.
 * @class
 */
class DeleteRoomMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the target room
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * List of the members to remove
         * @type {Array.<string> || null}
         */
        this.Uids = null;

        /**
         * Operation type. `1`: Delete a room; `2`: Remove members
         * @type {number || null}
         */
        this.DeleteType = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.BizId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Uids = 'Uids' in params ? params.Uids : null;
        this.DeleteType = 'DeleteType' in params ? params.DeleteType : null;
        this.BizId = 'BizId' in params ? params.BizId : null;

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
         * Application ID, which is obtained when you create an application in the [GME console](https://console.cloud.tencent.com/gamegme).
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * List of IDs of the tasks to be queried. Up to 100 entries can be added in the ID list.
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * Number of task results to be returned. Default value: 10. Maximum value: 500. This parameter will be ignored for large file tasks where all results will be returned.
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
 * Voice Chat usage statistics
 * @class
 */
class RealTimeSpeechStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * DAUs in the Chinese mainland
         * @type {number || null}
         */
        this.MainLandDau = null;

        /**
         * PCUs in the Chinese mainland
         * @type {number || null}
         */
        this.MainLandPcu = null;

        /**
         * Total duration of use in the Chinese mainland (in minutes)
         * @type {number || null}
         */
        this.MainLandDuration = null;

        /**
         * DAUs outside the Chinese mainland
         * @type {number || null}
         */
        this.OverseaDau = null;

        /**
         * PCUs outside the Chinese mainland
         * @type {number || null}
         */
        this.OverseaPcu = null;

        /**
         * Total duration of use outside the Chinese mainland (in minutes)
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
 * Stream-to-Text usage statistics
 * @class
 */
class StreamTextStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage of the service (in seconds)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

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
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * Configuration information of Voice Message Service
 * @class
 */
class VoiceMessageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voice Message Service status. Valid values: `open`, `close`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Language supported for Voice Message Service. Valid values: `all` (all languages), `cnen` (Chinese and English). Default value: `cnen`.
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
 * Recording-to-Text usage statistics
 * @class
 */
class AudioTextStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical value (in seconds)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * Application statistics
 * @class
 */
class ApplicationDataStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Number of DAU metrics
         * @type {number || null}
         */
        this.DauDataNum = null;

        /**
         * DAUs in the Chinese mainland
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataMainland = null;

        /**
         * DAUs outside the Chinese mainland
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataOversea = null;

        /**
         * Total DAUs
         * @type {Array.<StatisticsItem> || null}
         */
        this.DauDataSum = null;

        /**
         * Number of Voice Chat metrics
         * @type {number || null}
         */
        this.DurationDataNum = null;

        /**
         * Duration of Voice Chat in the Chinese mainland (in minutes)
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataMainland = null;

        /**
         * Duration of Voice Chat outside the Chinese mainland (in minutes)
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataOversea = null;

        /**
         * Total duration of Voice Chat (in minutes)
         * @type {Array.<StatisticsItem> || null}
         */
        this.DurationDataSum = null;

        /**
         * Number of PCU metrics
         * @type {number || null}
         */
        this.PcuDataNum = null;

        /**
         * PCUs in the Chinese mainland
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataMainland = null;

        /**
         * PCUs outside the Chinese mainland
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataOversea = null;

        /**
         * Total PCUs
         * @type {Array.<StatisticsItem> || null}
         */
        this.PcuDataSum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.DauDataNum = 'DauDataNum' in params ? params.DauDataNum : null;

        if (params.DauDataMainland) {
            this.DauDataMainland = new Array();
            for (let z in params.DauDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataMainland[z]);
                this.DauDataMainland.push(obj);
            }
        }

        if (params.DauDataOversea) {
            this.DauDataOversea = new Array();
            for (let z in params.DauDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataOversea[z]);
                this.DauDataOversea.push(obj);
            }
        }

        if (params.DauDataSum) {
            this.DauDataSum = new Array();
            for (let z in params.DauDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DauDataSum[z]);
                this.DauDataSum.push(obj);
            }
        }
        this.DurationDataNum = 'DurationDataNum' in params ? params.DurationDataNum : null;

        if (params.DurationDataMainland) {
            this.DurationDataMainland = new Array();
            for (let z in params.DurationDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataMainland[z]);
                this.DurationDataMainland.push(obj);
            }
        }

        if (params.DurationDataOversea) {
            this.DurationDataOversea = new Array();
            for (let z in params.DurationDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataOversea[z]);
                this.DurationDataOversea.push(obj);
            }
        }

        if (params.DurationDataSum) {
            this.DurationDataSum = new Array();
            for (let z in params.DurationDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.DurationDataSum[z]);
                this.DurationDataSum.push(obj);
            }
        }
        this.PcuDataNum = 'PcuDataNum' in params ? params.PcuDataNum : null;

        if (params.PcuDataMainland) {
            this.PcuDataMainland = new Array();
            for (let z in params.PcuDataMainland) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataMainland[z]);
                this.PcuDataMainland.push(obj);
            }
        }

        if (params.PcuDataOversea) {
            this.PcuDataOversea = new Array();
            for (let z in params.PcuDataOversea) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataOversea[z]);
                this.PcuDataOversea.push(obj);
            }
        }

        if (params.PcuDataSum) {
            this.PcuDataSum = new Array();
            for (let z in params.PcuDataSum) {
                let obj = new StatisticsItem();
                obj.deserialize(params.PcuDataSum[z]);
                this.PcuDataSum.push(obj);
            }
        }

    }
}

/**
 * Output parameters of `ModifyAppStatus`
 * @class
 */
class ModifyAppStatusResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * GME application ID
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application status. Valid values: `open`, `close`.
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
 * DescribeAppStatistics response structure.
 * @class
 */
class DescribeAppStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application usage statistics
         * @type {DescribeAppStatisticsResp || null}
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
            let obj = new DescribeAppStatisticsResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationData response structure.
 * @class
 */
class DescribeApplicationDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application statistics
         * @type {ApplicationDataStatistics || null}
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
            let obj = new ApplicationDataStatistics();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRoomMember response structure.
 * @class
 */
class DeleteRoomMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the operation to delete a room or remove a member
         * @type {DeleteResult || null}
         */
        this.DeleteResult = null;

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

        if (params.DeleteResult) {
            let obj = new DeleteResult();
            obj.deserialize(params.DeleteResult)
            this.DeleteResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Phrase Filtering usage statistics
 * @class
 */
class VoiceFilterStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total duration of phrase filtering (in minutes)
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
 * Output parameters of `CreateApp`
 * @class
 */
class CreateAppResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID, automatically generated by the backend.
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Application name, the input of `AppName`.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Project ID, the input of `ProjectId`.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Application key, used to initialize GME SDK.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Timestamp, indicating when the service is created.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Configuration information of Voice Chat
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * Configuration information of Voice Message Service
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of Voice Analysis Service
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
 * Real-time Voice-to-Text usage statistics
 * @class
 */
class RealtimeTextStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical value (in seconds)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * Result of the operation to delete a room or remove members
 * @class
 */
class DeleteResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code. `0`: Succeeded. Others: Failed\
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Description
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * Usage statistics of Voice-to-Text of outside-MLC requests
 * @class
 */
class OverseaTextStatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical value (in seconds)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * Returned voice detection result
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
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Detection result, which will be returned if `Code` is 0
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ScanPiece> || null}
         */
        this.ScanPiece = null;

        /**
         * Detection task submission timestamp
         * @type {number || null}
         */
        this.ScanStartTime = null;

        /**
         * Voice detection scenario, which corresponds to the `Scene` at the time of request
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * Voice detection task ID, which is assigned by the backend
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * File or stream address
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Detection task execution result status. Valid values:
<li>Start: Task started</li>
<li>Success: Task ended successfully</li>
<li>Error: An exception occurs</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * ID of the application submitted for detection
         * @type {number || null}
         */
        this.BizId = null;

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
        this.BizId = 'BizId' in params ? params.BizId : null;

    }
}

/**
 * Voice detection details
 * @class
 */
class ScanDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Violation scenario. For more information, please see the definition of <a href="https://intl.cloud.tencent.com/document/product/607/37622?from_cn_redirect=1#Label_Value">Label</a>.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Confidence score in scenario. Value range: [0.00,100.00]. The higher the score, the more likely the content is non-compliant.
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * Non-compliant keyword
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * Start time offset of keyword from 0 in audio (in milliseconds)
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time offset of keyword from 0 in audio (in milliseconds)
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
         * Tencent Cloud project ID. Default value: 0, which means that the default project is used.
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
         * Configuration information of Voice Chat
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * Configuration information of Voice Message Service
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of Voice Analysis Service
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
 * Configuration information of Voice Chat
 * @class
 */
class RealtimeSpeechConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Voice Chat status. Valid values: `open`, `close`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Voice Chat sound quality. Valid value: `high`.
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
 * Output parameters of application usage statistics
 * @class
 */
class DescribeAppStatisticsResp extends  AbstractModel {
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
 * Result of voice moderation
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
 * CreateApp response structure.
 * @class
 */
class CreateAppResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data
         * @type {CreateAppResp || null}
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
            let obj = new CreateAppResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Data start date (GMT+8) in the format of yyyy-mm-dd, such as 2018-07-13.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * Data end date (GMT+8) in the format of yyyy-mm-dd, such as 2018-07-13.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * List of services to be queried. Valid values: `RealTimeSpeech`, `VoiceMessage`, `VoiceFilter`, `SpeechToText`.
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
 * Voice detection result, which will be returned if `Code` is 0.
 * @class
 */
class ScanPiece extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio retention address, which will be returned for stream detection. The audio will be retained for 30 minutes.
Note: This field may return `null`, indicating that no valid values can be obtained.
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
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MainType = null;

        /**
         * Voice detection details
         * @type {Array.<ScanDetail> || null}
         */
        this.ScanDetail = null;

        /**
         * GME Voice Chat room ID, which is the `RoomId` passed through when the task was submitted.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * GME Voice Chat user ID, which is the `OpenId` passed through when the task was submitted.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * Remarks
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Offset time of multipart in stream during stream detection (in milliseconds)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Multipart duration during stream detection
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Multipart detection start time
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * ModifyAppStatus response structure.
 * @class
 */
class ModifyAppStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned data
         * @type {ModifyAppStatusResp || null}
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
            let obj = new ModifyAppStatusResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration information of Phrase Filtering
 * @class
 */
class VoiceFilterConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Phrase Filtering status. Valid values: `open`, `close`.
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
 * Usage data unit
 * @class
 */
class StatisticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date in the format of yyyy-mm-dd, such as 2018-07-13
         * @type {string || null}
         */
        this.StatDate = null;

        /**
         * Statistical value
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatDate = 'StatDate' in params ? params.StatDate : null;
        this.Data = 'Data' in params ? params.Data : null;

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
         * Application ID, which is obtained when you create an application in the [GME console - Service Management](https://console.cloud.tencent.com/gamegme).
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Voice detection scenario. It must be `default`. See the <a href="#Label_Value">Label description</a> as the result.
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * Whether it is a live stream. Values: `false` (voice file), `true` (live stream).
         * @type {boolean || null}
         */
        this.Live = null;

        /**
         * Voice detection task list. Up to 100 tasks can be added in the list. 
<li>`DataId`: Unique data ID</li>
<li>`Url`: URL-encoded data file URL, which is a pull address if the detected voice is a stream</li>
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * Async callback address for detection result. For more information, please see the <a href="#Callback_Declare">Callback description</a> above. (Note: If this field is empty, the detection result can only be queried by calling the `DescribeScanResultList` API.)
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Language. Chinese will be used if it is left empty.
         * @type {string || null}
         */
        this.Lang = null;

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
        this.Lang = 'Lang' in params ? params.Lang : null;

    }
}

module.exports = {
    ScanVoiceResponse: ScanVoiceResponse,
    AppStatisticsItem: AppStatisticsItem,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    DescribeScanResultListResponse: DescribeScanResultListResponse,
    DescribeApplicationDataRequest: DescribeApplicationDataRequest,
    Task: Task,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    DeleteRoomMemberRequest: DeleteRoomMemberRequest,
    DescribeScanResultListRequest: DescribeScanResultListRequest,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    StreamTextStatisticsItem: StreamTextStatisticsItem,
    Tag: Tag,
    VoiceMessageConf: VoiceMessageConf,
    AudioTextStatisticsItem: AudioTextStatisticsItem,
    ApplicationDataStatistics: ApplicationDataStatistics,
    ModifyAppStatusResp: ModifyAppStatusResp,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,
    DescribeApplicationDataResponse: DescribeApplicationDataResponse,
    DeleteRoomMemberResponse: DeleteRoomMemberResponse,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    CreateAppResp: CreateAppResp,
    RealtimeTextStatisticsItem: RealtimeTextStatisticsItem,
    DeleteResult: DeleteResult,
    OverseaTextStatisticsItem: OverseaTextStatisticsItem,
    DescribeScanResult: DescribeScanResult,
    ScanDetail: ScanDetail,
    CreateAppRequest: CreateAppRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    DescribeAppStatisticsResp: DescribeAppStatisticsResp,
    ScanVoiceResult: ScanVoiceResult,
    CreateAppResponse: CreateAppResponse,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    ScanPiece: ScanPiece,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    VoiceFilterConf: VoiceFilterConf,
    StatisticsItem: StatisticsItem,
    ScanVoiceRequest: ScanVoiceRequest,

}
