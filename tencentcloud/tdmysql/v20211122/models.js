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
 * CreateDBInstances request structure.
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Creating an Instance Region</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Character type vpcid</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Character type subnetid</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Purchase specification</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * <p>Number of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeNum = null;

        /**
         * <p>Number of node replicas for storage, up to 5, must be an odd number</p>
         * @type {number || null}
         */
        this.Replications = null;

        /**
         * <p>Instance count. Maximum is 10.</p>
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * <p>Number of replicas</p>
         * @type {number || null}
         */
        this.FullReplications = null;

        /**
         * <p>Create an instance version, using the current latest version by default</p>
         * @type {string || null}
         */
        this.CreateVersion = null;

        /**
         * <p>Instance name. The required length is 1-60. It can contain Chinese characters, English case, digits, hyphens (-), and underscores (_).</p>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Tag key-value pair array</p>
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * <p>Initialize instance parameters. For example:<br>character_set_server (character set, defaults to utf8),<br>lower_case_table_names (table name case sensitivity, 0 - sensitive; 1 - insensitive, default is 0)</p>
         * @type {Array.<InstanceParam> || null}
         */
        this.InitParams = null;

        /**
         * <p>Time unit, m: month</p>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Commodity duration size</p>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * <p>CPU cores of the storage node</p>
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Payment mode. 0 means pay-as-you-go/postpaid, 1 means prepaid.</p>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * <p>Number of control nodes</p>
         * @type {number || null}
         */
        this.MCNum = null;

        /**
         * <p>Custom port</p>
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * <p>Multi-AZ availability zone list</p>
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>Whether to use a coupon.</p>
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * <p>Coupon list</p>
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * <p>Instance Architecture Type, separate: decoupled architecture; hybrid: peer-to-peer architecture</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Disk Type, CLOUD_HSSD enhanced SSD, CLOUD_TCS local SSD disk</p>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>AZ mode. 1: Single AZ, 2: Multi-AZ non-primary AZ, 3: Multi-AZ primary AZ</p>
         * @type {number || null}
         */
        this.AZMode = null;

        /**
         * <p>Instance mode</p>
         * @type {string || null}
         */
        this.InstanceMode = null;

        /**
         * <p>Parameter template id</p>
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * <p>Compatible mode, enum:MySQL,HBase</p>
         * @type {string || null}
         */
        this.SQLMode = null;

        /**
         * <p>ccu configuration of the svls instance</p>
         * @type {AutoScalingConfig || null}
         */
        this.AutoScaleConfig = null;

        /**
         * <p>Bind to security group list</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * <p>root userName. The default is dbaadmin in the current version. It will reset to dbaadmin even if a value is passed.</p>
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * <p>dbaadmin password</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Whether transparent data encryption is enabled. 0: not enabled; 1: enabled</p>
         * @type {number || null}
         */
        this.EncryptionEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.StorageNodeNum = 'StorageNodeNum' in params ? params.StorageNodeNum : null;
        this.Replications = 'Replications' in params ? params.Replications : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;
        this.CreateVersion = 'CreateVersion' in params ? params.CreateVersion : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.MCNum = 'MCNum' in params ? params.MCNum : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.AZMode = 'AZMode' in params ? params.AZMode : null;
        this.InstanceMode = 'InstanceMode' in params ? params.InstanceMode : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SQLMode = 'SQLMode' in params ? params.SQLMode : null;

        if (params.AutoScaleConfig) {
            let obj = new AutoScalingConfig();
            obj.deserialize(params.AutoScaleConfig)
            this.AutoScaleConfig = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.EncryptionEnable = 'EncryptionEnable' in params ? params.EncryptionEnable : null;

    }
}

/**
 * ModifyDBInstanceVPort request structure.
 * @class
 */
class ModifyDBInstanceVPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as tdsql3-5baee8df.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New VPC port 3308
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * ExpandInstance response structure.
 * @class
 */
class ExpandInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Asynchronous task ID. You can call the Query Task API to get task status with this ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Query the sales API. The return type is zone information.
 * @class
 */
class DescribeSaleZonesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>English string of Zone</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Zone Chinese character string</p>
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * <p>Whether to sell, 1: sell; 0: do not sell</p>
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * <p>Whether the default primary AZ is used. 0 means no, 1 means yes.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDefaultMaster = null;

        /**
         * <p>Selectable disk types in availability zones</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AvailableDiskTypes = null;

        /**
         * <p>Whether it is an exclusive availability zone</p>
         * @type {Array.<string> || null}
         */
        this.SupportTypes = null;

        /**
         * <p>Whether serverless is supported</p>
         * @type {boolean || null}
         */
        this.IsSupportServerless = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.IsDefaultMaster = 'IsDefaultMaster' in params ? params.IsDefaultMaster : null;
        this.AvailableDiskTypes = 'AvailableDiskTypes' in params ? params.AvailableDiskTypes : null;
        this.SupportTypes = 'SupportTypes' in params ? params.SupportTypes : null;
        this.IsSupportServerless = 'IsSupportServerless' in params ? params.IsSupportServerless : null;

    }
}

/**
 * Backup method statistical object, provided to backup set statistical detail API
 * @class
 */
class BackupMethodStatisticsOutPut extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Auto-backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AutoBackupSize = null;

        /**
         * <p>Manual backup size, unit Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ManualBackupSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoBackupSize = 'AutoBackupSize' in params ? params.AutoBackupSize : null;
        this.ManualBackupSize = 'ManualBackupSize' in params ? params.ManualBackupSize : null;

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
         * <p>Instance ID, such as tdsql3-ow7t8lmc.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Pagination index</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Database name matching expression</p>
         * @type {string || null}
         */
        this.DatabaseRegexp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DatabaseRegexp = 'DatabaseRegexp' in params ? params.DatabaseRegexp : null;

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
         * Instance ID, for example: tdsql3-ow728lmc.
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
 * ModifyInstanceNetwork response structure.
 * @class
 */
class ModifyInstanceNetworkResponse extends  AbstractModel {
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
 * ModifyInstanceSSLStatus response structure.
 * @class
 */
class ModifyInstanceSSLStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Async process ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartDBInstances response structure.
 * @class
 */
class RestartDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Async task id.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowLogs request structure.
 * @class
 */
class DescribeSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Search log start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time to retrieve logs
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter criteria.
         * @type {Array.<LogFilter> || null}
         */
        this.LogFilter = null;

        /**
         * Items per page limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sort, selectable: ASC, DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting criteria may not be the same as selectable fields used to sort according to business.
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.LogFilter) {
            this.LogFilter = new Array();
            for (let z in params.LogFilter) {
                let obj = new LogFilter();
                obj.deserialize(params.LogFilter[z]);
                this.LogFilter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * ModifyInstanceName request structure.
 * @class
 */
class ModifyInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance id that needs to be modified.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Modified instance name. required length: 1-60. can contain chinese, english uppercase and lowercase letters, digits, -, _.
         * @type {string || null}
         */
        this.InstanceName = null;

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

    }
}

/**
 * DescribeUserPrivileges response structure.
 * @class
 */
class DescribeUserPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

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
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
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
         * Security group description.
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Instance VIP.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * Instance port.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VPort = null;

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
 * List filter criteria for instances
 * @class
 */
class InstanceFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter key, support InstanceId, VpcId, SubnetId, Vip, Vport, Status, InstanceName, TagKey.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value.
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
 * Execution plan
 * @class
 */
class Explain extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Identifier</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * <p>Query type</p><p>Enumeration value:</p><ul><li>SIMPLE: A regular query with no subquery and UNION. Single table or ordinary JOIN is SIMPLE.</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SelectType = null;

        /**
         * <p>Table name</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Table = null;

        /**
         * <p>Partition</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Partitions = null;

        /**
         * <p>Access type</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Possibly used indexes</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PossibleKeys = null;

        /**
         * <p>Used Indexes</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Used Indexes length</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyLen = null;

        /**
         * <p>Column or constant to compare with the index</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ref = null;

        /**
         * <p>Estimate the number of scanned rows</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Rows = null;

        /**
         * <p>Estimated percentage of remaining rows after conditional filtering</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Filtered = null;

        /**
         * <p>Additional information, such as Using index, Using filesort</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.SelectType = 'SelectType' in params ? params.SelectType : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PossibleKeys = 'PossibleKeys' in params ? params.PossibleKeys : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.KeyLen = 'KeyLen' in params ? params.KeyLen : null;
        this.Ref = 'Ref' in params ? params.Ref : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.Filtered = 'Filtered' in params ? params.Filtered : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * Backup statistics object
 * @class
 */
class BackupStatisticsModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Average size of total backup per day in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerDay = null;

        /**
         * <p>Backup size of data, in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataBackupSize = null;

        /**
         * <p>Log backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogBackupSize = null;

        /**
         * <p>Total backup count</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Total backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageSizePerDay = 'AverageSizePerDay' in params ? params.AverageSizePerDay : null;
        this.DataBackupSize = 'DataBackupSize' in params ? params.DataBackupSize : null;
        this.LogBackupSize = 'LogBackupSize' in params ? params.LogBackupSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * Backup policy object
 * @class
 */
class BackupPolicyModelOutPut extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup end time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupEndTime = null;

        /**
         * <p>Backup method</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * <p>Backup start time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupStartTime = null;

        /**
         * <p>Engine type</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBType = null;

        /**
         * <p>Engine version</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * <p>Whether full backup is enabled</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableFull = null;

        /**
         * <p>Whether to enable log backup</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableLog = null;

        /**
         * <p>Expected next backup time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpectedNextBackupPeriod = null;

        /**
         * <p>Full backup retention time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FullRetentionPeriod = null;

        /**
         * <p>Policy ID</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * <p>Instance ID.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Log retention days</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogRetentionPeriod = null;

        /**
         * <p>Days of the week to perform backup</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PeriodTime = null;

        /**
         * <p>Region</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Backup cycle type 0:Weekly</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PeriodType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupEndTime = 'BackupEndTime' in params ? params.BackupEndTime : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStartTime = 'BackupStartTime' in params ? params.BackupStartTime : null;
        this.DBType = 'DBType' in params ? params.DBType : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.EnableFull = 'EnableFull' in params ? params.EnableFull : null;
        this.EnableLog = 'EnableLog' in params ? params.EnableLog : null;
        this.ExpectedNextBackupPeriod = 'ExpectedNextBackupPeriod' in params ? params.ExpectedNextBackupPeriod : null;
        this.FullRetentionPeriod = 'FullRetentionPeriod' in params ? params.FullRetentionPeriod : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogRetentionPeriod = 'LogRetentionPeriod' in params ? params.LogRetentionPeriod : null;
        this.PeriodTime = 'PeriodTime' in params ? params.PeriodTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;

    }
}

/**
 * ModifyInstanceSSLStatus request structure.
 * @class
 */
class ModifyInstanceSSLStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Whether to enable SSL.</p>
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * ModifyInstanceName response structure.
 * @class
 */
class ModifyInstanceNameResponse extends  AbstractModel {
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
 * DescribeDBSBackupStatisticsDetail request structure.
 * @class
 */
class DescribeDBSBackupStatisticsDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>End time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

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
         * Instance ID, for example: tdsql3-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Request the current parameter value of the instance.
         * @type {Array.<ParamDesc> || null}
         */
        this.Params = null;

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
 * Node specification for storage
 * @class
 */
class StorageNodeSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Specification code</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>CPU cores of the storage node</p>
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Maximum quantity of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeMaxNum = null;

        /**
         * <p>Node disk size capacity limit</p>
         * @type {number || null}
         */
        this.StorageNodeMaxDisk = null;

        /**
         * <p>Minimum number of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeMinNum = null;

        /**
         * <p>Node disk size minimum</p>
         * @type {number || null}
         */
        this.StorageNodeMinDisk = null;

        /**
         * <p>Disk Type, CLOUD_HSSD enhanced SSD, CLOUD_TCS local SSD disk</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Default disk size of storage node for frontend display</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageNodeDefaultDisk = null;

        /**
         * <p>Specification support billing mode list</p>
         * @type {Array.<string> || null}
         */
        this.InstanceMode = null;

        /**
         * <p>Disk Type CLOUD_DISK: cloud disk LOCAL_DISK: local disk</p>
         * @type {string || null}
         */
        this.DiskTypeCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.StorageNodeMaxNum = 'StorageNodeMaxNum' in params ? params.StorageNodeMaxNum : null;
        this.StorageNodeMaxDisk = 'StorageNodeMaxDisk' in params ? params.StorageNodeMaxDisk : null;
        this.StorageNodeMinNum = 'StorageNodeMinNum' in params ? params.StorageNodeMinNum : null;
        this.StorageNodeMinDisk = 'StorageNodeMinDisk' in params ? params.StorageNodeMinDisk : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageNodeDefaultDisk = 'StorageNodeDefaultDisk' in params ? params.StorageNodeDefaultDisk : null;
        this.InstanceMode = 'InstanceMode' in params ? params.InstanceMode : null;
        this.DiskTypeCategory = 'DiskTypeCategory' in params ? params.DiskTypeCategory : null;

    }
}

/**
 * IsolateDBInstance response structure.
 * @class
 */
class IsolateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Isolation successful instance Id list.
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * Isolation failed instance Id list.
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

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
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetUserPassword response structure.
 * @class
 */
class ResetUserPasswordResponse extends  AbstractModel {
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
 * DescribeInstanceSSLStatus response structure.
 * @class
 */
class DescribeInstanceSSLStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>SSL enable status</p><p>Enumeration values:</p><ul><li>Enabled: SSL is on</li><li>Disabled: SSL is closed</li><li>Enabling: SSL is enabling</li><li>Disabling: SSL is disabling</li></ul>
         * @type {string || null}
         */
        this.SSLStatus = null;

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
        this.SSLStatus = 'SSLStatus' in params ? params.SSLStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBSBackupSets response structure.
 * @class
 */
class DeleteDBSBackupSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Number of backups deleted this time.</p>
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * <P>Whether all are deleted successfully.</p>
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * <P>Total number of backups to be deleted.</p>
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
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.Total = 'Total' in params ? params.Total : null;
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
 * Maintenance window configuration
 * @class
 */
class MaintenanceWindowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;

    }
}

/**
 * DescribeDBSBackupStatisticsDetail response structure.
 * @class
 */
class DescribeDBSBackupStatisticsDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Statistics by backup method</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BackupMethodStatisticsOutPut || null}
         */
        this.BackupMethodStatistics = null;

        /**
         * <p>Backup time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BackupTime = null;

        /**
         * <p>Data type statistics by backup</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BackupTypeStatisticsModel || null}
         */
        this.BackupTypeStatistics = null;

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

        if (params.BackupMethodStatistics) {
            let obj = new BackupMethodStatisticsOutPut();
            obj.deserialize(params.BackupMethodStatistics)
            this.BackupMethodStatistics = obj;
        }
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;

        if (params.BackupTypeStatistics) {
            let obj = new BackupTypeStatisticsModel();
            obj.deserialize(params.BackupTypeStatistics)
            this.BackupTypeStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBSBackupSetComment request structure.
 * @class
 */
class ModifyDBSBackupSetCommentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Backup set ID. the value comes from the DescribeDBSBackupSets api response.</p>
         * @type {number || null}
         */
        this.BackupSetId = null;

        /**
         * <P>Backup notes.</p>
         * @type {string || null}
         */
        this.NewBackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.NewBackupName = 'NewBackupName' in params ? params.NewBackupName : null;

    }
}

/**
 * Parameter constraints.
 * @class
 */
class ParamConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Constraint type, for example enumeration, interval.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Lists the available options when the constraint type is enum.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Enum = null;

        /**
         * Value range when the constraint type is section.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ConstraintRange || null}
         */
        this.Range = null;

        /**
         * Valid values when the constraint type is string.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeDBSBackupPolicy response structure.
 * @class
 */
class DescribeDBSBackupPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup policy list</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BackupPolicyModelOutPut> || null}
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
                let obj = new BackupPolicyModelOutPut();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBSBackupSets request structure.
 * @class
 */
class DeleteDBSBackupSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Backup set list. the value comes from the DescribeDBSBackupSets api response.</p>
         * @type {Array.<number> || null}
         */
        this.BackupSetIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupSetIdList = 'BackupSetIdList' in params ? params.BackupSetIdList : null;

    }
}

/**
 * Show the Binlog information of the node.
 * @class
 */
class BinlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the log service
         * @type {string || null}
         */
        this.Sid = null;

        /**
         * Log service type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Unique ID of the instance
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
        this.Sid = 'Sid' in params ? params.Sid : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Database-level permission list
 * @class
 */
class DatabasePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Permission list
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
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * Node information type
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Node IP information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * <p>Node types, such as sqlengine, tdstore, mc</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Unique identifier of the node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * <p>Node port information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * <p>Availability zone of the node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Machine ip of the node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * <p>Node log service information</p>
         * @type {Array.<BinlogInfo> || null}
         */
        this.BinlogInfo = null;

        /**
         * <p>Number of CPUs of the node</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>Node mem size</p>
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * <p>Node disk size</p>
         * @type {number || null}
         */
        this.DataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Host = 'Host' in params ? params.Host : null;

        if (params.BinlogInfo) {
            this.BinlogInfo = new Array();
            for (let z in params.BinlogInfo) {
                let obj = new BinlogInfo();
                obj.deserialize(params.BinlogInfo[z]);
                this.BinlogInfo.push(obj);
            }
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.DataDisk = 'DataDisk' in params ? params.DataDisk : null;

    }
}

/**
 * DescribeSpecs response structure.
 * @class
 */
class DescribeSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Purchasable specification list of peer nodes</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StorageNodeSpec> || null}
         */
        this.HybridNodeSpecs = null;

        /**
         * <p>Purchasable specification list of svls nodes</p>
         * @type {Array.<ServerlessCcu> || null}
         */
        this.ServerlessCcuSpec = null;

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

        if (params.HybridNodeSpecs) {
            this.HybridNodeSpecs = new Array();
            for (let z in params.HybridNodeSpecs) {
                let obj = new StorageNodeSpec();
                obj.deserialize(params.HybridNodeSpecs[z]);
                this.HybridNodeSpecs.push(obj);
            }
        }

        if (params.ServerlessCcuSpec) {
            this.ServerlessCcuSpec = new Array();
            for (let z in params.ServerlessCcuSpec) {
                let obj = new ServerlessCcu();
                obj.deserialize(params.ServerlessCcuSpec[z]);
                this.ServerlessCcuSpec.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateCloneInstance response structure.
 * @class
 */
class CreateCloneInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Clone instance ID</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Task ID.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserPrivileges response structure.
 * @class
 */
class ModifyUserPrivilegesResponse extends  AbstractModel {
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
 * DescribeSlowLogs response structure.
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of logs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Log details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SlowLogData> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogData();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBSBackup response structure.
 * @class
 */
class CreateDBSBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup set ID.</p>.
         * @type {number || null}
         */
        this.BackupSetId = null;

        /**
         * <P>Whether it is successful</p>.
         * @type {boolean || null}
         */
        this.IsSuccess = null;

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
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * filter for backup set queries
 * @class
 */
class BackupSetsReqFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup method, multiple values separated by commas</p><p>Enumeration value:</p><ul><li>physical: Physical backup</li><li>snapshot: Snapshot backup</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * <p>Backup status, multiple values separated by commas. Description of meaning: pending scheduling pending, running running, success success, failed failed</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupStatus = null;

        /**
         * <p>Backup type, multiple values separated by commas. Description of meaning: full backup full</p><p>Enumeration value:</p><ul><li>full: Full backup</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * <p>Backup trigger mode</p><p>Enumeration value:</p><ul><li>0: Auto-backup</li><li>1: Manual backup</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ManualBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.ManualBackup = 'ManualBackup' in params ? params.ManualBackup : null;

    }
}

/**
 * DescribeDBSBackupSets response structure.
 * @class
 */
class DescribeDBSBackupSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup set list</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BackupSetModel> || null}
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
                let obj = new BackupSetModel();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSCloneInstances request structure.
 * @class
 */
class DescribeDBSCloneInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source instance ID.</p>
         * @type {string || null}
         */
        this.SourceInstanceId = null;

        /**
         * <P>Engine type</p>
         * @type {string || null}
         */
        this.DBType = null;

        /**
         * <P>Creation end time</p>
         * @type {string || null}
         */
        this.EndCreateTime = null;

        /**
         * <p>Clone kind: PITR time point BackupSet backup set</p>
         * @type {string || null}
         */
        this.FilterCloneType = null;

        /**
         * <P>Query count [0,200]</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Query offset [0,INF]</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Sorting field: CloneTime, CreateTime</p>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * <p>Sorting type: ASC, DESC</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <P>Creation start time</p>
         * @type {string || null}
         */
        this.StartCreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DBType = 'DBType' in params ? params.DBType : null;
        this.EndCreateTime = 'EndCreateTime' in params ? params.EndCreateTime : null;
        this.FilterCloneType = 'FilterCloneType' in params ? params.FilterCloneType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.StartCreateTime = 'StartCreateTime' in params ? params.StartCreateTime : null;

    }
}

