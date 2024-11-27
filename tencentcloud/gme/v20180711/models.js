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
 * DescribeRecordInfo response structure.
 * @class
 */
class DescribeRecordInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information about the recording task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RecordInfo> || null}
         */
        this.RecordInfo = null;

        /**
         * Recording mode. Valid values: `1`: single stream; `2`: mixed streams; `3`: single stream and mixed streams.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * Room ID.
         * @type {string || null}
         */
        this.RoomId = null;

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

        if (params.RecordInfo) {
            this.RecordInfo = new Array();
            for (let z in params.RecordInfo) {
                let obj = new RecordInfo();
                obj.deserialize(params.RecordInfo[z]);
                this.RecordInfo.push(obj);
            }
        }
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
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
 * ModifyRecordInfo request structure.
 * @class
 */
class ModifyRecordInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the ongoing task, which is returned from the `StartRecord` API.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Recording mode. Valid values: `1`: single stream; `2`: mixed streams; `3`: single stream and mixed streams.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * Application ID.
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Allowlist or blocklist for stream subscription.
         * @type {SubscribeRecordUserIds || null}
         */
        this.SubscribeRecordUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.BizId = 'BizId' in params ? params.BizId : null;

        if (params.SubscribeRecordUserIds) {
            let obj = new SubscribeRecordUserIds();
            obj.deserialize(params.SubscribeRecordUserIds)
            this.SubscribeRecordUserIds = obj;
        }

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
 * DescribeRecordInfo request structure.
 * @class
 */
class DescribeRecordInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the ongoing task, which is returned from the `StartRecord` API.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Application ID.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BizId = 'BizId' in params ? params.BizId : null;

    }
}

/**
 * StartRecord response structure.
 * @class
 */
class StartRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartRecord request structure.
 * @class
 */
class StartRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Room ID.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Recording mode. Valid values: `1`: single stream; `2`: mixed streams; `3`: single stream and mixed streams.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * Allowlist or blocklist for stream subscription. If you do not specify this parameter, the audio streams of all the users in the room are subscribed to by default.
         * @type {SubscribeRecordUserIds || null}
         */
        this.SubscribeRecordUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;

        if (params.SubscribeRecordUserIds) {
            let obj = new SubscribeRecordUserIds();
            obj.deserialize(params.SubscribeRecordUserIds)
            this.SubscribeRecordUserIds = obj;
        }

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
 * DescribeTaskInfo response structure.
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the ongoing task, which is returned from the `StartRecord` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Recording mode. Valid values: `1`: single stream; `2`: mixed streams; `3`: single stream and mixed streams.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * Allowlist or blocklist for stream subscription.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SubscribeRecordUserIds || null}
         */
        this.SubscribeRecordUserIds = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;

        if (params.SubscribeRecordUserIds) {
            let obj = new SubscribeRecordUserIds();
            obj.deserialize(params.SubscribeRecordUserIds)
            this.SubscribeRecordUserIds = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Configuration information of Voice Messaging
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of Voice Analysis Service
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

        /**
         * Configuration information of Speech-to-Text
         * @type {AsrConf || null}
         */
        this.AsrConf = null;

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

        if (params.AsrConf) {
            let obj = new AsrConf();
            obj.deserialize(params.AsrConf)
            this.AsrConf = obj;
        }

    }
}

/**
 * Information about the recording task in a room.
Note: This field may return `null`, indicating that no valid values can be obtained.
 * @class
 */
class RecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID. The value is `0` in mixed streams recording mode.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Recording filename.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Recording start time, which is a Unix timestamp. Example: 1234567868.
         * @type {number || null}
         */
        this.RecordBeginTime = null;

        /**
         * Recording status. Valid values: `2`: recording; `10`: to be transcoded; `11`: transcoding; `12`: uploading; `13`: uploaded; `14`: user notified.
         * @type {number || null}
         */
        this.RecordStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.RecordBeginTime = 'RecordBeginTime' in params ? params.RecordBeginTime : null;
        this.RecordStatus = 'RecordStatus' in params ? params.RecordStatus : null;

    }
}

/**
 * Allowlist or blocklist for stream subscription.
 * @class
 */
class SubscribeRecordUserIds extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocklist for audio subscription. For example, `["1", "2", "3"]` means to not subscribe to the audio streams of users 1, 2, and 3. If this parameter is left empty, the audio streams of all users (max 20) in the room will not be subscribed to.
Note: You cannot specify `UnSubscribeAudioUserIds` and `SubscribeAudioUserIds` at the same time.
         * @type {Array.<string> || null}
         */
        this.UnSubscribeUserIds = null;

        /**
         * Allowlist for audio subscription. For example, `["1", "2", "3"]` means to subscribe to the audio streams of users 1, 2, and 3. If this parameter is left empty, the audio streams of all users (max 20) in the room will be subscribed to.
Note: You cannot specify `UnSubscribeAudioUserIds` and `SubscribeAudioUserIds` at the same time.
         * @type {Array.<string> || null}
         */
        this.SubscribeUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnSubscribeUserIds = 'UnSubscribeUserIds' in params ? params.UnSubscribeUserIds : null;
        this.SubscribeUserIds = 'SubscribeUserIds' in params ? params.SubscribeUserIds : null;

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
 * Scenario information. Valid values:
