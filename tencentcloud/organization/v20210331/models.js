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
 * ListTasks request structure.
 * @class
 */
class ListTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User synchronization ID. Valid values: When PrincipalType is Group, it is a user group ID (g-****). When PrincipalType is User, it is a user ID (u-****).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Identity types synchronized for CAM users. Valid values: User: indicates the synchronized identity is a user. Group: indicates the synchronized identity is a user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * InProgress: The task is being executed; Success: The task execution succeeded; Failed: The task execution failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task type.
         * @type {string || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * ListRoleConfigurations request structure.
 * @class
 */
class ListRoleConfigurationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Text for filtering, which is case insensitive. Currently, values of RoleConfigurationName and Description are supported. For example, if Filter is set to test, permission configurations whose name or description contains test are queried.
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * Check whether the member account has been configured with permissions. If configured, return IsSelected: true; otherwise, return false.
         * @type {Array.<number> || null}
         */
        this.FilterTargets = null;

        /**
         * UserId of the authorized user or GroupId of the authorized user group, which must be set together with the input parameter FilterTargets.
         * @type {string || null}
         */
        this.PrincipalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.FilterTargets = 'FilterTargets' in params ? params.FilterTargets : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;

    }
}

/**
 * DeleteSCIMCredential request structure.
 * @class
 */
class DeleteSCIMCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM key ID, which starts with the scimcred- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.CredentialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;

    }
}

/**
 * ListGroupMembers response structure.
 * @class
 */
class ListGroupMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * The user list of a user group.
         * @type {Array.<GroupMembers> || null}
         */
        this.GroupMembers = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.GroupMembers) {
            this.GroupMembers = new Array();
            for (let z in params.GroupMembers) {
                let obj = new GroupMembers();
                obj.deserialize(params.GroupMembers[z]);
                this.GroupMembers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetExternalSAMLIdentityProvider request structure.
 * @class
 */
class SetExternalSAMLIdentityProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * IdP metadata document (Base64 encoded). Provided by an IdP that supports the SAML 2.0 protocol.
         * @type {string || null}
         */
        this.EncodedMetadataDocument = null;

        /**
         * SSO enabling status. Valid values: Enabled, Disabled (default).
         * @type {string || null}
         */
        this.SSOStatus = null;

        /**
         * IdP identifier.
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * IdP login URL.
         * @type {string || null}
         */
        this.LoginUrl = null;

        /**
         * X509 certificate in PEM format. If this parameter is specified, all existing certificates will be replaced.
         * @type {string || null}
         */
        this.X509Certificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EncodedMetadataDocument = 'EncodedMetadataDocument' in params ? params.EncodedMetadataDocument : null;
        this.SSOStatus = 'SSOStatus' in params ? params.SSOStatus : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.LoginUrl = 'LoginUrl' in params ? params.LoginUrl : null;
        this.X509Certificate = 'X509Certificate' in params ? params.X509Certificate : null;

    }
}

/**
 * ListGroupMembers request structure.
 * @class
 */
class ListGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Type of the user. Manual: manually created; Synchronized: imported from external sources.
         * @type {string || null}
         */
        this.UserType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * Permission configuration synchronization.
 * @class
 */
class RoleConfigurationProvisionings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deployed: Deployment succeeded; DeployedRequired: Redeployment required; DeployFailed: Deployment failed.
         * @type {string || null}
         */
        this.DeploymentStatus = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission configuration name.
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Name of the target account of the Tencent Cloud Organization.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Modification time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeploymentStatus = 'DeploymentStatus' in params ? params.DeploymentStatus : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

    }
}

/**
 * UpdatePolicy request structure.
 * @class
 */
class UpdatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID that needs to be edited. you can call the [ListPolicies](https://www.tencentcloud.com/document/product/850/105311?from_cn_redirect=1) api to obtain it.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Policy content. See the CAM policy syntax.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Policy name. The name is between one and 128 characters in length and can contain letters, digits, and underscores (_).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeShareUnitResources response structure.
 * @class
 */
class DescribeShareUnitResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Shared unit resource list.
         * @type {Array.<ShareUnitResource> || null}
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
                let obj = new ShareUnitResource();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CIC permission configuration.
 * @class
 */
class RoleConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission configuration name.
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * Permission configuration description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Session duration. It indicates the maximum session duration when CIC users use the access configuration to access member accounts.
Unit: seconds.
         * @type {number || null}
         */
        this.SessionDuration = null;

        /**
         * Initial access page. It indicates the initial access page URL when CIC users use the access configuration to access member accounts.
         * @type {string || null}
         */
        this.RelayState = null;

        /**
         * Creation time of the permission configuration.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time of the permission configuration.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * If the input parameter FilterTargets is provided, check whether the member account has been configured with permissions. If configured, return true; otherwise, return false.
         * @type {boolean || null}
         */
        this.IsSelected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
        this.RelayState = 'RelayState' in params ? params.RelayState : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsSelected = 'IsSelected' in params ? params.IsSelected : null;

    }
}

/**
 * DescribeOrganizationMemberEmailBind response structure.
 * @class
 */
class DescribeOrganizationMemberEmailBindResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bound ID.
         * @type {number || null}
         */
        this.BindId = null;

        /**
         * Application time.
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * Email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Verification mobile number.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Binding status: unbound indicates not bound; valid indicates to be activated; success indicates bound successfully; failed indicates binding failed.
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * Binding time.
         * @type {string || null}
         */
        this.BindTime = null;

        /**
         * Failure description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Verification mobile number binding status. 0 indicates unbound and 1 indicates bound.
         * @type {number || null}
         */
        this.PhoneBind = null;

        /**
         * International area code.
         * @type {string || null}
         */
        this.CountryCode = null;

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
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.BindTime = 'BindTime' in params ? params.BindTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PhoneBind = 'PhoneBind' in params ? params.PhoneBind : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnablePolicyType response structure.
 * @class
 */
class EnablePolicyTypeResponse extends  AbstractModel {
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
 * ListTargetsForPolicy response structure.
 * @class
 */
class ListTargetsForPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Specifies the list of targets associated with the SCP policy.
         * @type {Array.<ListTargetsForPolicyNode> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ListTargetsForPolicyNode();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUser request structure.
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * Status information of the role synchronization task.
 * @class
 */
class RoleProvisioningsTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission configuration name.
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * UIN of the authorized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Task type.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task status. InProgress: The task is in progress; Failed: The task failed; Success: The task succeeded.
         * @type {string || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * ProvisionRoleConfiguration request structure.
 * @class
 */
class ProvisionRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * ListNonCompliantResource response structure.
 * @class
 */
class ListNonCompliantResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource and tag compliance information.
         * @type {Array.<ResourceTagMapping> || null}
         */
        this.Items = null;

        /**
         * Token value obtained for the next page.
         * @type {string || null}
         */
        this.PaginationToken = null;

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
                let obj = new ResourceTagMapping();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUser response structure.
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
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
 * UpdateZone response structure.
 * @class
 */
class UpdateZoneResponse extends  AbstractModel {
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
 * DeleteOrganization request structure.
 * @class
 */
class DeleteOrganizationRequest extends  AbstractModel {
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
 * Tag compliance information.
 * @class
 */
class TagComplianceDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compliance status. true: compliant; false: non-compliant.
         * @type {boolean || null}
         */
        this.ComplianceStatus = null;

        /**
         * List of tag keys with invalid values.
         * @type {Array.<string> || null}
         */
        this.KeysWithNonCompliantValues = null;

        /**
         * List of invalid tag keys.
         * @type {Array.<string> || null}
         */
        this.NonCompliantKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComplianceStatus = 'ComplianceStatus' in params ? params.ComplianceStatus : null;
        this.KeysWithNonCompliantValues = 'KeysWithNonCompliantValues' in params ? params.KeysWithNonCompliantValues : null;
        this.NonCompliantKeys = 'NonCompliantKeys' in params ? params.NonCompliantKeys : null;

    }
}

/**
 * RejectJoinShareUnitInvitation request structure.
 * @class
 */
class RejectJoinShareUnitInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;

    }
}

/**
 * DescribeIdentityCenter response structure.
 * @class
 */
class DescribeIdentityCenterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Space name, which must be globally unique and contain 2-64 characters including lowercase letters, digits, and hyphens (-). It can neither start or end with a hyphen (-) nor contain two consecutive hyphens (-).
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Service activation status. Disabled: not activated; Enabled: activated.
         * @type {string || null}
         */
        this.ServiceStatus = null;

        /**
         * SCIM synchronization status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.ScimSyncStatus = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update date
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.ScimSyncStatus = 'ScimSyncStatus' in params ? params.ScimSyncStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicyConfig response structure.
 * @class
 */
class DescribePolicyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status. Valid values: 0 (not enabled) and 1 (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY (service control policy) and TAG_POLICY (Tag policy).
         * @type {string || null}
         */
        this.Type = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetZoneStatistics response structure.
 * @class
 */
class GetZoneStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space statistics.
         * @type {ZoneStatistics || null}
         */
        this.ZoneStatistics = null;

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

        if (params.ZoneStatistics) {
            let obj = new ZoneStatistics();
            obj.deserialize(params.ZoneStatistics)
            this.ZoneStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetExternalSAMLIdentityProvider response structure.
 * @class
 */
class GetExternalSAMLIdentityProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML identity provider configuration information.
         * @type {SAMLIdentityProviderConfiguration || null}
         */
        this.SAMLIdentityProviderConfiguration = null;

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

        if (params.SAMLIdentityProviderConfiguration) {
            let obj = new SAMLIdentityProviderConfiguration();
            obj.deserialize(params.SAMLIdentityProviderConfiguration)
            this.SAMLIdentityProviderConfiguration = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationIdentity request structure.
 * @class
 */
class ListOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.  It must be an integer multiple of the value of `Limit`.  Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The limit for the number of query results.  Value range:  1-50.  Default value:  `10`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search by name.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Identity ID, which can be searched by identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity type.  Valid values: `1` (Preset), `2` (Custom).
         * @type {number || null}
         */
        this.IdentityType = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;

    }
}

/**
 * DeleteOrganizationMembers request structure.
 * @class
 */
class DeleteOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Uin list of the deleted members.
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * CreateOrganization response structure.
 * @class
 */
class CreateOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID.
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Creator's nickname.
         * @type {string || null}
         */
        this.NickName = null;

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
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddShareUnitResources response structure.
 * @class
 */
class AddShareUnitResourcesResponse extends  AbstractModel {
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
 * Organization identity policy
 * @class
 */
class IdentityPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * CAM preset policy ID, which is valid and required when PolicyType is a preset policy.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * CAM preset policy name, which is valid and required when PolicyType is a preset policy.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy type. Valid values: 1: custom policy; 2: preset policy. The default value is 2.
         * @type {number || null}
         */
        this.PolicyType = null;

        /**
         * Custom policy content, which follows the CAM policy syntax. It is valid and mandatory when PolicyType is a custom policy.
         * @type {string || null}
         */
        this.PolicyDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;

    }
}

/**
 * AddOrganizationNode response structure.
 * @class
 */
class AddOrganizationNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {number || null}
         */
        this.NodeId = null;

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
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateSCIMSynchronizationStatus response structure.
 * @class
 */
class UpdateSCIMSynchronizationStatusResponse extends  AbstractModel {
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
 * ListPermissionPoliciesInRoleConfiguration response structure.
 * @class
 */
class ListPermissionPoliciesInRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of permission policies.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Permission policy list.
         * @type {Array.<RolePolicie> || null}
         */
        this.RolePolicies = null;

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
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;

        if (params.RolePolicies) {
            this.RolePolicies = new Array();
            for (let z in params.RolePolicies) {
                let obj = new RolePolicie();
                obj.deserialize(params.RolePolicies[z]);
                this.RolePolicies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MoveOrganizationNodeMembers response structure.
 * @class
 */
class MoveOrganizationNodeMembersResponse extends  AbstractModel {
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
 * AttachPolicy request structure.
 * @class
 */
class AttachPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Bind policy target ID. member Uin or department ID</p>.
         * @type {number || null}
         */
        this.TargetId = null;

        /**
         * <p>Target type. valid values: NODE-department, MEMBER-MEMBER</p>.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * <p>Policy Id. you can call the <a href="https://www.tencentcloud.com/document/product/850/105311?from_cn_redirect=1">ListPolicies</a> api to obtain it.</p>.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * <p>POLICY type. default value: SERVICE_CONTROL_POLICY. valid values: SERVICE_CONTROL_POLICY (SERVICE CONTROL POLICY) and TAG_POLICY (TAG POLICY).</p>.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteShareUnit response structure.
 * @class
 */
class DeleteShareUnitResponse extends  AbstractModel {
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
 * UpdateShareUnit request structure.
 * @class
 */
class UpdateShareUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit name. It only supports combinations of uppercase and lowercase letters, digits, hyphens (-), and underscores (_), with 3 to 128 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Shared unit description. Maximum: 128 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Sharing scope. Valid values: 1: Only sharing within a group organization is allowed; 2: Sharing with any account is allowed. Default value: 1
         * @type {number || null}
         */
        this.ShareScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ShareScope = 'ShareScope' in params ? params.ShareScope : null;

    }
}

/**
 * RemoveExternalSAMLIdPCertificate response structure.
 * @class
 */
class RemoveExternalSAMLIdPCertificateResponse extends  AbstractModel {
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
 * CreateGroup request structure.
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group name, which contains up to 128 characters, including English letters, digits, and special characters (-).
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User group description, which contains up to 1024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User group type. Manual: manually created, Synchronized: imported from external sources.
         * @type {string || null}
         */
        this.GroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;

    }
}

/**
 * ListUsers response structure.
 * @class
 */
class ListUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * User list.
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

        /**
         * Token for querying the next page of returned results. This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

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
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRoleConfiguration request structure.
 * @class
 */
class DeleteRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;

    }
}

/**
 * CreateOrganizationIdentity request structure.
 * @class
 */
class CreateOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity name.
         * @type {string || null}
         */
        this.IdentityAliasName = null;

        /**
         * Identity policy.
         * @type {Array.<IdentityPolicy> || null}
         */
        this.IdentityPolicy = null;

        /**
         * Identity description.
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
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;

        if (params.IdentityPolicy) {
            this.IdentityPolicy = new Array();
            for (let z in params.IdentityPolicy) {
                let obj = new IdentityPolicy();
                obj.deserialize(params.IdentityPolicy[z]);
                this.IdentityPolicy.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ListOrganizationService response structure.
 * @class
 */
class ListOrganizationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Group service list.
         * @type {Array.<OrganizationServiceAssign> || null}
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
                let obj = new OrganizationServiceAssign();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUserSyncProvisioning response structure.
 * @class
 */
class DeleteUserSyncProvisioningResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {UserProvisioningsTask || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            let obj = new UserProvisioningsTask();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ProvisionRoleConfiguration response structure.
 * @class
 */
class ProvisionRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {RoleProvisioningsTask || null}
         */
        this.Task = null;

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

