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
 * DescribeDBLogFiles request structure.
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `tdsql-ow728lmc`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Requested log type. Valid values: 1 (binlog), 2 (cold backup), 3 (errlog), 4 (slowlog).
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
        this.Type = 'Type' in params ? params.Type : null;

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
 * DeleteAccount request structure.
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for user
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
 * DescribeFileDownloadUrl response structure.
 * @class
 */
class DescribeFileDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signed download URL
         * @type {string || null}
         */
        this.PreSignedUrl = null;

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
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance node information
 * @class
 */
class NodeInfo extends  AbstractModel {
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
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Source username
         * @type {string || null}
         */
        this.SrcUserName = null;

        /**
         * Access host allowed for source user
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * Target username
         * @type {string || null}
         */
        this.DstUserName = null;

        /**
         * Access host allowed for target user
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * `ReadOnly` attribute of source account
         * @type {string || null}
         */
        this.SrcReadOnly = null;

        /**
         * `ReadOnly` attribute of target account
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
 * ModifyAccountPrivileges request structure.
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of tdsql-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database account, including username and host address.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Global permission. Valid values of `GlobalPrivileges`: `"SELECT"`, `"INSERT"`, `"UPDATE"`, `"DELETE"`, `"CREATE"`, `"PROCESS"`, `"DROP"`, `"REFERENCES"`, `"INDEX"`, `"ALTER"`, `"SHOW DATABASES"`, `"CREATE TEMPORARY TABLES"`, `"LOCK TABLES"`, `"EXECUTE"`, `"CREATE VIEW"`, `"SHOW VIEW"`, `"CREATE ROUTINE"`, `"ALTER ROUTINE"`, `"EVENT"`, `"TRIGGER"`.
Note: if the parameter is left empty, no change will be made to the granted global permissions. To clear the granted global permissions, set the parameter to an empty array.
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * Database permission. Valid values of `Privileges`: `"SELECT"`, `"INSERT"`, `"UPDATE"`, `"DELETE"`, `"CREATE"`, `"DROP"`, `"REFERENCES"`, `"INDEX"`, `"ALTER"`, `"CREATE TEMPORARY TABLES"`, `"LOCK TABLES"`, `"EXECUTE"`, `"CREATE VIEW"`, `"SHOW VIEW"`, `"CREATE ROUTINE"`, `"ALTER ROUTINE"`, `"EVENT"`, `"TRIGGER"`.
Note: if the parameter is left empty, no change will be made to the granted database permissions. To clear the granted database permissions, set `Privileges` to an empty array.
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * Database table permission. Valid values of `Privileges`: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE VIEW`, `SHOW VIEW`, `TRIGGER`.
Note: if the parameter is not passed in, no change will be made to the granted table permissions. To clear the granted table permissions, set `Privileges` to an empty array.
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * Column permission. Valid values of `Privileges`: `"SELECT"`, `"INSERT"`, `"UPDATE"`, `"REFERENCES"`.
Note: if the parameter is left empty, no change will be made to the granted column permissions. To clear the granted column permissions, set `Privileges` to an empty array.
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

        /**
         * Database view permission. Valid values of `Privileges`: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE VIEW`, `SHOW VIEW`, `TRIGGER`.
Note: if the parameter is not passed in, no change will be made to the granted view permissions. To clear the granted view permissions, set `Privileges` to an empty array.
         * @type {Array.<ViewPrivileges> || null}
         */
        this.ViewPrivileges = null;

        /**
         * Database function permissions. Valid values of `Privileges`: `ALTER ROUTINE`, `EXECUTE`.
Note: if the parameter is not passed in, no change will be made to the granted function permissions. To clear the granted function permissions, set `Privileges` to an empty array.
         * @type {Array.<FunctionPrivilege> || null}
         */
        this.FunctionPrivileges = null;

        /**
         * Database stored procedure permission. Valid values of `Privileges`: `ALTER ROUTINE`, `EXECUTE`.
Note: if the parameter is not passed in, no change will be made to the granted stored procedure permissions. To clear the granted stored procedure permissions, set `Privileges` to an empty array.
         * @type {Array.<ProcedurePrivilege> || null}
         */
        this.ProcedurePrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivilege();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivilege();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

