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
 * StartBatchRollback request structure.
 * @class
 */
class StartBatchRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of the instance for rollback
         * @type {Array.<RollbackInstancesInfo> || null}
         */
        this.Instances = null;

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
                let obj = new RollbackInstancesInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * ModifyInstanceTag response structure.
 * @class
 */
class ModifyInstanceTagResponse extends  AbstractModel {
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
 * CreateDBInstance request structure.
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance memory size in MB. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported memory specifications.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported disk specifications.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Instance validity period in months. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Number of instances. Value range: 1-100. Default value: `1`.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * AZ information. The system will automatically select an AZ by default. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported AZs.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC ID. If this parameter is not passed in, the basic network will be selected by default. You can use the [DescribeVpcs](https://intl.cloud.tencent.com/document/api/215/15778?from_cn_redirect=1) API to query the VPCs.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID. If `UniqVpcId` is set, then `UniqSubnetId` will be required. You can use the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API to query the subnet lists.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Project ID. If this parameter is left empty, the default project will be used. When you purchase read-only instances and disaster recovery instances, the project ID is the same as that of the source instance by default.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Custom port. Value range: 1024-65535.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance typeA. Valid values: `master` (source instance), `dr` (disaster recovery instance), `ro` (read-only instance).
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Instance ID. It is required when purchasing a read-only instance, which is the same as the source instance ID. You can use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the instance ID.
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * MySQL version. Valid values: `5.5`, `5.6`, `5.7`. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported versions.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * The root account password. It can contain 8-64 characters and must contain at least two of the following types of characters: letters, digits, and symbols (_+-&=!@#$%^*()). This parameter can be specified when purchasing a replica instance and is invalid for read-only or disaster recovery instances.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Data replication mode. Valid values: `0` (async replication), `1` (semi-sync replication), `2` (strong sync replication). Default value: `0`.
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Multi-AZ or single-AZ. Valid values: `0` (single-AZ), `1` (multi-AZ). Default value: `0`.
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * Information of replica AZ 1, which is the `Zone` value by default.
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * List of parameters in the format of ParamList.0.Name=auto_increment&ParamList.0.Value=1. You can use the [DescribeDefaultParams](https://intl.cloud.tencent.com/document/api/236/32662?from_cn_redirect=1) API to query the configurable parameters.
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * Information of replica AZ 2, which is left empty by default. Specify this parameter when purchasing a source instance in the one-source-two-replica architecture.
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * Auto-renewal flag. Valid values: `0` (auto-renewal not enabled), `1` (auto-renewal enabled).
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Region information of the source instance, which is required when purchasing a read-only or disaster recovery instance.
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * Security group parameter. You can use the [DescribeProjectSecurityGroups](https://intl.cloud.tencent.com/document/api/236/15850?from_cn_redirect=1) API to query the security group details of a project.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Read-only instance parameter. This parameter must be passed in when purchasing read-only instances.
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * Instance name. For multiple instances purchased at one time, they will be distinguished by the name suffix number, such as instnaceName=db and goodsNum=3, and their instance names are db1, db2, and db3, respectively.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance tag information
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * Placement group ID
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * A string unique in 48 hours, which is supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Instance isolation type. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance), `BASIC` (basic instance). Default value: `UNIVERSAL`.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Parameter template ID
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * Array of alarm policy IDs, which is `OriginId` obtained through the `DescribeAlarmPolicy` API.
         * @type {Array.<number> || null}
         */
        this.AlarmPolicyList = null;

        /**
         * The number of nodes of the instance. To purchase a read-only instance or a basic instance, set this parameter to `1` or leave it empty. To purchase a three-node instance, set this parameter to `3` or specify the `BackupZone` parameter. If the instance to be purchased is a source instance and both `BackupZone` and this parameter are left empty, the value `2` will be used, which indicates the source instance will have two nodes.
         * @type {number || null}
         */
        this.InstanceNodes = null;

        /**
         * The number of the instance CPU cores. If this parameter is left empty, it will be subject to the `Memory` value.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Whether to automatically start disaster recovery synchronization. This parameter takes effect only for disaster recovery instances. Valid values: `0` (no), `1` (yes). Default value: `0`.
         * @type {number || null}
         */
        this.AutoSyncFlag = null;

        /**
         * Financial cage ID.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * Type of the default parameter template. Valid values: `HIGH_STABILITY` (high-stability template), `HIGH_PERFORMANCE` (high-performance template).
         * @type {string || null}
         */
        this.ParamTemplateType = null;

        /**
         * The array of alarm policy names, such as ["policy-uyoee9wg"]. If the `AlarmPolicyList` parameter is specified, this parameter is invalid.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyIdList = null;

        /**
         * Whether to check the request without creating any instance. Valid values: `true`, `false` (default). After being submitted, the request will be checked to see if it is in correct format and has all required parameters with valid values. An error code is returned if the check failed, and `RequestId` is returned if the check succeeded. After a successful check, no instance will be created if this parameter is set to `true`, whereas an instance will be created and if it is set to `false`.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Instance engine type. Valid values: `InnoDB` (default), `RocksDB`.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * The list of IPs for sources instances. Only one IP address can be assigned to a single source instance. If all IPs are used up, the system will automatically assign IPs to the remaining source instances that do not have one.
         * @type {Array.<string> || null}
         */
        this.Vips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.MasterRegion = 'MasterRegion' in params ? params.MasterRegion : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;
        this.AlarmPolicyList = 'AlarmPolicyList' in params ? params.AlarmPolicyList : null;
        this.InstanceNodes = 'InstanceNodes' in params ? params.InstanceNodes : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.AutoSyncFlag = 'AutoSyncFlag' in params ? params.AutoSyncFlag : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.ParamTemplateType = 'ParamTemplateType' in params ? params.ParamTemplateType : null;
        this.AlarmPolicyIdList = 'AlarmPolicyIdList' in params ? params.AlarmPolicyIdList : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.Vips = 'Vips' in params ? params.Vips : null;

    }
}

/**
 * DescribeProxyConnectionPoolConf request structure.
 * @class
 */
class DescribeProxyConnectionPoolConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Paginated query offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum entries returned per page
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Disk monitoring data of the instance
 * @class
 */
class DeviceDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time percentage of IO operations per second
         * @type {Array.<number> || null}
         */
        this.IoRatioPerSec = null;

        /**
         * Average wait time of device I/O operations * 100 in milliseconds. For example, if the value is 201, the average wait time of I/O operations is 201/100 = 2.1 milliseconds.
         * @type {Array.<number> || null}
         */
        this.IoWaitTime = null;

        /**
         * Average number of read operations completed by the disk per second * 100. For example, if the value is 2,002, the average number of read operations completed by the disk per second is 2,002/100=20.2.
         * @type {Array.<number> || null}
         */
        this.Read = null;

        /**
         * Average number of write operations completed by the disk per second * 100. For example, if the value is 30,001, the average number of write operations completed by the disk per second is 30,001/100=300.01.
         * @type {Array.<number> || null}
         */
        this.Write = null;

        /**
         * Disk capacity. Each value is comprised of two data, with the first data representing the used capacity and the second one representing the total disk capacity.
         * @type {Array.<number> || null}
         */
        this.CapacityRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IoRatioPerSec = 'IoRatioPerSec' in params ? params.IoRatioPerSec : null;
        this.IoWaitTime = 'IoWaitTime' in params ? params.IoWaitTime : null;
        this.Read = 'Read' in params ? params.Read : null;
        this.Write = 'Write' in params ? params.Write : null;
        this.CapacityRatio = 'CapacityRatio' in params ? params.CapacityRatio : null;

    }
}

/**
 * Purchasable specifications in an AZ
 * @class
 */
class CdbZoneSellConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ status, which is used to indicate whether instances are purchasable. Valid values: `1` (purchasable), `3` (not purchasable), `4` (AZ not displayed)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Whether it is a custom instance type
         * @type {boolean || null}
         */
        this.IsCustom = null;

        /**
         * Whether disaster recovery is supported
         * @type {boolean || null}
         */
        this.IsSupportDr = null;

        /**
         * Whether VPC is supported
         * @type {boolean || null}
         */
        this.IsSupportVpc = null;

        /**
         * Maximum purchasable quantity of hourly billed instances
         * @type {number || null}
         */
        this.HourInstanceSaleMaxNum = null;

        /**
         * Whether it is a default AZ
         * @type {boolean || null}
         */
        this.IsDefaultZone = null;

        /**
         * Whether it is a BM zone
         * @type {boolean || null}
         */
        this.IsBm = null;

        /**
         * Supported billing method. Valid values: `0` (monthly subscribed), `1` (hourly billed), `2` (pay-as-you-go)
         * @type {Array.<string> || null}
         */
        this.PayType = null;

        /**
         * Data replication type. Valid values: `0` (async), `1` (semi-sync), `2` (strong sync)
         * @type {Array.<string> || null}
         */
        this.ProtectMode = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Multi-AZ information
         * @type {ZoneConf || null}
         */
        this.ZoneConf = null;

        /**
         * Information of supported disaster recovery AZs
         * @type {Array.<string> || null}
         */
        this.DrZone = null;

        /**
         * Whether cross-AZ read-only access is supported
         * @type {boolean || null}
         */
        this.IsSupportRemoteRo = null;

        /**
         * Information of supported cross-AZ read-only zone
         * @type {Array.<string> || null}
         */
        this.RemoteRoZone = null;

        /**
         * AZ status, which is used to indicate whether dedicated instances are purchasable. Valid values: `1 (purchasable), `3` (not purchasable), `4` (AZ not displayed)
         * @type {number || null}
         */
        this.ExClusterStatus = null;

        /**
         * Information of cross-AZ read-only zones supported by a dedicated instance
         * @type {Array.<string> || null}
         */
        this.ExClusterRemoteRoZone = null;

        /**
         * AZ information of a multi-AZ deployed dedicated instance.
         * @type {ZoneConf || null}
         */
        this.ExClusterZoneConf = null;

        /**
         * Array of purchasable instance types. The value of `configIds` and `configs` have a one-to-one correspondence.
         * @type {Array.<CdbSellType> || null}
         */
        this.SellType = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Whether IPv6 is supported
         * @type {boolean || null}
         */
        this.IsSupportIpv6 = null;

        /**
         * Supported engine types for purchasable database
         * @type {Array.<string> || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsCustom = 'IsCustom' in params ? params.IsCustom : null;
        this.IsSupportDr = 'IsSupportDr' in params ? params.IsSupportDr : null;
        this.IsSupportVpc = 'IsSupportVpc' in params ? params.IsSupportVpc : null;
        this.HourInstanceSaleMaxNum = 'HourInstanceSaleMaxNum' in params ? params.HourInstanceSaleMaxNum : null;
        this.IsDefaultZone = 'IsDefaultZone' in params ? params.IsDefaultZone : null;
        this.IsBm = 'IsBm' in params ? params.IsBm : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.ZoneConf) {
            let obj = new ZoneConf();
            obj.deserialize(params.ZoneConf)
            this.ZoneConf = obj;
        }
        this.DrZone = 'DrZone' in params ? params.DrZone : null;
        this.IsSupportRemoteRo = 'IsSupportRemoteRo' in params ? params.IsSupportRemoteRo : null;
        this.RemoteRoZone = 'RemoteRoZone' in params ? params.RemoteRoZone : null;
        this.ExClusterStatus = 'ExClusterStatus' in params ? params.ExClusterStatus : null;
        this.ExClusterRemoteRoZone = 'ExClusterRemoteRoZone' in params ? params.ExClusterRemoteRoZone : null;

        if (params.ExClusterZoneConf) {
            let obj = new ZoneConf();
            obj.deserialize(params.ExClusterZoneConf)
            this.ExClusterZoneConf = obj;
        }

        if (params.SellType) {
            this.SellType = new Array();
            for (let z in params.SellType) {
                let obj = new CdbSellType();
                obj.deserialize(params.SellType[z]);
                this.SellType.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsSupportIpv6 = 'IsSupportIpv6' in params ? params.IsSupportIpv6 : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

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
         * Array of global permissions.
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * Array of database permissions.
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * Array of table permissions in the database.
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * Array of column permissions in the table.
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBImportJob request structure.
 * @class
 */
class CreateDBImportJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * TencentDB username
         * @type {string || null}
         */
        this.User = null;

        /**
         * Filename. The file must be a .sql file uploaded to Tencent Cloud.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Password of a TencentDB instance user account
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Name of the target database. If this parameter is not passed in, no database is specified.
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * URL of a .sql file stored in COS. Either `FileName` or `CosUrl` must be specified.
         * @type {string || null}
         */
        this.CosUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset. Minimum value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Value range: 1-100. Maximum value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Regular expression for matching database names.
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
 * RenewDBInstance request structure.
 * @class
 */
class RenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be renewed in the format of cdb-c1nl9rpv, which is the same as the instance ID displayed in the TencentDB console. You can use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Renewal period in months. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * To renew a pay-as-you-go instance to a monthly subscribed one, you need to set this parameter to `PREPAID`.
         * @type {string || null}
         */
        this.ModifyPayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ModifyPayType = 'ModifyPayType' in params ? params.ModifyPayType : null;

    }
}

/**
 * DescribeBackupConfig request structure.
 * @class
 */
class DescribeBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * Parameter modification records
 * @class
 */
class ParamRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter value before modification
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * Parameter value after modification
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * Whether the parameter is modified successfully
         * @type {boolean || null}
         */
        this.IsSucess = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.IsSucess = 'IsSucess' in params ? params.IsSucess : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * ModifyAccountMaxUserConnections response structure.
 * @class
 */
class ModifyAccountMaxUserConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance request structure.
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `cdb-c1nl9rpv` or `cdbro-c1nl9rpv`. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Memory size in MB after upgrade. To ensure that the `Memory` value to be passed in is valid, please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/product/236/17229?from_cn_redirect=1) API to query the specifications of the memory that can be upgraded to.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk size in GB after upgrade. To ensure that the `Volume` value to be passed in is valid, please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/product/236/17229?from_cn_redirect=1) API to query the specifications of the disk that can be upgraded to.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Data replication mode. Valid values: 0 (async), 1 (semi-sync), 2 (strong sync). This parameter can be specified when upgrading primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Deployment mode. Valid values: 0 (single-AZ), 1 (multi-AZ). Default value: 0. This parameter can be specified when upgrading primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * AZ information of secondary database 1, which is the `Zone` value of the instance by default. This parameter can be specified when upgrading primary instances in multi-AZ mode and is meaningless for read-only or disaster recovery instances. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/product/236/17229?from_cn_redirect=1) API to query the supported AZs.
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * Version of primary instance database engine. Valid values: 5.5, 5.6, 5.7.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Mode of switch to new instance. Valid values: 0 (switch immediately), 1 (switch within a time window). Default value: 0. If the value is 1, the switch process will be performed within a time window. Or, you can call the [SwitchForUpgrade](https://intl.cloud.tencent.com/document/product/236/15864?from_cn_redirect=1) API to trigger the process.
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * AZ information of secondary database 2, which is empty by default. This parameter can be specified when upgrading primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * Instance type. Valid values: master (primary instance), dr (disaster recovery instance), ro (read-only instance). Default value: master.
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * The resource isolation type after the instance is upgraded. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance), `BASIC` (basic instance). If this parameter is left empty, the resource isolation type will be the same as the original one.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * The number of CPU cores after the instance is upgraded. If this parameter is left empty, it will be subject to the `Memory` value.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * QuickChange options. Valid values: `0` (common upgrade), `1` (QuickChange), `2` (QuickChange first). After QuickChange is enabled, the required resources will be checked. QuickChange will be performed only when the required resources support the feature; otherwise, an error message will be returned.
         * @type {number || null}
         */
        this.FastUpgrade = null;

        /**
         * Delay threshold. Value range: 1-10. Default value: `10`.
         * @type {number || null}
         */
        this.MaxDelayTime = null;

        /**
         * Whether to migrate the source node across AZs. Valid values: `0` (no), `1`(yes). Default value: `0`. If it is `1`, you can modify the source node AZ.
         * @type {number || null}
         */
        this.CrossCluster = null;

        /**
         * New AZ of the source node. This field is only valid when `CrossCluster` is `1`. Only migration across AZs in the same region is supported.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Processing logic of the intra-AZ read-only instance for cross-cluster migration. Valid values: `together` (intra-AZ read-only instances will be migrated to the target AZ with the source instance by default.), `severally` (intra-AZ read-only instances will maintain the original deployment mode and will not be migrated to the target AZ.).
         * @type {string || null}
         */
        this.RoTransType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.FastUpgrade = 'FastUpgrade' in params ? params.FastUpgrade : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;
        this.CrossCluster = 'CrossCluster' in params ? params.CrossCluster : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RoTransType = 'RoTransType' in params ? params.RoTransType : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Record offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Value range: 1-100. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Regex for matching account names, which complies with the rules at MySQL's official website
         * @type {string || null}
         */
        this.AccountRegexp = null;

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
        this.AccountRegexp = 'AccountRegexp' in params ? params.AccountRegexp : null;

    }
}

/**
 * StopDBImportJob request structure.
 * @class
 */
class StopDBImportJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * DescribeUploadedFiles response structure.
 * @class
 */
class DescribeUploadedFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible SQL files.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of returned SQL files.
         * @type {Array.<SqlFileInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SqlFileInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowLogData response structure.
 * @class
 */
class DescribeSlowLogDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Queried results.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SlowLogItem> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRemoteBackupConfig response structure.
 * @class
 */
class ModifyRemoteBackupConfigResponse extends  AbstractModel {
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
 * DescribeDBInstanceInfo response structure.
 * @class
 */
class DescribeDBInstanceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Whether encryption is enabled. YES: enabled, NO: not enabled.
         * @type {string || null}
         */
        this.Encryption = null;

        /**
         * Encryption key ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Key region.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyRegion = null;

        /**
         * The default region of the KMS service currently used by the TencentDB backend service.
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.DefaultKmsRegion = null;

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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Encryption = 'Encryption' in params ? params.Encryption : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;
        this.DefaultKmsRegion = 'DefaultKmsRegion' in params ? params.DefaultKmsRegion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slave server information
 * @class
 */
class SlaveInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port number
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Virtual IP information
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * AZ information
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
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeErrorLogData request structure.
 * @class
 */
class DescribeErrorLogDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start timestamp, such as 1585142640.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp, such as 1585142640.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * List of keywords to match. Up to 15 keywords are supported.
         * @type {Array.<string> || null}
         */
        this.KeyWords = null;

        /**
         * The number of results per page in paginated queries. Default value: 100. Maximum value: 400.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * This parameter is valid only for source or disaster recovery instances. Valid value: `slave`, which indicates pulling logs from the replica.
         * @type {string || null}
         */
        this.InstType = null;

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
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstType = 'InstType' in params ? params.InstType : null;

    }
}

/**
 * Database instance parameter
 * @class
 */
class Parameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value
         * @type {string || null}
         */
        this.CurrentValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;

    }
}

/**
 * SwitchDrInstanceToMaster response structure.
 * @class
 */
class SwitchDrInstanceToMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceRebootTime request structure.
 * @class
 */
class DescribeDBInstanceRebootTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * Details of an instance task
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * ID of an instance task.
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * Instance task progress.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Instance task status. Valid values:
"UNDEFINED" - undefined;
"INITIAL" - initializing;
"RUNNING" - running;
"SUCCEED" - succeeded;
"FAILED" - failed;
"KILLED" - terminated;
"REMOVED" - deleted;
"PAUSED" - paused.
"WAITING" - waiting (which can be canceled)
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Instance task type. Valid values:
"ROLLBACK" - rolling back a database;
"SQL OPERATION" - performing an SQL operation;
"IMPORT DATA" - importing data;
"MODIFY PARAM" - setting a parameter;
"INITIAL" - initializing a TencentDB instance;
"REBOOT" - restarting a TencentDB instance;
"OPEN GTID" - enabling GTID of a TencentDB instance;
"UPGRADE RO" - upgrading a read-only instance;
"BATCH ROLLBACK" - rolling back databases in batches;
"UPGRADE MASTER" - upgrading a primary instance;
"DROP TABLES" - dropping a TencentDB table;
"SWITCH DR TO MASTER" - promoting a disaster recovery instance.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Instance task start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Instance task end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * ID of an instance associated with a task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Async task request ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Pagination offset, starting from `0`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: 1-100. Default value: 20.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Security group inbound rule
 * @class
 */
class Inbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy, which can be ACCEPT or DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Source IP or IP range, such as 192.168.0.0/16
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

        /**
         * The direction of the rule, which is INPUT for inbound rules
         * @type {string || null}
         */
        this.Dir = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Desc = null;

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
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

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
         * Security group ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * List of instance IDs, which is an array of one or more instance IDs.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * This parameter takes effect only when the IDs of read-only replicas are passed in. If this parameter is set to `False` or left empty, the security group will be bound to the RO groups of these read-only replicas. If this parameter is set to `True`, the security group will be bound to the read-only replicas themselves.
         * @type {boolean || null}
         */
        this.ForReadonlyInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForReadonlyInstance = 'ForReadonlyInstance' in params ? params.ForReadonlyInstance : null;

    }
}

/**
 * Tag information
 * @class
 */
class TagInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * CreateAccounts response structure.
 * @class
 */
class CreateAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchDBInstanceMasterSlave response structure.
 * @class
 */
class SwitchDBInstanceMasterSlaveResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Time range available for instance rollback
 * @class
 */
class InstanceRollbackRangeTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries database error code
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Queries database error message
         * @type {string || null}
         */
        this.Message = null;

        /**
         * List of instance IDs. An instance ID is in the format of cdb-c1nl9rpv, which is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time range available for rollback
         * @type {Array.<RollbackTimeRange> || null}
         */
        this.Times = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Times) {
            this.Times = new Array();
            for (let z in params.Times) {
                let obj = new RollbackTimeRange();
                obj.deserialize(params.Times[z]);
                this.Times.push(obj);
            }
        }

    }
}

/**
 * DescribeDBFeatures response structure.
 * @class
 */
class DescribeDBFeaturesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether database audit is supported
         * @type {boolean || null}
         */
        this.IsSupportAudit = null;

        /**
         * Whether enabling audit requires a kernel version upgrade
         * @type {boolean || null}
         */
        this.AuditNeedUpgrade = null;

        /**
         * Whether database encryption is supported
         * @type {boolean || null}
         */
        this.IsSupportEncryption = null;

        /**
         * Whether enabling encryption requires a kernel version upgrade
         * @type {boolean || null}
         */
        this.EncryptionNeedUpgrade = null;

        /**
         * Whether the instance is a remote read-only instance
         * @type {boolean || null}
         */
        this.IsRemoteRo = null;

        /**
         * Region of the source instance
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * Whether minor version upgrade is supported
         * @type {boolean || null}
         */
        this.IsSupportUpdateSubVersion = null;

        /**
         * The current kernel version
         * @type {string || null}
         */
        this.CurrentSubVersion = null;

        /**
         * Available kernel version for upgrade
         * @type {string || null}
         */
        this.TargetSubVersion = null;

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
        this.IsSupportAudit = 'IsSupportAudit' in params ? params.IsSupportAudit : null;
        this.AuditNeedUpgrade = 'AuditNeedUpgrade' in params ? params.AuditNeedUpgrade : null;
        this.IsSupportEncryption = 'IsSupportEncryption' in params ? params.IsSupportEncryption : null;
        this.EncryptionNeedUpgrade = 'EncryptionNeedUpgrade' in params ? params.EncryptionNeedUpgrade : null;
        this.IsRemoteRo = 'IsRemoteRo' in params ? params.IsRemoteRo : null;
        this.MasterRegion = 'MasterRegion' in params ? params.MasterRegion : null;
        this.IsSupportUpdateSubVersion = 'IsSupportUpdateSubVersion' in params ? params.IsSupportUpdateSubVersion : null;
        this.CurrentSubVersion = 'CurrentSubVersion' in params ? params.CurrentSubVersion : null;
        this.TargetSubVersion = 'TargetSubVersion' in params ? params.TargetSubVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Purchasable instance type
 * @class
 */
class CdbSellType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the purchasable instance. Valid values: `Z3` (High-availability instance. `DeviceType`:`UNIVERSAL`, `EXCLUSIVE`; `CVM` (basic instance. `DeviceType`: `BASIC`); `TKE` (basic v2 instance. `DeviceType`: `BASIC_V2`).
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Engine version number
         * @type {Array.<string> || null}
         */
        this.EngineVersion = null;

        /**
         * Purchasable specifications ID
         * @type {Array.<number> || null}
         */
        this.ConfigIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.ConfigIds = 'ConfigIds' in params ? params.ConfigIds : null;

    }
}

