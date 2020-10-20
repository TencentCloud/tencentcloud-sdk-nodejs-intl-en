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
 * UpdateAlias request structure.
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * New alias containing 1-60 characters or digits
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * EnableWhiteBoxKey request structure.
 * @class
 */
class EnableWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * AsymmetricRsaDecrypt request structure.
 * @class
 */
class AsymmetricRsaDecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded ciphertext encrypted with `PublicKey`
         * @type {string || null}
         */
        this.Ciphertext = null;

        /**
         * Corresponding algorithm when a public key is used for encryption. Valid values: RSAES_PKCS1_V1_5, RSAES_OAEP_SHA_1, RSAES_OAEP_SHA_256
         * @type {string || null}
         */
        this.Algorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;

    }
}

/**
 * EnableKeyRotation request structure.
 * @class
 */
class EnableKeyRotationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DescribeWhiteBoxKeyDetails response structure.
 * @class
 */
class DescribeWhiteBoxKeyDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * White-box key information list
         * @type {Array.<WhiteboxKeyInfo> || null}
         */
        this.KeyInfos = null;

        /**
         * Total number of keys
Note: this field may return null, indicating that no valid values can be obtained.
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

        if (params.KeyInfos) {
            this.KeyInfos = new Array();
            for (let z in params.KeyInfos) {
                let obj = new WhiteboxKeyInfo();
                obj.deserialize(params.KeyInfos[z]);
                this.KeyInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateKey request structure.
 * @class
 */
class CreateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique alias that makes a key more recognizable and understandable. This parameter cannot be empty, can contain 1-60 letters, digits, `-`, and `_`, and must begin with a letter or digit. The `kms-` prefix is used for Tencent Cloud products.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * CMK description of up to 1,024 bytes in length
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Key purpose. The default value is `ENCRYPT_DECRYPT` (creating a symmetric key for encryption and decryption). Other valid values include `ASYMMETRIC_DECRYPT_RSA_2048` (creating an RSA2048 asymmetric key for encryption and decryption) and `ASYMMETRIC_DECRYPT_SM2` (creating an SM2 asymmetric key for encryption and decryption).
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * Specifies the key type. Default value: 1. Valid value: 1 - default type, indicating that the CMK is created by KMS; 2 - EXTERNAL type, indicating that you need to import key material. For more information, please see the `GetParametersForImport` and `ImportKeyMaterial` API documents.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Tag list
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * DisableWhiteBoxKey response structure.
 * @class
 */
class DisableWhiteBoxKeyResponse extends  AbstractModel {
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
 * DisableKey response structure.
 * @class
 */
class DisableKeyResponse extends  AbstractModel {
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
 * DescribeWhiteBoxServiceStatus request structure.
 * @class
 */
class DescribeWhiteBoxServiceStatusRequest extends  AbstractModel {
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
 * DescribeKey request structure.
 * @class
 */
class DescribeKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * White-box key information
 * @class
 */
class WhiteboxKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Unique alias that makes a key more recognizable and understandable. This parameter cannot be empty, can contain 1 to 60 letters, digits, hyphens (-), and underscores (_), and must begin with a letter or digit.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Creator
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * Key description information
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Key creation time in Unix timestamp
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * White-box key status. Valid values: Enabled, Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creator
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * Key algorithm type
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * Base64-encoded white-box encryption key
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * Base64-encoded white-box decryption key
         * @type {string || null}
         */
        this.DecryptKey = null;

        /**
         * Resource ID in the format of `creatorUin/$creatorUin/$keyId`
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Whether there is a device fingerprint bound to the current key
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.DeviceFingerprintBind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.DeviceFingerprintBind = 'DeviceFingerprintBind' in params ? params.DeviceFingerprintBind : null;

    }
}

/**
 * ListAlgorithms response structure.
 * @class
 */
class ListAlgorithmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Symmetric encryption algorithms supported in this region
         * @type {Array.<AlgorithmInfo> || null}
         */
        this.SymmetricAlgorithms = null;

        /**
         * Asymmetric encryption algorithms supported in this region
         * @type {Array.<AlgorithmInfo> || null}
         */
        this.AsymmetricAlgorithms = null;

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

        if (params.SymmetricAlgorithms) {
            this.SymmetricAlgorithms = new Array();
            for (let z in params.SymmetricAlgorithms) {
                let obj = new AlgorithmInfo();
                obj.deserialize(params.SymmetricAlgorithms[z]);
                this.SymmetricAlgorithms.push(obj);
            }
        }

