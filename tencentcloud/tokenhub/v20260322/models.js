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
const AbstractModel = require("../../common/abstract_model");

/**
 * Termbase detail
 * @class
 */
class GlossaryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Terminology repository name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Repository description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Source language code.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Target language code.
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * Bind Resource
 * @class
 */
class BindingItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID (model ID or service ID).
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type. Value: endpoint (service), model (model).
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource status
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Create terminology entry
 * @class
 */
class GlossaryEntryInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source language terminology. Maximum 1000 characters.
         * @type {string || null}
         */
        this.SourceTerm = null;

        /**
         * Target language terminology. Maximum 1000 characters.
         * @type {string || null}
         */
        this.TargetTerm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceTerm = 'SourceTerm' in params ? params.SourceTerm : null;
        this.TargetTerm = 'TargetTerm' in params ? params.TargetTerm : null;

    }
}

/**
 * Delete terminology entry
 * @class
 */
class DeleteGlossaryEntryInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology entry ID. Obtain through the API DescribeGlossaryEntries.
         * @type {string || null}
         */
        this.EntryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntryId = 'EntryId' in params ? params.EntryId : null;

    }
}

/**
 * Terminology entry detail
 * @class
 */
class GlossaryEntryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology entry ID.
         * @type {string || null}
         */
        this.EntryId = null;

        /**
         * Source language terminology.
         * @type {string || null}
         */
        this.SourceTerm = null;

        /**
         * Target language terminology.
         * @type {string || null}
         */
        this.TargetTerm = null;

        /**
         * Last update time. Unix timestamp (ms).
         * @type {number || null}
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
        this.EntryId = 'EntryId' in params ? params.EntryId : null;
        this.SourceTerm = 'SourceTerm' in params ? params.SourceTerm : null;
        this.TargetTerm = 'TargetTerm' in params ? params.TargetTerm : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * DeleteGlossary response structure.
 * @class
 */
class DeleteGlossaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Token quota information
 * @class
 */
class QuotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota package ID.
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * Package status. Value: 1 (normal), 3 (exhausted), 4 (terminated).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Quota period. Value: d (by day), m (monthly), lifetime (total quota, no reset).
         * @type {string || null}
         */
        this.CycleUnit = null;

        /**
         * Dimensional quota total amount (number of tokens). Use string to avoid precision loss.
         * @type {string || null}
         */
        this.CycleCredits = null;

        /**
         * Dimensional used amount (number of tokens). Use string literal to avoid precision loss.
         * @type {string || null}
         */
        this.CycleUsed = null;

        /**
         * Quota effective start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Quota expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CycleUnit = 'CycleUnit' in params ? params.CycleUnit : null;
        this.CycleCredits = 'CycleCredits' in params ? params.CycleCredits : null;
        this.CycleUsed = 'CycleUsed' in params ? params.CycleUsed : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DeleteGlossaryEntries response structure.
 * @class
 */
class DeleteGlossaryEntriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeApiKeyList response structure.
 * @class
 */
class DescribeApiKeyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API Key List.
         * @type {Array.<ApiKeyDetail> || null}
         */
        this.ApiKeySet = null;

        /**
         * Total number of eligible API keys.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.ApiKeySet) {
            this.ApiKeySet = new Array();
            for (let z in params.ApiKeySet) {
                let obj = new ApiKeyDetail();
                obj.deserialize(params.ApiKeySet[z]);
                this.ApiKeySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApiKeyInfo response structure.
 * @class
 */
class ModifyApiKeyInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeApiKeyList request structure.
 * @class
 */
class DescribeApiKeyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Platform type. Currently supported values: maas.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Number of returned results, defaults to 20, maximum value 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter condition list. Supported filter fields: apikeyId (API Key ID), apiKeyName (name), platform (platform type), status (status), bindType (binding type).
         * @type {Array.<RequestFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting condition list. Supported sorting field: apiKeyName
         * @type {Array.<RequestSort> || null}
         */
        this.Sorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RequestFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sorts) {
            this.Sorts = new Array();
            for (let z in params.Sorts) {
                let obj = new RequestSort();
                obj.deserialize(params.Sorts[z]);
                this.Sorts.push(obj);
            }
        }

    }
}

/**
 * CreateGlossary request structure.
 * @class
 */
class CreateGlossaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology library name. Maximum 50 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source language code. Maximum 16 characters, such as zh (Chinese), en (English).
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Target language code. Maximum 16 characters, such as zh (Chinese), en (English).
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Termbase description. Maximum 255 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeGlossaryEntries response structure.
 * @class
 */
class DescribeGlossaryEntriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology entry list.
         * @type {Array.<GlossaryEntryItem> || null}
         */
        this.Entries = null;

        /**
         * Total number of eligible terminology entries.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Current page.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Size per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new GlossaryEntryItem();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGlossary request structure.
 * @class
 */
class DeleteGlossaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID. Obtain through the API DescribeGlossaries.
         * @type {string || null}
         */
        this.GlossaryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;

    }
}

/**
 * DescribeGlossaryEntries request structure.
 * @class
 */
class DescribeGlossaryEntriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID. Obtain through the API DescribeGlossaries.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Page number. Default is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Size per page. The default value is 20, and the maximum value is 200.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteGlossaryEntries request structure.
 * @class
 */
class DeleteGlossaryEntriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID. Obtain through the API DescribeGlossaries.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Terminology entry list to be deleted. At a time 200.
         * @type {Array.<DeleteGlossaryEntryInput> || null}
         */
        this.Entries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new DeleteGlossaryEntryInput();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }

    }
}

/**
 * CreateGlossaryEntries response structure.
 * @class
 */
class CreateGlossaryEntriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of successfully created terminology entries.
         * @type {Array.<GlossaryEntryItem> || null}
         */
        this.Entries = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new GlossaryEntryItem();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApiKey response structure.
 * @class
 */
class DeleteApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Modify terminology entry
 * @class
 */
class ModifyGlossaryEntryInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology entry ID. Obtain through the API DescribeGlossaryEntries.
         * @type {string || null}
         */
        this.EntryId = null;

        /**
         * Source language terminology. Maximum 1000 characters. If not passed, remain unchanged.
         * @type {string || null}
         */
        this.SourceTerm = null;

        /**
         * Target language terminology. Maximum 1000 characters. Remain unchanged if not passed.
         * @type {string || null}
         */
        this.TargetTerm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntryId = 'EntryId' in params ? params.EntryId : null;
        this.SourceTerm = 'SourceTerm' in params ? params.SourceTerm : null;
        this.TargetTerm = 'TargetTerm' in params ? params.TargetTerm : null;

    }
}

/**
 * ModifyApiKeyInfo request structure.
 * @class
 */
class ModifyApiKeyInfoRequest extends  AbstractModel {
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
 * CreateGlossary response structure.
 * @class
 */
class CreateGlossaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Terminology repository name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation time. Unix timestamp (ms).
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGlossaryEntries request structure.
 * @class
 */
class ModifyGlossaryEntriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID. Obtain through the API DescribeGlossaries.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Terminology entry list. At a time 200.
         * @type {Array.<ModifyGlossaryEntryInput> || null}
         */
        this.Entries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new ModifyGlossaryEntryInput();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }

    }
}

/**
 * DescribeGlossaries request structure.
 * @class
 */
class DescribeGlossariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results. Defaults to 20, maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter condition list. Supported filter fields: GlossaryId (Termbase ID), Name, Source (source language code), Target (target language code).
         * @type {Array.<RequestFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting condition list. Supported sorting fields: CreatedTime (creation time), UpdatedTime (last update time).
         * @type {Array.<RequestSort> || null}
         */
        this.Sorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new RequestFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sorts) {
            this.Sorts = new Array();
            for (let z in params.Sorts) {
                let obj = new RequestSort();
                obj.deserialize(params.Sorts[z]);
                this.Sorts.push(obj);
            }
        }

    }
}

/**
 * DescribeApiKey request structure.
 * @class
 */
class DescribeApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Platform type. Currently supported values: maas.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * API Key ID. At least one of this or ApiKey is required. Prioritize ApiKeyId.
         * @type {string || null}
         */
        this.ApiKeyId = null;

        /**
         * API key plaintext. At least one of it and ApiKeyId must be imported.
         * @type {string || null}
         */
        this.ApiKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ApiKeyId = 'ApiKeyId' in params ? params.ApiKeyId : null;
        this.ApiKey = 'ApiKey' in params ? params.ApiKey : null;

    }
}

/**
 * ModifyApiKeyStatus request structure.
 * @class
 */
class ModifyApiKeyStatusRequest extends  AbstractModel {
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
 * CreateGlossaryEntries request structure.
 * @class
 */
class CreateGlossaryEntriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Termbase ID. Obtain through the API DescribeGlossaries.
         * @type {string || null}
         */
        this.GlossaryId = null;

