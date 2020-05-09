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
         * Specifies the validity period of credentials in seconds. Default value: 7200. Maximum value: 7200
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
1. The policy needs to be URL-encoded (if you request a TencentCloud API through the GET method, all parameters must be URL-encoded again in accordance with [Signature v3](https://cloud.tencent.com/document/api/598/33159#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2) before the request is sent).
2. For the policy syntax, please see CAM’s [Syntax Logic](https://cloud.tencent.com/document/product/598/10603).
3. The policy cannot contain the `principal` element.
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * Specifies the validity period of credentials in seconds. Default value: 1800. Maximum value: 7200
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
 * Temporary credentials
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Temporary credentials secret ID
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Temporary credentials secret key
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
         * Role resource description, such as qcs::cam::uin/12345678:role/4611686018427397919, qcs::cam::uin/12345678:roleName/testRoleName
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * User-defined temporary session name
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
1. The policy needs to be URL-encoded (if you request a TencentCloud API through the GET method, all parameters must be URL-encoded again in accordance with [Signature v3](https://cloud.tencent.com/document/api/598/33159#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2) before the request is sent).
2. For the policy syntax, please see CAM’s [Syntax Logic](https://cloud.tencent.com/document/product/598/10603).
3. The policy cannot contain the `principal` element.
         * @type {string || null}
         */
        this.Policy = null;

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

    }
}

module.exports = {
    AssumeRoleWithSAMLResponse: AssumeRoleWithSAMLResponse,
    AssumeRoleWithSAMLRequest: AssumeRoleWithSAMLRequest,
    GetFederationTokenResponse: GetFederationTokenResponse,
    AssumeRoleResponse: AssumeRoleResponse,
    GetFederationTokenRequest: GetFederationTokenRequest,
    Credentials: Credentials,
    AssumeRoleRequest: AssumeRoleRequest,

}
