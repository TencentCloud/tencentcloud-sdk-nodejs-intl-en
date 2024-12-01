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
 * CreateMigrationTask request structure.
 * @class
 */
class CreateMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Migration type. Valid values: `0` (bucket) and `1` (list). Default value: `0`.
         * @type {number || null}
         */
        this.MigrationType = null;

        /**
         * Migration mode. Default value: `0` (full migration).
         * @type {number || null}
         */
        this.MigrationMode = null;

        /**
         * SecretId of the data source account
         * @type {string || null}
         */
        this.SrcSecretId = null;

        /**
         * SecretKey of the data source account
         * @type {string || null}
         */
        this.SrcSecretKey = null;

        /**
         * File system instance ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system path
         * @type {string || null}
         */
        this.FsPath = null;

        /**
         * Overwrite policy for files with the same name. Valid values: `0` (retain the file with the latest modified time), `1` (overwrite); and `2` (not overwrite). Default value: `0`.
         * @type {number || null}
         */
        this.CoverType = null;

        /**
         * Data source service provider. Valid values: `COS` (Tencent Cloud COS), `OSS` (Alibaba Cloud OSS), and `OBS` (Huawei Cloud OBS).
         * @type {string || null}
         */
        this.SrcService = null;

        /**
         * Data source bucket name. Specify at least one of the bucket name or address.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Data source bucket region
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Data source bucket address. Specify at least one of the bucket name or address.
         * @type {string || null}
         */
        this.BucketAddress = null;

        /**
         * List address. This parameter is required if `MigrationType` is set to `1` (list).
         * @type {string || null}
         */
        this.ListAddress = null;

        /**
         * Target file system name
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * Source bucket path, which defaults to `/`
         * @type {string || null}
         */
        this.BucketPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;
        this.MigrationMode = 'MigrationMode' in params ? params.MigrationMode : null;
        this.SrcSecretId = 'SrcSecretId' in params ? params.SrcSecretId : null;
        this.SrcSecretKey = 'SrcSecretKey' in params ? params.SrcSecretKey : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsPath = 'FsPath' in params ? params.FsPath : null;
        this.CoverType = 'CoverType' in params ? params.CoverType : null;
        this.SrcService = 'SrcService' in params ? params.SrcService : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.BucketAddress = 'BucketAddress' in params ? params.BucketAddress : null;
        this.ListAddress = 'ListAddress' in params ? params.ListAddress : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.BucketPath = 'BucketPath' in params ? params.BucketPath : null;

    }
}

/**
 * ScaleUpFileSystem response structure.
 * @class
 */
class ScaleUpFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Target capacity after scaling
         * @type {number || null}
         */
        this.TargetCapacity = null;

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.TargetCapacity = 'TargetCapacity' in params ? params.TargetCapacity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * File system snapshot statistics
 * @class
 */
class SnapshotStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Total number of snapshots
         * @type {number || null}
         */
        this.SnapshotNumber = null;

        /**
         * Total snapshot size
         * @type {number || null}
         */
        this.SnapshotSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.SnapshotNumber = 'SnapshotNumber' in params ? params.SnapshotNumber : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;

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
 * DescribeSnapshotOperationLogs request structure.
 * @class
 */
class DescribeSnapshotOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Information of a CFS data migration task
 * @class
 */
class MigrationTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Migration type. Valid values: `0` (bucket) and `1` (list). Default value: `0`.
         * @type {number || null}
         */
        this.MigrationType = null;

        /**
         * Migration mode. Default value: `0` (full migration).
         * @type {number || null}
         */
        this.MigrationMode = null;

        /**
         * Data source bucket name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Data source bucket region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Data source bucket address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BucketAddress = null;

        /**
         * List address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListAddress = null;

        /**
         * File system instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * File system instance ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system path
         * @type {string || null}
         */
        this.FsPath = null;

        /**
         * Overwrite policy for files with the same name. Valid values: `0` (retain the file with the latest modified time), `1` (overwrite); and `2` (not overwrite). Default value: `0`.
         * @type {number || null}
         */
        this.CoverType = null;

        /**
         * Creation time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * End time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Migration status. Valid values: `0` (completed), `1` (in progress), and `2` (stopped).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of files
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileTotalCount = null;

        /**
         * Number of migrated files
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileMigratedCount = null;

        /**
         * Number of files that failed to be migrated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileFailedCount = null;

        /**
         * File size, in bytes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileTotalSize = null;

        /**
         * Size of migrated files, in bytes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileMigratedSize = null;

        /**
         * Size of files that failed to be migrated, in bytes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileFailedSize = null;

        /**
         * List of all files
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileTotalList = null;

        /**
         * List of migrated files
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileCompletedList = null;

        /**
         * List of files that failed to be migrated
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileFailedList = null;

        /**
         * Source bucket path
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BucketPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;
        this.MigrationMode = 'MigrationMode' in params ? params.MigrationMode : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.BucketAddress = 'BucketAddress' in params ? params.BucketAddress : null;
        this.ListAddress = 'ListAddress' in params ? params.ListAddress : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsPath = 'FsPath' in params ? params.FsPath : null;
        this.CoverType = 'CoverType' in params ? params.CoverType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FileTotalCount = 'FileTotalCount' in params ? params.FileTotalCount : null;
        this.FileMigratedCount = 'FileMigratedCount' in params ? params.FileMigratedCount : null;
        this.FileFailedCount = 'FileFailedCount' in params ? params.FileFailedCount : null;
        this.FileTotalSize = 'FileTotalSize' in params ? params.FileTotalSize : null;
        this.FileMigratedSize = 'FileMigratedSize' in params ? params.FileMigratedSize : null;
        this.FileFailedSize = 'FileFailedSize' in params ? params.FileFailedSize : null;
        this.FileTotalList = 'FileTotalList' in params ? params.FileTotalList : null;
        this.FileCompletedList = 'FileCompletedList' in params ? params.FileCompletedList : null;
        this.FileFailedList = 'FileFailedList' in params ? params.FileFailedList : null;
        this.BucketPath = 'BucketPath' in params ? params.BucketPath : null;

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
         * File system status. Valid values: `creating`, `create_failed`, `available`, `unserviced`, `upgrading`, `deleting`
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Storage used by the file system, in bytes
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
         * File system status. Valid values:
- creating
- mounting
- create_failed
- available
- unserviced
- upgrading
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

        /**
         * 
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * 
         * @type {string || null}
         */
        this.SnapStatus = null;

        /**
         * Total capacity of the file system
         * @type {number || null}
         */
        this.Capacity = null;

        /**
         * File system tag list
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * The lifecycle management status of a file system.
         * @type {string || null}
         */
        this.TieringState = null;

        /**
         * The details about tiered storage.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TieringDetailInfo || null}
         */
        this.TieringDetail = null;

        /**
         * 
         * @type {AutoScaleUpRule || null}
         */
        this.AutoScaleUpRule = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.SnapStatus = 'SnapStatus' in params ? params.SnapStatus : null;
        this.Capacity = 'Capacity' in params ? params.Capacity : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TieringState = 'TieringState' in params ? params.TieringState : null;

        if (params.TieringDetail) {
            let obj = new TieringDetailInfo();
            obj.deserialize(params.TieringDetail)
            this.TieringDetail = obj;
        }

        if (params.AutoScaleUpRule) {
            let obj = new AutoScaleUpRule();
            obj.deserialize(params.AutoScaleUpRule)
            this.AutoScaleUpRule = obj;
        }

    }
}

/**
 * BindAutoSnapshotPolicy request structure.
 * @class
 */
class BindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * List of file systems
         * @type {string || null}
         */
        this.FileSystemIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.FileSystemIds = 'FileSystemIds' in params ? params.FileSystemIds : null;

    }
}

/**
 * ModifyFileSystemAutoScaleUpRule request structure.
 * @class
 */
class ModifyFileSystemAutoScaleUpRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Threshold for triggering scaling. Value range: 10-90
         * @type {number || null}
         */
        this.ScaleUpThreshold = null;

        /**
         * Target threshold after scaling. Value range: 10-90. The value of this parameter must be smaller than that of `ScaleUpThreshold`.
         * @type {number || null}
         */
        this.TargetThreshold = null;

        /**
         * Rule status. Valid values: `0` (disabled) and `1` (enabled).

         * @type {number || null}
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.ScaleUpThreshold = 'ScaleUpThreshold' in params ? params.ScaleUpThreshold : null;
        this.TargetThreshold = 'TargetThreshold' in params ? params.TargetThreshold : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ScaleUpFileSystem request structure.
 * @class
 */
class ScaleUpFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Target capacity after scaling
         * @type {number || null}
         */
        this.TargetCapacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.TargetCapacity = 'TargetCapacity' in params ? params.TargetCapacity : null;

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
 * DescribeMigrationTasks response structure.
 * @class
 */
class DescribeMigrationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of migration tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Migration task details
         * @type {Array.<MigrationTaskInfo> || null}
         */
        this.MigrationTasks = null;

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

        if (params.MigrationTasks) {
            this.MigrationTasks = new Array();
            for (let z in params.MigrationTasks) {
                let obj = new MigrationTaskInfo();
                obj.deserialize(params.MigrationTasks[z]);
                this.MigrationTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies request structure.
 * @class
 */
class DescribeAutoSnapshotPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page length
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Ascending or descending order
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Sorting field
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

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
 * BindAutoSnapshotPolicy response structure.
 * @class
 */
class BindAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopMigrationTask response structure.
 * @class
 */
class StopMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Migration status. Valid values: `0` (completed), `1` (in progress), and `2` (stopped).
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Current status of the CFS service for this user. Valid values: `creating` (activating); `created` (activated)
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
 * Snapshot policy information
 * @class
 */
class AutoSnapshotPolicyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Snapshot policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Snapshot policy creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Number of bound file systems
         * @type {number || null}
         */
        this.FileSystemNums = null;

        /**
         * The specific day of the week on which to create a snapshot. This parameter is mutually exclusive with `DayOfMonth` and `IntervalDays`.
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * The hour of a day at which to regularly back up the snapshot
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * Whether to activate the scheduled snapshot feature
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * Next time to trigger snapshot
         * @type {string || null}
         */
        this.NextActiveTime = null;

        /**
         * Snapshot policy status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Retention period
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * Region
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * File system information
         * @type {Array.<FileSystemByPolicy> || null}
         */
        this.FileSystems = null;

        /**
         * The specific day of the month on which to create a snapshot. This parameter is mutually exclusive with `DayOfWeek` and `IntervalDays`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * The snapshot interval (1 to 365 days). This parameter is mutually exclusive with `DayOfWeek` and `DayOfMonth`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IntervalDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.FileSystemNums = 'FileSystemNums' in params ? params.FileSystemNums : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.NextActiveTime = 'NextActiveTime' in params ? params.NextActiveTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.FileSystems) {
            this.FileSystems = new Array();
            for (let z in params.FileSystems) {
                let obj = new FileSystemByPolicy();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.DayOfMonth = 'DayOfMonth' in params ? params.DayOfMonth : null;
        this.IntervalDays = 'IntervalDays' in params ? params.IntervalDays : null;

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
 * DeleteAutoSnapshotPolicy request structure.
 * @class
 */
class DeleteAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

    }
}

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
 * DeleteCfsSnapshot response structure.
 * @class
 */
class DeleteCfsSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
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
 * CreateCfsSnapshot request structure.
 * @class
 */
class CreateCfsSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot tag
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

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
 * DescribeBucketList request structure.
 * @class
 */
class DescribeBucketListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data source service provider. Valid values: `COS` (Tencent Cloud COS), `OSS` (Alibaba Cloud OSS), and `OBS` (Huawei Cloud OBS).
         * @type {string || null}
         */
        this.SrcService = null;

        /**
         * SecretId of the data source account

         * @type {string || null}
         */
        this.SrcSecretId = null;

        /**
         * SecretKey of the data source account
         * @type {string || null}
         */
        this.SrcSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcService = 'SrcService' in params ? params.SrcService : null;
        this.SrcSecretId = 'SrcSecretId' in params ? params.SrcSecretId : null;
        this.SrcSecretKey = 'SrcSecretKey' in params ? params.SrcSecretKey : null;

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
 * DeleteMigrationTask response structure.
 * @class
 */
