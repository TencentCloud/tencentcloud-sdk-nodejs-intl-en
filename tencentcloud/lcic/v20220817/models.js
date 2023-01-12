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
 * CreateRoom request structure.
 * @class
 */
class CreateRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Reserved room start time, in UNIX timestamp format
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Reserved room end time, in UNIX timestamp format
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * LCIC SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Resolution. Valid values: `1`: SD; `2`: HD; `3`: FHD
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * Maximum number of mic-on users (excluding teachers). Value range: [0, 16]	
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * Room subtype. Valid values: `videodoc`: Document + Video; `video`: Video only; `coteaching`: Dual-teacher
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * Teacher ID, which is the `UserId` obtained by the `RegisterUser` API.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * Whether to automatically turn the mic on when the user enters a room. Valid values: `0`: No (default value); `1`: Yes.
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: `0`: No (default value); `1`: Yes.
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * Whether to disable auto recording. Valid values: `0`: No (default); `1`: Yes. If this parameter is `0`, recording will start when the class starts and stops when the class ends.
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * Teacher assistant IDs, which are the `UserId` obtained by the `RegisterUser` API.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * Recording layout
         * @type {number || null}
         */
        this.RecordLayout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RecordLayout = 'RecordLayout' in params ? params.RecordLayout : null;

    }
}

/**
 * SetAppCustomContent request structure.
 * @class
 */
class SetAppCustomContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom content
         * @type {Array.<AppCustomContent> || null}
         */
        this.CustomContent = null;

        /**
         * Application ID
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

        if (params.CustomContent) {
            this.CustomContent = new Array();
            for (let z in params.CustomContent) {
                let obj = new AppCustomContent();
                obj.deserialize(params.CustomContent[z]);
                this.CustomContent.push(obj);
            }
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * UnbindDocumentFromRoom response structure.
 * @class
 */
class UnbindDocumentFromRoomResponse extends  AbstractModel {
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
 * DescribeUser request structure.
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID	
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateDocument response structure.
 * @class
 */
class CreateDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Document ID
         * @type {string || null}
         */
        this.DocumentId = null;

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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoomStatistics request structure.
 * @class
 */
class DescribeRoomStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Current page in pagination, which starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of data entries to return per page. Maximum value: 1000
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * BindDocumentToRoom request structure.
 * @class
 */
class BindDocumentToRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Document ID
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * Binding type. The default value is `0`. The backend passes through this parameter to clients so that the clients can implement business logic based on this parameter.
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * CreateDocument request structure.
 * @class
 */
class CreateDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LCIC SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Document URL	
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * Document name	
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * Document owner ID	
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * Transcoding type. Valid values: `0`: No transcoding required (default); `1`: Documents that need to be transcoded: ppt, pptx, pdf, doc, docx; `2`: Videos that need to be transcoded: mp4, 3pg, mpeg, avi, flv, wmv, rm, h264, etc.; `2`: Audio that needs to be transcoded: mp3, wav, wma, aac, flac, opus
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * Permission. Valid values: `0`: Private document (default); `1`: Public document
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * Document extension
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * Document size, in bytes
         * @type {number || null}
         */
        this.DocumentSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;

    }
}

/**
 * SetAppCustomContent response structure.
 * @class
 */