        if (params.Task) {
            let obj = new RoleProvisioningsTask();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUserSyncProvisionings response structure.
 * @class
 */
class ListUserSyncProvisioningsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * User list of the CAM synchronization.
         * @type {Array.<UserProvisioning> || null}
         */
        this.UserProvisionings = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.UserProvisionings) {
            this.UserProvisionings = new Array();
            for (let z in params.UserProvisionings) {
                let obj = new UserProvisioning();
                obj.deserialize(params.UserProvisionings[z]);
                this.UserProvisionings.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePolicy response structure.
 * @class
 */
class DeletePolicyResponse extends  AbstractModel {
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
 * DescribeOrganization response structure.
 * @class
 */
class DescribeOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID.
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * Creator UIN.
         * @type {number || null}
         */
        this.HostUin = null;

        /**
         * Creator'S nickname.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Enterprise organization type.
         * @type {number || null}
         */
        this.OrgType = null;

        /**
         * Whether the organization admin. valid values: true, false.
         * @type {boolean || null}
         */
        this.IsManager = null;

        /**
         * Policy type. Financial: financial management.
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * Member financial permission list.
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * Root node ID of the organization.
         * @type {number || null}
         */
        this.RootNodeId = null;

        /**
         * Organization creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Member join time.
         * @type {string || null}
         */
        this.JoinTime = null;

        /**
         * Whether to allow a member to exit. Valid values: Allow, Denied.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Proxy payer UIN.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Payer name.
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * Specifies whether an account belongs to a trusted service administrator. true: yes; false: no.
         * @type {boolean || null}
         */
        this.IsAssignManager = null;

        /**
         * Specifies whether an account belongs to a real-name entity administrator. true: yes; false: no.
         * @type {boolean || null}
         */
        this.IsAuthManager = null;

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
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsManager = 'IsManager' in params ? params.IsManager : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.RootNodeId = 'RootNodeId' in params ? params.RootNodeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.IsAssignManager = 'IsAssignManager' in params ? params.IsAssignManager : null;
        this.IsAuthManager = 'IsAuthManager' in params ? params.IsAuthManager : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListNonCompliantResource request structure.
 * @class
 */
class ListNonCompliantResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Limit. Value range: 1–50.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Token value obtained from the previous page response.
If it is the first request, set to empty.
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DisablePolicyType response structure.
 * @class
 */
class DisablePolicyTypeResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberPolicies request structure.
 * @class
 */
class DescribeOrganizationMemberPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1-50. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Search keyword, which can be the policy name or description.
         * @type {string || null}
         */
        this.SearchKey = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeEffectivePolicy request structure.
 * @class
 */
class DescribeEffectivePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account UIN or node ID.
         * @type {number || null}
         */
        this.TargetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;

    }
}

/**
 * CreateOrgServiceAssign request structure.
 * @class
 */
class CreateOrgServiceAssignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Uin list of the delegated admins, including up to 20 items.
         * @type {Array.<number> || null}
         */
        this.MemberUins = null;

        /**
         * Group service ID. either this or group service product identifier is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * Group service product identifier. either this or group service ID is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Management scope of the delegated admin. Valid values: 1 (all members), 2 (partial members). Default value: 1.
         * @type {number || null}
         */
        this.ManagementScope = null;

        /**
         * Uin list of the managed members. This parameter is valid when ManagementScope is 2.
         * @type {Array.<number> || null}
         */
        this.ManagementScopeUins = null;

        /**
         * ID list of the managed departments. This parameter is valid when ManagementScope is 2.
         * @type {Array.<number> || null}
         */
        this.ManagementScopeNodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUins = 'MemberUins' in params ? params.MemberUins : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.ManagementScope = 'ManagementScope' in params ? params.ManagementScope : null;
        this.ManagementScopeUins = 'ManagementScopeUins' in params ? params.ManagementScopeUins : null;
        this.ManagementScopeNodeIds = 'ManagementScopeNodeIds' in params ? params.ManagementScopeNodeIds : null;

    }
}

/**
 * Task status information.
 * @class
 */
class TaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: InProgress: The task is being executed; Success: The task execution succeeded; Failed: The task execution failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task type. Valid values:ProvisionRoleConfiguration: Deploy permission configurations.
DeprovisionRoleConfiguration: Undeploy permission configurations.CreateRoleAssignment: Grant authorizations on member accounts.
DeleteRoleAssignment: Remove authorizations on member accounts.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Cause of task failure.
Description.
This parameter is displayed only when the Status is Failed.
         * @type {string || null}
         */
        this.FailureReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;

    }
}

/**
 * DeleteOrganizationMembersPolicy response structure.
 * @class
 */
class DeleteOrganizationMembersPolicyResponse extends  AbstractModel {
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
 * DismantleRoleConfiguration response structure.
 * @class
 */
class DismantleRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {RoleProvisioningsTask || null}
         */
        this.Task = null;

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

        if (params.Task) {
            let obj = new RoleProvisioningsTask();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearExternalSAMLIdentityProvider request structure.
 * @class
 */
class ClearExternalSAMLIdentityProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * CreateUserSyncProvisioning response structure.
 * @class
 */
class CreateUserSyncProvisioningResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {Array.<UserProvisioningsTask> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new UserProvisioningsTask();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUserSyncProvisionings request structure.
 * @class
 */
class ListUserSyncProvisioningsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User synchronization ID. Valid values: When PrincipalType is Group, it is a user group ID (g-********). When PrincipalType is User, it is a user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Identity types synchronized for CAM users. Valid values: User: indicates the synchronized identity is a user. Group: indicates the synchronized identity is a user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Detection condition.
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * Shared unit members
 * @class
 */
class ShareUnitMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared member UIN.
         * @type {number || null}
         */
        this.ShareMemberUin = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShareMemberUin = 'ShareMemberUin' in params ? params.ShareMemberUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * UpdateUserSyncProvisioning request structure.
 * @class
 */
class UpdateUserSyncProvisioningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User synchronization ID.
         * @type {string || null}
         */
        this.UserProvisioningId = null;

        /**
         * User synchronization description.
         * @type {string || null}
         */
        this.NewDescription = null;

        /**
         * Conflict policy. It indicates the handling policy for existence of a user with the same username when CIC users are synchronized to CAM. Valid values: KeepBoth: Keep both, that is, add the _cic suffix to the CIC user's username and then try to create a CAM user with the username when CIC users are synchronized to CAM and a user with the same username already exists in CAM; TakeOver: Replace, that is, directly replace the existing CAM user with the synchronized CIC user when CIC users are synchronized to CAM and a user with the same username already exists in CAM.
         * @type {string || null}
         */
        this.NewDuplicationStateful = null;

        /**
         * Deletion policy. It indicates the handling policy for CAM users already synchronized when the CAM user synchronization is deleted. Valid values: Delete: Delete the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted; Keep: Keep the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted.
         * @type {string || null}
         */
        this.NewDeletionStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserProvisioningId = 'UserProvisioningId' in params ? params.UserProvisioningId : null;
        this.NewDescription = 'NewDescription' in params ? params.NewDescription : null;
        this.NewDuplicationStateful = 'NewDuplicationStateful' in params ? params.NewDuplicationStateful : null;
        this.NewDeletionStrategy = 'NewDeletionStrategy' in params ? params.NewDeletionStrategy : null;

    }
}

/**
 * ListRoleAssignments request structure.
 * @class
 */
class ListRoleAssignmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Identity types synchronized for CAM users. Valid values: User: indicates the synchronized identity is a user. Group: indicates the synchronized identity is a user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * User synchronization ID. Valid values: When PrincipalType is Group, it is a user group ID (g-****). When PrincipalType is User, it is a user ID (u-****).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Query condition, which currently only supports search by permission configuration name.
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * CancelOrganizationMemberAuthAccount request structure.
 * @class
 */
class CancelOrganizationMemberAuthAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID, which can be obtained through [DescribeOrganizationMemberPolicies](https://intl.cloud.tencent.com/document/product/850/82935?from_cn_redirect=1).
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Organization sub-account UIN.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;

    }
}

/**
 * GetGroup request structure.
 * @class
 */
class GetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Organization service settings.
 * @class
 */
class OrganizationServiceAssign extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * Organization service product name.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Specifies whether delegation is supported. Valid values: 1: yes; 2: no.
         * @type {number || null}
         */
        this.IsAssign = null;

        /**
         * Organization service description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Number of delegated administrators.
         * @type {string || null}
         */
        this.MemberNum = null;

        /**
         * Help documentation.
         * @type {string || null}
         */
        this.Document = null;

        /**
         * Path to the console for organization service products.
         * @type {string || null}
         */
        this.ConsoleUrl = null;

        /**
         * Whether to access the usage status. valid values: 1 (yes). 
2: no.
         * @type {number || null}
         */
        this.IsUsageStatus = null;

        /**
         * Limit on the number of delegated administrators.
         * @type {number || null}
         */
        this.CanAssignCount = null;

        /**
         * Organization service product ID.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Specifies whether organization service authorization is supported. Valid values: 1: yes; 2: no.
         * @type {number || null}
         */
        this.ServiceGrant = null;

        /**
         * Specifies whether organization services are authorized. This field is valid when the value of ServiceGrant is 1. Valid values: Enabled: authorized; Disabled: not authorized. 
         * @type {string || null}
         */
        this.GrantStatus = null;

        /**
         * Specifies whether the scope of delegated management can be set. Valid values: 1: yes; 2 no.
         * @type {number || null}
         */
        this.IsSetManagementScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.IsAssign = 'IsAssign' in params ? params.IsAssign : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemberNum = 'MemberNum' in params ? params.MemberNum : null;
        this.Document = 'Document' in params ? params.Document : null;
        this.ConsoleUrl = 'ConsoleUrl' in params ? params.ConsoleUrl : null;
        this.IsUsageStatus = 'IsUsageStatus' in params ? params.IsUsageStatus : null;
        this.CanAssignCount = 'CanAssignCount' in params ? params.CanAssignCount : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.ServiceGrant = 'ServiceGrant' in params ? params.ServiceGrant : null;
        this.GrantStatus = 'GrantStatus' in params ? params.GrantStatus : null;
        this.IsSetManagementScope = 'IsSetManagementScope' in params ? params.IsSetManagementScope : null;

    }
}

/**
 * DeleteOrganization response structure.
 * @class
 */
class DeleteOrganizationResponse extends  AbstractModel {
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
 * DismantleRoleConfiguration request structure.
 * @class
 */
class DismantleRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;

    }
}

/**
 * UpdateCustomPolicyForRoleConfiguration response structure.
 * @class
 */
class UpdateCustomPolicyForRoleConfigurationResponse extends  AbstractModel {
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
 * DescribeShareUnitMembers response structure.
 * @class
 */
class DescribeShareUnitMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Shared unit member list.
         * @type {Array.<ShareUnitMember> || null}
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
                let obj = new ShareUnitMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Main member information.
 * @class
 */
class MemberMainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN
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
 * CreateRoleAssignment request structure.
 * @class
 */
class CreateRoleAssignmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Authorized member account information, up to 50 entries.
         * @type {Array.<RoleAssignmentInfo> || null}
         */
        this.RoleAssignmentInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.RoleAssignmentInfo) {
            this.RoleAssignmentInfo = new Array();
            for (let z in params.RoleAssignmentInfo) {
                let obj = new RoleAssignmentInfo();
                obj.deserialize(params.RoleAssignmentInfo[z]);
                this.RoleAssignmentInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteShareUnitResources request structure.
 * @class
 */
class DeleteShareUnitResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Shared resource type. For supported shared resource types, see [Overview of Resource Sharing](https://intl.cloud.tencent.com/document/product/850/59489?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Shared resource list. Maximum: 10.
         * @type {Array.<ShareResource> || null}
         */
        this.Resources = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new ShareResource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

    }
}

/**
 * Tag key-value pair.
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
 * RejectJoinShareUnitInvitation response structure.
 * @class
 */
class RejectJoinShareUnitInvitationResponse extends  AbstractModel {
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
 * UpdateShareUnit response structure.
 * @class
 */
class UpdateShareUnitResponse extends  AbstractModel {
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
 * ListRoleAssignments response structure.
 * @class
 */
class ListRoleAssignmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * Authorization list of the target account of the Tencent Cloud Organization.
         * @type {Array.<RoleAssignments> || null}
         */
        this.RoleAssignments = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.RoleAssignments) {
            this.RoleAssignments = new Array();
            for (let z in params.RoleAssignments) {
                let obj = new RoleAssignments();
                obj.deserialize(params.RoleAssignments[z]);
                this.RoleAssignments.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateUser response structure.
 * @class
 */
class UpdateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information
         * @type {UserInfo || null}
         */
        this.UserInfo = null;

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

        if (params.UserInfo) {
            let obj = new UserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveUserFromGroup request structure.
 * @class
 */
class RemoveUserFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * AddPermissionPolicyToRoleConfiguration request structure.
 * @class
 */
class AddPermissionPolicyToRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission policy type. Valid values: System: system policy, namely the CAM system policy reused; Custom: custom policy, namely the custom policy prepared according to the CAM permission policy syntax and structure.  
         * @type {string || null}
         */
        this.RolePolicyType = null;

        /**
         * Permission policy name, supporting up to 20 policies, with each policy having a maximum of 32 characters. If you need to add a system policy, it is recommended to use the RolePolicies parameter. For custom policies, the array length is up to 1.
         * @type {Array.<string> || null}
         */
        this.RolePolicyNames = null;

        /**
         * Details of an added system policy.
         * @type {Array.<PolicyDetail> || null}
         */
        this.RolePolicies = null;

        /**
         * Custom policy content, which contains up to 4096 characters. When RolePolicyType is Inline, this parameter must be configured. For details, see the permission policy syntax and structure.
         * @type {string || null}
         */
        this.CustomPolicyDocument = null;

        /**
         * List of custom policy content. (The number of custom policies in this list is the same as that specified by RolePolicyNames.)
         * @type {Array.<string> || null}
         */
        this.CustomPolicyDocuments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RolePolicyType = 'RolePolicyType' in params ? params.RolePolicyType : null;
        this.RolePolicyNames = 'RolePolicyNames' in params ? params.RolePolicyNames : null;

        if (params.RolePolicies) {
            this.RolePolicies = new Array();
            for (let z in params.RolePolicies) {
                let obj = new PolicyDetail();
                obj.deserialize(params.RolePolicies[z]);
                this.RolePolicies.push(obj);
            }
        }
        this.CustomPolicyDocument = 'CustomPolicyDocument' in params ? params.CustomPolicyDocument : null;
        this.CustomPolicyDocuments = 'CustomPolicyDocuments' in params ? params.CustomPolicyDocuments : null;

    }
}

/**
 * Relationship policy permission
 * @class
 */
class OrgPermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Permission name
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ListPolicies response structure.
 * @class
 */
class ListPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of policies
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Policy list data.
         * @type {Array.<ListPolicyNode> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ListPolicyNode();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindOrganizationMemberAuthAccount request structure.
 * @class
 */
class BindOrganizationMemberAuthAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID, which can be obtained by calling [DescribeOrganizationMemberPolicies](https://intl.cloud.tencent.com/document/product/850/82935?from_cn_redirect=1).
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * List of sub-account UINs of the organization admin, which can contain up to five UINs.
         * @type {Array.<number> || null}
         */
        this.OrgSubAccountUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUins = 'OrgSubAccountUins' in params ? params.OrgSubAccountUins : null;

    }
}

/**
 * DescribeShareUnits response structure.
 * @class
 */
class DescribeShareUnitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Shared unit list.
         * @type {Array.<ManagerShareUnit> || null}
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
                let obj = new ManagerShareUnit();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SAML identity provider configuration information.
 * @class
 */
class SAMLIdentityProviderConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * IdP identifier.
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * SSO enabling status. Valid values: Enabled, Disabled (default).
         * @type {string || null}
         */
        this.SSOStatus = null;

        /**
         * IdP metadata document (Base64 encoded).
         * @type {string || null}
         */
        this.EncodedMetadataDocument = null;

        /**
         * X509 certificate ID.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * IdP login URL.
         * @type {string || null}
         */
        this.LoginUrl = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.SSOStatus = 'SSOStatus' in params ? params.SSOStatus : null;
        this.EncodedMetadataDocument = 'EncodedMetadataDocument' in params ? params.EncodedMetadataDocument : null;
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.LoginUrl = 'LoginUrl' in params ? params.LoginUrl : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * UpdateOrganizationMemberEmailBind response structure.
 * @class
 */
class UpdateOrganizationMemberEmailBindResponse extends  AbstractModel {
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
 * GetZoneSAMLServiceProviderInfo response structure.
 * @class
 */
class GetZoneSAMLServiceProviderInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML service provider configuration information.
         * @type {SAMLServiceProvider || null}
         */
        this.SAMLServiceProvider = null;

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

        if (params.SAMLServiceProvider) {
            let obj = new SAMLServiceProvider();
            obj.deserialize(params.SAMLServiceProvider)
            this.SAMLServiceProvider = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationMembers response structure.
 * @class
 */
class DeleteOrganizationMembersResponse extends  AbstractModel {
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
 * Details of my shared unit list
 * @class
 */
class ManagerShareUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shared unit ID.</p>.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * <P>Shared unit name.</p>.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Shared unit administrator Uin.</p>.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * <p>Shared unit administrator OwnerUin.</p>.
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * <P>Shared unit region.</p>.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * <P>Description.</P>.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <P>Creation time.</p>.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <P>The number of resources in a shared unit.</p>.
         * @type {number || null}
         */
        this.ShareResourceNum = null;

        /**
         * <P>The number of members in a shared unit.</p>.
         * @type {number || null}
         */
        this.ShareMemberNum = null;

        /**
         * <P>Sharing scope. valid values: 1: only sharing within a group organization is allowed; 2: sharing with any account is allowed.</p>.
         * @type {number || null}
         */
        this.ShareScope = null;

        /**
         * <P>The number of departments in a shared unit.</p>.
         * @type {number || null}
         */
        this.ShareNodeNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ShareResourceNum = 'ShareResourceNum' in params ? params.ShareResourceNum : null;
        this.ShareMemberNum = 'ShareMemberNum' in params ? params.ShareMemberNum : null;
        this.ShareScope = 'ShareScope' in params ? params.ShareScope : null;
        this.ShareNodeNum = 'ShareNodeNum' in params ? params.ShareNodeNum : null;

    }
}

/**
 * UpdateSCIMCredentialStatus response structure.
 * @class
 */
class UpdateSCIMCredentialStatusResponse extends  AbstractModel {
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
 * DescribeShareUnitNodes response structure.
 * @class
 */
class DescribeShareUnitNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Total number.</p>.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <P>Shared unit department list.</p>.
         * @type {Array.<ShareUnitNode> || null}
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
                let obj = new ShareUnitNode();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shared unit resources
 * @class
 */
class ShareUnitResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Shared resource type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Product resource ID.
         * @type {string || null}
         */
        this.ProductResourceId = null;

        /**
         * Number of members in a sharing unit.
         * @type {number || null}
         */
        this.SharedMemberNum = null;

        /**
         * Number of members using shared resources.
         * @type {number || null}
         */
        this.SharedMemberUseNum = null;

        /**
         * Sharing unit administrator.
         * @type {number || null}
         */
        this.ShareManagerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductResourceId = 'ProductResourceId' in params ? params.ProductResourceId : null;
        this.SharedMemberNum = 'SharedMemberNum' in params ? params.SharedMemberNum : null;
        this.SharedMemberUseNum = 'SharedMemberUseNum' in params ? params.SharedMemberUseNum : null;
        this.ShareManagerUin = 'ShareManagerUin' in params ? params.ShareManagerUin : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities request structure.
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, which is an integer multiple of the value of `Limit`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit, which defaults to `10`. Value range: 1-50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Uin of the organization member. At least one of the input parameters MemberUin and IdentityId must be entered.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Identity ID. At least one of the input parameters MemberUin and IdentityId must be provided. It can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;

    }
}

/**
 * CreateOrganizationMemberAuthIdentity response structure.
 * @class
 */
class CreateOrganizationMemberAuthIdentityResponse extends  AbstractModel {
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
 * DeleteOrgServiceAssign request structure.
 * @class
 */
class DeleteOrgServiceAssignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Uin of the delegated admin.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Group service ID. either this or group service product identifier is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * Group service product identifier. either this or group service ID is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeOrganization request structure.
 * @class
 */
class DescribeOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `en` (Tencent Cloud International); `zh` (Tencent Cloud).
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * Abbreviation of the trusted service, which is required during querying the trusted service admin.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * ListPermissionPoliciesInRoleConfiguration request structure.
 * @class
 */
class ListPermissionPoliciesInRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission policy type. Valid values: System: system policy, namely the CAM system policy reused; Custom: custom policy, namely the custom policy prepared according to the CAM permission policy syntax and structure.
         * @type {string || null}
         */
        this.RolePolicyType = null;

        /**
         * Search by policy name.
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RolePolicyType = 'RolePolicyType' in params ? params.RolePolicyType : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * ClearExternalSAMLIdentityProvider response structure.
 * @class
 */
class ClearExternalSAMLIdentityProviderResponse extends  AbstractModel {
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
 * AddExternalSAMLIdPCertificate response structure.
 * @class
 */
class AddExternalSAMLIdPCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SAML signing certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganizationMember response structure.
 * @class
 */
class CreateOrganizationMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.Uin = null;

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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Authorization details of the member account.
 * @class
 */
class RoleAssignments extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission configuration name.
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Identity ID for the CAM user synchronization. Valid values: When the PrincipalType value is Group, it is the CIC user group ID (g-********). When the PrincipalType value is User, it is the CIC user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type for the CAM user synchronization. Valid values: User: indicates that the identity for the CAM user synchronization is a CIC user; Group: indicates that the identity for the CAM user synchronization is a CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * User name or user group name.
         * @type {string || null}
         */
        this.PrincipalName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Name of the target account of the Tencent Cloud Organization.
         * @type {string || null}
         */
        this.TargetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.PrincipalName = 'PrincipalName' in params ? params.PrincipalName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;

    }
}

/**
 * MoveOrganizationNodeMembers request structure.
 * @class
 */
class MoveOrganizationNodeMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1).
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Uin list of the members.
         * @type {Array.<number> || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * GetTaskStatus response structure.
 * @class
 */
class GetTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status information.
         * @type {TaskStatus || null}
         */
        this.TaskStatus = null;

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

        if (params.TaskStatus) {
            let obj = new TaskStatus();
            obj.deserialize(params.TaskStatus)
            this.TaskStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CAM user synchronization information.
 * @class
 */
class UserSyncProvisioning extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Identity ID for the CAM user synchronization. Valid values:
When the PrincipalType value is Group, it is the CIC user group ID (g-********).
When the PrincipalType value is User, it is the CIC user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type for the CAM user synchronization. Valid values:

User: indicates that the identity for the CAM user synchronization is a CIC user.
Group: indicates that the identity for the CAM user synchronization is a CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Conflict policy. It indicates the handling policy for existence of a user with the same username when CIC users are synchronized to CAM. Valid values: KeepBoth: Keep both, that is, add the _cic suffix to the CIC user's username and then try to create a CAM user with the username when CIC users are synchronized to CAM and a user with the same username already exists in CAM; TakeOver: Replace, that is, directly replace the existing CAM user with the synchronized CIC user when CIC users are synchronized to CAM and a user with the same username already exists in CAM.
         * @type {string || null}
         */
        this.DuplicationStrategy = null;

        /**
         * Deletion policy. It indicates the handling policy for CAM users already synchronized when the CAM user synchronization is deleted. Valid values: Delete: Delete the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted; Keep: Keep the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted.
         * @type {string || null}
         */
        this.DeletionStrategy = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.DuplicationStrategy = 'DuplicationStrategy' in params ? params.DuplicationStrategy : null;
        this.DeletionStrategy = 'DeletionStrategy' in params ? params.DeletionStrategy : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

    }
}

/**
 * AddShareUnitNode request structure.
 * @class
 */
class AddShareUnitNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shared unit ID.</p>.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * <p>Shared department ID.</p>.
         * @type {number || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * UpdateOrganizationMember response structure.
 * @class
 */
class UpdateOrganizationMemberResponse extends  AbstractModel {
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
 * CreateSCIMCredential response structure.
 * @class
 */
class CreateSCIMCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM key ID, which starts with the scimcred- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.CredentialId = null;

        /**
         * SCIM key type.
         * @type {string || null}
         */
        this.CredentialType = null;

        /**
         * Creation time of a SCIM key.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time of a SCIM key.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * SCIM key status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.CredentialStatus = null;

        /**
         * SCIM key.
         * @type {string || null}
         */
        this.CredentialSecret = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
        this.CredentialType = 'CredentialType' in params ? params.CredentialType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CredentialStatus = 'CredentialStatus' in params ? params.CredentialStatus : null;
        this.CredentialSecret = 'CredentialSecret' in params ? params.CredentialSecret : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup request structure.
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetUser response structure.
 * @class
 */
class GetUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User information.
         * @type {UserInfo || null}
         */
        this.UserInfo = null;

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

        if (params.UserInfo) {
            let obj = new UserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationNodes request structure.
 * @class
 */
class DeleteOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID list, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1).
         * @type {Array.<number> || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * EnablePolicyType request structure.
 * @class
 */
class EnablePolicyTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization Id. call the api [DescribeOrganization](https://www.tencentcloud.com/document/product/850/67059?from_cn_redirect=1) to obtain it.
         * @type {number || null}
         */
        this.OrganizationId = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

    }
}

/**
 * CreatePolicy response structure.
 * @class
 */
class CreatePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Valid policy.
 * @class
 */
class EffectivePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target ID.
         * @type {number || null}
         */
        this.TargetId = null;

        /**
         * Effective policy content.
         * @type {string || null}
         */
        this.PolicyContent = null;

        /**
         * Effective policy update time.
         * @type {number || null}
         */
        this.LastUpdatedTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.PolicyContent = 'PolicyContent' in params ? params.PolicyContent : null;
        this.LastUpdatedTimestamp = 'LastUpdatedTimestamp' in params ? params.LastUpdatedTimestamp : null;

    }
}

/**
 * UpdateCustomPolicyForRoleConfiguration request structure.
 * @class
 */
class UpdateCustomPolicyForRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission policy name, which contains up to 32 characters.
         * @type {string || null}
         */
        this.CustomPolicyName = null;

        /**
         * Custom policy content, which contains up to 4096 characters. When RolePolicyType is Inline, this parameter must be configured. For details, see the permission policy syntax and structure.
         * @type {string || null}
         */
        this.NewCustomPolicyDocument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.CustomPolicyName = 'CustomPolicyName' in params ? params.CustomPolicyName : null;
        this.NewCustomPolicyDocument = 'NewCustomPolicyDocument' in params ? params.NewCustomPolicyDocument : null;

    }
}

