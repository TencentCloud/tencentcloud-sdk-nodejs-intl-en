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
         * 	Resolution. Valid values: 1: SD; 2: HD; 3: FHD
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * Maximum number of mic-on users (excluding teachers). Value range: [0, 16]
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * The room subtype. Valid values: videodoc: Document + Video; video: Video only.
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * The user ID of the teacher. User IDs are returned by the user registration APIs. The user specified will have teacher permissions in the room created.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * Whether to automatically turn the mic on when the user enters a room. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to disconnect communication after audio/video permissions are revoked. Valid values: `0` (default): Yes; `1`: No.
         * @type {number || null}
         */
        this.TurnOffMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * Whether to disable auto recording. Valid values: 0: No (default); 1: Yes. If this parameter is 0, recording will start when the class starts and stops when the class ends.
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * The user IDs of the teaching assistants. User IDs are returned by the user registration APIs. The users specified will have teaching assistant permissions in the room created.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * The number of RTC users.
         * @type {number || null}
         */
        this.RTCAudienceNumber = null;

        /**
         * The audience type.
         * @type {number || null}
         */
        this.AudienceType = null;

        /**
         * Recording layout
         * @type {number || null}
         */
        this.RecordLayout = null;

        /**
         * The ID of the group to bind. If you specify this parameter, only members of the group can enter this room.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether the teacher/teaching assistant can control students' cameras/microphones without the students' consent. Valid values: 
`0` (default): No (consent required)
`1`: Yes (no consent required)
         * @type {number || null}
         */
        this.EnableDirectControl = null;

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
        this.TurnOffMic = 'TurnOffMic' in params ? params.TurnOffMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RTCAudienceNumber = 'RTCAudienceNumber' in params ? params.RTCAudienceNumber : null;
        this.AudienceType = 'AudienceType' in params ? params.AudienceType : null;
        this.RecordLayout = 'RecordLayout' in params ? params.RecordLayout : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableDirectControl = 'EnableDirectControl' in params ? params.EnableDirectControl : null;

    }
}

/**
 * DescribeQuestionList request structure.
 * @class
 */
class DescribeQuestionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The page to return records from. Pagination starts from 1, which is also the default value of this parameter.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The page to return records from. Pagination starts from 1, which is also the default value of this parameter.
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
 * ModifyRoom response structure.
 * @class
 */
class ModifyRoomResponse extends  AbstractModel {
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
 * GetWatermark response structure.
 * @class
 */
class GetWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The watermark settings for the teacher’s video. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WatermarkConfig || null}
         */
        this.TeacherLogo = null;

        /**
         * The watermark settings for the whiteboard. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WatermarkConfig || null}
         */
        this.BoardLogo = null;

        /**
         * The background image. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BackgroundPictureConfig || null}
         */
        this.BackgroundPicture = null;

        /**
         * The watermark text. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TextMarkConfig || null}
         */
        this.Text = null;

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

        if (params.TeacherLogo) {
            let obj = new WatermarkConfig();
            obj.deserialize(params.TeacherLogo)
            this.TeacherLogo = obj;
        }

        if (params.BoardLogo) {
            let obj = new WatermarkConfig();
            obj.deserialize(params.BoardLogo)
            this.BoardLogo = obj;
        }

        if (params.BackgroundPicture) {
            let obj = new BackgroundPictureConfig();
            obj.deserialize(params.BackgroundPicture)
            this.BackgroundPicture = obj;
        }

        if (params.Text) {
            let obj = new TextMarkConfig();
            obj.deserialize(params.Text)
            this.Text = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSupervisor request structure.
 * @class
 */
class DeleteSupervisorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The user IDs.
         * @type {Array.<string> || null}
         */
        this.Users = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Users = 'Users' in params ? params.Users : null;

    }
}

/**
 * DescribeSupervisors response structure.
 * @class
 */
class DescribeSupervisorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of spectators.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The current page number.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The number of records on the current page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * A list of the spectators.
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

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
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KickUserFromRoom response structure.
 * @class
 */
class KickUserFromRoomResponse extends  AbstractModel {
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
 * BatchDeleteRecord request structure.
 * @class
 */
class BatchDeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room IDs.
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

        /**
         * The SDKAppID assigned by LCIC.
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
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * BatchRegister request structure.
 * @class
 */
class BatchRegisterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the users to register.
         * @type {Array.<BatchUserRequest> || null}
         */
        this.Users = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new BatchUserRequest();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }

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
 * ModifyUserProfile request structure.
 * @class
 */
class ModifyUserProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the user whose profile will be modified.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The new username to use.
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * The URL of the new profile photo.
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * CreateGroupWithMembers request structure.
 * @class
 */
class CreateGroupWithMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The user ID of the teacher.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * The group members. Array length limit: 200.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeDocumentsByRoom request structure.
 * @class
 */
class DescribeDocumentsByRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The page to return records from. Pagination starts from 1, which is also the default value of this parameter.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records to return per page. The maximum value can be 1000. The default value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The document access type. [0]: The private documents of the owner. [1]: The public documents of the owner. [0,1]: The private and public documents of the owner. [2]: The private and public documents of all users (including the owner). Default value: [2].
         * @type {Array.<number> || null}
         */
        this.Permission = null;

        /**
         * The user ID of the document owner. If you do not specify this, the information of all documents under the application will be returned.
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * BatchCreateGroupWithMembers response structure.
 * @class
 */
class BatchCreateGroupWithMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the groups created, which are in the same order as the elements in the request parameter `GroupBaseInfos.N`.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

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
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRoomEvent response structure.
 * @class
 */
class GetRoomEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of events for the room. The value of this parameter is not affected by `keyword`.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The event details, including the type and time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EventInfo> || null}
         */
        this.Events = null;

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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new EventInfo();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchCreateRoom response structure.
 * @class
 */
class BatchCreateRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the rooms created, which are in the same order as they are passed in.
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

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
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Member record information
Used by actions: DescribeCurrentMemberList, DescribeRoomStatistics.
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

        /**
         * The user’s IP address.
         * @type {string || null}
         */
        this.IPAddress = null;

        /**
         * The user’s location.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * The user’s device type. 0: Unknown; 1: Windows; 2: macOS; 3: Android; 4: iOS; 5: Web; 6: Mobile webpage; 7: Weixin Mini Program.
         * @type {number || null}
         */
        this.Device = null;

        /**
         * The number of times a user turned their mic on.
         * @type {number || null}
         */
        this.PerMemberMicCount = null;

        /**
         * The number of messages sent by a user.
         * @type {number || null}
         */
        this.PerMemberMessageCount = null;

        /**
         * The user role. `0`: Student; `1`: Teacher; `2`: Teaching Assistant; `3`: Spectator.
         * @type {number || null}
         */
        this.Role = null;

        /**
         * The class number.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The sub-class number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubGroupId = null;

        /**
         * Whether the user is on the stage.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Stage = null;

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
        this.IPAddress = 'IPAddress' in params ? params.IPAddress : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.PerMemberMicCount = 'PerMemberMicCount' in params ? params.PerMemberMicCount : null;
        this.PerMemberMessageCount = 'PerMemberMessageCount' in params ? params.PerMemberMessageCount : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SubGroupId = 'SubGroupId' in params ? params.SubGroupId : null;
        this.Stage = 'Stage' in params ? params.Stage : null;

    }
}

/**
 * DeleteAppCustomContent request structure.
 * @class
 */
class DeleteAppCustomContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The custom elements (for which a scene has been configured) to delete. If this is empty, all custom elements will be deleted.
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;

    }
}

/**
 * BatchAddGroupMember response structure.
 * @class
 */
class BatchAddGroupMemberResponse extends  AbstractModel {
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
 * ModifyUserProfile response structure.
 * @class
 */
class ModifyUserProfileResponse extends  AbstractModel {
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
 * BatchRegister response structure.
 * @class
 */
class BatchRegisterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the successfully registered users. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BatchUserInfo> || null}
         */
        this.Users = null;

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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new BatchUserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateGroupWithSubGroup request structure.
 * @class
 */
class CreateGroupWithSubGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group name after merging.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The IDs of the groups to merge. Duplicate group IDs are not allowed. Array length limit: 40.
         * @type {Array.<string> || null}
         */
        this.SubGroupIds = null;

        /**
         * The user ID of the teacher.
         * @type {string || null}
         */
        this.TeacherId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

    }
}

/**
 * The room list.
 * @class
 */
class RoomItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The room ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The room status. `0`: Not started; `1`: Started; `2`: Ended.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The scheduled start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The scheduled end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The actual start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealStartTime = null;

        /**
         * The actual end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealEndTime = null;

        /**
         * The resolution. `1`: SD.
`2`: HD
`3`: FHD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * The maximum number of mic-on users allowed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRTCMember = null;

        /**
         * The URL of the room's recording. This parameter has been deprecated. Please use `RecordUrl` instead.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReplayUrl = null;

        /**
         * The recording URL (HTTPS), which is generated only after a room ends.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordUrl = null;

        /**
         * The maximum number of users allowed (including teachers) in the room. The default value is `0`, which indicates that no limit is set. 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * Whether the students' consent is required to control their cameras/microphones.
Note: This field may return null, indicating that no valid value was found.
         * @type {number || null}
         */
        this.EnableDirectControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RealStartTime = 'RealStartTime' in params ? params.RealStartTime : null;
        this.RealEndTime = 'RealEndTime' in params ? params.RealEndTime : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxRTCMember = 'MaxRTCMember' in params ? params.MaxRTCMember : null;
        this.ReplayUrl = 'ReplayUrl' in params ? params.ReplayUrl : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.EnableDirectControl = 'EnableDirectControl' in params ? params.EnableDirectControl : null;

    }
}

/**
 * SetWatermark request structure.
 * @class
 */
class SetWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The URL of the watermark for the teacher’s video. If you pass in an empty string, the teacher’s video will not have a watermark.
         * @type {string || null}
         */
        this.TeacherUrl = null;

        /**
         * The URL of the watermark for the whiteboard. If you pass in an empty string, the whiteboard video will not have a watermark.
         * @type {string || null}
         */
        this.BoardUrl = null;

        /**
         * The image displayed when there is no video. If you pass in an empty string, no images will be displayed.
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * The width of the whiteboard’s watermark, which is expressed as a percentage of the video width. The value range is 0-100, and the default value is 0.
         * @type {number || null}
         */
        this.BoardW = null;

        /**
         * The height of the whiteboard’s watermark, which is expressed as a percentage of the video height. The value range is 0-100, and the default value is 0.
         * @type {number || null}
         */
        this.BoardH = null;

        /**
         * The horizontal offset of the whiteboard’s watermark, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle horizontally. Value range: 0-100.
         * @type {number || null}
         */
        this.BoardX = null;

        /**
         * The vertical offset of the whiteboard’s watermark, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle vertically. Value range: 0-100.
         * @type {number || null}
         */
        this.BoardY = null;

        /**
         * The width of the watermark for the teacher’s video, which is expressed as a percentage of the video width. The value range is 0-100, and the default value is 0.
         * @type {number || null}
         */
        this.TeacherW = null;

        /**
         * The height of the watermark for the teacher’s video, which is expressed as a percentage of the video height. The value range is 0-100, and the default value is 0.
         * @type {number || null}
         */
        this.TeacherH = null;

        /**
         * The horizontal offset of the watermark for the teacher’s video, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle horizontally. Value range: 0-100.
         * @type {number || null}
         */
        this.TeacherX = null;

        /**
         * The vertical offset of the watermark for the teacher’s video, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle vertically. Value range: 0-100.
         * @type {number || null}
         */
        this.TeacherY = null;

        /**
         * The watermark text. If you pass in an empty string, there will be no text.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The watermark text color.
         * @type {string || null}
         */
        this.TextColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherUrl = 'TeacherUrl' in params ? params.TeacherUrl : null;
        this.BoardUrl = 'BoardUrl' in params ? params.BoardUrl : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.BoardW = 'BoardW' in params ? params.BoardW : null;
        this.BoardH = 'BoardH' in params ? params.BoardH : null;
        this.BoardX = 'BoardX' in params ? params.BoardX : null;
        this.BoardY = 'BoardY' in params ? params.BoardY : null;
        this.TeacherW = 'TeacherW' in params ? params.TeacherW : null;
        this.TeacherH = 'TeacherH' in params ? params.TeacherH : null;
        this.TeacherX = 'TeacherX' in params ? params.TeacherX : null;
        this.TeacherY = 'TeacherY' in params ? params.TeacherY : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.TextColor = 'TextColor' in params ? params.TextColor : null;

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

