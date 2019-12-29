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
 * CreateKey request structure.
 * @class
 */
class CreateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 
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
 * ListKeyDetail response structure.
 * @class
 */
class ListKeyDetailResponse extends  AbstractModel {
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
         * 
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

    }
}

/**
 * UpdateKeyDescription request structure.
 * @class
 */
class UpdateKeyDescriptionRequest extends  AbstractModel {
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
    DisableKeysRequest: DisableKeysRequest,
    UpdateAliasRequest: UpdateAliasRequest,
    ReEncryptRequest: ReEncryptRequest,
    UpdateKeyDescriptionResponse: UpdateKeyDescriptionResponse,
    GenerateDataKeyResponse: GenerateDataKeyResponse,
    EnableKeyRotationRequest: EnableKeyRotationRequest,
    EnableKeyRotationResponse: EnableKeyRotationResponse,
    CreateKeyRequest: CreateKeyRequest,
    EnableKeysResponse: EnableKeysResponse,
    DisableKeyResponse: DisableKeyResponse,
    GetParametersForImportRequest: GetParametersForImportRequest,
    GetParametersForImportResponse: GetParametersForImportResponse,
    DecryptResponse: DecryptResponse,
    ReEncryptResponse: ReEncryptResponse,
    EncryptResponse: EncryptResponse,
    CancelKeyDeletionRequest: CancelKeyDeletionRequest,
    GenerateRandomRequest: GenerateRandomRequest,
    DeleteImportedKeyMaterialRequest: DeleteImportedKeyMaterialRequest,
    EnableKeyResponse: EnableKeyResponse,
    ScheduleKeyDeletionRequest: ScheduleKeyDeletionRequest,
    GetServiceStatusResponse: GetServiceStatusResponse,
    ImportKeyMaterialRequest: ImportKeyMaterialRequest,
    GetKeyRotationStatusResponse: GetKeyRotationStatusResponse,
    EnableKeysRequest: EnableKeysRequest,
    ImportKeyMaterialResponse: ImportKeyMaterialResponse,
    EncryptRequest: EncryptRequest,
    DeleteImportedKeyMaterialResponse: DeleteImportedKeyMaterialResponse,
    CreateKeyResponse: CreateKeyResponse,
    EnableKeyRequest: EnableKeyRequest,
    GetKeyRotationStatusRequest: GetKeyRotationStatusRequest,
    ListKeyDetailResponse: ListKeyDetailResponse,
    GenerateDataKeyRequest: GenerateDataKeyRequest,
    ListKeysRequest: ListKeysRequest,
    ListKeysResponse: ListKeysResponse,
    DisableKeysResponse: DisableKeysResponse,
    DisableKeyRotationResponse: DisableKeyRotationResponse,
    UpdateAliasResponse: UpdateAliasResponse,
    ScheduleKeyDeletionResponse: ScheduleKeyDeletionResponse,
    DecryptRequest: DecryptRequest,
    ListKeyDetailRequest: ListKeyDetailRequest,
    UpdateKeyDescriptionRequest: UpdateKeyDescriptionRequest,
    DisableKeyRequest: DisableKeyRequest,
    GenerateRandomResponse: GenerateRandomResponse,
    CancelKeyDeletionResponse: CancelKeyDeletionResponse,
    GetServiceStatusRequest: GetServiceStatusRequest,
    DisableKeyRotationRequest: DisableKeyRotationRequest,

}
