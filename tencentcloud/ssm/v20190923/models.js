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
 * DeleteSecretVersion response structure.
 * @class
 */
class DeleteSecretVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Version ID of the Secret.
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreSecret response structure.
 * @class
 */
class RestoreSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDescription response structure.
 * @class
 */
class UpdateDescriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecret response structure.
 * @class
 */
class DescribeSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Description of the Secret.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ID of the KMS CMK used for encryption.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Creator UIN.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Secret status, which can be `Enabled`, `Disabled`, or `PendingDelete`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Deletion time, formatted as a Unix timestamp. For a Secret that is not in `PendingDelete` status, this value is 0.
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * Creation time.
         * @type {number || null}
         */
        this.CreateTime = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecret request structure.
 * @class
 */
class DeleteSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret to be deleted.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Scheduled deletion time, in days. If set to 0, the Secret is deleted immediately. A number in the range of 1 to 30 indicates the number of retention days. The Secret will be deleted after the set value.
         * @type {number || null}
         */
        this.RecoveryWindowInDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RecoveryWindowInDays = 'RecoveryWindowInDays' in params ? params.RecoveryWindowInDays : null;

    }
}

/**
 * CreateSecret request structure.
 * @class
 */
class CreateSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Secret name, which must be unique within a region. The name can be up to 128 bytes, contain letters, digits, hyphens (-), and underscores (_), and must begin with a letter or digit.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Secret version. It can be up to 64 bytes, contain letters, digits, hyphens (-), and underscores (_), and must begin with a letter or digit. `SecretName` and `VersionId` are used to query the Secret information.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Description information, such as the detailed use cases. It can be up to 2048 bytes.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * KMS CMK used for Secret encryption. If this parameter is left empty, SecretsManager will create a CMK by default. You can also specify a KMS CMK that is created in the same region.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Base64-encoded plaintext of a binary Secret. Either `SecretBinary` or `SecretString` must be set. A maximum of 4096 bytes is supported.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * Plaintext of a Secret, in text format. Base64 encoding is not required. Either `SecretBinary` or `SecretString` must be set. A maximum of 4096 bytes is supported.
         * @type {string || null}
         */
        this.SecretString = null;

        /**
         * List of tags.
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

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
 * GetSecretValue response structure.
 * @class
 */
class GetSecretValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the Secret version.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * If the `SecretBinary` field in the request body is specified in the `CreateSecret` call, this field is returned and base64-encoded. The caller needs to perform base64 decoding to obtain the original data. Either `SecretBinary` or `SecretString` will be returned.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * If the `SecretString` field in the request body is specified in the `CreateSecret` call, this field is returned. Either `SecretBinary` or `SecretString` will be returned.
         * @type {string || null}
         */
        this.SecretString = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRegions response structure.
 * @class
 */
class GetRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of regions.
         * @type {Array.<string> || null}
         */
        this.Regions = null;

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
        this.Regions = 'Regions' in params ? params.Regions : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecretVersion request structure.
 * @class
 */
class DeleteSecretVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the Secret version to be deleted.
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * Basic information of the Secret.
 * @class
 */
class SecretMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Description of the Secret.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * KMS Key ID used for Secret encryption.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Creator UIN.
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Secret status, which can be `Enabled`, `Disabled`, or `PendingDelete`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Secret deletion time, formatted as a Unix timestamp. This parameter is only applicable for Secrets in `PendingDelete` status.
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * Secret creation time, formatted as a Unix timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Type of KMS CMK used for Secret encryption. `DEFAULT`: default key created by SecretsManager; `CUSTOMER`: user-specified key.
         * @type {string || null}
         */
        this.KmsKeyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.KmsKeyType = 'KmsKeyType' in params ? params.KmsKeyType : null;

    }
}

/**
 * ListSecretVersionIds request structure.
 * @class
 */
class ListSecretVersionIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * CreateSecret response structure.
 * @class
 */
class CreateSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the new Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the new Secret version.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Return code of tag operation. `0`: success; `1`: internal error; `2`: business processing error
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * Return message of tag operation.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.TagMsg = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRegions request structure.
 * @class
 */
class GetRegionsRequest extends  AbstractModel {
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
 * UpdateSecret response structure.
 * @class
 */
class UpdateSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Version ID of the Secret.
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableSecret response structure.
 * @class
 */
class DisableSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the disabled Secret.
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListSecrets request structure.
 * @class
 */
class ListSecretsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting position of the list, starting at 0. If not specified, 0 is used by default.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of returned Secrets in a query. If not set or set to 0, 20 is used by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting order according to the creation time. If not set or set to 0, descending order is used; if set to 1, ascending order is used.
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Filter according to Secret statuses. `0` (default): all Secrets; `1`: Secrets in `Enabled` status; `2`: Secrets in `Disabled` status; `3`: Secrets in `PendingDelete` status.
         * @type {number || null}
         */
        this.State = null;

        /**
         * Filter according to Secret names. If left empty, this filter is not applied.
         * @type {string || null}
         */
        this.SearchSecretName = null;

        /**
         * Tag filter condition.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

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
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.State = 'State' in params ? params.State : null;
        this.SearchSecretName = 'SearchSecretName' in params ? params.SearchSecretName : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * UpdateDescription request structure.
 * @class
 */
class UpdateDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a Secret whose description is to be updated.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * New description information, which can be up to 2048 bytes.
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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * EnableSecret response structure.
 * @class
 */
class EnableSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the enabled Secret.
         * @type {string || null}
         */
        this.SecretName = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateSecret request structure.
 * @class
 */
class UpdateSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a Secret whose content is to be updated.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the Secret version whose content is to be updated.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Use this field if the new Secret content is in binary format, and base64-encoded. Either `SecretBinary` or `SecretString` is set.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * Use this field if the new Secret content is in text format, and base64-encoding is not required. Either `SecretBinary` or `SecretString` is set.
         * @type {string || null}
         */
        this.SecretString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

    }
}