/**
 * DescribeProxyCustomConf request structure.
 * @class
 */
class DescribeProxyCustomConfRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Paginated query offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum entries returned per page
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Security group details.
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
 * Master instance information
 * @class
 */
class MasterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Long instance ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance type
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Task status
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Memory capacity
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk capacity
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Instance model
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Queries per second
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * VPC ID
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Dedicated cluster ID
         * @type {string || null}
         */
        this.ExClusterId = null;

        /**
         * Dedicated cluster name
         * @type {string || null}
         */
        this.ExClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ExClusterId = 'ExClusterId' in params ? params.ExClusterId : null;
        this.ExClusterName = 'ExClusterName' in params ? params.ExClusterName : null;

    }
}

/**
 * DescribeBinlogs response structure.
 * @class
 */
class DescribeBinlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible log files.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Number of eligible binlog files.
         * @type {Array.<BinlogInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BinlogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopReplication response structure.
 * @class
 */
class StopReplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetRootAccount response structure.
 * @class
 */
class ResetRootAccountResponse extends  AbstractModel {
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
 * DeleteParamTemplate response structure.
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
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
 * Instance parameter information
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeRoMinScale request structure.
 * @class
 */
class DescribeRoMinScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Read-only instance ID in the format of "cdbro-c1nl9rpv". Its value is the same as the instance ID in the TencentDB Console. This parameter and the `MasterInstanceId` parameter cannot both be empty.
         * @type {string || null}
         */
        this.RoInstanceId = null;

        /**
         * Primary instance ID in the format of "cdbro-c1nl9rpv". Its value is the same as the instance ID in the TencentDB Console. This parameter and the `RoInstanceId` parameter cannot both be empty. Note: when the parameters are passed in with `RoInstanceId`, the return value refers to the minimum specification to which a read-only instance can be upgraded; when the parameters are passed in with `MasterInstanceId` but without `RoInstanceId`, the return value refers to the minimum purchasable specification for a read-only instance.
         * @type {string || null}
         */
        this.MasterInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoInstanceId = 'RoInstanceId' in params ? params.RoInstanceId : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;

    }
}

/**
 * DescribeDefaultParams request structure.
 * @class
 */
class DescribeDefaultParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Engine version. Currently, the supported versions are `5.1`, `5.5`, `5.6`, `5.7`, and `8.0`.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Type of the default parameter template. Valid values: `HIGH_STABILITY` (high-stability template), `HIGH_PERFORMANCE` (high-performance template).
         * @type {string || null}
         */
        this.TemplateType = null;

        /**
         * Parameter template engine. Default value: `InnoDB`.
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
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

    }
}

/**
 * RO group configuration information.
 * @class
 */
class RoGroupAttr extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group name.
         * @type {string || null}
         */
        this.RoGroupName = null;

        /**
         * Maximum delay threshold for RO instances in seconds. Minimum value: 1. Please note that this value will take effect only if an instance removal policy is enabled in the RO group.
         * @type {number || null}
         */
        this.RoMaxDelayTime = null;

        /**
         * Whether to enable instance removal. Valid values: 1 (enabled), 0 (not enabled). Please note that if instance removal is enabled, the delay threshold parameter (`RoMaxDelayTime`) must be set.
         * @type {number || null}
         */
        this.RoOfflineDelay = null;

        /**
         * Minimum number of instances to be retained, which can be set to any value less than or equal to the number of RO instances in the RO group. Please note that if this value is set to be greater than the number of RO instances, no removal will be performed, and if it is set to 0, all instances with an excessive delay will be removed.
         * @type {number || null}
         */
        this.MinRoInGroup = null;

        /**
         * Weighting mode. Supported values include `system` (automatically assigned by the system) and `custom` (defined by user). Please note that if the `custom` mode is selected, the RO instance weight configuration parameter (RoWeightValues) must be set.
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * Replication delay.
         * @type {number || null}
         */
        this.ReplicationDelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupName = 'RoGroupName' in params ? params.RoGroupName : null;
        this.RoMaxDelayTime = 'RoMaxDelayTime' in params ? params.RoMaxDelayTime : null;
        this.RoOfflineDelay = 'RoOfflineDelay' in params ? params.RoOfflineDelay : null;
        this.MinRoInGroup = 'MinRoInGroup' in params ? params.MinRoInGroup : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;
        this.ReplicationDelayTime = 'ReplicationDelayTime' in params ? params.ReplicationDelayTime : null;

    }
}

/**
 * TencentDB instance switch records
 * @class
 */
class DBSwitchInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch time in the format of yyyy-MM-dd HH:mm:ss, such as 2017-09-03 01:34:31
         * @type {string || null}
         */
        this.SwitchTime = null;

        /**
         * Switch type. Value range: TRANSFER (data migration), MASTER2SLAVE (primary/secondary switch), RECOVERY (primary/secondary recovery)
         * @type {string || null}
         */
        this.SwitchType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;
        this.SwitchType = 'SwitchType' in params ? params.SwitchType : null;

    }
}

/**
 * StartReplication response structure.
 * @class
 */
class StartReplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNameOrDescByDpId response structure.
 * @class
 */
class ModifyNameOrDescByDpIdResponse extends  AbstractModel {
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
 * StopDBImportJob response structure.
 * @class
 */
class StopDBImportJobResponse extends  AbstractModel {
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
 * DescribeDBPrice response structure.
 * @class
 */
class DescribeDBPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price. If `Currency` is set to `CNY`, the unit will be 0.01 CNY. If `Currency` is set to `USD`, the unit will be US Cent.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Original price of the instance. If `Currency` is set to `CNY`, the unit will be 0.01 CNY. If `Currency` is set to `USD`, the unit will be US Cent.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Currency: `CNY`, `USD`.
         * @type {string || null}
         */
        this.Currency = null;

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
        this.Price = 'Price' in params ? params.Price : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseCDBProxy response structure.
 * @class
 */
class CloseCDBProxyResponse extends  AbstractModel {
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
 * ReleaseIsolatedDBInstances response structure.
 * @class
 */
class ReleaseIsolatedDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deisolation result set.
         * @type {Array.<ReleaseResult> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ReleaseResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Filter condition for an audit log, which is used by users to filter the returned audit logs when querying them.
 * @class
 */
class AuditLogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client address
         * @type {Array.<string> || null}
         */
        this.Host = null;

        /**
         * Username
         * @type {Array.<string> || null}
         */
        this.User = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.DBName = null;

        /**
         * Table name
         * @type {Array.<string> || null}
         */
        this.TableName = null;

        /**
         * Audit policy name
         * @type {Array.<string> || null}
         */
        this.PolicyName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 
         * @type {string || null}
         */
        this.SqlType = null;

        /**
         * Execution time in ms, which is used to filter the audit log with execution time greater than this value.
         * @type {number || null}
         */
        this.ExecTime = null;

        /**
         * Number of affected rows, which is used to filter the audit log with affected rows greater than this value.
         * @type {number || null}
         */
        this.AffectRows = null;

        /**
         * SQL type (Multiple types can be queried at same time). Valid values: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `ALTER`, `SET`, `REPLACE`, `EXECUTE`.
         * @type {Array.<string> || null}
         */
        this.SqlTypes = null;

        /**
         * SQL statement. Multiple SQL statements can be passed in.
         * @type {Array.<string> || null}
         */
        this.Sqls = null;

        /**
         * Number of rows affected in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.AffectRowsSection = null;

        /**
         * Number of rows returned in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.SentRowsSection = null;

        /**
         * Execution time in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.ExecTimeSection = null;

        /**
         * Lock wait time in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.LockWaitTimeSection = null;

        /**
         * IO wait time in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.IoWaitTimeSection = null;

        /**
         * Transaction duration in the format of M-N, such as 10-200.
         * @type {string || null}
         */
        this.TransactionLivingTimeSection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.DBName = 'DBName' in params ? params.DBName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.SqlType = 'SqlType' in params ? params.SqlType : null;
        this.ExecTime = 'ExecTime' in params ? params.ExecTime : null;
        this.AffectRows = 'AffectRows' in params ? params.AffectRows : null;
        this.SqlTypes = 'SqlTypes' in params ? params.SqlTypes : null;
        this.Sqls = 'Sqls' in params ? params.Sqls : null;
        this.AffectRowsSection = 'AffectRowsSection' in params ? params.AffectRowsSection : null;
        this.SentRowsSection = 'SentRowsSection' in params ? params.SentRowsSection : null;
        this.ExecTimeSection = 'ExecTimeSection' in params ? params.ExecTimeSection : null;
        this.LockWaitTimeSection = 'LockWaitTimeSection' in params ? params.LockWaitTimeSection : null;
        this.IoWaitTimeSection = 'IoWaitTimeSection' in params ? params.IoWaitTimeSection : null;
        this.TransactionLivingTimeSection = 'TransactionLivingTimeSection' in params ? params.TransactionLivingTimeSection : null;

    }
}

/**
 * StartBatchRollback response structure.
 * @class
 */
class StartBatchRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Proxy configuration
 * @class
 */
class CustomConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Device
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Device = null;

        /**
         * Type
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Device type
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Memory
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of CPU cores
Note: this field may return `null`, indicating that no valid value can be found.
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
        this.Device = 'Device' in params ? params.Device : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * Connection pool information
 * @class
 */
class ConnectionPoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the connection pool is enabled
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.ConnectionPool = null;

        /**
         * Connection pool type. Valid value: `SessionConnectionPool` (session-level connection pool)
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ConnectionPoolType = null;

        /**
         * Connection persistence timeout in seconds
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.PoolConnectionTimeOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionPool = 'ConnectionPool' in params ? params.ConnectionPool : null;
        this.ConnectionPoolType = 'ConnectionPoolType' in params ? params.ConnectionPoolType : null;
        this.PoolConnectionTimeOut = 'PoolConnectionTimeOut' in params ? params.PoolConnectionTimeOut : null;

    }
}

/**
 * DescribeBackupOverview request structure.
 * @class
 */
class DescribeBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB product type to be queried. Currently, only `mysql` is supported.
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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeBackups request structure.
 * @class
 */
class DescribeBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset. Minimum value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: 1-100. Default value: 20.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAuditPolicies response structure.
 * @class
 */
class DescribeAuditPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible audit policies
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Audit policy details
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<AuditPolicy> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditPolicy();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords response structure.
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter modification records.
         * @type {Array.<ParamRecord> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceGTID response structure.
 * @class
 */
class DescribeDBInstanceGTIDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * GTID enablement flag. Value range: 0 (not enabled), 1 (enabled).
         * @type {number || null}
         */
        this.IsGTIDOpen = null;

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
        this.IsGTIDOpen = 'IsGTIDOpen' in params ? params.IsGTIDOpen : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBInstanceGTID response structure.
 * @class
 */
class OpenDBInstanceGTIDResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceRebootTime response structure.
 * @class
 */
class DescribeDBInstanceRebootTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned parameter information.
         * @type {Array.<InstanceRebootTime> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRebootTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchDrInstanceToMaster request structure.
 * @class
 */
class SwitchDrInstanceToMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
 * DeleteParamTemplate request structure.
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * Disaster recovery instance information
 * @class
 */
class DrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Disaster recovery instance status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance sync status. Possible returned values include:
0 - disaster recovery not synced;
1 - disaster recovery syncing;
2 - disaster recovery synced successfully;
3 - disaster recovery sync failed;
4 - repairing disaster recovery sync;
         * @type {number || null}
         */
        this.SyncStatus = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance type
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SyncStatus = 'SyncStatus' in params ? params.SyncStatus : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * Read-only group parameter
 * @class
 */
class RoGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Read-only group mode. Valid values: `alone` (the system assigns a read-only group automatically), `allinone` (a new read-only group will be created), `join` (an existing read-only group will be used).
         * @type {string || null}
         */
        this.RoGroupMode = null;

        /**
         * Read-only group ID.
         * @type {string || null}
         */
        this.RoGroupId = null;

        /**
         * Read-only group name.
         * @type {string || null}
         */
        this.RoGroupName = null;

        /**
         * Whether to enable the function of isolating an instance that exceeds the latency threshold. If it is enabled, when the latency between the read-only instance and the primary instance exceeds the latency threshold, the read-only instance will be isolated. Valid values: 1 (enabled), 0 (not enabled)
         * @type {number || null}
         */
        this.RoOfflineDelay = null;

        /**
         * Latency threshold
         * @type {number || null}
         */
        this.RoMaxDelayTime = null;

        /**
         * Minimum number of instances to be retained. If the number of the purchased read-only instances is smaller than the set value, they will not be removed.
         * @type {number || null}
         */
        this.MinRoInGroup = null;

        /**
         * Read/write weight distribution mode. Valid values: `system` (weights are assigned by the system automatically), `custom` (weights are customized)
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * Weight value.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Details of read-only instances in read-only group
         * @type {Array.<RoInstanceInfo> || null}
         */
        this.RoInstances = null;

        /**
         * Private IP of read-only group.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Private network port number of read-only group.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * VPC ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Read-only group region.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoGroupRegion = null;

        /**
         * Read-only group AZ.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoGroupZone = null;

        /**
         * Replication delay.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DelayReplicationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupMode = 'RoGroupMode' in params ? params.RoGroupMode : null;
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;
        this.RoGroupName = 'RoGroupName' in params ? params.RoGroupName : null;
        this.RoOfflineDelay = 'RoOfflineDelay' in params ? params.RoOfflineDelay : null;
        this.RoMaxDelayTime = 'RoMaxDelayTime' in params ? params.RoMaxDelayTime : null;
        this.MinRoInGroup = 'MinRoInGroup' in params ? params.MinRoInGroup : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

        if (params.RoInstances) {
            this.RoInstances = new Array();
            for (let z in params.RoInstances) {
                let obj = new RoInstanceInfo();
                obj.deserialize(params.RoInstances[z]);
                this.RoInstances.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.RoGroupRegion = 'RoGroupRegion' in params ? params.RoGroupRegion : null;
        this.RoGroupZone = 'RoGroupZone' in params ? params.RoGroupZone : null;
        this.DelayReplicationTime = 'DelayReplicationTime' in params ? params.DelayReplicationTime : null;

    }
}

/**
 * DescribeDataBackupOverview response structure.
 * @class
 */
class DescribeDataBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total capacity of data backups in bytes in the current region (including automatic backups and manual backups).
         * @type {number || null}
         */
        this.DataBackupVolume = null;

        /**
         * Total number of data backups in the current region.
         * @type {number || null}
         */
        this.DataBackupCount = null;

        /**
         * Total capacity of automatic backups in the current region.
         * @type {number || null}
         */
        this.AutoBackupVolume = null;

        /**
         * Total number of automatic backups in the current region.
         * @type {number || null}
         */
        this.AutoBackupCount = null;

        /**
         * Total capacity of manual backups in the current region.
         * @type {number || null}
         */
        this.ManualBackupVolume = null;

        /**
         * Total number of manual backups in the current region.
         * @type {number || null}
         */
        this.ManualBackupCount = null;

        /**
         * Total capacity of remote backups
         * @type {number || null}
         */
        this.RemoteBackupVolume = null;

        /**
         * Total number of remote backups
         * @type {number || null}
         */
        this.RemoteBackupCount = null;

        /**
         * Total capacity of archive backups in the current region
         * @type {number || null}
         */
        this.DataBackupArchiveVolume = null;

        /**
         * Total number of archive backups in the current region
         * @type {number || null}
         */
        this.DataBackupArchiveCount = null;

        /**
         * Total backup capacity of standard storage in current region
         * @type {number || null}
         */
        this.DataBackupStandbyVolume = null;

        /**
         * Total number of standard storage backups in current region
         * @type {number || null}
         */
        this.DataBackupStandbyCount = null;

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
        this.DataBackupVolume = 'DataBackupVolume' in params ? params.DataBackupVolume : null;
        this.DataBackupCount = 'DataBackupCount' in params ? params.DataBackupCount : null;
        this.AutoBackupVolume = 'AutoBackupVolume' in params ? params.AutoBackupVolume : null;
        this.AutoBackupCount = 'AutoBackupCount' in params ? params.AutoBackupCount : null;
        this.ManualBackupVolume = 'ManualBackupVolume' in params ? params.ManualBackupVolume : null;
        this.ManualBackupCount = 'ManualBackupCount' in params ? params.ManualBackupCount : null;
        this.RemoteBackupVolume = 'RemoteBackupVolume' in params ? params.RemoteBackupVolume : null;
        this.RemoteBackupCount = 'RemoteBackupCount' in params ? params.RemoteBackupCount : null;
        this.DataBackupArchiveVolume = 'DataBackupArchiveVolume' in params ? params.DataBackupArchiveVolume : null;
        this.DataBackupArchiveCount = 'DataBackupArchiveCount' in params ? params.DataBackupArchiveCount : null;
        this.DataBackupStandbyVolume = 'DataBackupStandbyVolume' in params ? params.DataBackupStandbyVolume : null;
        this.DataBackupStandbyCount = 'DataBackupStandbyCount' in params ? params.DataBackupStandbyCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance parameter details
 * @class
 */
class ParameterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter type. Valid values: `integer`, `enum`, `float`, `string`, `func`
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Current value of the parameter
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Whether the database needs to be restarted for the modified parameter to take effect. Value range: 0 (no); 1 (yes)
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Maximum value of the parameter
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Minimum value of the parameter
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Enumerated values of the parameter. It is null if the parameter is non-enumerated
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Maximum parameter value, which is valid only when `ParamType` is set to `func`
         * @type {string || null}
         */
        this.MaxFunc = null;

        /**
         * Minimum parameter value, which is valid only when `ParamType` is set to `func`
         * @type {string || null}
         */
        this.MinFunc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.MaxFunc = 'MaxFunc' in params ? params.MaxFunc : null;
        this.MinFunc = 'MinFunc' in params ? params.MinFunc : null;

    }
}

/**
 * SwitchCDBProxy response structure.
 * @class
 */
class SwitchCDBProxyResponse extends  AbstractModel {
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
 * Statistical items of instance backup
 * @class
 */
class BackupSummaryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of automatic data backups of an instance.
         * @type {number || null}
         */
        this.AutoBackupCount = null;

        /**
         * Capacity of automatic data backups of an instance.
         * @type {number || null}
         */
        this.AutoBackupVolume = null;

        /**
         * Number of manual data backups of an instance.
         * @type {number || null}
         */
        this.ManualBackupCount = null;

        /**
         * Capacity of manual data backups of an instance.
         * @type {number || null}
         */
        this.ManualBackupVolume = null;

        /**
         * Total number of data backups of an instance (including automatic backups and manual backups).
         * @type {number || null}
         */
        this.DataBackupCount = null;

        /**
         * Total capacity of data backups of an instance.
         * @type {number || null}
         */
        this.DataBackupVolume = null;

        /**
         * Number of log backups of an instance.
         * @type {number || null}
         */
        this.BinlogBackupCount = null;

        /**
         * Capacity of log backups of an instance.
         * @type {number || null}
         */
        this.BinlogBackupVolume = null;

        /**
         * Total capacity of backups of an instance (including data backups and log backups).
         * @type {number || null}
         */
        this.BackupVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoBackupCount = 'AutoBackupCount' in params ? params.AutoBackupCount : null;
        this.AutoBackupVolume = 'AutoBackupVolume' in params ? params.AutoBackupVolume : null;
        this.ManualBackupCount = 'ManualBackupCount' in params ? params.ManualBackupCount : null;
        this.ManualBackupVolume = 'ManualBackupVolume' in params ? params.ManualBackupVolume : null;
        this.DataBackupCount = 'DataBackupCount' in params ? params.DataBackupCount : null;
        this.DataBackupVolume = 'DataBackupVolume' in params ? params.DataBackupVolume : null;
        this.BinlogBackupCount = 'BinlogBackupCount' in params ? params.BinlogBackupCount : null;
        this.BinlogBackupVolume = 'BinlogBackupVolume' in params ? params.BinlogBackupVolume : null;
        this.BackupVolume = 'BackupVolume' in params ? params.BackupVolume : null;

    }
}

/**
 * SwitchForUpgrade request structure.
 * @class
 */
class SwitchForUpgradeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * ModifyBackupDownloadRestriction request structure.
 * @class
 */
class ModifyBackupDownloadRestrictionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `NoLimit` (backups can be downloaded over both private and public networks with any IPs), `LimitOnlyIntranet` (backups can be downloaded over the private network with any private IPs), `Customize` (backups can be downloaded over specified VPCs with specified IPs). The `LimitVpc` and `LimitIp` parameters are valid only when this parameter is set to `Customize`.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Valid value: `In` (backups can only be downloaded over the VPCs specified in `LimitVpc`). Default value: `In`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Valid values: `In` (backups can only be downloaded with the IPs specified in `LimitIp`), `NotIn` (backups cannot be downloaded with the IPs specified in `LimitIp`). Default value: `In`.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPCs used to restrict backup download.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * IPs used to restrict backup download.
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * CreateParamTemplate response structure.
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstanceHour response structure.
 * @class
 */
class CreateDBInstanceHourResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Short order ID.
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * Instance ID list
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
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloneList response structure.
 * @class
 */
class DescribeCloneListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of results which meet the conditions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Clone task list
         * @type {Array.<CloneItem> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new CloneItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountMaxUserConnections request structure.
 * @class
 */
class ModifyAccountMaxUserConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of TencentDB accounts
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maximum connections of the account. Maximum value: `10240`.
         * @type {number || null}
         */
        this.MaxUserConnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * TencentDB account
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Database account remarks
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ReleaseIsolatedDBInstances request structure.
 * @class
 */
class ReleaseIsolatedDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance IDs in the format of `cdb-c1nl9rpv`. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the ID, whose value is the `InstanceId` value in the output parameters.
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
 * Database proxy group information
 * @class
 */
class ProxyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {BaseGroupInfo || null}
         */
        this.BaseGroup = null;

        /**
         * Address information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<Address> || null}
         */
        this.Address = null;

        /**
         * Connection pool information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {ConnectionPoolInfo || null}
         */
        this.ConnectionPoolInfo = null;

        /**
         * Node information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<ProxyNodeInfo> || null}
         */
        this.ProxyNode = null;

        /**
         * Routing information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {RWInfo || null}
         */
        this.RWInstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaseGroup) {
            let obj = new BaseGroupInfo();
            obj.deserialize(params.BaseGroup)
            this.BaseGroup = obj;
        }

        if (params.Address) {
            this.Address = new Array();
            for (let z in params.Address) {
                let obj = new Address();
                obj.deserialize(params.Address[z]);
                this.Address.push(obj);
            }
        }

        if (params.ConnectionPoolInfo) {
            let obj = new ConnectionPoolInfo();
            obj.deserialize(params.ConnectionPoolInfo)
            this.ConnectionPoolInfo = obj;
        }

        if (params.ProxyNode) {
            this.ProxyNode = new Array();
            for (let z in params.ProxyNode) {
                let obj = new ProxyNodeInfo();
                obj.deserialize(params.ProxyNode[z]);
                this.ProxyNode.push(obj);
            }
        }

        if (params.RWInstInfo) {
            let obj = new RWInfo();
            obj.deserialize(params.RWInstInfo)
            this.RWInstInfo = obj;
        }

    }
}

/**
 * Binlog information
 * @class
 */
class BinlogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog backup filename
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Backup file size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * File stored time in the format of 2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Download address
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * Download address
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * Log type. Value range: binlog
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Binlog file start file
         * @type {string || null}
         */
        this.BinlogStartTime = null;

        /**
         * Binlog file end time
         * @type {string || null}
         */
        this.BinlogFinishTime = null;

        /**
         * The region where the binlog file resides
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Backup task status. Valid values: `SUCCESS` (backup succeeded), `FAILED` (backup failed), `RUNNING` (backup is in progress).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The detailed information of remote binlog backups
         * @type {Array.<RemoteBackupInfo> || null}
         */
        this.RemoteInfo = null;

        /**
         * Storage method. Valid values: `0` (regular storage), `1`(archive storage). Default value: `0`.
         * @type {number || null}
         */
        this.CosStorageType = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BinlogStartTime = 'BinlogStartTime' in params ? params.BinlogStartTime : null;
        this.BinlogFinishTime = 'BinlogFinishTime' in params ? params.BinlogFinishTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.RemoteInfo) {
            this.RemoteInfo = new Array();
            for (let z in params.RemoteInfo) {
                let obj = new RemoteBackupInfo();
                obj.deserialize(params.RemoteInfo[z]);
                this.RemoteInfo.push(obj);
            }
        }
        this.CosStorageType = 'CosStorageType' in params ? params.CosStorageType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * StopRollback request structure.
 * @class
 */
class StopRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance whose rollback task is canceled
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
 * Clone task information.
 * @class
 */
class CloneItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the original instance in a clone task
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * ID of the cloned instance in a clone task
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * Clone task ID
         * @type {number || null}
         */
        this.CloneJobId = null;

        /**
         * The policy used in a clone task. Valid values: `timepoint` (roll back to a specific point in time), `backupset` (roll back by using a specific backup file).
         * @type {string || null}
         */
        this.RollbackStrategy = null;

        /**
         * The point in time to which the cloned instance will be rolled back
         * @type {string || null}
         */
        this.RollbackTargetTime = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task status. Valid values: `initial`, `running`, `wait_complete`, `success`, `failed`.
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Clone instance region ID
         * @type {number || null}
         */
        this.NewRegionId = null;

        /**
         * Source instance region ID
         * @type {number || null}
         */
        this.SrcRegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.CloneJobId = 'CloneJobId' in params ? params.CloneJobId : null;
        this.RollbackStrategy = 'RollbackStrategy' in params ? params.RollbackStrategy : null;
        this.RollbackTargetTime = 'RollbackTargetTime' in params ? params.RollbackTargetTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.NewRegionId = 'NewRegionId' in params ? params.NewRegionId : null;
        this.SrcRegionId = 'SrcRegionId' in params ? params.SrcRegionId : null;

    }
}

/**
 * UpgradeDBInstanceEngineVersion request structure.
 * @class
 */
class UpgradeDBInstanceEngineVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Version of primary instance database engine. Value range: 5.6, 5.7
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Mode of switch to a new instance. Value range: 0 (switch immediately), 1 (switch within a time window). Default value: 0. If the value is 1, the switch process will be performed within a time window. Or, you can call the [switching to new instance API](https://intl.cloud.tencent.com/document/product/236/15864?from_cn_redirect=1) to trigger the process.
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * Whether to upgrade kernel minor version. Valid values: 1 (upgrade kernel minor version), 0 (upgrade database engine).
         * @type {number || null}
         */
        this.UpgradeSubversion = null;

        /**
         * Delay threshold. Value range: 1-10
         * @type {number || null}
         */
        this.MaxDelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;
        this.UpgradeSubversion = 'UpgradeSubversion' in params ? params.UpgradeSubversion : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ID of an async task request, i.e., `AsyncRequestId` returned by relevant TencentDB operations.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * Task type. If no value is passed in, all task types will be queried. Valid values:
1 - rolling back a database;
2 - performing an SQL operation;
3 - importing data;
5 - setting a parameter;
6 - initializing a TencentDB instance;
7 - restarting a TencentDB instance;
8 - enabling GTID of a TencentDB instance;
9 - upgrading a read-only instance;
10 - rolling back databases in batches;
11 - upgrading a primary instance;
12 - deleting a TencentDB table;
13 - promoting a disaster recovery instance.
         * @type {Array.<number> || null}
         */
        this.TaskTypes = null;

        /**
         * Task status. If no value is passed in, all task statuses will be queried. Valid values:
-1 - undefined;
0 - initializing;
1 - running;
2 - succeeded;
3 - failed;
4 - terminated;
5 - deleted;
6 - paused.
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * Start time of the first task in the format of yyyy-MM-dd HH:mm:ss, such as 2017-12-31 10:40:01. It is used for queries by time range.
         * @type {string || null}
         */
        this.StartTimeBegin = null;

        /**
         * End time of the last task in the format of yyyy-MM-dd HH:mm:ss, such as 2017-12-31 10:40:01. It is used for queries by time range.
         * @type {string || null}
         */
        this.StartTimeEnd = null;

        /**
         * Record offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Default value: 20. Maximum value: 100.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.StartTimeBegin = 'StartTimeBegin' in params ? params.StartTimeBegin : null;
        this.StartTimeEnd = 'StartTimeEnd' in params ? params.StartTimeEnd : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * Async task request ID, which can be used to query the execution result of an async task. (This returned field has been disused. You can query the isolation status of an instance through the `DescribeDBInstances` API.)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration information of the salve database
 * @class
 */
class SlaveConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication mode of the secondary database. Value range: async, semi-sync
         * @type {string || null}
         */
        this.ReplicationMode = null;

        /**
         * AZ name of the secondary database, such as ap-shanghai-1
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
        this.ReplicationMode = 'ReplicationMode' in params ? params.ReplicationMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeErrorLogData response structure.
 * @class
 */
class DescribeErrorLogDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned result.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrlogItem> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ErrlogItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddTimeWindow request structure.
 * @class
 */
class AddTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maintenance window on Monday. The format should be 10:00-12:00. You can set multiple time windows on a day. Each time window lasts from half an hour to three hours, and must start and end on the hour or half hour. At least one time window is required in a week. The same rule applies to the following parameters.
         * @type {Array.<string> || null}
         */
        this.Monday = null;

        /**
         * Maintenance window on Tuesday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Tuesday = null;

        /**
         * Maintenance window on Wednesday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Wednesday = null;

        /**
         * Maintenance window on Thursday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Thursday = null;

        /**
         * Maintenance window on Friday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Friday = null;

        /**
         * Maintenance window on Saturday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Saturday = null;

        /**
         * Maintenance window on Sunday. At least one time window is required in a week.
         * @type {Array.<string> || null}
         */
        this.Sunday = null;

        /**
         * Maximum delay threshold, which takes effect only for source instances and disaster recovery instances.
         * @type {number || null}
         */
        this.MaxDelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;

    }
}

/**
 * ModifyCDBProxyDesc response structure.
 * @class
 */
class ModifyCDBProxyDescResponse extends  AbstractModel {
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
 * Import task records
 * @class
 */
class ImportRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status value
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status value
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Execution duration
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backend task ID
         * @type {string || null}
         */
        this.WorkId = null;

        /**
         * Name of the file to be imported
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Execution progress
         * @type {number || null}
         */
        this.Process = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * File size
         * @type {string || null}
         */
        this.FileSize = null;

        /**
         * Task execution information
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Task ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * Name of the table to be imported
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * Async task request ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Process = 'Process' in params ? params.Process : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * DescribeBackupSummaries request structure.
 * @class
 */
class DescribeBackupSummariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB product type to be queried. Currently, only `mysql` is supported.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Paginated query offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum entries returned per page, which ranges from 1 to 100. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting criterion. Valid values: `BackupVolume` (backup capacity), `DataBackupVolume` (data backup capacity), `BinlogBackupVolume` (log backup capacity), `AutoBackupVolume` (automatic backup capacity), `ManualBackupVolume` (manual backup capacity). Default value: `BackupVolume`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `ASC` (ascending), `DESC` (descending). Default value: `ASC`.
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeRollbackTaskDetail response structure.
 * @class
 */
class DescribeRollbackTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Rollback task details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RollbackTask> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new RollbackTask();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccounts request structure.
 * @class
 */
class CreateAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of TencentDB accounts
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Password of the new account
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Maximum connections of the new account. Default value: `10240`. Maximum value: `10240`.
         * @type {number || null}
         */
        this.MaxUserConnections = null;

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
        this.Password = 'Password' in params ? params.Password : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

    }
}

/**
 * CreateDBInstanceHour request structure.
 * @class
 */
class CreateDBInstanceHourRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances. Value range: 1-100. Default value: 1.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance memory size in MB. Please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported memory specifications.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB. Please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported disk specifications.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * MySQL version. Valid values: `5.5`, `5.6`, `5.7`, `8.0`. You can use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported versions.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * VPC ID. If this parameter is not passed in, the basic network will be selected by default. Please use the [DescribeVpcs](https://intl.cloud.tencent.com/document/api/215/15778?from_cn_redirect=1) API to query the VPCs.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID. If `UniqVpcId` is set, then `UniqSubnetId` will be required. Please use the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API to query the subnet lists.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Project ID. If this is left empty, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * AZ information. By default, the system will automatically select an AZ. Please use the [DescribeDBZoneConfig](https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1) API to query the supported AZs.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance ID, which is required and the same as the primary instance ID when purchasing read-only or disaster recovery instances. Please use the [DescribeDBInstances](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) API to query the instance IDs.
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * Instance type. Valid values: master (primary instance), dr (disaster recovery instance), ro (read-only instance). Default value: master.
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * AZ information of the source instance, which is required for purchasing disaster recovery instances and read-only instances.
         * @type {string || null}
         */
        this.MasterRegion = null;

        /**
         * Custom port. Value range: [1024-65535].
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Sets the root account password. Rule: the password can contain 8-64 characters and must contain at least two of the following types of characters: letters, digits, and special symbols (_+-&=!@#$%^*()). This parameter can be specified when purchasing primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of parameters in the format of `ParamList.0.Name=auto_increment&ParamList.0.Value=1`. You can use the [DescribeDefaultParams](https://intl.cloud.tencent.com/document/api/236/32662?from_cn_redirect=1) API to query the configurable parameters.
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamList = null;

        /**
         * Data replication mode. Valid values: 0 (async), 1 (semi-sync), 2 (strong sync). Default value: 0. This parameter can be specified when purchasing primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Multi-AZ. Valid value: 0 (single-AZ), 1 (multi-AZ). Default value: 0. This parameter can be specified when purchasing primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * AZ information of secondary database 1, which is the `Zone` value by default. This parameter can be specified when purchasing primary instances and is meaningless for read-only or disaster recovery instances.
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * The availability zone information of Replica 2, which is left empty by default. Specify this parameter when purchasing a source instance in the one-source-two-replica architecture.
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * Security group parameter. You can use the [DescribeProjectSecurityGroups](https://intl.cloud.tencent.com/document/api/236/15850?from_cn_redirect=1) API to query the security group details of a project.
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Read-only instance information. This parameter must be passed in when purchasing read-only instances.
         * @type {RoGroup || null}
         */
        this.RoGroup = null;

        /**
         * This field is meaningless when purchasing pay-as-you-go instances.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Instance name. For multiple instances purchased at one time, they will be distinguished by the name suffix number, such as instnaceName=db and goodsNum=3, their instance name is db1, db2 respectively.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance tag information.
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * Placement group ID.
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Instance resource isolation type. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance), `BASIC` (basic instance). Default value: `UNIVERSAL`.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Parameter template ID.
         * @type {number || null}
         */
        this.ParamTemplateId = null;

        /**
         * Array of alarm policy IDs, which is `OriginId` obtained through the `DescribeAlarmPolicy` API.
         * @type {Array.<number> || null}
         */
        this.AlarmPolicyList = null;

        /**
         * The number of nodes of the instance. To purchase a read-only replica or a basic instance, set this parameter to `1` or leave it empty. To purchase a three-node instance, set this parameter to `3` or specify the `BackupZone` parameter. If the instance to be purchased is a source instance and both `BackupZone` and this parameter are left empty, the value `2` will be used, which indicates the source instance will have two nodes.
         * @type {number || null}
         */
        this.InstanceNodes = null;

        /**
         * The number of CPU cores of the instance. If this parameter is left empty, the number of CPU cores depends on the `Memory` value.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Whether to automatically start disaster recovery synchronization. This parameter takes effect only for disaster recovery instances. Valid values: `0` (no), `1` (yes). Default value: `0`.
         * @type {number || null}
         */
        this.AutoSyncFlag = null;

        /**
         * Financial cage ID.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * Type of the default parameter template. Valid values: `HIGH_STABILITY` (high-stability template), `HIGH_PERFORMANCE` (high-performance template). Default value: `HIGH_STABILITY`.
         * @type {string || null}
         */
        this.ParamTemplateType = null;

        /**
         * The array of alarm policy names, such as ["policy-uyoee9wg"]. If the `AlarmPolicyList` parameter is specified, this parameter is invalid.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyIdList = null;

        /**
         * Whether to check the request without creating any instance. Valid values: `true`, `false` (default). After being submitted, the request will be checked to see if it is in correct format and has all required parameters with valid values. An error code is returned if the check failed, and `RequestId` is returned if the check succeeded. After a successful check, no instance will be created if this parameter is set to `true`, whereas an instance will be created and if it is set to `false`.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Instance engine type. Valid values: `InnoDB` (default); `RocksDB`.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * The list of IPs for sources instances. Only one IP address can be assigned to a single source instance. If all IPs are used up, the system will automatically assign IPs to the remaining source instances that do not have one.
         * @type {Array.<string> || null}
         */
        this.Vips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.MasterRegion = 'MasterRegion' in params ? params.MasterRegion : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

        if (params.RoGroup) {
            let obj = new RoGroup();
            obj.deserialize(params.RoGroup)
            this.RoGroup = obj;
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.ParamTemplateId = 'ParamTemplateId' in params ? params.ParamTemplateId : null;
        this.AlarmPolicyList = 'AlarmPolicyList' in params ? params.AlarmPolicyList : null;
        this.InstanceNodes = 'InstanceNodes' in params ? params.InstanceNodes : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.AutoSyncFlag = 'AutoSyncFlag' in params ? params.AutoSyncFlag : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.ParamTemplateType = 'ParamTemplateType' in params ? params.ParamTemplateType : null;
        this.AlarmPolicyIdList = 'AlarmPolicyIdList' in params ? params.AlarmPolicyIdList : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.Vips = 'Vips' in params ? params.Vips : null;

    }
}

/**
 * Information of the remote backup
 * @class
 */
class RemoteBackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the remote backup subtask
         * @type {Array.<number> || null}
         */
        this.SubBackupId = null;

        /**
         * The region where the remote backup resides
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Backup task status. Valid values: `SUCCESS` (backup succeeded), `FAILED` (backup failed), `RUNNING` (backup is in progress).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The start time of remote backup
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time of remote backup
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * The download address
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
        this.SubBackupId = 'SubBackupId' in params ? params.SubBackupId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Information of instances in the proxy group
 * @class
 */
class RWInstanceInfo extends  AbstractModel {
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
 * DescribeSlowLogs response structure.
 * @class
 */
class DescribeSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible slow logs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of eligible slow logs.
         * @type {Array.<SlowLogInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SlowLogInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of the instance for rollback
 * @class
 */
class RollbackInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Rollback policy. Valid values: `table` (ultrafast mode), `db` (faster mode), and `full` (fast mode). Default value: `full`. In the ultrafast mode, only backups and binlogs of the tables specified by the `Tables` parameter are imported; if `Tables` does not include all of the tables involved in cross-table operations, the rollback may fail; and the `Database` parameter must be left empty. In the faster mode, only backups and binlogs of the databases specified by the `Databases` parameter are imported, and if `Databases` does not include all of the databases involved in cross-database operations, the rollback may fail. In the fast mode, backups and binlogs of the entire instance will be imported in a speed slower than the other modes.
         * @type {string || null}
         */
        this.Strategy = null;

        /**
         * Database rollback time in the format of yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * Information of the databases to be rolled back, which means rollback at the database level
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RollbackDBName> || null}
         */
        this.Databases = null;

        /**
         * Information of the tables to be rolled back, which means rollback at the table level
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RollbackTables> || null}
         */
        this.Tables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new RollbackDBName();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new RollbackTables();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

    }
}

/**
 * ReloadBalanceProxyNode request structure.
 * @class
 */
class ReloadBalanceProxyNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy group ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Address ID of the proxy group
         * @type {string || null}
         */
        this.ProxyAddressId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.ProxyAddressId = 'ProxyAddressId' in params ? params.ProxyAddressId : null;

    }
}

/**
 * DescribeCloneList request structure.
 * @class
 */
class DescribeCloneListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the original instance. This parameter is used to query the clone task list of a specific original instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Paginated query offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results per page. Default value: `20`.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Backup details
 * @class
 */
class BackupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup filename
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Backup file size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Backup snapshot time in the format of yyyy-MM-dd HH:mm:ss, such as 2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Download address
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * Download address
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * Log type. Valid values: `logical` (logical cold backup), `physical` (physical cold backup).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Backup subtask ID, which is used when backup files are deleted
         * @type {number || null}
         */
        this.BackupId = null;

        /**
         * Backup task status. Valid values: `SUCCESS` (backup succeeded), `FAILED` (backup failed), `RUNNING` (backup is in progress).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Backup task completion time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * (This field will be disused and is thus not recommended) backup creator. Valid values: `SYSTEM` (created by system), `Uin` (initiator's `Uin` value).
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Backup task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup method. Valid values: `full` (full backup), `partial` (partial backup).
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Backup mode. Valid values: `manual` (manual backup), `automatic` (automatic backup).
         * @type {string || null}
         */
        this.Way = null;

        /**
         * Manual backup alias
         * @type {string || null}
         */
        this.ManualBackupName = null;

        /**
         * Backup retention type. Valid values: `save_mode_regular` (non-archive backup), save_mode_period`(archive backup).
         * @type {string || null}
         */
        this.SaveMode = null;

        /**
         * The region where local backup resides
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Detailed information of remote backups
         * @type {Array.<RemoteBackupInfo> || null}
         */
        this.RemoteInfo = null;

        /**
         * Storage method. Valid values: `0` (regular storage), `1`(archive storage). Default value: `0`.
         * @type {number || null}
         */
        this.CosStorageType = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether the backup file is encrypted. Valid values: `on` (encrypted), `off` (unencrypted).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptionFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.ManualBackupName = 'ManualBackupName' in params ? params.ManualBackupName : null;
        this.SaveMode = 'SaveMode' in params ? params.SaveMode : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.RemoteInfo) {
            this.RemoteInfo = new Array();
            for (let z in params.RemoteInfo) {
                let obj = new RemoteBackupInfo();
                obj.deserialize(params.RemoteInfo[z]);
                this.RemoteInfo.push(obj);
            }
        }
        this.CosStorageType = 'CosStorageType' in params ? params.CosStorageType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EncryptionFlag = 'EncryptionFlag' in params ? params.EncryptionFlag : null;

    }
}

/**
 * CloseWanService response structure.
 * @class
 */
class CloseWanServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * ID of the instance to be cloned from
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * To roll back the cloned instance to a specific point in time, set this parameter to a value in the format of "yyyy-mm-dd hh:mm:ss".
         * @type {string || null}
         */
        this.SpecifiedRollbackTime = null;

        /**
         * To roll back the cloned instance to a specific physical backup file, set this parameter to the ID of the physical backup file. The ID can be obtained by the [DescribeBackups](https://intl.cloud.tencent.com/document/api/236/15842?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.SpecifiedBackupId = null;

        /**
         * VPC ID, which can be obtained by the [DescribeVpcs](https://intl.cloud.tencent.com/document/api/215/15778?from_cn_redirect=1) API. If this parameter is left empty, the classic network will be used by default.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID, which can be obtained by the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API. If `UniqVpcId` is set, `UniqSubnetId` will be required.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Memory of the cloned instance in MB, which should be equal to (by default) or larger than that of the original instance
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk capacity of the cloned instance in GB, which should be equal to (by default) or larger than that of the original instance
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Name of the cloned instance
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Security group parameter, which can be obtained by the [DescribeProjectSecurityGroups](https://intl.cloud.tencent.com/document/api/236/15850?from_cn_redirect=1) API
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * Information of the cloned instance tag
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * The number of CPU cores of the cloned instance. It should be equal to (by default) or larger than that of the original instance.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Data replication mode. Valid values: 0 (async), 1 (semi-sync), 2 (strong sync). Default value: 0.
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Multi-AZ or single-AZ. Valid values: 0 (single-AZ), 1 (multi-AZ). Default value: 0.
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * Availability zone information of replica 1 of the cloned instance, which is the same as the value of `Zone` of the original instance by default
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * Availability zone information of replica 2 of the cloned instance, 
which is left empty by default. Specify this parameter when cloning a strong sync source instance.
         * @type {string || null}
         */
        this.BackupZone = null;

        /**
         * Resource isolation type of the clone. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance). Default value: `UNIVERSAL`.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * The number of nodes of the clone. If this parameter is set to `3` or the `BackupZone` parameter is specified, the clone will have three nodes. If this parameter is set to `2` or left empty, the clone will have two nodes.
         * @type {number || null}
         */
        this.InstanceNodes = null;

        /**
         * Placement group ID.
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * Whether to check the request without creating any instance. Valid values: `true`, `false` (default). After being submitted, the request will be checked to see if it is in correct format and has all required parameters with valid values. An error code is returned if the check failed, and `RequestId` is returned if the check succeeded. After a successful check, no instance will be created if this parameter is set to `true`, whereas an instance will be created and if it is set to `false`.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Financial cage ID.
         * @type {string || null}
         */
        this.CageId = null;

        /**
         * Project ID. Default value: 0.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpecifiedRollbackTime = 'SpecifiedRollbackTime' in params ? params.SpecifiedRollbackTime : null;
        this.SpecifiedBackupId = 'SpecifiedBackupId' in params ? params.SpecifiedBackupId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceNodes = 'InstanceNodes' in params ? params.InstanceNodes : null;
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.CageId = 'CageId' in params ? params.CageId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance type. Value range: 1 (primary), 2 (disaster recovery), 3 (read-only).
         * @type {Array.<number> || null}
         */
        this.InstanceTypes = null;

        /**
         * Private IP address of the instance.
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * Instance status. Valid values: <br>`0` (creating) <br>`1` (running) <br>`4` (isolating) <br>`5` (isolated; the instance can be restored and started in the recycle bin)
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Default value: 20. Maximum value: 2,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Security group ID. When it is used as a filter, the `WithSecurityGroup` parameter should be set to 1.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Billing method. Value range: 0 (monthly subscribed), 1 (hourly).
         * @type {Array.<number> || null}
         */
        this.PayTypes = null;

        /**
         * Instance name.
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * Instance task status. Valid values: <br>0 - no task <br>1 - upgrading <br>2 - importing data <br>3 - enabling secondary instance access <br>4 - enabling public network access <br>5 - batch operation in progress <br>6 - rolling back <br>7 - disabling public network access <br>8 - modifying password <br>9 - renaming instance <br>10 - restarting <br>12 - migrating self-built database <br>13 - dropping tables <br>14 - Disaster recovery instance creating sync task <br>15 - waiting for switch <br>16 - switching <br>17 - upgrade and switch completed <br>19 - parameter settings to be executed
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * Version of the instance database engine. Value range: 5.1, 5.5, 5.6, 5.7.
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * VPC ID.
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * AZ ID.
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * Subnet ID.
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * Whether to lock disk write. Valid values: `0`(unlock), `1`(lock). Default value: 0.
         * @type {Array.<number> || null}
         */
        this.CdbErrors = null;

        /**
         * Sort by field of the returned result set. Currently, supported values include "InstanceId", "InstanceName", "CreateTime", and "DeadlineTime".
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method of the returned result set. Currently, "ASC" or "DESC" is supported.
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * Whether security group ID is used as a filter
         * @type {number || null}
         */
        this.WithSecurityGroup = null;

        /**
         * Whether dedicated cluster details are included. Value range: 0 (not included), 1 (included)
         * @type {number || null}
         */
        this.WithExCluster = null;

        /**
         * Exclusive cluster ID.
         * @type {string || null}
         */
        this.ExClusterId = null;

        /**
         * Instance ID.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Initialization flag. Value range: 0 (not initialized), 1 (initialized).
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * Whether instances corresponding to the disaster recovery relationship are included. Valid values: 0 (not included), 1 (included). Default value: 1. If a primary instance is pulled, the data of the disaster recovery relationship will be in the `DrInfo` field. If a disaster recovery instance is pulled, the data of the disaster recovery relationship will be in the `MasterInfo` field. The disaster recovery relationship contains only partial basic data. To get the detailed data, you need to call an API to pull it.
         * @type {number || null}
         */
        this.WithDr = null;

        /**
         * Whether read-only instances are included. Valid values: 0 (not included), 1 (included). Default value: 1.
         * @type {number || null}
         */
        this.WithRo = null;

        /**
         * Whether primary instances are included. Valid values: 0 (not included), 1 (included). Default value: 1.
         * @type {number || null}
         */
        this.WithMaster = null;

        /**
         * Placement group ID list.
         * @type {Array.<string> || null}
         */
        this.DeployGroupIds = null;

        /**
         * Whether to use the tag key as a filter condition
         * @type {Array.<string> || null}
         */
        this.TagKeysForSearch = null;

        /**
         * Financial cage IDs.
         * @type {Array.<string> || null}
         */
        this.CageIds = null;

        /**
         * Tag value
         * @type {Array.<string> || null}
         */
        this.TagValues = null;

        /**
         * VPC character vpcId
         * @type {Array.<string> || null}
         */
        this.UniqueVpcIds = null;

        /**
         * VPC character subnetId
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * Tag key value
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Database proxy IP
         * @type {Array.<string> || null}
         */
        this.ProxyVips = null;

        /**
         * Database proxy ID
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * Database engine type
         * @type {Array.<string> || null}
         */
        this.EngineTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.PayTypes = 'PayTypes' in params ? params.PayTypes : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.EngineVersions = 'EngineVersions' in params ? params.EngineVersions : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.CdbErrors = 'CdbErrors' in params ? params.CdbErrors : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.WithSecurityGroup = 'WithSecurityGroup' in params ? params.WithSecurityGroup : null;
        this.WithExCluster = 'WithExCluster' in params ? params.WithExCluster : null;
        this.ExClusterId = 'ExClusterId' in params ? params.ExClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;
        this.WithDr = 'WithDr' in params ? params.WithDr : null;
        this.WithRo = 'WithRo' in params ? params.WithRo : null;
        this.WithMaster = 'WithMaster' in params ? params.WithMaster : null;
        this.DeployGroupIds = 'DeployGroupIds' in params ? params.DeployGroupIds : null;
        this.TagKeysForSearch = 'TagKeysForSearch' in params ? params.TagKeysForSearch : null;
        this.CageIds = 'CageIds' in params ? params.CageIds : null;
        this.TagValues = 'TagValues' in params ? params.TagValues : null;
        this.UniqueVpcIds = 'UniqueVpcIds' in params ? params.UniqueVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ProxyVips = 'ProxyVips' in params ? params.ProxyVips : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
        this.EngineTypes = 'EngineTypes' in params ? params.EngineTypes : null;

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
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * This parameter takes effect only when the ID of a read-only instance is passed in. If the parameter is set to `False` or left empty, the security groups bound with the RO groups of the read-only instance can only be queried. If it is set to `True`, the security groups can be modified.
         * @type {boolean || null}
         */
        this.ForReadonlyInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForReadonlyInstance = 'ForReadonlyInstance' in params ? params.ForReadonlyInstance : null;

    }
}

