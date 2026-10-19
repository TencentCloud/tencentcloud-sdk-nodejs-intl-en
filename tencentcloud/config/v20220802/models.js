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
 * Resource list information
 * @class
 */
class ResourceListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource status.
         * @type {string || null}
         */
        this.ResourceStatus = null;

        /**
         * Valid values: 1 (deleted) and 2 (not deleted).
         * @type {number || null}
         */
        this.ResourceDelete = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Tag information.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * AZ.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Compliance status
         * @type {string || null}
         */
        this.ComplianceResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceStatus = 'ResourceStatus' in params ? params.ResourceStatus : null;
        this.ResourceDelete = 'ResourceDelete' in params ? params.ResourceDelete : null;
        this.ResourceCreateTime = 'ResourceCreateTime' in params ? params.ResourceCreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ResourceZone = 'ResourceZone' in params ? params.ResourceZone : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;

    }
}

/**
 * ListAggregateDiscoveredResources request structure.
 * @class
 */
class ListAggregateDiscoveredResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of results displayed per page</p>
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>resourceName: resource name. resourceId: resource ID. resourceType: resource type.</p>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Next page token</p>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Sorting method: asc, desc</p>
         * @type {string || null}
         */
        this.OrderType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * AddAggregateCompliancePack response structure.
 * @class
 */
class AddAggregateCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseAggregateConfigRule response structure.
 * @class
 */
class CloseAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * AddCompliancePack request structure.
 * @class
 */
class AddCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package rules.</p>
         * @type {Array.<CompliancePackRule> || null}
         */
        this.ConfigRules = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Description.</p>
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

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListRemediations request structure.
 * @class
 */
class ListRemediationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items per page. Default value: 20; value range: 1–200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Rule ID
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * DescribeAggregator request structure.
 * @class
 */
class DescribeAggregatorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Account group creator ID.</p>
         * @type {number || null}
         */
        this.OwnerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * PutEvaluations response structure.
 * @class
 */
class PutEvaluationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateAggregator response structure.
 * @class
 */
class UpdateAggregatorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * OpenAggregateConfigRule response structure.
 * @class
 */
class OpenAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * AddAggregateCompliancePack request structure.
 * @class
 */
class AddAggregateCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package rules.</p>
         * @type {Array.<CompliancePackRule> || null}
         */
        this.ConfigRules = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Description.</p>
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

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeAggregateCompliancePack response structure.
 * @class
 */
class DescribeAggregateCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package name.
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Compliance package rules.
         * @type {Array.<ComplianceConfigRule> || null}
         */
        this.ConfigRules = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Compliance package status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new ComplianceConfigRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartAggregateConfigRuleEvaluation response structure.
 * @class
 */
class StartAggregateConfigRuleEvaluationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * CloseConfigRecorder request structure.
 * @class
 */
class CloseConfigRecorderRequest extends  AbstractModel {
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
 * DescribeSystemRule request structure.
 * @class
 */
class DescribeSystemRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique rule ID.
         * @type {string || null}
         */
        this.Identifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;

    }
}

/**
 * ListConfigRules response structure.
 * @class
 */
class ListConfigRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details.
         * @type {Array.<ConfigRule> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * System compliance package information.
 * @class
 */
class SystemCompliancePack extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Compliance package risk level 1: high-risk.
2: Medium-risk.
3: Low risk.
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Compliance package rule information.
         * @type {Array.<CompliancePackRuleForManage> || null}
         */
        this.ConfigRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRuleForManage();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }

    }
}

/**
 * DeleteConfigRule response structure.
 * @class
 */
class DeleteConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Compliance details
 * @class
 */
class Annotation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current actual resource configuration. A length of 0 to 256 characters indicates non-compliant resource configuration.
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Expected resource configuration. A length of 0 to 256 characters indicates compliant resource configuration.
         * @type {string || null}
         */
        this.DesiredValue = null;

        /**
         * Comparison operator between current and desired configuration of the resource. Length is 0-16 characters. This field may be empty when custom rule reporting evaluation result.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * JSON path of current configuration in resource attribute structure. Length is 0-256 characters. This field may be empty when custom rule reporting evaluation result.
         * @type {string || null}
         */
        this.Property = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Configuration = 'Configuration' in params ? params.Configuration : null;
        this.DesiredValue = 'DesiredValue' in params ? params.DesiredValue : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Property = 'Property' in params ? params.Property : null;

    }
}

/**
 * UpdateRemediation response structure.
 * @class
 */
class UpdateRemediationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ListSystemRules response structure.
 * @class
 */
class ListSystemRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details.
         * @type {Array.<SystemConfigRule> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SystemConfigRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAggregator response structure.
 * @class
 */
class CreateAggregatorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarmPolicy request structure.
 * @class
 */
class DeleteAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm Policy ID
         * @type {number || null}
         */
        this.AlarmPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmPolicyId = 'AlarmPolicyId' in params ? params.AlarmPolicyId : null;

    }
}

/**
 * ListAggregateCompliancePacks response structure.
 * @class
 */
class ListAggregateCompliancePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Details.</p>
         * @type {Array.<ConfigCompliancePack> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigCompliancePack();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListSystemCompliancePacks response structure.
 * @class
 */
class ListSystemCompliancePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details.
         * @type {Array.<SystemCompliancePack> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SystemCompliancePack();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Remediation settings.
 * @class
 */
class Remediation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remediation template ID.
         * @type {string || null}
         */
        this.RemediationTemplateId = null;

        /**
         * Remediation settings ID.
         * @type {string || null}
         */
        this.RemediationId = null;

        /**
         * Template source for executing remediation.
         * @type {string || null}
         */
        this.RemediationSourceType = null;

        /**
         * Correction type. Valid values:
SCF: Function Compute (custom remediation).
         * @type {string || null}
         */
        this.RemediationType = null;

        /**
         * Account ID
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Correction execution mode. Parameter value:
MANUAL_EXECUTION: manual execution.
         * @type {string || null}
         */
        this.InvokeType = null;

        /**
         * Rule ID.
         * @type {string || null}
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
        this.RemediationTemplateId = 'RemediationTemplateId' in params ? params.RemediationTemplateId : null;
        this.RemediationId = 'RemediationId' in params ? params.RemediationId : null;
        this.RemediationSourceType = 'RemediationSourceType' in params ? params.RemediationSourceType : null;
        this.RemediationType = 'RemediationType' in params ? params.RemediationType : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * ListAggregateConfigRuleEvaluationResults response structure.
 * @class
 */
class ListAggregateConfigRuleEvaluationResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Details.</p>
         * @type {Array.<AggregateEvaluationResult> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AggregateEvaluationResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseAggregateConfigRule request structure.
 * @class
 */
class CloseAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * DescribeAggregateDiscoveredResource response structure.
 * @class
 */
class DescribeAggregateDiscoveredResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource availability zone.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Resource configuration.
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Resource tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Resource update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceZone = 'ResourceZone' in params ? params.ResourceZone : null;
        this.Configuration = 'Configuration' in params ? params.Configuration : null;
        this.ResourceCreateTime = 'ResourceCreateTime' in params ? params.ResourceCreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Member information
 * @class
 */
class AggregatorAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member ID
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name.
         * @type {string || null}
         */
        this.MemberName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;

    }
}

/**
 * Rule input parameters.
 * @class
 */
class InputParameterForManage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value type. Valid values: Integer and String.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Parameter key.
         * @type {string || null}
         */
        this.ParameterKey = null;

        /**
         * Parameter type. Valid values: Require (required) and Optional (optional).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Description
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
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.ParameterKey = 'ParameterKey' in params ? params.ParameterKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListConfigRules request structure.
 * @class
 */
class ListConfigRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries per page.
Valid values: 1-200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
Value range: minimum value is 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting type (rule name).
- desc: descending order.
asc: ascending order.
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * Risk level.
1: High-risk
2: Medium-risk,
3: Low risk.
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * Rule Status.
ACTIVE: enable
UN_ACTIVE: Disabled

         * @type {string || null}
         */
        this.State = null;

        /**
         * Assessment result.
COMPLIANT: compliant
NON_COMPLIANT: non-compliance
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * Rule Name
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.State = 'State' in params ? params.State : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * DescribeAggregateConfigRule request structure.
 * @class
 */
class DescribeAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Account group
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * Rule number information.
 * @class
 */
class Control extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule number.</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>Number description.</p>
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListAggregateConfigRules request structure.
 * @class
 */
class ListAggregateConfigRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of items per page.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Sorting type. Valid values: desc (descending) and asc (ascending).</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Rule status.</p>
         * @type {string || null}
         */
        this.State = null;

        /**
         * <p>Evaluation results.</p>
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * <p>Rule name.</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>ID of the account to which the rule belongs.</p>
         * @type {number || null}
         */
        this.RuleOwnerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.State = 'State' in params ? params.State : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleOwnerId = 'RuleOwnerId' in params ? params.RuleOwnerId : null;

    }
}

/**
 * ListConfigRuleEvaluationResults response structure.
 * @class
 */
class ListConfigRuleEvaluationResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details.
         * @type {Array.<EvaluationResult> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new EvaluationResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAlarmPolicy response structure.
 * @class
 */
class UpdateAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeCompliancePack request structure.
 * @class
 */
class DescribeCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * ListDiscoveredResources response structure.
 * @class
 */
class ListDiscoveredResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Details.</p>
         * @type {Array.<ResourceListInfo> || null}
         */
        this.Items = null;

        /**
         * <p>Next page</p>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ResourceListInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListConfigRuleResourceEvaluationResults request structure.
 * @class
 */
class ListConfigRuleResourceEvaluationResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of returned results. Maximum value: 1000. If not specified, all results are returned.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateAggregateCompliancePackStatus response structure.
 * @class
 */
class UpdateAggregateCompliancePackStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * User group list information.
 * @class
 */
class Aggregator extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Account group description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creator user ID.
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Number of account group members.
         * @type {number || null}
         */
        this.AccountCount = null;

        /**
         * RD: global account group.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group status.
         * @type {number || null}
         */
        this.AggregatorStatus = null;

        /**
         * Account group name
         * @type {string || null}
         */
        this.MemberName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AccountCount = 'AccountCount' in params ? params.AccountCount : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AggregatorStatus = 'AggregatorStatus' in params ? params.AggregatorStatus : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;

    }
}

