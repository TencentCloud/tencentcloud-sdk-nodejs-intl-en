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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const GetPersonGroupInfoResponse = models.GetPersonGroupInfoResponse;
const Eye = models.Eye;
const Candidate = models.Candidate;
const ModifyGroupResponse = models.ModifyGroupResponse;
const GetGroupInfoResponse = models.GetGroupInfoResponse;
const DeletePersonRequest = models.DeletePersonRequest;
const DetectLiveFaceResponse = models.DetectLiveFaceResponse;
const AnalyzeDenseLandmarksResponse = models.AnalyzeDenseLandmarksResponse;
const SearchPersonsReturnsByGroupResponse = models.SearchPersonsReturnsByGroupResponse;
const DeleteFaceRequest = models.DeleteFaceRequest;
const HeadPose = models.HeadPose;
const ModifyPersonBaseInfoResponse = models.ModifyPersonBaseInfoResponse;
const GetGroupListResponse = models.GetGroupListResponse;
const GroupInfo = models.GroupInfo;
const GetPersonListResponse = models.GetPersonListResponse;
const Hat = models.Hat;
const FaceQualityCompleteness = models.FaceQualityCompleteness;
const FaceAttributesInfo = models.FaceAttributesInfo;
const DetectFaceAttributesRequest = models.DetectFaceAttributesRequest;
const ModifyGroupRequest = models.ModifyGroupRequest;
const CreatePersonRequest = models.CreatePersonRequest;
const GetGroupListRequest = models.GetGroupListRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const CreateFaceResponse = models.CreateFaceResponse;
const ModifyPersonBaseInfoRequest = models.ModifyPersonBaseInfoRequest;
const DetectFaceAttributesResponse = models.DetectFaceAttributesResponse;
const GroupCandidate = models.GroupCandidate;
const SearchPersonsResponse = models.SearchPersonsResponse;
const VerifyPersonRequest = models.VerifyPersonRequest;
const CompareFaceResponse = models.CompareFaceResponse;
const PersonExDescriptionInfo = models.PersonExDescriptionInfo;
const DetectLiveFaceRequest = models.DetectLiveFaceRequest;
const VerifyFaceResponse = models.VerifyFaceResponse;
const GetPersonBaseInfoResponse = models.GetPersonBaseInfoResponse;
const ResultsReturnsByGroup = models.ResultsReturnsByGroup;
const CreateFaceRequest = models.CreateFaceRequest;
const Mouth = models.Mouth;
const CreateGroupRequest = models.CreateGroupRequest;
const PersonGroupInfo = models.PersonGroupInfo;
const ModifyPersonGroupInfoRequest = models.ModifyPersonGroupInfoRequest;
const GetPersonGroupInfoRequest = models.GetPersonGroupInfoRequest;
const Result = models.Result;
const SearchFacesReturnsByGroupResponse = models.SearchFacesReturnsByGroupResponse;
const FaceInfo = models.FaceInfo;
const DeleteGroupResponse = models.DeleteGroupResponse;
const SearchPersonsRequest = models.SearchPersonsRequest;
const SearchFacesReturnsByGroupRequest = models.SearchFacesReturnsByGroupRequest;
const FaceQualityInfo = models.FaceQualityInfo;
const CompareFaceRequest = models.CompareFaceRequest;
const PersonInfo = models.PersonInfo;
const Eyebrow = models.Eyebrow;
const AnalyzeDenseLandmarksRequest = models.AnalyzeDenseLandmarksRequest;
const DetectFaceResponse = models.DetectFaceResponse;
const CopyPersonRequest = models.CopyPersonRequest;
const GetPersonListNumRequest = models.GetPersonListNumRequest;
const SearchPersonsReturnsByGroupRequest = models.SearchPersonsReturnsByGroupRequest;
const DeletePersonFromGroupResponse = models.DeletePersonFromGroupResponse;
const VerifyPersonResponse = models.VerifyPersonResponse;
const AnalyzeFaceResponse = models.AnalyzeFaceResponse;
const GetGroupInfoRequest = models.GetGroupInfoRequest;
const FaceShape = models.FaceShape;
const FaceDetailInfo = models.FaceDetailInfo;
const FaceHairAttributesInfo = models.FaceHairAttributesInfo;
const DenseFaceShape = models.DenseFaceShape;
const AnalyzeFaceRequest = models.AnalyzeFaceRequest;
const Point = models.Point;
const DetectFaceRequest = models.DetectFaceRequest;
const CreatePersonResponse = models.CreatePersonResponse;
const GetPersonBaseInfoRequest = models.GetPersonBaseInfoRequest;
const SearchFacesResponse = models.SearchFacesResponse;
const GroupExDescriptionInfo = models.GroupExDescriptionInfo;
const VerifyFaceRequest = models.VerifyFaceRequest;
const CopyPersonResponse = models.CopyPersonResponse;
const Hair = models.Hair;
const GetPersonListNumResponse = models.GetPersonListNumResponse;
const GetPersonListRequest = models.GetPersonListRequest;
const FaceDetailAttributesInfo = models.FaceDetailAttributesInfo;
const DeleteFaceResponse = models.DeleteFaceResponse;
const DeletePersonResponse = models.DeletePersonResponse;
const AttributeItem = models.AttributeItem;
const FaceRect = models.FaceRect;
const ModifyPersonGroupInfoResponse = models.ModifyPersonGroupInfoResponse;
const SearchFacesRequest = models.SearchFacesRequest;
const DeletePersonFromGroupRequest = models.DeletePersonFromGroupRequest;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * iai client
 * @class
 */
class IaiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iai.tencentcloudapi.com", "2020-03-03", credential, region, profile);
    }
    
    /**
     * This API is used to remove a person from a specified group. This operation only affects the group. If the person exists only in the group, the person will be deleted, and all face information of the person will also be deleted.
     * @param {DeletePersonFromGroupRequest} req
     * @param {function(string, DeletePersonFromGroupResponse):void} cb
     * @public
     */
    DeletePersonFromGroup(req, cb) {
        let resp = new DeletePersonFromGroupResponse();
        this.request("DeletePersonFromGroup", req, resp, cb);
    }

    /**
     * This API is used to recognize top K persons in one or more groups who are similar to the person in a given image, display the results **by group**, and rank the similarity within each group in a descending order.

Up to 10 faces in the image can be recognized at a time, and cross-group search is supported.

The maximum number of faces in a group that can be searched for at a time is subject to the group's algorithm model version (`FaceModelVersion`), which is 1 million for v2.0 or 3 million for v3.0.

This API recognizes each face of a person as an independent one. By contrast, the [SearchPersons](https://intl.cloud.tencent.com/document/product/867/44992?from_cn_redirect=1) and [SearchPersonsReturnsByGroup](https://intl.cloud.tencent.com/document/product/867/44991?from_cn_redirect=1) APIs fuse the features of all faces of a person; for example, if a person has 4 faces, they will fuse the features of the 4 faces and generate the summarized facial features of the person to make the search more accurate.

This API should be used together with the [CreateGroup API](https://intl.cloud.tencent.com/document/product/867/45015?from_cn_redirect=1).

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.


     * @param {SearchFacesReturnsByGroupRequest} req
     * @param {function(string, SearchFacesReturnsByGroupResponse):void} cb
     * @public
     */
    SearchFacesReturnsByGroup(req, cb) {
        let resp = new SearchFacesReturnsByGroupResponse();
        this.request("SearchFacesReturnsByGroup", req, resp, cb);
    }

    /**
     * This API is used to create an empty group. If the group already exists, an error will be returned.
Custom description fields can be created as needed to describe persons in the group.

A maximum of 100,000 groups or 50 million faces can be created under one `APPID`.

The maximum number of faces that can be included in one group varies by algorithm model version (`FaceModelVersion`), which is 1 million for v2.0 or 3 million for v3.0.
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * This API is used to get the information of a specified person, including name, gender, face, etc.
     * @param {GetPersonBaseInfoRequest} req
     * @param {function(string, GetPersonBaseInfoResponse):void} cb
     * @public
     */
    GetPersonBaseInfo(req, cb) {
        let resp = new GetPersonBaseInfoResponse();
        this.request("GetPersonBaseInfo", req, resp, cb);
    }

    /**
     * This API is used to detect the liveness of a user with a user-uploaded image. Its difference from video-based liveness detection lies in that the user does not need to speak, shake their head, or wink for detection.

Image-based liveness detection is suitable for scenarios where the image is a selfie or the requirement for attack defense is not high. If you have a higher security requirement for liveness detection, please use [Faceid](https://intl.cloud.tencent.com/product/faceid?from_cn_redirect=1).

>     
- The aspect ratio of the image should be close to 3:4 (width:height); otherwise, the score returned for the image will be meaningless. This API is suitable for selfie scenarios, and the score returned in other scenarios will be meaningless.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {DetectLiveFaceRequest} req
     * @param {function(string, DetectLiveFaceResponse):void} cb
     * @public
     */
    DetectLiveFace(req, cb) {
        let resp = new DetectLiveFaceResponse();
        this.request("DetectLiveFace", req, resp, cb);
    }

    /**
     * This API is used to add a set of face images to a person. One person can have up to 5 images. If a person exists in multiple groups, the images will be added to all those groups for the person.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {CreateFaceRequest} req
     * @param {function(string, CreateFaceResponse):void} cb
     * @public
     */
    CreateFace(req, cb) {
        let resp = new CreateFaceResponse();
        this.request("CreateFace", req, resp, cb);
    }

    /**
     * This API is used to delete a group and all persons in it. Meanwhile, all face information corresponding to the persons will be deleted. If a person exists in multiple groups at the same time, deleting a group will not delete the person, but the custom description field information in the group will be deleted. Custom description field information in other groups will not be affected.

     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * This API is used to get the number of persons in a specified group.
     * @param {GetPersonListNumRequest} req
     * @param {function(string, GetPersonListNumResponse):void} cb
     * @public
     */
    GetPersonListNum(req, cb) {
        let resp = new GetPersonListNumResponse();
        this.request("GetPersonListNum", req, resp, cb);
    }

    /**
     * This API is used to get the information of a specified person, including group, description, etc.
     * @param {GetPersonGroupInfoRequest} req
     * @param {function(string, GetPersonGroupInfoResponse):void} cb
     * @public
     */
    GetPersonGroupInfo(req, cb) {
        let resp = new GetPersonGroupInfoResponse();
        this.request("GetPersonGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to perform facial feature localization (aka facial keypoint localization) on a given image and calculate 90 facial keypoints that make up the contour of the face, including eyebrows (8 points on the left and 8 on the right), eyes (8 points on the left and 8 on the right), nose (13 points), mouth (22 points), face contour (21 points), and eyeballs or pupils (2 points).

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {AnalyzeFaceRequest} req
     * @param {function(string, AnalyzeFaceResponse):void} cb
     * @public
     */
    AnalyzeFace(req, cb) {
        let resp = new AnalyzeFaceResponse();
        this.request("AnalyzeFace", req, resp, cb);
    }

    /**
     * This API is used to modify the information of a person, including name, gender, etc. The changes of person name and gender will be synced to all the groups that contain the person.
     * @param {ModifyPersonBaseInfoRequest} req
     * @param {function(string, ModifyPersonBaseInfoResponse):void} cb
     * @public
     */
    ModifyPersonBaseInfo(req, cb) {
        let resp = new ModifyPersonBaseInfoResponse();
        this.request("ModifyPersonBaseInfo", req, resp, cb);
    }

    /**
     * This API is used to recognize top K persons in one or more groups who are similar to the person in a given image and rank the similarity in a descending order.

Up to 10 faces in an image can be recognized at a time, and up to 100 groups can be searched in at a time.

The maximum number of faces in a group that can be searched for at a time is subject to the group's algorithm model version (`FaceModelVersion`), which is 1 million for v2.0 or 3 million for v3.0.

This API recognizes each face of a person as an independent one. By contrast, the [SearchPersons](https://intl.cloud.tencent.com/document/product/867/44992?from_cn_redirect=1) and [SearchPersonsReturnsByGroup](https://intl.cloud.tencent.com/document/product/867/44991?from_cn_redirect=1) APIs fuse the features of all faces of a person; for example, if a person has 4 faces, they will fuse the features of the 4 faces and generate the summarized facial features of the person to make the search more accurate.


This API should be used together with the [CreateGroup API](https://intl.cloud.tencent.com/document/product/867/45015?from_cn_redirect=1).

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {SearchFacesRequest} req
     * @param {function(string, SearchFacesResponse):void} cb
     * @public
     */
    SearchFaces(req, cb) {
        let resp = new SearchFacesResponse();
        this.request("SearchFaces", req, resp, cb);
    }

    /**
     * This API is used to copy a person in a group to another group (without copying the description). One person can exist in up to 100 groups at the same time.
>     
- Note: if the version of the algorithm model was 2.0 when the person was created, the copy operation will fail if it is to copy to a group not on algorithm model v2.0.
     * @param {CopyPersonRequest} req
     * @param {function(string, CopyPersonResponse):void} cb
     * @public
     */
    CopyPerson(req, cb) {
        let resp = new CopyPersonResponse();
        this.request("CopyPerson", req, resp, cb);
    }

    /**
     * This API is used to judge whether a person in an image corresponds to a given `PersonId`. For more information on `PersonId`, please see [CreateGroup](https://intl.cloud.tencent.com/document/product/867/45015?from_cn_redirect=1). 

Unlike the [CompareFace](https://intl.cloud.tencent.com/document/product/867/44987?from_cn_redirect=1) API that is used to judge the similarity between two faces, this API is used to judge "whether the person in the image is someone specified" whose information is stored in a group. This "someone" may have multiple face images.

This API recognizes each face of a person as an independent one. By contrast, the [VerifyPerson](https://intl.cloud.tencent.com/document/product/867/44982?from_cn_redirect=1) API fuses the features of all faces of a person; for example, if a person has 4 faces, it will fuse the features of the 4 faces and generate the summarized facial features of the person to make the person verification (i.e., judging whether the face image to be recognized is of a specified person) more accurate.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {VerifyFaceRequest} req
     * @param {function(string, VerifyFaceResponse):void} cb
     * @public
     */
    VerifyFace(req, cb) {
        let resp = new VerifyFaceResponse();
        this.request("VerifyFace", req, resp, cb);
    }

    /**
     * This API is used to locate facial features (i.e., facial keypoints) in the requested image to get the accurate facial information. It can return the information of up to 888 keypoints so as to precisely locate the facial features and contour.
     * @param {AnalyzeDenseLandmarksRequest} req
     * @param {function(string, AnalyzeDenseLandmarksResponse):void} cb
     * @public
     */
    AnalyzeDenseLandmarks(req, cb) {
        let resp = new AnalyzeDenseLandmarksResponse();
        this.request("AnalyzeDenseLandmarks", req, resp, cb);
    }

    /**
     * This API is used to delete a person from all groups. Meanwhile, all face information of the person will be deleted.
     * @param {DeletePersonRequest} req
     * @param {function(string, DeletePersonResponse):void} cb
     * @public
     */
    DeletePerson(req, cb) {
        let resp = new DeletePersonResponse();
        this.request("DeletePerson", req, resp, cb);
    }

    /**
     * This API is used to modify the name, tag, and custom description field of a group.
     * @param {ModifyGroupRequest} req
     * @param {function(string, ModifyGroupResponse):void} cb
     * @public
     */
    ModifyGroup(req, cb) {
        let resp = new ModifyGroupResponse();
        this.request("ModifyGroup", req, resp, cb);
    }

    /**
     * This API is used to create a person and add face, name, gender, and other related information.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {CreatePersonRequest} req
     * @param {function(string, CreatePersonResponse):void} cb
     * @public
     */
    CreatePerson(req, cb) {
        let resp = new CreatePersonResponse();
        this.request("CreatePerson", req, resp, cb);
    }

    /**
     * This API is used to get the group information.
     * @param {GetGroupInfoRequest} req
     * @param {function(string, GetGroupInfoResponse):void} cb
     * @public
     */
    GetGroupInfo(req, cb) {
        let resp = new GetGroupInfoResponse();
        this.request("GetGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to detect the position, attributes, and quality information of a face in the given image. The position information includes (x, y, w, h); the face attributes include gender, age, expression, beauty, glass, hair, mask, and pose (pitch, roll, yaw); and the face quality information includes the overall quality score, sharpness, brightness, and completeness.

 
The face quality information is mainly used to evaluate the quality of the input face image. When using the Face Recognition service, you are recommended to evaluate the quality of the input face image first to improve the effects of subsequent processing. Application scenarios of this feature include:

1). [Creating](https://intl.cloud.tencent.com/document/product/867/45014?from_cn_redirect=1)/[Adding](https://intl.cloud.tencent.com/document/product/867/45016?from_cn_redirect=1) a person in a group: this is to ensure the quality of the face information to facilitate subsequent processing.

2). [Face search](https://intl.cloud.tencent.com/document/product/867/44994?from_cn_redirect=1): this is to ensure the quality of the input image to quickly find the corresponding person.

3). [Face verification](https://intl.cloud.tencent.com/document/product/867/44983?from_cn_redirect=1): this is to ensure the quality of the face information to avoid cases where the verification incorrectly fails.

4). Face fusion: this is to ensure the quality of the uploaded face images to improve the fusion effect.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.


     * @param {DetectFaceRequest} req
     * @param {function(string, DetectFaceResponse):void} cb
     * @public
     */
    DetectFace(req, cb) {
        let resp = new DetectFaceResponse();
        this.request("DetectFace", req, resp, cb);
    }

    /**
     * This API is used to get the list of persons in a specified group.
     * @param {GetPersonListRequest} req
     * @param {function(string, GetPersonListResponse):void} cb
     * @public
     */
    GetPersonList(req, cb) {
        let resp = new GetPersonListResponse();
        this.request("GetPersonList", req, resp, cb);
    }

    /**
     * This API is used to judge whether a person in an image corresponds to a given `PersonId`. For more information on `PersonId`, please see [CreateGroup](https://intl.cloud.tencent.com/document/product/867/45015?from_cn_redirect=1).
This API fuses the features of all faces of a person; for example, if a person has 4 faces, it will fuse the features of the 4 faces and generate the summarized facial features of the person to make the person verification (i.e., judging whether the face image to be recognized is of a specified person) more accurate.

 Unlike the `CompareFace` API that is used to judge the similarity between two faces, this API is used to judge "whether the person in the image is someone specified" whose information is stored in a group. This "someone" may have multiple face images.


>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
- This feature is available only to groups whose algorithm model version (`FaceModelVersion`) is 3.0.
     * @param {VerifyPersonRequest} req
     * @param {function(string, VerifyPersonResponse):void} cb
     * @public
     */
    VerifyPerson(req, cb) {
        let resp = new VerifyPersonResponse();
        this.request("VerifyPerson", req, resp, cb);
    }

    /**
     * This API is used to detect the position, attributes, and quality information of a face in the given image. The position information includes (x, y, w, h); the face attributes include gender, age, expression, beauty, glass, hair, mask, and pose (pitch, roll, yaw); and the face quality information includes the overall quality score, sharpness, brightness, and completeness.

 
The face quality information is mainly used to evaluate the quality of the input face image. When using the Face Recognition service, you are recommended to evaluate the quality of the input face image first to improve the effects of subsequent processing. Application scenarios of this feature include:

1). [Creating](https://intl.cloud.tencent.com/document/product/867/32793?from_cn_redirect=1)/[Adding](https://intl.cloud.tencent.com/document/product/867/32795?from_cn_redirect=1) a person in a group: this is to ensure the quality of the face information to facilitate subsequent processing.

2). [Face search](https://intl.cloud.tencent.com/document/product/867/32798?from_cn_redirect=1): this is to ensure the quality of the input image to quickly find the corresponding person.

3). [Face verification](https://intl.cloud.tencent.com/document/product/867/32806?from_cn_redirect=1): this is to ensure the quality of the face information to avoid cases where the verification incorrectly fails.

4). [Face fusion](https://intl.cloud.tencent.com/product/facefusion?from_cn_redirect=1): this is to ensure the quality of the uploaded face images to improve the fusion effect.

>     
- This API is an upgrade of [DetectFace](https://intl.cloud.tencent.com/document/product/867/44989?from_cn_redirect=1) in the following terms:
1. This API can specify the face attributes that need to be computed and returned, which avoids ineffective computation and reduces the time consumption.
2. This API supports more detailed attribute items and will continue providing new features in the future.
Please use this API to satisfy your corresponding face detection and attribute analysis needs.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {DetectFaceAttributesRequest} req
     * @param {function(string, DetectFaceAttributesResponse):void} cb
     * @public
     */
    DetectFaceAttributes(req, cb) {
        let resp = new DetectFaceAttributesResponse();
        this.request("DetectFaceAttributes", req, resp, cb);
    }

    /**
     * This API is used to modify the description of a specified person in a group.
     * @param {ModifyPersonGroupInfoRequest} req
     * @param {function(string, ModifyPersonGroupInfoResponse):void} cb
     * @public
     */
    ModifyPersonGroupInfo(req, cb) {
        let resp = new ModifyPersonGroupInfoResponse();
        this.request("ModifyPersonGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to recognize top K persons in one or more groups who are similar to the person in a given image and rank the similarity in a descending order.

Up to 10 faces in an image can be recognized at a time, and up to 100 groups can be searched in at a time.

The maximum number of faces in a group that can be searched for at a time is subject to the group's algorithm model version (`FaceModelVersion`), which is 1 million for v2.0 or 3 million for v3.0.

This API fuses the features of all faces of a person; for example, if a person has 4 faces, it will fuse the features of the 4 faces and generate the summarized facial features of the person to make the person search (i.e., judging whether the face image to be recognized is of a specified person) more accurate. By contrast, the [SearchFaces](https://intl.cloud.tencent.com/document/product/867/44994?from_cn_redirect=1) and [SearchFacesReturnsByGroup](https://intl.cloud.tencent.com/document/product/867/44993?from_cn_redirect=1) APIs recognize each face of a person as an independent one for search.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
- This feature is available only to groups whose algorithm model version (`FaceModelVersion`) is 3.0.
     * @param {SearchPersonsRequest} req
     * @param {function(string, SearchPersonsResponse):void} cb
     * @public
     */
    SearchPersons(req, cb) {
        let resp = new SearchPersonsResponse();
        this.request("SearchPersons", req, resp, cb);
    }

    /**
     * This API is used to calculate the similarity of faces in two images and return the face similarity score.

If you need to judge "whether the person in the image is someone specified" in scenarios such as face login, i.e., checking whether the person in a given image is someone with a known identity, you are recommended to use the [VerifyFace](https://intl.cloud.tencent.com/document/product/867/44983?from_cn_redirect=1) or [VerifyPerson](https://intl.cloud.tencent.com/document/product/867/44982?from_cn_redirect=1) API.

>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
     * @param {CompareFaceRequest} req
     * @param {function(string, CompareFaceResponse):void} cb
     * @public
     */
    CompareFace(req, cb) {
        let resp = new CompareFaceResponse();
        this.request("CompareFace", req, resp, cb);
    }

    /**
     * This API is used to recognize top K persons in one or more groups who are similar to the person in a given image, display the results **by group**, and rank the similarity within each group in a descending order.

Up to 10 faces in the image can be recognized at a time, and cross-group search is supported.

The maximum number of faces in a group that can be searched for at a time is subject to the group's algorithm model version (`FaceModelVersion`), which is 1 million for v2.0 or 3 million for v3.0.

This API fuses the features of all faces of a person; for example, if a person has 4 faces, it will fuse the features of the 4 faces and generate the summarized facial features of the person to make the person search (i.e., judging whether the face image to be recognized is of a specified person) more accurate. By contrast, the [SearchFaces](https://intl.cloud.tencent.com/document/product/867/44994?from_cn_redirect=1) and [SearchFacesReturnsByGroup](https://intl.cloud.tencent.com/document/product/867/44993?from_cn_redirect=1) APIs recognize each face of a person as an independent one for search.
>     
- Please use the signature algorithm v3 to calculate the signature in the common parameters, that is, set the `SignatureMethod` parameter to `TC3-HMAC-SHA256`.
- This feature is available only to groups whose algorithm model version (`FaceModelVersion`) is 3.0.
     * @param {SearchPersonsReturnsByGroupRequest} req
     * @param {function(string, SearchPersonsReturnsByGroupResponse):void} cb
     * @public
     */
    SearchPersonsReturnsByGroup(req, cb) {
        let resp = new SearchPersonsReturnsByGroupResponse();
        this.request("SearchPersonsReturnsByGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of groups.
     * @param {GetGroupListRequest} req
     * @param {function(string, GetGroupListResponse):void} cb
     * @public
     */
    GetGroupList(req, cb) {
        let resp = new GetGroupListResponse();
        this.request("GetGroupList", req, resp, cb);
    }

    /**
     * This API is used to delete the face images of a person. If the person has only one face image, an error will be returned.
     * @param {DeleteFaceRequest} req
     * @param {function(string, DeleteFaceResponse):void} cb
     * @public
     */
    DeleteFace(req, cb) {
        let resp = new DeleteFaceResponse();
        this.request("DeleteFace", req, resp, cb);
    }


}
module.exports = IaiClient;
