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
 * DescribeOfflineRecordCallback request structure.
 * @class
 */
class DescribeOfflineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * Mixed stream canvas parameter
 * @class
 */
class Canvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width and height of the mixed stream canvas
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Background color, which is black by default. Its format is RGB. for example, "#FF0000" for the red color.
         * @type {string || null}
         */
        this.BackgroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;

    }
}

/**
 * StopOnlineRecord response structure.
 * @class
 */
class StopOnlineRecordResponse extends  AbstractModel {
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
 * SetVideoGenerationTaskCallbackKey request structure.
 * @class
 */
class SetVideoGenerationTaskCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback authentication key for recording video generation. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key is deleted.
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeTIWRoomDailyUsage request structure.
 * @class
 */
class DescribeTIWRoomDailyUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Subproduct usage to be queried. The following parameters are supported:
- sp_tiw_board: The duration of use of whiteboards, in minutes.
- sp_tiw_ric: The duration of real-time recording, in minutes.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Start date in the format of YYYY-MM-DD. The start date is included in the query period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in the format of YYYY-MM-DD. The end date is included in the query period. The period queried per request cannot be longer than 31 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Room IDs to be queried. If you leave this parameter empty, all room IDs are queried.
         * @type {Array.<number> || null}
         */
        this.RoomIDs = null;

        /**
         * Offset for query. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries returned per query. Default value: `20`.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomIDs = 'RoomIDs' in params ? params.RoomIDs : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeWhiteboardPush request structure.
 * @class
 */
class DescribeWhiteboardPushRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the whiteboard push task.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeWhiteboardPushSearch response structure.
 * @class
 */
class DescribeWhiteboardPushSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The set of queried push tasks.
         * @type {Array.<WhiteboardPushTaskSearchResult> || null}
         */
        this.WhiteboardPushTaskSet = null;

        /**
         * Number of push tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.WhiteboardPushTaskSet) {
            this.WhiteboardPushTaskSet = new Array();
            for (let z in params.WhiteboardPushTaskSet) {
                let obj = new WhiteboardPushTaskSearchResult();
                obj.deserialize(params.WhiteboardPushTaskSet[z]);
                this.WhiteboardPushTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeOnlineRecord response structure.
 * @class
 */
class ResumeOnlineRecordResponse extends  AbstractModel {
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
 * Tencent Interactive Whiteboard usage information.
 * @class
 */
class UsageDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Subproduct usage information, which is consistent with the corresponding request parameters.
- sp_tiw_board: The duration of use of whiteboards.
- sp_tiw_dt: The number of pages dynamically transcoded.
- sp_tiw_st: The number of pages statically transcoded.
- sp_tiw_ric: The duration of real-time recording.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Usage values.
- The unit of sp_tiw_dt and sp_tiw_st is pages.
- The unit of sp_tiw_board and sp_tiw_ric is minutes.
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeWhiteboardApplicationConfig response structure.
 * @class
 */
class DescribeWhiteboardApplicationConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task-related configurations of the whiteboard application.
         * @type {Array.<WhiteboardApplicationConfig> || null}
         */
        this.Configs = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new WhiteboardApplicationConfig();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Whiteboard push task result.
 * @class
 */
class WhiteboardPushResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * `AUTO`: Pushing automatically stops. `USER_CALL`: The API for stopping pushing is called.
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * Number of exceptions.
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * Room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * IM group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Actual push start time.
         * @type {number || null}
         */
        this.PushStartTime = null;

        /**
         * Push end time.
         * @type {number || null}
         */
        this.PushStopTime = null;

        /**
         * IM timestamp corresponding to the first frame of the whiteboard push video. The timestamp is used for time synchronization between IM messages and the whiteboard push video during playback.
         * @type {number || null}
         */
        this.IMSyncTime = null;

        /**
         * Task execution error code.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Error message.
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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PushStartTime = 'PushStartTime' in params ? params.PushStartTime : null;
        this.PushStopTime = 'PushStopTime' in params ? params.PushStopTime : null;
        this.IMSyncTime = 'IMSyncTime' in params ? params.IMSyncTime : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * CreateSnapshotTask response structure.
 * @class
 */
class CreateSnapshotTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the whiteboard snapshot task. This parameter is returned only if a task is created successfully.
         * @type {string || null}
         */
        this.TaskID = null;

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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineRecord response structure.
 * @class
 */
class DescribeOfflineRecordResponse extends  AbstractModel {
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
 * ModifyApplication response structure.
 * @class
 */
class ModifyApplicationResponse extends  AbstractModel {
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
 * CreateTranscode response structure.
 * @class
 */
class CreateTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the document transcoding task, which is used to query the task progress and transcoding result
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserResources response structure.
 * @class
 */
class DescribeUserResourcesResponse extends  AbstractModel {
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
 * Video information
 * @class
 */
class VideoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video playback start time, in milliseconds
         * @type {number || null}
         */
        this.VideoPlayTime = null;

        /**
         * Video size, in bytes
         * @type {number || null}
         */
        this.VideoSize = null;

        /**
         * Video format
         * @type {string || null}
         */
        this.VideoFormat = null;

        /**
         * Video playback duration, in milliseconds
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * Video file URL
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * Video file ID
         * @type {string || null}
         */
        this.VideoId = null;

        /**
         * Video stream type - 0: camera video - 1: screen-sharing video - 2: whiteboard video - 3: mixed stream video - 4: audio-only (mp3)
         * @type {number || null}
         */
        this.VideoType = null;

        /**
         * ID of the user to which the camera video or screen-sharing video belongs (whiteboard video: null, mixed stream video: tic_mixstream_<Room ID>_<Mixed stream layout type>, auxiliary video: tic_substream_user ID)
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Width of the video resolution.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height of the video resolution.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoPlayTime = 'VideoPlayTime' in params ? params.VideoPlayTime : null;
        this.VideoSize = 'VideoSize' in params ? params.VideoSize : null;
        this.VideoFormat = 'VideoFormat' in params ? params.VideoFormat : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoId = 'VideoId' in params ? params.VideoId : null;
        this.VideoType = 'VideoType' in params ? params.VideoType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Custom mixed stream layout parameter
 * @class
 */
class CustomLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mixed stream canvas parameter
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * Stream layout. The layout of each stream cannot exceed the canvas area.
         * @type {Array.<StreamLayout> || null}
         */
        this.InputStreamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new StreamLayout();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

    }
}

/**
 * Number of video stream interruptions during real-time recording.
 * @class
 */
class Interrupt extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Number of video stream interruptions.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeOnlineRecord request structure.
 * @class
 */
class DescribeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the real-time recording task
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Whiteboard room data returned for log queries.
 * @class
 */
class RoomListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * The first time when the room ID appeared during the queried period, which is a Unix timestamp in milliseconds.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The last time when the room ID appeared during the queried period, which is a Unix timestamp in milliseconds.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of users in the room.
         * @type {number || null}
         */
        this.UserNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UserNumber = 'UserNumber' in params ? params.UserNumber : null;

    }
}

/**
 * ModifyWhiteboardBucketConfig request structure.
 * @class
 */
class ModifyWhiteboardBucketConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task type to be queried.
recording: Real-time recording.
transcode: Document transcoding.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Name of the COS bucket.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Region of the COS bucket.
         * @type {string || null}
         */
        this.BucketLocation = null;

        /**
         * Resource prefix of the bucket.
         * @type {string || null}
         */
        this.BucketPrefix = null;

        /**
         * Domain name of the URL of the bucket.
         * @type {string || null}
         */
        this.ResultDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketLocation = 'BucketLocation' in params ? params.BucketLocation : null;
        this.BucketPrefix = 'BucketPrefix' in params ? params.BucketPrefix : null;
        this.ResultDomain = 'ResultDomain' in params ? params.ResultDomain : null;

    }
}

/**
 * SetOnlineRecordCallbackKey response structure.
 * @class
 */
class SetOnlineRecordCallbackKeyResponse extends  AbstractModel {
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
 * DescribeRecordSearch response structure.
 * @class
 */
class DescribeRecordSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The set of queried recording tasks.
         * @type {Array.<RecordTaskSearchResult> || null}
         */
        this.RecordTaskSet = null;

        /**
         * Number of recording tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.RecordTaskSet) {
            this.RecordTaskSet = new Array();
            for (let z in params.RecordTaskSet) {
                let obj = new RecordTaskSearchResult();
                obj.deserialize(params.RecordTaskSet[z]);
                this.RecordTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAPIService request structure.
 * @class
 */
class DescribeAPIServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported services are cos:GetService and cdn:DescribeDomainsConfig.
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Request parameters in JSON format.
         * @type {string || null}
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
        this.Service = 'Service' in params ? params.Service : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * DescribeQualityMetrics request structure.
 * @class
 */
class DescribeQualityMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Start time, which is a Unix timestamp in seconds. The time length cannot exceed seven days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time, which is a Unix timestamp in seconds. The time length cannot exceed seven days.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Metrics to be queried. Valid values:
  - image_load_total_count: The number of image loads.
  - image_load_fail_count: The number of image load failures.
  - image_load_success_rate: The success rate of image loading, in percentage.
  - ppt_load_total_count: The number of PowerPoint file loads.
  - ppt_load_fail_count: The number of PowerPoint file load failures.
  - ppt_load_success_rate: The success rate of PowerPoint file loading, in percentage.
  - verify_sdk_total_count: The number of SDK verifications.
  - verify_sdk_fail_count: The number of SDK verification failures.
  - verify_sdk_success_rate: The success rate of SDK verification, in percentage.
  - verify_sdk_in_one_second_rate: The rate of SDK verification completed within one second, in percentage.
  - verify_sdk_cost_avg: The average time taken by each SDK verification, in milliseconds.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Aggregation interval. Valid value: `1h`.
         * @type {string || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * CreateVideoGenerationTask request structure.
 * @class
 */
class CreateVideoGenerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the recording task.
         * @type {string || null}
         */
        this.OnlineRecordTaskId = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Whiteboard parameters of the recording video generation task, such as the width and height of the whiteboard.

This parameter conflicts with the Whiteboard parameter in the API for starting a recording task. If the two Whiteboard parameters are both specified, the Whiteboard parameter in this API takes priority for recording video generation. If the Whiteboard parameter in this API is not specified, the Whiteboard parameter specified in the API for starting a recording task is used for recording video generation.
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * Video splicing parameters.

This parameter conflicts with the Concat parameter in the API for starting a recording task. If the two Concat parameters are both specified, the Concat parameter in this API takes priority for video splicing. If the Concat parameter in this API is not specified, the Concat parameter specified in the API for starting a recording task is used for video splicing.
         * @type {Concat || null}
         */
        this.Concat = null;

        /**
         * Video stream mixing parameters.

This parameter conflicts with the MixStream parameter in the API for starting a recording task. If the two MixStream parameters are both specified, the MixStream parameter in this API takes priority for video stream mixing. If the MixStream parameter in this API is not specified, the MixStream parameter specified in the API for starting a recording task is used for video stream mixing.
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * A group of video generation parameters. It specifies the streams to be generated, whether to disable audio recording for a stream, and whether to record only low-resolution videos, etc.

This parameter conflicts with the RecordControl parameter in the API for starting a recording task. If the two RecordControl parameters are both specified, the RecordControl parameter in this API takes priority for video generation control. If the RecordControl parameter in this API is not specified, the RecordControl parameter specified in the API for starting a recording task is used for video generation control.
         * @type {RecordControl || null}
         */
        this.RecordControl = null;

        /**
         * Internal parameter.
         * @type {string || null}
         */
        this.ExtraData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlineRecordTaskId = 'OnlineRecordTaskId' in params ? params.OnlineRecordTaskId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }

