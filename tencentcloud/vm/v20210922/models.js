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
 * Image segment information
 * @class
 */
class ImageSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * Capture time.
For VOD files, it indicates the video offset time given in seconds (e.g., 0, 5, 10).
For live files, it indicates a timestamp (e.g., 1594650717).
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * Image capture result
         * @type {ImageResult || null}
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
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

        if (params.Result) {
            let obj = new ImageResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

    }
}

/**
 * Sub-result of the image output result
 * @class
 */
class ImageResultResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scenario
`Porn`: Pornographic
`Sexy`: Sexy
`Polity`: Political
`Illegal`: Illegal
`Abuse`: Abusive
`Terror`: Violence and terrorism
`Ad`: Advertising
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * Whether the video content is hit
`0`: No
`1`: Yes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * Suggestion. Values:
`Pass`: You’re suggested to allow the video to pass.
`Review`: You’re suggested to take a manual review.
`Block`: You’re suggested to block the non-compliant video.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Subtag under the current tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Score
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * If the hit video contains political content, the list of politicians will be returned; otherwise a null value is returned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * OCR-recognized text in the image
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Other details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageResultsResultDetail> || null}
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
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ImageResultsResultDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 *  Data storage information
 * @class
 */
class StorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Values:
`URL`: Resource link
`COS`: Tencent Cloud COS
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Resource link
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Tencent Cloud bucket information
         * @type {BucketInfo || null}
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BucketInfo) {
            let obj = new BucketInfo();
            obj.deserialize(params.BucketInfo)
            this.BucketInfo = obj;
        }

    }
}

/**
 * Bucket information
For more information on Tencent Cloud storage, see https://intl.cloud.tencent.com/document/product/436/44352.?from_cn_redirect=1
 * @class
 */
class BucketInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the COS bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Object key
         * @type {string || null}
         */
        this.Object = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Object = 'Object' in params ? params.Object : null;

    }
}

/**
 * CreateVideoModerationTask response structure.
 * @class
 */
class CreateVideoModerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task creation result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The result returned during task creation
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data ID passed when you request the data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Error code. If `OK` is returned, it indicates the task is created successfully. You can see common error codes for more details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * CancelTask request structure.
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTaskDetail response structure.
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the task ID (in the `Results` parameter) after a video moderation task is created. It is used to identify the moderation task for which to query the details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * This field is used to return the data ID parameter passed in when the video moderation API is called for easier data identification and management.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is used to return the `BizType` parameter passed in when the video moderation API is called for easier data identification and management.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field is used to return the task name in the `TaskInput` parameter passed in when the video moderation API is called for easier task identification and management.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is used to return the task status of the queried content.
<br>Valid values: **FINISH** (task completed), **PENDING** (task pending), **RUNNING** (task in progress), **ERROR** (task error), **CANCELLED** (task canceled).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * This field is used to return the type of video for moderation. Valid values: `VIDEO` (video on demand), `LIVE_VIDEO` (video live streaming). Default value: `VIDEO`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field is used to return the operation suggestion for the maliciousness tag. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Values: `Normal`: normal; `Porn`: pornographic; `Abuse`: abusive; `Ad`: advertising; `Custom`: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * This field is used to return the details of the input media file, including encoding/decoding formats and segment length. For details, see the description of the `MediaInfo` data structure.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * This field is used to return the media content information of the moderation service, mainly including the input file type and access URL.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * This field is used to return the creation time of the queried task in ISO 8601 format.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * This field is used to return the last update time of the queried task in ISO 8601 format.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * Specifies how long, in seconds, to retry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TryInSeconds = null;

        /**
         * This field is used to return the moderation result of the frames captured from the video. For the detailed returned content, see the description of the `ImageSegments` data structure.<br>Note: the data is valid for 24 hours. To extend the storage period, set it in the configured COS bucket.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageSegments> || null}
         */
        this.ImageSegments = null;

        /**
         * This field is used to return the moderation result of the audio in the video. For the detailed returned content, see the description of the `AudioSegments` data structure.<br>Note: the data is valid for 24 hours. To extend the storage period, set it in the configured COS bucket.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * When the task status is `Error`, the type of the error will be returned. Valid values: **DECODE_ERROR**: decoding failed (the input resource may contain video that cannot be decoded).
**URL_ERROR**: download address verification failed.
**TIMEOUT_ERROR**: processing timed out. When the task status is not `Error`, null will be returned by default.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * If the task status is `Error`, this field will return the error message; otherwise, null will be returned by default.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorDescription = null;

        /**
         * If the recognition result is normal, this parameter is returned with the value `Normal`. If malicious content is recognized, the tag with the highest priority in the result of `Labels` is returned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the recognized text content of an audio file. **Up to the first 1,000 characters** can be recognized.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AudioText = null;

        /**
         * The text content recognized from the audio 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RcbAsr> || null}
         */
        this.Asrs = null;

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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TaskLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }

        if (params.InputInfo) {
            let obj = new InputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.TryInSeconds = 'TryInSeconds' in params ? params.TryInSeconds : null;

        if (params.ImageSegments) {
            this.ImageSegments = new Array();
            for (let z in params.ImageSegments) {
                let obj = new ImageSegments();
                obj.deserialize(params.ImageSegments[z]);
                this.ImageSegments.push(obj);
            }
        }

        if (params.AudioSegments) {
            this.AudioSegments = new Array();
            for (let z in params.AudioSegments) {
                let obj = new AudioSegments();
                obj.deserialize(params.AudioSegments[z]);
                this.AudioSegments.push(obj);
            }
        }
        this.ErrorType = 'ErrorType' in params ? params.ErrorType : null;
        this.ErrorDescription = 'ErrorDescription' in params ? params.ErrorDescription : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.AudioText = 'AudioText' in params ? params.AudioText : null;

        if (params.Asrs) {
            this.Asrs = new Array();
            for (let z in params.Asrs) {
                let obj = new RcbAsr();
                obj.deserialize(params.Asrs[z]);
                this.Asrs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter indicates the number of tasks to be displayed on each page of the task list. **Default value: 10**.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * This parameter indicates the input parameter of the task filter. You can filter tasks by business type, file type, processing suggestion, and task status. For the specific parameter content, see the detailed description of the `TaskFilter` data structure.
         * @type {TaskFilter || null}
         */
        this.Filter = null;

        /**
         * This parameter indicates the `Token` information used during pagination. It is automatically generated by the system and will be passed to the next generated page for easy and fast pagination. When you turn to the last page, this field will be empty.
         * @type {string || null}
         */
        this.PageToken = null;

        /**
         * This parameter indicates the start time of the task list in ISO 8601 timestamp format. **Default value: 3 days ago**. If this parameter is passed in, tasks between this time point and `EndTime` will be filtered out.<br>Note: this parameter is used together with `Filter` to filter tasks in no particular order.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * This parameter indicates the end time of the task list in ISO 8601 timestamp format. **Default value: empty**. If this parameter is passed in, tasks between `StartTime` and this time point will be filtered out.<br>Note: this parameter is used together with `Filter` to filter tasks in no particular order.
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
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            let obj = new TaskFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Audio/Video task structure
 * @class
 */
class TaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task input
         * @type {StorageInfo || null}
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Input) {
            let obj = new StorageInfo();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * DescribeTaskDetail request structure.
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which is returned after a task is created
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Whether to show all segments. If it’s not specified, only hit segments are shown.
         * @type {boolean || null}
         */
        this.ShowAllSegments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShowAllSegments = 'ShowAllSegments' in params ? params.ShowAllSegments : null;

    }
}

/**
 * Task output tag
 * @class
 */
class TaskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hit tag
`Porn`: Pornographic
`Sexy`: Sexy
`Polity`: Political
`Illegal`: Illegal
`Abuse`: Abusive
`Terror`: Violence and terrorism
`Ad`: Advertising
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Suggestion. Values:
`Pass`: You’re suggested to allow the video to pass.
`Review`: You’re suggested to take a manual review.
`Block`: You’re suggested to block the non-compliant video.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Score. Value range: 0-100.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * Image recognition result in the specific scenario
 * @class
 */
class ImageResultsResultDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * OCR-recognized text
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Location information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ImageResultsResultDetailLocation || null}
         */
        this.Location = null;

        /**
         * Tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Library ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * Database name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * Hit keyword
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * Suggestion
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Score
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Subtag under the current tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Location) {
            let obj = new ImageResultsResultDetailLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * Input information details
 * @class
 */
class InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type. Values: `URL`, `COS`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Bucket information. When `Type = COS`, this field is required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.BucketInfo = 'BucketInfo' in params ? params.BucketInfo : null;

    }
}

/**
 * CreateVideoModerationTask request structure.
 * @class
 */
class CreateVideoModerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business type, which is used to define a template policy.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Task type. Values: `VIDEO` (video on demand), `LIVE_VIDEO` (live video).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Task information. You can create up to 10 tasks at a time.
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

        /**
         * Key of the callback signature. For more details, see the signature documentation.
         * @type {string || null}
         */
        this.Seed = null;

        /**
         * Callback URL that will receive moderation information. After it is configured, the non-compliant audio segments detected in moderation will be sent through this API.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * Priority, which determines the execution order of your moderation tasks. The default value is 0.
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the total number of queried tasks in the format of `int` string.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Total = null;

        /**
         * This field is used to return the detailed data of the tasks on the current page. For the specific output content, see the detailed description of the `TaskData` data structure.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskData> || null}
         */
        this.Data = null;

        /**
         * This field is used to return the `Token` information used during pagination. It is automatically generated by the system and will be passed to the next generated page for easy and fast pagination. When you turn to the last page, this field will be empty.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PageToken = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audio language detection result
 * @class
 */
class AudioResultDetailLanguageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Language
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Score
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Subtag under the current tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * Cos TaskFilter 
 * @class
 */
class TaskFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Task type. Values: `VIDEO`, `AUDIO`, `LIVE_VIDEO`, and `LIVE_AUDIO`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Suggestion. Values: `Pass`, `Review`, and `Block`.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Task status. Values: `PENDING`, `RUNNING`, `ERROR`, `FINISH`, and `CANCELLED`.
         * @type {string || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * Information of the category label
 * @class
 */
class RecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Values: `Teenager`, `Gender`
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of recognized category labels
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Label = 'Label' in params ? params.Label : null;

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
 * CancelTask response structure.
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ASR-based audio moderation result
 * @class
 */
class AudioResultDetailTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the keyword information hit by the text content recognized with ASR and indicate the specific cause of content non-compliance (such as "Friend me on WeChat"). This parameter may have multiple returned values representing multiple hit keywords. If the returned value is empty, but `Score` is not empty, the maliciousness tag (Label) that corresponds to the recognition result derives from the returned value determined by the semantic model.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the ID of the custom library for easier custom library management and configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the name of the custom library for easier custom library management and configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the dictionary type of a custom keyword. Valid values: **1** (blocklist/allowlist), **2** (custom keyword dictionary). If no custom keyword dictionary is configured, the default value will be 1 (blocklist/allowlist).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * Audit ASR text information of the segment
 * @class
 */
class RcbAsr extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the recognized text content of an audio file. **Up to the first 1,000 characters** can be recognized.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return the creation time of the queried task in ISO 8601 format.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    }
}

/**
 * Audio moderation output parameter
 * @class
 */
class AudioResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return whether the moderated content hit the moderation model. Valid values: 0 (**no**), 1 (**yes**).
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the text information generated by recognizing an audio file with ASR. Audio files of up to **5 hours** can be recognized. If this limit is exceeded, an error will be reported by the API.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return the URL where audio segments are stored, which is valid for 1 day.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field is used to return the length of an audio file in seconds.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * This field is used to return the additional information (Extra) in the input parameters. If it is not configured, an empty value will be returned by default.<br>Note: the returned information varies by customer or `Biztype`. If you need to configure this field, submit a ticket or contact the aftersales service for assistance.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * This field is used to return the detailed moderation result of the text generated by recognizing an audio file with ASR. For the specific result, see the detailed description of the `AudioResultDetailLanguageResult` data structure.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * This field is used to return the detailed moan detection result of an audio file. For the specific result, see the detailed description of the `AudioResultDetailMoanResult` data structure.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * This field is used to return the detailed minor language detection result of an audio. For the specific result, see the detailed description of the `AudioResultDetailLanguageResult` data structure.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailLanguageResult> || null}
         */
        this.LanguageResults = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * List of recognized category labels
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RecognitionResult> || null}
         */
        this.RecognitionResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.TextResults) {
            this.TextResults = new Array();
            for (let z in params.TextResults) {
                let obj = new AudioResultDetailTextResult();
                obj.deserialize(params.TextResults[z]);
                this.TextResults.push(obj);
            }
        }

        if (params.MoanResults) {
            this.MoanResults = new Array();
            for (let z in params.MoanResults) {
                let obj = new AudioResultDetailMoanResult();
                obj.deserialize(params.MoanResults[z]);
                this.MoanResults.push(obj);
            }
        }

        if (params.LanguageResults) {
            this.LanguageResults = new Array();
            for (let z in params.LanguageResults) {
                let obj = new AudioResultDetailLanguageResult();
                obj.deserialize(params.LanguageResults[z]);
                this.LanguageResults.push(obj);
            }
        }
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

        if (params.RecognitionResults) {
            this.RecognitionResults = new Array();
            for (let z in params.RecognitionResults) {
                let obj = new RecognitionResult();
                obj.deserialize(params.RecognitionResults[z]);
                this.RecognitionResults.push(obj);
            }
        }

    }
}