/**
 * AddOrganizationMemberEmail request structure.
 * @class
 */
class AddOrganizationMemberEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member uin.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * International area code.
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Mobile number.
         * @type {string || null}
         */
        this.Phone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

    }
}

/**
 * ListOrganizationIdentity response structure.
 * @class
 */
class ListOrganizationIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Item details.
         * @type {Array.<OrgIdentity> || null}
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
                let obj = new OrgIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelOrganizationPolicySubAccount request structure.
 * @class
 */
class CancelOrganizationPolicySubAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * List of sub-account UINs of the organization administrator. A maximum of 5 UINs is supported.
         * @type {Array.<number> || null}
         */
        this.OrgSubAccountUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUins = 'OrgSubAccountUins' in params ? params.OrgSubAccountUins : null;

    }
}

/**
 * Shared region
 * @class
 */
class ShareArea extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Region identifier.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.AreaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaId = 'AreaId' in params ? params.AreaId : null;

    }
}

/**
 * DeletePolicy request structure.
 * @class
 */
class DeletePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID to be deleted. you can call the [ListPolicies](https://www.tencentcloud.com/document/product/850/105311?from_cn_redirect=1) api to obtain it.

         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CancelOrganizationPolicySubAccount response structure.
 * @class
 */
class CancelOrganizationPolicySubAccountResponse extends  AbstractModel {
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
 * DescribeOrganizationMembersAuthPolicy request structure.
 * @class
 */
class DescribeOrganizationMembersAuthPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1-50. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Organization administrator sub-account UIN.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

        /**
         * Member access policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * User group information.
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User group description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time of the user group.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * User group type. Manual: manually created; Synchronized: externally imported.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Modification time of the user group.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Number of group members.
         * @type {number || null}
         */
        this.MemberCount = null;

        /**
         * If the input parameter FilterUsers is provided, return true when the user is in the user group; otherwise, return false.
         * @type {boolean || null}
         */
        this.IsSelected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
        this.IsSelected = 'IsSelected' in params ? params.IsSelected : null;

    }
}

/**
 * GetSCIMSynchronizationStatus response structure.
 * @class
 */
class GetSCIMSynchronizationStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SCIM synchronization status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.SCIMSynchronizationStatus = null;

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
        this.SCIMSynchronizationStatus = 'SCIMSynchronizationStatus' in params ? params.SCIMSynchronizationStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetZoneStatistics request structure.
 * @class
 */
class GetZoneStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * Main department information.
 * @class
 */
class NodeMainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Department ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Department name.
         * @type {string || null}
         */
        this.NodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * RemovePermissionPolicyFromRoleConfiguration request structure.
 * @class
 */
class RemovePermissionPolicyFromRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission policy type. Valid values: System: system policy, namely the CAM system policy reused; Custom: custom policy, namely the custom policy prepared according to the CAM permission policy syntax and structure.
         * @type {string || null}
         */
        this.RolePolicyType = null;

        /**
         * Permission policy name, which contains up to 32 characters.
         * @type {string || null}
         */
        this.RolePolicyName = null;

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.RolePolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RolePolicyType = 'RolePolicyType' in params ? params.RolePolicyType : null;
        this.RolePolicyName = 'RolePolicyName' in params ? params.RolePolicyName : null;
        this.RolePolicyId = 'RolePolicyId' in params ? params.RolePolicyId : null;

    }
}

/**
 * InviteOrganizationMember request structure.
 * @class
 */
class InviteOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of an invited account.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name, which contains up to 25 characters, including English letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Relationship policy. Valid value: `Financial`.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * List of member financial permission ids. valid values: 1: view bills. 2: view balance. 3: transfer funds (contact your business manager to enable internal fund transfer permission if required). 4: consolidate bills. 5: issue invoice. 6: inherit discounts. 7: pay on behalf. 8: analyze costs. 9: manage budget. 10: set credit limit (contact your business manager to enable internal credit limit setting privilege if required). 1 and 2 are required by default.
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * Node ID of the member's department, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1).
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to allow a member to exit. Valid values: Allow, Denied.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Payer UIN, which is required when pay-on-behalf mode is used.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Name of a mutual trust real-name entity.
         * @type {string || null}
         */
        this.RelationAuthName = null;

        /**
         * List of proof files of a mutual trust entity.
         * @type {Array.<AuthRelationFile> || null}
         */
        this.AuthFile = null;

        /**
         * Member tag list, with a maximum of 10.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PermissionIds = 'PermissionIds' in params ? params.PermissionIds : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.RelationAuthName = 'RelationAuthName' in params ? params.RelationAuthName : null;

        if (params.AuthFile) {
            this.AuthFile = new Array();
            for (let z in params.AuthFile) {
                let obj = new AuthRelationFile();
                obj.deserialize(params.AuthFile[z]);
                this.AuthFile.push(obj);
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

    }
}

/**
 * QuitOrganization request structure.
 * @class
 */
class QuitOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization ID.
         * @type {number || null}
         */
        this.OrgId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;

    }
}

/**
 * ListTasks response structure.
 * @class
 */
class ListTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * Task details.
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddOrganizationNode request structure.
 * @class
 */
class AddOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parent node ID, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1)
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Node name, which can contain up to 40 letters, digits, and symbols `+@&._[]-`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Department tag list, with a maximum of 10.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * AddShareUnitMembers request structure.
 * @class
 */
class AddShareUnitMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Shared member list. Maximum: 10.
         * @type {Array.<ShareMember> || null}
         */
        this.Members = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new ShareMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }

    }
}

/**
 * AddShareUnit request structure.
 * @class
 */
class AddShareUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit name. It only supports combinations of uppercase and lowercase letters, digits, hyphens (-), and underscores (_), with 3 to 128 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Shared unit region. You can obtain supported shared regions through the API [DescribeShareAreas](https://intl.cloud.tencent.com/document/product/850/103050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Shared unit description. Maximum: 128 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Sharing scope. Valid values: 1: Only sharing within a group organization is allowed; 2: Sharing with any account is allowed. Default value: 1
         * @type {number || null}
         */
        this.ShareScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ShareScope = 'ShareScope' in params ? params.ShareScope : null;

    }
}

/**
 * SendOrgMemberAccountBindEmail response structure.
 * @class
 */
class SendOrgMemberAccountBindEmailResponse extends  AbstractModel {
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
 * Department
 * @class
 */
class OrgNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization node ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parent Node ID
         * @type {number || null}
         */
        this.ParentNodeId = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update date
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Member tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * OpenIdentityCenter request structure.
 * @class
 */
class OpenIdentityCenterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space name, which must be globally unique and contain 2-64 characters including lowercase letters, digits, and hyphens (-). It can neither start or end with a hyphen (-) nor contain two consecutive hyphens (-).
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * DescribeOrganizationMemberAuthAccounts request structure.
 * @class
 */
class DescribeOrganizationMemberAuthAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1-50. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy ID, which can be obtained through [DescribeOrganizationMemberPolicies](https://intl.cloud.tencent.com/document/product/850/82935?from_cn_redirect=1).
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * SCIM key.
 * @class
 */
class SCIMCredential extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM key status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * SCIM key ID, which starts with the scimcred- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.CredentialId = null;

        /**
         * SCIM key type.
         * @type {string || null}
         */
        this.CredentialType = null;

        /**
         * Creation time of a SCIM key.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time of a SCIM key.
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
        this.CredentialType = 'CredentialType' in params ? params.CredentialType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * GetUser request structure.
 * @class
 */
class GetUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * UpdateOrganizationNode response structure.
 * @class
 */
class UpdateOrganizationNodeResponse extends  AbstractModel {
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
 * AcceptJoinShareUnitInvitation response structure.
 * @class
 */
class AcceptJoinShareUnitInvitationResponse extends  AbstractModel {
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
 * DescribeShareAreas request structure.
 * @class
 */
class DescribeShareAreasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: en (Tencent Cloud International); zh (Tencent Cloud).
         * @type {string || null}
         */
        this.Lang = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;

    }
}

/**
 * DescribeOrganizationMemberAuthAccounts response structure.
 * @class
 */
class DescribeOrganizationMemberAuthAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List
         * @type {Array.<OrgMemberAuthAccount> || null}
         */
        this.Items = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

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
                let obj = new OrgMemberAuthAccount();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteShareUnitNode request structure.
 * @class
 */
class DeleteShareUnitNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shared unit ID.</p>.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * <p>Department ID.</p>.
         * @type {number || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * Authorized member account information.
 * @class
 */
class RoleAssignmentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID for the CAM user synchronization. Valid values:
When the PrincipalType value is Group, it is the CIC user group ID (g-********).
When the PrincipalType value is User, it is the CIC user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type for the CAM user synchronization. Valid values:

User: indicates that the identity for the CAM user synchronization is a CIC user.
Group: indicates that the identity for the CAM user synchronization is a CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;

    }
}

/**
 * DeleteShareUnitNode response structure.
 * @class
 */
class DeleteShareUnitNodeResponse extends  AbstractModel {
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
 * ListRoleConfigurationProvisionings request structure.
 * @class
 */
class ListRoleConfigurationProvisioningsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * UIN of the synchronized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Deployed: Deployment succeeded; DeployedRequired: Redeployment required; DeployFailed: Deployment failed.
         * @type {string || null}
         */
        this.DeploymentStatus = null;