/**
 * ModifyDBInstanceVipVport response structure.
 * @class
 */
class ModifyDBInstanceVipVportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. This parameter is deprecated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseCDBProxy request structure.
 * @class
 */
class CloseCDBProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Proxy group ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Whether only to disable read/write separation. Valid values: `true`, `false`. Default value: `false`.
         * @type {boolean || null}
         */
        this.OnlyCloseRW = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.OnlyCloseRW = 'OnlyCloseRW' in params ? params.OnlyCloseRW : null;

    }
}

/**
 * DescribeDBSwitchRecords response structure.
 * @class
 */
class DescribeDBSwitchRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance switches.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of instance switches.
         * @type {Array.<DBSwitchInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DBSwitchInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupEncryptionStatus request structure.
 * @class
 */
class ModifyBackupEncryptionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-XXXX, which is the same as that displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Default encryption status for the new auto-generated physical backup files. Valid values: `on`, `off`.
         * @type {string || null}
         */
        this.EncryptionStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EncryptionStatus = 'EncryptionStatus' in params ? params.EncryptionStatus : null;

    }
}

/**
 * ModifyCDBProxyConnectionPool response structure.
 * @class
 */
class ModifyCDBProxyConnectionPoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async request ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Slow log details
 * @class
 */
class SlowLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup filename
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Backup file size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Backup snapshot time in the format of yyyy-MM-dd HH:mm:ss, such as 2016-03-17 02:10:37
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Download address on the private network
         * @type {string || null}
         */
        this.IntranetUrl = null;

        /**
         * Download address on the public network
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * Log type. Value range: slowlog (slow log)
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.IntranetUrl = 'IntranetUrl' in params ? params.IntranetUrl : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Name of the table for rollback
 * @class
 */
class RollbackTableName extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original table name before rollback
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * New table name after rollback
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;

    }
}

/**
 * DeleteBackup response structure.
 * @class
 */
class DeleteBackupResponse extends  AbstractModel {
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
 * ModifyInstanceParam request structure.
 * @class
 */
class ModifyInstanceParamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of short instance IDs.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of parameters to be modified. Every element is a combination of `Name` (parameter name) and `CurrentValue` (new value).
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

        /**
         * Template ID. At least one of `ParamList` and `TemplateId` must be passed in.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * When to perform the parameter adjustment task. Default value: 0. Valid values: 0 - execute immediately, 1 - execute during window. When its value is 1, only one instance ID can be passed in (i.e., only one `InstanceIds` can be passed in).
         * @type {number || null}
         */
        this.WaitSwitch = null;

        /**
         * Whether to sync the parameters to read-only instance of the source instance. Valid values: `true` (not sync), `false` (sync). Default value: `false`.
         * @type {boolean || null}
         */
        this.NotSyncRo = null;

        /**
         * Whether to sync the parameters to disaster recovery instance of the source instance. Valid values: `true` (not sync), `false` (sync). Default value: `false`.
         * @type {boolean || null}
         */
        this.NotSyncDr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;
        this.NotSyncRo = 'NotSyncRo' in params ? params.NotSyncRo : null;
        this.NotSyncDr = 'NotSyncDr' in params ? params.NotSyncDr : null;

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
         * Security group details.
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Number of security group rules
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The purchasable configuration in a region
 * @class
 */
class CdbRegionSellConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Area
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Whether it is a default region
         * @type {number || null}
         */
        this.IsDefaultRegion = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The purchasable configuration in an AZ in a region
         * @type {Array.<CdbZoneSellConf> || null}
         */
        this.RegionConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.IsDefaultRegion = 'IsDefaultRegion' in params ? params.IsDefaultRegion : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.RegionConfig) {
            this.RegionConfig = new Array();
            for (let z in params.RegionConfig) {
                let obj = new CdbZoneSellConf();
                obj.deserialize(params.RegionConfig[z]);
                this.RegionConfig.push(obj);
            }
        }

    }
}

/**
 * File upload description
 * @class
 */
class UploadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parts of file
         * @type {number || null}
         */
        this.AllSliceNum = null;

        /**
         * Number of completed parts
         * @type {number || null}
         */
        this.CompleteNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllSliceNum = 'AllSliceNum' in params ? params.AllSliceNum : null;
        this.CompleteNum = 'CompleteNum' in params ? params.CompleteNum : null;

    }
}

/**
 * ModifyLocalBinlogConfig response structure.
 * @class
 */
class ModifyLocalBinlogConfigResponse extends  AbstractModel {
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
 * Common time window
 * @class
 */
class CommonTimeWindow extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time window on Monday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Monday = null;

        /**
         * Time window on Tuesday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Tuesday = null;

        /**
         * Time window on Wednesday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Wednesday = null;

        /**
         * Time window on Thursday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Thursday = null;

        /**
         * Time window on Friday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Friday = null;

        /**
         * Time window on Saturday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Saturday = null;

        /**
         * Time window on Sunday in the format of 02:00-06:00
         * @type {string || null}
         */
        this.Sunday = null;

        /**
         * Non-archive backup retention policy. Valid values: `weekly` (back up by week), monthly (back up by month), default value: `weekly`.
         * @type {string || null}
         */
        this.BackupPeriodStrategy = null;

        /**
         * If `BackupPeriodStrategy` is `monthly`, you need to pass in the specific backup dates. The time interval between any two adjacent dates cannot exceed 2 days, for example, [1,4,7,9,11,14,17,19,22,25,28,30,31].
         * @type {Array.<number> || null}
         */
        this.Days = null;

        /**
         * Backup time by month in the format of 02:00–06:00, which is required when `BackupPeriodStrategy` is `monthly`.
         * @type {string || null}
         */
        this.BackupPeriodTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;
        this.BackupPeriodStrategy = 'BackupPeriodStrategy' in params ? params.BackupPeriodStrategy : null;
        this.Days = 'Days' in params ? params.Days : null;
        this.BackupPeriodTime = 'BackupPeriodTime' in params ? params.BackupPeriodTime : null;

    }
}

/**
 * Node information of the proxy
 * @class
 */
class ProxyNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy node ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ProxyNodeId = null;

        /**
         * Current number of connections to the node
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ProxyNodeConnections = null;

        /**
         * CPU
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ProxyNodeCpu = null;

        /**
         * Memory
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.ProxyNodeMem = null;

        /**
         * Node status:
init (applying)
online (active)
offline (inactive)
destroy (destroyed)
recovering (recovering from fault)
error (failed)
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ProxyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyNodeId = 'ProxyNodeId' in params ? params.ProxyNodeId : null;
        this.ProxyNodeConnections = 'ProxyNodeConnections' in params ? params.ProxyNodeConnections : null;
        this.ProxyNodeCpu = 'ProxyNodeCpu' in params ? params.ProxyNodeCpu : null;
        this.ProxyNodeMem = 'ProxyNodeMem' in params ? params.ProxyNodeMem : null;
        this.ProxyStatus = 'ProxyStatus' in params ? params.ProxyStatus : null;

    }
}

/**
 * AnalyzeAuditLogs response structure.
 * @class
 */
class AnalyzeAuditLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information set of the aggregation bucket returned
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AuditLogAggregationResult> || null}
         */
        this.Items = null;

        /**
         * Number of scanned logs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditLogAggregationResult();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSwitchRecords request structure.
 * @class
 */
class DescribeDBSwitchRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: 1-2,000. Default value: 50.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSupportedPrivileges request structure.
 * @class
 */
class DescribeSupportedPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * DescribeAsyncRequestInfo response structure.
 * @class
 */
class DescribeAsyncRequestInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task execution result. Valid values: INITIAL, RUNNING, SUCCESS, FAILED, KILLED, REMOVED, PAUSED.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task execution information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Info = null;

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
        this.Info = 'Info' in params ? params.Info : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstance response structure.
 * @class
 */
class CreateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Short order ID
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * List of instance IDs
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
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceTag request structure.
 * @class
 */
class ModifyInstanceTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Tag to be added or modified.
         * @type {Array.<TagInfo> || null}
         */
        this.ReplaceTags = null;

        /**
         * Tag to be deleted.
         * @type {Array.<TagInfo> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfo();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceCharset response structure.
 * @class
 */
class DescribeDBInstanceCharsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default character set of the instance, such as "latin1" and "utf8".
         * @type {string || null}
         */
        this.Charset = null;

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
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccounts response structure.
 * @class
 */
class DeleteAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenAuditService response structure.
 * @class
 */
class OpenAuditServiceResponse extends  AbstractModel {
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
 * CloseWanService request structure.
 * @class
 */
class CloseWanServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * RestartDBInstances response structure.
 * @class
 */
class RestartDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoInstanceIp response structure.
 * @class
 */
class CreateRoInstanceIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID of the read-only instance.
         * @type {number || null}
         */
        this.RoVpcId = null;

        /**
         * Subnet ID of the read-only instance.
         * @type {number || null}
         */
        this.RoSubnetId = null;

        /**
         * Private IP address of the read-only instance.
         * @type {string || null}
         */
        this.RoVip = null;

        /**
         * Private port number of the read-only instance.
         * @type {number || null}
         */
        this.RoVport = null;

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
        this.RoVpcId = 'RoVpcId' in params ? params.RoVpcId : null;
        this.RoSubnetId = 'RoSubnetId' in params ? params.RoSubnetId : null;
        this.RoVip = 'RoVip' in params ? params.RoVip : null;
        this.RoVport = 'RoVport' in params ? params.RoVport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimeWindow request structure.
 * @class
 */
class DescribeTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * DescribeDBFeatures request structure.
 * @class
 */
class DescribeDBFeaturesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
 * CreateAuditPolicy response structure.
 * @class
 */
class CreateAuditPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit policy ID.
         * @type {string || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchForUpgrade response structure.
 * @class
 */
class SwitchForUpgradeResponse extends  AbstractModel {
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
 * DescribeBackupSummaries response structure.
 * @class
 */
class DescribeBackupSummariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical items of instance backup.
         * @type {Array.<BackupSummaryItem> || null}
         */
        this.Items = null;

        /**
         * Total number of instance backups.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BackupSummaryItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords request structure.
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: 20.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SwitchDBInstanceMasterSlave request structure.
 * @class
 */
class SwitchDBInstanceMasterSlaveRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specifies the replica server to switched to. Valid values: `first` (the first replica server), `second` (the second replica server). Default value: `first`. `second` is valid only for a multi-AZ instance.
         * @type {string || null}
         */
        this.DstSlave = null;

        /**
         * Whether to force the switch. Valid values: `True`, `False` (default). If this parameter is set to `True`, instance data may be lost during the switch.
         * @type {boolean || null}
         */
        this.ForceSwitch = null;

        /**
         * Whether to perform the switch during a time window. Valid values: `True`, `False` (default). If `ForceSwitch` is set to `True`, this parameter is invalid.
         * @type {boolean || null}
         */
        this.WaitSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DstSlave = 'DstSlave' in params ? params.DstSlave : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;
        this.WaitSwitch = 'WaitSwitch' in params ? params.WaitSwitch : null;

    }
}

/**
 * StopRollback response structure.
 * @class
 */
class StopRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter template information
 * @class
 */
class ParamTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Instance engine version
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Parameter template type
         * @type {string || null}
         */
        this.TemplateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;

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
 * DeleteTimeWindow response structure.
 * @class
 */
class DeleteTimeWindowResponse extends  AbstractModel {
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
 * Details of the table for rollback
 * @class
 */
class RollbackTables extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Table details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RollbackTableName> || null}
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
        this.Database = 'Database' in params ? params.Database : null;

        if (params.Table) {
            this.Table = new Array();
            for (let z in params.Table) {
                let obj = new RollbackTableName();
                obj.deserialize(params.Table[z]);
                this.Table.push(obj);
            }
        }

    }
}

/**
 * DescribeBinlogBackupOverview request structure.
 * @class
 */
class DescribeBinlogBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB product type to be queried. Currently, only `mysql` is supported.
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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Rollback task details
 * @class
 */
class RollbackTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task execution information.
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Task execution result. Valid values: INITIAL: initializing, RUNNING: running, SUCCESS: succeeded, FAILED: failed, KILLED: terminated, REMOVED: deleted, PAUSED: paused.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task execution progress. Value range: [0,100].
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Rollback task details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RollbackInstancesInfo> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new RollbackInstancesInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * StartReplication request structure.
 * @class
 */
class StartReplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Read-Only instance ID.
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
 * DescribeBackups response structure.
 * @class
 */
class DescribeBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of eligible backups.
         * @type {Array.<BackupInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BackupInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AnalyzeAuditLogs request structure.
 * @class
 */
class AnalyzeAuditLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time of the log to be analyzed in the format of `2023-02-16 00:00:20`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the log to be analyzed in the format of `2023-02-16 00:00:20`.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Sorting conditions for aggregation dimension
         * @type {Array.<AggregationCondition> || null}
         */
        this.AggregationConditions = null;

        /**
         * The result set of the audit log filtered by this condition is set as the analysis Log.
         * @type {AuditLogFilter || null}
         */
        this.AuditLogFilter = null;

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

        if (params.AggregationConditions) {
            this.AggregationConditions = new Array();
            for (let z in params.AggregationConditions) {
                let obj = new AggregationCondition();
                obj.deserialize(params.AggregationConditions[z]);
                this.AggregationConditions.push(obj);
            }
        }

        if (params.AuditLogFilter) {
            let obj = new AuditLogFilter();
            obj.deserialize(params.AuditLogFilter)
            this.AuditLogFilter = obj;
        }

    }
}

/**
 * CreateAuditPolicy request structure.
 * @class
 */
class CreateAuditPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit policy name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Audit rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Retention period of audit logs. Valid values:
7: seven days (a week);
30: 30 days (a month);
180: 180 days (six months);
365: 365 days (a year);
1095: 1095 days (three years);
1825: 1825 days (five years).
This parameter specifies the retention period (30 days by default) of audit logs, which is valid when you create the first audit policy for an instance. If the instance already has audit policies, this parameter is invalid, but you can use the `ModifyAuditConfig` API to modify the retention period.
         * @type {number || null}
         */
        this.LogExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;

    }
}

/**
 * CreateRoInstanceIp request structure.
 * @class
 */
class CreateRoInstanceIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Read-only instance ID in the format of "cdbro-3i70uj0k". Its value is the same as the read-only instance ID in the TencentDB Console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Subnet descriptor, such as "subnet-1typ0s7d".
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * VPC descriptor, such as "vpc-a23yt67j". If this field is passed in, `UniqSubnetId` will be required.
         * @type {string || null}
         */
        this.UniqVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;

    }
}

/**
 * ModifyInstanceParam response structure.
 * @class
 */
class ModifyInstanceParamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which can be used to query task progress.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBImportRecords response structure.
 * @class
 */
class DescribeDBImportRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible import task operation logs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of import operation records.
         * @type {Array.<ImportRecord> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ImportRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimeWindow response structure.
 * @class
 */
class DescribeTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of maintenance time windows on Monday.
         * @type {Array.<string> || null}
         */
        this.Monday = null;

        /**
         * List of maintenance time windows on Tuesday.
         * @type {Array.<string> || null}
         */
        this.Tuesday = null;

        /**
         * List of maintenance time windows on Wednesday.
         * @type {Array.<string> || null}
         */
        this.Wednesday = null;

        /**
         * List of maintenance time windows on Thursday.
         * @type {Array.<string> || null}
         */
        this.Thursday = null;

        /**
         * List of maintenance time windows on Friday.
         * @type {Array.<string> || null}
         */
        this.Friday = null;

        /**
         * List of maintenance time windows on Saturday.
         * @type {Array.<string> || null}
         */
        this.Saturday = null;

        /**
         * List of maintenance time windows on Sunday.
         * @type {Array.<string> || null}
         */
        this.Sunday = null;

        /**
         * Maximum data delay threshold
         * @type {number || null}
         */
        this.MaxDelayTime = null;

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
        this.Monday = 'Monday' in params ? params.Monday : null;
        this.Tuesday = 'Tuesday' in params ? params.Tuesday : null;
        this.Wednesday = 'Wednesday' in params ? params.Wednesday : null;
        this.Thursday = 'Thursday' in params ? params.Thursday : null;
        this.Friday = 'Friday' in params ? params.Friday : null;
        this.Saturday = 'Saturday' in params ? params.Saturday : null;
        this.Sunday = 'Sunday' in params ? params.Sunday : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupEncryptionStatus response structure.
 * @class
 */
class ModifyBackupEncryptionStatusResponse extends  AbstractModel {
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
 * When creating a backup, you need to specify the information of the table to be backed up.
 * @class
 */
class BackupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the database to be backed up
         * @type {string || null}
         */
        this.Db = null;

        /**
         * Name of the table to be backed up. If this parameter is passed in, the specified table in the database will be backed up; otherwise, the database will be backed up.
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
        this.Db = 'Db' in params ? params.Db : null;
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * ModifyCDBProxyVipVPort request structure.
 * @class
 */
class ModifyCDBProxyVipVPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy group ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * New IP
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * New port
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * Valid hours of the old IP
         * @type {number || null}
         */
        this.ReleaseDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.ReleaseDuration = 'ReleaseDuration' in params ? params.ReleaseDuration : null;

    }
}

/**
 * Audit rule filters
 * @class
 */
class AuditFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameter names. Valid values:
SrcIp: Client IP;
User: Database account;
DB: Database name.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Filter match type. Valid value:
`INC`: Include;
`EXC`: Exclude;
`EQ`: Equal to;
`NEQ`: Not equal to.
         * @type {string || null}
         */
        this.Compare = null;

        /**
         * Filter match value
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Compare = 'Compare' in params ? params.Compare : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBackupConfig response structure.
 * @class
 */
class DescribeBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Earliest start time point of automatic backup, such as 2 (for 2:00 AM). (This field has been disused. You are recommended to use the `BackupTimeWindow` field)
         * @type {number || null}
         */
        this.StartTimeMin = null;

        /**
         * Latest start time point of automatic backup, such as 6 (for 6:00 AM). (This field has been disused. You are recommended to use the `BackupTimeWindow` field)
         * @type {number || null}
         */
        this.StartTimeMax = null;

        /**
         * Backup file retention period in days.
         * @type {number || null}
         */
        this.BackupExpireDays = null;

        /**
         * Backup mode. Value range: physical, logical
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Binlog file retention period in days.
         * @type {number || null}
         */
        this.BinlogExpireDays = null;

        /**
         * Time window for automatic instance backup.
         * @type {CommonTimeWindow || null}
         */
        this.BackupTimeWindow = null;

        /**
         * Switch for archive backup retention. Valid values: `off` (disable), `on` (enable). Default value:`off`.
         * @type {string || null}
         */
        this.EnableBackupPeriodSave = null;

        /**
         * Maximum days of archive backup retention. Valid range: 90-3650. Default value: 1080.
         * @type {number || null}
         */
        this.BackupPeriodSaveDays = null;

        /**
         * Archive backup retention period. Valid values: `weekly` (a week), `monthly` (a month), `quarterly` (a quarter), `yearly` (a year). Default value: `monthly`.
         * @type {string || null}
         */
        this.BackupPeriodSaveInterval = null;

        /**
         * Number of archive backups. Minimum value: `1`, Maximum value: Number of non-archive backups in archive backup retention period. Default value: `1`.
         * @type {number || null}
         */
        this.BackupPeriodSaveCount = null;

        /**
         * The start time in the format: yyyy-mm-dd HH:MM:SS, which is used to enable archive backup retention policy.
         * @type {string || null}
         */
        this.StartBackupPeriodSaveDate = null;

        /**
         * Whether to enable the archive backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBackupArchive = null;

        /**
         * The period (in days) of how long a data backup is retained before being archived, which falls between 180 days and the number of days from the time it is created until it expires.
         * @type {number || null}
         */
        this.BackupArchiveDays = null;

        /**
         * Whether to enable the archive backup of logs. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBinlogArchive = null;

        /**
         * The period (in days) of how long a log backup is retained before being archived, which falls between 180 days and the number of days from the time it is created until it expires.
         * @type {number || null}
         */
        this.BinlogArchiveDays = null;

        /**
         * Whether to enable the standard storage policy for data backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBackupStandby = null;

        /**
         * The period (in days) of how long a data backup is retained before switching to standard storage, which falls between 30 days and the number of days from the time it is created until it expires. If the archive backup is enabled, this period cannot be greater than archive backup period.
         * @type {number || null}
         */
        this.BackupStandbyDays = null;

        /**
         * Whether to enable the standard storage policy for log backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBinlogStandby = null;

        /**
         * The period (in days) of how long a log backup is retained before switching to standard storage, which falls between 30 days and the number of days from the time it is created until it expires. If the archive backup is enabled, this period cannot be greater than archive backup period.
         * @type {number || null}
         */
        this.BinlogStandbyDays = null;

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
        this.StartTimeMin = 'StartTimeMin' in params ? params.StartTimeMin : null;
        this.StartTimeMax = 'StartTimeMax' in params ? params.StartTimeMax : null;
        this.BackupExpireDays = 'BackupExpireDays' in params ? params.BackupExpireDays : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BinlogExpireDays = 'BinlogExpireDays' in params ? params.BinlogExpireDays : null;

        if (params.BackupTimeWindow) {
            let obj = new CommonTimeWindow();
            obj.deserialize(params.BackupTimeWindow)
            this.BackupTimeWindow = obj;
        }
        this.EnableBackupPeriodSave = 'EnableBackupPeriodSave' in params ? params.EnableBackupPeriodSave : null;
        this.BackupPeriodSaveDays = 'BackupPeriodSaveDays' in params ? params.BackupPeriodSaveDays : null;
        this.BackupPeriodSaveInterval = 'BackupPeriodSaveInterval' in params ? params.BackupPeriodSaveInterval : null;
        this.BackupPeriodSaveCount = 'BackupPeriodSaveCount' in params ? params.BackupPeriodSaveCount : null;
        this.StartBackupPeriodSaveDate = 'StartBackupPeriodSaveDate' in params ? params.StartBackupPeriodSaveDate : null;
        this.EnableBackupArchive = 'EnableBackupArchive' in params ? params.EnableBackupArchive : null;
        this.BackupArchiveDays = 'BackupArchiveDays' in params ? params.BackupArchiveDays : null;
        this.EnableBinlogArchive = 'EnableBinlogArchive' in params ? params.EnableBinlogArchive : null;
        this.BinlogArchiveDays = 'BinlogArchiveDays' in params ? params.BinlogArchiveDays : null;
        this.EnableBackupStandby = 'EnableBackupStandby' in params ? params.EnableBackupStandby : null;
        this.BackupStandbyDays = 'BackupStandbyDays' in params ? params.BackupStandbyDays : null;
        this.EnableBinlogStandby = 'EnableBinlogStandby' in params ? params.EnableBinlogStandby : null;
        this.BinlogStandbyDays = 'BinlogStandbyDays' in params ? params.BinlogStandbyDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRollbackTaskDetail request structure.
 * @class
 */
class DescribeRollbackTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is the same as the instance ID displayed in the TencentDB Console. You can use the [DescribeDBInstances API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Async task ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

        /**
         * Pagination parameter, i.e., the number of entries to be returned for a single request. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Default value: 0.
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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * OpenDBInstanceEncryption response structure.
 * @class
 */
class OpenDBInstanceEncryptionResponse extends  AbstractModel {
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
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of IDs of security groups to be modified, which is an array of one or more security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * This parameter takes effect only when the ID of read-only replica is passed in. If this parameter is set to `False` or left empty, the security groups bound with the RO group of the read-only replicas will be modified. If this parameter is set to `True`, the security groups bound with the read-only replica itself will be modified.
         * @type {boolean || null}
         */
        this.ForReadonlyInstance = null;

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
        this.ForReadonlyInstance = 'ForReadonlyInstance' in params ? params.ForReadonlyInstance : null;

    }
}

/**
 * DescribeParamTemplates response structure.
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameter templates of the user.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template details.
         * @type {Array.<ParamTemplateInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoMinScale response structure.
 * @class
 */
class DescribeRoMinScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory size in MB.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Disk size in GB.
         * @type {number || null}
         */
        this.Volume = null;

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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group outbound rule
 * @class
 */
class Outbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy, which can be ACCEPT or DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Destination IP or IP range, such as 172.16.0.0/12
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port or port range
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Network protocol. UDP and TCP are supported
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * The direction of the rule, which is OUTPUT for inbound rules
         * @type {string || null}
         */
        this.Dir = null;

        /**
         * Rule description
         * @type {string || null}
         */
        this.Desc = null;

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
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * The details of purchasable configuration
 * @class
 */
class CdbSellConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU core count
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Minimum disk size in GB
         * @type {number || null}
         */
        this.VolumeMin = null;

        /**
         * Maximum disk size in GB
         * @type {number || null}
         */
        this.VolumeMax = null;

        /**
         * Disk capacity increment in GB
         * @type {number || null}
         */
        this.VolumeStep = null;

        /**
         * IO operations per second
         * @type {number || null}
         */
        this.Iops = null;

        /**
         * Application scenario description
         * @type {string || null}
         */
        this.Info = null;

        /**
         * Status. The value `0` indicates that this specification is available.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance type. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance), `BASIC` (basic instance), `BASIC_V2` (basic v2 instance).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Engine type description. Valid values: `Innodb`, `RocksDB`.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * Purchasable specifications ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.VolumeMin = 'VolumeMin' in params ? params.VolumeMin : null;
        this.VolumeMax = 'VolumeMax' in params ? params.VolumeMax : null;
        this.VolumeStep = 'VolumeStep' in params ? params.VolumeStep : null;
        this.Iops = 'Iops' in params ? params.Iops : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * RO instance weight value
 * @class
 */
class RoWeightValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Weight value. Value range: [0, 100].
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyParamTemplate response structure.
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
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
 * DescribeProjectSecurityGroups request structure.
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID.
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * RO instance details
 * @class
 */
class RoInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master instance ID corresponding to the RO group
         * @type {string || null}
         */
        this.MasterInstanceId = null;

        /**
         * RO instance status in the RO group. Value range: online, offline
         * @type {string || null}
         */
        this.RoStatus = null;

        /**
         * Last deactivation time of a RO instance in the RO group
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * RO instance weight in the RO group
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * RO instance region name, such as ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Name of RO AZ, such as ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * RO instance ID in the format of cdbro-c1nl9rpv
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * RO instance status. Valid values: `0` (creating), `1` (running), `3` (remote RO), `4` (deleting). When the `DescribeDBInstances` API is used to query the information of the source instance, if the source instance is associated with a remote read-only instance, the returned status value of the remote read-only instance always shows 3.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance type. Value range: 1 (primary), 2 (disaster recovery), 3 (read-only)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * RO instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Pay-as-you-go billing status. Value range: 1 (normal), 2 (in arrears)
         * @type {number || null}
         */
        this.HourFeeStatus = null;

        /**
         * RO instance task status. Value range: <br>0 - no task <br>1 - upgrading <br>2 - importing data <br>3 - activating secondary <br>4 - public network access enabled <br>5 - batch operation in progress <br>6 - rolling back <br>7 - public network access not enabled <br>8 - modifying password <br>9 - renaming instance <br>10 - restarting <br>12 - migrating self-built instance <br>13 - dropping table <br>14 - creating and syncing disaster recovery instance
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * RO instance memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * RO instance disk size in GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Queries per second
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Private IP address of the RO instance
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Access port of the RO instance
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * VPC ID of the RO instance
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID of the RO instance
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * RO instance specification description. Value range: CUSTOM
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Database engine version of the read-only replica. Valid values: `5.1`, `5.5`, `5.6`, `5.7`, `8.0`
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * RO instance expiration time in the format of yyyy-mm-dd hh:mm:ss. If it is a pay-as-you-go instance, the value of this field is 0000-00-00 00:00:00
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * RO instance billing method. Value range: 0 (monthly subscribed), 1 (pay-as-you-go), 2 (monthly postpaid)
         * @type {number || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterInstanceId = 'MasterInstanceId' in params ? params.MasterInstanceId : null;
        this.RoStatus = 'RoStatus' in params ? params.RoStatus : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HourFeeStatus = 'HourFeeStatus' in params ? params.HourFeeStatus : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

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
         * Inbound rule
         * @type {Array.<Inbound> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule
         * @type {Array.<Outbound> || null}
         */
        this.Outbound = null;

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

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

    }
}

/**
 * StopReplication request structure.
 * @class
 */
class StopReplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Read-Only instance ID.
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
 * BalanceRoGroupLoad response structure.
 * @class
 */
class BalanceRoGroupLoadResponse extends  AbstractModel {
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
 * Network monitoring information of the physical server where the instance is located
 * @class
 */
class DeviceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of TCP connections
         * @type {Array.<number> || null}
         */
        this.Conn = null;

        /**
         * ENI inbound packets per second
         * @type {Array.<number> || null}
         */
        this.PackageIn = null;

        /**
         * ENI outbound packets per second
         * @type {Array.<number> || null}
         */
        this.PackageOut = null;

        /**
         * Inbound traffic in Kbps
         * @type {Array.<number> || null}
         */
        this.FlowIn = null;

        /**
         * Outbound traffic in Kbps
         * @type {Array.<number> || null}
         */
        this.FlowOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.PackageIn = 'PackageIn' in params ? params.PackageIn : null;
        this.PackageOut = 'PackageOut' in params ? params.PackageOut : null;
        this.FlowIn = 'FlowIn' in params ? params.FlowIn : null;
        this.FlowOut = 'FlowOut' in params ? params.FlowOut : null;

    }
}

/**
 * DescribeProxyConnectionPoolConf response structure.
 * @class
 */
class DescribeProxyConnectionPoolConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried configurations
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Connection pool configuration details
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {PoolConf || null}
         */
        this.PoolConf = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.PoolConf) {
            let obj = new PoolConf();
            obj.deserialize(params.PoolConf)
            this.PoolConf = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag information
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {Array.<string> || null}
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
 * ModifyCDBProxyVipVPort response structure.
 * @class
 */
class ModifyCDBProxyVipVPortResponse extends  AbstractModel {
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
 * Time range available for rollback
 * @class
 */
class RollbackTimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time available for rollback in the format of yyyy-MM-dd HH:mm:ss, such as 2016-10-29 01:06:04
         * @type {string || null}
         */
        this.Begin = null;

        /**
         * End time available for rollback in the format of yyyy-MM-dd HH:mm:ss, such as 2016-11-02 11:44:47
         * @type {string || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Begin = 'Begin' in params ? params.Begin : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeSupportedPrivileges response structure.
 * @class
 */
class DescribeSupportedPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Global permissions supported by the instance
         * @type {Array.<string> || null}
         */
        this.GlobalSupportedPrivileges = null;

        /**
         * Database permissions supported by the instance.
         * @type {Array.<string> || null}
         */
        this.DatabaseSupportedPrivileges = null;

        /**
         * Table permissions supported by the instance.
         * @type {Array.<string> || null}
         */
        this.TableSupportedPrivileges = null;

        /**
         * Column permissions supported by the instance.
         * @type {Array.<string> || null}
         */
        this.ColumnSupportedPrivileges = null;

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
        this.GlobalSupportedPrivileges = 'GlobalSupportedPrivileges' in params ? params.GlobalSupportedPrivileges : null;
        this.DatabaseSupportedPrivileges = 'DatabaseSupportedPrivileges' in params ? params.DatabaseSupportedPrivileges : null;
        this.TableSupportedPrivileges = 'TableSupportedPrivileges' in params ? params.TableSupportedPrivileges : null;
        this.ColumnSupportedPrivileges = 'ColumnSupportedPrivileges' in params ? params.ColumnSupportedPrivileges : null;
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
         * LimitAsync task request ID, which can be used to query the execution result of an async task
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCdbZoneConfig request structure.
 * @class
 */
class DescribeCdbZoneConfigRequest extends  AbstractModel {
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
 * ModifyDBInstanceName request structure.
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The modified instance name.
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
 * Tag information unit
 * @class
 */
class TagInfoUnit extends  AbstractModel {
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
 * OpenDBInstanceGTID request structure.
 * @class
 */
class OpenDBInstanceGTIDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * UpgradeDBInstanceEngineVersion response structure.
 * @class
 */
class UpgradeDBInstanceEngineVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID. The task execution result can be queried using the [async task execution result querying API](https://intl.cloud.tencent.com/document/api/236/20410?from_cn_redirect=1).
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLocalBinlogConfig request structure.
 * @class
 */
class ModifyLocalBinlogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Retention period of local binlog. Valid range: 72-168 hours. When there is disaster recovery instance, the valid range will be 120-168 hours.
         * @type {number || null}
         */
        this.SaveHours = null;

        /**
         * Space utilization of local binlog. Value range: [30,50].
         * @type {number || null}
         */
        this.MaxUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SaveHours = 'SaveHours' in params ? params.SaveHours : null;
        this.MaxUsage = 'MaxUsage' in params ? params.MaxUsage : null;

    }
}

/**
 * DescribeAsyncRequestInfo request structure.
 * @class
 */
class DescribeAsyncRequestInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * DescribeInstanceParams response structure.
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance parameters.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter details.
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
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
 * BalanceRoGroupLoad request structure.
 * @class
 */
class BalanceRoGroupLoadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID in the format of `cdbrg-c1nl9rpv`.
         * @type {string || null}
         */
        this.RoGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;

    }
}

/**
 * QueryCDBProxy request structure.
 * @class
 */
class QueryCDBProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;

    }
}

/**
 * DescribeAuditRules request structure.
 * @class
 */
class DescribeAuditRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule ID.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Audit rule name. Fuzzy match query is supported.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Number of entries per page. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Default value: 0
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyNameOrDescByDpId request structure.
 * @class
 */
class ModifyNameOrDescByDpIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Placement group ID
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * Name of a placement group, which can contain up to 60 characters. The placement group name and description can’t be empty.
         * @type {string || null}
         */
        this.DeployGroupName = null;

        /**
         * Description of a placement group, which can contain up to 200 characters. The placement group name and description can’t be empty.
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
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeBackupOverview response structure.
 * @class
 */
class DescribeBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of backups of a user in the current region (including data backups and log backups).
         * @type {number || null}
         */
        this.BackupCount = null;

        /**
         * Total capacity of backups of a user in the current region.
         * @type {number || null}
         */
        this.BackupVolume = null;

        /**
         * Paid capacity of backups of a user in the current region, i.e., capacity that exceeds the free tier.
         * @type {number || null}
         */
        this.BillingVolume = null;

        /**
         * Backup capacity in the free tier of a user in the current region.
         * @type {number || null}
         */
        this.FreeVolume = null;

        /**
         * Total capacity of backups of a user in the current region
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RemoteBackupVolume = null;

        /**
         * Archive backup capacity, which includes data backups and log backups.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.BackupArchiveVolume = null;

        /**
         * Backup capacity of standard storage, which includes data backups and log backups.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.BackupStandbyVolume = null;

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
        this.BackupCount = 'BackupCount' in params ? params.BackupCount : null;
        this.BackupVolume = 'BackupVolume' in params ? params.BackupVolume : null;
        this.BillingVolume = 'BillingVolume' in params ? params.BillingVolume : null;
        this.FreeVolume = 'FreeVolume' in params ? params.FreeVolume : null;
        this.RemoteBackupVolume = 'RemoteBackupVolume' in params ? params.RemoteBackupVolume : null;
        this.BackupArchiveVolume = 'BackupArchiveVolume' in params ? params.BackupArchiveVolume : null;
        this.BackupStandbyVolume = 'BackupStandbyVolume' in params ? params.BackupStandbyVolume : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeUploadedFiles request structure.
 * @class
 */
class DescribeUploadedFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File path. `OwnerUin` information of the root account should be entered in this field.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Record offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Default value: 20.
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Structured error log details
 * @class
 */
class ErrlogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error occurrence time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Error details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeTables response structure.
 * @class
 */
class DescribeTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible tables.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of a table.
         * @type {Array.<string> || null}
         */
        this.Items = null;

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
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceMonitorInfo request structure.
 * @class
 */
class DescribeDeviceMonitorInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * This parameter is used to return the monitoring data of Count 5-minute time periods on the day. Value range: 1-288. If this parameter is not passed in, all monitoring data in a 5-minute granularity on the day will be returned by default.
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeDBPrice request structure.
 * @class
 */
class DescribeDBPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance validity period in months. Value range: 1-36. This field is invalid when querying the prices of pay-as-you-go instances.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * AZ information in the format of "ap-guangzhou-2". You can use the <a href="https://intl.cloud.tencent.com/document/api/236/17229?from_cn_redirect=1">DescribeDBZoneConfig</a> API to query the configurable values. This parameter is required when `InstanceId` is empty.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of instances. Value range: 1-100. Default value: 1. This parameter is required when `InstanceId` is empty.
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Instance memory size in MB. This parameter is required when `InstanceId` is empty.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB. This parameter is required when `InstanceId` is empty.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Instance type. Valid values: `master` (source instance), `dr` (disaster recovery instance), `ro` (read-only instance). Default value: `master`. This parameter is required when `InstanceId` is empty.
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Billing mode. Valid values: `PRE_PAID` (monthly subscribed), `HOUR_PAID` (pay-as-you-go). This parameter is required when `InstanceId` is empty.
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Data replication mode. Valid values: `0` (async), 1 (semi-sync), `2` (strong sync). Default value: `0`.
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Instance isolation type. Valid values: `UNIVERSAL` (general instance), `EXCLUSIVE` (dedicated instance), `BASIC` (basic instance). Default value: `UNIVERSAL`.
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * The number of the instance. Valid values: `1` (for read-only and basic instances), `2` (for other source instances). To query the price of a three-node instance, set this value to `3`.
         * @type {number || null}
         */
        this.InstanceNodes = null;

        /**
         * CPU core count of the price-queried instance. To ensure that the CPU value to be passed in is valid, use the [DescribeDBZoneConfig](https://www.tencentcloud.com/document/product/236/17229) API to query the number of purchasable cores. If this value is not specified, a default value based on memory size will be set.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance ID for querying renewal price. To query the renewal price of the instance, pass in the values of `InstanceId` and `Period`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Tiered pay-as-you-go pricing, which is valid only when `PayType` is set to `HOUR_PAID`. Valid values: `1`, `2`, `3`. For more information on tiered duration, visit https://intl.cloud.tencent.com/document/product/236/18335.?from_cn_redirect=1
         * @type {number || null}
         */
        this.Ladder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceNodes = 'InstanceNodes' in params ? params.InstanceNodes : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ladder = 'Ladder' in params ? params.Ladder : null;

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
 * QueryCDBProxy response structure.
 * @class
 */
class QueryCDBProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Proxy information
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<ProxyGroups> || null}
         */
        this.ProxyGroup = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.ProxyGroup) {
            this.ProxyGroup = new Array();
            for (let z in params.ProxyGroup) {
                let obj = new ProxyGroups();
                obj.deserialize(params.ProxyGroup[z]);
                this.ProxyGroup.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLocalBinlogConfig request structure.
 * @class
 */
class DescribeLocalBinlogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
 * CreateBackup response structure.
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup task ID
         * @type {number || null}
         */
        this.BackupId = null;

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
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCDBProxyDesc request structure.
 * @class
 */
class ModifyCDBProxyDescRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database proxy ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Database proxy description
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * Read/Write separation information of the proxy
 * @class
 */
class RWInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.InstCount = null;

        /**
         * Assignment mode of read/write weights
Valid values: `system` (auto-assigned), `custom`
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * Whether to remove delayed read-only instances from the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.IsKickOut = null;

        /**
         * The minimum number of read-only instances allowed by the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MinCount = null;

        /**
         * Delay threshold
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MaxDelay = null;

        /**
         * Whether to enable failover
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.FailOver = null;

        /**
         * Whether to automatically add newly created read-only instances to the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.AutoAddRo = null;

        /**
         * Information of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<RWInstanceInfo> || null}
         */
        this.RWInstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstCount = 'InstCount' in params ? params.InstCount : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;
        this.IsKickOut = 'IsKickOut' in params ? params.IsKickOut : null;
        this.MinCount = 'MinCount' in params ? params.MinCount : null;
        this.MaxDelay = 'MaxDelay' in params ? params.MaxDelay : null;
        this.FailOver = 'FailOver' in params ? params.FailOver : null;
        this.AutoAddRo = 'AutoAddRo' in params ? params.AutoAddRo : null;

        if (params.RWInstInfo) {
            this.RWInstInfo = new Array();
            for (let z in params.RWInstInfo) {
                let obj = new RWInstanceInfo();
                obj.deserialize(params.RWInstInfo[z]);
                this.RWInstInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeDBInstanceConfig response structure.
 * @class
 */
class DescribeDBInstanceConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data protection mode of the primary instance. Value range: 0 (async replication), 1 (semi-sync replication), 2 (strong sync replication).
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Master instance deployment mode. Value range: 0 (single-AZ), 1 (multi-AZ)
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * Instance AZ information in the format of "ap-shanghai-1".
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Configurations of the replica node
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {SlaveConfig || null}
         */
        this.SlaveConfig = null;

        /**
         * Configurations of the second replica node of a strong-sync instance
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {BackupConfig || null}
         */
        this.BackupConfig = null;

        /**
         * This parameter is only available for multi-AZ instances. It indicates whether the source AZ is the same as the one specified upon purchase. `true`: not the same, `false`: the same.
         * @type {boolean || null}
         */
        this.Switched = null;

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
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SlaveConfig) {
            let obj = new SlaveConfig();
            obj.deserialize(params.SlaveConfig)
            this.SlaveConfig = obj;
        }

        if (params.BackupConfig) {
            let obj = new BackupConfig();
            obj.deserialize(params.BackupConfig)
            this.BackupConfig = obj;
        }
        this.Switched = 'Switched' in params ? params.Switched : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefaultParams response structure.
 * @class
 */
class DescribeDefaultParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter details.
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchCDBProxy request structure.
 * @class
 */
class SwitchCDBProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database proxy ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;

    }
}

/**
 * Configuration information of ECDB secondary database 2. This field is only applicable to ECDB instances
 * @class
 */
class BackupConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication mode of secondary database 2. Value range: async, semi-sync
         * @type {string || null}
         */
        this.ReplicationMode = null;

        /**
         * Name of the AZ of secondary database 2, such as ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Private IP address of secondary database 2
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Access port of secondary database 2
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
        this.ReplicationMode = 'ReplicationMode' in params ? params.ReplicationMode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * DescribeLocalBinlogConfig response structure.
 * @class
 */
class DescribeLocalBinlogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binlog retention policy of the instance.
         * @type {LocalBinlogConfig || null}
         */
        this.LocalBinlogConfig = null;

        /**
         * Default binlog retention policy in the region.
         * @type {LocalBinlogConfigDefault || null}
         */
        this.LocalBinlogConfigDefault = null;

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

        if (params.LocalBinlogConfig) {
            let obj = new LocalBinlogConfig();
            obj.deserialize(params.LocalBinlogConfig)
            this.LocalBinlogConfig = obj;
        }

        if (params.LocalBinlogConfigDefault) {
            let obj = new LocalBinlogConfigDefault();
            obj.deserialize(params.LocalBinlogConfigDefault)
            this.LocalBinlogConfigDefault = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoGroups request structure.
 * @class
 */
class DescribeRoGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `cdb-c1nl9rpv` or `cdb-c1nl9rpv`. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * DescribeCDBProxy response structure.
 * @class
 */
class DescribeCDBProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic information of the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {BaseGroupInfo || null}
         */
        this.BaseGroup = null;

        /**
         * Address information of the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Address || null}
         */
        this.Address = null;

        /**
         * Node information of the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {ProxyNodeInfo || null}
         */
        this.ProxyNode = null;

        /**
         * Read/Write separation information
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {RWInfo || null}
         */
        this.RWInstInfo = null;

        /**
         * Connection pool information
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {ConnectionPoolInfo || null}
         */
        this.ConnectionPoolInfo = null;

        /**
         * Number of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Proxy information
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<ProxyGroup> || null}
         */
        this.ProxyGroup = null;

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

        if (params.BaseGroup) {
            let obj = new BaseGroupInfo();
            obj.deserialize(params.BaseGroup)
            this.BaseGroup = obj;
        }

        if (params.Address) {
            let obj = new Address();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

        if (params.ProxyNode) {
            let obj = new ProxyNodeInfo();
            obj.deserialize(params.ProxyNode)
            this.ProxyNode = obj;
        }

        if (params.RWInstInfo) {
            let obj = new RWInfo();
            obj.deserialize(params.RWInstInfo)
            this.RWInstInfo = obj;
        }

        if (params.ConnectionPoolInfo) {
            let obj = new ConnectionPoolInfo();
            obj.deserialize(params.ConnectionPoolInfo)
            this.ConnectionPoolInfo = obj;
        }
        this.Count = 'Count' in params ? params.Count : null;

        if (params.ProxyGroup) {
            this.ProxyGroup = new Array();
            for (let z in params.ProxyGroup) {
                let obj = new ProxyGroup();
                obj.deserialize(params.ProxyGroup[z]);
                this.ProxyGroup.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance tag information
 * @class
 */
class TagsInfoOfInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Tag information
         * @type {Array.<TagInfoUnit> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ResetRootAccount request structure.
 * @class
 */
class ResetRootAccountRequest extends  AbstractModel {
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
 *  CPU load
 * @class
 */
class DeviceCpuInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Average instance CPU utilization
         * @type {Array.<DeviceCpuRateInfo> || null}
         */
        this.Rate = null;

        /**
         * CPU monitoring data of the instance
         * @type {Array.<number> || null}
         */
        this.Load = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rate) {
            this.Rate = new Array();
            for (let z in params.Rate) {
                let obj = new DeviceCpuRateInfo();
                obj.deserialize(params.Rate[z]);
                this.Rate.push(obj);
            }
        }
        this.Load = 'Load' in params ? params.Load : null;

    }
}

/**
 * Audit Policy
 * @class
 */
class AuditPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit policy ID.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Audit policy status. Valid values:
`creating`;
`running`,
`paused`;
`failed`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Database instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Creation time of audit policy in the format of 2019-03-20 17:09:13
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of audit policy in the format of 2019-03-20 17:09:13
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Audit policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Audit rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Audit rule name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Database instance name
Note: This field may return `null`, indicating that no valid value was found.
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * ModifyRoGroupInfo response structure.
 * @class
 */
class ModifyRoGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceConfig request structure.
 * @class
 */
class DescribeDBInstanceConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * The purchasable specifications in a region
 * @class
 */
class CdbZoneDataResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of purchasable specifications
         * @type {Array.<CdbSellConfig> || null}
         */
        this.Configs = null;

        /**
         * List of AZs in purchasable regions
         * @type {Array.<CdbRegionSellConf> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Configs) {
            this.Configs = new Array();
            for (let z in params.Configs) {
                let obj = new CdbSellConfig();
                obj.deserialize(params.Configs[z]);
                this.Configs.push(obj);
            }
        }

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new CdbRegionSellConf();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }

    }
}

/**
 * Instance details
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public network access status. Value range: 0 (not enabled), 1 (enabled), 2 (disabled)
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * AZ information
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Initialization flag. Value range: 0 (not initialized), 1 (initialized)
         * @type {number || null}
         */
        this.InitFlag = null;

        /**
         * VIP information of a read-only instance. This field is exclusive to read-only instances where read-only access is enabled separately
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RoVipInfo || null}
         */
        this.RoVipInfo = null;

        /**
         * Memory capacity in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance status. Valid values: `0` (creating), `1` (running), `4` (isolating), `5` (isolated).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * VPC ID, such as 51102
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Information of a secondary server
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SlaveInfo || null}
         */
        this.SlaveInfo = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Disk capacity in GB
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Auto-renewal flag. Value range: 0 (auto-renewal not enabled), 1 (auto-renewal enabled), 2 (auto-renewal disabled)
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Data replication mode. Valid values: 0 (async), 1 (semi-sync), 2 (strong sync)
         * @type {number || null}
         */
        this.ProtectMode = null;

        /**
         * Details of a read-only group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RoGroup> || null}
         */
        this.RoGroups = null;

        /**
         * Subnet ID, such as 2333
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Instance type. Value range: 1 (primary), 2 (disaster recovery), 3 (read-only)
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region information
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * AZ deployment mode. Valid values: 0 (single-AZ), 1 (multi-AZ)
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * Instance task status. 0 - no task; 1 - upgrading; 2 - importing data; 3 - activating secondary; 4 - enabling public network access; 5 - batch operation in progress; 6 - rolling back; 7 - disabling public network access; 8 - changing password; 9 - renaming instance; 10 - restarting; 12 - migrating self-built instance; 13 - dropping table; 14 - creating and syncing disaster recovery instance; 15 - pending upgrade and switch; 16 - upgrade and switch in progress; 17 - upgrade and switch completed
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Details of a primary instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MasterInfo || null}
         */
        this.MasterInfo = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Kernel version
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Details of a disaster recovery instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DrInfo> || null}
         */
        this.DrInfo = null;

        /**
         * Public domain name
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * Public network port number
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * Billing type
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Port number
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Whether the disk write is locked (It depends on whether the instance data in disk exceeds its quota). Valid values: `0` (unlocked), `1` (locked).
         * @type {number || null}
         */
        this.CdbError = null;

        /**
         * VPC descriptor, such as "vpc-5v8wn9mg"
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Subnet descriptor, such as "subnet-1typ0s7d"
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Physical ID
         * @type {string || null}
         */
        this.PhysicalId = null;

        /**
         * Number of cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Queries per second
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Physical machine model
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * Placement group ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * AZ ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of nodes
         * @type {number || null}
         */
        this.InstanceNodes = null;

        /**
         * List of tags
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TagInfoItem> || null}
         */
        this.TagList = null;

        /**
         * Engine type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EngineType = null;

        /**
         * Maximum delay threshold
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxDelayTime = null;

        /**
         * Instance disk type, which is returned only for the instances of cloud disk edition. Valid values: `CLOUD_SSD` (SSD), `CLOUD_HSSD` (Enhanced SSD).
         * @type {string || null}
         */
        this.DiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;

        if (params.RoVipInfo) {
            let obj = new RoVipInfo();
            obj.deserialize(params.RoVipInfo)
            this.RoVipInfo = obj;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.SlaveInfo) {
            let obj = new SlaveInfo();
            obj.deserialize(params.SlaveInfo)
            this.SlaveInfo = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.ProtectMode = 'ProtectMode' in params ? params.ProtectMode : null;

        if (params.RoGroups) {
            this.RoGroups = new Array();
            for (let z in params.RoGroups) {
                let obj = new RoGroup();
                obj.deserialize(params.RoGroups[z]);
                this.RoGroups.push(obj);
            }
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

        if (params.MasterInfo) {
            let obj = new MasterInfo();
            obj.deserialize(params.MasterInfo)
            this.MasterInfo = obj;
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.DrInfo) {
            this.DrInfo = new Array();
            for (let z in params.DrInfo) {
                let obj = new DrInfo();
                obj.deserialize(params.DrInfo[z]);
                this.DrInfo.push(obj);
            }
        }
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CdbError = 'CdbError' in params ? params.CdbError : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.PhysicalId = 'PhysicalId' in params ? params.PhysicalId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.InstanceNodes = 'InstanceNodes' in params ? params.InstanceNodes : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfoItem();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.EngineType = 'EngineType' in params ? params.EngineType : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

    }
}

/**
 * OfflineIsolatedInstances response structure.
 * @class
 */
class OfflineIsolatedInstancesResponse extends  AbstractModel {
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
 * Slave server information
 * @class
 */
class SlaveInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of secondary server 1
         * @type {SlaveInstanceInfo || null}
         */
        this.First = null;

        /**
         * Information of secondary server 2
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SlaveInstanceInfo || null}
         */
        this.Second = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.First) {
            let obj = new SlaveInstanceInfo();
            obj.deserialize(params.First)
            this.First = obj;
        }

        if (params.Second) {
            let obj = new SlaveInstanceInfo();
            obj.deserialize(params.Second)
            this.Second = obj;
        }

    }
}

/**
 * UpgradeCDBProxyVersion request structure.
 * @class
 */
class UpgradeCDBProxyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database proxy ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Current version of database proxy
         * @type {string || null}
         */
        this.SrcProxyVersion = null;

        /**
         * Target version of database proxy
         * @type {string || null}
         */
        this.DstProxyVersion = null;

        /**
         * Upgrade time. Valid values: `nowTime` (upgrade immediately), `timeWindow` (upgrade during instance maintenance time)
         * @type {string || null}
         */
        this.UpgradeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.SrcProxyVersion = 'SrcProxyVersion' in params ? params.SrcProxyVersion : null;
        this.DstProxyVersion = 'DstProxyVersion' in params ? params.DstProxyVersion : null;
        this.UpgradeTime = 'UpgradeTime' in params ? params.UpgradeTime : null;

    }
}

