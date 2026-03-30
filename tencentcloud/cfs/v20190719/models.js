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
         * Migration method flags, default is 0. 0: bucket migration; 1: inventory migration.
         * @type {number || null}
         */
        this.MigrationType = null;

        /**
         * Migration mode. Default value: `0` (full migration).
         * @type {number || null}
         */
        this.MigrationMode = null;

        /**
         * SecretId of the data source account.
         * @type {string || null}
         */
        this.SrcSecretId = null;

        /**
         * SecretKey of the data source account.
         * @type {string || null}
         */
        this.SrcSecretKey = null;

        /**
         * File system instance ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
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
         * Data source service providers. COS: tencent cloud COS, OSS: alibaba cloud OSS, OBS: huawei cloud OBS.
         * @type {string || null}
         */
        this.SrcService = null;

        /**
         * Data source bucket name. specifies the bucket name for migration. either BucketName or BucketAddress is required for bucket migration. this parameter is not required for inventory migration.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Data source bucket region
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Source bucket address. specifies the bucket address of the data source. for bucket migration, either BucketName or BucketAddress is required. this parameter is not required for inventory migration.
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
         * Source bucket path, defaults to /.
         * @type {string || null}
         */
        this.BucketPath = null;

        /**
         * Migration direction. valid values: 0 (cos migration to file system), 1 (file system migration to cos). default is 0.
         * @type {number || null}
         */
        this.Direction = null;

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
        this.Direction = 'Direction' in params ? params.Direction : null;

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
         * Target capacity after scale-out (unit GiB).
         * @type {number || null}
         */
        this.TargetCapacity = null;

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
         * Total snapshot capacity in MiB.
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
 * CreateLifecycleDataTask request structure.
 * @class
 */
class CreateLifecycleDataTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system unique ID.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Lifecycle task type; archive: settlement; restore: preheating; release: data release; metaload: metadata loading.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The path or file to be settled supports passing only one path and cannot be empty.
         * @type {string || null}
         */
        this.TaskPath = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Data flow ID. this api can be accessed through DescribeDataFlow.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * When a file in CFS Turbo and an external storage have the same name, whether to overwrite. true: overwrite. false: not overwrite (at the same time, data storage will not be released). default false when empty.
         * @type {boolean || null}
         */
        this.IsOverwrite = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskPath = 'TaskPath' in params ? params.TaskPath : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.IsOverwrite = 'IsOverwrite' in params ? params.IsOverwrite : null;

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
 * ModifyDataFlow response structure.
 * @class
 */
class ModifyDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow manage ID.
         * @type {string || null}
         */
        this.DataFlowId = null;

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
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
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
         * Snapshot ID, which can be obtained by querying through the [DescribeCfsSnapshots](https://www.tencentcloud.com/document/api/582/80206?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Start time, format "YYYY-MM-DD hh:MM:ss".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, format "YYYY-MM-DD hh:MM:ss".
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
 * CreateLifecyclePolicyDownloadTask request structure.
 * @class
 */
class CreateLifecyclePolicyDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Download file type, including FileSuccessList, FileTotalList, FileFailedList.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Type = 'Type' in params ? params.Type : null;

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
         * Data source bucket name.
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * Source bucket region.
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * Data source bucket address.
         * @type {string || null}
         */
        this.BucketAddress = null;

        /**
         * Checklist address.
         * @type {string || null}
         */
        this.ListAddress = null;

        /**
         * File system instance name.
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
         * Completion/Termination time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Migration status. 0: completed; 1: creating; 2: running; 3: terminating; 4: terminated; 5: creation failed; 6: running failure; 7: ending; 8: deleting; 9: waiting.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of files.
         * @type {number || null}
         */
        this.FileTotalCount = null;

        /**
         * Number of migrated files.
         * @type {number || null}
         */
        this.FileMigratedCount = null;

        /**
         * Number of failed files in migration.
         * @type {number || null}
         */
        this.FileFailedCount = null;

        /**
         * File capacity, in Byte.
         * @type {number || null}
         */
        this.FileTotalSize = null;

        /**
         * Migrated file capacity in Byte.
         * @type {number || null}
         */
        this.FileMigratedSize = null;

        /**
         * Capacity of failed migration files, in Byte.
         * @type {number || null}
         */
        this.FileFailedSize = null;

        /**
         * Total inventory.
         * @type {string || null}
         */
        this.FileTotalList = null;

        /**
         * File list completed.
         * @type {string || null}
         */
        this.FileCompletedList = null;

        /**
         * Failed file list.
         * @type {string || null}
         */
        this.FileFailedList = null;

        /**
         * Source bucket path.
         * @type {string || null}
         */
        this.BucketPath = null;

        /**
         * Migration direction. valid values: 0 (cos migration to file system), 1 (file system migration to cos). default is 0.
         * @type {number || null}
         */
        this.Direction = null;

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
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * StopLifecycleDataTask request structure.
 * @class
 */
class StopLifecycleDataTaskRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * Availability zone name, such as ap-beijing-1. see the region and availability zone list in the description document (https://www.tencentcloud.com/document/api/582/38144?from_cn_redirect=1).
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
 * CreateLifecycleDataTask response structure.
 * @class
 */
class CreateLifecycleDataTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyPathLifecyclePolicy request structure.
 * @class
 */
class ApplyPathLifecyclePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

        /**
         * List of absolute paths for directories associated with the lifecycle management policy.
         * @type {Array.<PathInfo> || null}
         */
        this.Paths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;

        if (params.Paths) {
            this.Paths = new Array();
            for (let z in params.Paths) {
                let obj = new PathInfo();
                obj.deserialize(params.Paths[z]);
                this.Paths.push(obj);
            }
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
         * List of file system ids to be unbound, separated by ",". file system ids can be obtained by querying the file system list through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Unbound snapshot policy ID, which can be obtained by querying through the [DescribeAutoSnapshotPolicies](https://www.tencentcloud.com/document/api/582/80208?from_cn_redirect=1) api.
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
         * File system ID, which can be obtained by querying the file system list; [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Threshold for triggering scaling. Value range: 10-90
         * @type {number || null}
         */
        this.ScaleUpThreshold = null;

        /**
         * Target threshold after expansion. value range: 10-90. the value must be less than ScaleUpThreshold.
         * @type {number || null}
         */
        this.TargetThreshold = null;

        /**
         * Rule status 0: turn off, 1: turn on; keep the original status if not specified.
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
         * File system ID, which can be obtained by querying the file system list; [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Target capacity after scale-out (unit GiB).
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
         * Total number of migration tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Migration task details
         * @type {Array.<MigrationTaskInfo> || null}
         */
        this.MigrationTasks = null;

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
         * File system ID. you can obtain the ID by querying the file system list through the [describecfsfilesystems](https://www.tencentcloud.com/document/api/582/38170?from_cn_redirect=1) api.
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
 * CreateDataFlow response structure.
 * @class
 */
class CreateDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow manage ID.
         * @type {string || null}
         */
        this.DataFlowId = null;

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
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
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
         * Snapshot policy name.
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
         * Whether the periodic snapshot function is activated; 1 indicates activated, 0 indicates inactive.
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * Next time to trigger snapshot
         * @type {string || null}
         */
        this.NextActiveTime = null;

        /**
         * Snapshot policy status. available represents normal status. only status here.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Account ID.
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

        /**
         * Snapshot retention time for cross-region replication, in days.
         * @type {number || null}
         */
        this.CrossRegionsAliveDays = null;

        /**
         * Snapshot policy tag.
         * @type {Array.<TagInfo> || null}
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
        this.CrossRegionsAliveDays = 'CrossRegionsAliveDays' in params ? params.CrossRegionsAliveDays : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateLifecyclePolicyDownloadTask response structure.
 * @class
 */
class CreateLifecyclePolicyDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download path.
         * @type {string || null}
         */
        this.DownloadAddress = null;

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
        this.DownloadAddress = 'DownloadAddress' in params ? params.DownloadAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
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
         * File system ID. obtain it by querying the file system interface (https://www.tencentcloud.com/document/api/582/38170?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * User-Defined file system name, alphanumeric chinese characters or _,- within 64 bytes. at least one of them or CreationToken must be provided.
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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
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
 * DoDirectoryOperation response structure.
 * @class
 */
class DoDirectoryOperationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1: success 0: failure. for the create directory operation, 1 indicates successful creation, 0 indicates creation failed. for the confirm directory existence operation, 1 indicates the directory exists, 0 indicates the directory does not exist. in addition, if the directory already exists during the create directory operation, it will also return creation succeeded.
         * @type {number || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLifecyclePolicies request structure.
 * @class
 */
class DescribeLifecyclePoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy name.
         * @type {string || null}
         */
        this.LifecyclePolicyName = null;

        /**
         * Number of lifecycle management policies per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number of the list.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * File system ID.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyName = 'LifecyclePolicyName' in params ? params.LifecyclePolicyName : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;

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
         * Snapshot policy ID, which can be obtained by querying the snapshot policy interface through the [DescribeAutoSnapshotPolicies](https://www.tencentcloud.com/document/api/582/80208?from_cn_redirect=1) api.
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
 * CreateLifecyclePolicy response structure.
 * @class
 */
class CreateLifecyclePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

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
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;
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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Rule ID, which can be obtained through the [DescribeCfsRules](https://www.tencentcloud.com/document/api/582/38156?from_cn_redirect=1) api.
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
         * User permission. valid values: all_squash, no_all_squash, root_squash, no_root_squash. default value: root_squash.
All_squash: all accessing users (including the root user) will be mapped to anonymous users or groups.
no_all_squash: all accessing users (including the root user) retain original UID/GID information.
root_squash: maps visiting root user to anonymous user or user group. non-root user keeps original UID/GID information.
no_root_squash: has the same effect as no_all_squash. all accessing users (including the root user) retain their original UID/GID information.

         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * Rule priority. value range: 1-100. among them, 1 is the highest and 100 is the minimum. default value: 100.
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
 * StopLifecycleDataTask response structure.
 * @class
 */
class StopLifecycleDataTaskResponse extends  AbstractModel {
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
 * DescribeAvailableZoneInfo response structure.
 * @class
 */
class DescribeAvailableZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Resource sale status in each availability zone as well as supported storage types, storage protocol, etc.</p>
         * @type {Array.<AvailableRegion> || null}
         */
        this.RegionZones = null;

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
         * Total number of file systems.
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

        if (params.ClientList) {
            this.ClientList = new Array();
            for (let z in params.ClientList) {
                let obj = new FileSystemClient();
                obj.deserialize(params.ClientList[z]);
                this.ClientList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLifecycleDataTask response structure.
 * @class
 */
class DescribeLifecycleDataTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task Array
         * @type {Array.<LifecycleDataTaskInfo> || null}
         */
        this.LifecycleDataTask = null;

        /**
         * Total Number of Query Results
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

        if (params.LifecycleDataTask) {
            this.LifecycleDataTask = new Array();
            for (let z in params.LifecycleDataTask) {
                let obj = new LifecycleDataTaskInfo();
                obj.deserialize(params.LifecycleDataTask[z]);
                this.LifecycleDataTask.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLifecyclePolicy response structure.
 * @class
 */
class ModifyLifecyclePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

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
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;
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
         * File system ID, which can be obtained by querying the file system list; [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Snapshot name, supports no more than 64 characters in length, supports chinese, numbers, _, and -.
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
         * SecretId of the data source account.
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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Rule ID, which can be obtained through the [DescribeCfsRules](https://www.tencentcloud.com/document/api/582/38156?from_cn_redirect=1) api.
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
 * ApplyPathLifecyclePolicy response structure.
 * @class
 */
class ApplyPathLifecyclePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns existing rule information if there is a rule conflict.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CheckResult> || null}
         */
        this.CheckResults = null;

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

        if (params.CheckResults) {
            this.CheckResults = new Array();
            for (let z in params.CheckResults) {
                let obj = new CheckResult();
                obj.deserialize(params.CheckResults[z]);
                this.CheckResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeLifecycleDataTask request structure.
 * @class
 */
class DescribeLifecycleDataTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time. must be earlier than EndTime. only supports querying task data within the most recent 3 months.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. must be later than StartTime. only supports querying task data within the most recent 3 months.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Offset paging number	
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit page size	
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions, TaskName, FileSystemId, Type.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * File system version; v3.1: pcfs/hifs v4.0: Turbo.
         * @type {string || null}
         */
        this.CfsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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
        this.CfsVersion = 'CfsVersion' in params ? params.CfsVersion : null;

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
 * DeleteCfsFileSystem request structure.
 * @class
 */
class DeleteCfsFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID, which can be obtained by [querying the file system interface](https://www.tencentcloud.com/document/api/582/38170?from_cn_redirect=1). note: the DeleteMountTarget api must be called to remove the mount point of this file system before file system deletion, otherwise deletion will fail.
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
 * DeleteLifecyclePolicy response structure.
 * @class
 */
class DeleteLifecyclePolicyResponse extends  AbstractModel {
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
 * Returns the rule information list if there is a rule conflict.
 * @class
 */
class CheckResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

        /**
         * File system ID.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Directory absolute path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * List of management rules associated with the lifecycle management policy.
         * @type {Array.<LifecycleRule> || null}
         */
        this.LifecycleRules = null;

        /**
         * Target path.
         * @type {string || null}
         */
        this.TargetPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.LifecycleRules) {
            this.LifecycleRules = new Array();
            for (let z in params.LifecycleRules) {
                let obj = new LifecycleRule();
                obj.deserialize(params.LifecycleRules[z]);
                this.LifecycleRules.push(obj);
            }
        }
        this.TargetPath = 'TargetPath' in params ? params.TargetPath : null;

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
         * Rule status 0: turn off, 1: turn on.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Expansion threshold. value range: 10-90.
         * @type {number || null}
         */
        this.ScaleUpThreshold = null;

        /**
         * Reach the threshold after expansion. value range: [10-90].
         * @type {number || null}
         */
        this.TargetThreshold = null;

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ScaleUpThreshold = 'ScaleUpThreshold' in params ? params.ScaleUpThreshold : null;
        this.TargetThreshold = 'TargetThreshold' in params ? params.TargetThreshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Data flow information.
 * @class
 */
class DataFlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow manage ID.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * Data flow name.
         * @type {string || null}
         */
        this.DataFlowName = null;

        /**
         * Source data type.
         * @type {string || null}
         */
        this.SourceStorageType = null;

        /**
         * Source storage address.
         * @type {string || null}
         */
        this.SourceStorageAddress = null;

        /**
         * Source path.
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * Directory path.
         * @type {string || null}
         */
        this.TargetPath = null;

        /**
         * available: effective.
pending: configuring.
unavailable.
Deleting: deleting.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * File system ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 0: disable auto-update.

1: enable auto-update.
         * @type {number || null}
         */
        this.AutoRefresh = null;

        /**
         * Topic Parameter used by KafkaConsumer during consumption
         * @type {string || null}
         */
        this.UserKafkaTopic = null;

        /**
         * Service address.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Kafka consuming user name.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Auto refresh status, available: in effect.
pending: configuring.
unavailable.
         * @type {string || null}
         */
        this.AutoRefreshStatus = null;

        /**
         * Automatically refresh start time.
         * @type {string || null}
         */
        this.AutoRefreshTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.DataFlowName = 'DataFlowName' in params ? params.DataFlowName : null;
        this.SourceStorageType = 'SourceStorageType' in params ? params.SourceStorageType : null;
        this.SourceStorageAddress = 'SourceStorageAddress' in params ? params.SourceStorageAddress : null;
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.TargetPath = 'TargetPath' in params ? params.TargetPath : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.AutoRefresh = 'AutoRefresh' in params ? params.AutoRefresh : null;
        this.UserKafkaTopic = 'UserKafkaTopic' in params ? params.UserKafkaTopic : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.AutoRefreshStatus = 'AutoRefreshStatus' in params ? params.AutoRefreshStatus : null;
        this.AutoRefreshTime = 'AutoRefreshTime' in params ? params.AutoRefreshTime : null;

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
         * <p>Protocol and sale details</p>
         * @type {Array.<AvailableProtoStatus> || null}
         */
        this.Protocols = null;

        /**
         * <p>Storage type. In the return value, SD indicates General Standard Storage, HP indicates General Performance Storage, TB indicates Standard Turbo, and TP indicates High-Performance Turbo.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Support for prepaid. In the return value, true means supported and false means unsupported.</p>
         * @type {boolean || null}
         */
        this.Prepayment = null;

        /**
         * <p>File system version</p><p>Enumeration value:</p><ul><li>v1.5: Universal Series</li><li>v3.1: Universal Series (enhanced)</li><li>v4.0: Turbo series</li></ul>
         * @type {string || null}
         */
        this.Version = null;

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
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * Lifecycle management policy information.
 * @class
 */
class LifecyclePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * <P>The time when the lifecycle management policy was created</p>.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Lifecycle management policy ID.</p>.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

        /**
         * <P>Lifecycle management policy name</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LifecyclePolicyName = null;

        /**
         * <P>List of management rules associated with the lifecycle management policy.</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LifecycleRule> || null}
         */
        this.LifecycleRules = null;

        /**
         * <P>List of absolute paths for directories associated with the lifecycle management policy</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PathInfo> || null}
         */
        this.Paths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;
        this.LifecyclePolicyName = 'LifecyclePolicyName' in params ? params.LifecyclePolicyName : null;

        if (params.LifecycleRules) {
            this.LifecycleRules = new Array();
            for (let z in params.LifecycleRules) {
                let obj = new LifecycleRule();
                obj.deserialize(params.LifecycleRules[z]);
                this.LifecycleRules.push(obj);
            }
        }

        if (params.Paths) {
            this.Paths = new Array();
            for (let z in params.Paths) {
                let obj = new PathInfo();
                obj.deserialize(params.Paths[z]);
                this.Paths.push(obj);
            }
        }

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Manage rule associated with the lifecycle management policy.
 * @class
 */
class LifecycleRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage type after data dump. among them: InfrequentAccess: infrequent medium storage; ColdStorage: cold storage.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Data dump FILE type. among them, BIG_FILE: extra large FILE; STD_FILE: regular FILE; SMALL_FILE: SMALL FILE; ALL: ALL files.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Data dumping action. among them, Archive: settlement; Noarchive: no settlement.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Data dump trigger time. consists of "DEFAULT_ATIME_" and a number, in days. keep it empty when Action is Noarchive.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Maximum specification for data dump files. the value needs to use the "number+measurement unit" format, and the supported units are K (KiB), M (MiB), and G (GiB).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileMaxSize = null;

        /**
         * Minimum specification of the dump file. its numeric value needs to use the "number+measurement unit" format, and the supported units are K (KiB), M (MiB), and G (GiB).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileMinSize = null;

        /**
         * Policy type.
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * Threshold range: 10-90.
         * @type {number || null}
         */
        this.ExpireThreshold = null;

        /**
         * Threshold range: 10-90.
         * @type {number || null}
         */
        this.TargetThreshold = null;

        /**
         * When a file in CFSTurbo and an external storage have the same name, whether to overwrite.

Override.

false: not overwrite (at the same time will not release hot data storage).

Default false when empty.
         * @type {boolean || null}
         */
        this.IsOverwrite = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.FileMaxSize = 'FileMaxSize' in params ? params.FileMaxSize : null;
        this.FileMinSize = 'FileMinSize' in params ? params.FileMinSize : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.ExpireThreshold = 'ExpireThreshold' in params ? params.ExpireThreshold : null;
        this.TargetThreshold = 'TargetThreshold' in params ? params.TargetThreshold : null;
        this.IsOverwrite = 'IsOverwrite' in params ? params.IsOverwrite : null;

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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
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
         * User permission. valid values: all_squash, no_all_squash, root_squash, no_root_squash. default value: root_squash.
All_squash: all accessing users (including the root user) will be mapped to anonymous users or groups.
no_all_squash: all accessing users (including the root user) retain original UID/GID information.
root_squash: maps visiting root user to anonymous user or user group. non-root user keeps original UID/GID information.
no_root_squash: has the same effect as no_all_squash. all accessing users (including the root user) retain their original UID/GID information.

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
 * DeleteCfsFileSystem response structure.
 * @class
 */
class DeleteCfsFileSystemResponse extends  AbstractModel {
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
 * DeleteDataFlow response structure.
 * @class
 */
class DeleteDataFlowResponse extends  AbstractModel {
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
 * Snapshot operation log
 * @class
 */
class SnapshotOperateLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type
CreateCfsSnapshot: create a snapshot.
DeleteCfsSnapshot: delete snapshot.
CreateCfsFileSystem: create a file system.
UpdateCfsSnapshotAttribute: update snapshot.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Operation time
         * @type {string || null}
         */
        this.ActionTime = null;

        /**
         * Operation name.
CreateCfsSnapshot
DeleteCfsSnapshot
CreateCfsFileSystem
UpdateCfsSnapshotAttribute
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * Operator uin.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 1- task in progress; 2- task success; 3- task failure.
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
 * Lifecycle task.
 * @class
 */
class LifecycleDataTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task status.
init: pending.
running: executing, finished: completed.
failed: failure.
Stopping: stopping, stopped: stopped.
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Task end time.
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Total files.
         * @type {number || null}
         */
        this.FileTotalCount = null;

        /**
         * Number of successfully processed files.
         * @type {number || null}
         */
        this.FileSuccessedCount = null;

        /**
         * Number of failed files.
         * @type {number || null}
         */
        this.FileFailedCount = null;

        /**
         * File capacity, in Byte.


         * @type {number || null}
         */
        this.FileTotalSize = null;

        /**
         * Processed file capacity, in Byte.


         * @type {number || null}
         */
        this.FileSuccessedSize = null;

        /**
         * Capacity of processed failed files, in Byte.

         * @type {number || null}
         */
        this.FileFailedSize = null;

        /**
         * Total file list.
         * @type {string || null}
         */
        this.FileTotalList = null;

        /**
         * List of successful files.
         * @type {string || null}
         */
        this.FileSuccessedList = null;

        /**
         * List of failed files.
         * @type {string || null}
         */
        this.FileFailedList = null;

        /**
         * FileSystemId
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task path.
         * @type {string || null}
         */
        this.TaskPath = null;

        /**
         * Task type, archive: indicates settlement task, restore: indicates pull task.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Data flow Id.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * When a file in CFSTurbo and an external storage have the same name, whether to overwrite.

Override.

false: not overwrite (at the same time, it does not release hot data storage).
Default false when empty.
         * @type {boolean || null}
         */
        this.IsOverwrite = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.FileTotalCount = 'FileTotalCount' in params ? params.FileTotalCount : null;
        this.FileSuccessedCount = 'FileSuccessedCount' in params ? params.FileSuccessedCount : null;
        this.FileFailedCount = 'FileFailedCount' in params ? params.FileFailedCount : null;
        this.FileTotalSize = 'FileTotalSize' in params ? params.FileTotalSize : null;
        this.FileSuccessedSize = 'FileSuccessedSize' in params ? params.FileSuccessedSize : null;
        this.FileFailedSize = 'FileFailedSize' in params ? params.FileFailedSize : null;
        this.FileTotalList = 'FileTotalList' in params ? params.FileTotalList : null;
        this.FileSuccessedList = 'FileSuccessedList' in params ? params.FileSuccessedList : null;
        this.FileFailedList = 'FileFailedList' in params ? params.FileFailedList : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskPath = 'TaskPath' in params ? params.TaskPath : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.IsOverwrite = 'IsOverwrite' in params ? params.IsOverwrite : null;

    }
}

/**
 * DescribeLifecyclePolicies response structure.
 * @class
 */
class DescribeLifecyclePoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number of the list.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of lifecycle management policies per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of lifecycle management policies.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Lifecycle management policy list.
         * @type {Array.<LifecyclePolicy> || null}
         */
        this.LifecyclePolicies = null;

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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.LifecyclePolicies) {
            this.LifecyclePolicies = new Array();
            for (let z in params.LifecyclePolicies) {
                let obj = new LifecyclePolicy();
                obj.deserialize(params.LifecyclePolicies[z]);
                this.LifecyclePolicies.push(obj);
            }
        }
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
         * Used capacity of the file system, in Byte.
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * File system space limit, in GiB.
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
         * File system protocol type. Valid values: NFS, CIFS, and TURBO.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Storage type. HP: high-performance; SD: standard; TP: high-performance Turbo; TB: standard Turbo; THP: throughput.
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
         * Is the file system encrypted. true: encrypted. false: non-encrypted.
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
         * Upper limit of the file system throughput, in MiB/s. The upper limit is determined based on the current storage used of the file system, bound storage resource packages, and throughput resource packages.
         * @type {number || null}
         */
        this.BandwidthLimit = null;

        /**
         * Snapshot policy associated with the file system.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * File system processes snapshot status, snapping: in snapshot, normal: in normal status.
         * @type {string || null}
         */
        this.SnapStatus = null;

        /**
         * Upper limit of file system capacity.
Unit: GiB.
         * @type {number || null}
         */
        this.Capacity = null;

        /**
         * File system tag list
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Status of file system lifecycle management.
NotAvailable: unavailable.
Available.
         * @type {string || null}
         */
        this.TieringState = null;

        /**
         * Layered storage detail.
         * @type {TieringDetailInfo || null}
         */
        this.TieringDetail = null;

        /**
         * File system auto scale-out policy.
         * @type {AutoScaleUpRule || null}
         */
        this.AutoScaleUpRule = null;

        /**
         * File System Version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Additional performance info.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ExstraPerformanceInfo> || null}
         */
        this.ExstraPerformanceInfo = null;

        /**
         * basic: standard version metadata type.
enhanced: additional metadata type.
         * @type {string || null}
         */
        this.MetaType = null;

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
        this.Version = 'Version' in params ? params.Version : null;

        if (params.ExstraPerformanceInfo) {
            this.ExstraPerformanceInfo = new Array();
            for (let z in params.ExstraPerformanceInfo) {
                let obj = new ExstraPerformanceInfo();
                obj.deserialize(params.ExstraPerformanceInfo[z]);
                this.ExstraPerformanceInfo.push(obj);
            }
        }
        this.MetaType = 'MetaType' in params ? params.MetaType : null;

    }
}

/**
 * DescribeDataFlow request structure.
 * @class
 */
class DescribeDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Data flow ID, returned by creating a data flow.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * Number of query return values. it is 20 by default, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * File system version; version number: v1.5, v3.0, v3.1, v4.0.
         * @type {string || null}
         */
        this.CfsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CfsVersion = 'CfsVersion' in params ? params.CfsVersion : null;

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
 * Auto scale-out rule.
 * @class
 */
class AutoScaleUpRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enable auto scale-out policy, disable.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Cluster usage percentage. start expansion when reaching this value. value range: [10-90].
         * @type {number || null}
         */
        this.ScaleThreshold = null;

        /**
         * Used capacity to total clusters ratio after expansion. value range: [10-90].
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
         * Snapshot ID, which can be obtained by querying through the [DescribeCfsSnapshots](https://www.tencentcloud.com/document/api/582/80206?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Snapshot ID of the file system snapshot that needs to be deleted. specify either the snapshot ID or the ID list, at least one is required.
Snapshot ID, which can be obtained by querying through the [DescribeCfsSnapshots](https://www.tencentcloud.com/document/api/582/80206?from_cn_redirect=1) api.
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
         * File system ID. obtain it by querying the file system interface (https://www.tencentcloud.com/document/api/582/38170?from_cn_redirect=1).
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Offset paging number, defaults to 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit page size. default value 10. maximum value 100.
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Version control - protocol details.
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
         * Protocol type. optional values: NFS, CIFS, and TURBO.
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
         * Offset paging number. default 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit page size. default value 10.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * User-defined name
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
         * Permission group ID. pgroupbasic is the default permission group. obtain through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/product/582/38157?from_cn_redirect=1) to query the permission group list.
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system protocol type. valid values: NFS, CIFS, and TURBO. if left blank, NFS by default. the TURBO series must select TURBO. NFS and CIFS are not supported.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Storage type of the file system. Valid values: `SD` (Standard), `HP` (High-Performance), `TB` (Standard Turbo), and `TP` (High-Performance Turbo). Default value: `SD`.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Private network (VPC) ID. if the network type is VPC, this field must be specified. obtain it by querying the private network interface.
[DescribeVpcs](https://www.tencentcloud.com/document/product/215/15778?from_cn_redirect=1)
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. this field must be specified if the network type is VPC. obtain through the api for querying subnets.
[DescribeSubnets](https://www.tencentcloud.com/document/product/215/15784?from_cn_redirect=1)
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
         * Cloud connect network ID. this field must be specified if the network type is CCN. obtain it by querying the CCN list through the api.
[DescribeCcns](https://www.tencentcloud.com/document/product/215/19199?from_cn_redirect=1)

         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * CCN IP range used by the CFS (required if the network type is CCN), which cannot conflict with other IP ranges bound in CCN
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * File system capacity, required for the turbo series, in GiB. turbo standard type in GB, starting from 20 TiB (20480 GiB); scaling increment 10 TiB (10240 GiB). turbo performance type starts from 10 TiB (10240 GiB); capacity expansion step 10 TiB (10240 GiB).
         * @type {number || null}
         */
        this.Capacity = null;

        /**
         * File system snapshot ID. this parameter can be obtained by querying the snapshot list.
[DescribeCfsSnapshots](https://www.tencentcloud.com/document/product/582/80206?from_cn_redirect=1)
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Scheduled snapshot policy ID, which can be obtained by querying the snapshot policy information.
[DescribeAutoSnapshotPolicies](https://www.tencentcloud.com/document/product/582/38157?from_cn_redirect=1)
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Whether default expansion is enabled. only turbo file storage supports this feature.
         * @type {boolean || null}
         */
        this.EnableAutoScaleUp = null;

        /**
         * v1.5: create a standard edition general file system.
v3.1: create an enhanced general file system.
Description: the enhanced universal system requires enabling the allowlist to use. if needed, submit a ticket to contact us.
         * @type {string || null}
         */
        this.CfsVersion = null;

        /**
         * turbo file system metadata attribute.
basic: creates metadata of the standard type.
Enhanced: creates enhanced metadata.
         * @type {string || null}
         */
        this.MetaType = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.EnableAutoScaleUp = 'EnableAutoScaleUp' in params ? params.EnableAutoScaleUp : null;
        this.CfsVersion = 'CfsVersion' in params ? params.CfsVersion : null;
        this.MetaType = 'MetaType' in params ? params.MetaType : null;

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
         * <br><li> taskId Filters by [migration task id]. type: String required: no<br></li><br><li> taskName does fuzzy search filtering by [migration task name]. type: String required: no the maximum number of Filters per request is 10, and the maximum number of Filter.Values is 100.</li>.
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
         * All_squash: all accessing users (including the root user) will be mapped to anonymous users or groups.
no_all_squash: all accessing users (including the root user) retain original UID/GID information.
root_squash: maps visiting root user to anonymous user or user group. non-root user keeps original UID/GID information.
no_root_squash: has the same effect as no_all_squash. all accessing users (including the root user) retain their original UID/GID information.

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
         * List of file system ids to be unbound, separated by ",". file system ids can be obtained by querying the file system list through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.FileSystemIds = null;

        /**
         * Unbound snapshot policy ID, which can be obtained by querying through the [DescribeAutoSnapshotPolicies](https://www.tencentcloud.com/document/api/582/80208?from_cn_redirect=1) api.
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
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Value after purchasing additional performance.
 * @class
 */
class ExstraPerformanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fixed: final value is fixed.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Additional purchase CFS performance value in MB/s.
         * @type {number || null}
         */
        this.Performance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Performance = 'Performance' in params ? params.Performance : null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * File system ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Paging start position, defaults to 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page length. default value 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter criteria
SnapshotId - Array of String - required: no - (filter condition) filter by snapshot ID.
<br>SnapshotName - Array of String - required: no - (filter condition) filter by snapshot name.
<br>FileSystemId - Array of String - required: no - (filter condition) filter by file system ID.
<br>FsName - Array of String - required: no - (filtering conditions) filters file system names.
<br>Status - Array of String - required: no - (filter criteria) filter by snapshot Status. Status classification: creating: under creation | available: running | deleting: deleting | rollbacking_new: being created for new file system | create-failed: creation failed.
<br>tag-key - Array of String - required: no - (filter condition) filter by tag key.
<br>tag:tag-key - Array of String - required: no - (filter condition) filter by tag key-value pair. replace tag-key with a specific tag key.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sort by creation time to obtain value.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Sorting order; ascending or descending order.
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
 * UpdateAutoSnapshotPolicy request structure.
 * @class
 */
class UpdateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unbound snapshot policy ID, which can be obtained by querying through the [DescribeAutoSnapshotPolicies](https://www.tencentcloud.com/document/api/582/80208?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * Snapshot policy name, no more than 64 characters.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Snapshot periodic backup, monday to sunday. 1 represents monday, 7 represents sunday. choose one from three: DayOfMonth, IntervalDays.
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * The hour of a day at which to regularly back up the snapshot
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * Snapshot retention days.
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * Whether the periodic snapshot function is activated; 1 indicates activate, 0 indicates inactive.
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * Scheduled snapshot creates a snapshot on the day of the month. this parameter is used in combination with DayOfWeek and IntervalDays. choose one of the three.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * Periodically execute snapshots at interval days. this parameter is used in combination with DayOfWeek and DayOfMonth. choose one of the three.
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
         * File system ID. this feature requires allowlist for usage. please [submit a ticket](https://console.cloud.tencent.com/workorder/category?from=ticket-tab) to apply. currently only common standard file system supports setting the storage capacity limit. this parameter can be obtained by [querying the file system](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1).
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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * File system size, in Byte.
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * Storage type. HP: high-performance; SD: standard; TP: high-performance Turbo; TB: standard Turbo; THP: throughput.
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * Total snapshot size in GiB.
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
         * <P>Snapshot creation time</p>.
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * <P>Snapshot name</p>.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * <p>Snapshot ID.</p>.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * <P>Snapshot status: creating - creating; available - running; deleting - deleting; rollbacking-new - creating new file system; create-failed - creation failed.</p>.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <P>Region name</p>.
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * <p>File system ID</p>.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * <p>Snapshot size</p><p>unit: MiB</p>.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * <P>Retention duration days</p>.
         * @type {number || null}
         */
        this.AliveDay = null;

        /**
         * <P>Snapshot progress percentage. 1 means 1%. value range: 1-100.</p>.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * <p>Account ID.</p>.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <P>Snapshot deletion time</p>.
         * @type {string || null}
         */
        this.DeleteTime = null;

        /**
         * <P>File system name</p>.
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * <P>Snapshot tag.</p>.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Snapshot type. general indicates a snapshot of the general series. turbo indicates a snapshot of the turbo series.</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotType = null;

        /**
         * <P>Snapshot time reflects the data of the corresponding file system at a certain moment.</p>.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotTime = null;

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
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;

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
         * Mount point status, including creating: under creation; available: running.
Deleting: deleting.
Creation failed.
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * Network type, including VPC, CCN.
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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * File system ID. obtain it by querying the file system interface (https://www.tencentcloud.com/document/api/582/38170?from_cn_redirect=1).
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
         * Migration task ID.
         * @type {string || null}
         */
        this.TaskId = null;

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
         * Permission group ID, which can be obtained through the api [DescribeCfsPGroups](https://www.tencentcloud.com/document/api/582/38157?from_cn_redirect=1).
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * Permission group name, which can contain 1-64 Chinese characters, letters, numbers, underscores, or dashes
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Permission group description, 1-255 characters. Name and Descinfo cannot be empty at the same time.
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
 * DeleteDataFlow request structure.
 * @class
 */
class DeleteDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow manage ID.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * File system ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
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
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * Absolute path of the directory associated with the lifecycle management policy.
 * @class
 */
class PathInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Directory absolute path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Data flow Id.
         * @type {string || null}
         */
        this.DataFlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;

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
         * Snapshot ID, which can be obtained by querying through the [DescribeCfsSnapshots](https://www.tencentcloud.com/document/api/582/80206?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * File system snapshot name, must fill in either this or AliveDays. snapshot name supports no more than 64 characters in length, supports chinese, numbers, _, and -.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * File system snapshot retention days. either this or SnapshotName must be specified. if the original setting has permanent retention attribute, it is not allowed to be modified to short-term validity.
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
 * ModifyLifecyclePolicy request structure.
 * @class
 */
class ModifyLifecyclePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy name, a combination of chinese/english/digits/underscores/hyphens, no more than 64 characters.
         * @type {string || null}
         */
        this.LifecyclePolicyName = null;

        /**
         * List of management rules associated with the lifecycle management policy.
         * @type {Array.<LifecycleRule> || null}
         */
        this.LifecycleRules = null;

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyName = 'LifecyclePolicyName' in params ? params.LifecyclePolicyName : null;

        if (params.LifecycleRules) {
            this.LifecycleRules = new Array();
            for (let z in params.LifecycleRules) {
                let obj = new LifecycleRule();
                obj.deserialize(params.LifecycleRules[z]);
                this.LifecycleRules.push(obj);
            }
        }
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;

    }
}

/**
 * DeleteLifecyclePolicy request structure.
 * @class
 */
class DeleteLifecyclePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy ID.
         * @type {string || null}
         */
        this.LifecyclePolicyID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyID = 'LifecyclePolicyID' in params ? params.LifecyclePolicyID : null;

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
         * <p>Infrequent access storage capacity</p><p>measurement unit: Byte, B, Byte</p>.
         * @type {number || null}
         */
        this.TieringSizeInBytes = null;

        /**
         * <p>Cold storage capacity</p><p>measurement unit: Byte, B, Byte</p>.
         * @type {number || null}
         */
        this.SecondaryTieringSizeInBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TieringSizeInBytes = 'TieringSizeInBytes' in params ? params.TieringSizeInBytes : null;
        this.SecondaryTieringSizeInBytes = 'SecondaryTieringSizeInBytes' in params ? params.SecondaryTieringSizeInBytes : null;

    }
}

/**
 * CreateLifecyclePolicy request structure.
 * @class
 */
class CreateLifecyclePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lifecycle management policy name, a combination of chinese/english/digits/underscores/hyphens, no more than 64 characters.
         * @type {string || null}
         */
        this.LifecyclePolicyName = null;

        /**
         * List of management rules associated with the lifecycle management policy.
         * @type {Array.<LifecycleRule> || null}
         */
        this.LifecycleRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecyclePolicyName = 'LifecyclePolicyName' in params ? params.LifecyclePolicyName : null;

        if (params.LifecycleRules) {
            this.LifecycleRules = new Array();
            for (let z in params.LifecycleRules) {
                let obj = new LifecycleRule();
                obj.deserialize(params.LifecycleRules[z]);
                this.LifecycleRules.push(obj);
            }
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
         * Migration status. 0: completed; 1: creating; 2: running; 3: terminating; 4: terminated; 5: creation failed; 6: running failure; 7: ending; 8: deleting; 9: waiting.
         * @type {number || null}
         */
        this.Status = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
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
         * Migration task Id.
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
 * ModifyDataFlow request structure.
 * @class
 */
class ModifyDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data flow manage ID, obtained through the api for querying data flow.
         * @type {string || null}
         */
        this.DataFlowId = null;

        /**
         * File system ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Data flow name, supports no more than 64 characters in length, supports chinese, numbers, _, and -.
         * @type {string || null}
         */
        this.DataFlowName = null;

        /**
         * Key ID.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * key.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Topic Parameter used by KafkaConsumer during consumption
         * @type {string || null}
         */
        this.UserKafkaTopic = null;

        /**
         * Service address.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Kafka consuming user password.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Metadata incremental update switch; 1 enables, 0 disables.
         * @type {number || null}
         */
        this.AutoRefresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataFlowId = 'DataFlowId' in params ? params.DataFlowId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.DataFlowName = 'DataFlowName' in params ? params.DataFlowName : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.UserKafkaTopic = 'UserKafkaTopic' in params ? params.UserKafkaTopic : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.AutoRefresh = 'AutoRefresh' in params ? params.AutoRefresh : null;

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
         * Snapshot repeat time point. value range: 0-23 hr.
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * Policy name, limited to 64 characters, only supports input of chinese, letters, numbers, _, or -.
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Snapshot repeat date, monday to sunday. 1 represents monday, 7 represents sunday. choose one from three: DayOfMonth, IntervalDays.
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * Specifies the snapshot retention duration in days. the default value is 0 (permanent).
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * Snapshot monthly recurrence, select a day from the 1st to the 31st of each month, and a snapshot will be automatically created on that day. for example, 1 represents the 1st. choose one of the three: DayOfWeek, IntervalDays.
         * @type {string || null}
         */
        this.DayOfMonth = null;

        /**
         * Interval days. choose one of the three with DayOfWeek and DayOfMonth.
         * @type {number || null}
         */
        this.IntervalDays = null;

        /**
         * Snapshot policy tag.
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
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.DayOfMonth = 'DayOfMonth' in params ? params.DayOfMonth : null;
        this.IntervalDays = 'IntervalDays' in params ? params.IntervalDays : null;

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
 * CreateDataFlow request structure.
 * @class
 */
class CreateDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID, which can be obtained by querying the file system through the [DescribeCfsFileSystems](https://www.tencentcloud.com/document/product/582/38170?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * Source data type; includes S3_COS, S3_L5.
         * @type {string || null}
         */
        this.SourceStorageType = null;

        /**
         * Source storage address.
         * @type {string || null}
         */
        this.SourceStorageAddress = null;

        /**
         * Source path.
         * @type {string || null}
         */
        this.SourcePath = null;

        /**
         * Target path in the file system.
         * @type {string || null}
         */
        this.TargetPath = null;

        /**
         * Key ID.
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * key.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Data flow name, supports no more than 64 characters in length, supports chinese, numbers, _, and -.
         * @type {string || null}
         */
        this.DataFlowName = null;

        /**
         * 0: disable auto-update  1: enable auto-update.
         * @type {number || null}
         */
        this.AutoRefresh = null;

        /**
         * Topic Parameter used by KafkaConsumer during consumption
         * @type {string || null}
         */
        this.UserKafkaTopic = null;

        /**
         * 	Service address example value: kafkaconsumer-ap-beijing.cls.tencentyun.com:9095.
         * @type {string || null}
         */
        this.ServerAddr = null;

        /**
         * Kafka consuming user name. example value: name.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Kafka consuming user password. default ${SecretId}#${SecretKey}.
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SourceStorageType = 'SourceStorageType' in params ? params.SourceStorageType : null;
        this.SourceStorageAddress = 'SourceStorageAddress' in params ? params.SourceStorageAddress : null;
        this.SourcePath = 'SourcePath' in params ? params.SourcePath : null;
        this.TargetPath = 'TargetPath' in params ? params.TargetPath : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.DataFlowName = 'DataFlowName' in params ? params.DataFlowName : null;
        this.AutoRefresh = 'AutoRefresh' in params ? params.AutoRefresh : null;
        this.UserKafkaTopic = 'UserKafkaTopic' in params ? params.UserKafkaTopic : null;
        this.ServerAddr = 'ServerAddr' in params ? params.ServerAddr : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeDataFlow response structure.
 * @class
 */
class DescribeDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of queries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * None.
         * @type {Array.<DataFlowInfo> || null}
         */
        this.DataFlows = null;

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

        if (params.DataFlows) {
            this.DataFlows = new Array();
            for (let z in params.DataFlows) {
                let obj = new DataFlowInfo();
                obj.deserialize(params.DataFlows[z]);
                this.DataFlows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DoDirectoryOperation request structure.
 * @class
 */
class DoDirectoryOperationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File system ID. currently, only Turbo series file systems support calling this api. general series file systems (including enhanced) do not support calling.
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * create a directory, equivalent to mkdir.
check: confirm the existence of the directory, equivalent to stat.
move: rename a file or directory, equivalent to mv.
         * @type {string || null}
         */
        this.OpetationType = null;

        /**
         * Absolute path of the directory. recursive creation is enabled by default (if the directory contains non-existent subdirectories, create the corresponding subdirectory first).
         * @type {string || null}
         */
        this.DirectoryPath = null;

        /**
         * Permission to create directory. if not specified, it defaults to 0755. if OperationType is check, this value is meaningless.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * The destination directory name for the mv operation. the path must start with /cfs/.
         * @type {string || null}
         */
        this.DestPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.OpetationType = 'OpetationType' in params ? params.OpetationType : null;
        this.DirectoryPath = 'DirectoryPath' in params ? params.DirectoryPath : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.DestPath = 'DestPath' in params ? params.DestPath : null;

    }
}

module.exports = {
    CreateMigrationTaskRequest: CreateMigrationTaskRequest,
    ScaleUpFileSystemResponse: ScaleUpFileSystemResponse,
    SnapshotStatistics: SnapshotStatistics,
    CreateLifecycleDataTaskRequest: CreateLifecycleDataTaskRequest,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    ModifyDataFlowResponse: ModifyDataFlowResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DescribeSnapshotOperationLogsRequest: DescribeSnapshotOperationLogsRequest,
    CreateLifecyclePolicyDownloadTaskRequest: CreateLifecyclePolicyDownloadTaskRequest,
    MigrationTaskInfo: MigrationTaskInfo,
    StopLifecycleDataTaskRequest: StopLifecycleDataTaskRequest,
    FileSystemClient: FileSystemClient,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateLifecycleDataTaskResponse: CreateLifecycleDataTaskResponse,
    ApplyPathLifecyclePolicyRequest: ApplyPathLifecyclePolicyRequest,
    BindAutoSnapshotPolicyRequest: BindAutoSnapshotPolicyRequest,
    ModifyFileSystemAutoScaleUpRuleRequest: ModifyFileSystemAutoScaleUpRuleRequest,
    ScaleUpFileSystemRequest: ScaleUpFileSystemRequest,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DescribeMigrationTasksResponse: DescribeMigrationTasksResponse,
    DescribeAutoSnapshotPoliciesRequest: DescribeAutoSnapshotPoliciesRequest,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    CreateDataFlowResponse: CreateDataFlowResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    AutoSnapshotPolicyInfo: AutoSnapshotPolicyInfo,
    CreateLifecyclePolicyDownloadTaskResponse: CreateLifecyclePolicyDownloadTaskResponse,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    DoDirectoryOperationResponse: DoDirectoryOperationResponse,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DescribeLifecyclePoliciesRequest: DescribeLifecyclePoliciesRequest,
    DeleteAutoSnapshotPolicyRequest: DeleteAutoSnapshotPolicyRequest,
    CreateLifecyclePolicyResponse: CreateLifecyclePolicyResponse,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    StopLifecycleDataTaskResponse: StopLifecycleDataTaskResponse,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    DeleteCfsSnapshotResponse: DeleteCfsSnapshotResponse,
    DescribeCfsFileSystemClientsResponse: DescribeCfsFileSystemClientsResponse,
    DescribeLifecycleDataTaskResponse: DescribeLifecycleDataTaskResponse,
    ModifyLifecyclePolicyResponse: ModifyLifecyclePolicyResponse,
    CreateCfsSnapshotRequest: CreateCfsSnapshotRequest,
    DescribeBucketListRequest: DescribeBucketListRequest,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    ApplyPathLifecyclePolicyResponse: ApplyPathLifecyclePolicyResponse,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    DeleteMigrationTaskResponse: DeleteMigrationTaskResponse,
    DescribeLifecycleDataTaskRequest: DescribeLifecycleDataTaskRequest,
    DescribeSnapshotOperationLogsResponse: DescribeSnapshotOperationLogsResponse,
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    DeleteLifecyclePolicyResponse: DeleteLifecyclePolicyResponse,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    CheckResult: CheckResult,
    DeleteMigrationTaskRequest: DeleteMigrationTaskRequest,
    PGroup: PGroup,
    CreateAutoSnapshotPolicyResponse: CreateAutoSnapshotPolicyResponse,
    ModifyFileSystemAutoScaleUpRuleResponse: ModifyFileSystemAutoScaleUpRuleResponse,
    DataFlowInfo: DataFlowInfo,
    AvailableType: AvailableType,
    LifecyclePolicy: LifecyclePolicy,
    CreateCfsSnapshotResponse: CreateCfsSnapshotResponse,
    LifecycleRule: LifecycleRule,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    BucketInfo: BucketInfo,
    DeleteDataFlowResponse: DeleteDataFlowResponse,
    SnapshotOperateLog: SnapshotOperateLog,
    LifecycleDataTaskInfo: LifecycleDataTaskInfo,
    DescribeLifecyclePoliciesResponse: DescribeLifecyclePoliciesResponse,
    FileSystemInfo: FileSystemInfo,
    DescribeDataFlowRequest: DescribeDataFlowRequest,
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
    PGroupRuleInfo: PGroupRuleInfo,
    Filter: Filter,
    UnbindAutoSnapshotPolicyRequest: UnbindAutoSnapshotPolicyRequest,
    UnbindAutoSnapshotPolicyResponse: UnbindAutoSnapshotPolicyResponse,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    ExstraPerformanceInfo: ExstraPerformanceInfo,
    BindAutoSnapshotPolicyResponse: BindAutoSnapshotPolicyResponse,
    DescribeCfsSnapshotsRequest: DescribeCfsSnapshotsRequest,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    UpdateAutoSnapshotPolicyRequest: UpdateAutoSnapshotPolicyRequest,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,
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
    DeleteDataFlowRequest: DeleteDataFlowRequest,
    PathInfo: PathInfo,
    TagInfo: TagInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    UpdateCfsSnapshotAttributeRequest: UpdateCfsSnapshotAttributeRequest,
    ModifyLifecyclePolicyRequest: ModifyLifecyclePolicyRequest,
    DeleteLifecyclePolicyRequest: DeleteLifecyclePolicyRequest,
    TieringDetailInfo: TieringDetailInfo,
    CreateLifecyclePolicyRequest: CreateLifecyclePolicyRequest,
    PGroupInfo: PGroupInfo,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    StopMigrationTaskResponse: StopMigrationTaskResponse,
    DescribeCfsSnapshotsResponse: DescribeCfsSnapshotsResponse,
    StopMigrationTaskRequest: StopMigrationTaskRequest,
    DescribeAutoSnapshotPoliciesResponse: DescribeAutoSnapshotPoliciesResponse,
    ModifyDataFlowRequest: ModifyDataFlowRequest,
    DescribeCfsSnapshotOverviewRequest: DescribeCfsSnapshotOverviewRequest,
    CreateAutoSnapshotPolicyRequest: CreateAutoSnapshotPolicyRequest,
    CreateDataFlowRequest: CreateDataFlowRequest,
    DescribeDataFlowResponse: DescribeDataFlowResponse,
    DoDirectoryOperationRequest: DoDirectoryOperationRequest,

}
