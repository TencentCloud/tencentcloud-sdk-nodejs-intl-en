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
 * AssumeRoleWithSAML response structure.
 * @class
 */
class AssumeRoleWithSAMLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * An object consists of the `Token`, `TmpSecretId`, and `TmpSecretId`
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * Credentials expiration time. A Unix timestamp will be returned which is accurate to the second
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * Credentials expiration time in UTC time in ISO 8601 format.
         * @type {string || null}
         */
        this.Expiration = null;

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

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCallerIdentity response structure.
 * @class
 */
class GetCallerIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ARN of the current caller.
         * @type {string || null}
         */
        this.Arn = null;

        /**
         * Root account UIN of the current caller.
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * User ID.
1. If the caller is a Tencent Cloud account, the UIN of the current account is returned.
2. If the caller is a role, `roleId:roleSessionName` is returned.
3. If the caller is a federated user, `uin:federatedUserName` is returned.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Account UIN.
1. If the caller is a Tencent Cloud account, the UIN of the current account is returned.
2. If the caller is a role, the UIN of the account that applies for the role is returned.
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type.
         * @type {string || null}
         */
        this.Type = null;

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
        this.Arn = 'Arn' in params ? params.Arn : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssumeRoleWithWebIdentity request structure.
 * @class
 */
class AssumeRoleWithWebIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity provider name
         * @type {string || null}
         */
        this.ProviderId = null;

        /**
         * OIDC token issued by the IdP
         * @type {string || null}
         */
        this.WebIdentityToken = null;

        /**
         * Role access description name
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * Session name
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * The validity period of the temporary credential in seconds. Default value: 7,200s. Maximum value: 43,200s.
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderId = 'ProviderId' in params ? params.ProviderId : null;
        this.WebIdentityToken = 'WebIdentityToken' in params ? params.WebIdentityToken : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * AssumeRoleWithWebIdentity response structure.
 * @class
 */
class AssumeRoleWithWebIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Expiration time of the temporary credential (timestamp)
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * Expiration time of the temporary credential
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * Temporary credential
         * @type {Credentials || null}
         */
        this.Credentials = null;

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
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFederationToken response structure.
 * @class
 */
class GetFederationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary credentials
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * Temporary credentials expiration time. A Unix timestamp will be returned which is accurate to the second
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * Credentials expiration time in UTC time in ISO 8601 format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Expiration = null;

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

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssumeRole response structure.
 * @class
 */
class AssumeRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temporary security credentials
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * Credentials expiration time. A Unix timestamp will be returned which is accurate to the second
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * Credentials expiration time in UTC time in ISO 8601 format.
         * @type {string || null}
         */
        this.Expiration = null;

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

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFederationToken request structure.
 * @class
 */
class GetFederationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The customizable name of the caller, consisting of letters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy description
Note:
1. The policy needs to be URL-encoded (if you request a TencentCloud API through the GET method, all parameters must be URL-encoded again in accordance with [Signature v3](https://intl.cloud.tencent.com/document/api/598/33159?from_cn_redirect=1#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2) before the request is sent).
2. For the policy syntax, please see CAM's [Syntax Logic](https://intl.cloud.tencent.com/document/product/598/10603?from_cn_redirect=1).
3. The policy cannot contain the `principal` element.
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * The validity period of temporary credentials in seconds. Default value: 1,800s. Maximum value for a root account: 7,200s. Maximum value for a sub-account: 129,600s.
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * Information on tags
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key. It’s up to 128 characters and case-sensitive.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value. It’s up to 256 characters and case-sensitive.
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Temporary credentials
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token, which contains up to 4,096 bytes depending on the associated policies.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Temporary credentials key ID, which contains up to 1,024 bytes.
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Temporary credentials key, which contains up to 1,024 bytes.
         * @type {string || null}
         */
        this.TmpSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;

    }
}

/**
 * AssumeRole request structure.
 * @class
 */
class AssumeRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource descriptions of a role, which can be obtained by clicking the role name in the [CAM console](https://console.cloud.tencent.com/cam/role).
General role:
qcs::cam::uin/12345678:role/4611686018427397919, qcs::cam::uin/12345678:roleName/testRoleName
Service role:
qcs::cam::uin/12345678:role/tencentcloudServiceRole/4611686018427397920, qcs::cam::uin/12345678:role/tencentcloudServiceRoleName/testServiceRoleName
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * User-defined temporary session name.
It can contain 2-128 letters, digits, and symbols (=,.@_-). Regex: [\w+=,.@_-]*
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * Specifies the validity period of credentials in seconds. Default value: 7200. Maximum value: 43200
         * @type {number || null}
         */
        this.DurationSeconds = null;

        /**
         * Policy description
Note:
1. The policy needs to be URL-encoded (if you request a TencentCloud API through the GET method, all parameters must be URL-encoded again in accordance with [Signature v3](https://intl.cloud.tencent.com/document/api/598/33159?from_cn_redirect=1#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2) before the request is sent).
2. For the policy syntax, please see CAM's [Syntax Logic](https://intl.cloud.tencent.com/document/product/598/10603?from_cn_redirect=1).
3. The policy cannot contain the `principal` element.
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * External role ID, which can be obtained by clicking the role name in the [CAM console](https://console.cloud.tencent.com/cam/role).
It can contain 2-128 letters, digits, and symbols (=,.@:/-). Regex: [\w+=,.@:\/-]*
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * List of session tags. Up to 50 tags are allowed. The tag keys can not duplicate.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * UIN of the initiator
         * @type {string || null}
         */
        this.SourceIdentity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SourceIdentity = 'SourceIdentity' in params ? params.SourceIdentity : null;

    }
}

/**
 * GetCallerIdentity request structure.
 * @class
 */
class GetCallerIdentityRequest extends  AbstractModel {
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
 * AssumeRoleWithSAML request structure.
 * @class
 */
class AssumeRoleWithSAMLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded SAML assertion
         * @type {string || null}
         */
        this.SAMLAssertion = null;

        /**
         * Principal access description name
         * @type {string || null}
         */
        this.PrincipalArn = null;

        /**
         * Role access description name
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * Session name
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * The validity period of the temporary credentials in seconds. Default value: 7,200s. Maximum value: 43,200s.
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SAMLAssertion = 'SAMLAssertion' in params ? params.SAMLAssertion : null;
        this.PrincipalArn = 'PrincipalArn' in params ? params.PrincipalArn : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

module.exports = {
    AssumeRoleWithSAMLResponse: AssumeRoleWithSAMLResponse,
    GetCallerIdentityResponse: GetCallerIdentityResponse,
    AssumeRoleWithWebIdentityRequest: AssumeRoleWithWebIdentityRequest,
    AssumeRoleWithWebIdentityResponse: AssumeRoleWithWebIdentityResponse,
    GetFederationTokenResponse: GetFederationTokenResponse,
    AssumeRoleResponse: AssumeRoleResponse,
    GetFederationTokenRequest: GetFederationTokenRequest,
    Tag: Tag,
    Credentials: Credentials,
    AssumeRoleRequest: AssumeRoleRequest,
    GetCallerIdentityRequest: GetCallerIdentityRequest,
    AssumeRoleWithSAMLRequest: AssumeRoleWithSAMLRequest,

}