/**
 * BatchDescribeDocument request structure.
 * @class
 */
class BatchDescribeDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The page to return records from. Pagination starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records per page. The value of this parameter cannot exceed `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The courseware access. [0]: The private courseware of the specified user (`Owner`) will be returned; [1]: The public courseware of the specified user will be returned; [0,1]: Both the private and public courseware of the specified user will be returned; [2]: The private courseware of the specified user and the public courseware of all users (including `Owner`) will be returned.
         * @type {Array.<number> || null}
         */
        this.Permission = null;

        /**
         * The user ID of the courseware owner. If you do not specify this, the information of all courseware under the application will be returned.
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * The filename keyword.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * The courseware IDs. Non-existent IDs will be ignored.
         * @type {Array.<string> || null}
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * EndRoom request structure.
 * @class
 */
class EndRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
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
 * DescribeGroup response structure.
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * The group type. 0: Ordinary group. 1: Merged group. If the group queried is a merged group, the IDs of the sub-groups will be returned.
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubGroupIds = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * The information of the users to register.
Used by actions: BatchRegister.
 * @class
 */
class BatchUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.  Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The username.  Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The user’s ID in your system, which must be unique across the same application.  Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * The user’s profile photo.  Note: This field may return null, indicating that no valid values can be obtained.
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
 * ModifyGroup request structure.
 * @class
 */
class ModifyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the group to modify.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The user ID of the teacher.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * The new group name.
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DeleteGroup request structure.
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the groups to delete.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * The SDKAppID assigned by LCIC.
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
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * StartRoom request structure.
 * @class
 */
class StartRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
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
 * AddGroupMember request structure.
 * @class
 */
class AddGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users. Array length limit: 200.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeGroupList request structure.
 * @class
 */
class DescribeGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The page to return records from. Pagination starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records per page. The value of this parameter cannot exceed 1000 and is 20 by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The user ID of the teacher, which is used as the filter. This parameter and MemberId are mutually exclusive. If both are specified, only this parameter will take effect.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * The user ID of a member, which is used as the filter. This parameter and TeacherId are mutually exclusive.
         * @type {string || null}
         */
        this.MemberId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;

    }
}

/**
 * GetRoomMessage request structure.
 * @class
 */
class GetRoomMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The starting message sequence. Messages before this sequence will be returned (not including the message whose sequence is `seq`).
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * The maximum number of messages to return. The value of this parameter cannot exceed the maximum message count allowed by your package.
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDocuments response structure.
 * @class
 */
class DescribeDocumentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of records that meet the conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The information of the courseware.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DocumentInfo> || null}
         */
        this.Documents = null;

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

        if (params.Documents) {
            this.Documents = new Array();
            for (let z in params.Documents) {
                let obj = new DocumentInfo();
                obj.deserialize(params.Documents[z]);
                this.Documents.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Document Information.
Used by actions: DescribeDocumentsByRoom.
 * @class
 */
class DocumentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The document ID. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * The document’s original URL. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * The document title. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * The user ID of the document’s owner. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * The application ID. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The document access type. 0: Private; 1: Public. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * The transcoding result. If the file is not transcoded, this parameter will be empty. If it is successfully transcoded, this parameter will be the URL of the transcoded file. If transcoding fails, this parameter will indicate the error code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranscodeResult = null;

        /**
         * The transcoding type. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * The transcoding progress. Value range: 0-100. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TranscodeProgress = null;

        /**
         * The transcoding status. 0: The file is not transcoded. 1: The file is being transcoded. 2: Transcoding failed. 3: Transcoding is successful. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TranscodeState = null;

        /**
         * The error message for failed transcoding. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TranscodeInfo = null;

        /**
         * The document type. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * The document size (bytes). Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DocumentSize = null;

        /**
         * The time (Unix timestamp) when the document was last updated. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * The number of pages.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * The width. This parameter is valid only if static document transcoding is used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The height. This parameter is valid only if static document transcoding is used.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The thumbnail. Only transcoded courseware has thumbnails.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cover = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.TranscodeResult = 'TranscodeResult' in params ? params.TranscodeResult : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.TranscodeProgress = 'TranscodeProgress' in params ? params.TranscodeProgress : null;
        this.TranscodeState = 'TranscodeState' in params ? params.TranscodeState : null;
        this.TranscodeInfo = 'TranscodeInfo' in params ? params.TranscodeInfo : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Cover = 'Cover' in params ? params.Cover : null;

    }
}

/**
 * DeleteDocument response structure.
 * @class
 */
class DeleteDocumentResponse extends  AbstractModel {
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
 * DeleteRecord request structure.
 * @class
 */
class DeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The SDKAppID assigned by LCIC.
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * BatchDeleteGroupMember response structure.
 * @class
 */
class BatchDeleteGroupMemberResponse extends  AbstractModel {
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
 * CreateGroupWithSubGroup response structure.
 * @class
 */
class CreateGroupWithSubGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the merged group.
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDocuments request structure.
 * @class
 */
class DescribeDocumentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The school ID.
         * @type {number || null}
         */
        this.SchoolId = null;

        /**
         * The page to return records from. Pagination starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records per page. The value of this parameter cannot exceed `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The courseware access. [0]: The private courseware of the specified user (`Owner`) will be returned; [1]: The public courseware of the specified user will be returned; [0,1]: Both the private and public courseware of the specified user will be returned; [2]: The private courseware of the specified user and the public courseware of all users (including `Owner`) will be returned.
         * @type {Array.<number> || null}
         */
        this.Permission = null;

        /**
         * The user ID of the courseware owner. If you do not specify this parameter, all courseware under the school ID will be returned.
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * The filename keyword.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * The courseware IDs. Non-existent IDs will be ignored.
         * @type {Array.<string> || null}
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
        this.SchoolId = 'SchoolId' in params ? params.SchoolId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * The information of a message.
 * @class
 */
class MessageItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The message type. `0`: Text; `1`: Image.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MessageType = null;

        /**
         * The text. This parameter is valid if `MessageType` is `0`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TextMessage = null;

        /**
         * The image URL. This parameter is valid if `MessageType` is `1`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.TextMessage = 'TextMessage' in params ? params.TextMessage : null;
        this.ImageMessage = 'ImageMessage' in params ? params.ImageMessage : null;

    }
}

/**
 * The information of the groups queried.
Used by actions: DescribeGroupList.
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;

    }
}

/**
 * GetRoomEvent request structure.
 * @class
 */
class GetRoomEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The starting page. Pagination starts from 1. This parameter is valid only if `keyword` is empty.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records (up to 200) per page. This parameter is valid only if `keyword` is empty.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The type of events to query. Valid values:
`RoomStart`: The class started.
`RoomEnd`: The class ended.
`MemberJoin`: A user joined.
`MemberQuit`: A user left.
`RecordFinish`: Recording is finished.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DescribeDocument response structure.
 * @class
 */
class DescribeDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The document ID.
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * The document’s original URL.
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * The document title.
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * The user ID of the document’s owner.
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The document access type.
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * The transcoding result. If the file is not transcoded, this parameter will be empty. If it is successfully transcoded, this parameter will be the URL of the transcoded file. If transcoding fails, this parameter will indicate the error code.
         * @type {string || null}
         */
        this.TranscodeResult = null;

        /**
         * The transcoding type.
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * The transcoding progress. Value range: 0-100.
         * @type {number || null}
         */
        this.TranscodeProgress = null;

        /**
         * The transcoding status. 0: The file is not transcoded. 1: The file is being transcoded. 2: Transcoding failed. 3: Transcoding is successful.
         * @type {number || null}
         */
        this.TranscodeState = null;

        /**
         * The error message for failed transcoding.
         * @type {string || null}
         */
        this.TranscodeInfo = null;

        /**
         * The document type.
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * The document size (bytes).
         * @type {number || null}
         */
        this.DocumentSize = null;

        /**
         * The time (Unix timestamp) when the document was last updated.
         * @type {number || null}
         */
        this.UpdateTime = null;

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
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.TranscodeResult = 'TranscodeResult' in params ? params.TranscodeResult : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.TranscodeProgress = 'TranscodeProgress' in params ? params.TranscodeProgress : null;
        this.TranscodeState = 'TranscodeState' in params ? params.TranscodeState : null;
        this.TranscodeInfo = 'TranscodeInfo' in params ? params.TranscodeInfo : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroupMember response structure.
 * @class
 */
class DeleteGroupMemberResponse extends  AbstractModel {
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
 * DescribeGroupMemberList response structure.
 * @class
 */
class DescribeGroupMemberListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of records that meet the conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

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
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The event information.
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Unix timestamp (seconds) when the event occurred.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The event type. Valid values: 
`RoomStart`: The class started. `RoomEnd`: The class ended. `MemberJoin`: A user joined. `MemberQuit`: A user left. `RecordFinish`: Recording is finished.
·Camera0n·: The camera is turned on.
`Camera0ff`: The camera is turned off.
`MicOn`: The mic is turned on.
`MicOff`: The mic is turned off.
`ScreenOn`: Screen sharing is enabled.
`ScreenOff`: Screen sharing is disabled.
`VisibleOn`: The page is visible.
`VisibleOff`: The page is invisible.
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * The details of the event, including the room ID and the user to whom the event occurred.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {EventDataInfo || null}
         */
        this.EventData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.EventData) {
            let obj = new EventDataInfo();
            obj.deserialize(params.EventData)
            this.EventData = obj;
        }

    }
}

/**
 * DeleteRecord response structure.
 * @class
 */
class DeleteRecordResponse extends  AbstractModel {
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
 * DescribeAnswerList request structure.
 * @class
 */
class DescribeAnswerListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The question ID.
         * @type {string || null}
         */
        this.QuestionId = null;