class DeleteMigrationTaskResponse extends  AbstractModel {
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
 * DescribeSnapshotOperationLogs response structure.
 * @class
 */
class DescribeSnapshotOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Operation log
         * @type {Array.<SnapshotOperateLog> || null}
         */
        this.SnapshotOperates = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.SnapshotOperates) {
            this.SnapshotOperates = new Array();
            for (let z in params.SnapshotOperates) {
                let obj = new SnapshotOperateLog();
                obj.deserialize(params.SnapshotOperates[z]);
                this.SnapshotOperates.push(obj);
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
 * DeleteMigrationTask request structure.
 * @class
 */
class DeleteMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * CreateAutoSnapshotPolicy response structure.
 * @class
 */
class CreateAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFileSystemAutoScaleUpRule response structure.
 * @class
 */
class ModifyFileSystemAutoScaleUpRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Rule status. Valid values: `0` (disabled) and `1` (enabled).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Threshold for triggering scaling. Value range: 10-90
         * @type {number || null}
         */
        this.ScaleUpThreshold = null;

        /**
         * Target threshold after scaling. Value range: 10-90
         * @type {number || null}
         */
        this.TargetThreshold = null;

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ScaleUpThreshold = 'ScaleUpThreshold' in params ? params.ScaleUpThreshold : null;
        this.TargetThreshold = 'TargetThreshold' in params ? params.TargetThreshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateCfsSnapshot response structure.
 * @class
 */
class CreateCfsSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Bucket information
 * @class
 */
class BucketInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bucket name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Bucket region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Snapshot operation log
 * @class
 */
class SnapshotOperateLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Operation time
         * @type {string || null}
         */
        this.ActionTime = null;

        /**
         * Operation name
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Result
         * @type {number || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.ActionTime = 'ActionTime' in params ? params.ActionTime : null;
        this.ActionName = 'ActionName' in params ? params.ActionName : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DescribeBucketList response structure.
 * @class
 */
class DescribeBucketListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of buckets
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Bucket list
         * @type {Array.<BucketInfo> || null}
         */
        this.BucketList = null;

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

        if (params.BucketList) {
            this.BucketList = new Array();
            for (let z in params.BucketList) {
                let obj = new BucketInfo();
                obj.deserialize(params.BucketList[z]);
                this.BucketList.push(obj);
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
 * DescribeCfsSnapshotOverview response structure.
 * @class
 */
class DescribeCfsSnapshotOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics
         * @type {Array.<SnapshotStatistics> || null}
         */
        this.StatisticsList = null;

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

        if (params.StatisticsList) {
            this.StatisticsList = new Array();
            for (let z in params.StatisticsList) {
                let obj = new SnapshotStatistics();
                obj.deserialize(params.StatisticsList[z]);
                this.StatisticsList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 
 * @class
 */
class AutoScaleUpRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {number || null}
         */
        this.ScaleThreshold = null;

        /**
         * 
         * @type {number || null}
         */
        this.TargetThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScaleThreshold = 'ScaleThreshold' in params ? params.ScaleThreshold : null;
        this.TargetThreshold = 'TargetThreshold' in params ? params.TargetThreshold : null;

    }
}

/**
 * DeleteCfsSnapshot request structure.
 * @class
 */
class DeleteCfsSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * The list of the IDs of the file system snapshots to be deleted. At least one of `SnapshotId` and `SnapshotIds` must be specified.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

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

        /**
         * 
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 
         * @type {string || null}
         */
        this.CreationToken = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;

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
         * Network type. Valid values: `VPC` and `CCN`. Select `VPC` for a Standard or High-Performance file system, and `CCN` for a Standard Turbo or High-Performance Turbo one.
         * @type {string || null}
         */
        this.NetInterface = null;

        /**
         * Permission group ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system protocol. Valid values: `NFS`, `CIFS`, `TURBO`. If this parameter is left empty, `NFS` is used by default. For the Turbo series, you must set this parameter to `TURBO`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Storage type of the file system. Valid values: `SD` (Standard), `HP` (High-Performance), `TB` (Standard Turbo), and `TP` (High-Performance Turbo). Default value: `SD`.
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
         * IP address (this parameter supports only the VPC network type, and the Turbo series is not supported). If this parameter is left empty, a random IP in the subnet will be assigned.
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

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. This string is valid for 2 hours.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * CCN instance ID (required if the network type is CCN)
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN IP range used by the CFS (required if the network type is CCN), which cannot conflict with other IP ranges bound in CCN
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * File system capacity, in GiB (required for the Turbo series). For Standard Turbo, the minimum purchase required is 40,960 GiB (40 TiB) and the expansion increment is 20,480 GiB (20 TiB). For High-Performance Turbo, the minimum purchase required is 20,480 GiB (20 TiB) and the expansion increment is 10,240 GiB (10 TiB).
         * @type {number || null}
         */
        this.Capacity = null;

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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Capacity = 'Capacity' in params ? params.Capacity : null;

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
 * DescribeMigrationTasks request structure.
 * @class
 */
class DescribeMigrationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of entries per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <br><li> taskId

Filter by **migration task ID**
Type: String

Required: No

<br><li> taskName

Fuzzy filter by **migration task name**
Type: String

Required: No

Each request can have up to 10 `Filters` and 100 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Conditional filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Name
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy request structure.
 * @class
 */
class UnbindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of the file systems to be unbound, separated by comma
         * @type {string || null}
         */
        this.FileSystemIds = null;

        /**
         * ID of the snapshot to be unbound
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemIds = 'FileSystemIds' in params ? params.FileSystemIds : null;
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy response structure.
 * @class
 */
class UnbindAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeCfsSnapshots request structure.
 * @class
 */
class DescribeCfsSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * The starting position of paging
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page length
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Order field
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorting order (ascending or descending)
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

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
 * UpdateAutoSnapshotPolicy request structure.
 * @class
 */
class UpdateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Snapshot policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * The day of the week on which to regularly back up the snapshot
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * The hour of a day at which to regularly back up the snapshot
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * Snapshot retention period
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * Whether to activate the scheduled snapshot feature
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * The specific day of the month on which to create a snapshot. This parameter is mutually exclusive with `DayOfWeek`.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * The snapshot interval. This parameter is mutually exclusive with `DayOfWeek` and `DayOfMonth`.
         * @type {number || null}
         */
        this.IntervalDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.DayOfMonth = 'DayOfMonth' in params ? params.DayOfMonth : null;
        this.IntervalDays = 'IntervalDays' in params ? params.IntervalDays : null;

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
         * File system ID. Currently, only Standard file systems are supported.
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
 * UpdateAutoSnapshotPolicy response structure.
 * @class
 */
class UpdateAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the file system bound to the snapshot policy
 * @class
 */
class FileSystemByPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system name
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * File system size
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * Storage class
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Total snapshot size
         * @type {number || null}
         */
        this.TotalSnapshotSize = null;

        /**
         * File system creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Region ID of the file system
         * @type {number || null}
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
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.TotalSnapshotSize = 'TotalSnapshotSize' in params ? params.TotalSnapshotSize : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * Snapshot information
 * @class
 */
class SnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Snapshot status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Snapshot size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Retention period in days
         * @type {number || null}
         */
        this.AliveDay = null;

        /**
         * Snapshot progress
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Snapshot deletion time
         * @type {string || null}
         */
        this.DeleteTime = null;

        /**
         * File system name
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * Snapshot tag
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Snapshot type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.AliveDay = 'AliveDay' in params ? params.AliveDay : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SnapshotType = 'SnapshotType' in params ? params.SnapshotType : null;

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

        /**
         * CCN instance ID used by CFS Turbo
         * @type {string || null}
         */
        this.CcnID = null;

        /**
         * CCN IP range used by CFS Turbo
         * @type {string || null}
         */
        this.CidrBlock = null;

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
        this.CcnID = 'CcnID' in params ? params.CcnID : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;

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
 * CreateMigrationTask response structure.
 * @class
 */
class CreateMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAutoSnapshotPolicy response structure.
 * @class
 */
class DeleteAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot policy ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
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
 * UpdateCfsSnapshotAttribute response structure.
 * @class
 */
class UpdateCfsSnapshotAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateCfsSnapshotAttribute request structure.
 * @class
 */
class UpdateCfsSnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system snapshot ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * File system snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * File system snapshot retention period in days
         * @type {number || null}
         */
        this.AliveDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;

    }
}

/**
 * The details about tiered storage.
 * @class
 */
class TieringDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * STANDARD_IA storage usage
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TieringSizeInBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TieringSizeInBytes = 'TieringSizeInBytes' in params ? params.TieringSizeInBytes : null;

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
 * DescribeCfsSnapshots response structure.
 * @class
 */
class DescribeCfsSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Snapshot information description
         * @type {Array.<SnapshotInfo> || null}
         */
        this.Snapshots = null;

        /**
         * Total size of snapshots
         * @type {number || null}
         */
        this.TotalSize = null;

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

        if (params.Snapshots) {
            this.Snapshots = new Array();
            for (let z in params.Snapshots) {
                let obj = new SnapshotInfo();
                obj.deserialize(params.Snapshots[z]);
                this.Snapshots.push(obj);
            }
        }
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopMigrationTask request structure.
 * @class
 */
class StopMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration task name
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies response structure.
 * @class
 */
class DescribeAutoSnapshotPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of snapshot policies
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Snapshot policy information
         * @type {Array.<AutoSnapshotPolicyInfo> || null}
         */
        this.AutoSnapshotPolicies = null;

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

        if (params.AutoSnapshotPolicies) {
            this.AutoSnapshotPolicies = new Array();
            for (let z in params.AutoSnapshotPolicies) {
                let obj = new AutoSnapshotPolicyInfo();
                obj.deserialize(params.AutoSnapshotPolicies[z]);
                this.AutoSnapshotPolicies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsSnapshotOverview request structure.
 * @class
 */
class DescribeCfsSnapshotOverviewRequest extends  AbstractModel {
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
 * CreateAutoSnapshotPolicy request structure.
 * @class
 */
class CreateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time point when to repeat the snapshot operation
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * Policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * The day of the week on which to repeat the snapshot operation
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * Snapshot retention period
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * The specific day (day 1 to day 31) of the month on which to automatically create a snapshot.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * The snapshot interval, in days.
         * @type {number || null}
         */
        this.IntervalDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.DayOfMonth = 'DayOfMonth' in params ? params.DayOfMonth : null;
        this.IntervalDays = 'IntervalDays' in params ? params.IntervalDays : null;

    }
}

module.exports = {
    CreateMigrationTaskRequest: CreateMigrationTaskRequest,
    ScaleUpFileSystemResponse: ScaleUpFileSystemResponse,
    SnapshotStatistics: SnapshotStatistics,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DescribeSnapshotOperationLogsRequest: DescribeSnapshotOperationLogsRequest,
    MigrationTaskInfo: MigrationTaskInfo,
    FileSystemClient: FileSystemClient,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    FileSystemInfo: FileSystemInfo,
    BindAutoSnapshotPolicyRequest: BindAutoSnapshotPolicyRequest,
    ModifyFileSystemAutoScaleUpRuleRequest: ModifyFileSystemAutoScaleUpRuleRequest,
    ScaleUpFileSystemRequest: ScaleUpFileSystemRequest,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DescribeMigrationTasksResponse: DescribeMigrationTasksResponse,
    DescribeAutoSnapshotPoliciesRequest: DescribeAutoSnapshotPoliciesRequest,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    BindAutoSnapshotPolicyResponse: BindAutoSnapshotPolicyResponse,
    StopMigrationTaskResponse: StopMigrationTaskResponse,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    AutoSnapshotPolicyInfo: AutoSnapshotPolicyInfo,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DeleteAutoSnapshotPolicyRequest: DeleteAutoSnapshotPolicyRequest,
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    DeleteCfsSnapshotResponse: DeleteCfsSnapshotResponse,
    DescribeCfsFileSystemClientsResponse: DescribeCfsFileSystemClientsResponse,
    DeleteMountTargetResponse: DeleteMountTargetResponse,
    CreateCfsSnapshotRequest: CreateCfsSnapshotRequest,
    DescribeBucketListRequest: DescribeBucketListRequest,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    DeleteMigrationTaskResponse: DeleteMigrationTaskResponse,
    DescribeSnapshotOperationLogsResponse: DescribeSnapshotOperationLogsResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    DeleteMigrationTaskRequest: DeleteMigrationTaskRequest,
    PGroup: PGroup,
    CreateAutoSnapshotPolicyResponse: CreateAutoSnapshotPolicyResponse,
    ModifyFileSystemAutoScaleUpRuleResponse: ModifyFileSystemAutoScaleUpRuleResponse,
    AvailableType: AvailableType,
    CreateCfsSnapshotResponse: CreateCfsSnapshotResponse,
    DeleteMountTargetRequest: DeleteMountTargetRequest,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    BucketInfo: BucketInfo,
    SnapshotOperateLog: SnapshotOperateLog,
    DescribeBucketListResponse: DescribeBucketListResponse,
    UpdateCfsFileSystemNameResponse: UpdateCfsFileSystemNameResponse,
    DescribeCfsSnapshotOverviewResponse: DescribeCfsSnapshotOverviewResponse,
    AutoScaleUpRule: AutoScaleUpRule,
    DeleteCfsSnapshotRequest: DeleteCfsSnapshotRequest,
    DescribeCfsFileSystemClientsRequest: DescribeCfsFileSystemClientsRequest,
    AvailableProtoStatus: AvailableProtoStatus,
    DescribeCfsFileSystemsRequest: DescribeCfsFileSystemsRequest,
    AvailableRegion: AvailableRegion,
    CreateCfsFileSystemRequest: CreateCfsFileSystemRequest,
    AvailableZone: AvailableZone,
    DescribeMigrationTasksRequest: DescribeMigrationTasksRequest,
    Filter: Filter,
    UnbindAutoSnapshotPolicyRequest: UnbindAutoSnapshotPolicyRequest,
    UnbindAutoSnapshotPolicyResponse: UnbindAutoSnapshotPolicyResponse,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    PGroupRuleInfo: PGroupRuleInfo,
    DescribeCfsSnapshotsRequest: DescribeCfsSnapshotsRequest,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    UpdateAutoSnapshotPolicyRequest: UpdateAutoSnapshotPolicyRequest,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    UpdateAutoSnapshotPolicyResponse: UpdateAutoSnapshotPolicyResponse,
    FileSystemByPolicy: FileSystemByPolicy,
    SnapshotInfo: SnapshotInfo,
    MountInfo: MountInfo,
    UpdateCfsFileSystemPGroupRequest: UpdateCfsFileSystemPGroupRequest,
    CreateMigrationTaskResponse: CreateMigrationTaskResponse,
    DeleteAutoSnapshotPolicyResponse: DeleteAutoSnapshotPolicyResponse,
    DeleteCfsRuleResponse: DeleteCfsRuleResponse,
    UpdateCfsSnapshotAttributeResponse: UpdateCfsSnapshotAttributeResponse,
    UpdateCfsPGroupRequest: UpdateCfsPGroupRequest,
    TagInfo: TagInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    UpdateCfsSnapshotAttributeRequest: UpdateCfsSnapshotAttributeRequest,
    TieringDetailInfo: TieringDetailInfo,
    PGroupInfo: PGroupInfo,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    DescribeCfsSnapshotsResponse: DescribeCfsSnapshotsResponse,
    StopMigrationTaskRequest: StopMigrationTaskRequest,
    DescribeAutoSnapshotPoliciesResponse: DescribeAutoSnapshotPoliciesResponse,
    DescribeCfsSnapshotOverviewRequest: DescribeCfsSnapshotOverviewRequest,
    CreateAutoSnapshotPolicyRequest: CreateAutoSnapshotPolicyRequest,

}