        /**
         * Terminology entry list. At a time 100.
         * @type {Array.<GlossaryEntryInput> || null}
         */
        this.Entries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GlossaryId = 'GlossaryId' in params ? params.GlossaryId : null;

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new GlossaryEntryInput();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }

    }
}

/**
 * Details of the specified API key
 * @class
 */
class ApiKeyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * API Key ID.
         * @type {string || null}
         */
        this.ApiKeyId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * API key value. The API response contains the masking value.
         * @type {string || null}
         */
        this.ApiKey = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Platform type. Currently supported values: maas.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Root account.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Sub-account.
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * Status. Valid values: enable, disable.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Binding type. Value: all (all models and services), model_all_endpoint_custom (all models + custom service), model_custom_endpoint_all (custom model + all services), model_custom_endpoint_custom (custom model + custom service).
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * Creation time. Format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time. Format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * App ID.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Whether it is editable. true means editable, false means non-editable.
         * @type {boolean || null}
         */
        this.Editable = null;

        /**
         * List of bound resources, case-sensitive for endpoint and model kind.
         * @type {Array.<BindingItem> || null}
         */
        this.BindingItems = null;

        /**
         * IP allowlist. Supports IPv4 and CIDR format. Empty array indicates no restriction.
         * @type {Array.<string> || null}
         */
        this.IpWhitelist = null;

        /**
         * This field is empty when Platform is maas.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Multi-dimensional list of Token quota information. This field is not returned when unconfigured.
         * @type {Array.<QuotaInfo> || null}
         */
        this.QuotaSet = null;

        /**
         * Token quota status. An empty string means no configuration. active means configured with current availability. inactive means configured but quota exhausted.
         * @type {string || null}
         */
        this.QuotaStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiKeyId = 'ApiKeyId' in params ? params.ApiKeyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ApiKey = 'ApiKey' in params ? params.ApiKey : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Editable = 'Editable' in params ? params.Editable : null;

        if (params.BindingItems) {
            this.BindingItems = new Array();
            for (let z in params.BindingItems) {
                let obj = new BindingItem();
                obj.deserialize(params.BindingItems[z]);
                this.BindingItems.push(obj);
            }
        }
        this.IpWhitelist = 'IpWhitelist' in params ? params.IpWhitelist : null;
        this.Creator = 'Creator' in params ? params.Creator : null;

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new QuotaInfo();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.QuotaStatus = 'QuotaStatus' in params ? params.QuotaStatus : null;

    }
}

/**
 * DescribeGlossaries response structure.
 * @class
 */
class DescribeGlossariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology repository list.
         * @type {Array.<GlossaryItem> || null}
         */
        this.Items = null;

        /**
         * Total number of eligible terminology repositories.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Current page.
         * @type {number || null}
         */
        this.Current = null;

        /**
         * Size per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new GlossaryItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Current = 'Current' in params ? params.Current : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApiKeyStatus response structure.
 * @class
 */
class ModifyApiKeyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * CreateApiKey response structure.
 * @class
 */
class CreateApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DeleteApiKey request structure.
 * @class
 */
class DeleteApiKeyRequest extends  AbstractModel {
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
 * Filter criteria
 * @class
 */
class RequestFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter operator. Values: EXACT (exact match), FUZZY (fuzzy matching), NOT (exclusion).
         * @type {string || null}
         */
        this.Op = null;

