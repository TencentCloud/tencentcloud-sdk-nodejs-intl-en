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
 * DeleteCfsFileSystem response structure.
 * @class
 */
class DeleteCfsFileSystemResponse extends  AbstractModel {
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
 * Versioning - array of AZs
 * @class
 */
class AvailableZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Chinese name of an AZ
         * @type {string || null}
         */
        this.ZoneCnName = null;

        /**
         * Array of classes
         * @type {Array.<AvailableType> || null}
         */
        this.Types = null;

        /**
         * Chinese and English names of an AZ
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneCnName = 'ZoneCnName' in params ? params.ZoneCnName : null;

        if (params.Types) {
            this.Types = new Array();
            for (let z in params.Types) {
                let obj = new AvailableType();
                obj.deserialize(params.Types[z]);
                this.Types.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * UpdateCfsRule request structure.
 * @class
 */
class UpdateCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * You can enter a single IP or IP range, such as 10.1.10.11 or 10.10.1.0/24. The default visiting address is `*`, indicating that all IPs are allowed. Please note that you need to enter the CVM instance's private IP here.
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * Read/write permission. Valid values: RO (read-only), RW (read & write). Default value: RO
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * User permission. Valid values: all_squash, no_all_squash, root_squash, no_root_squash. Specifically, all_squash: any visiting user will be mapped to an anonymous user or user group; no_all_squash: a visiting user will be first matched with a local user, and if the match fails, it will be mapped to an anonymous user or user group; root_squash: a visiting root user will be mapped to an anonymous user or user group; no_root_squash: a visiting root user will be allowed to maintain root account permissions. Default value: root_squash.
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * Rule priority. Value range: 1-100. 1 represents the highest priority, while 100 the lowest
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DescribeCfsFileSystems request structure.
 * @class
 */
class DescribeCfsFileSystemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DeleteMountTarget request structure.
 * @class
 */
class DeleteMountTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Mount target ID
         * @type {string || null}
         */
        this.MountTargetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;

    }
}

/**
 * CreateCfsRule request structure.
 * @class
 */
class CreateCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * You can enter a single IP or IP range, such as 10.1.10.11 or 10.10.1.0/24. The default visiting address is `*`, indicating that all IPs are allowed. Please note that you need to enter the CVM instance's private IP here.
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * Rule priority. Value range: 1-100. 1 represents the highest priority, while 100 the lowest
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Read/write permission. Valid values: RO (read-only), RW (read & write). Default value: RO
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * User permission. Valid values: all_squash, no_all_squash, root_squash, no_root_squash. Specifically, all_squash: any visiting user will be mapped to an anonymous user or user group; no_all_squash: a visiting user will be first matched with a local user, and if the match fails, it will be mapped to an anonymous user or user group; root_squash: a visiting root user will be mapped to an anonymous user or user group; no_root_squash: a visiting root user will be allowed to maintain root account permissions. Default value: root_squash.
         * @type {string || null}
         */
        this.UserPermission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;

    }
}

/**
 * Information of permission groups bound to a file system
 * @class
 */
class PGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name
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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeAvailableZoneInfo response structure.
 * @class
 */
class DescribeAvailableZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information such as resource availability in each AZ and the supported storage classes and protocols
         * @type {Array.<AvailableRegion> || null}
         */
        this.RegionZones = null;

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

        if (params.RegionZones) {
            this.RegionZones = new Array();
            for (let z in params.RegionZones) {
                let obj = new AvailableRegion();
                obj.deserialize(params.RegionZones[z]);
                this.RegionZones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemName response structure.
 * @class
 */
class UpdateCfsFileSystemNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.FsName = null;

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
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemName request structure.
 * @class
 */
class UpdateCfsFileSystemNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.FsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

    }
}

/**
 * DescribeCfsPGroups response structure.
 * @class
 */
class DescribeCfsPGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group information list
         * @type {Array.<PGroupInfo> || null}
         */
        this.PGroupList = null;

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

        if (params.PGroupList) {
            this.PGroupList = new Array();
            for (let z in params.PGroupList) {
                let obj = new PGroupInfo();
                obj.deserialize(params.PGroupList[z]);
                this.PGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsFileSystemClients response structure.
 * @class
 */
class DescribeCfsFileSystemClientsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client list
         * @type {Array.<FileSystemClient> || null}
         */
        this.ClientList = null;

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

        if (params.ClientList) {
            this.ClientList = new Array();
            for (let z in params.ClientList) {
                let obj = new FileSystemClient();
                obj.deserialize(params.ClientList[z]);
                this.ClientList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMountTarget response structure.
 * @class
 */
class DeleteMountTargetResponse extends  AbstractModel {
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
 * DescribeMountTargets response structure.
 * @class
 */
class DescribeMountTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount target details
         * @type {Array.<MountInfo> || null}
         */
        this.MountTargets = null;

        /**
         * The number of mount targets
         * @type {number || null}
         */
        this.NumberOfMountTargets = null;

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

        if (params.MountTargets) {
            this.MountTargets = new Array();
            for (let z in params.MountTargets) {
                let obj = new MountInfo();
                obj.deserialize(params.MountTargets[z]);
                this.MountTargets.push(obj);
            }
        }
        this.NumberOfMountTargets = 'NumberOfMountTargets' in params ? params.NumberOfMountTargets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsRule response structure.
 * @class
 */
class DeleteCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsRule request structure.
 * @class
 */
class DeleteCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * UpdateCfsPGroup request structure.
 * @class
 */
class UpdateCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name, which can contain 1-64 Chinese characters, letters, numbers, underscores, or dashes
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Permission group description, which can contain 1-255 characters
         * @type {string || null}
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * Mount target information
 * @class
 */
class MountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Mount target ID
         * @type {string || null}
         */
        this.MountTargetId = null;

        /**
         * Mount target IP
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Mount root-directory
         * @type {string || null}
         */
        this.FSID = null;

        /**
         * Mount target status
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetworkInterface = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Subnet name
         * @type {string || null}
         */
        this.SubnetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.FSID = 'FSID' in params ? params.FSID : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.NetworkInterface = 'NetworkInterface' in params ? params.NetworkInterface : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;

    }
}

/**
 * UpdateCfsRule response structure.
 * @class
 */
class UpdateCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Client IP or IP range allowed for access
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * Read & write permission
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * User permission
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on the file system client
 * @class
 */
class FileSystemClient extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address of the file system
         * @type {string || null}
         */
        this.CfsVip = null;

        /**
         * Client IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * File system VPCID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Name of the availability zone, e.g. ap-beijing-1. For more information, see regions and availability zones in the Overview document
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Path in which the file system is mounted to the client
         * @type {string || null}
         */
        this.MountDirectory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfsVip = 'CfsVip' in params ? params.CfsVip : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.MountDirectory = 'MountDirectory' in params ? params.MountDirectory : null;

    }
}

/**
 * DescribeCfsFileSystems response structure.
 * @class
 */
class DescribeCfsFileSystemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system information
         * @type {Array.<FileSystemInfo> || null}
         */
        this.FileSystems = null;

        /**
         * Total number of file systems
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

        if (params.FileSystems) {
            this.FileSystems = new Array();
            for (let z in params.FileSystems) {
                let obj = new FileSystemInfo();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCfsFileSystem response structure.
 * @class
 */
class CreateCfsFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system status
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Used file system capacity
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * Whether a file system is encrypted
         * @type {boolean || null}
         */
        this.Encrypted = null;

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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Basic information of a file system
 * @class
 */
class FileSystemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Custom name
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system status
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Used file system capacity
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * Maximum storage limit of a file system
         * @type {number || null}
         */
        this.SizeLimit = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * File system protocol type
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * File system storage class
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Prepaid storage pack bound with the file system
         * @type {string || null}
         */
        this.StorageResourcePkg = null;

        /**
         * Prepaid bandwidth pack bound to a file system (not supported currently)
         * @type {string || null}
         */
        this.BandwidthResourcePkg = null;

        /**
         * Information of permission groups bound to a file system
         * @type {PGroup || null}
         */
        this.PGroup = null;

        /**
         * Custom name
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * Whether a file system is encrypted
         * @type {boolean || null}
         */
        this.Encrypted = null;

        /**
         * Key used for encryption, which can be the key ID or ARN
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Application ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * The upper limit on the file system’s throughput, which is determined based on its current usage, and bound resource packs for both storage and throughput
         * @type {number || null}
         */
        this.BandwidthLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.SizeLimit = 'SizeLimit' in params ? params.SizeLimit : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageResourcePkg = 'StorageResourcePkg' in params ? params.StorageResourcePkg : null;
        this.BandwidthResourcePkg = 'BandwidthResourcePkg' in params ? params.BandwidthResourcePkg : null;

        if (params.PGroup) {
            let obj = new PGroup();
            obj.deserialize(params.PGroup)
            this.PGroup = obj;
        }
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.BandwidthLimit = 'BandwidthLimit' in params ? params.BandwidthLimit : null;

    }
}