/**
 * DescribeAggregateConfigDeliver response structure.
 * @class
 */
class DescribeAggregateConfigDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery name
         * @type {string || null}
         */
        this.DeliverName = null;

        /**
         * Six-segment resource format
         * @type {string || null}
         */
        this.TargetArn = null;

        /**
         * Delivery status. Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Log prefix.
         * @type {string || null}
         */
        this.DeliverPrefix = null;

        /**
         * Delivery Type
         * @type {string || null}
         */
        this.DeliverType = null;

        /**
         * Member account UIN supporting cross-account delivery, which can only be the delegated administrator. The default value is 0, indicating delivery to the administrator account.
         * @type {number || null}
         */
        this.DeliverUin = null;

        /**
         * Valid values: 1 (configuration changes), 2 (resource list), and 3 (all).
         * @type {number || null}
         */
        this.DeliverContentType = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.DeliverName = 'DeliverName' in params ? params.DeliverName : null;
        this.TargetArn = 'TargetArn' in params ? params.TargetArn : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeliverPrefix = 'DeliverPrefix' in params ? params.DeliverPrefix : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.DeliverUin = 'DeliverUin' in params ? params.DeliverUin : null;
        this.DeliverContentType = 'DeliverContentType' in params ? params.DeliverContentType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenConfigRecorder response structure.
 * @class
 */
class OpenConfigRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateConfigDeliver response structure.
 * @class
 */
class UpdateConfigDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeConfigRule response structure.
 * @class
 */
class DescribeConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule details
         * @type {ConfigRule || null}
         */
        this.ConfigRule = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.ConfigRule) {
            let obj = new ConfigRule();
            obj.deserialize(params.ConfigRule)
            this.ConfigRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCompliancePack request structure.
 * @class
 */
class UpdateCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Risk level.</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * <p>Compliance package rules.</p>
         * @type {Array.<CompliancePackRule> || null}
         */
        this.ConfigRules = null;

        /**
         * <p>Description.</p>
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
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListCompliancePacks request structure.
 * @class
 */
class ListCompliancePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Quantity.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package status. Valid values: ACTIVE (active) and NO_ACTIVE (inactive).</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Evaluation status. Valid values: &#39;COMPLIANT&#39 (compliant)<br>&#39;NON_COMPLIANT&#39 (non-compliant)</p>
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * <p>Sorting type. Valid values: desc (descending) and asc (ascending).</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Contains compliance pack rule statistical information</p><p>Enumeration values:</p><ul><li>1: Yes</li></ul>
         * @type {string || null}
         */
        this.IncludeCompliancePackRuleResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.IncludeCompliancePackRuleResult = 'IncludeCompliancePackRuleResult' in params ? params.IncludeCompliancePackRuleResult : null;

    }
}

/**
 * UpdateCompliancePackStatus response structure.
 * @class
 */
class UpdateCompliancePackStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateAggregateCompliancePackStatus request structure.
 * @class
 */
class UpdateAggregateCompliancePackStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * ACTIVE: Enable
UN_ACTIVE: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * ListAggregateConfigRuleResourceEvaluationResults response structure.
 * @class
 */
class ListAggregateConfigRuleResourceEvaluationResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Configuration rule resource assessment result list.</p>
         * @type {Array.<ConfigRuleResourceEvaluationResult> || null}
         */
        this.Items = null;

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigRuleResourceEvaluationResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateConfigRecorder response structure.
 * @class
 */
class UpdateConfigRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ListAlarmPolicy request structure.
 * @class
 */
class ListAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * DescribeSystemCompliancePack response structure.
 * @class
 */
class DescribeSystemCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Compliance package description</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Risk level.</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package rule list</p>
         * @type {Array.<CompliancePackRuleForManage> || null}
         */
        this.ConfigRules = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRuleForManage();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Compliance package rule information.
 * @class
 */
class CompliancePackRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * <p>Rule number information.</p>
         * @type {Array.<Control> || null}
         */
        this.Control = null;

        /**
         * <p>Resource type.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;

        if (params.Control) {
            this.Control = new Array();
            for (let z in params.Control) {
                let obj = new Control();
                obj.deserialize(params.Control[z]);
                this.Control.push(obj);
            }
        }
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;

    }
}

/**
 * Compliance package rule information.
 * @class
 */
class ComplianceConfigRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Rule status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * Assessment result
Compliant: 'COMPLIANT'
Non-compliant: 'NON_COMPLIANT'
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * Keyword.
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * Input parameters
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * Parameter format.
         * @type {Array.<SourceConditionForManage> || null}
         */
        this.SourceCondition = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * Creation method. Valid values: user, compliancePack, and system.
         * @type {string || null}
         */
        this.CreateByType = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Parameter description
         * @type {Array.<InputParameterForManage> || null}
         */
        this.ManageInputParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.Labels = 'Labels' in params ? params.Labels : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }

        if (params.SourceCondition) {
            this.SourceCondition = new Array();
            for (let z in params.SourceCondition) {
                let obj = new SourceConditionForManage();
                obj.deserialize(params.SourceCondition[z]);
                this.SourceCondition.push(obj);
            }
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.CreateByType = 'CreateByType' in params ? params.CreateByType : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ManageInputParameter) {
            this.ManageInputParameter = new Array();
            for (let z in params.ManageInputParameter) {
                let obj = new InputParameterForManage();
                obj.deserialize(params.ManageInputParameter[z]);
                this.ManageInputParameter.push(obj);
            }
        }

    }
}

/**
 * OpenAggregateConfigRule request structure.
 * @class
 */
class OpenAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * ListSystemCompliancePacks request structure.
 * @class
 */
class ListSystemCompliancePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ListAlarmPolicy response structure.
 * @class
 */
class ListAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The number of returned records</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Alarm policy return value</p>
         * @type {Array.<AlarmPolicyRsp> || null}
         */
        this.AlarmPolicyList = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.AlarmPolicyList) {
            this.AlarmPolicyList = new Array();
            for (let z in params.AlarmPolicyList) {
                let obj = new AlarmPolicyRsp();
                obj.deserialize(params.AlarmPolicyList[z]);
                this.AlarmPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAggregators response structure.
 * @class
 */
class ListAggregatorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Account group list.
         * @type {Array.<Aggregator> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Aggregator();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListConfigRuleEvaluationResults request structure.
 * @class
 */
class ListConfigRuleEvaluationResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Current Page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Type.
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * Evaluation result. Valid values: COMPLIANT and NON_COMPLIANT.
         * @type {Array.<string> || null}
         */
        this.ComplianceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ComplianceType = 'ComplianceType' in params ? params.ComplianceType : null;

    }
}

/**
 * DeleteAggregateConfigRule response structure.
 * @class
 */
class DeleteAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * CreateAggregator request structure.
 * @class
 */
class CreateAggregatorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Account group description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Account group type.</p><p>Valid values:</p><ul><li>RD: Global account group</li><li>CUSTOM: Custom account group</li></ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Account group member list, up to 100 entries.</p>
         * @type {Array.<AggregatorAccount> || null}
         */
        this.AggregatorAccounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.AggregatorAccounts) {
            this.AggregatorAccounts = new Array();
            for (let z in params.AggregatorAccounts) {
                let obj = new AggregatorAccount();
                obj.deserialize(params.AggregatorAccounts[z]);
                this.AggregatorAccounts.push(obj);
            }
        }

    }
}

/**
 * DescribeConfigRecorder response structure.
 * @class
 */
class DescribeConfigRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of user monitoring resources.
         * @type {Array.<UserConfigResource> || null}
         */
        this.Items = null;

        /**
         * Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of snapshots on the current day.
         * @type {number || null}
         */
        this.TriggerCount = null;

        /**
         * Number of times monitoring is enabled on the current day.
         * @type {number || null}
         */
        this.OpenCount = null;

        /**
         * Number of times the monitoring scope is modified on the current day
         * @type {number || null}
         */
        this.UpdateCount = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new UserConfigResource();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.TriggerCount = 'TriggerCount' in params ? params.TriggerCount : null;
        this.OpenCount = 'OpenCount' in params ? params.OpenCount : null;
        this.UpdateCount = 'UpdateCount' in params ? params.UpdateCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAggregateCompliancePack request structure.
 * @class
 */
class UpdateAggregateCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package name.
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Compliance package rules.
         * @type {Array.<CompliancePackRule> || null}
         */
        this.ConfigRules = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Description
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
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new CompliancePackRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateRemediation request structure.
 * @class
 */
class CreateRemediationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * <p>Remediation type. Valid values: SCF (serverless cloud function, custom remediation).</p>
         * @type {string || null}
         */
        this.RemediationType = null;

        /**
         * <p>Remediation template ID.</p>
         * @type {string || null}
         */
        this.RemediationTemplateId = null;

        /**
         * <p>Remediation execution mode.<br>Valid values: MANUAL_EXECUTION (manual execution).</p>
         * @type {string || null}
         */
        this.InvokeType = null;

        /**
         * <p>Template source for executing remediation. Valid values:<br>CUSTOM: custom template.</p>
         * @type {string || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RemediationType = 'RemediationType' in params ? params.RemediationType : null;
        this.RemediationTemplateId = 'RemediationTemplateId' in params ? params.RemediationTemplateId : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * AddCompliancePack response structure.
 * @class
 */
class AddCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule supports trigger type
 * @class
 */