/**
 * CreateCloneInstance request structure.
 * @class
 */
class CreateCloneInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Creating an Instance Region</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Character type vpcid</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Character type subnetid</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Purchase specification</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * <p>Number of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeNum = null;

        /**
         * <p>Source instance id</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Instance name. The required length is 1-60. It can contain Chinese characters, English case, digits, hyphens (-), and underscores (_).</p>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Tag key-value pair array</p>
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * <p>Backup and rollback name</p>
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * <p>CPU cores of the storage node</p>
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Create version</p>
         * @type {string || null}
         */
        this.CreateVersion = null;

        /**
         * <p>Create port number</p>
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * <p>Recovery time point</p>
         * @type {string || null}
         */
        this.RecoverTime = null;

        /**
         * <p>Instance Architecture Type, separate: decoupled architecture; hybrid: peer-to-peer architecture</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Disk Type, CLOUD_HSSD enhanced SSD, CLOUD_TCS local SSD disk</p>
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>Multi-AZ list, Zones[0] refers to the primary AZ</p>
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>Number of replicas</p>
         * @type {number || null}
         */
        this.FullReplications = null;

        /**
         * <p>Instance mode, normal: standard type; enhanced: enhanced</p>
         * @type {string || null}
         */
        this.InstanceMode = null;

        /**
         * <p>Security group id list</p>
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.StorageNodeNum = 'StorageNodeNum' in params ? params.StorageNodeNum : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.CreateVersion = 'CreateVersion' in params ? params.CreateVersion : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.RecoverTime = 'RecoverTime' in params ? params.RecoverTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;
        this.InstanceMode = 'InstanceMode' in params ? params.InstanceMode : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
         * <p>Filter parameters</p>
         * @type {Array.<InstanceFilter> || null}
         */
        this.Filters = null;

        /**
         * <p>Maximum return count, defaults to 20, maximum 100</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset, which is an integer multiple of Limit.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Specified query engine type</p><p>Enumeration value:</p><ul><li>libra: Column storage engine</li></ul>
         * @type {string || null}
         */
        this.EngineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new InstanceFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

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
         * Instance ID.
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
 * Query the sales API. The return type is region information.
 * @class
 */
class DescribeSaleRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>English string of Region</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Purchasable Zone list</p>
         * @type {Array.<DescribeSaleZonesInfo> || null}
         */
        this.ZoneList = null;

        /**
         * <p>Region Chinese character string</p>
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * <p>Whether to sell. 1: sell, 0: do not sell</p>
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * <p>Optional quantity of multiple availability</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AvailableZoneNum = null;

        /**
         * <p>Whether to allow usage log replica</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsSupportedLogReplica = null;

        /**
         * <p>Availability zone combination</p>
         * @type {Array.<DescribeSaleZonesGroup> || null}
         */
        this.ZoneGroup = null;

        /**
         * <p>Whether serverless is supported</p>
         * @type {boolean || null}
         */
        this.IsSupportServerless = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new DescribeSaleZonesInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.AvailableZoneNum = 'AvailableZoneNum' in params ? params.AvailableZoneNum : null;
        this.IsSupportedLogReplica = 'IsSupportedLogReplica' in params ? params.IsSupportedLogReplica : null;

        if (params.ZoneGroup) {
            this.ZoneGroup = new Array();
            for (let z in params.ZoneGroup) {
                let obj = new DescribeSaleZonesGroup();
                obj.deserialize(params.ZoneGroup[z]);
                this.ZoneGroup.push(obj);
            }
        }
        this.IsSupportServerless = 'IsSupportServerless' in params ? params.IsSupportServerless : null;

    }
}

/**
 * DescribeSaleInfo request structure.
 * @class
 */
class DescribeSaleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Region of the disaster recovery primary instance</p>
         * @type {string || null}
         */
        this.SrcRegion = null;

        /**
         * <p>Instance id</p><p>Input this parameter to return the sales information of the availability zone in the region where this instance is located.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Specify the sales information that supports a certain type instance.</p><p>Enumeration value:</p><ul><li>serverless: Returns all regions that support serverless instance type.</li></ul><p>Default value: None</p><p>Currently only support specifying serverless. Import other info or leave it blank to return all sales region information by default.</p>
         * @type {string || null}
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
        this.SrcRegion = 'SrcRegion' in params ? params.SrcRegion : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeDBSArchiveLogs request structure.
 * @class
 */
class DescribeDBSArchiveLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Logging ID</p>
         * @type {number || null}
         */
        this.ArchiveLogId = null;

        /**
         * <p>End time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Backup status: pending, running, success, failed</p>
         * @type {string || null}
         */
        this.FilterStatus = null;

        /**
         * <p>Limit on number</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Offset.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Sorting field, enumerate: StartTime, EndTime, ExpiredTime, FileSize, BackupDuration</p>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * <p>Sorting method: ASC: sequential, DESC: reverse</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ArchiveLogId = 'ArchiveLogId' in params ? params.ArchiveLogId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FilterStatus = 'FilterStatus' in params ? params.FilterStatus : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * Database function information.
 * @class
 */
class DatabaseFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name.
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
 * CreateUsers response structure.
 * @class
 */
class CreateUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBSBackupPolicy request structure.
 * @class
 */
class ModifyDBSBackupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup policy</p>
         * @type {BackupPolicyModelInput || null}
         */
        this.BackupPolicy = null;

        /**
         * <p>Instance ID.</p>
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

        if (params.BackupPolicy) {
            let obj = new BackupPolicyModelInput();
            obj.deserialize(params.BackupPolicy)
            this.BackupPolicy = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeDBInstanceDetail response structure.
 * @class
 */
class DescribeDBInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance name</p>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Region</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Character type vpcid</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Character type subnetid</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Create an instance version</p>
         * @type {string || null}
         */
        this.CreateVersion = null;

        /**
         * <p>Subnet IP</p>
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * <p>Subnet port</p>
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * <p>Instance status</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * <p>Number of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeNum = null;

        /**
         * <p>Initialize instance parameters</p>
         * @type {Array.<InstanceParam> || null}
         */
        this.InitParams = null;

        /**
         * <p>Instance tag information.</p>
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

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
         * <p>Number of storage node replicas</p>
         * @type {number || null}
         */
        this.Replications = null;

        /**
         * <p>Number of replicas</p>
         * @type {number || null}
         */
        this.FullReplications = null;

        /**
         * <p>Character set</p>
         * @type {string || null}
         */
        this.CharSet = null;

        /**
         * <p>Node information</p>
         * @type {Array.<NodeInfo> || null}
         */
        this.Node = null;

        /**
         * <p>Region of the instance</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Instance specification</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Status description in Chinese of the instance</p>
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * <p>CPU cores of the storage node</p>
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Renewal flag</p>
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * <p>Payment mode, 0 pay-as-you-go, 1 prepaid</p>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * <p>Expiration time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireAt = null;

        /**
         * <p>Isolation time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedAt = null;

        /**
         * <p>Instance Architecture Type, separate: decoupled architecture; hybrid: peer-to-peer architecture</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Disk Type, CLOUD_HSSD enhanced SSD, CLOUD_TCS local SSD disk</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>List of instance node availability zones. Zones[0] refers to the primary AZ</p>
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>Disk usage of the largest node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskUsage = null;

        /**
         * <p>Whether binlog is enabled</p>
         * @type {number || null}
         */
        this.BinlogStatus = null;

        /**
         * <p>az mode. 1: Single az 2: Multi-az non-primary az mode 3: Multi-az primary az mode</p>
         * @type {number || null}
         */
        this.AZMode = null;

        /**
         * <p>Disaster recovery flag. 1: No disaster recovery relationship; 2: Primary instance for disaster recovery; 3: Disaster Recovery Standby Instance</p>
         * @type {number || null}
         */
        this.StandbyFlag = null;

        /**
         * <p>cdc node type</p>
         * @type {string || null}
         */
        this.BinlogType = null;

        /**
         * <p>1 means supported, 0 means unsupported</p>
         * @type {number || null}
         */
        this.TimingModifyInstanceFlag = null;

        /**
         * <p>cpu cores of the columnar node</p>
         * @type {number || null}
         */
        this.ColumnarNodeCpu = null;

        /**
         * <p>Columnar node memory size</p>
         * @type {number || null}
         */
        this.ColumnarNodeMem = null;

        /**
         * <p>Number of columnar nodes</p>
         * @type {number || null}
         */
        this.ColumnarNodeNum = null;

        /**
         * <p>Columnar node disk size</p>
         * @type {number || null}
         */
        this.ColumnarNodeDisk = null;

        /**
         * <p>Columnar node disk type</p>
         * @type {string || null}
         */
        this.ColumnarNodeStorageType = null;

        /**
         * <p>Columnar node specification</p>
         * @type {string || null}
         */
        this.ColumnarNodeSpecCode = null;

        /**
         * <p>Columnar storage vip</p>
         * @type {string || null}
         */
        this.ColumnarVip = null;

        /**
         * <p>Columnar vport</p>
         * @type {number || null}
         */
        this.ColumnarVport = null;

        /**
         * <p>Whether the instance supports columnar storage</p>
         * @type {boolean || null}
         */
        this.IsSupportColumnar = null;

        /**
         * <p>Instance type</p>
         * @type {number || null}
         */
        this.InstanceCategory = null;

        /**
         * <p>Compatible mode</p>
         * @type {string || null}
         */
        this.SQLMode = null;

        /**
         * <p>Whether modification of the number of replicas is supported</p>
         * @type {boolean || null}
         */
        this.IsSwitchFullReplicationsEnable = null;

        /**
         * <p>Instance type</p>
         * @type {string || null}
         */
        this.InstanceMode = null;

        /**
         * <p>dumper vip</p>
         * @type {string || null}
         */
        this.DumperVip = null;

        /**
         * <p>dumper vport</p>
         * @type {number || null}
         */
        this.DumperVport = null;

        /**
         * <p>ccu adjustment range of the svls instance</p>
         * @type {AutoScalingConfig || null}
         */
        this.AutoScaleConfig = null;

        /**
         * <p>Parameter template id</p>
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * <p>Parameter template name</p>
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * <p>Instance analysis engine mode</p><p>Enumeration value:</p><ul><li>libra: LibraDB analysis engine instance</li></ul>
         * @type {string || null}
         */
        this.AnalysisMode = null;

        /**
         * <p>Analysis engine instance relationship</p>
         * @type {Array.<AnalysisRelationInfo> || null}
         */
        this.AnalysisRelationInfos = null;

        /**
         * <p>Analysis engine instance info</p><p>Cpu, Memory, and Disk reuse top-level fields</p>
         * @type {AnalysisInstanceInfo || null}
         */
        this.AnalysisInstanceInfo = null;

        /**
         * <p>Maintenance window configuration</p>
         * @type {MaintenanceWindowInfo || null}
         */
        this.MaintenanceWindow = null;

        /**
         * <p>Whether transparent data encryption is enabled. 0: not enabled; 1: enabled</p>
         * @type {number || null}
         */
        this.EncryptionEnable = null;

        /**
         * <p>Real-use kms region for subsequent call to kms service</p>
         * @type {string || null}
         */
        this.EncryptionKmsRegion = null;

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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CreateVersion = 'CreateVersion' in params ? params.CreateVersion : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.StorageNodeNum = 'StorageNodeNum' in params ? params.StorageNodeNum : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Replications = 'Replications' in params ? params.Replications : null;
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;
        this.CharSet = 'CharSet' in params ? params.CharSet : null;

        if (params.Node) {
            this.Node = new Array();
            for (let z in params.Node) {
                let obj = new NodeInfo();
                obj.deserialize(params.Node[z]);
                this.Node.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExpireAt = 'ExpireAt' in params ? params.ExpireAt : null;
        this.IsolatedAt = 'IsolatedAt' in params ? params.IsolatedAt : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.BinlogStatus = 'BinlogStatus' in params ? params.BinlogStatus : null;
        this.AZMode = 'AZMode' in params ? params.AZMode : null;
        this.StandbyFlag = 'StandbyFlag' in params ? params.StandbyFlag : null;
        this.BinlogType = 'BinlogType' in params ? params.BinlogType : null;
        this.TimingModifyInstanceFlag = 'TimingModifyInstanceFlag' in params ? params.TimingModifyInstanceFlag : null;
        this.ColumnarNodeCpu = 'ColumnarNodeCpu' in params ? params.ColumnarNodeCpu : null;
        this.ColumnarNodeMem = 'ColumnarNodeMem' in params ? params.ColumnarNodeMem : null;
        this.ColumnarNodeNum = 'ColumnarNodeNum' in params ? params.ColumnarNodeNum : null;
        this.ColumnarNodeDisk = 'ColumnarNodeDisk' in params ? params.ColumnarNodeDisk : null;
        this.ColumnarNodeStorageType = 'ColumnarNodeStorageType' in params ? params.ColumnarNodeStorageType : null;
        this.ColumnarNodeSpecCode = 'ColumnarNodeSpecCode' in params ? params.ColumnarNodeSpecCode : null;
        this.ColumnarVip = 'ColumnarVip' in params ? params.ColumnarVip : null;
        this.ColumnarVport = 'ColumnarVport' in params ? params.ColumnarVport : null;
        this.IsSupportColumnar = 'IsSupportColumnar' in params ? params.IsSupportColumnar : null;
        this.InstanceCategory = 'InstanceCategory' in params ? params.InstanceCategory : null;
        this.SQLMode = 'SQLMode' in params ? params.SQLMode : null;
        this.IsSwitchFullReplicationsEnable = 'IsSwitchFullReplicationsEnable' in params ? params.IsSwitchFullReplicationsEnable : null;
        this.InstanceMode = 'InstanceMode' in params ? params.InstanceMode : null;
        this.DumperVip = 'DumperVip' in params ? params.DumperVip : null;
        this.DumperVport = 'DumperVport' in params ? params.DumperVport : null;

        if (params.AutoScaleConfig) {
            let obj = new AutoScalingConfig();
            obj.deserialize(params.AutoScaleConfig)
            this.AutoScaleConfig = obj;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.AnalysisMode = 'AnalysisMode' in params ? params.AnalysisMode : null;

        if (params.AnalysisRelationInfos) {
            this.AnalysisRelationInfos = new Array();
            for (let z in params.AnalysisRelationInfos) {
                let obj = new AnalysisRelationInfo();
                obj.deserialize(params.AnalysisRelationInfos[z]);
                this.AnalysisRelationInfos.push(obj);
            }
        }

        if (params.AnalysisInstanceInfo) {
            let obj = new AnalysisInstanceInfo();
            obj.deserialize(params.AnalysisInstanceInfo)
            this.AnalysisInstanceInfo = obj;
        }

        if (params.MaintenanceWindow) {
            let obj = new MaintenanceWindowInfo();
            obj.deserialize(params.MaintenanceWindow)
            this.MaintenanceWindow = obj;
        }
        this.EncryptionEnable = 'EncryptionEnable' in params ? params.EncryptionEnable : null;
        this.EncryptionKmsRegion = 'EncryptionKmsRegion' in params ? params.EncryptionKmsRegion : null;
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
         * <p>Instance ID, such as tdsql3-42f40429.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Database name, obtained via the DescribeDatabases API.</p>
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * <p>Pagination index</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of items per page</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Table name matching expression</p>
         * @type {string || null}
         */
        this.TableRegexp = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TableRegexp = 'TableRegexp' in params ? params.TableRegexp : null;

    }
}

/**
 * ModifyMaintenanceWindow request structure.
 * @class
 */
class ModifyMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Ops window start time</p><p>Parameter format: hh:mm:ss</p>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * <p>Ops window duration</p><p>Value ranges from 1 to 3</p><p>Unit: hour</p>
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * <p>Ops window date</p><p>Enumeration value:</p><ul><li>Monday: Monday</li><li>Tuesday: Tuesday</li><li>Wednesday: Wednesday</li><li>Thursday: Thursday</li><li>Friday: Friday</li><li>Saturday: Saturday</li><li>Sunday: Sunday</li></ul>
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;

    }
}

/**
 * DestroyInstances response structure.
 * @class
 */
class DestroyInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of successfully isolated instance ids.
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * Isolation removal failed instance Id list.
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

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
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSaleInfo response structure.
 * @class
 */
class DescribeSaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Return marketable region information</p>
         * @type {Array.<DescribeSaleRegionInfo> || null}
         */
        this.RegionList = null;

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

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new DescribeSaleRegionInfo();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUsers response structure.
 * @class
 */
class DeleteUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database table information.
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
 * DescribeDBInstanceDetail request structure.
 * @class
 */
class DescribeDBInstanceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
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
 * ModifyAutoRenewFlag response structure.
 * @class
 */
class ModifyAutoRenewFlagResponse extends  AbstractModel {
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
 * DescribeUsers request structure.
 * @class
 */
class DescribeUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
 * Database view information.
 * @class
 */
class DatabaseView extends  AbstractModel {
    constructor(){
        super();

        /**
         * View name.
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
 * Data backup statistics object
 * @class
 */
class DataBackupStatisticsModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto-backup count
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoBackupCount = null;

        /**
         * Auto-backup size, in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoBackupSize = null;

        /**
         * Avg backup size per each, in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerBackup = null;

        /**
         * Avg daily backup size, Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerDay = null;

        /**
         * Manual backup count
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ManualBackupCount = null;

        /**
         * Manual backup size, in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ManualBackupSize = null;

        /**
         * Number of data backups
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data backup size, in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoBackupCount = 'AutoBackupCount' in params ? params.AutoBackupCount : null;
        this.AutoBackupSize = 'AutoBackupSize' in params ? params.AutoBackupSize : null;
        this.AverageSizePerBackup = 'AverageSizePerBackup' in params ? params.AverageSizePerBackup : null;
        this.AverageSizePerDay = 'AverageSizePerDay' in params ? params.AverageSizePerDay : null;
        this.ManualBackupCount = 'ManualBackupCount' in params ? params.ManualBackupCount : null;
        this.ManualBackupSize = 'ManualBackupSize' in params ? params.ManualBackupSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * Slow log filtering
 * @class
 */
class LogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter criterion name.

For example: sql - SQL command details

host - client IP
user - database account;
dbName – Database name;
sqlType - SQL type;
Error code

execTime - Execution time
lockWaitTime - Lock waiting time
ioWaitTime - IO wait time
trxLivingTime - Transaction execution time
Cpu time

threadId - Thread ID
trxId - Transaction ID
checkRows - Number of scanned rows
affectRows - Number of rows affected
sentRows - Number of rows returned
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter condition match type. Supported:
INC – Includes (multiple values are in a || relationship before).
EXC - excluding (multiple values are in an && relationship)
EQS – equal to (multiple values before are in a || relationship).
NEQ – not equal to (multiple values are in && relationship)

RG - Range;
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * Filter condition matching value. When Compare=RG, for example ["1-100","200-300"].
         * @type {Array.<string> || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyDBSBackupPolicy response structure.
 * @class
 */
class ModifyDBSBackupPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether it is successful</p>
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * <p>Message</p>
         * @type {string || null}
         */
        this.Msg = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cloud database parameter information.
 * @class
 */
class DBParamValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Param = null;

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
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateUsers request structure.
 * @class
 */
class CreateUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance id</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Add user list</p>
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * <p>Unencrypted password</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Encryption password</p>
         * @type {string || null}
         */
        this.EncryptedPassword = null;

        /**
         * <p>User description</p>
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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.EncryptedPassword = 'EncryptedPassword' in params ? params.EncryptedPassword : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * Instance ID, for example: tdsql3-ow728lmc.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Parameter list, each element is a combination of Param and Value.
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
 * Clone instance object.
 * @class
 */
class CloneInstanceModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Clone task end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneEndTime = null;

        /**
         * Clone record ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CloneId = null;

        /**
         * Clone instance type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneInsType = null;

        /**
         * Clone instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneInstanceId = null;

        /**
         * Whether the clone instance is deleted.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.CloneInstanceIsDeleted = null;

        /**
         * Task progress of clone.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CloneProgress = null;

        /**
         * Task start time of the clone.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneStartTime = null;

        /**
         * Task status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneStatus = null;

        /**
         * Clone time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneTime = null;

        /**
         * Clone type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloneType = null;

        /**
         * Creation time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Engine type.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBType = null;

        /**
         * Region.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Source instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CloneEndTime = 'CloneEndTime' in params ? params.CloneEndTime : null;
        this.CloneId = 'CloneId' in params ? params.CloneId : null;
        this.CloneInsType = 'CloneInsType' in params ? params.CloneInsType : null;
        this.CloneInstanceId = 'CloneInstanceId' in params ? params.CloneInstanceId : null;
        this.CloneInstanceIsDeleted = 'CloneInstanceIsDeleted' in params ? params.CloneInstanceIsDeleted : null;
        this.CloneProgress = 'CloneProgress' in params ? params.CloneProgress : null;
        this.CloneStartTime = 'CloneStartTime' in params ? params.CloneStartTime : null;
        this.CloneStatus = 'CloneStatus' in params ? params.CloneStatus : null;
        this.CloneTime = 'CloneTime' in params ? params.CloneTime : null;
        this.CloneType = 'CloneType' in params ? params.CloneType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DBType = 'DBType' in params ? params.DBType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;

    }
}

/**
 * Recoverable time interval
 * @class
 */
class ArchiveLogInterval extends  AbstractModel {
    constructor(){
        super();

        /**
         * End time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Major version.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MajorVersion = null;

        /**
         * Minor version.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MinorVersion = null;

        /**
         * Start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MajorVersion = 'MajorVersion' in params ? params.MajorVersion : null;
        this.MinorVersion = 'MinorVersion' in params ? params.MinorVersion : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

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
         * Task id.
         * @type {number || null}
         */
        this.TaskID = null;

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
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSSLStatus request structure.
 * @class
 */
class DescribeInstanceSSLStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
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
 * Security group details.
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * CreationTime, time format: yyyy-mm-dd hh:mm:ss.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Security group ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name.
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * Inbound rule.
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule.
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
 * DeleteUsers request structure.
 * @class
 */
class DeleteUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance id</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Batch delete user list</p>
         * @type {Array.<User> || null}
         */
        this.Users = null;

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
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }

    }
}

/**
 * ModifyUserPrivileges request structure.
 * @class
 */
class ModifyUserPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as tdsql3-5baee8df.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Login username and host information
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * Global permission
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * Database-level permission
         * @type {Array.<DatabasePrivileges> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * Table-level permission
         * @type {Array.<TablePrivileges> || null}
         */
        this.TablePrivileges = null;

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
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivileges();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivileges();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

    }
}

/**
 * DescribeDBSArchiveLogs response structure.
 * @class
 */
class DescribeDBSArchiveLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Archivelog list</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ArchiveLogModel> || null}
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
                let obj = new ArchiveLogModel();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * <p>Passthrough input parameter.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Database name.</p>
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * <p>Table list.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatabaseTable> || null}
         */
        this.Tables = null;

        /**
         * <p>View list.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatabaseView> || null}
         */
        this.Views = null;

        /**
         * <p>Stored procedure list.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatabaseProcedure> || null}
         */
        this.Procs = null;

        /**
         * <p>Function list.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DatabaseFunction> || null}
         */
        this.Funcs = null;

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
 * DescribeMaintenanceWindow response structure.
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Ops window time range</p>
         * @type {string || null}
         */
        this.MaintenanceWindow = null;

        /**
         * <p>Ops window number of days range</p>
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MaintenanceWindow = 'MaintenanceWindow' in params ? params.MaintenanceWindow : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Node information
 * @class
 */
class InstanceNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary key
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node Id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Instance Ip
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Eni IP of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * Instance Port
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance SpecCode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance NodeName
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * Instance Cpu
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * Instance Disk
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * Instance type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Instance status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * instance version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance LocalDNS
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LocalDNS = null;

        /**
         * Instance Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance log disk
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogDisk = null;

        /**
         * Instance data disk
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataDisk = null;

        /**
         * Zone ID of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneID = null;

        /**
         * Instance SpecName
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * Instance Replicas
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Instance Shards
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Shards = null;

        /**
         * Instance data replica
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataReplicas = null;

        /**
         * Initialize parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Params = null;

        /**
         * Storage medium, CLOUD_PREMIUM: Premium Cloud Disk, CLOUD_SSD: SSD cloud disk, CLOUD_HSSD: HSSD cloud disk
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.LocalDNS = 'LocalDNS' in params ? params.LocalDNS : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.LogDisk = 'LogDisk' in params ? params.LogDisk : null;
        this.DataDisk = 'DataDisk' in params ? params.DataDisk : null;
        this.ZoneID = 'ZoneID' in params ? params.ZoneID : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Shards = 'Shards' in params ? params.Shards : null;
        this.DataReplicas = 'DataReplicas' in params ? params.DataReplicas : null;
        this.Params = 'Params' in params ? params.Params : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * Inbound and outbound rules.
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source IP or IP range, such as 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Policy, ACCEPT or DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Port.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Network protocol, supports UDP, TCP.
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
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;

    }
}

/**
 * DescribeDBSBackupStatistics response structure.
 * @class
 */
class DescribeDBSBackupStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup method statistics</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BackupMethodStatisticsModel || null}
         */
        this.BackupMethodStatistics = null;

        /**
         * <p>Backup set statistics</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BackupStatisticsModel || null}
         */
        this.BackupStatistics = null;

        /**
         * <p>Backup statistics.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DataBackupStatisticsModel || null}
         */
        this.DataBackupStatistics = null;

        /**
         * <p>Log backup statistics</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LogBackupStatisticsModel || null}
         */
        this.LogBackupStatistics = null;

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

        if (params.BackupMethodStatistics) {
            let obj = new BackupMethodStatisticsModel();
            obj.deserialize(params.BackupMethodStatistics)
            this.BackupMethodStatistics = obj;
        }

        if (params.BackupStatistics) {
            let obj = new BackupStatisticsModel();
            obj.deserialize(params.BackupStatistics)
            this.BackupStatistics = obj;
        }

        if (params.DataBackupStatistics) {
            let obj = new DataBackupStatisticsModel();
            obj.deserialize(params.DataBackupStatistics)
            this.DataBackupStatistics = obj;
        }

        if (params.LogBackupStatistics) {
            let obj = new LogBackupStatisticsModel();
            obj.deserialize(params.LogBackupStatistics)
            this.LogBackupStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backup method statistical object, provided to backup set statistical detail API
 * @class
 */
class BackupTypeStatisticsModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup size of data, in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.DataBackupSize = null;

        /**
         * <p>Log backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.LogBackupSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataBackupSize = 'DataBackupSize' in params ? params.DataBackupSize : null;
        this.LogBackupSize = 'LogBackupSize' in params ? params.LogBackupSize : null;

    }
}

/**
 * DescribeDBSCloneInstances response structure.
 * @class
 */
class DescribeDBSCloneInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Clone list</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CloneInstanceModel> || null}
         */
        this.Items = null;

        /**
         * <p>Total</p>
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
                let obj = new CloneInstanceModel();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance information type
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of compute nodes</p>
         * @type {number || null}
         */
        this.ComputeNodeNum = null;

        /**
         * <p>Region</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Creating an Instance Version</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateVersion = null;

        /**
         * <p>Initialize instance parameter</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceParam> || null}
         */
        this.InitParams = null;

        /**
         * <p>Instance status: creating, created, initializing, running, modifying, isolating, isolated, destroying, destroyed</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Instance id</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Number of storage nodes</p>
         * @type {number || null}
         */
        this.StorageNodeNum = null;

        /**
         * <p>Instance tag information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * <p>Instance name</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>cpu cores of the computing node</p>
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * <p>Character type vpcid</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Computing node mem, in GB</p>
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * <p>Subnet IP</p>
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * <p>Character type subnetid</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Subnet port</p>
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * <p>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * <p>Instance Creation Time</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Region of the instance</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Status description in Chinese of the instance</p>
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * <p>CPU cores of the control node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MCCpu = null;

        /**
         * <p>CPU size of the control node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MCMem = null;

        /**
         * <p>CPU cores of the computing node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ComputerNodeCpu = null;

        /**
         * <p>Compute node memory size</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ComputerNodeMem = null;

        /**
         * <p>CPU cores of the storage node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Number of control nodes</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MCNum = null;

        /**
         * <p>Renewal flag</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * <p>Payment mode, 0 pay-as-you-go; 1 annual/monthly subscription</p>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * <p>User tag, inner: internal user; external: external user</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountTag = null;

        /**
         * <p>Instance Architecture Type, separate: decoupled architecture; hyper: peer-to-peer architecture</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Disk Type, CLOUD_HSSD enhanced SSD, CLOUD_TCS local SSD disk</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * <p>&quot;0000-00-00 00:00:00&quot;</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DestroyedAt = null;

        /**
         * <p>&quot;0000-00-00 00:00:00&quot;</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireAt = null;

        /**
         * <p>&quot;0000-00-00 00:00:00&quot;</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedAt = null;

        /**
         * <p>&quot;0000-00-00 00:00:00&quot;</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IsolatedFrom = null;

        /**
         * <p>1</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Replications = null;

        /**
         * <p>Number of replicas</p>
         * @type {number || null}
         */
        this.FullReplications = null;

        /**
         * <p>Account information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <p>Account information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * <p>Account information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * <p>AZ information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>Instance node</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<InstanceNode> || null}
         */
        this.Nodes = null;

        /**
         * <p>Whether binlog is on</p>
         * @type {number || null}
         */
        this.BinlogStatus = null;

        /**
         * <p>Number of cdc node cores</p>
         * @type {number || null}
         */
        this.CdcNodeCpu = null;

        /**
         * <p>cdc node memory size</p>
         * @type {number || null}
         */
        this.CdcNodeMem = null;

        /**
         * <p>Number of cdc nodes</p>
         * @type {number || null}
         */
        this.CdcNodeNum = null;

        /**
         * <p>az mode. 1: Single az, 2: Multi-az non-primary az mode, 3: Multi-az primary az mode</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AZMode = null;

        /**
         * <p>Disaster recovery flag. 1: No disaster recovery relationship; 2: Primary instance for disaster recovery; 3: Disaster Recovery Standby Instance</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StandbyFlag = null;

        /**
         * <p>Number of connected standby instances (Valid only when StandbyFlag == 2)</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StandbySecondaryNum = null;

        /**
         * <p>cpu cores of the columnar node</p>
         * @type {number || null}
         */
        this.ColumnarNodeCpu = null;

        /**
         * <p>Columnar node memory size</p>
         * @type {number || null}
         */
        this.ColumnarNodeMem = null;

        /**
         * <p>Number of columnar nodes</p>
         * @type {number || null}
         */
        this.ColumnarNodeNum = null;

        /**
         * <p>Columnar node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.ColumnarNodeDisk = null;

        /**
         * <p>Columnar node disk type</p>
         * @type {string || null}
         */
        this.ColumnarNodeStorageType = null;

        /**
         * <p>Exclusive flags, 1: Primary instance (dedicated), 2: Primary instance, 3: Disaster recovery instance, 4: Disaster recovery instance (dedicated)</p>
         * @type {number || null}
         */
        this.InstanceCategory = null;

        /**
         * <p>dbdc-xxxxx</p>
         * @type {string || null}
         */
        this.ExclusiveClusterId = null;

        /**
         * <p>Compatible mode</p>
         * @type {string || null}
         */
        this.SQLMode = null;

        /**
         * <p>Instance mode</p>
         * @type {string || null}
         */
        this.InstanceMode = null;

        /**
         * <p>Instance delivery platform</p>
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * <p>Auto-scaling configuration</p>
         * @type {AutoScalingConfig || null}
         */
        this.AutoScaleConfig = null;

        /**
         * <p>Analytical engine mode</p><p>Enumeration value:</p><ul><li>libra: LibraDB analytical engine mode</li></ul>
         * @type {string || null}
         */
        this.AnalysisMode = null;

        /**
         * <p>Analysis engine relationship information</p>
         * @type {Array.<AnalysisRelationInfo> || null}
         */
        this.AnalysisRelationInfos = null;

        /**
         * <p>Analysis engine instance info</p>
         * @type {AnalysisInstanceInfo || null}
         */
        this.AnalysisInstanceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComputeNodeNum = 'ComputeNodeNum' in params ? params.ComputeNodeNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreateVersion = 'CreateVersion' in params ? params.CreateVersion : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StorageNodeNum = 'StorageNodeNum' in params ? params.StorageNodeNum : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.MCCpu = 'MCCpu' in params ? params.MCCpu : null;
        this.MCMem = 'MCMem' in params ? params.MCMem : null;
        this.ComputerNodeCpu = 'ComputerNodeCpu' in params ? params.ComputerNodeCpu : null;
        this.ComputerNodeMem = 'ComputerNodeMem' in params ? params.ComputerNodeMem : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.MCNum = 'MCNum' in params ? params.MCNum : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.AccountTag = 'AccountTag' in params ? params.AccountTag : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DestroyedAt = 'DestroyedAt' in params ? params.DestroyedAt : null;
        this.ExpireAt = 'ExpireAt' in params ? params.ExpireAt : null;
        this.IsolatedAt = 'IsolatedAt' in params ? params.IsolatedAt : null;
        this.IsolatedFrom = 'IsolatedFrom' in params ? params.IsolatedFrom : null;
        this.Replications = 'Replications' in params ? params.Replications : null;
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new InstanceNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.BinlogStatus = 'BinlogStatus' in params ? params.BinlogStatus : null;
        this.CdcNodeCpu = 'CdcNodeCpu' in params ? params.CdcNodeCpu : null;
        this.CdcNodeMem = 'CdcNodeMem' in params ? params.CdcNodeMem : null;
        this.CdcNodeNum = 'CdcNodeNum' in params ? params.CdcNodeNum : null;
        this.AZMode = 'AZMode' in params ? params.AZMode : null;
        this.StandbyFlag = 'StandbyFlag' in params ? params.StandbyFlag : null;
        this.StandbySecondaryNum = 'StandbySecondaryNum' in params ? params.StandbySecondaryNum : null;
        this.ColumnarNodeCpu = 'ColumnarNodeCpu' in params ? params.ColumnarNodeCpu : null;
        this.ColumnarNodeMem = 'ColumnarNodeMem' in params ? params.ColumnarNodeMem : null;
        this.ColumnarNodeNum = 'ColumnarNodeNum' in params ? params.ColumnarNodeNum : null;
        this.ColumnarNodeDisk = 'ColumnarNodeDisk' in params ? params.ColumnarNodeDisk : null;
        this.ColumnarNodeStorageType = 'ColumnarNodeStorageType' in params ? params.ColumnarNodeStorageType : null;
        this.InstanceCategory = 'InstanceCategory' in params ? params.InstanceCategory : null;
        this.ExclusiveClusterId = 'ExclusiveClusterId' in params ? params.ExclusiveClusterId : null;
        this.SQLMode = 'SQLMode' in params ? params.SQLMode : null;
        this.InstanceMode = 'InstanceMode' in params ? params.InstanceMode : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.AutoScaleConfig) {
            let obj = new AutoScalingConfig();
            obj.deserialize(params.AutoScaleConfig)
            this.AutoScaleConfig = obj;
        }
        this.AnalysisMode = 'AnalysisMode' in params ? params.AnalysisMode : null;

        if (params.AnalysisRelationInfos) {
            this.AnalysisRelationInfos = new Array();
            for (let z in params.AnalysisRelationInfos) {
                let obj = new AnalysisRelationInfo();
                obj.deserialize(params.AnalysisRelationInfos[z]);
                this.AnalysisRelationInfos.push(obj);
            }
        }

        if (params.AnalysisInstanceInfo) {
            let obj = new AnalysisInstanceInfo();
            obj.deserialize(params.AnalysisInstanceInfo)
            this.AnalysisInstanceInfo = obj;
        }

    }
}