        if (params.ColumnPrivileges) {
            this.ColumnPrivileges = new Array();
            for (let z in params.ColumnPrivileges) {
                let obj = new ColumnPrivilege();
                obj.deserialize(params.ColumnPrivileges[z]);
                this.ColumnPrivileges.push(obj);
            }
        }

        if (params.ViewPrivileges) {
            this.ViewPrivileges = new Array();
            for (let z in params.ViewPrivileges) {
                let obj = new ViewPrivileges();
                obj.deserialize(params.ViewPrivileges[z]);
                this.ViewPrivileges.push(obj);
            }
        }

        if (params.FunctionPrivileges) {
            this.FunctionPrivileges = new Array();
            for (let z in params.FunctionPrivileges) {
                let obj = new FunctionPrivilege();
                obj.deserialize(params.FunctionPrivileges[z]);
                this.FunctionPrivileges.push(obj);
            }
        }

        if (params.ProcedurePrivileges) {
            this.ProcedurePrivileges = new Array();
            for (let z in params.ProcedurePrivileges) {
                let obj = new ProcedurePrivilege();
                obj.deserialize(params.ProcedurePrivileges[z]);
                this.ProcedurePrivileges.push(obj);
            }
        }

    }
}

/**
 * ModifySyncTaskAttribute response structure.
 * @class
 */
class ModifySyncTaskAttributeResponse extends  AbstractModel {
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

        /**
         * Number of CPU cores of the instance
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory capacity in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Billing mode
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Creation time of the instance in the format of 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Expiration time of the instance in the format of 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Instance type. Valid values: `1` (dedicated primary instance), `2` (non-dedicated primary instance), `3` (non-dedicated disaster recovery instance), `4` (dedicated disaster recovery instance)
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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * Pulled log information
 * @class
 */
class LogFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last modified time of log
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
 * CreateHourDBInstance response structure.
 * @class
 */
class CreateHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID, which is used for calling the `DescribeOrders` API.
 The parameter can be used to either query order details or call the user account APIs to make another payment when this payment fails.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * IDs of the instances you have purchased in this order. If no instance IDs are returned, you can query them with the `DescribeOrders` API. You can also use the `DescribeDBInstances` API to check whether an instance has been created successfully.
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for user. An account is uniquely identified by username and host.
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
 * DescribeInstanceNodeInfo request structure.
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as tdsql-6ltok4u9
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The maximum number of results returned at a time. By default, there is no upper limit to this value, that is, all results can be returned.
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
 * DescribeDBInstances request structure.
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries by instance ID or IDs. Instance ID is in the format of `tdsql-ow728lmc`. Up to 100 instances can be queried in one request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Search field name. Valid values: instancename (search by instance name), vip (search by private IP), all (search by instance ID, instance name, and private IP).
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * Search keyword. Fuzzy search is supported. Multiple keywords should be separated by line breaks (`\n`).
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Queries by project ID
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
         * Sort by field. Valid values: projectId, createtime, instancename
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: desc, asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Queries by `OriginSerialId`
         * @type {Array.<string> || null}
         */
        this.OriginSerialIds = null;

        /**
         * Identifies whether to use the `ExclusterType` field. false: no, true: yes
         * @type {boolean || null}
         */
        this.IsFilterExcluster = null;

        /**
         * Instance cluster type. 1: non-dedicated cluster, 2: dedicated cluster, 0: all
         * @type {number || null}
         */
        this.ExclusterType = null;

