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
 * CreateFileSystem response structure.
 * @class
 */
class CreateFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system
         * @type {FileSystem || null}
         */
        this.FileSystem = null;

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

        if (params.FileSystem) {
            let obj = new FileSystem();
            obj.deserialize(params.FileSystem)
            this.FileSystem = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResourceTags request structure.
 * @class
 */
class ModifyResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Multiple resource tags, which can be an empty array
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

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
 * DescribeAccessRules request structure.
 * @class
 */
class DescribeAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * Permission rule
 * @class
 */
class AccessRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission rule ID
         * @type {number || null}
         */
        this.AccessRuleId = null;

        /**
         * Permission rule address (IP range or IP)
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Permission rule access mode (1: read-only; 2: read-write)
         * @type {number || null}
         */
        this.AccessMode = null;

        /**
         * Priority (value range: 1–100. The smaller the value, the higher the priority)
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Creation time
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
        this.AccessRuleId = 'AccessRuleId' in params ? params.AccessRuleId : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeFileSystem response structure.
 * @class
 */
class DescribeFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system
         * @type {FileSystem || null}
         */
        this.FileSystem = null;

        /**
         * Used capacity (in bytes), including STANDARD storage and ARCHIVE storage
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CapacityUsed = null;

        /**
         * Used ARCHIVE storage capacity (in bytes)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ArchiveCapacityUsed = null;

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

        if (params.FileSystem) {
            let obj = new FileSystem();
            obj.deserialize(params.FileSystem)
            this.FileSystem = obj;
        }
        this.CapacityUsed = 'CapacityUsed' in params ? params.CapacityUsed : null;
        this.ArchiveCapacityUsed = 'ArchiveCapacityUsed' in params ? params.ArchiveCapacityUsed : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Permission group
 * @class
 */
class AccessGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * Permission group name
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * Permission group description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * VPC type (1: CVM; 2: BM 1.0)
         * @type {number || null}
         */
        this.VpcType = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcType = 'VpcType' in params ? params.VpcType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * ModifyFileSystem response structure.
 * @class
 */
class ModifyFileSystemResponse extends  AbstractModel {
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
 * ModifyFileSystem request structure.
 * @class
 */
class ModifyFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system name
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * File system description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * File system capacity (in bytes), which can range from 1 GB to 1 PB and must be an integer multiple of 1 GB
Note: the file system capacity after change cannot be smaller than the currently used capacity
         * @type {number || null}
         */
        this.CapacityQuota = null;

        /**
         * List of superuser names, which can be an empty array
         * @type {Array.<string> || null}
         */
        this.SuperUsers = null;

        /**
         * Whether to verify POSIX ACL
         * @type {boolean || null}
         */
        this.PosixAcl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;
        this.SuperUsers = 'SuperUsers' in params ? params.SuperUsers : null;
        this.PosixAcl = 'PosixAcl' in params ? params.PosixAcl : null;

    }
}

/**
 * DescribeLifeCycleRules request structure.
 * @class
 */
class DescribeLifeCycleRulesRequest extends  AbstractModel {
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
 * AssociateAccessGroups request structure.
 * @class
 */
class AssociateAccessGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * List of permission group IDs
         * @type {Array.<string> || null}
         */
        this.AccessGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.AccessGroupIds = 'AccessGroupIds' in params ? params.AccessGroupIds : null;

    }
}

/**
 * ModifyAccessGroup request structure.
 * @class
 */
class ModifyAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * Permission group name
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * Permission group description
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
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeFileSystems response structure.
 * @class
 */
class DescribeFileSystemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of file systems
         * @type {Array.<FileSystem> || null}
         */
        this.FileSystems = null;

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
                let obj = new FileSystem();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileSystem request structure.
 * @class
 */
class DescribeFileSystemRequest extends  AbstractModel {
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
 * CreateMountPoint request structure.
 * @class
 */
class CreateMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point name
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Mount point status (1: enabled; 2: disabled)
         * @type {number || null}
         */
        this.MountPointStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountPointStatus = 'MountPointStatus' in params ? params.MountPointStatus : null;

    }
}

/**
 * DeleteAccessGroup request structure.
 * @class
 */
class DeleteAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * ModifyLifeCycleRules request structure.
 * @class
 */
class ModifyLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple lifecycle rules (up to 10)
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }

    }
}

/**
 * CreateRestoreTasks response structure.
 * @class
 */
class CreateRestoreTasksResponse extends  AbstractModel {
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
 * DeleteFileSystem request structure.
 * @class
 */
class DeleteFileSystemRequest extends  AbstractModel {
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
 * DescribeMountPoints request structure.
 * @class
 */
class DescribeMountPointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
Note: only one of `AccessGroupId`, `FileSystemId`, and `OwnerUin` can be specified as the input parameter
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * Resource owner `Uin`
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * DescribeMountPoint request structure.
 * @class
 */
class DescribeMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;

    }
}

/**
 * DescribeAccessGroups request structure.
 * @class
 */
class DescribeAccessGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
Note: either `VpcId` or `OwnerUin` can be specified as the input parameter
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Resource owner `Uin`
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * DeleteAccessGroup response structure.
 * @class
 */
class DeleteAccessGroupResponse extends  AbstractModel {
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
 * ModifyLifeCycleRules response structure.
 * @class
 */
class ModifyLifeCycleRulesResponse extends  AbstractModel {
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
 * DeleteMountPoint response structure.
 * @class
 */
class DeleteMountPointResponse extends  AbstractModel {
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
 * CreateMountPoint response structure.
 * @class
 */
class CreateMountPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point
         * @type {MountPoint || null}
         */
        this.MountPoint = null;

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

        if (params.MountPoint) {
            let obj = new MountPoint();
            obj.deserialize(params.MountPoint)
            this.MountPoint = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFileSystem request structure.
 * @class
 */
class CreateFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system name
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * File system capacity (in bytes), which can range from 1 GB to 1 PB and must be an integer multiple of 1 GB
         * @type {number || null}
         */
        this.CapacityQuota = null;

        /**
         * Whether to verify POSIX ACL
         * @type {boolean || null}
         */
        this.PosixAcl = null;

        /**
         * File system description, which is an empty string by default
         * @type {string || null}
         */
        this.Description = null;

        /**
         * List of superuser names, which is an empty array by default
         * @type {Array.<string> || null}
         */
        this.SuperUsers = null;

        /**
         * Username of the root directory Inode, which is `hadoop` by default
         * @type {string || null}
         */
        this.RootInodeUser = null;

        /**
         * Group name of the root directory Inode, which is `supergroup` by default
         * @type {string || null}
         */
        this.RootInodeGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;
        this.PosixAcl = 'PosixAcl' in params ? params.PosixAcl : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SuperUsers = 'SuperUsers' in params ? params.SuperUsers : null;
        this.RootInodeUser = 'RootInodeUser' in params ? params.RootInodeUser : null;
        this.RootInodeGroup = 'RootInodeGroup' in params ? params.RootInodeGroup : null;

    }
}

/**
 * DisassociateAccessGroups request structure.
 * @class
 */
class DisassociateAccessGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * List of permission group IDs
         * @type {Array.<string> || null}
         */
        this.AccessGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.AccessGroupIds = 'AccessGroupIds' in params ? params.AccessGroupIds : null;

    }
}

/**
 * DescribeResourceTags response structure.
 * @class
 */
class DescribeResourceTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of resource tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessGroups response structure.
 * @class
 */
class DescribeAccessGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of permission groups
         * @type {Array.<AccessGroup> || null}
         */
        this.AccessGroups = null;

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

        if (params.AccessGroups) {
            this.AccessGroups = new Array();
            for (let z in params.AccessGroups) {
                let obj = new AccessGroup();
                obj.deserialize(params.AccessGroups[z]);
                this.AccessGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMountPoint request structure.
 * @class
 */
class DeleteMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;

    }
}

/**
 * DeleteFileSystem response structure.
 * @class
 */
class DeleteFileSystemResponse extends  AbstractModel {
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
 * CreateLifeCycleRules request structure.
 * @class
 */
class CreateLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Multiple lifecycle rules (up to 10)
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }

    }
}

/**
 * CreateAccessRules response structure.
 * @class
 */