/**
 * DescribeProxyCustomConf response structure.
 * @class
 */
class DescribeProxyCustomConfResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried proxy configurations
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Proxy configuration details
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {CustomConfig || null}
         */
        this.CustomConf = null;

        /**
         * Weight rule
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Rule || null}
         */
        this.WeightRule = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.CustomConf) {
            let obj = new CustomConfig();
            obj.deserialize(params.CustomConf)
            this.CustomConf = obj;
        }

        if (params.WeightRule) {
            let obj = new Rule();
            obj.deserialize(params.WeightRule)
            this.WeightRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupConfig response structure.
 * @class
 */
class ModifyBackupConfigResponse extends  AbstractModel {
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
 * UpgradeCDBProxyVersion response structure.
 * @class
 */
class UpgradeCDBProxyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async request ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VIP information of the read-only instance
 * @class
 */
class RoVipInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VIP status of the read-only instance
         * @type {number || null}
         */
        this.RoVipStatus = null;

        /**
         * VPC subnet of the read-only instance
         * @type {number || null}
         */
        this.RoSubnetId = null;

        /**
         * VPC of the read-only instance
         * @type {number || null}
         */
        this.RoVpcId = null;

        /**
         * VIP port number of the read-only instance
         * @type {number || null}
         */
        this.RoVport = null;

        /**
         * VIP of the read-only instance
         * @type {string || null}
         */
        this.RoVip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoVipStatus = 'RoVipStatus' in params ? params.RoVipStatus : null;
        this.RoSubnetId = 'RoSubnetId' in params ? params.RoSubnetId : null;
        this.RoVpcId = 'RoVpcId' in params ? params.RoVpcId : null;
        this.RoVport = 'RoVport' in params ? params.RoVport : null;
        this.RoVip = 'RoVip' in params ? params.RoVip : null;

    }
}

/**
 * DescribeCdbZoneConfig response structure.
 * @class
 */
class DescribeCdbZoneConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of purchasable specification and region information
         * @type {CdbZoneDataResult || null}
         */
        this.DataResult = null;

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

        if (params.DataResult) {
            let obj = new CdbZoneDataResult();
            obj.deserialize(params.DataResult)
            this.DataResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName response structure.
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
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
 * DescribeBackupDownloadRestriction response structure.
 * @class
 */
class DescribeBackupDownloadRestrictionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `NoLimit` (backups can be downloaded over both private and public networks with any IPs), `LimitOnlyIntranet` (backups can be downloaded over the private network with any private IPs), `Customize` (backups can be downloaded over specified VPCs with specified IPs). The `LimitVpc` and `LimitIp` parameters are valid only when this parameter is set to `Customize`.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Valid value: `In` (backups can only be downloaded over the VPCs specified in `LimitVpc`).
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Valid values: `In` (backups can only be downloaded with the IPs specified in `LimitIp`), `NotIn` (backups cannot be downloaded with the IPs specified in `LimitIp`).
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPCs used to restrict backup download.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * IPs used to restrict backup download.
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

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
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPassword request structure.
 * @class
 */
class ModifyAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New password of the database account. It can only contain 8-64 characters and must contain at least two of the following types of characters: letters, digits, and special characters (_+-&=!@#$%^*()).
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * TencentDB account
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }

    }
}

/**
 * Connection pool configuration of database proxy
 * @class
 */
class PoolConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection pool type. Valid value: `SessionConnectionPool` (session-level connection pool)
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ConnectionPoolType = null;

        /**
         * Maximum value of connection persistence timeout in seconds
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MaxPoolConnectionTimeOut = null;

        /**
         * Minimum value of connection persistence timeout in seconds
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MinPoolConnectionTimeOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionPoolType = 'ConnectionPoolType' in params ? params.ConnectionPoolType : null;
        this.MaxPoolConnectionTimeOut = 'MaxPoolConnectionTimeOut' in params ? params.MaxPoolConnectionTimeOut : null;
        this.MinPoolConnectionTimeOut = 'MinPoolConnectionTimeOut' in params ? params.MinPoolConnectionTimeOut : null;

    }
}

/**
 * DescribeAuditPolicies request structure.
 * @class
 */
class DescribeAuditPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Audit policy ID.
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Audit policy name. Fuzzy match query is supported.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Number of entries per page. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Audit rule ID, which can be used to query its associated audit policies.
Note: At least one of the parameters (“RuleId”, “PolicyId”, PolicyId”, or “PolicyName”) must be passed in.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Instance name
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeTables request structure.
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Record offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned for a single request. Default value: 20. Maximum value: 2,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Regular expression for matching table names, which complies with the rules at MySQL's official website
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
        this.Database = 'Database' in params ? params.Database : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TableRegexp = 'TableRegexp' in params ? params.TableRegexp : null;

    }
}

/**
 * Estimated time of instance restart
 * @class
 */
class InstanceRebootTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Estimated restart time
         * @type {number || null}
         */
        this.TimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeInSeconds = 'TimeInSeconds' in params ? params.TimeInSeconds : null;

    }
}

/**
 * ModifyInstancePasswordComplexity request structure.
 * @class
 */
class ModifyInstancePasswordComplexityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of parameters to be modified. Every element is a combination of `Name` (parameter name) and `CurrentValue` (new value). Valid values for `Name` of version 8.0: `validate_password.policy`, `validate_password.lengt`, `validate_password.mixed_case_coun`, `validate_password.number_coun`, `validate_password.special_char_count`. Valid values for `Name` of version 5.6 and 5.7: `validate_password_polic`, `validate_password_lengt` `validate_password_mixed_case_coun`, `validate_password_number_coun`, `validate_password_special_char_coun`.
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * RenewDBInstance response structure.
 * @class
 */
class RenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of an instance.
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * Database name and character set
         * @type {Array.<DatabasesWithCharacterLists> || null}
         */
        this.DatabaseList = null;

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
        this.Items = 'Items' in params ? params.Items : null;

        if (params.DatabaseList) {
            this.DatabaseList = new Array();
            for (let z in params.DatabaseList) {
                let obj = new DatabasesWithCharacterLists();
                obj.deserialize(params.DatabaseList[z]);
                this.DatabaseList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParamTemplate request structure.
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template name (up to 64 characters)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description (up to 255 characters)
         * @type {string || null}
         */
        this.Description = null;

        /**
         * List of parameters.
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * AddTimeWindow response structure.
 * @class
 */
class AddTimeWindowResponse extends  AbstractModel {
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
 * DescribeRoGroups response structure.
 * @class
 */
class DescribeRoGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group information array. An instance can be associated with multiple RO groups.
         * @type {Array.<RoGroup> || null}
         */
        this.RoGroups = null;

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

        if (params.RoGroups) {
            this.RoGroups = new Array();
            for (let z in params.RoGroups) {
                let obj = new RoGroup();
                obj.deserialize(params.RoGroups[z]);
                this.RoGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuditRules response structure.
 * @class
 */
class DescribeAuditRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible audit rules
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Audit rule details
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<AuditRule> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AuditRule();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Proxy group information
 * @class
 */
class BaseGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy group ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Number of proxy nodes
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Proxy group status. Valid values: `init` (delivering), `online` (active), `offline` (inactive), `destroy` (destoryed)
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Whether read/write separation is enabled
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.OpenRW = null;

        /**
         * Current proxy version
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * Target version to which the proxy can be upgraded
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.SupportUpgradeProxyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.OpenRW = 'OpenRW' in params ? params.OpenRW : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.SupportUpgradeProxyVersion = 'SupportUpgradeProxyVersion' in params ? params.SupportUpgradeProxyVersion : null;

    }
}

/**
 * DescribeBinlogBackupOverview response structure.
 * @class
 */
class DescribeBinlogBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total capacity of log backups in bytes (including remote log backups)
         * @type {number || null}
         */
        this.BinlogBackupVolume = null;

        /**
         * Total number of log backups (include remote log backups)
         * @type {number || null}
         */
        this.BinlogBackupCount = null;

        /**
         * Capacity of remote log backups in bytes
         * @type {number || null}
         */
        this.RemoteBinlogVolume = null;

        /**
         * Number of remote backups
         * @type {number || null}
         */
        this.RemoteBinlogCount = null;

        /**
         * Capacity of archive log backups in bytes
         * @type {number || null}
         */
        this.BinlogArchiveVolume = null;

        /**
         * Number of archived log backups
         * @type {number || null}
         */
        this.BinlogArchiveCount = null;

        /**
         * Log backup capacity of standard storage in bytes
         * @type {number || null}
         */
        this.BinlogStandbyVolume = null;

        /**
         * Number of log backups of standard storage
         * @type {number || null}
         */
        this.BinlogStandbyCount = null;

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
        this.BinlogBackupVolume = 'BinlogBackupVolume' in params ? params.BinlogBackupVolume : null;
        this.BinlogBackupCount = 'BinlogBackupCount' in params ? params.BinlogBackupCount : null;
        this.RemoteBinlogVolume = 'RemoteBinlogVolume' in params ? params.RemoteBinlogVolume : null;
        this.RemoteBinlogCount = 'RemoteBinlogCount' in params ? params.RemoteBinlogCount : null;
        this.BinlogArchiveVolume = 'BinlogArchiveVolume' in params ? params.BinlogArchiveVolume : null;
        this.BinlogArchiveCount = 'BinlogArchiveCount' in params ? params.BinlogArchiveCount : null;
        this.BinlogStandbyVolume = 'BinlogStandbyVolume' in params ? params.BinlogStandbyVolume : null;
        this.BinlogStandbyCount = 'BinlogStandbyCount' in params ? params.BinlogStandbyCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCDBProxyConnectionPool request structure.
 * @class
 */
class ModifyCDBProxyConnectionPoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database proxy ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

        /**
         * Whether to enable the connection pool. Valid values: `true` (enable);
                             `false` (disable).
         * @type {boolean || null}
         */
        this.OpenConnectionPool = null;

        /**
         * Connection pool type.
You can use the `DescribeProxyConnectionPoolConf` API to query the connection pool type.
         * @type {string || null}
         */
        this.ConnectionPoolType = null;

        /**
         * Connection persistence timeout in seconds
         * @type {number || null}
         */
        this.PoolConnectionTimeOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;
        this.OpenConnectionPool = 'OpenConnectionPool' in params ? params.OpenConnectionPool : null;
        this.ConnectionPoolType = 'ConnectionPoolType' in params ? params.ConnectionPoolType : null;
        this.PoolConnectionTimeOut = 'PoolConnectionTimeOut' in params ? params.PoolConnectionTimeOut : null;

    }
}

/**
 * ModifyTimeWindow response structure.
 * @class
 */
class ModifyTimeWindowResponse extends  AbstractModel {
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
 * InitDBInstances request structure.
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * New password of the instance. Rule: It can only contain 8-64 characters and must contain at least two of the following types of characters: letters, digits, and special characters (!@#$%^*()).
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * List of instance parameters. Currently, "character_set_server" and "lower_case_table_names" are supported, whose value ranges are ["utf8","latin1","gbk","utf8mb4"] and ["0","1"], respectively.
         * @type {Array.<ParamInfo> || null}
         */
        this.Parameters = null;

        /**
         * Instance port. Value range: [1024, 65535].
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new ParamInfo();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }
        this.Vport = 'Vport' in params ? params.Vport : null;

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
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateParamTemplate request structure.
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * MySQL version number.
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Source parameter template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * List of parameters.
         * @type {Array.<Parameter> || null}
         */
        this.ParamList = null;

        /**
         * Type of the default parameter template. Valid values: `HIGH_STABILITY` (high-stability template), `HIGH_PERFORMANCE` (high-performance template).
         * @type {string || null}
         */
        this.TemplateType = null;

        /**
         * Instance engine type. Valid values: `InnoDB` (default), `RocksDB`.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new Parameter();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;
        this.EngineType = 'EngineType' in params ? params.EngineType : null;

    }
}

/**
 * DescribeBackupEncryptionStatus request structure.
 * @class
 */
class DescribeBackupEncryptionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-XXXX, which is the same as that displayed in the TencentDB console.
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
 * IsolateDBInstance request structure.
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * ModifyBackupDownloadRestriction response structure.
 * @class
 */
class ModifyBackupDownloadRestrictionResponse extends  AbstractModel {
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
 * ModifyTimeWindow request structure.
 * @class
 */
class ModifyTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time period available for maintenance after modification in the format of 10:00-12:00. Each period lasts from half an hour to three hours, with the start time and end time aligned by half-hour. Up to two time periods can be set. Start and end time range: [00:00, 24:00].
         * @type {Array.<string> || null}
         */
        this.TimeRanges = null;

        /**
         * Specifies for which day to modify the time period. Value range: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. If it is not specified or is left blank, the time period will be modified for every day by default.
         * @type {Array.<string> || null}
         */
        this.Weekdays = null;

        /**
         * Data delay threshold. It takes effect only for source instance and disaster recovery instance. Default value: 10.
         * @type {number || null}
         */
        this.MaxDelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TimeRanges = 'TimeRanges' in params ? params.TimeRanges : null;
        this.Weekdays = 'Weekdays' in params ? params.Weekdays : null;
        this.MaxDelayTime = 'MaxDelayTime' in params ? params.MaxDelayTime : null;

    }
}

/**
 * Average instance CPU utilization
 * @class
 */
class DeviceCpuRateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU core number
         * @type {number || null}
         */
        this.CpuCore = null;

        /**
         * CPU utilization
         * @type {Array.<number> || null}
         */
        this.Rate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuCore = 'CpuCore' in params ? params.CpuCore : null;
        this.Rate = 'Rate' in params ? params.Rate : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database account, including username and domain name.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Global permission. Valid values: "SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "PROCESS", "DROP", "REFERENCES", "INDEX", "ALTER", "SHOW DATABASES", "CREATE TEMPORARY TABLES", "LOCK TABLES", "EXECUTE", "CREATE VIEW", "SHOW VIEW", "CREATE ROUTINE", "ALTER ROUTINE", "EVENT", "TRIGGER", "CREATE USER", "RELOAD", "REPLICATION CLIENT", "REPLICATION SLAVE".
Note: When “ModifyAction” is empty, if `GlobalPrivileges` is not passed in, it indicates the global permission will become ineffective.
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * Database permission. Valid values: "SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "REFERENCES", "INDEX", "ALTER", "CREATE TEMPORARY TABLES", "LOCK TABLES", "EXECUTE", "CREATE VIEW", "SHOW VIEW", "CREATE ROUTINE", "ALTER ROUTINE", "EVENT", "TRIGGER".
Note: When “ModifyAction” is empty, if `DatabasePrivileges` is not passed in, it indicates the permission of the database will become ineffective.
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * Table permission in the database. Valid values: "SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "REFERENCES", "INDEX", "ALTER", "CREATE VIEW", "SHOW VIEW", "TRIGGER".
Note: When “ModifyAction” is empty, if `TablePrivileges` is not passed in, it indicates the permission of the table will become ineffective.
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * Column permission in the table. Valid values: "SELECT", "INSERT", "UPDATE", "REFERENCES".
Note: When “ModifyAction” is empty, if `ColumnPrivileges` is not passed in, it indicates the permission of the column will become ineffective.
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

        /**
         * When this parameter is not empty, it indicates that the permission will be modified. Valid values: `grant` (grant permission), `revoke` (revoke permission)
         * @type {string || null}
         */
        this.ModifyAction = null;

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
        this.ModifyAction = 'ModifyAction' in params ? params.ModifyAction : null;

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
         * New account name
         * @type {string || null}
         */
        this.User = null;

        /**
         * New account domain name
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
 * CreateBackup request structure.
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target backup method. Valid values: `logical` (logical cold backup), `physical` (physical cold backup), `snapshot` (snapshot backup). Basic Edition instances only support snapshot backups.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Information of the table to be backed up. If this parameter is not set, the entire instance will be backed up by default. It can be set only in logical backup (i.e., BackupMethod = logical). The specified table must exist; otherwise, backup may fail.
For example, if you want to backup tb1 and tb2 in db1 and the entire db2, you should set the parameter as [{"Db": "db1", "Table": "tb1"}, {"Db": "db1", "Table": "tb2"}, {"Db": "db2"} ].
         * @type {Array.<BackupItem> || null}
         */
        this.BackupDBTableList = null;

        /**
         * Manual backup alias
         * @type {string || null}
         */
        this.ManualBackupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;

        if (params.BackupDBTableList) {
            this.BackupDBTableList = new Array();
            for (let z in params.BackupDBTableList) {
                let obj = new BackupItem();
                obj.deserialize(params.BackupDBTableList[z]);
                this.BackupDBTableList.push(obj);
            }
        }
        this.ManualBackupName = 'ManualBackupName' in params ? params.ManualBackupName : null;

    }
}

/**
 * OpenDBInstanceEncryption request structure.
 * @class
 */
class OpenDBInstanceEncryptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Custom key ID, which is the unique CMK ID. If this value is empty, the key KMS-CDB auto-generated by Tencent Cloud will be used.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Custom storage region, such as ap-guangzhou. When `KeyId` is not empty, this parameter is required.
         * @type {string || null}
         */
        this.KeyRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;

    }
}

/**
 * Account details
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account remarks
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * Account domain name
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Account name
         * @type {string || null}
         */
        this.User = null;

        /**
         * Account information modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Password modification time
         * @type {string || null}
         */
        this.ModifyPasswordTime = null;

        /**
         * This parameter is deprecated.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The maximum number of instance connections supported by an account
         * @type {number || null}
         */
        this.MaxUserConnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.User = 'User' in params ? params.User : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.ModifyPasswordTime = 'ModifyPasswordTime' in params ? params.ModifyPasswordTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

    }
}

/**
 * DescribeDBInstanceCharset request structure.
 * @class
 */
class DescribeDBInstanceCharsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * DescribeRemoteBackupConfig response structure.
 * @class
 */
class DescribeRemoteBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remote backup retention period in days
         * @type {number || null}
         */
        this.ExpireDays = null;

        /**
         * Remote data backup. Valid values:`off` (disable), `on` (enable).
         * @type {string || null}
         */
        this.RemoteBackupSave = null;

        /**
         * Remote log backup. Valid values: `off` (disable), `on` (enable). Only when the parameter `RemoteBackupSave` is `on`, the `RemoteBinlogSave` parameter can be set to `on`.
         * @type {string || null}
         */
        this.RemoteBinlogSave = null;

        /**
         * List of configured remote backup regions
         * @type {Array.<string> || null}
         */
        this.RemoteRegion = null;

        /**
         * List of remote backup regions
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

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
        this.ExpireDays = 'ExpireDays' in params ? params.ExpireDays : null;
        this.RemoteBackupSave = 'RemoteBackupSave' in params ? params.RemoteBackupSave : null;
        this.RemoteBinlogSave = 'RemoteBinlogSave' in params ? params.RemoteBinlogSave : null;
        this.RemoteRegion = 'RemoteRegion' in params ? params.RemoteRegion : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancePasswordComplexity response structure.
 * @class
 */
class ModifyInstancePasswordComplexityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID, which can be used to query task progress.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Default retention policy of local binlog.
 * @class
 */
class LocalBinlogConfigDefault extends  AbstractModel {
    constructor(){
        super();

        /**
         * Retention period of local binlog. Value range: [72,168].
         * @type {number || null}
         */
        this.SaveHours = null;

        /**
         * Space utilization of local binlog. Value range: [30,50].
         * @type {number || null}
         */
        this.MaxUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaveHours = 'SaveHours' in params ? params.SaveHours : null;
        this.MaxUsage = 'MaxUsage' in params ? params.MaxUsage : null;

    }
}

/**
 * Memory monitoring information of the physical server where the instance is located
 * @class
 */
class DeviceMemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total memory size in KB, which is the value of `total` in the `Mem:` in the `free` command
         * @type {Array.<number> || null}
         */
        this.Total = null;

        /**
         * Used memory size in KB, which is the value of `used` in the `Mem:` row in the `free` command
         * @type {Array.<number> || null}
         */
        this.Used = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Auto-renewal flag. Value range: 0 (auto-renewal not enabled), 1 (auto-renewal enabled).
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * OpenAuditService request structure.
 * @class
 */
class OpenAuditServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB for MySQL instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Retention period of audit logs. Valid values:
7: seven days (a week);
30: 30 days (a month);
180: 180 days (six months);
365: 365 days (a year);
1095: 1095 days (three years);
1825: 1825 days (five years).
         * @type {number || null}
         */
        this.LogExpireDay = null;

        /**
         * Retention period of high-frequency audit logs. Valid values:
7: seven days (a week);
30: 30 days (a month);
180: 180 days (six months);
365: 365 days (a year);
1095: 1095 days (three years);
1825: 1825 days (five years).
         * @type {number || null}
         */
        this.HighLogExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogExpireDay = 'LogExpireDay' in params ? params.LogExpireDay : null;
        this.HighLogExpireDay = 'HighLogExpireDay' in params ? params.HighLogExpireDay : null;

    }
}

/**
 * Analysis result of an audit log
 * @class
 */
class AuditLogAggregationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Aggregation dimension
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AggregationField = null;

        /**
         * Result set of an aggregation bucket
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Bucket> || null}
         */
        this.Buckets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AggregationField = 'AggregationField' in params ? params.AggregationField : null;

        if (params.Buckets) {
            this.Buckets = new Array();
            for (let z in params.Buckets) {
                let obj = new Bucket();
                obj.deserialize(params.Buckets[z]);
                this.Buckets.push(obj);
            }
        }

    }
}

/**
 * ModifyBackupConfig request structure.
 * @class
 */
class ModifyBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup file retention period in days. Value range: 7-1830.
         * @type {number || null}
         */
        this.ExpireDays = null;

        /**
         * (This parameter will be disused. The `BackupTimeWindow` parameter is recommended.) Backup time range in the format of 02:00-06:00, with the start time and end time on the hour. Valid values: 00:00-12:00, 02:00-06:00, 06:00-10:00, 10:00-14:00, 14:00-18:00, 18:00-22:00, 22:00-02:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Automatic backup mode. Only `physical` (physical cold backup) is supported
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Binlog retention period in days. Value range: 7-1830. It can’t be greater than the retention period of backup files.
         * @type {number || null}
         */
        this.BinlogExpireDays = null;

        /**
         * Backup time window; for example, to set up backup between 10:00 and 14:00 on every Tuesday and Sunday, you should set this parameter as follows: {"Monday": "", "Tuesday": "10:00-14:00", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": "10:00-14:00"} (Note: You can set up backup on different days, but the backup time windows need to be the same. If this field is set, the `StartTime` field will be ignored)
         * @type {CommonTimeWindow || null}
         */
        this.BackupTimeWindow = null;

        /**
         * Switch for periodic archive. Valid values: `off` (disable), `on` (enable). Default value:`off`. When you enable the periodic archive policy for the first time, you need to enter the `BackupPeriodSaveDays`, `BackupPeriodSaveInterval`, `BackupPeriodSaveCount`, and `StartBackupPeriodSaveDate` parameters; otherwise, the policy will not take effect.
         * @type {string || null}
         */
        this.EnableBackupPeriodSave = null;

        /**
         * Switch for long-term backup retention (This field can be ignored, for its feature hasn’t been launched). Valid values: `off` (disable), `on` (enable). Default value: `off`. Once enabled, the parameters (BackupPeriodSaveDays, BackupPeriodSaveInterval, and BackupPeriodSaveCount) will be invalid.
         * @type {string || null}
         */
        this.EnableBackupPeriodLongTermSave = null;

        /**
         * Maximum days of archive backup retention. Valid range: 90-3650. Default value: 1080.
         * @type {number || null}
         */
        this.BackupPeriodSaveDays = null;

        /**
         * Archive backup retention period. Valid values: `weekly` (a week), `monthly` (a month), `quarterly` (a quarter), `yearly` (a year). Default value: `monthly`.
         * @type {string || null}
         */
        this.BackupPeriodSaveInterval = null;

        /**
         * Number of archive backups. Minimum value: `1`, Maximum value: Number of non-archive backups in archive backup retention period. Default value: `1`.
         * @type {number || null}
         */
        this.BackupPeriodSaveCount = null;

        /**
         * The start time in the format of yyyy-mm-dd HH:MM:SS, which is used to enable archive backup retention policy.
         * @type {string || null}
         */
        this.StartBackupPeriodSaveDate = null;

        /**
         * Whether to enable the archive backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBackupArchive = null;

        /**
         * The period (in days) of how long a data backup is retained before being archived, which falls between 180 days and the number of days from the time it is created until it expires.
         * @type {number || null}
         */
        this.BackupArchiveDays = null;

        /**
         * The period (in days) of how long a log backup is retained before being archived, which falls between 180 days and the number of days from the time it is created until it expires.
         * @type {number || null}
         */
        this.BinlogArchiveDays = null;

        /**
         * Whether to enable the archive backup of the log. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBinlogArchive = null;

        /**
         * Whether to enable the standard storage policy for data backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBackupStandby = null;

        /**
         * The period (in days) of how long a data backup is retained before switching to standard storage, which falls between 30 days and the number of days from the time it is created until it expires. If the archive backup is enabled, this period cannot be greater than archive backup period.
         * @type {number || null}
         */
        this.BackupStandbyDays = null;

        /**
         * Whether to enable the standard storage policy for log backup. Valid values: `off` (disable), `on` (enable). Default value: `off`.
         * @type {string || null}
         */
        this.EnableBinlogStandby = null;

        /**
         * The period (in days) of how long a log backup is retained before switching to standard storage, which falls between 30 days and the number of days from the time it is created until it expires. If the archive backup is enabled, this period cannot be greater than archive backup period.
         * @type {number || null}
         */
        this.BinlogStandbyDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ExpireDays = 'ExpireDays' in params ? params.ExpireDays : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BinlogExpireDays = 'BinlogExpireDays' in params ? params.BinlogExpireDays : null;

        if (params.BackupTimeWindow) {
            let obj = new CommonTimeWindow();
            obj.deserialize(params.BackupTimeWindow)
            this.BackupTimeWindow = obj;
        }
        this.EnableBackupPeriodSave = 'EnableBackupPeriodSave' in params ? params.EnableBackupPeriodSave : null;
        this.EnableBackupPeriodLongTermSave = 'EnableBackupPeriodLongTermSave' in params ? params.EnableBackupPeriodLongTermSave : null;
        this.BackupPeriodSaveDays = 'BackupPeriodSaveDays' in params ? params.BackupPeriodSaveDays : null;
        this.BackupPeriodSaveInterval = 'BackupPeriodSaveInterval' in params ? params.BackupPeriodSaveInterval : null;
        this.BackupPeriodSaveCount = 'BackupPeriodSaveCount' in params ? params.BackupPeriodSaveCount : null;
        this.StartBackupPeriodSaveDate = 'StartBackupPeriodSaveDate' in params ? params.StartBackupPeriodSaveDate : null;
        this.EnableBackupArchive = 'EnableBackupArchive' in params ? params.EnableBackupArchive : null;
        this.BackupArchiveDays = 'BackupArchiveDays' in params ? params.BackupArchiveDays : null;
        this.BinlogArchiveDays = 'BinlogArchiveDays' in params ? params.BinlogArchiveDays : null;
        this.EnableBinlogArchive = 'EnableBinlogArchive' in params ? params.EnableBinlogArchive : null;
        this.EnableBackupStandby = 'EnableBackupStandby' in params ? params.EnableBackupStandby : null;
        this.BackupStandbyDays = 'BackupStandbyDays' in params ? params.BackupStandbyDays : null;
        this.EnableBinlogStandby = 'EnableBinlogStandby' in params ? params.EnableBinlogStandby : null;
        this.BinlogStandbyDays = 'BinlogStandbyDays' in params ? params.BinlogStandbyDays : null;

    }
}

/**
 * DescribeSlowLogData request structure.
 * @class
 */
class DescribeSlowLogDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start timestamp, such as 1585142640.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End timestamp, such as 1585142640.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Client `Host` list.
         * @type {Array.<string> || null}
         */
        this.UserHosts = null;

        /**
         * Client username list.
         * @type {Array.<string> || null}
         */
        this.UserNames = null;

        /**
         * Accessed database list.
         * @type {Array.<string> || null}
         */
        this.DataBases = null;

        /**
         * Sort by field. Valid values: Timestamp, QueryTime, LockTime, RowsExamined, RowsSent.
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * Sorting order. Valid values: ASC (ascending), DESC (descending).
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of results per page in paginated queries. Default value: 100. Maximum value: 400.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * This parameter is valid only for source or disaster recovery instances. Valid value: `slave`, which indicates pulling logs from the replica.
         * @type {string || null}
         */
        this.InstType = null;

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
        this.UserHosts = 'UserHosts' in params ? params.UserHosts : null;
        this.UserNames = 'UserNames' in params ? params.UserNames : null;
        this.DataBases = 'DataBases' in params ? params.DataBases : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstType = 'InstType' in params ? params.InstType : null;

    }
}

/**
 * Database name and character set
 * @class
 */
class DatabasesWithCharacterLists extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Character set
         * @type {string || null}
         */
        this.CharacterSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.CharacterSet = 'CharacterSet' in params ? params.CharacterSet : null;

    }
}

/**
 * SQL file information
 * @class
 */
class SqlFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Upload time
         * @type {string || null}
         */
        this.UploadTime = null;

        /**
         * Upload progress
         * @type {UploadInfo || null}
         */
        this.UploadInfo = null;

        /**
         * Filename
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * File size in bytes
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Whether upload is finished. Valid values: 0 (not completed), 1 (completed)
         * @type {number || null}
         */
        this.IsUploadFinished = null;

        /**
         * File ID
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UploadTime = 'UploadTime' in params ? params.UploadTime : null;

        if (params.UploadInfo) {
            let obj = new UploadInfo();
            obj.deserialize(params.UploadInfo)
            this.UploadInfo = obj;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.IsUploadFinished = 'IsUploadFinished' in params ? params.IsUploadFinished : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * ModifyDBInstanceVipVport request structure.
 * @class
 */
class ModifyDBInstanceVipVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv, cdbro-c2nl9rpv, or cdbrg-c3nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [DescribeDBInstances](https://www.tencentcloud.com/document/product/236/15872) API to query the ID, which is the value of the `InstanceId` output parameter.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target IP. Either this parameter or `DstPort` must be passed in.
         * @type {string || null}
         */
        this.DstIp = null;

        /**
         * Target port number. Value range: 1024-65535. Either this parameter or `DstIp` must be passed in.
         * @type {number || null}
         */
        this.DstPort = null;

        /**
         * Unified VPC ID
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Unified subnet ID
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Repossession duration in hours for old IP in the original network when changing from classic network to VPC or changing the VPC subnet. Value range: 0–168. Default value: `24`.
         * @type {number || null}
         */
        this.ReleaseDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DstIp = 'DstIp' in params ? params.DstIp : null;
        this.DstPort = 'DstPort' in params ? params.DstPort : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.ReleaseDuration = 'ReleaseDuration' in params ? params.ReleaseDuration : null;

    }
}

/**
 * DescribeRemoteBackupConfig request structure.
 * @class
 */
class DescribeRemoteBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
 * ModifyDBInstanceProject response structure.
 * @class
 */
class ModifyDBInstanceProjectResponse extends  AbstractModel {
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
 * DescribeDBImportRecords request structure.
 * @class
 */
class DescribeDBImportRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time in the format of yyyy-MM-dd HH:mm:ss, such as 2016-01-01 00:00:01.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time in the format of yyyy-MM-dd HH:mm:ss, such as 2016-01-01 23:59:59.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination parameter indicating the offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter indicating the number of results to be returned for a single request. Value range: 1-100. Default value: 20.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDBImportJob response structure.
 * @class
 */
class CreateDBImportJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagsOfInstanceIds request structure.
 * @class
 */
class DescribeTagsOfInstanceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Read/Write separation information of the proxy
 * @class
 */
class RWInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.InstCount = null;

        /**
         * Assignment mode of read/write weights
Valid values: `system` (auto-assigned), `custom`
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.WeightMode = null;

        /**
         * Whether to remove delayed read-only instances from the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.IsKickOut = null;

        /**
         * The minimum number of read-only instances allowed by the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MinCount = null;

        /**
         * Delay threshold
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.MaxDelay = null;

        /**
         * Whether to enable failover
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.FailOver = null;

        /**
         * Whether to automatically add newly created read-only instances to the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {boolean || null}
         */
        this.AutoAddRo = null;

        /**
         * Information of instances in the proxy group
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {RWInstanceInfo || null}
         */
        this.RWInstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstCount = 'InstCount' in params ? params.InstCount : null;
        this.WeightMode = 'WeightMode' in params ? params.WeightMode : null;
        this.IsKickOut = 'IsKickOut' in params ? params.IsKickOut : null;
        this.MinCount = 'MinCount' in params ? params.MinCount : null;
        this.MaxDelay = 'MaxDelay' in params ? params.MaxDelay : null;
        this.FailOver = 'FailOver' in params ? params.FailOver : null;
        this.AutoAddRo = 'AutoAddRo' in params ? params.AutoAddRo : null;

        if (params.RWInstInfo) {
            let obj = new RWInstanceInfo();
            obj.deserialize(params.RWInstInfo)
            this.RWInstInfo = obj;
        }

    }
}

/**
 * OpenWanService request structure.
 * @class
 */
class OpenWanServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * DeleteTimeWindow request structure.
 * @class
 */
class DeleteTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * Address
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Port
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * VPC ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.UniqSubnet = null;

        /**
         * Description
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnet = 'UniqSubnet' in params ? params.UniqSubnet : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

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
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<InstanceInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParamTemplateInfo request structure.
 * @class
 */
class DescribeParamTemplateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeBackupDownloadRestriction request structure.
 * @class
 */
class DescribeBackupDownloadRestrictionRequest extends  AbstractModel {
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
 * InitDBInstances response structure.
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of async task request IDs, which can be used to query the execution results of async tasks.
         * @type {Array.<string> || null}
         */
        this.AsyncRequestIds = null;

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
        this.AsyncRequestIds = 'AsyncRequestIds' in params ? params.AsyncRequestIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataBackupOverview request structure.
 * @class
 */
class DescribeDataBackupOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TencentDB product type to be queried. Currently, only `mysql` is supported.
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
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeParamTemplateInfo response structure.
 * @class
 */
class DescribeParamTemplateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Database engine version specified in the parameter template
         * @type {string || null}
         */
        this.EngineVersion = null;

        /**
         * Number of parameters in the parameter template
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter details
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Type of the parameter template. Valid values: `HIGH_STABILITY` (high-stability template), `HIGH_PERFORMANCE` (high-performance template).
         * @type {string || null}
         */
        this.TemplateType = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of an instance task.
         * @type {Array.<TaskDetail> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new TaskDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Array of instance IDs in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * DescribeDBInstanceInfo request structure.
 * @class
 */
class DescribeDBInstanceInfoRequest extends  AbstractModel {
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
 * VPCs used to restrict backup download
 * @class
 */
class BackupLimitVpcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region where the backup download restrictions take effect. It must be the same as the common request parameter `Region` of the API.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of VPCs used to restrict backup download
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

    }
}

/**
 * ModifyDBInstanceProject request structure.
 * @class
 */
class ModifyDBInstanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance IDs in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.NewProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.NewProjectId = 'NewProjectId' in params ? params.NewProjectId : null;

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
         * Security group ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * List of instance IDs, which is an array of one or more instance IDs.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * This parameter takes effect only when the IDs of read-only replicas are passed in. If this parameter is set to `False` or left empty, the security group will be unbound from the RO groups of these read-only replicas. If this parameter is set to `True`, the security group will be unbound from the read-only replicas themselves.
         * @type {boolean || null}
         */
        this.ForReadonlyInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForReadonlyInstance = 'ForReadonlyInstance' in params ? params.ForReadonlyInstance : null;

    }
}

/**
 * Information of an aggregation bucket
 * @class
 */
class Bucket extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Number of occurrences of the key value
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DeleteAccounts request structure.
 * @class
 */
class DeleteAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * TencentDB account.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

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

    }
}

/**
 * OfflineIsolatedInstances request structure.
 * @class
 */
class OfflineIsolatedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
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
 * Weight rule
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum weight
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.LessThan = null;

        /**
         * Weight
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LessThan = 'LessThan' in params ? params.LessThan : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * Multi-AZ information
 * @class
 */
class ZoneConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ deployment mode. Value range: 0 (single-AZ), 1 (multi-AZ)
         * @type {Array.<number> || null}
         */
        this.DeployMode = null;

        /**
         * AZ where the primary instance is located
         * @type {Array.<string> || null}
         */
        this.MasterZone = null;

        /**
         * AZ where salve database 1 is located when the instance is deployed in multi-AZ mode
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

        /**
         * AZ where salve database 2 is located when the instance is deployed in multi-AZ mode
         * @type {Array.<string> || null}
         */
        this.BackupZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.BackupZone = 'BackupZone' in params ? params.BackupZone : null;

    }
}

/**
 * DescribeCDBProxy request structure.
 * @class
 */
class DescribeCDBProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Proxy group ID
         * @type {string || null}
         */
        this.ProxyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyGroupId = 'ProxyGroupId' in params ? params.ProxyGroupId : null;

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
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Database user account.
         * @type {string || null}
         */
        this.User = null;

        /**
         * Database account domain name.
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
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * ReloadBalanceProxyNode response structure.
 * @class
 */
class ReloadBalanceProxyNodeResponse extends  AbstractModel {
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
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible accounts
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of eligible accounts
         * @type {Array.<AccountInfo> || null}
         */
        this.Items = null;

        /**
         * The maximum number of instance connections
         * @type {number || null}
         */
        this.MaxUserConnections = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new AccountInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Name of the database for rollback
 * @class
 */
class RollbackDBName extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original database name before rollback
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * New database name after rollback
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewDatabaseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NewDatabaseName = 'NewDatabaseName' in params ? params.NewDatabaseName : null;

    }
}

/**
 * ModifyRemoteBackupConfig request structure.
 * @class
 */
class ModifyRemoteBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Remote data backup. Valid values:`off` (disable), `on` (enable).
         * @type {string || null}
         */
        this.RemoteBackupSave = null;

        /**
         * Remote log backup. Valid values: `off` (disable), `on` (enable). Only when the parameter `RemoteBackupSave` is `on`, the `RemoteBinlogSave` parameter can be set to `on`.
         * @type {string || null}
         */
        this.RemoteBinlogSave = null;

        /**
         * The custom backup region list
         * @type {Array.<string> || null}
         */
        this.RemoteRegion = null;

        /**
         * Remote backup retention period in days
         * @type {number || null}
         */
        this.ExpireDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RemoteBackupSave = 'RemoteBackupSave' in params ? params.RemoteBackupSave : null;
        this.RemoteBinlogSave = 'RemoteBinlogSave' in params ? params.RemoteBinlogSave : null;
        this.RemoteRegion = 'RemoteRegion' in params ? params.RemoteRegion : null;
        this.ExpireDays = 'ExpireDays' in params ? params.ExpireDays : null;

    }
}

/**
 * DeleteBackup request structure.
 * @class
 */
class DeleteBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup task ID, which is the task ID returned by the [TencentDB instance backup creating API](https://intl.cloud.tencent.com/document/api/236/15844?from_cn_redirect=1).
         * @type {number || null}
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * DescribeParamTemplates request structure.
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Engine version. If it is left empty, all parameter templates will be queried.
         * @type {Array.<string> || null}
         */
        this.EngineVersions = null;

        /**
         * Engine type. If it is left empty, all engine types will be queried.
         * @type {Array.<string> || null}
         */
        this.EngineTypes = null;

        /**
         * Template name. If it is left empty, all template names will be queried.
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * Template ID. If it is left empty, all template IDs will be queried.
         * @type {Array.<number> || null}
         */
        this.TemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineVersions = 'EngineVersions' in params ? params.EngineVersions : null;
        this.EngineTypes = 'EngineTypes' in params ? params.EngineTypes : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;

    }
}

/**
 * DescribeInstanceParams request structure.
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * Structured slow log details
 * @class
 */
class SlowLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQL execution time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * SQL execution duration in seconds.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QueryTime = null;

        /**
         * SQL statement.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SqlText = null;

        /**
         * Client address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserHost = null;

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Lock duration in seconds.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * Number of scanned rows.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsExamined = null;

        /**
         * Number of rows in result set.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RowsSent = null;

        /**
         * SQL template.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SqlTemplate = null;

        /**
         * SQL statement MD5.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Md5 = null;

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
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * DescribeDeviceMonitorInfo response structure.
 * @class
 */
class DescribeDeviceMonitorInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU monitoring data of the instance
         * @type {DeviceCpuInfo || null}
         */
        this.Cpu = null;

        /**
         * Memory monitoring data of the instance
         * @type {DeviceMemInfo || null}
         */
        this.Mem = null;

        /**
         * Network monitoring data of the instance
         * @type {DeviceNetInfo || null}
         */
        this.Net = null;

        /**
         * Disk monitoring data of the instance
         * @type {DeviceDiskInfo || null}
         */
        this.Disk = null;

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

        if (params.Cpu) {
            let obj = new DeviceCpuInfo();
            obj.deserialize(params.Cpu)
            this.Cpu = obj;
        }

        if (params.Mem) {
            let obj = new DeviceMemInfo();
            obj.deserialize(params.Mem)
            this.Mem = obj;
        }

        if (params.Net) {
            let obj = new DeviceNetInfo();
            obj.deserialize(params.Net)
            this.Net = obj;
        }

        if (params.Disk) {
            let obj = new DeviceDiskInfo();
            obj.deserialize(params.Disk)
            this.Disk = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance response structure.
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID.
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRollbackRangeTime response structure.
 * @class
 */
class DescribeRollbackRangeTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned parameter information.
         * @type {Array.<InstanceRollbackRangeTime> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceRollbackRangeTime();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRoGroupInfo request structure.
 * @class
 */
class ModifyRoGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID.
         * @type {string || null}
         */
        this.RoGroupId = null;

        /**
         * RO group details.
         * @type {RoGroupAttr || null}
         */
        this.RoGroupInfo = null;

        /**
         * Weights of instances in RO group. If the weighting mode of an RO group is changed to custom mode, this parameter must be set, and a weight value needs to be set for each RO instance.
         * @type {Array.<RoWeightValue> || null}
         */
        this.RoWeightValues = null;

        /**
         * Whether to rebalance the loads of read-only replicas in the RO group. Valid values: `1` (yes), `0` (no). Default value: `0`. If this parameter is set to `1`, connections to the read-only replicas in the RO group will be interrupted transiently. Please ensure that your application has a reconnection mechanism.
         * @type {number || null}
         */
        this.IsBalanceRoLoad = null;

        /**
         * This field has been deprecated.
         * @type {number || null}
         */
        this.ReplicationDelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoGroupId = 'RoGroupId' in params ? params.RoGroupId : null;

        if (params.RoGroupInfo) {
            let obj = new RoGroupAttr();
            obj.deserialize(params.RoGroupInfo)
            this.RoGroupInfo = obj;
        }

        if (params.RoWeightValues) {
            this.RoWeightValues = new Array();
            for (let z in params.RoWeightValues) {
                let obj = new RoWeightValue();
                obj.deserialize(params.RoWeightValues[z]);
                this.RoWeightValues.push(obj);
            }
        }
        this.IsBalanceRoLoad = 'IsBalanceRoLoad' in params ? params.IsBalanceRoLoad : null;
        this.ReplicationDelayTime = 'ReplicationDelayTime' in params ? params.ReplicationDelayTime : null;

    }
}