        /**
         * 1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 100
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
        this.QuestionId = 'QuestionId' in params ? params.QuestionId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * BatchCreateRoom request structure.
 * @class
 */
class BatchCreateRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The information of the rooms to create.
         * @type {Array.<RoomInfo> || null}
         */
        this.RoomInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.RoomInfos) {
            this.RoomInfos = new Array();
            for (let z in params.RoomInfos) {
                let obj = new RoomInfo();
                obj.deserialize(params.RoomInfos[z]);
                this.RoomInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeGroupMemberList request structure.
 * @class
 */
class DescribeGroupMemberListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The page to return records from. The default value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records per page. The value of this parameter cannot exceed 1000 and is 20 by default.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * The user information.
Used by actions: DescribeSdkAppIdUsers.
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

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
 * DescribeDocument request structure.
 * @class
 */
class DescribeDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The (unique) document ID.
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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * BatchDeleteRecord response structure.
 * @class
 */
class BatchDeleteRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the rooms whose recordings are deleted. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

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
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Watermark settings.
Used by actions: GetWatermark.
 * @class
 */
class WatermarkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the watermark image. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The watermark width, which is expressed as a percentage of the video width. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The watermark height, which is expressed as a percentage of the video height. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * The horizontal offset of the watermark, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle horizontally. Value range: 0-100. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * The vertical offset of the watermark, which is expressed as a percentage of the video width. For example, 50 indicates that the watermark will appear in the middle vertically. Value range: 0-100. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

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
 * StartRoom response structure.
 * @class
 */
class StartRoomResponse extends  AbstractModel {
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
 * GetRoomMessage response structure.
 * @class
 */
class GetRoomMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The message list.
         * @type {Array.<MessageList> || null}
         */
        this.Messages = null;

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

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new MessageList();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of registered users.
Used by actions: BatchRegister.
 * @class
 */
class BatchUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.

         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

    }
}

/**
 * BatchAddGroupMember request structure.
 * @class
 */
class BatchAddGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The target group IDs. Array length limit: 100.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users to add. Array length limit: 200.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

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
         * Resolution. Valid values: 1: SD; 2: HD; 3: FHD
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * Maximum number of mic-on users (excluding teachers). Value range: [0, 16]
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * Whether to automatically turn the mic on when the user enters a room. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * The room subtype. Valid values: videodoc: Document + Video; video: Video only.
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * Whether to disable auto recording. Valid values: 0: No (default); 1: Yes. If this parameter is 0, recording will start when the class starts and stops when the class ends.
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * Assistant ID list Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * Recording URL. This parameter exists only after a room is ended. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordUrl = null;

        /**
         * The class status. 0: The class has not started. 1: The class has started. 2: The class ended. 3: The class expired. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether the students' consent is required to control their cameras/microphones.
         * @type {number || null}
         */
        this.EnableDirectControl = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableDirectControl = 'EnableDirectControl' in params ? params.EnableDirectControl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCurrentMemberList request structure.
 * @class
 */
class DescribeCurrentMemberListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The page to return records from. Pagination starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records per page. The value of this parameter cannot exceed 1000.
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
 * DescribeSdkAppIdUsers response structure.
 * @class
 */
class DescribeSdkAppIdUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of users.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The information of the users. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of a room event.
 * @class
 */
class EventDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The ID of the user to whom the event occurred.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribeAnswerList response structure.
 * @class
 */
class DescribeAnswerListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of answers.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * A list of the answers.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnswerInfo> || null}
         */
        this.AnswerInfo = null;

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

        if (params.AnswerInfo) {
            this.AnswerInfo = new Array();
            for (let z in params.AnswerInfo) {
                let obj = new AnswerInfo();
                obj.deserialize(params.AnswerInfo[z]);
                this.AnswerInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The actual start time of the room, in Unix timestamp, accurate to seconds. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealStartTime = null;

        /**
         * The actual end time of the room, in Unix timestamp, accurate to seconds. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealEndTime = null;

        /**
         * The total message count of the room.
         * @type {number || null}
         */
        this.MessageCount = null;

        /**
         * The total number of mic-on students in the room.
         * @type {number || null}
         */
        this.MicCount = null;

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
        this.RealStartTime = 'RealStartTime' in params ? params.RealStartTime : null;
        this.RealEndTime = 'RealEndTime' in params ? params.RealEndTime : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;
        this.MicCount = 'MicCount' in params ? params.MicCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDocument request structure.
 * @class
 */
class DeleteDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The document ID.
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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * DescribeSupervisors request structure.
 * @class
 */
class DescribeSupervisorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.

         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The maximum number of records per page. The maximum value allowed is 100, and the default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page to return records from. Pagination starts from 1, which is also the default value of this parameter.
         * @type {number || null}
         */
        this.Page = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;

    }
}

/**
 * The list of historical messages.
 * @class
 */
class MessageList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The message timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The sender.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FromAccount = null;

        /**
         * The message sequence, which is unique across a class. The earlier a message is sent, the lower the sequence.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * The message content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MessageItem> || null}
         */
        this.MessageBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.FromAccount = 'FromAccount' in params ? params.FromAccount : null;
        this.Seq = 'Seq' in params ? params.Seq : null;

        if (params.MessageBody) {
            this.MessageBody = new Array();
            for (let z in params.MessageBody) {
                let obj = new MessageItem();
                obj.deserialize(params.MessageBody[z]);
                this.MessageBody.push(obj);
            }
        }

    }
}

/**
 * DeleteGroupMember request structure.
 * @class
 */
class DeleteGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID. You cannot remove members from a merged group.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users. Array length limit: 200.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * EndRoom response structure.
 * @class
 */
class EndRoomResponse extends  AbstractModel {
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
 * GetWatermark request structure.
 * @class
 */
class GetWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
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
 * CreateGroupWithMembers response structure.
 * @class
 */
class CreateGroupWithMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the successfully created group.
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchDeleteGroupMember request structure.
 * @class
 */
class BatchDeleteGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The target group IDs. Array length limit: 100.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The users to remove. Array length limit: 256.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

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

        /**
         * The callback key.
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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

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
 * The information of the groups to create.
Used by actions: BatchCreateGroupWithMembers.
 * @class
 */
class GroupBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group names. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The user ID of the teacher. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TeacherId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

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
 * The statistics for each type of answer.
 * @class
 */
class AnswerStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * The answer. Bits are used to indicate the options chosen. For example, `0x1` indicates that option A is chosen; `0x11` indicates that A and B are chosen, and so on.
         * @type {number || null}
         */
        this.Answer = null;