/**
 * Tag information unit
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
 * DescribeCfsPGroups request structure.
 * @class
 */
class DescribeCfsPGroupsRequest extends  AbstractModel {
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
 * DescribeCfsFileSystemClients request structure.
 * @class
 */
class DescribeCfsFileSystemClientsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * CreateCfsPGroup request structure.
 * @class
 */
class CreateCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group name, which can contain 1-64 Chinese characters, letters, numbers, underscores, or dashes
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Permission group description, which can contain 1-255 characters
         * @type {string || null}
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * DeleteCfsPGroup response structure.
 * @class
 */
class DeleteCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * User ID
         * @type {number || null}
         */
        this.AppId = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit response structure.
 * @class
 */
class UpdateCfsFileSystemSizeLimitResponse extends  AbstractModel {
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
 * DescribeAvailableZoneInfo request structure.
 * @class
 */
class DescribeAvailableZoneInfoRequest extends  AbstractModel {
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
 * Versioning - array of regions
 * @class
 */
class AvailableRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as "ap-beijing"
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name, such as "bj"
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region availability. If a region has at least one AZ where resources are purchasable, this value will be `AVAILABLE`; otherwise, it will be `UNAVAILABLE`
         * @type {string || null}
         */
        this.RegionStatus = null;

        /**
         * Array of AZs
         * @type {Array.<AvailableZone> || null}
         */
        this.Zones = null;