        /**
         * Search by configuration name is supported.
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.DeploymentStatus = 'DeploymentStatus' in params ? params.DeploymentStatus : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * GetSCIMSynchronizationStatus request structure.
 * @class
 */
class GetSCIMSynchronizationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * Organization identity
 * @class
 */
class OrgIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity name.
         * @type {string || null}
         */
        this.IdentityAliasName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Identity policy.
         * @type {Array.<IdentityPolicy> || null}
         */
        this.IdentityPolicy = null;

        /**
         * Identity type. 1: preset; 2: custom.
         * @type {number || null}
         */
        this.IdentityType = null;

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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.IdentityPolicy) {
            this.IdentityPolicy = new Array();
            for (let z in params.IdentityPolicy) {
                let obj = new IdentityPolicy();
                obj.deserialize(params.IdentityPolicy[z]);
                this.IdentityPolicy.push(obj);
            }
        }
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeIdentityCenter request structure.
 * @class
 */
class DescribeIdentityCenterRequest extends  AbstractModel {
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
 * DescribeOrganizationMembers response structure.
 * @class
 */
class DescribeOrganizationMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member list.
         * @type {Array.<OrgMember> || null}
         */
        this.Items = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

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
                let obj = new OrgMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPoliciesForTarget request structure.
 * @class
 */
class ListPoliciesForTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account UIN or node ID.
         * @type {number || null}
         */
        this.TargetId = null;

        /**
         * Items per page, which should be greater than 0 and less than or equal to 200. The default value is 20.
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number, which starts from 1 and cannot exceed 200. The default value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * Search keywords. Searches can be performed by policy name.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * User information.
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queried username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * First name of the user.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Last name of the user.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Display name of the user.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Email address of the user, which must be unique within the directory.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status. Valid values: Enabled, Disabled.
         * @type {string || null}
         */
        this.UserStatus = null;

        /**
         * User type. Manual: manually created; Synchronized: externally imported.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Creation time of the user.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Modification time of the user.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Whether selected
         * @type {boolean || null}
         */
        this.IsSelected = null;

        /**
         * User password.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether password reset is required next time. valid values: true (password reset required), false (not required to reset password).
         * @type {boolean || null}
         */
        this.NeedResetPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.UserStatus = 'UserStatus' in params ? params.UserStatus : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsSelected = 'IsSelected' in params ? params.IsSelected : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;

    }
}

/**
 * DeleteOrganizationMemberAuthIdentity response structure.
 * @class
 */
class DeleteOrganizationMemberAuthIdentityResponse extends  AbstractModel {
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
 * UpdateOrganizationMemberEmailBind request structure.
 * @class
 */
class UpdateOrganizationMemberEmailBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member uin.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Bound ID, which can be obtained through describeorganizationmemberemailbind (https://intl.cloud.tencent.com/document/product/850/93332?from_cn_redirect=1).
         * @type {number || null}
         */
        this.BindId = null;

        /**
         * Email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * International area code.
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * Mobile number.
         * @type {string || null}
         */
        this.Phone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

    }
}

/**
 * Task status information.
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Permission configuration name.
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * UIN of the authorized target member account.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Identity ID for the user authorization. If the identity type is CIC user, it is the user ID; if the identity type is user group, it is the user group ID.
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type for the user authorization. User: CIC user; Group: CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * Task type.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * InProgress: The task is being executed; Success: The task execution succeeded; Failed: The task execution failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Reason for failure
         * @type {string || null}
         */
        this.FailureReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;

    }
}

/**
 * BindOrganizationPolicySubAccount response structure.
 * @class
 */
class BindOrganizationPolicySubAccountResponse extends  AbstractModel {
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
 * DeleteOrganizationMemberAuthIdentity request structure.
 * @class
 */
class DeleteOrganizationMemberAuthIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Identity ID, which can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;

    }
}

/**
 * UpdateUser request structure.
 * @class
 */
class UpdateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * First name of the user.
         * @type {string || null}
         */
        this.NewFirstName = null;

        /**
         * Last name of the user.
         * @type {string || null}
         */
        this.NewLastName = null;

        /**
         * Display name of the user.
         * @type {string || null}
         */
        this.NewDisplayName = null;

        /**
         * User description.
         * @type {string || null}
         */
        this.NewDescription = null;

        /**
         * Email address of the user.
         * @type {string || null}
         */
        this.NewEmail = null;

        /**
         * Whether password reset is required.
         * @type {boolean || null}
         */
        this.NeedResetPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.NewFirstName = 'NewFirstName' in params ? params.NewFirstName : null;
        this.NewLastName = 'NewLastName' in params ? params.NewLastName : null;
        this.NewDisplayName = 'NewDisplayName' in params ? params.NewDisplayName : null;
        this.NewDescription = 'NewDescription' in params ? params.NewDescription : null;
        this.NewEmail = 'NewEmail' in params ? params.NewEmail : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;

    }
}

/**
 * Queries the list of targets associated with a specified SCP.
 * @class
 */
class ListTargetsForPolicyNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * SCP account UIN or node ID.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Association type. 1: node association; 2: user association.
         * @type {number || null}
         */
        this.RelatedType = null;

        /**
         * Account or node name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Binding time.
         * @type {string || null}
         */
        this.AddTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RelatedType = 'RelatedType' in params ? params.RelatedType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;

    }
}

/**
 * ListGroups request structure.
 * @class
 */
class ListGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Filter criterion. Format: <Attribute> <Operator> <Value>, case-insensitive. Currently, <Attribute> supports only GroupName, and <Operator> supports only eq (Equals) and sw (Start With). For example, Filter = "GroupName sw test" indicates querying all user groups with names starting with test; Filter = "GroupName eq testgroup" indicates querying the user group with the name testgroup.
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * User group type. Manual: manually created; Synchronized: externally imported.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Filtered user. IsSelected=1 will be returned for the user group associated with this user.
         * @type {Array.<string> || null}
         */
        this.FilterUsers = null;

        /**
         * Sorting field, which currently only supports CreateTime. The default is the CreateTime field.
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * Sorting order. Desc: descending order; Asc: ascending order. It should be set together with SortField.
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * Pagination offset. Do not use it together with NextToken, prioritizing using NextToken.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.FilterUsers = 'FilterUsers' in params ? params.FilterUsers : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateRoleConfiguration request structure.
 * @class
 */
class UpdateRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * New permission configuration description, which contains up to 1,024 characters.
         * @type {string || null}
         */
        this.NewDescription = null;

        /**
         * New session duration, in seconds. It is the maximum time a CIC user can maintain a session while using permission configurations to access a target account in TCO. Value range: 900 to 43200 (15 minutes to 12 hours).
         * @type {number || null}
         */
        this.NewSessionDuration = null;

        /**
         * New initial access page. It is the initial page address when a CIC user uses permission configurations to access a target account in TCO. This page must be a Tencent Cloud console page.
         * @type {string || null}
         */
        this.NewRelayState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.NewDescription = 'NewDescription' in params ? params.NewDescription : null;
        this.NewSessionDuration = 'NewSessionDuration' in params ? params.NewSessionDuration : null;
        this.NewRelayState = 'NewRelayState' in params ? params.NewRelayState : null;

    }
}

/**
 * DetachPolicy request structure.
 * @class
 */
class DetachPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Unbind policy target ID. member Uin or department ID</p>.
         * @type {number || null}
         */
        this.TargetId = null;

        /**
         * <p>Target type. valid values: NODE-department, MEMBER-MEMBER</p>.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * <p>Policy Id. you can call the <a href="https://www.tencentcloud.com/document/product/850/105311?from_cn_redirect=1">ListPolicies</a> api to obtain it.</p>.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * <p>POLICY type. default value: SERVICE_CONTROL_POLICY. valid values: SERVICE_CONTROL_POLICY (SERVICE CONTROL POLICY) and TAG_POLICY (TAG POLICY).</p>.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * UpdateOrganizationIdentity request structure.
 * @class
 */
class UpdateOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID, which can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Identity policy.
         * @type {Array.<IdentityPolicy> || null}
         */
        this.IdentityPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.IdentityPolicy) {
            this.IdentityPolicy = new Array();
            for (let z in params.IdentityPolicy) {
                let obj = new IdentityPolicy();
                obj.deserialize(params.IdentityPolicy[z]);
                this.IdentityPolicy.push(obj);
            }
        }

    }
}

/**
 * ListOrgServiceAssignMember response structure.
 * @class
 */
class ListOrgServiceAssignMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Delegated administrator list.
         * @type {Array.<OrganizationServiceAssignMember> || null}
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
                let obj = new OrganizationServiceAssignMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendOrgMemberAccountBindEmail request structure.
 * @class
 */
class SendOrgMemberAccountBindEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member uin.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Bound ID, which can be obtained through describeorganizationmemberemailbind (https://intl.cloud.tencent.com/document/product/850/93332?from_cn_redirect=1).
         * @type {number || null}
         */
        this.BindId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.BindId = 'BindId' in params ? params.BindId : null;

    }
}

/**
 * DeleteRoleAssignment response structure.
 * @class
 */
class DeleteRoleAssignmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {TaskInfo || null}
         */
        this.Task = null;

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

        if (params.Task) {
            let obj = new TaskInfo();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisablePolicyType request structure.
 * @class
 */
class DisablePolicyTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization Id. call the api [DescribeOrganization](https://www.tencentcloud.com/document/product/850/67059?from_cn_redirect=1) to obtain it.
         * @type {number || null}
         */
        this.OrganizationId = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

    }
}

/**
 * DescribeEffectivePolicy response structure.
 * @class
 */
class DescribeEffectivePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid policy.
         * @type {EffectivePolicy || null}
         */
        this.EffectivePolicy = null;

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

        if (params.EffectivePolicy) {
            let obj = new EffectivePolicy();
            obj.deserialize(params.EffectivePolicy)
            this.EffectivePolicy = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrgServiceAssign response structure.
 * @class
 */
class CreateOrgServiceAssignResponse extends  AbstractModel {
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
 * AddOrganizationMemberEmail response structure.
 * @class
 */
class AddOrganizationMemberEmailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bound ID.
         * @type {number || null}
         */
        this.BindId = null;

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
        this.BindId = 'BindId' in params ? params.BindId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceToShareMember request structure.
 * @class
 */
class DescribeResourceToShareMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared region. you can obtain supported shared regions through the api [DescribeShareAreas](https://www.tencentcloud.com/document/product/850/103050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1–50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search keywords support business resource ID search.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Shared resource type. For supported shared resource types, see [Overview of Resource Sharing](https://www.tencentcloud.com/document/product/850/59489?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Business resource ID. maximum 50.
         * @type {Array.<string> || null}
         */
        this.ProductResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ProductResourceIds = 'ProductResourceIds' in params ? params.ProductResourceIds : null;

    }
}

/**
 * AddShareUnitMembers response structure.
 * @class
 */
class AddShareUnitMembersResponse extends  AbstractModel {
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
 * ListGroups response structure.
 * @class
 */
class ListGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * User group list.
         * @type {Array.<GroupInfo> || null}
         */
        this.Groups = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganizationMemberPolicy request structure.
 * @class
 */
class CreateOrganizationMemberPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Policy name, which can contain up to 128 letters, digits, and symbols `+=,.@_-`.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Member access identity ID, which can be obtained through [DescribeOrganizationMemberAuthIdentities](https://intl.cloud.tencent.com/document/product/850/82936?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Description.
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
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * SAML signing certificate information.
 * @class
 */
class SAMLIdPCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate serial number.
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * Certificate issuer.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Certificate version.
         * @type {number || null}
         */
        this.Version = null;

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Public key certificate in PEM format (Base64 encoded).
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Signature algorithm of the certificate.
         * @type {string || null}
         */
        this.SignatureAlgorithm = null;

        /**
         * Expiration time of the certificate.
         * @type {string || null}
         */
        this.NotAfter = null;

        /**
         * Creation time of the certificate.
         * @type {string || null}
         */
        this.NotBefore = null;

        /**
         * Certificate subject.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * X509 certificate in PEM format.
         * @type {string || null}
         */
        this.X509Certificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.SignatureAlgorithm = 'SignatureAlgorithm' in params ? params.SignatureAlgorithm : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.X509Certificate = 'X509Certificate' in params ? params.X509Certificate : null;

    }
}

/**
 * CreateOrganization request structure.
 * @class
 */
class CreateOrganizationRequest extends  AbstractModel {
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
 * ListJoinedGroupsForUser request structure.
 * @class
 */
class ListJoinedGroupsForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * UpdateRoleConfiguration response structure.
 * @class
 */
class UpdateRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission configuration details.
         * @type {RoleConfiguration || null}
         */
        this.RoleConfigurationInfo = null;

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

        if (params.RoleConfigurationInfo) {
            let obj = new RoleConfiguration();
            obj.deserialize(params.RoleConfigurationInfo)
            this.RoleConfigurationInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachPolicy response structure.
 * @class
 */
class AttachPolicyResponse extends  AbstractModel {
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
 * CreateOrganizationMembersPolicy request structure.
 * @class
 */
class CreateOrganizationMembersPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN list, including up to 10 items.
         * @type {Array.<number> || null}
         */
        this.MemberUins = null;

        /**
         * Policy name, which contains 1 to 128 characters, including English letters, digits, and symbols `+=,.@_-`.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Member access identity ID, which can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Policy description, which contains up to 128 characters.
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
        this.MemberUins = 'MemberUins' in params ? params.MemberUins : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Member management identity
 * @class
 */
class MemberIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity name.
         * @type {string || null}
         */
        this.IdentityAliasName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityAliasName = 'IdentityAliasName' in params ? params.IdentityAliasName : null;

    }
}

/**
 * Tag key-value pair.
 * @class
 */
class Tags extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
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
 * GetExternalSAMLIdentityProvider request structure.
 * @class
 */
class GetExternalSAMLIdentityProviderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DetachPolicy response structure.
 * @class
 */
class DetachPolicyResponse extends  AbstractModel {
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
 * DeleteRoleConfiguration response structure.
 * @class
 */
class DeleteRoleConfigurationResponse extends  AbstractModel {
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
 * Information on the delegated member of the organization service.
 * @class
 */
class OrganizationServiceAssignMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * Organization service product name.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Uin of the delegated admin.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Delegated administrator name.
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * Activation status. Valid values: 0: not applicable to the service; 1: activated; 2: not activated.
         * @type {number || null}
         */
        this.UsageStatus = null;

        /**
         * Delegation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Management scope of the delegated administrator. Valid values: 1: all members; 2 some members.
         * @type {number || null}
         */
        this.ManagementScope = null;

        /**
         * UIN list of the managed members. This parameter is valid when the value of ManagementScope is 2.
         * @type {Array.<MemberMainInfo> || null}
         */
        this.ManagementScopeMembers = null;

        /**
         * ID list of the departments under management. This parameter is valid when the value of ManagementScope is 2.
         * @type {Array.<NodeMainInfo> || null}
         */
        this.ManagementScopeNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.UsageStatus = 'UsageStatus' in params ? params.UsageStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ManagementScope = 'ManagementScope' in params ? params.ManagementScope : null;

        if (params.ManagementScopeMembers) {
            this.ManagementScopeMembers = new Array();
            for (let z in params.ManagementScopeMembers) {
                let obj = new MemberMainInfo();
                obj.deserialize(params.ManagementScopeMembers[z]);
                this.ManagementScopeMembers.push(obj);
            }
        }

        if (params.ManagementScopeNodes) {
            this.ManagementScopeNodes = new Array();
            for (let z in params.ManagementScopeNodes) {
                let obj = new NodeMainInfo();
                obj.deserialize(params.ManagementScopeNodes[z]);
                this.ManagementScopeNodes.push(obj);
            }
        }

    }
}

/**
 * AddShareUnit response structure.
 * @class
 */
class AddShareUnitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

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
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeShareUnitResources request structure.
 * @class
 */
class DescribeShareUnitResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1–50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search keyword. Product resource ID search is supported.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Shared resource type. For supported shared resource types, see [Overview of Resource Sharing](https://intl.cloud.tencent.com/document/product/850/59489?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * RemoveUserFromGroup response structure.
 * @class
 */
class RemoveUserFromGroupResponse extends  AbstractModel {
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
 * GetGroup response structure.
 * @class
 */
class GetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group information.
         * @type {GroupInfo || null}
         */
        this.GroupInfo = null;

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

        if (params.GroupInfo) {
            let obj = new GroupInfo();
            obj.deserialize(params.GroupInfo)
            this.GroupInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetProvisioningTaskStatus response structure.
 * @class
 */
class GetProvisioningTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status information.
         * @type {TaskStatus || null}
         */
        this.TaskStatus = null;

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

        if (params.TaskStatus) {
            let obj = new TaskStatus();
            obj.deserialize(params.TaskStatus)
            this.TaskStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Enterprise organization policy list.
 * @class
 */
class ListPolicyNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Policy binding count.
         * @type {number || null}
         */
        this.AttachedTimes = null;

        /**
         * Policy description information.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Policy type. 1: custom; 2: preset.
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.AttachedTimes = 'AttachedTimes' in params ? params.AttachedTimes : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Resources and associated Tags.
 * @class
 */
class ResourceTagMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Six-Segment resource format. tencent cloud uses the six-segment resource format to describe a resource.
For example: qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Compliance details.
         * @type {TagComplianceDetails || null}
         */
        this.ComplianceDetails = null;

        /**
         * Resource tag.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.ComplianceDetails) {
            let obj = new TagComplianceDetails();
            obj.deserialize(params.ComplianceDetails)
            this.ComplianceDetails = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateOrganizationMemberPolicy response structure.
 * @class
 */
class CreateOrganizationMemberPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateSCIMSynchronizationStatus request structure.
 * @class
 */
class UpdateSCIMSynchronizationStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM synchronization status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.SCIMSynchronizationStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SCIMSynchronizationStatus = 'SCIMSynchronizationStatus' in params ? params.SCIMSynchronizationStatus : null;

    }
}

/**
 * AcceptJoinShareUnitInvitation request structure.
 * @class
 */
class AcceptJoinShareUnitInvitationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;

    }
}

/**
 * CancelOrganizationMemberAuthAccount response structure.
 * @class
 */
class CancelOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * GetTaskStatus request structure.
 * @class
 */
class GetTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * AddShareUnitResources request structure.
 * @class
 */
class AddShareUnitResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Shared resource type. For supported shared resource types, see [Overview of Resource Sharing](https://intl.cloud.tencent.com/document/product/850/59489?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Shared resource list. Maximum: 10.
         * @type {Array.<ProductResource> || null}
         */
        this.Resources = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new ProductResource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

    }
}

/**
 * GetRoleConfiguration response structure.
 * @class
 */
class GetRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission configuration details.
         * @type {RoleConfiguration || null}
         */
        this.RoleConfigurationInfo = null;

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

        if (params.RoleConfigurationInfo) {
            let obj = new RoleConfiguration();
            obj.deserialize(params.RoleConfigurationInfo)
            this.RoleConfigurationInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Shared member information
 * @class
 */
class ShareMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared member UIN.
         * @type {number || null}
         */
        this.ShareMemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShareMemberUin = 'ShareMemberUin' in params ? params.ShareMemberUin : null;

    }
}

