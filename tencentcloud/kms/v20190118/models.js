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
 * DisableKeys request structure.
 * @class
 */
class DisableKeysRequest extends  AbstractModel {
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
 * UpdateAlias request structure.
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
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
         * Unique alias that makes a key more recognizable and understandable. This parameter should be 1 to 60 letters, digits, `-`, and `_`; it must begin with a letter or digit and cannot be left empty.
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
         * 
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
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.DecryptKey = 'DecryptKey' in params ? params.DecryptKey : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

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
         * 
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
         * 
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
 * GenerateDataKey response structure.
 * @class
 */
class GenerateDataKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 
         * @type {string || null}
         */
        this.Plaintext = null;

        /**
         * Base64-encoded ciphertext that is encrypted by `DataKey`. You should keep the ciphertext private.
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

    }
}

/**
 * EnableKeyRotation request structure.
 * @class
 */
class EnableKeyRotationRequest extends  AbstractModel {
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
         * Unique alias that makes a key more recognizable and understandable. This parameter cannot be empty, can contain 1–60 letters, digits, `-`, and `_`, and must begin with a letter or digit. The `kms-` prefix is used for Tencent Cloud products.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 
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
         * 
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
 * ListKeys response structure.
 * @class
 */
class ListKeysResponse extends  AbstractModel {
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
 * Encrypt request structure.
 * @class
 */
class EncryptRequest extends  AbstractModel {
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
 * CreateKey response structure.
 * @class
 */
class CreateKeyResponse extends  AbstractModel {
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
 * ReEncrypt response structure.
 * @class
 */
class ReEncryptResponse extends  AbstractModel {
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
 * CancelKeyDeletion request structure.
 * @class
 */
class CancelKeyDeletionRequest extends  AbstractModel {
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
 * CMK attribute information
 * @class
 */
class KeyMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CMK status. Valid values: Enabled, Disabled, PendingDelete, PendingImport.
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
         * 
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 
         * @type {boolean || null}
         */
        this.KeyRotationEnabled = null;

        /**
         * 
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 
         * @type {number || null}
         */
        this.NextRotateTime = null;

        /**
         * 
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
         * It’s valid when `Origin` is `EXTERNAL`, indicating the expiration date of key material. 0 means valid forever.
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Unix timestamp of the key material’s expiration time. If this value is empty or 0, the key material will never expire. To specify the expiration time, it should be later than the current time. Maximum value: 2147443200.
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
 * GetKeyRotationStatus response structure.
 * @class
 */
class GetKeyRotationStatusResponse extends  AbstractModel {
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
 * DisableKey request structure.
 * @class
 */
class DisableKeyRequest extends  AbstractModel {
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
 * GetKeyRotationStatus request structure.
 * @class
 */
class GetKeyRotationStatusRequest extends  AbstractModel {
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
 * Decrypt response structure.
 * @class
 */
class DecryptResponse extends  AbstractModel {
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
 * GetServiceStatus response structure.
 * @class
 */
class GetServiceStatusResponse extends  AbstractModel {
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
 * ListKeyDetail response structure.
 * @class
 */
class ListKeyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
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
 * CancelKeyDeletion response structure.
 * @class
 */
class CancelKeyDeletionResponse extends  AbstractModel {
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
         * 
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
 * ScheduleKeyDeletion response structure.
 * @class
 */
class ScheduleKeyDeletionResponse extends  AbstractModel {
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
         * 
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
 * ListKeyDetail request structure.
 * @class
 */
class ListKeyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * This parameter has the same meaning of the `Limit` in an SQL query, indicating that up to `Limit` value elements can be obtained in this request. The default value is 10 and the maximum value is 200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 
         * @type {number || null}
         */
        this.Role = null;

        /**
         * 
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Filters by CMK status. 0: all CMKs; 1: CMKs in `Enabled` status only; 2: CMKs in `Disabled` status only; 3: CMKs in `PendingDelete` status only (i.e., keys with schedule deletion enabled); 4: CMKs in `PendingImport` status only.
         * @type {number || null}
         */
        this.KeyState = null;