        /**
         * Region name, such as "Guangzhou"
         * @type {string || null}
         */
        this.RegionCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionStatus = 'RegionStatus' in params ? params.RegionStatus : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new AvailableZone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RegionCnName = 'RegionCnName' in params ? params.RegionCnName : null;

    }
}

/**
 * CreateCfsFileSystem request structure.
 * @class
 */
class CreateCfsFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name, such as "ap-beijing-1". For the list of regions and AZs, please see [Overview](https://intl.cloud.tencent.com/document/product/582/13225?from_cn_redirect=1)
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Network type. Valid values: VPC (VPC), BASIC (basic network)
         * @type {string || null}
         */
        this.NetInterface = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system protocol type. Valid values: NFS, CIFS. If this parameter is left empty, NFS will be used by default
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * File system storage class. Valid values: SD (standard), HP (high-performance)
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * VPC ID. This field is required if network type is VPC.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. This field is required if network type is VPC.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Specifies an IP address, which is supported only for VPC. If this parameter is left empty, a random IP will be assigned in the subnet
         * @type {string || null}
         */
        this.MountIP = null;

        /**
         * Custom file system name
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * File system tag
         * @type {Array.<TagInfo> || null}
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetInterface = 'NetInterface' in params ? params.NetInterface : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MountIP = 'MountIP' in params ? params.MountIP : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeMountTargets request structure.
 * @class
 */
class DescribeMountTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * CreateCfsPGroup response structure.
 * @class
 */
class CreateCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Permission group description
         * @type {string || null}
         */
        this.DescInfo = null;

        /**
         * The number of file systems bound to this permission group
         * @type {number || null}
         */
        this.BindCfsNum = null;

        /**
         * Permission group creation time
         * @type {string || null}
         */
        this.CDate = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignUpCfsService request structure.
 * @class
 */
class SignUpCfsServiceRequest extends  AbstractModel {
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
 * DescribeCfsServiceStatus request structure.
 * @class
 */
class DescribeCfsServiceStatusRequest extends  AbstractModel {
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
 * Array of permission groups
 * @class
 */
class PGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description
         * @type {string || null}
         */
        this.DescInfo = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CDate = null;

        /**
         * The number of bound file system
         * @type {number || null}
         */
        this.BindCfsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;

    }
}

/**
 * SignUpCfsService response structure.
 * @class
 */
class SignUpCfsServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current status of the CFS service for this user. Valid values: none (not activated), creating (activating), created (activated)
         * @type {string || null}
         */
        this.CfsServiceStatus = null;

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
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup request structure.
 * @class
 */
class UpdateCfsFileSystemPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeCfsServiceStatus response structure.
 * @class
 */
class DescribeCfsServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current status of the CFS service for this user. Valid values: none (not activated), creating (activating), created (activated)
         * @type {string || null}
         */
        this.CfsServiceStatus = null;

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
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCfsRule response structure.
 * @class
 */
class CreateCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Client IP
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * Read & write permissions
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * User permission
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Versioning - protocol details

 * @class
 */
class AvailableProtoStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sale status. Valid values: sale_out (sold out), saling (purchasable), no_saling (non-purchasable)
         * @type {string || null}
         */
        this.SaleStatus = null;

        /**
         * Protocol type. Valid values: NFS, CIFS
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaleStatus = 'SaleStatus' in params ? params.SaleStatus : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeCfsRules request structure.
 * @class
 */
class DescribeCfsRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * List of permission group rules
 * @class
 */
class PGroupRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Client IP allowed for access
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * Read/write permission. ro: read-only; rw: read & write
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * User permission. all_squash: any visiting user will be mapped to an anonymous user or user group; no_all_squash: a visiting user will be first matched with a local user, and if the match fails, it will be mapped to an anonymous user or user group; root_squash: a visiting root user will be mapped to an anonymous user or user group; no_root_squash: a visiting root user will be allowed to maintain root account permissions.
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * Rule priority. Value range: 1-100. 1 represents the highest priority, while 100 the lowest
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DeleteCfsPGroup request structure.
 * @class
 */
class DeleteCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * Versioning - array of classes
 * @class
 */
class AvailableType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol and sale details
         * @type {Array.<AvailableProtoStatus> || null}
         */
        this.Protocols = null;

        /**
         * Storage class. Valid values: `SD` (standard storage) and `HP` (high-performance storage)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates whether prepaid is supported. `true`: yes; `false`: no
         * @type {boolean || null}
         */
        this.Prepayment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new AvailableProtoStatus();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Prepayment = 'Prepayment' in params ? params.Prepayment : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit request structure.
 * @class
 */
class UpdateCfsFileSystemSizeLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system capacity limit in GB. Value range: 0-1,073,741,824. If 0 is entered, no limit will be imposed on the file system capacity.
         * @type {number || null}
         */
        this.FsLimit = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FsLimit = 'FsLimit' in params ? params.FsLimit : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DeleteCfsFileSystem request structure.
 * @class
 */
class DeleteCfsFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID. Note: please call the `DeleteMountTarget` API to delete the mount target first before deleting a file system; otherwise, the delete operation will fail.
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * UpdateCfsPGroup response structure.
 * @class
 */
class UpdateCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description
         * @type {string || null}
         */
        this.DescInfo = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsRules response structure.
 * @class
 */
class DescribeCfsRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of permission group rules
         * @type {Array.<PGroupRuleInfo> || null}
         */
        this.RuleList = null;

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

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new PGroupRuleInfo();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup response structure.
 * @class
 */
class UpdateCfsFileSystemPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    AvailableZone: AvailableZone,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    DescribeCfsFileSystemsRequest: DescribeCfsFileSystemsRequest,
    DeleteMountTargetRequest: DeleteMountTargetRequest,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    PGroup: PGroup,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    UpdateCfsFileSystemNameResponse: UpdateCfsFileSystemNameResponse,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    DescribeCfsFileSystemClientsResponse: DescribeCfsFileSystemClientsResponse,
    DeleteMountTargetResponse: DeleteMountTargetResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DeleteCfsRuleResponse: DeleteCfsRuleResponse,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    UpdateCfsPGroupRequest: UpdateCfsPGroupRequest,
    MountInfo: MountInfo,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    FileSystemClient: FileSystemClient,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    FileSystemInfo: FileSystemInfo,
    TagInfo: TagInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    DescribeCfsFileSystemClientsRequest: DescribeCfsFileSystemClientsRequest,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    AvailableRegion: AvailableRegion,
    CreateCfsFileSystemRequest: CreateCfsFileSystemRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    PGroupInfo: PGroupInfo,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    UpdateCfsFileSystemPGroupRequest: UpdateCfsFileSystemPGroupRequest,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    AvailableProtoStatus: AvailableProtoStatus,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    PGroupRuleInfo: PGroupRuleInfo,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    AvailableType: AvailableType,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,

}