/**
 * SetExternalSAMLIdentityProvider response structure.
 * @class
 */
class SetExternalSAMLIdentityProviderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

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
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListPoliciesForTarget response structure.
 * @class
 */
class ListPoliciesForTargetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * List of policies associated with a target.
         * @type {Array.<ListPoliciesForTarget> || null}
         */
        this.List = null;

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
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new ListPoliciesForTarget();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteShareUnitMembers request structure.
 * @class
 */
class DeleteShareUnitMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Member list.
         * @type {Array.<ShareMember> || null}
         */
        this.Members = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new ShareMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }

    }
}

/**
 * OpenIdentityCenter response structure.
 * @class
 */
class OpenIdentityCenterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUsers request structure.
 * @class
 */
class ListUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User status: Enabled, Disabled.
         * @type {string || null}
         */
        this.UserStatus = null;

        /**
         * User type. Manual: manually created; Synchronized: externally imported.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Filter criterion, which currently only supports username, email address, userId, and description.
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * Maximum number of data entries per page. Value range: 1-100. Default value: 10.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for querying the next page of returned results. During use of the API for the first time, NextToken is not needed. When you call the API for the first time, if the total number of returned data entries exceeds the MaxResults limit, the data is truncated and only MaxResults data entries are returned. Meanwhile, the return parameter IsTruncated is true and a NextToken is returned. You can use the NextToken returned last time to continue calling the API with other request parameters unchanged, to query the truncated data. You can use this method for multiple queries until IsTruncated is false, indicating that all data has been queried.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Filtered user group. IsSelected=1 will be returned for the sub-user associated with this user group.
         * @type {Array.<string> || null}
         */
        this.FilterGroups = null;

        /**
         * Sorting field, which currently only supports CreateTime. The default is the CreateTime field.
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * Sorting order. Desc: descending order; Asc: ascending order. It should be set together with SortField.
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * Pagination offset. Do not use it together with NextToken, prioritizing using NextToken.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserStatus = 'UserStatus' in params ? params.UserStatus : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.FilterGroups = 'FilterGroups' in params ? params.FilterGroups : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeOrganizationMemberAuthIdentities response structure.
 * @class
 */
class DescribeOrganizationMemberAuthIdentitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of authorized identities.
         * @type {Array.<OrgMemberAuthIdentity> || null}
         */
        this.Items = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

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
                let obj = new OrgMemberAuthIdentity();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoleAssignment response structure.
 * @class
 */
class CreateRoleAssignmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task details.
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Authorized policy of the organization member
 * @class
 */
class OrgMemberPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity role name.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Role alias of an identity.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateUser request structure.
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User name, which must be unique within the space and cannot be modified. It contains up to 64 characters, including digits, English letters, and special characters such as plus signs (+), equal signs (=), commas (,), periods (.), at signs (@), hyphens (-), and underscores (_).
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Last name of the user, which contains up to 64 characters.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * First name of the user, which contains up to 64 characters.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Display name of the user, which contains up to 256 characters.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User description, which contains up to 1024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Email address of the user, which must be unique within the directory and contains up to 128 characters.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status. Valid values: Enabled (default), Disabled.
         * @type {string || null}
         */
        this.UserStatus = null;

        /**
         * User type. Manual: manually created, Synchronized: imported from external sources.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Whether password reset is required. valid values: true (need to reset), false (not required to reset password). default value: false.
         * @type {boolean || null}
         */
        this.NeedResetPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.UserStatus = 'UserStatus' in params ? params.UserStatus : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;

    }
}

/**
 * QuitOrganization response structure.
 * @class
 */
class QuitOrganizationResponse extends  AbstractModel {
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
 * DescribeResourceToShareMember response structure.
 * @class
 */
class DescribeResourceToShareMemberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ShareResourceToMember> || null}
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
                let obj = new ShareResourceToMember();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePolicy response structure.
 * @class
 */
class UpdatePolicyResponse extends  AbstractModel {
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
 * DeleteShareUnitMembers response structure.
 * @class
 */
class DeleteShareUnitMembersResponse extends  AbstractModel {
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
 * UpdateGroup response structure.
 * @class
 */
class UpdateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group information.
         * @type {GroupInfo || null}
         */
        this.GroupInfo = null;

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

        if (params.GroupInfo) {
            let obj = new GroupInfo();
            obj.deserialize(params.GroupInfo)
            this.GroupInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListExternalSAMLIdPCertificates request structure.
 * @class
 */
class ListExternalSAMLIdPCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DeleteOrganizationIdentity response structure.
 * @class
 */
class DeleteOrganizationIdentityResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberEmailBind request structure.
 * @class
 */
class DescribeOrganizationMemberEmailBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member uin.
         * @type {number || null}
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * RemovePermissionPolicyFromRoleConfiguration response structure.
 * @class
 */
class RemovePermissionPolicyFromRoleConfigurationResponse extends  AbstractModel {
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
 * ListPolicies request structure.
 * @class
 */
class ListPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Items per page, which should be greater than 0 and less than or equal to 200. The default value is 20.
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number, which starts from 1 and cannot exceed 200. The default value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Query range. Valid values: All: all policies; QCS; only preset policies; Local: only custom policies. The default value is All.
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * Search keyword. Searches can be performed by policy name.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

    }
}

/**
 * BindOrganizationPolicySubAccount request structure.
 * @class
 */
class BindOrganizationPolicySubAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * List of sub-account UINs of the organization administrator. A maximum of 5 UINs is supported.
         * @type {Array.<number> || null}
         */
        this.OrgSubAccountUins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OrgSubAccountUins = 'OrgSubAccountUins' in params ? params.OrgSubAccountUins : null;

    }
}

/**
 * Authorization relationship between the member and sub-account
 * @class
 */
class OrgMemberAuthAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization sub-account Uin.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Identity role name.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Role alias of an identity.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Sub-Account.
         * @type {string || null}
         */
        this.OrgSubAccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OrgSubAccountName = 'OrgSubAccountName' in params ? params.OrgSubAccountName : null;

    }
}

/**
 * UpdateOrganizationMembersPolicy request structure.
 * @class
 */
class UpdateOrganizationMembersPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN list, including up to 10 items.
         * @type {Array.<number> || null}
         */
        this.MemberUins = null;

        /**
         * Member access policy ID, which can be obtained by calling DescribeOrganizationMemberPolicies.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Member access identity ID, which can be obtained by calling ListOrganizationIdentity.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Policy description, which contains up to 128 characters.
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
        this.MemberUins = 'MemberUins' in params ? params.MemberUins : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateOrganizationMember request structure.
 * @class
 */
class CreateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member name, which can contain up to 25 letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Relationship policy. Valid value: `Financial`.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * Member Finanace Authorization. Valid values: 1: View Bills. 2: View Balance.  4: Consolidate Bills. 5: Invoice. 6: Inherit Offer. 7: Pay On Behalf. 8: Cost Explorer. 9: Budget Management.  1, 2 and 7 are required.
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * Node ID of the member's department, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1).
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Account name, which can contain up to 25 letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Member creation record ID, which is required during retry upon creation exception.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Payer UIN, which is required during paying for a member.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * List of member access identity IDs, which can be obtained through the `ListOrganizationIdentity` API. `1` indicates supported, which is the default value.
         * @type {Array.<number> || null}
         */
        this.IdentityRoleID = null;

        /**
         * Verified entity relationship ID, which is required during creating members for different entities.
         * @type {number || null}
         */
        this.AuthRelationId = null;

        /**
         * Member tag list, with a maximum of 10.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PermissionIds = 'PermissionIds' in params ? params.PermissionIds : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.IdentityRoleID = 'IdentityRoleID' in params ? params.IdentityRoleID : null;
        this.AuthRelationId = 'AuthRelationId' in params ? params.AuthRelationId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Real-name mutual trust application proof file.
 * @class
 */
class AuthRelationFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * File name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * File path.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreatePolicy request structure.
 * @class
 */
class CreatePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy name.
The length ranges from 1 to 128 characters, and can contain chinese characters, english letters, digits, and underscores (_).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy content. See the CAM policy syntax.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.Type = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Authorizable identity of the organization member
 * @class
 */
class OrgMemberAuthIdentity extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Role name of an identity.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Role alias of an identity.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Identity description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Time of initial configuration success.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Time of the last successful configuration.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Identity type. Valid values: 1: preset identity; 2: custom identity.
         * @type {number || null}
         */
        this.IdentityType = null;

        /**
         * Configuration status. Valid values: 1: configuration completed; 2: reconfiguration required.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Member UIN.
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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IdentityType = 'IdentityType' in params ? params.IdentityType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;

    }
}

/**
 * Policy details.
 * @class
 */
class PolicyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;

    }
}

/**
 * DescribePolicyConfig request structure.
 * @class
 */
class DescribePolicyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Organization Id. call the api [DescribeOrganization](https://www.tencentcloud.com/document/product/850/67059?from_cn_redirect=1) to obtain it.
         * @type {number || null}
         */
        this.OrganizationId = null;

        /**
         * Policy type. Default value: 0; valid values: 0 (service control policy) and 1 (Tag policy).
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationId = 'OrganizationId' in params ? params.OrganizationId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AddExternalSAMLIdPCertificate request structure.
 * @class
 */
class AddExternalSAMLIdPCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * X509 certificate in PEM format, provided by the SAML identity provider.
         * @type {string || null}
         */
        this.X509Certificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.X509Certificate = 'X509Certificate' in params ? params.X509Certificate : null;

    }
}

/**
 * GetProvisioningTaskStatus request structure.
 * @class
 */
class GetProvisioningTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListJoinedGroupsForUser response structure.
 * @class
 */
class ListJoinedGroupsForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * List of user groups joined by the user.
         * @type {Array.<JoinedGroups> || null}
         */
        this.JoinedGroups = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.JoinedGroups) {
            this.JoinedGroups = new Array();
            for (let z in params.JoinedGroups) {
                let obj = new JoinedGroups();
                obj.deserialize(params.JoinedGroups[z]);
                this.JoinedGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SAML service provider information.
 * @class
 */
class SAMLServiceProvider extends  AbstractModel {
    constructor(){
        super();

        /**
         * https://tencentcloudsso.com/saml/sp/z-sjw8ensa**
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SP metadata document (Base64 encoded).
         * @type {string || null}
         */
        this.EncodedMetadataDocument = null;

        /**
         * SP ACS URL.
         * @type {string || null}
         */
        this.AcsUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EncodedMetadataDocument = 'EncodedMetadataDocument' in params ? params.EncodedMetadataDocument : null;
        this.AcsUrl = 'AcsUrl' in params ? params.AcsUrl : null;

    }
}

/**
 * Organization member access authorization policy.
 * @class
 */
class OrgMembersAuthPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdentityId = null;

        /**
         * Role name of an identity.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleName = null;

        /**
         * Role alias of an identity.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdentityRoleAliasName = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Member access policy ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Member access policy name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Member UIN.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * Sub-account UIN or user group ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OrgSubAccountUin = null;

        /**
         * Sub-account name or user group name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrgSubAccountName = null;

        /**
         * Binding type. 1: sub-account; 2: user group.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * Member information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MemberMainInfo> || null}
         */
        this.Members = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.IdentityRoleName = 'IdentityRoleName' in params ? params.IdentityRoleName : null;
        this.IdentityRoleAliasName = 'IdentityRoleAliasName' in params ? params.IdentityRoleAliasName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.OrgSubAccountUin = 'OrgSubAccountUin' in params ? params.OrgSubAccountUin : null;
        this.OrgSubAccountName = 'OrgSubAccountName' in params ? params.OrgSubAccountName : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new MemberMainInfo();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }

    }
}

/**
 * UpdateUserStatus response structure.
 * @class
 */
class UpdateUserStatusResponse extends  AbstractModel {
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
 * UpdateGroup request structure.
 * @class
 */
class UpdateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * New user group name.
         * @type {string || null}
         */
        this.NewGroupName = null;

        /**
         * New user group description.
         * @type {string || null}
         */
        this.NewDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NewGroupName = 'NewGroupName' in params ? params.NewGroupName : null;
        this.NewDescription = 'NewDescription' in params ? params.NewDescription : null;

    }
}

/**
 * ListExternalSAMLIdPCertificates response structure.
 * @class
 */
class ListExternalSAMLIdPCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * SAML signing certificate list.
         * @type {Array.<SAMLIdPCertificate> || null}
         */
        this.SAMLIdPCertificates = null;

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
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;

        if (params.SAMLIdPCertificates) {
            this.SAMLIdPCertificates = new Array();
            for (let z in params.SAMLIdPCertificates) {
                let obj = new SAMLIdPCertificate();
                obj.deserialize(params.SAMLIdPCertificates[z]);
                this.SAMLIdPCertificates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicy response structure.
 * @class
 */
class DescribePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Policy type. Valid values: 1 (custom) and 2 (preset).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Policy description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Policy document.
         * @type {string || null}
         */
        this.PolicyDocument = null;

        /**
         * Policy update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Policy creation time.
         * @type {string || null}
         */
        this.AddTime = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeShareUnitNodes request structure.
 * @class
 */
class DescribeShareUnitNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shared unit ID.</p>.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * <P>Offset. its value must be an integer multiple of the limit. default value: 0.</p>.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <P>Limit. value range: 1–50.</p>.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Search keywords. supports department ID search.</p>.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeShareUnitMembers request structure.
 * @class
 */
class DescribeShareUnitMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1–50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search keyword. Member UIN search is supported.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * RemoveExternalSAMLIdPCertificate request structure.
 * @class
 */
class RemoveExternalSAMLIdPCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * X509 certificate in PEM format, provided by the SAML identity provider.
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Queries the list of SCPs associated with the target.
 * @class
 */
class ListPoliciesForTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * Policy name.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Associated account or node.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Association type. 1: node association; 2: user association.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Policy creation time.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Policy update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Department name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy binding time.
         * @type {string || null}
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * GetUserSyncProvisioning request structure.
 * @class
 */
class GetUserSyncProvisioningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * ID of the CAM user synchronization.
         * @type {string || null}
         */
        this.UserProvisioningId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserProvisioningId = 'UserProvisioningId' in params ? params.UserProvisioningId : null;

    }
}

/**
 * CreateOrganizationMemberAuthIdentity request structure.
 * @class
 */
class CreateOrganizationMemberAuthIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN list, including up to 10 items.
         * @type {Array.<number> || null}
         */
        this.MemberUins = null;

        /**
         * Identity ID list, including up to 5 items, which can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {Array.<number> || null}
         */
        this.IdentityIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUins = 'MemberUins' in params ? params.MemberUins : null;
        this.IdentityIds = 'IdentityIds' in params ? params.IdentityIds : null;

    }
}

