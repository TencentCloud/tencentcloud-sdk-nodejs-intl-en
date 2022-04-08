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
         * Global permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT`, `TRIGGER`, `SHOW DATABASES`, `REPLICATION CLIENT`, `REPLICATION SLAVE`.
Database permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EXECUTE`, `CREATE VIEW`, `SHOW VIEW`, `CREATE ROUTINE`, `ALTER ROUTINE`, `EVENT`, `TRIGGER`. 
Table permission. Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `REFERENCES`, `INDEX`, `ALTER`, `CREATE VIEW`, `SHOW VIEW`, `TRIGGER`.  
Field permission. Valid values: `INSERT`, `REFERENCES`, `SELECT`, `UPDATE`.
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * Type. Valid values: `table`, `\*`. If `DbName` is a specific database name and `Type` is `\*`, the permissions of the database will be set (i.e., `db.\*`), in which case the `Object` parameter will be ignored
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
 * CreateHourDCDBInstance request structure.
 * @class
 */
class CreateHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard memory in GB, which can be obtained through the `DescribeShardSpec` API.
  
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * Shard capacity in GB, which can be obtained through the `DescribeShardSpec` API.
  
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * The number of nodes per shard, which can be obtained through the `DescribeShardSpec` API.
  
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * The number of shards in the instance. Value range: 2-8. Upgrade your instance to have up to 64 shards if you require more.
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * The number of instances to be purchased
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Project ID, which can be obtained through the `DescribeProjects` API. If this parameter is not passed in, the instance will be associated with the default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID. If this parameter is left empty or not passed in, the instance will be created on the classic network.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID, which is required when `VpcId` is specified
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The number of CPU cores per shard, which can be obtained through the `DescribeShardSpec` API.
  
         * @type {number || null}
         */
        this.ShardCpu = null;

        /**
         * Database engine version. Valid values:
10.0.10: MariaDB 10.0.10;
10.1.9: MariaDB 10.1.9;
5.7.17: Percona 5.7.17.
If this parameter is left empty, `10.1.9` will be used.
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * AZs to deploy shard nodes. You can specify up to two AZs.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Custom name of the instance
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Whether IPv6 is supported
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * Array of tag key-value pairs
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * If you create a disaster recovery instance, you need to use this parameter to specify the region of the associated source instance so that the disaster recovery instance can sync data with the source instance over the Data Communication Network (DCN).
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * If you create a disaster recovery instance, you need to use this parameter to specify the ID of the associated source instance so that the disaster recovery instance can sync data with the source instance over the Data Communication Network (DCN).
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * List of parameters. Valid values: `character_set_server` (character set; required); `lower_case_table_names` (table name case sensitivity; required; 0: case-sensitive; 1: case-insensitive); `innodb_page_size` (InnoDB data page size; default size: 16 KB); `sync_mode` (sync mode; 0: async; 1: strong sync; 2: downgradable strong sync; default value: 2).
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * ID of the instance to be rolled back
         * @type {string || null}
         */
        this.RollbackInstanceId = null;

        /**
         * Rollback time
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * Array of security group IDs (this parameter is compatible with the old parameter `SecurityGroupId`)
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
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;
        this.ShardNodeCount = 'ShardNodeCount' in params ? params.ShardNodeCount : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ShardCpu = 'ShardCpu' in params ? params.ShardCpu : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
         * Number of security groups.
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
         * Shard ID
         * @type {string || null}
         */
        this.ShardId = null;

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
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

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
 * CreateHourDCDBInstance response structure.
 * @class
 */
class CreateHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of the instances you have purchased in this order. If no instance IDs are returned, you can query them with the `DescribeOrders` API. You can also use the `DescribeDBInstances` API to check whether an instance has been created successfully.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Task ID, which can be used to query the creation progress
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
         * Account password. It must contain 8-32 characters in all of the following four types: lowercase letters, uppercase letters, digits, and symbols (()~!@#$%^&*-+=_|{}[]:<>,.?/), and cannot start with a slash (/).
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
 * SwitchDBInstanceHA response structure.
 * @class
 */
class SwitchDBInstanceHAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
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
         * Instance type. Valid values: `1` (dedicated primary instance), `2` (non-dedicated primary instance), `3` (non-dedicated disaster recovery instance), and `4` (dedicated disaster recovery instance).
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
 * SwitchDBInstanceHA request structure.
 * @class
 */
class SwitchDBInstanceHARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of tdsql-ow728lmc
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target AZ. The node with the lowest delay in the target AZ will be automatically promoted to source node.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

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
         * Instance status. Valid values: `0` (creating), `1` (running task), `2` (running), `3` (uninitialized), `-1` (isolated), `4` (initializing), `5` (eliminating), `6` (restarting), `7` (migrating data)
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

module.exports = {
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    DescribeDcnDetailRequest: DescribeDcnDetailRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    DescribeDCDBInstancesResponse: DescribeDCDBInstancesResponse,
    DescribeFlowRequest: DescribeFlowRequest,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    SecurityGroup: SecurityGroup,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    CreateHourDCDBInstanceRequest: CreateHourDCDBInstanceRequest,
    DescribeDCDBInstanceNodeInfoResponse: DescribeDCDBInstanceNodeInfoResponse,
    DescribeProjectsRequest: DescribeProjectsRequest,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    LogFileInfo: LogFileInfo,
    DescribeDcnDetailResponse: DescribeDcnDetailResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    CreateAccountResponse: CreateAccountResponse,
    SecurityGroupBound: SecurityGroupBound,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    CancelDcnJobResponse: CancelDcnJobResponse,
    DescribeFileDownloadUrlRequest: DescribeFileDownloadUrlRequest,
    DestroyHourDCDBInstanceResponse: DestroyHourDCDBInstanceResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    CreateHourDCDBInstanceResponse: CreateHourDCDBInstanceResponse,
    DescribeDBSyncModeResponse: DescribeDBSyncModeResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DestroyDCDBInstanceResponse: DestroyDCDBInstanceResponse,
    CreateAccountRequest: CreateAccountRequest,
    CancelDcnJobRequest: CancelDcnJobRequest,
    DescribeFlowResponse: DescribeFlowResponse,
    Project: Project,
    ShardInfo: ShardInfo,
    DescribeDCDBInstanceNodeInfoRequest: DescribeDCDBInstanceNodeInfoRequest,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    DescribeDCDBInstancesRequest: DescribeDCDBInstancesRequest,
    DestroyHourDCDBInstanceRequest: DestroyHourDCDBInstanceRequest,
    SwitchDBInstanceHAResponse: SwitchDBInstanceHAResponse,
    DcnDetailItem: DcnDetailItem,
    DescribeFileDownloadUrlResponse: DescribeFileDownloadUrlResponse,
    DescribeDBSyncModeRequest: DescribeDBSyncModeRequest,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    DestroyDCDBInstanceRequest: DestroyDCDBInstanceRequest,
    SwitchDBInstanceHARequest: SwitchDBInstanceHARequest,
    DBParamValue: DBParamValue,
    BriefNodeInfo: BriefNodeInfo,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    ResourceTag: ResourceTag,
    DCDBInstanceInfo: DCDBInstanceInfo,
    DeleteAccountResponse: DeleteAccountResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,

}