        /**
         * 
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyStatus = 'KeyStatus' in params ? params.KeyStatus : null;

    }
}

/**
 * EnableKeys request structure.
 * @class
 */
class EnableKeysRequest extends  AbstractModel {
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
 * ScheduleKeyDeletion request structure.
 * @class
 */
class ScheduleKeyDeletionRequest extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ReEncrypt request structure.
 * @class
 */
class ReEncryptRequest extends  AbstractModel {
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
 * DisableKeyRotation request structure.
 * @class
 */
class DisableKeyRotationRequest extends  AbstractModel {
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
    UpdateKeyDescriptionResponse: UpdateKeyDescriptionResponse,
    DisableKeysRequest: DisableKeysRequest,
    AlgorithmInfo: AlgorithmInfo,
    EnableWhiteBoxKeysResponse: EnableWhiteBoxKeysResponse,
    UpdateAliasRequest: UpdateAliasRequest,
    DisableWhiteBoxKeyRequest: DisableWhiteBoxKeyRequest,
    WhiteboxKeyInfo: WhiteboxKeyInfo,
    GenerateDataKeyRequest: GenerateDataKeyRequest,
    EnableWhiteBoxKeyRequest: EnableWhiteBoxKeyRequest,
    GenerateDataKeyResponse: GenerateDataKeyResponse,
    AsymmetricRsaDecryptRequest: AsymmetricRsaDecryptRequest,
    CreateWhiteBoxKeyRequest: CreateWhiteBoxKeyRequest,
    EnableKeyRotationRequest: EnableKeyRotationRequest,
    EnableKeyRotationResponse: EnableKeyRotationResponse,
    DescribeWhiteBoxKeyDetailsResponse: DescribeWhiteBoxKeyDetailsResponse,
    CreateKeyRequest: CreateKeyRequest,
    UpdateKeyDescriptionRequest: UpdateKeyDescriptionRequest,
    EnableKeysResponse: EnableKeysResponse,
    ListKeysResponse: ListKeysResponse,
    DisableWhiteBoxKeyResponse: DisableWhiteBoxKeyResponse,
    EncryptRequest: EncryptRequest,
    DisableKeyResponse: DisableKeyResponse,
    DescribeWhiteBoxKeyRequest: DescribeWhiteBoxKeyRequest,
    GetParametersForImportRequest: GetParametersForImportRequest,
    DisableWhiteBoxKeysResponse: DisableWhiteBoxKeysResponse,
    DeleteImportedKeyMaterialResponse: DeleteImportedKeyMaterialResponse,
    CreateKeyResponse: CreateKeyResponse,
    ReEncryptResponse: ReEncryptResponse,
    DescribeWhiteBoxServiceStatusRequest: DescribeWhiteBoxServiceStatusRequest,
    DescribeKeyRequest: DescribeKeyRequest,
    CancelKeyDeletionRequest: CancelKeyDeletionRequest,
    EncryptByWhiteBoxRequest: EncryptByWhiteBoxRequest,
    GenerateRandomRequest: GenerateRandomRequest,
    KeyMetadata: KeyMetadata,
    DeleteImportedKeyMaterialRequest: DeleteImportedKeyMaterialRequest,
    ListAlgorithmsResponse: ListAlgorithmsResponse,
    EnableKeyResponse: EnableKeyResponse,
    GenerateRandomResponse: GenerateRandomResponse,
    DescribeWhiteBoxDecryptKeyResponse: DescribeWhiteBoxDecryptKeyResponse,
    ImportKeyMaterialRequest: ImportKeyMaterialRequest,
    EnableKeyRequest: EnableKeyRequest,
    GetKeyRotationStatusResponse: GetKeyRotationStatusResponse,
    ImportKeyMaterialResponse: ImportKeyMaterialResponse,
    DisableKeyRequest: DisableKeyRequest,
    DescribeWhiteBoxKeyResponse: DescribeWhiteBoxKeyResponse,
    GetKeyRotationStatusRequest: GetKeyRotationStatusRequest,
    DescribeWhiteBoxServiceStatusResponse: DescribeWhiteBoxServiceStatusResponse,
    AsymmetricSm2DecryptRequest: AsymmetricSm2DecryptRequest,
    DecryptResponse: DecryptResponse,
    DeleteWhiteBoxKeyResponse: DeleteWhiteBoxKeyResponse,
    DescribeKeyResponse: DescribeKeyResponse,
    EnableWhiteBoxKeysRequest: EnableWhiteBoxKeysRequest,
    EncryptByWhiteBoxResponse: EncryptByWhiteBoxResponse,
    GetServiceStatusResponse: GetServiceStatusResponse,
    DescribeKeysResponse: DescribeKeysResponse,
    EnableWhiteBoxKeyResponse: EnableWhiteBoxKeyResponse,
    GetPublicKeyResponse: GetPublicKeyResponse,
    ListKeyDetailResponse: ListKeyDetailResponse,
    CancelKeyDeletionResponse: CancelKeyDeletionResponse,
    ListKeysRequest: ListKeysRequest,
    DescribeWhiteBoxDecryptKeyRequest: DescribeWhiteBoxDecryptKeyRequest,
    EncryptResponse: EncryptResponse,
    AsymmetricSm2DecryptResponse: AsymmetricSm2DecryptResponse,
    DisableKeyRotationResponse: DisableKeyRotationResponse,
    ListAlgorithmsRequest: ListAlgorithmsRequest,
    DisableKeysResponse: DisableKeysResponse,
    UpdateAliasResponse: UpdateAliasResponse,
    DisableWhiteBoxKeysRequest: DisableWhiteBoxKeysRequest,
    ScheduleKeyDeletionResponse: ScheduleKeyDeletionResponse,
    GetParametersForImportResponse: GetParametersForImportResponse,
    DecryptRequest: DecryptRequest,
    ListKeyDetailRequest: ListKeyDetailRequest,
    DescribeWhiteBoxKeyDetailsRequest: DescribeWhiteBoxKeyDetailsRequest,
    EnableKeysRequest: EnableKeysRequest,
    ScheduleKeyDeletionRequest: ScheduleKeyDeletionRequest,
    CreateWhiteBoxKeyResponse: CreateWhiteBoxKeyResponse,
    AsymmetricRsaDecryptResponse: AsymmetricRsaDecryptResponse,
    DeleteWhiteBoxKeyRequest: DeleteWhiteBoxKeyRequest,
    DescribeKeysRequest: DescribeKeysRequest,
    ReEncryptRequest: ReEncryptRequest,
    GetPublicKeyRequest: GetPublicKeyRequest,
    GetServiceStatusRequest: GetServiceStatusRequest,
    DisableKeyRotationRequest: DisableKeyRotationRequest,

}
