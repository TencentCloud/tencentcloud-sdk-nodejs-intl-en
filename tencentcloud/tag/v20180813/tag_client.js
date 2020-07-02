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
const DescribeTagsResponse = models.DescribeTagsResponse;
const DeleteTagRequest = models.DeleteTagRequest;
const DeleteResourceTagResponse = models.DeleteResourceTagResponse;
const DescribeResourceTagsByTagKeysRequest = models.DescribeResourceTagsByTagKeysRequest;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const DescribeTagKeysResponse = models.DescribeTagKeysResponse;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeResourcesByTagsResponse = models.DescribeResourcesByTagsResponse;
const DescribeTagKeysRequest = models.DescribeTagKeysRequest;
const DescribeResourceTagsResponse = models.DescribeResourceTagsResponse;
const DescribeResourceTagsByResourceIdsRequest = models.DescribeResourceTagsByResourceIdsRequest;
const DescribeResourceTagsByResourceIdsResponse = models.DescribeResourceTagsByResourceIdsResponse;
const TagResource = models.TagResource;
const DescribeTagsRequest = models.DescribeTagsRequest;
const AddResourceTagRequest = models.AddResourceTagRequest;
const CreateTagRequest = models.CreateTagRequest;
const DescribeResourceTagsByTagKeysResponse = models.DescribeResourceTagsByTagKeysResponse;
const TagFilter = models.TagFilter;
const Tag = models.Tag;
const DescribeResourceTagsRequest = models.DescribeResourceTagsRequest;
const CreateTagResponse = models.CreateTagResponse;
const DeleteTagResponse = models.DeleteTagResponse;
const ResourceIdTag = models.ResourceIdTag;
const AddResourceTagResponse = models.AddResourceTagResponse;
const UpdateResourceTagValueRequest = models.UpdateResourceTagValueRequest;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const DeleteResourceTagRequest = models.DeleteResourceTagRequest;
const UpdateResourceTagValueResponse = models.UpdateResourceTagValueResponse;
const TagKeyObject = models.TagKeyObject;
const ResourceTag = models.ResourceTag;
const TagWithDelete = models.TagWithDelete;
const DescribeResourcesByTagsRequest = models.DescribeResourcesByTagsRequest;


/**
 * tag client
 * @class
 */
class TagClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tag.tencentcloudapi.com", "2018-08-13", credential, region, profile);
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
     * This API is used to query tag key and value pairs for existing resources.
     * @param {DescribeResourceTagsByResourceIdsRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIds(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsResponse();
        this.request("DescribeResourceTagsByResourceIds", req, resp, cb);
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
     * This API is used to query tag keys in an existing tag list.

     * @param {DescribeTagKeysRequest} req
     * @param {function(string, DescribeTagKeysResponse):void} cb
     * @public
     */
    DescribeTagKeys(req, cb) {
        let resp = new DescribeTagKeysResponse();
        this.request("DescribeTagKeys", req, resp, cb);
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
     * This API is used to query existing tag lists.

     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
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
     * This API is used to create a tag key and tag value pair.
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        let resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }


}
module.exports = TagClient;
