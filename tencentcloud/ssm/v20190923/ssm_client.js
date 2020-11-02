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
const DeleteSecretVersionResponse = models.DeleteSecretVersionResponse;
const RestoreSecretResponse = models.RestoreSecretResponse;
const UpdateDescriptionResponse = models.UpdateDescriptionResponse;
const DescribeSecretResponse = models.DescribeSecretResponse;
const DeleteSecretRequest = models.DeleteSecretRequest;
const CreateSecretRequest = models.CreateSecretRequest;
const GetSecretValueResponse = models.GetSecretValueResponse;
const GetRegionsResponse = models.GetRegionsResponse;
const DeleteSecretVersionRequest = models.DeleteSecretVersionRequest;
const SecretMetadata = models.SecretMetadata;
const ListSecretVersionIdsRequest = models.ListSecretVersionIdsRequest;
const CreateSecretResponse = models.CreateSecretResponse;
const GetRegionsRequest = models.GetRegionsRequest;
const UpdateSecretResponse = models.UpdateSecretResponse;
const DisableSecretResponse = models.DisableSecretResponse;
const ListSecretsRequest = models.ListSecretsRequest;
const UpdateDescriptionRequest = models.UpdateDescriptionRequest;
const EnableSecretResponse = models.EnableSecretResponse;
const UpdateSecretRequest = models.UpdateSecretRequest;
const VersionInfo = models.VersionInfo;
const TagFilter = models.TagFilter;
const PutSecretValueRequest = models.PutSecretValueRequest;
const GetSecretValueRequest = models.GetSecretValueRequest;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const RestoreSecretRequest = models.RestoreSecretRequest;
const DescribeSecretRequest = models.DescribeSecretRequest;
const PutSecretValueResponse = models.PutSecretValueResponse;
const DeleteSecretResponse = models.DeleteSecretResponse;
const DisableSecretRequest = models.DisableSecretRequest;
const Tag = models.Tag;
const ListSecretsResponse = models.ListSecretsResponse;
const EnableSecretRequest = models.EnableSecretRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const ListSecretVersionIdsResponse = models.ListSecretVersionIdsResponse;


/**
 * ssm client
 * @class
 */
class SsmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssm.tencentcloudapi.com", "2019-09-23", credential, region, profile);
    }
    
    /**
     * This API is used to add a new version to a specified Secret. Each Secret supports up to 10 versions. You can only add versions to Secrets in `Enabled` or `Disabled` status.
     * @param {PutSecretValueRequest} req
     * @param {function(string, PutSecretValueResponse):void} cb
     * @public
     */
    PutSecretValue(req, cb) {
        let resp = new PutSecretValueResponse();
        this.request("PutSecretValue", req, resp, cb);
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
     * This API is used to update the name and version ID of a Secret. Calling this API encrypts the new Secret content and overwrites the old content. This API can only update Secrets in `Enabled` or `Disabled` status.
     * @param {UpdateSecretRequest} req
     * @param {function(string, UpdateSecretResponse):void} cb
     * @public
     */
    UpdateSecret(req, cb) {
        let resp = new UpdateSecretResponse();
        this.request("UpdateSecret", req, resp, cb);
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
     * This API is used to delete a version of a Secret. The deletion takes effect immediately. Secret versions in any status can be deleted.
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

    /**
     * This API is used to obtain the plaintext of a specified Secret and version. Only plaintext of an enabled Secret can be obtained.
     * @param {GetSecretValueRequest} req
     * @param {function(string, GetSecretValueResponse):void} cb
     * @public
     */
    GetSecretValue(req, cb) {
        let resp = new GetSecretValueResponse();
        this.request("GetSecretValue", req, resp, cb);
    }


}
module.exports = SsmClient;
