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
const DescribeTokenPlanListResponse = models.DescribeTokenPlanListResponse;
const GlossaryItem = models.GlossaryItem;
const BindingItem = models.BindingItem;
const DescribeTokenPlanApiKeySecretResponse = models.DescribeTokenPlanApiKeySecretResponse;
const TokenPlanApiKeyListItem = models.TokenPlanApiKeyListItem;
const CreateApiKeysResultItem = models.CreateApiKeysResultItem;
const GlossaryEntryInput = models.GlossaryEntryInput;
const ModifyTokenPlanApiKeySecretResponse = models.ModifyTokenPlanApiKeySecretResponse;
const DescribeTokenPlanApiKeyListResponse = models.DescribeTokenPlanApiKeyListResponse;
const DeleteGlossaryEntryInput = models.DeleteGlossaryEntryInput;
const DescribeTokenPlanRequest = models.DescribeTokenPlanRequest;
const GlossaryEntryItem = models.GlossaryEntryItem;
const DeleteGlossaryResponse = models.DeleteGlossaryResponse;
const DescribeTokenPlanApiKeyResponse = models.DescribeTokenPlanApiKeyResponse;
const ModifyTokenPlanApiKeySecretRequest = models.ModifyTokenPlanApiKeySecretRequest;
const SubPackageBalance = models.SubPackageBalance;
const DeleteGlossaryEntriesResponse = models.DeleteGlossaryEntriesResponse;
const DescribeApiKeyListResponse = models.DescribeApiKeyListResponse;
const RenewTokenPlanTeamOrderResponse = models.RenewTokenPlanTeamOrderResponse;
const TokenPlanApiKeyInfo = models.TokenPlanApiKeyInfo;
const ModifyApiKeyInfoResponse = models.ModifyApiKeyInfoResponse;
const ModifyTokenPlanApiKeyResponse = models.ModifyTokenPlanApiKeyResponse;
const DescribeApiKeyListRequest = models.DescribeApiKeyListRequest;
const CreateGlossaryRequest = models.CreateGlossaryRequest;
const DescribeGlossaryEntriesResponse = models.DescribeGlossaryEntriesResponse;
const DeleteGlossaryRequest = models.DeleteGlossaryRequest;
const DescribeGlossaryEntriesRequest = models.DescribeGlossaryEntriesRequest;
const DeleteGlossaryEntriesRequest = models.DeleteGlossaryEntriesRequest;
const CreateGlossaryEntriesResponse = models.CreateGlossaryEntriesResponse;
const CreateTokenPlanApiKeysResponse = models.CreateTokenPlanApiKeysResponse;
const DescribeTokenPlanApiKeyRequest = models.DescribeTokenPlanApiKeyRequest;
const DescribeApiKeyRequest = models.DescribeApiKeyRequest;
const DeleteApiKeyResponse = models.DeleteApiKeyResponse;
const ModifyGlossaryEntryInput = models.ModifyGlossaryEntryInput;
const ModifyTokenPlanApiKeyRequest = models.ModifyTokenPlanApiKeyRequest;
const TokenSummaryBillingItem = models.TokenSummaryBillingItem;
const DescribeTokenPlanApiKeyUsageDetailResponse = models.DescribeTokenPlanApiKeyUsageDetailResponse;
const RequestSort = models.RequestSort;
const ModifyApiKeyInfoRequest = models.ModifyApiKeyInfoRequest;
const TokenPlanListItem = models.TokenPlanListItem;
const CreateGlossaryResponse = models.CreateGlossaryResponse;
const CreateTokenPlanTeamOrderAndBuyRequest = models.CreateTokenPlanTeamOrderAndBuyRequest;
const ModifyGlossaryEntriesRequest = models.ModifyGlossaryEntriesRequest;
const RenewTokenPlanTeamOrderRequest = models.RenewTokenPlanTeamOrderRequest;
const DescribeGlossariesRequest = models.DescribeGlossariesRequest;
const DeleteTokenPlanApiKeyResponse = models.DeleteTokenPlanApiKeyResponse;
const DescribeTokenPlanApiKeyUsageDetailRequest = models.DescribeTokenPlanApiKeyUsageDetailRequest;
const UpgradeTokenPlanTeamOrderRequest = models.UpgradeTokenPlanTeamOrderRequest;
const ModifyApiKeyStatusRequest = models.ModifyApiKeyStatusRequest;
const QuotaInfo = models.QuotaInfo;
const CreateGlossaryEntriesRequest = models.CreateGlossaryEntriesRequest;
const ApiKeyDetail = models.ApiKeyDetail;
const DescribeGlossariesResponse = models.DescribeGlossariesResponse;
const ModifyApiKeyStatusResponse = models.ModifyApiKeyStatusResponse;
const BatchCreateFailedItem = models.BatchCreateFailedItem;
const CreateApiKeyResponse = models.CreateApiKeyResponse;
const TokenPlanPackageInfo = models.TokenPlanPackageInfo;
const CreateTokenPlanTeamOrderAndBuyResponse = models.CreateTokenPlanTeamOrderAndBuyResponse;
const DeleteApiKeyRequest = models.DeleteApiKeyRequest;
const RequestFilter = models.RequestFilter;
const TokenSummary = models.TokenSummary;
const DescribeTokenPlanListRequest = models.DescribeTokenPlanListRequest;
const UpgradeTokenPlanTeamOrderResponse = models.UpgradeTokenPlanTeamOrderResponse;
const ModifyGlossaryEntriesResponse = models.ModifyGlossaryEntriesResponse;
const DescribeTokenPlanResponse = models.DescribeTokenPlanResponse;
const CreateTokenPlanApiKeysRequest = models.CreateTokenPlanApiKeysRequest;
const DeleteTokenPlanApiKeyRequest = models.DeleteTokenPlanApiKeyRequest;
const DescribeApiKeyResponse = models.DescribeApiKeyResponse;
const DescribeTokenPlanApiKeyListRequest = models.DescribeTokenPlanApiKeyListRequest;
const DescribeTokenPlanApiKeySecretRequest = models.DescribeTokenPlanApiKeySecretRequest;
const CreateApiKeyRequest = models.CreateApiKeyRequest;