        if (params.AsymmetricAlgorithms) {
            this.AsymmetricAlgorithms = new Array();
            for (let z in params.AsymmetricAlgorithms) {
                let obj = new AlgorithmInfo();
                obj.deserialize(params.AsymmetricAlgorithms[z]);
                this.AsymmetricAlgorithms.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeys response structure.
 * @class
 */
class DisableKeysResponse extends  AbstractModel {
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
 * DescribeWhiteBoxKey response structure.
 * @class
 */
class DescribeWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * White-box key information
         * @type {WhiteboxKeyInfo || null}
         */
        this.KeyInfo = null;

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

        if (params.KeyInfo) {
            let obj = new WhiteboxKeyInfo();
            obj.deserialize(params.KeyInfo)
            this.KeyInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateKeyDescription response structure.
 * @class
 */
class UpdateKeyDescriptionResponse extends  AbstractModel {
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
 * DescribeWhiteBoxServiceStatus response structure.
 * @class
 */
class DescribeWhiteBoxServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the user's white-box key service is available
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportKeyMaterial request structure.
 * @class
 */
class ImportKeyMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded key material that encrypted with the `PublicKey` returned by `GetParametersForImport`. For the KMS of SM-CRYPTO version, the length of the key material should be 128 bits, while for KMS of FIPS-compliant version, the length should be 256 bits.
         * @type {string || null}
         */
        this.EncryptedKeyMaterial = null;

        /**
         * Import token obtained by calling `GetParametersForImport`.
         * @type {string || null}
         */
        this.ImportToken = null;

        /**
         * Specifies the CMK into which to import key material, which must be the same as the one specified by `GetParametersForImport`.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Unix timestamp of the key material's expiration time. If this value is empty or 0, the key material will never expire. To specify the expiration time, it should be later than the current time. Maximum value: 2147443200.
         * @type {number || null}
         */
        this.ValidTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptedKeyMaterial = 'EncryptedKeyMaterial' in params ? params.EncryptedKeyMaterial : null;
        this.ImportToken = 'ImportToken' in params ? params.ImportToken : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;

    }
}

/**
 * EnableKey request structure.
 * @class
 */
class EnableKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetKeyRotationStatus request structure.
 * @class
 */
class GetKeyRotationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ListAlgorithms request structure.
 * @class
 */
class ListAlgorithmsRequest extends  AbstractModel {
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
 * Tag key and tag value
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
 * ListKeyDetail response structure.
 * @class
 */
class ListKeyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of CMKs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of returned attribute information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KeyMetadata> || null}
         */
        this.KeyMetadatas = null;

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

        if (params.KeyMetadatas) {
            this.KeyMetadatas = new Array();
            for (let z in params.KeyMetadatas) {
                let obj = new KeyMetadata();
                obj.deserialize(params.KeyMetadatas[z]);
                this.KeyMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateDataKey request structure.
 * @class
 */
class GenerateDataKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Specifies the encryption algorithm and size of the `DataKey`. Valid values: AES_128, AES_256. Either `KeySpec` or `NumberOfBytes` must be specified.
         * @type {string || null}
         */
        this.KeySpec = null;

        /**
         * Length of the `DataKey`. If both `NumberOfBytes` and `KeySpec` are specified, `NumberOfBytes` will prevail. Minimum value: 1; maximum value: 1024. Either `KeySpec` or `NumberOfBytes` must be specified.
         * @type {number || null}
         */
        this.NumberOfBytes = null;

        /**
         * JSON string of key-value pair. If this field is used, the same string should be entered when the returned `DataKey` is decrypted.
         * @type {string || null}
         */
        this.EncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeySpec = 'KeySpec' in params ? params.KeySpec : null;
        this.NumberOfBytes = 'NumberOfBytes' in params ? params.NumberOfBytes : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

    }
}

/**
 * UpdateAlias response structure.
 * @class
 */
class UpdateAliasResponse extends  AbstractModel {
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
 * ScheduleKeyDeletion response structure.
 * @class
 */
class ScheduleKeyDeletionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Schedule deletion execution time
         * @type {number || null}
         */
        this.DeletionDate = null;

        /**
         * Unique ID of the CMK scheduled for deletion
         * @type {string || null}
         */
        this.KeyId = null;

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
        this.DeletionDate = 'DeletionDate' in params ? params.DeletionDate : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateRandom response structure.
 * @class
 */
class GenerateRandomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded plaintext of the randomly generated number. You need to Base64-decode it to get the plaintext.
         * @type {string || null}
         */
        this.Plaintext = null;

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
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeys request structure.
 * @class
 */
class DescribeKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the CMKs to be queried in batches. Up to 100 `KeyId` values are supported in one query.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * GetPublicKey request structure.
 * @class
 */
class GetPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID.
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

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
 * EnableWhiteBoxKeys response structure.
 * @class
 */
class EnableWhiteBoxKeysResponse extends  AbstractModel {
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
 * ArchiveKey response structure.
 * @class
 */
class ArchiveKeyResponse extends  AbstractModel {
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
 * DescribeWhiteBoxKey request structure.
 * @class
 */
class DescribeWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetParametersForImport response structure.
 * @class
 */
class GetParametersForImportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a CMK, which is used to specify the CMK into which to import key material.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * The token required for importing key material, which is used as a parameter for `ImportKeyMaterial`.
         * @type {string || null}
         */
        this.ImportToken = null;

        /**
         * The Base64-encoded RSA public key used to encrypt key material before importing it with `ImportKeyMaterial`.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Validity period of the token and public key. A token and public key can only be imported when they are valid. If they are expired, you will need to call the `GetParametersForImport` API again to get a new token and public key.
         * @type {number || null}
         */
        this.ParametersValidTo = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ImportToken = 'ImportToken' in params ? params.ImportToken : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.ParametersValidTo = 'ParametersValidTo' in params ? params.ParametersValidTo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Decrypt response structure.
 * @class
 */
class DecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Decrypted plaintext. This field is Base64-encoded. In order to get the original plaintext, the Base64-decoding is needed
         * @type {string || null}
         */
        this.Plaintext = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhiteBoxKey response structure.
 * @class
 */
class CreateWhiteBoxKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded encryption key
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * Base64-encoded decryption key
         * @type {string || null}
         */
        this.DecryptKey = null;

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Tag operation return code. 0: success; 1: internal error; 2: business processing error
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * Tag operation return message
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
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Returned CMK list information
 * @class
 */
class Key extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID.
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DeleteImportedKeyMaterial response structure.
 * @class
 */
class DeleteImportedKeyMaterialResponse extends  AbstractModel {
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
 * EnableKeys request structure.
 * @class
 */
class EnableKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the CMKs to be enabled in batches. Up to 100 CMKs are supported at a time
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * EnableWhiteBoxKeys request structure.
 * @class
 */
class EnableWhiteBoxKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of globally unique white-box key IDs. Note: you should make sure that all provided `KeyId` values are in valid format, unique, and actually exist. Up to 50 ones are allowed.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * EncryptByWhiteBox response structure.
 * @class
 */
class EncryptByWhiteBoxResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded initialization vector, which will be used by the encryption algorithm. If this parameter is passed in by the caller, it will be returned as-is; otherwise, the backend service will generate a random one and return it.
         * @type {string || null}
         */
        this.InitializationVector = null;

        /**
         * Base64-encoded ciphertext after encryption
         * @type {string || null}
         */
        this.CipherText = null;

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
        this.InitializationVector = 'InitializationVector' in params ? params.InitializationVector : null;
        this.CipherText = 'CipherText' in params ? params.CipherText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeys response structure.
 * @class
 */
class DescribeKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of returned attribute information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<KeyMetadata> || null}
         */
        this.KeyMetadatas = null;

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

        if (params.KeyMetadatas) {
            this.KeyMetadatas = new Array();
            for (let z in params.KeyMetadatas) {
                let obj = new KeyMetadata();
                obj.deserialize(params.KeyMetadatas[z]);
                this.KeyMetadatas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableWhiteBoxKey response structure.
 * @class
 */
class EnableWhiteBoxKeyResponse extends  AbstractModel {
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
 * ReEncrypt request structure.
 * @class
 */
class ReEncryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ciphertext to be re-encrypted
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * CMK used for re-encryption. If this parameter is empty, the ciphertext will be re-encrypted by using the original CMK (as long as the key is not rotated, the ciphertext will not be refreshed)
         * @type {string || null}
         */
        this.DestinationKeyId = null;

        /**
         * JSON string of the key-value pair used during ciphertext encryption by `CiphertextBlob`. If not used during encryption, this parameter will be empty
         * @type {string || null}
         */
        this.SourceEncryptionContext = null;

        /**
         * JSON string of the key-value pair used during re-encryption. If this field is used, the same string should be entered when the returned new ciphertext is decrypted
         * @type {string || null}
         */
        this.DestinationEncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.DestinationKeyId = 'DestinationKeyId' in params ? params.DestinationKeyId : null;
        this.SourceEncryptionContext = 'SourceEncryptionContext' in params ? params.SourceEncryptionContext : null;
        this.DestinationEncryptionContext = 'DestinationEncryptionContext' in params ? params.DestinationEncryptionContext : null;

    }
}

/**
 * ListKeys response structure.
 * @class
 */
class ListKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK list array
         * @type {Array.<Key> || null}
         */
        this.Keys = null;

        /**
         * Total number of CMKs
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

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new Key();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AsymmetricSm2Decrypt response structure.
 * @class
 */
class AsymmetricSm2DecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded plaintext after decryption
         * @type {string || null}
         */
        this.Plaintext = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeyRotation response structure.
 * @class
 */
class DisableKeyRotationResponse extends  AbstractModel {
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
 * DisableWhiteBoxKeys request structure.
 * @class
 */
class DisableWhiteBoxKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of globally unique white-box key IDs. Note: you should make sure that all provided `KeyId` values are in valid format, unique, and actually exist. Up to 50 ones are allowed.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * ListKeyDetail request structure.
 * @class
 */
class ListKeyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter has the same meaning of the `Offset` in an SQL query, indicating that this acquisition starts from the "No. Offset value" element of the array arranged in a certain order. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * This parameter has the same meaning of the `Limit` in an SQL query, indicating that up to `Limit` value elements can be obtained in this request. The default value is 10 and the maximum value is 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters by creator role. 0 (default value): the CMK is created by the user; 1: the CMK is created automatically by an authorized Tencent Cloud service.
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Sorts by CMK creation time. 0: descending; 1: ascending
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Filters by CMK status. 0: all CMKs; 1: CMKs in `Enabled` status only; 2: CMKs in `Disabled` status only; 3: CMKs in `PendingDelete` status only (i.e., keys with schedule deletion enabled); 4: CMKs in `PendingImport` status only; 5: CMKs in `Archived` status only.
         * @type {number || null}
         */
        this.KeyState = null;

        /**
         * Performs a fuzzy query by `KeyId` or `Alias`
         * @type {string || null}
         */
        this.SearchKeyAlias = null;

        /**
         * Filters by CMK type. "TENCENT_KMS" indicates to filter CMKs whose key materials are created by KMS; "EXTERNAL" indicates to filter CMKs of `EXTERNAL` type whose key materials are imported by users; "ALL" or empty indicates to filter CMKs of both types. This value is case-sensitive.
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * Filter by `KeyUsage` of CMKs. Valid values: `ALL` (filter all CMKs), `ENCRYPT_DECRYPT` (it will be used when the parameter is left empty), `ASYMMETRIC_DECRYPT_RSA_2048`, `ASYMMETRIC_DECRYPT_SM2`.
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * Tag filter condition
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
        this.Role = 'Role' in params ? params.Role : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.SearchKeyAlias = 'SearchKeyAlias' in params ? params.SearchKeyAlias : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;

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
 * DeleteWhiteBoxKey request structure.
 * @class
 */
class DeleteWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * Algorithm name and ID
 * @class
 */
class AlgorithmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Algorithm ID
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * Algorithm name
         * @type {string || null}
         */
        this.Algorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;

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
         * The list of supported regions
Note: this field may return null, indicating that no valid values can be obtained.
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
 * GenerateDataKey response structure.
 * @class
 */
class GenerateDataKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Plaintext of the generated data key. The plaintext is Base64-encoded and can be used locally after having it Base64-decoded.
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * Ciphertext of the data key, which should be kept by yourself. KMS does not host user data keys. You can call the `Decrypt` API to get the plaintext of the data key from `CiphertextBlob`.
         * @type {string || null}
         */
        this.CiphertextBlob = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWhiteBoxKey request structure.
 * @class
 */
class CreateWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique alias that makes a key more recognizable and understandable. This parameter should be 1 to 60 letters, digits, `-`, and `_`; it must begin with a letter or digit and cannot be left empty.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * All algorithm types for creating keys. Valid values: AES_256, SM4
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * Key description of up to 1024 bytes
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Tag list
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * OverwriteWhiteBoxDeviceFingerprints response structure.
 * @class
 */
class OverwriteWhiteBoxDeviceFingerprintsResponse extends  AbstractModel {
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
 * DisableWhiteBoxKeys response structure.
 * @class
 */
class DisableWhiteBoxKeysResponse extends  AbstractModel {
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
 * ArchiveKey request structure.
 * @class
 */
class ArchiveKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * GetParametersForImport request structure.
 * @class
 */
class GetParametersForImportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a CMK. The CMK for which to get the key parameters must be of the `EXTERNAL` type, i.e., Type = 2 when the CMK is created by the `CreateKey` API.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Specifies the algorithm for key material encryption. Currently, `RSAES_PKCS1_V1_5`, `RSAES_OAEP_SHA_1`, and `RSAES_OAEP_SHA_256` are supported.
         * @type {string || null}
         */
        this.WrappingAlgorithm = null;

        /**
         * Specifies the type of wrapping key. Currently, only `RSA_2048` is supported.
         * @type {string || null}
         */
        this.WrappingKeySpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.WrappingAlgorithm = 'WrappingAlgorithm' in params ? params.WrappingAlgorithm : null;
        this.WrappingKeySpec = 'WrappingKeySpec' in params ? params.WrappingKeySpec : null;

    }
}

/**
 * CreateKey response structure.
 * @class
 */
class CreateKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Alias that makes a key more recognizable and understandable
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Key creation time in UNIX timestamp format
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * CMK description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CMK status
         * @type {string || null}
         */
        this.KeyState = null;

        /**
         * CMK usage
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * Tag operation return code. 0: success; 1: internal error; 2: business processing error
         * @type {number || null}
         */
        this.TagCode = null;

        /**
         * Tag operation return information
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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.TagCode = 'TagCode' in params ? params.TagCode : null;
        this.TagMsg = 'TagMsg' in params ? params.TagMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReEncrypt response structure.
 * @class
 */
class ReEncryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Re-encrypted ciphertext
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * CMK used for re-encryption
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * CMK used by ciphertext before re-encryption
         * @type {string || null}
         */
        this.SourceKeyId = null;

        /**
         * `true` indicates that the ciphertext has been re-encrypted. When re-encryption is initiated by using the same CMK, as long as the CMK is not rotated, no actual re-encryption will be performed, and the original ciphertext will be returned
         * @type {boolean || null}
         */
        this.ReEncrypted = null;

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
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.SourceKeyId = 'SourceKeyId' in params ? params.SourceKeyId : null;
        this.ReEncrypted = 'ReEncrypted' in params ? params.ReEncrypted : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Encrypt response structure.
 * @class
 */
class EncryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded encrypted ciphertext
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * Globally unique ID of the CMK used for encryption
         * @type {string || null}
         */
        this.KeyId = null;

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
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyDeletion request structure.
 * @class
 */
class CancelKeyDeletionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the CMK for which to cancel schedule deletion
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DeleteImportedKeyMaterial request structure.
 * @class
 */
class DeleteImportedKeyMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the EXTERNAL CMK for which to delete the key material.
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * EnableKey response structure.
 * @class
 */
class EnableKeyResponse extends  AbstractModel {
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
 * GetServiceStatus response structure.
 * @class
 */
class GetServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the KMS service has been activated. true: activated
         * @type {boolean || null}
         */
        this.ServiceEnabled = null;

        /**
         * Service unavailability type. 0: not purchased; 1: normal; 2: suspended due to arrears; 3: resource released
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
 * Device fingerprint
 * @class
 */
class DeviceFingerprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fingerprint information collected by device fingerprint collector. Its format must be in the following regular expression: ^[0-9a-f]{8}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{16}$
         * @type {string || null}
         */
        this.Identity = null;

        /**
         * Description, such as IP and device name. Length limit: 1,024 bytes
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Identity = 'Identity' in params ? params.Identity : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetKeyRotationStatus response structure.
 * @class
 */
class GetKeyRotationStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether key rotation is enabled
         * @type {boolean || null}
         */
        this.KeyRotationEnabled = null;

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
        this.KeyRotationEnabled = 'KeyRotationEnabled' in params ? params.KeyRotationEnabled : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Encrypt request structure.
 * @class
 */
class EncryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique ID of the CMK generated by calling the `CreateKey` API
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Encrypted plaintext data. This field must be Base64-encoded. The maximum size of the original data is 4 KB
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * JSON string of key-value pair. If this parameter is specified, the same parameter needs to be provided when the `Decrypt` API is called. It is up to 1,024 characters
         * @type {string || null}
         */
        this.EncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

    }
}

/**
 * AsymmetricSm2Decrypt request structure.
 * @class
 */
class AsymmetricSm2DecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded ciphertext encrypted with `PublicKey`, whose length cannot exceed 256 bytes.
         * @type {string || null}
         */
        this.Ciphertext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;

    }
}

/**
 * DeleteWhiteBoxKey response structure.
 * @class
 */
class DeleteWhiteBoxKeyResponse extends  AbstractModel {
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
 * ListKeys request structure.
 * @class
 */
class ListKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This parameter has the same meaning of the `Offset` in an SQL query, indicating that this acquisition starts from the "No. Offset value" element of the array arranged in a certain order. The default value is 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * This parameter has the same meaning of the `Limit` in an SQL query, indicating that up to `Limit` value elements can be obtained in this request. The default value is 10 and the maximum value is 200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter by creator role. 0 (default value): the CMK is created by the user; 1: the CMK is created automatically by an authorized Tencent Cloud service
         * @type {number || null}
         */
        this.Role = null;

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
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeWhiteBoxDecryptKey request structure.
 * @class
 */
class DescribeWhiteBoxDecryptKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * CMK attribute information
 * @class
 */
class KeyMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Alias that makes a key more recognizable and understandable
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Key creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * CMK description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CMK status. Valid values: Enabled, Disabled, PendingDelete, PendingImport, Archived.
         * @type {string || null}
         */
        this.KeyState = null;

        /**
         * CMK purpose. Valid values: ENCRYPT_DECRYPT, ASYMMETRIC_DECRYPT_RSA_2048, ASYMMETRIC_DECRYPT_SM2
         * @type {string || null}
         */
        this.KeyUsage = null;

        /**
         * CMK type. 2: FIPS-compliant; 4: SM-CRYPTO
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Creator
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * Whether key rotation is enabled
         * @type {boolean || null}
         */
        this.KeyRotationEnabled = null;

        /**
         * CMK creator. The value of this parameter is `user` if the CMK is created by the user, or the corresponding service name if it is created automatically by an authorized Tencent Cloud service.
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * Time of next rotation if key rotation is enabled
         * @type {number || null}
         */
        this.NextRotateTime = null;

        /**
         * Scheduled deletion time
         * @type {number || null}
         */
        this.DeletionDate = null;

        /**
         * CMK key material type. TENCENT_KMS: created by KMS; EXTERNAL: imported by user.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * It's valid when `Origin` is `EXTERNAL`, indicating the expiration date of key material. 0 means valid forever.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ValidTo = null;

        /**
         * Resource ID in the format of `creatorUin/$creatorUin/$keyId`.
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyState = 'KeyState' in params ? params.KeyState : null;
        this.KeyUsage = 'KeyUsage' in params ? params.KeyUsage : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.KeyRotationEnabled = 'KeyRotationEnabled' in params ? params.KeyRotationEnabled : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.NextRotateTime = 'NextRotateTime' in params ? params.NextRotateTime : null;
        this.DeletionDate = 'DeletionDate' in params ? params.DeletionDate : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * CancelKeyArchive response structure.
 * @class
 */
class CancelKeyArchiveResponse extends  AbstractModel {
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
 * Decrypt request structure.
 * @class
 */
class DecryptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ciphertext data to be decrypted.
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * JSON string of key-value pair. If this parameter is specified for `Encrypt`, the same parameter needs to be provided when the `Decrypt` API is called. The maximum length is 1,024 bytes.
         * @type {string || null}
         */
        this.EncryptionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.EncryptionContext = 'EncryptionContext' in params ? params.EncryptionContext : null;

    }
}

/**
 * DescribeWhiteBoxKeyDetails request structure.
 * @class
 */
class DescribeWhiteBoxKeyDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter: key status. 0: disabled, 1: enabled
         * @type {number || null}
         */
        this.KeyStatus = null;

        /**
         * This parameter has the same meaning of the `Offset` in an SQL query, indicating that this acquisition starts from the "No. Offset value" element of the array arranged in a certain order. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * This parameter has the same meaning of the `Limit` in an SQL query, indicating that up to `Limit` value elements can be obtained in this request. The default value is 0, indicating not to paginate.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Tag filter condition
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
        this.KeyStatus = 'KeyStatus' in params ? params.KeyStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * AsymmetricRsaDecrypt response structure.
 * @class
 */
class AsymmetricRsaDecryptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded plaintext after decryption
         * @type {string || null}
         */
        this.Plaintext = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Plaintext = 'Plaintext' in params ? params.Plaintext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyDeletion response structure.
 * @class
 */
class CancelKeyDeletionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the CMK for which the schedule deletion is canceled
         * @type {string || null}
         */
        this.KeyId = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableKeys request structure.
 * @class
 */
class DisableKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the CMKs to be disabled in batches. Up to 100 CMKs are supported at a time
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * DisableWhiteBoxKey request structure.
 * @class
 */
class DisableWhiteBoxKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * UnbindCloudResource request structure.
 * @class
 */
class UnbindCloudResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Unique ID of a Tencent Cloud service
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Resource/instance ID, which is stored as a string and defined by the caller based on the Tencent Cloud service’s features.
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * OverwriteWhiteBoxDeviceFingerprints request structure.
 * @class
 */
class OverwriteWhiteBoxDeviceFingerprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * White-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Device fingerprint list. If the list is empty, it means to delete all fingerprint information corresponding to the key. There can be up to 200 entries in the list.
         * @type {Array.<DeviceFingerprint> || null}
         */
        this.DeviceFingerprints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

        if (params.DeviceFingerprints) {
            this.DeviceFingerprints = new Array();
            for (let z in params.DeviceFingerprints) {
                let obj = new DeviceFingerprint();
                obj.deserialize(params.DeviceFingerprints[z]);
                this.DeviceFingerprints.push(obj);
            }
        }

    }
}

/**
 * EnableKeyRotation response structure.
 * @class
 */
class EnableKeyRotationResponse extends  AbstractModel {
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
 * BindCloudResource response structure.
 * @class
 */
class BindCloudResourceResponse extends  AbstractModel {
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
 * EnableKeys response structure.
 * @class
 */
class EnableKeysResponse extends  AbstractModel {
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
 * DescribeWhiteBoxDeviceFingerprints request structure.
 * @class
 */
class DescribeWhiteBoxDeviceFingerprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * White-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

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
 * EncryptByWhiteBox request structure.
 * @class
 */
class EncryptByWhiteBoxRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Globally unique white-box key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded text to be encrypted. The size of the original text cannot exceed 4 KB.
         * @type {string || null}
         */
        this.PlainText = null;

        /**
         * Base64-encoded initialization vector of 16 bytes, which will be used by the encryption algorithm. If this parameter is not passed in, the backend service will generate a random one. You should save this value as a parameter for decryption.
         * @type {string || null}
         */
        this.InitializationVector = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PlainText = 'PlainText' in params ? params.PlainText : null;
        this.InitializationVector = 'InitializationVector' in params ? params.InitializationVector : null;

    }
}

/**
 * GenerateRandom request structure.
 * @class
 */
class GenerateRandomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Length of the random number. Minimum value: 1. Maximum value: 1024
         * @type {number || null}
         */
        this.NumberOfBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NumberOfBytes = 'NumberOfBytes' in params ? params.NumberOfBytes : null;

    }
}

/**
 * ScheduleKeyDeletion request structure.
 * @class
 */
class ScheduleKeyDeletionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Schedule deletion time range. Value range: [7,30]
         * @type {number || null}
         */
        this.PendingWindowInDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PendingWindowInDays = 'PendingWindowInDays' in params ? params.PendingWindowInDays : null;

    }
}

/**
 * DisableKey request structure.
 * @class
 */
class DisableKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ImportKeyMaterial response structure.
 * @class
 */
class ImportKeyMaterialResponse extends  AbstractModel {
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
 * GetPublicKey response structure.
 * @class
 */
class GetPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Base64-encoded public key content.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Public key content in PEM format.
         * @type {string || null}
         */
        this.PublicKeyPem = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PublicKeyPem = 'PublicKeyPem' in params ? params.PublicKeyPem : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindCloudResource request structure.
 * @class
 */
class BindCloudResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Unique ID of a Tencent Cloud service
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Resource/instance ID, which is stored as a string and defined by the caller based on the Tencent Cloud service’s features.
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * Tag filter
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
 * DescribeWhiteBoxDecryptKey response structure.
 * @class
 */
class DescribeWhiteBoxDecryptKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded white-box decryption key
         * @type {string || null}
         */
        this.DecryptKey = null;

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
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWhiteBoxDeviceFingerprints response structure.
 * @class
 */
class DescribeWhiteBoxDeviceFingerprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Device fingerprint list
         * @type {Array.<DeviceFingerprint> || null}
         */
        this.DeviceFingerprints = null;

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