        /**
         * Filters instances by dedicated cluster ID in the format of `dbdc-4ih6uct9`
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
        this.OriginSerialIds = 'OriginSerialIds' in params ? params.OriginSerialIds : null;
        this.IsFilterExcluster = 'IsFilterExcluster' in params ? params.IsFilterExcluster : null;
        this.ExclusterType = 'ExclusterType' in params ? params.ExclusterType : null;
        this.ExclusterIds = 'ExclusterIds' in params ? params.ExclusterIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.FilterInstanceType = 'FilterInstanceType' in params ? params.FilterInstanceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExcludeStatus = 'ExcludeStatus' in params ? params.ExcludeStatus : null;

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
         * Database engine name. Valid value: `mariadb`.
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
 * ModifySyncTaskAttribute request structure.
 * @class
 */
class ModifySyncTaskAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of tasks for which to modify the attributes. The IDs can be obtained by the return value of the `DescribeSyncTasks` API. Up to 100 tasks can be operated at a time.
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * Task name. You can specify any name you like, but its length cannot exceed 100 characters.
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

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
         * Database engine name. Valid value: `mariadb`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the security group to be associated in the format of sg-efil73jd.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * ID(s) of the instance(s) to be associated in the format of tdsql-lesecurk. You can specify multiple instances.
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
 * Column permission information
 * @class
 */
class ColumnPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Column name
         * @type {string || null}
         */
        this.Column = null;

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
         * Total number of security groups.
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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CancelDcnJob response structure.
 * @class
 */
class CancelDcnJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * DescribeDBInstances response structure.
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance details list
         * @type {Array.<DBInstance> || null}
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
                let obj = new DBInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TencentDB instance details.
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which uniquely identifies a TDSQL instance
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Customizable instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Application ID of instance
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Project ID of instance
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance region name, such as ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ name, such as ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC ID, which is 0 if the basic network is used
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID, which is 0 if the basic network is used
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Instance status. Valid values: `0` (creating), `1` (running task), `2` (running), `3` (uninitialized), `-1` (isolated), `4` (initializing), `5` (eliminating), `6` (restarting), `7` (migrating data)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Private IP address
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port
         * @type {number || null}
         */
        this.Vport = null;

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
         * Instance creation time in the format of `2006-01-02 15:04:05`
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last updated time of instance in the format of `2006-01-02 15:04:05`
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Auto-renewal flag. 0: no, 1: yes
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Instance expiration time in the format of `2006-01-02 15:04:05`
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * Instance account
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * TDSQL version information
         * @type {string || null}
         */
        this.TdsqlVersion = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

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
         * Original ID of instance (this field is obsolete and should not be depended on)
         * @type {string || null}
         */
        this.OriginSerialId = null;

        /**
         * Number of nodes. 2: one master and one slave, 3: one master and two slaves
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Whether it is a temp instance. 0: no, non-zero value: yes
         * @type {number || null}
         */
        this.IsTmp = null;

        /**
         * Dedicated cluster ID. If this parameter is empty, the instance is a general instance
         * @type {string || null}
         */
        this.ExclusterId = null;

        /**
         * Numeric ID of instance (this field is obsolete and should not be depended on)
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Product type ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Maximum QPS value
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Billing mode
Note: this field may return null, indicating that no valid values can be obtained.
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
         * Current instance running status description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Public network access status. 0: not enabled, 1: enabled, 2: disabled, 3: enabling
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * Whether the instance supports audit. 1: yes, 0: no
         * @type {number || null}
         */
        this.IsAuditSupported = null;

        /**
         * Model
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * Whether data encryption is supported. 1: yes, 0: no
         * @type {number || null}
         */
        this.IsEncryptSupported = null;