        if (params.RecordControl) {
            let obj = new RecordControl();
            obj.deserialize(params.RecordControl)
            this.RecordControl = obj;
        }
        this.ExtraData = 'ExtraData' in params ? params.ExtraData : null;

    }
}

/**
 * DescribeTranscodeCallback request structure.
 * @class
 */
class DescribeTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeTranscodeSearch response structure.
 * @class
 */
class DescribeTranscodeSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The set of queried transcoding tasks.
         * @type {Array.<TranscodeTaskSearchResult> || null}
         */
        this.TranscodeTaskSet = null;

        /**
         * Number of transcoding tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.TranscodeTaskSet) {
            this.TranscodeTaskSet = new Array();
            for (let z in params.TranscodeTaskSet) {
                let obj = new TranscodeTaskSearchResult();
                obj.deserialize(params.TranscodeTaskSet[z]);
                this.TranscodeTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeOnlineRecord request structure.
 * @class
 */
class ResumeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the resumed real-time recording task
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SetWhiteboardPushCallbackKey response structure.
 * @class
 */
class SetWhiteboardPushCallbackKeyResponse extends  AbstractModel {
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
 * DescribeRoomList request structure.
 * @class
 */
class DescribeRoomListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Query period, which consists of two Unix timestamps in milliseconds. The first indicates the start time and the second the end time.
         * @type {Array.<number> || null}
         */
        this.TimeRange = null;

        /**
         * Extra query conditions.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Maximum number of data entries to be returned. Default value: 1000.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * SetWhiteboardPushCallback response structure.
 * @class
 */
class SetWhiteboardPushCallbackResponse extends  AbstractModel {
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
 * ApplyTiwTrial response structure.
 * @class
 */
class ApplyTiwTrialResponse extends  AbstractModel {
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
 * Duration to be ignored in the spliced video
 * @class
 */
class OmittedDuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset of the paused time in the spliced video, in milliseconds
         * @type {number || null}
         */
        this.VideoTime = null;

        /**
         * Recording pause timestamp, in milliseconds
         * @type {number || null}
         */
        this.PauseTime = null;

        /**
         * Recording resumption timestamp, in milliseconds
         * @type {number || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoTime = 'VideoTime' in params ? params.VideoTime : null;
        this.PauseTime = 'PauseTime' in params ? params.PauseTime : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * PauseOnlineRecord request structure.
 * @class
 */
class PauseOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the real-time recording task
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeApplicationInfos response structure.
 * @class
 */
class DescribeApplicationInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application list.
         * @type {Array.<ApplicationItem> || null}
         */
        this.ApplicationInfos = null;

        /**
         * Specifies whether all applications are included. The value 0 indicates no and 1 indicates yes.
         * @type {number || null}
         */
        this.AllOption = null;

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

        if (params.ApplicationInfos) {
            this.ApplicationInfos = new Array();
            for (let z in params.ApplicationInfos) {
                let obj = new ApplicationItem();
                obj.deserialize(params.ApplicationInfos[z]);
                this.ApplicationInfos.push(obj);
            }
        }
        this.AllOption = 'AllOption' in params ? params.AllOption : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationUsage response structure.
 * @class
 */
class DescribeApplicationUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage data required for drawing charts.
         * @type {Array.<DataItem> || null}
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
                let obj = new DataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAPIService response structure.
 * @class
 */
class DescribeAPIServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Response data in JSON format.
         * @type {string || null}
         */
        this.ResponseData = null;

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
        this.ResponseData = 'ResponseData' in params ? params.ResponseData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Time series returned for the queried metric.
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unix timestamp in seconds.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Current value of the queried metric.
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Real-time recording result.
 * @class
 */
class RecordTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * `AUTO`: Recording automatically stops. `USER_CALL`: The API for stopping recording is called.
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * Number of exceptions.
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * Room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Actual recording start time.
         * @type {number || null}
         */
        this.RecordStartTime = null;

        /**
         * Recording end time.
         * @type {number || null}
         */
        this.RecordStopTime = null;

        /**
         * Recording duration.
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * List of video information.
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfos = null;

        /**
         * Omitted video durations.
         * @type {Array.<OmittedDuration> || null}
         */
        this.OmittedDurations = null;

        /**
         * Details.
         * @type {string || null}
         */
        this.Details = null;

        /**
         * Task execution error code.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Error message.
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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordStartTime = 'RecordStartTime' in params ? params.RecordStartTime : null;
        this.RecordStopTime = 'RecordStopTime' in params ? params.RecordStopTime : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;

        if (params.VideoInfos) {
            this.VideoInfos = new Array();
            for (let z in params.VideoInfos) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfos[z]);
                this.VideoInfos.push(obj);
            }
        }

        if (params.OmittedDurations) {
            this.OmittedDurations = new Array();
            for (let z in params.OmittedDurations) {
                let obj = new OmittedDuration();
                obj.deserialize(params.OmittedDurations[z]);
                this.OmittedDurations.push(obj);
            }
        }
        this.Details = 'Details' in params ? params.Details : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * DescribeWhiteboardBucketConfig request structure.
 * @class
 */
class DescribeWhiteboardBucketConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task type to be queried.
recording: Real-time recording.
transcode: Document transcoding.
         * @type {string || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * DescribeUsageSummary response structure.
 * @class
 */
class DescribeUsageSummaryResponse extends  AbstractModel {
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
 * DescribeApplicationInfos request structure.
 * @class
 */
class DescribeApplicationInfosRequest extends  AbstractModel {
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
 * DescribeApplicationUsage request structure.
 * @class
 */
class DescribeApplicationUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query period. The start time point is included in the query period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the query period. The end time point is not included in the query period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Subproduct name.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Unit of time increment.
- MONTHLY: month
- DAILY: day
- MINUTELY: minute
         * @type {string || null}
         */
        this.TimeLevel = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * true: Returns the weighted sum of raw usage data.
false: Returns the raw usage data.
         * @type {boolean || null}
         */
        this.IsWeighted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.TimeLevel = 'TimeLevel' in params ? params.TimeLevel : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.IsWeighted = 'IsWeighted' in params ? params.IsWeighted : null;

    }
}

/**
 * Result of the whiteboard snapshot task.
 * @class
 */
class SnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task execution error code.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Task execution error message.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Number of generated snapshot images.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of URLs of the snapshot images.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Snapshots = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Snapshots = 'Snapshots' in params ? params.Snapshots : null;

    }
}

/**
 * DescribeOfflineRecordCallback response structure.
 * @class
 */
class DescribeOfflineRecordCallbackResponse extends  AbstractModel {
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
 * CreateOfflineRecord response structure.
 * @class
 */
class CreateOfflineRecordResponse extends  AbstractModel {
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
 * SetVideoGenerationTaskCallbackKey response structure.
 * @class
 */
class SetVideoGenerationTaskCallbackKeyResponse extends  AbstractModel {
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
 * DescribeVideoGenerationTask response structure.
 * @class
 */
class DescribeVideoGenerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID corresponding to the task.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Room ID corresponding to the task.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Disused.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Status of the recording video generation task. Valid values:
- QUEUED: Queuing.
- PROCESSING: Video generation in progress.
- FINISHED: Video generation finished. (To determine whether the task succeeded or failed, check the error code and message.)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Total video playback duration. Unit: milliseconds.
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Disused. Use the `VideoInfoList` parameter.
         * @type {VideoInfo || null}
         */
        this.VideoInfos = null;

        /**
         * List of videos generated by the recording video generation tasks.
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfoList = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;

        if (params.VideoInfos) {
            let obj = new VideoInfo();
            obj.deserialize(params.VideoInfos)
            this.VideoInfos = obj;
        }

        if (params.VideoInfoList) {
            this.VideoInfoList = new Array();
            for (let z in params.VideoInfoList) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfoList[z]);
                this.VideoInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Chart data, including the time, values, and details.
 * @class
 */
class DataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time. The following formats are supported:
yyyy-mm
yyyy-mm-dd
yyyy-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Values required for drawing charts.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Details of the values.
         * @type {Array.<Detail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new Detail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * DescribeVideoGenerationTask request structure.
 * @class
 */
class DescribeVideoGenerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the recording video generation task.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeWhiteboardPushCallback request structure.
 * @class
 */
class DescribeWhiteboardPushCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeOnlineRecord response structure.
 * @class
 */
class DescribeOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recording stop reason
- AUTO: Recording automatically stops because no upstream audio/video or whiteboard operation occurs in the room for a long time.
- USER_CALL: The API for stopping recording is called.
- EXCEPTION: An exception occurred.
- FORCE_STOP: Recording is forcibly stopped, which is usually because the recording has been paused for more than 90 minutes or has lasted for more than 24 hours.
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * ID of the recording task to be queried.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Recording task status
- PREPARED: preparing
- RECORDING: recording
- PAUSED: recording is paused.
- STOPPED: recording is stopped, and the recorded video is being processed and uploaded.
- FINISHED: the recorded video has been processed and uploaded, and the recording result is generated.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Room ID
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Group ID of the whiteboard
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * ID of the recording user
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * Actual recording start time, which is a UNIX timestamp in seconds
         * @type {number || null}
         */
        this.RecordStartTime = null;

        /**
         * Actual recording stop time, which is a UNIX timestamp in seconds
         * @type {number || null}
         */
        this.RecordStopTime = null;

        /**
         * Total video playback duration, in milliseconds
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Number of exceptions during recording
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * Duration to be deleted in the spliced video. This parameter is valid only when the video splicing feature is enabled.
         * @type {Array.<OmittedDuration> || null}
         */
        this.OmittedDurations = null;

        /**
         * List of recorded videos
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfos = null;

        /**
         * 
         * @type {string || null}
         */
        this.ReplayUrl = null;

        /**
         * Number of video stream interruptions during recording.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {Array.<Interrupt> || null}
         */
        this.Interrupts = null;

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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordStartTime = 'RecordStartTime' in params ? params.RecordStartTime : null;
        this.RecordStopTime = 'RecordStopTime' in params ? params.RecordStopTime : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;

        if (params.OmittedDurations) {
            this.OmittedDurations = new Array();
            for (let z in params.OmittedDurations) {
                let obj = new OmittedDuration();
                obj.deserialize(params.OmittedDurations[z]);
                this.OmittedDurations.push(obj);
            }
        }

        if (params.VideoInfos) {
            this.VideoInfos = new Array();
            for (let z in params.VideoInfos) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfos[z]);
                this.VideoInfos.push(obj);
            }
        }
        this.ReplayUrl = 'ReplayUrl' in params ? params.ReplayUrl : null;

