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
 * GetPersonGroupInfo response structure.
 * @class
 */
class GetPersonGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of groups containing this person and their description fields
         * @type {Array.<PersonGroupInfo> || null}
         */
        this.PersonGroupInfos = null;

        /**
         * Total number of groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * Algorithm model version used by the Face Recognition service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.PersonGroupInfos) {
            this.PersonGroupInfos = new Array();
            for (let z in params.PersonGroupInfos) {
                let obj = new PersonGroupInfo();
                obj.deserialize(params.PersonGroupInfos[z]);
                this.PersonGroupInfos.push(obj);
            }
        }
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Eye information
 * @class
 */
class Eye extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether glasses are worn.
The `Type` values of the `AttributeItem` include: 0: no glasses; 1: general glasses; 2: sunglasses
         * @type {AttributeItem || null}
         */
        this.Glass = null;

        /**
         * Whether the eyes are open.
The `Type` values of the `AttributeItem` include: 0: open; 1: closed
         * @type {AttributeItem || null}
         */
        this.EyeOpen = null;

        /**
         * Whether the person has double eyelids.
The `Type` values of the `AttributeItem` include: 0: no; 1: yes.
         * @type {AttributeItem || null}
         */
        this.EyelidType = null;

        /**
         * Eye size.
The `Type` values of the `AttributeItem` include: 0: small eyes; 1: general eyes; 2: big eyes.
         * @type {AttributeItem || null}
         */
        this.EyeSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Glass) {
            let obj = new AttributeItem();
            obj.deserialize(params.Glass)
            this.Glass = obj;
        }

        if (params.EyeOpen) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyeOpen)
            this.EyeOpen = obj;
        }

        if (params.EyelidType) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyelidType)
            this.EyelidType = obj;
        }

        if (params.EyeSize) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyeSize)
            this.EyeSize = obj;
        }

    }
}

/**
 * Most matching candidate recognized
 * @class
 */
class Candidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Face ID
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * Match score of candidate. 

In a face base library containing 10,000 faces, the 1%, 0.1%, and 0.01% FARs correspond to scores of 70, 80, and 90 points, respectively;
In a face base library containing 100,000 faces, the 1%, 0.1%, and 0.01% FARs correspond to scores of 80, 90, and 100 points, respectively;
In a face base library containing 300,000 faces, the 1% and 0.1% FARs correspond to scores of 85 and 95, respectively.

Generally, the score of 80 is suitable for most scenarios. You are recommended to choose an appropriate score based on the actual situation, preferably no more than 90.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Person name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * Person gender
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * List of groups containing this person and their description fields
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PersonGroupInfo> || null}
         */
        this.PersonGroupInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.PersonGroupInfos) {
            this.PersonGroupInfos = new Array();
            for (let z in params.PersonGroupInfos) {
                let obj = new PersonGroupInfo();
                obj.deserialize(params.PersonGroupInfos[z]);
                this.PersonGroupInfos.push(obj);
            }
        }

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
 * GetGroupInfo response structure.
 * @class
 */
class GetGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Custom group description field
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * Group remarks
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Group creation time and date (`CreationTimestamp`), whose value is the number of milliseconds between the UNIX epoch time and the group creation time.
         * @type {number || null}
         */
        this.CreationTimestamp = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePerson request structure.
 * @class
 */
class DeletePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * DetectLiveFace response structure.
 * @class
 */
class DetectLiveFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Liveness score. Value range: [0,100]. The score is generally between 80 and 100, but 0 is also a common value. As a recommendation, when the score is greater than 87, it can be judged that the person in the image is alive. You can adjust the threshold according to your specific scenario.
This field is meaningful only if `FaceModelVersion` is 2.0.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Whether liveness detection is passed.
This field is meaningful only if `FaceModelVersion` is 3.0.
         * @type {boolean || null}
         */
        this.IsLiveness = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.IsLiveness = 'IsLiveness' in params ? params.IsLiveness : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AnalyzeDenseLandmarks response structure.
 * @class
 */
class AnalyzeDenseLandmarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width of requested image.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Height of requested image.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Specific information of dense facial keypoints.
         * @type {Array.<DenseFaceShape> || null}
         */
        this.DenseFaceShapeSet = null;

        /**
         * Algorithm model version used by the Face Recognition service. You can enter only `3.0` for this API.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.DenseFaceShapeSet) {
            this.DenseFaceShapeSet = new Array();
            for (let z in params.DenseFaceShapeSet) {
                let obj = new DenseFaceShape();
                obj.deserialize(params.DenseFaceShapeSet[z]);
                this.DenseFaceShapeSet.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchPersonsReturnsByGroup response structure.
 * @class
 */
class SearchPersonsReturnsByGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of the persons included in searched groups. If the quality of all faces in the input image does not meet the requirement, 0 will be returned.
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * Recognition result.
         * @type {Array.<ResultsReturnsByGroup> || null}
         */
        this.ResultsReturnsByGroup = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;

        if (params.ResultsReturnsByGroup) {
            this.ResultsReturnsByGroup = new Array();
            for (let z in params.ResultsReturnsByGroup) {
                let obj = new ResultsReturnsByGroup();
                obj.deserialize(params.ResultsReturnsByGroup[z]);
                this.ResultsReturnsByGroup.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFace request structure.
 * @class
 */
class DeleteFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * List of IDs of the faces to be deleted. The array element value is the `FaceId` returned by the `CreateFace` API
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;

    }
}

/**
 * Pose information.
 * @class
 */
class HeadPose extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pitch. Value range: [-30,30].
         * @type {number || null}
         */
        this.Pitch = null;

        /**
         * Yaw. Value range: [-30,30].
         * @type {number || null}
         */
        this.Yaw = null;

        /**
         * Roll. Value range: [-180,180].
         * @type {number || null}
         */
        this.Roll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pitch = 'Pitch' in params ? params.Pitch : null;
        this.Yaw = 'Yaw' in params ? params.Yaw : null;
        this.Roll = 'Roll' in params ? params.Roll : null;

    }
}

/**
 * ModifyPersonBaseInfo response structure.
 * @class
 */
class ModifyPersonBaseInfoResponse extends  AbstractModel {
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
 * GetGroupList response structure.
 * @class
 */
class GetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned group information
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfos = null;

        /**
         * Total number of groups
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GroupNum = null;

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

        if (params.GroupInfos) {
            this.GroupInfos = new Array();
            for (let z in params.GroupInfos) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfos[z]);
                this.GroupInfos.push(obj);
            }
        }
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned group information
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Custom group description field
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * Group remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Algorithm model version used for face recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Group creation time and date (`CreationTimestamp`), whose value is the number of milliseconds between the UNIX epoch time and the group creation time. 
The UNIX epoch time is 00:00:00, Thursday, January 1, 1970, Coordinated Universal Time (UTC). For more information, please see the UNIX time document.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreationTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

    }
}

/**
 * GetPersonList response structure.
 * @class
 */
class GetPersonListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned person information
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfos = null;

        /**
         * Number of persons in the group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * Number of faces in the group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * Algorithm model version used for face recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.PersonInfos) {
            this.PersonInfos = new Array();
            for (let z in params.PersonInfos) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfos[z]);
                this.PersonInfos.push(obj);
            }
        }
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Hat information
 * @class
 */
class Hat extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hat wearing status information.
The `Type` values of the `AttributeItem` include: 0: no hat; 1: general hat; 2: helmet; 3: security guard hat.
         * @type {AttributeItem || null}
         */
        this.Style = null;

        /**
         * Hat color.
The `Type` values of the `AttributeItem` include: 0: no hat; 1: red; 2: yellow; 3: blue; 4: black; 5: gray; 6: mixed colors.
         * @type {AttributeItem || null}
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

        if (params.Style) {
            let obj = new AttributeItem();
            obj.deserialize(params.Style)
            this.Style = obj;
        }

        if (params.Color) {
            let obj = new AttributeItem();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

    }
}

/**
 * Completeness of facial features, which assesses the completeness of the eyebrows, eyes, nose, cheeks, mouth, and chin.
 * @class
 */
class FaceQualityCompleteness extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eyebrow completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,80], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Eyebrow = null;

        /**
         * Eye completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,80], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Eye = null;

        /**
         * Nose completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,60], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Nose = null;

        /**
         * Cheek completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,70], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cheek = null;

        /**
         * Mouth completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,50], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Mouth = null;

        /**
         * Chin completeness. Value range: [0,100]. The higher the score, the higher the completeness. 
Reference range: [0,70], which means incomplete.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Chin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Eyebrow = 'Eyebrow' in params ? params.Eyebrow : null;
        this.Eye = 'Eye' in params ? params.Eye : null;
        this.Nose = 'Nose' in params ? params.Nose : null;
        this.Cheek = 'Cheek' in params ? params.Cheek : null;
        this.Mouth = 'Mouth' in params ? params.Mouth : null;
        this.Chin = 'Chin' in params ? params.Chin : null;

    }
}

/**
 * Face attributes, including gender, age, expression, 
beauty, glass, mask, hair, and pose (pitch, roll, yaw). Valid information will be returned only if `NeedFaceAttributes` is set to 1. The face attribute information of up to 5 largest faces in the image will be returned, and `FaceAttributesInfo` of the 6th and rest faces is meaningless.
 * @class
 */
class FaceAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gender. The gender is female for the value range [0,49] and male for the value range [50,100]. The closer the value to 0 or 100, the higher the confidence. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * Age. Value range: [0,100]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Age = null;

        /**
         * Expression. Value range: [0 (normal)-50 (smile)-100 (laugh)]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Expression = null;

        /**
         * Whether glasses are present. Valid values: [true,false]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {boolean || null}
         */
        this.Glass = null;

        /**
         * Vertical offset in degrees. Value range: [-30,30]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless. 
You are recommended to select images in the [-10,10] range for adding faces.
         * @type {number || null}
         */
        this.Pitch = null;

        /**
         * Horizontal offset in degrees. Value range: [-30,30]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless. 
You are recommended to select images in the [-10,10] range for adding faces.
         * @type {number || null}
         */
        this.Yaw = null;

        /**
         * Horizontal rotation in degrees. Value range: [-180,180]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.  
You are recommended to select images in the [-20,20] range for adding faces.
         * @type {number || null}
         */
        this.Roll = null;

        /**
         * Beauty. Value range: [0-100]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Beauty = null;

        /**
         * Whether hat is present. Valid values: [true,false]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Hat = null;

        /**
         * Whether mask is present. Valid values: [true,false]. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Mask = null;

        /**
         * Hair information, including length, bang, and color. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FaceHairAttributesInfo || null}
         */
        this.Hair = null;

        /**
         * Whether the eyes are open. Valid values: [true,false]. As long as there is more than one eye closed, `false` will be returned. If `NeedFaceAttributes` is not 1 or more than 5 faces are detected, this parameter will still be returned but meaningless.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EyeOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Expression = 'Expression' in params ? params.Expression : null;
        this.Glass = 'Glass' in params ? params.Glass : null;
        this.Pitch = 'Pitch' in params ? params.Pitch : null;
        this.Yaw = 'Yaw' in params ? params.Yaw : null;
        this.Roll = 'Roll' in params ? params.Roll : null;
        this.Beauty = 'Beauty' in params ? params.Beauty : null;
        this.Hat = 'Hat' in params ? params.Hat : null;
        this.Mask = 'Mask' in params ? params.Mask : null;

        if (params.Hair) {
            let obj = new FaceHairAttributesInfo();
            obj.deserialize(params.Hair)
            this.Hair = obj;
        }
        this.EyeOpen = 'EyeOpen' in params ? params.EyeOpen : null;

    }
}

/**
 * DetectFaceAttributes request structure.
 * @class
 */
class DetectFaceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of processable faces. 
Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 120. 
This parameter is used to control the number of faces in the image to be detected. The smaller the value, the faster the processing.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats. 
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. 
The image cannot exceed 5 MB in size after being Base64-encoded. 
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used. 
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low. 
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Whether to return attributes such as age, gender, and emotion. 
Valid values (case-insensitive): None, Age, Beauty, Emotion, Eye, Eyebrow, 
Gender, Hair, Hat, Headpose, Mask, Mouth, Moustache, Nose, Shape, Skin, Smile. 
`None` indicates that no attributes need to be returned, which is the default value. 
You need to combine the attributes into a string and separate them with commas. The sequence of the attributes is not limited. 
For more information on the attributes, please see the output parameters as described below. 
The face attribute information of up to 5 largest faces in the image will be returned, and `AttributesInfo` of the 6th and rest faces is meaningless.
         * @type {string || null}
         */
        this.FaceAttributesType = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

        /**
         * Algorithm model version used by the Face Recognition service. You can enter only `3.0` for this API.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceAttributesType = 'FaceAttributesType' in params ? params.FaceAttributesType : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

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
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Custom description field of the group to be modified, which is a `key-value`
         * @type {Array.<GroupExDescriptionInfo> || null}
         */
        this.GroupExDescriptionInfos = null;

        /**
         * Group remarks
         * @type {string || null}
         */
        this.Tag = null;

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

        if (params.GroupExDescriptionInfos) {
            this.GroupExDescriptionInfos = new Array();
            for (let z in params.GroupExDescriptionInfos) {
                let obj = new GroupExDescriptionInfo();
                obj.deserialize(params.GroupExDescriptionInfos[z]);
                this.GroupExDescriptionInfos.push(obj);
            }
        }
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * CreatePerson request structure.
 * @class
 */
class CreatePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the group to join, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Person name, which can contain 1-60 characters and is modifiable and repeatable.
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * Person ID, which is unmodifiable, must be unique under a Tencent Cloud account, and can contain letters, digits, and special symbols (-%@#&_) of up to 64B.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 0: empty; 1: male; 2: female.
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * Content of person description field, which is a `key-value` pair, can contain 0-60 characters, and is modifiable and repeatable.
         * @type {Array.<PersonExDescriptionInfo> || null}
         */
        this.PersonExDescriptionInfos = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * This parameter is used to control the judgment whether the face contained in the image in `Image` or `Url` corresponds to an existing person in the group. 
If it is judged that a duplicate person exists in the group, no new person will be created, and information of the suspected duplicate person will be returned. 
Otherwise, the new person will be created. 
0: do not judge, i.e., the person will be created no matter whether a duplicate person exists in the group. 
1: low duplicate person judgment requirement (1% FAR); 
2: average duplicate person judgment requirement (0.1% FAR); 
3: high duplicate person judgment requirement (0.01% FAR); 
4: very high duplicate person judgment requirement (0.001% FAR). 
Default value: 0.  
Note: the higher the requirement, the lower the probability of duplicate person. The FARs corresponding to different requirements are for reference only and can be adjusted as needed.
         * @type {number || null}
         */
        this.UniquePersonControl = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.PersonExDescriptionInfos) {
            this.PersonExDescriptionInfos = new Array();
            for (let z in params.PersonExDescriptionInfos) {
                let obj = new PersonExDescriptionInfo();
                obj.deserialize(params.PersonExDescriptionInfos[z]);
                this.PersonExDescriptionInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UniquePersonControl = 'UniquePersonControl' in params ? params.UniquePersonControl : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * GetGroupList request structure.
 * @class
 */
class GetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 10. Maximum value: 1000
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateFace response structure.
 * @class
 */
class CreateFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully added faces
         * @type {number || null}
         */
        this.SucFaceNum = null;

        /**
         * List of IDs of successfully added faces
         * @type {Array.<string> || null}
         */
        this.SucFaceIds = null;

        /**
         * Adding result for each face image. -1101: no face detected; -1102: image decoding failed; 
-1601: the image quality control requirement is not met; -1604: the face similarity is not above `FaceMatchThreshold`. 
Other non-zero values: algorithm service exception. 
The order of `RetCode` values is the same as the order of `Images` or `Urls` in the input parameter.
         * @type {Array.<number> || null}
         */
        this.RetCode = null;

        /**
         * Indexes of successfully added faces. The order of indexes is the same as the order of `Images` or `Urls` in the input parameter. 
For example, if there are 3 URLs in `Urls`, and the second URL fails, then the value of `SucIndexes` will be [0,2].
         * @type {Array.<number> || null}
         */
        this.SucIndexes = null;

        /**
         * Frame positions of successfully added faces. The order is the same as the order of `Images` or `Urls` in the input parameter.
         * @type {Array.<FaceRect> || null}
         */
        this.SucFaceRects = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.SucFaceNum = 'SucFaceNum' in params ? params.SucFaceNum : null;
        this.SucFaceIds = 'SucFaceIds' in params ? params.SucFaceIds : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.SucIndexes = 'SucIndexes' in params ? params.SucIndexes : null;

        if (params.SucFaceRects) {
            this.SucFaceRects = new Array();
            for (let z in params.SucFaceRects) {
                let obj = new FaceRect();
                obj.deserialize(params.SucFaceRects[z]);
                this.SucFaceRects.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPersonBaseInfo request structure.
 * @class
 */
class ModifyPersonBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Name of the person to be modified
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * Gender of the person to be modified. 1: male; 2: female
         * @type {number || null}
         */
        this.Gender = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

    }
}

/**
 * DetectFaceAttributes response structure.
 * @class
 */
class DetectFaceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width of requested image.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Height of requested image.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Face information list.
         * @type {Array.<FaceDetailInfo> || null}
         */
        this.FaceDetailInfos = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceDetailInfos) {
            this.FaceDetailInfos = new Array();
            for (let z in params.FaceDetailInfos) {
                let obj = new FaceDetailInfo();
                obj.deserialize(params.FaceDetailInfos[z]);
                this.FaceDetailInfos.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recognition result items by group
 * @class
 */
class GroupCandidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Most matching candidates recognized.
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }

    }
}

