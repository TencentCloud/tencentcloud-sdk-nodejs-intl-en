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
 * InitDCDBInstances response structure.
 * @class
 */
class InitDCDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. The task status can be queried through the `DescribeFlow` API.
         * @type {Array.<number> || null}
         */
        this.FlowIds = null;

        /**
         * Passed through from the input parameters.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges response structure.
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of permissions.
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * Database account username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database account host
         * @type {string || null}
         */
        this.Host = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases request structure.
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DB parameter description
 * @class
 */
class ParamDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Current parameter value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Previously set value, which is the same as `value` after the parameter takes effect. If no value has been set, this field will not be returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SetValue = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter constraint
         * @type {ParamConstraint || null}
         */
        this.Constraint = null;

        /**
         * Whether a value has been set. false: no, true: yes
         * @type {boolean || null}
         */
        this.HaveSetValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SetValue = 'SetValue' in params ? params.SetValue : null;
        this.Default = 'Default' in params ? params.Default : null;

        if (params.Constraint) {
            let obj = new ParamConstraint();
            obj.deserialize(params.Constraint)
            this.Constraint = obj;
        }
        this.HaveSetValue = 'HaveSetValue' in params ? params.HaveSetValue : null;

    }
}

/**
 * DescribeDBParameters request structure.
 * @class
 */
class DescribeDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * AssociateSecurityGroups request structure.
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `dcdb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the security group to be associated in the format of sg-efil73jd.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * ID(s) of the instance(s) to be associated in the format of tdsqlshard-lesecurk. You can specify multiple instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeDBSecurityGroups response structure.
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group details
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Instance VIP
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * Instance port
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VPort = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSyncMode response structure.
 * @class
 */
class DescribeDBSyncModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sync mode. 0: async; 1: strong sync; 2: downgradable strong sync
         * @type {number || null}
         */
        this.SyncMode = null;

        /**
         * Whether a modification is in progress. 1: yes; 0: no.
         * @type {number || null}
         */
        this.IsModifying = null;

        /**
         * Current sync mode. Valid values: `0` (async), `1` (sync).
         * @type {number || null}
         */
        this.CurrentSyncMode = null;

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
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.IsModifying = 'IsModifying' in params ? params.IsModifying : null;
        this.CurrentSyncMode = 'CurrentSyncMode' in params ? params.CurrentSyncMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroups request structure.
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `dcdb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateAccount request structure.
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc, which can be obtained through the `DescribeDCDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * AccountName
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Host that can be logged in to, which is in the same format as the host of the MySQL account and supports wildcards, such as %, 10.%, and 10.20.%.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Account password, which can contain 6-32 letters, digits, and common symbols but not semicolons, single quotation marks, and double quotation marks.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to create a read-only account. 0: no; 1: for the account's SQL requests, the secondary will be used first, and if it is unavailable, the primary will be used; 2: the secondary will be used first, and if it is unavailable, the operation will fail; 3: only the secondary will be read from.
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * Account remarks, which can contain 0-256 letters, digits, and common symbols.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * If the secondary delay exceeds the set value of this parameter, the secondary will be deemed to have failed.
It is recommended that this parameter be set to a value greater than 10. This parameter takes effect when `ReadOnly` is 1 or 2.
         * @type {number || null}
         */
        this.DelayThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * DescribeDBParameters response structure.
 * @class
 */
class DescribeDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Requests the current parameter values of a DB
         * @type {Array.<ParamDesc> || null}
         */
        this.Params = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ParamDesc();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlow response structure.
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: `0` (succeeded), `1` (failed), `2` (running)
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloneAccount response structure.
 * @class
 */
class CloneAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription response structure.
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * DestroyDCDBInstance request structure.
 * @class
 */
class DestroyDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of tdsqlshard-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * OpenDBExtranetAccess response structure.
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. The task status can be queried through the `DescribeFlow` API.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter constraint
 * @class
 */
class ParamConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Constraint type, such as enum and section
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of valid values when constraint type is `enum`
         * @type {string || null}
         */
        this.Enum = null;

        /**
         * Range when constraint type is `section`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ConstraintRange || null}
         */
        this.Range = null;

        /**
         * List of valid values when constraint type is `string`
         * @type {string || null}
         */
        this.String = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Enum = 'Enum' in params ? params.Enum : null;

        if (params.Range) {
            let obj = new ConstraintRange();
            obj.deserialize(params.Range)
            this.Range = obj;
        }
        this.String = 'String' in params ? params.String : null;

    }
}

/**
 * ModifyDBInstancesProject response structure.
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
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
 * DescribeDCDBInstanceNodeInfo request structure.
 * @class
 */
class DescribeDCDBInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The maximum number of results returned at a time. Value range: (0-100]. Default value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset of the returned results. Default value: `0`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Database view information
 * @class
 */
class DatabaseView extends  AbstractModel {
    constructor(){
        super();

        /**
         * View name
         * @type {string || null}
         */
        this.View = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.View = 'View' in params ? params.View : null;

    }
}

/**
 * DescribeDBLogFiles request structure.
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard ID in the format of shard-7noic7tv
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * Requested log type. Valid values: 1 (binlog); 2 (cold backup); 3 (errlog); 4 (slowlog).
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DCN details
 * @class
 */
class DcnDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region where the instance resides
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone where the instance resides
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance IP address
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Instance IPv6 address
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * Instance port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * DCN flag. Valid values: `1` (primary), `2` (disaster recovery)
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * DCN status. Valid values: `0` (none), `1` (creating), `2` (syncing), `3` (disconnected)
         * @type {number || null}
         */
        this.DcnStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;

    }
}

/**
 * ResetAccountPassword request structure.
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for a user. An account is uniquely identified by username and host.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * New password, which can contain 6-32 letters, digits, and common symbols but not semicolons, single quotation marks, and double quotation marks.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CopyAccountPrivileges response structure.
 * @class
 */
class CopyAccountPrivilegesResponse extends  AbstractModel {
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
 * CloneAccount request structure.
 * @class
 */
class CloneAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Source user account name
         * @type {string || null}
         */
        this.SrcUser = null;

        /**
         * Source user host
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * Target user account name
         * @type {string || null}
         */
        this.DstUser = null;

        /**
         * Target user host
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * Description of a target account
         * @type {string || null}
         */
        this.DstDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUser = 'SrcUser' in params ? params.SrcUser : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUser = 'DstUser' in params ? params.DstUser : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.DstDesc = 'DstDesc' in params ? params.DstDesc : null;

    }
}

/**
 * Parameter modification result
 * @class
 */
class ParamModifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Renames a parameter
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Result of parameter modification. 0: success; -1: failure; -2: invalid parameter value
         * @type {number || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DescribeDBSecurityGroups request structure.
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `dcdb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeProjectSecurityGroups response structure.
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group details
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database function information
 * @class
 */
class DatabaseFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Func = 'Func' in params ? params.Func : null;

    }
}

/**
 * Node information of a sharded database
 * @class
 */
class BriefNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node role. Valid values: `master`, `slave`
         * @type {string || null}
         */
        this.Role = null;

        /**
         * The ID of the shard where the node resides
         * @type {string || null}
         */
        this.ShardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;

    }
}

/**
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * DescribeDatabaseObjects request structure.
 * @class
 */
class DescribeDatabaseObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database name, which can be obtained through the `DescribeDatabases` API.
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * DescribeDBLogFiles response structure.
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Requested log type. Valid values: 1 (binlog); 2 (cold backup); 3 (errlog); 4 (slowlog).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Total number of requested logs
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of log files
         * @type {Array.<LogFileInfo> || null}
         */
        this.Files = null;

        /**
         * For an instance in a VPC, this prefix plus URI can be used as the download address
         * @type {string || null}
         */
        this.VpcPrefix = null;

        /**
         * For an instance in a common network, this prefix plus URI can be used as the download address
         * @type {string || null}
         */
        this.NormalPrefix = null;

        /**
         * Shard ID in the format of shard-7noic7tv
         * @type {string || null}
         */
        this.ShardId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new LogFileInfo();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.VpcPrefix = 'VpcPrefix' in params ? params.VpcPrefix : null;
        this.NormalPrefix = 'NormalPrefix' in params ? params.NormalPrefix : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database table information
 * @class
 */
class DatabaseTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * GrantAccountPrivileges request structure.
 * @class
 */
class GrantAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for a user. An account is uniquely identified by username and host.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name. `\*` indicates that global permissions will be queried (i.e., `\*.\*`), in which case the `Type` and `Object ` parameters will be ignored
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Global permission. Valid values: SELECT; INSERT; UPDATE; DELETE; CREATE; DROP; REFERENCES; INDEX; ALTER; CREATE TEMPORARY TABLES; LOCK TABLES; EXECUTE; CREATE VIEW; SHOW VIEW; CREATE ROUTINE; ALTER ROUTINE; EVENT; TRIGGER; SHOW DATABASES 
Database permission. Valid values: SELECT; INSERT; UPDATE; DELETE; CREATE; DROP; REFERENCES; INDEX; ALTER; CREATE TEMPORARY TABLES; LOCK TABLES; EXECUTE; CREATE VIEW; SHOW VIEW; CREATE ROUTINE; ALTER ROUTINE; EVENT; TRIGGER 
Table/view permission. Valid values: SELECT; INSERT; UPDATE; DELETE; CREATE; DROP; REFERENCES; INDEX; ALTER; CREATE VIEW; SHOW VIEW; TRIGGER 
Stored procedure/function permission. Valid values: ALTER ROUTINE; EXECUTE 
Field permission. Valid values: INSERT; REFERENCES; SELECT; UPDATE
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * Type. Valid values: table; view; proc; func; \*. If `DbName` is a specific database name and `Type` is `\*`, the permissions of the database will be set (i.e., `db.\*`), in which case the `Object` parameter will be ignored
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Type name. For example, if `Type` is table, `Object` indicates a specific table name; if both `DbName` and `Type` are specific names, it indicates a specific object name and cannot be `\*` or empty
         * @type {string || null}
         */
        this.Object = null;

        /**
         * If `Type` = table and `ColName` is `\*`, the permissions will be granted to the table; if `ColName` is a specific field name, the permissions will be granted to the field
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeDCDBShards request structure.
 * @class
 */
class DescribeDCDBShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard ID list.
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sort by field. Only `createtime` is supported currently
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sort by type. Valid values: desc; asc
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardInstanceIds = 'ShardInstanceIds' in params ? params.ShardInstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * TencentDB parameter information.
 * @class
 */
class DBParamValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Parameter value
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
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyDBParameters request structure.
 * @class
 */
class ModifyDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of parameters. Every element is a combination of `Param` and `Value`.
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * TDSQL instance information
 * @class
 */
class DCDBInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Numeric ID of a VPC
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet Digital ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Instance status. Valid values: `0` (creating), `1` (running task), `2` (running), `3` (uninitialized), `-1` (isolated), `-2` (eliminated), `4` (initializing), `5` (eliminating), `6` (restarting), `7` (migrating data)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Private IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Auto-renewal flag
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Isolation time
         * @type {string || null}
         */
        this.IsolatedTimestamp = null;

        /**
         * Account ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Shard details
         * @type {Array.<ShardInfo> || null}
         */
        this.ShardDetail = null;

        /**
         * Number of nodes. 2: one master and one slave; 3: one master and two slaves
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Temporary instance flag. 0: non-temporary instance
         * @type {number || null}
         */
        this.IsTmp = null;

        /**
         * Dedicated cluster ID. If this parameter is empty, the instance is a non-dedicated cluster instance
         * @type {string || null}
         */
        this.ExclusterId = null;

        /**
         * VPC ID in string type
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * VPC subnet ID in string type
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * Numeric ID of instance (this field is obsolete and should not be depended on)
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain name for public network access, which can be resolved by the public network
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Public IP address, which can be accessed over the public network
         * @type {string || null}
         */
        this.WanVip = null;

        /**
         * Public network port
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Product type ID (this field is obsolete and should not be depended on)
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Last updated time of an instance in the format of 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Database engine
         * @type {string || null}
         */
        this.DbEngine = null;

        /**
         * Database engine version
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * Billing mode
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * Async task flow ID when an async task is in progress on an instance
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Locker = null;

        /**
         * Public network access status. 0: not enabled; 1: enabled; 2: disabled; 3: enabling
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * Whether the instance supports audit. 1: yes; 0: no
         * @type {number || null}
         */
        this.IsAuditSupported = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Indicates whether the instance uses IPv6
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * Private network IPv6 address
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * Public network IPv6 address
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WanVipv6 = null;

        /**
         * Public network IPv6 port
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WanPortIpv6 = null;

        /**
         * Public network IPv6 status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WanStatusIpv6 = null;

        /**
         * DCN type. Valid values: 0 (null), 1 (primary instance), 2 (disaster recovery instance)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * DCN status. Valid values: 0 (null), 1 (creating), 2 (syncing), 3 (disconnected)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DcnStatus = null;

        /**
         * The number of DCN disaster recovery instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DcnDstNum = null;

        /**
         * Instance type. Valid values: `1` (dedicated primary instance), `2` (standard primary instance), `3` (standard disaster recovery instance), `4` (dedicated disaster recovery instance)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.IsolatedTimestamp = 'IsolatedTimestamp' in params ? params.IsolatedTimestamp : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

        if (params.ShardDetail) {
            this.ShardDetail = new Array();
            for (let z in params.ShardDetail) {
                let obj = new ShardInfo();
                obj.deserialize(params.ShardDetail[z]);
                this.ShardDetail.push(obj);
            }
        }
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.IsTmp = 'IsTmp' in params ? params.IsTmp : null;
        this.ExclusterId = 'ExclusterId' in params ? params.ExclusterId : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanVip = 'WanVip' in params ? params.WanVip : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DbEngine = 'DbEngine' in params ? params.DbEngine : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.IsAuditSupported = 'IsAuditSupported' in params ? params.IsAuditSupported : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.WanVipv6 = 'WanVipv6' in params ? params.WanVipv6 : null;
        this.WanPortIpv6 = 'WanPortIpv6' in params ? params.WanPortIpv6 : null;
        this.WanStatusIpv6 = 'WanStatusIpv6' in params ? params.WanStatusIpv6 : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.DcnDstNum = 'DcnDstNum' in params ? params.DcnDstNum : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `dcdb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of IDs of security groups to be modified, which is an array of one or more security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeDcnDetail request structure.
 * @class
 */
class DescribeDcnDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyDBParameters response structure.
 * @class
 */
class ModifyDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Parameter modification results
         * @type {Array.<ParamModifyResult> || null}
         */
        this.Result = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ParamModifyResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of a TDSQL shard.
 * @class
 */
class DCDBShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard SQL passthrough ID, which is used to pass through SQL statements to the specified shard for execution
         * @type {string || null}
         */
        this.ShardSerialId = null;

        /**
         * Globally unique shard ID
         * @type {string || null}
         */
        this.ShardInstanceId = null;

        /**
         * Status. 0: creating; 1: processing; 2: running; 3: shard not initialized
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * VPC ID in string format
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID in string format
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Number of nodes. 2: one primary and one secondary; 3: one primary and two secondaries
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Storage utilization in %
         * @type {number || null}
         */
        this.StorageUsage = null;

        /**
         * Memory utilization in %
         * @type {number || null}
         */
        this.MemoryUsage = null;

        /**
         * Numeric ID of a shard (this field is obsolete and should not be depended on)
         * @type {number || null}
         */
        this.ShardId = null;

        /**
         * ProductID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Proxy version
         * @type {string || null}
         */
        this.ProxyVersion = null;

        /**
         * Billing mode
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * Master AZ of a shard
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ShardMasterZone = null;

        /**
         * List of secondary AZs of a shard
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ShardSlaveZones = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * The value range of shardkey, which includes 64 hash values, such as 0-31, 32-63.
         * @type {string || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardSerialId = 'ShardSerialId' in params ? params.ShardSerialId : null;
        this.ShardInstanceId = 'ShardInstanceId' in params ? params.ShardInstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.StorageUsage = 'StorageUsage' in params ? params.StorageUsage : null;
        this.MemoryUsage = 'MemoryUsage' in params ? params.MemoryUsage : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.ProxyVersion = 'ProxyVersion' in params ? params.ProxyVersion : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.ShardMasterZone = 'ShardMasterZone' in params ? params.ShardMasterZone : null;
        this.ShardSlaveZones = 'ShardSlaveZones' in params ? params.ShardSlaveZones : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * CopyAccountPrivileges request structure.
 * @class
 */
class CopyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Source username
         * @type {string || null}
         */
        this.SrcUserName = null;

        /**
         * Access host allowed for a source user
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * Target username
         * @type {string || null}
         */
        this.DstUserName = null;

        /**
         * Access host allowed for a target user
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * `ReadOnly` attribute of a source account
         * @type {string || null}
         */
        this.SrcReadOnly = null;

        /**
         * `ReadOnly` attribute of a target account
         * @type {string || null}
         */
        this.DstReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUserName = 'SrcUserName' in params ? params.SrcUserName : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUserName = 'DstUserName' in params ? params.DstUserName : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.SrcReadOnly = 'SrcReadOnly' in params ? params.SrcReadOnly : null;
        this.DstReadOnly = 'DstReadOnly' in params ? params.DstReadOnly : null;

    }
}

/**
 * Security group details
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Creation time in the format of yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * Inbound rule
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

    }
}

/**
 * DescribeDatabaseTable request structure.
 * @class
 */
class DescribeDatabaseTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database name, which can be obtained through the `DescribeDatabases` API.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Table name, which can be obtained through the `DescribeDatabaseObjects` API.
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * DescribeDCDBInstanceNodeInfo response structure.
 * @class
 */
class DescribeDCDBInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Node information
         * @type {Array.<BriefNodeInfo> || null}
         */
        this.NodesInfo = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.NodesInfo) {
            this.NodesInfo = new Array();
            for (let z in params.NodesInfo) {
                let obj = new BriefNodeInfo();
                obj.deserialize(params.NodesInfo[z]);
                this.NodesInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabaseObjects response structure.
 * @class
 */
class DescribeDatabaseObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Passed through from the input parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * List of tables.
         * @type {Array.<DatabaseTable> || null}
         */
        this.Tables = null;

        /**
         * List of views.
         * @type {Array.<DatabaseView> || null}
         */
        this.Views = null;

        /**
         * List of stored procedures.
         * @type {Array.<DatabaseProcedure> || null}
         */
        this.Procs = null;

        /**
         * List of functions.
         * @type {Array.<DatabaseFunction> || null}
         */
        this.Funcs = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new DatabaseTable();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new DatabaseView();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }

        if (params.Procs) {
            this.Procs = new Array();
            for (let z in params.Procs) {
                let obj = new DatabaseProcedure();
                obj.deserialize(params.Procs[z]);
                this.Procs.push(obj);
            }
        }

        if (params.Funcs) {
            this.Funcs = new Array();
            for (let z in params.Funcs) {
                let obj = new DatabaseFunction();
                obj.deserialize(params.Funcs[z]);
                this.Funcs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDcnDetail response structure.
 * @class
 */
class DescribeDcnDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DCN synchronization details
         * @type {Array.<DcnDetailItem> || null}
         */
        this.DcnDetails = null;

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

        if (params.DcnDetails) {
            this.DcnDetails = new Array();
            for (let z in params.DcnDetails) {
                let obj = new DcnDetailItem();
                obj.deserialize(params.DcnDetails[z]);
                this.DcnDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database column information
 * @class
 */
class TableColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column name
         * @type {string || null}
         */
        this.Col = null;

        /**
         * Column type
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
        this.Col = 'Col' in params ? params.Col : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Security group inbound/outbound rule
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy, which can be `ACCEPT` or `DROP`
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Source IP or source IP range, such as 192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Network protocol. UDP and TCP are supported.
         * @type {string || null}
         */
        this.IpProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;

    }
}

/**
 * AssociateSecurityGroups response structure.
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeDCDBShards response structure.
 * @class
 */
class DescribeDCDBShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible shards
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Shard information list
         * @type {Array.<DCDBShardInfo> || null}
         */
        this.Shards = null;

        /**
         * DCN type. Valid values: 0 (null), 1 (primary instance), 2 (disaster recovery instance)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DcnFlag = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Shards) {
            this.Shards = new Array();
            for (let z in params.Shards) {
                let obj = new DCDBShardInfo();
                obj.deserialize(params.Shards[z]);
                this.Shards.push(obj);
            }
        }
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database information
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * GrantAccountPrivileges response structure.
 * @class
 */
class GrantAccountPrivilegesResponse extends  AbstractModel {
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
 * Shard information
 * @class
 */
class ShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard ID
         * @type {string || null}
         */
        this.ShardInstanceId = null;

        /**
         * Shard set ID
         * @type {string || null}
         */
        this.ShardSerialId = null;

        /**
         * Status. 0: creating; 1: processing; 2: running; 3: shard not initialized; -2: shard deleted
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * Memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Numeric ID of a shard
         * @type {number || null}
         */
        this.ShardId = null;

        /**
         * Number of nodes. 2: one primary and one secondary; 3: one primary and two secondaries
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Product type ID (this field is obsolete and should not be depended on)
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceId = 'ShardInstanceId' in params ? params.ShardInstanceId : null;
        this.ShardSerialId = 'ShardSerialId' in params ? params.ShardSerialId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * OpenDBExtranetAccess request structure.
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an instance for which to enable public network access. The ID is in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether IPv6 is used. Default value: 0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * DestroyHourDCDBInstance request structure.
 * @class
 */
class DestroyHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of tdsqlshard-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeDBSyncMode request structure.
 * @class
 */
class DescribeDBSyncModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an instance for which to modify the sync mode. The ID is in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CloseDBExtranetAccess response structure.
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. The task status can be queried through the `DescribeFlow` API.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription request structure.
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for a user. An account is uniquely identified by username and host.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * New account remarks, which can contain 0-256 characters.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeProjects request structure.
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
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
 * DescribeDatabases response structure.
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of databases on an instance.
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * Passed through from the input parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

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

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyDCDBInstance response structure.
 * @class
 */
class DestroyDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is the same as the request parameter `InstanceId`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Async task ID, which can be used in the [DescribeFlow](https://intl.cloud.tencent.com/document/product/557/56485?from_cn_redirect=1) API to query the async task result.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess request structure.
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an instance for which to disable public network access. The ID is in the format of dcdbt-ow728lmc and can be obtained through the `DescribeDCDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether IPv6 is used. Default value: 0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * InitDCDBInstances request structure.
 * @class
 */
class InitDCDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of instances to be initialized. The ID is in the format of `dcdbt-ow728lmc` and can be obtained through the `DescribeDCDBInstances` API.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of parameters. Valid values: character_set_server (character set; required); lower_case_table_names (table name case sensitivity; required; 0: case-sensitive; 1: case-insensitive); innodb_page_size (InnoDB data page; default size: 16 KB); sync_mode (sync mode; 0: async; 1: strong sync; 2: downgradable strong sync; default value: strong sync).
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * DeleteAccount request structure.
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow728lmc, which can be obtained through the `DescribeDCDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for a user
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDCDBInstances response structure.
 * @class
 */
class DescribeDCDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<DCDBInstanceInfo> || null}
         */
        this.Instances = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DCDBInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlow request structure.
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID returned by an async request API.
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * Database stored procedure information
 * @class
 */
class DatabaseProcedure extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stored procedure name
         * @type {string || null}
         */
        this.Proc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proc = 'Proc' in params ? params.Proc : null;

    }
}

/**
 * ModifyDBSyncMode request structure.
 * @class
 */
class ModifyDBSyncModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an instance for which to modify the sync mode. The ID is in the format of dcdbt-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sync mode. 0: async; 1: strong sync; 2: downgradable strong sync
         * @type {number || null}
         */
        this.SyncMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;

    }
}

