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
 * UnTagResources response structure.
 * @class
 */
class UnTagResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of failed resources.
When tag unbinding succeeds, the returned `FailedResources` will be empty.
When tag unbinding partially or completely fails, the returned `FailedResources` will display the details of failed resources.
         * @type {Array.<FailedResource> || null}
         */
        this.FailedResources = null;

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

        if (params.FailedResources) {
            this.FailedResources = new Array();
            for (let z in params.FailedResources) {
                let obj = new FailedResource();
                obj.deserialize(params.FailedResources[z]);
                this.FailedResources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * A tag key-value pair and if deletion is allowed.
 * @class
 */
class TagWithDelete extends  AbstractModel {
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

        /**
         * If deletion is allowed.
         * @type {number || null}
         */
        this.CanDelete = null;

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
        this.CanDelete = 'CanDelete' in params ? params.CanDelete : null;

    }
}

/**
 * DetachResourcesTag request structure.
 * @class
 */
class DetachResourcesTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource service name (the third segment in the six-segment resource description)
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource ID array, which can contain up to 50 resources
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Tag key to be unbound
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Resource region. If resources have the region attribute, this field is required; otherwise, it is optional.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix (the part before "/" in the last segment in the six-segment resource description), which is optional for COS buckets but required for other Tencent Cloud resources.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * GetTagValues response structure.
 * @class
 */
class GetTagValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token value obtained for the next page
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachResourcesTag response structure.
 * @class
 */
class AttachResourcesTagResponse extends  AbstractModel {
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
 * GetTagKeys response structure.
 * @class
 */
class GetTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token value obtained for the next page
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Tag key information.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetResources request structure.
 * @class
 */
class GetResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-segment resource description list. Tencent Cloud uses a six-segment value to describe a resource.
For example, ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}.
If this parameter is passed in, the list of all matching resources will be returned, and the specified `MaxResults` will become invalid.
Value range of N: 0–9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * Tag key and value.
If multiple tags are specified, resources bound to all such tags will be queried.
Value range of N: 0–5
There can be up to 10 `TagValues` in each `TagFilters`.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * The token value of the next page obtained from the response of the previous page.
Leave it empty for the first request.
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Number of data entries to return per page (up to 200).
Default value: 50.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * DeleteTag request structure.
 * @class
 */
class DeleteTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The tag key to be deleted.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * The tag value to be deleted.
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
 * DeleteResourceTag response structure.
 * @class
 */
class DeleteResourceTagResponse extends  AbstractModel {
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
 * DescribeResourceTagsByTagKeys request structure.
 * @class
 */
class DescribeResourceTagsByTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource prefix
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Unique resource ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Resource tag key
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Number of entries per page. Default value: 400
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset. Default value: 0. It must be an integer multiple of the `Limit` parameter
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyResourceTags response structure.
 * @class
 */
class ModifyResourceTagsResponse extends  AbstractModel {
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
 * DescribeTags request structure.
 * @class
 */
class DescribeTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key. Either exists or does not exist alongside the tag value. If it does not exist, all of the user's tags will be queried.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value. Either exists or does not exist alongside the tag key. If it does not exist, all of the user's tags will be queried.
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 0.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Creator `Uin`. If not specified, `Uin` is only used as the query condition.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Tag key array, which either exists or does not exist with the tag value. If it does not exist, all tags of the user will be queried. If it is passed in together with `TagKey`, it will be used and the `TagKey` will be ignored.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Whether to show project tag
         * @type {number || null}
         */
        this.ShowProject = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeProjects request structure.
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * If this parameter is 1, all projects (including hidden ones) will be queried. If it is 0, only non-hidden projects will be queried.
         * @type {number || null}
         */
        this.AllList = null;

        /**
         * Number of entries per page. Fixed value: 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllList = 'AllList' in params ? params.AllList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTagValues request structure.
 * @class
 */
class DescribeTagValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key list.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Creator `Uin`. If not specified, `Uin` is only used as the query condition.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 0.
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeResourcesByTagsUnion request structure.
 * @class
 */
class DescribeResourcesByTagsUnionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag filtering arrays.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * Tag creator uin.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 15.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource prefix.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Unique resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * The resource’s region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Service type
         * @type {string || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * DeleteTags response structure.
 * @class
 */
class DeleteTagsResponse extends  AbstractModel {
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
 * ModifyResourcesTagValue response structure.
 * @class
 */
class ModifyResourcesTagValueResponse extends  AbstractModel {
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
 * DescribeTags response structure.
 * @class
 */
class DescribeTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list.
         * @type {Array.<TagWithDelete> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTags request structure.
 * @class
 */
class DeleteTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag list.
Value range of N: 0–9
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
 * DescribeTagKeys request structure.
 * @class
 */
class DescribeTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creator `Uin`. If not specified, `Uin` is only used as the query condition.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 0.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether to show project
         * @type {number || null}
         */
        this.ShowProject = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeProjects response structure.
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of data entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Project list.
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnTagResources request structure.
 * @class
 */
class UnTagResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-segment resource description list. Tencent Cloud uses a six-segment value to describe a resource. For more information, see [CAM](https://intl.cloud.tencent.com/document/product/598/67350?from_cn_redirect=1) > Overview > API List > Six-Segment Resource Information.
For example: ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}.
Value range of N: 0–9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * Tag key.
Value range: 0–9
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;

    }
}

/**
 * DescribeTagsSeq response structure.
 * @class
 */
class DescribeTagsSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list
         * @type {Array.<TagWithDelete> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceTags request structure.
 * @class
 */
class ModifyResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Six-segment resource description](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * The tags to be added or modified. If the resource described by `Resource` is not associated with the input tag keys, an association will be added. If the tag keys are already associated, the values corresponding to the associated tag keys will be modified to the input values. This API must contain either `ReplaceTags` or `DeleteTag`, and these two parameters cannot include the same tag keys. This parameter can be omitted, but it cannot be an empty array.
         * @type {Array.<Tag> || null}
         */
        this.ReplaceTags = null;

        /**
         * The tags to be disassociated. This API must contain either `ReplaceTags` or `DeleteTag`, and these two parameters cannot include the same tag keys. This parameter can be omitted, but it cannot be an empty array.
         * @type {Array.<TagKeyObject> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new Tag();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagKeyObject();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * DescribeResourceTags response structure.
 * @class
 */
class DescribeResourceTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource tag
         * @type {Array.<TagResource> || null}
         */
        this.Rows = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagResource();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIds request structure.
 * @class
 */
class DescribeResourceTagsByResourceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource prefix.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Array of resource IDs (up to 50)
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * The resource's region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 0.
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeResourcesByTagsUnion response structure.
 * @class
 */
class DescribeResourcesByTagsUnionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The size of each page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource tag.
         * @type {Array.<ResourceTag> || null}
         */
        this.Rows = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIds response structure.
 * @class
 */
class DescribeResourceTagsByResourceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list.
         * @type {Array.<TagResource> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTags response structure.
 * @class
 */
class GetTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token value obtained for the next page
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourcesTagValue request structure.
 * @class
 */
class ModifyResourcesTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource service name (the third segment in the six-segment resource description)
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource ID array, which can contain up to 50 resources
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Resource region. If resources have the region attribute, this field is required; otherwise, it is optional.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix (the part before "/" in the last segment in the six-segment resource description), which is optional for COS buckets but required for other Tencent Cloud resources.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * Tag key-value pair and resource ID.
 * @class
 */
class TagResource extends  AbstractModel {
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

        /**
         * Resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tag key MD5 value.
         * @type {string || null}
         */
        this.TagKeyMd5 = null;

        /**
         * Tag value MD5 value.
         * @type {string || null}
         */
        this.TagValueMd5 = null;

        /**
         * Resource type
Note: this field may return null, indicating that no valid values found.
         * @type {string || null}
         */
        this.ServiceType = null;

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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TagKeyMd5 = 'TagKeyMd5' in params ? params.TagKeyMd5 : null;
        this.TagValueMd5 = 'TagValueMd5' in params ? params.TagValueMd5 : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * GetTagKeys request structure.
 * @class
 */
class GetTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token value of the next page obtained from the response of the previous page.
Leave it empty for the first request.
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Number of data entries to return per page (up to 1,000).
Default value: 50.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * AddResourceTag response structure.
 * @class
 */
class AddResourceTagResponse extends  AbstractModel {
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
 * DescribeResourcesByTags response structure.
 * @class
 */
class DescribeResourcesByTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource tag.
         * @type {Array.<ResourceTag> || null}
         */
        this.Rows = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddResourceTag request structure.
 * @class
 */
class AddResourceTagRequest extends  AbstractModel {
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

        /**
         * [Six-segment resource description](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Resource = null;

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
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * DescribeTagValuesSeq response structure.
 * @class
 */
class DescribeTagValuesSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTag request structure.
 * @class
 */
class CreateTagRequest extends  AbstractModel {
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
 * DescribeResourceTagsByTagKeys response structure.
 * @class
 */
class DescribeResourceTagsByTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource tag
         * @type {Array.<ResourceIdTag> || null}
         */
        this.Rows = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceIdTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagsSeq request structure.
 * @class
 */
class DescribeTagsSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key, which either exists or does not exist with the tag value. If it does not exist, all tags of the user will be queried
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value, which either exists or does not exist with the tag key. If it does not exist, all tags of the user will be queried
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Data offset. Default value: 0. It must be an integer multiple of the `Limit` parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Creator `Uin`. If this parameter is blank or left empty, only `Uin` will be used as a condition for query
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Tag key array, which either exists or does not exist with the tag value. If it does not exist, all tags of the user will be queried. If it is passed in together with `TagKey`, it will be used and the `TagKey` will be ignored.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Whether to show project tag
         * @type {number || null}
         */
        this.ShowProject = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeTagValues response structure.
 * @class
 */
class DescribeTagValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource tag key value
 * @class
 */
class ResourceIdTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique resource ID
Note: this field may return null, indicating that no valid values can be obtained
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tag key-value pair
Note: this field may return null, indicating that no valid values can be obtained
         * @type {Array.<Tag> || null}
         */
        this.TagKeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.TagKeyValues) {
            this.TagKeyValues = new Array();
            for (let z in params.TagKeyValues) {
                let obj = new Tag();
                obj.deserialize(params.TagKeyValues[z]);
                this.TagKeyValues.push(obj);
            }
        }

    }
}

/**
 * Tag filtering array. '**AND**' relation if multiple arrays.
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value array. '**OR**' relation if multiple values.
         * @type {Array.<string> || null}
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
 * Project information.
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Project name.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Creator UIN.
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * Project description.
         * @type {string || null}
         */
        this.ProjectInfo = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.ProjectInfo = 'ProjectInfo' in params ? params.ProjectInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * A tag key-value pair.
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
 * AttachResourcesTag request structure.
 * @class
 */
class AttachResourcesTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource service name (the third segment in the six-segment resource description)
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource ID array, which can contain up to 50 resources
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Resource region. If resources have the region attribute, this field is required; otherwise, it is optional.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix (the part before "/" in the last segment in the six-segment resource description), which is optional for COS buckets but required for other Tencent Cloud resources.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * CreateTag response structure.
 * @class
 */
class CreateTagResponse extends  AbstractModel {
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
 * Information of failed resources.
This is returned when resource tag binding or unbinding fails.
 * @class
 */
class FailedResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-segment descriptions of failed resources
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Error code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Error message
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
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Resources and their associated tags (key-value pairs).
 * @class
 */
class ResourceTagMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-segment resource description. Tencent Cloud uses a six-segment value to describe a resource.
For example, ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * List of tags associated with the resource
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
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * DetachResourcesTag response structure.
 * @class
 */
class DetachResourcesTagResponse extends  AbstractModel {
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
 * GetResources response structure.
 * @class
 */
class GetResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token value obtained for the next page
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * List of resources and their associated tags (key-value pairs)
         * @type {Array.<ResourceTagMapping> || null}
         */
        this.ResourceTagMappingList = null;

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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

        if (params.ResourceTagMappingList) {
            this.ResourceTagMappingList = new Array();
            for (let z in params.ResourceTagMappingList) {
                let obj = new ResourceTagMapping();
                obj.deserialize(params.ResourceTagMappingList[z]);
                this.ResourceTagMappingList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIdsSeq response structure.
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list
         * @type {Array.<TagResource> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTag response structure.
 * @class
 */
class DeleteTagResponse extends  AbstractModel {
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
 * DescribeTagKeys response structure.
 * @class
 */
class DescribeTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag list.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagValuesSeq request structure.
 * @class
 */
class DescribeTagValuesSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key list
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Creator `Uin`. If this parameter is blank or left empty, only `Uin` will be used as a condition for query
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Data offset. Default value: 0. It must be an integer multiple of the `Limit` parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 15
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateResourceTagValue request structure.
 * @class
 */
class UpdateResourceTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key associated with the resource.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Modified tag value.
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * [Six-segment resource description](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Resource = null;

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
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * TagResources response structure.
 * @class
 */
class TagResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of failed resources.
When tag creating and binding succeeds, the returned `FailedResources` will be empty.
When tag creating and binding partially or completely fails, the returned `FailedResources` will display the details of failed resources.
         * @type {Array.<FailedResource> || null}
         */
        this.FailedResources = null;

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

        if (params.FailedResources) {
            this.FailedResources = new Array();
            for (let z in params.FailedResources) {
                let obj = new FailedResource();
                obj.deserialize(params.FailedResources[z]);
                this.FailedResources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTags request structure.
 * @class
 */
class CreateTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag list.
Value range of N: 0–9
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
 * CreateTags response structure.
 * @class
 */
class CreateTagsResponse extends  AbstractModel {
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
 * GetTags request structure.
 * @class
 */
class GetTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token value of the next page obtained from the response of the previous page.
Leave it empty for the first request.
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Number of data entries to return per page (up to 1,000).
Default value: 50.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Tag key.
All tags corresponding to the list of tag keys.
Maximum length: 20
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;

    }
}

/**
 * DescribeResourcesByTags request structure.
 * @class
 */
class DescribeResourcesByTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag filtering arrays.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * Tag creator uin.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Data offset. The default value is 0. Must be an integral multiple of the `Limit` parameter.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. The default value is 15.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Resource prefix.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Unique resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * The resource's region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Service type.
         * @type {string || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * TagResources request structure.
 * @class
 */
class TagResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-segment resource description list. Tencent Cloud uses a six-segment value to describe a resource. For more information, see [CAM](https://intl.cloud.tencent.com/document/product/598/67350?from_cn_redirect=1) > Overview > API List > Six-Segment Resource Information.
For example: ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}.
Value range of N: 0–9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * Tag key and value.
If multiple tags are specified, all such tags will be created and bound to the specified resources.
For each resource, each tag key can have only one value. If you try to add an existing tag key, the corresponding tag value will be updated to the new value.
Non-existent tags will be automatically created.
Value range of N: 0–9
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
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;

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
 * DeleteResourceTag request structure.
 * @class
 */
class DeleteResourceTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * [Six-segment resource description](https://intl.cloud.tencent.com/document/product/598/10606?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * UpdateResourceTagValue response structure.
 * @class
 */
class UpdateResourceTagValueResponse extends  AbstractModel {
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
 * Tag key object.
 * @class
 */
class TagKeyObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DescribeResourceTags request structure.
 * @class
 */
class DescribeResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creator `uin`
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Resource region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Service type.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource prefix
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Unique resource ID. Queries with `ResourceId` only may be slow or fail to return results. We recommend you also enter `ServiceType`, `ResourcePrefix`, and `ResourceRegion` (which can be ignored for resources that don't have the region attribute) when entering `ResourceId`.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Data offset. Default value: 0. It must be an integer multiple of the `Limit` parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether it is a COS resource (0 or 1). This parameter is required when the entered `ResourceId` is a COS resource.
         * @type {number || null}
         */
        this.CosResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CosResourceId = 'CosResourceId' in params ? params.CosResourceId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIdsSeq request structure.
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service type
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource prefix
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Unique resource ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Data offset. Default value: 0. It must be an integer multiple of the `Limit` parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 15
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetTagValues request structure.
 * @class
 */
class GetTagValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
All tag values corresponding to the list of tag keys.
Maximum length: 20
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * The token value of the next page obtained from the response of the previous page.
Leave it empty for the first request.
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Number of data entries to return per page (up to 1,000).
Default value: 50.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * Resource tag.
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * The resource's region.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Service type.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Resource prefix.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * Unique resource ID.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource tag.
Note: This field may return null, indicating that no valid value is found.
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
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

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

module.exports = {
    UnTagResourcesResponse: UnTagResourcesResponse,
    TagWithDelete: TagWithDelete,
    DetachResourcesTagRequest: DetachResourcesTagRequest,
    GetTagValuesResponse: GetTagValuesResponse,
    AttachResourcesTagResponse: AttachResourcesTagResponse,
    GetTagKeysResponse: GetTagKeysResponse,
    GetResourcesRequest: GetResourcesRequest,
    DeleteTagRequest: DeleteTagRequest,
    DeleteResourceTagResponse: DeleteResourceTagResponse,
    DescribeResourceTagsByTagKeysRequest: DescribeResourceTagsByTagKeysRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    DescribeResourcesByTagsUnionRequest: DescribeResourcesByTagsUnionRequest,
    DeleteTagsResponse: DeleteTagsResponse,
    ModifyResourcesTagValueResponse: ModifyResourcesTagValueResponse,
    DescribeTagsResponse: DescribeTagsResponse,
    DeleteTagsRequest: DeleteTagsRequest,
    DescribeTagKeysRequest: DescribeTagKeysRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    UnTagResourcesRequest: UnTagResourcesRequest,
    DescribeTagsSeqResponse: DescribeTagsSeqResponse,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeResourceTagsByResourceIdsRequest: DescribeResourceTagsByResourceIdsRequest,
    DescribeResourcesByTagsUnionResponse: DescribeResourcesByTagsUnionResponse,
    DescribeResourceTagsByResourceIdsResponse: DescribeResourceTagsByResourceIdsResponse,
    GetTagsResponse: GetTagsResponse,
    ModifyResourcesTagValueRequest: ModifyResourcesTagValueRequest,
    TagResource: TagResource,
    GetTagKeysRequest: GetTagKeysRequest,
    AddResourceTagResponse: AddResourceTagResponse,
    DescribeResourcesByTagsResponse: DescribeResourcesByTagsResponse,
    AddResourceTagRequest: AddResourceTagRequest,
    DescribeTagValuesSeqResponse: DescribeTagValuesSeqResponse,
    CreateTagRequest: CreateTagRequest,
    DescribeResourceTagsByTagKeysResponse: DescribeResourceTagsByTagKeysResponse,
    DescribeTagsSeqRequest: DescribeTagsSeqRequest,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    ResourceIdTag: ResourceIdTag,
    TagFilter: TagFilter,
    Project: Project,
    Tag: Tag,
    AttachResourcesTagRequest: AttachResourcesTagRequest,
    CreateTagResponse: CreateTagResponse,
    FailedResource: FailedResource,
    ResourceTagMapping: ResourceTagMapping,
    DetachResourcesTagResponse: DetachResourcesTagResponse,
    GetResourcesResponse: GetResourcesResponse,
    DescribeResourceTagsByResourceIdsSeqResponse: DescribeResourceTagsByResourceIdsSeqResponse,
    DeleteTagResponse: DeleteTagResponse,
    DescribeTagKeysResponse: DescribeTagKeysResponse,
    DescribeTagValuesSeqRequest: DescribeTagValuesSeqRequest,
    UpdateResourceTagValueRequest: UpdateResourceTagValueRequest,
    TagResourcesResponse: TagResourcesResponse,
    CreateTagsRequest: CreateTagsRequest,
    CreateTagsResponse: CreateTagsResponse,
    GetTagsRequest: GetTagsRequest,
    DescribeResourcesByTagsRequest: DescribeResourcesByTagsRequest,
    TagResourcesRequest: TagResourcesRequest,
    DeleteResourceTagRequest: DeleteResourceTagRequest,
    UpdateResourceTagValueResponse: UpdateResourceTagValueResponse,
    TagKeyObject: TagKeyObject,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    DescribeResourceTagsByResourceIdsSeqRequest: DescribeResourceTagsByResourceIdsSeqRequest,
    GetTagValuesRequest: GetTagValuesRequest,
    ResourceTag: ResourceTag,

}