        if (params.DeviceFingerprints) {
            this.DeviceFingerprints = new Array();
            for (let z in params.DeviceFingerprints) {
                let obj = new DeviceFingerprint();
                obj.deserialize(params.DeviceFingerprints[z]);
                this.DeviceFingerprints.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateKeyDescription request structure.
 * @class
 */
class UpdateKeyDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * New description of up to 1,024 bytes in length
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ID of the CMK for which to modify the description
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * UnbindCloudResource response structure.
 * @class
 */
class UnbindCloudResourceResponse extends  AbstractModel {
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
 * DescribeKey response structure.
 * @class
 */
class DescribeKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key attribute information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {KeyMetadata || null}
         */
        this.KeyMetadata = null;

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

        if (params.KeyMetadata) {
            let obj = new KeyMetadata();
            obj.deserialize(params.KeyMetadata)
            this.KeyMetadata = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelKeyArchive request structure.
 * @class
 */
class CancelKeyArchiveRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * DisableKeyRotation request structure.
 * @class
 */
class DisableKeyRotationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique CMK ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

module.exports = {
    UpdateAliasRequest: UpdateAliasRequest,
    EnableWhiteBoxKeyRequest: EnableWhiteBoxKeyRequest,
    AsymmetricRsaDecryptRequest: AsymmetricRsaDecryptRequest,
    EnableKeyRotationRequest: EnableKeyRotationRequest,
    DescribeWhiteBoxKeyDetailsResponse: DescribeWhiteBoxKeyDetailsResponse,
    CreateKeyRequest: CreateKeyRequest,
    DisableWhiteBoxKeyResponse: DisableWhiteBoxKeyResponse,
    DisableKeyResponse: DisableKeyResponse,
    DescribeWhiteBoxServiceStatusRequest: DescribeWhiteBoxServiceStatusRequest,
    DescribeKeyRequest: DescribeKeyRequest,
    WhiteboxKeyInfo: WhiteboxKeyInfo,
    ListAlgorithmsResponse: ListAlgorithmsResponse,
    DisableKeysResponse: DisableKeysResponse,
    DescribeWhiteBoxKeyResponse: DescribeWhiteBoxKeyResponse,
    UpdateKeyDescriptionResponse: UpdateKeyDescriptionResponse,
    DescribeWhiteBoxServiceStatusResponse: DescribeWhiteBoxServiceStatusResponse,
    ImportKeyMaterialRequest: ImportKeyMaterialRequest,
    EnableKeyRequest: EnableKeyRequest,
    GetKeyRotationStatusRequest: GetKeyRotationStatusRequest,
    ListAlgorithmsRequest: ListAlgorithmsRequest,
    Tag: Tag,
    ListKeyDetailResponse: ListKeyDetailResponse,
    GenerateDataKeyRequest: GenerateDataKeyRequest,
    UpdateAliasResponse: UpdateAliasResponse,
    ScheduleKeyDeletionResponse: ScheduleKeyDeletionResponse,
    GenerateRandomResponse: GenerateRandomResponse,
    DescribeKeysRequest: DescribeKeysRequest,
    GetPublicKeyRequest: GetPublicKeyRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    EnableWhiteBoxKeysResponse: EnableWhiteBoxKeysResponse,
    ArchiveKeyResponse: ArchiveKeyResponse,
    DescribeWhiteBoxKeyRequest: DescribeWhiteBoxKeyRequest,
    GetParametersForImportResponse: GetParametersForImportResponse,
    DecryptResponse: DecryptResponse,
    CreateWhiteBoxKeyResponse: CreateWhiteBoxKeyResponse,
    Key: Key,
    DeleteImportedKeyMaterialResponse: DeleteImportedKeyMaterialResponse,
    EnableKeysRequest: EnableKeysRequest,
    EnableWhiteBoxKeysRequest: EnableWhiteBoxKeysRequest,
    EncryptByWhiteBoxResponse: EncryptByWhiteBoxResponse,
    DescribeKeysResponse: DescribeKeysResponse,
    EnableWhiteBoxKeyResponse: EnableWhiteBoxKeyResponse,
    ReEncryptRequest: ReEncryptRequest,
    ListKeysResponse: ListKeysResponse,
    AsymmetricSm2DecryptResponse: AsymmetricSm2DecryptResponse,
    DisableKeyRotationResponse: DisableKeyRotationResponse,
    DisableWhiteBoxKeysRequest: DisableWhiteBoxKeysRequest,
    ListKeyDetailRequest: ListKeyDetailRequest,
    DeleteWhiteBoxKeyRequest: DeleteWhiteBoxKeyRequest,
    AlgorithmInfo: AlgorithmInfo,
    GetRegionsResponse: GetRegionsResponse,
    GenerateDataKeyResponse: GenerateDataKeyResponse,
    CreateWhiteBoxKeyRequest: CreateWhiteBoxKeyRequest,
    OverwriteWhiteBoxDeviceFingerprintsResponse: OverwriteWhiteBoxDeviceFingerprintsResponse,
    DisableWhiteBoxKeysResponse: DisableWhiteBoxKeysResponse,
    ArchiveKeyRequest: ArchiveKeyRequest,
    GetParametersForImportRequest: GetParametersForImportRequest,
    CreateKeyResponse: CreateKeyResponse,
    ReEncryptResponse: ReEncryptResponse,
    EncryptResponse: EncryptResponse,
    CancelKeyDeletionRequest: CancelKeyDeletionRequest,
    DeleteImportedKeyMaterialRequest: DeleteImportedKeyMaterialRequest,
    EnableKeyResponse: EnableKeyResponse,
    GetServiceStatusResponse: GetServiceStatusResponse,
    DeviceFingerprint: DeviceFingerprint,
    GetKeyRotationStatusResponse: GetKeyRotationStatusResponse,
    EncryptRequest: EncryptRequest,
    AsymmetricSm2DecryptRequest: AsymmetricSm2DecryptRequest,
    DeleteWhiteBoxKeyResponse: DeleteWhiteBoxKeyResponse,
    ListKeysRequest: ListKeysRequest,
    DescribeWhiteBoxDecryptKeyRequest: DescribeWhiteBoxDecryptKeyRequest,
    KeyMetadata: KeyMetadata,
    CancelKeyArchiveResponse: CancelKeyArchiveResponse,
    DecryptRequest: DecryptRequest,
    DescribeWhiteBoxKeyDetailsRequest: DescribeWhiteBoxKeyDetailsRequest,
    AsymmetricRsaDecryptResponse: AsymmetricRsaDecryptResponse,
    CancelKeyDeletionResponse: CancelKeyDeletionResponse,
    DisableKeysRequest: DisableKeysRequest,
    DisableWhiteBoxKeyRequest: DisableWhiteBoxKeyRequest,
    UnbindCloudResourceRequest: UnbindCloudResourceRequest,
    OverwriteWhiteBoxDeviceFingerprintsRequest: OverwriteWhiteBoxDeviceFingerprintsRequest,
    EnableKeyRotationResponse: EnableKeyRotationResponse,
    BindCloudResourceResponse: BindCloudResourceResponse,
    EnableKeysResponse: EnableKeysResponse,
    DescribeWhiteBoxDeviceFingerprintsRequest: DescribeWhiteBoxDeviceFingerprintsRequest,
    GetRegionsRequest: GetRegionsRequest,
    EncryptByWhiteBoxRequest: EncryptByWhiteBoxRequest,
    GenerateRandomRequest: GenerateRandomRequest,
    ScheduleKeyDeletionRequest: ScheduleKeyDeletionRequest,
    DisableKeyRequest: DisableKeyRequest,
    ImportKeyMaterialResponse: ImportKeyMaterialResponse,
    GetPublicKeyResponse: GetPublicKeyResponse,
    BindCloudResourceRequest: BindCloudResourceRequest,
    TagFilter: TagFilter,
    DescribeWhiteBoxDecryptKeyResponse: DescribeWhiteBoxDecryptKeyResponse,
    DescribeWhiteBoxDeviceFingerprintsResponse: DescribeWhiteBoxDeviceFingerprintsResponse,
    UpdateKeyDescriptionRequest: UpdateKeyDescriptionRequest,
    UnbindCloudResourceResponse: UnbindCloudResourceResponse,
    DescribeKeyResponse: DescribeKeyResponse,
    CancelKeyArchiveRequest: CancelKeyArchiveRequest,
    DisableKeyRotationRequest: DisableKeyRotationRequest,

}