/**
 * List of version ID information.
 * @class
 */
class VersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Creation time, formatted as a Unix timestamp.
         * @type {number || null}
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
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Tag filter.
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * PutSecretValue request structure.
 * @class
 */
class PutSecretValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a Secret where the version is added to.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the new Secret version. It can be up to 64 bytes, contain letters, digits, hyphens (-), and underscores (_), and must begin with a letter or digit.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Binary Secret information that is base64-encoded. Either `SecretBinary` or `SecretString` must be set.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * Secret information plaintext in text format, base64 encoding is not needed. Either `SecretBinary` or `SecretString` must be set.
         * @type {string || null}
         */
        this.SecretString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.SecretBinary = 'SecretBinary' in params ? params.SecretBinary : null;
        this.SecretString = 'SecretString' in params ? params.SecretString : null;

    }
}

/**
 * GetSecretValue request structure.
 * @class
 */
class GetSecretValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the Secret version.
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * GetServiceStatus response structure.
 * @class
 */
class GetServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `true`: The service is activated; `false`: The service is not activated.
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

        /**
         * Invalid service type. `0`: not purchased; `1`: normal; `2`: suspended due to arrears; `3`: resource released
         * @type {number || null}
         */
        this.InvalidType = null;

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
        this.ServiceEnabled = 'ServiceEnabled' in params ? params.ServiceEnabled : null;
        this.InvalidType = 'InvalidType' in params ? params.InvalidType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreSecret request structure.
 * @class
 */
class RestoreSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret to be restored.
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * DescribeSecret request structure.
 * @class
 */
class DescribeSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a Secret whose detailed information is to be obtained.
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * PutSecretValue response structure.
 * @class
 */
class PutSecretValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Version ID that is newly added.
         * @type {string || null}
         */
        this.VersionId = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecret response structure.
 * @class
 */
class DeleteSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of deleted Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Secret deletion time, formatted as a Unix timestamp.
         * @type {number || null}
         */
        this.DeleteTime = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableSecret request structure.
 * @class
 */
class DisableSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret to be disabled.
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * Tag key and tag value.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

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
 * ListSecrets response structure.
 * @class
 */
class ListSecretsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of filtered Secrets according to `State` and `SearchSecretName`.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of Secret information.
         * @type {Array.<SecretMetadata> || null}
         */
        this.SecretMetadatas = null;

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

        if (params.SecretMetadatas) {
            this.SecretMetadatas = new Array();
            for (let z in params.SecretMetadatas) {
                let obj = new SecretMetadata();
                obj.deserialize(params.SecretMetadatas[z]);
                this.SecretMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableSecret request structure.
 * @class
 */
class EnableSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret to be enabled.
         * @type {string || null}
         */
        this.SecretName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

    }
}

/**
 * GetServiceStatus request structure.
 * @class
 */
class GetServiceStatusRequest extends  AbstractModel {
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
 * ListSecretVersionIds response structure.
 * @class
 */
class ListSecretVersionIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the Secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * `VersionId` list.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<VersionInfo> || null}
         */
        this.Versions = null;

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
        this.SecretName = 'SecretName' in params ? params.SecretName : null;

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new VersionInfo();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteSecretVersionResponse: DeleteSecretVersionResponse,
    RestoreSecretResponse: RestoreSecretResponse,
    UpdateDescriptionResponse: UpdateDescriptionResponse,
    DescribeSecretResponse: DescribeSecretResponse,
    DeleteSecretRequest: DeleteSecretRequest,
    CreateSecretRequest: CreateSecretRequest,
    GetSecretValueResponse: GetSecretValueResponse,
    GetRegionsResponse: GetRegionsResponse,
    DeleteSecretVersionRequest: DeleteSecretVersionRequest,
    SecretMetadata: SecretMetadata,
    ListSecretVersionIdsRequest: ListSecretVersionIdsRequest,
    CreateSecretResponse: CreateSecretResponse,
    GetRegionsRequest: GetRegionsRequest,
    UpdateSecretResponse: UpdateSecretResponse,
    DisableSecretResponse: DisableSecretResponse,
    ListSecretsRequest: ListSecretsRequest,
    UpdateDescriptionRequest: UpdateDescriptionRequest,
    EnableSecretResponse: EnableSecretResponse,
    UpdateSecretRequest: UpdateSecretRequest,
    VersionInfo: VersionInfo,
    TagFilter: TagFilter,
    PutSecretValueRequest: PutSecretValueRequest,
    GetSecretValueRequest: GetSecretValueRequest,
    GetServiceStatusResponse: GetServiceStatusResponse,
    RestoreSecretRequest: RestoreSecretRequest,
    DescribeSecretRequest: DescribeSecretRequest,
    PutSecretValueResponse: PutSecretValueResponse,
    DeleteSecretResponse: DeleteSecretResponse,
    DisableSecretRequest: DisableSecretRequest,
    Tag: Tag,
    ListSecretsResponse: ListSecretsResponse,
    EnableSecretRequest: EnableSecretRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    ListSecretVersionIdsResponse: ListSecretVersionIdsResponse,

}
