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
 * ImageModeration request structure.
 * @class
 */
class ImageModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the specific number of the policy, which is used for API scheduling and can be configured in the CMS console. If the `Biztype` parameter is passed in, a moderation policy will be used based on the business scenario; otherwise, the default moderation policy will be used.<br>Note: `Biztype` can contain 3–32 digits, letters, and underscores; different `Biztype` values are associated with different business scenarios and moderation policies, so you need to verify the `Biztype` before calling this API.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field indicates the data ID assigned by you to the object to be detected for easier file identification and management.<br>It **can contain up to 64 letters, digits, and special symbols (_-@#)**.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field indicates the Base64 encoding of the image to be detected. The image **size cannot exceed 5 MB**. **A resolution of 256x256 or higher is recommended**; otherwise, the recognition effect may be affected.<br>Note: **you must enter a value for either this field or `FileUrl`**.
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * URL of the image to moderate. It supports PNG, JPG, JPEG, BMP, GIF AND WEBP files. The file **cannot exceed 5 MB** and the resolution should not below **256*246**. The default timeout period is 3 seconds. Note that **redirection URLs may be blocked by security policies**. In this case, an error message will return. For example, if an HTTP request gets the 302 code, the error `ResourceUnavailable.ImageDownloadError` is returned. <br>**Either `FileUrl` or `FileContent` must be specified. 
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * **For GIF/long image detection only**. This field indicates the GIF frame capturing frequency (the image interval for capturing a frame for detection). For long images, you should round the width:height ratio as the total number of images to be split. The default value is 0, where only the first frame of the GIF image will be detected, and the long image will not be split.<br>Note: the `Interval` and `MaxFrames` parameters need to be used in combination; for example, if `Interval` is `3` and `MaxFrames` is `400`, the GIF/long image will be detected once every two frames for up to 400 frames.
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * **For GIF/long image detection only**. This field indicates the maximum number of frames that can be captured. The default value is 1, where only the first frame of the input GIF image will be detected, and the long image will not be split (which may cause a processing timeout).<br>Note: the `Interval` and `MaxFrames` parameters need to be used in combination; for example, if `Interval` is `3` and `MaxFrames` is `400`, the GIF/long image will be detected once every two frames for up to 400 frames.
         * @type {number || null}
         */
        this.MaxFrames = null;

        /**
         * This field indicates the information of the user that corresponds to the object to be detected. It can be passed in to identify the user involved in the violation.
         * @type {User || null}
         */
        this.User = null;

        /**
         * This field indicates the information of the device that corresponds to the object to be detected. It can be passed in to identify the device involved in the violation.
         * @type {Device || null}
         */
        this.Device = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxFrames = 'MaxFrames' in params ? params.MaxFrames : null;

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

    }
}

/**
 * Label of the identification moderation result
 * @class
 */
class RecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value: `Scene`
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Hit tags under the `Label`
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RecognitionTag> || null}
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
                let obj = new RecognitionTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Returns object detection result details
 * @class
 */
class ObjectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the recognized object scenario result, such as QR code, logo, and image OCR.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * This field is used to return the operation suggestion for the current maliciousness tag. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result, which represents the moderation result suggested by the model. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the detection result for a subtag under the current maliciousness tag, such as *Porn-SexBehavior*.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * This field is used to return the hit score of a subtag under the current maliciousness tag. Value range: **0–100**; for example, *Porn-SexBehavior 99* indicates that the hit score of the *Porn-SexBehavior* tag for the recognized content is 99.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the name of the recognized object.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * This field is used to return the details of the recognized object, such as number, hit tag name, and position coordinates. For more information on the returned value, see the description of the [ObjectDetail](https://intl.cloud.tencent.com/document/api/1125/53274?from_cn_redirect=1#ObjectDetail) data structure.
 
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ObjectDetail> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ObjectDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * This field is used to return the OCR text result details. More text in the image may increase the time it takes the API to return the result.
 * @class
 */
class OcrTextDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the text content recognized by OCR.<br>Note: OCR can recognize text of **up to 5,000 bytes**.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the ID of the custom library for easier custom library management and configuration.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the name of the custom library for easier custom library management and configuration.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * This parameter is used to return the hit keyword under the current tag (label).
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This parameter is used to return the model hit score of the current maliciousness tag. Value range: **0–100**, where a higher value indicates that the current scenario agrees more with the scenario represented by the maliciousness tag.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This parameter is used to return the position (X and Y coordinates of the top-left corner, length, width, and rotation angle) of the OCR detection frame in the image for quick location of the recognized text.
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * This parameter is used to return the confidence of the text OCR result. Valid values: **0** (**the lowest confidence**)–**100** (**the highest confidence**), where a higher value indicates that it is more likely that the image contains the recognized text; for example, *Hello 99* indicates that it is highly likely that the text in the OCR recognition frame is "Hello".
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * This field is used to return the maliciousness subtag that corresponds to the detection result.
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
        this.Text = 'Text' in params ? params.Text : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * Recognition tag information
 * @class
 */
class RecognitionTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name
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
         * Location information. It returns 0 if there is not location information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Location || null}
         */
        this.Location = null;

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

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }

    }
}