class TriggerType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger Type
         * @type {string || null}
         */
        this.MessageType = null;

        /**
         * Triggering time period.
         * @type {string || null}
         */
        this.MaximumExecutionFrequency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.MaximumExecutionFrequency = 'MaximumExecutionFrequency' in params ? params.MaximumExecutionFrequency : null;

    }
}

/**
 * Resource type information.
 * @class
 */
class ConfigResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * product
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource type name
         * @type {string || null}
         */
        this.ResourceTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceTypeName = 'ResourceTypeName' in params ? params.ResourceTypeName : null;

    }
}

/**
 * DescribeAggregateConfigDeliver request structure.
 * @class
 */
class DescribeAggregateConfigDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * ListAggregators request structure.
 * @class
 */
class ListAggregatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results displayed per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Start
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateAggregateConfigDeliver request structure.
 * @class
 */
class UpdateAggregateConfigDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Delivery service name
         * @type {string || null}
         */
        this.DeliverName = null;

        /**
         * Six-segment resource format  
COS:qcs::cos:$region:$account:prefix/$appid/$BucketName
CLS:
qcs::cls:$region:$account:cls/topicId
         * @type {string || null}
         */
        this.TargetArn = null;

        /**
         * Resource prefix.
         * @type {string || null}
         */
        this.DeliverPrefix = null;

        /**
         * Delivery type. Valid value: COS and CLS.
         * @type {string || null}
         */
        this.DeliverType = null;

        /**
         * Member account UIN supporting cross-account delivery, which can only be the delegated administrator. The default value is 0, indicating delivery to the administrator account.
         * @type {number || null}
         */
        this.DeliverUin = null;

        /**
         * Valid values: 1 (configuration changes), 2 (resource list), and 3 (all).
         * @type {number || null}
         */
        this.DeliverContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.DeliverName = 'DeliverName' in params ? params.DeliverName : null;
        this.TargetArn = 'TargetArn' in params ? params.TargetArn : null;
        this.DeliverPrefix = 'DeliverPrefix' in params ? params.DeliverPrefix : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.DeliverUin = 'DeliverUin' in params ? params.DeliverUin : null;
        this.DeliverContentType = 'DeliverContentType' in params ? params.DeliverContentType : null;

    }
}

/**
 * PutEvaluations request structure.
 * @class
 */
class PutEvaluationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback token. Get the value of the ResultToken parameter from the input parameters of the selected scf cloud function in the custom rule.
<a href="https://www.tencentcloud.com/document/product/583/9210?from_cn_redirect=1#.E5.87.BD.E6.95.B0.E5.85.A5.E5.8F.82.3Ca-id.3D.22input.22.3E.3C.2Fa.3E" target="_blank">SCF input parameters</a>
         * @type {string || null}
         */
        this.ResultToken = null;

        /**
         * Custom rule evaluation result information.
         * @type {Array.<Evaluation> || null}
         */
        this.Evaluations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultToken = 'ResultToken' in params ? params.ResultToken : null;

        if (params.Evaluations) {
            this.Evaluations = new Array();
            for (let z in params.Evaluations) {
                let obj = new Evaluation();
                obj.deserialize(params.Evaluations[z]);
                this.Evaluations.push(obj);
            }
        }

    }
}

/**
 * UpdateConfigRule request structure.
 * @class
 */
class UpdateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Trigger types, supporting up to two types.</p>
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * <p>rule name</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>Input parameters.</p>
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * <p>Description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Rule evaluation region scope. The rule only applies to resources in specified regions. Supported regions are those returned by config:ListResourceRegions.</p>
         * @type {Array.<string> || null}
         */
        this.RegionsScope = null;

        /**
         * <p>Rule evaluation tag scope. The rule only applies to resources bound with specified tags.</p>
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         * <p>The rule is invalid for the specified resource ID, meaning that evaluation will not be performed on this resource.</p>
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TriggerType) {
            this.TriggerType = new Array();
            for (let z in params.TriggerType) {
                let obj = new TriggerType();
                obj.deserialize(params.TriggerType[z]);
                this.TriggerType.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionsScope = 'RegionsScope' in params ? params.RegionsScope : null;

        if (params.TagsScope) {
            this.TagsScope = new Array();
            for (let z in params.TagsScope) {
                let obj = new Tag();
                obj.deserialize(params.TagsScope[z]);
                this.TagsScope.push(obj);
            }
        }
        this.ExcludeResourceIdsScope = 'ExcludeResourceIdsScope' in params ? params.ExcludeResourceIdsScope : null;

    }
}

/**
 * Resource type.
 * @class
 */
class UserConfigResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * product
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource type name
         * @type {string || null}
         */
        this.ResourceTypeName = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceTypeName = 'ResourceTypeName' in params ? params.ResourceTypeName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DetachConfigRuleToCompliancePack request structure.
 * @class
 */
class DetachConfigRuleToCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.ConfigRuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;

    }
}

/**
 * UpdateRemediation request structure.
 * @class
 */
class UpdateRemediationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remediation setting ID.
         * @type {string || null}
         */
        this.RemediationId = null;

        /**
         * Remediation type. Valid values: SCF (function compute, custom remediation).
         * @type {string || null}
         */
        this.RemediationType = null;

        /**
         * Remediation template ID.
         * @type {string || null}
         */
        this.RemediationTemplateId = null;

        /**
         * Remediation execution mode. Valid values: NON_EXECUTION (no execution), AUTO_EXECUTION (automatic execution), MANUAL_EXECUTION (manual execution), and NOT_CONFIG (not configured).
         * @type {string || null}
         */
        this.InvokeType = null;

        /**
         * Remediation execution source.
         * @type {string || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RemediationId = 'RemediationId' in params ? params.RemediationId : null;
        this.RemediationType = 'RemediationType' in params ? params.RemediationType : null;
        this.RemediationTemplateId = 'RemediationTemplateId' in params ? params.RemediationTemplateId : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * Assessment result
 * @class
 */
class AggregateEvaluationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.ConfigRuleName = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Assessment result
         * @type {Annotation || null}
         */
        this.Annotation = null;

        /**
         * Compliance type.
         * @type {string || null}
         */
        this.ComplianceType = null;

        /**
         * Rule initiation type.
         * @type {string || null}
         */
        this.InvokingEventMessageType = null;

        /**
         * Evaluation initiation time.
         * @type {string || null}
         */
        this.ConfigRuleInvokedTime = null;

        /**
         * Actual evaluation time.
         * @type {string || null}
         */
        this.ResultRecordedTime = null;

        /**
         * Resource owner ID.
         * @type {number || null}
         */
        this.ResourceOwnerId = null;

        /**
         * Resource owner user name.
         * @type {string || null}
         */
        this.ResourceOwnerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.ConfigRuleName = 'ConfigRuleName' in params ? params.ConfigRuleName : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.Annotation) {
            let obj = new Annotation();
            obj.deserialize(params.Annotation)
            this.Annotation = obj;
        }
        this.ComplianceType = 'ComplianceType' in params ? params.ComplianceType : null;
        this.InvokingEventMessageType = 'InvokingEventMessageType' in params ? params.InvokingEventMessageType : null;
        this.ConfigRuleInvokedTime = 'ConfigRuleInvokedTime' in params ? params.ConfigRuleInvokedTime : null;
        this.ResultRecordedTime = 'ResultRecordedTime' in params ? params.ResultRecordedTime : null;
        this.ResourceOwnerId = 'ResourceOwnerId' in params ? params.ResourceOwnerId : null;
        this.ResourceOwnerName = 'ResourceOwnerName' in params ? params.ResourceOwnerName : null;

    }
}

/**
 * Rule details on the operation side.
 * @class
 */
class SystemConfigRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * <p>Rule name.</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>Rule parameters</p>
         * @type {Array.<InputParameterForManage> || null}
         */
        this.InputParameter = null;

        /**
         * <p>Rule trigger condition</p>
         * @type {Array.<SourceConditionForManage> || null}
         */
        this.SourceCondition = null;

        /**
         * <p>Supported resource types.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<string> || null}
         */
        this.Label = null;

        /**
         * <p>Risk level, 1, 2, 3</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Corresponding function</p>
         * @type {string || null}
         */
        this.ServiceFunction = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Trigger type.</p>
         * @type {Array.<string> || null}
         */
        this.TriggerType = null;

        /**
         * <p>Description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Number of use</p>
         * @type {number || null}
         */
        this.ReferenceCount = null;

        /**
         * <p>Rule type.</p>
         * @type {string || null}
         */
        this.IdentifierType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameterForManage();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }

        if (params.SourceCondition) {
            this.SourceCondition = new Array();
            for (let z in params.SourceCondition) {
                let obj = new SourceConditionForManage();
                obj.deserialize(params.SourceCondition[z]);
                this.SourceCondition.push(obj);
            }
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.ServiceFunction = 'ServiceFunction' in params ? params.ServiceFunction : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ReferenceCount = 'ReferenceCount' in params ? params.ReferenceCount : null;
        this.IdentifierType = 'IdentifierType' in params ? params.IdentifierType : null;

    }
}

/**
 * DetachAggregateConfigRuleToCompliancePack response structure.
 * @class
 */
class DetachAggregateConfigRuleToCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeAggregateDiscoveredResource request structure.
 * @class
 */
class DescribeAggregateDiscoveredResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Resource owner ID.
         * @type {number || null}
         */
        this.ResourceOwnerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.ResourceOwnerId = 'ResourceOwnerId' in params ? params.ResourceOwnerId : null;

    }
}

/**
 * AddConfigRule response structure.
 * @class
 */
class AddConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule conditions on the operation side.
 * @class
 */