/**
 * Database account information
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * host
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDBSBackupSets request structure.
 * @class
 */
class DescribeDBSBackupSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Instance Backup set ID</p>
         * @type {number || null}
         */
        this.BackupSetId = null;

        /**
         * <p>End time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Filtering Conditions</p>
         * @type {BackupSetsReqFilter || null}
         */
        this.FilterBy = null;

        /**
         * <p>Query count [0,200]</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Query offset [0,INF] this time.</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>StartTime,EndTime,ExpiredTime,BackupSetId,BackupDuration</p>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * <p>ASC,DESC</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.FilterBy) {
            let obj = new BackupSetsReqFilter();
            obj.deserialize(params.FilterBy)
            this.FilterBy = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * Analytics engine instance info
 * @class
 */
class AnalysisInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of replicas</p>
         * @type {number || null}
         */
        this.ReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicasNum = 'ReplicasNum' in params ? params.ReplicasNum : null;

    }
}

/**
 * ccu specification of a serverless instance
 * @class
 */
class ServerlessCcu extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ccu minimum value</p>
         * @type {number || null}
         */
        this.MinCcu = null;

        /**
         * <p>Maximum value of ccu</p>
         * @type {Array.<number> || null}
         */
        this.MaxCcu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinCcu = 'MinCcu' in params ? params.MinCcu : null;
        this.MaxCcu = 'MaxCcu' in params ? params.MaxCcu : null;

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
         * Database name.
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
 * Query sales regions and recommend availability zone combinations
 * @class
 */
class DescribeSaleZonesGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of availability zones</p>
         * @type {number || null}
         */
        this.ZoneNum = null;

        /**
         * <p>Availability zone combination</p>
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>Supported types</p>
         * @type {Array.<string> || null}
         */
        this.SupportTypes = null;

        /**
         * <p>Supported disk</p><p>Enumeration value:</p><ul><li>CLOUD_TCS: Local disk</li><li>CLOUD_HSSD: Enhanced cloud disk</li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AvailableDiskTypes = null;

        /**
         * <p>Whether serverless is supported</p>
         * @type {boolean || null}
         */
        this.IsSupportServerless = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneNum = 'ZoneNum' in params ? params.ZoneNum : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SupportTypes = 'SupportTypes' in params ? params.SupportTypes : null;
        this.AvailableDiskTypes = 'AvailableDiskTypes' in params ? params.AvailableDiskTypes : null;
        this.IsSupportServerless = 'IsSupportServerless' in params ? params.IsSupportServerless : null;

    }
}

/**
 * DescribeDBSBackupStatistics request structure.
 * @class
 */
class DescribeDBSBackupStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>End time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <p>Start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * DescribeUsers response structure.
 * @class
 */
class DescribeUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User list.
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backup statistics object for logs
 * @class
 */
class LogBackupStatisticsModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Avg size of each log backup in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerBackup = null;

        /**
         * <p>Avg daily log backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerDay = null;

        /**
         * <p>Number of log backups</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Log backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageSizePerBackup = 'AverageSizePerBackup' in params ? params.AverageSizePerBackup : null;
        this.AverageSizePerDay = 'AverageSizePerDay' in params ? params.AverageSizePerDay : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * CancelIsolateDBInstances response structure.
 * @class
 */
class CancelIsolateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of successfully isolated instance ids.
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * Isolation removal failed instance Id list.
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

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
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backup method statistical object - provided to backup space statistics API
 * @class
 */
class BackupMethodStatisticsModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Auto-backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AutoBackupSize = null;

        /**
         * <p>Average size of total backup per day in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AverageSizePerDay = null;

        /**
         * <p>Manual backup size, unit Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ManualBackupSize = null;

        /**
         * <p>Total backup size in Byte</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoBackupSize = 'AutoBackupSize' in params ? params.AutoBackupSize : null;
        this.AverageSizePerDay = 'AverageSizePerDay' in params ? params.AverageSizePerDay : null;
        this.ManualBackupSize = 'ManualBackupSize' in params ? params.ManualBackupSize : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * DescribeDBSBackupPolicy request structure.
 * @class
 */
class DescribeDBSBackupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
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
 * UpgradeInstance response structure.
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Task ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelIsolateDBInstances request structure.
 * @class
 */
class CancelIsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of isolated instance ids required.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * slow log information
 * @class
 */
class SlowLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Sql execution time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * <p>Sql execution duration (seconds)</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * <p>Sql statement</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * <p>Client IP address</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * <p>Username.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * <p>Database name.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * <p>Lock duration (seconds)</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * <p>Number of scanned rows</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * <p>Result set row count</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * <p>Transaction ID</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * <p>rpc duration</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RpcTime = null;

        /**
         * <p>rpc duration for node interaction with storage</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StorageRpcTime = null;

        /**
         * <p>rpc retry latency</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RpcRetryDelayTime = null;

        /**
         * <p>node Name</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * <p>rpc link tracing</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RpcTrace = null;

        /**
         * <p>TDStore lock duration</p><p>Unit: seconds</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TDStoreLockTime = null;

        /**
         * <p>Global ID</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * <p>Execution plan</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Explain> || null}
         */
        this.Explain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.UserHost = 'UserHost' in params ? params.UserHost : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.RpcTime = 'RpcTime' in params ? params.RpcTime : null;
        this.StorageRpcTime = 'StorageRpcTime' in params ? params.StorageRpcTime : null;
        this.RpcRetryDelayTime = 'RpcRetryDelayTime' in params ? params.RpcRetryDelayTime : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RpcTrace = 'RpcTrace' in params ? params.RpcTrace : null;
        this.TDStoreLockTime = 'TDStoreLockTime' in params ? params.TDStoreLockTime : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;

        if (params.Explain) {
            this.Explain = new Array();
            for (let z in params.Explain) {
                let obj = new Explain();
                obj.deserialize(params.Explain[z]);
                this.Explain.push(obj);
            }
        }

    }
}

