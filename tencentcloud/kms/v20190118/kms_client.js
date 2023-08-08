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
const UpdateAliasRequest = models.UpdateAliasRequest;
const EnableWhiteBoxKeyRequest = models.EnableWhiteBoxKeyRequest;
const AsymmetricRsaDecryptRequest = models.AsymmetricRsaDecryptRequest;
const EnableKeyRotationRequest = models.EnableKeyRotationRequest;
const DescribeWhiteBoxKeyDetailsResponse = models.DescribeWhiteBoxKeyDetailsResponse;
const CreateKeyRequest = models.CreateKeyRequest;
const DisableWhiteBoxKeyResponse = models.DisableWhiteBoxKeyResponse;
const DisableKeyResponse = models.DisableKeyResponse;
const DescribeWhiteBoxServiceStatusRequest = models.DescribeWhiteBoxServiceStatusRequest;
const VerifyByAsymmetricKeyRequest = models.VerifyByAsymmetricKeyRequest;
const DescribeKeyRequest = models.DescribeKeyRequest;
const WhiteboxKeyInfo = models.WhiteboxKeyInfo;
const ListAlgorithmsResponse = models.ListAlgorithmsResponse;
const DisableKeysResponse = models.DisableKeysResponse;
const DescribeWhiteBoxKeyResponse = models.DescribeWhiteBoxKeyResponse;
const UpdateKeyDescriptionResponse = models.UpdateKeyDescriptionResponse;
const DescribeWhiteBoxServiceStatusResponse = models.DescribeWhiteBoxServiceStatusResponse;
const ImportKeyMaterialRequest = models.ImportKeyMaterialRequest;
const EnableKeyRequest = models.EnableKeyRequest;
const GetKeyRotationStatusRequest = models.GetKeyRotationStatusRequest;
const ListAlgorithmsRequest = models.ListAlgorithmsRequest;
const Tag = models.Tag;
const ListKeyDetailResponse = models.ListKeyDetailResponse;
const GenerateDataKeyRequest = models.GenerateDataKeyRequest;
const UpdateAliasResponse = models.UpdateAliasResponse;
const ScheduleKeyDeletionResponse = models.ScheduleKeyDeletionResponse;
const PostQuantumCryptoVerifyRequest = models.PostQuantumCryptoVerifyRequest;
const GenerateRandomResponse = models.GenerateRandomResponse;
const DescribeKeysRequest = models.DescribeKeysRequest;
const GetPublicKeyRequest = models.GetPublicKeyRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const EnableWhiteBoxKeysResponse = models.EnableWhiteBoxKeysResponse;
const ArchiveKeyResponse = models.ArchiveKeyResponse;
const VerifyByAsymmetricKeyResponse = models.VerifyByAsymmetricKeyResponse;
const DescribeWhiteBoxKeyRequest = models.DescribeWhiteBoxKeyRequest;
const GetParametersForImportResponse = models.GetParametersForImportResponse;
const DecryptResponse = models.DecryptResponse;
const CreateWhiteBoxKeyResponse = models.CreateWhiteBoxKeyResponse;
const Key = models.Key;
const DeleteImportedKeyMaterialResponse = models.DeleteImportedKeyMaterialResponse;
const EnableKeysRequest = models.EnableKeysRequest;
const EnableWhiteBoxKeysRequest = models.EnableWhiteBoxKeysRequest;
const EncryptByWhiteBoxResponse = models.EncryptByWhiteBoxResponse;
const DescribeKeysResponse = models.DescribeKeysResponse;
const EnableWhiteBoxKeyResponse = models.EnableWhiteBoxKeyResponse;
const ReEncryptRequest = models.ReEncryptRequest;
const ListKeysResponse = models.ListKeysResponse;
const AsymmetricSm2DecryptResponse = models.AsymmetricSm2DecryptResponse;
const DisableKeyRotationResponse = models.DisableKeyRotationResponse;
const DisableWhiteBoxKeysRequest = models.DisableWhiteBoxKeysRequest;
const ListKeyDetailRequest = models.ListKeyDetailRequest;
const DeleteWhiteBoxKeyRequest = models.DeleteWhiteBoxKeyRequest;
const AlgorithmInfo = models.AlgorithmInfo;
const GetRegionsResponse = models.GetRegionsResponse;
const GenerateDataKeyResponse = models.GenerateDataKeyResponse;
const CreateWhiteBoxKeyRequest = models.CreateWhiteBoxKeyRequest;
const OverwriteWhiteBoxDeviceFingerprintsResponse = models.OverwriteWhiteBoxDeviceFingerprintsResponse;
const DisableWhiteBoxKeysResponse = models.DisableWhiteBoxKeysResponse;
const ArchiveKeyRequest = models.ArchiveKeyRequest;
const GetParametersForImportRequest = models.GetParametersForImportRequest;
const CreateKeyResponse = models.CreateKeyResponse;
const ReEncryptResponse = models.ReEncryptResponse;
const EncryptResponse = models.EncryptResponse;
const CancelKeyDeletionRequest = models.CancelKeyDeletionRequest;
const DeleteImportedKeyMaterialRequest = models.DeleteImportedKeyMaterialRequest;
const EnableKeyResponse = models.EnableKeyResponse;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const DeviceFingerprint = models.DeviceFingerprint;
const GetKeyRotationStatusResponse = models.GetKeyRotationStatusResponse;
const EncryptRequest = models.EncryptRequest;
const AsymmetricSm2DecryptRequest = models.AsymmetricSm2DecryptRequest;
const DeleteWhiteBoxKeyResponse = models.DeleteWhiteBoxKeyResponse;
const ListKeysRequest = models.ListKeysRequest;
const DescribeWhiteBoxDecryptKeyRequest = models.DescribeWhiteBoxDecryptKeyRequest;
const KeyMetadata = models.KeyMetadata;
const CancelKeyArchiveResponse = models.CancelKeyArchiveResponse;
const DecryptRequest = models.DecryptRequest;
const DescribeWhiteBoxKeyDetailsRequest = models.DescribeWhiteBoxKeyDetailsRequest;
const PostQuantumCryptoSignRequest = models.PostQuantumCryptoSignRequest;
const PostQuantumCryptoDecryptRequest = models.PostQuantumCryptoDecryptRequest;
const AsymmetricRsaDecryptResponse = models.AsymmetricRsaDecryptResponse;
const CancelKeyDeletionResponse = models.CancelKeyDeletionResponse;
const DisableKeysRequest = models.DisableKeysRequest;
const DisableWhiteBoxKeyRequest = models.DisableWhiteBoxKeyRequest;
const UnbindCloudResourceRequest = models.UnbindCloudResourceRequest;
const OverwriteWhiteBoxDeviceFingerprintsRequest = models.OverwriteWhiteBoxDeviceFingerprintsRequest;
const EnableKeyRotationResponse = models.EnableKeyRotationResponse;
const BindCloudResourceResponse = models.BindCloudResourceResponse;
const EnableKeysResponse = models.EnableKeysResponse;
const SignByAsymmetricKeyRequest = models.SignByAsymmetricKeyRequest;
const DescribeWhiteBoxDeviceFingerprintsRequest = models.DescribeWhiteBoxDeviceFingerprintsRequest;
const GetRegionsRequest = models.GetRegionsRequest;
const PostQuantumCryptoEncryptResponse = models.PostQuantumCryptoEncryptResponse;
const EncryptByWhiteBoxRequest = models.EncryptByWhiteBoxRequest;
const GenerateRandomRequest = models.GenerateRandomRequest;
const ScheduleKeyDeletionRequest = models.ScheduleKeyDeletionRequest;
const PostQuantumCryptoEncryptRequest = models.PostQuantumCryptoEncryptRequest;
const DisableKeyRequest = models.DisableKeyRequest;
const ImportKeyMaterialResponse = models.ImportKeyMaterialResponse;
const GetPublicKeyResponse = models.GetPublicKeyResponse;
const BindCloudResourceRequest = models.BindCloudResourceRequest;
const TagFilter = models.TagFilter;
const PostQuantumCryptoSignResponse = models.PostQuantumCryptoSignResponse;
const SignByAsymmetricKeyResponse = models.SignByAsymmetricKeyResponse;
const PostQuantumCryptoVerifyResponse = models.PostQuantumCryptoVerifyResponse;
const DescribeWhiteBoxDecryptKeyResponse = models.DescribeWhiteBoxDecryptKeyResponse;
const DescribeWhiteBoxDeviceFingerprintsResponse = models.DescribeWhiteBoxDeviceFingerprintsResponse;
const PostQuantumCryptoDecryptResponse = models.PostQuantumCryptoDecryptResponse;
const UpdateKeyDescriptionRequest = models.UpdateKeyDescriptionRequest;
const UnbindCloudResourceResponse = models.UnbindCloudResourceResponse;
const DescribeKeyResponse = models.DescribeKeyResponse;
const CancelKeyArchiveRequest = models.CancelKeyArchiveRequest;
const DisableKeyRotationRequest = models.DisableKeyRotationRequest;


