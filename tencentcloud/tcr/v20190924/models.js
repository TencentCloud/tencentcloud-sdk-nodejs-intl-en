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
 * CreateMultipleSecurityPolicy request structure.
 * @class
 */
class CreateMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Security group policy
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

/**
 * CreateMultipleSecurityPolicy response structure.
 * @class
 */
class CreateMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMultipleSecurityPolicy response structure.
 * @class
 */
class DeleteMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security policy
 * @class
 */
class SecurityPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy index
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The public network IP address of the access source
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The version of the security policy
         * @type {string || null}
         */
        this.PolicyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PolicyVersion = 'PolicyVersion' in params ? params.PolicyVersion : null;

    }
}

/**
 * DeleteMultipleSecurityPolicy request structure.
 * @class
 */
class DeleteMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Security group policy
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

module.exports = {
    CreateMultipleSecurityPolicyRequest: CreateMultipleSecurityPolicyRequest,
    CreateMultipleSecurityPolicyResponse: CreateMultipleSecurityPolicyResponse,
    DeleteMultipleSecurityPolicyResponse: DeleteMultipleSecurityPolicyResponse,
    SecurityPolicy: SecurityPolicy,
    DeleteMultipleSecurityPolicyRequest: DeleteMultipleSecurityPolicyRequest,

}