class SourceConditionForManage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance status when the condition is empty. Valid values: COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE.
         * @type {string || null}
         */
        this.EmptyAs = null;

        /**
         * Configuration path
         * @type {string || null}
         */
        this.SelectPath = null;

        /**
         * Operator.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Whether it is mandatory.
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * Expected value
         * @type {string || null}
         */
        this.DesiredValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EmptyAs = 'EmptyAs' in params ? params.EmptyAs : null;
        this.SelectPath = 'SelectPath' in params ? params.SelectPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.DesiredValue = 'DesiredValue' in params ? params.DesiredValue : null;

    }
}

/**
 * AddConfigRule request structure.
 * @class
 */
class AddConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule template ID. The preset rule template is Identifier and the custom rule is the serverless cloud function ARN (region:functionName).</p>
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * <p>Rule template type. Valid values: SYSTEM and CUSTOMIZE.</p>
         * @type {string || null}
         */
        this.IdentifierType = null;

        /**
         * <p>rule name</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>Resources supported by the rule.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * <p>Trigger types, supporting up to two types.</p>
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Input parameters.</p>
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * <p>Rule description, which is 0–1024 characters in length.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Rule evaluation region scope. The rule only applies to resources in specified regions. Supported regions are those returned by config:ListResourceRegions.</p>
         * @type {Array.<string> || null}
         */
        this.RegionsScope = null;

        /**
         * <p>Rule evaluation tag scope. The rule only applies to resources bound with specified tags.</p>
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         * <p>The rule is invalid for the specified resource ID, meaning that evaluation will not be performed on this resource.</p>
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.IdentifierType = 'IdentifierType' in params ? params.IdentifierType : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.TriggerType) {
            this.TriggerType = new Array();
            for (let z in params.TriggerType) {
                let obj = new TriggerType();
                obj.deserialize(params.TriggerType[z]);
                this.TriggerType.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionsScope = 'RegionsScope' in params ? params.RegionsScope : null;

        if (params.TagsScope) {
            this.TagsScope = new Array();
            for (let z in params.TagsScope) {
                let obj = new Tag();
                obj.deserialize(params.TagsScope[z]);
                this.TagsScope.push(obj);
            }
        }
        this.ExcludeResourceIdsScope = 'ExcludeResourceIdsScope' in params ? params.ExcludeResourceIdsScope : null;

    }
}

/**
 * ListCompliancePacks response structure.
 * @class
 */
class ListCompliancePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Details.</p>
         * @type {Array.<ConfigCompliancePack> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigCompliancePack();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigDeliver response structure.
 * @class
 */
class DescribeConfigDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delivery name
         * @type {string || null}
         */
        this.DeliverName = null;

        /**
         * Six-segment resource format
         * @type {string || null}
         */
        this.TargetArn = null;

        /**
         * Delivery status. Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Log prefix.
         * @type {string || null}
         */
        this.DeliverPrefix = null;

        /**
         * Delivery Type
         * @type {string || null}
         */
        this.DeliverType = null;

        /**
         * Valid values: 1 (configuration changes), 2 (resource list), and 3 (all).
         * @type {number || null}
         */
        this.DeliverContentType = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.DeliverName = 'DeliverName' in params ? params.DeliverName : null;
        this.TargetArn = 'TargetArn' in params ? params.TargetArn : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeliverPrefix = 'DeliverPrefix' in params ? params.DeliverPrefix : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.DeliverContentType = 'DeliverContentType' in params ? params.DeliverContentType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachConfigRuleToCompliancePack response structure.
 * @class
 */
class DetachConfigRuleToCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateAlarmPolicy request structure.
 * @class
 */
class UpdateAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm Policy ID
         * @type {number || null}
         */
        this.AlarmPolicyId = null;

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Event scope. Valid values: 1 (current account) and 2 (multiple accounts).
         * @type {Array.<number> || null}
         */
        this.EventScope = null;

        /**
         * Risk level. Valid values: 1 (high risk), 2 (medium risk), and 3 (low risk).
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * Notification period
         * @type {string || null}
         */
        this.NoticeTime = null;

        /**
         * Notification mechanism
         * @type {string || null}
         */
        this.NotificationMechanism = null;

        /**
         * Status. Valid values: 1 (enabled) and 2 (disabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Notification cycle. Value range: 1 to 7, representing Monday to Sunday respectively.
         * @type {Array.<number> || null}
         */
        this.NoticePeriod = null;

        /**
         * Policy description
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
        this.AlarmPolicyId = 'AlarmPolicyId' in params ? params.AlarmPolicyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EventScope = 'EventScope' in params ? params.EventScope : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.NoticeTime = 'NoticeTime' in params ? params.NoticeTime : null;
        this.NotificationMechanism = 'NotificationMechanism' in params ? params.NotificationMechanism : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NoticePeriod = 'NoticePeriod' in params ? params.NoticePeriod : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CloseConfigRule request structure.
 * @class
 */
class CloseConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeSystemCompliancePack request structure.
 * @class
 */
class DescribeSystemCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * Custom rule evaluation result.
 * @class
 */
class Evaluation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Evaluated resource ID, which is 0 to 256 characters in length.
         * @type {string || null}
         */
        this.ComplianceResourceId = null;

        /**
         * Evaluated resource type.
Support
QCS::CVM::Instance, QCS::CBS::Disk,QCS::VPC::Vpc,QCS::VPC::Subnet,QCS::VPC::SecurityGroup, QCS::CAM::User,QCS::CAM::Group,QCS::CAM::Policy,QCS::CAM::Role,QCS::COS::Bucket
         * @type {string || null}
         */
        this.ComplianceResourceType = null;

        /**
         * Evaluated resource region.
0 to 32 characters in length.
         * @type {string || null}
         */
        this.ComplianceRegion = null;

        /**
         * Compliance type. Value:
COMPLIANT: compliant
NON_COMPLIANT: non-compliance
         * @type {string || null}
         */
        this.ComplianceType = null;

        /**
         * Supplementary information of non-compliant resources.
         * @type {Annotation || null}
         */
        this.Annotation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComplianceResourceId = 'ComplianceResourceId' in params ? params.ComplianceResourceId : null;
        this.ComplianceResourceType = 'ComplianceResourceType' in params ? params.ComplianceResourceType : null;
        this.ComplianceRegion = 'ComplianceRegion' in params ? params.ComplianceRegion : null;
        this.ComplianceType = 'ComplianceType' in params ? params.ComplianceType : null;

        if (params.Annotation) {
            let obj = new Annotation();
            obj.deserialize(params.Annotation)
            this.Annotation = obj;
        }

    }
}

/**
 * AddAggregateConfigRule response structure.
 * @class
 */
class AddAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * OpenConfigRule response structure.
 * @class
 */
class OpenConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeDiscoveredResource response structure.
 * @class
 */
class DescribeDiscoveredResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource availability zone.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Resource configuration.
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Resource tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Resource update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceZone = 'ResourceZone' in params ? params.ResourceZone : null;
        this.Configuration = 'Configuration' in params ? params.Configuration : null;
        this.ResourceCreateTime = 'ResourceCreateTime' in params ? params.ResourceCreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Correction records.
 * @class
 */
class RemediationExecutions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remediation status. Valid values: 1 (running), 2 (successful), and 3 (failed).
         * @type {number || null}
         */
        this.ExecutionStatus = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ExecutionResourceType = null;

        /**
         * Fixing time
         * @type {string || null}
         */
        this.ExecutionCreateDate = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ExecutionStatusMessage = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ExecutionResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecutionStatus = 'ExecutionStatus' in params ? params.ExecutionStatus : null;
        this.ExecutionResourceType = 'ExecutionResourceType' in params ? params.ExecutionResourceType : null;
        this.ExecutionCreateDate = 'ExecutionCreateDate' in params ? params.ExecutionCreateDate : null;
        this.ExecutionStatusMessage = 'ExecutionStatusMessage' in params ? params.ExecutionStatusMessage : null;
        this.ExecutionResourceIds = 'ExecutionResourceIds' in params ? params.ExecutionResourceIds : null;

    }
}

/**
 * DescribeConfigDeliver request structure.
 * @class
 */
class DescribeConfigDeliverRequest extends  AbstractModel {
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
 * UpdateConfigRule response structure.
 * @class
 */
class UpdateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DetachAggregateConfigRuleToCompliancePack request structure.
 * @class
 */
class DetachAggregateConfigRuleToCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * ListAggregateCompliancePacks request structure.
 * @class
 */
class ListAggregateCompliancePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Quantity.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Risk level. Valid values:<br>1: high-risk<br>2: medium-risk<br>3: low risk</p>
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Compliance package status. Valid values: ACTIVE (active) and NO_ACTIVE (inactive).</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Evaluation status. Valid values: &#39;COMPLIANT&#39 (compliant)<br>&#39;NON_COMPLIANT&#39 (non-compliant)</p>
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * <p>Sorting type. Valid values: desc (descending) and asc (ascending).</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Compliance package result inclusion definition</p><p>Valid values:</p><ul><li>NO: excluded</li></ul><p>Default value: empty</p><p>This field is newly added. Therefore, leaving it unpassed or passing YES will default to returning compliance result data, and other valid values will be enriched later as appropriate.</p>
         * @type {string || null}
         */
        this.IncludeCompliancePackRuleResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.IncludeCompliancePackRuleResult = 'IncludeCompliancePackRuleResult' in params ? params.IncludeCompliancePackRuleResult : null;

    }
}

/**
 * ListResourceTypes response structure.
 * @class
 */
class ListResourceTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details.
         * @type {Array.<ConfigResource> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigResource();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRemediations response structure.
 * @class
 */
class DeleteRemediationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateAggregator request structure.
 * @class
 */
class UpdateAggregatorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Account group description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Account group type.</p><p>Valid value:</p><ul><li>RD: global account group</li><li>CUSTOM: custom account group</li></ul>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Account group creator ID.</p>
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * <p>Account group member list, up to 100 entries.</p>
         * @type {Array.<AggregatorAccount> || null}
         */
        this.AggregatorAccounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

        if (params.AggregatorAccounts) {
            this.AggregatorAccounts = new Array();
            for (let z in params.AggregatorAccounts) {
                let obj = new AggregatorAccount();
                obj.deserialize(params.AggregatorAccounts[z]);
                this.AggregatorAccounts.push(obj);
            }
        }

    }
}