        /**
         * The number of users that submitted the answer.
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
        this.Answer = 'Answer' in params ? params.Answer : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DeleteSupervisor response structure.
 * @class
 */
class DeleteSupervisorResponse extends  AbstractModel {
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
 * SetWatermark response structure.
 * @class
 */
class SetWatermarkResponse extends  AbstractModel {
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
 * The information of the room to create.
Used by actions: BatchCreateRoom.
 * @class
 */
class RoomInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The room start time (Unix timestamp).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The room end time (Unix timestamp).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The resolution. Valid values: `1`: SD; `2`: HD; `3`: FHD.
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * The maximum number of mic-on users (excluding the teacher). Value range: 0-16.
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * The room subtype. Valid values: `videodoc`: Document + Video; `video`: Video only; `coteaching`: Dual-teacher.
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * The user ID of the teacher. User IDs are returned by the user registration APIs.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * Whether to automatically turn the mic on when a user enters the room. Valid values: `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to disconnect communication after audio/video permissions are revoked. Valid values: `0` (default): Yes; `1`: No.
         * @type {number || null}
         */
        this.TurnOffMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: `0` (default): No; `1`: Yes.
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * Whether to disable auto recording. Valid values: `0` (default): No; `1`: Yes. If this parameter is `0`, recording will start when the class starts and stops when the class ends.
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * The user IDs of the teacher assistants. User IDs are returned by the user registration APIs.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * The number of RTC users.
         * @type {number || null}
         */
        this.RTCAudienceNumber = null;

        /**
         * The audience type.
         * @type {number || null}
         */
        this.AudienceType = null;

        /**
         * The recording layout.
         * @type {number || null}
         */
        this.RecordLayout = null;

        /**
         * The ID of the group to bind. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether the students' consent is required to control their cameras/microphones.
         * @type {number || null}
         */
        this.EnableDirectControl = null;

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
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.TurnOffMic = 'TurnOffMic' in params ? params.TurnOffMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RTCAudienceNumber = 'RTCAudienceNumber' in params ? params.RTCAudienceNumber : null;
        this.AudienceType = 'AudienceType' in params ? params.AudienceType : null;
        this.RecordLayout = 'RecordLayout' in params ? params.RecordLayout : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableDirectControl = 'EnableDirectControl' in params ? params.EnableDirectControl : null;

    }
}

/**
 * ModifyRoom request structure.
 * @class
 */
class ModifyRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The room start time (Unix timestamp).
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The room end time (Unix timestamp).
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The user ID of the teacher. User IDs are returned by the user registration APIs.
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * The room name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The resolution. Valid values: 1: SD; 2: HD; 3: FHD.
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * The maximum number of mic-on users (excluding the teacher). Value range: 0-16.
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * Whether to automatically turn the mic on when a user enters the room. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * Whether to enable the high audio quality mode. Valid values: 0: No (default value); 1: Yes.
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * The room subtype. Valid values: videodoc: Document + Video; video: Video only; coteaching: Dual-teacher.
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * Whether to disable auto recording. Valid values: 0: No (default); 1: Yes. If this parameter is 0, recording will start when the class starts and stops when the class ends.
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * The user IDs of the teacher assistants. User IDs are returned by the user registration APIs.
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * The ID of the group to bind.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether the students' consent is required to control their cameras/microphones.
         * @type {number || null}
         */
        this.EnableDirectControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableDirectControl = 'EnableDirectControl' in params ? params.EnableDirectControl : null;

    }
}

/**
 * The answer to a quiz question.
 * @class
 */
class AnswerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The username.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The answer. Bits are used to indicate the options chosen. For example, `0x1` indicates that option A is chosen; `0x11` indicates that A and B are chosen, and so on.
         * @type {number || null}
         */
        this.Answer = null;

        /**
         * The time used.
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Whether the answer is correct. `1`: Correct; `0`: Incorrect.
         * @type {number || null}
         */
        this.IsCorrect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Answer = 'Answer' in params ? params.Answer : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsCorrect = 'IsCorrect' in params ? params.IsCorrect : null;

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
 * DescribeDocumentsByRoom response structure.
 * @class
 */
class DescribeDocumentsByRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DocumentInfo> || null}
         */
        this.Documents = null;

        /**
         * The total number of records that meet the conditions.
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

        if (params.Documents) {
            this.Documents = new Array();
            for (let z in params.Documents) {
                let obj = new DocumentInfo();
                obj.deserialize(params.Documents[z]);
                this.Documents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * DescribeQuestionList response structure.
 * @class
 */
class DescribeQuestionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of quiz questions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * A list of the questions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QuestionInfo> || null}
         */
        this.QuestionInfo = null;

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

        if (params.QuestionInfo) {
            this.QuestionInfo = new Array();
            for (let z in params.QuestionInfo) {
                let obj = new QuestionInfo();
                obj.deserialize(params.QuestionInfo[z]);
                this.QuestionInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRooms response structure.
 * @class
 */
class GetRoomsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of rooms.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The room list.
         * @type {Array.<RoomItem> || null}
         */
        this.Rooms = null;

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

        if (params.Rooms) {
            this.Rooms = new Array();
            for (let z in params.Rooms) {
                let obj = new RoomItem();
                obj.deserialize(params.Rooms[z]);
                this.Rooms.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * A quiz question in a room.
 * @class
 */
class QuestionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The question ID.
         * @type {string || null}
         */
        this.QuestionId = null;

        /**
         * The question.
         * @type {string || null}
         */
        this.QuestionContent = null;

        /**
         * The time limit for the question. If you set this parameter to `0`, there will not be a time limit.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The correct answer. Bits are used to indicate the options that should be chosen. For example, `0x1` indicates option A; `0x11` indicates A and B, and so on.
         * @type {number || null}
         */
        this.CorrectAnswer = null;

        /**
         * The statistics for each type of answer.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnswerStat> || null}
         */
        this.AnswerStats = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuestionId = 'QuestionId' in params ? params.QuestionId : null;
        this.QuestionContent = 'QuestionContent' in params ? params.QuestionContent : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CorrectAnswer = 'CorrectAnswer' in params ? params.CorrectAnswer : null;

        if (params.AnswerStats) {
            this.AnswerStats = new Array();
            for (let z in params.AnswerStats) {
                let obj = new AnswerStat();
                obj.deserialize(params.AnswerStats[z]);
                this.AnswerStats.push(obj);
            }
        }

    }
}

/**
 * KickUserFromRoom request structure.
 * @class
 */
class KickUserFromRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The room ID.
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The ID of the user to be removed.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The removal type: 
`1`: Keep the user out temporarily. The `Duration` parameter specifies the ban duration, during which the user is banned from entering the room. 
`2`: Remove the user permanently.
         * @type {number || null}
         */
        this.KickType = null;

        /**
         * The ban duration (seconds). This parameter is valid if `KickType` is `1`. The default value is `0`.
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.KickType = 'KickType' in params ? params.KickType : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * GetRooms request structure.
 * @class
 */
class GetRoomsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.

         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The start time. The default start time is 30 minutes before the current time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * The end time. The default end time is 30 minutes after the current time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The page to return records from. Pagination starts from 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The number of records per page. The default is 10.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDeveloper request structure.
 * @class
 */
class DescribeDeveloperRequest extends  AbstractModel {
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
 * Custom application content
Used by actions: SetAppCustomContent.
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
 * BatchDescribeDocument response structure.
 * @class
 */
class BatchDescribeDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of records that meet the conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The information of the courseware.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DocumentInfo> || null}
         */
        this.Documents = null;

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

        if (params.Documents) {
            this.Documents = new Array();
            for (let z in params.Documents) {
                let obj = new DocumentInfo();
                obj.deserialize(params.Documents[z]);
                this.Documents.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup response structure.
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
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
 * DescribeSdkAppIdUsers request structure.
 * @class
 */
class DescribeSdkAppIdUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The page to return records from. The default value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The maximum number of records to return per page. The default value is 20.
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
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AddGroupMember response structure.
 * @class
 */
class AddGroupMemberResponse extends  AbstractModel {
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
 * BatchCreateGroupWithMembers request structure.
 * @class
 */
class BatchCreateGroupWithMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The SDKAppID assigned by LCIC.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The information of the groups to create. Array length limit: 256.
         * @type {Array.<GroupBaseInfo> || null}
         */
        this.GroupBaseInfos = null;

        /**
         * The group members. Array length limit: 200.
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.GroupBaseInfos) {
            this.GroupBaseInfos = new Array();
            for (let z in params.GroupBaseInfos) {
                let obj = new GroupBaseInfo();
                obj.deserialize(params.GroupBaseInfos[z]);
                this.GroupBaseInfos.push(obj);
            }
        }
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeGroup request structure.
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The SDKAppID assigned by LCIC.
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * CreateSupervisor request structure.
 * @class
 */
class CreateSupervisorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * The user IDs.
         * @type {Array.<string> || null}
         */
        this.Users = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Users = 'Users' in params ? params.Users : null;

    }
}

/**
 * Background image settings.
 * @class
 */
class BackgroundPictureConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the background image.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DeleteAppCustomContent response structure.
 * @class
 */
class DeleteAppCustomContentResponse extends  AbstractModel {
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
 * DescribeCurrentMemberList response structure.
 * @class
 */
class DescribeCurrentMemberListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The user list.
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
 * ModifyGroup response structure.
 * @class
 */
class ModifyGroupResponse extends  AbstractModel {
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
 * DescribeGroupList response structure.
 * @class
 */
class DescribeGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of groups that meet the conditions.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfos = null;

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

        if (params.GroupInfos) {
            this.GroupInfos = new Array();
            for (let z in params.GroupInfos) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfos[z]);
                this.GroupInfos.push(obj);
            }
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
 * DescribeDeveloper response structure.
 * @class
 */
class DescribeDeveloperResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The developer ID.
         * @type {string || null}
         */
        this.DeveloperId = null;

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
        this.DeveloperId = 'DeveloperId' in params ? params.DeveloperId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The watermark text.
Used by actions: GetWatermark.
 * @class
 */
class TextMarkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The watermark text. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The watermark text color. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Color = 'Color' in params ? params.Color : null;

    }
}

module.exports = {
    CreateRoomRequest: CreateRoomRequest,
    DescribeQuestionListRequest: DescribeQuestionListRequest,
    ModifyRoomResponse: ModifyRoomResponse,
    GetWatermarkResponse: GetWatermarkResponse,
    DeleteSupervisorRequest: DeleteSupervisorRequest,
    DescribeSupervisorsResponse: DescribeSupervisorsResponse,
    KickUserFromRoomResponse: KickUserFromRoomResponse,
    BatchDeleteRecordRequest: BatchDeleteRecordRequest,
    BatchRegisterRequest: BatchRegisterRequest,
    DeleteRoomResponse: DeleteRoomResponse,
    ModifyUserProfileRequest: ModifyUserProfileRequest,
    CreateGroupWithMembersRequest: CreateGroupWithMembersRequest,
    DescribeDocumentsByRoomRequest: DescribeDocumentsByRoomRequest,
    BatchCreateGroupWithMembersResponse: BatchCreateGroupWithMembersResponse,
    GetRoomEventResponse: GetRoomEventResponse,
    BatchCreateRoomResponse: BatchCreateRoomResponse,
    MemberRecord: MemberRecord,
    DeleteAppCustomContentRequest: DeleteAppCustomContentRequest,
    BatchAddGroupMemberResponse: BatchAddGroupMemberResponse,
    ModifyUserProfileResponse: ModifyUserProfileResponse,
    ModifyAppResponse: ModifyAppResponse,
    LoginOriginIdRequest: LoginOriginIdRequest,
    BatchRegisterResponse: BatchRegisterResponse,
    BindDocumentToRoomResponse: BindDocumentToRoomResponse,
    CreateGroupWithSubGroupRequest: CreateGroupWithSubGroupRequest,
    RoomItem: RoomItem,
    SetWatermarkRequest: SetWatermarkRequest,
    DescribeRoomRequest: DescribeRoomRequest,
    BatchDescribeDocumentRequest: BatchDescribeDocumentRequest,
    EndRoomRequest: EndRoomRequest,
    UnbindDocumentFromRoomResponse: UnbindDocumentFromRoomResponse,
    CreateDocumentResponse: CreateDocumentResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    SetAppCustomContentResponse: SetAppCustomContentResponse,
    BatchUserRequest: BatchUserRequest,
    LoginUserResponse: LoginUserResponse,
    ModifyGroupRequest: ModifyGroupRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    StartRoomRequest: StartRoomRequest,
    AddGroupMemberRequest: AddGroupMemberRequest,
    DescribeGroupListRequest: DescribeGroupListRequest,
    GetRoomMessageRequest: GetRoomMessageRequest,
    DescribeDocumentsResponse: DescribeDocumentsResponse,
    DocumentInfo: DocumentInfo,
    DeleteDocumentResponse: DeleteDocumentResponse,
    DeleteRecordRequest: DeleteRecordRequest,
    BatchDeleteGroupMemberResponse: BatchDeleteGroupMemberResponse,
    CreateGroupWithSubGroupResponse: CreateGroupWithSubGroupResponse,
    DescribeDocumentsRequest: DescribeDocumentsRequest,
    MessageItem: MessageItem,
    GroupInfo: GroupInfo,
    GetRoomEventRequest: GetRoomEventRequest,
    DescribeDocumentResponse: DescribeDocumentResponse,
    DeleteGroupMemberResponse: DeleteGroupMemberResponse,
    DescribeGroupMemberListResponse: DescribeGroupMemberListResponse,
    EventInfo: EventInfo,
    DeleteRecordResponse: DeleteRecordResponse,
    DescribeAnswerListRequest: DescribeAnswerListRequest,
    BatchCreateRoomRequest: BatchCreateRoomRequest,
    DescribeGroupMemberListRequest: DescribeGroupMemberListRequest,
    UserInfo: UserInfo,
    DescribeUserResponse: DescribeUserResponse,
    DescribeDocumentRequest: DescribeDocumentRequest,
    BatchDeleteRecordResponse: BatchDeleteRecordResponse,
    WatermarkConfig: WatermarkConfig,
    SetAppCustomContentRequest: SetAppCustomContentRequest,
    DescribeUserRequest: DescribeUserRequest,
    RegisterUserResponse: RegisterUserResponse,
    StartRoomResponse: StartRoomResponse,
    BindDocumentToRoomRequest: BindDocumentToRoomRequest,
    CreateDocumentRequest: CreateDocumentRequest,
    GetRoomMessageResponse: GetRoomMessageResponse,
    BatchUserInfo: BatchUserInfo,
    BatchAddGroupMemberRequest: BatchAddGroupMemberRequest,
    DescribeRoomResponse: DescribeRoomResponse,
    DescribeCurrentMemberListRequest: DescribeCurrentMemberListRequest,
    DescribeSdkAppIdUsersResponse: DescribeSdkAppIdUsersResponse,
    EventDataInfo: EventDataInfo,
    DescribeAnswerListResponse: DescribeAnswerListResponse,
    DescribeRoomStatisticsResponse: DescribeRoomStatisticsResponse,
    DeleteDocumentRequest: DeleteDocumentRequest,
    DescribeSupervisorsRequest: DescribeSupervisorsRequest,
    MessageList: MessageList,
    DeleteGroupMemberRequest: DeleteGroupMemberRequest,
    EndRoomResponse: EndRoomResponse,
    GetWatermarkRequest: GetWatermarkRequest,
    CreateGroupWithMembersResponse: CreateGroupWithMembersResponse,
    BatchDeleteGroupMemberRequest: BatchDeleteGroupMemberRequest,
    ModifyAppRequest: ModifyAppRequest,
    UnbindDocumentFromRoomRequest: UnbindDocumentFromRoomRequest,
    RegisterUserRequest: RegisterUserRequest,
    GroupBaseInfo: GroupBaseInfo,
    LoginUserRequest: LoginUserRequest,
    AnswerStat: AnswerStat,
    DeleteSupervisorResponse: DeleteSupervisorResponse,
    SetWatermarkResponse: SetWatermarkResponse,
    RoomInfo: RoomInfo,
    ModifyRoomRequest: ModifyRoomRequest,
    AnswerInfo: AnswerInfo,
    DescribeRoomStatisticsRequest: DescribeRoomStatisticsRequest,
    DescribeDocumentsByRoomResponse: DescribeDocumentsByRoomResponse,
    LoginOriginIdResponse: LoginOriginIdResponse,
    DescribeQuestionListResponse: DescribeQuestionListResponse,
    GetRoomsResponse: GetRoomsResponse,
    QuestionInfo: QuestionInfo,
    KickUserFromRoomRequest: KickUserFromRoomRequest,
    GetRoomsRequest: GetRoomsRequest,
    DescribeDeveloperRequest: DescribeDeveloperRequest,
    AppCustomContent: AppCustomContent,
    BatchDescribeDocumentResponse: BatchDescribeDocumentResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    DescribeSdkAppIdUsersRequest: DescribeSdkAppIdUsersRequest,
    AddGroupMemberResponse: AddGroupMemberResponse,
    CreateSupervisorResponse: CreateSupervisorResponse,
    DeleteRoomRequest: DeleteRoomRequest,
    BatchCreateGroupWithMembersRequest: BatchCreateGroupWithMembersRequest,
    DescribeGroupRequest: DescribeGroupRequest,
    CreateSupervisorRequest: CreateSupervisorRequest,
    BackgroundPictureConfig: BackgroundPictureConfig,
    DeleteAppCustomContentResponse: DeleteAppCustomContentResponse,
    DescribeCurrentMemberListResponse: DescribeCurrentMemberListResponse,
    ModifyGroupResponse: ModifyGroupResponse,
    DescribeGroupListResponse: DescribeGroupListResponse,
    CreateRoomResponse: CreateRoomResponse,
    DescribeDeveloperResponse: DescribeDeveloperResponse,
    TextMarkConfig: TextMarkConfig,

}