/**
 * GetUserSyncProvisioning response structure.
 * @class
 */
class GetUserSyncProvisioningResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CAM user synchronization information.
         * @type {UserProvisioning || null}
         */
        this.UserProvisioning = null;

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

        if (params.UserProvisioning) {
            let obj = new UserProvisioning();
            obj.deserialize(params.UserProvisioning)
            this.UserProvisioning = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListRoleConfigurationProvisionings response structure.
 * @class
 */
class ListRoleConfigurationProvisioningsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * Department member account list.
         * @type {Array.<RoleConfigurationProvisionings> || null}
         */
        this.RoleConfigurationProvisionings = null;

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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;

        if (params.RoleConfigurationProvisionings) {
            this.RoleConfigurationProvisionings = new Array();
            for (let z in params.RoleConfigurationProvisionings) {
                let obj = new RoleConfigurationProvisionings();
                obj.deserialize(params.RoleConfigurationProvisionings[z]);
                this.RoleConfigurationProvisionings.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Organization member
 * @class
 */
class OrgMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Member type. Invite: invited, Create: created.
         * @type {string || null}
         */
        this.MemberType = null;

        /**
         * Relationship policy type.
         * @type {string || null}
         */
        this.OrgPolicyType = null;

        /**
         * Relational policy name.
         * @type {string || null}
         */
        this.OrgPolicyName = null;

        /**
         * Relationship policy permission.
         * @type {Array.<OrgPermission> || null}
         */
        this.OrgPermission = null;

        /**
         * Node ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Node name.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update date
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Whether to allow a member to exit. Valid values: Allow, Denied.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Proxy payer UIN.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Proxy payer name.
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * Admin identity.
         * @type {Array.<MemberIdentity> || null}
         */
        this.OrgIdentity = null;

        /**
         * Security information binding status  Unbound: Unbound, to be activated: Valid, binding succeeded: Success, binding Failed: Failed.
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * Member's permission status. Valid values: Confirmed, UnConfirmed.
         * @type {string || null}
         */
        this.PermissionStatus = null;

        /**
         * Member tag list.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Tencent cloud nickname.
         * @type {string || null}
         */
        this.NickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberType = 'MemberType' in params ? params.MemberType : null;
        this.OrgPolicyType = 'OrgPolicyType' in params ? params.OrgPolicyType : null;
        this.OrgPolicyName = 'OrgPolicyName' in params ? params.OrgPolicyName : null;

        if (params.OrgPermission) {
            this.OrgPermission = new Array();
            for (let z in params.OrgPermission) {
                let obj = new OrgPermission();
                obj.deserialize(params.OrgPermission[z]);
                this.OrgPermission.push(obj);
            }
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.PayName = 'PayName' in params ? params.PayName : null;

        if (params.OrgIdentity) {
            this.OrgIdentity = new Array();
            for (let z in params.OrgIdentity) {
                let obj = new MemberIdentity();
                obj.deserialize(params.OrgIdentity[z]);
                this.OrgIdentity.push(obj);
            }
        }
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.PermissionStatus = 'PermissionStatus' in params ? params.PermissionStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NickName = 'NickName' in params ? params.NickName : null;

    }
}

/**
 * AddPermissionPolicyToRoleConfiguration response structure.
 * @class
 */
class AddPermissionPolicyToRoleConfigurationResponse extends  AbstractModel {
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
 * ListOrganizationService request structure.
 * @class
 */
class ListOrganizationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1-50. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Keyword for search by name.
         * @type {string || null}
         */
        this.SearchKey = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * CreateRoleConfiguration request structure.
 * @class
 */
class CreateRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration name, which contains up to 128 characters, including English letters, digits, and hyphens (-).
         * @type {string || null}
         */
        this.RoleConfigurationName = null;

        /**
         * Permission configuration description, which contains up to 1,024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Session duration, in seconds. It is the maximum time a CIC user can maintain a session while using permission configurations to access a target account in TCO. Value range: 900 to 43200 (15 minutes to 12 hours). Default: 3600 (1 hour).
         * @type {number || null}
         */
        this.SessionDuration = null;

        /**
         * Initial access page. It is the initial page address when a CIC user uses permission configurations to access a target account in TCO. This page must be a Tencent Cloud console page. The default value is empty, representing a redirection to the home page of the Tencent Cloud console.
         * @type {string || null}
         */
        this.RelayState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationName = 'RoleConfigurationName' in params ? params.RoleConfigurationName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
        this.RelayState = 'RelayState' in params ? params.RelayState : null;

    }
}

/**
 * UpdateOrganizationMember request structure.
 * @class
 */
class UpdateOrganizationMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member UIN.
         * @type {number || null}
         */
        this.MemberUin = null;

        /**
         * Member name, which contains up to 25 characters, including English letters, digits, and symbols `+@&._[]-:,`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks, which contain up to 40 characters.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Relationship policy type. When PolicyType is not empty, PermissionIds cannot be empty. Value: Financial.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * List of member financial permission ids. when PermissionIds is not empty, PolicyType cannot be empty.
Valid values: 1: view bills. 2: view balance. 3: allocate funds (contact your business manager to enable fund transfer permission internally). 4: consolidate bills. 5: issue invoices. 6: inherit discounts. 7: pay on behalf. 8: analyze costs. 9: budget management. 10: credit limit setting (contact your business manager to enable credit limit setting privilege internally). 1 and 2 are required by default.
         * @type {Array.<number> || null}
         */
        this.PermissionIds = null;

        /**
         * Whether to allow members to exit an organization. Valid values: Allow: permitted, Denied: not permitted.
         * @type {string || null}
         */
        this.IsAllowQuit = null;

        /**
         * Payer UIN, which is required when pay-on-behalf mode is used in member financial permission. The value is the principal administrator UIN of the corresponding member.
         * @type {string || null}
         */
        this.PayUin = null;

        /**
         * Whether to synchronize organization member names to account nicknames. valid values: 1-synchronize 0-not synchronized.
         * @type {number || null}
         */
        this.IsModifyNickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PermissionIds = 'PermissionIds' in params ? params.PermissionIds : null;
        this.IsAllowQuit = 'IsAllowQuit' in params ? params.IsAllowQuit : null;
        this.PayUin = 'PayUin' in params ? params.PayUin : null;
        this.IsModifyNickName = 'IsModifyNickName' in params ? params.IsModifyNickName : null;

    }
}

/**
 * CreateOrganizationMembersPolicy response structure.
 * @class
 */
class CreateOrganizationMembersPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRoleConfiguration request structure.
 * @class
 */
class GetRoleConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;

    }
}

/**
 * AddUserToGroup request structure.
 * @class
 */
class AddUserToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateOrganizationIdentity response structure.
 * @class
 */
class CreateOrganizationIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID.
         * @type {number || null}
         */
        this.IdentityId = null;

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
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationMembers request structure.
 * @class
 */
class DescribeOrganizationMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, which is an integer multiple of the value of `Limit`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit, which defaults to `10`. Value range: 1-50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Valid values: `en` (Tencent Cloud International); `zh` (Tencent Cloud).
         * @type {string || null}
         */
        this.Lang = null;

        /**
         * Search by member name or ID.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Entity name.
         * @type {string || null}
         */
        this.AuthName = null;

        /**
         * Abbreviation of the trusted service, which is required during querying the trusted service admin.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Member tag search list, with a maximum of 10.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Organizational unit ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Organizational unit name.
         * @type {string || null}
         */
        this.NodeName = null;

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
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.AuthName = 'AuthName' in params ? params.AuthName : null;
        this.Product = 'Product' in params ? params.Product : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * GetZoneSAMLServiceProviderInfo request structure.
 * @class
 */
class GetZoneSAMLServiceProviderInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ListRoleConfigurations response structure.
 * @class
 */
class ListRoleConfigurationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of data entries that meet the request parameter conditions.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * Maximum number of data entries per page.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether the returned result is truncated. Valid values: true: truncated; false: not truncated.
         * @type {boolean || null}
         */
        this.IsTruncated = null;

        /**
         * Token for querying the next page of returned results. Note: This parameter is displayed only when IsTruncated is true.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Permission configuration list.
         * @type {Array.<RoleConfiguration> || null}
         */
        this.RoleConfigurations = null;

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
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.IsTruncated = 'IsTruncated' in params ? params.IsTruncated : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.RoleConfigurations) {
            this.RoleConfigurations = new Array();
            for (let z in params.RoleConfigurations) {
                let obj = new RoleConfiguration();
                obj.deserialize(params.RoleConfigurations[z]);
                this.RoleConfigurations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListSCIMCredentials response structure.
 * @class
 */
class ListSCIMCredentialsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of SCIM keys.
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * SCIM key information.
         * @type {Array.<SCIMCredential> || null}
         */
        this.SCIMCredentials = null;

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
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;

        if (params.SCIMCredentials) {
            this.SCIMCredentials = new Array();
            for (let z in params.SCIMCredentials) {
                let obj = new SCIMCredential();
                obj.deserialize(params.SCIMCredentials[z]);
                this.SCIMCredentials.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrganizationNodes request structure.
 * @class
 */
class DescribeOrganizationNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum number of returned results. Maximum value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Department tag search list, with a maximum of 10.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Resources shared with me.
 * @class
 */
class ShareResourceToMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

        /**
         * Shared unit name.
         * @type {string || null}
         */
        this.UnitName = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Business resource ID.
         * @type {string || null}
         */
        this.ProductResourceId = null;

        /**
         * Shared account Uin.
         * @type {number || null}
         */
        this.ShareManagerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UnitId = 'UnitId' in params ? params.UnitId : null;
        this.UnitName = 'UnitName' in params ? params.UnitName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductResourceId = 'ProductResourceId' in params ? params.ProductResourceId : null;
        this.ShareManagerUin = 'ShareManagerUin' in params ? params.ShareManagerUin : null;

    }
}

/**
 * InviteOrganizationMember response structure.
 * @class
 */
class InviteOrganizationMemberResponse extends  AbstractModel {
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
 * BindOrganizationMemberAuthAccount response structure.
 * @class
 */
class BindOrganizationMemberAuthAccountResponse extends  AbstractModel {
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
 * ListOrgServiceAssignMember request structure.
 * @class
 */
class ListOrgServiceAssignMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1-50. Default value: 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Group service ID. either this or group service product identifier is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * Group service product identifier. either this or group service ID is required. can be obtained through ListOrganizationService (https://www.tencentcloud.com/document/product/850/109561?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Product = null;

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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * UpdateOrganizationIdentity response structure.
 * @class
 */
class UpdateOrganizationIdentityResponse extends  AbstractModel {
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
 * DescribeShareAreas response structure.
 * @class
 */
class DescribeShareAreasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details.
         * @type {Array.<ShareArea> || null}
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
                let obj = new ShareArea();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUser response structure.
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User details.
         * @type {UserInfo || null}
         */
        this.UserInfo = null;

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

        if (params.UserInfo) {
            let obj = new UserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteShareUnitResources response structure.
 * @class
 */
class DeleteShareUnitResourcesResponse extends  AbstractModel {
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
 * DeleteUserSyncProvisioning request structure.
 * @class
 */
class DeleteUserSyncProvisioningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User synchronization ID.
         * @type {string || null}
         */
        this.UserProvisioningId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserProvisioningId = 'UserProvisioningId' in params ? params.UserProvisioningId : null;

    }
}

/**
 * DescribeOrganizationNodes response structure.
 * @class
 */
class DescribeOrganizationNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List details.
         * @type {Array.<OrgNode> || null}
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
                let obj = new OrgNode();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUserSyncProvisioning request structure.
 * @class
 */
class CreateUserSyncProvisioningRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CAM user synchronization information.
         * @type {Array.<UserSyncProvisioning> || null}
         */
        this.UserSyncProvisionings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.UserSyncProvisionings) {
            this.UserSyncProvisionings = new Array();
            for (let z in params.UserSyncProvisionings) {
                let obj = new UserSyncProvisioning();
                obj.deserialize(params.UserSyncProvisionings[z]);
                this.UserSyncProvisionings.push(obj);
            }
        }

    }
}

/**
 * DeleteOrganizationMembersPolicy request structure.
 * @class
 */
class DeleteOrganizationMembersPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access policy ID, which can be obtained through [DescribeOrganizationMemberPolicies](https://intl.cloud.tencent.com/document/product/850/82935?from_cn_redirect=1).
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CreateSCIMCredential request structure.
 * @class
 */
class CreateSCIMCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Expiration time (in seconds), with a minimum value of 1 hour and a maximum value of 99 years. if not provided, it expires in 1 year by default.
         * @type {number || null}
         */
        this.ExpireDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ExpireDuration = 'ExpireDuration' in params ? params.ExpireDuration : null;

    }
}

/**
 * DescribeOrganizationMembersAuthPolicy response structure.
 * @class
 */
class DescribeOrganizationMembersAuthPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access authorization policy list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OrgMembersAuthPolicy> || null}
         */
        this.Items = null;

        /**
         * Total number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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
                let obj = new OrgMembersAuthPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicy request structure.
 * @class
 */
class DescribePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy Id. you can call the [ListPolicies](https://www.tencentcloud.com/document/product/850/105311?from_cn_redirect=1) api to obtain it.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;

    }
}

/**
 * DeleteGroup response structure.
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
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
 * UpdateOrganizationMembersPolicy response structure.
 * @class
 */
class UpdateOrganizationMembersPolicyResponse extends  AbstractModel {
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
 * UpdateUserStatus request structure.
 * @class
 */
class UpdateUserStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * User status. Valid values: Enabled, Disabled.
         * @type {string || null}
         */
        this.NewUserStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.NewUserStatus = 'NewUserStatus' in params ? params.NewUserStatus : null;

    }
}

/**
 * User group joined by the user.
 * @class
 */
class JoinedGroups extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * User group description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * User group ID.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * User group type. Valid values:

Manual: manually created.
Synchronized: externally synchronized.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Time of joining the user group.
         * @type {string || null}
         */
        this.JoinTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;

    }
}

/**
 * CreateRoleConfiguration response structure.
 * @class
 */
class CreateRoleConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access configuration details.
         * @type {RoleConfiguration || null}
         */
        this.RoleConfigurationInfo = null;

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

        if (params.RoleConfigurationInfo) {
            let obj = new RoleConfiguration();
            obj.deserialize(params.RoleConfigurationInfo)
            this.RoleConfigurationInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * User information.
 * @class
 */
class GroupMembers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queried username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Display name of the user.
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * User description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Email address of the user, which must be unique within the directory.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * User status: Enabled, Disabled.
         * @type {string || null}
         */
        this.UserStatus = null;

        /**
         * User type. Manual: manually created; Synchronized: externally imported.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * User ID.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Time when the user joins the user group.
         * @type {string || null}
         */
        this.JoinTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.UserStatus = 'UserStatus' in params ? params.UserStatus : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;

    }
}

/**
 * Shared resources
 * @class
 */
class ShareResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Product resource ID.
         * @type {string || null}
         */
        this.ProductResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ProductResourceId = 'ProductResourceId' in params ? params.ProductResourceId : null;

    }
}

/**
 * DeleteRoleAssignment request structure.
 * @class
 */
class DeleteRoleAssignmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Permission configuration ID.
         * @type {string || null}
         */
        this.RoleConfigurationId = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Identity types synchronized for CAM users. Valid values: User: indicates the synchronized identity is a user. Group: indicates the synchronized identity is a user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * User synchronization ID. Valid values: When PrincipalType is Group, it is a user group ID (g-********). When PrincipalType is User, it is a user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Whether to remove the permission configuration deployment when removing the last authorization with a certain permission configuration from a target account in TCO. Valid values: DeprovisionForLastRoleAssignmentOnAccount: Remove the permission configuration deployment. None (default): Do not remove the permission configuration deployment.
         * @type {string || null}
         */
        this.DeprovisionStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoleConfigurationId = 'RoleConfigurationId' in params ? params.RoleConfigurationId : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.DeprovisionStrategy = 'DeprovisionStrategy' in params ? params.DeprovisionStrategy : null;

    }
}

/**
 * ListTargetsForPolicy request structure.
 * @class
 */
class ListTargetsForPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * Items per page, which should be greater than 0 and less than or equal to 200. The default value is 20.
         * @type {number || null}
         */
        this.Rp = null;

        /**
         * Page number, which starts from 1 and cannot exceed 200. The default value is 1.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Policy type. Valid values: All, User, and Node.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Policy type. Valid values: SERVICE_CONTROL_POLICY: service control policy; TAG_POLICY: tag policy. The default value is SERVICE_CONTROL_POLICY.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * Search by multiple policy IDs, separated by spaces.
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * DeleteOrganizationIdentity request structure.
 * @class
 */
class DeleteOrganizationIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity ID, which can be obtained through [ListOrganizationIdentity](https://intl.cloud.tencent.com/document/product/850/82934?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IdentityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;

    }
}

