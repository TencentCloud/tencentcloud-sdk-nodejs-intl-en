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
 * Resource list information response parameters structure
 * @class
 */
class ResourceListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
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
         * Region

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource Status

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceStatus = null;

        /**
         * 1: Deleted. 2: Not deleted.
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.ResourceDelete = null;

        /**
         * Resource creation time

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Tag information

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Availability zone

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Compliance status.
Note: This field may return null, indicating that no valid value is found.
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
         * Items per Page
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Account group ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * resourceName: Resource name; resourceId: Resource ID; resourceType: Resource type
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <Tag>
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Next page token.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Sorting method asc, desc
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
 * Managing end rule conditions
 * @class
 */
class SourceConditionForManage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Condition is empty, Compliant: COMPLIANT, Non-compliant: NON_COMPLIANT, Not applicable: NOT_APPLICABLE.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.EmptyAs = null;

        /**
         * Configuration path

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.SelectPath = null;

        /**
         * Operators
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Required or not.

Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * Expected value
Note: This field may return null, indicating that no valid value is found.
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
 * ListAggregateConfigRules request structure.
 * @class
 */
class ListAggregateConfigRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the limit per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Account group ID
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Sort type, descending: desc, ascending: asc.
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * Risk level

1: High risk.
2: Medium risk.
3: Low risk.
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * Rule status
         * @type {string || null}
         */
        this.State = null;

        /**
         * Evaluation result
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * Name of the rule
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule ownership account ID
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
         * Resource type
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
 * Custom rule evaluation result
 * @class
 */
class Evaluation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Evaluated resource id. It can contain 0 to 256 characters.
         * @type {string || null}
         */
        this.ComplianceResourceId = null;

        /**
         * Evaluated resource type.
Supported:
QCS::CVM::Instance、 QCS::CBS::Disk、QCS::VPC::Vpc、QCS::VPC::Subnet、QCS::VPC::SecurityGroup、 QCS::CAM::User、QCS::CAM::Group、QCS::CAM::Policy、QCS::CAM::Role、QCS::COS::Bucket
         * @type {string || null}
         */
        this.ComplianceResourceType = null;

        /**
         * Evaluated resource region.
It can contain 0 to 32 characters.
         * @type {string || null}
         */
        this.ComplianceRegion = null;

        /**
         * Compliance type. Valid values:
COMPLIANT: Compliant,
NON_COMPLIANT: Non-compliant
         * @type {string || null}
         */
        this.ComplianceType = null;

        /**
         * Supplementary information for non-compliant resources.
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
 * DescribeDiscoveredResource response structure.
 * @class
 */
class DescribeDiscoveredResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource Name

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Resource region

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource availability zone
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Resource configuration

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Resource creation time

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Resource tag

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Resource update time
Note: This field may return null, indicating that no valid value is found.
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
 * Rule input parameters
 * @class
 */
class InputParameterForManage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value type. Integer: Integer, String: String.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Parameter key
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ParameterKey = null;

        /**
         * Parameter type. Required type: Required, Optional type: Optional.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Default value

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Description

Note: This field may return null, indicating that no valid value is found.
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
 * ListConfigRules response structure.
 * @class
 */
class ListConfigRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details
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
 * ListDiscoveredResources response structure.
 * @class
 */
class ListDiscoveredResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details
         * @type {Array.<ResourceListInfo> || null}
         */
        this.Items = null;

        /**
         * Next page
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.NextToken = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Items per Page
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * resourceName: Resource name resourceId: Resource ID
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Next page token.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Sorting method asc, desc
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
 * Compliance details
 * @class
 */
class Annotation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current actual configuration of the resource. It can contain 0 to 256 characters, which is the non-compliant configuration of the resource.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * Desired configuration of the resource. It can contain 0 to 256 characters, which is the compliant configuration of the resource.
Note: This field may return null, indicating that no valid value is found.
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
 * Rule details
 * @class
 */
class ConfigRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule identifier
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Identifier = null;

        /**
         * Name of the rule

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule parameters
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<InputParameter> || null}
         */
        this.InputParameter = null;

        /**
         * Rule trigger condition.

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<SourceConditionForManage> || null}
         */
        this.SourceCondition = null;

        /**
         * Resource types supported by rule. The rule only applies to specified resource types.
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.ResourceType = null;

        /**
         * Rule ownership tag
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * Rule risk level
1: Low risk
2: Medium risk
3: High risk
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * Function corresponding to rule
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ServiceFunction = null;

        /**
         * Creation time

Format: YYYY-MM-DD h:i:s
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule description

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ACTIVE: Enabled
NO_ACTIVE: Disabled
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Compliance: 'COMPLIANT'
'NON_COMPLIANT'
'NOT_APPLICABLE'
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * ["",""]
Note: This field may return null, indicating that no valid value is found.
         * @type {Annotation || null}
         */
        this.Annotation = null;

        /**
         * Rule evaluation time
Format: YYYY-MM-DD h:i:s

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ConfigRuleInvokedTime = null;

        /**
         * Rule ID

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ConfigRuleId = null;

        /**
         * CUSTOMIZE
Managed rule
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.IdentifierType = null;

        /**
         * Compliance package ID
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.CompliancePackId = null;

        /**
         * Trigger Type

Scheduled trigger
Triggered by configuration change
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<TriggerType> || null}
         */
        this.TriggerType = null;

        /**
         * Parameter details

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<InputParameterForManage> || null}
         */
        this.ManageInputParameter = null;

        /**
         * Rule name

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.CompliancePackName = null;

        /**
         * Associated region
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.RegionsScope = null;

        /**
         * Associate Tag

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<Tag> || null}
         */
        this.TagsScope = null;

        /**
         *  The rule is invalid for the specified resource ID, meaning it does not evaluate the resource.
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.ExcludeResourceIdsScope = null;

        /**
         * Account group ID

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.AccountGroupId = null;

        /**
         * Account group name
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.AccountGroupName = null;

        /**
         * Rule owner user ID
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.RuleOwnerId = null;

        /**
         * Trigger methods supported by preset rules
Scheduled trigger
Triggered by configuration change
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
         * Trigger time period
Note: This field may return null, indicating that no valid value is found.
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
 * PutEvaluations request structure.
 * @class
 */
class PutEvaluationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Callback token. Obtained from the ResultToken value in the Context of the selected Serverless Cloud Function (SCF) for the custom rule.
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
 * Resource list filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query field name Resource name: resourceName Resource ID: resourceId Resource type: resourceType Resource region: resourceRegion Deletion status: resourceDelete 0 not deleted, 1 deleted resourceregionandzone region/az
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the field to query
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
 * ListAggregateConfigRules response structure.
 * @class
 */
class ListAggregateConfigRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details
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
 * ListAggregateDiscoveredResources response structure.
 * @class
 */
class ListAggregateDiscoveredResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details.
         * @type {Array.<AggregateResourceInfo> || null}
         */
        this.Items = null;

        /**
         * next page
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.NextToken = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Page limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort type. Descending: desc, Ascending: asc.
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * Risk level

1: High risk.
2: Medium risk.
3: Low risk.
         * @type {Array.<number> || null}
         */
        this.RiskLevel = null;

        /**
         * Rule status
         * @type {string || null}
         */
        this.State = null;

        /**
         * Evaluation result
         * @type {Array.<string> || null}
         */
        this.ComplianceResult = null;

        /**
         * Name of the rule
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
 * Resource list information response parameters structure
 * @class
 */
class AggregateResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type
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
         * Region

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * Resource Status

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceStatus = null;

        /**
         * Whether to delete. 1: Deleted; 0: Not deleted.
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.ResourceDelete = null;

        /**
         * Resource creation time

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceCreateTime = null;

        /**
         * Tag information

Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Availability zone

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ResourceZone = null;

        /**
         * Compliance status
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ComplianceResult = null;

        /**
         * Resource owner uid
         * @type {number || null}
         */
        this.ResourceOwnerId = null;

        /**
         * User nickname
Note: This field may return null, indicating that no valid value is found.
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
 * Tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key

Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value

Note: This field may return null, indicating that no valid value is found.
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
         * Parameter value

Note: This field may return null, indicating that no valid value is found.
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

module.exports = {
    ResourceListInfo: ResourceListInfo,
    ListAggregateDiscoveredResourcesRequest: ListAggregateDiscoveredResourcesRequest,
    SourceConditionForManage: SourceConditionForManage,
    ListAggregateConfigRulesRequest: ListAggregateConfigRulesRequest,
    DescribeDiscoveredResourceRequest: DescribeDiscoveredResourceRequest,
    PutEvaluationsResponse: PutEvaluationsResponse,
    Evaluation: Evaluation,
    DescribeDiscoveredResourceResponse: DescribeDiscoveredResourceResponse,
    InputParameterForManage: InputParameterForManage,
    ListConfigRulesResponse: ListConfigRulesResponse,
    ListDiscoveredResourcesResponse: ListDiscoveredResourcesResponse,
    ListDiscoveredResourcesRequest: ListDiscoveredResourcesRequest,
    Annotation: Annotation,
    ConfigRule: ConfigRule,
    TriggerType: TriggerType,
    PutEvaluationsRequest: PutEvaluationsRequest,
    Filter: Filter,
    ListAggregateConfigRulesResponse: ListAggregateConfigRulesResponse,
    ListAggregateDiscoveredResourcesResponse: ListAggregateDiscoveredResourcesResponse,
    ListConfigRulesRequest: ListConfigRulesRequest,
    AggregateResourceInfo: AggregateResourceInfo,
    Tag: Tag,
    InputParameter: InputParameter,

}