        if (params.Interrupts) {
            this.Interrupts = new Array();
            for (let z in params.Interrupts) {
                let obj = new Interrupt();
                obj.deserialize(params.Interrupts[z]);
                this.Interrupts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTranscode request structure.
 * @class
 */
class DescribeTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Unique ID of the document transcoding task
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeBoardSDKLog response structure.
 * @class
 */
class DescribeBoardSDKLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of logs queried.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Log details.
         * @type {Array.<string> || null}
         */
        this.Sources = null;

        /**
         * Number of logs queried within each time range after aggregation based on the time range.
         * @type {Array.<string> || null}
         */
        this.Buckets = null;

        /**
         * Context key used for recursive extraction. This parameter can be used in the next request.
         * @type {string || null}
         */
        this.Context = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.Sources = 'Sources' in params ? params.Sources : null;
        this.Buckets = 'Buckets' in params ? params.Buckets : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetOnlineRecordCallback response structure.
 * @class
 */
class SetOnlineRecordCallbackResponse extends  AbstractModel {
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
 * ApplyTiwTrial request structure.
 * @class
 */
class ApplyTiwTrialRequest extends  AbstractModel {
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
 * DescribeTranscodeCallback response structure.
 * @class
 */
class DescribeTranscodeCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Document transcoding callback address
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Authentication key of the document transcoding callback
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserList response structure.
 * @class
 */
class DescribeUserListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User list of the room.
         * @type {Array.<UserListItem> || null}
         */
        this.UserList = null;

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

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserListItem();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoRenewFlag response structure.
 * @class
 */
class ModifyAutoRenewFlagResponse extends  AbstractModel {
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
 * DescribeTIWDailyUsage request structure.
 * @class
 */
class DescribeTIWDailyUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Subproduct usage to be queried. The following parameters are supported:
- sp_tiw_board: The duration of use of whiteboards, in minutes.
- sp_tiw_dt: The number of pages dynamically transcoded.
- sp_tiw_st: The number of pages statically transcoded.
- sp_tiw_ric: The duration of real-time recording, in minutes.

Note: Dynamic transcoding multiplies the number of pages of a document by eight times. Static transcoding does not change the number of pages of a document.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Start date in the format of YYYY-MM-DD. The start date is included in the query period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End date in the format of YYYY-MM-DD. The end date is included in the query period. The period queried per request cannot be longer than 31 days.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeWhiteboardBucketConfig response structure.
 * @class
 */
class DescribeWhiteboardBucketConfigResponse extends  AbstractModel {
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
 * Stream mixing configuration
 * @class
 */
class MixStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether stream mixing is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Whether audio stream mixing is disabled
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * ID of the embedded mixed stream layout template. Valid values: 1 and 2. For more information on the differences of both values, see the sample embedded mixed stream layout template.
If the Custom field is not specified, ModelId is required.
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * ID of a teacher account
This field is valid only when ModelId is specified.
If you specify TeacherID for a user, the user's video stream will be displayed in the first image of the embedded template.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * Custom mixed stream layout parameter
If this parameter is available, the ModelId and TeacherId fields will be ignored.
         * @type {CustomLayout || null}
         */
        this.Custom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

        if (params.Custom) {
            let obj = new CustomLayout();
            obj.deserialize(params.Custom)
            this.Custom = obj;
        }

    }
}

/**
 * DescribeBoardSDKLog request structure.
 * @class
 */
class DescribeBoardSDKLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID to be used to query logs.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * User ID to be used to query logs.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Query period, which consists of two Unix timestamps in milliseconds. The first indicates the start time and the second the end time.
         * @type {Array.<number> || null}
         */
        this.TimeRange = null;

        /**
         * Interval for aggregating log number queries. Example values: `5m`, `1h`, `4h`
         * @type {string || null}
         */
        this.AggregationInterval = null;

        /**
         * Extra query conditions.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Specifies whether to sort results in ascending order of time.
         * @type {boolean || null}
         */
        this.Ascending = null;

        /**
         * Context key used for recursive extraction. Obtain this parameter in the response to the last request.
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.AggregationInterval = 'AggregationInterval' in params ? params.AggregationInterval : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Ascending = 'Ascending' in params ? params.Ascending : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * DescribeVideoGenerationTaskCallback request structure.
 * @class
 */
class DescribeVideoGenerationTaskCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * SetWhiteboardPushCallbackKey request structure.
 * @class
 */
class SetWhiteboardPushCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback authentication key for whiteboard push. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key is deleted. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeTranscodeSearch request structure.
 * @class
 */
class DescribeTranscodeSearchRequest extends  AbstractModel {
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
 * Authentication parameters.
 * @class
 */
class AuthParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Signature corresponding to the user ID.
         * @type {string || null}
         */
        this.UserSig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;

    }
}

/**
 * Detailed metric data with different tags in billable usage data.
 * @class
 */
class Detail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage metric.
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * Usage weight.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Usage value.
         * @type {number || null}
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
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * StartWhiteboardPush request structure.
 * @class
 */
class StartWhiteboardPushRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID of the whiteboard push task. Valid range: (1,4294967295).

1. By default, the whiteboard push task uses the RoomId string as the GroupID of the IM group. For example, if the RoomId string is 1234, the GroupID of the IM group is also 1234. Message synchronization requires joining a group. Make sure that an IM group is created before the push starts. Otherwise, the push fails.
2. If neither TRTCRoomId nor TRTCRoomIdStr is specified, the value of RoomId is used as the Tencent Real-Time Communication (TRTC) room ID for the whiteboard push task.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * User ID used by the whiteboard push service for entering the whiteboard room. If `IMAuthParam`and `TRTCAuthParam` are not specified, this user ID is used for operations such as logging in to the IM application, joining an IM group, and entering the room for TRTC whiteboard push.
The ID cannot exceed 60 bytes in length and must be an unused ID. The whiteboard push service uses the user ID to enter the room for whiteboard audio/video push. If this ID is already used in another scenario, the other scenario and whiteboard push service will conflict, affecting the pushing operation.
         * @type {string || null}
         */
        this.PushUserId = null;

        /**
         * User's IM signature corresponding to the PushUserId.
         * @type {string || null}
         */
        this.PushUserSig = null;

        /**
         * Whiteboard parameters, such as the width, height, and background color of the whiteboard.
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * Whiteboard push timeout. Unit: seconds. Valid range: [300,259200]. Default value: 1800.

If no operation is performed on the whiteboard for the specified period of time, the whiteboard push service automatically stops whiteboard push.
         * @type {number || null}
         */
        this.AutoStopTimeout = null;

        /**
         * Specifies whether to synchronize operations on the primary whiteboard push task to the backup task.
         * @type {boolean || null}
         */
        this.AutoManageBackup = null;

        /**
         * Parameters of the backup whiteboard push task.

After the backup parameters are specified, the whiteboard push service adds a relayed video stream. That is, there are two video streams on the whiteboard in the same room.
         * @type {WhiteboardPushBackupParam || null}
         */
        this.Backup = null;

        /**
         * Advanced permission control parameter in TRTC. If the advanced permission control feature is enabled in TRTC, this parameter is required.
         * @type {string || null}
         */
        this.PrivateMapKey = null;

        /**
         * Frame rate of the whiteboard push video. Valid range: [0,30]. Default value: 20. Unit: fps.
         * @type {number || null}
         */
        this.VideoFPS = null;

        /**
         * Whiteboard push bitrate. Valid range: [0,2000]. Default value: 1200. Unit: kbps.

The bitrate specified here is a reference value. During actual push, a dynamic bitrate is used. The actual bitrate does not remain the specified value but rather fluctuates around it.
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * Specifies whether to automatically record the whiteboard push when the recording mode in TRTC is set to `SubscribeStreamUserIds`.

Default value: `false`. If you need to enable automatic whiteboard push recording, set this parameter to `true`.

If the recording mode in TRTC is set to `Global Auto Recording`, ignore this parameter.
         * @type {boolean || null}
         */
        this.AutoRecord = null;

        /**
         * ID of the whiteboard push recording. The ID is filled in the `userdefinerecordid` parameter in the callback message after cloud recording is complete in TRTC, helping you identify the recording callback and locate the video file in VOD media resource management.

The value can be up to 64 bytes in length and contain letters (a-z and A-Z), digits (0-9), underscores (_), and hyphens (-).

After this parameter is set, automatic whiteboard push recording is enabled regardless of the value of the `AutoRecord` parameter.

Default RecordId generation rule:
urlencode(SdkAppID_RoomID_PushUserID)

Example:
SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1
Therefore: RecordId = 12345678_12345_push_user_1
         * @type {string || null}
         */
        this.UserDefinedRecordId = null;

        /**
         * Specifies whether to enable automatic relay whiteboard push when the relay push mode in TRTC is set to `SubscribeRelayUserIds`.

Default value: `false`. If you need to enable automatic relay whiteboard push, set this parameter to `true`.

If the recording mode in TRTC is set to `Global Auto Relay`, ignore this parameter.
         * @type {boolean || null}
         */
        this.AutoPublish = null;

        /**
         * Stream ID used by TRTC for relay whiteboard push. With this ID, you can stream the user’s audio/video by using the domain name and standard streaming solution (FLV or HLS) in TRTC.

The value can be up to 64 bytes in length and contain letters (a-z and A-Z), digits (0-9), underscores (_), and hyphens (-).

After this parameter is set, automatic relay whiteboard push is enabled regardless of the value of the `AutoPublish` parameter.

Default StreamID generation rule:
urlencode(SdkAppID_RoomID_PushUserID_main)

Example:
SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1
Therefore, StreamID = 12345678_12345_push_user_1_main
         * @type {string || null}
         */
        this.UserDefinedStreamId = null;

        /**
         * Internal parameter. You can ignore this parameter.
         * @type {string || null}
         */
        this.ExtraData = null;

        /**
         * TRTC room ID of the numeric type. Valid range: (1,4294967295).

If RoomId and TRTCRoomId are both specified, the value of TRTCRoomId takes priority as the room ID for TRTC whiteboard push.

If the TRTCRoomIdStr parameter is specified, this parameter is ignored.
         * @type {number || null}
         */
        this.TRTCRoomId = null;

        /**
         * TRTC room ID of the string type.

If TRTCRoomIdStr is specified, its value takes priority as the room ID for TRTC whiteboard push.
         * @type {string || null}
         */
        this.TRTCRoomIdStr = null;

        /**
         * IM authentication parameters.
If the ID of the IM application used by whiteboard messages is different from SdkAppId of the whiteboard application, specify this parameter to provide authentication information of the IM application.

If this parameter is specified, the whiteboard push service preferably uses the SdkAppId value in this parameter as the transmission channel for whiteboard messages. If this parameter is left empty, the SdkAppId value in the common parameters is used.
         * @type {AuthParam || null}
         */
        this.IMAuthParam = null;

        /**
         * TRTC authentication parameters, used for room entrance authentication for TRTC push.
If the ID of the TRTC application to which the target TRTC room belongs is different from SdkAppId of the whiteboard application, specify this parameter to provide authentication information of the TRTC application.

If this parameter is specified, the whiteboard push service preferably uses the SdkAppId value in this parameter as the ID of the target TRTC application. If this parameter is left empty, the SdkAppId value in the common parameters is used.
         * @type {AuthParam || null}
         */
        this.TRTCAuthParam = null;

        /**
         * This parameter is available only to users in the allowlist for trial.

TRTC room entrance mode for whiteboard push. Default value: `TRTCAppSceneVideoCall`.

`TRTCAppSceneVideoCall`: This scenario is most suitable when there are two or more people on a video call. The internal encoders and network protocols are optimized for video smoothness to reduce call latency and lagging.
`TRTCAppSceneLIVE`: This scenario is most suitable when there is only one person speaking or performing for an online audience, and occasionally multiple people interact with one another through video. The internal encoders and network protocols are optimized for performance and compatibility to deliver better performance and video clarity.
         * @type {string || null}
         */
        this.TRTCEnterRoomMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.PushUserId = 'PushUserId' in params ? params.PushUserId : null;
        this.PushUserSig = 'PushUserSig' in params ? params.PushUserSig : null;

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }
        this.AutoStopTimeout = 'AutoStopTimeout' in params ? params.AutoStopTimeout : null;
        this.AutoManageBackup = 'AutoManageBackup' in params ? params.AutoManageBackup : null;

        if (params.Backup) {
            let obj = new WhiteboardPushBackupParam();
            obj.deserialize(params.Backup)
            this.Backup = obj;
        }
        this.PrivateMapKey = 'PrivateMapKey' in params ? params.PrivateMapKey : null;
        this.VideoFPS = 'VideoFPS' in params ? params.VideoFPS : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.AutoRecord = 'AutoRecord' in params ? params.AutoRecord : null;
        this.UserDefinedRecordId = 'UserDefinedRecordId' in params ? params.UserDefinedRecordId : null;
        this.AutoPublish = 'AutoPublish' in params ? params.AutoPublish : null;
        this.UserDefinedStreamId = 'UserDefinedStreamId' in params ? params.UserDefinedStreamId : null;
        this.ExtraData = 'ExtraData' in params ? params.ExtraData : null;
        this.TRTCRoomId = 'TRTCRoomId' in params ? params.TRTCRoomId : null;
        this.TRTCRoomIdStr = 'TRTCRoomIdStr' in params ? params.TRTCRoomIdStr : null;

        if (params.IMAuthParam) {
            let obj = new AuthParam();
            obj.deserialize(params.IMAuthParam)
            this.IMAuthParam = obj;
        }

        if (params.TRTCAuthParam) {
            let obj = new AuthParam();
            obj.deserialize(params.TRTCAuthParam)
            this.TRTCAuthParam = obj;
        }
        this.TRTCEnterRoomMode = 'TRTCEnterRoomMode' in params ? params.TRTCEnterRoomMode : null;

    }
}

/**
 * CreateOfflineRecord request structure.
 * @class
 */
class CreateOfflineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID corresponding to the recording task.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Group ID corresponding to the recording task.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Stream mixing parameters.
The Custom parameter is not supported for offline recording tasks.
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * Whiteboard parameters.
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

    }
}

/**
 * Whiteboard user data returned for log queries.
 * @class
 */
class UserListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID in the room.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The first time when the user ID appeared during the queried period, which is a Unix timestamp in milliseconds.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The last time when the user ID appeared during the queried period, which is a Unix timestamp in milliseconds.
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeVideoGenerationTaskCallback response structure.
 * @class
 */
class DescribeVideoGenerationTaskCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback URL for recording video generation.
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Callback authentication key for recording video generation.
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Real-time recording task query results.
 * @class
 */
class WhiteboardPushTaskSearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Status of the whiteboard push task.
- PREPARED: Push in preparation.
- PUSHING: Pushing in progress.
- STOPPED: Pushing stopped.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Room ID of the whiteboard push task.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Creation time of the task.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Whiteboard push result.
         * @type {WhiteboardPushResult || null}
         */
        this.Result = null;

