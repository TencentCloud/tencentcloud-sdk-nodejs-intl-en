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
 * DeleteImmutableTagRules response structure.
 * @class
 */
class DeleteImmutableTagRulesResponse extends  AbstractModel {
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
 * DescribeImmutableTagRules response structure.
 * @class
 */
class DescribeImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule list
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ImmutableTagRule> || null}
         */
        this.Rules = null;

        /**
         * Namespace with no rules created
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.EmptyNs = null;

        /**
         * Total rules
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ImmutableTagRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.EmptyNs = 'EmptyNs' in params ? params.EmptyNs : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckInstance response structure.
 * @class
 */
class CheckInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Verification result. true: valid, false: invalid
         * @type {boolean || null}
         */
        this.IsValidated = null;

        /**
         * ID of the region where the instance is located.
         * @type {number || null}
         */
        this.RegionId = null;

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
        this.IsValidated = 'IsValidated' in params ? params.IsValidated : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * CreateImmutableTagRules response structure.
 * @class
 */
class CreateImmutableTagRulesResponse extends  AbstractModel {
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
 * Tag immutability rule
 * @class
 */
class ImmutableTagRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Repository matching rule
         * @type {string || null}
         */
        this.RepositoryPattern = null;

        /**
         * Tag matching rule
         * @type {string || null}
         */
        this.TagPattern = null;

        /**
         * repoMatches or repoExcludes
         * @type {string || null}
         */
        this.RepositoryDecoration = null;

        /**
         * matches or excludes
         * @type {string || null}
         */
        this.TagDecoration = null;

        /**
         * Disabling rule
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryPattern = 'RepositoryPattern' in params ? params.RepositoryPattern : null;
        this.TagPattern = 'TagPattern' in params ? params.TagPattern : null;
        this.RepositoryDecoration = 'RepositoryDecoration' in params ? params.RepositoryDecoration : null;
        this.TagDecoration = 'TagDecoration' in params ? params.TagDecoration : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.NsName = 'NsName' in params ? params.NsName : null;

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

/**
 * CheckInstance request structure.
 * @class
 */
class CheckInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be verified.
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

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
 * DeleteImmutableTagRules request structure.
 * @class
 */
class DeleteImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
 * DescribeImmutableTagRules request structure.
 * @class
 */
class DescribeImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * ModifyImmutableTagRules request structure.
 * @class
 */
class ModifyImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Rule
         * @type {ImmutableTagRule || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * ModifyImmutableTagRules response structure.
 * @class
 */
class ModifyImmutableTagRulesResponse extends  AbstractModel {
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
 * CreateImmutableTagRules request structure.
 * @class
 */
class CreateImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Rule
         * @type {ImmutableTagRule || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

module.exports = {
    DeleteImmutableTagRulesResponse: DeleteImmutableTagRulesResponse,
    DescribeImmutableTagRulesResponse: DescribeImmutableTagRulesResponse,
    CheckInstanceResponse: CheckInstanceResponse,
    CreateMultipleSecurityPolicyRequest: CreateMultipleSecurityPolicyRequest,
    CreateImmutableTagRulesResponse: CreateImmutableTagRulesResponse,
    DeleteMultipleSecurityPolicyResponse: DeleteMultipleSecurityPolicyResponse,
    ImmutableTagRule: ImmutableTagRule,
    DeleteMultipleSecurityPolicyRequest: DeleteMultipleSecurityPolicyRequest,
    CheckInstanceRequest: CheckInstanceRequest,
    CreateMultipleSecurityPolicyResponse: CreateMultipleSecurityPolicyResponse,
    DeleteImmutableTagRulesRequest: DeleteImmutableTagRulesRequest,
    SecurityPolicy: SecurityPolicy,
    DescribeImmutableTagRulesRequest: DescribeImmutableTagRulesRequest,
    ModifyImmutableTagRulesRequest: ModifyImmutableTagRulesRequest,
    ModifyImmutableTagRulesResponse: ModifyImmutableTagRulesResponse,
    CreateImmutableTagRulesRequest: CreateImmutableTagRulesRequest,

}