/**
 * DescribeProjects response structure.
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project list
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccount response structure.
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is passed through from the input parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username, which is passed through from the input parameters.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Host allowed for access, which is passed through from the input parameters.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Passed through from the input parameters.
         * @type {number || null}
         */
        this.ReadOnly = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyHourDCDBInstance response structure.
 * @class
 */
class DestroyHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which can be used in the [DescribeFlow](https://intl.cloud.tencent.com/document/product/557/56485?from_cn_redirect=1) API to query the async task result.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Instance ID, which is the same as the request parameter `InstanceId`.
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Range of constraint type values
 * @class
 */
class ConstraintRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum value when constraint type is `section`
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Maximum value when constraint type is `section`
         * @type {string || null}
         */
        this.Max = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;

    }
}

/**
 * Information of a pulled log
 * @class
 */
class LogFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last modified time of a log
         * @type {number || null}
         */
        this.Mtime = null;

        /**
         * File length
         * @type {number || null}
         */
        this.Length = null;

        /**
         * Uniform resource identifier (URI) used during log download
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * Filename
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mtime = 'Mtime' in params ? params.Mtime : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `dcdb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Instance ID list, which is an array of one or more instance IDs.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * TencentDB account information
 * @class
 */
class DBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Host from which a user can log in (corresponding to the `host` field for a MySQL user; a user is uniquely identified by username and host; this parameter is in IP format and ends with % for IP range; % can be entered; if this parameter is left empty, % will be used by default)
         * @type {string || null}
         */
        this.Host = null;

        /**
         * User remarks
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last updated time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Read-only flag. 0: no; 1: for the account's SQL requests, the secondary will be used first, and if it is unavailable, the primary will be used; 2: the secondary will be used first, and if it is unavailable, the operation will fail.
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * If the secondary delay exceeds the set value of this parameter, the secondary will be deemed to have failed.
It is recommended that this parameter be set to a value greater than 10. This parameter takes effect when `ReadOnly` is 1 or 2.
         * @type {number || null}
         */
        this.DelayThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * DescribeDatabaseTable response structure.
 * @class
 */
class DescribeDatabaseTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Table name.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Column information.
         * @type {Array.<TableColumn> || null}
         */
        this.Cols = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

        if (params.Cols) {
            this.Cols = new Array();
            for (let z in params.Cols) {
                let obj = new TableColumn();
                obj.deserialize(params.Cols[z]);
                this.Cols.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges request structure.
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of dcdbt-ow7t8lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for a user. An account is uniquely identified by username and host.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name. `\*` indicates that global permissions will be queried (i.e., `\*.\*`), in which case the `Type` and `Object ` parameters will be ignored
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Type. Valid values: table; view; proc; func; \*. If `DbName` is a specific database name and `Type` is `\*`, the permissions of the database will be queried (i.e., `db.\*`), in which case the `Object` parameter will be ignored
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Type name. For example, if `Type` is table, `Object` indicates a specific table name; if both `DbName` and `Type` are specific names, it indicates a specific object name and cannot be `\*` or empty
         * @type {string || null}
         */
        this.Object = null;

        /**
         * If `Type` = table and `ColName` is `\*`, the permissions of the table will be queried; if `ColName` is a specific field name, the permissions of the corresponding field will be queried
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is passed through from the input parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of instance users.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DBAccount> || null}
         */
        this.Users = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new DBAccount();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDCDBInstances request structure.
 * @class
 */
class DescribeDCDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by instance ID or IDs. Instance ID is in the format of dcdbt-2t4cf98d
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Search field name. Valid values: instancename (search by instance name); vip (search by private IP); all (search by instance ID, instance name, and private IP).
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * Search keyword. Fuzzy search is supported. Multiple keywords should be separated by line breaks (`\n`).
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Query by project ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Whether to search by VPC
         * @type {boolean || null}
         */
        this.IsFilterVpc = null;

        /**
         * VPC ID, which is valid when `IsFilterVpc` is 1
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID, which is valid when `IsFilterVpc` is 1
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Sort by field. Valid values: projectId; createtime; instancename
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sort by type. Valid values: desc; asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 1: non-dedicated cluster; 2: dedicated cluster; 0: all
         * @type {number || null}
         */
        this.ExclusterType = null;

        /**
         * Identifies whether to use the `ExclusterType` field. false: no; true: yes
         * @type {boolean || null}
         */
        this.IsFilterExcluster = null;

        /**
         * Dedicated cluster ID
         * @type {Array.<string> || null}
         */
        this.ExclusterIds = null;

        /**
         * Tag key used in queries
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Instance types used in filtering. Valid values: 1 (dedicated instance), 2 (primary instance), 3 (disaster recovery instance). Multiple values should be separated by commas.
         * @type {string || null}
         */
        this.FilterInstanceType = null;

        /**
         * Use this filter to include instances in specific statuses
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Use this filter to exclude instances in specific statuses
         * @type {Array.<number> || null}
         */
        this.ExcludeStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SearchName = 'SearchName' in params ? params.SearchName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.IsFilterVpc = 'IsFilterVpc' in params ? params.IsFilterVpc : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ExclusterType = 'ExclusterType' in params ? params.ExclusterType : null;
        this.IsFilterExcluster = 'IsFilterExcluster' in params ? params.IsFilterExcluster : null;
        this.ExclusterIds = 'ExclusterIds' in params ? params.ExclusterIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.FilterInstanceType = 'FilterInstanceType' in params ? params.FilterInstanceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExcludeStatus = 'ExcludeStatus' in params ? params.ExcludeStatus : null;

    }
}