/**
 * DeleteConfigRule request structure.
 * @class
 */
class DeleteConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * Resource list filtering.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query field name. Valid values: resourceName (resource name), resourceId (resource ID), resourceType (resource type), resourceRegion (resource region), resourceDelete (deletion status; 0 indicates not deleted and 1 indicates deleted), and resourceRegionAndZone (region and availability zone).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Queried field values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ListAggregateConfigRuleEvaluationResults request structure.
 * @class
 */
class ListAggregateConfigRuleEvaluationResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * <p>Offset.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Current page.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Type.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * <p>Evaluation result. Valid values: COMPLIANT and NON_COMPLIANT.</p>
         * @type {Array.<string> || null}
         */
        this.ComplianceType = null;

        /**
         * <p>Resource owner ID.</p>
         * @type {number || null}
         */
        this.ResourceOwnerId = null;

        /**
         * <p>Filtered resource owner UIN collection.</p>
         * @type {Array.<number> || null}
         */
        this.ResourceOwnerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ComplianceType = 'ComplianceType' in params ? params.ComplianceType : null;
        this.ResourceOwnerId = 'ResourceOwnerId' in params ? params.ResourceOwnerId : null;
        this.ResourceOwnerIds = 'ResourceOwnerIds' in params ? params.ResourceOwnerIds : null;

    }
}

/**
 * UpdateCompliancePackStatus request structure.
 * @class
 */
class UpdateCompliancePackStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * <p>ACTIVE: Enable<br>UN_ACTIVE: Disabled</p>
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteAggregateConfigRule request structure.
 * @class
 */
class DeleteAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * DeleteCompliancePack response structure.
 * @class
 */
class DeleteCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * CreateRemediation response structure.
 * @class
 */
class CreateRemediationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Remediation setting ID.</p>
         * @type {string || null}
         */
        this.RemediationId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RemediationId = 'RemediationId' in params ? params.RemediationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAggregateConfigDeliver response structure.
 * @class
 */
class UpdateAggregateConfigDeliverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * UpdateAggregateCompliancePack response structure.
 * @class
 */
class UpdateAggregateCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * System compliance package rules on the operation side.
 * @class
 */
class CompliancePackRuleForManage extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Unique rule ID.</p>
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * <p>rule name</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>Description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Risk level.</p><p>Valid values: 1 (high risk), 2 (medium risk), and 3 (low risk).</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Compliance package rules.</p>
         * @type {Array.<CompliancePackRules> || null}
         */
        this.CompliancePackRules = null;

        /**
         * <p>Rule number information.</p>
         * @type {Array.<Control> || null}
         */
        this.Control = null;

        /**
         * <p>Resource type.</p>
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.CompliancePackRules) {
            this.CompliancePackRules = new Array();
            for (let z in params.CompliancePackRules) {
                let obj = new CompliancePackRules();
                obj.deserialize(params.CompliancePackRules[z]);
                this.CompliancePackRules.push(obj);
            }
        }

        if (params.Control) {
            this.Control = new Array();
            for (let z in params.Control) {
                let obj = new Control();
                obj.deserialize(params.Control[z]);
                this.Control.push(obj);
            }
        }
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;

    }
}

/**
 * ListConfigRuleResourceEvaluationResults response structure.
 * @class
 */
class ListConfigRuleResourceEvaluationResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Configuration rule resource assessment result list.</p>
         * @type {Array.<ConfigRuleResourceEvaluationResult> || null}
         */
        this.Items = null;

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigRuleResourceEvaluationResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAggregateCompliancePack request structure.
 * @class
 */
class DeleteAggregateCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

    }
}

/**
 * ListSystemRules request structure.
 * @class
 */
class ListSystemRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quantity per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Current Page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Search keywords. Searches by ID, name, tag, or description are supported.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

    }
}

/**
 * Resource list information
 * @class
 */
class AggregateResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource status.
         * @type {string || null}
         */
        this.ResourceStatus = null;

        /**
         * Deletion status. Valid values: 1 (deleted) and 0 (not deleted).
         * @type {number || null}
         */
        this.ResourceDelete = null;

        /**
         * Resource creation time
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Tag information.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * AZ.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Compliance status
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * Resource owner ID.
         * @type {number || null}
         */
        this.ResourceOwnerId = null;

        /**
         * User Nickname
         * @type {string || null}
         */
        this.ResourceOwnerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceStatus = 'ResourceStatus' in params ? params.ResourceStatus : null;
        this.ResourceDelete = 'ResourceDelete' in params ? params.ResourceDelete : null;
        this.ResourceCreateTime = 'ResourceCreateTime' in params ? params.ResourceCreateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ResourceZone = 'ResourceZone' in params ? params.ResourceZone : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.ResourceOwnerId = 'ResourceOwnerId' in params ? params.ResourceOwnerId : null;
        this.ResourceOwnerName = 'ResourceOwnerName' in params ? params.ResourceOwnerName : null;

    }
}

/**
 * DescribeAggregator response structure.
 * @class
 */
class DescribeAggregatorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Account group description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Account group type.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Member information.</p>
         * @type {Array.<AggregatorAccount> || null}
         */
        this.AggregatorAccounts = null;

        /**
         * <p>Creation status.</p>
         * @type {number || null}
         */
        this.AggregatorStatus = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.AggregatorAccounts) {
            this.AggregatorAccounts = new Array();
            for (let z in params.AggregatorAccounts) {
                let obj = new AggregatorAccount();
                obj.deserialize(params.AggregatorAccounts[z]);
                this.AggregatorAccounts.push(obj);
            }
        }
        this.AggregatorStatus = 'AggregatorStatus' in params ? params.AggregatorStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddAlarmPolicy response structure.
 * @class
 */
class AddAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Unique id of the alarm policy</p>
         * @type {number || null}
         */
        this.AlarmPolicyId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.AlarmPolicyId = 'AlarmPolicyId' in params ? params.AlarmPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Assessment result.
 * @class
 */
class EvaluationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.ConfigRuleName = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Assessment result.
         * @type {Annotation || null}
         */
        this.Annotation = null;

        /**
         * Compliance type.
         * @type {string || null}
         */
        this.ComplianceType = null;

        /**
         * Rule initiation type.
         * @type {string || null}
         */
        this.InvokingEventMessageType = null;

        /**
         * Evaluation initiation time.
         * @type {string || null}
         */
        this.ConfigRuleInvokedTime = null;

        /**
         * Actual evaluation time.
         * @type {string || null}
         */
        this.ResultRecordedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.ConfigRuleName = 'ConfigRuleName' in params ? params.ConfigRuleName : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.Annotation) {
            let obj = new Annotation();
            obj.deserialize(params.Annotation)
            this.Annotation = obj;
        }
        this.ComplianceType = 'ComplianceType' in params ? params.ComplianceType : null;
        this.InvokingEventMessageType = 'InvokingEventMessageType' in params ? params.InvokingEventMessageType : null;
        this.ConfigRuleInvokedTime = 'ConfigRuleInvokedTime' in params ? params.ConfigRuleInvokedTime : null;
        this.ResultRecordedTime = 'ResultRecordedTime' in params ? params.ResultRecordedTime : null;

    }
}

/**
 * User compliance package information.
 * @class
 */
class ConfigCompliancePack extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package status</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * <p>Description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Compliance package name.</p>
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * <p>Risk level.</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Evaluation results.</p>
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Non-compliant rule name</p>
         * @type {Array.<string> || null}
         */
        this.NoCompliantNames = null;

        /**
         * <p>Number of compliance package rules</p>
         * @type {number || null}
         */
        this.RuleCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.NoCompliantNames = 'NoCompliantNames' in params ? params.NoCompliantNames : null;
        this.RuleCount = 'RuleCount' in params ? params.RuleCount : null;

    }
}

/**
 * DescribeAggregateConfigRule response structure.
 * @class
 */
class DescribeAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule details
         * @type {ConfigRule || null}
         */
        this.ConfigRule = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.ConfigRule) {
            let obj = new ConfigRule();
            obj.deserialize(params.ConfigRule)
            this.ConfigRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartAggregateConfigRuleEvaluation request structure.
 * @class
 */
class StartAggregateConfigRuleEvaluationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: MANUAL (manual triggering) and SCHEDULE (periodic triggering).
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * ListRemediationExecutions request structure.
 * @class
 */
class ListRemediationExecutionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Number of items per page. Default value: 20; value range: 1–200.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Remediation status. Valid values: 1 (running), 2 (successful), and 3 (failed).
         * @type {number || null}
         */
        this.ExecutionStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ExecutionStatus = 'ExecutionStatus' in params ? params.ExecutionStatus : null;

    }
}

/**
 * DeleteAggregators response structure.
 * @class
 */
class DeleteAggregatorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Compliance package rule information.
 * @class
 */
class CompliancePackRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>rule name</p>
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * <p>Risk level.</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Input parameters.</p>
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * <p>Rule ID</p>
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * <p>Description.</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>Preset rule identifier</p>
         * @type {string || null}
         */
        this.ManagedRuleIdentifier = null;

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ManagedRuleIdentifier = 'ManagedRuleIdentifier' in params ? params.ManagedRuleIdentifier : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * DescribeDiscoveredResource request structure.
 * @class
 */
class DescribeDiscoveredResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;

    }
}

/**
 * ListRemediationExecutions response structure.
 * @class
 */
class ListRemediationExecutionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Correction record.
         * @type {Array.<RemediationExecutions> || null}
         */
        this.RemediationExecutions = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RemediationExecutions) {
            this.RemediationExecutions = new Array();
            for (let z in params.RemediationExecutions) {
                let obj = new RemediationExecutions();
                obj.deserialize(params.RemediationExecutions[z]);
                this.RemediationExecutions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseConfigRecorder response structure.
 * @class
 */
class CloseConfigRecorderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeConfigRecorder request structure.
 * @class
 */
class DescribeConfigRecorderRequest extends  AbstractModel {
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
 * StartConfigRuleEvaluation request structure.
 * @class
 */
class StartConfigRuleEvaluationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * DescribeConfigRule request structure.
 * @class
 */
class DescribeConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * UpdateConfigDeliver request structure.
 * @class
 */
class UpdateConfigDeliverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: 0 (disabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Delivery service name
         * @type {string || null}
         */
        this.DeliverName = null;

        /**
         * Six-segment resource format  
COS:qcs::cos:$region:$account:prefix/$appid/$BucketName
CLS:
qcs::cls:$region:$account:cls/topicId
         * @type {string || null}
         */
        this.TargetArn = null;

        /**
         * clonfig_fix
         * @type {string || null}
         */
        this.DeliverPrefix = null;

        /**
         * Delivery Type
         * @type {string || null}
         */
        this.DeliverType = null;

        /**
         * Valid values: 1 (configuration changes), 2 (resource list), and 3 (all).
         * @type {number || null}
         */
        this.DeliverContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DeliverName = 'DeliverName' in params ? params.DeliverName : null;
        this.TargetArn = 'TargetArn' in params ? params.TargetArn : null;
        this.DeliverPrefix = 'DeliverPrefix' in params ? params.DeliverPrefix : null;
        this.DeliverType = 'DeliverType' in params ? params.DeliverType : null;
        this.DeliverContentType = 'DeliverContentType' in params ? params.DeliverContentType : null;

    }
}

/**
 * ListDiscoveredResources request structure.
 * @class
 */
class ListDiscoveredResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of results displayed per page</p>
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * <p>resourceName: resource name  resourceId: resource ID</p>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * <p>Next page token</p>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Sorting method: asc, desc</p>
         * @type {string || null}
         */
        this.OrderType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * AddAlarmPolicy request structure.
 * @class
 */
class AddAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Alarm policy name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Event type 1: Resource non-compliance event.</p>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * <p>Event range. Valid values: 1 (current account) and 2 (multi-account).</p>
         * @type {Array.<number> || null}
         */
        this.EventScope = null;

        /**
         * <p>Risk level. 1: high-risk 2: medium-risk 3: low risk</p>
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Notification period</p>
         * @type {string || null}
         */
        this.NoticeTime = null;

        /**
         * <p>Notification mechanism</p>
         * @type {string || null}
         */
        this.NotificationMechanism = null;

        /**
         * <p>Status. Valid values: 1 (enabled) and 2 (disabled).</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Notification cycle</p>
         * @type {Array.<number> || null}
         */
        this.NoticePeriod = null;

        /**
         * <p>Policy description</p>
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EventScope = 'EventScope' in params ? params.EventScope : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.NoticeTime = 'NoticeTime' in params ? params.NoticeTime : null;
        this.NotificationMechanism = 'NotificationMechanism' in params ? params.NotificationMechanism : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NoticePeriod = 'NoticePeriod' in params ? params.NoticePeriod : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Rule details
 * @class
 */
class ConfigRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * Rule Name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule parameters
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * Rule trigger condition.
         * @type {Array.<SourceConditionForManage> || null}
         */
        this.SourceCondition = null;

        /**
         * Resource types supported by the rule. The rule applies only to resources of the specified resource types.
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * Rule tags.
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * Rule risk level.
1: Low risk
2: Medium-risk
3: High-risk
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Function corresponding to the rule.
         * @type {string || null}
         */
        this.ServiceFunction = null;

        /**
         * Creation time.
Format: YYYY-MM-DD h:i:s
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ACTIVE: enable
NO_ACTIVE: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Compliant: 'COMPLIANT'
Non-compliance: 'NON_COMPLIANT'
Unable to apply rule: 'NOT_APPLICABLE'
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * ["",""]
         * @type {Annotation || null}
         */
        this.Annotation = null;

        /**
         * Rule evaluation time
Format: YYYY-MM-DD h:i:s

         * @type {string || null}
         */
        this.ConfigRuleInvokedTime = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * CUSTOMIZE: custom rule
SYSTEM: managed rule
         * @type {string || null}
         */
        this.IdentifierType = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Trigger Type
ScheduledNotification: periodic trigger.
ConfigurationItemChangeNotification: Triggered by a change
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * Parameter details
         * @type {Array.<InputParameterForManage> || null}
         */
        this.ManageInputParameter = null;

        /**
         * Compliance package name
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Associated regions.
         * @type {Array.<string> || null}
         */
        this.RegionsScope = null;

        /**
         * Associated tag
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         *  The rule is invalid for the specified resource ID, meaning that evaluation will not be performed on this resource.
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group name.
         * @type {string || null}
         */
        this.AccountGroupName = null;

        /**
         * Rule owner user ID.
         * @type {number || null}
         */
        this.RuleOwnerId = null;

        /**
         * Trigger methods supported by preset rules.
ScheduledNotification: periodic trigger
ConfigurationItemChangeNotification: Triggered by a change
         * @type {Array.<string> || null}
         */
        this.ManageTriggerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }

        if (params.SourceCondition) {
            this.SourceCondition = new Array();
            for (let z in params.SourceCondition) {
                let obj = new SourceConditionForManage();
                obj.deserialize(params.SourceCondition[z]);
                this.SourceCondition.push(obj);
            }
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.ServiceFunction = 'ServiceFunction' in params ? params.ServiceFunction : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ComplianceResult = 'ComplianceResult' in params ? params.ComplianceResult : null;

        if (params.Annotation) {
            let obj = new Annotation();
            obj.deserialize(params.Annotation)
            this.Annotation = obj;
        }
        this.ConfigRuleInvokedTime = 'ConfigRuleInvokedTime' in params ? params.ConfigRuleInvokedTime : null;
        this.ConfigRuleId = 'ConfigRuleId' in params ? params.ConfigRuleId : null;
        this.IdentifierType = 'IdentifierType' in params ? params.IdentifierType : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

        if (params.TriggerType) {
            this.TriggerType = new Array();
            for (let z in params.TriggerType) {
                let obj = new TriggerType();
                obj.deserialize(params.TriggerType[z]);
                this.TriggerType.push(obj);
            }
        }

        if (params.ManageInputParameter) {
            this.ManageInputParameter = new Array();
            for (let z in params.ManageInputParameter) {
                let obj = new InputParameterForManage();
                obj.deserialize(params.ManageInputParameter[z]);
                this.ManageInputParameter.push(obj);
            }
        }
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.RegionsScope = 'RegionsScope' in params ? params.RegionsScope : null;

        if (params.TagsScope) {
            this.TagsScope = new Array();
            for (let z in params.TagsScope) {
                let obj = new Tag();
                obj.deserialize(params.TagsScope[z]);
                this.TagsScope.push(obj);
            }
        }
        this.ExcludeResourceIdsScope = 'ExcludeResourceIdsScope' in params ? params.ExcludeResourceIdsScope : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.AccountGroupName = 'AccountGroupName' in params ? params.AccountGroupName : null;
        this.RuleOwnerId = 'RuleOwnerId' in params ? params.RuleOwnerId : null;
        this.ManageTriggerType = 'ManageTriggerType' in params ? params.ManageTriggerType : null;

    }
}

/**
 * Tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * ListResourceTypes request structure.
 * @class
 */
class ListResourceTypesRequest extends  AbstractModel {
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
 * UpdateConfigRecorder request structure.
 * @class
 */
class UpdateConfigRecorderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type list.
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;

    }
}

/**
 * UpdateCompliancePack response structure.
 * @class
 */
class UpdateCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ListAggregateConfigRules response structure.
 * @class
 */
class ListAggregateConfigRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Details.</p>
         * @type {Array.<ConfigRule> || null}
         */
        this.Items = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartRemediation response structure.
 * @class
 */
class StartRemediationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DeleteAggregateCompliancePack response structure.
 * @class
 */
class DeleteAggregateCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeCompliancePack response structure.
 * @class
 */
class DescribeCompliancePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance package name.
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Risk level
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Compliance package rules.
         * @type {Array.<ComplianceConfigRule> || null}
         */
        this.ConfigRules = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Compliance package status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CompliancePackName = 'CompliancePackName' in params ? params.CompliancePackName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.ConfigRules) {
            this.ConfigRules = new Array();
            for (let z in params.ConfigRules) {
                let obj = new ComplianceConfigRule();
                obj.deserialize(params.ConfigRules[z]);
                this.ConfigRules.push(obj);
            }
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAggregateCompliancePack request structure.
 * @class
 */
class DescribeAggregateCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Compliance package ID.
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * OpenConfigRule request structure.
 * @class
 */
class OpenConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rule ID.</p>
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * StartRemediation request structure.
 * @class
 */
class StartRemediationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CloseConfigRule response structure.
 * @class
 */
class CloseConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Configuration rule resource evaluation result.
 * @class
 */
class ConfigRuleResourceEvaluationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule ID.
         * @type {string || null}
         */
        this.RuleIdentifier = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.RuleDescription = null;

        /**
         * Account to which the rule belongs.
         * @type {number || null}
         */
        this.RuleOwnerId = null;

        /**
         * Rule risk level.
         * @type {number || null}
         */
        this.RuleRiskLevel = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource region
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource tag
         * @type {Array.<Tag> || null}
         */
        this.ResourceTags = null;

        /**
         * Compliance details
         * @type {Annotation || null}
         */
        this.Annotation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleIdentifier = 'RuleIdentifier' in params ? params.RuleIdentifier : null;
        this.RuleDescription = 'RuleDescription' in params ? params.RuleDescription : null;
        this.RuleOwnerId = 'RuleOwnerId' in params ? params.RuleOwnerId : null;
        this.RuleRiskLevel = 'RuleRiskLevel' in params ? params.RuleRiskLevel : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new Tag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

        if (params.Annotation) {
            let obj = new Annotation();
            obj.deserialize(params.Annotation)
            this.Annotation = obj;
        }

    }
}