/**
 * tokenhub client
 * @class
 */
class TokenhubClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tokenhub.intl.tencentcloudapi.com", "2026-03-22", credential, region, profile);
    }
    
    /**
     * Renew a package.

Initiate a renewal order for an existing Token Plan package and complete payment. Return the order ID and associated sub-orders and resource information upon success.
     * @param {RenewTokenPlanTeamOrderRequest} req
     * @param {function(string, RenewTokenPlanTeamOrderResponse):void} cb
     * @public
     */
    RenewTokenPlanTeamOrder(req, cb) {
        let resp = new RenewTokenPlanTeamOrderResponse();
        this.request("RenewTokenPlanTeamOrder", req, resp, cb);
    }

    /**
     * Purchase a package (This API is also used to reactivate and renew expired packages. The teamId of the expired package is required. After the renewal is successful, the total cycle count of the package will include historical cycles. The actual effective cycle of the package is determined by the effective time and expiration time.)

Initiate an order for a TokenPlan package and complete payment. Return the order ID and associated sub-orders and resource information upon success.
     * @param {CreateTokenPlanTeamOrderAndBuyRequest} req
     * @param {function(string, CreateTokenPlanTeamOrderAndBuyResponse):void} cb
     * @public
     */
    CreateTokenPlanTeamOrderAndBuy(req, cb) {
        let resp = new CreateTokenPlanTeamOrderAndBuyResponse();
        this.request("CreateTokenPlanTeamOrderAndBuy", req, resp, cb);
    }

    /**
     * Query API key list.

Query the API key list of the current user with key values in masking display. Support pagination, filtering, and sorting.
     * @param {DescribeApiKeyListRequest} req
     * @param {function(string, DescribeApiKeyListResponse):void} cb
     * @public
     */
    DescribeApiKeyList(req, cb) {
        let resp = new DescribeApiKeyListResponse();
        this.request("DescribeApiKeyList", req, resp, cb);
    }

    /**
     * Query TokenPlan APIKey details.

Return the complete APIKey information (including the plaintext key) and the remaining quota of the sub-quota package.
     * @param {DescribeTokenPlanApiKeyRequest} req
     * @param {function(string, DescribeTokenPlanApiKeyResponse):void} cb
     * @public
     */
    DescribeTokenPlanApiKey(req, cb) {
        let resp = new DescribeTokenPlanApiKeyResponse();
        this.request("DescribeTokenPlanApiKey", req, resp, cb);
    }

    /**
     * Batch create TokenPlan API Keys.

Import a name prefix and quantity to automatically generate names in the `{Api Key Name}-{serial number}` format (for example, aaa-1, aaa-2). Duplicate names are allowed. Partial success is supported for up to 100 entries.
     * @param {CreateTokenPlanApiKeysRequest} req
     * @param {function(string, CreateTokenPlanApiKeysResponse):void} cb
     * @public
     */
    CreateTokenPlanApiKeys(req, cb) {
        let resp = new CreateTokenPlanApiKeysResponse();
        this.request("CreateTokenPlanApiKeys", req, resp, cb);
    }

    /**
     * Query the list of Token Plan API keys.

Returns the API key list under a specified package. Keys are masked. Root accounts can view all keys, while sub-accounts can only view keys created by themselves.
     * @param {DescribeTokenPlanApiKeyListRequest} req
     * @param {function(string, DescribeTokenPlanApiKeyListResponse):void} cb
     * @public
     */
    DescribeTokenPlanApiKeyList(req, cb) {
        let resp = new DescribeTokenPlanApiKeyListResponse();
        this.request("DescribeTokenPlanApiKeyList", req, resp, cb);
    }

    /**
     * Create terminology entries in batches.

Create terminology entries in batches under the designated Termbase. You can create up to 100 entries at a time.
     * @param {CreateGlossaryEntriesRequest} req
     * @param {function(string, CreateGlossaryEntriesResponse):void} cb
     * @public
     */
    CreateGlossaryEntries(req, cb) {
        let resp = new CreateGlossaryEntriesResponse();
        this.request("CreateGlossaryEntries", req, resp, cb);
    }

    /**
     * Query the Token Plan APIKey call detail.

This API is used to query call details under a package from CLS log service, filter by team_id, and support cursor-based pagination.
     * @param {DescribeTokenPlanApiKeyUsageDetailRequest} req
     * @param {function(string, DescribeTokenPlanApiKeyUsageDetailResponse):void} cb
     * @public
     */
    DescribeTokenPlanApiKeyUsageDetail(req, cb) {
        let resp = new DescribeTokenPlanApiKeyUsageDetailResponse();
        this.request("DescribeTokenPlanApiKeyUsageDetail", req, resp, cb);
    }

    /**
     * Query the terminology repository list.

Query the Termbase list under this application. Support paginate, filter, and sort.
     * @param {DescribeGlossariesRequest} req
     * @param {function(string, DescribeGlossariesResponse):void} cb
     * @public
     */
    DescribeGlossaries(req, cb) {
        let resp = new DescribeGlossariesResponse();
        this.request("DescribeGlossaries", req, resp, cb);
    }

    /**
     * Refresh API key information.

This API is used to update the remark information, IP allowlist and Token quota of an API key (recommended to use QuotaDesired parameter for quota modification). Passing no optional parameters means no modification.
     * @param {ModifyApiKeyInfoRequest} req
     * @param {function(string, ModifyApiKeyInfoResponse):void} cb
     * @public
     */
    ModifyApiKeyInfo(req, cb) {
        let resp = new ModifyApiKeyInfoResponse();
        this.request("ModifyApiKeyInfo", req, resp, cb);
    }

    /**
     * Query the terminology entry list.

Query specified entries in a Termbase. Support pagination.
     * @param {DescribeGlossaryEntriesRequest} req
     * @param {function(string, DescribeGlossaryEntriesResponse):void} cb
     * @public
     */
    DescribeGlossaryEntries(req, cb) {
        let resp = new DescribeGlossaryEntriesResponse();
        this.request("DescribeGlossaryEntries", req, resp, cb);
    }

    /**
     * Delete terminology entries in batches.

Delete terminology entries in batches under the specified Termbase. You can delete up to 200 entries at a time. If the Termbase is nonexistent or NOT_IN this application, it returns a ResourceNotFound error.
     * @param {DeleteGlossaryEntriesRequest} req
     * @param {function(string, DeleteGlossaryEntriesResponse):void} cb
     * @public
     */
    DeleteGlossaryEntries(req, cb) {
        let resp = new DeleteGlossaryEntriesResponse();
        this.request("DeleteGlossaryEntries", req, resp, cb);
    }

    /**
     * This API is used to enable or disable the status of an api key.
     * @param {ModifyApiKeyStatusRequest} req
     * @param {function(string, ModifyApiKeyStatusResponse):void} cb
     * @public
     */
    ModifyApiKeyStatus(req, cb) {
        let resp = new ModifyApiKeyStatusResponse();
        this.request("ModifyApiKeyStatus", req, resp, cb);
    }

    /**
     * Upgrade the package.

Initiate an upgrade order for an existing Token Plan package and complete payment to expand point or token limits. Return the order ID and associated sub-orders and resource information upon success. The new limit must be greater than the current limit.
     * @param {UpgradeTokenPlanTeamOrderRequest} req
     * @param {function(string, UpgradeTokenPlanTeamOrderResponse):void} cb
     * @public
     */
    UpgradeTokenPlanTeamOrder(req, cb) {
        let resp = new UpgradeTokenPlanTeamOrderResponse();
        this.request("UpgradeTokenPlanTeamOrder", req, resp, cb);
    }

    /**
     * Create an API key.

Create a new API key. Upon successful creation, return the API Key ID. Specify the platform kind, binding method, and initial state.
     * @param {CreateApiKeyRequest} req
     * @param {function(string, CreateApiKeyResponse):void} cb
     * @public
     */
    CreateApiKey(req, cb) {
        let resp = new CreateApiKeyResponse();
        this.request("CreateApiKey", req, resp, cb);
    }

    /**
     * Create a Termbase.

Create a new Termbase in this application for custom definition source to target language terminology mapping. Return the Termbase ID upon success, which can be used to carry out other management operations on terminology entries.
     * @param {CreateGlossaryRequest} req
     * @param {function(string, CreateGlossaryResponse):void} cb
     * @public
     */
    CreateGlossary(req, cb) {
        let resp = new CreateGlossaryResponse();
        this.request("CreateGlossary", req, resp, cb);
    }

    /**
     * Delete a termbase.

This API is used to delete specified Termbase and ALL terminology entries under it. The deletion is idempotent and returns a successful result for non-existing Termbase. After calling the API, if the corresponding Termbase cannot be found via DescribeGlossaries, it indicates successful deletion.
     * @param {DeleteGlossaryRequest} req
     * @param {function(string, DeleteGlossaryResponse):void} cb
     * @public
     */
    DeleteGlossary(req, cb) {
        let resp = new DeleteGlossaryResponse();
        this.request("DeleteGlossary", req, resp, cb);
    }

    /**
     * Reset the TokenPlan API Key.

Regenerate the key value. The key version increments and the old key expires immediately. The API Key ID remains unchanged. After resetting, the new key can be queried through DescribeTokenPlanApiKeySecret.
     * @param {ModifyTokenPlanApiKeySecretRequest} req
     * @param {function(string, ModifyTokenPlanApiKeySecretResponse):void} cb
     * @public
     */
    ModifyTokenPlanApiKeySecret(req, cb) {
        let resp = new ModifyTokenPlanApiKeySecretResponse();
        this.request("ModifyTokenPlanApiKeySecret", req, resp, cb);
    }

    /**
     * Query the TokenPlan package details.

Return the package basic info and the remaining quota of the package.
     * @param {DescribeTokenPlanRequest} req
     * @param {function(string, DescribeTokenPlanResponse):void} cb
     * @public
     */
    DescribeTokenPlan(req, cb) {
        let resp = new DescribeTokenPlanResponse();
        this.request("DescribeTokenPlan", req, resp, cb);
    }

    /**
     * Modify the Token Plan APIKey configuration (field that the gateway focuses on).

After modification, automatically notify the gateway to update the cache and sync the limit center.
     * @param {ModifyTokenPlanApiKeyRequest} req
     * @param {function(string, ModifyTokenPlanApiKeyResponse):void} cb
     * @public
     */
    ModifyTokenPlanApiKey(req, cb) {
        let resp = new ModifyTokenPlanApiKeyResponse();
        this.request("ModifyTokenPlanApiKey", req, resp, cb);
    }

    /**
     * Batch modify terminology entries.

This API is used to batch modify terminology entries in a designated Termbase. You can modify up to 200 entries at a time.
     * @param {ModifyGlossaryEntriesRequest} req
     * @param {function(string, ModifyGlossaryEntriesResponse):void} cb
     * @public
     */
    ModifyGlossaryEntries(req, cb) {
        let resp = new ModifyGlossaryEntriesResponse();
        this.request("ModifyGlossaryEntries", req, resp, cb);
    }

    /**
     * Query the list of Token Plan package options.

Supports pagination, filtering, and sorting. Root accounts can view all packages, while sub-accounts can only view packages created by themselves. Returned results include the main limit package details associated with each package in the limit center.
     * @param {DescribeTokenPlanListRequest} req
     * @param {function(string, DescribeTokenPlanListResponse):void} cb
     * @public
     */
    DescribeTokenPlanList(req, cb) {
        let resp = new DescribeTokenPlanListResponse();
        this.request("DescribeTokenPlanList", req, resp, cb);
    }

    /**
     * This API is used to query API Key details based on API Key ID or key value, and return the plaintext key. At least one of ApiKeyId and ApiKey must be input, with priority given to ApiKeyId.
     * @param {DescribeApiKeyRequest} req
     * @param {function(string, DescribeApiKeyResponse):void} cb
     * @public
     */
    DescribeApiKey(req, cb) {
        let resp = new DescribeApiKeyResponse();
        this.request("DescribeApiKey", req, resp, cb);
    }

    /**
     * Delete the Token Plan API key.

Simultaneously delete the limit center sub-limit package and notify the Notification Gateway to purge cache.
     * @param {DeleteTokenPlanApiKeyRequest} req
     * @param {function(string, DeleteTokenPlanApiKeyResponse):void} cb
     * @public
     */
    DeleteTokenPlanApiKey(req, cb) {
        let resp = new DeleteTokenPlanApiKeyResponse();
        this.request("DeleteTokenPlanApiKey", req, resp, cb);
    }

    /**
     * This API is used to delete specified api keys and clean up associated model binding relationships.
     * @param {DeleteApiKeyRequest} req
     * @param {function(string, DeleteApiKeyResponse):void} cb
     * @public
     */
    DeleteApiKey(req, cb) {
        let resp = new DeleteApiKeyResponse();
        this.request("DeleteApiKey", req, resp, cb);
    }

    /**
     * Query the TokenPlan APIKey (plaintext).

Return the plaintext key value of the designated APIKey. Keep it safe.
     * @param {DescribeTokenPlanApiKeySecretRequest} req
     * @param {function(string, DescribeTokenPlanApiKeySecretResponse):void} cb
     * @public
     */
    DescribeTokenPlanApiKeySecret(req, cb) {
        let resp = new DescribeTokenPlanApiKeySecretResponse();
        this.request("DescribeTokenPlanApiKeySecret", req, resp, cb);
    }


}
module.exports = TokenhubClient;