        /**
         * Number of CPU cores of instance
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
         * Database engine
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbEngine = null;

        /**
         * Database version
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbVersion = null;

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
         * Instance type. Valid values: `1` (dedicated primary instance), `2` (primary instance), `3` (disaster recovery instance), and `4` (dedicated disaster recovery instance).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Instance tag information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanVip = 'WanVip' in params ? params.WanVip : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TdsqlVersion = 'TdsqlVersion' in params ? params.TdsqlVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.OriginSerialId = 'OriginSerialId' in params ? params.OriginSerialId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.IsTmp = 'IsTmp' in params ? params.IsTmp : null;
        this.ExclusterId = 'ExclusterId' in params ? params.ExclusterId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.IsAuditSupported = 'IsAuditSupported' in params ? params.IsAuditSupported : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.IsEncryptSupported = 'IsEncryptSupported' in params ? params.IsEncryptSupported : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.WanVipv6 = 'WanVipv6' in params ? params.WanVipv6 : null;
        this.WanPortIpv6 = 'WanPortIpv6' in params ? params.WanPortIpv6 : null;
        this.WanStatusIpv6 = 'WanStatusIpv6' in params ? params.WanStatusIpv6 : null;
        this.DbEngine = 'DbEngine' in params ? params.DbEngine : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.DcnDstNum = 'DcnDstNum' in params ? params.DcnDstNum : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DestroyHourDBInstance response structure.
 * @class
 */
class DestroyHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which can be used in the [DescribeFlow](https://intl.cloud.tencent.com/document/product/237/16177?from_cn_redirect=1) API to query the async task result.
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
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name. Valid value: `mariadb`.
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
 * ModifyAccountPrivileges response structure.
 * @class
 */
class ModifyAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which can be used in the [DescribeFlow](https://intl.cloud.tencent.com/document/product/237/16177?from_cn_redirect=1) API to query the async task result.
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
 * TencentDB account information
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account name
         * @type {string || null}
         */
        this.User = null;

        /**
         * Host address
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
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;

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
         * Database engine name. Valid value: `mariadb`.
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
 * Stored procedure permission information
 * @class
 */
class ProcedurePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Stored procedure name
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username, which can contain 1-32 letters, digits, underscores, and hyphens.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Host that can be logged in to, which is in the same format as the host of the MySQL account and supports wildcards, such as %, 10.%, and 10.20.%.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Account password. It must contain 8-32 characters in all of the following four types: lowercase letters, uppercase letters, digits, and symbols (()~!@#$%^&*-+=_|{}[]:<>,.?/), and cannot start with a slash (/).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to create a read-only account. 0: no; 1: for the account's SQL requests, the secondary will be used first, and if it is unavailable, the primary will be used; 2: the secondary will be used first, and if it is unavailable, the operation will fail.
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * Account remarks, which can contain 0-256 letters, digits, and common symbols.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Determines whether the secondary is unavailable based on the passed-in time
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
 * CancelDcnJob request structure.
 * @class
 */
class CancelDcnJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery instance ID
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
 * DestroyHourDBInstance request structure.
 * @class
 */
class DestroyHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of tdsql-avw0207d. It is the same as the instance ID displayed in the TencentDB console.
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
 * CreateHourDBInstance request structure.
 * @class
 */
class CreateHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZs to deploy instance nodes. You can specify up to two AZs.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Number of nodes.
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Memory size in GB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Storage size in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances to purchase.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Project ID. If this parameter is not passed in, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Unique ID of the network. If this parameter is not passed in, the classic network will be used.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Unique ID of the subnet. If `VpcId` is specified, this parameter is required.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Database engine version. Valid values: 10.0.10, 10.1.9, 5.7.17.
If this parameter is left empty, `10.1.9` will be used.
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * Custom name of the instance.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Security group ID. If this parameter is not passed in, no security groups will be associated when the instance is created.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Whether IPv6 is supported.
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * Array of tag key-value pairs.
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * If you create a disaster recovery instance, you need to use this parameter to specify the region of the associated primary instance so that the disaster recovery instance can sync data with the primary instance over the Data Communication Network (DCN).
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * If you create a disaster recovery instance, you need to use this parameter to specify the ID of the associated primary instance so that the disaster recovery instance can sync data with the primary instance over the Data Communication Network (DCN).
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * List of parameters. Valid values: 
`character_set_server` (character set; required); `lower_case_table_names` (table name case sensitivity; required; 0: case-sensitive; 1: case-insensitive);
`innodb_page_size` (innoDB data page size; default size: 16 KB); `sync_mode` (sync mode; 0: async; 1: strong sync; 2: downgradable strong sync; default value: 2).
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * ID of the instance whose backup data will be rolled back to the new instance you create.
         * @type {string || null}
         */
        this.RollbackInstanceId = null;

        /**
         * Rollback time.
         * @type {string || null}
         */
        this.RollbackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.RollbackInstanceId = 'RollbackInstanceId' in params ? params.RollbackInstanceId : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

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
 * DescribeFileDownloadUrl request structure.
 * @class
 */
class DescribeFileDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Unsigned file path
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * Database permission
 * @class
 */
class DatabasePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Database = 'Database' in params ? params.Database : null;

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
         * List of IDs of instances to be modified. The ID is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
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
 * Function permission information
 * @class
 */
class FunctionPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for user. An account is uniquely identified by username and host.
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
 * GrantAccountPrivileges request structure.
 * @class
 */
class GrantAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Access host allowed for user. An account is uniquely identified by username and host.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Database name. `\*` indicates that global permissions will be set (i.e., `\*.\*`), in which case the `Type` and `Object ` parameters will be ignored. If `DbName` is not `\*`, the input parameter `Type` is required.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Global permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT`, `TRIGGER`, `SHOW DATABASES`, `REPLICATION CLIENT`, `REPLICATION SLAVE`. 
Database permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT`, `TRIGGER`. 
Table/View permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE VIEW`, `SHOW VIEW`, `TRIGGER`. 
Stored procedure/function permission. Valid values: `ALTER ROUTINE`, `EXECUTE`. 
Field permission. Valid values: `INSERT`, `REFERENCES`, `SELECT`, `UPDATE`.
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * Type. Valid values: table, view, proc, func, \*. If `DbName` is a specific database name and `Type` is `\*`, the permissions of the database will be set (i.e., `db.\*`), in which case the `Object` parameter will be ignored
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Type name. For example, if `Type` is `table`, `Object` indicates a specific table name; if both `DbName` and `Type` are specific names, it indicates a specific object name and cannot be `\*` or empty
         * @type {string || null}
         */
        this.Object = null;

        /**
         * If `Type` is `table` and `ColName` is `\*`, the permissions will be granted to the table; if `ColName` is a specific field name, the permissions will be granted to the field
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
 * DescribeInstanceNodeInfo response structure.
 * @class
 */
class DescribeInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Node information
         * @type {Array.<NodeInfo> || null}
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
                let obj = new NodeInfo();
                obj.deserialize(params.NodesInfo[z]);
                this.NodesInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Table permission
 * @class
 */
class TablePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
 * View permission information
 * @class
 */
class ViewPrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * View name
         * @type {string || null}
         */
        this.View = null;

        /**
         * Permission information
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.View = 'View' in params ? params.View : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
 * DescribeDBLogFiles response structure.
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `tdsql-ow728lmc`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Requested log type. Valid values: 1 (binlog), 2 (cold backup), 3 (errlog), 4 (slowlog).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Total number of requested logs
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Information such as `uri`, `length`, and `mtime` (modification time)
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
         * ID of instance for which to disable public network access. The ID is in the format of `tdsql-ow728lmc` and can be obtained through the `DescribeDBInstances` API.
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

/**
 * Tag object, including tag key and tag value
 * @class
 */
class ResourceTag extends  AbstractModel {
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

module.exports = {
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    DescribeDcnDetailRequest: DescribeDcnDetailRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    DescribeFileDownloadUrlResponse: DescribeFileDownloadUrlResponse,
    NodeInfo: NodeInfo,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    ModifySyncTaskAttributeResponse: ModifySyncTaskAttributeResponse,
    DcnDetailItem: DcnDetailItem,
    LogFileInfo: LogFileInfo,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    CreateHourDBInstanceResponse: CreateHourDBInstanceResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeDcnDetailResponse: DescribeDcnDetailResponse,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ModifySyncTaskAttributeRequest: ModifySyncTaskAttributeRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    CreateAccountResponse: CreateAccountResponse,
    SecurityGroupBound: SecurityGroupBound,
    ColumnPrivilege: ColumnPrivilege,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    CancelDcnJobResponse: CancelDcnJobResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DBInstance: DBInstance,
    DestroyHourDBInstanceResponse: DestroyHourDBInstanceResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    Account: Account,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    ProcedurePrivilege: ProcedurePrivilege,
    CreateAccountRequest: CreateAccountRequest,
    CancelDcnJobRequest: CancelDcnJobRequest,
    DestroyHourDBInstanceRequest: DestroyHourDBInstanceRequest,
    CreateHourDBInstanceRequest: CreateHourDBInstanceRequest,
    SecurityGroup: SecurityGroup,
    DescribeFileDownloadUrlRequest: DescribeFileDownloadUrlRequest,
    DatabasePrivilege: DatabasePrivilege,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    FunctionPrivilege: FunctionPrivilege,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    TablePrivilege: TablePrivilege,
    DBParamValue: DBParamValue,
    ViewPrivileges: ViewPrivileges,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    DeleteAccountResponse: DeleteAccountResponse,
    ResourceTag: ResourceTag,

}
