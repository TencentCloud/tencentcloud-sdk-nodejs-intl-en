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
         * Credential status: Enabled, Disabled, PendingDelete, Creating, Failed.
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
         * `0`: user-defined secret; `1`: database credential; `2`: SSH key secret.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * Tencent Cloud service name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Tencent Cloud service instance ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceID = null;

        /**
         * Whether to enable rotation. True: yes; False: no.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.RotationStatus = null;

        /**
         * Rotation frequency in days by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RotationFrequency = null;

        /**
         * Secret name. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Project ID. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * ID of the CVM instance associated with the SSH key. ID. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIDs = null;

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
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;
        this.RotationStatus = 'RotationStatus' in params ? params.RotationStatus : null;
        this.RotationFrequency = 'RotationFrequency' in params ? params.RotationFrequency : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.AssociatedInstanceIDs = 'AssociatedInstanceIDs' in params ? params.AssociatedInstanceIDs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSupportedProducts request structure.
 * @class
 */
class DescribeSupportedProductsRequest extends  AbstractModel {
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
         * Specifies the version number of the corresponding credential.
For Tencent Cloud service credentials such as MySQL credentials, this API is used to get the plaintext information of a previously rotated credential by specifying the credential name and historical version number. If you want to get the plaintext of the credential version currently in use, you need to specify the version number as `SSM_Current`.
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
         * Scheduled deletion time (in days), indicating the number of retention days for the secret. Value range: 0-30. If it is `0`, the secret is deleted immediately.
For an SSH key secret, this field can only be `0`.
         * @type {number || null}
         */
        this.RecoveryWindowInDays = null;

        /**
         * Specifies whether to delete the SSH key from both the secret and the SSH key list in the CVM console. This field is only valid for SSH key secrets. Valid values:
`True`: deletes SSH key from both the secret and SSH key list in the CVM console. Note that the deletion will fail if the SSH key is already bound to a CVM instance.
`False`: only deletes the SSH key information in the secret.
         * @type {boolean || null}
         */
        this.CleanSSHKey = null;

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
        this.CleanSSHKey = 'CleanSSHKey' in params ? params.CleanSSHKey : null;

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
 * RotateProductSecret request structure.
 * @class
 */
class RotateProductSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the credential to be rotated.
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
 * CreateProductSecret request structure.
 * @class
 */
class CreateProductSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credential name, which must be unique in the same region. It can contain 128 bytes of letters, digits, hyphens, and underscores and must begin with a letter or digit.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Prefix of the user account name, which is specified by you and can contain up to 8 characters.
Supported character sets include:
Digits: [0, 9].
Lowercase letters: [a, z].
Uppercase letters: [A, Z].
Special symbols: underscore.
The prefix must begin with a letter.
         * @type {string || null}
         */
        this.UserNamePrefix = null;

        /**
         * Name of the Tencent Cloud service bound to the credential, such as `Mysql`. The `DescribeSupportedProducts` API can be used to get the names of the supported Tencent Cloud services.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Tencent Cloud service instance ID.
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * Domain name of the account in the form of IP. You can enter `%`.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * List of permissions that need to be granted when the credential is bound to a Tencent Cloud service.
         * @type {Array.<ProductPrivilegeUnit> || null}
         */
        this.PrivilegesList = null;

        /**
         * Description, which is used to describe the purpose in detail and can contain up to 2,048 bytes.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Specifies the KMS CMK that encrypts the credential.
If this parameter is left empty, the CMK created by Secrets Manager by default will be used for encryption.
You can also specify a custom KMS CMK created in the same region for encryption.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * List of tags.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * User-Defined rotation start time in the format of 2006-01-02 15:04:05.
When `EnableRotation` is `True`, this parameter is required.
         * @type {string || null}
         */
        this.RotationBeginTime = null;