/**
 * DescribeRollbackRangeTime request structure.
 * @class
 */
class DescribeRollbackRangeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. An instance ID is in the format of cdb-c1nl9rpv, which is the same as the instance ID displayed on the TencentDB Console page.
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
 * Deisolation task result
 * @class
 */
class ReleaseResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Result value of instance deisolation. A returned value of 0 indicates success.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Error message for instance deisolation.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Database proxy group information
 * @class
 */
class ProxyGroups extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {BaseGroupInfo || null}
         */
        this.BaseGroup = null;

        /**
         * Address information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<Address> || null}
         */
        this.Address = null;

        /**
         * Connection pool information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {ConnectionPoolInfo || null}
         */
        this.ConnectionPoolInfo = null;

        /**
         * Node information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {Array.<ProxyNodeInfo> || null}
         */
        this.ProxyNode = null;

        /**
         * Routing information of the proxy
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {RWInfos || null}
         */
        this.RWInstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaseGroup) {
            let obj = new BaseGroupInfo();
            obj.deserialize(params.BaseGroup)
            this.BaseGroup = obj;
        }

        if (params.Address) {
            this.Address = new Array();
            for (let z in params.Address) {
                let obj = new Address();
                obj.deserialize(params.Address[z]);
                this.Address.push(obj);
            }
        }

        if (params.ConnectionPoolInfo) {
            let obj = new ConnectionPoolInfo();
            obj.deserialize(params.ConnectionPoolInfo)
            this.ConnectionPoolInfo = obj;
        }

        if (params.ProxyNode) {
            this.ProxyNode = new Array();
            for (let z in params.ProxyNode) {
                let obj = new ProxyNodeInfo();
                obj.deserialize(params.ProxyNode[z]);
                this.ProxyNode.push(obj);
            }
        }

        if (params.RWInstInfo) {
            let obj = new RWInfos();
            obj.deserialize(params.RWInstInfo)
            this.RWInstInfo = obj;
        }

    }
}

/**
 * OpenWanService response structure.
 * @class
 */
class OpenWanServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagsOfInstanceIds response structure.
 * @class
 */
class DescribeTagsOfInstanceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Instance tag information.
         * @type {Array.<TagsInfoOfInstance> || null}
         */
        this.Rows = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfInstance();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPassword response structure.
 * @class
 */
class ModifyAccountPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task request ID, which can be used to query the execution result of an async task.
         * @type {string || null}
         */
        this.AsyncRequestId = null;

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
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audit rule
 * @class
 */
class AuditRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audit rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Creation time of audit rule in the format of 2019-03-20 17:09:13
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of audit rule in the format of 2019-03-20 17:09:13
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Audit rule name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Audit rule description
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Audit rule filters
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<AuditFilter> || null}
         */
        this.RuleFilters = null;

        /**
         * Whether to enable full audit
         * @type {boolean || null}
         */
        this.AuditAll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.RuleFilters) {
            this.RuleFilters = new Array();
            for (let z in params.RuleFilters) {
                let obj = new AuditFilter();
                obj.deserialize(params.RuleFilters[z]);
                this.RuleFilters.push(obj);
            }
        }
        this.AuditAll = 'AuditAll' in params ? params.AuditAll : null;

    }
}

/**
 * DescribeBinlogs request structure.
 * @class
 */
class DescribeBinlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Offset. Minimum value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Value range: 1-100. Default value: 20.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * DescribeDBInstanceGTID request structure.
 * @class
 */
class DescribeDBInstanceGTIDRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of cdb-c1nl9rpv. It is the same as the instance ID displayed on the TencentDB Console page. You can use the [instance list querying API](https://intl.cloud.tencent.com/document/api/236/15872?from_cn_redirect=1) to query the ID, whose value is the `InstanceId` value in output parameters.
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
 * Aggregation condition for an audit log
 * @class
 */
class AggregationCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Aggregation field. Valid values: `host` (source IP), `user` （username), `dbName` (database name), `sqlType` (SQL type).
         * @type {string || null}
         */
        this.AggregationField = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of buckets returned under this field. Maximum value: `100`.
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
        this.AggregationField = 'AggregationField' in params ? params.AggregationField : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeBackupEncryptionStatus response structure.
 * @class
 */
class DescribeBackupEncryptionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the physical cold backup is enabled for the instance. Valid values: `on`, `off`.
         * @type {string || null}
         */
        this.EncryptionStatus = null;

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
        this.EncryptionStatus = 'EncryptionStatus' in params ? params.EncryptionStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Retention policy of local binlog
 * @class
 */
class LocalBinlogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Retention period of local binlog. Value range: [72,168].
         * @type {number || null}
         */
        this.SaveHours = null;

        /**
         * Space utilization of local binlog. Value range: [30,50].
         * @type {number || null}
         */
        this.MaxUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaveHours = 'SaveHours' in params ? params.SaveHours : null;
        this.MaxUsage = 'MaxUsage' in params ? params.MaxUsage : null;

    }
}

/**
 * Tag structure
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

module.exports = {
    StartBatchRollbackRequest: StartBatchRollbackRequest,
    ModifyInstanceTagResponse: ModifyInstanceTagResponse,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    DescribeProxyConnectionPoolConfRequest: DescribeProxyConnectionPoolConfRequest,
    DeviceDiskInfo: DeviceDiskInfo,
    CdbZoneSellConf: CdbZoneSellConf,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    CreateDBImportJobRequest: CreateDBImportJobRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    DescribeBackupConfigRequest: DescribeBackupConfigRequest,
    ParamRecord: ParamRecord,
    ModifyAccountMaxUserConnectionsResponse: ModifyAccountMaxUserConnectionsResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    StopDBImportJobRequest: StopDBImportJobRequest,
    DescribeUploadedFilesResponse: DescribeUploadedFilesResponse,
    DescribeSlowLogDataResponse: DescribeSlowLogDataResponse,
    ModifyRemoteBackupConfigResponse: ModifyRemoteBackupConfigResponse,
    DescribeDBInstanceInfoResponse: DescribeDBInstanceInfoResponse,
    SlaveInstanceInfo: SlaveInstanceInfo,
    DescribeErrorLogDataRequest: DescribeErrorLogDataRequest,
    Parameter: Parameter,
    SwitchDrInstanceToMasterResponse: SwitchDrInstanceToMasterResponse,
    DescribeDBInstanceRebootTimeRequest: DescribeDBInstanceRebootTimeRequest,
    TaskDetail: TaskDetail,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    TagInfoItem: TagInfoItem,
    CreateAccountsResponse: CreateAccountsResponse,
    SwitchDBInstanceMasterSlaveResponse: SwitchDBInstanceMasterSlaveResponse,
    InstanceRollbackRangeTime: InstanceRollbackRangeTime,
    DescribeDBFeaturesResponse: DescribeDBFeaturesResponse,
    CdbSellType: CdbSellType,
    DescribeProxyCustomConfRequest: DescribeProxyCustomConfRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    MasterInfo: MasterInfo,
    DescribeBinlogsResponse: DescribeBinlogsResponse,
    StopReplicationResponse: StopReplicationResponse,
    ResetRootAccountResponse: ResetRootAccountResponse,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    ParamInfo: ParamInfo,
    DescribeRoMinScaleRequest: DescribeRoMinScaleRequest,
    DescribeDefaultParamsRequest: DescribeDefaultParamsRequest,
    RoGroupAttr: RoGroupAttr,
    DBSwitchInfo: DBSwitchInfo,
    StartReplicationResponse: StartReplicationResponse,
    ModifyNameOrDescByDpIdResponse: ModifyNameOrDescByDpIdResponse,
    StopDBImportJobResponse: StopDBImportJobResponse,
    DescribeDBPriceResponse: DescribeDBPriceResponse,
    CloseCDBProxyResponse: CloseCDBProxyResponse,
    ReleaseIsolatedDBInstancesResponse: ReleaseIsolatedDBInstancesResponse,
    AuditLogFilter: AuditLogFilter,
    StartBatchRollbackResponse: StartBatchRollbackResponse,
    CustomConfig: CustomConfig,
    ConnectionPoolInfo: ConnectionPoolInfo,
    DescribeBackupOverviewRequest: DescribeBackupOverviewRequest,
    DescribeBackupsRequest: DescribeBackupsRequest,
    DescribeAuditPoliciesResponse: DescribeAuditPoliciesResponse,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    DescribeDBInstanceGTIDResponse: DescribeDBInstanceGTIDResponse,
    OpenDBInstanceGTIDResponse: OpenDBInstanceGTIDResponse,
    DescribeDBInstanceRebootTimeResponse: DescribeDBInstanceRebootTimeResponse,
    SwitchDrInstanceToMasterRequest: SwitchDrInstanceToMasterRequest,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DrInfo: DrInfo,
    RoGroup: RoGroup,
    DescribeDataBackupOverviewResponse: DescribeDataBackupOverviewResponse,
    ParameterDetail: ParameterDetail,
    SwitchCDBProxyResponse: SwitchCDBProxyResponse,
    BackupSummaryItem: BackupSummaryItem,
    SwitchForUpgradeRequest: SwitchForUpgradeRequest,
    ModifyBackupDownloadRestrictionRequest: ModifyBackupDownloadRestrictionRequest,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    DescribeCloneListResponse: DescribeCloneListResponse,
    ModifyAccountMaxUserConnectionsRequest: ModifyAccountMaxUserConnectionsRequest,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    ReleaseIsolatedDBInstancesRequest: ReleaseIsolatedDBInstancesRequest,
    ProxyGroup: ProxyGroup,
    BinlogInfo: BinlogInfo,
    StopRollbackRequest: StopRollbackRequest,
    CloneItem: CloneItem,
    UpgradeDBInstanceEngineVersionRequest: UpgradeDBInstanceEngineVersionRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    SlaveConfig: SlaveConfig,
    DescribeErrorLogDataResponse: DescribeErrorLogDataResponse,
    AddTimeWindowRequest: AddTimeWindowRequest,
    ModifyCDBProxyDescResponse: ModifyCDBProxyDescResponse,
    ImportRecord: ImportRecord,
    DescribeBackupSummariesRequest: DescribeBackupSummariesRequest,
    DescribeRollbackTaskDetailResponse: DescribeRollbackTaskDetailResponse,
    CreateAccountsRequest: CreateAccountsRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    RemoteBackupInfo: RemoteBackupInfo,
    RWInstanceInfo: RWInstanceInfo,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    RollbackInstancesInfo: RollbackInstancesInfo,
    ReloadBalanceProxyNodeRequest: ReloadBalanceProxyNodeRequest,
    DescribeCloneListRequest: DescribeCloneListRequest,
    BackupInfo: BackupInfo,
    CloseWanServiceResponse: CloseWanServiceResponse,
    CreateCloneInstanceRequest: CreateCloneInstanceRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    ModifyDBInstanceVipVportResponse: ModifyDBInstanceVipVportResponse,
    CloseCDBProxyRequest: CloseCDBProxyRequest,
    DescribeDBSwitchRecordsResponse: DescribeDBSwitchRecordsResponse,
    ModifyBackupEncryptionStatusRequest: ModifyBackupEncryptionStatusRequest,
    ModifyCDBProxyConnectionPoolResponse: ModifyCDBProxyConnectionPoolResponse,
    SlowLogInfo: SlowLogInfo,
    RollbackTableName: RollbackTableName,
    DeleteBackupResponse: DeleteBackupResponse,
    ModifyInstanceParamRequest: ModifyInstanceParamRequest,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    CdbRegionSellConf: CdbRegionSellConf,
    UploadInfo: UploadInfo,
    ModifyLocalBinlogConfigResponse: ModifyLocalBinlogConfigResponse,
    CommonTimeWindow: CommonTimeWindow,
    ProxyNodeInfo: ProxyNodeInfo,
    AnalyzeAuditLogsResponse: AnalyzeAuditLogsResponse,
    DescribeDBSwitchRecordsRequest: DescribeDBSwitchRecordsRequest,
    DescribeSupportedPrivilegesRequest: DescribeSupportedPrivilegesRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    ModifyInstanceTagRequest: ModifyInstanceTagRequest,
    DescribeDBInstanceCharsetResponse: DescribeDBInstanceCharsetResponse,
    DeleteAccountsResponse: DeleteAccountsResponse,
    OpenAuditServiceResponse: OpenAuditServiceResponse,
    CloseWanServiceRequest: CloseWanServiceRequest,
    RestartDBInstancesResponse: RestartDBInstancesResponse,
    CreateRoInstanceIpResponse: CreateRoInstanceIpResponse,
    DescribeTimeWindowRequest: DescribeTimeWindowRequest,
    DescribeDBFeaturesRequest: DescribeDBFeaturesRequest,
    CreateAuditPolicyResponse: CreateAuditPolicyResponse,
    SwitchForUpgradeResponse: SwitchForUpgradeResponse,
    DescribeBackupSummariesResponse: DescribeBackupSummariesResponse,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    SwitchDBInstanceMasterSlaveRequest: SwitchDBInstanceMasterSlaveRequest,
    StopRollbackResponse: StopRollbackResponse,
    ParamTemplateInfo: ParamTemplateInfo,
    ModifyAutoRenewFlagResponse: ModifyAutoRenewFlagResponse,
    DeleteTimeWindowResponse: DeleteTimeWindowResponse,
    RollbackTables: RollbackTables,
    DescribeBinlogBackupOverviewRequest: DescribeBinlogBackupOverviewRequest,
    RollbackTask: RollbackTask,
    StartReplicationRequest: StartReplicationRequest,
    DescribeBackupsResponse: DescribeBackupsResponse,
    AnalyzeAuditLogsRequest: AnalyzeAuditLogsRequest,
    CreateAuditPolicyRequest: CreateAuditPolicyRequest,
    CreateRoInstanceIpRequest: CreateRoInstanceIpRequest,
    ModifyInstanceParamResponse: ModifyInstanceParamResponse,
    DescribeDBImportRecordsResponse: DescribeDBImportRecordsResponse,
    DescribeTimeWindowResponse: DescribeTimeWindowResponse,
    ModifyBackupEncryptionStatusResponse: ModifyBackupEncryptionStatusResponse,
    BackupItem: BackupItem,
    ModifyCDBProxyVipVPortRequest: ModifyCDBProxyVipVPortRequest,
    AuditFilter: AuditFilter,
    DescribeBackupConfigResponse: DescribeBackupConfigResponse,
    DescribeRollbackTaskDetailRequest: DescribeRollbackTaskDetailRequest,
    OpenDBInstanceEncryptionResponse: OpenDBInstanceEncryptionResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    DescribeRoMinScaleResponse: DescribeRoMinScaleResponse,
    Outbound: Outbound,
    CdbSellConfig: CdbSellConfig,
    RoWeightValue: RoWeightValue,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    RoInstanceInfo: RoInstanceInfo,
    SecurityGroup: SecurityGroup,
    StopReplicationRequest: StopReplicationRequest,
    BalanceRoGroupLoadResponse: BalanceRoGroupLoadResponse,
    DeviceNetInfo: DeviceNetInfo,
    DescribeProxyConnectionPoolConfResponse: DescribeProxyConnectionPoolConfResponse,
    TagInfo: TagInfo,
    ModifyCDBProxyVipVPortResponse: ModifyCDBProxyVipVPortResponse,
    RollbackTimeRange: RollbackTimeRange,
    DescribeSupportedPrivilegesResponse: DescribeSupportedPrivilegesResponse,
    CreateCloneInstanceResponse: CreateCloneInstanceResponse,
    DescribeCdbZoneConfigRequest: DescribeCdbZoneConfigRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    TagInfoUnit: TagInfoUnit,
    OpenDBInstanceGTIDRequest: OpenDBInstanceGTIDRequest,
    UpgradeDBInstanceEngineVersionResponse: UpgradeDBInstanceEngineVersionResponse,
    ModifyLocalBinlogConfigRequest: ModifyLocalBinlogConfigRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    TablePrivilege: TablePrivilege,
    BalanceRoGroupLoadRequest: BalanceRoGroupLoadRequest,
    QueryCDBProxyRequest: QueryCDBProxyRequest,
    DescribeAuditRulesRequest: DescribeAuditRulesRequest,
    ModifyNameOrDescByDpIdRequest: ModifyNameOrDescByDpIdRequest,
    DescribeBackupOverviewResponse: DescribeBackupOverviewResponse,
    ColumnPrivilege: ColumnPrivilege,
    DescribeUploadedFilesRequest: DescribeUploadedFilesRequest,
    ErrlogItem: ErrlogItem,
    DescribeTablesResponse: DescribeTablesResponse,
    DescribeDeviceMonitorInfoRequest: DescribeDeviceMonitorInfoRequest,
    DescribeDBPriceRequest: DescribeDBPriceRequest,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    QueryCDBProxyResponse: QueryCDBProxyResponse,
    DescribeLocalBinlogConfigRequest: DescribeLocalBinlogConfigRequest,
    CreateBackupResponse: CreateBackupResponse,
    ModifyCDBProxyDescRequest: ModifyCDBProxyDescRequest,
    RWInfos: RWInfos,
    DescribeDBInstanceConfigResponse: DescribeDBInstanceConfigResponse,
    DescribeDefaultParamsResponse: DescribeDefaultParamsResponse,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    SwitchCDBProxyRequest: SwitchCDBProxyRequest,
    BackupConfig: BackupConfig,
    DescribeLocalBinlogConfigResponse: DescribeLocalBinlogConfigResponse,
    DescribeRoGroupsRequest: DescribeRoGroupsRequest,
    DescribeCDBProxyResponse: DescribeCDBProxyResponse,
    TagsInfoOfInstance: TagsInfoOfInstance,
    ResetRootAccountRequest: ResetRootAccountRequest,
    DeviceCpuInfo: DeviceCpuInfo,
    AuditPolicy: AuditPolicy,
    ModifyRoGroupInfoResponse: ModifyRoGroupInfoResponse,
    DescribeDBInstanceConfigRequest: DescribeDBInstanceConfigRequest,
    CdbZoneDataResult: CdbZoneDataResult,
    InstanceInfo: InstanceInfo,
    OfflineIsolatedInstancesResponse: OfflineIsolatedInstancesResponse,
    DatabasePrivilege: DatabasePrivilege,
    SlaveInfo: SlaveInfo,
    UpgradeCDBProxyVersionRequest: UpgradeCDBProxyVersionRequest,
    DescribeProxyCustomConfResponse: DescribeProxyCustomConfResponse,
    ModifyBackupConfigResponse: ModifyBackupConfigResponse,
    UpgradeCDBProxyVersionResponse: UpgradeCDBProxyVersionResponse,
    RoVipInfo: RoVipInfo,
    DescribeCdbZoneConfigResponse: DescribeCdbZoneConfigResponse,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    DescribeBackupDownloadRestrictionResponse: DescribeBackupDownloadRestrictionResponse,
    ModifyAccountPasswordRequest: ModifyAccountPasswordRequest,
    PoolConf: PoolConf,
    DescribeAuditPoliciesRequest: DescribeAuditPoliciesRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    InstanceRebootTime: InstanceRebootTime,
    ModifyInstancePasswordComplexityRequest: ModifyInstancePasswordComplexityRequest,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    AddTimeWindowResponse: AddTimeWindowResponse,
    DescribeRoGroupsResponse: DescribeRoGroupsResponse,
    DescribeAuditRulesResponse: DescribeAuditRulesResponse,
    BaseGroupInfo: BaseGroupInfo,
    DescribeBinlogBackupOverviewResponse: DescribeBinlogBackupOverviewResponse,
    ModifyCDBProxyConnectionPoolRequest: ModifyCDBProxyConnectionPoolRequest,
    ModifyTimeWindowResponse: ModifyTimeWindowResponse,
    InitDBInstancesRequest: InitDBInstancesRequest,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DescribeBackupEncryptionStatusRequest: DescribeBackupEncryptionStatusRequest,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    ModifyBackupDownloadRestrictionResponse: ModifyBackupDownloadRestrictionResponse,
    ModifyTimeWindowRequest: ModifyTimeWindowRequest,
    DeviceCpuRateInfo: DeviceCpuRateInfo,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    Account: Account,
    CreateBackupRequest: CreateBackupRequest,
    OpenDBInstanceEncryptionRequest: OpenDBInstanceEncryptionRequest,
    AccountInfo: AccountInfo,
    DescribeDBInstanceCharsetRequest: DescribeDBInstanceCharsetRequest,
    DescribeRemoteBackupConfigResponse: DescribeRemoteBackupConfigResponse,
    ModifyInstancePasswordComplexityResponse: ModifyInstancePasswordComplexityResponse,
    LocalBinlogConfigDefault: LocalBinlogConfigDefault,
    DeviceMemInfo: DeviceMemInfo,
    ModifyAutoRenewFlagRequest: ModifyAutoRenewFlagRequest,
    OpenAuditServiceRequest: OpenAuditServiceRequest,
    AuditLogAggregationResult: AuditLogAggregationResult,
    ModifyBackupConfigRequest: ModifyBackupConfigRequest,
    DescribeSlowLogDataRequest: DescribeSlowLogDataRequest,
    DatabasesWithCharacterLists: DatabasesWithCharacterLists,
    SqlFileInfo: SqlFileInfo,
    ModifyDBInstanceVipVportRequest: ModifyDBInstanceVipVportRequest,
    DescribeRemoteBackupConfigRequest: DescribeRemoteBackupConfigRequest,
    ModifyDBInstanceProjectResponse: ModifyDBInstanceProjectResponse,
    DescribeDBImportRecordsRequest: DescribeDBImportRecordsRequest,
    CreateDBImportJobResponse: CreateDBImportJobResponse,
    DescribeTagsOfInstanceIdsRequest: DescribeTagsOfInstanceIdsRequest,
    RWInfo: RWInfo,
    OpenWanServiceRequest: OpenWanServiceRequest,
    DeleteTimeWindowRequest: DeleteTimeWindowRequest,
    Address: Address,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeParamTemplateInfoRequest: DescribeParamTemplateInfoRequest,
    DescribeBackupDownloadRestrictionRequest: DescribeBackupDownloadRestrictionRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDataBackupOverviewRequest: DescribeDataBackupOverviewRequest,
    DescribeParamTemplateInfoResponse: DescribeParamTemplateInfoResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    RestartDBInstancesRequest: RestartDBInstancesRequest,
    DescribeDBInstanceInfoRequest: DescribeDBInstanceInfoRequest,
    BackupLimitVpcItem: BackupLimitVpcItem,
    ModifyDBInstanceProjectRequest: ModifyDBInstanceProjectRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    Bucket: Bucket,
    DeleteAccountsRequest: DeleteAccountsRequest,
    OfflineIsolatedInstancesRequest: OfflineIsolatedInstancesRequest,
    Rule: Rule,
    ZoneConf: ZoneConf,
    DescribeCDBProxyRequest: DescribeCDBProxyRequest,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    ReloadBalanceProxyNodeResponse: ReloadBalanceProxyNodeResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    RollbackDBName: RollbackDBName,
    ModifyRemoteBackupConfigRequest: ModifyRemoteBackupConfigRequest,
    DeleteBackupRequest: DeleteBackupRequest,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    SlowLogItem: SlowLogItem,
    DescribeDeviceMonitorInfoResponse: DescribeDeviceMonitorInfoResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeRollbackRangeTimeResponse: DescribeRollbackRangeTimeResponse,
    ModifyRoGroupInfoRequest: ModifyRoGroupInfoRequest,
    DescribeRollbackRangeTimeRequest: DescribeRollbackRangeTimeRequest,
    ReleaseResult: ReleaseResult,
    ProxyGroups: ProxyGroups,
    OpenWanServiceResponse: OpenWanServiceResponse,
    DescribeTagsOfInstanceIdsResponse: DescribeTagsOfInstanceIdsResponse,
    ModifyAccountPasswordResponse: ModifyAccountPasswordResponse,
    AuditRule: AuditRule,
    DescribeBinlogsRequest: DescribeBinlogsRequest,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeDBInstanceGTIDRequest: DescribeDBInstanceGTIDRequest,
    AggregationCondition: AggregationCondition,
    DescribeBackupEncryptionStatusResponse: DescribeBackupEncryptionStatusResponse,
    LocalBinlogConfig: LocalBinlogConfig,
    Tag: Tag,

}
