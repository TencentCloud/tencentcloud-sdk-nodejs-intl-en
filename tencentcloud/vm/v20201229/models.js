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
         * This field is used to return the frame capturing time of a video segment in seconds. For video on demand files, this parameter indicates the time offset of the captured image from the video, such as 0 (no offset), 5 (5 seconds after the start of the video), and 10 (10 seconds after the start of the video). For live video stream files, this parameter returns the Unix timestamp of the image, such as `1594650717`.
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * This field is used to return the specific moderation result of a frame captured from a video segment. For details, see the description of the `ImageResult` data structure.
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
         * This field is used to return the maliciousness scenario in the detection result. Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **AppLogo**: advertising logo; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * This parameter indicates whether the moderated content hit a maliciousness tag. Valid values: 0 (**no**), 1 (**yes**).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the detection result for a subtag under the maliciousness tag, such as *Porn-SexBehavior*.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn-SexBehavior 99* indicates that the text is highly likely to fall into the category of content involving sexual behaviors.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the list of specific object names hit by the moderated image in a sensitive scenario.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * This field is used to return the OCR result of an image. OCR can recognize text of **up to 5,000 bytes**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return other detailed information of the image moderation sub-result, such as text position and custom library. For the detailed returned content, see the description of the `ImageResultsResultDetail` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This field indicates the file access type. Valid values: **URL** (resource link), **COS** (Tencent Cloud COS). It should correspond to the access type passed in and can be used for strict verification and quick identification of the access address. If you don't pass in this parameter, the default value will be `URL`, and the system will automatically determine the access address type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field indicates the link address for file access in standard URL format.<br>Note: when `Type` is `URL`, this field will not be empty. You must pass in either this parameter or the `BucketInfo` parameter.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field indicates the Tencent Cloud bucket information for file access.<br>Note: when `Type` is `COS`, this field will not be empty. You must pass in either this parameter or the `Url` parameter.
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
See the basic concepts at https://intl.cloud.tencent.com/document/product/436/44352?from_cn_redirect=1
 * @class
 */
class BucketInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates a bucket name in Tencent Cloud COS. For more information on buckets, see [Basic Concepts](https://intl.cloud.tencent.com/document/product/436/44352?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * This field indicates a region where a Tencent Cloud managed data center is deployed. COS data is stored in buckets in these regions.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * This field indicates an object key in Tencent Cloud COS. An object is stored in a bucket as a basic storage unit. You can manage objects through the Tencent Cloud console, API, or SDK. For more information on objects, see [Object Overview](https://intl.cloud.tencent.com/document/product/436/13324?from_cn_redirect=1).
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
         * This field is used to return the task creation result. For the specific output content, see the detailed description of the `TaskResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

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
         * This field is used to return the `DataId` passed in within the `TaskInput` structure when a video moderation task is created. It is used to identify the specific moderation task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is used to return the ID of a video moderation task for identification, query, and management of moderation tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * This field is used to return the task creation status. If `OK` is returned, the task has been created successfully; if another value is returned, refer to the common error codes.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * **This field will take effect only when the returned value of `Code` is an error code**. It is used to return the error message.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This field indicates the task ID (in the `Results` parameter) returned after a video moderation task is created. It is used to identify the moderation task to be canceled.
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
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * This field is used to return the data ID parameter passed in when the video moderation API is called for easier data identification and management.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is used to return the `BizType` parameter passed in when the video moderation API is called for easier data identification and management.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field is used to return the task name in the `TaskInput` parameter passed in when the video moderation API is called for easier task identification and management.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is used to return the task status of the queried content.
<br>Valid values: **FINISH** (task completed), **PENDING** (task pending), **RUNNING** (task in progress), **ERROR** (task error), **CANCELLED** (task canceled).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * This field is used to return the type of video for moderation. Valid values: `VIDEO` (video on demand), `LIVE_VIDEO` (video live streaming). Default value: `VIDEO`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field is used to return the operation suggestion for the maliciousness tag. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Values: `Normal`: normal; `Porn`: pornographic; `Abuse`: abusive; `Ad`: advertising; `Custom`: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * This field is used to return the details of the input media file, including encoding/decoding formats and segment length. For details, see the description of the `MediaInfo` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * This field is used to return the media content information of the moderation service, mainly including the input file type and access URL.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * This field is used to return the creation time of the queried task in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * This field is used to return the last update time of the queried task in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * This field is used to return the moderation result of the frames captured from the video. For the detailed returned content, see the description of the `ImageSegments` data structure.<br>Note: the data is valid for 24 hours. To extend the storage period, set it in the configured COS bucket.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageSegments> || null}
         */
        this.ImageSegments = null;

        /**
         * This field is used to return the moderation result of the audio in the video. For the detailed returned content, see the description of the `AudioSegments` data structure.<br>Note: the data is valid for 24 hours. To extend the storage period, set it in the configured COS bucket.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * When the task status is `Error`, the type of the error will be returned. Valid values: **DECODE_ERROR**: decoding failed (the input resource may contain video that cannot be decoded).
**URL_ERROR**: download address verification failed.
**TIMEOUT_ERROR**: processing timed out. When the task status is not `Error`, null will be returned by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * If the task status is `Error`, this field will return the error message; otherwise, null will be returned by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorDescription = null;

        /**
         * If the recognition result is normal, this parameter is returned with the value `Normal`. If malicious content is recognized, the tag with the highest priority in the result of `Labels` is returned.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Label = null;

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
         * This field is optional and indicates the data ID assigned by you to the object to be detected for easier file identification and management.<br>It **can contain up to 64 letters, digits, and special symbols (_-@#)**.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is optional and indicates the name of a moderation task for subsequent query and management of moderation tasks.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is required and indicates the access parameter of the moderated file, which is used to get the moderated media file and contains the access type and address.
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
         * This field indicates the task ID (in the `Results` parameter) returned after a video moderation task is created. It is used to identify the moderation task for which to query the details.
<br>Note: the query API can query up to **20 tasks at a time**.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * This boolean field indicates whether to display all video segments. Valid values: True (yes), False (display only video segments that hit the moderation rule). Default value: False.
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
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the operation suggestion for the current tag (Label). When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the confidence under the current tag (Label). Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic, while *Porn 0* indicates that the text is not pornographic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
         * This field is used to return the task name in the `TaskInput` parameter passed in when the video moderation API is called for easier task identification and management.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is used to return the OCR result of an image. OCR can recognize text of **up to 5,000 bytes**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return the detailed position information of the image moderation sub-result, such as coordinates, size, and rotation angle. For the detailed returned content, see the description of the `ImageResultsResultDetailLocation` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ImageResultsResultDetailLocation || null}
         */
        this.Location = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the ID of the custom library for easier custom library management and configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the name of the custom library for easier custom library management and configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * This field is used to return the keyword information hit by the detected text and indicate the specific cause of text non-compliance (such as *Friend me*). This parameter may have multiple returned values representing multiple hit keywords. If the returned value is empty, but `Score` is not empty, the maliciousness tag (Label) that corresponds to the recognition result derives from the returned value determined by the semantic model.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the detection result for a subtag under the maliciousness tag, such as *Porn-SexBehavior*.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This field indicates the file access type. Valid values: **URL** (resource link), **COS** (Tencent Cloud COS).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field indicates the link address for file access in standard URL format.<br>Note: when `Type` is `URL`, this field will not be empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field indicates the Tencent Cloud bucket information for file access.<br>Note: when `Type` is `COS`, this field will not be empty.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This parameter is used to pass in the task type of a moderation task. Valid values: **VIDEO** (video on demand), **LIVE_VIDEO** (video live streaming).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field indicates the input video moderation task information. For the specific input content, see the detailed description of the `TaskInput` data structure.<br>Note: you can create up to **10 tasks** at a time.
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

        /**
         * This field indicates the specific number of the policy, which is used for API scheduling and can be configured in the CMS console. If the `Biztype` parameter is passed in, a moderation policy will be used based on the business scenario; otherwise, the default moderation policy will be used.<br>Note: `Biztype` can contain 3–32 digits, letters, and underscores; different `Biztype` values are associated with different business scenarios and moderation policies, so you need to verify the `Biztype` before calling this API.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field is optional and indicates the key information of the callback signature, which is used to ensure the data security. The signature algorithm is to add the `X-Signature` field to the returned HTTP header, whose value is the SHA256-encoded hex string of `seed` + `body` . After receiving the callback data, you can calculate `X-Signature` by using **sha256(seed + body)** based on the returned `body` for verification.<br>For specific use cases, see [Signature Algorithm v3](https://intl.cloud.tencent.com/document/product/1265/51885?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Seed = null;

        /**
         * This field is optional and indicates the address for receiving the moderation information callback in the default format of URL. After it is configured successfully, the non-compliant audio/video segments generated during moderation will be sent through this API. For the format of the returned callback content, see [Sample Callback Signature](https://intl.cloud.tencent.com/document/product/1265/51879?from_cn_redirect=1#.E7.A4.BA.E4.BE.8B2-.E5.9B.9E.E8.B0.83.E7.AD.BE.E5.90.8D.E7.A4.BA.E4.BE.8B) <br>Note: by default, audio segments are captured at intervals of **15 seconds**, and video frames are captured at intervals of **5 seconds**. If you configure the capturing interval, segments will be returned according to the configuration.
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * This parameter is optional and used to pass in the priority of a moderation task. When you have multiple tasks in the queue, you can use this parameter to control their priorities for processing the queue jumping logic. **Default value: 0**.
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
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
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
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Total = null;

        /**
         * This field is used to return the detailed data of the tasks on the current page. For the specific output content, see the detailed description of the `TaskData` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskData> || null}
         */
        this.Data = null;

        /**
         * This field is used to return the `Token` information used during pagination. It is automatically generated by the system and will be passed to the next generated page for easy and fast pagination. When you turn to the last page, this field will be empty.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PageToken = null;

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
         * This field is used to return the language information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This parameter is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the audio is more likely to fall into the category of the current returned language tag;
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This parameter is used to return the start time of the segment of an audio file under the corresponding language tag in milliseconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * This parameter is used to return the end time of the segment of an audio file under the corresponding language tag in milliseconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * *This field is in beta test. Stay tuned*
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Task filter
 * @class
 */
class TaskFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to pass in the business type of a task as a filter. `Biztype` is the specific number of the policy, which is used for API scheduling and can be configured in the CMS console. Different `Biztype` values are associated with different business scenarios and moderation policies, so you need to verify the `Biztype` before calling this API. `Biztype` can contain 3–32 digits, letters, and underscores.<br>Note: when this parameter is not passed in, tasks will not be filtered by business type by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BizType = null;

        /**
         * This field is used to pass in the type of a video moderation task as a filter. Valid values: **VIDEO** (video on demand moderation), **AUDIO** (audio on demand moderation), **LIVE_VIDEO** (video live streaming moderation), **LIVE_AUDIO** (audio live streaming moderation).<br>Note: when this parameter is not passed in, tasks will not be filtered by task type by default.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field is used to pass in the operation suggestion of a video moderation task as a filter. Valid values: **Block**, **Review**, **Pass**.<br>Note: when this parameter is not passed in, tasks will not be filtered by operation suggestion by default.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to pass in the status of a moderation task as a filter. Valid values: **FINISH** (task completed), **PENDING** (task pending), **RUNNING** (task in progress), **ERROR** (task error), **CANCELLED** (task canceled).<br>Note: when this parameter is not passed in, tasks will not be filtered by task status by default.
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
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of recognized category labels
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * ASR-Based audio moderation result
 * @class
 */
class AudioResultDetailTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the keyword information hit by the text content recognized with ASR and indicate the specific cause of content non-compliance (such as "Friend me on WeChat"). This parameter may have multiple returned values representing multiple hit keywords. If the returned value is empty, but `Score` is not empty, the maliciousness tag (Label) that corresponds to the recognition result derives from the returned value determined by the semantic model.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the ID of the custom library for easier custom library management and configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the name of the custom library for easier custom library management and configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the dictionary type of a custom keyword. Valid values: **1** (blocklist/allowlist), **2** (custom keyword dictionary). If no custom keyword dictionary is configured, the default value will be 1 (blocklist/allowlist).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the text information generated by recognizing an audio file with ASR. Audio files of up to **5 hours** can be recognized. If this limit is exceeded, an error will be reported by the API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return the URL where audio segments are stored, which is valid for 1 day.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field is used to return the length of an audio file in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * This field is used to return the additional information (Extra) in the input parameters. If it is not configured, an empty value will be returned by default.<br>Note: the returned information varies by customer or `Biztype`. If you need to configure this field, submit a ticket or contact the aftersales service for assistance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * This field is used to return the detailed moderation result of the text generated by recognizing an audio file with ASR. For the specific result, see the detailed description of the `AudioResultDetailLanguageResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * This field is used to return the detailed moan detection result of an audio file. For the specific result, see the detailed description of the `AudioResultDetailMoanResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * This field is used to return the detailed minor language detection result of an audio. For the specific result, see the detailed description of the `AudioResultDetailLanguageResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioResultDetailLanguageResult> || null}
         */
        this.LanguageResults = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * List of recognized category labels