class CreateAccessRulesResponse extends  AbstractModel {
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
 * DeleteLifeCycleRules request structure.
 * @class
 */
class DeleteLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple lifecycle rule IDs (up to 10)
         * @type {Array.<number> || null}
         */
        this.LifeCycleRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifeCycleRuleIds = 'LifeCycleRuleIds' in params ? params.LifeCycleRuleIds : null;

    }
}

/**
 * File system
 * @class
 */
class FileSystem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource owner `AppId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * File system name
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * File system description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * File system block size (in bytes)
         * @type {number || null}
         */
        this.BlockSize = null;

        /**
         * File system capacity (in bytes)
         * @type {number || null}
         */
        this.CapacityQuota = null;

        /**
         * File system status (1: creating; 2: created successfully; 3: failed to create)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * List of superuser names
         * @type {Array.<string> || null}
         */
        this.SuperUsers = null;

        /**
         * POSIX permission control
         * @type {boolean || null}
         */
        this.PosixAcl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BlockSize = 'BlockSize' in params ? params.BlockSize : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SuperUsers = 'SuperUsers' in params ? params.SuperUsers : null;
        this.PosixAcl = 'PosixAcl' in params ? params.PosixAcl : null;

    }
}

/**
 * Restoration task
 * @class
 */
class RestoreTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Restoration task ID
         * @type {number || null}
         */
        this.RestoreTaskId = null;

        /**
         * Restoration task file path
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * Restoration task type (1: standard; 2: expedited; 3: bulk)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Validity period (in days) of the temporary copy generated during restoration
         * @type {number || null}
         */
        this.Days = null;

        /**
         * Restoration task status (1: binding file; 2: file binding completed; 3: restoring file; 4: file restoration completed)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
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
        this.RestoreTaskId = 'RestoreTaskId' in params ? params.RestoreTaskId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Days = 'Days' in params ? params.Days : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyMountPoint request structure.
 * @class
 */
class ModifyMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * Mount point name
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * Mount point status
         * @type {number || null}
         */
        this.MountPointStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.MountPointStatus = 'MountPointStatus' in params ? params.MountPointStatus : null;

    }
}

/**
 * DescribeAccessRules response structure.
 * @class
 */
class DescribeAccessRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of permission rules
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

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

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLifeCycleRules response structure.
 * @class
 */
class DeleteLifeCycleRulesResponse extends  AbstractModel {
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
 * CreateRestoreTasks request structure.
 * @class
 */
class CreateRestoreTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Multiple restoration tasks (up to 10)
         * @type {Array.<RestoreTask> || null}
         */
        this.RestoreTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

        if (params.RestoreTasks) {
            this.RestoreTasks = new Array();
            for (let z in params.RestoreTasks) {
                let obj = new RestoreTask();
                obj.deserialize(params.RestoreTasks[z]);
                this.RestoreTasks.push(obj);
            }
        }

    }
}

/**
 * Lifecycle rule transition attribute
 * @class
 */
class Transition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger time (in days)
         * @type {number || null}
         */
        this.Days = null;

        /**
         * Transition type (1: archive; 2: deletion)
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
        this.Days = 'Days' in params ? params.Days : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeRestoreTasks response structure.
 * @class
 */
class DescribeRestoreTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of restoration tasks
         * @type {Array.<RestoreTask> || null}
         */
        this.RestoreTasks = null;

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

        if (params.RestoreTasks) {
            this.RestoreTasks = new Array();
            for (let z in params.RestoreTasks) {
                let obj = new RestoreTask();
                obj.deserialize(params.RestoreTasks[z]);
                this.RestoreTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLifeCycleRules response structure.
 * @class
 */
class DescribeLifeCycleRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of lifecycle rules
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

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

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccessGroup response structure.
 * @class
 */
class CreateAccessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group
         * @type {AccessGroup || null}
         */
        this.AccessGroup = null;

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

        if (params.AccessGroup) {
            let obj = new AccessGroup();
            obj.deserialize(params.AccessGroup)
            this.AccessGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateAccessGroups response structure.
 * @class
 */
class DisassociateAccessGroupsResponse extends  AbstractModel {
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
 * DeleteAccessRules request structure.
 * @class
 */
class DeleteAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple permission rule IDs (up to 10)
         * @type {Array.<number> || null}
         */
        this.AccessRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRuleIds = 'AccessRuleIds' in params ? params.AccessRuleIds : null;

    }
}

/**
 * DeleteAccessRules response structure.
 * @class
 */
class DeleteAccessRulesResponse extends  AbstractModel {
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
 * DescribeFileSystems request structure.
 * @class
 */
class DescribeFileSystemsRequest extends  AbstractModel {
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
 * DescribeResourceTags request structure.
 * @class
 */
class DescribeResourceTagsRequest extends  AbstractModel {
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
 * ModifyResourceTags response structure.
 * @class
 */
class ModifyResourceTagsResponse extends  AbstractModel {
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
 * Lifecycle rule
 * @class
 */
class LifeCycleRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle rule ID
         * @type {number || null}
         */
        this.LifeCycleRuleId = null;

        /**
         * Lifecycle rule name
         * @type {string || null}
         */
        this.LifeCycleRuleName = null;

        /**
         * Lifecycle rule path (directory or file)
         * @type {string || null}
         */
        this.Path = null;

        /**
         * List of lifecycle rule transitions
         * @type {Array.<Transition> || null}
         */
        this.Transitions = null;

        /**
         * Lifecycle rule status (1: enabled; 2: disabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
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
        this.LifeCycleRuleId = 'LifeCycleRuleId' in params ? params.LifeCycleRuleId : null;
        this.LifeCycleRuleName = 'LifeCycleRuleName' in params ? params.LifeCycleRuleName : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new Transition();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateAccessRules request structure.
 * @class
 */
class CreateAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple permission rules (up to 10)
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * DescribeAccessGroup response structure.
 * @class
 */
class DescribeAccessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group
         * @type {AccessGroup || null}
         */
        this.AccessGroup = null;

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

        if (params.AccessGroup) {
            let obj = new AccessGroup();
            obj.deserialize(params.AccessGroup)
            this.AccessGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Mount point
 * @class
 */
class MountPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * Mount point name
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Mount point status (1: enabled; 2: disabled)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * List of IDs of the bound permission groups
         * @type {Array.<string> || null}
         */
        this.AccessGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AccessGroupIds = 'AccessGroupIds' in params ? params.AccessGroupIds : null;

    }
}

/**
 * DescribeMountPoints response structure.
 * @class
 */
class DescribeMountPointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of mount points
         * @type {Array.<MountPoint> || null}
         */
        this.MountPoints = null;

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

        if (params.MountPoints) {
            this.MountPoints = new Array();
            for (let z in params.MountPoints) {
                let obj = new MountPoint();
                obj.deserialize(params.MountPoints[z]);
                this.MountPoints.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRestoreTasks request structure.
 * @class
 */
class DescribeRestoreTasksRequest extends  AbstractModel {
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
 * DescribeAccessGroup request structure.
 * @class
 */
class DescribeAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * AssociateAccessGroups response structure.
 * @class
 */
class AssociateAccessGroupsResponse extends  AbstractModel {
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
 * ModifyAccessRules response structure.
 * @class
 */
class ModifyAccessRulesResponse extends  AbstractModel {
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
 * CreateLifeCycleRules response structure.
 * @class
 */
class CreateLifeCycleRulesResponse extends  AbstractModel {
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
 * ModifyAccessGroup response structure.
 * @class
 */
class ModifyAccessGroupResponse extends  AbstractModel {
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
 * Resource tag.
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

/**
 * ModifyMountPoint response structure.
 * @class
 */
class ModifyMountPointResponse extends  AbstractModel {
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
 * ModifyAccessRules request structure.
 * @class
 */
class ModifyAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Multiple permission rules (up to 10)
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }

    }
}

/**
 * CreateAccessGroup request structure.
 * @class
 */
class CreateAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission group name
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * VPC type (1: CVM; 2: BM 1.0)
         * @type {number || null}
         */
        this.VpcType = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Permission group description, which is an empty string by default
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
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.VpcType = 'VpcType' in params ? params.VpcType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeMountPoint response structure.
 * @class
 */
class DescribeMountPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mount point
         * @type {MountPoint || null}
         */
        this.MountPoint = null;

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

        if (params.MountPoint) {
            let obj = new MountPoint();
            obj.deserialize(params.MountPoint)
            this.MountPoint = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateFileSystemResponse: CreateFileSystemResponse,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeAccessRulesRequest: DescribeAccessRulesRequest,
    AccessRule: AccessRule,
    DescribeFileSystemResponse: DescribeFileSystemResponse,
    AccessGroup: AccessGroup,
    ModifyFileSystemResponse: ModifyFileSystemResponse,
    ModifyFileSystemRequest: ModifyFileSystemRequest,
    DescribeLifeCycleRulesRequest: DescribeLifeCycleRulesRequest,
    AssociateAccessGroupsRequest: AssociateAccessGroupsRequest,
    ModifyAccessGroupRequest: ModifyAccessGroupRequest,
    DescribeFileSystemsResponse: DescribeFileSystemsResponse,
    DescribeFileSystemRequest: DescribeFileSystemRequest,
    CreateMountPointRequest: CreateMountPointRequest,
    DeleteAccessGroupRequest: DeleteAccessGroupRequest,
    ModifyLifeCycleRulesRequest: ModifyLifeCycleRulesRequest,
    CreateRestoreTasksResponse: CreateRestoreTasksResponse,
    DeleteFileSystemRequest: DeleteFileSystemRequest,
    DescribeMountPointsRequest: DescribeMountPointsRequest,
    DescribeMountPointRequest: DescribeMountPointRequest,
    DescribeAccessGroupsRequest: DescribeAccessGroupsRequest,
    DeleteAccessGroupResponse: DeleteAccessGroupResponse,
    ModifyLifeCycleRulesResponse: ModifyLifeCycleRulesResponse,
    DeleteMountPointResponse: DeleteMountPointResponse,
    CreateMountPointResponse: CreateMountPointResponse,
    CreateFileSystemRequest: CreateFileSystemRequest,
    DisassociateAccessGroupsRequest: DisassociateAccessGroupsRequest,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeAccessGroupsResponse: DescribeAccessGroupsResponse,
    DeleteMountPointRequest: DeleteMountPointRequest,
    DeleteFileSystemResponse: DeleteFileSystemResponse,
    CreateLifeCycleRulesRequest: CreateLifeCycleRulesRequest,
    CreateAccessRulesResponse: CreateAccessRulesResponse,
    DeleteLifeCycleRulesRequest: DeleteLifeCycleRulesRequest,
    FileSystem: FileSystem,
    RestoreTask: RestoreTask,
    ModifyMountPointRequest: ModifyMountPointRequest,
    DescribeAccessRulesResponse: DescribeAccessRulesResponse,
    DeleteLifeCycleRulesResponse: DeleteLifeCycleRulesResponse,
    CreateRestoreTasksRequest: CreateRestoreTasksRequest,
    Transition: Transition,
    DescribeRestoreTasksResponse: DescribeRestoreTasksResponse,
    DescribeLifeCycleRulesResponse: DescribeLifeCycleRulesResponse,
    CreateAccessGroupResponse: CreateAccessGroupResponse,
    DisassociateAccessGroupsResponse: DisassociateAccessGroupsResponse,
    DeleteAccessRulesRequest: DeleteAccessRulesRequest,
    DeleteAccessRulesResponse: DeleteAccessRulesResponse,
    DescribeFileSystemsRequest: DescribeFileSystemsRequest,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    LifeCycleRule: LifeCycleRule,
    CreateAccessRulesRequest: CreateAccessRulesRequest,
    DescribeAccessGroupResponse: DescribeAccessGroupResponse,
    MountPoint: MountPoint,
    DescribeMountPointsResponse: DescribeMountPointsResponse,
    DescribeRestoreTasksRequest: DescribeRestoreTasksRequest,
    DescribeAccessGroupRequest: DescribeAccessGroupRequest,
    AssociateAccessGroupsResponse: AssociateAccessGroupsResponse,
    ModifyAccessRulesResponse: ModifyAccessRulesResponse,
    CreateLifeCycleRulesResponse: CreateLifeCycleRulesResponse,
    ModifyAccessGroupResponse: ModifyAccessGroupResponse,
    Tag: Tag,
    ModifyMountPointResponse: ModifyMountPointResponse,
    ModifyAccessRulesRequest: ModifyAccessRulesRequest,
    CreateAccessGroupRequest: CreateAccessGroupRequest,
    DescribeMountPointResponse: DescribeMountPointResponse,

}