/**
 * DescribeSystemRule response structure.
 * @class
 */
class DescribeSystemRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details.
         * @type {SystemConfigRule || null}
         */
        this.SystemConfigRule = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.SystemConfigRule) {
            let obj = new SystemConfigRule();
            obj.deserialize(params.SystemConfigRule)
            this.SystemConfigRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Structure of a single alarm policy record.
 * @class
 */
class AlarmPolicyRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique alarm policy ID.
         * @type {number || null}
         */
        this.AlarmPolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Event type
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Valid values: 1 (current account) and 2 (multi-account).
         * @type {Array.<number> || null}
         */
        this.EventScope = null;

        /**
         * Valid values: 1 (high risk), 2 (medium risk), and 3 (low risk).
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * Notification cycle. Value range: 1 to 7, representing Monday to Sunday respectively.
         * @type {Array.<number> || null}
         */
        this.NoticePeriod = null;

        /**
         * Notification period
         * @type {string || null}
         */
        this.NoticeTime = null;

        /**
         * Notification mechanism
         * @type {string || null}
         */
        this.NotificationMechanism = null;

        /**
         * Policy status. Valid values: 1 (enabled) and 2 (disabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Policy description
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
        this.AlarmPolicyId = 'AlarmPolicyId' in params ? params.AlarmPolicyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EventScope = 'EventScope' in params ? params.EventScope : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.NoticePeriod = 'NoticePeriod' in params ? params.NoticePeriod : null;
        this.NoticeTime = 'NoticeTime' in params ? params.NoticeTime : null;
        this.NotificationMechanism = 'NotificationMechanism' in params ? params.NotificationMechanism : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * UpdateAggregateConfigRule request structure.
 * @class
 */
class UpdateAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger types. A maximum of two types are supported.
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * Risk level
1: High-risk.
2: Medium-risk.
3: Low risk.
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Input parameters
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Associated regions.
         * @type {Array.<string> || null}
         */
        this.RegionScope = null;

        /**
         * Associated tag
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         * Excluded resource ID.
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TriggerType) {
            this.TriggerType = new Array();
            for (let z in params.TriggerType) {
                let obj = new TriggerType();
                obj.deserialize(params.TriggerType[z]);
                this.TriggerType.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionScope = 'RegionScope' in params ? params.RegionScope : null;

        if (params.TagsScope) {
            this.TagsScope = new Array();
            for (let z in params.TagsScope) {
                let obj = new Tag();
                obj.deserialize(params.TagsScope[z]);
                this.TagsScope.push(obj);
            }
        }
        this.ExcludeResourceIdsScope = 'ExcludeResourceIdsScope' in params ? params.ExcludeResourceIdsScope : null;

    }
}

/**
 * OpenConfigRecorder request structure.
 * @class
 */
class OpenConfigRecorderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>1: Call from the control center</p>
         * @type {number || null}
         */
        this.FromMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromMode = 'FromMode' in params ? params.FromMode : null;

    }
}

/**
 * DeleteAlarmPolicy response structure.
 * @class
 */
class DeleteAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * AddAggregateConfigRule request structure.
 * @class
 */
class AddAggregateConfigRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule template ID. The preset rule template is Identifier, and the custom rule is the serverless cloud function ARN (region:functionName).
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * Rule template type. Valid values: SYSTEM and CUSTOMIZE.
         * @type {string || null}
         */
        this.IdentifierType = null;

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Resources supported by the rule.
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * Trigger types. A maximum of two types are supported.
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * Risk level
1: High-risk.
2: Medium-risk.
3: Low risk.
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Input parameters
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Associated regions.
         * @type {Array.<string> || null}
         */
        this.RegionScope = null;

        /**
         * Associated tag
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         * Excluded resource ID.
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Identifier = 'Identifier' in params ? params.Identifier : null;
        this.IdentifierType = 'IdentifierType' in params ? params.IdentifierType : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.TriggerType) {
            this.TriggerType = new Array();
            for (let z in params.TriggerType) {
                let obj = new TriggerType();
                obj.deserialize(params.TriggerType[z]);
                this.TriggerType.push(obj);
            }
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;

        if (params.InputParameter) {
            this.InputParameter = new Array();
            for (let z in params.InputParameter) {
                let obj = new InputParameter();
                obj.deserialize(params.InputParameter[z]);
                this.InputParameter.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionScope = 'RegionScope' in params ? params.RegionScope : null;

        if (params.TagsScope) {
            this.TagsScope = new Array();
            for (let z in params.TagsScope) {
                let obj = new Tag();
                obj.deserialize(params.TagsScope[z]);
                this.TagsScope.push(obj);
            }
        }
        this.ExcludeResourceIdsScope = 'ExcludeResourceIdsScope' in params ? params.ExcludeResourceIdsScope : null;

    }
}

/**
 * DeleteCompliancePack request structure.
 * @class
 */
class DeleteCompliancePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Compliance package ID.</p>
         * @type {string || null}
         */
        this.CompliancePackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompliancePackId = 'CompliancePackId' in params ? params.CompliancePackId : null;

    }
}

/**
 * StartConfigRuleEvaluation response structure.
 * @class
 */
class StartConfigRuleEvaluationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ListAggregateDiscoveredResources response structure.
 * @class
 */
class ListAggregateDiscoveredResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Details.</p>
         * @type {Array.<AggregateResourceInfo> || null}
         */
        this.Items = null;

        /**
         * <p>Next page.</p>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AggregateResourceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAggregateConfigRule response structure.
 * @class
 */
class UpdateAggregateConfigRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Parameter value
 * @class
 */
class InputParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParameterKey = null;

        /**
         * Parameter type. Required type: Require, optional type: Optional.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Parameter value.
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
        this.ParameterKey = 'ParameterKey' in params ? params.ParameterKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ListRemediations response structure.
 * @class
 */
class ListRemediationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Remediation settings
         * @type {Array.<Remediation> || null}
         */
        this.Remediations = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Remediations) {
            this.Remediations = new Array();
            for (let z in params.Remediations) {
                let obj = new Remediation();
                obj.deserialize(params.Remediations[z]);
                this.Remediations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAggregators request structure.
 * @class
 */
class DeleteAggregatorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account group ID.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group creator ID.
         * @type {number || null}
         */
        this.OwnerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * ListAggregateConfigRuleResourceEvaluationResults request structure.
 * @class
 */
class ListAggregateConfigRuleResourceEvaluationResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Account group ID.</p>
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * <p>Number of returned results. Maximum value: 1000. If not specified, all results are returned.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset. Default value: 0.</p>
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountGroupId = 'AccountGroupId' in params ? params.AccountGroupId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteRemediations request structure.
 * @class
 */
class DeleteRemediationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remediation setting ID.
         * @type {Array.<string> || null}
         */
        this.RemediationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RemediationIds = 'RemediationIds' in params ? params.RemediationIds : null;

    }
}