class SetAppCustomContentResponse extends  AbstractModel {
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
 * LoginOriginId response structure.
 * @class
 */
class LoginOriginIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Login status token returned after successful login or registration. The token is valid for seven days.
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LoginUser response structure.
 * @class
 */
class LoginUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Login status token returned after successful login or registration. The token is valid for seven days.
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoom response structure.
 * @class
 */
class DescribeRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room name	
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Reserved room start time, in UNIX timestamp format	
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Reserved room end time, in UNIX timestamp format	
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Teacher ID	
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * LCIC SdkAppId	
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Resolution. Valid values: `1`: SD; `2`: HD; `3`: FHD	
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * Maximum number of mic-on users (excluding teachers). Value range: [0, 16]	
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * Whether to automatically turn the mic on when the user enters a room. Valid values: `0`: No (default value); `1`: Yes.	
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: `0`: No (default value); `1`: Yes.	
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * Room subtype. Valid values: `videodoc`: Document + Video; `video`: Video only; `coteaching`: Dual-teacher	
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * Whether to disable auto recording. Valid values: `0`: No (default); `1`: Yes. If this parameter is `0`, recording will start when the class starts and stops when the class ends.	
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * Assistant ID list	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * Recording URL. This parameter exists only after a room is ended.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordUrl = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRoom response structure.
 * @class
 */
class DeleteRoomResponse extends  AbstractModel {
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
 * Custom application content
 * @class
 */
class AppCustomContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple scenarios can be set for an application.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * Logo URL
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * Homepage URL, which can be used for redirection
         * @type {string || null}
         */
        this.HomeUrl = null;

        /**
         * Custom JS URL
         * @type {string || null}
         */
        this.JsUrl = null;

        /**
         * Custom CSS URL
         * @type {string || null}
         */
        this.CssUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.HomeUrl = 'HomeUrl' in params ? params.HomeUrl : null;
        this.JsUrl = 'JsUrl' in params ? params.JsUrl : null;
        this.CssUrl = 'CssUrl' in params ? params.CssUrl : null;

    }
}

/**
 * DescribeRoomStatistics response structure.
 * @class
 */
class DescribeRoomStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Peak number of online members
         * @type {number || null}
         */
        this.PeakMemberNumber = null;

        /**
         * Accumulated number of online members
         * @type {number || null}
         */
        this.MemberNumber = null;

        /**
         * Total number of records, including members who entered the room and members who should attend the class but did not
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Member record list
         * @type {Array.<MemberRecord> || null}
         */
        this.MemberRecords = null;

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
        this.PeakMemberNumber = 'PeakMemberNumber' in params ? params.PeakMemberNumber : null;
        this.MemberNumber = 'MemberNumber' in params ? params.MemberNumber : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.MemberRecords) {
            this.MemberRecords = new Array();
            for (let z in params.MemberRecords) {
                let obj = new MemberRecord();
                obj.deserialize(params.MemberRecords[z]);
                this.MemberRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSupervisor response structure.
 * @class
 */
class CreateSupervisorResponse extends  AbstractModel {
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
 * DeleteRoom request structure.
 * @class
 */
class DeleteRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID
         * @type {number || null}
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * RegisterUser response structure.
 * @class
 */
class RegisterUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID	
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Login status token returned after successful login or registration. The token is valid for seven days.	
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApp response structure.
 * @class
 */
class ModifyAppResponse extends  AbstractModel {
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
 * Member record information
 * @class
 */
class MemberRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Online duration, in seconds
         * @type {number || null}
         */
        this.PresentTime = null;

        /**
         * Whether the camera is enabled
         * @type {number || null}
         */
        this.Camera = null;

        /**
         * Whether the mic is enabled
         * @type {number || null}
         */
        this.Mic = null;

        /**
         * Whether the user is muted
         * @type {number || null}
         */
        this.Silence = null;

        /**
         * Number of questions answered by the user
         * @type {number || null}
         */
        this.AnswerQuestions = null;

        /**
         * Number of hand raising times
         * @type {number || null}
         */
        this.HandUps = null;

        /**
         * First time that the user entered the room, in UNIX timestamp format
         * @type {number || null}
         */
        this.FirstJoinTimestamp = null;

        /**
         * Last time that the user left the room, in UNIX timestamp format
         * @type {number || null}
         */
        this.LastQuitTimestamp = null;

        /**
         * Number of rewards received
         * @type {number || null}
         */
        this.Rewords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PresentTime = 'PresentTime' in params ? params.PresentTime : null;
        this.Camera = 'Camera' in params ? params.Camera : null;
        this.Mic = 'Mic' in params ? params.Mic : null;
        this.Silence = 'Silence' in params ? params.Silence : null;
        this.AnswerQuestions = 'AnswerQuestions' in params ? params.AnswerQuestions : null;
        this.HandUps = 'HandUps' in params ? params.HandUps : null;
        this.FirstJoinTimestamp = 'FirstJoinTimestamp' in params ? params.FirstJoinTimestamp : null;
        this.LastQuitTimestamp = 'LastQuitTimestamp' in params ? params.LastQuitTimestamp : null;
        this.Rewords = 'Rewords' in params ? params.Rewords : null;

    }
}

/**
 * ModifyApp request structure.
 * @class
 */
class ModifyAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LCIC SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Callback URL. Currently, only port 80 and port 443 are supported.
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
 * CreateSupervisor request structure.
 * @class
 */
class CreateSupervisorRequest extends  AbstractModel {
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
 * UnbindDocumentFromRoom request structure.
 * @class
 */
class UnbindDocumentFromRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID	
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * Document ID	
         * @type {string || null}
         */
        this.DocumentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * LoginOriginId request structure.
 * @class
 */
class LoginOriginIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LCIC SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * User's ID in the customer system, which should be unique under the same application
         * @type {string || null}
         */
        this.OriginId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

    }
}

/**
 * RegisterUser request structure.
 * @class
 */
class RegisterUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LCIC SdkAppId	
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Username	
         * @type {string || null}
         */
        this.Name = null;

        /**
         * User's ID in the customer system, which should be unique under the same application	
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * User's profile photo	
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * LoginUser request structure.
 * @class
 */
class LoginUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID obtained during registration
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * BindDocumentToRoom response structure.
 * @class
 */
class BindDocumentToRoomResponse extends  AbstractModel {
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
 * CreateRoom response structure.
 * @class
 */
class CreateRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID
         * @type {number || null}
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUser response structure.
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.	
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * User ID	
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Username	
         * @type {string || null}
         */
        this.Name = null;

        /**
         * URL of user profile photo.	
         * @type {string || null}
         */
        this.Avatar = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoom request structure.
 * @class
 */
class DescribeRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Room ID	
         * @type {number || null}
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

module.exports = {
    CreateRoomRequest: CreateRoomRequest,
    SetAppCustomContentRequest: SetAppCustomContentRequest,
    UnbindDocumentFromRoomResponse: UnbindDocumentFromRoomResponse,
    DescribeUserRequest: DescribeUserRequest,
    CreateDocumentResponse: CreateDocumentResponse,
    DescribeRoomStatisticsRequest: DescribeRoomStatisticsRequest,
    BindDocumentToRoomRequest: BindDocumentToRoomRequest,
    CreateDocumentRequest: CreateDocumentRequest,
    SetAppCustomContentResponse: SetAppCustomContentResponse,
    LoginOriginIdResponse: LoginOriginIdResponse,
    LoginUserResponse: LoginUserResponse,
    DescribeRoomResponse: DescribeRoomResponse,
    DeleteRoomResponse: DeleteRoomResponse,
    AppCustomContent: AppCustomContent,
    DescribeRoomStatisticsResponse: DescribeRoomStatisticsResponse,
    CreateSupervisorResponse: CreateSupervisorResponse,
    DeleteRoomRequest: DeleteRoomRequest,
    RegisterUserResponse: RegisterUserResponse,
    ModifyAppResponse: ModifyAppResponse,
    MemberRecord: MemberRecord,
    ModifyAppRequest: ModifyAppRequest,
    CreateSupervisorRequest: CreateSupervisorRequest,
    UnbindDocumentFromRoomRequest: UnbindDocumentFromRoomRequest,
    LoginOriginIdRequest: LoginOriginIdRequest,
    RegisterUserRequest: RegisterUserRequest,
    LoginUserRequest: LoginUserRequest,
    BindDocumentToRoomResponse: BindDocumentToRoomResponse,
    CreateRoomResponse: CreateRoomResponse,
    DescribeUserResponse: DescribeUserResponse,
    DescribeRoomRequest: DescribeRoomRequest,

}