/**
 * SearchPersons response structure.
 * @class
 */
class SearchPersonsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognition result.
         * @type {Array.<Result> || null}
         */
        this.Results = null;

        /**
         * Number of the persons included in searched groups. If the quality of all faces in the input image does not meet the requirement, 0 will be returned.
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * Algorithm model version used for face recognition.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
                let obj = new Result();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyPerson request structure.
 * @class
 */
class VerifyPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded data of image.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL 
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
 Either `Url` or `Image` of the image must be provided; if both are provided, only `Url` will be used. 
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * ID of the person to be verified. For more information on `PersonId`, please see the group management APIs.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CompareFace response structure.
 * @class
 */
class CompareFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Face similarity score between two images.
The returned similarity score varies by algorithm version. 
If you need to verify whether the faces in the two images are the same person, then the 0.1%, 0.01%, and 0.001% FARs on v3.0 correspond to scores of 40, 50, and 60, respectively. Generally, if the score is above 50, it can be judged that they are the same person. 
The 0.1%, 0.01%, and 0.001% FARs on v2.0 correspond to scores of 70, 80, and 90, respectively. Generally, if the score is above 80, it can be judged that they are the same person. 
If you need to verify whether the faces in the two images are the same person, you are recommended to use the `VerifyFace` API.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom description field of the person to be modified, which is a `key-value`
 * @class
 */
class PersonExDescriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person description field index, whose value starts from 0
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PersonExDescriptionIndex = null;

        /**
         * Content of the person description field to be updated
         * @type {string || null}
         */
        this.PersonExDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonExDescriptionIndex = 'PersonExDescriptionIndex' in params ? params.PersonExDescriptionIndex : null;
        this.PersonExDescription = 'PersonExDescription' in params ? params.PersonExDescription : null;

    }
}

/**
 * DetectLiveFace request structure.
 * @class
 */
class DetectLiveFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats. (The aspect ratio of the image should be close to 3:4 (width:height); otherwise, the score returned for the image will be meaningless.)
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used. 
(The aspect ratio of the image should be close to 3:4 (width:height); otherwise, the score returned for the image will be meaningless.) 
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Algorithm model version used by the Face Recognition service. Valid values: 2.0, 3.0.  
This parameter is `3.0` by default starting from April 2, 2020. If it is left empty for accounts that used this API previously, `2.0` will be used by default. 
Different algorithm model versions correspond to different face recognition algorithms. The 3.0 version has a better overall effect than the legacy version and is thus recommended.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * VerifyFace response structure.
 * @class
 */
class VerifyFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Similarity between given face image and `PersonId`. If there are multiple faces under the `PersonId`, the score of the highest similarity will be returned.

The returned similarity score varies by algorithm version.
If you need to verify whether the faces in the two images are the same person, then the 0.1%, 0.01%, and 0.001% FARs on v3.0 correspond to scores of 40, 50, and 60, respectively. Generally, if the score is above 50, it can be judged that they are the same person.
The 0.1%, 0.01%, and 0.001% FARs on v2.0 correspond to scores of 70, 80, and 90, respectively. Generally, if the score is above 80, it can be judged that they are the same person.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Whether the person in the image matches the `PersonId`.
         * @type {boolean || null}
         */
        this.IsMatch = null;

        /**
         * Algorithm model version used for face recognition in the group where the `Person` is, which is set when the group is created. For more information, please see [Algorithm Model Version](https://intl.cloud.tencent.com/document/product/867/40042?from_cn_redirect=1)
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonBaseInfo response structure.
 * @class
 */
class GetPersonBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person name
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * Person gender. 0: empty; 1: male; 2: female
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * List of the IDs of included faces
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

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
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recognition result.

 * @class
 */
class ResultsReturnsByGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Position of detected face frame.
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * Recognition result.
         * @type {Array.<GroupCandidate> || null}
         */
        this.GroupCandidates = null;

        /**
         * Status return code of detected face image. 0: normal. 
-1601: the image quality control requirement is not met; in this case, `Candidate` is empty.
         * @type {number || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

        if (params.GroupCandidates) {
            this.GroupCandidates = new Array();
            for (let z in params.GroupCandidates) {
                let obj = new GroupCandidate();
                obj.deserialize(params.GroupCandidates[z]);
                this.GroupCandidates.push(obj);
            }
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * CreateFace request structure.
 * @class
 */
class CreateFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
There can be up to 5 faces in one image.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
There can be up to 5 faces in one image.
If there are multiple faces in the image, only the face with the largest size will be selected.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * Only faces whose similarity to an existing face of the person is above the value of `FaceMatchThreshold` can be added successfully. 
Default value: 60. Value range: [0,100].
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * Mouth information
 * @class
 */
class Mouth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the mouth is open.
The `Type` values of the `AttributeItem` include: 0: open; 1: closed.
         * @type {AttributeItem || null}
         */
        this.MouthOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MouthOpen) {
            let obj = new AttributeItem();
            obj.deserialize(params.MouthOpen)
            this.MouthOpen = obj;
        }

    }
}

/**
 * CreateGroup request structure.
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name, which is modifiable, must be unique, and can contain 1-60 characters.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Group ID, which is unmodifiable, must be unique, and can contain letters, digits, and special symbols (-%@#&_) of up to 64B.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Custom group description field that describes the person attributes in the group, which will be applied to all persons in the group. 
Up to 5 ones can be created. 
Each custom description field can contain 1-30 characters. 
The custom description field must be unique in the group. 
Example: if you set the "custom description field" of a group to ["student ID","employee ID","mobile number"], 
then all the persons in the group will have description fields named "student ID", "employee ID", and "mobile number". 
You can enter content in the corresponding field to register a person's student ID, employee ID, and mobile number.
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * Group remarks, which can contain 0-40 characters.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Algorithm model version used by the Face Recognition service. Valid values: 2.0, 3.0.
This parameter is `3.0` by default starting from April 2, 2020. If it is left empty for accounts that used this API previously, `2.0` will be used by default. 
Different algorithm model versions correspond to different face recognition algorithms. The 3.0 version has a better overall effect than the legacy version and is thus recommended.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * List of groups containing this person and their description fields
 * @class
 */
class PersonGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the group that contains this person
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Content of person description field
         * @type {Array.<string> || null}
         */
        this.PersonExDescriptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonExDescriptions = 'PersonExDescriptions' in params ? params.PersonExDescriptions : null;

    }
}

/**
 * ModifyPersonGroupInfo request structure.
 * @class
 */
class ModifyPersonGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Custom description field of the person to be modified, which is a `key-value`
         * @type {Array.<PersonExDescriptionInfo> || null}
         */
        this.PersonExDescriptionInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.PersonExDescriptionInfos) {
            this.PersonExDescriptionInfos = new Array();
            for (let z in params.PersonExDescriptionInfos) {
                let obj = new PersonExDescriptionInfo();
                obj.deserialize(params.PersonExDescriptionInfos[z]);
                this.PersonExDescriptionInfos.push(obj);
            }
        }

    }
}

/**
 * GetPersonGroupInfo request structure.
 * @class
 */
class GetPersonGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Starting number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 10. Maximum value: 100
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Face recognition result
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * Most matching candidate recognized
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

        /**
         * Position of detected face frame
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * Status return code of detected face image. 0: normal. 
-1601: the image quality control requirement is not met; in this case, `Candidate` is empty.
         * @type {number || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * SearchFacesReturnsByGroup response structure.
 * @class
 */
class SearchFacesReturnsByGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of faces included in searched groups.
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * Recognition result.
         * @type {Array.<ResultsReturnsByGroup> || null}
         */
        this.ResultsReturnsByGroup = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;

        if (params.ResultsReturnsByGroup) {
            this.ResultsReturnsByGroup = new Array();
            for (let z in params.ResultsReturnsByGroup) {
                let obj = new ResultsReturnsByGroup();
                obj.deserialize(params.ResultsReturnsByGroup[z]);
                this.ResultsReturnsByGroup.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Face information list.
 * @class
 */
class FaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Horizontal coordinate of the top-left corner of face frame.
The face frame encompasses the facial features and is extended accordingly. If it is larger than the image, the coordinates will be negative. 
If you want to capture a complete face, you can set the negative coordinates to 0 if the `completeness` score meets the requirement.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Vertical coordinate of the top-left corner of face frame. 
The face frame encompasses the facial features and is extended accordingly. If it is larger than the image, the coordinates will be negative. 
If you want to capture a complete face, you can set the negative coordinates to 0 if the `completeness` score meets the requirement.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Face frame width. 
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Face frame height.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Face attributes, including gender, age, expression, beauty, glass, mask, hair, and pose (pitch, roll, yaw). Valid information will be returned only if `NeedFaceAttributes` is set to 1. 
         * @type {FaceAttributesInfo || null}
         */
        this.FaceAttributesInfo = null;

        /**
         * Face quality information, including score, sharpness, brightness, and completeness. Valid information will be returned only if `NeedFaceDetection` is set to 1. Note: this field may return null, indicating that no valid values can be obtained. 
         * @type {FaceQualityInfo || null}
         */
        this.FaceQualityInfo = null;

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

        if (params.FaceAttributesInfo) {
            let obj = new FaceAttributesInfo();
            obj.deserialize(params.FaceAttributesInfo)
            this.FaceAttributesInfo = obj;
        }

        if (params.FaceQualityInfo) {
            let obj = new FaceQualityInfo();
            obj.deserialize(params.FaceQualityInfo)
            this.FaceQualityInfo = obj;
        }

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
 * SearchPersons request structure.
 * @class
 */
class SearchPersonsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of groups to be searched for (up to 100). The array element value is the `GroupId` in the `CreateGroup` API.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Maximum number of recognizable faces. Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 10.
`MaxFaceNum` is used to control the number of faces to be searched for if there are multiple faces in the input image to be recognized.
For example, if the input image in `Image` or `Url` contains multiple faces and `MaxFaceNum` is 5, top 5 faces with the largest size in the image will be recognized.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Minimum height and width of face in px. Default value: 34. A value below 34 will affect the search accuracy. You are recommended to set this parameter to 80.
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * Number of the most similar persons returned for faces recognized in one single image. Default value: 5. Maximum value: 100.
For example, if `MaxFaceNum` is 1 and `MaxPersonNum` is 8, information of the top 8 most similar persons will be returned.
The greater the value, the longer the processing time. You are recommended to set a value below 10.
         * @type {number || null}
         */
        this.MaxPersonNum = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * In the output parameter `Score`, the result will be returned only if the result value is greater than or equal to the `FaceMatchThreshold` value. Default value: 0. Value range: [0.0,100.0).
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * Whether to return person details. 0: no; 1: yes. Default value: 0. Other values will be considered as 0 by default
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * SearchFacesReturnsByGroup request structure.
 * @class
 */
class SearchFacesReturnsByGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of groups to be searched for (up to 60). The array element value is the `GroupId` in the `CreateGroup` API.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Maximum number of recognizable faces. Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 10.
`MaxFaceNum` is used to control the number of faces to be searched for if there are multiple faces in the input image to be recognized.
For example, if the input image in `Image` or `Url` contains multiple faces and `MaxFaceNum` is 5, top 5 faces with the largest size in the image will be recognized.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Minimum height and width of face in px. Default value: 34. A value below 34 will affect the search accuracy. You are recommended to set this parameter to 80.
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * Detected faces, which is corresponding to the maximum number of returned most matching persons. Default value: 5. Maximum value: 10.  
For example, if `MaxFaceNum` is 3 and `MaxPersonNum` is 5, up to 15 (3 * 5) persons will be returned.
         * @type {number || null}
         */
        this.MaxPersonNumPerGroup = null;

        /**
         * Whether to return person details. 0: no; 1: yes. Default value: 0. Other values will be considered as 0 by default
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * In the output parameter `Score`, the result will be returned only if the result value is greater than or equal to the `FaceMatchThreshold` value.
Default value: 0.
Value range: [0.0,100.0).
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNumPerGroup = 'MaxPersonNumPerGroup' in params ? params.MaxPersonNumPerGroup : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * Face quality information, including score, sharpness, brightness, and completeness. Valid information will be returned only if `NeedFaceDetection` is set to 1.
 * @class
 */
class FaceQualityInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quality score. Value range: [0,100]. It comprehensively evaluates whether the image quality is suitable for face recognition; the higher the score, the higher the quality. 
In normal cases, you only need to use `Score` as the overall quality standard score. Specific item scores such as `Sharpness`, `Brightness`, `Completeness` are for reference only.
Reference range: [0,40]: poor; [40,60]: fine; [60,80]: good; [80,100]: excellent. 
You are recommended to select images with a score above 70 for adding faces.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Sharpness. Value range: [0,100]. It evaluates the sharpness of the image. The higher the score, the sharper the image. 
Reference range: [0,40]: very blurry; [40,60]: blurry; [60,80]: fine; [80,100]: sharp. 
You are recommended to select images with a score above 80 for adding faces.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sharpness = null;

        /**
         * Brightness. Value range: [0,100]. The brighter the image, the higher the score. 
Reference range: [0,30]: dark; [30,70]: normal; [70,100]: bright. 
You are recommended to select images in the [30,70] range for adding faces.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Brightness = null;

        /**
         * Completeness of facial features, which assesses the completeness of the eyebrows, eyes, nose, cheeks, mouth, and chin.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FaceQualityCompleteness || null}
         */
        this.Completeness = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Sharpness = 'Sharpness' in params ? params.Sharpness : null;
        this.Brightness = 'Brightness' in params ? params.Brightness : null;

        if (params.Completeness) {
            let obj = new FaceQualityCompleteness();
            obj.deserialize(params.Completeness)
            this.Completeness = obj;
        }

    }
}

/**
 * CompareFace request structure.
 * @class
 */
class CompareFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded image A data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.ImageA = null;

        /**
         * Base64-encoded image B data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.ImageB = null;

        /**
         * Image A URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` of image A must be provided; if both are provided, only `Url` will be used. 
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.UrlA = null;

        /**
         * Image B URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` of image B must be provided; if both are provided, only `Url` will be used. 
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.UrlB = null;

        /**
         * Algorithm model version used by the Face Recognition service. Valid values: 2.0, 3.0. 
This parameter is `3.0` by default starting from April 2, 2020. If it is left empty for accounts that used this API previously, `2.0` will be used by default. 
Different algorithm model versions correspond to different face recognition algorithms. The 3.0 version has a better overall effect than the legacy version and is thus recommended.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageA = 'ImageA' in params ? params.ImageA : null;
        this.ImageB = 'ImageB' in params ? params.ImageB : null;
        this.UrlA = 'UrlA' in params ? params.UrlA : null;
        this.UrlB = 'UrlB' in params ? params.UrlB : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * Returned person information
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person name
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * Person ID
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Person gender
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * Content of person description field
         * @type {Array.<string> || null}
         */
        this.PersonExDescriptions = null;

        /**
         * List of contained face images
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

        /**
         * Person creation time and date (`CreationTimestamp`), whose value is the number of milliseconds between the UNIX epoch time and the group creation time. 
The UNIX epoch time is 00:00:00, Thursday, January 1, 1970, Coordinated Universal Time (UTC). For more information, please see the UNIX time document.
         * @type {number || null}
         */
        this.CreationTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.PersonExDescriptions = 'PersonExDescriptions' in params ? params.PersonExDescriptions : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

    }
}

/**
 * Eyebrow information
 * @class
 */
class Eyebrow extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eyebrow thickness.
The `Type` values of the `AttributeItem` include: 0: light; 1: thick.
         * @type {AttributeItem || null}
         */
        this.EyebrowDensity = null;

        /**
         * Eyebrow curve.
The `Type` values of the `AttributeItem` include: 0: flat; 1: curved.
         * @type {AttributeItem || null}
         */
        this.EyebrowCurve = null;

        /**
         * Eyebrow length.
The `Type` values of the `AttributeItem` include: 0: short; 1: long.
         * @type {AttributeItem || null}
         */
        this.EyebrowLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EyebrowDensity) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowDensity)
            this.EyebrowDensity = obj;
        }

        if (params.EyebrowCurve) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowCurve)
            this.EyebrowCurve = obj;
        }

        if (params.EyebrowLength) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowLength)
            this.EyebrowLength = obj;
        }

    }
}

/**
 * AnalyzeDenseLandmarks request structure.
 * @class
 */
class AnalyzeDenseLandmarksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detect mode. 0: detects all faces that appear; 1: detects the largest face. 
Default value: 0. 
Specific information of facial feature localization (facial keypoints) of up to 5 faces can be returned.
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.  
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.  
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.  
The download speed and stability of non-Tencent Cloud URLs may be low.  
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Algorithm model version used by the Face Recognition service. You can enter only `3.0` for this API.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * DetectFace response structure.
 * @class
 */
class DetectFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width of requested image.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Height of requested image.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Face information list, including face coordinate information, attribute information (if needed), and quality score information (if needed).
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfos = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceInfos) {
            this.FaceInfos = new Array();
            for (let z in params.FaceInfos) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfos[z]);
                this.FaceInfos.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyPerson request structure.
 * @class
 */
class CopyPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * List of groups to join. The array element value is the `GroupId` in the `CreateGroup` API.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

    }
}

/**
 * GetPersonListNum request structure.
 * @class
 */
class GetPersonListNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * SearchPersonsReturnsByGroup request structure.
 * @class
 */
class SearchPersonsReturnsByGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of groups to be searched for (up to 60). The array element value is the `GroupId` in the `CreateGroup` API.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Maximum number of recognizable faces. Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 10.
`MaxFaceNum` is used to control the number of faces to be searched for if there are multiple faces in the input image to be recognized.
For example, if the input image in `Image` or `Url` contains multiple faces and `MaxFaceNum` is 5, top 5 faces with the largest size in the image will be recognized.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Minimum height and width of face in px. Default value: 34. A value below 34 will affect the search accuracy. You are recommended to set this parameter to 80.
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * Detected faces, which is corresponding to the maximum number of returned most matching persons. Default value: 5. Maximum value: 10.  
For example, if `MaxFaceNum` is 3, `MaxPersonNumPerGroup` is 3, and the `GroupIds` length is 3, up to 45 (3 * 5 * 3) persons will be returned.
         * @type {number || null}
         */
        this.MaxPersonNumPerGroup = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * In the output parameter `Score`, the result will be returned only if the result value is above the `FaceMatchThreshold` value. Default value: 0.
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * Whether to return person details. 0: no; 1: yes. Default value: 0. Other values will be considered as 0 by default
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNumPerGroup = 'MaxPersonNumPerGroup' in params ? params.MaxPersonNumPerGroup : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * DeletePersonFromGroup response structure.
 * @class
 */
class DeletePersonFromGroupResponse extends  AbstractModel {
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
 * VerifyPerson response structure.
 * @class
 */
class VerifyPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Similarity between given face image and `PersonId`. If there are multiple faces under the `PersonId`, their information will be fused for verification.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * Whether the person in the image matches the `PersonId`.
         * @type {boolean || null}
         */
        this.IsMatch = null;

        /**
         * Algorithm model version used for face recognition in the group where the `Person` is, which is set when the group is created. For more information, please see [Algorithm Model Version](https://intl.cloud.tencent.com/document/product/867/40042?from_cn_redirect=1)
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AnalyzeFace response structure.
 * @class
 */
class AnalyzeFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Width of requested image.
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * Height of requested image.
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * Specific information of facial feature localization (facial keypoints).
         * @type {Array.<FaceShape> || null}
         */
        this.FaceShapeSet = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceShapeSet) {
            this.FaceShapeSet = new Array();
            for (let z in params.FaceShapeSet) {
                let obj = new FaceShape();
                obj.deserialize(params.FaceShapeSet[z]);
                this.FaceShapeSet.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetGroupInfo request structure.
 * @class
 */
class GetGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Specific information of facial feature localization (facial keypoints).
 * @class
 */
class FaceShape extends  AbstractModel {
    constructor(){
        super();

        /**
         * 21 points that describe the face contour.
         * @type {Array.<Point> || null}
         */
        this.FaceProfile = null;

        /**
         * 8 points that describe the left eye.
         * @type {Array.<Point> || null}
         */
        this.LeftEye = null;

        /**
         * 8 points that describe the right eye.
         * @type {Array.<Point> || null}
         */
        this.RightEye = null;

        /**
         * 8 points that describe the left eyebrow.
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBrow = null;

        /**
         * 8 points that describe the right eyebrow.
         * @type {Array.<Point> || null}
         */
        this.RightEyeBrow = null;

        /**
         * 22 points that describe the mouth.
         * @type {Array.<Point> || null}
         */
        this.Mouth = null;

        /**
         * 13 points that describe the nose.
         * @type {Array.<Point> || null}
         */
        this.Nose = null;

        /**
         * 1 point that describes the left pupil.
         * @type {Array.<Point> || null}
         */
        this.LeftPupil = null;

        /**
         * 1 point that describes the right pupil.
         * @type {Array.<Point> || null}
         */
        this.RightPupil = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceProfile) {
            this.FaceProfile = new Array();
            for (let z in params.FaceProfile) {
                let obj = new Point();
                obj.deserialize(params.FaceProfile[z]);
                this.FaceProfile.push(obj);
            }
        }

        if (params.LeftEye) {
            this.LeftEye = new Array();
            for (let z in params.LeftEye) {
                let obj = new Point();
                obj.deserialize(params.LeftEye[z]);
                this.LeftEye.push(obj);
            }
        }

        if (params.RightEye) {
            this.RightEye = new Array();
            for (let z in params.RightEye) {
                let obj = new Point();
                obj.deserialize(params.RightEye[z]);
                this.RightEye.push(obj);
            }
        }

        if (params.LeftEyeBrow) {
            this.LeftEyeBrow = new Array();
            for (let z in params.LeftEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBrow[z]);
                this.LeftEyeBrow.push(obj);
            }
        }

        if (params.RightEyeBrow) {
            this.RightEyeBrow = new Array();
            for (let z in params.RightEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBrow[z]);
                this.RightEyeBrow.push(obj);
            }
        }

        if (params.Mouth) {
            this.Mouth = new Array();
            for (let z in params.Mouth) {
                let obj = new Point();
                obj.deserialize(params.Mouth[z]);
                this.Mouth.push(obj);
            }
        }

        if (params.Nose) {
            this.Nose = new Array();
            for (let z in params.Nose) {
                let obj = new Point();
                obj.deserialize(params.Nose[z]);
                this.Nose.push(obj);
            }
        }

        if (params.LeftPupil) {
            this.LeftPupil = new Array();
            for (let z in params.LeftPupil) {
                let obj = new Point();
                obj.deserialize(params.LeftPupil[z]);
                this.LeftPupil.push(obj);
            }
        }

        if (params.RightPupil) {
            this.RightPupil = new Array();
            for (let z in params.RightPupil) {
                let obj = new Point();
                obj.deserialize(params.RightPupil[z]);
                this.RightPupil.push(obj);
            }
        }

    }
}

/**
 * Face information list.
 * @class
 */
class FaceDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Position of detected face frame.
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * Face attribute information. According to the types specified in `FaceAttributesType`, the following face attributes will be returned: age (Age), beauty score (Beauty), 
emotion (Emotion), eye information (Eye), eyebrow information (Eyebrow), gender (Gender), 
hair information (Hair), hat information (Hat), pose (Headpose), mask information (Mask), mouth information (Mouse), beard information (Moustache), 
nose information (Nose), face shape (Shape), skin color (Skin), and smile information (Smile).  
If no types are specified in `FaceAttributesType`, the detailed items returned by `FaceDetailAttributesInfo` will be meaningless.
         * @type {FaceDetailAttributesInfo || null}
         */
        this.FaceDetailAttributesInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

        if (params.FaceDetailAttributesInfo) {
            let obj = new FaceDetailAttributesInfo();
            obj.deserialize(params.FaceDetailAttributesInfo)
            this.FaceDetailAttributesInfo = obj;
        }

    }
}

/**
 * Hair information in face attributes.
 * @class
 */
class FaceHairAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: shaved head, 1: short hair, 2: medium hair, 3: long hair, 4: braid
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 0: with bangs, 1: no bangs
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bang = null;

        /**
         * 0: black, 1: golden, 2: brown, 3: gray
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.Length = 'Length' in params ? params.Length : null;
        this.Bang = 'Bang' in params ? params.Bang : null;
        this.Color = 'Color' in params ? params.Color : null;

    }
}

/**
 * Dense keypoint details
 * @class
 */