        /**
         * User ID of the whiteboard push task.
         * @type {string || null}
         */
        this.PushUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Result) {
            let obj = new WhiteboardPushResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.PushUserId = 'PushUserId' in params ? params.PushUserId : null;

    }
}

/**
 * ModifyWhiteboardApplicationConfig request structure.
 * @class
 */
class ModifyWhiteboardApplicationConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task-related configurations of the whiteboard application.
         * @type {Array.<WhiteboardApplicationConfig> || null}
         */
        this.Configs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new WhiteboardApplicationConfig();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }

    }
}

/**
 * Backup-related request parameters of the whiteboard push task.
 * @class
 */
class WhiteboardPushBackupParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID used by the whiteboard push service for entering a room,
The ID must be an unused ID in the SDK. The whiteboard push service uses the user ID to enter the room for whiteboard push. If this ID is already used in the SDK, the SDK and recording service will conflict, affecting the pushing operation.
         * @type {string || null}
         */
        this.PushUserId = null;

        /**
         * Signature corresponding to the PushUserId ID.
         * @type {string || null}
         */
        this.PushUserSig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PushUserId = 'PushUserId' in params ? params.PushUserId : null;
        this.PushUserSig = 'PushUserSig' in params ? params.PushUserSig : null;

    }
}

/**
 * DescribeSnapshotTask request structure.
 * @class
 */
class DescribeSnapshotTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the query task.
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * SdkAppId of the task.
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * StartOnlineRecord request structure.
 * @class
 */
class StartOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the room for recording. Value range: (1, 4294967295)
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * User ID used by the recording service for entering a room. The ID cannot exceed 60 bytes in length. Its format is `tic_record_user_${RoomId}_${Random}`, where `${RoomId}` indicates the ID of the room for recording and `${Random}` is a random string.
The ID must be an unused ID in the SDK. The recording service uses the user ID to enter the room for audio, video, and whiteboard recording. If this ID is already used in the SDK, the SDK and recording service will conflict, affecting the recording operation.
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * Signature corresponding to RecordUserId
         * @type {string || null}
         */
        this.RecordUserSig = null;

        /**
         * (Disused) IM group ID of the whiteboard. By default, it is the same as the room ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Real-time recording video splicing parameter
         * @type {Concat || null}
         */
        this.Concat = null;

        /**
         * Real-time recording whiteboard parameter, such as the whiteboard width and height
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * Real-time recording stream mixing parameter
Notes:
1. The stream mixing feature needs to be enabled separately. If you need the feature, contact TIW customer service.
2. To use the stream mixing feature, the Extras parameter is required and must contain "MIX_STREAM".
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * List of advanced features used
List of possible values:
MIX_STREAM - Stream mixing feature
         * @type {Array.<string> || null}
         */
        this.Extras = null;

        /**
         * Whether to return the audio-only recording file of different streams in the result callback. The file format is mp3.
         * @type {boolean || null}
         */
        this.AudioFileNeeded = null;

        /**
         * A group of real-time recording parameters. It specifies the streams to be recorded, whether to disable the audio recording, and whether to record only low-resolution videos, etc.
         * @type {RecordControl || null}
         */
        this.RecordControl = null;

        /**
         * 
         * @type {string || null}
         */
        this.RecordMode = null;

        /**
         * 
         * @type {string || null}
         */
        this.ChatGroupId = null;

        /**
         * Recording timeout. Unit: seconds. Valid range: [300,86400]. Default value: 300.

If no upstream audio/video exists or no operation is performed on the whiteboard for the specified period of time, the recording service automatically stops the recording task.
         * @type {number || null}
         */
        this.AutoStopTimeout = null;

        /**
         * Internal parameter. You can ignore this parameter.
         * @type {string || null}
         */
        this.ExtraData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordUserSig = 'RecordUserSig' in params ? params.RecordUserSig : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }
        this.Extras = 'Extras' in params ? params.Extras : null;
        this.AudioFileNeeded = 'AudioFileNeeded' in params ? params.AudioFileNeeded : null;

        if (params.RecordControl) {
            let obj = new RecordControl();
            obj.deserialize(params.RecordControl)
            this.RecordControl = obj;
        }
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.ChatGroupId = 'ChatGroupId' in params ? params.ChatGroupId : null;
        this.AutoStopTimeout = 'AutoStopTimeout' in params ? params.AutoStopTimeout : null;
        this.ExtraData = 'ExtraData' in params ? params.ExtraData : null;

    }
}