Note: This field may return `null`, indicating that no valid value can be obtained.
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
Note: this field may return null, indicating that no valid values can be obtained.
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
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
         * This field is used to return the ID of the video moderation task data for subsequent query and management of moderation tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is used to return the ID of a video moderation task for identification, query, and management of moderation tasks.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * This field is used to return the task status of the queried content.
<br>Valid values: **FINISH** (task completed), **PENDING** (task pending), **RUNNING** (task in progress), **ERROR** (task error), **CANCELLED** (task canceled).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * This field is used to return the name of a video moderation task for subsequent query and management of moderation tasks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is used to return the `BizType` parameter passed in when the video moderation API is called for easier data identification and management.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field is used to return the audio moderation type passed in when the audio moderation API is called. Valid values: **VIDEO** (video on demand), **LIVE_VIDEO** (video live streaming). Default value: VIDEO.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This field is used to return the operation suggestion for the maliciousness tag. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * This field is used to return the details of the input media file, including codec and segment length. For details, see the description of the `MediaInfo` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * This field is used to return the creation time of the queried task in ISO 8601 format.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * This field is used to return the last update time of the queried task in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
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
         * This field is used to return the segment length of the input video stream in seconds. It is **5 seconds by default** and is customizable.<br>Note: this field will take effect only when the moderated file is streaming media. If it returns 0, no valid value has been obtained.
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
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Confidence rate. Value: 1 to 100. 
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Start time for the recognition (ms)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time for the recognition (ms)
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Returns audio segment moderation result
 * @class
 */
class AudioSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the start time of an audio segment in seconds. For audio on demand files, this parameter indicates the time offset of the audio from the complete audio track, such as 0 (no offset), 5 (5 seconds after the start of the audio track), and 10 (10 seconds after the start of the audio track). For live audio stream files, this parameter returns the Unix timestamp of the start of the audio segment, such as `1594650717`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * This field is used to return the specific moderation result of an audio segment. For details, see the description of the `AudioResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This parameter is used to indicate the pixel position of the **abscissa (X)** of the top-left corner of the OCR detection frame. It can be combined with other parameters to uniquely determine the size and position of the detection frame.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.X = null;

        /**
         * This parameter is used to indicate the pixel position of the **ordinate (Y)** of the top-left corner of the OCR detection frame. It can be combined with other parameters to uniquely determine the size and position of the detection frame.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * This parameter is used to indicate the **width of the OCR detection frame** (the length starting from the top-left corner and extending to the right on the X axis). It can be combined with other parameters to uniquely determine the size and position of the detection frame.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * This parameter is used to indicate the **height of the OCR detection frame** (the length starting from the top-left corner and extending down the Y axis). It can be combined with other parameters to uniquely determine the size and position of the detection frame.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * This parameter is used to indicate the **rotation angle of the OCR detection frame**. Valid values: **0–360** (**degrees**), and the direction is **counterclockwise rotation**. This parameter can be combined with the `X` and `Y` coordinate parameters to uniquely determine the specific position of the detection frame.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * This parameter indicates whether the moderated content hit a maliciousness tag. Valid values: 0 (**no**), 1 (**yes**).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the suggested operation.<br>
Returned values: **Block**, **Review**, **Pass**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the confidence under the current tag. Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn-SexBehavior 99* indicates that the text is highly likely to fall into the category of content involving sexual behaviors.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the sub-result of the image moderation result. For details, see the description of the `ImageResultResult` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ImageResultResult> || null}
         */
        this.Results = null;

        /**
         * This field is used to return the access URL of the moderation result. Supported image formats include PNG, JPG, JPEG, BMP, GIF, and WEBP.<br>Note: the data **is valid for 12 hours by default**. If you need a longer storage period, configure it in the COS bucket where the data is stored.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This field is used to return the additional information (Extra) in the input parameters. If it is not configured, an empty value will be returned by default.<br>Note: the returned information varies by customer or `Biztype`. If you need to configure this field, submit a ticket or contact the aftersales service for assistance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * This field is used to return a subtag under the current tag (Lable).
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    TaskData: TaskData,
    MediaInfo: MediaInfo,
    Tag: Tag,
    AudioSegments: AudioSegments,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