class DenseFaceShape extends  AbstractModel {
    constructor(){
        super();

        /**
         * Horizontal coordinate of the top-left corner of face frame.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Vertical coordinate of the top-left corner of face frame.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Face frame width.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Face frame height.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * XX points that describe the left eye.
         * @type {Array.<Point> || null}
         */
        this.LeftEye = null;

        /**
         * XX points that describe the right eye.
         * @type {Array.<Point> || null}
         */
        this.RightEye = null;

        /**
         * XX points that describe the left eyebrow.
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBrow = null;

        /**
         * XX points that describe the right eyebrow.
         * @type {Array.<Point> || null}
         */
        this.RightEyeBrow = null;

        /**
         * XX points that describe the outer contour of the mouth, which are returned from left anticlockwise.
         * @type {Array.<Point> || null}
         */
        this.MouthOutside = null;

        /**
         * XX points that describe the inner contour of the mouth, which are returned from left anticlockwise.
         * @type {Array.<Point> || null}
         */
        this.MouthInside = null;

        /**
         * XX points that describe the nose.
         * @type {Array.<Point> || null}
         */
        this.Nose = null;

        /**
         * XX points that describe the left pupil.
         * @type {Array.<Point> || null}
         */
        this.LeftPupil = null;

        /**
         * XX points that describe the right pupil.
         * @type {Array.<Point> || null}
         */
        this.RightPupil = null;

        /**
         * XX points that describe the midline.
         * @type {Array.<Point> || null}
         */
        this.CentralAxis = null;

        /**
         * XX points that describe the chin.
         * @type {Array.<Point> || null}
         */
        this.Chin = null;

        /**
         * XX points that describe the left eye bag.
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBags = null;

        /**
         * XX points that describe the right eye bag.
         * @type {Array.<Point> || null}
         */
        this.RightEyeBags = null;

        /**
         * XX points that describe the forehead.
         * @type {Array.<Point> || null}
         */
        this.Forehead = null;

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

        if (params.LeftEye) {
            this.LeftEye = new Array();
            for (let z in params.LeftEye) {
                let obj = new Point();
                obj.deserialize(params.LeftEye[z]);
                this.LeftEye.push(obj);
            }
        }

        if (params.RightEye) {
            this.RightEye = new Array();
            for (let z in params.RightEye) {
                let obj = new Point();
                obj.deserialize(params.RightEye[z]);
                this.RightEye.push(obj);
            }
        }

        if (params.LeftEyeBrow) {
            this.LeftEyeBrow = new Array();
            for (let z in params.LeftEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBrow[z]);
                this.LeftEyeBrow.push(obj);
            }
        }

        if (params.RightEyeBrow) {
            this.RightEyeBrow = new Array();
            for (let z in params.RightEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBrow[z]);
                this.RightEyeBrow.push(obj);
            }
        }

        if (params.MouthOutside) {
            this.MouthOutside = new Array();
            for (let z in params.MouthOutside) {
                let obj = new Point();
                obj.deserialize(params.MouthOutside[z]);
                this.MouthOutside.push(obj);
            }
        }

        if (params.MouthInside) {
            this.MouthInside = new Array();
            for (let z in params.MouthInside) {
                let obj = new Point();
                obj.deserialize(params.MouthInside[z]);
                this.MouthInside.push(obj);
            }
        }

        if (params.Nose) {
            this.Nose = new Array();
            for (let z in params.Nose) {
                let obj = new Point();
                obj.deserialize(params.Nose[z]);
                this.Nose.push(obj);
            }
        }

        if (params.LeftPupil) {
            this.LeftPupil = new Array();
            for (let z in params.LeftPupil) {
                let obj = new Point();
                obj.deserialize(params.LeftPupil[z]);
                this.LeftPupil.push(obj);
            }
        }

        if (params.RightPupil) {
            this.RightPupil = new Array();
            for (let z in params.RightPupil) {
                let obj = new Point();
                obj.deserialize(params.RightPupil[z]);
                this.RightPupil.push(obj);
            }
        }

        if (params.CentralAxis) {
            this.CentralAxis = new Array();
            for (let z in params.CentralAxis) {
                let obj = new Point();
                obj.deserialize(params.CentralAxis[z]);
                this.CentralAxis.push(obj);
            }
        }

        if (params.Chin) {
            this.Chin = new Array();
            for (let z in params.Chin) {
                let obj = new Point();
                obj.deserialize(params.Chin[z]);
                this.Chin.push(obj);
            }
        }

        if (params.LeftEyeBags) {
            this.LeftEyeBags = new Array();
            for (let z in params.LeftEyeBags) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBags[z]);
                this.LeftEyeBags.push(obj);
            }
        }

        if (params.RightEyeBags) {
            this.RightEyeBags = new Array();
            for (let z in params.RightEyeBags) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBags[z]);
                this.RightEyeBags.push(obj);
            }
        }

        if (params.Forehead) {
            this.Forehead = new Array();
            for (let z in params.Forehead) {
                let obj = new Point();
                obj.deserialize(params.Forehead[z]);
                this.Forehead.push(obj);
            }
        }

    }
}

/**
 * AnalyzeFace request structure.
 * @class
 */
class AnalyzeFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detection mode. 0: detect all faces that appear; 1: detect the largest face. Default value: 0. The facial feature localization information (facial keypoints) of up to 10 faces can be returned.
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Algorithm model version used by the Face Recognition service. Valid values: 2.0, 3.0.  
This parameter is `3.0` by default starting from April 2, 2020. If it is left empty for accounts that used this API previously, `2.0` will be used by default.  
Different algorithm model versions correspond to different face recognition algorithms. The new version has a better overall effect than the legacy version and is thus recommended.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * Coordinates
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * X coordinate
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y coordinate
         * @type {number || null}
         */
        this.Y = null;

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

    }
}

/**
 * DetectFace request structure.
 * @class
 */
class DetectFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of processable faces. Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 120. 
This parameter is used to control the number of faces in the image to be detected. The smaller the value, the faster the processing.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Minimum height and width of face in px.
Default value: 34. You are recommended to keep it at or above 34.
Faces below the `MinFaceSize` value will not be detected.
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Whether the face attribute information (FaceAttributesInfo) needs to be returned. 0: no; 1: yes. Default value: 0. 
If the value is not 1, it will be deemed as no need to return, and `FaceAttributesInfo` is meaningless in this case.  
The face attribute information of up to 5 largest faces in the image will be returned, and `FaceAttributesInfo` of the 6th and rest faces is meaningless.  
Extracting face attribute information is quite time-consuming. If face attribute information is not required, you are recommended to disable this feature to speed up face detection.
         * @type {number || null}
         */
        this.NeedFaceAttributes = null;

        /**
         * Whether to enable quality detection. 0: no; 1: yes. Default value: 0. 
If the value is not 1, it will be deemed not to perform quality detection.
The face quality score information of up to 30 largest faces in the image will be returned, and `FaceQualityInfo` of the 31st and rest faces is meaningless.  
You are recommended to enable this feature for the face adding operation.
         * @type {number || null}
         */
        this.NeedQualityDetection = null;

        /**
         * Algorithm model version used by the Face Recognition service. Valid values: 2.0, 3.0.  
This parameter is `3.0` by default starting from April 2, 2020. If it is left empty for accounts that used this API previously, `2.0` will be used by default. 
Different algorithm model versions correspond to different face recognition algorithms. The 3.0 version has a better overall effect than the legacy version and is thus recommended.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.NeedFaceAttributes = 'NeedFaceAttributes' in params ? params.NeedFaceAttributes : null;
        this.NeedQualityDetection = 'NeedQualityDetection' in params ? params.NeedQualityDetection : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CreatePerson response structure.
 * @class
 */
class CreatePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of face image.
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * Position of detected face frame.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * `PersonId` of suspected duplicate person. 
This parameter is meaningful only if the `UniquePersonControl` parameter is not 0 and there is a suspected duplicate person in the group.
         * @type {string || null}
         */
        this.SimilarPersonId = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceId = 'FaceId' in params ? params.FaceId : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.SimilarPersonId = 'SimilarPersonId' in params ? params.SimilarPersonId : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonBaseInfo request structure.
 * @class
 */
class GetPersonBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * SearchFaces response structure.
 * @class
 */
class SearchFacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognition result.
         * @type {Array.<Result> || null}
         */
        this.Results = null;

        /**
         * Number of faces included in searched groups.
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
                let obj = new Result();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Custom description field of the group to be modified, which is a `key-value`
 * @class
 */
class GroupExDescriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom group description field index, whose value starts from 0
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.GroupExDescriptionIndex = null;

        /**
         * Content of the custom group description field to be updated
         * @type {string || null}
         */
        this.GroupExDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupExDescriptionIndex = 'GroupExDescriptionIndex' in params ? params.GroupExDescriptionIndex : null;
        this.GroupExDescription = 'GroupExDescription' in params ? params.GroupExDescription : null;

    }
}

/**
 * VerifyFace request structure.
 * @class
 */
class VerifyFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the person to be verified. For more information on `PersonId`, please see the group management APIs.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
If there are multiple faces in the image, only the face with the largest size will be selected.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CopyPerson response structure.
 * @class
 */
class CopyPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of groups successfully added to.
         * @type {number || null}
         */
        this.SucGroupNum = null;

        /**
         * List of groups successfully added to.
         * @type {Array.<string> || null}
         */
        this.SucGroupIds = null;

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
        this.SucGroupNum = 'SucGroupNum' in params ? params.SucGroupNum : null;
        this.SucGroupIds = 'SucGroupIds' in params ? params.SucGroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Hair information
 * @class
 */
class Hair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hair length information.
The `Type` values of the `AttributeItem` include: 0: shaved head, 1: short hair, 2: medium hair, 3: long hair, 4: braid.
         * @type {AttributeItem || null}
         */
        this.Length = null;

        /**
         * Bang information.
The `Type` values of the `AttributeItem` include: 0: no bang; 1: bang detected.
         * @type {AttributeItem || null}
         */
        this.Bang = null;

        /**
         * Hair color information.
The `Type` values of the `AttributeItem` include: 0: black; 1: golden; 2: brown; 3: gray.
         * @type {AttributeItem || null}
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

        if (params.Length) {
            let obj = new AttributeItem();
            obj.deserialize(params.Length)
            this.Length = obj;
        }

        if (params.Bang) {
            let obj = new AttributeItem();
            obj.deserialize(params.Bang)
            this.Bang = obj;
        }

        if (params.Color) {
            let obj = new AttributeItem();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

    }
}

/**
 * GetPersonListNum response structure.
 * @class
 */
class GetPersonListNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of persons
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * Number of faces
         * @type {number || null}
         */
        this.FaceNum = null;

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
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonList request structure.
 * @class
 */
class GetPersonListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Starting number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 10. Maximum value: 1000
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Face attribute information. According to the types specified in `FaceAttributesType`, the following face attributes will be returned: age (Age), beauty score (Beauty), 
emotion (Emotion), eye information (Eye), eyebrow information (Eyebrow), gender (Gender), 
hair information (Hair), hat information (Hat), pose (Headpose), mask information (Mask), mouth information (Mouse), beard information (Moustache), 
nose information (Nose), face shape (Shape), skin color (Skin), and smile information (Smile).  
If no types are specified in `FaceAttributesType`, the detailed items returned by `FaceDetailAttributesInfo` will be meaningless.
 * @class
 */
class FaceDetailAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Age. Value range: [0,65], where 65 indicates 65 years old or above. 
If `FaceAttributesType` does not include `Age` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Age = null;

        /**
         * Beauty score. Value range: [0,100]. 
If `FaceAttributesType` does not include `Beauty` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Beauty = null;

        /**
         * Emotion, including relaxed, happy, surprised, angry, sad, disgusted, and scared. 
The `Type` values of the `AttributeItem` include: 0: relaxed; 1: happy; 2: surprised; 3: angry; 4: sad; 5: disgusted; 6: scared
If `FaceAttributesType` does not include `Emotion` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Emotion = null;

        /**
         * Eye information, including whether glasses are worn, whether eyes are closed, whether the person has double eyelids, and the eye size. 
If `FaceAttributesType` does not include `Eye` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {Eye || null}
         */
        this.Eye = null;

        /**
         * Eyebrow information, including whether the eyebrows are thick, curved, or long. 
If `FaceAttributesType` does not include `Eyebrow` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {Eyebrow || null}
         */
        this.Eyebrow = null;

        /**
         * Gender information. 
The `Type` values of the `AttributeItem` include: 0: male; 1: female.	
If `FaceAttributesType` does not include `Gender` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Gender = null;

        /**
         * Hair information, including length, bang, and color. 
If `FaceAttributesType` does not include `Hair` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {Hair || null}
         */
        this.Hair = null;

        /**
         * Hat information, including whether a hat is worn, hat style, and hat color. 
If `FaceAttributesType` does not include `Hat` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {Hat || null}
         */
        this.Hat = null;

        /**
         * Pose information, including the face pitch, yaw, and roll. 
If `FaceAttributesType` does not include `Headpose` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {HeadPose || null}
         */
        this.HeadPose = null;

        /**
         * Mask information. 
The `Type` values of the `AttributeItem` include: 0: no mask; 1: the mask is worn and does not cover the face; 2: the mask is worn and covers the chin; 3: the mask is worn and covers the mouth; 4: the mask is worn properly.
If `FaceAttributesType` does not include `Mask` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Mask = null;

        /**
         * Mouth information, including whether the mouth is open and the lip thickness. 
If `FaceAttributesType` does not include `Mouth` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {Mouth || null}
         */
        this.Mouth = null;

        /**
         * Beard information.
The `Type` values of the `AttributeItem` include: 0: no beard; 1: beard detected. 
If `FaceAttributesType` does not include `Moustache` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Moustache = null;

        /**
         * Nose information. 
The `Type` values of the `AttributeItem` include: 0: upturned nose; 1: aquiline nose; 2: general nose; 3: bulbous nose
If `FaceAttributesType` does not include `Nose` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Nose = null;

        /**
         * Face shape information. 
The `Type` values of the `AttributeItem` include: 0: square; 1: triangular; 2: oval; 3: heart-shaped; 4: round.
If `FaceAttributesType` does not include `Shape` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Shape = null;

        /**
         * Skin color information. 
The `Type` values of the `AttributeItem` include: 0: yellow; 1: brown; 2: black; 3: white.
If `FaceAttributesType` does not include `Skin` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {AttributeItem || null}
         */
        this.Skin = null;

        /**
         * Smile level. Value range: [0,100]. 
If `FaceAttributesType` does not include `Smile` or more than 5 faces are detected, this parameter will still be returned but meaningless.
         * @type {number || null}
         */
        this.Smile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;
        this.Beauty = 'Beauty' in params ? params.Beauty : null;

        if (params.Emotion) {
            let obj = new AttributeItem();
            obj.deserialize(params.Emotion)
            this.Emotion = obj;
        }

        if (params.Eye) {
            let obj = new Eye();
            obj.deserialize(params.Eye)
            this.Eye = obj;
        }

        if (params.Eyebrow) {
            let obj = new Eyebrow();
            obj.deserialize(params.Eyebrow)
            this.Eyebrow = obj;
        }

        if (params.Gender) {
            let obj = new AttributeItem();
            obj.deserialize(params.Gender)
            this.Gender = obj;
        }

        if (params.Hair) {
            let obj = new Hair();
            obj.deserialize(params.Hair)
            this.Hair = obj;
        }

        if (params.Hat) {
            let obj = new Hat();
            obj.deserialize(params.Hat)
            this.Hat = obj;
        }

        if (params.HeadPose) {
            let obj = new HeadPose();
            obj.deserialize(params.HeadPose)
            this.HeadPose = obj;
        }

        if (params.Mask) {
            let obj = new AttributeItem();
            obj.deserialize(params.Mask)
            this.Mask = obj;
        }

        if (params.Mouth) {
            let obj = new Mouth();
            obj.deserialize(params.Mouth)
            this.Mouth = obj;
        }

        if (params.Moustache) {
            let obj = new AttributeItem();
            obj.deserialize(params.Moustache)
            this.Moustache = obj;
        }

        if (params.Nose) {
            let obj = new AttributeItem();
            obj.deserialize(params.Nose)
            this.Nose = obj;
        }

        if (params.Shape) {
            let obj = new AttributeItem();
            obj.deserialize(params.Shape)
            this.Shape = obj;
        }

        if (params.Skin) {
            let obj = new AttributeItem();
            obj.deserialize(params.Skin)
            this.Skin = obj;
        }
        this.Smile = 'Smile' in params ? params.Smile : null;

    }
}

/**
 * DeleteFace response structure.
 * @class
 */
class DeleteFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully deleted faces
         * @type {number || null}
         */
        this.SucDeletedNum = null;

        /**
         * List of IDs of successfully deleted faces
         * @type {Array.<string> || null}
         */
        this.SucFaceIds = null;

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
        this.SucDeletedNum = 'SucDeletedNum' in params ? params.SucDeletedNum : null;
        this.SucFaceIds = 'SucFaceIds' in params ? params.SucFaceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePerson response structure.
 * @class
 */