/**
 * Project description
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The UIN of the resource owner (root account)
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creator UIN
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * Source platform
         * @type {string || null}
         */
        this.SrcPlat = null;

        /**
         * Source APPID
         * @type {number || null}
         */
        this.SrcAppId = null;

        /**
         * Project status. Valid values: `0` (normal), `-1` (disabled), `3` (default project).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether it is the default project. Valid values: `1` (yes), `0` (no).
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.SrcPlat = 'SrcPlat' in params ? params.SrcPlat : null;
        this.SrcAppId = 'SrcAppId' in params ? params.SrcAppId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * ModifyDBInstancesProject request structure.
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of instances to be modified. Instance ID is in the format of dcdbt-ow728lmc.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * ID of the project to be assigned, which can be obtained through the `DescribeProjects` API.
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyDBSyncMode response structure.
 * @class
 */
class ModifyDBSyncModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. The task status can be queried through the `DescribeFlow` API.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateSecurityGroups response structure.
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * DeleteAccount response structure.
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
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

module.exports = {
    InitDCDBInstancesResponse: InitDCDBInstancesResponse,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    ParamDesc: ParamDesc,
    DescribeDBParametersRequest: DescribeDBParametersRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    DescribeDBSyncModeResponse: DescribeDBSyncModeResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    CreateAccountRequest: CreateAccountRequest,
    DescribeDBParametersResponse: DescribeDBParametersResponse,
    DescribeFlowResponse: DescribeFlowResponse,
    CloneAccountResponse: CloneAccountResponse,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    DestroyDCDBInstanceRequest: DestroyDCDBInstanceRequest,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    ParamConstraint: ParamConstraint,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DescribeDCDBInstanceNodeInfoRequest: DescribeDCDBInstanceNodeInfoRequest,
    DatabaseView: DatabaseView,
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    DcnDetailItem: DcnDetailItem,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    CloneAccountRequest: CloneAccountRequest,
    ParamModifyResult: ParamModifyResult,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DatabaseFunction: DatabaseFunction,
    BriefNodeInfo: BriefNodeInfo,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    DescribeDatabaseObjectsRequest: DescribeDatabaseObjectsRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    DatabaseTable: DatabaseTable,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    DescribeDCDBShardsRequest: DescribeDCDBShardsRequest,
    DBParamValue: DBParamValue,
    ModifyDBParametersRequest: ModifyDBParametersRequest,
    DCDBInstanceInfo: DCDBInstanceInfo,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeDcnDetailRequest: DescribeDcnDetailRequest,
    ModifyDBParametersResponse: ModifyDBParametersResponse,
    DCDBShardInfo: DCDBShardInfo,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    SecurityGroup: SecurityGroup,
    DescribeDatabaseTableRequest: DescribeDatabaseTableRequest,
    DescribeDCDBInstanceNodeInfoResponse: DescribeDCDBInstanceNodeInfoResponse,
    DescribeDatabaseObjectsResponse: DescribeDatabaseObjectsResponse,
    DescribeDcnDetailResponse: DescribeDcnDetailResponse,
    TableColumn: TableColumn,
    SecurityGroupBound: SecurityGroupBound,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeDCDBShardsResponse: DescribeDCDBShardsResponse,
    Database: Database,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    ShardInfo: ShardInfo,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    DestroyHourDCDBInstanceRequest: DestroyHourDCDBInstanceRequest,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeDBSyncModeRequest: DescribeDBSyncModeRequest,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DestroyDCDBInstanceResponse: DestroyDCDBInstanceResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    InitDCDBInstancesRequest: InitDCDBInstancesRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    DescribeDCDBInstancesResponse: DescribeDCDBInstancesResponse,
    DescribeFlowRequest: DescribeFlowRequest,
    DatabaseProcedure: DatabaseProcedure,
    ModifyDBSyncModeRequest: ModifyDBSyncModeRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    CreateAccountResponse: CreateAccountResponse,
    DestroyHourDCDBInstanceResponse: DestroyHourDCDBInstanceResponse,
    ConstraintRange: ConstraintRange,
    LogFileInfo: LogFileInfo,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DBAccount: DBAccount,
    DescribeDatabaseTableResponse: DescribeDatabaseTableResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    DescribeDCDBInstancesRequest: DescribeDCDBInstancesRequest,
    Project: Project,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    ModifyDBSyncModeResponse: ModifyDBSyncModeResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