/**
 * ExpandInstance request structure.
 * @class
 */
class ExpandInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Expand storage nodes to how many nodes. If no change, pass the current number of nodes</p>
         * @type {number || null}
         */
        this.StorageNodeNum = null;

        /**
         * <p>Availability zone list</p>
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * <p>az mode. 1: Single az 2: Multi-az non-primary az mode 3: Multi-az primary az mode</p>
         * @type {number || null}
         */
        this.AZMode = null;

        /**
         * <p>AZMode 3 means the primary AZ</p>
         * @type {string || null}
         */
        this.PrimaryAZ = null;

        /**
         * <p>Number of replicas, value ranges from 1 to 3</p>
         * @type {number || null}
         */
        this.FullReplications = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StorageNodeNum = 'StorageNodeNum' in params ? params.StorageNodeNum : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.AZMode = 'AZMode' in params ? params.AZMode : null;
        this.PrimaryAZ = 'PrimaryAZ' in params ? params.PrimaryAZ : null;
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;

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
         * <p>Passthrough instance ID</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>The database list on the instance.</p>
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * <p>Total quantity.</p>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Archive log object
 * @class
 */
class ArchiveLogModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Archivelog ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ArchiveLogId = null;

        /**
         * Backup duration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupDuration = null;

        /**
         * Backup status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupStatus = null;

        /**
         * Backup end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Expiration time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Backup file name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup set file size in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArchiveLogId = 'ArchiveLogId' in params ? params.ArchiveLogId : null;
        this.BackupDuration = 'BackupDuration' in params ? params.BackupDuration : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * Analytics engine association
 * @class
 */
class AnalysisRelationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Source instance Id</p>
         * @type {string || null}
         */
        this.PrimaryInstanceId = null;

        /**
         * <p>Analysis engine instance Id</p>
         * @type {string || null}
         */
        this.AnalysisInstanceId = null;

        /**
         * <p>Analysis engine relationship status</p><p>Enumeration values:</p><ul><li>creating: Creating</li><li>running: Running</li><li>destroyed: Terminated</li></ul>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateAt = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrimaryInstanceId = 'PrimaryInstanceId' in params ? params.PrimaryInstanceId : null;
        this.AnalysisInstanceId = 'AnalysisInstanceId' in params ? params.AnalysisInstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateAt = 'CreateAt' in params ? params.CreateAt : null;
        this.UpdateAt = 'UpdateAt' in params ? params.UpdateAt : null;

    }
}

/**
 * tag parameter
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
 * ModifyMaintenanceWindow response structure.
 * @class
 */
class ModifyMaintenanceWindowResponse extends  AbstractModel {
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
 * IsolateDBInstance request structure.
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of isolated instance ids required.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeFlow request structure.
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
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
 * ModifyDBSBackupSetComment response structure.
 * @class
 */
class ModifyDBSBackupSetCommentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Whether it is successful</p>.
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * <P>Modify information</p>.
         * @type {string || null}
         */
        this.Msg = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ccu range of a serverless instance
 * @class
 */
class AutoScalingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Minimum value of ccu</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RangeMin = null;

        /**
         * <p>Maximum value of ccu</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RangeMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RangeMin = 'RangeMin' in params ? params.RangeMin : null;
        this.RangeMax = 'RangeMax' in params ? params.RangeMax : null;

    }
}

/**
 * Database stored procedure information.
 * @class
 */
class DatabaseProcedure extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stored procedure name.
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
 * ModifyAutoRenewFlag request structure.
 * @class
 */
class ModifyAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Instance list that needs to be modified</p>.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * <P>1 enables automatic renewal, 0 disables automatic renewal.</p>.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * CreateDBSBackup request structure.
 * @class
 */
class CreateDBSBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backup method: physical, snapshot. This value should be consistent with the backupMethod in the API response of DescribeDBSBackupPolicy.</p><p>Enumeration value:</p><ul><li>physical: Physical backup</li><li>snapshot: Snapshot backup</li></ul>
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * <P>Backup type: currently, only supports full.</p>
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <P>Backup notes.</p>
         * @type {string || null}
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * DestroyInstances request structure.
 * @class
 */
class DestroyInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of isolated instance ids required.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeMaintenanceWindow request structure.
 * @class
 */
class DescribeMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
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
 * DescribeSpecs request structure.
 * @class
 */
class DescribeSpecsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of replicas. Currently supported range: 1-3. Default is 3.</p>
         * @type {number || null}
         */
        this.FullReplications = null;

        /**
         * <p>Exclusive instance</p>
         * @type {number || null}
         */
        this.IsExclusiveInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullReplications = 'FullReplications' in params ? params.FullReplications : null;
        this.IsExclusiveInstance = 'IsExclusiveInstance' in params ? params.IsExclusiveInstance : null;

    }
}

/**
 * DB parameter description.
 * @class
 */
class ParamDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Current parameter value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * The configured value is the same as the value once the parameter takes effect.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SetValue = null;

        /**
         * System default value.
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter limits.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ParamConstraint || null}
         */
        this.Constraint = null;

        /**
         * Whether a value has been set. false: not set. true: has set.
         * @type {boolean || null}
         */
        this.HaveSetValue = null;

        /**
         * true: restart required.
         * @type {boolean || null}
         */
        this.NeedRestart = null;

        /**
         * Parameter description.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifyInstanceNetwork request structure.
 * @class
 */
class ModifyInstanceNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * VpcId of the target VPC network
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID of the target VPC network
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VIP retention duration, in hours, value ranges from 0 to 168. 0 means immediate release with a one-minute delay. Not specified, default is 24 hr for VIP release.
         * @type {number || null}
         */
        this.VipReleaseDelay = null;

        /**
         * Assign vip modification. Leave blank for a random vip.
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VipReleaseDelay = 'VipReleaseDelay' in params ? params.VipReleaseDelay : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * Modify backup policy object.
 * @class
 */
class BackupPolicyModelInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>Backup end time.</p>
         * @type {string || null}
         */
        this.BackupEndTime = null;

        /**
         * <P>Backup method: physical physical backup, snapshot snapshot backup</p>
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * <P>Backup start time</p>
         * @type {string || null}
         */
        this.BackupStartTime = null;

        /**
         * <P>Whether full backup is enabled</p>
         * @type {number || null}
         */
        this.EnableFull = null;

        /**
         * <P>Whether to enable log backup</p>
         * @type {number || null}
         */
        this.EnableLog = null;

        /**
         * <P>Full backup retention time can currently only be set to 7 days.</p>
         * @type {number || null}
         */
        this.FullRetentionPeriod = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <P>Log retention days. currently, can only set retention to 7 days.</p>
         * @type {number || null}
         */
        this.LogRetentionPeriod = null;

        /**
         * <P>Days of the week to perform backup.</p>
         * @type {string || null}
         */
        this.PeriodTime = null;

        /**
         * <p>Storage type: COS, SNAPSHOT</p>valid values: <ul><li> COS: COS storage</li><li> SNAPSHOT: cloud disk SNAPSHOT</li></ul>
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupEndTime = 'BackupEndTime' in params ? params.BackupEndTime : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupStartTime = 'BackupStartTime' in params ? params.BackupStartTime : null;
        this.EnableFull = 'EnableFull' in params ? params.EnableFull : null;
        this.EnableLog = 'EnableLog' in params ? params.EnableLog : null;
        this.FullRetentionPeriod = 'FullRetentionPeriod' in params ? params.FullRetentionPeriod : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogRetentionPeriod = 'LogRetentionPeriod' in params ? params.LogRetentionPeriod : null;
        this.PeriodTime = 'PeriodTime' in params ? params.PeriodTime : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

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
         * <p>Return to instance list information</p>
         * @type {Array.<InstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * <p>Total number of conditions met</p>
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Value range of the constraint type.
 * @class
 */
class ConstraintRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum value when the constraint type is section.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Specifies the maximum value when the constraint type is section.
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
 * User information type
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * User description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Host IP, IP range ending with % to denote permission for all IPs in the range
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * RestartDBInstances request structure.
 * @class
 */
class RestartDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Array of instance IDs that must be restarted</p>
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * <p>Restart time. Leave it blank to restart now.</p>
         * @type {string || null}
         */
        this.RestartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RestartTime = 'RestartTime' in params ? params.RestartTime : null;

    }
}

/**
 * ResetUserPassword request structure.
 * @class
 */
class ResetUserPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Host IP, IP range ending with % to denote permission for all IPs in the range
         * @type {string || null}
         */
        this.Host = null;

        /**
         * New password, required length 8-32, include at least two of English, digits and symbols.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Encryption password
         * @type {string || null}
         */
        this.EncryptedPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.EncryptedPassword = 'EncryptedPassword' in params ? params.EncryptedPassword : null;

    }
}

/**
 * DescribeDBSAvailableRecoveryTime response structure.
 * @class
 */
class DescribeDBSAvailableRecoveryTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>End time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * <P>Recoverable time interval.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ArchiveLogInterval> || null}
         */
        this.Intervals = null;

        /**
         * <P>Start time</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

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
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Intervals) {
            this.Intervals = new Array();
            for (let z in params.Intervals) {
                let obj = new ArchiveLogInterval();
                obj.deserialize(params.Intervals[z]);
                this.Intervals.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Table-level permissions
 * @class
 */
class TablePrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * DATABASE name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Permission list
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
 * DescribeUserPrivileges request structure.
 * @class
 */
class DescribeUserPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as tdsql3-5baee8df.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Accessing host allowed for the user. Username+host uniquely determines an account.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Login username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name. If it is \*, query global permission (\*.\*) and ignore the Type and Object parameter.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * The name of the specific Type, for example, when Type is table, it is exactly the table name. If both DbName and Type are function names, Object represents the specific object name and cannot be \* or empty.
         * @type {string || null}
         */
        this.Object = null;

        /**
         * Type, can be set to table, view, proc, func, and \*. When DbName is a specific database name and Type is \*, it queries the database permission (i.e., db.\*), ignoring the Object parameter.
         * @type {string || null}
         */
        this.ObjectType = null;

        /**
         * When Type=table, ColName as \* indicates the permission to query the table. If it is a specific field name, it indicates the permission to query the corresponding field.
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
        this.Host = 'Host' in params ? params.Host : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeDBSAvailableRecoveryTime request structure.
 * @class
 */
class DescribeDBSAvailableRecoveryTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
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
 * ModifyDBInstanceVPort response structure.
 * @class
 */
class ModifyDBInstanceVPortResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return the async task FlowId
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeInstance request structure.
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Instance specification code</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * <p>CPU cores of the storage node</p>
         * @type {number || null}
         */
        this.StorageNodeCpu = null;

        /**
         * <p>Storage node memory size</p>
         * @type {number || null}
         */
        this.StorageNodeMem = null;

        /**
         * <p>Disk Type. Pass this parameter when the disk type needs to be modified.</p>
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.StorageNodeCpu = 'StorageNodeCpu' in params ? params.StorageNodeCpu : null;
        this.StorageNodeMem = 'StorageNodeMem' in params ? params.StorageNodeMem : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * Backup set object
 * @class
 */
class BackupSetModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup set duration, unit sec
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupDuration = null;

        /**
         * Backup method
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Backup note name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupName = null;

        /**
         * Backup set progress percentage
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupProgress = null;

        /**
         * Backup set ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupSetId = null;

        /**
         * Backup status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupStatus = null;

        /**
         * Backup set type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Instance version number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Backup end time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Transaction commit end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTrxTime = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Backup expiration time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Backup file name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup set file size in Byte
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup trigger. 0: autobackup; 1: manual.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ManualBackup = null;

        /**
         * Backup start time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupDuration = 'BackupDuration' in params ? params.BackupDuration : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.BackupProgress = 'BackupProgress' in params ? params.BackupProgress : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.BackupStatus = 'BackupStatus' in params ? params.BackupStatus : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EndTrxTime = 'EndTrxTime' in params ? params.EndTrxTime : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ManualBackup = 'ManualBackup' in params ? params.ManualBackup : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * Initialize instance parameters
 * @class
 */
class InstanceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * config key
         * @type {string || null}
         */
        this.Param = null;

        /**
         * Config value
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
 * CreateDBInstances response structure.
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * <p>Task ID.</p>
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
         * Instance id.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Security group ID list to modify. an array of one or more security group ids.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    ModifyDBInstanceVPortRequest: ModifyDBInstanceVPortRequest,
    ExpandInstanceResponse: ExpandInstanceResponse,
    DescribeSaleZonesInfo: DescribeSaleZonesInfo,
    BackupMethodStatisticsOutPut: BackupMethodStatisticsOutPut,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeDBParametersRequest: DescribeDBParametersRequest,
    ModifyInstanceNetworkResponse: ModifyInstanceNetworkResponse,
    ModifyInstanceSSLStatusResponse: ModifyInstanceSSLStatusResponse,
    RestartDBInstancesResponse: RestartDBInstancesResponse,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    ModifyInstanceNameRequest: ModifyInstanceNameRequest,
    DescribeUserPrivilegesResponse: DescribeUserPrivilegesResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    InstanceFilter: InstanceFilter,
    Explain: Explain,
    BackupStatisticsModel: BackupStatisticsModel,
    BackupPolicyModelOutPut: BackupPolicyModelOutPut,
    ModifyInstanceSSLStatusRequest: ModifyInstanceSSLStatusRequest,
    ModifyInstanceNameResponse: ModifyInstanceNameResponse,
    DescribeDBSBackupStatisticsDetailRequest: DescribeDBSBackupStatisticsDetailRequest,
    DescribeDBParametersResponse: DescribeDBParametersResponse,
    StorageNodeSpec: StorageNodeSpec,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    ResetUserPasswordResponse: ResetUserPasswordResponse,
    DescribeInstanceSSLStatusResponse: DescribeInstanceSSLStatusResponse,
    DeleteDBSBackupSetsResponse: DeleteDBSBackupSetsResponse,
    DescribeFlowResponse: DescribeFlowResponse,
    MaintenanceWindowInfo: MaintenanceWindowInfo,
    DescribeDBSBackupStatisticsDetailResponse: DescribeDBSBackupStatisticsDetailResponse,
    ModifyDBSBackupSetCommentRequest: ModifyDBSBackupSetCommentRequest,
    ParamConstraint: ParamConstraint,
    DescribeDBSBackupPolicyResponse: DescribeDBSBackupPolicyResponse,
    DeleteDBSBackupSetsRequest: DeleteDBSBackupSetsRequest,
    BinlogInfo: BinlogInfo,
    DatabasePrivileges: DatabasePrivileges,
    NodeInfo: NodeInfo,
    DescribeSpecsResponse: DescribeSpecsResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    CreateCloneInstanceResponse: CreateCloneInstanceResponse,
    ModifyUserPrivilegesResponse: ModifyUserPrivilegesResponse,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    CreateDBSBackupResponse: CreateDBSBackupResponse,
    BackupSetsReqFilter: BackupSetsReqFilter,
    DescribeDBSBackupSetsResponse: DescribeDBSBackupSetsResponse,
    DescribeDBSCloneInstancesRequest: DescribeDBSCloneInstancesRequest,
    CreateCloneInstanceRequest: CreateCloneInstanceRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DescribeSaleRegionInfo: DescribeSaleRegionInfo,
    DescribeSaleInfoRequest: DescribeSaleInfoRequest,
    DescribeDBSArchiveLogsRequest: DescribeDBSArchiveLogsRequest,
    DatabaseFunction: DatabaseFunction,
    CreateUsersResponse: CreateUsersResponse,
    ModifyDBSBackupPolicyRequest: ModifyDBSBackupPolicyRequest,
    DescribeDBInstanceDetailResponse: DescribeDBInstanceDetailResponse,
    DescribeDatabaseObjectsRequest: DescribeDatabaseObjectsRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    DestroyInstancesResponse: DestroyInstancesResponse,
    DescribeSaleInfoResponse: DescribeSaleInfoResponse,
    DeleteUsersResponse: DeleteUsersResponse,
    DatabaseTable: DatabaseTable,
    DescribeDBInstanceDetailRequest: DescribeDBInstanceDetailRequest,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DescribeUsersRequest: DescribeUsersRequest,
    DatabaseView: DatabaseView,
    DataBackupStatisticsModel: DataBackupStatisticsModel,
    LogFilter: LogFilter,
    ModifyDBSBackupPolicyResponse: ModifyDBSBackupPolicyResponse,
    DBParamValue: DBParamValue,
    CreateUsersRequest: CreateUsersRequest,
    ModifyDBParametersRequest: ModifyDBParametersRequest,
    CloneInstanceModel: CloneInstanceModel,
    ArchiveLogInterval: ArchiveLogInterval,
    ModifyDBParametersResponse: ModifyDBParametersResponse,
    DescribeInstanceSSLStatusRequest: DescribeInstanceSSLStatusRequest,
    SecurityGroup: SecurityGroup,
    DeleteUsersRequest: DeleteUsersRequest,
    ModifyUserPrivilegesRequest: ModifyUserPrivilegesRequest,
    DescribeDBSArchiveLogsResponse: DescribeDBSArchiveLogsResponse,
    DescribeDatabaseObjectsResponse: DescribeDatabaseObjectsResponse,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    InstanceNode: InstanceNode,
    SecurityGroupBound: SecurityGroupBound,
    DescribeDBSBackupStatisticsResponse: DescribeDBSBackupStatisticsResponse,
    BackupTypeStatisticsModel: BackupTypeStatisticsModel,
    DescribeDBSCloneInstancesResponse: DescribeDBSCloneInstancesResponse,
    InstanceInfo: InstanceInfo,
    User: User,
    DescribeDBSBackupSetsRequest: DescribeDBSBackupSetsRequest,
    AnalysisInstanceInfo: AnalysisInstanceInfo,
    ServerlessCcu: ServerlessCcu,
    Database: Database,
    DescribeSaleZonesGroup: DescribeSaleZonesGroup,
    DescribeDBSBackupStatisticsRequest: DescribeDBSBackupStatisticsRequest,
    DescribeUsersResponse: DescribeUsersResponse,
    LogBackupStatisticsModel: LogBackupStatisticsModel,
    CancelIsolateDBInstancesResponse: CancelIsolateDBInstancesResponse,
    BackupMethodStatisticsModel: BackupMethodStatisticsModel,
    DescribeDBSBackupPolicyRequest: DescribeDBSBackupPolicyRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    CancelIsolateDBInstancesRequest: CancelIsolateDBInstancesRequest,
    SlowLogData: SlowLogData,
    ExpandInstanceRequest: ExpandInstanceRequest,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    ArchiveLogModel: ArchiveLogModel,
    AnalysisRelationInfo: AnalysisRelationInfo,
    ResourceTag: ResourceTag,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    DescribeFlowRequest: DescribeFlowRequest,
    ModifyDBSBackupSetCommentResponse: ModifyDBSBackupSetCommentResponse,
    AutoScalingConfig: AutoScalingConfig,
    DatabaseProcedure: DatabaseProcedure,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    CreateDBSBackupRequest: CreateDBSBackupRequest,
    DestroyInstancesRequest: DestroyInstancesRequest,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    DescribeSpecsRequest: DescribeSpecsRequest,
    ParamDesc: ParamDesc,
    ModifyInstanceNetworkRequest: ModifyInstanceNetworkRequest,
    BackupPolicyModelInput: BackupPolicyModelInput,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    ConstraintRange: ConstraintRange,
    UserInfo: UserInfo,
    RestartDBInstancesRequest: RestartDBInstancesRequest,
    ResetUserPasswordRequest: ResetUserPasswordRequest,
    DescribeDBSAvailableRecoveryTimeResponse: DescribeDBSAvailableRecoveryTimeResponse,
    TablePrivileges: TablePrivileges,
    DescribeUserPrivilegesRequest: DescribeUserPrivilegesRequest,
    DescribeDBSAvailableRecoveryTimeRequest: DescribeDBSAvailableRecoveryTimeRequest,
    ModifyDBInstanceVPortResponse: ModifyDBInstanceVPortResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    BackupSetModel: BackupSetModel,
    InstanceParam: InstanceParam,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,

}