class DeletePersonResponse extends  AbstractModel {
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
 * Face attribute information
 * @class
 */
class AttributeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute value
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Probability of recognizing `Type`, which indicates the probability of correct recognition. Value range: [0,1].
         * @type {number || null}
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * Position of detected face frame
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Horizontal coordinate of the top-left corner of face frame. 
The face frame encompasses the facial features and is extended accordingly. If it is larger than the image, the coordinates will be negative. 
If you want to capture a complete face, you can set the negative coordinates to 0 if the `completeness` score meets the requirement.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Vertical coordinate of the top-left corner of face frame. 
The face frame encompasses the facial features and is extended accordingly. If it is larger than the image, the coordinates will be negative. 
If you want to capture a complete face, you can set the negative coordinates to 0 if the `completeness` score meets the requirement.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Face width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Face height
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
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * ModifyPersonGroupInfo response structure.
 * @class
 */
class ModifyPersonGroupInfoResponse extends  AbstractModel {
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
 * SearchFaces request structure.
 * @class
 */
class SearchFacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of groups to be searched for (up to 100). The array element value is the `GroupId` in the `CreateGroup` API.
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * Base64-encoded image data, which cannot exceed 5 MB.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Image URL. The image cannot exceed 5 MB in size after being Base64-encoded.
The long side cannot exceed 4,000 px for images in .jpg format or 2,000 px for images in other formats.
Either `Url` or `Image` must be provided; if both are provided, only `Url` will be used.  
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. 
The download speed and stability of non-Tencent Cloud URLs may be low.
.png, .jpg, .jpeg, and .bmp images are supported, while .gif images are not.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Maximum number of recognizable faces. Default value: 1 (i.e., detecting only the face with the largest size in the image). Maximum value: 10. 
`MaxFaceNum` is used to control the number of faces to be searched for if there are multiple faces in the input image to be recognized. 
For example, if the input image in `Image` or `Url` contains multiple faces and `MaxFaceNum` is 5, top 5 faces with the largest size in the image will be recognized.
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * Minimum height and width of face in px. Default value: 34. Face images whose value is below 34 cannot be recognized. You are recommended to set this parameter to 80.
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * Number of the most similar persons returned for faces recognized in one single image. Default value: 5. Maximum value: 100. 
For example, if `MaxFaceNum` is 1 and `MaxPersonNum` is 8, information of the top 8 most similar persons will be returned.
The greater the value, the longer the processing time. You are recommended to set a value below 10.
         * @type {number || null}
         */
        this.MaxPersonNum = null;

        /**
         * Whether to return person details. 0: no; 1: yes. Default value: 0. Other values will be considered as 0 by default
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * Image quality control. 
0: no control. 
1: low quality requirement. The image has one or more of the following problems: extreme blurriness, covered eyes, covered nose, and covered mouth. 
2: average quality requirement. The image has at least three of following problems: extreme brightness, extreme dimness, blurriness or average blurriness, covered eyebrows, covered cheeks, and covered chin. 
3: high quality requirement. The image has one to two of following problems: extreme brightness, extreme dimness, average blurriness, covered eyebrows, covered cheeks, and covered chin. 
4: very high quality requirement. The image is optimal in all dimensions or only has a slight problem in one dimension. 
Default value: 0. 
If the image quality does not meet the requirement, the returned result will prompt that the detected image quality is unsatisfactory.
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * In the output parameter `Score`, the result will be returned only if the result value is above the `FaceMatchThreshold` value. Default value: 0.
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * Whether to enable the support for rotated image recognition. 0: no; 1: yes. Default value: 0. When the face in the image is rotated and the image has no EXIF information, if this parameter is not enabled, the face in the image cannot be correctly detected and recognized. If you are sure that the input image contains EXIF information or the face in the image will not be rotated, do not enable this parameter, as the overall time consumption may increase by hundreds of milliseconds after it is enabled.
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * DeletePersonFromGroup request structure.
 * @class
 */
class DeletePersonFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Person ID, which is the `PersonId` in the `CreatePerson` API
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Group ID, which is the `GroupId` in the `CreateGroup` API
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateGroup response structure.
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Algorithm model version used for face recognition.
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetPersonGroupInfoResponse: GetPersonGroupInfoResponse,
    Eye: Eye,
    Candidate: Candidate,
    ModifyGroupResponse: ModifyGroupResponse,
    GetGroupInfoResponse: GetGroupInfoResponse,
    DeletePersonRequest: DeletePersonRequest,
    DetectLiveFaceResponse: DetectLiveFaceResponse,
    AnalyzeDenseLandmarksResponse: AnalyzeDenseLandmarksResponse,
    SearchPersonsReturnsByGroupResponse: SearchPersonsReturnsByGroupResponse,
    DeleteFaceRequest: DeleteFaceRequest,
    HeadPose: HeadPose,
    ModifyPersonBaseInfoResponse: ModifyPersonBaseInfoResponse,
    GetGroupListResponse: GetGroupListResponse,
    GroupInfo: GroupInfo,
    GetPersonListResponse: GetPersonListResponse,
    Hat: Hat,
    FaceQualityCompleteness: FaceQualityCompleteness,
    FaceAttributesInfo: FaceAttributesInfo,
    DetectFaceAttributesRequest: DetectFaceAttributesRequest,
    ModifyGroupRequest: ModifyGroupRequest,
    CreatePersonRequest: CreatePersonRequest,
    GetGroupListRequest: GetGroupListRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    CreateFaceResponse: CreateFaceResponse,
    ModifyPersonBaseInfoRequest: ModifyPersonBaseInfoRequest,
    DetectFaceAttributesResponse: DetectFaceAttributesResponse,
    GroupCandidate: GroupCandidate,
    SearchPersonsResponse: SearchPersonsResponse,
    VerifyPersonRequest: VerifyPersonRequest,
    CompareFaceResponse: CompareFaceResponse,
    PersonExDescriptionInfo: PersonExDescriptionInfo,
    DetectLiveFaceRequest: DetectLiveFaceRequest,
    VerifyFaceResponse: VerifyFaceResponse,
    GetPersonBaseInfoResponse: GetPersonBaseInfoResponse,
    ResultsReturnsByGroup: ResultsReturnsByGroup,
    CreateFaceRequest: CreateFaceRequest,
    Mouth: Mouth,
    CreateGroupRequest: CreateGroupRequest,
    PersonGroupInfo: PersonGroupInfo,
    ModifyPersonGroupInfoRequest: ModifyPersonGroupInfoRequest,
    GetPersonGroupInfoRequest: GetPersonGroupInfoRequest,
    Result: Result,
    SearchFacesReturnsByGroupResponse: SearchFacesReturnsByGroupResponse,
    FaceInfo: FaceInfo,
    DeleteGroupResponse: DeleteGroupResponse,
    SearchPersonsRequest: SearchPersonsRequest,
    SearchFacesReturnsByGroupRequest: SearchFacesReturnsByGroupRequest,
    FaceQualityInfo: FaceQualityInfo,
    CompareFaceRequest: CompareFaceRequest,
    PersonInfo: PersonInfo,
    Eyebrow: Eyebrow,
    AnalyzeDenseLandmarksRequest: AnalyzeDenseLandmarksRequest,
    DetectFaceResponse: DetectFaceResponse,
    CopyPersonRequest: CopyPersonRequest,
    GetPersonListNumRequest: GetPersonListNumRequest,
    SearchPersonsReturnsByGroupRequest: SearchPersonsReturnsByGroupRequest,
    DeletePersonFromGroupResponse: DeletePersonFromGroupResponse,
    VerifyPersonResponse: VerifyPersonResponse,
    AnalyzeFaceResponse: AnalyzeFaceResponse,
    GetGroupInfoRequest: GetGroupInfoRequest,
    FaceShape: FaceShape,
    FaceDetailInfo: FaceDetailInfo,
    FaceHairAttributesInfo: FaceHairAttributesInfo,
    DenseFaceShape: DenseFaceShape,
    AnalyzeFaceRequest: AnalyzeFaceRequest,
    Point: Point,
    DetectFaceRequest: DetectFaceRequest,
    CreatePersonResponse: CreatePersonResponse,
    GetPersonBaseInfoRequest: GetPersonBaseInfoRequest,
    SearchFacesResponse: SearchFacesResponse,
    GroupExDescriptionInfo: GroupExDescriptionInfo,
    VerifyFaceRequest: VerifyFaceRequest,
    CopyPersonResponse: CopyPersonResponse,
    Hair: Hair,
    GetPersonListNumResponse: GetPersonListNumResponse,
    GetPersonListRequest: GetPersonListRequest,
    FaceDetailAttributesInfo: FaceDetailAttributesInfo,
    DeleteFaceResponse: DeleteFaceResponse,
    DeletePersonResponse: DeletePersonResponse,
    AttributeItem: AttributeItem,
    FaceRect: FaceRect,
    ModifyPersonGroupInfoResponse: ModifyPersonGroupInfoResponse,
    SearchFacesRequest: SearchFacesRequest,
    DeletePersonFromGroupRequest: DeletePersonFromGroupRequest,
    CreateGroupResponse: CreateGroupResponse,

}