/**
 * Audio moan moderation result
 * @class
 */
class AudioResultDetailMoanResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the type of the content to be detected. It is fixed at **Moan** here to call the moan detection feature.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the confidence of moan detection. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the audio is more likely to fall into the category of moan.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the start time of the segment of an audio file under the corresponding moan tag in milliseconds.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * This field is used to return the end time of the segment of an audio file under the corresponding moan tag in milliseconds.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * *This field is in beta test. Stay tuned*
         * @type {string || null}
         */
        this.SubLabelCode = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * This field returns the suggested action according to the check result. <br>Values: `Block`, `Review`, `Pass`.
         * @type {string || null}
         */
        this.Suggestion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

    }
}

/**
 * Task data
 * @class
 */
class TaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Data ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * Service type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task status. Values: `PENDING`, `RUNNING`, `ERROR`, `FINISH`, and `CANCELLED`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Suggestion
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * Media information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * Input information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * Creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TaskLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }

        if (params.InputInfo) {
            let obj = new InputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * Media type
 * @class
 */
class MediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Encoding format
         * @type {string || null}
         */
        this.Codecs = null;

        /**
         * Segment duration during stream detection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Width, in pixels
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height, in pixels
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Cover
         * @type {string || null}
         */
        this.Thumbnail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codecs = 'Codecs' in params ? params.Codecs : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Thumbnail = 'Thumbnail' in params ? params.Thumbnail : null;

    }
}

/**
 * Tag of the audio slice
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value of this parameter varies by `Label`.
When `Label` is `Teenager`, `Name` can be `Teenager`. 
When `Label` is `Gender`, `Name` can be `Male` and `Female`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Confidence score. Value: 1 to 100. 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Start time for the recognition (ms)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for the recognition (ms)
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Information of the audio segment
 * @class
 */
class AudioSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * Capture time.
For VOD files, it indicates the video offset time given in seconds (e.g., 0, 5, 10).
For live files, it indicates a timestamp (e.g., 1594650717).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * Result set
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AudioResult || null}
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
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

        if (params.Result) {
            let obj = new AudioResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

    }
}

/**
 * Position information of image details
 * @class
 */
class ImageResultsResultDetailLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * X-coordinate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y-coordinate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Width
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Rotation angle
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Rotate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

    }
}

/**
 * Result details
 * @class
 */
class ImageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the video content is hit
`0`: No
`1`: Yes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * Hit tag
`Porn`: Pornographic
`Sexy`: Sexy
`Polity`: Political
`Illegal`: Illegal
`Abuse`: Abusive
`Terror`: Violence and terrorism
`Ad`: Advertising
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Suggestion. Values:
`Pass`: You’re suggested to allow the video to pass.
`Review`: You’re suggested to take a manual review.
`Block`: You’re suggested to block the non-compliant video.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Score
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Captured images
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageResultResult> || null}
         */
        this.Results = null;

        /**
         * Image URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Additional field
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ImageResultResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

module.exports = {
    ImageSegments: ImageSegments,
    ImageResultResult: ImageResultResult,
    StorageInfo: StorageInfo,
    BucketInfo: BucketInfo,
    CreateVideoModerationTaskResponse: CreateVideoModerationTaskResponse,
    TaskResult: TaskResult,
    CancelTaskRequest: CancelTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    TaskLabel: TaskLabel,
    ImageResultsResultDetail: ImageResultsResultDetail,
    InputInfo: InputInfo,
    CreateVideoModerationTaskRequest: CreateVideoModerationTaskRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    TaskFilter: TaskFilter,
    RecognitionResult: RecognitionResult,
    CancelTaskResponse: CancelTaskResponse,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    RcbAsr: RcbAsr,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    TaskData: TaskData,
    MediaInfo: MediaInfo,
    Tag: Tag,
    AudioSegments: AudioSegments,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