/**
 * DescribeUserStatus request structure.
 * @class
 */
class DescribeUserStatusRequest extends  AbstractModel {
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
 * DescribeOnlineRecordCallback request structure.
 * @class
 */
class DescribeOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * Real-time recording task query results.
 * @class
 */
class RecordTaskSearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Status of the real-time recording task.
- PAUSED: Recording paused.
- PREPARED: Recording in preparation.
- RECORDING: Recording in progress.
- STOPPED: Recording stopped.
- FINISHED: Recording finished.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Room ID of the real-time recording task.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Creation time of the task.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Real-time recording result.
         * @type {RecordTaskResult || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Result) {
            let obj = new RecordTaskResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

    }
}

/**
 * SetTranscodeCallback response structure.
 * @class
 */
class SetTranscodeCallbackResponse extends  AbstractModel {
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
 * StopOnlineRecord request structure.
 * @class
 */
class StopOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the recording task to stop
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SetOfflineRecordCallback request structure.
 * @class
 */
class SetOfflineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback URL of the offline recording task result. If it is specified as null, the set callback URL is deleted. The callback URL only supports the HTTP or HTTPS protocol, and therefore the callback URL must start with `http://` or `https://`.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * SetVideoGenerationTaskCallback response structure.
 * @class
 */
class SetVideoGenerationTaskCallbackResponse extends  AbstractModel {
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
 * Whiteboard application.
 * @class
 */
class ApplicationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Tag list.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * ModifyWhiteboardApplicationConfig response structure.
 * @class
 */
class ModifyWhiteboardApplicationConfigResponse extends  AbstractModel {
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
 * SetVideoGenerationTaskCallback request structure.
 * @class
 */
class SetVideoGenerationTaskCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback URL of the offline recording task result. If it is specified as null, the set callback URL is deleted. The callback URL only supports the HTTP or HTTPS protocol, and therefore the callback URL must start with `http://` or `https://`.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * SetWhiteboardPushCallback request structure.
 * @class
 */
class SetWhiteboardPushCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback URL of the whiteboard push task result. If an empty string is passed in, the existing callback URL is deleted. The callback URL only supports the HTTP or HTTPS protocol, and therefore the callback URL must start with `http://` or `https://`. For the callback format, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * DescribeTIWDailyUsage response structure.
 * @class
 */
class DescribeTIWDailyUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage summary of a specified product during a specified query period.
         * @type {Array.<UsageDataItem> || null}
         */
        this.Usages = null;

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

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new UsageDataItem();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Real-time recording video splicing parameter
 * @class
 */
class Concat extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the video splicing feature
If the video splicing feature is enabled, the real-time recording service will splice multiple video clips resulting from the pause into one video.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Download address of the padding image used during video splicing. If it is not specified, a pure black image is used by default.
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * DescribeWhiteboardApplicationConfig request structure.
 * @class
 */
class DescribeWhiteboardApplicationConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task types to be queried.
recording: Real-time recording.
transcode: Document transcoding.
         * @type {Array.<string> || null}
         */
        this.TaskTypes = null;

        /**
         * SdkAppIds to be used to query configurations.
         * @type {Array.<number> || null}
         */
        this.SdkAppIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.SdkAppIds = 'SdkAppIds' in params ? params.SdkAppIds : null;

    }
}

/**
 * Usage information of the room.
 * @class
 */
class RoomUsageDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start date in the format of YYYY-MM-DD.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Subproduct usage information, which is consistent with the corresponding request parameters.
- sp_tiw_board: The duration of use of whiteboards.
- sp_tiw_ric: The duration of real-time recording.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Usage values.
- The unit of sp_tiw_board and sp_tiw_ric is minutes.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 
         * @type {number || null}
         */
        this.RoomID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.RoomID = 'RoomID' in params ? params.RoomID : null;

    }
}

/**
 * COS bucket parameters for storing whiteboard snapshots.
 * @class
 */
class SnapshotCOS extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the Tencent Cloud account.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * COS region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS bucket name.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Root directory for storing whiteboard snapshots.
         * @type {string || null}
         */
        this.TargetDir = null;

        /**
         * CDN acceleration domain name.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.TargetDir = 'TargetDir' in params ? params.TargetDir : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * CreateVideoGenerationTask response structure.
 * @class
 */
class CreateVideoGenerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the video generation task.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Real-time recording whiteboard parameter, such as the whiteboard width and height
 * @class
 */
class Whiteboard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whiteboard video width in the real-time recording result. The value must be equal to or greater than 2. Default value: 1280.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whiteboard video height in the real-time recording result. The value must be equal to or greater than 2. Default value: 960.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Whiteboard initialization parameter, which is passed through to the whiteboard SDK
         * @type {string || null}
         */
        this.InitParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.InitParam = 'InitParam' in params ? params.InitParam : null;

    }
}

/**
 * PauseOnlineRecord response structure.
 * @class
 */
class PauseOnlineRecordResponse extends  AbstractModel {
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
 * ModifyWhiteboardBucketConfig response structure.
 * @class
 */
class ModifyWhiteboardBucketConfigResponse extends  AbstractModel {
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
 * CreateSnapshotTask request structure.
 * @class
 */
class CreateSnapshotTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whiteboard parameters.
         * @type {SnapshotWhiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * `SdkAppId` of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Whiteboard room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Callback URL to which the whiteboard snapshot result is to be sent.
         * @type {string || null}
         */
        this.CallbackURL = null;

        /**
         * `COS` bucket in which the generated whiteboard snapshot file is to be stored. If you leave this parameter empty, the generated file will be stored in the public bucket and retained for only three days.
         * @type {SnapshotCOS || null}
         */
        this.COS = null;

        /**
         * Whiteboard snapshot mode. Default value: `AllMarks`. Valid values:

`AllMarks`: Full mode. In this mode, a snapshot image is generated based on each whiteboard snapshot mark that is added by calling the `addSnapshotMark` API on the client.

`LatestMarksOnly`: Single-page deduplication mode. In this mode, a snapshot image is generated based only on the latest whiteboard snapshot mark that is added by calling the `addSnapshotMark` API on the client if the API is called multiple times for the same whiteboard snapshot.

**Note: The `LatestMarksOnly` mode takes effect only when the `addSnapshotMark` API is called by using Tencent Interactive Whiteboard SDK v2.6.8 or later. Otherwise, even if this parameter is set to `LatestMarksOnly`, the default `AllMarks` mode is used.**
         * @type {string || null}
         */
        this.SnapshotMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Whiteboard) {
            let obj = new SnapshotWhiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

        if (params.COS) {
            let obj = new SnapshotCOS();
            obj.deserialize(params.COS)
            this.COS = obj;
        }
        this.SnapshotMode = 'SnapshotMode' in params ? params.SnapshotMode : null;

    }
}

/**
 * DescribeTranscode response structure.
 * @class
 */
class DescribeTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of document pages
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Transcoding progress. Value range: 0 to 100
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Document resolution
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * URL of the transcoding result
Dynamic transcoding: link of the HTML5 page transcoded from a PowerPoint file
Static transcoding: URL prefix of the image transcoded for each document page. For example, if the URL prefix is `http://example.com/g0jb42ps49vtebjshilb/`, the image URL of the first page is
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`, and so on.
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * Current task state
- QUEUED: queuing for transcoding
- PROCESSING: transcoding is in progress
- FINISHED: transcoded
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Unique ID of the transcoding task
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Document name
         * @type {string || null}
         */
        this.Title = null;

        /**
         * URL prefix of the thumbnail. If the URL prefix is `http://example.com/g0jb42ps49vtebjshilb/ `, the thumbnail URL for the first page of the dynamically transcoded PowerPoint file is
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`, and so on.

If the document transcoding request carries the ThumbnailResolution parameter and the transcoding type is dynamic transcoding, this parameter is not null. In other cases, this parameter is null.
         * @type {string || null}
         */
        this.ThumbnailUrl = null;

        /**
         * Resolution of the thumbnail generated for dynamic transcoding
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * URL for downloading the transcoded and compressed file. If `CompressFileType` carried in the document transcoding request is null or is not a supported compression format, this parameter is null.
         * @type {string || null}
         */
        this.CompressFileUrl = null;

        /**
         * Download URL (for trial) of the resource list.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceListUrl = null;

        /**
         * Document generation mode (for trial).
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ext = null;

        /**
         * Document transcoding task creation time, unit: seconds.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Document transcoding task assignment time, unit: seconds.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AssignTime = null;

        /**
         * Document transcoding task finished time, unit: seconds.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FinishedTime = null;

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
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.ThumbnailUrl = 'ThumbnailUrl' in params ? params.ThumbnailUrl : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.ResourceListUrl = 'ResourceListUrl' in params ? params.ResourceListUrl : null;
        this.Ext = 'Ext' in params ? params.Ext : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AssignTime = 'AssignTime' in params ? params.AssignTime : null;
        this.FinishedTime = 'FinishedTime' in params ? params.FinishedTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetOnlineRecordCallbackKey request structure.
 * @class
 */
class SetOnlineRecordCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Authentication key for the real-time recording callback. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key will be deleted. For more information, please [see here](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * ModifyApplication request structure.
 * @class
 */
class ModifyApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * DescribeOnlineRecordCallback response structure.
 * @class
 */
class DescribeOnlineRecordCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback address of the real-time recording event. If no callback address is set, this field is null.
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Authentication key of the real-time recording callback
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetOfflineRecordCallback response structure.
 * @class
 */
class SetOfflineRecordCallbackResponse extends  AbstractModel {
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
 * It specifies the global recording parameters and the recording parameters over a specific stream. For example, you can specify the streams you want to record and whether to record low-resolution videos only.
 * @class
 */
class RecordControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * It specifies whether to enable RecordControl. Valid values: true (yes); false (no).
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to disable recording. Valid values:

true: no stream is recorded.
false: all streams are recorded. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to disable audio recording over all streams. Valid values:

true: no audio recording of any streams.
false: audio recording of all streams. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * A global parameter generally used in conjunction with `StreamControls` that specifies whether to record low-resolution videos only. Valid values:

true: only records low-resolution videos for all streams. Please ensure that the up-streaming end pushes the low-resolution videos. Otherwise, the recorded video may be black.
false: high-resolution video recording of all streams. Default value: false.

The setting in this parameter is applied to all streams. However, if `StreamControls` is passed in, the parameters in `StreamControls` will take precedence.
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

        /**
         * Parameters over specific streams, which take priority over global configurations. If it’s empty, all streams are recorded according to the global configurations. 
         * @type {Array.<StreamControl> || null}
         */
        this.StreamControls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

        if (params.StreamControls) {
            this.StreamControls = new Array();
            for (let z in params.StreamControls) {
                let obj = new StreamControl();
                obj.deserialize(params.StreamControls[z]);
                this.StreamControls.push(obj);
            }
        }

    }
}

/**
 * DescribeQualityMetrics response structure.
 * @class
 */
class DescribeQualityMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query metrics.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Time series.
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

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
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Transcoding task result.
 * @class
 */
class TranscodeTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transcoding result URL.
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * Target resolution.
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * Title (usually the document name).
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Number of transcoded pages.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * URL prefix of the thumbnail. If the URL prefix is `http://example.com/g0jb42ps49vtebjshilb/`, the thumbnail URL for the first page of the dynamically transcoded PowerPoint file is
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`, and so on.

If the document transcoding request carries the ThumbnailResolution parameter and the transcoding type is dynamic transcoding, this parameter is not null. In other cases, this parameter is null.
         * @type {string || null}
         */
        this.ThumbnailUrl = null;

        /**
         * Resolution of the thumbnail generated for dynamic transcoding
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * URL for downloading the transcoded and compressed file. If `CompressFileType` carried in the document transcoding request is null or is not a supported compression format, this parameter is null.
         * @type {string || null}
         */
        this.CompressFileUrl = null;

        /**
         * Task execution error code.
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Task execution error message.
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
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.ThumbnailUrl = 'ThumbnailUrl' in params ? params.ThumbnailUrl : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * DescribeIMApplications response structure.
 * @class
 */
class DescribeIMApplicationsResponse extends  AbstractModel {
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
 * SetOnlineRecordCallback request structure.
 * @class
 */
class SetOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback address of the real-time recording task result. If an empty string is passed in, the existing callback address will be deleted. The callback address only supports the HTTP or HTTPS protocol, so the callback address must start with `http://` or `https://`. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40258?from_cn_redirect=1).
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * DescribeUserList request structure.
 * @class
 */
class DescribeUserListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Room ID to be used to query users.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Query period, which consists of two Unix timestamps in milliseconds. The first indicates the start time and the second the end time.
         * @type {Array.<number> || null}
         */
        this.TimeRange = null;