/**
 * Object detection result details. When the detection scenario is an object, advertising logo, or QR code, it represents the tag name, tag value, tag score, and position information of the model detection frame.
 * @class
 */
class ObjectDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter is used to return the ID of the recognized object for easier recognition and distinction.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * This parameter is used to return the hit object tag.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This parameter is used to return the value or content of the object tag; for example, when the tag is *QR code (QrCode)*, this field will be the URL of the recognized QR code.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * This parameter is used to return the hit score of the object tag. Valid values: **0–100**; for example, *QrCode 99* indicates that it is highly likely that the recognized content will hit the QR code tag.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the coordinate position (X and Y coordinates of the top-left corner, length, width, and rotation angle) of the object detection frame for quick location of the object information.
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * This parameter is used to return the hit object subtag.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * Returns OCR detection result details
 * @class
 */
class OcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the recognition scenario. Default value: OCR (image OCR).
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * This field is used to return the operation suggestion for the maliciousness tag with the highest priority. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag with the highest priority in the OCR detection result, which represents the moderation result suggested by the model. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the detection result for a subtag under the current tag (Label), such as *Porn-SexBehavior*.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * This field is used to return the confidence under the current tag (Label). Value range: 0 (**the lowest confidence**)–100 (**the highest confidence**), where a higher value indicates that the text is more likely to fall into the category of the current returned tag; for example, *Porn 99* indicates that the text is highly likely to be pornographic, while *Porn 0* indicates that the text is not pornographic.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the details of the OCR recognition result, such as text content, tag, and recognition frame position.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OcrTextDetail> || null}
         */
        this.Details = null;

        /**
         * This field is used to return the text information recognized by OCR.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new OcrTextDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * Returns the details of the custom library/blocklist/allowlist
 * @class
 */
class LibDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the ID of the recognized object for easier recognition and distinction.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * This field is **valid only when `Label` is `Custom` (custom keyword)**. It is used to return the ID of the custom library for easier custom library management and configuration.
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
         * This field is used to return the ID of the recognized image object for easier file management.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return other custom tags to meet the needs in your customized scenarios. It can be skipped if you have no custom needs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * This field is used to return the hit score of the model. Value range: **0–100**; for example, *Porn 99* indicates that the hit score of the porn tag for the recognized content is 99.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * Coordinate
 * @class
 */
class Location extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter is used to return the pixel position of the **abscissa (X) of the top-left corner** of the detection frame. It can be combined with other parameters to uniquely determine the size and position of the detection frame.
         * @type {number || null}
         */
        this.X = null;

        /**
         * This parameter is used to return the pixel position of the **ordinate of the top-left corner** (Y) of the detection frame. It can be combined with other parameters to uniquely determine the size and position of the detection frame.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * This parameter is used to return the **width of the detection frame** (the length starting from the top-left corner and extending to the right on the X axis). It can be combined with other parameters to uniquely determine the size and position of the detection frame.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * This parameter is used to return the **height of the detection frame** (the length starting from the top-left corner and extending down the Y axis). It can be combined with other parameters to uniquely determine the size and position of the detection frame.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * This parameter is used to return the **rotation angle of the detection frame**. Valid values: **0–360** (**degrees**), and the direction is **counterclockwise rotation**. This parameter can be combined with the `X` and `Y` coordinate parameters to uniquely determine the specific position of the detection frame.
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
 * Hit result of the categorization model
 * @class
 */
class LabelResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the scenario result recognized by the model, such as advertising, pornographic, and harmful.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * This field is used to return the operation suggestion for the current maliciousness tag. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the detection result for a subtag under the maliciousness tag, such as *Porn-SexBehavior*.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Confidence score of the under the current label. Value range: 0 (**the lowest confidence**) to 100 (**the highest confidence**). For example, *Porn 99* indicates that the image is highly likely to be pornographic, while *Porn 0* indicates that the image is not pornographic.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the details of the subtag hit by the categorization model, such as number, hit tag name, and score.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LabelDetailItem> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LabelDetailItem();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * Returns the details of the subtag hit by the categorization model
 * @class
 */
class LabelDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the ID of the recognized object for easier recognition and distinction.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * This field is used to return the hit subtag name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * This field is used to return the hit score of the subtag. Value range: **0–100**; for example, *Porn-SexBehavior 99* indicates that the hit score of the *Porn-SexBehavior* tag for the recognized content is 99.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * Indicates the information of the business user's device
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the IP address of the business user's device and supports recording both **IPv4 and IPv6** addresses. It needs to be used together with the `IpType` parameter.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * This field indicates the MAC address of the business user, which makes it easier to identify and manage devices. Its format and value are the same as those of a standard MAC address.
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * *In beta test. Stay tuned.*
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * *In beta test. Stay tuned.*
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * This field indicates the international mobile equipment identity **(IMEI)** number of the business user's device, which can be used to identify each mobile communication device such as mobile phone for easier device identification and management.<br>Note: the format is **15–17 digits**.
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * **For iOS devices**: this field indicates the identifier for advertisers **(IDFA)** of the business user, which is provided by Apple to identify the user and contains a hexadecimal string of 32 digits and letters.<br>
Note: as iOS 14 has been updated by Apple to allow users to manually enable or disable IDFA since 2021, the validity of this string may be reduced.
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * **For iOS devices**: this field indicates the identifier for vendors **(IDFV)** of the business user, which is provided by Apple to identify the app vendor and contains a hexadecimal string of 32 digits and letters. It can be used to uniquely identify a device.
         * @type {string || null}
         */
        this.IDFV = null;

        /**
         * This field indicates the type of the recorded IP address. Valid values: **0** (IPv4 address), **1** (IPv6 address). It needs to be used together with the `IpType` parameter.
         * @type {number || null}
         */
        this.IpType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;
        this.IpType = 'IpType' in params ? params.IpType : null;

    }
}

/**
 * Returns the detailed result of the comparison with the blocklist/allowlist
 * @class
 */
class LibResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the scenario recognition result of the model. Default value: Similar.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * This field is used to return the operation suggestion. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the maliciousness tag in the detection result.<br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
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
         * This field is used to return the recognition score of the image search model. Value range: **0–100**. It indicates the score for the similarity between the moderated image **and the samples in the library**. A higher score indicates that the content is more likely to hit a sample in the library of similar images.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the detailed result of the comparison with the blocklist/allowlist, such as number, library name, and maliciousness tag. For more information on the returned value, see the description of the [LibDetail](https://intl.cloud.tencent.com/document/product/1125/53274?from_cn_redirect=1#LibDetail) data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LibDetail> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LibDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * ImageModeration response structure.
 * @class
 */
class ImageModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field is used to return the operation suggestion for the `Label` tag. When you get the determination result, the returned value indicates the operation suggested by the system. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Block**, **Review**, **Pass**.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field is used to return the **maliciousness tag with the highest priority** in the detection result (LabelResults), which represents the moderation result suggested by the model. We recommend you handle different types of violations and suggestions according to your business needs. <br>Returned values: **Normal**: normal; **Porn**: pornographic; **Abuse**: abusive; **Ad**: advertising; **Custom**: custom type of non-compliant content and other offensive, unsafe, or inappropriate types of content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field is used to return the subtag name under the maliciousness tag with the highest priority hit by the detection result, such as *Porn-SexBehavior*. If no subtag is hit, an empty string will be returned.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Confidence score of the under the current label. Value range: 0 (**the lowest confidence**) to 100 (**the highest confidence**). For example, *Porn 99* indicates that the image is highly likely to be pornographic, while *Porn 0* indicates that the image is not pornographic.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field is used to return the detailed recognition result for the maliciousness tag hit by the categorization model, such as porn, advertising, or any other offensive, unsafe, or inappropriate type of content.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LabelResult> || null}
         */
        this.LabelResults = null;

        /**
         * This field is used to return the detailed detection result of the object detection model, including the tag name hit by the content such as object, advertising logo, or QR code, tag score, coordinate information, scenario recognition result, and operation suggestion. For more information on the returned value, see the description of the `ObjectResults` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ObjectResult> || null}
         */
        this.ObjectResults = null;

        /**
         * This field is used to return the detailed text OCR result, including the text coordinate information, text recognition result, and operation suggestion. For more information on the returned value, see the description of the `OcrResults` data structure.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OcrResult> || null}
         */
        this.OcrResults = null;

        /**
         * This field is used to return the result of recognition based on image risk libraries (blocklist and allowlist). For more information on the returned value, see the description of the `LibResults` data structure.<br>Note: currently, **you cannot customize image risk libraries**.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LibResult> || null}
         */
        this.LibResults = null;

        /**
         * This field is used to return the `DataId` in the request parameters that correspond to the detected object.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field is used to return the `BizType` in the request parameters that correspond to the detected object.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field is used to return the additional information (Extra) configured based on your needs. If it is not configured, an empty value will be returned by default.<br>Note: the returned information varies by customer or `Biztype`. If you need to configure this field, submit a ticket or contact the aftersales service for assistance.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * This field is used to return the MD5 checksum of the detected object for easier verification of the file integrity.
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * Image recognition result, including the hit tags, confidence and location.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RecognitionResult> || null}
         */
        this.RecognitionResults = null;

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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.LabelResults) {
            this.LabelResults = new Array();
            for (let z in params.LabelResults) {
                let obj = new LabelResult();
                obj.deserialize(params.LabelResults[z]);
                this.LabelResults.push(obj);
            }
        }

        if (params.ObjectResults) {
            this.ObjectResults = new Array();
            for (let z in params.ObjectResults) {
                let obj = new ObjectResult();
                obj.deserialize(params.ObjectResults[z]);
                this.ObjectResults.push(obj);
            }
        }

        if (params.OcrResults) {
            this.OcrResults = new Array();
            for (let z in params.OcrResults) {
                let obj = new OcrResult();
                obj.deserialize(params.OcrResults[z]);
                this.OcrResults.push(obj);
            }
        }

        if (params.LibResults) {
            this.LibResults = new Array();
            for (let z in params.LibResults) {
                let obj = new LibResult();
                obj.deserialize(params.LibResults[z]);
                this.LibResults.push(obj);
            }
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;

        if (params.RecognitionResults) {
            this.RecognitionResults = new Array();
            for (let z in params.RecognitionResults) {
                let obj = new RecognitionResult();
                obj.deserialize(params.RecognitionResults[z]);
                this.RecognitionResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Indicates the information of the business user's account
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the business user ID. After it is specified, the system can optimize the moderation result according to the violation history to facilitate determination when a suspicious violation risk exists.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * This field indicates the nickname of the business user's account.
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * This field indicates the account type of the business user ID.<br>
This field can be used together with the ID parameter (UserId) to uniquely identify the account.
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * This field indicates the gender of the business user's account.<br>
Valid values: **0** (default value): unknown; **1** (male); **2** (female).
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * This field indicates the age of the business user's account.<br>
Valid values: integers between **0** (default value, which indicates unknown) and **custom age limit**.
         * @type {number || null}
         */
        this.Age = null;

        /**
         * This field indicates the level of the business user's account.<br>
Valid values: **0** (default value): unknown; **1**: low level; **2**: medium level; **3**: high level. Currently, **the level is not customizable**.
         * @type {number || null}
         */
        this.Level = null;

        /**
         * This field indicates the mobile number of the business user's account. It supports recording mobile numbers across the world.<br>
Note: you need to use a consistent mobile number format, such as area code format (086/+86).
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * This field indicates the profile of the business user. It can contain **up to 5,000 letters and special symbols**.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * This field indicates the access URL of the business user's profile photo in PNG, JPG, JPEG, BMP, GIF, or WEBP format.<br>Note: the profile photo **cannot exceed 5 MB in size**. **A resolution of 256x256 or higher** is recommended. The image download time should be limited to 3 seconds; otherwise, a download timeout will be returned.
         * @type {string || null}
         */
        this.HeadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.HeadUrl = 'HeadUrl' in params ? params.HeadUrl : null;

    }
}

module.exports = {
    ImageModerationRequest: ImageModerationRequest,
    RecognitionResult: RecognitionResult,
    ObjectResult: ObjectResult,
    OcrTextDetail: OcrTextDetail,
    RecognitionTag: RecognitionTag,
    ObjectDetail: ObjectDetail,
    OcrResult: OcrResult,
    LibDetail: LibDetail,
    Location: Location,
    LabelResult: LabelResult,
    LabelDetailItem: LabelDetailItem,
    Device: Device,
    LibResult: LibResult,
    ImageModerationResponse: ImageModerationResponse,
    User: User,

}