        /**
         * Specifies whether to enable rotation
True - enable
False - do not enable
If this parameter is not specified, `False` will be used by default.
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * Rotation frequency in days. Default value: 1 day.
         * @type {number || null}
         */
        this.RotationFrequency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.UserNamePrefix = 'UserNamePrefix' in params ? params.UserNamePrefix : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.PrivilegesList) {
            this.PrivilegesList = new Array();
            for (let z in params.PrivilegesList) {
                let obj = new ProductPrivilegeUnit();
                obj.deserialize(params.PrivilegesList[z]);
                this.PrivilegesList.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RotationBeginTime = 'RotationBeginTime' in params ? params.RotationBeginTime : null;
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.RotationFrequency = 'RotationFrequency' in params ? params.RotationFrequency : null;

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
         * When creating a credential (CreateSecret), if you specify binary data, this field will be the Base64-encoded returned result. The application needs to Base64-decode the result to get the original data.
Either `SecretBinary` or `SecretString` cannot be empty.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * When creating a credential (CreateSecret), if you specify general text data, this field will be the returned result.
Either `SecretBinary` or `SecretString` cannot be empty.
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
 * DescribeSupportedProducts response structure.
 * @class
 */
class DescribeSupportedProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of supported services.
         * @type {Array.<string> || null}
         */
        this.Products = null;

        /**
         * Number of supported services
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.Products = 'Products' in params ? params.Products : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * Credential name
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Credential description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * KMS `KeyId` used to encrypt the credential
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Creator UIN
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * Credential status: Enabled, Disabled, PendingDelete, Creating, Failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Credential deletion date, which takes effect for credentials in `PendingDelete` status and is in UNIX timestamp format
         * @type {number || null}
         */
        this.DeleteTime = null;

        /**
         * Credential creation time in UNIX timestamp format
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Type of the KMS CMK used to encrypt the credential. `DEFAULT` represents the default key created by Secrets Manager, and `CUSTOMER` represents the user-specified key
         * @type {string || null}
         */
        this.KmsKeyType = null;

        /**
         * 1: enable rotation; 0: disable rotation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RotationStatus = null;

        /**
         * Start time of the next rotation in UNIX timestamp format
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NextRotationTime = null;

        /**
         * 0: user-defined credential; 1: Tencent Cloud service credential.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * Tencent Cloud service name, which takes effect only when `SecretType` is 1 (Tencent Cloud service credential)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Secret name. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Project ID. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * ID of the CVM instance associated with the SSH key. ID. This field is only valid when the `SecretType` is set to `2` (SSH key secret).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIDs = null;

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
        this.RotationStatus = 'RotationStatus' in params ? params.RotationStatus : null;
        this.NextRotationTime = 'NextRotationTime' in params ? params.NextRotationTime : null;
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.AssociatedInstanceIDs = 'AssociatedInstanceIDs' in params ? params.AssociatedInstanceIDs : null;

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
 * DescribeRotationDetail request structure.
 * @class
 */
class DescribeRotationDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the name of the credential for which to get the credential rotation details.
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
 * CreateSSHKeyPairSecret response structure.
 * @class
 */
class CreateSSHKeyPairSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the created secret.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the created SSH key.
         * @type {string || null}
         */
        this.SSHKeyID = null;

        /**
         * Name of the created SSH key.
         * @type {string || null}
         */
        this.SSHKeyName = null;

        /**
         * Tag return code. `0`: success; `1`: internal error; `2`: business processing error.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * Tag return message.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.SSHKeyID = 'SSHKeyID' in params ? params.SSHKeyID : null;
        this.SSHKeyName = 'SSHKeyName' in params ? params.SSHKeyName : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRotationStatus response structure.
 * @class
 */
class UpdateRotationStatusResponse extends  AbstractModel {
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
         * Filter based on credential status.
The default value is 0, indicating to query all.
1: query the list of credentials in `Enabled` status.
2: query the list of credentials in `Disabled` status.
3: query the list of credentials in `PendingDelete` status.
4: query the list of credentials in `PendingCreate` status.
5: query the list of credentials in `CreateFailed` status.
The `PendingCreate` and `CreateFailed` status only take effect when `SecretType` is Tencent Cloud service credential
         * @type {number || null}
         */
        this.State = null;

        /**
         * Filter according to Secret names. If left empty, this filter is not applied.
         * @type {string || null}
         */
        this.SearchSecretName = null;

        /**
         * Tag filter.
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * `0` (default): user-defined secret.
`1`: Tencent Cloud services secret.
`2`: SSH key secret.
         * @type {number || null}
         */
        this.SecretType = null;

        /**
         * 
         * @type {string || null}
         */
        this.ProductName = null;

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
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

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
 * CreateSSHKeyPairSecret request structure.
 * @class
 */
class CreateSSHKeyPairSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Secret name, which must be unique in the same region. It can contain 128 bytes of letters, digits, hyphens and underscores and must begin with a letter or digit.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * ID of the project to which the created SSH key belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Description, such as what it is used for. It contains up to 2,048 bytes.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Specifies a KMS CMK to encrypt the secret.
If this parameter is left empty, the CMK created by Secrets Manager by default will be used for encryption.
You can also specify a custom KMS CMK created in the same region for encryption.
         * @type {string || null}
         */
        this.KmsKeyId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;

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
 * UpdateRotationStatus request structure.
 * @class
 */
class UpdateRotationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tencent Cloud service credential name.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Specifies whether to enable rotation.
`true`: enables rotation.
`false`: disables rotation.
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * Rotation frequency in days. Value range: 30–365.
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * User-defined rotation start time in the format of 2006-01-02 15:04:05.
When `EnableRotation` is `true` and `RotationBeginTime` is left empty, the current time will be entered by default.
         * @type {string || null}
         */
        this.RotationBeginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.RotationBeginTime = 'RotationBeginTime' in params ? params.RotationBeginTime : null;

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
         * This field should be used and Base64-encoded if the content of the new credential is binary.
Either `SecretBinary` or `SecretString` cannot be empty.
         * @type {string || null}
         */
        this.SecretBinary = null;

        /**
         * This field should be used without being Base64-encoded if the content of the new credential is text. Either `SecretBinary` or `SecretString` cannot be empty.
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
 * DescribeAsyncRequestInfo response structure.
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: processing, 1: processing succeeded, 2: processing failed
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Task description.
         * @type {string || null}
         */
        this.Description = null;

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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Description = 'Description' in params ? params.Description : null;
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
 * RotateProductSecret response structure.
 * @class
 */
class RotateProductSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async rotation task ID.
         * @type {number || null}
         */
        this.FlowID = null;

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
        this.FlowID = 'FlowID' in params ? params.FlowID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Base64-encoded binary credential information.
Either `SecretBinary` or `SecretString` must be set.
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
 * DescribeRotationHistory response structure.
 * @class
 */
class DescribeRotationHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of version numbers.
         * @type {Array.<string> || null}
         */
        this.VersionIDs = null;

        /**
         * Number of version numbers. The maximum number of version numbers that can be shown to users is 10.
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.VersionIDs = 'VersionIDs' in params ? params.VersionIDs : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSSHKeyPairValue request structure.
 * @class
 */
class GetSSHKeyPairValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Secret name. This field is only valid for SSH key secrets.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 
         * @type {string || null}
         */
        this.SSHKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SSHKeyId = 'SSHKeyId' in params ? params.SSHKeyId : null;

    }
}

/**
 * DescribeAsyncRequestInfo request structure.
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
         * @type {number || null}
         */
        this.FlowID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowID = 'FlowID' in params ? params.FlowID : null;

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
 * DescribeRotationDetail response structure.
 * @class
 */
class DescribeRotationDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable rotation. `true`: enabled; `false`: disabled.
         * @type {boolean || null}
         */
        this.EnableRotation = null;

        /**
         * Rotation frequency in days. Default value: 1 day.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * Last rotation time, which is an explicitly visible time string in the format of 2006-01-02 15:04:05.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LatestRotateTime = null;

        /**
         * Next rotation start time, which is an explicitly visible time string in the format of 2006-01-02 15:04:05.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NextRotateBeginTime = null;

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
        this.EnableRotation = 'EnableRotation' in params ? params.EnableRotation : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.LatestRotateTime = 'LatestRotateTime' in params ? params.LatestRotateTime : null;
        this.NextRotateBeginTime = 'NextRotateBeginTime' in params ? params.NextRotateBeginTime : null;
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
 * Permission granted when the credential is associated with the service
 * @class
 */
class ProductPrivilegeUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission name. Valid values:
GlobalPrivileges
DatabasePrivileges
TablePrivileges
ColumnPrivileges

When the permission is `DatabasePrivileges`, the database name must be specified by the `Database` parameter;

When the permission is `TablePrivileges`, the database name and the table name in the database must be specified by the `Database` and `TableName` parameters;

When the permission is `ColumnPrivileges`, the database name, table name in the database, and column name in the table must be specified by the `Database`, `TableName`, and `ColumnName` parameters.
         * @type {string || null}
         */
        this.PrivilegeName = null;

        /**
         * Permission list.
For the `Mysql` service, optional permission values are:

1. Valid values of `GlobalPrivileges`: "SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER".
Note: if this parameter is not passed in, it means to clear the permission.

2. Valid values of `DatabasePrivileges`: "SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER".
Note: if this parameter is not passed in, it means to clear the permission.

3. Valid values of `TablePrivileges`: "SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER".
Note: if this parameter is not passed in, it means to clear the permission.

4. Valid values of `ColumnPrivileges`: "SELECT","INSERT","UPDATE","REFERENCES".
Note: if this parameter is not passed in, it means to clear the permission.
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * This value takes effect only when `PrivilegeName` is `DatabasePrivileges`.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * This value takes effect only when `PrivilegeName` is `TablePrivileges`, and the `Database` parameter is required in this case to explicitly indicate the database instance.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * This value takes effect only when `PrivilegeName` is `ColumnPrivileges`, and the following parameters are required in this case:
Database: explicitly indicate the database instance.
TableName: explicitly indicate the table
         * @type {string || null}
         */
        this.ColumnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivilegeName = 'PrivilegeName' in params ? params.PrivilegeName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;

    }
}