        /**
         * Extra query conditions.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Maximum number of data entries to be returned. Default value: `1000`.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribeUserResources request structure.
 * @class
 */
class DescribeUserResourcesRequest extends  AbstractModel {
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
 * StopWhiteboardPush response structure.
 * @class
 */
class StopWhiteboardPushResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameters of the backup task.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Backup = null;

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
        this.Backup = 'Backup' in params ? params.Backup : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePostpaidUsage request structure.
 * @class
 */
class DescribePostpaidUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the query period.
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Custom mixed stream layout parameter
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream image width. Value range: [2,3000]
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Stream image height. Value range: [2,3000]
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Offset of the top point in the upper-left corner of the current image to the X axis of the top point in the upper-left corner of the canvas. Default value: 0. Value range: [0,3000].
         * @type {number || null}
         */
        this.X = null;

        /**
         * Offset of the top point in the upper-left corner of the current image to the Y axis of the top point in the upper-left corner of the canvas. Default value: 0. Value range: [0,3000].
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Z-axis position of the image. The default value is 0.
The Z axis determines the overlap sequence of images. The image with the largest z-axis value is at the top layer.
         * @type {number || null}
         */
        this.ZOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;

    }
}

/**
 * A group of parameters for recording over specified streams. It specifies whether to disable the audio recording and whether to record high-resolution or low-resolution videos.
 * @class
 */
class StreamControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video stream ID
Description of the possible video stream ID values:
1. `tic_record_user`: the whiteboard video stream
2. `tic_substream`: the auxiliary video stream
3. Specific user ID: the video stream of the specified user

The actual recording uses the prefix match of the video stream ID. The real stream becomes the specified stream once its ID prefix matches with the stream ID.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Whether to disable recording over the stream.

true: does not record this stream. This stream will not be included in the final recording file.
false: records this stream. This stream will be included in the final recording file.

Default value: false
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * Whether to disable the audio recording of the stream.

true: does not record the audio of the stream. In the final recording file, this stream will be soundless.
false: the stream has both video and audio recording.

Default value: false
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * Whether to only record low-resolution stream videos.

true: records only low-resolution videos. In this case, please make sure that the client pushes low-resolution videos upstream. Otherwise, the recorded video may be black. 
false: records only high-resolution videos.

Default value: false
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

    }
}

/**
 * DescribeRoomList response structure.
 * @class
 */
class DescribeRoomListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rooms of the whiteboard.
         * @type {Array.<RoomListItem> || null}
         */
        this.RoomList = null;

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

        if (params.RoomList) {
            this.RoomList = new Array();
            for (let z in params.RoomList) {
                let obj = new RoomListItem();
                obj.deserialize(params.RoomList[z]);
                this.RoomList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIMApplications request structure.
 * @class
 */
class DescribeIMApplicationsRequest extends  AbstractModel {
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
 * ModifyAutoRenewFlag request structure.
 * @class
 */
class ModifyAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subproduct ID. To obtain this ID, call the `DescribeUserResources` API and find the subproduct ID of the monthly feature package with the level 1. Usually the value is `sp_tiw_package`.
         * @type {string || null}
         */
        this.SubProduct = null;

        /**
         * Resource ID. To obtain this ID, call the `DescribeUserResources` API and find the resource ID of the monthly feature package with the level 1.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Renewal mode. Valid values: `0` (default mode, which is auto-renewal), `1` (auto-renewal), `2` (manual renewal, which is specified by users). If no renewal is required, set it to `0`.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubProduct = 'SubProduct' in params ? params.SubProduct : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeSnapshotTask response structure.
 * @class
 */
class DescribeSnapshotTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * Task status.
Running: The task is running.
Finished: The task is finished.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time of the task. Unit: seconds.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Completion time of the task. Unit: seconds.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FinishTime = null;

        /**
         * Task result information.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {SnapshotResult || null}
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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.Result) {
            let obj = new SnapshotResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserStatus response structure.
 * @class
 */
class DescribeUserStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppId of the customer.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Specifies whether the whiteboard service of the trial or official edition is activated before.

0: The whiteboard service is not activated.
1: The whiteboard service is activated.
         * @type {number || null}
         */
        this.IsTiwUser = null;

        /**
         * Specifies whether the interactive class feature of the trial or official edition is activated before.
         * @type {number || null}
         */
        this.IsSaaSUser = null;

        /**
         * Specifies whether the user uses the offline recording feature of the whiteboard service.
         * @type {number || null}
         */
        this.IsTiwOfflineRecordUser = null;

        /**
         * Specifies whether the user is authenticated.
         * @type {number || null}
         */
        this.IsAuthenticated = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.IsTiwUser = 'IsTiwUser' in params ? params.IsTiwUser : null;
        this.IsSaaSUser = 'IsSaaSUser' in params ? params.IsSaaSUser : null;
        this.IsTiwOfflineRecordUser = 'IsTiwOfflineRecordUser' in params ? params.IsTiwOfflineRecordUser : null;
        this.IsAuthenticated = 'IsAuthenticated' in params ? params.IsAuthenticated : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Stream layout parameter
 * @class
 */
class StreamLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream layout configuration
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * Video stream ID
Description of the possible video stream ID values:
1. tic_record_user: the current picture is used to display the whiteboard video stream.
2. tic_substream: the current picture is used to display the auxiliary video stream.
3. Specific user ID: the current picture is used to display the video stream of a specific user.
4.Left empty: the current picture is vacant for new video stream.
         * @type {string || null}
         */
        this.InputStreamId = null;

        /**
         * Background color in RGB format, such as "#FF0000" for red. The default color is black. 
         * @type {string || null}
         */
        this.BackgroundColor = null;

        /**
         * Video filling mode.

0: self-adaption mode. Scales the video proportionally to completely display it in the specified area. In this mode, there may be black bars.
1: full-screen mode. Scales the video to make it fill the entire specified area. In this mode, no black bars will appear, but the video may not be displayed fully.
         * @type {number || null}
         */
        this.FillMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.InputStreamId = 'InputStreamId' in params ? params.InputStreamId : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.FillMode = 'FillMode' in params ? params.FillMode : null;

    }
}

/**
 * DescribeTIWRoomDailyUsage response structure.
 * @class
 */
class DescribeTIWRoomDailyUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage of the specified product per room during the specified query period.
         * @type {Array.<RoomUsageDataItem> || null}
         */
        this.Usages = null;

        /**
         * Number of usage data entries.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new RoomUsageDataItem();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteboardPushCallback response structure.
 * @class
 */
class DescribeWhiteboardPushCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback URL of the whiteboard push event. If no callback URL is set, this parameter is null.
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Callback authentication key for whiteboard push.
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplication request structure.
 * @class
 */
class CreateApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * SKey required for creating an IM application.
         * @type {string || null}
         */
        this.SKey = null;

        /**
         * TinyId required for creating an IM application.
         * @type {string || null}
         */
        this.TinyId = null;

        /**
         * List of tags to be bound.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.SKey = 'SKey' in params ? params.SKey : null;
        this.TinyId = 'TinyId' in params ? params.TinyId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * DescribeWhiteboardPushSearch request structure.
 * @class
 */
class DescribeWhiteboardPushSearchRequest extends  AbstractModel {
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
 * SetTranscodeCallbackKey response structure.
 * @class
 */
class SetTranscodeCallbackKeyResponse extends  AbstractModel {
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
 * DescribeWhiteboardPush response structure.
 * @class
 */
class DescribeWhiteboardPushResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reason for push stop.
- AUTO: Pushing automatically stops because no upstream audio/video or whiteboard operation occurs in the room for a long time.
- USER_CALL: The API for stopping pushing is called.
- EXCEPTION: An exception occurred.
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * ID of the whiteboard push task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Status of the push task.
- PREPARED: Push in preparation (including entering the room and starting the push service).
- PUSHING: Pushing in progress.
- STOPPED: Pushing stopped.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Group ID of the whiteboard.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * User ID of the push task.
         * @type {string || null}
         */
        this.PushUserId = null;

        /**
         * Actual push start time, which is a Unix timestamp in seconds.
         * @type {number || null}
         */
        this.PushStartTime = null;

        /**
         * Actual push stop time, which is a Unix timestamp in seconds.
         * @type {number || null}
         */
        this.PushStopTime = null;

        /**
         * Number of exceptions during push.
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * IM timestamp corresponding to the first frame of the whiteboard push video. The timestamp is used for time synchronization between IM messages and the whiteboard push video during playback.
         * @type {number || null}
         */
        this.IMSyncTime = null;

        /**
         * Result information of the backup push task.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Backup = null;

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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PushUserId = 'PushUserId' in params ? params.PushUserId : null;
        this.PushStartTime = 'PushStartTime' in params ? params.PushStartTime : null;
        this.PushStopTime = 'PushStopTime' in params ? params.PushStopTime : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;
        this.IMSyncTime = 'IMSyncTime' in params ? params.IMSyncTime : null;
        this.Backup = 'Backup' in params ? params.Backup : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartOnlineRecord response structure.
 * @class
 */
class StartOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the real-time recording task
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag information.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
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
 * DescribeUsageSummary request structure.
 * @class
 */
class DescribeUsageSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the query period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time of the query period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Subproducts whose usage you want to query.
         * @type {Array.<string> || null}
         */
        this.SubProducts = null;

        /**
         * true: Returns weighted data.
false: Returns raw data.
         * @type {boolean || null}
         */
        this.IsWeighted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubProducts = 'SubProducts' in params ? params.SubProducts : null;
        this.IsWeighted = 'IsWeighted' in params ? params.IsWeighted : null;

    }
}

/**
 * Whiteboard parameters of the whiteboard snapshot task, such as the width and height of the whiteboard.
 * @class
 */
class SnapshotWhiteboard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whiteboard width. Valid range: [0,2560]. Default value: 1280.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Whiteboard height. Valid range: [0,2560]. Default value: 720.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Escaped JSON string of the whiteboard initial parameters, which is passed through to the Tencent Interactive Whiteboard SDK.
         * @type {string || null}
         */
        this.InitParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.InitParams = 'InitParams' in params ? params.InitParams : null;

    }
}