/**
 * kms client
 * @class
 */
class KmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("kms.tencentcloudapi.com", "2019-01-18", credential, region, profile);
    }
    
    /**
     * This API is used to verify a signature u200dusing PQC.
     * @param {PostQuantumCryptoVerifyRequest} req
     * @param {function(string, PostQuantumCryptoVerifyResponse):void} cb
     * @public
     */
    PostQuantumCryptoVerify(req, cb) {
        let resp = new PostQuantumCryptoVerifyResponse();
        this.request("PostQuantumCryptoVerify", req, resp, cb);
    }

    /**
     * This API is used to encrypt any data up to 4KB. It can be used to encrypt database passwords, RSA Key, or other small sensitive information. For application data encryption, use the DataKey generated by GenerateDataKey to perform local data encryption and decryption operations
     * @param {EncryptRequest} req
     * @param {function(string, EncryptResponse):void} cb
     * @public
     */
    Encrypt(req, cb) {
        let resp = new EncryptResponse();
        this.request("Encrypt", req, resp, cb);
    }

    /**
     * This API is used to decrypt the ciphertext and obtain the plaintext data.
     * @param {DecryptRequest} req
     * @param {function(string, DecryptResponse):void} cb
     * @public
     */
    Decrypt(req, cb) {
        let resp = new DecryptResponse();
        this.request("Decrypt", req, resp, cb);
    }

    /**
     * This API is used to modify the alias of a CMK. CMKs in `PendingDelete` status cannot be modified.
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * This API is used to delete a white-box key. Note: only disabled white-box keys can be deleted.
     * @param {DeleteWhiteBoxKeyRequest} req
     * @param {function(string, DeleteWhiteBoxKeyResponse):void} cb
     * @public
     */
    DeleteWhiteBoxKey(req, cb) {
        let resp = new DeleteWhiteBoxKeyResponse();
        this.request("DeleteWhiteBoxKey", req, resp, cb);
    }

    /**
     * This API is used to import key material into an EXTERNAL CMK. The key obtained through the `GetParametersForImport` API is used to encrypt the key material. You can only reimport the same key material into the specified CMK and set a new expiration time. After the CMK key material is imported, it cannot be replaced. After the key material is expired or deleted, the CMK will remain unavailable until the same key material is reimported. CMKs are independent, which means that the same key material can be imported into different CMKs, but data encrypted by one CMK cannot be decrypted by another one.
Key material can only be imported into CMKs in `Enabled` and `PendingImport` status.
     * @param {ImportKeyMaterialRequest} req
     * @param {function(string, ImportKeyMaterialResponse):void} cb
     * @public
     */
    ImportKeyMaterial(req, cb) {
        let resp = new ImportKeyMaterialResponse();
        this.request("ImportKeyMaterial", req, resp, cb);
    }

    /**
     * This API is used to get the public key of an asymmetric KMS key (which must be enabled). With the public key, you can encrypt messages and verify signatures.
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        let resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
    }

    /**
     * This API is used to disable a master key. The disabled key cannot be used for encryption and decryption operations.
     * @param {DisableKeyRequest} req
     * @param {function(string, DisableKeyResponse):void} cb
     * @public
     */
    DisableKey(req, cb) {
        let resp = new DisableKeyResponse();
        this.request("DisableKey", req, resp, cb);
    }

    /**
     * This API generates a data key, which you can use to encrypt local data.
     * @param {GenerateDataKeyRequest} req
     * @param {function(string, GenerateDataKeyResponse):void} cb
     * @public
     */
    GenerateDataKey(req, cb) {
        let resp = new GenerateDataKeyResponse();
        this.request("GenerateDataKey", req, resp, cb);
    }

    /**
     * Used to query whether the user has activated the KMS service.
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        let resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }

    /**
     * This API is used to decrypt data with the specified private key that is encrypted with SM2 asymmetric cryptographic algorithm. The ciphertext must be encrypted with the corresponding public key. The asymmetric key must be in `Enabled` state for decryption. The length of the ciphertext passed in cannot exceed 256 bytes.
     * @param {AsymmetricSm2DecryptRequest} req
     * @param {function(string, AsymmetricSm2DecryptResponse):void} cb
     * @public
     */
    AsymmetricSm2Decrypt(req, cb) {
        let resp = new AsymmetricSm2DecryptResponse();
        this.request("AsymmetricSm2Decrypt", req, resp, cb);
    }

    /**
     * This API is used to generate a signature with an asymmetric key.
Note that only when KeyUsage is `ASYMMETRIC_SIGN_VERIFY_${ALGORITHM}` (e.g., `ASYMMETRIC_SIGN_VERIFY_SM2` and `ASYMMETRIC_SIGN_VERIFY_ECC`), the key can be used for signing.
     * @param {SignByAsymmetricKeyRequest} req
     * @param {function(string, SignByAsymmetricKeyResponse):void} cb
     * @public
     */
    SignByAsymmetricKey(req, cb) {
        let resp = new SignByAsymmetricKeyResponse();
        this.request("SignByAsymmetricKey", req, resp, cb);
    }

    /**
     * Cancel the scheduled deletion of CMK
     * @param {CancelKeyDeletionRequest} req
     * @param {function(string, CancelKeyDeletionResponse):void} cb
     * @public
     */
    CancelKeyDeletion(req, cb) {
        let resp = new CancelKeyDeletionResponse();
        this.request("CancelKeyDeletion", req, resp, cb);
    }

    /**
     * Query whether the specified CMK has the key rotation function.
     * @param {GetKeyRotationStatusRequest} req
     * @param {function(string, GetKeyRotationStatusResponse):void} cb
     * @public
     */
    GetKeyRotationStatus(req, cb) {
        let resp = new GetKeyRotationStatusResponse();
        this.request("GetKeyRotationStatus", req, resp, cb);
    }

    /**
     * This API is used to get the white-box key list.
     * @param {DescribeWhiteBoxKeyDetailsRequest} req
     * @param {function(string, DescribeWhiteBoxKeyDetailsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKeyDetails(req, cb) {
        let resp = new DescribeWhiteBoxKeyDetailsResponse();
        this.request("DescribeWhiteBoxKeyDetails", req, resp, cb);
    }

    /**
     * This API is used to bind a key with a Tencent Cloud resource. If the key has been set to be expired automatically, the setting will be canceled to ensure that the key will not be invalid automatically. If the key and the resource has already been bound, the call will still be successful.
     * @param {BindCloudResourceRequest} req
     * @param {function(string, BindCloudResourceResponse):void} cb
     * @public
     */
    BindCloudResource(req, cb) {
        let resp = new BindCloudResourceResponse();
        this.request("BindCloudResource", req, resp, cb);
    }

    /**
     * This API is used to archive keys. The archived keys can only be used for decryption but not encryption.
     * @param {ArchiveKeyRequest} req
     * @param {function(string, ArchiveKeyResponse):void} cb
     * @public
     */
    ArchiveKey(req, cb) {
        let resp = new ArchiveKeyResponse();
        this.request("ArchiveKey", req, resp, cb);
    }

    /**
     * This API is used to unarchive keys. If a key is unarchived, its status will be `Enabled`.
     * @param {CancelKeyArchiveRequest} req
     * @param {function(string, CancelKeyArchiveResponse):void} cb
     * @public
     */
    CancelKeyArchive(req, cb) {
        let resp = new CancelKeyArchiveResponse();
        this.request("CancelKeyArchive", req, resp, cb);
    }

    /**
     * Re-encrypt the ciphertext using the specified CMK.
     * @param {ReEncryptRequest} req
     * @param {function(string, ReEncryptResponse):void} cb
     * @public
     */
    ReEncrypt(req, cb) {
        let resp = new ReEncryptResponse();
        this.request("ReEncrypt", req, resp, cb);
    }

    /**
     * This API is used to enable white-box keys in batches.
     * @param {EnableWhiteBoxKeysRequest} req
     * @param {function(string, EnableWhiteBoxKeysResponse):void} cb
     * @public
     */
    EnableWhiteBoxKeys(req, cb) {
        let resp = new EnableWhiteBoxKeysResponse();
        this.request("EnableWhiteBoxKeys", req, resp, cb);
    }

    /**
     * This API is used to list the encryption methods supported in the current region.
     * @param {ListAlgorithmsRequest} req
     * @param {function(string, ListAlgorithmsResponse):void} cb
     * @public
     */
    ListAlgorithms(req, cb) {
        let resp = new ListAlgorithmsResponse();
        this.request("ListAlgorithms", req, resp, cb);
    }

    /**
     * This API is used to get the attribute details of the CMK with a specified `KeyId`.
     * @param {DescribeKeyRequest} req
     * @param {function(string, DescribeKeyResponse):void} cb
     * @public
     */
    DescribeKey(req, cb) {
        let resp = new DescribeKeyResponse();
        this.request("DescribeKey", req, resp, cb);
    }

    /**
     * This API is used to list the KeyIds of CMKs in `Enabled`, `Disabled`, and `PendingImport` status under the account.
     * @param {ListKeysRequest} req
     * @param {function(string, ListKeysResponse):void} cb
     * @public
     */
    ListKeys(req, cb) {
        let resp = new ListKeysResponse();
        this.request("ListKeys", req, resp, cb);
    }

    /**
     * This API is used to generate a random number.
     * @param {GenerateRandomRequest} req
     * @param {function(string, GenerateRandomResponse):void} cb
     * @public
     */
    GenerateRandom(req, cb) {
        let resp = new GenerateRandomResponse();
        this.request("GenerateRandom", req, resp, cb);
    }

    /**
     * u200dThis API u200dis used to decrypt ciphertext using post-quantum cryptography (PQC) algorithm, and return the plaintext. 
     * @param {PostQuantumCryptoDecryptRequest} req
     * @param {function(string, PostQuantumCryptoDecryptResponse):void} cb
     * @public
     */
    PostQuantumCryptoDecrypt(req, cb) {
        let resp = new PostQuantumCryptoDecryptResponse();
        this.request("PostQuantumCryptoDecrypt", req, resp, cb);
    }

    /**
     * This API is used to overwrite the device fingerprint information of a specified key.
     * @param {OverwriteWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, OverwriteWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    OverwriteWhiteBoxDeviceFingerprints(req, cb) {
        let resp = new OverwriteWhiteBoxDeviceFingerprintsResponse();
        this.request("OverwriteWhiteBoxDeviceFingerprints", req, resp, cb);
    }

    /**
     * Create a master key CMK (Custom Master Key) for user management data keys
     * @param {CreateKeyRequest} req
     * @param {function(string, CreateKeyResponse):void} cb
     * @public
     */
    CreateKey(req, cb) {
        let resp = new CreateKeyResponse();
        this.request("CreateKey", req, resp, cb);
    }

    /**
     * This API is used to display white-box key information.
     * @param {DescribeWhiteBoxKeyRequest} req
     * @param {function(string, DescribeWhiteBoxKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKey(req, cb) {
        let resp = new DescribeWhiteBoxKeyResponse();
        this.request("DescribeWhiteBoxKey", req, resp, cb);
    }

    /**
     * This API is used to encrypt data with a white-box key.
     * @param {EncryptByWhiteBoxRequest} req
     * @param {function(string, EncryptByWhiteBoxResponse):void} cb
     * @public
     */
    EncryptByWhiteBox(req, cb) {
        let resp = new EncryptByWhiteBoxResponse();
        this.request("EncryptByWhiteBox", req, resp, cb);
    }

    /**
     * This API is used to obtain the parameters of the material to be imported into a CMK. The returned `Token` is used as one of the parameters to execute `ImportKeyMaterial`, and the returned `PublicKey` is used to encrypt the key material. The `Token` and `PublicKey` are valid for 24 hours. If they are expired, you will need to call the API again to get a new `Token` and `PublicKey`.
     * @param {GetParametersForImportRequest} req
     * @param {function(string, GetParametersForImportResponse):void} cb
     * @public
     */
    GetParametersForImport(req, cb) {
        let resp = new GetParametersForImportResponse();
        this.request("GetParametersForImport", req, resp, cb);
    }

    /**
     * This API is used to disable white-box keys in batches.
     * @param {DisableWhiteBoxKeysRequest} req
     * @param {function(string, DisableWhiteBoxKeysResponse):void} cb
     * @public
     */
    DisableWhiteBoxKeys(req, cb) {
        let resp = new DisableWhiteBoxKeysResponse();
        this.request("DisableWhiteBoxKeys", req, resp, cb);
    }

    /**
     * Get the master key list details according to the specified Offset and Limit.
     * @param {ListKeyDetailRequest} req
     * @param {function(string, ListKeyDetailResponse):void} cb
     * @public
     */
    ListKeyDetail(req, cb) {
        let resp = new ListKeyDetailResponse();
        this.request("ListKeyDetail", req, resp, cb);
    }

    /**
     * Disabled key rotation for the specified CMK.
     * @param {DisableKeyRotationRequest} req
     * @param {function(string, DisableKeyRotationResponse):void} cb
     * @public
     */
    DisableKeyRotation(req, cb) {
        let resp = new DisableKeyRotationResponse();
        this.request("DisableKeyRotation", req, resp, cb);
    }

    /**
     * This API is used to disable a white-box key.
     * @param {DisableWhiteBoxKeyRequest} req
     * @param {function(string, DisableWhiteBoxKeyResponse):void} cb
     * @public
     */
    DisableWhiteBoxKey(req, cb) {
        let resp = new DisableWhiteBoxKeyResponse();
        this.request("DisableWhiteBoxKey", req, resp, cb);
    }

    /**
     * This API is used to enable CMK in batches.
     * @param {EnableKeysRequest} req
     * @param {function(string, EnableKeysResponse):void} cb
     * @public
     */
    EnableKeys(req, cb) {
        let resp = new EnableKeysResponse();
        this.request("EnableKeys", req, resp, cb);
    }

    /**
     * CMK planned deletion API, used to specify the time of CMK deletion, the optional time interval is [7,30] days
     * @param {ScheduleKeyDeletionRequest} req
     * @param {function(string, ScheduleKeyDeletionResponse):void} cb
     * @public
     */
    ScheduleKeyDeletion(req, cb) {
        let resp = new ScheduleKeyDeletionResponse();
        this.request("ScheduleKeyDeletion", req, resp, cb);
    }

    /**
     * This API is used to get the device fingerprint list of a specified key.
     * @param {DescribeWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, DescribeWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDeviceFingerprints(req, cb) {
        let resp = new DescribeWhiteBoxDeviceFingerprintsResponse();
        this.request("DescribeWhiteBoxDeviceFingerprints", req, resp, cb);
    }

    /**
     * This API is used to decrypt data with the specified private key that is encrypted with RSA asymmetric cryptographic algorithm. The ciphertext must be encrypted with the corresponding public key. The asymmetric key must be in `Enabled` state for decryption.
     * @param {AsymmetricRsaDecryptRequest} req
     * @param {function(string, AsymmetricRsaDecryptResponse):void} cb
     * @public
     */
    AsymmetricRsaDecrypt(req, cb) {
        let resp = new AsymmetricRsaDecryptResponse();
        this.request("AsymmetricRsaDecrypt", req, resp, cb);
    }

    /**
     * This API is used to unbind a key with a Tencent Cloud resource, indicating that the Tencent Cloud resource will not use the key any longer.
     * @param {UnbindCloudResourceRequest} req
     * @param {function(string, UnbindCloudResourceResponse):void} cb
     * @public
     */
    UnbindCloudResource(req, cb) {
        let resp = new UnbindCloudResourceResponse();
        this.request("UnbindCloudResource", req, resp, cb);
    }

    /**
     * Turn on the key rotation function for the specified CMK.
     * @param {EnableKeyRotationRequest} req
     * @param {function(string, EnableKeyRotationResponse):void} cb
     * @public
     */
    EnableKeyRotation(req, cb) {
        let resp = new EnableKeyRotationResponse();
        this.request("EnableKeyRotation", req, resp, cb);
    }

    /**
     * This API is used to create a white-box key. Up to 50 ones can be created.
     * @param {CreateWhiteBoxKeyRequest} req
     * @param {function(string, CreateWhiteBoxKeyResponse):void} cb
     * @public
     */
    CreateWhiteBoxKey(req, cb) {
        let resp = new CreateWhiteBoxKeyResponse();
        this.request("CreateWhiteBoxKey", req, resp, cb);
    }

    /**
     * u200dThis API u200dis used to encrypt using PQC. It supports up to 4 KB of data. It is applicable for encryption of database passwords, RSA keys, or other sensitive information. You can also apply `DataKey` generated by API `GenerateDataKey` to encrypt or decrypt your local data.
     * @param {PostQuantumCryptoEncryptRequest} req
     * @param {function(string, PostQuantumCryptoEncryptResponse):void} cb
     * @public
     */
    PostQuantumCryptoEncrypt(req, cb) {
        let resp = new PostQuantumCryptoEncryptResponse();
        this.request("PostQuantumCryptoEncrypt", req, resp, cb);
    }

    /**
     * This API is used to enable a white-box key.
     * @param {EnableWhiteBoxKeyRequest} req
     * @param {function(string, EnableWhiteBoxKeyResponse):void} cb
     * @public
     */
    EnableWhiteBoxKey(req, cb) {
        let resp = new EnableWhiteBoxKeyResponse();
        this.request("EnableWhiteBoxKey", req, resp, cb);
    }

    /**
     * Enable a specified CMK.
     * @param {EnableKeyRequest} req
     * @param {function(string, EnableKeyResponse):void} cb
     * @public
     */
    EnableKey(req, cb) {
        let resp = new EnableKeyResponse();
        this.request("EnableKey", req, resp, cb);
    }

    /**
     * This API is used to delete the imported key material. It is only valid for EXTERNAL CMKs. Specifically, it puts a CMK into `PendingImport` status instead of deleting the CMK, so that the CMK can be used again after key material is reimported. To delete the CMK completely, please call the `ScheduleKeyDeletion` API.
     * @param {DeleteImportedKeyMaterialRequest} req
     * @param {function(string, DeleteImportedKeyMaterialResponse):void} cb
     * @public
     */
    DeleteImportedKeyMaterial(req, cb) {
        let resp = new DeleteImportedKeyMaterialResponse();
        this.request("DeleteImportedKeyMaterial", req, resp, cb);
    }

    /**
     * This API is used to get the attribute information of CMKs in batches.
     * @param {DescribeKeysRequest} req
     * @param {function(string, DescribeKeysResponse):void} cb
     * @public
     */
    DescribeKeys(req, cb) {
        let resp = new DescribeKeysResponse();
        this.request("DescribeKeys", req, resp, cb);
    }

    /**
     * This API is used to get the white-box key service status.
     * @param {DescribeWhiteBoxServiceStatusRequest} req
     * @param {function(string, DescribeWhiteBoxServiceStatusResponse):void} cb
     * @public
     */
    DescribeWhiteBoxServiceStatus(req, cb) {
        let resp = new DescribeWhiteBoxServiceStatusResponse();
        this.request("DescribeWhiteBoxServiceStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the description of the specified CMK. CMKs in `PendingDelete` status cannot be modified.
     * @param {UpdateKeyDescriptionRequest} req
     * @param {function(string, UpdateKeyDescriptionResponse):void} cb
     * @public
     */
    UpdateKeyDescription(req, cb) {
        let resp = new UpdateKeyDescriptionResponse();
        this.request("UpdateKeyDescription", req, resp, cb);
    }

    /**
     * This API is used to batch prohibit the use of CMK.
     * @param {DisableKeysRequest} req
     * @param {function(string, DisableKeysResponse):void} cb
     * @public
     */
    DisableKeys(req, cb) {
        let resp = new DisableKeysResponse();
        this.request("DisableKeys", req, resp, cb);
    }

    /**
     * This API is used to get a white-box decryption key.
     * @param {DescribeWhiteBoxDecryptKeyRequest} req
     * @param {function(string, DescribeWhiteBoxDecryptKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDecryptKey(req, cb) {
        let resp = new DescribeWhiteBoxDecryptKeyResponse();
        this.request("DescribeWhiteBoxDecryptKey", req, resp, cb);
    }

    /**
     * This API is used to sign u200dusing PQC. 
     * @param {PostQuantumCryptoSignRequest} req
     * @param {function(string, PostQuantumCryptoSignResponse):void} cb
     * @public
     */
    PostQuantumCryptoSign(req, cb) {
        let resp = new PostQuantumCryptoSignResponse();
        this.request("PostQuantumCryptoSign", req, resp, cb);
    }

    /**
     * This API is used to return all regions support KMS service.
     * @param {GetRegionsRequest} req
     * @param {function(string, GetRegionsResponse):void} cb
     * @public
     */
    GetRegions(req, cb) {
        let resp = new GetRegionsResponse();
        this.request("GetRegions", req, resp, cb);
    }

    /**
     * This API is used to verify a signature with an asymmetric key.
     * @param {VerifyByAsymmetricKeyRequest} req
     * @param {function(string, VerifyByAsymmetricKeyResponse):void} cb
     * @public
     */
    VerifyByAsymmetricKey(req, cb) {
        let resp = new VerifyByAsymmetricKeyResponse();
        this.request("VerifyByAsymmetricKey", req, resp, cb);
    }


}
module.exports = KmsClient;