/**
 * DescribeRotationHistory request structure.
 * @class
 */
class DescribeRotationHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the name of the credential for which to get the credential rotation records.
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
 * GetSSHKeyPairValue response structure.
 * @class
 */
class GetSSHKeyPairValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the SSH key.
         * @type {string || null}
         */
        this.SSHKeyID = null;

        /**
         * Plaintext value of the Base64-encoded public key.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Plaintext value of the Base64-encoded private key.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * ID of the project to which the SSH key belongs.
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * Description of the SSH key.
The description can be modified in the CVM console.
         * @type {string || null}
         */
        this.SSHKeyDescription = null;

        /**
         * Name of the SSH key.
The name can be modified in the CVM console.
         * @type {string || null}
         */
        this.SSHKeyName = null;

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
        this.SSHKeyID = 'SSHKeyID' in params ? params.SSHKeyID : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.SSHKeyDescription = 'SSHKeyDescription' in params ? params.SSHKeyDescription : null;
        this.SSHKeyName = 'SSHKeyName' in params ? params.SSHKeyName : null;
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
 * CreateProductSecret response structure.
 * @class
 */
class CreateProductSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the created credential.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Tag operation return code. 0: success; 1: internal error; 2: business processing error.
Note: this field may return null, indicating that no valid values can be obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * Tag operation return message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagMsg = null;

        /**
         * ID of the created Tencent Cloud service credential async task.
         * @type {number || null}
         */
        this.FlowID = null;

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
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.FlowID = 'FlowID' in params ? params.FlowID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    DescribeSupportedProductsRequest: DescribeSupportedProductsRequest,
    GetSecretValueRequest: GetSecretValueRequest,
    DeleteSecretRequest: DeleteSecretRequest,
    CreateSecretRequest: CreateSecretRequest,
    RotateProductSecretRequest: RotateProductSecretRequest,
    CreateProductSecretRequest: CreateProductSecretRequest,
    GetSecretValueResponse: GetSecretValueResponse,
    GetRegionsResponse: GetRegionsResponse,
    DescribeSupportedProductsResponse: DescribeSupportedProductsResponse,
    DeleteSecretVersionRequest: DeleteSecretVersionRequest,
    SecretMetadata: SecretMetadata,
    ListSecretVersionIdsRequest: ListSecretVersionIdsRequest,
    DescribeRotationDetailRequest: DescribeRotationDetailRequest,
    CreateSSHKeyPairSecretResponse: CreateSSHKeyPairSecretResponse,
    UpdateRotationStatusResponse: UpdateRotationStatusResponse,
    CreateSecretResponse: CreateSecretResponse,
    GetRegionsRequest: GetRegionsRequest,
    UpdateSecretResponse: UpdateSecretResponse,
    DisableSecretResponse: DisableSecretResponse,
    Tag: Tag,
    ListSecretsRequest: ListSecretsRequest,
    UpdateDescriptionRequest: UpdateDescriptionRequest,
    EnableSecretResponse: EnableSecretResponse,
    CreateSSHKeyPairSecretRequest: CreateSSHKeyPairSecretRequest,
    UpdateRotationStatusRequest: UpdateRotationStatusRequest,
    UpdateSecretRequest: UpdateSecretRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    RestoreSecretRequest: RestoreSecretRequest,
    RotateProductSecretResponse: RotateProductSecretResponse,
    VersionInfo: VersionInfo,
    TagFilter: TagFilter,
    PutSecretValueRequest: PutSecretValueRequest,
    PutSecretValueResponse: PutSecretValueResponse,
    DescribeRotationHistoryResponse: DescribeRotationHistoryResponse,
    GetSSHKeyPairValueRequest: GetSSHKeyPairValueRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    GetServiceStatusResponse: GetServiceStatusResponse,
    DescribeRotationDetailResponse: DescribeRotationDetailResponse,
    EnableSecretRequest: EnableSecretRequest,
    ProductPrivilegeUnit: ProductPrivilegeUnit,
    DescribeRotationHistoryRequest: DescribeRotationHistoryRequest,
    GetSSHKeyPairValueResponse: GetSSHKeyPairValueResponse,
    DeleteSecretResponse: DeleteSecretResponse,
    DisableSecretRequest: DisableSecretRequest,
    CreateProductSecretResponse: CreateProductSecretResponse,
    ListSecretsResponse: ListSecretsResponse,
    DescribeSecretRequest: DescribeSecretRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    ListSecretVersionIdsResponse: ListSecretVersionIdsResponse,

}