/**
 * CreateTranscode request structure.
 * @class
 */
class CreateTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * URL of the transcoded document after URL encoding. URL encoding converts characters into a format that can be transmitted over the Internet. For example, URL encoding can convert the document URL http://example.com/Test.pdf into http://example.com/%E6%B5%8B%E8%AF%95.pdf. To improve the success rate of URL parsing, use URL encoding.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Whether the PowerPoint file is static. The default value is False.
If IsStaticPPT is False, documents with the .ppt or .pptx extension will be dynamically transcoded to HTML5 pages, and documents with other extensions will be statically transcoded to images. If IsStaticPPT is True, documents with any extensions will be statically transcoded to images.
         * @type {boolean || null}
         */
        this.IsStaticPPT = null;

        /**
         * Note: This parameter is disused. Use the MinScaleResolution parameter to pass in a resolution. For more information, see [CreateTranscode](https://intl.cloud.tencent.com/document/api/1137/40060?from_cn_redirect=1#SDK).

Minimum resolution of the transcoded document. If no value or null is specified for it or the resolution format is invalid, the original document resolution is used.

Example: 1280x720. Note that the character between the numbers is the letter x.
         * @type {string || null}
         */
        this.MinResolution = null;

        /**
         * Resolution of the thumbnail generated for the dynamically transcoded PowerPoint file. If no value or null is specified for it or the resolution format is invalid, no thumbnail will be generated. The resolution format is the same as that of MinResolution.

For static transcoding, this parameter does not work.
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * Compression format of the transcoded file. If no value or null is specified for it or the specified format is invalid, no compression file will be generated. Currently, the following compression formats are supported:

`zip`: generates a .zip compression package.
`tar.gz: generates a .tar.gz compression package.
         * @type {string || null}
         */
        this.CompressFileType = null;

        /**
         * Internal parameter.
         * @type {string || null}
         */
        this.ExtraData = null;

        /**
         * Document transcoding priority. This parameter takes effect only for PowerPoint dynamic transcoding. Valid values:<br/>
- low: Low transcoding priority. The task can transcode at most 500 MB of data or a 2000-page document, with a download timeout no longer than 10 minutes. Due to resource limits, these tasks may have to queue for a long period of time. Consider this before you use this feature.
- null: Normal transcoding priority. The task can transcode at most 200 MB of data or a 500-page document, with a download timeout no longer than 2 minutes.
<br/>
Note: For static transcoding such as PDF transcoding, each task can transcode at most 200 MB of data regardless of the transcoding priority.
         * @type {string || null}
         */
        this.Priority = null;

        /**
         * Minimum resolution of the transcoded document. If no value or null is specified for it or the resolution format is invalid, the original document resolution is used.
Higher resolution brings clearer visual effect, but also means larger size of the transcoded image resources and longer loading time of the transcoded file. Set this parameter appropriately based on your actual scenario.

Example: 1280x720. Note that the character between the numbers is the letter x.
         * @type {string || null}
         */
        this.MinScaleResolution = null;

        /**
         * Specifies whether to enable auto handling of unsupported elements. By default, this feature is disabled.

If auto handling is enabled, the following processes are performed:
1. Inkblots: Remove unsupported inkblots, such as those drawn by using WPS.
2. Auto page flip: Clear the auto page clip settings in the PowerPoint file and set the page flip mode to mouse click.
3. Corrupted audio/videos: Remove the references to corrupted audio/videos in the PowerPoint file.
         * @type {boolean || null}
         */
        this.AutoHandleUnsupportedElement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.IsStaticPPT = 'IsStaticPPT' in params ? params.IsStaticPPT : null;
        this.MinResolution = 'MinResolution' in params ? params.MinResolution : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileType = 'CompressFileType' in params ? params.CompressFileType : null;
        this.ExtraData = 'ExtraData' in params ? params.ExtraData : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.MinScaleResolution = 'MinScaleResolution' in params ? params.MinScaleResolution : null;
        this.AutoHandleUnsupportedElement = 'AutoHandleUnsupportedElement' in params ? params.AutoHandleUnsupportedElement : null;

    }
}

/**
 * SetTranscodeCallbackKey request structure.
 * @class
 */
class SetTranscodeCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the application
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Authentication key for the document transcoding callback. It is a string that can have up to 64 characters. If an empty string is passed in, the existing callback authentication key will be deleted. For more information about callback authentication, please [see here](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * SetTranscodeCallback request structure.
 * @class
 */
class SetTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the customer
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback address for the document transcoding progress. If an empty string is passed in, the existing callback address will be deleted. The callback address only supports the HTTP or HTTPS protocol, so the callback address must start with `http://` or `https://`.
For more information about the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40260?from_cn_redirect=1).
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * DescribePostpaidUsage response structure.
 * @class
 */
class DescribePostpaidUsageResponse extends  AbstractModel {
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
 * StartWhiteboardPush response structure.
 * @class
 */
class StartWhiteboardPushResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Result parameters of the backup task.
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Backup = null;

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
        this.Backup = 'Backup' in params ? params.Backup : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Whiteboard application configuration, including the resource bucket, domain name, callback URL, and callback key.
 * @class
 */
class WhiteboardApplicationConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type.

recording: Real-time recording.
transcode: Document transcoding.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Bucket name.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Region of the bucket.
         * @type {string || null}
         */
        this.BucketLocation = null;

        /**
         * Resource prefix of the bucket.
         * @type {string || null}
         */
        this.BucketPrefix = null;

        /**
         * Destination CDN domain name.
         * @type {string || null}
         */
        this.ResultDomain = null;

        /**
         * Callback URL.
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * Callback authentication key.
         * @type {string || null}
         */
        this.CallbackKey = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * IM admin user ID.
         * @type {string || null}
         */
        this.AdminUserId = null;

        /**
         * IM admin user signature.
         * @type {string || null}
         */
        this.AdminUserSig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketLocation = 'BucketLocation' in params ? params.BucketLocation : null;
        this.BucketPrefix = 'BucketPrefix' in params ? params.BucketPrefix : null;
        this.ResultDomain = 'ResultDomain' in params ? params.ResultDomain : null;
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.AdminUserId = 'AdminUserId' in params ? params.AdminUserId : null;
        this.AdminUserSig = 'AdminUserSig' in params ? params.AdminUserSig : null;

    }
}

/**
 * Transcoding task query results.
 * @class
 */
class TranscodeTaskSearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time of the task.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Unique task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Current task status.
- QUEUED: Queuing for transcoding.
- PROCESSING: Transcoding in progress.
- FINISHED: Transcoding finished.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Original name of the transcoded document.
         * @type {string || null}
         */
        this.OriginalFilename = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Transcoding task result.
         * @type {TranscodeTaskResult || null}
         */
        this.Result = null;

        /**
         * Specifies whether the transcoding is static.
         * @type {boolean || null}
         */
        this.IsStatic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalFilename = 'OriginalFilename' in params ? params.OriginalFilename : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Result) {
            let obj = new TranscodeTaskResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.IsStatic = 'IsStatic' in params ? params.IsStatic : null;

    }
}

/**
 * CreateApplication response structure.
 * @class
 */
class CreateApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppId of the customer.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopWhiteboardPush request structure.
 * @class
 */
class StopWhiteboardPushRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the whiteboard push task to be stopped.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeOfflineRecord request structure.
 * @class
 */
class DescribeOfflineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId of the whiteboard application.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * ID of the offline recording task.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeRecordSearch request structure.
 * @class
 */