        /**
         * Filter value list. Supports up to 10.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Op = 'Op' in params ? params.Op : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifyGlossaryEntries response structure.
 * @class
 */
class ModifyGlossaryEntriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Terminology entry list after modification.
         * @type {Array.<GlossaryEntryItem> || null}
         */
        this.Entries = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Entries) {
            this.Entries = new Array();
            for (let z in params.Entries) {
                let obj = new GlossaryEntryItem();
                obj.deserialize(params.Entries[z]);
                this.Entries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sort criteria
 * @class
 */
class RequestSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting field name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sorting order. Value: ASC (ascending), DESC (descending).
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeApiKey response structure.
 * @class
 */
class DescribeApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API Key ID.
         * @type {string || null}
         */
        this.ApiKeyId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * API Key value (plaintext).
         * @type {string || null}
         */
        this.ApiKey = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Platform type. Enumerate: maas.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Root account.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Sub-account.
         * @type {string || null}
         */
        this.SubUin = null;

        /**
         * Status. Valid values: enable, disable.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Binding type. Value: all (all models and access points), model_all_endpoint_custom (all models + custom access point), model_custom_endpoint_all (custom model + all access points), model_custom_endpoint_custom (custom model + custom access point).
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * Creation time. Format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time. Format: YYYY-MM-DD HH:mm:ss.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * App ID.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Whether it is editable. true means editable, false means non-editable.
         * @type {boolean || null}
         */
        this.Editable = null;

        /**
         * List of bound resources, case-sensitive for endpoint and model kind.
         * @type {Array.<BindingItem> || null}
         */
        this.BindingItems = null;

        /**
         * IP allowlist. Supports IPv4 and CIDR format. Empty array indicates no restriction.
         * @type {Array.<string> || null}
         */
        this.IpWhitelist = null;

        /**
         * This field is empty when Platform is maas.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Multi-dimensional information of Token quota. This field is not returned when unconfigured.
         * @type {Array.<QuotaInfo> || null}
         */
        this.QuotaSet = null;

        /**
         * Token quota status. An empty string means no configuration. active means configured with current availability. inactive means configured but quota exhausted.
         * @type {string || null}
         */
        this.QuotaStatus = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ApiKeyId = 'ApiKeyId' in params ? params.ApiKeyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ApiKey = 'ApiKey' in params ? params.ApiKey : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Editable = 'Editable' in params ? params.Editable : null;

        if (params.BindingItems) {
            this.BindingItems = new Array();
            for (let z in params.BindingItems) {
                let obj = new BindingItem();
                obj.deserialize(params.BindingItems[z]);
                this.BindingItems.push(obj);
            }
        }
        this.IpWhitelist = 'IpWhitelist' in params ? params.IpWhitelist : null;
        this.Creator = 'Creator' in params ? params.Creator : null;

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new QuotaInfo();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.QuotaStatus = 'QuotaStatus' in params ? params.QuotaStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApiKey request structure.
 * @class
 */
class CreateApiKeyRequest extends  AbstractModel {
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

module.exports = {
    GlossaryItem: GlossaryItem,
    BindingItem: BindingItem,
    GlossaryEntryInput: GlossaryEntryInput,
    DeleteGlossaryEntryInput: DeleteGlossaryEntryInput,
    GlossaryEntryItem: GlossaryEntryItem,
    DeleteGlossaryResponse: DeleteGlossaryResponse,
    QuotaInfo: QuotaInfo,
    DeleteGlossaryEntriesResponse: DeleteGlossaryEntriesResponse,
    DescribeApiKeyListResponse: DescribeApiKeyListResponse,
    ModifyApiKeyInfoResponse: ModifyApiKeyInfoResponse,
    DescribeApiKeyListRequest: DescribeApiKeyListRequest,
    CreateGlossaryRequest: CreateGlossaryRequest,
    DescribeGlossaryEntriesResponse: DescribeGlossaryEntriesResponse,
    DeleteGlossaryRequest: DeleteGlossaryRequest,
    DescribeGlossaryEntriesRequest: DescribeGlossaryEntriesRequest,
    DeleteGlossaryEntriesRequest: DeleteGlossaryEntriesRequest,
    CreateGlossaryEntriesResponse: CreateGlossaryEntriesResponse,
    DeleteApiKeyResponse: DeleteApiKeyResponse,
    ModifyGlossaryEntryInput: ModifyGlossaryEntryInput,
    ModifyApiKeyInfoRequest: ModifyApiKeyInfoRequest,
    CreateGlossaryResponse: CreateGlossaryResponse,
    ModifyGlossaryEntriesRequest: ModifyGlossaryEntriesRequest,
    DescribeGlossariesRequest: DescribeGlossariesRequest,
    DescribeApiKeyRequest: DescribeApiKeyRequest,
    ModifyApiKeyStatusRequest: ModifyApiKeyStatusRequest,
    CreateGlossaryEntriesRequest: CreateGlossaryEntriesRequest,
    ApiKeyDetail: ApiKeyDetail,
    DescribeGlossariesResponse: DescribeGlossariesResponse,
    ModifyApiKeyStatusResponse: ModifyApiKeyStatusResponse,
    CreateApiKeyResponse: CreateApiKeyResponse,
    DeleteApiKeyRequest: DeleteApiKeyRequest,
    RequestFilter: RequestFilter,
    ModifyGlossaryEntriesResponse: ModifyGlossaryEntriesResponse,
    RequestSort: RequestSort,
    DescribeApiKeyResponse: DescribeApiKeyResponse,
    CreateApiKeyRequest: CreateApiKeyRequest,

}
