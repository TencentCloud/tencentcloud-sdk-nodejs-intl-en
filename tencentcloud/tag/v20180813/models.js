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
         * Resource service name
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
         * Resource region. This field is not required for resources that do not have the region attribute
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix, which is not required for COS buckets
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
 * ModifyResourceTags request structure.
 * @class
 */
class ModifyResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * [Six-segment resource description](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * The tags to be added or modified. If the resource described by `Resource` is not associated with the input tag keys, an association will be added. If the tag keys are already associated, the values corresponding to the associated tag keys will be modified to the input values. This API must contain either `ReplaceTags` or `DeleteTag`. And these two parameters cannot include the same tag keys.
         * @type {Array.<Tag> || null}
         */
        this.ReplaceTags = null;

        /**
         * The tags to be unassociated. This API must contain either `ReplaceTags` or `DeleteTag`. And these two parameters cannot include the same tag keys.
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
         * Unique resource ID.
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
 * ModifyResourcesTagValue request structure.
 * @class
 */
class ModifyResourcesTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource service name
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
         * Resource region. This field is not required for resources that do not have the region attribute
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix, which is not required for COS buckets
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
         * [Six-segment resource description](https://cloud.tencent.com/document/product/598/10606)
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
         * Resource service name
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
         * Resource region. This field is not required for resources that do not have the region attribute
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource prefix, which is not required for COS buckets
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
         * [Six-segment resource description](https://cloud.tencent.com/document/product/598/10606)
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
         * [Six-segment resource description](https://cloud.tencent.com/document/product/598/10606)
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
         * Unique resource ID
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
         * Whether it is a COS resource ID
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
    TagWithDelete: TagWithDelete,
    DetachResourcesTagRequest: DetachResourcesTagRequest,
    AttachResourcesTagResponse: AttachResourcesTagResponse,
    DeleteTagRequest: DeleteTagRequest,
    DeleteResourceTagResponse: DeleteResourceTagResponse,
    DescribeResourceTagsByTagKeysRequest: DescribeResourceTagsByTagKeysRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeTagKeysResponse: DescribeTagKeysResponse,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeResourcesByTagsUnionRequest: DescribeResourcesByTagsUnionRequest,
    DescribeTagsResponse: DescribeTagsResponse,
    DescribeResourcesByTagsResponse: DescribeResourcesByTagsResponse,
    DescribeTagKeysRequest: DescribeTagKeysRequest,
    DescribeTagsSeqResponse: DescribeTagsSeqResponse,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeResourceTagsByResourceIdsRequest: DescribeResourceTagsByResourceIdsRequest,
    DescribeResourcesByTagsUnionResponse: DescribeResourcesByTagsUnionResponse,
    DescribeResourceTagsByResourceIdsResponse: DescribeResourceTagsByResourceIdsResponse,
    ModifyResourcesTagValueRequest: ModifyResourcesTagValueRequest,
    TagResource: TagResource,
    AddResourceTagResponse: AddResourceTagResponse,
    ModifyResourcesTagValueResponse: ModifyResourcesTagValueResponse,
    AddResourceTagRequest: AddResourceTagRequest,
    DescribeTagValuesSeqResponse: DescribeTagValuesSeqResponse,
    CreateTagRequest: CreateTagRequest,
    DescribeResourceTagsByTagKeysResponse: DescribeResourceTagsByTagKeysResponse,
    DescribeTagsSeqRequest: DescribeTagsSeqRequest,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    TagFilter: TagFilter,
    Tag: Tag,
    AttachResourcesTagRequest: AttachResourcesTagRequest,
    CreateTagResponse: CreateTagResponse,
    DetachResourcesTagResponse: DetachResourcesTagResponse,
    DescribeResourceTagsByResourceIdsSeqResponse: DescribeResourceTagsByResourceIdsSeqResponse,
    DeleteTagResponse: DeleteTagResponse,
    ResourceIdTag: ResourceIdTag,
    DescribeTagValuesSeqRequest: DescribeTagValuesSeqRequest,
    UpdateResourceTagValueRequest: UpdateResourceTagValueRequest,
    DescribeResourcesByTagsRequest: DescribeResourcesByTagsRequest,
    DeleteResourceTagRequest: DeleteResourceTagRequest,
    UpdateResourceTagValueResponse: UpdateResourceTagValueResponse,
    TagKeyObject: TagKeyObject,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    DescribeResourceTagsByResourceIdsSeqRequest: DescribeResourceTagsByResourceIdsSeqRequest,
    ResourceTag: ResourceTag,

}