/**
 * UpdateOrganizationNode request structure.
 * @class
 */
class UpdateOrganizationNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID, which can be obtained through [DescribeOrganizationNodes](https://intl.cloud.tencent.com/document/product/850/82926?from_cn_redirect=1).
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Node name, which can contain up to 40 letters, digits, and symbols `+@&._[]-`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Department in the shared unit.
 * @class
 */
class ShareUnitNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Shared department ID.</p>.
         * @type {number || null}
         */
        this.ShareNodeId = null;

        /**
         * <P>Creation time.</p>.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShareNodeId = 'ShareNodeId' in params ? params.ShareNodeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CIC space statistics.
 * @class
 */
class ZoneStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * User quota.
         * @type {number || null}
         */
        this.UserQuota = null;

        /**
         * User group quota.
         * @type {number || null}
         */
        this.GroupQuota = null;

        /**
         * Permission configuration quota.
         * @type {number || null}
         */
        this.RoleConfigurationQuota = null;

        /**
         * System policy quota bound to the permission configuration.
         * @type {number || null}
         */
        this.SystemPolicyPerRoleConfigurationQuota = null;

        /**
         * Number of users.
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * Number of user groups.
         * @type {number || null}
         */
        this.GroupCount = null;

        /**
         * Number of permission configurations.
         * @type {number || null}
         */
        this.RoleConfigurationCount = null;

        /**
         * Number of synchronized users.
         * @type {number || null}
         */
        this.UserProvisioningCount = null;

        /**
         * Number of synchronized roles.
         * @type {number || null}
         */
        this.RoleConfigurationSyncCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserQuota = 'UserQuota' in params ? params.UserQuota : null;
        this.GroupQuota = 'GroupQuota' in params ? params.GroupQuota : null;
        this.RoleConfigurationQuota = 'RoleConfigurationQuota' in params ? params.RoleConfigurationQuota : null;
        this.SystemPolicyPerRoleConfigurationQuota = 'SystemPolicyPerRoleConfigurationQuota' in params ? params.SystemPolicyPerRoleConfigurationQuota : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;
        this.GroupCount = 'GroupCount' in params ? params.GroupCount : null;
        this.RoleConfigurationCount = 'RoleConfigurationCount' in params ? params.RoleConfigurationCount : null;
        this.UserProvisioningCount = 'UserProvisioningCount' in params ? params.UserProvisioningCount : null;
        this.RoleConfigurationSyncCount = 'RoleConfigurationSyncCount' in params ? params.RoleConfigurationSyncCount : null;

    }
}

/**
 * DeleteOrganizationNodes response structure.
 * @class
 */
class DeleteOrganizationNodesResponse extends  AbstractModel {
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
 * AddUserToGroup response structure.
 * @class
 */
class AddUserToGroupResponse extends  AbstractModel {
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
 * Product resources
 * @class
 */
class ProductResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product resource ID.
         * @type {string || null}
         */
        this.ProductResourceId = null;

        /**
         * The last section of the six-segment resource description.
         * @type {string || null}
         */
        this.ResourceGrantLast = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductResourceId = 'ProductResourceId' in params ? params.ProductResourceId : null;
        this.ResourceGrantLast = 'ResourceGrantLast' in params ? params.ResourceGrantLast : null;

    }
}

/**
 * DeleteShareUnit request structure.
 * @class
 */
class DeleteShareUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit ID.
         * @type {string || null}
         */
        this.UnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitId = 'UnitId' in params ? params.UnitId : null;

    }
}

/**
 * DeleteOrgServiceAssign response structure.
 * @class
 */
class DeleteOrgServiceAssignResponse extends  AbstractModel {
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
 * DescribeOrganizationMemberPolicies response structure.
 * @class
 */
class DescribeOrganizationMemberPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Member access policy list.
         * @type {Array.<OrgMemberPolicy> || null}
         */
        this.Items = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.Total = null;

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
                let obj = new OrgMemberPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeShareUnits request structure.
 * @class
 */
class DescribeShareUnitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shared unit region. You can obtain supported shared regions through the API [DescribeShareAreas](https://intl.cloud.tencent.com/document/product/850/103050?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Offset. Its value must be an integer multiple of the limit. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit. Value range: 1–50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search keyword. UnitId and Name search is supported.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * Status information of the user synchronization task.
 * @class
 */
class UserProvisioningsTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * UIN of the authorized target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Task type. StartProvisioning: Start the user synchronization; DeleteProvisioning: Delete the user synchronization.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task status. InProgress: The task is in progress; Failed: The task failed; Success: The task succeeded.
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * User synchronization ID.
         * @type {string || null}
         */
        this.UserProvisioningId = null;

        /**
         * Identity ID for the CAM user synchronization. Valid values: When the PrincipalType value is Group, it is the CIC user group ID (g-********). When the PrincipalType value is User, it is the CIC user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity type for the CAM user synchronization. Valid values: User: indicates that the identity for the CAM user synchronization is a CIC user; Group: indicates that the identity for the CAM user synchronization is a CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * User name or user group name.
         * @type {string || null}
         */
        this.PrincipalName = null;

        /**
         * Conflict policy. KeepBoth: Keep both; TakeOver: Replace.
         * @type {string || null}
         */
        this.DuplicationStrategy = null;

        /**
         * Deletion policy: Delete, Keep.
         * @type {string || null}
         */
        this.DeletionStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.UserProvisioningId = 'UserProvisioningId' in params ? params.UserProvisioningId : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.PrincipalName = 'PrincipalName' in params ? params.PrincipalName : null;
        this.DuplicationStrategy = 'DuplicationStrategy' in params ? params.DuplicationStrategy : null;
        this.DeletionStrategy = 'DeletionStrategy' in params ? params.DeletionStrategy : null;

    }
}

/**
 * User synchronization information.
 * @class
 */
class UserProvisioning extends  AbstractModel {
    constructor(){
        super();

        /**
         * CAM user synchronization status. Valid values:

Enabled: CAM user synchronization is enabled.
Disabled: CAM user synchronization is disabled.
         * @type {string || null}
         */
        this.UserProvisioningId = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * CAM user synchronization status. Valid values:

Enabled: CAM user synchronization is enabled.
Disabled: CAM user synchronization is disabled.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Identity ID for the CAM user synchronization. Valid values:
When the PrincipalType value is Group, it is the CIC user group ID (g-********).
When the PrincipalType value is User, it is the CIC user ID (u-********).
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * Identity name for the CAM user synchronization. Valid values:When the PrincipalType value is Group, it is the CIC user group name.
When the PrincipalType value is User, it is the CIC user name.
         * @type {string || null}
         */
        this.PrincipalName = null;

        /**
         * Identity type for the CAM user synchronization. Valid values:

User: indicates that the identity for the CAM user synchronization is a CIC user.
Group: indicates that the identity for the CAM user synchronization is a CIC user group.
         * @type {string || null}
         */
        this.PrincipalType = null;

        /**
         * UIN of the target account of the Tencent Cloud Organization.
         * @type {number || null}
         */
        this.TargetUin = null;

        /**
         * Name of the target account of the Tencent Cloud Organization.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Conflict policy. It indicates the handling policy for existence of a user with the same username when CIC users are synchronized to CAM. Valid values: KeepBoth: Keep both, that is, add the _cic suffix to the CIC user's username and then try to create a CAM user with the username when CIC users are synchronized to CAM and a user with the same username already exists in CAM; TakeOver: Replace, that is, directly replace the existing CAM user with the synchronized CIC user when CIC users are synchronized to CAM and a user with the same username already exists in CAM.
         * @type {string || null}
         */
        this.DuplicationStrategy = null;

        /**
         * Deletion policy. It indicates the handling policy for CAM users already synchronized when the CAM user synchronization is deleted. Valid values: Delete: Delete the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted; Keep: Keep the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted.
         * @type {string || null}
         */
        this.DeletionStrategy = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
         * @type {string || null}
         */
        this.TargetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserProvisioningId = 'UserProvisioningId' in params ? params.UserProvisioningId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.PrincipalName = 'PrincipalName' in params ? params.PrincipalName : null;
        this.PrincipalType = 'PrincipalType' in params ? params.PrincipalType : null;
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.DuplicationStrategy = 'DuplicationStrategy' in params ? params.DuplicationStrategy : null;
        this.DeletionStrategy = 'DeletionStrategy' in params ? params.DeletionStrategy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

    }
}

/**
 * ListSCIMCredentials request structure.
 * @class
 */
class ListSCIMCredentialsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM key ID.
         * @type {string || null}
         */
        this.CredentialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;

    }
}

/**
 * UpdateSCIMCredentialStatus request structure.
 * @class
 */
class UpdateSCIMCredentialStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * SCIM key ID, which starts with the scimcred- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.CredentialId = null;

        /**
         * SCIM key status. Enabled: enabled. Disabled: disabled.
         * @type {string || null}
         */
        this.NewStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
        this.NewStatus = 'NewStatus' in params ? params.NewStatus : null;

    }
}

/**
 * AddShareUnitNode response structure.
 * @class
 */
class AddShareUnitNodeResponse extends  AbstractModel {
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
 * CIC permission policy.
 * @class
 */
class RolePolicie extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy ID.
         * @type {number || null}
         */
        this.RolePolicyId = null;

        /**
         * Permission policy name.
         * @type {string || null}
         */
        this.RolePolicyName = null;

        /**
         * Permission policy type.
         * @type {string || null}
         */
        this.RolePolicyType = null;

        /**
         * Custom policy content. This parameter is only returned for custom policies.
         * @type {string || null}
         */
        this.RolePolicyDocument = null;

        /**
         * The time when the permission policy is added to the permission configuration.
         * @type {string || null}
         */
        this.AddTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RolePolicyId = 'RolePolicyId' in params ? params.RolePolicyId : null;
        this.RolePolicyName = 'RolePolicyName' in params ? params.RolePolicyName : null;
        this.RolePolicyType = 'RolePolicyType' in params ? params.RolePolicyType : null;
        this.RolePolicyDocument = 'RolePolicyDocument' in params ? params.RolePolicyDocument : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;

    }
}

/**
 * UpdateUserSyncProvisioning response structure.
 * @class
 */
class UpdateUserSyncProvisioningResponse extends  AbstractModel {
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
 * CreateGroup response structure.
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User group information.
         * @type {GroupInfo || null}
         */
        this.GroupInfo = null;

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

        if (params.GroupInfo) {
            let obj = new GroupInfo();
            obj.deserialize(params.GroupInfo)
            this.GroupInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateZone request structure.
 * @class
 */
class UpdateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Space ID, which starts with the z- prefix, followed by 12 random digits/lowercase letters.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Space name, which must be globally unique and contain 2-64 characters including lowercase letters, digits, and hyphens (-). It can neither start or end with a hyphen (-) nor contain two consecutive hyphens (-).
         * @type {string || null}
         */
        this.NewZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.NewZoneName = 'NewZoneName' in params ? params.NewZoneName : null;

    }
}

/**
 * DeleteSCIMCredential response structure.
 * @class
 */
