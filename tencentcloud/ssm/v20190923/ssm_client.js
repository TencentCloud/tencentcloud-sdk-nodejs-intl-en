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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DeleteSecretVersionResponse = models.DeleteSecretVersionResponse;
const RestoreSecretResponse = models.RestoreSecretResponse;
const UpdateDescriptionResponse = models.UpdateDescriptionResponse;
const DescribeSecretResponse = models.DescribeSecretResponse;
const DescribeSupportedProductsRequest = models.DescribeSupportedProductsRequest;
const GetSecretValueRequest = models.GetSecretValueRequest;
const DeleteSecretRequest = models.DeleteSecretRequest;
const CreateSecretRequest = models.CreateSecretRequest;
const RotateProductSecretRequest = models.RotateProductSecretRequest;
const CreateProductSecretRequest = models.CreateProductSecretRequest;
const GetSecretValueResponse = models.GetSecretValueResponse;
const GetRegionsResponse = models.GetRegionsResponse;
const DescribeSupportedProductsResponse = models.DescribeSupportedProductsResponse;
const DeleteSecretVersionRequest = models.DeleteSecretVersionRequest;
const SecretMetadata = models.SecretMetadata;
const ListSecretVersionIdsRequest = models.ListSecretVersionIdsRequest;
const DescribeRotationDetailRequest = models.DescribeRotationDetailRequest;
const CreateSSHKeyPairSecretResponse = models.CreateSSHKeyPairSecretResponse;
const UpdateRotationStatusResponse = models.UpdateRotationStatusResponse;
const CreateSecretResponse = models.CreateSecretResponse;
const GetRegionsRequest = models.GetRegionsRequest;
const UpdateSecretResponse = models.UpdateSecretResponse;
const DisableSecretResponse = models.DisableSecretResponse;
const Tag = models.Tag;
const ListSecretsRequest = models.ListSecretsRequest;
const UpdateDescriptionRequest = models.UpdateDescriptionRequest;
const EnableSecretResponse = models.EnableSecretResponse;
const CreateSSHKeyPairSecretRequest = models.CreateSSHKeyPairSecretRequest;
const UpdateRotationStatusRequest = models.UpdateRotationStatusRequest;
const UpdateSecretRequest = models.UpdateSecretRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const RestoreSecretRequest = models.RestoreSecretRequest;
const RotateProductSecretResponse = models.RotateProductSecretResponse;
const VersionInfo = models.VersionInfo;
const TagFilter = models.TagFilter;
const PutSecretValueRequest = models.PutSecretValueRequest;
const PutSecretValueResponse = models.PutSecretValueResponse;
const DescribeRotationHistoryResponse = models.DescribeRotationHistoryResponse;
const GetSSHKeyPairValueRequest = models.GetSSHKeyPairValueRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const DescribeRotationDetailResponse = models.DescribeRotationDetailResponse;
const EnableSecretRequest = models.EnableSecretRequest;
const ProductPrivilegeUnit = models.ProductPrivilegeUnit;
const DescribeRotationHistoryRequest = models.DescribeRotationHistoryRequest;
const GetSSHKeyPairValueResponse = models.GetSSHKeyPairValueResponse;
const DeleteSecretResponse = models.DeleteSecretResponse;
const DisableSecretRequest = models.DisableSecretRequest;
const CreateProductSecretResponse = models.CreateProductSecretResponse;
const ListSecretsResponse = models.ListSecretsResponse;
const DescribeSecretRequest = models.DescribeSecretRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const ListSecretVersionIdsResponse = models.ListSecretVersionIdsResponse;


/**
 * ssm client
 * @class
 */
class SsmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssm.intl.tencentcloudapi.com", "2019-09-23", credential, region, profile);
    }
    
    /**
     * This API is used to query the historical versions of a rotated credential.
This API is only applicable to Tencent Cloud service credentials.
     * @param {DescribeRotationHistoryRequest} req
     * @param {function(string, DescribeRotationHistoryResponse):void} cb
     * @public
     */
    DescribeRotationHistory(req, cb) {
        let resp = new DescribeRotationHistoryResponse();
        this.request("DescribeRotationHistory", req, resp, cb);
    }

    /**
     * This API is used to rotate secrets for Tencent Cloud services or Tencent Cloud API key pairs.
Note that only the secrets with the "Enabled" status can be rotated.
     * @param {RotateProductSecretRequest} req
     * @param {function(string, RotateProductSecretResponse):void} cb
     * @public
     */
    RotateProductSecret(req, cb) {
        let resp = new RotateProductSecretResponse();
        this.request("RotateProductSecret", req, resp, cb);
    }

    /**
     * This API is used to delete a Secret. You can set whether to delete the Secret immediately or on schedule using the `RecoveryWindowInDays` parameter. For a Secret to be deleted on schedule, its status will be `PendingDelete` before the scheduled deletion time. You can use `RestoreSecret` to restore a deleted Secret during this time. A deleted Secret will not be restorable after the scheduled deletion time. A Secret can only be deleted after being disabled using `DisableSecret`.
     * @param {DeleteSecretRequest} req
     * @param {function(string, DeleteSecretResponse):void} cb
     * @public
     */
    DeleteSecret(req, cb) {
        let resp = new DeleteSecretResponse();
        this.request("DeleteSecret", req, resp, cb);
    }

    /**
     * This API is used to update the credential content of the specified credential name and version number. Calling this API will encrypt the content of the new credential and overwrite the old content. Only credentials in `Enabled` or `Disabled` status can be updated.
This API is only applicable to user-defined credentials but not Tencent Cloud service credentials.
     * @param {UpdateSecretRequest} req
     * @param {function(string, UpdateSecretResponse):void} cb
     * @public
     */
    UpdateSecret(req, cb) {
        let resp = new UpdateSecretResponse();
        this.request("UpdateSecret", req, resp, cb);
    }

    /**
     * This API is used to obtain the detailed information list of all Secrets. You can specify the filter fields and sorting order as needed.
     * @param {ListSecretsRequest} req
     * @param {function(string, ListSecretsResponse):void} cb
     * @public
     */
    ListSecrets(req, cb) {
        let resp = new ListSecretsResponse();
        this.request("ListSecrets", req, resp, cb);
    }

    /**
     * This API is used to create a secret that hosts SSH keys.
     * @param {CreateSSHKeyPairSecretRequest} req
     * @param {function(string, CreateSSHKeyPairSecretResponse):void} cb
     * @public
     */
    CreateSSHKeyPairSecret(req, cb) {
        let resp = new CreateSSHKeyPairSecretResponse();
        this.request("CreateSSHKeyPairSecret", req, resp, cb);
    }

    /**
     * This API is used to set a Tencent Cloud service credential rotation policy, including the following parameters:
Specifies whether to enable rotation
Rotation frequency
Rotation start time
     * @param {UpdateRotationStatusRequest} req
     * @param {function(string, UpdateRotationStatusResponse):void} cb
     * @public
     */
    UpdateRotationStatus(req, cb) {
        let resp = new UpdateRotationStatusResponse();
        this.request("UpdateRotationStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of supported Tencent Cloud services.
     * @param {DescribeSupportedProductsRequest} req
     * @param {function(string, DescribeSupportedProductsResponse):void} cb
     * @public
     */
    DescribeSupportedProducts(req, cb) {
        let resp = new DescribeSupportedProductsResponse();
        this.request("DescribeSupportedProducts", req, resp, cb);
    }

    /**
     * For user-defined credentials, this API is used to get the plaintext information of a credential by specifying the credential name and version.
For Tencent Cloud service credentials such as MySQL credentials, this API is used to get the plaintext information of a previously rotated credential by specifying the credential name and historical version number. If you want to get the plaintext of the credential version currently in use, you need to specify the version number as `SSM_Current`.
     * @param {GetSecretValueRequest} req
     * @param {function(string, GetSecretValueResponse):void} cb
     * @public
     */
    GetSecretValue(req, cb) {
        let resp = new GetSecretValueResponse();
        this.request("GetSecretValue", req, resp, cb);
    }

    /**
     * This API is used to query the execution result of an async task.
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * This API is used to create a Tencent Cloud service credential.
     * @param {CreateProductSecretRequest} req
     * @param {function(string, CreateProductSecretResponse):void} cb
     * @public
     */
    CreateProductSecret(req, cb) {
        let resp = new CreateProductSecretResponse();
        this.request("CreateProductSecret", req, resp, cb);
    }

    /**
     * This API is used to directly delete a single credential version under the specified credential. The deletion takes effect immediately, and the credential version in all status can be deleted.
This API is only applicable to user-defined credentials but not Tencent Cloud service credentials.
     * @param {DeleteSecretVersionRequest} req
     * @param {function(string, DeleteSecretVersionResponse):void} cb
     * @public
     */
    DeleteSecretVersion(req, cb) {
        let resp = new DeleteSecretVersionResponse();
        this.request("DeleteSecretVersion", req, resp, cb);
    }

    /**
     * This API is used to update the description of a Secret. This API can only update Secrets in `Enabled` or `Disabled` status.
     * @param {UpdateDescriptionRequest} req
     * @param {function(string, UpdateDescriptionResponse):void} cb
     * @public
     */
    UpdateDescription(req, cb) {
        let resp = new UpdateDescriptionResponse();
        this.request("UpdateDescription", req, resp, cb);
    }

    /**
     * This API adds the new version of the credential content under the specified credential. One credential can have up to 10 versions. New versions can be added to credentials only in `Enabled` or `Disabled` status.
This API is only applicable to user-defined credentials but not Tencent Cloud service credentials.
     * @param {PutSecretValueRequest} req
     * @param {function(string, PutSecretValueResponse):void} cb
     * @public
     */
    PutSecretValue(req, cb) {
        let resp = new PutSecretValueResponse();
        this.request("PutSecretValue", req, resp, cb);
    }

    /**
     * This API is used to obtain the detailed attribute information of a Secret.
     * @param {DescribeSecretRequest} req
     * @param {function(string, DescribeSecretResponse):void} cb
     * @public
     */
    DescribeSecret(req, cb) {
        let resp = new DescribeSecretResponse();
        this.request("DescribeSecret", req, resp, cb);
    }

    /**
     * This API is used to query the details of a credential rotation policy.
This API is only applicable to Tencent Cloud service credentials.
     * @param {DescribeRotationDetailRequest} req
     * @param {function(string, DescribeRotationDetailResponse):void} cb
     * @public
     */
    DescribeRotationDetail(req, cb) {
        let resp = new DescribeRotationDetailResponse();
        this.request("DescribeRotationDetail", req, resp, cb);
    }

    /**
     * This API is used to obtain the plaintext value of the SSH key secret.
     * @param {GetSSHKeyPairValueRequest} req
     * @param {function(string, GetSSHKeyPairValueResponse):void} cb
     * @public
     */
    GetSSHKeyPairValue(req, cb) {
        let resp = new GetSSHKeyPairValueResponse();
        this.request("GetSSHKeyPairValue", req, resp, cb);
    }

    /**
     * This API is used to obtain list of versions of a Secret.
     * @param {ListSecretVersionIdsRequest} req
     * @param {function(string, ListSecretVersionIdsResponse):void} cb
     * @public
     */
    ListSecretVersionIds(req, cb) {
        let resp = new ListSecretVersionIdsResponse();
        this.request("ListSecretVersionIds", req, resp, cb);
    }

    /**
     * This API is used to create a KMS-encrypted Secret. You can create and store up to 1,000 Secrets in each region.
     * @param {CreateSecretRequest} req
     * @param {function(string, CreateSecretResponse):void} cb
     * @public
     */
    CreateSecret(req, cb) {
        let resp = new CreateSecretResponse();
        this.request("CreateSecret", req, resp, cb);
    }

    /**
     * This API is used to enable a Secret and will change its status to `Enabled`. You can call the `GetSecretValue` API to obtain the plaintext of this Secret. Secrets in `PendingDelete` status can only be enabled after being restored by using `RestoreSecret`.
     * @param {EnableSecretRequest} req
     * @param {function(string, EnableSecretResponse):void} cb
     * @public
     */
    EnableSecret(req, cb) {
        let resp = new EnableSecretResponse();
        this.request("EnableSecret", req, resp, cb);
    }

    /**
     * This API is used to restore a `PendingDelete` Secret, canceling its scheduled deletion. The restored Secret will be in `Disabled` status. You can call the `EnableSecret` API to enable this Secret again.
     * @param {RestoreSecretRequest} req
     * @param {function(string, RestoreSecretResponse):void} cb
     * @public
     */
    RestoreSecret(req, cb) {
        let resp = new RestoreSecretResponse();
        this.request("RestoreSecret", req, resp, cb);
    }

    /**
     * This API is used to obtain the SecretsManager service status of a user.
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        let resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of regions displayed on Console.
     * @param {GetRegionsRequest} req
     * @param {function(string, GetRegionsResponse):void} cb
     * @public
     */
    GetRegions(req, cb) {
        let resp = new GetRegionsResponse();
        this.request("GetRegions", req, resp, cb);
    }

    /**
     * This API is used to disable a Secret and will change its status to `Disabled`. The plaintext of a disabled Secret cannot be obtained through APIs.
     * @param {DisableSecretRequest} req
     * @param {function(string, DisableSecretResponse):void} cb
     * @public
     */
    DisableSecret(req, cb) {
        let resp = new DisableSecretResponse();
        this.request("DisableSecret", req, resp, cb);
    }


}
module.exports = SsmClient;