class DescribeRecordSearchRequest extends  AbstractModel {
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

module.exports = {
    DescribeOfflineRecordCallbackRequest: DescribeOfflineRecordCallbackRequest,
    Canvas: Canvas,
    StopOnlineRecordResponse: StopOnlineRecordResponse,
    SetVideoGenerationTaskCallbackKeyRequest: SetVideoGenerationTaskCallbackKeyRequest,
    DescribeTIWRoomDailyUsageRequest: DescribeTIWRoomDailyUsageRequest,
    DescribeWhiteboardPushRequest: DescribeWhiteboardPushRequest,
    DescribeWhiteboardPushSearchResponse: DescribeWhiteboardPushSearchResponse,
    ResumeOnlineRecordResponse: ResumeOnlineRecordResponse,
    UsageDataItem: UsageDataItem,
    DescribeWhiteboardApplicationConfigResponse: DescribeWhiteboardApplicationConfigResponse,
    WhiteboardPushResult: WhiteboardPushResult,
    CreateSnapshotTaskResponse: CreateSnapshotTaskResponse,
    DescribeOfflineRecordResponse: DescribeOfflineRecordResponse,
    ModifyApplicationResponse: ModifyApplicationResponse,
    CreateTranscodeResponse: CreateTranscodeResponse,
    DescribeUserResourcesResponse: DescribeUserResourcesResponse,
    VideoInfo: VideoInfo,
    CustomLayout: CustomLayout,
    Interrupt: Interrupt,
    DescribeOnlineRecordRequest: DescribeOnlineRecordRequest,
    RoomListItem: RoomListItem,
    ModifyWhiteboardBucketConfigRequest: ModifyWhiteboardBucketConfigRequest,
    SetOnlineRecordCallbackKeyResponse: SetOnlineRecordCallbackKeyResponse,
    DescribeRecordSearchResponse: DescribeRecordSearchResponse,
    DescribeAPIServiceRequest: DescribeAPIServiceRequest,
    DescribeQualityMetricsRequest: DescribeQualityMetricsRequest,
    CreateVideoGenerationTaskRequest: CreateVideoGenerationTaskRequest,
    DescribeTranscodeCallbackRequest: DescribeTranscodeCallbackRequest,
    DescribeTranscodeSearchResponse: DescribeTranscodeSearchResponse,
    ResumeOnlineRecordRequest: ResumeOnlineRecordRequest,
    SetWhiteboardPushCallbackKeyResponse: SetWhiteboardPushCallbackKeyResponse,
    DescribeRoomListRequest: DescribeRoomListRequest,
    SetWhiteboardPushCallbackResponse: SetWhiteboardPushCallbackResponse,
    ApplyTiwTrialResponse: ApplyTiwTrialResponse,
    OmittedDuration: OmittedDuration,
    PauseOnlineRecordRequest: PauseOnlineRecordRequest,
    DescribeApplicationInfosResponse: DescribeApplicationInfosResponse,
    DescribeApplicationUsageResponse: DescribeApplicationUsageResponse,
    DescribeAPIServiceResponse: DescribeAPIServiceResponse,
    TimeValue: TimeValue,
    RecordTaskResult: RecordTaskResult,
    DescribeWhiteboardBucketConfigRequest: DescribeWhiteboardBucketConfigRequest,
    DescribeUsageSummaryResponse: DescribeUsageSummaryResponse,
    DescribeApplicationInfosRequest: DescribeApplicationInfosRequest,
    DescribeApplicationUsageRequest: DescribeApplicationUsageRequest,
    SnapshotResult: SnapshotResult,
    DescribeOfflineRecordCallbackResponse: DescribeOfflineRecordCallbackResponse,
    CreateOfflineRecordResponse: CreateOfflineRecordResponse,
    SetVideoGenerationTaskCallbackKeyResponse: SetVideoGenerationTaskCallbackKeyResponse,
    DescribeVideoGenerationTaskResponse: DescribeVideoGenerationTaskResponse,
    DataItem: DataItem,
    DescribeVideoGenerationTaskRequest: DescribeVideoGenerationTaskRequest,
    DescribeWhiteboardPushCallbackRequest: DescribeWhiteboardPushCallbackRequest,
    DescribeOnlineRecordResponse: DescribeOnlineRecordResponse,
    DescribeTranscodeRequest: DescribeTranscodeRequest,
    DescribeBoardSDKLogResponse: DescribeBoardSDKLogResponse,
    SetOnlineRecordCallbackResponse: SetOnlineRecordCallbackResponse,
    ApplyTiwTrialRequest: ApplyTiwTrialRequest,
    DescribeTranscodeCallbackResponse: DescribeTranscodeCallbackResponse,
    DescribeUserListResponse: DescribeUserListResponse,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DescribeTIWDailyUsageRequest: DescribeTIWDailyUsageRequest,
    DescribeWhiteboardBucketConfigResponse: DescribeWhiteboardBucketConfigResponse,
    MixStream: MixStream,
    DescribeBoardSDKLogRequest: DescribeBoardSDKLogRequest,
    DescribeVideoGenerationTaskCallbackRequest: DescribeVideoGenerationTaskCallbackRequest,
    SetWhiteboardPushCallbackKeyRequest: SetWhiteboardPushCallbackKeyRequest,
    DescribeTranscodeSearchRequest: DescribeTranscodeSearchRequest,
    AuthParam: AuthParam,
    Detail: Detail,
    StartWhiteboardPushRequest: StartWhiteboardPushRequest,
    CreateOfflineRecordRequest: CreateOfflineRecordRequest,
    UserListItem: UserListItem,
    DescribeVideoGenerationTaskCallbackResponse: DescribeVideoGenerationTaskCallbackResponse,
    WhiteboardPushTaskSearchResult: WhiteboardPushTaskSearchResult,
    ModifyWhiteboardApplicationConfigRequest: ModifyWhiteboardApplicationConfigRequest,
    WhiteboardPushBackupParam: WhiteboardPushBackupParam,
    DescribeSnapshotTaskRequest: DescribeSnapshotTaskRequest,
    StartOnlineRecordRequest: StartOnlineRecordRequest,
    DescribeUserStatusRequest: DescribeUserStatusRequest,
    DescribeOnlineRecordCallbackRequest: DescribeOnlineRecordCallbackRequest,
    RecordTaskSearchResult: RecordTaskSearchResult,
    SetTranscodeCallbackResponse: SetTranscodeCallbackResponse,
    StopOnlineRecordRequest: StopOnlineRecordRequest,
    SetOfflineRecordCallbackRequest: SetOfflineRecordCallbackRequest,
    SetVideoGenerationTaskCallbackResponse: SetVideoGenerationTaskCallbackResponse,
    ApplicationItem: ApplicationItem,
    ModifyWhiteboardApplicationConfigResponse: ModifyWhiteboardApplicationConfigResponse,
    SetVideoGenerationTaskCallbackRequest: SetVideoGenerationTaskCallbackRequest,
    SetWhiteboardPushCallbackRequest: SetWhiteboardPushCallbackRequest,
    DescribeTIWDailyUsageResponse: DescribeTIWDailyUsageResponse,
    Concat: Concat,
    DescribeWhiteboardApplicationConfigRequest: DescribeWhiteboardApplicationConfigRequest,
    RoomUsageDataItem: RoomUsageDataItem,
    SnapshotCOS: SnapshotCOS,
    CreateVideoGenerationTaskResponse: CreateVideoGenerationTaskResponse,
    Whiteboard: Whiteboard,
    PauseOnlineRecordResponse: PauseOnlineRecordResponse,
    ModifyWhiteboardBucketConfigResponse: ModifyWhiteboardBucketConfigResponse,
    CreateSnapshotTaskRequest: CreateSnapshotTaskRequest,
    DescribeTranscodeResponse: DescribeTranscodeResponse,
    SetOnlineRecordCallbackKeyRequest: SetOnlineRecordCallbackKeyRequest,
    ModifyApplicationRequest: ModifyApplicationRequest,
    DescribeOnlineRecordCallbackResponse: DescribeOnlineRecordCallbackResponse,
    SetOfflineRecordCallbackResponse: SetOfflineRecordCallbackResponse,
    RecordControl: RecordControl,
    DescribeQualityMetricsResponse: DescribeQualityMetricsResponse,
    TranscodeTaskResult: TranscodeTaskResult,
    DescribeIMApplicationsResponse: DescribeIMApplicationsResponse,
    SetOnlineRecordCallbackRequest: SetOnlineRecordCallbackRequest,
    DescribeUserListRequest: DescribeUserListRequest,
    DescribeUserResourcesRequest: DescribeUserResourcesRequest,
    StopWhiteboardPushResponse: StopWhiteboardPushResponse,
    DescribePostpaidUsageRequest: DescribePostpaidUsageRequest,
    LayoutParams: LayoutParams,
    StreamControl: StreamControl,
    DescribeRoomListResponse: DescribeRoomListResponse,
    DescribeIMApplicationsRequest: DescribeIMApplicationsRequest,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    DescribeSnapshotTaskResponse: DescribeSnapshotTaskResponse,
    DescribeUserStatusResponse: DescribeUserStatusResponse,
    StreamLayout: StreamLayout,
    DescribeTIWRoomDailyUsageResponse: DescribeTIWRoomDailyUsageResponse,
    DescribeWhiteboardPushCallbackResponse: DescribeWhiteboardPushCallbackResponse,
    CreateApplicationRequest: CreateApplicationRequest,
    DescribeWhiteboardPushSearchRequest: DescribeWhiteboardPushSearchRequest,
    SetTranscodeCallbackKeyResponse: SetTranscodeCallbackKeyResponse,
    DescribeWhiteboardPushResponse: DescribeWhiteboardPushResponse,
    StartOnlineRecordResponse: StartOnlineRecordResponse,
    Tag: Tag,
    DescribeUsageSummaryRequest: DescribeUsageSummaryRequest,
    SnapshotWhiteboard: SnapshotWhiteboard,
    CreateTranscodeRequest: CreateTranscodeRequest,
    SetTranscodeCallbackKeyRequest: SetTranscodeCallbackKeyRequest,
    SetTranscodeCallbackRequest: SetTranscodeCallbackRequest,
    DescribePostpaidUsageResponse: DescribePostpaidUsageResponse,
    StartWhiteboardPushResponse: StartWhiteboardPushResponse,
    WhiteboardApplicationConfig: WhiteboardApplicationConfig,
    TranscodeTaskSearchResult: TranscodeTaskSearchResult,
    CreateApplicationResponse: CreateApplicationResponse,
    StopWhiteboardPushRequest: StopWhiteboardPushRequest,
    DescribeOfflineRecordRequest: DescribeOfflineRecordRequest,
    DescribeRecordSearchRequest: DescribeRecordSearchRequest,

}