module.exports = {
    ResourceListInfo: ResourceListInfo,
    ListAggregateDiscoveredResourcesRequest: ListAggregateDiscoveredResourcesRequest,
    AddAggregateCompliancePackResponse: AddAggregateCompliancePackResponse,
    CloseAggregateConfigRuleResponse: CloseAggregateConfigRuleResponse,
    AddCompliancePackRequest: AddCompliancePackRequest,
    ListRemediationsRequest: ListRemediationsRequest,
    DescribeAggregatorRequest: DescribeAggregatorRequest,
    PutEvaluationsResponse: PutEvaluationsResponse,
    UpdateAggregatorResponse: UpdateAggregatorResponse,
    OpenAggregateConfigRuleResponse: OpenAggregateConfigRuleResponse,
    AddAggregateCompliancePackRequest: AddAggregateCompliancePackRequest,
    DescribeAggregateCompliancePackResponse: DescribeAggregateCompliancePackResponse,
    StartAggregateConfigRuleEvaluationResponse: StartAggregateConfigRuleEvaluationResponse,
    CloseConfigRecorderRequest: CloseConfigRecorderRequest,
    DescribeSystemRuleRequest: DescribeSystemRuleRequest,
    ListConfigRulesResponse: ListConfigRulesResponse,
    SystemCompliancePack: SystemCompliancePack,
    DeleteConfigRuleResponse: DeleteConfigRuleResponse,
    Annotation: Annotation,
    UpdateRemediationResponse: UpdateRemediationResponse,
    ListSystemRulesResponse: ListSystemRulesResponse,
    CreateAggregatorResponse: CreateAggregatorResponse,
    DeleteAlarmPolicyRequest: DeleteAlarmPolicyRequest,
    ListAggregateCompliancePacksResponse: ListAggregateCompliancePacksResponse,
    ListSystemCompliancePacksResponse: ListSystemCompliancePacksResponse,
    Remediation: Remediation,
    ListAggregateConfigRuleEvaluationResultsResponse: ListAggregateConfigRuleEvaluationResultsResponse,
    CloseAggregateConfigRuleRequest: CloseAggregateConfigRuleRequest,
    DescribeAggregateDiscoveredResourceResponse: DescribeAggregateDiscoveredResourceResponse,
    AggregatorAccount: AggregatorAccount,
    InputParameterForManage: InputParameterForManage,
    ListConfigRulesRequest: ListConfigRulesRequest,
    DescribeAggregateConfigRuleRequest: DescribeAggregateConfigRuleRequest,
    Control: Control,
    ListAggregateConfigRulesRequest: ListAggregateConfigRulesRequest,
    ListConfigRuleEvaluationResultsResponse: ListConfigRuleEvaluationResultsResponse,
    UpdateAlarmPolicyResponse: UpdateAlarmPolicyResponse,
    DescribeCompliancePackRequest: DescribeCompliancePackRequest,
    ListDiscoveredResourcesResponse: ListDiscoveredResourcesResponse,
    ListConfigRuleResourceEvaluationResultsRequest: ListConfigRuleResourceEvaluationResultsRequest,
    UpdateAggregateCompliancePackStatusResponse: UpdateAggregateCompliancePackStatusResponse,
    Aggregator: Aggregator,
    DescribeAggregateConfigDeliverResponse: DescribeAggregateConfigDeliverResponse,
    OpenConfigRecorderResponse: OpenConfigRecorderResponse,
    UpdateConfigDeliverResponse: UpdateConfigDeliverResponse,
    DescribeConfigRuleResponse: DescribeConfigRuleResponse,
    UpdateCompliancePackRequest: UpdateCompliancePackRequest,
    ListCompliancePacksRequest: ListCompliancePacksRequest,
    UpdateCompliancePackStatusResponse: UpdateCompliancePackStatusResponse,
    UpdateAggregateCompliancePackStatusRequest: UpdateAggregateCompliancePackStatusRequest,
    ListAggregateConfigRuleResourceEvaluationResultsResponse: ListAggregateConfigRuleResourceEvaluationResultsResponse,
    UpdateConfigRecorderResponse: UpdateConfigRecorderResponse,
    ListAlarmPolicyRequest: ListAlarmPolicyRequest,
    DescribeSystemCompliancePackResponse: DescribeSystemCompliancePackResponse,
    CompliancePackRules: CompliancePackRules,
    ComplianceConfigRule: ComplianceConfigRule,
    OpenAggregateConfigRuleRequest: OpenAggregateConfigRuleRequest,
    ListSystemCompliancePacksRequest: ListSystemCompliancePacksRequest,
    ListAlarmPolicyResponse: ListAlarmPolicyResponse,
    ListAggregatorsResponse: ListAggregatorsResponse,
    ListConfigRuleEvaluationResultsRequest: ListConfigRuleEvaluationResultsRequest,
    DeleteAggregateConfigRuleResponse: DeleteAggregateConfigRuleResponse,
    CreateAggregatorRequest: CreateAggregatorRequest,
    DescribeConfigRecorderResponse: DescribeConfigRecorderResponse,
    UpdateAggregateCompliancePackRequest: UpdateAggregateCompliancePackRequest,
    CreateRemediationRequest: CreateRemediationRequest,
    AddCompliancePackResponse: AddCompliancePackResponse,
    TriggerType: TriggerType,
    ConfigResource: ConfigResource,
    DescribeAggregateConfigDeliverRequest: DescribeAggregateConfigDeliverRequest,
    ListAggregatorsRequest: ListAggregatorsRequest,
    UpdateAggregateConfigDeliverRequest: UpdateAggregateConfigDeliverRequest,
    PutEvaluationsRequest: PutEvaluationsRequest,
    UpdateConfigRuleRequest: UpdateConfigRuleRequest,
    UserConfigResource: UserConfigResource,
    DetachConfigRuleToCompliancePackRequest: DetachConfigRuleToCompliancePackRequest,
    UpdateRemediationRequest: UpdateRemediationRequest,
    AggregateEvaluationResult: AggregateEvaluationResult,
    SystemConfigRule: SystemConfigRule,
    DetachAggregateConfigRuleToCompliancePackResponse: DetachAggregateConfigRuleToCompliancePackResponse,
    DescribeAggregateDiscoveredResourceRequest: DescribeAggregateDiscoveredResourceRequest,
    AddConfigRuleResponse: AddConfigRuleResponse,
    SourceConditionForManage: SourceConditionForManage,
    AddConfigRuleRequest: AddConfigRuleRequest,
    ListCompliancePacksResponse: ListCompliancePacksResponse,
    DescribeConfigDeliverResponse: DescribeConfigDeliverResponse,
    DetachConfigRuleToCompliancePackResponse: DetachConfigRuleToCompliancePackResponse,
    UpdateAlarmPolicyRequest: UpdateAlarmPolicyRequest,
    CloseConfigRuleRequest: CloseConfigRuleRequest,
    DescribeSystemCompliancePackRequest: DescribeSystemCompliancePackRequest,
    Evaluation: Evaluation,
    AddAggregateConfigRuleResponse: AddAggregateConfigRuleResponse,
    OpenConfigRuleResponse: OpenConfigRuleResponse,
    DescribeDiscoveredResourceResponse: DescribeDiscoveredResourceResponse,
    RemediationExecutions: RemediationExecutions,
    DescribeConfigDeliverRequest: DescribeConfigDeliverRequest,
    UpdateConfigRuleResponse: UpdateConfigRuleResponse,
    DetachAggregateConfigRuleToCompliancePackRequest: DetachAggregateConfigRuleToCompliancePackRequest,
    ListAggregateCompliancePacksRequest: ListAggregateCompliancePacksRequest,
    ListResourceTypesResponse: ListResourceTypesResponse,
    DeleteRemediationsResponse: DeleteRemediationsResponse,
    UpdateAggregatorRequest: UpdateAggregatorRequest,
    DeleteConfigRuleRequest: DeleteConfigRuleRequest,
    Filter: Filter,
    ListAggregateConfigRuleEvaluationResultsRequest: ListAggregateConfigRuleEvaluationResultsRequest,
    UpdateCompliancePackStatusRequest: UpdateCompliancePackStatusRequest,
    DeleteAggregateConfigRuleRequest: DeleteAggregateConfigRuleRequest,
    DeleteCompliancePackResponse: DeleteCompliancePackResponse,
    CreateRemediationResponse: CreateRemediationResponse,
    UpdateAggregateConfigDeliverResponse: UpdateAggregateConfigDeliverResponse,
    UpdateAggregateCompliancePackResponse: UpdateAggregateCompliancePackResponse,
    CompliancePackRuleForManage: CompliancePackRuleForManage,
    ListConfigRuleResourceEvaluationResultsResponse: ListConfigRuleResourceEvaluationResultsResponse,
    DeleteAggregateCompliancePackRequest: DeleteAggregateCompliancePackRequest,
    ListSystemRulesRequest: ListSystemRulesRequest,
    AggregateResourceInfo: AggregateResourceInfo,
    DescribeAggregatorResponse: DescribeAggregatorResponse,
    AddAlarmPolicyResponse: AddAlarmPolicyResponse,
    EvaluationResult: EvaluationResult,
    ConfigCompliancePack: ConfigCompliancePack,
    DescribeAggregateConfigRuleResponse: DescribeAggregateConfigRuleResponse,
    StartAggregateConfigRuleEvaluationRequest: StartAggregateConfigRuleEvaluationRequest,
    ListRemediationExecutionsRequest: ListRemediationExecutionsRequest,
    DeleteAggregatorsResponse: DeleteAggregatorsResponse,
    CompliancePackRule: CompliancePackRule,
    DescribeDiscoveredResourceRequest: DescribeDiscoveredResourceRequest,
    ListRemediationExecutionsResponse: ListRemediationExecutionsResponse,
    CloseConfigRecorderResponse: CloseConfigRecorderResponse,
    DescribeConfigRecorderRequest: DescribeConfigRecorderRequest,
    StartConfigRuleEvaluationRequest: StartConfigRuleEvaluationRequest,
    DescribeConfigRuleRequest: DescribeConfigRuleRequest,
    UpdateConfigDeliverRequest: UpdateConfigDeliverRequest,
    ListDiscoveredResourcesRequest: ListDiscoveredResourcesRequest,
    AddAlarmPolicyRequest: AddAlarmPolicyRequest,
    ConfigRule: ConfigRule,
    Tag: Tag,
    ListResourceTypesRequest: ListResourceTypesRequest,
    UpdateConfigRecorderRequest: UpdateConfigRecorderRequest,
    UpdateCompliancePackResponse: UpdateCompliancePackResponse,
    ListAggregateConfigRulesResponse: ListAggregateConfigRulesResponse,
    StartRemediationResponse: StartRemediationResponse,
    DeleteAggregateCompliancePackResponse: DeleteAggregateCompliancePackResponse,
    DescribeCompliancePackResponse: DescribeCompliancePackResponse,
    DescribeAggregateCompliancePackRequest: DescribeAggregateCompliancePackRequest,
    OpenConfigRuleRequest: OpenConfigRuleRequest,
    StartRemediationRequest: StartRemediationRequest,
    CloseConfigRuleResponse: CloseConfigRuleResponse,
    ConfigRuleResourceEvaluationResult: ConfigRuleResourceEvaluationResult,
    DescribeSystemRuleResponse: DescribeSystemRuleResponse,
    AlarmPolicyRsp: AlarmPolicyRsp,
    UpdateAggregateConfigRuleRequest: UpdateAggregateConfigRuleRequest,
    OpenConfigRecorderRequest: OpenConfigRecorderRequest,
    DeleteAlarmPolicyResponse: DeleteAlarmPolicyResponse,
    AddAggregateConfigRuleRequest: AddAggregateConfigRuleRequest,
    DeleteCompliancePackRequest: DeleteCompliancePackRequest,
    StartConfigRuleEvaluationResponse: StartConfigRuleEvaluationResponse,
    ListAggregateDiscoveredResourcesResponse: ListAggregateDiscoveredResourcesResponse,
    UpdateAggregateConfigRuleResponse: UpdateAggregateConfigRuleResponse,
    InputParameter: InputParameter,
    ListRemediationsResponse: ListRemediationsResponse,
    DeleteAggregatorsRequest: DeleteAggregatorsRequest,
    ListAggregateConfigRuleResourceEvaluationResultsRequest: ListAggregateConfigRuleResourceEvaluationResultsRequest,
    DeleteRemediationsRequest: DeleteRemediationsRequest,

}