class DeleteSCIMCredentialResponse extends  AbstractModel {
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

module.exports = {
    ListTasksRequest: ListTasksRequest,
    ListRoleConfigurationsRequest: ListRoleConfigurationsRequest,
    DeleteSCIMCredentialRequest: DeleteSCIMCredentialRequest,
    ListGroupMembersResponse: ListGroupMembersResponse,
    SetExternalSAMLIdentityProviderRequest: SetExternalSAMLIdentityProviderRequest,
    ListGroupMembersRequest: ListGroupMembersRequest,
    RoleConfigurationProvisionings: RoleConfigurationProvisionings,
    UpdatePolicyRequest: UpdatePolicyRequest,
    DescribeShareUnitResourcesResponse: DescribeShareUnitResourcesResponse,
    RoleConfiguration: RoleConfiguration,
    DescribeOrganizationMemberEmailBindResponse: DescribeOrganizationMemberEmailBindResponse,
    EnablePolicyTypeResponse: EnablePolicyTypeResponse,
    ListTargetsForPolicyResponse: ListTargetsForPolicyResponse,
    DeleteUserRequest: DeleteUserRequest,
    RoleProvisioningsTask: RoleProvisioningsTask,
    ProvisionRoleConfigurationRequest: ProvisionRoleConfigurationRequest,
    ListNonCompliantResourceResponse: ListNonCompliantResourceResponse,
    DeleteUserResponse: DeleteUserResponse,
    UpdateZoneResponse: UpdateZoneResponse,
    DeleteOrganizationRequest: DeleteOrganizationRequest,
    TagComplianceDetails: TagComplianceDetails,
    RejectJoinShareUnitInvitationRequest: RejectJoinShareUnitInvitationRequest,
    DescribeIdentityCenterResponse: DescribeIdentityCenterResponse,
    DescribePolicyConfigResponse: DescribePolicyConfigResponse,
    GetZoneStatisticsResponse: GetZoneStatisticsResponse,
    GetExternalSAMLIdentityProviderResponse: GetExternalSAMLIdentityProviderResponse,
    ListOrganizationIdentityRequest: ListOrganizationIdentityRequest,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    CreateOrganizationResponse: CreateOrganizationResponse,
    AddShareUnitResourcesResponse: AddShareUnitResourcesResponse,
    IdentityPolicy: IdentityPolicy,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    UpdateSCIMSynchronizationStatusResponse: UpdateSCIMSynchronizationStatusResponse,
    ListPermissionPoliciesInRoleConfigurationResponse: ListPermissionPoliciesInRoleConfigurationResponse,
    MoveOrganizationNodeMembersResponse: MoveOrganizationNodeMembersResponse,
    AttachPolicyRequest: AttachPolicyRequest,
    DeleteShareUnitResponse: DeleteShareUnitResponse,
    UpdateShareUnitRequest: UpdateShareUnitRequest,
    RemoveExternalSAMLIdPCertificateResponse: RemoveExternalSAMLIdPCertificateResponse,
    CreateGroupRequest: CreateGroupRequest,
    ListUsersResponse: ListUsersResponse,
    DeleteRoleConfigurationRequest: DeleteRoleConfigurationRequest,
    CreateOrganizationIdentityRequest: CreateOrganizationIdentityRequest,
    ListOrganizationServiceResponse: ListOrganizationServiceResponse,
    DeleteUserSyncProvisioningResponse: DeleteUserSyncProvisioningResponse,
    ProvisionRoleConfigurationResponse: ProvisionRoleConfigurationResponse,
    ListUserSyncProvisioningsResponse: ListUserSyncProvisioningsResponse,
    DeletePolicyResponse: DeletePolicyResponse,
    DescribeOrganizationResponse: DescribeOrganizationResponse,
    ListNonCompliantResourceRequest: ListNonCompliantResourceRequest,
    DisablePolicyTypeResponse: DisablePolicyTypeResponse,
    DescribeOrganizationMemberPoliciesRequest: DescribeOrganizationMemberPoliciesRequest,
    DescribeEffectivePolicyRequest: DescribeEffectivePolicyRequest,
    CreateOrgServiceAssignRequest: CreateOrgServiceAssignRequest,
    TaskStatus: TaskStatus,
    DeleteOrganizationMembersPolicyResponse: DeleteOrganizationMembersPolicyResponse,
    DismantleRoleConfigurationResponse: DismantleRoleConfigurationResponse,
    ClearExternalSAMLIdentityProviderRequest: ClearExternalSAMLIdentityProviderRequest,
    CreateUserSyncProvisioningResponse: CreateUserSyncProvisioningResponse,
    ListUserSyncProvisioningsRequest: ListUserSyncProvisioningsRequest,
    ShareUnitMember: ShareUnitMember,
    UpdateUserSyncProvisioningRequest: UpdateUserSyncProvisioningRequest,
    ListRoleAssignmentsRequest: ListRoleAssignmentsRequest,
    CancelOrganizationMemberAuthAccountRequest: CancelOrganizationMemberAuthAccountRequest,
    GetGroupRequest: GetGroupRequest,
    OrganizationServiceAssign: OrganizationServiceAssign,
    DeleteOrganizationResponse: DeleteOrganizationResponse,
    DismantleRoleConfigurationRequest: DismantleRoleConfigurationRequest,
    UpdateCustomPolicyForRoleConfigurationResponse: UpdateCustomPolicyForRoleConfigurationResponse,
    DescribeShareUnitMembersResponse: DescribeShareUnitMembersResponse,
    MemberMainInfo: MemberMainInfo,
    CreateRoleAssignmentRequest: CreateRoleAssignmentRequest,
    DeleteShareUnitResourcesRequest: DeleteShareUnitResourcesRequest,
    Tag: Tag,
    RejectJoinShareUnitInvitationResponse: RejectJoinShareUnitInvitationResponse,
    UpdateShareUnitResponse: UpdateShareUnitResponse,
    ListRoleAssignmentsResponse: ListRoleAssignmentsResponse,
    UpdateUserResponse: UpdateUserResponse,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    AddPermissionPolicyToRoleConfigurationRequest: AddPermissionPolicyToRoleConfigurationRequest,
    OrgPermission: OrgPermission,
    ListPoliciesResponse: ListPoliciesResponse,
    BindOrganizationMemberAuthAccountRequest: BindOrganizationMemberAuthAccountRequest,
    DescribeShareUnitsResponse: DescribeShareUnitsResponse,
    SAMLIdentityProviderConfiguration: SAMLIdentityProviderConfiguration,
    UpdateOrganizationMemberEmailBindResponse: UpdateOrganizationMemberEmailBindResponse,
    GetZoneSAMLServiceProviderInfoResponse: GetZoneSAMLServiceProviderInfoResponse,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,
    ManagerShareUnit: ManagerShareUnit,
    UpdateSCIMCredentialStatusResponse: UpdateSCIMCredentialStatusResponse,
    DescribeShareUnitNodesResponse: DescribeShareUnitNodesResponse,
    ShareUnitResource: ShareUnitResource,
    DescribeOrganizationMemberAuthIdentitiesRequest: DescribeOrganizationMemberAuthIdentitiesRequest,
    CreateOrganizationMemberAuthIdentityResponse: CreateOrganizationMemberAuthIdentityResponse,
    DeleteOrgServiceAssignRequest: DeleteOrgServiceAssignRequest,
    DescribeOrganizationRequest: DescribeOrganizationRequest,
    ListPermissionPoliciesInRoleConfigurationRequest: ListPermissionPoliciesInRoleConfigurationRequest,
    ClearExternalSAMLIdentityProviderResponse: ClearExternalSAMLIdentityProviderResponse,
    AddExternalSAMLIdPCertificateResponse: AddExternalSAMLIdPCertificateResponse,
    CreateOrganizationMemberResponse: CreateOrganizationMemberResponse,
    RoleAssignments: RoleAssignments,
    MoveOrganizationNodeMembersRequest: MoveOrganizationNodeMembersRequest,
    GetTaskStatusResponse: GetTaskStatusResponse,
    UserSyncProvisioning: UserSyncProvisioning,
    AddShareUnitNodeRequest: AddShareUnitNodeRequest,
    UpdateOrganizationMemberResponse: UpdateOrganizationMemberResponse,
    CreateSCIMCredentialResponse: CreateSCIMCredentialResponse,
    DeleteGroupRequest: DeleteGroupRequest,
    GetUserResponse: GetUserResponse,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    EnablePolicyTypeRequest: EnablePolicyTypeRequest,
    CreatePolicyResponse: CreatePolicyResponse,
    EffectivePolicy: EffectivePolicy,
    UpdateCustomPolicyForRoleConfigurationRequest: UpdateCustomPolicyForRoleConfigurationRequest,
    AddOrganizationMemberEmailRequest: AddOrganizationMemberEmailRequest,
    ListOrganizationIdentityResponse: ListOrganizationIdentityResponse,
    CancelOrganizationPolicySubAccountRequest: CancelOrganizationPolicySubAccountRequest,
    ShareArea: ShareArea,
    DeletePolicyRequest: DeletePolicyRequest,
    CancelOrganizationPolicySubAccountResponse: CancelOrganizationPolicySubAccountResponse,
    DescribeOrganizationMembersAuthPolicyRequest: DescribeOrganizationMembersAuthPolicyRequest,
    GroupInfo: GroupInfo,
    GetSCIMSynchronizationStatusResponse: GetSCIMSynchronizationStatusResponse,
    GetZoneStatisticsRequest: GetZoneStatisticsRequest,
    NodeMainInfo: NodeMainInfo,
    RemovePermissionPolicyFromRoleConfigurationRequest: RemovePermissionPolicyFromRoleConfigurationRequest,
    InviteOrganizationMemberRequest: InviteOrganizationMemberRequest,
    QuitOrganizationRequest: QuitOrganizationRequest,
    ListTasksResponse: ListTasksResponse,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    AddShareUnitMembersRequest: AddShareUnitMembersRequest,
    AddShareUnitRequest: AddShareUnitRequest,
    SendOrgMemberAccountBindEmailResponse: SendOrgMemberAccountBindEmailResponse,
    OrgNode: OrgNode,
    OpenIdentityCenterRequest: OpenIdentityCenterRequest,
    DescribeOrganizationMemberAuthAccountsRequest: DescribeOrganizationMemberAuthAccountsRequest,
    SCIMCredential: SCIMCredential,
    GetUserRequest: GetUserRequest,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    AcceptJoinShareUnitInvitationResponse: AcceptJoinShareUnitInvitationResponse,
    DescribeShareAreasRequest: DescribeShareAreasRequest,
    DescribeOrganizationMemberAuthAccountsResponse: DescribeOrganizationMemberAuthAccountsResponse,
    DeleteShareUnitNodeRequest: DeleteShareUnitNodeRequest,
    RoleAssignmentInfo: RoleAssignmentInfo,
    DeleteShareUnitNodeResponse: DeleteShareUnitNodeResponse,
    ListRoleConfigurationProvisioningsRequest: ListRoleConfigurationProvisioningsRequest,
    GetSCIMSynchronizationStatusRequest: GetSCIMSynchronizationStatusRequest,
    OrgIdentity: OrgIdentity,
    DescribeIdentityCenterRequest: DescribeIdentityCenterRequest,
    DescribeOrganizationMembersResponse: DescribeOrganizationMembersResponse,
    ListPoliciesForTargetRequest: ListPoliciesForTargetRequest,
    UserInfo: UserInfo,
    DeleteOrganizationMemberAuthIdentityResponse: DeleteOrganizationMemberAuthIdentityResponse,
    UpdateOrganizationMemberEmailBindRequest: UpdateOrganizationMemberEmailBindRequest,
    TaskInfo: TaskInfo,
    BindOrganizationPolicySubAccountResponse: BindOrganizationPolicySubAccountResponse,
    DeleteOrganizationMemberAuthIdentityRequest: DeleteOrganizationMemberAuthIdentityRequest,
    UpdateUserRequest: UpdateUserRequest,
    ListTargetsForPolicyNode: ListTargetsForPolicyNode,
    ListGroupsRequest: ListGroupsRequest,
    UpdateRoleConfigurationRequest: UpdateRoleConfigurationRequest,
    DetachPolicyRequest: DetachPolicyRequest,
    UpdateOrganizationIdentityRequest: UpdateOrganizationIdentityRequest,
    ListOrgServiceAssignMemberResponse: ListOrgServiceAssignMemberResponse,
    SendOrgMemberAccountBindEmailRequest: SendOrgMemberAccountBindEmailRequest,
    DeleteRoleAssignmentResponse: DeleteRoleAssignmentResponse,
    DisablePolicyTypeRequest: DisablePolicyTypeRequest,
    DescribeEffectivePolicyResponse: DescribeEffectivePolicyResponse,
    CreateOrgServiceAssignResponse: CreateOrgServiceAssignResponse,
    AddOrganizationMemberEmailResponse: AddOrganizationMemberEmailResponse,
    DescribeResourceToShareMemberRequest: DescribeResourceToShareMemberRequest,
    AddShareUnitMembersResponse: AddShareUnitMembersResponse,
    ListGroupsResponse: ListGroupsResponse,
    CreateOrganizationMemberPolicyRequest: CreateOrganizationMemberPolicyRequest,
    SAMLIdPCertificate: SAMLIdPCertificate,
    CreateOrganizationRequest: CreateOrganizationRequest,
    ListJoinedGroupsForUserRequest: ListJoinedGroupsForUserRequest,
    UpdateRoleConfigurationResponse: UpdateRoleConfigurationResponse,
    AttachPolicyResponse: AttachPolicyResponse,
    CreateOrganizationMembersPolicyRequest: CreateOrganizationMembersPolicyRequest,
    MemberIdentity: MemberIdentity,
    Tags: Tags,
    GetExternalSAMLIdentityProviderRequest: GetExternalSAMLIdentityProviderRequest,
    DetachPolicyResponse: DetachPolicyResponse,
    DeleteRoleConfigurationResponse: DeleteRoleConfigurationResponse,
    OrganizationServiceAssignMember: OrganizationServiceAssignMember,
    AddShareUnitResponse: AddShareUnitResponse,
    DescribeShareUnitResourcesRequest: DescribeShareUnitResourcesRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    GetGroupResponse: GetGroupResponse,
    GetProvisioningTaskStatusResponse: GetProvisioningTaskStatusResponse,
    ListPolicyNode: ListPolicyNode,
    ResourceTagMapping: ResourceTagMapping,
    CreateOrganizationMemberPolicyResponse: CreateOrganizationMemberPolicyResponse,
    UpdateSCIMSynchronizationStatusRequest: UpdateSCIMSynchronizationStatusRequest,
    AcceptJoinShareUnitInvitationRequest: AcceptJoinShareUnitInvitationRequest,
    CancelOrganizationMemberAuthAccountResponse: CancelOrganizationMemberAuthAccountResponse,
    GetTaskStatusRequest: GetTaskStatusRequest,
    AddShareUnitResourcesRequest: AddShareUnitResourcesRequest,
    GetRoleConfigurationResponse: GetRoleConfigurationResponse,
    ShareMember: ShareMember,
    SetExternalSAMLIdentityProviderResponse: SetExternalSAMLIdentityProviderResponse,
    ListPoliciesForTargetResponse: ListPoliciesForTargetResponse,
    DeleteShareUnitMembersRequest: DeleteShareUnitMembersRequest,
    OpenIdentityCenterResponse: OpenIdentityCenterResponse,
    ListUsersRequest: ListUsersRequest,
    DescribeOrganizationMemberAuthIdentitiesResponse: DescribeOrganizationMemberAuthIdentitiesResponse,
    CreateRoleAssignmentResponse: CreateRoleAssignmentResponse,
    OrgMemberPolicy: OrgMemberPolicy,
    CreateUserRequest: CreateUserRequest,
    QuitOrganizationResponse: QuitOrganizationResponse,
    DescribeResourceToShareMemberResponse: DescribeResourceToShareMemberResponse,
    UpdatePolicyResponse: UpdatePolicyResponse,
    DeleteShareUnitMembersResponse: DeleteShareUnitMembersResponse,
    UpdateGroupResponse: UpdateGroupResponse,
    ListExternalSAMLIdPCertificatesRequest: ListExternalSAMLIdPCertificatesRequest,
    DeleteOrganizationIdentityResponse: DeleteOrganizationIdentityResponse,
    DescribeOrganizationMemberEmailBindRequest: DescribeOrganizationMemberEmailBindRequest,
    RemovePermissionPolicyFromRoleConfigurationResponse: RemovePermissionPolicyFromRoleConfigurationResponse,
    ListPoliciesRequest: ListPoliciesRequest,
    BindOrganizationPolicySubAccountRequest: BindOrganizationPolicySubAccountRequest,
    OrgMemberAuthAccount: OrgMemberAuthAccount,
    UpdateOrganizationMembersPolicyRequest: UpdateOrganizationMembersPolicyRequest,
    CreateOrganizationMemberRequest: CreateOrganizationMemberRequest,
    AuthRelationFile: AuthRelationFile,
    CreatePolicyRequest: CreatePolicyRequest,
    OrgMemberAuthIdentity: OrgMemberAuthIdentity,
    PolicyDetail: PolicyDetail,
    DescribePolicyConfigRequest: DescribePolicyConfigRequest,
    AddExternalSAMLIdPCertificateRequest: AddExternalSAMLIdPCertificateRequest,
    GetProvisioningTaskStatusRequest: GetProvisioningTaskStatusRequest,
    ListJoinedGroupsForUserResponse: ListJoinedGroupsForUserResponse,
    SAMLServiceProvider: SAMLServiceProvider,
    OrgMembersAuthPolicy: OrgMembersAuthPolicy,
    UpdateUserStatusResponse: UpdateUserStatusResponse,
    UpdateGroupRequest: UpdateGroupRequest,
    ListExternalSAMLIdPCertificatesResponse: ListExternalSAMLIdPCertificatesResponse,
    DescribePolicyResponse: DescribePolicyResponse,
    DescribeShareUnitNodesRequest: DescribeShareUnitNodesRequest,
    DescribeShareUnitMembersRequest: DescribeShareUnitMembersRequest,
    RemoveExternalSAMLIdPCertificateRequest: RemoveExternalSAMLIdPCertificateRequest,
    ListPoliciesForTarget: ListPoliciesForTarget,
    GetUserSyncProvisioningRequest: GetUserSyncProvisioningRequest,
    CreateOrganizationMemberAuthIdentityRequest: CreateOrganizationMemberAuthIdentityRequest,
    GetUserSyncProvisioningResponse: GetUserSyncProvisioningResponse,
    ListRoleConfigurationProvisioningsResponse: ListRoleConfigurationProvisioningsResponse,
    OrgMember: OrgMember,
    AddPermissionPolicyToRoleConfigurationResponse: AddPermissionPolicyToRoleConfigurationResponse,
    ListOrganizationServiceRequest: ListOrganizationServiceRequest,
    CreateRoleConfigurationRequest: CreateRoleConfigurationRequest,
    UpdateOrganizationMemberRequest: UpdateOrganizationMemberRequest,
    CreateOrganizationMembersPolicyResponse: CreateOrganizationMembersPolicyResponse,
    GetRoleConfigurationRequest: GetRoleConfigurationRequest,
    AddUserToGroupRequest: AddUserToGroupRequest,
    CreateOrganizationIdentityResponse: CreateOrganizationIdentityResponse,
    DescribeOrganizationMembersRequest: DescribeOrganizationMembersRequest,
    GetZoneSAMLServiceProviderInfoRequest: GetZoneSAMLServiceProviderInfoRequest,
    ListRoleConfigurationsResponse: ListRoleConfigurationsResponse,
    ListSCIMCredentialsResponse: ListSCIMCredentialsResponse,
    DescribeOrganizationNodesRequest: DescribeOrganizationNodesRequest,
    ShareResourceToMember: ShareResourceToMember,
    InviteOrganizationMemberResponse: InviteOrganizationMemberResponse,
    BindOrganizationMemberAuthAccountResponse: BindOrganizationMemberAuthAccountResponse,
    ListOrgServiceAssignMemberRequest: ListOrgServiceAssignMemberRequest,
    UpdateOrganizationIdentityResponse: UpdateOrganizationIdentityResponse,
    DescribeShareAreasResponse: DescribeShareAreasResponse,
    CreateUserResponse: CreateUserResponse,
    DeleteShareUnitResourcesResponse: DeleteShareUnitResourcesResponse,
    DeleteUserSyncProvisioningRequest: DeleteUserSyncProvisioningRequest,
    DescribeOrganizationNodesResponse: DescribeOrganizationNodesResponse,
    CreateUserSyncProvisioningRequest: CreateUserSyncProvisioningRequest,
    DeleteOrganizationMembersPolicyRequest: DeleteOrganizationMembersPolicyRequest,
    CreateSCIMCredentialRequest: CreateSCIMCredentialRequest,
    DescribeOrganizationMembersAuthPolicyResponse: DescribeOrganizationMembersAuthPolicyResponse,
    DescribePolicyRequest: DescribePolicyRequest,
    DeleteGroupResponse: DeleteGroupResponse,
    UpdateOrganizationMembersPolicyResponse: UpdateOrganizationMembersPolicyResponse,
    UpdateUserStatusRequest: UpdateUserStatusRequest,
    JoinedGroups: JoinedGroups,
    CreateRoleConfigurationResponse: CreateRoleConfigurationResponse,
    GroupMembers: GroupMembers,
    ShareResource: ShareResource,
    DeleteRoleAssignmentRequest: DeleteRoleAssignmentRequest,
    ListTargetsForPolicyRequest: ListTargetsForPolicyRequest,
    DeleteOrganizationIdentityRequest: DeleteOrganizationIdentityRequest,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    ShareUnitNode: ShareUnitNode,
    ZoneStatistics: ZoneStatistics,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    AddUserToGroupResponse: AddUserToGroupResponse,
    ProductResource: ProductResource,
    DeleteShareUnitRequest: DeleteShareUnitRequest,
    DeleteOrgServiceAssignResponse: DeleteOrgServiceAssignResponse,
    DescribeOrganizationMemberPoliciesResponse: DescribeOrganizationMemberPoliciesResponse,
    DescribeShareUnitsRequest: DescribeShareUnitsRequest,
    UserProvisioningsTask: UserProvisioningsTask,
    UserProvisioning: UserProvisioning,
    ListSCIMCredentialsRequest: ListSCIMCredentialsRequest,
    UpdateSCIMCredentialStatusRequest: UpdateSCIMCredentialStatusRequest,
    AddShareUnitNodeResponse: AddShareUnitNodeResponse,
    RolePolicie: RolePolicie,
    UpdateUserSyncProvisioningResponse: UpdateUserSyncProvisioningResponse,
    CreateGroupResponse: CreateGroupResponse,
    UpdateZoneRequest: UpdateZoneRequest,
    DeleteSCIMCredentialResponse: DeleteSCIMCredentialResponse,

}