`RealTime`: Voice Chat analysis;
`VoiceMessage`: Voice Messaging;
`GMECloudApi`: GME cloud APIs
 * @class
 */
class SceneInfo extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
 * DescribeTaskInfo request structure.
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * Room ID.
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

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
         * Voice Chat sound quality type. Valid values: `high` (HD), `ordinary` (SD).
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
 * Configuration information of Speech-to-Text
 * @class
 */
class AsrConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech-to-Text status. Valid values: `open`, `close`.
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
 * StopRecord request structure.
 * @class
 */
class StopRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Application ID.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BizId = 'BizId' in params ? params.BizId : null;

    }
}

/**
 * StopRecord response structure.
 * @class
 */
class StopRecordResponse extends  AbstractModel {
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
         * List of engines to be supported.
Valid values: `android`, `ios`, `unity`, `cocos`, `unreal`, `windows`. All values are selected by default.
         * @type {Array.<string> || null}
         */
        this.EngineList = null;

        /**
         * List of regions.
Valid values: `mainland` (Chinese mainland), `hmt` (Hong Kong, Macao and Taiwan (China)), `sea` (Southeast Asia), `na` (North America), `eu` (Europe), `jpkr` (Japan, Korea and Asia Pacific), `sa` (South America), `oc` (Oceania), `me` (Middle East). All values are selected by default.
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * Configuration information of Voice Chat
         * @type {RealtimeSpeechConf || null}
         */
        this.RealtimeSpeechConf = null;

        /**
         * Configuration information of Voice Messaging
         * @type {VoiceMessageConf || null}
         */
        this.VoiceMessageConf = null;

        /**
         * Configuration information of Voice Analysis Service
         * @type {VoiceFilterConf || null}
         */
        this.VoiceFilterConf = null;

        /**
         * Configuration information of Speech-to-Text
         * @type {AsrConf || null}
         */
        this.AsrConf = null;

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

        if (params.AsrConf) {
            let obj = new AsrConf();
            obj.deserialize(params.AsrConf)
            this.AsrConf = obj;
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

        /**
         * Scenario configuration information, such as status and callback URL.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<SceneInfo> || null}
         */
        this.SceneInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.SceneInfos) {
            this.SceneInfos = new Array();
            for (let z in params.SceneInfos) {
                let obj = new SceneInfo();
                obj.deserialize(params.SceneInfos[z]);
                this.SceneInfos.push(obj);
            }
        }

    }
}

/**
 * ModifyRecordInfo response structure.
 * @class
 */
class ModifyRecordInfoResponse extends  AbstractModel {
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

module.exports = {
    StatisticsItem: StatisticsItem,
    DescribeRecordInfoResponse: DescribeRecordInfoResponse,
    AppStatisticsItem: AppStatisticsItem,
    DeleteRoomMemberRequest: DeleteRoomMemberRequest,
    ModifyAppStatusRequest: ModifyAppStatusRequest,
    ModifyRecordInfoRequest: ModifyRecordInfoRequest,
    DescribeApplicationDataRequest: DescribeApplicationDataRequest,
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem,
    DescribeRecordInfoRequest: DescribeRecordInfoRequest,
    StartRecordResponse: StartRecordResponse,
    StartRecordRequest: StartRecordRequest,
    RealTimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem,
    DescribeAppStatisticsRequest: DescribeAppStatisticsRequest,
    StreamTextStatisticsItem: StreamTextStatisticsItem,
    Tag: Tag,
    VoiceMessageConf: VoiceMessageConf,
    AudioTextStatisticsItem: AudioTextStatisticsItem,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    ApplicationDataStatistics: ApplicationDataStatistics,
    ModifyAppStatusResp: ModifyAppStatusResp,
    DescribeAppStatisticsResponse: DescribeAppStatisticsResponse,
    DescribeApplicationDataResponse: DescribeApplicationDataResponse,
    DeleteRoomMemberResponse: DeleteRoomMemberResponse,
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem,
    CreateAppResp: CreateAppResp,
    RecordInfo: RecordInfo,
    SubscribeRecordUserIds: SubscribeRecordUserIds,
    RealtimeTextStatisticsItem: RealtimeTextStatisticsItem,
    SceneInfo: SceneInfo,
    DeleteResult: DeleteResult,
    OverseaTextStatisticsItem: OverseaTextStatisticsItem,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    RealtimeSpeechConf: RealtimeSpeechConf,
    DescribeAppStatisticsResp: DescribeAppStatisticsResp,
    AsrConf: AsrConf,
    CreateAppResponse: CreateAppResponse,
    StopRecordRequest: StopRecordRequest,
    StopRecordResponse: StopRecordResponse,
    CreateAppRequest: CreateAppRequest,
    ModifyAppStatusResponse: ModifyAppStatusResponse,
    VoiceFilterConf: VoiceFilterConf,
    ModifyRecordInfoResponse: ModifyRecordInfoResponse,

}
