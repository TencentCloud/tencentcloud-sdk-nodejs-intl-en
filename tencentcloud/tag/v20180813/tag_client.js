/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
const UnTagResourcesResponse = models.UnTagResourcesResponse;
const TagWithDelete = models.TagWithDelete;
const DetachResourcesTagRequest = models.DetachResourcesTagRequest;
const GetTagValuesResponse = models.GetTagValuesResponse;
const AttachResourcesTagResponse = models.AttachResourcesTagResponse;
const AddProjectResponse = models.AddProjectResponse;
const GetResourcesRequest = models.GetResourcesRequest;
const DeleteTagRequest = models.DeleteTagRequest;
const DeleteResourceTagResponse = models.DeleteResourceTagResponse;
const DescribeResourceTagsByTagKeysRequest = models.DescribeResourceTagsByTagKeysRequest;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const DescribeResourcesByTagsUnionRequest = models.DescribeResourcesByTagsUnionRequest;
const DeleteTagsResponse = models.DeleteTagsResponse;
const ModifyResourcesTagValueResponse = models.ModifyResourcesTagValueResponse;
const DescribeTagsResponse = models.DescribeTagsResponse;
const DeleteTagsRequest = models.DeleteTagsRequest;
const DescribeTagKeysRequest = models.DescribeTagKeysRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const UnTagResourcesRequest = models.UnTagResourcesRequest;
const DescribeTagsSeqResponse = models.DescribeTagsSeqResponse;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeResourceTagsResponse = models.DescribeResourceTagsResponse;
const DescribeResourceTagsByResourceIdsRequest = models.DescribeResourceTagsByResourceIdsRequest;
const DescribeResourcesByTagsUnionResponse = models.DescribeResourcesByTagsUnionResponse;
const DescribeResourceTagsByResourceIdsResponse = models.DescribeResourceTagsByResourceIdsResponse;
const GetTagsResponse = models.GetTagsResponse;
const ModifyResourcesTagValueRequest = models.ModifyResourcesTagValueRequest;
const TagResource = models.TagResource;
const AddProjectRequest = models.AddProjectRequest;
const AddResourceTagResponse = models.AddResourceTagResponse;
const DescribeResourcesByTagsResponse = models.DescribeResourcesByTagsResponse;
const AddResourceTagRequest = models.AddResourceTagRequest;
const DescribeTagValuesSeqResponse = models.DescribeTagValuesSeqResponse;
const CreateTagRequest = models.CreateTagRequest;
const DescribeResourceTagsByTagKeysResponse = models.DescribeResourceTagsByTagKeysResponse;
const DescribeTagsSeqRequest = models.DescribeTagsSeqRequest;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const ResourceIdTag = models.ResourceIdTag;
const TagFilter = models.TagFilter;
const Project = models.Project;
const Tag = models.Tag;
const AttachResourcesTagRequest = models.AttachResourcesTagRequest;
const CreateTagResponse = models.CreateTagResponse;
const FailedResource = models.FailedResource;
const ResourceTagMapping = models.ResourceTagMapping;
const GetTagKeysRequest = models.GetTagKeysRequest;
const DetachResourcesTagResponse = models.DetachResourcesTagResponse;
const GetResourcesResponse = models.GetResourcesResponse;
const DescribeResourceTagsByResourceIdsSeqResponse = models.DescribeResourceTagsByResourceIdsSeqResponse;
const DeleteTagResponse = models.DeleteTagResponse;
const DescribeTagKeysResponse = models.DescribeTagKeysResponse;
const DescribeTagValuesSeqRequest = models.DescribeTagValuesSeqRequest;
const UpdateResourceTagValueRequest = models.UpdateResourceTagValueRequest;
const GetTagKeysResponse = models.GetTagKeysResponse;
const TagResourcesResponse = models.TagResourcesResponse;
const CreateTagsRequest = models.CreateTagsRequest;
const CreateTagsResponse = models.CreateTagsResponse;
const GetTagsRequest = models.GetTagsRequest;
const DescribeResourcesByTagsRequest = models.DescribeResourcesByTagsRequest;
const TagResourcesRequest = models.TagResourcesRequest;
const DeleteResourceTagRequest = models.DeleteResourceTagRequest;
const UpdateResourceTagValueResponse = models.UpdateResourceTagValueResponse;
const TagKeyObject = models.TagKeyObject;
const DescribeResourceTagsRequest = models.DescribeResourceTagsRequest;
const DescribeResourceTagsByResourceIdsSeqRequest = models.DescribeResourceTagsByResourceIdsSeqRequest;
const GetTagValuesRequest = models.GetTagValuesRequest;
const ResourceTag = models.ResourceTag;


/**
 * tag client
 * @class
 */
class TagClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tag.intl.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * This API is used to delete tag keys and tag values in batches.
     * @param {DeleteTagsRequest} req
     * @param {function(string, DeleteTagsResponse):void} cb
     * @public
     */
    DeleteTags(req, cb) {
        let resp = new DeleteTagsResponse();
        this.request("DeleteTags", req, resp, cb);
    }

    /**
     * This API is used to get resource tags based on tag keys.
     * @param {DescribeResourceTagsByTagKeysRequest} req
     * @param {function(string, DescribeResourceTagsByTagKeysResponse):void} cb
     * @public
     */
    DescribeResourceTagsByTagKeys(req, cb) {
        let resp = new DescribeResourceTagsByTagKeysResponse();
        this.request("DescribeResourceTagsByTagKeys", req, resp, cb);
    }

    /**
     * This API is used to query tag values in the list of created tags.
     * @param {GetTagValuesRequest} req
     * @param {function(string, GetTagValuesResponse):void} cb
     * @public
     */
    GetTagValues(req, cb) {
        let resp = new GetTagValuesResponse();
        this.request("GetTagValues", req, resp, cb);
    }

    /**
     * This API is used to query the tag key-value pairs associated with an existing resource.
     * @param {DescribeResourceTagsByResourceIdsRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIds(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsResponse();
        this.request("DescribeResourceTagsByResourceIds", req, resp, cb);
    }

    /**
     * This API is used to modify the values of tags associated with a resource (the tag key does not change).
     * @param {UpdateResourceTagValueRequest} req
     * @param {function(string, UpdateResourceTagValueResponse):void} cb
     * @public
     */
    UpdateResourceTagValue(req, cb) {
        let resp = new UpdateResourceTagValueResponse();
        this.request("UpdateResourceTagValue", req, resp, cb);
    }

    /**
     * This API is used to view the tags associated with a resource in sequence.
     * @param {DescribeResourceTagsByResourceIdsSeqRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsSeqResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIdsSeq(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsSeqResponse();
        this.request("DescribeResourceTagsByResourceIdsSeq", req, resp, cb);
    }

    /**
     * This API is used to get the list of created tags.
     * @param {GetTagsRequest} req
     * @param {function(string, GetTagsResponse):void} cb
     * @public
     */
    GetTags(req, cb) {
        let resp = new GetTagsResponse();
        this.request("GetTags", req, resp, cb);
    }

    /**
     * This API is used to modify the tag value corresponding to a tag key associated with multiple resources.
     * @param {ModifyResourcesTagValueRequest} req
     * @param {function(string, ModifyResourcesTagValueResponse):void} cb
     * @public
     */
    ModifyResourcesTagValue(req, cb) {
        let resp = new ModifyResourcesTagValueResponse();
        this.request("ModifyResourcesTagValue", req, resp, cb);
    }

    /**
     * This API is used to query resources by tags.
     * @param {DescribeResourcesByTagsRequest} req
     * @param {function(string, DescribeResourcesByTagsResponse):void} cb
     * @public
     */
    DescribeResourcesByTags(req, cb) {
        let resp = new DescribeResourcesByTagsResponse();
        this.request("DescribeResourcesByTags", req, resp, cb);
    }

    /**
     * This API is used to delete a tag key and tag value pair.
     * @param {DeleteTagRequest} req
     * @param {function(string, DeleteTagResponse):void} cb
     * @public
     */
    DeleteTag(req, cb) {
        let resp = new DeleteTagResponse();
        this.request("DeleteTag", req, resp, cb);
    }

    /**
     * This API is used to query the list of resources associated with a tag.
     * @param {GetResourcesRequest} req
     * @param {function(string, GetResourcesResponse):void} cb
     * @public
     */
    GetResources(req, cb) {
        let resp = new GetResourcesResponse();
        this.request("GetResources", req, resp, cb);
    }

    /**
     * This API is used to query the tags associated with a resource.
     * @param {DescribeResourceTagsRequest} req
     * @param {function(string, DescribeResourceTagsResponse):void} cb
     * @public
     */
    DescribeResourceTags(req, cb) {
        let resp = new DescribeResourceTagsResponse();
        this.request("DescribeResourceTags", req, resp, cb);
    }

    /**
     * Creates a project
     * @param {AddProjectRequest} req
     * @param {function(string, AddProjectResponse):void} cb
     * @public
     */
    AddProject(req, cb) {
        let resp = new AddProjectResponse();
        this.request("AddProject", req, resp, cb);
    }

    /**
     * This API is used to query the created tag lists.

     * @param {DescribeTagsSeqRequest} req
     * @param {function(string, DescribeTagsSeqResponse):void} cb
     * @public
     */
    DescribeTagsSeq(req, cb) {
        let resp = new DescribeTagsSeqResponse();
        this.request("DescribeTagsSeq", req, resp, cb);
    }

    /**
     * This API is used to associate resources with tags.
     * @param {AddResourceTagRequest} req
     * @param {function(string, AddResourceTagResponse):void} cb
     * @public
     */
    AddResourceTag(req, cb) {
        let resp = new AddResourceTagResponse();
        this.request("AddResourceTag", req, resp, cb);
    }

    /**
     * This API is used to associate a tag with multiple resources.
     * @param {AttachResourcesTagRequest} req
     * @param {function(string, AttachResourcesTagResponse):void} cb
     * @public
     */
    AttachResourcesTag(req, cb) {
        let resp = new AttachResourcesTagResponse();
        this.request("AttachResourcesTag", req, resp, cb);
    }

    /**
     * This API is used to create a tag key and tag value pair.
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        let resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }

    /**
     * This API is used to unbind a tag from multiple resources.
     * @param {DetachResourcesTagRequest} req
     * @param {function(string, DetachResourcesTagResponse):void} cb
     * @public
     */
    DetachResourcesTag(req, cb) {
        let resp = new DetachResourcesTagResponse();
        this.request("DetachResourcesTag", req, resp, cb);
    }

    /**
     * This API is used to query tag values in an existing tag list.
     * @param {DescribeTagValuesRequest} req
     * @param {function(string, DescribeTagValuesResponse):void} cb
     * @public
     */
    DescribeTagValues(req, cb) {
        let resp = new DescribeTagValuesResponse();
        this.request("DescribeTagValues", req, resp, cb);
    }

    /**
     * This API is used to create and bind a tag uniformly to multiple specified resources of multiple Tencent Cloud services.
     * @param {TagResourcesRequest} req
     * @param {function(string, TagResourcesResponse):void} cb
     * @public
     */
    TagResources(req, cb) {
        let resp = new TagResourcesResponse();
        this.request("TagResources", req, resp, cb);
    }

    /**
     * This API is used to unassociate tags and resources.
     * @param {DeleteResourceTagRequest} req
     * @param {function(string, DeleteResourceTagResponse):void} cb
     * @public
     */
    DeleteResourceTag(req, cb) {
        let resp = new DeleteResourceTagResponse();
        this.request("DeleteResourceTag", req, resp, cb);
    }

    /**
     * This API is used to query the list of created tags.
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * This API is used to get project lists.
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * This API is used to query tag keys in the list of created tags.
     * @param {DescribeTagKeysRequest} req
     * @param {function(string, DescribeTagKeysResponse):void} cb
     * @public
     */
    DescribeTagKeys(req, cb) {
        let resp = new DescribeTagKeysResponse();
        this.request("DescribeTagKeys", req, resp, cb);
    }

    /**
     * This API is used to unbind a tag uniformly from multiple specified resources of multiple Tencent Cloud services.
     * @param {UnTagResourcesRequest} req
     * @param {function(string, UnTagResourcesResponse):void} cb
     * @public
     */
    UnTagResources(req, cb) {
        let resp = new UnTagResourcesResponse();
        this.request("UnTagResources", req, resp, cb);
    }

    /**
     * This API is used to query tag values in a created tag list.
     * @param {DescribeTagValuesSeqRequest} req
     * @param {function(string, DescribeTagValuesSeqResponse):void} cb
     * @public
     */
    DescribeTagValuesSeq(req, cb) {
        let resp = new DescribeTagValuesSeqResponse();
        this.request("DescribeTagValuesSeq", req, resp, cb);
    }

    /**
     * This API is used to create multiple tag key-value pairs.
     * @param {CreateTagsRequest} req
     * @param {function(string, CreateTagsResponse):void} cb
     * @public
     */
    CreateTags(req, cb) {
        let resp = new CreateTagsResponse();
        this.request("CreateTags", req, resp, cb);
    }

    /**
     * This API is used to query resource list by tags.
     * @param {DescribeResourcesByTagsUnionRequest} req
     * @param {function(string, DescribeResourcesByTagsUnionResponse):void} cb
     * @public
     */
    DescribeResourcesByTagsUnion(req, cb) {
        let resp = new DescribeResourcesByTagsUnionResponse();
        this.request("DescribeResourcesByTagsUnion", req, resp, cb);
    }

    /**
     * This API is used to modify all tags associated with a resource.
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        let resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }

    /**
     * This API is used to query the list of tag keys.
     * @param {GetTagKeysRequest} req
     * @param {function(string, GetTagKeysResponse):void} cb
     * @public
     */
    GetTagKeys(req, cb) {
        let resp = new GetTagKeysResponse();
        this.request("GetTagKeys", req, resp, cb);
    }


}
module.exports = TagClient;
